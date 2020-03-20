// ==UserScript==
// @name         AcFun搜索页 输入跳转ac号
// @version      0.21

// @author       补档PO
// @description  详见 README 说明文档

// @match        https://www.acfun.cn/search?*

// ==/UserScript==

window.open('https://www.acfun.cn/v/ac' + document.URL.split("ac")[2].split(";")[0]);void(0)
