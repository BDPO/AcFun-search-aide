// ==UserScript==
// @name         AcFun搜索页 输入跳转ac号 V3
// @version      0.3

// @description  详见 README 说明文档
// @author       补档PO

// @match        https://www.acfun.cn/search?*

// @grant        none

// ==/UserScript==

/* 使用 if 语句 判断当前网页URL，是否进入了搜索页的复杂URL
=true 执行 window.location.href.replace 语句，转换页面地址
=false 执行 window.open 语句，在新标签打开搜索项
*/

if (window.location.href.indexOf('www.acfun.cn/search?type=complex&keyword=') > 0)
{
window.location.href = window.location.href.replace('www.acfun.cn/search?type=complex&keyword=', 'www.acfun.cn/search?keyword=')
}

else
{
// 使用 window.open 函数打开一个新页面，页面地址由以下两部分组成
window.open('https://www.acfun.cn/v/ac' + document.URL.split("ac")[2].split(";")[0]);void(0)
}
