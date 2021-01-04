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
  if (!gameset) return;
  const { game, description } = gameset;
  output(description);
  const win = !game.some((stage) => {
    const { question, solution } = stage;
    output(templates.question(question));
    const answer = ask(templates.answer());
    const result = solve(solution, answer);
    output(result.message);
    return !result.status;
  });
  if (win) output(templates.win(name));
  else output(templates.lose(name));
}

export default play;
