// TODO change text color
function changeColor(input, color = 34) {
  return `\x1b[${color}m${input}\x1b[0m`;
}

// TODO readline
// const readline = require('readline');

// // create readline interface
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

module.exports = {
  changeColor,
};
