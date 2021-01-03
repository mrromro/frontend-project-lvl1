import { ask, output } from './cli.js';
import name from './brain-games.js';
import templates from './templates.js';

function solve(solution, answer) {
  const result = solution === answer;
  return {
    status: result,
    message: templates.answer(result)(answer, solution),
  };
}

function play(gameset) {
  const { game, description } = gameset;
  output(description);
  for (const stage of game()) {
    const { question, solution } = stage;
    const answer = ask(templates.question(question));
    const result = solve(solution, answer);
    output(result.message);
    if (!result.status) {
      output(templates.lose(name));
      return 1;
    }
  }
  output(templates.win(name));
  return 0;
}

export default play;
