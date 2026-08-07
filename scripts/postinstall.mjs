#!/usr/bin/env node

import { installHallmark } from "./install-hallmark.mjs";

const result = installHallmark({
  silent: process.env.CI === "true",
  source: "postinstall"
});

if (!result.ok && process.env.CI !== "true") {
  console.log("[info] Continuing install without blocking. Hallmark remains optional.");
}

process.exit(0);
