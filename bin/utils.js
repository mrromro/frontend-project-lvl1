export function getRandomInt(min = 0, max = 100) {
  const range = max + 1 - min;
  const seed = Math.random();
  return Math.floor(min + seed * range);
}

export function isEven(num) {
  return Math.abs(num) % 2 === 0;
}

export function gcd(a, b) {
  if (!b) return a;
  return gcd(b, a % b);
}
