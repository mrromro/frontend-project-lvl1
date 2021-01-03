#!/usr/bin/env node

import play from './index.js';

function getRandomInt(min = 0, max = 100) {
  const range = max + 1 - min;
  const seed = Math.random();
  return Math.floor(min + seed * range);
}

function isEvenSolution(num) {
  return Math.abs(num) % 2 === 0 ? 'yes' : 'no';
}

function* game(count = 3) {
  for (let current = 0; current < count; current += 1) {
    const question = getRandomInt();
    yield {
      question,
      solution: isEvenSolution(question),
    };
  }
}

console.log('Answer "yes" if the number is even, otherwise answer "no"');
play(game());
