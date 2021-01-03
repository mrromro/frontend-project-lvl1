#!/usr/bin/env node

import play from './index.js';

const gameName = process.argv[2];

import(`./games/${gameName}.js`)
  .then(
    ({ default: gameset }) => play(gameset),
    (error) => console.log(error),
  );
