console.log('background')
var search_input = document.getElementById('q');
// search_input.value('123')
// chrome.webRequest.onBeforeRequest.addListener (  
  
//     function(details) {  
//         chrome.tabs.query({active:true},function(tab){  
//             // 当前页面的url  
//             var pageUrl = tab[0].url;  
//             // 在这可以写判断逻辑，将请求cancel掉，或者将请求打印出来  
//             console.log("current url -> " + pageUrl);  
//             console.log('123')
//         });  
  
//     },  
       
//     {urls:["http://pub.alimama.com/*"]},  //监听页面请求,你也可以通过*来匹配。  
//     ["blocking"]   
// );  
// chrome.webRequest.onResponseStarted.addListener (  
  
//     function(details) {  
//         console.log('deatils->',details)
//         // chrome.tabs.query({active:true},function(tab){  
//         //     // 当前页面的url  
//         //     var pageUrl = tab[0].url;  
//         //     // 在这可以写判断逻辑，将请求cancel掉，或者将请求打印出来  
//         //     console.log("current url -> " + pageUrl);  
//         //     console.log('123')
//         // });  
  
//     },  
       
//     {urls:["http://pub.alimama.com/*"]},  //监听页面请求,你也可以通过*来匹配。  
//     ["blocking"]   
// );  
var callback = function(details) {
    console.log(details)
}
var  filter = {
    // urls:["http://pub.alimama.com/*"]
    urls:["<all_urls>"]
}
var extraInfoSpec = ["responseHeaders"]
chrome.webRequest.onCompleted.addListener(callback, filter, extraInfoSpec);