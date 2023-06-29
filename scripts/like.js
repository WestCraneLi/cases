const article = require('../data/article.json');
const con = require('../utils/console.js');

const option = process.argv[2].trim();

function fuzzySearch(searchTerm, data) {
  const pattern = new RegExp(searchTerm, 'i');
  return data.filter(item => pattern.test(item));
}

const searchResult = fuzzySearch(option, article.article);

con.printTable(searchResult);
