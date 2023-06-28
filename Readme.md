# 介绍

一个自动化的工具，通过命令行，把你的项目名和项目 `uri`输入终端，然后就会自动写入到 `readme.md `下的 `case`标题下，同时网页会获取新的内容，进行查看。

主要用途是方便记录个人工作写到的一些案例，便于管理。

由于第三方包 `tailwindcs`s和 `vue3`以 `cdn`形式引入，会受到网速影响，在开始的时候闪烁一下样式变动。

[![pCwnADH.png](https://s1.ax1x.com/2023/06/28/pCwnADH.png)](https://imgse.com/i/pCwnADH)

**Link: [CASES](https://cases-ten.vercel.app/)**

# 使用

* `npm run add <title> <uri>` 添加你的案例
* `npm run <option>` 管理你的案例
  * `option`
    * `add <title> <uri>`
      * 如果有空格，可以使用''单引号标识，所有内容都会添加到本地 `README.md`

        [![pCwmggS.png](https://s1.ax1x.com/2023/06/28/pCwmggS.png)](https://imgse.com/i/pCwmggS)
    * `del <id>`
      * 输入 `id`删除，如果是 `title`，可能会有多种重名的情况，所以推荐 `id`
      * `bug: 无法删除README.md下的对应内容`
      * 后续有待开发，批量删除功能....

        [![pCwuhYq.png](https://s1.ax1x.com/2023/06/28/pCwuhYq.png)](https://imgse.com/i/pCwuhYq)
    * `update <oldTitle> <new Title>`
      * 开发中...
    * `find <title>`
      * 根据名称搜索案例
      * `bug`: 中文似乎有问题

        [![pCwms4P.png](https://s1.ax1x.com/2023/06/28/pCwms4P.png)](https://imgse.com/i/pCwms4P)
    * `ls`
      * 查看全部案例

        [![pCwmDAI.png](https://s1.ax1x.com/2023/06/28/pCwmDAI.png)](https://imgse.com/i/pCwmDAI)
    * `color`
      * 可查看所有输出颜色配色

        [![pCwmdnH.png](https://s1.ax1x.com/2023/06/28/pCwmdnH.png)](https://imgse.com/i/pCwmdnH)

本地使用 `vscode`开启 `live serve`服务，打开根目录下的 `index.html`即可

# 部署

推荐使用 `github`+`vercel`部署,只要 `github`主分支有更新，`vercel`自动更新

`gitflows`更新方法有待开发....

# 参考

* [控制台颜色输出](https://blog.csdn.net/qq_30763385/article/details/123930128)
* [图床](https://imgse.com/)

# 案例

* [卡片翻转](https://play.vuejs.org/#eNrNVctu00AU/ZVLJORE1KlTKKrcpDx2fAKSN36Mk6HOeDQzNo3SSEiIIiT6CV0UxA5Yw/+QAn/BtcfjR1qqLFiQRTJzn2fOfWTZe8L5MM9Iz+2NZSgoVyCJyviRx+icp0LBEgSJYQWxSOdgoal16LEwZVJBmNDwGCaFQd8Z1GJJEhKqZywiJ5XSHjXauS+Pn04rhWU1ijihnJMINVS7HsHSYwA0hn6ZaZj7SUZgDKOB1kA7VaWtvDFqodfJapUlpoHf39vf34Hma7g/KJ5UmLfTTDq3ezAqbVYeW+FhvKvJQprwosicJ74ieAMYRzRHV1/KidfDlymfMiK8XqnUan0q0lVWvoi8npE+LvOiuCKkXz5o0Bi4xm9pOHNNKSYwQoi1ZW7HqUDDPkWIO5qZAf7AfWNToeri6iKzsfJMNUERgFSLhBQAGhmAZduabss1FZx0euH0tNsaE7BH8AgsC9yqUDtNvNYraoyI8o5tw/r88ue7t1dfPv6++LA+e7P++h1su21UVMBAfEkjNXNh5Dh3D2FG6HSmzC3ww+OpSDMW2WGapMLFlsQ6HI13MUBDTPf2d5qKcP8dS79ev//nLAU4ELfS1Jxbp5Y6yJRKcXC0p8Ew98WUMhceHPCTG6ahzbpeO041tRuLADW2Htbic63R12fnVxeffnx7dfX50sDVgDqIx7utqcZriRKPw3qk9Q6KqESrhYujWG2dF5lUNF4gW0wRhjxK7ofEJjlhyQItcIUMi4bR/jyVVNEU3y0IZqM5KYNUBdlzHK6jmqI0Ek6E5PhodClrpeUYvYqv59Z1A4JLgGDTaGlRTyPUEGqglt6DDSQ/kGmSKQ1JpdytOE9IjOb63G6dNtBacL2Bcl/0zRgU+38TcwfrJk0dTFsljwv6cyppQBOqsFQzGkWE6UcJn5nI5RlpmYMzfCiB+LJIsglO46ltsW6pwi553ncisvmaBv8N9qOD6x5D8ye4TUJ7iwi3Imh54x9a1eC91R++55mr)
* [loading](https://play.vuejs.org/#eNrtVLFu2zAQ/ZWDisAyEEtqkgapYwfp4qljRy+0RFmsKVIgKTuG4b3I1D9of6B7l/xNU/QzehIpWVYzFOiWBgIM8+69x3en0+28d0URrEvqjb2JjhUrDGhqyuJmLsIQSk2BS5IwsYRMytVcALC8kMrATtF0D6mSOQyQP6hSsRTatIQpIMRPCdd0eH1I60xu3rcQfwjTG9hVaWiYwZrwkmLSqJLWzP2BnrGE/iW9vrrPr67vEzuWfGsVY9R8YDmVpfH94fTGIaF7f4sFIJwq4w9+fvr8eP9lMLTh/enrKIrqAxqYhLa/2Fk8GJoXnBiKJ4DJmtENxJxoPZ176NMQJqiae7AeVd4w6GqbezWhT+ln5+Y4z1ATk5OwijpMX8MwwymCHu+//np4+PH9WxAER4TOoS+0KI2RAm5jzuIValWmWzOHFxMEjZIlIGASdjqBR2223DYlaPvger9hicnGgD1db1zjM8qWmbGxzMUSplFvO4aU0zsX+1hqw9LtqJKkAgkx/lLlsoSzpRgxNKKPMvXUBM58z8RZVDTirYlO7CkT1d9RwhSNDZMCb5K8zMU/OayGmks1hlez2cxFFiReLZUsRYJiNrm4qp4mL1VC1UhhVSWqtaZttdWkNJ+Fq/Xiz1I7ISuHOsUdaMlZgl7Oq8flw9BdaGSBPbo8wM4v3l4liz6s8fUmOmmKFywntmW6YALONHAcC6KAiZQJ7ErHfz3FTQE5UUsmDjcfcLcruk0Vyam2mo4QncAOtw4ROpUqH4OSBifTjxK6HF5bJlTD9jTs/LILtJ98Pc7eafOF/her9lluupdF9bKonv+i2v8GCZpJJA==)
* [按钮触摸亮光](https://play.vuejs.org/#eNqNU+FumzAQfpUTUhUqFTCkaVaWTttjTMofAwasGNuyTZIuyrvvjNmSrFNUCZnzff7ufN+dT9EPrdP9yKIy2tjacO3AMjfqb1vJB62MgxMY1sIZWqMGWODRxVbWSloHVQdvHowXvXPallnWcsFsWlNXqWM6KJat1+uqHlItu8XjVm6ykAKD48axQQvqGO4ANg3fQy2otW/bCNnbaHJ/BHJENhk6A222NtlVNNxa9y68mSIDTv6k2jPTCnUooedNw+RX79TKcseVLLEMJPM9m9wH3ri+hNcXfZz2PeNd70rIyZfZM1DTcaTlhOgj0NGpye0MlX8iUiGApIWdgIrWu86oUTYJH2jHShiN+KRu/waw/BfysQWO8lDGFWiYZhSvKtVs4oFz0CEPQlxqppVVYnShZsFapCV5Th5CKUqXQD4px8fyBJeMmqQztOFMujg085U0rHsKtukqGher1RNcFvJ4D0xXd2EcMICg1tSHVpmhBLtjhzhZ+sRX2E2PlqFHFCceZ8D79Sgsg8ICly2XfJJoVrHs/STBlaBBuYtw/49/S5+IV7ecTD++P+OkwJGam66Oie1p46eWQIH6w7Oft6R4xhVFiAksX/wQQgYr8uBZmOf7jr23hg7MzoVM2chD+P+9cDFfGBng2bdwcotjjjt8/PBtz28uOv8GRg1j5Q==)
* [github1s的loading](https://play.vuejs.org/#eNrFVH+PojAQ/SoTLsbd5FAwau44NHe5j7FcLhWK9oSWtMUfMX73G6Agori7ySbLH2SY1/fmzbT0ZP3KstEup5Zn+SqULNOgqM6zZcADzdJMSA0nCEWa5ZpGcIZYihSGyBgGHBDgSkNEE3L8nRClYAEvRR5gmAgSMb62S9B2hl9N3r4Gpn3At49juJMPpLjzsvM/nfax8yfGI3p4hsUSThVX4iglb83npVxScs8B98fVyHHYvqZplhBNMQbwI7aDsCAsAguLaMI4lYFVgh14JQ4NUEF1jP7MGtNBYF2gnR0LiRDDwsA4fG+D3pYeDXaVrvXKhp4K+PmCL/0xFq8ttuPPtntqDiMZelBKDGACiwW451f915E/bm0Rfip9TKrdGjU7VO/7nkV644HrOLv9jyq1oWy90VVuY3IrEm7XUuQ8skORCOnBF6d8DB4xhQWPHsQJPZjcv1xpFh+RwDXlKBjim0qDkoStuV10qK4QPGzoE2ffcTiTNH1QrAjtvSSZB8W7JWUG2m34Itf0e0ndaTcunxoXMqLSlqico/2ZMzBASuSacQ+mWW2McJYSzQQmVwnj278JuKOJAowpkXhAYsZxCreG6+uoNt4IVYAHjmqRujdPL8t2RtMHRHfSzyx8P2DOHzHnbWZNTG4Y7x4S6ZUgr0j8xF8xliSlqqlppJyBCQBERkKmsQXXbGdJhWLHb9c4o9n1KvyDLst6tO57adp6U527bjqOe7x0tKqr3twX1vk/zrVLvQ==)
* [抽屉(drawer)demo](https://play.vuejs.org/#eNqlVgtv2zYQ/iuct8LOENlOshaL5gTd0gDbsEexDliDOEBpibKZSKJAUo6zwP99d3xJsaM8PBiwKN7xu+8euuN978eqGi5r1ot7E5VIXmmimK6r02nJi0pITe6JZBlZk0yKgvRBtT8tg/CDpLdMOtlwlJpXxDNKiSiVJimXLNFclL9xeDshl/2cZbq/T/qSzxdmoUWFj5nQWhT9K39SLcQtHAD7g4zmiu1tQTqpRQSxV0hyoRgIB5bRJwDaIyen5H5aEgM7XNK8Ro1G4YdpuW4QUMl5BzC647SWNcPNQKjBbXt9qcEnAJ+MbIwhuvCiWVHlVDN4I2SS8iXQpkqdTHtAQVNeMjntGSGIHZcYzYMGPqY98t44iifwCRtxsAubYQ2CkQdq25npMpqJVbAC4lkNOSgRmCc3zpC1PRjvgeIZ7pPfGUloSeZME0ow+C6OX01GFuBFgAcdgKYudkI87ECEAtsJ76gDz1ZqB+RkBDG2SXWryaiVa3hV+i63aR+GVNvqIuSWp3oRk4PxeIkliVsLhgGxewu3N6PJzVyKukyjRORCxuTr7C3+jBxqDbBdej2y1zs8POxWSrkConcxyXK2crZwGYViihGoLkonvK6V5tkdsCg1K4FlAv9MOinN+byMOLivHkiMbRd4Z7miacrLObpZrcgh/DmMgso5B7O4RcbefyFTJiNJU14DdEvdSby37C3+No3GC7Fk0lnejiXQTtgMvmR/Dr5ck7Pefk8rcDXj8+G1EiX0TQOC32xR8ZzJPysMkpr2Yu/YtEfzXNz+avawY+z7/WTBkptH9q8VfJMxLD5KpphcwpcdZBqiwbQVn3/6g61gHYSFSOsctJ8Q/sUUpM92BVT7CdwG2i09w/YX0+AhH3+r8xUkVnmnfMtbG/1pD5r92ROuN3SPhkcumGuIYjMqnhk9+1BuRVVrlm4NIdup701L3m8NhTX2X5bBV/VRikoNLvuogRMm6OCL+dJwYb+v/lWYL6zgOKksxjm8qIFxyHTZmAwqepcLmpqh4NbglZk/YUSFueJmFFJoBpiRftgYY4Fda5JpUScLHEGsGUE59CCuHDbmw1QpbwGQkxPihqJPRThwy8sURhgvoen8gyEg35Lx8B05JWwILRC+0c+26gmDmbsNa6f2y3Ennbh+4D+N9bPJzhbYxSYYXiJegdS465BcDO3JANTkMYx2cxexUiyUQd+UBRSSv6TYIm/dRha0nLOQ7TOcvoDj63owMKn9Yk1FBXSm6Jv7EPT1F4Dc4eZAltHWZcEOOFNTzdUCz8ce4LJvaYA7j9G+at8VVC70KTDDx6tGH4EWWrG0YwJWQnE7aOjM9Cpb3/9nNM6+x5+T/xtBTbBVTI6Pj90WDoMMul5MFjxNmZ1tdj7acHhuHdhb+jaL9iLzcLC/G7/Z5u63tKSlyoQssM/CEuP2eTB+s+fHKbRGamPTMnCgCKOKgVuRqHUHF3NLewWVziwYmzGJvguqm6yMqReRwnvZ1r1nk1RDs5OTbSRxuB1sMkI7LyLkLnav4PRYyi6eSJmz0MXm/Q27yyQtmGpn2PEZv/GrrlKJgJi3bPCIYf/csY1D7uQml3YJPY+JdnegsulAB5dW5TyHebEblYuXUnlYM8/D7pSjdkl5MuFSuv4P44cn2A==)
* [button hover](https://play.vuejs.org/#eNq9VUtv1DAQ/itWEFqQmm3aiiLCFvFQD3AABNwIByeZ3bjr2MF29tHVHkCc4MCFAzcOVOLIlX8FP4Gx4+yr7ZYTiuTHzNjzfZ/tySx4UFXdUQ1BHPR0plhliAZTV/cSwcpKKkNmREGfzElfyZJ0MLSTiERkUmhDOMPmiLzu/Pl29r2zQ7D/+sH3733/qenPvvz+9dmbfvj+p+8/+v5d500iersNDkSAEwNlxakBnBHSy9mIZJxqfZQEiMBQJkAlgXNuuFM5WTjOu0KGGycBGYV9qdBkp4QJR2hl2QULDUxsxGxml8znvV0M2BafDjB6PWp1thy3o97uCmecajPlDf3ugjKZNavHLDdFTPaiaDS+25gKYIPCNLbC21KaDQdK1iIPM8mlisk1uGM/78+ZxoTTmPQ5TLzNDsOcKcgMkyImuLAuhXee1Nqw/hR3EwYEZsuwBeW9lLOBcArrNc/ckUBRNuDvR1HVpv0XKEq2ZJ1nrGgVE9tehk5XNIMwBTMGaClcCdL5NpAeLoG2Oq+YUqlyUKGiOatx01vR9Uv1TzkVWQE55aUUuQ8rqRow5Ld3WE1I1FJEEqFmpxCTg/1FKjkC1edyHJOC5fmC1P8+SPcarEZN/GnIRA4Te/k24tLBupJ753RcWs6rRd/WFMXBm3+V0hJPmhkUIOre3tRESL9+/Yjjworp0WW10jZjJdklN6IJb1n5ZSOmWcq4y+zGvEW6yJ5ymQ298aIsqDZWXNqcEaLXBKgGFDSUtUHCpiAc78cKg/tDmPYVLUE3nlbh6Ho7IsQoKjSWuBIfQUY53Ni76bO5LYgtE1vDo2htATZYn11FCnYCo/He9Nmge6KlwD+I28dW5rJiHNSzyrLRSRC3GZKAcry1T5zNqBp2Wjs+hmx4gf1EYxmPcfBcgQY1giRY+IxljcXYuo9fPnWFeeEsZV5zjN7ifAEa34LF2IQ9xCuHsFfiHNrH7j/IxOCVPp7gK9EtKQvUieLikwD/jY+2UF/CPegeeDHnwfwvWct5CA==)
