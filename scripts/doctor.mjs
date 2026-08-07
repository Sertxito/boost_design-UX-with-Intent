#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const target = process.cwd();

const REQUIRED_PATHS = [
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

function existsAsAny(entryPath) {
  const fullPath = path.join(target, entryPath);
  return fs.existsSync(fullPath);
}

const missing = [];
for (const relPath of REQUIRED_PATHS) {
  if (!existsAsAny(relPath)) {
    missing.push(relPath);
  }
}

console.log("mcpee-uxdesign doctor");
console.log(`Target: ${target}`);
console.log("");

if (missing.length === 0) {
  console.log("Status: OK");
  console.log("All required UX/UI artifacts are present.");
  process.exit(0);
}

console.log("Status: Incomplete setup");
console.log(`Missing items: ${missing.length}`);
for (const relPath of missing) {
  console.log(`- ${relPath}`);
}

console.log("");
console.log("Fix:");
console.log("Run: npx mcpee-uxdesign-init");
console.log("If files already exist and you want to overwrite:");
console.log("Run: npx mcpee-uxdesign-init --force");

process.exit(1);
