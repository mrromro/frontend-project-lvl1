import { getRandomInt } from '../utils.js';

const description = 'What is the result of the expression?';

const operations = {
  '*': {
    limits: [1, 10],
    fn: (a, b) => a * b,
    postprocess: (num) => num,
  },
  '-': {
    limits: [0, 100],
    fn: (a, b) => a - b,
    postprocess: (num) => num.sort().reverse(),
  },
  '+': {
    limits: [0, 100],
    fn: (a, b) => a + b,
    postprocess: (num) => num,
  },
};

function chooseOperation(ops) {
  return Object.keys(ops)[getRandomInt(0, 2)];
}

function chooseNumbers(operation) {
  const { limits, postprocess } = operations[operation];
  const a = getRandomInt(...limits);
  const b = getRandomInt(...limits);
  const result = postprocess([a, b]);
  return result;
}

function makeEquation(operation, numbers) {
  const [a, b] = numbers;
  return `${a} ${operation} ${b}`;
}

function* game(count = 3) {
  for (let current = 0; current < count; current += 1) {
    const operation = chooseOperation(operations);
    const [a, b] = chooseNumbers(operation);
    const question = makeEquation(operation, [a, b]);
    const solution = operations[operation].fn(a, b).toString();
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
