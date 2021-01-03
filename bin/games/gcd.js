import { gcd, getRandomInt } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

function getNumbers() {
  const a = getRandomInt(100, 200);
  const b = getRandomInt(50, 100);
  return [a, b];
}

function* game(count = 3) {
  for (let current = 0; current < count; current += 1) {
    const [a, b] = getNumbers();
    const question = `${a} ${b}`;
    const solution = gcd(a, b).toString();
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
