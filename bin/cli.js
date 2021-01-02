import readLineSync from 'readline-sync';

export default (question) => {
  const name = readLineSync.question(question);
  console.log(`Hello, ${name}!`);
};
