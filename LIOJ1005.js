const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin
});

const lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => console.log(solve(lines)));

function solve(lines) {
  let output = '';
  lines.forEach(line => {
    if (line === '0') return;
    const num1 = Number(line);
    const num2 = sumArray(positiveDivisors(num1));
    output += (sumArray(positiveDivisors(num2)) === num1 ? num2 : 'QQ') + '\n';
  });
  return output;
}

function positiveDivisors(num) {
  const ret = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      ret.push(i);
      if (i !== 1) {
        ret.push(num / i);
      }
    }
  }
  return ret;
}

function sumArray(arr) {
  return arr.reduce((sum, e) => sum += e, 0);
}