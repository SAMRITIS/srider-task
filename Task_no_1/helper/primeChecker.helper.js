const primeChecker = (num) => {
  let s = Math.sqrt(num);
  for (let i = 2; i <= s; i++) if (num % i === 0) return false;
  return num > 1;
};

module.exports = primeChecker;
