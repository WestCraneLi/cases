// TODO change text color
function changeColor(input, color = 34) {
  return `\x1b[${color}m${input}\x1b[0m`;
}

// TODO word limit
function limitString(str, maxLength = 10) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + '...';
  } else {
    return str;
  }
}

// TODO console like table
function printTable(data) {
  let cnt = 0;
  data.forEach(item => {
    console.log('\n');
    for (const key in item) {
      console.log(changeColor(`${key}    ${item[key]}`, 92 + (cnt++ % 6)));
    }
  });
}

module.exports = {
  changeColor,
  limitString,
  printTable,
};
