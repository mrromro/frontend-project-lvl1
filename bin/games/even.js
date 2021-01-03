import { getRandomInt, isEven } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

function isEvenSolution(num) {
  return isEven(num) ? 'yes' : 'no';
}

function* game(count = 3) {
  for (let current = 0; current < count; current += 1) {
    const question = getRandomInt();
    const solution = isEvenSolution(question);
    yield {
      question,
      solution,
    };
  }
}

export default {
  game,
  description,
};
