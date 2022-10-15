const isPrime = (num) => {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const fillRange = (start, end) =>
  Array(end - start + 1)
    .fill()
    .map((item, index) => start + index);

const testArr = fillRange(0, 10000);

const primes = testArr.filter(isPrime);

console.log(primes);
