#!/usr/bin/env node

import name from './brain-games.js';
import ask from './cli.js';
import { solver } from './index.js';

function getRandomInt(min = 0, max = 100) {
  const range = max + 1 - min;
  const seed = Math.random();
  return Math.floor(min + seed * range);
}

function isEvenSolution(num) {
  return Math.abs(num) % 2 === 0 ? 'yes' : 'no';
}

function quiz(count = 3) {
  for (let current = 0; current < count; current += 1) {
    const num = getRandomInt();
    const answer = ask(`Question: ${num} `);
    const stageResult = solver(isEvenSolution(num), answer);
    console.log(stageResult.message);
    if (!stageResult.status) return 1;
  }
  return 0;
}

console.log('Answer "yes" if the number is even, otherwise answer "no"');

const isWinner = quiz() === 0;
if (isWinner) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`);
}
