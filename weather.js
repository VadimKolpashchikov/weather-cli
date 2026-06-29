#!/usr/bin/env node
import { parseArgs } from './helpers/args.js';
import { printHelp } from './services/log.service.js';

const initCli = () => {
  const args = parseArgs(process.argv);

  if (args.h) {
    printHelp();
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
