// TODO 命令行输入，对获取到的内容存到data里
// TODO 执行npm run article <title> <uri> 即可实现添加文章数据
const file = require('../utils/file.js');
const con = require('../utils/console.js');
const uuid = require('../utils/uuid.js');
const articleData = require('../data/article.json');

// TODO get data
const title = process.argv[2];
const uri = process.argv[3];

// TODO write file

async function addArticle() {
  process.stdout.write(con.changeColor('loading...'));
  try {
    const md = `\n* [${title}](${uri})`;
    const time = new Date().toISOString();
    const temp = {
      id: uuid.createId(),
      title: title,
      uri: uri,
      create_time: time,
      update_time: time,
    };
    articleData.article.push(temp);
    await file.setJsonFileData('data/article.json', articleData);
    await file.continueAppendFileData('Readme.md', md);
    console.log(con.changeColor('\ncomplete!', 92));
  } catch (error) {
    console.log(con.changeColor(`\nfailed! ${error}`, 91));
  }
}

addArticle();
