// $(document).ready(function() {
//   window.onload = function() {
//     
//    
// });
// zhege shi v1 


// 这里是测试
(function () {
  $(document).ready(function () {
    /**
//      * 在onload结束后，网页还会加载一遍（不晓得为啥）,这个时候虽然能拿到输入框的值，但是里面的是空的，所以每隔300毫秒检查一遍
//      * 这里应该加个次数，大于多少次，告诉后端系统错误
//      * **/
    function getSearchInput() {   // 搜索框赋值，并点击
      var search_input = document.getElementsByClassName("search-inp");
      var search_button = document.getElementsByClassName('search-btn')
      console.log(search_button)
      // 这里需要加上没有商品的情况
      if (search_input.length > 0 && search_button.length > 0) {
        search_input[0].value = "WE06S9DN2000";
        $('.search-btn')[0].id = 'xcFL';
        setTimeout(function () {
          $('#xcFL').trigger('click')  //这里要检查报错  所有的都要检查报错，报错就要重新开始。  所有的点击事件都要检查报错，报错就重新点击
          clickExtension()
        }, 1000)
      } else {
        setTimeout(function () {  // 每过300毫秒重新检查一次  
          getSearchInput();
        }, 300);
      }
    };

    function clickExtension() { // 点击推广
      var extensionBtn = document.getElementsByClassName("box-btn-left")
      if (extensionBtn.length > 0) {
        extensionBtn[0].id = 'xcExtensionBtn'
        trigger('xcExtensionBtn')
        submitExtension()
      } else {
        setTimeout(function () {  // 每过300毫秒重新检查一次
          clickExtension();
        }, 300);
      }
    }

    function submitExtension() {// 这里有问题
      var submitBtn = document.getElementsByClassName('dialog-ft')
      if (submitBtn.length > 0) {
        submitBtn[0].children[0].id = 'xcSubmitBtn'
        setTimeout(function() {
          $('#xcSubmitBtn').trigger('click')
          var setExtensionDom = !!document.getElementsByClassName('block-zone').length          
          if (setExtensionDom) {
            submitExtension()          
          } else {
            getGoodUrl()
          }
        },300)
      }
      else {
        setTimeout(function() {
          submitExtension()          
        }
      ,300)
      }
    }
    function getGoodUrl () {   
      var ul = document.getElementsByClassName('tab-nav')
      if (ul.length > 0) {
         var passwordBtn = ul[0].children[3]
         passwordBtn.id = 'cxPasswordBtn'
         setTimeout(function(){
          $('#cxPasswordBtn').trigger('click')
          console.log($('#clipboard-target').val())
          var code = $('#clipboard-target').val()
          if($('#clipboard-target').val()) {
            window.location.href = 'http://pub.alimama.com/promo/search/index.htm' // 这里不跳首页 关闭输入框 
          }
         },300)
      } else {
        setTimeout(function() {
          getGoodUrl()
          console.log(1)
        }
        ,300)
      }

    }
    function trigger(id) { // 原生方法实现js模拟点击
      var e = document.createEvent("MouseEvents");
      e.initEvent("click", true, true);　　　　　　　　　　　　　　//这里的click可以换成你想触发的行为
      document.getElementById(id).dispatchEvent(e);　　　//这里的clickME可以换成你想触发行为的DOM结点
    }
    getSearchInput(); //开始
  })

})()
