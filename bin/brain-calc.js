#!/usr/bin/env node

import play from './index.js';

const description = 'What is the result of the expression?';

function* game(count = 3) {
  for (let current = 0; current < count; current += 1) {
    const question = '';
    const solution = '';
    yield {
      question,
      solution,
    };
  }
}

console.log(description);
play(game());
