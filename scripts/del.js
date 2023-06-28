const con = require('../utils/console.js');
const file = require('../utils/file.js');
const articleData = require('../data/article.json');

// TODO del data

const ID = process.argv[2];
// const CASE_MD_TITLE = '案例';

async function work() {
  process.stdout.write(con.changeColor('loading...'));

  const tempData = articleData.article.filter(a => a.id != ID);

  try {
    // let content = `# ${CASE_MD_TITLE}`;
    await file.setJsonFileData('data/article.json', {
      article: tempData,
    });
    // tempData.forEach(item => {
    //   content += `\n* [${item.title}](${item.uri})`;
    // });
    // await file.setJsonFileData('CASES.md', content);
    // let readme = await file.getJsonFileData('README.md', true);
    // readme = readme.replace(/# 案例.*/, content);
    // await file.setJsonFileData('README.md', readme);
    // console.log(con.changeColor('\ncomplete!', 92));
    // TODO 手动删除readme.md对应的内容😫
  } catch (error) {
    console.log(con.changeColor(`\nfailed! ${error}`, 91));
  }
}

work();
