#!/usr/bin/env node
import { ask, output } from './cli.js';

function askName() {
  output('Welcome to the Brain Games!');
  const name = ask('May I have your name? ');
  output(`Hello, ${name}!`);
  return name;
}

export default askName();
