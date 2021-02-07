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
    const str1 = line.split(' ')[0];
    const str2 = line.split(' ')[1];
    const num1 = Number(str1);
    const num2 = Number(str2);
    if (num1 !== 0 || num2 !== 0) {
      output += ((num1 - num2 > 0 ? str1 : str2) + '\n');
    }
  });
  return output;
}
