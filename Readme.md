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
      * 将会删除本地`article`的数据和`Readme.md`下的`CASES`下的内容以及`CASE.md`下的内容
      * 后续有待开发，批量删除功能....[![pCwsQAA.jpg](https://s1.ax1x.com/2023/06/29/pCwsQAA.jpg)](https://imgse.com/i/pCwsQAA)
    * `update <oldTitle> <new Title>`
      * 开发中...
      * 可删除后添加
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

* `git clone --branch dev https://github.com/WestCraneLi/cases.git`
* `git` 下载 `dev`分支，因为该分支没有数据，需自行添加，然后部署到 `github`即可
* 推荐使用 `github`+`vercel`部署,只要 `github`主分支有更新，`vercel`自动更新
* `gitflows`更新方法有待开发....

# 参考

* [控制台颜色输出](https://blog.csdn.net/qq_30763385/article/details/123930128)
* [图床](https://imgse.com/)
* [控制台输出文字LOGO](https://lunicode.com/bigtext)

# CASES

* [drawer demo](https://play.vuejs.org/#eNqlVgtv2zYQ/iuct8LOENlOshaL5gTd0gDbsEexDliDOEBpibKZSKJAUo6zwP99d3xJsaM8PBiwKN7xu+8euuN978eqGi5r1ot7E5VIXmmimK6r02nJi0pITe6JZBlZk0yKgvRBtT8tg/CDpLdMOtlwlJpXxDNKiSiVJimXLNFclL9xeDshl/2cZbq/T/qSzxdmoUWFj5nQWhT9K39SLcQtHAD7g4zmiu1tQTqpRQSxV0hyoRgIB5bRJwDaIyen5H5aEgM7XNK8Ro1G4YdpuW4QUMl5BzC647SWNcPNQKjBbXt9qcEnAJ+MbIwhuvCiWVHlVDN4I2SS8iXQpkqdTHtAQVNeMjntGSGIHZcYzYMGPqY98t44iifwCRtxsAubYQ2CkQdq25npMpqJVbAC4lkNOSgRmCc3zpC1PRjvgeIZ7pPfGUloSeZME0ow+C6OX01GFuBFgAcdgKYudkI87ECEAtsJ76gDz1ZqB+RkBDG2SXWryaiVa3hV+i63aR+GVNvqIuSWp3oRk4PxeIkliVsLhgGxewu3N6PJzVyKukyjRORCxuTr7C3+jBxqDbBdej2y1zs8POxWSrkConcxyXK2crZwGYViihGoLkonvK6V5tkdsCg1K4FlAv9MOinN+byMOLivHkiMbRd4Z7miacrLObpZrcgh/DmMgso5B7O4RcbefyFTJiNJU14DdEvdSby37C3+No3GC7Fk0lnejiXQTtgMvmR/Dr5ck7Pefk8rcDXj8+G1EiX0TQOC32xR8ZzJPysMkpr2Yu/YtEfzXNz+avawY+z7/WTBkptH9q8VfJMxLD5KpphcwpcdZBqiwbQVn3/6g61gHYSFSOsctJ8Q/sUUpM92BVT7CdwG2i09w/YX0+AhH3+r8xUkVnmnfMtbG/1pD5r92ROuN3SPhkcumGuIYjMqnhk9+1BuRVVrlm4NIdup701L3m8NhTX2X5bBV/VRikoNLvuogRMm6OCL+dJwYb+v/lWYL6zgOKksxjm8qIFxyHTZmAwqepcLmpqh4NbglZk/YUSFueJmFFJoBpiRftgYY4Fda5JpUScLHEGsGUE59CCuHDbmw1QpbwGQkxPihqJPRThwy8sURhgvoen8gyEg35Lx8B05JWwILRC+0c+26gmDmbsNa6f2y3Ennbh+4D+N9bPJzhbYxSYYXiJegdS465BcDO3JANTkMYx2cxexUiyUQd+UBRSSv6TYIm/dRha0nLOQ7TOcvoDj63owMKn9Yk1FBXSm6Jv7EPT1F4Dc4eZAltHWZcEOOFNTzdUCz8ce4LJvaYA7j9G+at8VVC70KTDDx6tGH4EWWrG0YwJWQnE7aOjM9Cpb3/9nNM6+x5+T/xtBTbBVTI6Pj90WDoMMul5MFjxNmZ1tdj7acHhuHdhb+jaL9iLzcLC/G7/Z5u63tKSlyoQssM/CEuP2eTB+s+fHKbRGamPTMnCgCKOKgVuRqHUHF3NLewWVziwYmzGJvguqm6yMqReRwnvZ1r1nk1RDs5OTbSRxuB1sMkI7LyLkLnav4PRYyi6eSJmz0MXm/Q27yyQtmGpn2PEZv/GrrlKJgJi3bPCIYf/csY1D7uQml3YJPY+JdnegsulAB5dW5TyHebEblYuXUnlYM8/D7pSjdkl5MuFSuv4P44cn2A==)
* [卡片翻转](https://play.vuejs.org/#eNrNVctu00AU/ZVLJORE1KlTKKrcpDx2fAKSN36Mk6HOeDQzNo3SSEiIIiT6CV0UxA5Yw/+QAn/BtcfjR1qqLFiQRTJzn2fOfWTZe8L5MM9Iz+2NZSgoVyCJyviRx+icp0LBEgSJYQWxSOdgoal16LEwZVJBmNDwGCaFQd8Z1GJJEhKqZywiJ5XSHjXauS+Pn04rhWU1ijihnJMINVS7HsHSYwA0hn6ZaZj7SUZgDKOB1kA7VaWtvDFqodfJapUlpoHf39vf34Hma7g/KJ5UmLfTTDq3ezAqbVYeW+FhvKvJQprwosicJ74ieAMYRzRHV1/KidfDlymfMiK8XqnUan0q0lVWvoi8npE+LvOiuCKkXz5o0Bi4xm9pOHNNKSYwQoi1ZW7HqUDDPkWIO5qZAf7AfWNToeri6iKzsfJMNUERgFSLhBQAGhmAZduabss1FZx0euH0tNsaE7BH8AgsC9yqUDtNvNYraoyI8o5tw/r88ue7t1dfPv6++LA+e7P++h1su21UVMBAfEkjNXNh5Dh3D2FG6HSmzC3ww+OpSDMW2WGapMLFlsQ6HI13MUBDTPf2d5qKcP8dS79ev//nLAU4ELfS1Jxbp5Y6yJRKcXC0p8Ew98WUMhceHPCTG6ahzbpeO041tRuLADW2Htbic63R12fnVxeffnx7dfX50sDVgDqIx7utqcZriRKPw3qk9Q6KqESrhYujWG2dF5lUNF4gW0wRhjxK7ofEJjlhyQItcIUMi4bR/jyVVNEU3y0IZqM5KYNUBdlzHK6jmqI0Ek6E5PhodClrpeUYvYqv59Z1A4JLgGDTaGlRTyPUEGqglt6DDSQ/kGmSKQ1JpdytOE9IjOb63G6dNtBacL2Bcl/0zRgU+38TcwfrJk0dTFsljwv6cyppQBOqsFQzGkWE6UcJn5nI5RlpmYMzfCiB+LJIsglO46ltsW6pwi553ncisvmaBv8N9qOD6x5D8ye4TUJ7iwi3Imh54x9a1eC91R++55mr)
* [loading](https://play.vuejs.org/#eNrtVLFu2zAQ/ZWDisAyEEtqkgapYwfp4qljRy+0RFmsKVIgKTuG4b3I1D9of6B7l/xNU/QzehIpWVYzFOiWBgIM8+69x3en0+28d0URrEvqjb2JjhUrDGhqyuJmLsIQSk2BS5IwsYRMytVcALC8kMrATtF0D6mSOQyQP6hSsRTatIQpIMRPCdd0eH1I60xu3rcQfwjTG9hVaWiYwZrwkmLSqJLWzP2BnrGE/iW9vrrPr67vEzuWfGsVY9R8YDmVpfH94fTGIaF7f4sFIJwq4w9+fvr8eP9lMLTh/enrKIrqAxqYhLa/2Fk8GJoXnBiKJ4DJmtENxJxoPZ176NMQJqiae7AeVd4w6GqbezWhT+ln5+Y4z1ATk5OwijpMX8MwwymCHu+//np4+PH9WxAER4TOoS+0KI2RAm5jzuIValWmWzOHFxMEjZIlIGASdjqBR2223DYlaPvger9hicnGgD1db1zjM8qWmbGxzMUSplFvO4aU0zsX+1hqw9LtqJKkAgkx/lLlsoSzpRgxNKKPMvXUBM58z8RZVDTirYlO7CkT1d9RwhSNDZMCb5K8zMU/OayGmks1hlez2cxFFiReLZUsRYJiNrm4qp4mL1VC1UhhVSWqtaZttdWkNJ+Fq/Xiz1I7ISuHOsUdaMlZgl7Oq8flw9BdaGSBPbo8wM4v3l4liz6s8fUmOmmKFywntmW6YALONHAcC6KAiZQJ7ErHfz3FTQE5UUsmDjcfcLcruk0Vyam2mo4QncAOtw4ROpUqH4OSBifTjxK6HF5bJlTD9jTs/LILtJ98Pc7eafOF/her9lluupdF9bKonv+i2v8GCZpJJA==)
* [按钮触摸亮光](https://play.vuejs.org/#eNqNU+FumzAQfpUTUhUqFTCkaVaWTttjTMofAwasGNuyTZIuyrvvjNmSrFNUCZnzff7ufN+dT9EPrdP9yKIy2tjacO3AMjfqb1vJB62MgxMY1sIZWqMGWODRxVbWSloHVQdvHowXvXPallnWcsFsWlNXqWM6KJat1+uqHlItu8XjVm6ykAKD48axQQvqGO4ANg3fQy2otW/bCNnbaHJ/BHJENhk6A222NtlVNNxa9y68mSIDTv6k2jPTCnUooedNw+RX79TKcseVLLEMJPM9m9wH3ri+hNcXfZz2PeNd70rIyZfZM1DTcaTlhOgj0NGpye0MlX8iUiGApIWdgIrWu86oUTYJH2jHShiN+KRu/waw/BfysQWO8lDGFWiYZhSvKtVs4oFz0CEPQlxqppVVYnShZsFapCV5Th5CKUqXQD4px8fyBJeMmqQztOFMujg085U0rHsKtukqGher1RNcFvJ4D0xXd2EcMICg1tSHVpmhBLtjhzhZ+sRX2E2PlqFHFCceZ8D79Sgsg8ICly2XfJJoVrHs/STBlaBBuYtw/49/S5+IV7ecTD++P+OkwJGam66Oie1p46eWQIH6w7Oft6R4xhVFiAksX/wQQgYr8uBZmOf7jr23hg7MzoVM2chD+P+9cDFfGBng2bdwcotjjjt8/PBtz28uOv8GRg1j5Q==)
* [github1s的loading](https://play.vuejs.org/#eNrFVH+PojAQ/SoTLsbd5FAwau44NHe5j7FcLhWK9oSWtMUfMX73G6Agori7ySbLH2SY1/fmzbT0ZP3KstEup5Zn+SqULNOgqM6zZcADzdJMSA0nCEWa5ZpGcIZYihSGyBgGHBDgSkNEE3L8nRClYAEvRR5gmAgSMb62S9B2hl9N3r4Gpn3At49juJMPpLjzsvM/nfax8yfGI3p4hsUSThVX4iglb83npVxScs8B98fVyHHYvqZplhBNMQbwI7aDsCAsAguLaMI4lYFVgh14JQ4NUEF1jP7MGtNBYF2gnR0LiRDDwsA4fG+D3pYeDXaVrvXKhp4K+PmCL/0xFq8ttuPPtntqDiMZelBKDGACiwW451f915E/bm0Rfip9TKrdGjU7VO/7nkV644HrOLv9jyq1oWy90VVuY3IrEm7XUuQ8skORCOnBF6d8DB4xhQWPHsQJPZjcv1xpFh+RwDXlKBjim0qDkoStuV10qK4QPGzoE2ffcTiTNH1QrAjtvSSZB8W7JWUG2m34Itf0e0ndaTcunxoXMqLSlqico/2ZMzBASuSacQ+mWW2McJYSzQQmVwnj278JuKOJAowpkXhAYsZxCreG6+uoNt4IVYAHjmqRujdPL8t2RtMHRHfSzyx8P2DOHzHnbWZNTG4Y7x4S6ZUgr0j8xF8xliSlqqlppJyBCQBERkKmsQXXbGdJhWLHb9c4o9n1KvyDLst6tO57adp6U527bjqOe7x0tKqr3twX1vk/zrVLvQ==)
* [抽屉(drawer)demo](https://play.vuejs.org/#eNqlVgtv2zYQ/iuct8LOENlOshaL5gTd0gDbsEexDliDOEBpibKZSKJAUo6zwP99d3xJsaM8PBiwKN7xu+8euuN978eqGi5r1ot7E5VIXmmimK6r02nJi0pITe6JZBlZk0yKgvRBtT8tg/CDpLdMOtlwlJpXxDNKiSiVJimXLNFclL9xeDshl/2cZbq/T/qSzxdmoUWFj5nQWhT9K39SLcQtHAD7g4zmiu1tQTqpRQSxV0hyoRgIB5bRJwDaIyen5H5aEgM7XNK8Ro1G4YdpuW4QUMl5BzC647SWNcPNQKjBbXt9qcEnAJ+MbIwhuvCiWVHlVDN4I2SS8iXQpkqdTHtAQVNeMjntGSGIHZcYzYMGPqY98t44iifwCRtxsAubYQ2CkQdq25npMpqJVbAC4lkNOSgRmCc3zpC1PRjvgeIZ7pPfGUloSeZME0ow+C6OX01GFuBFgAcdgKYudkI87ECEAtsJ76gDz1ZqB+RkBDG2SXWryaiVa3hV+i63aR+GVNvqIuSWp3oRk4PxeIkliVsLhgGxewu3N6PJzVyKukyjRORCxuTr7C3+jBxqDbBdej2y1zs8POxWSrkConcxyXK2crZwGYViihGoLkonvK6V5tkdsCg1K4FlAv9MOinN+byMOLivHkiMbRd4Z7miacrLObpZrcgh/DmMgso5B7O4RcbefyFTJiNJU14DdEvdSby37C3+No3GC7Fk0lnejiXQTtgMvmR/Dr5ck7Pefk8rcDXj8+G1EiX0TQOC32xR8ZzJPysMkpr2Yu/YtEfzXNz+avawY+z7/WTBkptH9q8VfJMxLD5KpphcwpcdZBqiwbQVn3/6g61gHYSFSOsctJ8Q/sUUpM92BVT7CdwG2i09w/YX0+AhH3+r8xUkVnmnfMtbG/1pD5r92ROuN3SPhkcumGuIYjMqnhk9+1BuRVVrlm4NIdup701L3m8NhTX2X5bBV/VRikoNLvuogRMm6OCL+dJwYb+v/lWYL6zgOKksxjm8qIFxyHTZmAwqepcLmpqh4NbglZk/YUSFueJmFFJoBpiRftgYY4Fda5JpUScLHEGsGUE59CCuHDbmw1QpbwGQkxPihqJPRThwy8sURhgvoen8gyEg35Lx8B05JWwILRC+0c+26gmDmbsNa6f2y3Ennbh+4D+N9bPJzhbYxSYYXiJegdS465BcDO3JANTkMYx2cxexUiyUQd+UBRSSv6TYIm/dRha0nLOQ7TOcvoDj63owMKn9Yk1FBXSm6Jv7EPT1F4Dc4eZAltHWZcEOOFNTzdUCz8ce4LJvaYA7j9G+at8VVC70KTDDx6tGH4EWWrG0YwJWQnE7aOjM9Cpb3/9nNM6+x5+T/xtBTbBVTI6Pj90WDoMMul5MFjxNmZ1tdj7acHhuHdhb+jaL9iLzcLC/G7/Z5u63tKSlyoQssM/CEuP2eTB+s+fHKbRGamPTMnCgCKOKgVuRqHUHF3NLewWVziwYmzGJvguqm6yMqReRwnvZ1r1nk1RDs5OTbSRxuB1sMkI7LyLkLnav4PRYyi6eSJmz0MXm/Q27yyQtmGpn2PEZv/GrrlKJgJi3bPCIYf/csY1D7uQml3YJPY+JdnegsulAB5dW5TyHebEblYuXUnlYM8/D7pSjdkl5MuFSuv4P44cn2A==)
* [button hover](https://play.vuejs.org/#eNq9VUtv1DAQ/itWEFqQmm3aiiLCFvFQD3AABNwIByeZ3bjr2MF29tHVHkCc4MCFAzcOVOLIlX8FP4Gx4+yr7ZYTiuTHzNjzfZ/tySx4UFXdUQ1BHPR0plhliAZTV/cSwcpKKkNmREGfzElfyZJ0MLSTiERkUmhDOMPmiLzu/Pl29r2zQ7D/+sH3733/qenPvvz+9dmbfvj+p+8/+v5d500iersNDkSAEwNlxakBnBHSy9mIZJxqfZQEiMBQJkAlgXNuuFM5WTjOu0KGGycBGYV9qdBkp4QJR2hl2QULDUxsxGxml8znvV0M2BafDjB6PWp1thy3o97uCmecajPlDf3ugjKZNavHLDdFTPaiaDS+25gKYIPCNLbC21KaDQdK1iIPM8mlisk1uGM/78+ZxoTTmPQ5TLzNDsOcKcgMkyImuLAuhXee1Nqw/hR3EwYEZsuwBeW9lLOBcArrNc/ckUBRNuDvR1HVpv0XKEq2ZJ1nrGgVE9tehk5XNIMwBTMGaClcCdL5NpAeLoG2Oq+YUqlyUKGiOatx01vR9Uv1TzkVWQE55aUUuQ8rqRow5Ld3WE1I1FJEEqFmpxCTg/1FKjkC1edyHJOC5fmC1P8+SPcarEZN/GnIRA4Te/k24tLBupJ753RcWs6rRd/WFMXBm3+V0hJPmhkUIOre3tRESL9+/Yjjworp0WW10jZjJdklN6IJb1n5ZSOmWcq4y+zGvEW6yJ5ymQ298aIsqDZWXNqcEaLXBKgGFDSUtUHCpiAc78cKg/tDmPYVLUE3nlbh6Ho7IsQoKjSWuBIfQUY53Ni76bO5LYgtE1vDo2htATZYn11FCnYCo/He9Nmge6KlwD+I28dW5rJiHNSzyrLRSRC3GZKAcry1T5zNqBp2Wjs+hmx4gf1EYxmPcfBcgQY1giRY+IxljcXYuo9fPnWFeeEsZV5zjN7ifAEa34LF2IQ9xCuHsFfiHNrH7j/IxOCVPp7gK9EtKQvUieLikwD/jY+2UF/CPegeeDHnwfwvWct5CA==)
* [chatlist auto scroll to bottom](https://play.vuejs.org/#eNp9U01z0zAQ/Ssac2gydZ20YTgYpwN0cigHYEqHC+bg2GtbjSwZSXbCZPzfefJHCdCJM+Nod99bvX2Sj977ug7ahrzQi0yqeW2ZIdvUt7HkVa20ZUemKfeZpIN95OnOZ/vEpiXrWK5VxS7AvYhlqqSxTHC81g4/+37tsxufrX7MpyLeD5SPZdkIgYog5KXjvH474ZIsQzybs/UtO8aS4XF9gzYRDQV1Y8oZKJeXczC6WPZqZgPc4fy/qZPsETFm3TPoGduKxNiNoIqkvSu5yAJ4oYS4l1Z947SfQavjdPjv/KlLRlSHzOqGkEUlWgwOwjsElqpaJJYQOXCU8Zal2MesYw9724RL0rHn7BgyUIOQZ4iKRmZKFrE3kv9rsFUHYNurXGlEHHsxLvv5wTkeWZ/pumgB0iTgdL1trFWSvUsFvEEHmA6is75nRosBAHi0OBkEobG/hFsGzzNMdpTEi9KG7Hq5rA84HJfbJumu0ArjXKVKKB2yV/kb9xvrqiWdC7UPWdJYNZwoemO8f7venGua/GySsVgluuBywLPl0BEH06v2fM8a6M55ETwZJXHp+12c/VXNBenPteW4hbEXTvvDGwGBH/ucO2t/yqclpbsX8k8GZxNi8UWTId1S7D3XLNQRzsiVN18/4XKeFCuVNQLoM8UHMko0TuMA+wATIPsE16u97z9dLotHszlYkmYaarisuMg9Pvbw9d6dGf2P3FWw6nnw0+t+A6JeYEw=)
* [sidenav](https://play.vuejs.org/#eNqdVm1r20Yc/yo3jREHLLtr1m1oTtlaGthg7egCe6M3snSyLznfibuTnSwYBlvfZUsLoysZrCvd9qKU9c3GSmm/zKjq9FX7Efo/yZLOkuWGxBB0/4ff/+l3DwfWZ1HUGcfYcqye9AWJFJJYxdFFl5FRxIVCB0jgsI04+5LHTOGgjSae8odtxPCe2ib+LpqiUPARWgOYNZe5zOdMKsS88XUcok3t3mIxpeuf5Co55JOr3viSYnN16FGJa/rtCS9NlIjrFtcYXq72BcbsGxKo4VwfcD8eYaY6fR7sd3xK4DvVayeXdbto9uut5ObD2bNbL+/9m/z9LHnyV3J0Jzm8/erpYfLk55NHf76482hCWMAnJ98dPn/8Iyxf3L35/PGD5Mb3s39+nx3/AHFSpJOf/kuObs8e/JIc3c+QXj09bkzADJ65zMMeZ9E6nAksybdY51lModVaR5sX0YHLEPwZ9XbGHo11VxoDQsHap4IOHguQZ4VN/Yr5Fm51qN4m2vjoQt0LZnpar6nLpuv5zAdYXeYso9xCJVrNKe5QPmitZazMwNaAw8YSkLQ5CVGrKe76QnfqVaY8rpeUEfltVmbhpomussL7aokrUilcfcolPp2v3kyma1lGg3OlwKp/HvrUAEbyvW52LMGBBAuFRxH1FIaV9u4FZAzonpSbrgWxlEcYFq6ltzxIsunC8lPgqb8LkoIkrjWHqMGAk91XzO7zPdNzniiIxrb+LkWQ+AJaEyIYvb77x/1eF3Rm8OradJUkwLb2N4srEnjntBkUMGlRFcvl1n1P2LpL1fRWe6gl/clm2wC1VGZCUxwqm0D55jAMQq0K+P/DG2fDL4GWtbvE/+3eqmnm372uQVtYSrVP9WenGGq+Gyb6xHHQ++fOvTff/H3P3x0IOPMDoADlwkHvbm1tZVsDEAyy5hixxMKWmGJfOQgujPk+Ko1zwxCi2/rod9D5D6K9qpkz5OMyMz8WUkePOIHrRxTGdYLmHgGRUPO+g0KKS3CTibnlEJPBEJKFssf5NbLCO2VmvWNpBU1wS9qIPf2rQ8OLZwF64wzQ5/WvgC4oliNHXhAQNnDQxwVyfRhGCoYkz8AQUei6vUTuUTJgmglh1kUbsyDPmYsAWCK8gMTSQRdW0a3ok9aPPDEgzNYVOagMVZ2Wlu3EUpFwPyUGvBEc5MP/lDllcgQ2BsRf0DTzt+jj26jZVMmH+ldcK+kutNqWkgAZkkFnR3IG7+AUVl8no4hQLK5FisAt5lpOHtC1PEr55ItUpu+6di73h9jfXSLfkXDsOvDxFTy2sBhj1yp0ClqK4dzU6itfX4VHtaEc8SCmYL1CeR3D6ybWOWZml6BkSNuwS7P9PH3NA+u25ZU9GIjMi9KJastpau9a8Iq/vKL0Mt2NzkbqB/20pm8AwUIxhQ==)
* [toggle button](https://play.vuejs.org/#eNqtVctu00AU/ZWREUqpmgdNqYobkAB1AQtAwIKFN449iae1Z8zMOElVZUkp5SkhVZQuaJFoFyxAYkFpK/EvKE7bFXwC1884cZsVcRYz556ZOffc6/GKcsN1Sy0PK6pSEwYnrkQCS8+9rlHiuIxLtII4bqAuanDmoAJQCxqtlSMusGAisePausQwQ/CrmaSFDFsX4pqmGIxKnVDMNSUO5yh11oGgZVn+u7Xo//fj3k6tDJxzl0hajJZlacm4Vs4ogqmQy3YwLKVi0Eq0ok1MaanocqXSas9HkIVJ05IRZsVYXTeWmpx51CwazGZcRRfwbPBAvBscUQIx+T3dTn7PFMvvybEZx8qTkutUEEkYVVE4bjDuoEqpKhDWBS4SWmSenJ8sRwuydN2288SI5ui8CUCdSckcFU1HatIMVIu1Bt4YHheBLJcRKjE/V3bd9nAcjJG2RWQCpeLjPIKqPJ6Yg5MvDY6Oqjlq4PRczsCZAXRGTepzwZPEGTcxL3LdJJ5QUXU6XWkSAc2xrKKGjRPM1U2T0KaKKmgmJbos8ZRj0E1aQ0kN2T07avdQZqpax+ABTq2FPsQU8in83vxcyJ2m1wWzvYGFzFXRlcrFMY5OVKZQESiBpxkLM0knDmagvIM6leSJh7P1G7FxRMZ4D84zW7dJkxbhDAd2NMCItLsWPSFJYxn0xAYNRROVNjFw3HXDNof9mzP7v/RxeRJdnXU7/fdf/Z/fj/cOQ7v9X09Pdw799e3e/vqfo5f+211/bbN39KG3/wIoAbIFoYP+9g//6M3ps1f9jW8nn76c7K4eb230Xz/vHayioTd4tKrBiYPCQq5w74Z3mTKlSAEmNUiztCgYhds7zDa4bx2X2Jjfc4PSCE1REx80BcrE2ndCTHIPTyW4YWFj6Qx8UcANq8LgPscC8xbWlDQm4SrBMgovPLyLOzBOgw4zPRvYY4IPcNjjoDGi3YRKgOwML1R7O/wGwZv5SCx0oCVEklQgNGB2Q76mwHfp1pjUB3KrpWq4DvxUuv8AXwRr8A==)
* [tree file css](https://play.vuejs.org/#eNqdVMuO0zAU/RUrI1SQmrSlgGgolQDNAhaAgB1hkSa3iaeObdlOH6q65g/YsEJizRJpxO/wEH/BdV4zLU2HIdnY5557fHx9dTfOIym9RQ6O74x1pKg0RIPJ5STgNJNCGbIhCmZkS2ZKZKSD1E7Ax72SiyzcGMgkCw3gjuA3jumCRCzU+mHgRIKbkHJQgVOFSwogynRDMwpgh1GwdJ5loVpPfn86//XxywBPrYA9XqW2B+9I/Pzw/vu3rz8+n/dbVXqHZa6lPnBbXV6h1arn3j6q2OL6v08bHjvNfp7n/buNQ/g+hnu6wPW4d6mRcKvNmtml1/QQ2ZQZSxqb1CeDfn+xfFBCKdAkNSWWVtg0jOaJEjmP3UgwoXxyAvfsj/FtwOserERlGMeUJ1ZCrkpGVYiaEVON9tY+mTHYZfj+FGZCQc20joGjnU6n8lJbvlNo7zi+gKyuq1NF+dwn/QpE/YRyV5Xs+w15KlQMeKeBXBEtGI3JyWg0+uvqPmFYulC5iQpjiqZuWlq3IN8id/s3elbA3plw4SqQEJru1TmWbxObnJ2avhUS+LtJS3WuZa7loFpacLZ2o5SyeP+U5rW44FDkYGcXLeV0HaPxiWY08c604Dj7ihw7rTJJGagX0lDBdeD4tVrghIyJ5bMCMyqHbo1HKUTzA/iZXlkscF4q0KAWON+amME3BVOGT18/hxWum2Am4pwh+0jwFeCL59ZjSXuMtUTbl3iF26fFBMemfqNPV9iQur6UNWqZ24IfODjVnxy5+oXdoTcs8rCezvYPXgr2dw==)
* [mouse hover control animation running and paused](https://play.vuejs.org/#eNqNVF2Pk0AU/SuTMSaabClt3cYgGj+yD/qgRn3kZQq3MFuYmcxcKM2m/907QCld12ppwuXcc+fcL3jgH4wJmhp4xGOEypQC4V2iGP3iTDYsLYVzbxOeaoVCKrAJH9x/UDa6XZA3nhN4hbN8xDnZ8XyiT48OD6U3g1GaPfQRe5lhEbFFGDb7Nz1UgMwL7LFiwDYi3eVW1yqbpbrUNmLPYO2vwW9ElkmVR2wZmpawo5cNfBU3/X35SHD9quNN9SbQE3Kb1/4a/JWwuVQz1GZU9DBaoZxEqVXERFmyMLh1DISDGZF1jQNNKFmJnuWMVGzhWEk9EZZJtZVKIlzKbDSiriJ2e1ZKa+t8WkZLhWCnFY+V/l3GiNpBNlU79ysqdHMez3jGjKZ5mDmkkZJqF38h+j9htlaKhnSKe7+Dw9aKClyf3xAbPj9ZY0u32lL5VvtjXiwyyF8ObejO8Qbtyj/CVuvwMpD+8bxfTH7D0dFqbmUe3Dut6AXqzvKvSmVkCfab8dW4hEcnlYTThPX+S4ehrYEWrcfTAtLdE/i9az2W8O8WHNgGEj76kCYN2Lvvfn6FluzRWemsLol9xfkDnC5rn2NP+0irS2lPeF22nyujLdIMfrm7FoGWdSjKJ+qZx46fcPqKfLpS+jndVbDq4qif/Pgbbex3KQ==)
* [slide box](https://play.vuejs.org/#eNrVVs1u1DAQfhUrCBWkZpvdpagNCxKgVoIDIOCYizeebNx648h29qdVj7wGEneeiidhnMTZhGSXn0tFIkX2/Pmbb+yJb72XeT5aFeCF3szAMhfUwIsoI/jMGF+RWFCtn0deLDNDeQYq8mp1z0QLzsCfy03HZI8Zx8XIbuiP0Wl2gnZ/7zr5d9fpgGt77sazkxY3ONVmK+xw1NBCbiuPNWcmDck4CFbrZ5UoBb5ITSVLa9mcxtcLJYuM+bEUUoXkATy1b63PKWM8W4RkEuQbJ5OaGy6zkChAKHwFqLizeEYN9Q7GzpbOtRSFsbZWYWQektPgYT0VkCCy3dwomulEqmVYDW3Kj3zUHxP7fVyb1VmejicNuibLyVkjG8hyfmbfWi9XoBIh1yFJOWOQ9fMJwzkgHHB5Wb4hw2WOfnz/ctRFM+2DaYkGsNBz+zq9VAyUryjjhW5TkuCSvuY30CmGi3F5edkrz2HKBykOuvwyrnG3bUOSCHArXhXa8GSL6GsKYvyCqrVU8EVWbmoE39EsqVrwzK8q/WSXQKG0zSCXvGVcInJpCEGC0VQToBrPS+bLwrjC5TTmBvEFteAG9Qw2ITk/t4T2qkgTXGOgiF+//Z9FVBW0+y5qDeOeqpra8/vrCW2CjPd7dHbDXoeyWXfb6u8azv7y/RkDffoGMyAthP7UYRzundj1sXkGdhNgrIORJgcjdQN1WPLHzrN/QBSwIY9mrb7HFgT25CGnJtW+01wU9e9odlL9Hb1jz2jc1wlfjK60zPCGUXrbu8Qy5wLU+9wWREde6OJGHhZHrt+WMqMKOHbyOIX4ekB+pfG6EeLggwINagWR1+gMHhIwlfri0zvY4LhRLiUrBFofUH6Ecg8hxsrsFeaLsFt2Jdo3y1wqg3/rz/pig6dYu6QsUGt5V9pHHl6zXh9IfQd3OpqWfsind/cTxHQbRA==)
