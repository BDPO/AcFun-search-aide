# AcFun search aide
## AcFun 搜索小辅助

如题，在acfun主站的搜索页面，输入已过审的正常ac号，形如 [ac3017313](https://www.acfun.cn/search/#query=ac3017313)<br>
即可跳转至视频详情页 https://www.acfun.cn/v/ac3017313

已知问题：在搜索页操作过一次之后，再次输入ac号，需要刷新页面<br>
因为脚本只在进入搜索页时执行一次，如果做成循环执行模式，会耗费浏览器和系统资源

原理挺简单的，我用了<br>
javascript:window.open 函数打开一个新页面，页面地址由以下两部分组成<br>
https://www.acfun.cn/v/ac + document.URL.split("ac")[2].split(";")[0]<br>
这里是主站视频页的通用前置URL，然后后面使用 split 函数，截取搜索页URL里面的ac号<br><br>
本来是想用正则表达式的，但是就目前来看，这样比较简单高效，如果有更好的办法，欢迎各位提  Issues
