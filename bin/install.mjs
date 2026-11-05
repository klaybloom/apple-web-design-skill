#!/usr/bin/env node

import { cp, mkdir, rm, rename } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const skillName = 'fly-ui';
const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);

function usage() {
  console.log(`Install ${skillName} for Codex.

Usage:
  npx fly-ui-skill
  npx fly-ui-skill --target ~/.codex/skills/fly-ui

Options:
  --target <path>  Install to a specific skill directory.
  --help          Show this help message.
`);
}

function expandHome(inputPath) {
  if (inputPath === '~') {
    return os.homedir();
  }
  if (inputPath.startsWith('~/')) {
    return path.join(os.homedir(), inputPath.slice(2));
  }
  return inputPath;
}

function timestamp() {
  return new Date().toISOString().replace(/[-:]/g, '').replace(/\..+/, '').replace('T', '-');
}

function parseArgs() {
  if (args.includes('--help') || args.includes('-h')) {
    usage();
    process.exit(0);
  }

  const codexHome = process.env.CODEX_HOME
    ? expandHome(process.env.CODEX_HOME)
    : path.join(os.homedir(), '.codex');

  let target = path.join(codexHome, 'skills', skillName);

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === '--target') {
      const value = args[index + 1];
      if (!value) {
        throw new Error('--target requires a path');
      }
      target = expandHome(value);
      index += 1;
      continue;
    }
    throw new Error(`Unknown option: ${arg}`);
  }

  return path.resolve(target);
}

async function copySkill(target) {
  const tempTarget = `${target}.tmp-${process.pid}`;
  const backupTarget = `${target}.backup-${timestamp()}`;
  const requiredEntries = ['SKILL.md', 'agents', 'references', 'assets'];

  await rm(tempTarget, { recursive: true, force: true });
  await mkdir(tempTarget, { recursive: true });

  for (const entry of requiredEntries) {
    const source = path.join(packageRoot, entry);
    if (!existsSync(source)) {
      throw new Error(`Package is missing ${entry}`);
    }
    await cp(source, path.join(tempTarget, entry), { recursive: true });
  }

  await mkdir(path.dirname(target), { recursive: true });

  let backupCreated = false;
  if (existsSync(target)) {
    await rm(backupTarget, { recursive: true, force: true });
    await rename(target, backupTarget);
    backupCreated = true;
  }

  try {
    await rename(tempTarget, target);
  } catch (error) {
    if (backupCreated && !existsSync(target)) {
      await rename(backupTarget, target);
    }
    throw error;
  }

  console.log(`Installed ${skillName} to ${target}`);
  if (backupCreated) {
    console.log(`Previous installation moved to ${backupTarget}`);
  }
  console.log('Restart Codex if the skill list is already open.');
}

try {
  await copySkill(parseArgs());
} catch (error) {
  console.error(`Install failed: ${error.message}`);
  process.exit(1);
}
