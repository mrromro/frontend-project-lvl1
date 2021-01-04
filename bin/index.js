import { ask, output } from './cli.js';
import templates from './templates.js';

function askName() {
  output('Welcome to the Brain Games!');
  const name = ask('May I have your name? ');
  output(`Hello, ${name}!`);
  return name;
}

function solve(solution, answer) {
  const result = solution === answer;
  return {
    status: result,
    message: templates.judge(result)(answer, solution),
  };
}

function play(gameset) {
  const name = askName();
  if (!gameset) return 0;
  const { game, description } = gameset;
  output(description);
  for (const stage of game) {
    const { question, solution } = stage;
    output(templates.question(question));
    const answer = ask(templates.answer());
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
