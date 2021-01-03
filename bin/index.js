const templates = {
  true: () => 'Correct!',
  false: (answer, solution) => (
    `'${answer}' is wrong answer ;(. Correct answer was '${solution}'.`
  ),
};

export function solver(solution, answer) {
  const result = solution === answer;
  return {
    status: result,
    message: templates[result](answer, solution),
  };
}

export function game() {

}
