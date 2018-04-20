(function(win, ysp) {

  var utils = ysp.utils;
  ysp.customHelper = {};
  utils.extend(ysp.customHelper, {
    /* 适配中定制的公共代码放在这里 */

    /*
    // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
    foo: function(){
button-1238-btnInnerEl  menuitem-1091  menuitem-1093-itemEl
    }
    */

    // 以下两个方法用于修改原页面中的错误, 但执行时机不同
    // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
    onTargetLoad: function(aWin, doc) {
//       var interval1 = setInterval(function() {
//         if (!doc.querySelector('.login') && doc.getElementsByClassName('x-message-box').length > 0) {
//           clearInterval(interval1);
//           doc.getElementsByClassName('x-message-box')[0].querySelectorAll('#button-1005-btnInnerEl')[0].click();
//       }, 200);

//       var interval2 = setInterval(
//         function() {
//           debugger;
//           if (!doc.querySelector('.login') && doc.querySelectorAll('#west-slidemenu-innerCt')[0].querySelectorAll(".x-component").length > 0) {
//             var lth = doc.querySelectorAll('#west-slidemenu-innerCt')[0].querySelectorAll(".x-component").length;
//             for(var i=0;i<lth;i++){
//               if(doc.querySelectorAll('#west-slidemenu-innerCt')[0].querySelectorAll(".x-component")[i].textContent.indexOf('供应商质量管理')!==-1){
//                 var m1 =doc.querySelectorAll('#west-slidemenu-innerCt')[0].querySelectorAll(".x-component")[i];
//               }
//             }
//             var eventInput = m1.ownerDocument.createEvent("MouseEvents");
//             eventInput.initEvent("mouseover", true, false);
//             m1.dispatchEvent(eventInput);
//             clearInterval(interval2);
//           }
//         }, 200);

//       var interval3 = setInterval(function() {
//         if (!doc.querySelector('.login') && doc.querySelectorAll('.x-menu').length > 1 && doc.querySelectorAll('.x-menu')[1].querySelectorAll(".x-component").length > 0) {
//          var lth = doc.querySelectorAll('.x-menu')[1].querySelectorAll(".x-component").length;
          
//            for(var i=0;i<lth;i++){
//               if(doc.querySelectorAll('.x-menu')[1].querySelectorAll(".x-component")[i].textContent.indexOf('供应商推荐')!==-1){
//                 var m1 =doc.querySelectorAll('.x-menu')[1].querySelectorAll(".x-component")[i];
//               }
//             }
          
//           var eventInput = m1.ownerDocument.createEvent("MouseEvents");
//           eventInput.initEvent("mouseover", true, false);
//           m1.dispatchEvent(eventInput);
//           clearInterval(interval3);
//         }

//       }, 200);



//       var interval4 = setInterval(function() {
//         if (!doc.querySelector('.login') && doc.querySelectorAll('.x-menu').length > 2 && doc.querySelectorAll('.x-menu')[2].querySelectorAll(".x-component").length > 0) {
//           doc.querySelectorAll('.x-menu')[2].querySelectorAll(".x-component")[0].querySelectorAll(".x-menu-item-text")[0].click();
//           clearInterval(interval4);
//         }
//       }, 200);

    },

    // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
    beforeTargetLoad: function(aWin, doc) {

    },

    //登录相关接口
    //判断是否需要跳转到登录页面, 当页面匹配不上的时候会执行该方法, 若返回值为true则跳转, 否则不跳转.
    //判断是否需要跳转的思路为: 当前未登录, 系统自动跳转到了错误提示页面,
    //此时需要提取错误提示页面的特征, 保证只有跳转到错误提示页面的时候,needToLogin的返回值才为true
    needToLogin: function(doc) {
      return false;
    },

    //判断是否登录成功, 当页面匹配不上的时候会执行该方法, 若返回值为true则登录成功刷新页面, 否则不成功不刷新页面.
    //时机: 当登录后的页面不是登录前打开的页面时, 需要用到此方法实现跳转.
    //思路与needToLogin类似, 保证能够唯一区分该页面即可.
    isLoginSuccess: function(doc) {
      return false;
    }


  });

})(window, ysp);