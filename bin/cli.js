import readLineSync from 'readline-sync';

export function ask(question) {
  return readLineSync.question(question);
}

export function output(line) {
  console.log(line);
}
