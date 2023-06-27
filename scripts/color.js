// TODO 输出颜色汇总，由于封装好了，所以直接获取颜色和类型即可

[0, 1, 4, 7].forEach(font => {
  for (let color = 0; color <= 107; color++) {
    const style = `${font};${color}`;
    const changeStyle = input => `\x1b[${style}m${input}\x1b[0m`;
    process.stdout.write(changeStyle(` ${style} `));
  }
  console.log('\n-----------------------');
});
