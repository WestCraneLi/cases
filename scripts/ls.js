const article = require('../data/article.json');
const con = require('../utils/console.js');
article.article.forEach(item => {
  item.uri = con.limitString(item.uri);
});
console.table(article.article);
