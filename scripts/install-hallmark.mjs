#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const HALLMARK_INSTALL_CMD = "npx skills add nutlope/hallmark";

function runCommand(command, args, silent) {
  return spawnSync(command, args, {
    stdio: silent ? "pipe" : "inherit",
    shell: false,
    env: process.env
  });
}

export function installHallmark(options = {}) {
  const silent = Boolean(options.silent);
  const source = options.source || "runtime";

  if (process.env.MCPEE_SKIP_HALLMARK === "1") {
    if (!silent) {
      console.log("[skip] Hallmark installation skipped (MCPEE_SKIP_HALLMARK=1)");
    }
    return { ok: true, skipped: true };
  }

  if (!silent) {
    console.log(`[info] Installing Hallmark integration (${source})...`);
  }

  const execName = process.platform === "win32" ? "npx.cmd" : "npx";
  let result = runCommand(execName, ["skills", "add", "nutlope/hallmark"], silent);

  if (result.error || result.status !== 0) {
    result = runCommand(execName, ["-y", "skills", "add", "nutlope/hallmark"], silent);
  }

  if (!result.error && result.status === 0) {
    if (!silent) {
      console.log("[ok] Hallmark integration installed.");
    }
    return { ok: true, skipped: false };
  }

  if (!silent) {
    console.log("[warn] Could not auto-install Hallmark. You can install it manually:");
    console.log(`[warn] ${HALLMARK_INSTALL_CMD}`);
  }

  return { ok: false, skipped: false };
}

const isDirectExecution = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];

if (isDirectExecution) {
  const silent = process.argv.includes("--silent");
  installHallmark({ silent, source: "manual" });
}
