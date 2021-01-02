#!/usr/bin/env node
import ask from './cli.js';

function askName() {
  console.log('Welcome to the Brain Games!');
  const name = ask('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export default askName();
