const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin
});

const lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => console.log(solve(lines)));

function solve(lines) {
  let output = '';
  lines.forEach((line, idx) => {
    if (idx === 0) return;
    const numStr1 = line.split(' ')[0];
    const numStr2 = line.split(' ')[1];

    if (numStr1 === numStr2) {
      output += 'DRAW';
    } else {
      let isABigger;
      if (numStr1.length !== numStr2.length) {
        // This fails because Number(n) returns Infinity when n large enough, e.g. n = 10^400
        // isABigger = (Number(numStr1) - Number(numStr2)) > 0;
        isABigger = numStr1.length > numStr2.length;
      } else {
        // compare each digit from left
        for (let i = 0; i < numStr1.length; i++) {
          const diff = Number(numStr1[i]) - Number(numStr2[i]);
          if (diff !== 0) {
            isABigger = diff > 0;
            break;
          }
        }
      }
      const isAWin = (line.split(' ')[2] === '1' ? isABigger : !isABigger);
      output += isAWin ? 'A' : 'B';
    }
    output += '\n';

    /*
      this may wrong when num1, num2 big enough
      For example, 123456789022345678 === 123456789022345673 is true

      const num1 = Number(line.split(' ')[0]);
      const num2 = Number(line.split(' ')[1]);
      const num3 = Number(line.split(' ')[2]);
      if (num1 === num2) {
        output += 'DRAW';
      } else {
        output += ((num1 - num2) * num3) > 0 ? 'A' : 'B';
      }
      output += '\n';
    */
  });
  return output;
}
