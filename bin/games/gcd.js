import { game, gcd, getRandomInt } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

function getNumbers() {
  const a = getRandomInt(100, 200);
  const b = getRandomInt(50, 100);
  return [a, b];
}

function quiz() {
  const [a, b] = getNumbers();
  const question = `${a} ${b}`;
  const solution = gcd(a, b).toString();
  return {
    question,
    solution,
  };
}

export default {
  game: game(quiz),
  description,
};
