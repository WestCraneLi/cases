const con = require('../utils/console.js');
const file = require('../utils/file.js');
const articleData = require('../data/article.json');

// TODO del data

const ID = process.argv[2];
const CASE_MD_TITLE = 'CASES';

async function work() {
  process.stdout.write(con.changeColor('loading...'));

  const tempData = articleData.article.filter(a => a.id != ID);

  try {
    if (tempData.length == articleData.article.length) {
      console.log(con.changeColor('\ntips: not found!', 43));
    } else {
      let content = `# ${CASE_MD_TITLE}`;
      await file.setJsonFileData('data/article.json', {
        article: tempData,
      });
      tempData.forEach(async item => {
        content += `\n* [${item.title}](${item.uri})`;
      });
      await file.setJsonFileData('CASES.md', content, true);
      let readme = await file.getJsonFileData('Readme.md', true);
      let tempIndex = readme.indexOf('# CASES');
      readme = readme.replace(/# CASES.*/, content);
      let extractedContent = readme.substring(0, tempIndex) + content;
      await file.setJsonFileData('Readme.md', extractedContent, true);
      console.log(con.changeColor('\ncomplete!', 92));
      // TODO 手动删除readme.md对应的内容😫
    }
  } catch (error) {
    console.log(con.changeColor(`\nfailed! ${error}`, 91));
  }
}

work();
