export function getRandomInt(min = 0, max = 100) {
  const range = max + 1 - min;
  const seed = Math.random();
  return Math.floor(min + seed * range);
}

export function isEven(num) {
  return Math.abs(num) % 2 === 0;
}
