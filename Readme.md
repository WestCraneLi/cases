# 介绍

一个自动化的工具，通过命令行，把你的项目名和项目 `uri`输入终端，然后就会自动写入到 `readme.md `下的 `case`标题下，同时网页会获取新的内容，进行查看。

主要用途是方便记录个人工作写到的一些案例，便于管理。

由于第三方包 `tailwindcs`s和 `vue3`以 `cdn`形式引入，会受到网速影响，在开始的时候闪烁一下样式变动。

[![pCwWNRA.png](https://s1.ax1x.com/2023/06/29/pCwWNRA.png)](https://imgse.com/i/pCwWNRA)

**Link: [CASES](https://cases-ten.vercel.app/)**

# 使用

* `npm run <option>`  管理你的案例
  * `option`
    * `add <title> <uri>`
      * 如果有空格，可以使用''单引号标识，所有内容都会添加到本地 `README.md`

        [![pCwmggS.png](https://s1.ax1x.com/2023/06/28/pCwmggS.png)](https://imgse.com/i/pCwmggS)
    * `del <id>`
      * 输入 `id`删除，如果是 `title`，可能会有多种重名的情况，所以推荐 `id`
      * 后续有待开发，批量删除功能....[![pCwsQAA.jpg](https://s1.ax1x.com/2023/06/29/pCwsQAA.jpg)](https://imgse.com/i/pCwsQAA)
    * `update <oldTitle> <new Title>`
      * 开发中...
    * `find <title>`
      * 根据名称搜索案例
      * `bug`: 中文似乎有问题

        [![pCwms4P.png](https://s1.ax1x.com/2023/06/28/pCwms4P.png)](https://imgse.com/i/pCwms4P)
    * like `<title>`
      * 根据名称模糊搜索

        [![pCwy7in.jpg](https://s1.ax1x.com/2023/06/29/pCwy7in.jpg)](https://imgse.com/i/pCwy7in)
    * `ls`
      * 查看全部案例

        [![pCwmDAI.png](https://s1.ax1x.com/2023/06/28/pCwmDAI.png)](https://imgse.com/i/pCwmDAI)
      * `uri`过长会显示省略号，可使用 `find`命令详细察看
    * `color`
      * 可查看所有输出颜色配色

        [![pCwmdnH.png](https://s1.ax1x.com/2023/06/28/pCwmdnH.png)](https://imgse.com/i/pCwmdnH)
* `case <commander>` ``<option>``
  * 全局命令，进入到目录下， 进行 `npm link`
  * 开发中...

本地使用 `vscode`开启 `live serve`服务，打开根目录下的 `index.html`即可

# 部署

* 推荐使用 `github`+`vercel`部署,只要 `github`主分支有更新，`vercel`自动更新
* `gitflows`更新方法有待开发....

# 参考

* [控制台颜色输出](https://blog.csdn.net/qq_30763385/article/details/123930128)
* [图床](https://imgse.com/)
* [控制台输出文字LOGO](https://lunicode.com/bigtext)

# CASES
