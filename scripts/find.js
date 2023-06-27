const article = require('../data/article.json');
const con = require('../utils/console.js');

const option = process.argv[2].trim();

const temp = article.article.filter(a => a.title == option);

if (temp.length > 0) {
  console.log(con.changeColor('\ncomplete!', 92));
  console.log(JSON.stringify(temp));
} else {
  console.log(con.changeColor(`\nno found!`, 91));
}
