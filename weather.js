#!/usr/bin/env node
import { parseArgs } from './helpers/args.js';

const initCli = () => {
  const args = parseArgs(process.argv);

  if (args.h) {
    // help
  }

  if (args.s) {
    // save city
  }

  if (args.t) {
    // save token
  }

  // print weather
};

initCli();
