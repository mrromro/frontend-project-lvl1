import { game, getRandomInt, isEven } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

function isEvenSolution(num) {
  return isEven(num) ? 'yes' : 'no';
}

function quiz() {
  const question = getRandomInt();
  const solution = isEvenSolution(question);
  return {
    question,
    solution,
  };
}

export default {
  game: game(quiz),
  description,
};
