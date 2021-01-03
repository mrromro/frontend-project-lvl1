export default {
  question: (body) => `Question: ${body} `,
  answer: (isOk) => (
    isOk
      ? () => 'Correct!'
      : (answer, solution) => (
        `'${answer}' is wrong answer ;(. Correct answer was '${solution}'.`
      )
  ),
  win: (name) => `Congratulations, ${name}!`,
  lose: (name) => `Let's try again, ${name}!`,
};
