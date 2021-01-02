#!/usr/bin/env node

import name from './brain-games.js';
import ask from './cli.js';

function getRandomInt(min = 0, max = 100) {
  const range = max + 1 - min;
  const seed = Math.random();
  return Math.floor(min + seed * range);
}

function isEven(num) {
  return Math.abs(num) % 2 === 0;
}

function quiz(count = 3) {
  for (let current = 0; current < count; current += 1) {
    const num = getRandomInt();
    const answer = ask(`Question: ${num} `);
    switch (answer) {
      case 'yes': {
        if (isEven(num)) {
          console.log(`Correct!`);
        } else {
          console.log(`'yes' is wrong answer ;( Correct answer was 'no'.`);
          return 1;
        }
        break;
      }
      case 'no': {
        if (!isEven(num)) {
          console.log(`Correct!`);
        } else {
          console.log(`'no' is wrong answer ;( Correct answer was 'yes'.`);
          return 1;
        }
        break;
      }
      default: return 1;
    }
  }
  return 0;
}

console.log('Answer "yes" if the number is even, otherwise answer "no"');

const isWinner = quiz() === 0;
if (isWinner) {
  console.log(`Congratulations, ${name}`);
} else {
  console.log(`Let's try again, ${name}`);
}
