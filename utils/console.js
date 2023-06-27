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

module.exports = {
  changeColor,
  limitString,
};
