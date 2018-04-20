// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function (win, ysp) {
	var topWindow = top;
  var utils = ysp.utils;
  ysp.customHelper = {};
  utils.extend(ysp.customHelper, {
    /* 适配中定制的公共代码放在这里 */
//top.document.querySelector('#runtimeEngine').contentDocument.querySelector('#browserFrame2').querySelector('.inner-frame').contentDocument.querySelector('#mainiframe1').contentDocument.querySelector('#iframe_right').contentDocument.querySelector('#iframetr2')
    /*
    // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
    foo: function(){

    }
    */

    // 以下两个方法用于修改原页面中的错误, 但执行时机不同
    // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
    onTargetLoad: function(aWin, doc){
      // debugger;
      // if(top.document.querySelector('#runtimeEngine') &&
      //    top.document.querySelector('#runtimeEngine').contentDocument &&
      //    top.document.querySelector('#runtimeEngine').contentDocument.querySelector('#browserFrame2') && 
      //    top.document.querySelector('#runtimeEngine').contentDocument.querySelector('#browserFrame2').querySelector('.inner-frame') && 
      //    top.document.querySelector('#runtimeEngine').contentDocument.querySelector('#browserFrame2').querySelector('.inner-frame').contentDocument && 
      //    top.document.querySelector('#runtimeEngine').contentDocument.querySelector('#browserFrame2').querySelector('.inner-frame').contentDocument.querySelector('#mainiframe1') && 
      //    top.document.querySelector('#runtimeEngine').contentDocument.querySelector('#browserFrame2').querySelector('.inner-frame').contentDocument.querySelector('#mainiframe1').contentDocument && 
      //    top.document.querySelector('#runtimeEngine').contentDocument.querySelector('#browserFrame2').querySelector('.inner-frame').contentDocument.querySelector('#mainiframe1').contentDocument.querySelector('#iframe_right') && 
      //    top.document.querySelector('#runtimeEngine').contentDocument.querySelector('#browserFrame2').querySelector('.inner-frame').contentDocument.querySelector('#mainiframe1').contentDocument.querySelector('#iframe_right').contentDocument && 
      //    top.document.querySelector('#runtimeEngine').contentDocument.querySelector('#browserFrame2').querySelector('.inner-frame').contentDocument.querySelector('#mainiframe1').contentDocument.querySelector('#iframe_right').contentDocument.querySelector('#iframetr2')){
      //   top.document.querySelector('#runtimeEngine').contentDocument.querySelector('#browserFrame2').querySelector('.inner-frame').contentDocument.querySelector('#mainiframe1').contentDocument.querySelector('#iframe_right').contentDocument.querySelector('#iframetr2').previousElementSibling.click();
      //   // top.document.querySelector('#runtimeEngine').contentDocument.querySelector('#browserFrame2').querySelector('.inner-frame').contentDocument.querySelector('#mainiframe1').contentDocument.querySelector('#iframe_right').contentDocument.querySelector('#iframetr3').previousElementSibling.click()
      // }
   if(ysp.appMain.isIOS()){
           if(!aWin.setChildrenValue && aWin.setReturnValue && !doc.iframe_right && aWin.parent.childrenvalue != {} && topWindow.callback){
         debugger
         aWin.setReturnValue = function(index) {
            var retv = [];
            for(var idx in aWin.parent.childrenvalue){
              retv.push(aWin.parent.childrenvalue[idx]);
            }
            if( top.window.returnValue == null ){
              top.window.returnValue = retv;
            }else{
              var arr = top.window.returnValue;
              topWindow.callback(retv);
              arr = retv;
            }
          }
         }
      }
    },
    // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
    beforeTargetLoad: function(aWin, doc) {
      aWin.showModalDialog = function (url, params) {
        aWin.open.call(aWin, url);
        aWin._dialogArguments = params;
       // console.log(1111,params)
      };
      if (aWin.opener) {
        aWin.dialogArguments = aWin.opener._dialogArguments;
      }
      
    try {
        aWin.Object.defineProperty(aWin, 'returnValue', {
          set: function(value) {
            topWindow.VALUE = 'studio'
            this._returnValue = value;
            var callback = this.dialogArguments && this.dialogArguments.callback;
            if(ysp.appMain.isIOS()){
              topWindow.callback = callback;
            }
            if (callback) {
              callback(value);
            }
          },
          get: function() {
            return this._returnValue;
          }
        });
      if(ysp.appMain.isIOS()){
         if(aWin.opener && aWin.opener._dialogArguments){
          aWin.returnValue = aWin.dialogArguments;
     	 	}
      }
     if(ysp.appMain.isIOS()){
           if(!aWin.setChildrenValue && aWin.setReturnValue && !doc.iframe_right && aWin.parent.childrenvalue != {} && topWindow.callback){
         debugger
         aWin.setReturnValue = function(index) {
            var retv = [];
            for(var idx in aWin.parent.childrenvalue){
              retv.push(aWin.parent.childrenvalue[idx]);
            }
            if( top.window.returnValue == null ){

              top.window.returnValue = retv;
            }else{
              var arr = top.window.returnValue;
              if(topWindow.callback){
                topWindow.callback(retv);
              }
              
              arr = retv;
            }
          }
         }
      }
      } catch(e) {}
      
      
      
      	
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
