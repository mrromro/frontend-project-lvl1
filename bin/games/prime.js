import { game, getRandomInt, isPrime } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrimeSolution(num) {
  return isPrime(num) ? 'yes' : 'no';
}

function quiz() {
  const question = getRandomInt(0, 10000);
  const solution = isPrimeSolution(question);
  return {
    question,
    solution,
  };
}

export default {
  game: game(quiz),
  description,
};
