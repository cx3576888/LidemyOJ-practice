const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin
});

const lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => console.log(solve(lines)));

function solve(lines) {
  let output = '';
  let str = '';
  const strCount = Number(lines[0]);
  for (let i = 1; i <= strCount; i++) {
    str += lines[i];
  }
  lines.forEach((line, idx) => {
    if (idx > strCount + 1) {
      output += str[Number(line) - 1];
    }
  });
  return output;
}
