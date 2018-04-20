(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control8_RXuMpk: function (elem) {
      if (!elem) {
        return;
      }var data = [];if ($(elem).find(".x-message-box").length > 0) {
        $(elem).find(".x-message-box").each(function () {
          var arr = { content: [], button: [] };if ($(this)[0].className.indexOf('x-hide-offsets') == -1) {
            if ($(this).find(".x-form-display-field").length) {
              arr.content.push($(this).find(".x-form-display-field").text());
            }if ($(this).find(".x-btn").length > 0) {
              $(this).find(".x-btn").each(function () {
                if ($(this)[0].style.display !== 'none') {
                  arr.button.push($(this).text());
                }
              });
            }
          }data.push(arr);
        });
      }return data;
    },
    doAction_uiControl6_TeaO21: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = data.dataCustom;$(elem).find(".x-message-box").each(function () {
          if ($(this)[0].className.indexOf('x-hide-offsets') == -1) {
            $(this).find(".x-btn").each(function () {
              if ($(this)[0].style.display !== 'none' && $(this).text() == idx) {
                $(this).find(".x-btn-inner").click();
              }
            });
          }
        });
      }
    },
    getTemplate_uiControl6_TeaO21: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:e.target.textContent\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData || [];\n    var _this = this;\n    if(data && data[0].content.length> 0){\n      if(data[0].button){\n        var button = data[0].button.map(function(d,i){\n          return (<div data-index={i} onClick={_this.click}>{d}</div>)\n        })\n      }\n      return (\n        <div>\n      <div className='box_message'>\n         <div>{data[0].content}</div>\n         <div>{button}</div>\n        </div>\n          <div className='mark_box2'></div>\n          </div>\n      )\n    }\n    else{\n      return(<div></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: e.target.textContent\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    if (data && data[0].content.length > 0) {\n      if (data[0].button) {\n        var button = data[0].button.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { 'data-index': i, onClick: _this.click },\n            d\n          );\n        });\n      }\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          { className: 'box_message' },\n          React.createElement(\n            'div',\n            null,\n            data[0].content\n          ),\n          React.createElement(\n            'div',\n            null,\n            button\n          )\n        ),\n        React.createElement('div', { className: 'mark_box2' })\n      );\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    },
    getData_control7_Klc0Fc: function (elem) {
      if (!elem) {
        return;
      }var data = [];$(elem).find(".x-border-item").eq(0).find(".x-component").each(function () {
        data.push($(this).text());
      });return data;
    },
    doAction_uiControl5_fPS5tc: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = data.dataCustom;var m1 = $(elem).find(".x-border-item").eq(0).find(".x-component").eq(idx)[0];var eventInput = m1.ownerDocument.createEvent("MouseEvents");eventInput.initEvent("mouseover", true, false);m1.dispatchEvent(eventInput);
      }
    },
    getTemplate_uiControl5_fPS5tc: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:e.target.getAttribute('data-index')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData || [];\n    var _this = this;\n    if(data){\n      var item = data.map(function(d,i){\n        return (<li onClick={_this.click} data-index={i}>{d}</li>)\n      })\n      return (\n      <ul style={{display:'none'}} className='menu_box1'>\n        {item}\n      </ul>\n      )\n    }\n    else{\n      return(<div></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: e.target.getAttribute('data-index')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    if (data) {\n      var item = data.map(function (d, i) {\n        return React.createElement(\n          'li',\n          { onClick: _this.click, 'data-index': i },\n          d\n        );\n      });\n      return React.createElement(\n        'ul',\n        { style: { display: 'none' }, className: 'menu_box1' },\n        item\n      );\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    },
    getData_control9_SS6Uch: function (elem) {
      if (!elem) {
        return;
      }var data = [];$(elem).find(".x-menu").each(function (i) {
        if ($(this)[0].style.visibility !== 'hidden') {
          var arr = [];$(this).find(".x-component").each(function () {
            if ($(this).find(".x-menu-item-arrow").length == 0) {
              if ($(this)[0].className.indexOf('x-menu-item-active') !== -1) {
                arr.push({ text: $(this).text(), mark: '0', ac: '1' });
              } else {
                arr.push({ text: $(this).text(), mark: '0', ac: '0' });
              }
            } else {
              if ($(this)[0].className.indexOf('x-menu-item-active') !== -1) {
                arr.push({ text: $(this).text(), mark: '1', ac: '1' });
              } else {
                arr.push({ text: $(this).text(), mark: '1', ac: '0' });
              }
            }
          });data.push(arr);
        }
      });return data;
    },
    doAction_uiControl7_U7vl2n: function (data, elem) {
      if (data.eventType == 'click') {
        var idx1 = data.dataCustom.v1;var idx2 = data.dataCustom.v2;var mark = data.dataCustom.mark;var text = data.dataCustom.text; //   if (idx2 > 0) {
        //     $(elem).find(".x-menu").each(function (i) {
        //       if ($(this)[0].style.visibility !== 'hidden' && i > 0) {
        //         var m1 = $(this).find(".x-component").eq(idx1)[0];
        //         if (mark == '1') {
        //           var eventInput = m1.ownerDocument.createEvent("MouseEvents");
        //           eventInput.initEvent("mouseover", true, false);
        //           m1.dispatchEvent(eventInput);
        //         } else {
        //           $(m1).find(".x-menu-item-text").eq(0).click();
        //         }
        //       }
        //     });
        //   } else {
        //     var m1 = $(elem).find(".x-menu").eq(0).find(".x-component").eq(idx1)[0];
        //     console.log(m1);
        //     if (mark == '1') {
        //       var eventInput = m1.ownerDocument.createEvent("MouseEvents");
        //       eventInput.initEvent("mouseover", true, false);
        //       m1.dispatchEvent(eventInput);
        //     } else {
        //       $(m1).find(".x-menu-item-text").eq(0).click();
        //     }
        //   }
        $(elem).find(".x-menu").each(function (i) {
          if ($(this)[0].style.visibility !== 'hidden') {
            $(this).find(".x-component").each(function () {
              if ($(this).text() == text) {
                var m1 = $(this)[0];if (mark == '1') {
                  var eventInput = m1.ownerDocument.createEvent("MouseEvents");eventInput.initEvent("mouseover", true, false);m1.dispatchEvent(eventInput);
                } else {
                  $(m1).find(".x-menu-item-text").eq(0).click();
                }
              }
            });
          }
        });
      }
    },
    getTemplate_uiControl7_U7vl2n: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:{\n          v1:e.target.getAttribute('data-index'),\n          v2:e.target.getAttribute('data-index2'),\n          mark:e.target.getAttribute('data-mark'),\n          text:e.target.textContent\n        }\n      })\n    }\n  },\n  click2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click2',\n        data:{\n          v1:e.target.getAttribute('data-index'),\n          v2:e.target.getAttribute('data-index2'),\n          mark:e.target.getAttribute('data-mark'),\n        }\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData || [];\n    var _this = this;\n    if(data){\n      var item = data.map(function(d,i){\n        return(\n          <div>\n            {\n              d.map(function(d1,i1){\n                if(d1.mark=='1' && d1.ac=='1'){\n                  return (<li className='ac' data-mark='1' onClick={_this.click} data-index2={i} data-index={i1}>{d1.text}</li>)\n                }\n               else if(d1.mark=='1' && d1.ac=='0'){\n                  return (<li data-mark='1' onClick={_this.click} data-index2={i} data-index={i1}>{d1.text}</li>)\n                }\n                else{\n                  return (<li data-mark='0' onClick={_this.click} data-index2={i} data-index={i1}>{d1.text}</li>)\n                }\n              })\n            }\n          </div>\n        )\n     \n      })\n      return (\n      <ul className='menu_box2'>\n        {item}\n      </ul>\n      )\n    }\n    else{\n      return(<div></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: {\n          v1: e.target.getAttribute('data-index'),\n          v2: e.target.getAttribute('data-index2'),\n          mark: e.target.getAttribute('data-mark'),\n          text: e.target.textContent\n        }\n      });\n    }\n  },\n  click2: function click2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click2',\n        data: {\n          v1: e.target.getAttribute('data-index'),\n          v2: e.target.getAttribute('data-index2'),\n          mark: e.target.getAttribute('data-mark')\n        }\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    if (data) {\n      var item = data.map(function (d, i) {\n        return React.createElement(\n          'div',\n          null,\n          d.map(function (d1, i1) {\n            if (d1.mark == '1' && d1.ac == '1') {\n              return React.createElement(\n                'li',\n                { className: 'ac', 'data-mark': '1', onClick: _this.click, 'data-index2': i, 'data-index': i1 },\n                d1.text\n              );\n            } else if (d1.mark == '1' && d1.ac == '0') {\n              return React.createElement(\n                'li',\n                { 'data-mark': '1', onClick: _this.click, 'data-index2': i, 'data-index': i1 },\n                d1.text\n              );\n            } else {\n              return React.createElement(\n                'li',\n                { 'data-mark': '0', onClick: _this.click, 'data-index2': i, 'data-index': i1 },\n                d1.text\n              );\n            }\n          })\n        );\n      });\n      return React.createElement(\n        'ul',\n        { className: 'menu_box2' },\n        item\n      );\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    },
    getData_control4_dc486M: function (elem) {
      if (!elem) {
        return;
      } //console.log(elem);
      var data = { content: [], title: [], button: [], status: [] };var ccc = elem.ownerDocument.body;var ddd = [];if ($(ccc).children(".ux-desktop-active-win").text().indexOf('基本信息') == -1) {
        data.status.push('1');
      } else {
        data.status.push("2");
      } //console.log(elem)
      var elem = $(elem).children(".x-window-body").children(".x-panel").children(".x-panel-body").children(".x-panel").eq(1)[0];if ($(elem).find(".x-toolbar").length > 0) {
        var elem1 = $(elem).find(".x-toolbar").eq(0)[0];$(elem1).find("a").each(function () {
          if ($(this)[0].style.display !== 'none') {
            data.button.push($(this).text().trim());
          }
        });
      }if ($(elem).find(".x-box-target").length > 0) {
        var elem2 = $(elem).find(".x-box-target").eq(1)[0]; //console.log(elem2)
        //var elem3 = $(elem).find(".x-box-target").eq(2)[0];
        if ($(elem2).children(".x-panel").length > 0) {
          $(elem2).find(".x-column-header").each(function (i) {
            if ($(this)[0].style.display !== 'none' && i > 0) {
              data.title.push($(this).text());
            }
          });
        }$(elem).find("tbody").eq(0).children("tr").each(function (i) {
          var arr1 = [];$(this).children("td").each(function (i) {
            if (i > 0) {
              arr1.push($(this).text().trim());
            }
          });$(elem).find("tbody").eq(1).children("tr").eq(i).children("td").each(function () {
            arr1.push($(this).text().trim());
          });data.content.push(arr1);
        });
      }return data;
    },
    doAction_uiControl3_plbsUX: function (data, elem) {
      //.find(".x-box-target").eq(0)[0];
      // toggle:function(e){
      //     if(e.target.className =='down'){
      //        var _tt = e.target.parentElement.parentElement.parentElement;
      //        var _target =  _tt.querySelectorAll('section');
      //        var length = _tt.querySelectorAll('section').length;
      //        if(e.target.children.className=='down'){
      //          e.target.children.className='up';
      //        }
      //        else if(e.target.children.className=='up'){
      //          e.target.children.className='down';
      //       }
      //        for(var i=0 ; i < length; i++){
      //           if(_target[i].style.display=='none'){
      //            _target[i].style.display='block';
      //          }
      //          else{                                 		_target[i].style.display='none';
      //          }
      //       }
      //    }
      //  },
      if (data.eventType == 'check') {
        var val = data.dataCustom;var elem = $(elem).children(".x-window-body").children(".x-panel").children(".x-panel-body").children(".x-panel").eq(1)[0];$(elem).find("tbody").eq(0).children('tr').eq(val).children("td").eq(0).find(".x-grid-row-checker").click();
      }if (data.eventType == 'button') {
        var val = data.dataCustom;var elem = $(elem).children(".x-window-body").children(".x-panel").children(".x-panel-body").children(".x-panel").eq(1)[0];if ($(elem).find(".x-toolbar").length > 0) {
          var elem1 = $(elem).find(".x-toolbar").eq(0)[0];$(elem1).find("a").eq(val).click();
        }
      }if (data.eventType == 'click1') {
        //debugger;
        var val = data.dataCustom;var elem = $(elem).children(".x-window-body").children(".x-panel").children(".x-panel-body").children(".x-panel").eq(1)[0];$(elem).find("tbody").eq(0).children('tr').eq(val).find("a").eq(0).click();
      }if (data.eventType == 'close') {
        debugger;$(elem).children(".x-window-header").find(".x-tool-close").click();
      }
    },
    getTemplate_uiControl3_plbsUX: function () {
      var selfTemplate = "module.exports = React.createClass({\n  close:function(e){\n  var handler =this.props.customHandler;\n  if(handler){\n    handler({\n      eventType:'close'\n    })\n  }\n},\n  toggle:function(e){\n    var _tt = e.target.parentElement.parentElement;\n     if(e.target.className =='down'){\n      e.target.className='up';\n      _tt.className='on_box';\n    }\n    else if(e.target.className =='up'){\n      e.target.className='down';\n      _tt.className='off_box';\n    }\n  },\ncheck:function(e){\n  var handler =this.props.customHandler;\n  if(handler){\n    handler({\n      data:e.target.getAttribute('data-index'),\n      eventType:'check'\n    })\n  }\n},\n  button:function(e){\n  var handler =this.props.customHandler;\n  if(handler){\n    handler({\n      data:e.target.getAttribute('data-index'),\n      eventType:'button'\n    })\n  }\n},\n click1:function(e){\n  var handler =this.props.customHandler;\n   if(e.target.tagName=='INPUT'){\n     return ;\n   }\n  else if(e.target.className=='down'){\n     return ;\n   }\n  else if(e.target.className=='up'){\n     return ;\n   }\n   else if(e.target.className=='lin'){\n      var _target = e.target.parentElement;\n     }\n   else if(e.target.tagName=='SPAN'){\n      var _target = e.target.parentElement.parentElement;\n     }\n    else if(e.target.className=='lll'){\n      var _target = e.target.parentElement.parentElement.parentElement;\n     }\n  if(handler){\n    handler({\n      data:_target.getAttribute('data-index'),\n      eventType:'click1'\n    })\n  }\n},\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  render: function() {\n    var data = this.props.customData|| [];\n    var _this = this;\n    if(data.content){\n      if(data.button.length > 0){\n      var button =  data.button.map(function(d1,i1){\n          return(<p data-index={i1} onClick={_this.button}><a>{d1}</a></p>)\n        })\n      }\n     var item = data.content.map(function(d,i){\n        return (<section data-index={i} className='off_box' onClick={_this.click1}>\n            <input onClick={_this.check} type='checkbox' data-index = {i}/>\n            {\n              d.map(function(d1,i1){\n                if(i1==0){\n                  \treturn(<div className='lin'><span className='oneline'><div className='lll'>{data.title[i1]}</div></span><span className='tt' style ={{\"width\": \"calc(100% - 120px)\"}} >{d1}</span><div onClick={_this.toggle} className='down'></div></div>)     \n                }\n                else{\n                  \treturn(<div className='lin'><span className='oneline'><div className='lll'>{data.title[i1]}</div></span><span className='tt' style ={{\"width\": \"calc(100% - 80px)\"}} >{d1}</span></div>)     \n                }  \n           \t })\n            }\n          </section>)\n      })\n    }\n    if(data.status =='1'){\n      return (\n        <div className='box_todo'>\n          <div style={{display:'none'}} className = 'close' onClick={_this.close}>\u5173\u95ED</div>\n          <div className='toolbar_box'>{button}</div>\n         {item}\n        </div>\n      )\n    }\n    else{\n      return(<div></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  close: function close(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'close'\n      });\n    }\n  },\n  toggle: function toggle(e) {\n    var _tt = e.target.parentElement.parentElement;\n    if (e.target.className == 'down') {\n      e.target.className = 'up';\n      _tt.className = 'on_box';\n    } else if (e.target.className == 'up') {\n      e.target.className = 'down';\n      _tt.className = 'off_box';\n    }\n  },\n  check: function check(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: e.target.getAttribute('data-index'),\n        eventType: 'check'\n      });\n    }\n  },\n  button: function button(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: e.target.getAttribute('data-index'),\n        eventType: 'button'\n      });\n    }\n  },\n  click1: function click1(e) {\n    var handler = this.props.customHandler;\n    if (e.target.tagName == 'INPUT') {\n      return;\n    } else if (e.target.className == 'down') {\n      return;\n    } else if (e.target.className == 'up') {\n      return;\n    } else if (e.target.className == 'lin') {\n      var _target = e.target.parentElement;\n    } else if (e.target.tagName == 'SPAN') {\n      var _target = e.target.parentElement.parentElement;\n    } else if (e.target.className == 'lll') {\n      var _target = e.target.parentElement.parentElement.parentElement;\n    }\n    if (handler) {\n      handler({\n        data: _target.getAttribute('data-index'),\n        eventType: 'click1'\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    if (data.content) {\n      if (data.button.length > 0) {\n        var button = data.button.map(function (d1, i1) {\n          return React.createElement(\n            'p',\n            { 'data-index': i1, onClick: _this.button },\n            React.createElement(\n              'a',\n              null,\n              d1\n            )\n          );\n        });\n      }\n      var item = data.content.map(function (d, i) {\n        return React.createElement(\n          'section',\n          { 'data-index': i, className: 'off_box', onClick: _this.click1 },\n          React.createElement('input', { onClick: _this.check, type: 'checkbox', 'data-index': i }),\n          d.map(function (d1, i1) {\n            if (i1 == 0) {\n              return React.createElement(\n                'div',\n                { className: 'lin' },\n                React.createElement(\n                  'span',\n                  { className: 'oneline' },\n                  React.createElement(\n                    'div',\n                    { className: 'lll' },\n                    data.title[i1]\n                  )\n                ),\n                React.createElement(\n                  'span',\n                  { className: 'tt', style: { \"width\": \"calc(100% - 120px)\" } },\n                  d1\n                ),\n                React.createElement('div', { onClick: _this.toggle, className: 'down' })\n              );\n            } else {\n              return React.createElement(\n                'div',\n                { className: 'lin' },\n                React.createElement(\n                  'span',\n                  { className: 'oneline' },\n                  React.createElement(\n                    'div',\n                    { className: 'lll' },\n                    data.title[i1]\n                  )\n                ),\n                React.createElement(\n                  'span',\n                  { className: 'tt', style: { \"width\": \"calc(100% - 80px)\" } },\n                  d1\n                )\n              );\n            }\n          })\n        );\n      });\n    }\n    if (data.status == '1') {\n      return React.createElement(\n        'div',\n        { className: 'box_todo' },\n        React.createElement(\n          'div',\n          { style: { display: 'none' }, className: 'close', onClick: _this.close },\n          '\\u5173\\u95ED'\n        ),\n        React.createElement(\n          'div',\n          { className: 'toolbar_box' },\n          button\n        ),\n        item\n      );\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    },
    getData_control5_3CmEE8: function (elem) {
      if (!elem) {
        return;
      }var data = [];if ($(elem).find(".ux-notification-window").length > 0) {
        $(elem).find(".ux-notification-window").each(function () {
          if ($(this)[0].className.indexOf('x-hide-offsets') == -1) {
            var content = [];content.push($(this).text().replace(/提示/, '').trim());data.push(content);
          }
        });
      }return data;
    },
    doAction_uiControl4_3ooSbg: function (data, elem) {},
    getTemplate_uiControl4_3ooSbg: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(data && data.length > 0){\n       return (\n         <div>\n        <div className='tk_box'>\n          <div className='tip'>\u63D0\u793A</div>\n         <div>{data}</div>\n        </div>\n           <div className='mark_box'></div>\n           </div>\n      )\n    }\n   else{\n     return (<div></div>)\n   }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data.length > 0) {\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          { className: 'tk_box' },\n          React.createElement(\n            'div',\n            { className: 'tip' },\n            '\\u63D0\\u793A'\n          ),\n          React.createElement(\n            'div',\n            null,\n            data\n          )\n        ),\n        React.createElement('div', { className: 'mark_box' })\n      );\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    },
    getData_control6_hbSeJM: function (elem) {
      if (!elem) {
        return;
      }var data = { status: [], tabs: [], content: [], no: [] };if ($(elem).children(".ux-desktop-active-win").length > 0 && $(elem).children(".ux-desktop-active-win").text().indexOf('基本信息') == -1) {
        data.status.push('1');
      } else {
        data.status.push("2");if ($(elem).children(".ux-desktop-active-win").find(".x-window-body").length > 0) {
          var elem1 = $(elem).children(".ux-desktop-active-win").find(".x-window-body")[0]; // console.log(elem1)
          var p1 = $(elem1).children(".x-panel").eq(0)[0];var p2 = $(elem1).children(".x-panel").eq(1)[0];if ($(p1).find("tbody").length > 0 && $(p1).find("tbody").children("tr").length > 0) {
            $(p1).find("tbody").children("tr").each(function () {
              data.tabs.push($(this).text());
            });
          }
        }
      }if ($(elem).find(".x-tab-button").length > 0 && $(elem).find(".x-tab-button").text().indexOf('基本信息') !== -1) {
        data.no.push('1');if ($(elem).children(".ux-desktop-active-win").find(".x-window-body").length > 0) {
          if ($(elem1).find(".x-tab-button").length == 1) {
            if ($(elem1).find(".x-tab-button").text().indexOf('基本信息') !== -1) {
              var tab = { title: '基本信息', button: [], content1: [], content2: [] };if ($(p2).find(".x-toolbar").length > 0 && $(p2).find(".x-toolbar").find("a").length > 0) {
                $(p2).find(".x-toolbar").find("a").each(function () {
                  if ($(this)[0].style.display !== 'none') {
                    tab.button.push($(this).text());
                  }
                });
              }if ($(p2).find("fieldset").length == 2) {
                $(p2).find("fieldset").eq(0).find(".x-field").each(function () {
                  if ($(this)[0].style.display !== 'none') {
                    var arr = [];$(this).children("tbody").children("tr").children("td").each(function (i) {
                      var arr2 = [];if ($(this).children("label").length > 0) {
                        arr2.push({ po: 'left', text: $(this).text() });
                      } else if ($(this).find("table").length > 0 && $(this).find(".x-form-spinner-up").length > 0 && $(this).find(".x-form-spinner-up").parent()[0].style.display !== 'none') {
                        if ($(this).find('input').length == 1) {
                          arr2.push({ po: 'right2', text: $(this).find("input").prop('value') });
                        }
                      } else {
                        if ($(this).find('input').length == 1 && $(this).find('input')[0].readOnly == true) {
                          arr2.push({ po: 'right', text: $(this).find("input").prop('value'), read: true });
                        } else if ($(this).find('input').length == 1 && $(this).find('input')[0].readOnly == false) {
                          arr2.push({ po: 'right', text: $(this).find("input").prop('value'), read: false });
                        }
                      }arr.push(arr2);
                    });tab.content1.push(arr);
                  }
                });$(p2).find("fieldset").eq(1).find(".x-field").each(function () {
                  if ($(this)[0].style.display !== 'none') {
                    var arr = [];$(this).children("tbody").children("tr").children("td").each(function (i) {
                      var arr2 = [];if ($(this).children("label").length > 0) {
                        arr2.push({ po: 'left', text: $(this).text() });
                      } else if ($(this).find("table").length > 0 && $(this).find(".x-form-spinner-up").length > 0 && $(this).find(".x-form-spinner-up").parent()[0].style.display !== 'none') {
                        if ($(this).find('input').length == 1) {
                          arr2.push({ po: 'right2', text: $(this).find("input").prop('value') });
                        }
                      } else {
                        if ($(this).find('input').length == 1) {
                          arr2.push({ po: 'right', text: $(this).find("input").prop('value') });
                        }
                      }arr.push(arr2);
                    });tab.content2.push(arr);
                  }
                });
              }data.content.push(tab);
            }
          }
        }
      } else if ($(elem).find(".x-tab-button").length > 0 && $(elem).find(".x-tab-button").text().indexOf('任务跟踪') !== -1) {
        data.no.push('2');if ($(elem).children(".ux-desktop-active-win").find(".x-window-body").length > 0) {
          if ($(elem1).find(".x-tab-button").length == 1) {
            if ($(elem1).find(".x-tab-button").text().indexOf('任务跟踪') !== -1) {
              var tab = { title: '任务跟踪', button: [], content1: [] };if ($(p2).find(".x-toolbar").length > 0 && $(p2).find(".x-toolbar").find("a").length > 0) {
                $(p2).find(".x-toolbar").find("a").each(function () {
                  if ($(this)[0].style.display !== 'none') {
                    tab.button.push($(this).text());
                  }
                });
              }if ($(p2).find(".x-field").length > 0) {
                $(p2).find(".x-field").each(function () {
                  if ($(this)[0].style.display !== 'none') {
                    var arr = [];$(this).children("tbody").children("tr").children("td").each(function (i) {
                      var arr2 = [];if ($(this).children("label").length > 0) {
                        arr2.push({ po: 'left', text: $(this).text() });
                      } else if ($(this).find("table").length > 0 && $(this).find(".x-form-trigger-first").length > 0 && $(this).find(".x-form-trigger-first").parent()[0].style.display !== 'none') {
                        if ($(this).find('input').length == 1) {
                          arr2.push({ po: 'right2', text: $(this).find("input").prop('value'), id: $(this).find('input').prop("id") });
                        }
                      } else {
                        if ($(this).find('input').length == 1 && $(this).find('input')[0].readOnly == true) {
                          arr2.push({ po: 'right', text: $(this).find("input").prop('value'), read: true });
                        } else if ($(this).find('input').length == 1 && $(this).find('input')[0].readOnly == false) {
                          arr2.push({ po: 'right', text: $(this).find("input").prop('value'), read: false });
                        }
                      }arr.push(arr2);
                    });tab.content1.push(arr);
                  }
                });
              }data.content.push(tab);
            }
          }
        }
      } else if ($(elem).find(".x-tab-button").length > 0 && $(elem).find(".x-tab-button").text().indexOf('工作计划审批纪录') !== -1) {
        data.no.push('3');if ($(elem).children(".ux-desktop-active-win").find(".x-window-body").length > 0) {
          if ($(elem1).find(".x-tab-button").length == 1) {
            if ($(elem1).find(".x-tab-button").text().indexOf('工作计划审批纪录') !== -1) {
              var tab = { title: '工作计划审批纪录', content: { title: [], content1: [] } };if ($(p2).find(".x-column-header").length > 0) {
                $(p2).find(".x-column-header").each(function () {
                  tab.content.title.push($(this).text());
                });
              }if ($(p2).find("tbody").length > 0 && $(p2).find("tbody").children("tr").length > 0) {
                $(p2).find("tbody").eq(0).children("tr").each(function () {
                  var arr = [];$(this).children("td").each(function () {
                    arr.push($(this).text());
                  });tab.content.content1.push(arr);
                });
              }data.content.push(tab);
            }
          }
        }
      } else if ($(elem).find(".x-tab-button").length > 0 && $(elem).find(".x-tab-button").text().indexOf('评审报告审批记录') !== -1) {
        data.no.push('4');if ($(elem).children(".ux-desktop-active-win").find(".x-window-body").length > 0) {
          if ($(elem1).find(".x-tab-button").length == 1) {
            if ($(elem1).find(".x-tab-button").text().indexOf('评审报告审批记录') !== -1) {
              var tab = { title: '评审报告审批记录', content: { title: [], content1: [] } };if ($(p2).find(".x-column-header").length > 0) {
                $(p2).find(".x-column-header").each(function () {
                  tab.content.title.push($(this).text());
                });
              }if ($(p2).find("tbody").length > 0 && $(p2).find("tbody").children("tr").length > 0) {
                $(p2).find("tbody").eq(0).children("tr").each(function () {
                  var arr = [];$(this).children("td").each(function () {
                    arr.push($(this).text());
                  });tab.content.content1.push(arr);
                });
              }data.content.push(tab);
            }
          }
        }
      } else if ($(elem).find(".x-tab-button").length > 0 && $(elem).find(".x-tab-button").text().indexOf('复审记录') !== -1) {
        data.no.push('5');if ($(elem).children(".ux-desktop-active-win").find(".x-window-body").length > 0) {
          if ($(elem1).find(".x-tab-button").length == 1) {
            if ($(elem1).find(".x-tab-button").text().indexOf('复审记录') !== -1) {
              var tab = { title: '复审记录', content: { title: [], content1: [] } };if ($(p2).find(".x-column-header").length > 0) {
                $(p2).find(".x-column-header").each(function () {
                  tab.content.title.push($(this).text());
                });
              }if ($(p2).find("tbody").length > 0 && $(p2).find("tbody").children("tr").length > 0) {
                $(p2).find("tbody").eq(0).children("tr").each(function (i) {
                  var arr = [];$(this).children("td").each(function () {
                    arr.push($(this).text().trim());
                  });$(p2).find("tbody").eq(0).children("tr").eq(i).children("td").each(function () {
                    arr.push($(this).text().trim());
                  });tab.content.content1.push(arr);
                });
              }data.content.push(tab);
            }
          }
        }
      } else if ($(elem).find(".x-tab-button").length > 0 && $(elem).find(".x-tab-button").text().indexOf('评审报告信息') !== -1) {
        // console.log(p2);
        data.no.push('6');if ($(elem).children(".ux-desktop-active-win").find(".x-window-body").length > 0) {
          if ($(elem1).find(".x-tab-button").length == 1) {
            if ($(elem1).find(".x-tab-button").text().indexOf('评审报告信息') !== -1) {
              var tab = { title: '评审报告信息', button: [], content1: [], content2: { title: [], content: [] }, content3: [], content4: { title: [], content: [] } }; // console.log($(p2).find(".x-toolbar").length)
              if ($(p2).find(".x-toolbar").length > 0 && $(p2).find(".x-toolbar").find("a").length > 0) {
                if ($(p2).find(".x-toolbar").eq(0).find('.x-box-target').children("table").length > 0 && $(p2).find(".x-toolbar").eq(0).find('.x-box-target').children("table")[0].style.display !== 'none' && $(p2).find(".x-toolbar").eq(0).find('.x-box-target').children("table").find("a").length > 0) {
                  tab.button.push($(p2).find(".x-toolbar").eq(0).find('.x-box-target').children("table").find("a").text());
                }$(p2).find(".x-toolbar").eq(0).find('.x-box-target').children("a").each(function () {
                  if ($(this)[0].style.display !== 'none') {
                    tab.button.push($(this).text());
                  }
                });
              }if ($(p2).find("fieldset").length > 0) {
                var field1 = $(p2).find("fieldset").eq(0)[0];$(field1).find(".x-field").each(function () {
                  if ($(this)[0].style.display !== 'none') {
                    var arr = [];$(this).children("tbody").children("tr").children("td").each(function (i) {
                      var arr2 = [];if ($(this).children("label").length > 0) {
                        arr2.push({ po: 'left', text: $(this).text() });
                      } else if ($(this).find("table").length > 0 && $(this).find(".x-form-trigger-first").length > 0 && $(this).find(".x-form-trigger-first").parent()[0].style.display !== 'none') {
                        if ($(this).find('input').length == 1) {
                          arr2.push({ po: 'right2', text: $(this).find("input").prop('value'), id: $(this).find('input').prop("id") });
                        }
                      } else {
                        if ($(this).find('input').length == 1 && $(this).find('input')[0].readOnly == true) {
                          arr2.push({ po: 'right', text: $(this).find("input").prop('value'), read: true });
                        } else if ($(this).find('input').length == 1 && $(this).find('input')[0].readOnly == false) {
                          arr2.push({ po: 'right', text: $(this).find("input").prop('value'), read: false });
                        }
                      }arr.push(arr2);
                    });tab.content1.push(arr);
                  }
                });var field2 = $(p2).find("fieldset").eq(1)[0];if ($(field2).find(".x-grid-header-ct").length > 0 && $(field2).find(".x-grid-header-ct").find(".x-column-header").length > 0) {
                  $(field2).find(".x-grid-header-ct").find(".x-column-header").each(function () {
                    if ($(this)[0].style.display !== 'none') {
                      tab.content2.title.push($(this).text());
                    }
                  });if ($(field2).find(".x-grid-header-ct").next('.x-panel-body').length > 0 && $(field2).find(".x-grid-header-ct").next('.x-panel-body').find("tbody").length > 0 && $(field2).find(".x-grid-header-ct").next('.x-panel-body').find("tbody").children("tr").length > 0) {
                    // console.log(11111111)
                    $(field2).find(".x-grid-header-ct").next('.x-panel-body').find("tbody").children("tr").each(function () {
                      var arrL = [];$(this).children("td").each(function () {
                        arrL.push($(this).text().trim());
                      });tab.content2.content.push(arrL);
                    });
                  }
                }var field3 = $(p2).find("fieldset").eq(2)[0];if ($(field3).find('textarea').length > 0) {
                  tab.content3.push($(field3).find('textarea').prop('value'));
                }var field4 = $(p2).find("fieldset").eq(3)[0];if ($(field4).find(".x-grid-header-ct").length > 0 && $(field4).find(".x-grid-header-ct").find(".x-column-header").length > 0) {
                  $(field4).find(".x-grid-header-ct").find(".x-column-header").each(function () {
                    if ($(this)[0].style.display !== 'none') {
                      tab.content4.title.push($(this).text());
                    }
                  });if ($(field4).find(".x-grid-header-ct").next('.x-panel-body').length > 0 && $(field2).find(".x-grid-header-ct").next('.x-panel-body').find("tbody").length > 0 && $(field2).find(".x-grid-header-ct").next('.x-panel-body').find("tbody").children("tr").length > 0) {
                    // console.log(11111111)
                    $(field4).find(".x-grid-header-ct").next('.x-panel-body').find("tbody").children("tr").each(function () {
                      var arrL = [];$(this).children("td").each(function () {
                        arrL.push($(this).text().trim());
                      });tab.content4.content.push(arrL);
                    });
                  }
                }
              }data.content.push(tab);
            }
          }
        }
      }return data;
    },
    doAction_uiControl8_bN1HmC: function (data, elem) {
      if (data.eventType == 'biaoshi') {
        var timeid = data.dataCustom;top.timeid = timeid;
      }if (data.eventType == 'blur') {
        var val = data.dataCustom.value;var eq = data.dataCustom.eq;if ($(elem).children(".ux-desktop-active-win").text().indexOf('基本信息') !== -1) {
          if ($(elem).children(".ux-desktop-active-win").find(".x-window-body").length > 0) {
            var elem1 = $(elem).children(".ux-desktop-active-win").find(".x-window-body")[0]; // console.log(elem1)
            var p1 = $(elem1).children(".x-panel").eq(0)[0];var p2 = $(elem1).children(".x-panel").eq(1)[0]; // console.log(p1);
            if ($(elem1).find(".x-tab-button").length == 1) {
              if ($(elem1).find(".x-tab-button").text().indexOf('基本信息') !== -1) {
                //         if ($(p2).find(".x-toolbar").length > 0 && $(p2).find(".x-toolbar").find("a").length > 0) {
                //         }
                if ($(p2).find("fieldset").length == 2) {
                  $(p2).find("fieldset").eq(0).find(".x-field").eq(eq).children("tbody").children("tr").children("td").find('input').prop("value", val);
                }
              }
            }
          }
        }
      }if (data.eventType == 'click') {
        var val = data.dataCustom;if ($(elem).children(".ux-desktop-active-win").find(".x-window-body").length > 0) {
          var elem1 = $(elem).children(".ux-desktop-active-win").find(".x-window-body")[0];var p1 = $(elem1).children(".x-panel").eq(0)[0];var p2 = $(elem1).children(".x-panel").eq(1)[0];if ($(p1).find("tbody").length > 0 && $(p1).find("tbody").children("tr").length > 0) {
            $(p1).find("tbody").children("tr").eq(val).find("div").click();
          }
        }
      }if (data.eventType == 'button') {
        // debugger;
        console.log(document.body, 2222);var val = data.dataCustom;if (val == '上传文件') {
          //debugger;
          //  console.log(top);
          top.document.getElementById("uiControl9_eIH7au").click();
        } else {
          if ($(elem).children(".ux-desktop-active-win").find(".x-window-body").length > 0) {
            var elem1 = $(elem).children(".ux-desktop-active-win").find(".x-window-body")[0];var p1 = $(elem1).children(".x-panel").eq(0)[0];var p2 = $(elem1).children(".x-panel").eq(1)[0];if ($(p2).find(".x-toolbar").length > 0 && $(p2).find(".x-toolbar").find("a").length > 0) {
              $(p2).find(".x-toolbar").find("a").each(function () {
                if ($(this).text() == val) {
                  $(this).click();
                }
              });
            }
          }
        }
      }if (data.eventType == 'changedate1') {
        // debugger;
        var timeid = top.timeid;var val = data.dataCustom.value;console.log(timeid);if ($(elem).children(".ux-desktop-active-win").find(".x-window-body").length > 0) {
          var elem1 = $(elem).children(".ux-desktop-active-win").find(".x-window-body")[0];var p1 = $(elem1).children(".x-panel").eq(0)[0];var p2 = $(elem1).children(".x-panel").eq(1)[0];console.log(p2);$(p2).find("input").each(function () {
            if ($(this)[0].id == timeid) {
              $(this)[0].value = val;
            }
          });
        }
      }
    },
    getTemplate_uiControl8_bN1HmC: function () {
      var selfTemplate = "module.exports = React.createClass({\n  biaoshi:function(e){\n    if(e.target.tagName=='INPUT'){\n      var _target = e.target;\n    }\n    else if(e.target.tagName=='SPAN'){\n      var _target = e.target.nextElementSibling;\n    }\n    else if(e.target.className=='field-group'){\n      var _target = e.target.querySelectorAll('input')[0];\n    }\n    var handler = this.props.customHandler;\n    handler({\n      data:_target.id,\n      eventType: 'biaoshi'\n    })\n  },\n  changedate1:function(e){\n    // if(e.target.tagName=='INPUT'){\n    //   var _target = e.target;\n    // }\n    // else if(e.target.tagName=='SPAN'){\n    //   var _target = e.target.nextElementSibling;\n    // }\n    // else if(e.target.className=='field-group'){\n    //   var _target = e.target.querySelectorAll('input')[0];\n    // }\n    var handler = this.props.customHandler;\n    handler({\n      data:{\n        value:e.value\n      }, \n      eventType: 'changedate1'\n    })\n  },\n  blur:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'blur',\n        data:{\n          value:e.target.value,\n          eq:e.target.getAttribute('data-index')\n        }\n      })\n    }\n  },\n   click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:e.target.getAttribute('data-index')\n      })\n    }\n  },\n   button:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'button',\n        data:e.target.textContent\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData || [];\n    var _this = this;\n    if(data && data.status=='2'){\n      if(data.tabs && data.tabs.length > 0){\n         var tabs = data.tabs.map(function(d,i){\n          return(<li data-index={i} onClick={_this.click}>{d}</li>)\n        })\n      }    \n      if(data.no[0]=='1'){\n        if(data.content && data.content[0] && data.content[0].title && data.content[0].button && data.content[0].content1 && data.content[0].content2){\n        var item1 = data.content[0].button.map(function(d1,i1){\n          return(<div data-index={i1} onClick={_this.button}>{d1}</div>)\n        })  \n        var item2 = data.content[0].content1.map(function(d2,i2){\n          return(\n            <div className='lin_box1'>\n              {\n                d2.map(function(d3,i3){\n                  if(d3[0].po=='left'){\n                  \treturn(<span className='oneline'><div>{d3[0].text}</div></span>)\n                  }\n                  else if(d3[0].po=='right' && d3[0].read==true){\n                  \treturn(<AInput className='tt' style ={{\"width\": \"calc(100% - 120px)\"}} value={d3[0].text} readOnly='true' />)\n                  }\n                  else if(d3[0].po=='right' && d3[0].read==false){\n                  \treturn(<AInput className='tt' style ={{\"width\": \"calc(100% - 120px)\"}} data-index = {i2} onBlur={_this.blur} value={d3[0].text} />)\n                  }\n                   else if(d3[0].po=='right2'){\n                  \treturn(<AInput data-index = {i2} onBlur={_this.blur} className='tt' style ={{\"width\": \"calc(100% - 120px)\"}} value={d3[0].text} />)\n                  }\n                })\n              }\n            </div>\n          )\n        })  \n          var item3 = data.content[0].content2.map(function(d4,i4){\n          return(\n            <div className='lin_box1'>\n              {\n                d4.map(function(d5,i5){\n                  if(d5[0].po=='left'){\n                  \treturn(<span className='oneline'><div>{d5[0].text}</div></span>)\n                  }\n      \n                  else if(d5[0].po=='right'){\n                  \treturn(<AInput className='tt' style ={{\"width\": \"calc(100% - 120px)\"}} readOnly ='true' data-index = {i4} onBlur={_this.blur} value={d5[0].text} />)\n                  }\n                   else if(d5[0].po=='right2'){\n                  \treturn(<AInput className='tt' style ={{\"width\": \"calc(100% - 120px)\"}} value={d5[0].text} />)\n                  }\n                })\n              }\n            </div>\n          )\n        })  \n          \n          \n          \n          \n          \n          \n          \n          \n          \n          \n          \n          \n        } \n        return(<div className='z1'><ul className='too_box'>{tabs}</ul><h2>\u57FA\u672C\u4FE1\u606F</h2><div className='button_bx'>{item1}</div><h5>\u57FA\u672C\u4FE1\u606F</h5>{item2}<h5>\u4F9B\u5E94\u5546\u4FE1\u606F</h5>{item3}</div>)\n        \n      }\n      else if(data.no[0]=='2'){\n        if(data.content && data.content[0] && data.content[0].title && data.content[0].button && data.content[0].content1){\n        var item1 = data.content[0].button.map(function(d1,i1){\n          return(<div data-index={i1} onClick={_this.button}>{d1}</div>)\n        })  \n        var item2 = data.content[0].content1.map(function(d2,i2){\n          return(\n            <div className='lin_box1'>\n              {\n                d2.map(function(d3,i3){\n                  if(d3[0].po=='left'){\n                  \treturn(<span className='oneline oneline2'><div>{d3[0].text}</div></span>)\n                  }\n                  else if(d3[0].po=='right' && d3[0].read==true){\n                  \treturn(<AInput  className='tt' style ={{\"width\": \"calc(100% - 150px)\"}} value={d3[0].text} readOnly='true' />)\n                  }\n                  else if(d3[0].po=='right' && d3[0].read==false){\n                  \treturn(<AInput  className='tt' style ={{\"width\": \"calc(100% - 150px)\"}} data-index = {i2} onBlur={_this.blur} value={d3[0].text} />)\n                  }\n                   else if(d3[0].po=='right2'){\n                  \treturn(<AMUI.DateTimeInput className='tt' style ={{\"width\": \"calc(100% - 150px)\"}} onClick={_this.biaoshi} id={d3[0].id}  dateTime={d3[0].text || \"\u8BF7\u9009\u62E9\"}  format=\"YYYY-MM-DD\" amStyle='danger' interiorCustomHandler={_this.changedate1}  showTimePicker={false} />)\n                  }\n                })\n              }\n            </div>\n          )\n        })  \n        \n          \n          \n          \n          \n          \n          \n        } \n        return(<div className='z2'><ul className='too_box'>{tabs}</ul><h2>\u4EFB\u52A1\u8DDF\u8E2A</h2><div className='button_bx'>{item1}</div>{item2}</div>)\n      }\n      else if(data.no[0]=='3'){\n        \n        \n        \n        \n        \n        var item = data.content[0].content.content1.map(function(d,i){\n        return (<section data-index={i} className='off_box' onClick={_this.click1}>\n            {\n              d.map(function(d1,i1){\n                if(i1==0){\n                  \treturn(<div></div>)     \n                }\n                else{\n                  \treturn(<div className='lin'><span className='oneline'><div className='lll'>{data.content[0].content.title[i1]}</div></span><span className='tt' style ={{\"width\": \"calc(100% - 80px)\"}} >{d1}</span></div>)     \n                }  \n           \t })\n            }\n          </section>)\n      })\n       \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        return(<div className='z4'><ul className='too_box'>{tabs}</ul><h2>\u5DE5\u4F5C\u8BA1\u5212\u5BA1\u6279\u8BB0\u5F55</h2>{item}</div>)\n        \n      }\n      else if(data.no[0]=='4'){\n        \n        \n        \n        \n        \n        var item = data.content[0].content.content1.map(function(d,i){\n        return (<section data-index={i} className='off_box' onClick={_this.click1}>\n            {\n              d.map(function(d1,i1){\n                if(i1==0){\n                  \treturn(<div></div>)     \n                }\n                else{\n                  \treturn(<div className='lin'><span className='oneline'><div className='lll'>{data.content[0].content.title[i1]}</div></span><span className='tt' style ={{\"width\": \"calc(100% - 80px)\"}} >{d1}</span></div>)     \n                }  \n           \t })\n            }\n          </section>)\n      }) \n        return(<div className='z4'><ul className='too_box'>{tabs}</ul><h2>\u8BC4\u5BA1\u62A5\u544A\u5BA1\u6279\u8BB0\u5F55</h2>{item}</div>)\n        \n      }\n      \n      \n      \n      \n      \n      \n      \n      \n      \n      \n      \n      \n       else if(data.no[0]=='5'){\n        var item = data.content[0].content.content1.map(function(d,i){\n        return (<section data-index={i} className='off_box' onClick={_this.click1}>\n            {\n              d.map(function(d1,i1){\n                if(i1==0){\n                  \treturn(<div></div>)     \n                }\n                else{\n                  \treturn(<div className='lin'><span className='oneline'><div className='lll'>{data.content[0].content.title[i1]}</div></span><span className='tt' style ={{\"width\": \"calc(100% - 80px)\"}} >{d1}</span></div>)     \n                }  \n           \t })\n            }\n          </section>)\n      }) \n        return(<div className='z4'><ul className='too_box'>{tabs}</ul><h2>\u590D\u5BA1\u8BB0\u5F55</h2>\u6682\u65E0</div>)\n        \n      }\n      \n      \n      \n      \n      \n      \n      \n      \n      \n      else if(data.no[0]=='6'){\n        \n        if(data.content && data.content[0] && data.content[0].title && data.content[0].button){\n        var item1 = data.content[0].button.map(function(d1,i1){\n          return(<div data-index={i1} onClick={_this.button}>{d1}</div>)\n        }) \n        } \n        \n        \n        \n        var item2 = data.content[0].content1.map(function(d2,i2){\n          return(\n            <div className='lin_box1'>\n              {\n                d2.map(function(d3,i3){\n                  if(d3[0].po=='left'){\n                  \treturn(<span className='oneline'><div>{d3[0].text}</div></span>)\n                  }\n                  else if(d3[0].po=='right' && d3[0].read==true){\n                  \treturn(<AInput style ={{\"width\": \"calc(100% - 80px)\"}} value={d3[0].text} readOnly='true' />)\n                  }\n                  else if(d3[0].po=='right' && d3[0].read==false){\n                  \treturn(<AInput style ={{\"width\": \"calc(100% - 80px)\"}} data-index = {i2} onBlur={_this.blur} value={d3[0].text} />)\n                  }\n                   else if(d3[0].po=='right2'){\n                  \treturn(<AMUI.DateTimeInput style ={{\"width\": \"calc(100% - 80px)\"}} onClick={_this.biaoshi} id={d3[0].id}  dateTime={d3[0].text || \"\u8BF7\u9009\u62E9\"}  format=\"YYYY-MM-DD\" amStyle='danger' interiorCustomHandler={_this.changedate1}  showTimePicker={false} />)\n                  }\n                })\n              }\n            </div>\n          )\n        })\n        \n        \n        var item3 = data.content[0].content2.content.map(function(d,i){\n        return (<section data-index={i} className='off_box' onClick={_this.click1}>\n            {\n              d.map(function(d1,i1){\n                if(i1==0){\n                  \treturn(<div></div>)     \n                }\n                else{\n                  \treturn(<div className='lin_box1'><span className='oneline'><div className='lll'>{data.content[0].content2.title[i1]}</div></span><span className='tt' style ={{\"width\": \"calc(100% -80px)\"}} >{d1}</span></div>)     \n                }  \n           \t })\n            }\n          </section>)\n      }) \n        \n        \n        \n        var item4 = data.content[0].content4.content.map(function(d,i){\n        return (<section data-index={i} className='off_box' onClick={_this.click1}>\n            {\n              d.map(function(d1,i1){\n                if(i1==0){\n                  \treturn(<div></div>)     \n                }\n                else{\n                  \treturn(<div className='lin'><span className='oneline'><div className='lll'>{data.content[0].content4.title[i1]}</div></span><span className='tt' style ={{\"width\": \"calc(100% - 80px)\"}} >{d1}</span></div>)     \n                }  \n           \t })\n            }\n          </section>)\n      }) \n        \n        \n        \n        \n        \n        return(<div className='z2'><ul className='too_box'>{tabs}</ul><h2>\u8BC4\u5BA1\u62A5\u544A\u4FE1\u606F</h2><div className='button_bx'>{item1}</div><h3>\u57FA\u672C\u4FE1\u606F</h3>{item2}<h3>\u53C2\u8003\u6587\u4EF6</h3>{item3}<h3>\u7EFC\u5408\u8BC4\u4EF7</h3><div className='area'>{data.content[0].content3}</div><h3>\u95EE\u9898\u63CF\u8FF0</h3>{item4}</div>)\n      }\n      else{\n        return (<div></div>)\n      }\n    }\n    else{\n      return (<div></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  biaoshi: function biaoshi(e) {\n    if (e.target.tagName == 'INPUT') {\n      var _target = e.target;\n    } else if (e.target.tagName == 'SPAN') {\n      var _target = e.target.nextElementSibling;\n    } else if (e.target.className == 'field-group') {\n      var _target = e.target.querySelectorAll('input')[0];\n    }\n    var handler = this.props.customHandler;\n    handler({\n      data: _target.id,\n      eventType: 'biaoshi'\n    });\n  },\n  changedate1: function changedate1(e) {\n    // if(e.target.tagName=='INPUT'){\n    //   var _target = e.target;\n    // }\n    // else if(e.target.tagName=='SPAN'){\n    //   var _target = e.target.nextElementSibling;\n    // }\n    // else if(e.target.className=='field-group'){\n    //   var _target = e.target.querySelectorAll('input')[0];\n    // }\n    var handler = this.props.customHandler;\n    handler({\n      data: {\n        value: e.value\n      },\n      eventType: 'changedate1'\n    });\n  },\n  blur: function blur(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'blur',\n        data: {\n          value: e.target.value,\n          eq: e.target.getAttribute('data-index')\n        }\n      });\n    }\n  },\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: e.target.getAttribute('data-index')\n      });\n    }\n  },\n  button: function button(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'button',\n        data: e.target.textContent\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    if (data && data.status == '2') {\n      if (data.tabs && data.tabs.length > 0) {\n        var tabs = data.tabs.map(function (d, i) {\n          return React.createElement(\n            'li',\n            { 'data-index': i, onClick: _this.click },\n            d\n          );\n        });\n      }\n      if (data.no[0] == '1') {\n        if (data.content && data.content[0] && data.content[0].title && data.content[0].button && data.content[0].content1 && data.content[0].content2) {\n          var item1 = data.content[0].button.map(function (d1, i1) {\n            return React.createElement(\n              'div',\n              { 'data-index': i1, onClick: _this.button },\n              d1\n            );\n          });\n          var item2 = data.content[0].content1.map(function (d2, i2) {\n            return React.createElement(\n              'div',\n              { className: 'lin_box1' },\n              d2.map(function (d3, i3) {\n                if (d3[0].po == 'left') {\n                  return React.createElement(\n                    'span',\n                    { className: 'oneline' },\n                    React.createElement(\n                      'div',\n                      null,\n                      d3[0].text\n                    )\n                  );\n                } else if (d3[0].po == 'right' && d3[0].read == true) {\n                  return React.createElement(AInput, { className: 'tt', style: { \"width\": \"calc(100% - 120px)\" }, value: d3[0].text, readOnly: 'true' });\n                } else if (d3[0].po == 'right' && d3[0].read == false) {\n                  return React.createElement(AInput, { className: 'tt', style: { \"width\": \"calc(100% - 120px)\" }, 'data-index': i2, onBlur: _this.blur, value: d3[0].text });\n                } else if (d3[0].po == 'right2') {\n                  return React.createElement(AInput, { 'data-index': i2, onBlur: _this.blur, className: 'tt', style: { \"width\": \"calc(100% - 120px)\" }, value: d3[0].text });\n                }\n              })\n            );\n          });\n          var item3 = data.content[0].content2.map(function (d4, i4) {\n            return React.createElement(\n              'div',\n              { className: 'lin_box1' },\n              d4.map(function (d5, i5) {\n                if (d5[0].po == 'left') {\n                  return React.createElement(\n                    'span',\n                    { className: 'oneline' },\n                    React.createElement(\n                      'div',\n                      null,\n                      d5[0].text\n                    )\n                  );\n                } else if (d5[0].po == 'right') {\n                  return React.createElement(AInput, { className: 'tt', style: { \"width\": \"calc(100% - 120px)\" }, readOnly: 'true', 'data-index': i4, onBlur: _this.blur, value: d5[0].text });\n                } else if (d5[0].po == 'right2') {\n                  return React.createElement(AInput, { className: 'tt', style: { \"width\": \"calc(100% - 120px)\" }, value: d5[0].text });\n                }\n              })\n            );\n          });\n        }\n        return React.createElement(\n          'div',\n          { className: 'z1' },\n          React.createElement(\n            'ul',\n            { className: 'too_box' },\n            tabs\n          ),\n          React.createElement(\n            'h2',\n            null,\n            '\\u57FA\\u672C\\u4FE1\\u606F'\n          ),\n          React.createElement(\n            'div',\n            { className: 'button_bx' },\n            item1\n          ),\n          React.createElement(\n            'h5',\n            null,\n            '\\u57FA\\u672C\\u4FE1\\u606F'\n          ),\n          item2,\n          React.createElement(\n            'h5',\n            null,\n            '\\u4F9B\\u5E94\\u5546\\u4FE1\\u606F'\n          ),\n          item3\n        );\n      } else if (data.no[0] == '2') {\n        if (data.content && data.content[0] && data.content[0].title && data.content[0].button && data.content[0].content1) {\n          var item1 = data.content[0].button.map(function (d1, i1) {\n            return React.createElement(\n              'div',\n              { 'data-index': i1, onClick: _this.button },\n              d1\n            );\n          });\n          var item2 = data.content[0].content1.map(function (d2, i2) {\n            return React.createElement(\n              'div',\n              { className: 'lin_box1' },\n              d2.map(function (d3, i3) {\n                if (d3[0].po == 'left') {\n                  return React.createElement(\n                    'span',\n                    { className: 'oneline oneline2' },\n                    React.createElement(\n                      'div',\n                      null,\n                      d3[0].text\n                    )\n                  );\n                } else if (d3[0].po == 'right' && d3[0].read == true) {\n                  return React.createElement(AInput, { className: 'tt', style: { \"width\": \"calc(100% - 150px)\" }, value: d3[0].text, readOnly: 'true' });\n                } else if (d3[0].po == 'right' && d3[0].read == false) {\n                  return React.createElement(AInput, { className: 'tt', style: { \"width\": \"calc(100% - 150px)\" }, 'data-index': i2, onBlur: _this.blur, value: d3[0].text });\n                } else if (d3[0].po == 'right2') {\n                  return React.createElement(AMUI.DateTimeInput, { className: 'tt', style: { \"width\": \"calc(100% - 150px)\" }, onClick: _this.biaoshi, id: d3[0].id, dateTime: d3[0].text || \"\u8BF7\u9009\u62E9\", format: 'YYYY-MM-DD', amStyle: 'danger', interiorCustomHandler: _this.changedate1, showTimePicker: false });\n                }\n              })\n            );\n          });\n        }\n        return React.createElement(\n          'div',\n          { className: 'z2' },\n          React.createElement(\n            'ul',\n            { className: 'too_box' },\n            tabs\n          ),\n          React.createElement(\n            'h2',\n            null,\n            '\\u4EFB\\u52A1\\u8DDF\\u8E2A'\n          ),\n          React.createElement(\n            'div',\n            { className: 'button_bx' },\n            item1\n          ),\n          item2\n        );\n      } else if (data.no[0] == '3') {\n\n        var item = data.content[0].content.content1.map(function (d, i) {\n          return React.createElement(\n            'section',\n            { 'data-index': i, className: 'off_box', onClick: _this.click1 },\n            d.map(function (d1, i1) {\n              if (i1 == 0) {\n                return React.createElement('div', null);\n              } else {\n                return React.createElement(\n                  'div',\n                  { className: 'lin' },\n                  React.createElement(\n                    'span',\n                    { className: 'oneline' },\n                    React.createElement(\n                      'div',\n                      { className: 'lll' },\n                      data.content[0].content.title[i1]\n                    )\n                  ),\n                  React.createElement(\n                    'span',\n                    { className: 'tt', style: { \"width\": \"calc(100% - 80px)\" } },\n                    d1\n                  )\n                );\n              }\n            })\n          );\n        });\n\n        return React.createElement(\n          'div',\n          { className: 'z4' },\n          React.createElement(\n            'ul',\n            { className: 'too_box' },\n            tabs\n          ),\n          React.createElement(\n            'h2',\n            null,\n            '\\u5DE5\\u4F5C\\u8BA1\\u5212\\u5BA1\\u6279\\u8BB0\\u5F55'\n          ),\n          item\n        );\n      } else if (data.no[0] == '4') {\n\n        var item = data.content[0].content.content1.map(function (d, i) {\n          return React.createElement(\n            'section',\n            { 'data-index': i, className: 'off_box', onClick: _this.click1 },\n            d.map(function (d1, i1) {\n              if (i1 == 0) {\n                return React.createElement('div', null);\n              } else {\n                return React.createElement(\n                  'div',\n                  { className: 'lin' },\n                  React.createElement(\n                    'span',\n                    { className: 'oneline' },\n                    React.createElement(\n                      'div',\n                      { className: 'lll' },\n                      data.content[0].content.title[i1]\n                    )\n                  ),\n                  React.createElement(\n                    'span',\n                    { className: 'tt', style: { \"width\": \"calc(100% - 80px)\" } },\n                    d1\n                  )\n                );\n              }\n            })\n          );\n        });\n        return React.createElement(\n          'div',\n          { className: 'z4' },\n          React.createElement(\n            'ul',\n            { className: 'too_box' },\n            tabs\n          ),\n          React.createElement(\n            'h2',\n            null,\n            '\\u8BC4\\u5BA1\\u62A5\\u544A\\u5BA1\\u6279\\u8BB0\\u5F55'\n          ),\n          item\n        );\n      } else if (data.no[0] == '5') {\n        var item = data.content[0].content.content1.map(function (d, i) {\n          return React.createElement(\n            'section',\n            { 'data-index': i, className: 'off_box', onClick: _this.click1 },\n            d.map(function (d1, i1) {\n              if (i1 == 0) {\n                return React.createElement('div', null);\n              } else {\n                return React.createElement(\n                  'div',\n                  { className: 'lin' },\n                  React.createElement(\n                    'span',\n                    { className: 'oneline' },\n                    React.createElement(\n                      'div',\n                      { className: 'lll' },\n                      data.content[0].content.title[i1]\n                    )\n                  ),\n                  React.createElement(\n                    'span',\n                    { className: 'tt', style: { \"width\": \"calc(100% - 80px)\" } },\n                    d1\n                  )\n                );\n              }\n            })\n          );\n        });\n        return React.createElement(\n          'div',\n          { className: 'z4' },\n          React.createElement(\n            'ul',\n            { className: 'too_box' },\n            tabs\n          ),\n          React.createElement(\n            'h2',\n            null,\n            '\\u590D\\u5BA1\\u8BB0\\u5F55'\n          ),\n          '\\u6682\\u65E0'\n        );\n      } else if (data.no[0] == '6') {\n\n        if (data.content && data.content[0] && data.content[0].title && data.content[0].button) {\n          var item1 = data.content[0].button.map(function (d1, i1) {\n            return React.createElement(\n              'div',\n              { 'data-index': i1, onClick: _this.button },\n              d1\n            );\n          });\n        }\n\n        var item2 = data.content[0].content1.map(function (d2, i2) {\n          return React.createElement(\n            'div',\n            { className: 'lin_box1' },\n            d2.map(function (d3, i3) {\n              if (d3[0].po == 'left') {\n                return React.createElement(\n                  'span',\n                  { className: 'oneline' },\n                  React.createElement(\n                    'div',\n                    null,\n                    d3[0].text\n                  )\n                );\n              } else if (d3[0].po == 'right' && d3[0].read == true) {\n                return React.createElement(AInput, { style: { \"width\": \"calc(100% - 80px)\" }, value: d3[0].text, readOnly: 'true' });\n              } else if (d3[0].po == 'right' && d3[0].read == false) {\n                return React.createElement(AInput, { style: { \"width\": \"calc(100% - 80px)\" }, 'data-index': i2, onBlur: _this.blur, value: d3[0].text });\n              } else if (d3[0].po == 'right2') {\n                return React.createElement(AMUI.DateTimeInput, { style: { \"width\": \"calc(100% - 80px)\" }, onClick: _this.biaoshi, id: d3[0].id, dateTime: d3[0].text || \"\u8BF7\u9009\u62E9\", format: 'YYYY-MM-DD', amStyle: 'danger', interiorCustomHandler: _this.changedate1, showTimePicker: false });\n              }\n            })\n          );\n        });\n\n        var item3 = data.content[0].content2.content.map(function (d, i) {\n          return React.createElement(\n            'section',\n            { 'data-index': i, className: 'off_box', onClick: _this.click1 },\n            d.map(function (d1, i1) {\n              if (i1 == 0) {\n                return React.createElement('div', null);\n              } else {\n                return React.createElement(\n                  'div',\n                  { className: 'lin_box1' },\n                  React.createElement(\n                    'span',\n                    { className: 'oneline' },\n                    React.createElement(\n                      'div',\n                      { className: 'lll' },\n                      data.content[0].content2.title[i1]\n                    )\n                  ),\n                  React.createElement(\n                    'span',\n                    { className: 'tt', style: { \"width\": \"calc(100% -80px)\" } },\n                    d1\n                  )\n                );\n              }\n            })\n          );\n        });\n\n        var item4 = data.content[0].content4.content.map(function (d, i) {\n          return React.createElement(\n            'section',\n            { 'data-index': i, className: 'off_box', onClick: _this.click1 },\n            d.map(function (d1, i1) {\n              if (i1 == 0) {\n                return React.createElement('div', null);\n              } else {\n                return React.createElement(\n                  'div',\n                  { className: 'lin' },\n                  React.createElement(\n                    'span',\n                    { className: 'oneline' },\n                    React.createElement(\n                      'div',\n                      { className: 'lll' },\n                      data.content[0].content4.title[i1]\n                    )\n                  ),\n                  React.createElement(\n                    'span',\n                    { className: 'tt', style: { \"width\": \"calc(100% - 80px)\" } },\n                    d1\n                  )\n                );\n              }\n            })\n          );\n        });\n\n        return React.createElement(\n          'div',\n          { className: 'z2' },\n          React.createElement(\n            'ul',\n            { className: 'too_box' },\n            tabs\n          ),\n          React.createElement(\n            'h2',\n            null,\n            '\\u8BC4\\u5BA1\\u62A5\\u544A\\u4FE1\\u606F'\n          ),\n          React.createElement(\n            'div',\n            { className: 'button_bx' },\n            item1\n          ),\n          React.createElement(\n            'h3',\n            null,\n            '\\u57FA\\u672C\\u4FE1\\u606F'\n          ),\n          item2,\n          React.createElement(\n            'h3',\n            null,\n            '\\u53C2\\u8003\\u6587\\u4EF6'\n          ),\n          item3,\n          React.createElement(\n            'h3',\n            null,\n            '\\u7EFC\\u5408\\u8BC4\\u4EF7'\n          ),\n          React.createElement(\n            'div',\n            { className: 'area' },\n            data.content[0].content3\n          ),\n          React.createElement(\n            'h3',\n            null,\n            '\\u95EE\\u9898\\u63CF\\u8FF0'\n          ),\n          item4\n        );\n      } else {\n        return React.createElement('div', null);\n      }\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    },

    getData_control12_i4sdxI: function (elem) {
      if (!elem) {
        return;
      }var data = [];if ($(elem).children(".ux-desktop-active-win").length > 0 && $(elem).children(".ux-desktop-active-win").find(".x-tool-close").length > 0) {
        data.push($(elem).children(".ux-desktop-active-win").find(".x-tool-close").prop('src'));
      }return data;
    },
    doAction_uiControl11_oMEIGd: function (data, elem) {
      if (data.eventType == 'close') {
        // debugger;
        if ($(elem).children(".ux-desktop-active-win").length > 0 && $(elem).children(".ux-desktop-active-win").find(".x-tool-close").length > 0) {
          data.push($(elem).children(".ux-desktop-active-win").find(".x-tool-close").click());
        }
      }
    },
    getTemplate_uiControl11_oMEIGd: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:\"\u6D41\u7A0B\"}} \n       backIsShow = {this.props.customData&&this.props.customData.length > 0 ? true : false}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'close'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}\n\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: \"\u6D41\u7A0B\" },\n        backIsShow: this.props.customData && this.props.customData.length > 0 ? true : false,\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'close'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "index");
})(window, ysp);