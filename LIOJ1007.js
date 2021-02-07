const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin
});

const lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => console.log(solve(lines)));

function solve(lines) {
  let output;
  let highScore = -1;
  lines.forEach((line, idx) => {
    if (idx === 0) return;
    const score = Number(line.split(' ')[1]);
    const name = line.split(' ')[0];
    if (score === highScore) {
      output += '\n' + name;
    }
    if (score > highScore) {
      highScore = score;
      output = name;
    }
  });
  return output;
}
