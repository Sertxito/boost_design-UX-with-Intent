#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const target = process.cwd();

const REQUIRED_CORE_PATHS = [
  ".github/copilot-instructions.md",
  "agents/ux-ui-expert.agent.md",
  "agents/design-system-architect.agent.md",
  "agents/figma-design-auditor.agent.md",
  "agents/component-inventory-mapper.agent.md",
  "instructions/ux-ui-best-practices.instructions.md",
  "instructions/design-consistency.instructions.md",
  "skills/ux-audit/SKILL.md",
  "skills/design-system-generator/SKILL.md",
  "docs/design-tokens/palette.json",
  "docs/design-tokens/typography.json",
  "docs/design-tokens/tokens.json",
  "docs/design-tokens/patterns.json",
  "docs/design-tokens/accessibility.md"
];

const COVERAGE_MINIMUMS = {
  evals: 4,
  specs: 4,
  templates: 6,
  examples: 3,
  prompts: 6,
  fixtures: 10
};

function abs(relPath) {
  return path.join(target, relPath);
}

function exists(relPath) {
  return fs.existsSync(abs(relPath));
}

function readJson(relPath) {
  const fullPath = abs(relPath);
  const raw = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(raw);
}

function countFilesRecursive(relDir) {
  const fullDir = abs(relDir);
  if (!fs.existsSync(fullDir)) {
    return 0;
  }

  let count = 0;
  for (const entry of fs.readdirSync(fullDir, { withFileTypes: true })) {
    const entryPath = path.join(relDir, entry.name);
    if (entry.isDirectory()) {
      count += countFilesRecursive(entryPath);
    } else {
      count += 1;
    }
  }
  return count;
}

const checks = [];

function addCheck(name, ok, details) {
  checks.push({ name, ok, details });
}

function run() {
  const missingCore = [];
  for (const relPath of REQUIRED_CORE_PATHS) {
    if (!exists(relPath)) {
      missingCore.push(relPath);
    }
  }
  addCheck(
    "Core artifacts",
    missingCore.length === 0,
    missingCore.length === 0
      ? `All ${REQUIRED_CORE_PATHS.length} required paths exist.`
      : `Missing ${missingCore.length}: ${missingCore.join(", ")}`
  );

  let platform;
  let mcpee;
  let pkg;
  try {
    platform = readJson("platform.json");
    mcpee = readJson("mcpee.json");
    pkg = readJson("package.json");
    addCheck("JSON manifests", true, "platform.json, mcpee.json and package.json are valid JSON.");
  } catch (error) {
    addCheck("JSON manifests", false, `Invalid JSON: ${error.message}`);
  }

  if (platform) {
    const missingAgentFiles = [];
    for (const agent of platform.agents || []) {
      if (!agent.file || !exists(agent.file)) {
        missingAgentFiles.push(agent.file || "<missing agent.file>");
      }
    }
    addCheck(
      "Platform agent references",
      missingAgentFiles.length === 0,
      missingAgentFiles.length === 0
        ? `All ${(platform.agents || []).length} agent file references are valid.`
        : `Broken references: ${missingAgentFiles.join(", ")}`
    );

    const missingSkillFiles = [];
    for (const skill of platform.skills || []) {
      if (!skill.path || !exists(skill.path)) {
        missingSkillFiles.push(skill.path || "<missing skill.path>");
      }
    }
    addCheck(
      "Platform skill references",
      missingSkillFiles.length === 0,
      missingSkillFiles.length === 0
        ? `All ${(platform.skills || []).length} skill file references are valid.`
        : `Broken references: ${missingSkillFiles.join(", ")}`
    );
  }

  if (mcpee) {
    const missingCoreSkills = [];
    for (const skillPath of mcpee.coreSkillSet || []) {
      if (!exists(skillPath)) {
        missingCoreSkills.push(skillPath);
      }
    }
    addCheck(
      "Core skill set references",
      missingCoreSkills.length === 0,
      missingCoreSkills.length === 0
        ? `All ${(mcpee.coreSkillSet || []).length} core skills resolve correctly.`
        : `Broken references: ${missingCoreSkills.join(", ")}`
    );

    const hallmarkEnabled = Boolean(mcpee.integrations?.hallmark?.enabled);
    const hallmarkRequiredPaths = [
      "skills/hallmark/SKILL.md",
      "skills/hallmark/references/integration-playbook.md",
      "specs/hallmark-bridge-spec.md",
      "templates/hallmark-handoff.md",
      "examples/hallmark-to-ux-flow.md",
      "prompts/hallmark-study-bridge.prompt.md",
      "prompts/hallmark-redesign-bridge.prompt.md",
      "evals/hallmark-integration.eval.md",
      "evals/fixtures/hallmark-redesign/input.md",
      "evals/fixtures/hallmark-redesign/expected-output.json",
      "evals/fixtures/hallmark-study/input.md",
      "evals/fixtures/hallmark-study/expected-output.json"
    ];
    const missingHallmark = hallmarkRequiredPaths.filter((p) => !exists(p));
    addCheck(
      "Hallmark integration",
      !hallmarkEnabled || missingHallmark.length === 0,
      !hallmarkEnabled
        ? "Hallmark integration disabled in mcpee.json."
        : missingHallmark.length === 0
        ? "Hallmark integration artifacts are present."
        : `Missing Hallmark artifacts: ${missingHallmark.join(", ")}`
    );

    const hasAutoInstallWiring = Boolean(
      pkg?.scripts?.postinstall === "node scripts/postinstall.mjs" &&
      pkg?.scripts?.["install:hallmark"] === "node scripts/install-hallmark.mjs" &&
      exists("scripts/postinstall.mjs") &&
      exists("scripts/install-hallmark.mjs")
    );
    addCheck(
      "Hallmark auto-install wiring",
      !hallmarkEnabled || hasAutoInstallWiring,
      !hallmarkEnabled
        ? "Hallmark integration disabled in mcpee.json."
        : hasAutoInstallWiring
        ? "postinstall + install scripts for Hallmark are configured."
        : "Missing Hallmark postinstall wiring in package.json/scripts."
    );
  }

  const evalCount = countFilesRecursive("evals");
  const specCount = countFilesRecursive("specs");
  const templateCount = countFilesRecursive("templates");
  const exampleCount = countFilesRecursive("examples");
  const promptCount = countFilesRecursive("prompts");
  const fixtureCount = countFilesRecursive("evals/fixtures");

  addCheck(
    "Coverage: evals",
    evalCount >= COVERAGE_MINIMUMS.evals,
    `Found ${evalCount}; required >= ${COVERAGE_MINIMUMS.evals}.`
  );
  addCheck(
    "Coverage: specs",
    specCount >= COVERAGE_MINIMUMS.specs,
    `Found ${specCount}; required >= ${COVERAGE_MINIMUMS.specs}.`
  );
  addCheck(
    "Coverage: templates",
    templateCount >= COVERAGE_MINIMUMS.templates,
    `Found ${templateCount}; required >= ${COVERAGE_MINIMUMS.templates}.`
  );
  addCheck(
    "Coverage: examples",
    exampleCount >= COVERAGE_MINIMUMS.examples,
    `Found ${exampleCount}; required >= ${COVERAGE_MINIMUMS.examples}.`
  );
  addCheck(
    "Coverage: prompts",
    promptCount >= COVERAGE_MINIMUMS.prompts,
    `Found ${promptCount}; required >= ${COVERAGE_MINIMUMS.prompts}.`
  );
  addCheck(
    "Coverage: fixtures",
    fixtureCount >= COVERAGE_MINIMUMS.fixtures,
    `Found ${fixtureCount}; required >= ${COVERAGE_MINIMUMS.fixtures}.`
  );

  addCheck(
    "Traceability matrix",
    exists("docs/architecture/traceability-matrix.md"),
    exists("docs/architecture/traceability-matrix.md")
      ? "Traceability matrix present."
      : "Missing docs/architecture/traceability-matrix.md"
  );
  if (exists("docs/architecture/traceability-matrix.md")) {
    const matrix = fs.readFileSync(abs("docs/architecture/traceability-matrix.md"), "utf8");
    addCheck(
      "Traceability status",
      !matrix.includes("| In progress |"),
      !matrix.includes("| In progress |")
        ? "All capability rows are marked Covered."
        : "Some capability rows are still marked In progress."
    );
  }
  addCheck(
    "Agent interaction map",
    exists("agents/AGENT-INTERACTION.md"),
    exists("agents/AGENT-INTERACTION.md")
      ? "Agent interaction model present."
      : "Missing agents/AGENT-INTERACTION.md"
  );
  addCheck(
    "Release checklist",
    exists("docs/quality/release-checklist.md"),
    exists("docs/quality/release-checklist.md")
      ? "Release checklist present."
      : "Missing docs/quality/release-checklist.md"
  );

  const passed = checks.filter((c) => c.ok).length;
  const total = checks.length;
  const score = Math.round((passed / Math.max(total, 1)) * 100);
  const failedChecks = checks.filter((c) => !c.ok);

  console.log("mcpee-uxdesign doctor");
  console.log(`Target: ${target}`);
  console.log("");
  for (const check of checks) {
    const mark = check.ok ? "[pass]" : "[fail]";
    console.log(`${mark} ${check.name}`);
    console.log(`       ${check.details}`);
  }
  console.log("");
  console.log(`Coverage score: ${score}% (${passed}/${total} checks passed)`);

  if (failedChecks.length === 0) {
    console.log("Status: OK");
    process.exit(0);
  }

  console.log("Status: Incomplete setup");
  console.log(`Failed checks: ${failedChecks.length}`);
  console.log("Fix baseline setup with:");
  console.log("- npx mcpee-uxdesign-init");
  console.log("- npx mcpee-uxdesign-doctor");
  process.exit(1);
}

run();
