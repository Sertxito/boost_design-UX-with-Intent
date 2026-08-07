#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { installHallmark } from "./install-hallmark.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const target = process.cwd();
const force = process.argv.includes("--force");
const noHallmark = process.argv.includes("--no-hallmark");

const COPY_ITEMS = [
  ".github/copilot-instructions.md",
  "agents",
  "instructions",
  "skills",
  "specs",
  "templates",
  "examples",
  "evals",
  "docs/architecture",
  "docs/quality",
  "docs/design-tokens",
  "prompts"
];

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);

  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
    return;
  }

  const parent = path.dirname(dest);
  if (!fs.existsSync(parent)) {
    fs.mkdirSync(parent, { recursive: true });
  }

  if (fs.existsSync(dest) && !force) {
    console.log(`[skip] ${path.relative(target, dest)} (already exists)`);
    return;
  }

  fs.copyFileSync(src, dest);
  console.log(`[copy] ${path.relative(target, dest)}`);
}

console.log("BoostDesign setup started...");
console.log(`Source: ${root}`);
console.log(`Target: ${target}`);

for (const item of COPY_ITEMS) {
  const src = path.join(root, item);
  const dest = path.join(target, item);

  if (!fs.existsSync(src)) {
    console.log(`[warn] Missing source item: ${item}`);
    continue;
  }

  copyRecursive(src, dest);
}

if (!noHallmark) {
  installHallmark({ source: "init" });
} else {
  console.log("[skip] Hallmark installation skipped (--no-hallmark)");
}

console.log("\nDone.");
console.log("Next steps:");
console.log("1) Open VS Code in this project");
console.log("2) Open Copilot Chat");
console.log("3) Run: @ux-ui-expert audita mi proyecto");
