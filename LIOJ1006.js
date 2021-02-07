const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin
});

const lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => console.log(solve(lines)));

function solve(lines) {
  let output = 0;
  const seats = Number(lines[0]);
  const taken = lines.reduce((arr, line, idx) => {
    if (idx !== 0 && idx !== 1) {
      arr.push(Number(line));
    }
    return arr;
  }, []);
  for (let i = 1; i < seats; i++) {
    if (taken.includes(i)) continue;
    if (i + 2 <= seats && !taken.includes(i + 2)) {
      output++;
    }
    if (i % 2 === 1 && !taken.includes(i + 1)) {
      output++;
    }
  }
  return output;
}
