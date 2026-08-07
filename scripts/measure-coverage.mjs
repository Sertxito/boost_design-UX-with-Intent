#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const target = process.cwd();
const args = process.argv.slice(2);
const minFlagIndex = args.indexOf("--min");
const minScore = minFlagIndex >= 0 ? Number(args[minFlagIndex + 1]) : 100;

if (!Number.isFinite(minScore) || minScore < 0 || minScore > 100) {
  console.error("Invalid --min value. Use a number between 0 and 100.");
  process.exit(2);
}

function abs(relPath) {
  return path.join(target, relPath);
}

function exists(relPath) {
  return fs.existsSync(abs(relPath));
}

function countFilesRecursive(relDir) {
  const fullDir = abs(relDir);
  if (!fs.existsSync(fullDir)) {
    return 0;
  }

  let count = 0;
  for (const entry of fs.readdirSync(fullDir, { withFileTypes: true })) {
    const childRelPath = path.join(relDir, entry.name);
    if (entry.isDirectory()) {
      count += countFilesRecursive(childRelPath);
    } else {
      count += 1;
    }
  }
  return count;
}

function readText(relPath) {
  return fs.readFileSync(abs(relPath), "utf8");
}

const metricChecks = [];

function addMetric(name, ok, details) {
  metricChecks.push({ name, ok, details });
}

addMetric("agents >= 5 files", countFilesRecursive("agents") >= 5, `found ${countFilesRecursive("agents")}`);
addMetric("instructions >= 3 files", countFilesRecursive("instructions") >= 3, `found ${countFilesRecursive("instructions")}`);
addMetric("skills >= 13 files", countFilesRecursive("skills") >= 13, `found ${countFilesRecursive("skills")}`);
addMetric("specs >= 3 files", countFilesRecursive("specs") >= 3, `found ${countFilesRecursive("specs")}`);
addMetric("templates >= 5 files", countFilesRecursive("templates") >= 5, `found ${countFilesRecursive("templates")}`);
addMetric("evals root >= 3 files", countFilesRecursive("evals") >= 9, `found ${countFilesRecursive("evals")} (including fixtures)`);
addMetric("examples >= 2 files", countFilesRecursive("examples") >= 2, `found ${countFilesRecursive("examples")}`);
addMetric("prompts >= 4 files", countFilesRecursive("prompts") >= 4, `found ${countFilesRecursive("prompts")}`);
addMetric("fixtures >= 6 files", countFilesRecursive("evals/fixtures") >= 6, `found ${countFilesRecursive("evals/fixtures")}`);
addMetric("traceability matrix exists", exists("docs/architecture/traceability-matrix.md"), "required for cross-domain mapping");
addMetric("agent interaction map exists", exists("agents/AGENT-INTERACTION.md"), "required for orchestration transparency");

if (exists("docs/architecture/traceability-matrix.md")) {
  const matrix = readText("docs/architecture/traceability-matrix.md");
  addMetric(
    "traceability status fully covered",
    !matrix.includes("| In progress |"),
    "all capability rows must be marked Covered"
  );
}

const passed = metricChecks.filter((c) => c.ok).length;
const total = metricChecks.length;
const score = Math.round((passed / Math.max(total, 1)) * 100);

const report = {
  generatedAt: new Date().toISOString(),
  threshold: minScore,
  score,
  passed,
  total,
  checks: metricChecks
};

const reportPath = abs("evals/coverage-report.json");
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

console.log("mcpee-uxdesign coverage report");
console.log(`Target: ${target}`);
for (const check of metricChecks) {
  const mark = check.ok ? "[pass]" : "[fail]";
  console.log(`${mark} ${check.name} (${check.details})`);
}
console.log(`Coverage score: ${score}% (${passed}/${total})`);
console.log(`Report: evals/coverage-report.json`);

if (score < minScore) {
  console.error(`Coverage gate failed: score ${score}% is below threshold ${minScore}%.`);
  process.exit(1);
}

console.log("Coverage gate passed.");
