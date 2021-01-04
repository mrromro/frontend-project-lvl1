import { game, getRandomInt } from '../utils.js';

const description = 'What number is missing in the progression?';

function* getProgression({
  first = 1,
  step = 1,
  count = 10,
}) {
  let current = first;
  let index = 0;
  while (index < count) {
    yield current;
    current += step;
    index += 1;
  }
}

function quiz(count = 10) {
  const options = {
    first: getRandomInt(1, 10),
    step: getRandomInt(2, 10),
    count,
  };
  const progression = [...getProgression(options)];
  const index = getRandomInt(0, count - 1);
  const question = progression
    .map((element, i) => i === index ? '..' : element)
    .join(' ');
  const solution = progression[index].toString();
  return {
    question,
    solution,
  };
}

export default {
  game: game(quiz),
  description,
};
