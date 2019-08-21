// ==UserScript==
// @name         AcFun搜索页 输入跳转ac号
// @version      0.1
// @description  如题，在acfun主站的搜索页面，输入已过审的正常ac号，形如ac201714，即可跳转至视频详情页
// @author       补档PO
// @match        https://www.acfun.cn/search/*
// @grant        none

// ==/UserScript==

window.open('https://www.acfun.cn/v/ac' + document.URL.split("ac")[2].split(";")[0]);void(0)
