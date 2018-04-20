'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control28_efTIx0: function (elem) {
      if (!elem) {
        return;
      }var data = [];$(elem).find(".dTreeNode").each(function () {
        if ($(this).parent()[0].style.display == 'none' || $(this).parent().parent()[0].style.display == 'none') {
          if ($(this).children("a").length == 0) {
            if ($(this).children('img').length == 1) {
              data.push({ text: $(this).text(), lth: '1', status: 'no', aa: 'no',
                href: 'no', display: 'none' });
            } else if ($(this).children('img').length == 2) {
              data.push({ text: $(this).text(), lth: '2', status: 'no', aa: 'no', href: 'no', display: 'none' });
            } else if ($(this).children('img').length == 3) {
              data.push({ text: $(this).text(), lth: '3', status: 'no', aa: 'no', href: 'no', display: 'none' });
            } else if ($(this).children('img').length == 4) {
              data.push({ text: $(this).text(), lth: '4', status: 'no', aa: 'no', href: 'no', display: 'none' });
            }
          } else if ($(this).children("a").length == 1) {
            if ($(this).children('img').length == 1) {
              data.push({ text: $(this).text(), lth: '1', href: $(this).children("a").attr('href'), aa: 'no', status: 'no', display: 'none' });
            } else if ($(this).children('img').length == 2) {
              data.push({ text: $(this).text(), lth: '2', href: $(this).children("a").attr('href'), aa: 'no', status: 'no', display: 'none' });
            } else if ($(this).children('img').length == 3) {
              data.push({ text: $(this).text(), lth: '3', href: $(this).children("a").attr('href'), aa: 'no', status: 'no', display: 'none' });
            } else if ($(this).children('img').length == 4) {
              data.push({ text: $(this).text(), lth: '4', href: $(this).children("a").attr('href'), aa: 'no', status: 'no',
                display: 'none' });
            }
          } else if ($(this).children("a").length == 2 && $(this).children("a").eq(0).children("img").length == 1 && $(this).children("a").eq(0).children("img").attr('src').indexOf('minus') !== -1) {
            if ($(this).children('img').length == 1) {
              data.push({ text: $(this).text(), lth: '1', href: $(this).children("a").eq(1).attr('href'), aa: 'jian', status: 'yes', display: 'none' });
            } else if ($(this).children('img').length == 2) {
              data.push({ text: $(this).text(), lth: '2', href: $(this).children("a").eq(1).attr('href'), aa: 'jian', status: 'yes', display: 'none' });
            } else if ($(this).children('img').length == 3) {
              data.push({ text: $(this).text(), lth: '3', href: $(this).children("a").eq(1).attr('href'), aa: 'jian', status: 'yes', display: 'none' });
            } else if ($(this).children('img').length == 4) {
              data.push({ text: $(this).text(), lth: '4', href: $(this).children("a").eq(1).attr('href'),
                aa: 'jian', status: 'yes', display: 'none' });
            }
          } else if ($(this).children("a").length == 2 && $(this).children("a").eq(0).children("img").length == 1 && $(this).children("a").eq(0).children("img").attr('src').indexOf('plus') !== -1) {
            if ($(this).children('img').length == 1) {
              data.push({ text: $(this).text(), lth: '1', href: $(this).children("a").eq(1).attr('href'), aa: 'jia', status: 'yes', display: 'none' });
            } else if ($(this).children('img').length == 2) {
              data.push({ text: $(this).text(), lth: '2', href: $(this).children("a").eq(1).attr('href'),
                aa: 'jia', status: 'yes', display: 'none' });
            } else if ($(this).children('img').length == 3) {
              data.push({ text: $(this).text(), lth: '3', href: $(this).children("a").eq(1).attr('href'), aa: 'jia', status: 'yes', display: 'none' });
            } else if ($(this).children('img').length == 4) {
              data.push({ text: $(this).text(), lth: '4', href: $(this).children("a").eq(1).attr('href'),
                aa: 'jia', status: 'yes', display: 'none' });
            }
          }
        } else {
          if ($(this).children("a").length == 0) {
            if ($(this).children('img').length == 1) {
              data.push({ text: $(this).text(), lth: '1', status: 'no', aa: 'no', href: 'no', display: 'block' });
            } else if ($(this).children('img').length == 2) {
              data.push({ text: $(this).text(), lth: '2', status: 'no', aa: 'no', href: 'no', display: 'block' });
            } else if ($(this).children('img').length == 3) {
              data.push({ text: $(this).text(),
                lth: '3', status: 'no', aa: 'no', href: 'no', display: 'block' });
            } else if ($(this).children('img').length == 4) {
              data.push({ text: $(this).text(), lth: '4', status: 'no', aa: 'no', href: 'no', display: 'block' });
            }
          } else if ($(this).children("a").length == 1) {
            if ($(this).children('img').length == 1) {
              data.push({ text: $(this).text(), lth: '1', href: $(this).children("a").attr('href'), aa: 'no', status: 'no',
                display: 'block' });
            } else if ($(this).children('img').length == 2) {
              data.push({ text: $(this).text(), lth: '2', href: $(this).children("a").attr('href'), aa: 'no', status: 'no', display: 'block' });
            } else if ($(this).children('img').length == 3) {
              data.push({ text: $(this).text(), lth: '3', href: $(this).children("a").attr('href'), aa: 'no', status: 'no', display: 'block' });
            } else if ($(this).children('img').length == 4) {
              data.push({ text: $(this).text(), lth: '4', href: $(this).children("a").attr('href'), aa: 'no', status: 'no', display: 'block' });
            }
          } else if ($(this).children("a").length == 2 && $(this).children("a").eq(0).children("img").length == 1 && $(this).children("a").eq(0).children("img").attr('src').indexOf('minus') !== -1) {
            if ($(this).children('img').length == 1) {
              data.push({ text: $(this).text(), lth: '1', href: $(this).children("a").eq(1).attr('href'), aa: 'jian', status: 'yes', display: 'block' });
            } else if ($(this).children('img').length == 2) {
              data.push({ text: $(this).text(), lth: '2', href: $(this).children("a").eq(1).attr('href'), aa: 'jian', status: 'yes', display: 'block' });
            } else if ($(this).children('img').length == 3) {
              data.push({ text: $(this).text(), lth: '3', href: $(this).children("a").eq(1).attr('href'), aa: 'jian', status: 'yes', display: 'block' });
            } else if ($(this).children('img').length == 4) {
              data.push({ text: $(this).text(), lth: '4', href: $(this).children("a").eq(1).attr('href'), aa: 'jian', status: 'yes', display: 'block' });
            }
          } else if ($(this).children("a").length == 2 && $(this).children("a").eq(0).children("img").length == 1 && $(this).children("a").eq(0).children("img").attr('src').indexOf('plus') !== -1) {
            if ($(this).children('img').length == 1) {
              data.push({ text: $(this).text(), lth: '1', href: $(this).children("a").eq(1).attr('href'), aa: 'jia', status: 'yes', display: 'block' });
            } else if ($(this).children('img').length == 2) {
              data.push({ text: $(this).text(), lth: '2', href: $(this).children("a").eq(1).attr('href'), aa: 'jia', status: 'yes', display: 'block' });
            } else if ($(this).children('img').length == 3) {
              data.push({ text: $(this).text(), lth: '3', href: $(this).children("a").eq(1).attr('href'), aa: 'jia', status: 'yes', display: 'block' });
            } else if ($(this).children('img').length == 4) {
              data.push({ text: $(this).text(), lth: '4', href: $(this).children("a").eq(1).attr('href'), aa: 'jia', status: 'yes', display: 'block' });
            }
          }
        }
      });return data;
    }, doAction_uiControl22_HyIwWC: function (data, elem) {
      if (data.eventType == 'click') {
        var href = data.dataCustom;$(elem).find("a").each(function () {
          if ($(this).attr('href') == href && $(this).find('img').length == 0) {
            $(this).click();
          }
        });
      }if (data.eventType == 'click2') {
        var href = data.dataCustom;$(elem).find("a").each(function () {
          if ($(this).attr('href') == href && $(this).find('img').length == 0) {
            $(this).click();
          }
        });
      }if (data.eventType == 'click1') {
        var href = data.dataCustom;$(elem).find("a").each(function () {
          if ($(this).attr('href') == href && $(this).find('img').length == 0) {
            $(this).parent().children('a').eq(0).click();
          }
        });
      }
    }, getTemplate_uiControl22_HyIwWC: function getTemplate_uiControl22_HyIwWC() {
      var selfTemplate = 'module.exports = React.createClass({\n   click2:function(e){\n     if( e.target.ownerDocument.querySelectorAll(\'.tree_b\').length > 0){\n        e.target.ownerDocument.querySelectorAll(\'.tree_b\')[0].style.display=\'none\'\n     }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click2\',\n        data:e.target.getAttribute(\'data-href\')\n      })\n    }\n  },\n  click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:e.target.getAttribute(\'data-href\')\n      })\n    }\n  },\n   pade:function(e){\n    var handler = this.props.customHandler;\n    var tree = top.document.querySelectorAll(\'.tree_b\')[0];\n       tree.style.display=\'none\'\n  },\n  click1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click1\',\n        data:e.target.parentElement.querySelectorAll(\'span\')[0].getAttribute(\'data-href\')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data){\n      var item = data.map(function(d,i){\n        if(d.display==\'none\'){\n          return(<li style={{display:\'none\'}}></li>)\n        }\n        else if(d.aa==\'jia\'){\n          return(<li data-lth={d.lth} ><span data-lth={d.lth} data-href={d.href} onClick={_this.click}>{d.text}</span><i onClick={_this.click1} className=\'jia\'></i></li>)\n        } \n        else if(d.aa==\'jian\'){\n          return(<li data-lth={d.lth} ><span data-lth={d.lth} data-href={d.href} onClick={_this.click}>{d.text}</span><i onClick={_this.click1} className=\'jian\'></i></li>)\n        } \n        else{\n          return(<li onClick={_this.click2} data-lth={d.lth} data-href={d.href} className={d.aa}>{d.text}</li>)\n        } \n      })\n    }\n    return (\n      <div className=\'tree_b\' style={{display:\'none\'}}>\n        <div onClick={_this.pade} className=\'pade\'></div>\n        <div className=\'title\'>\u5408\u540C\u5217\u8868</div>\n        <ul className=\'tree_box\'>\n         {item}\n        </ul>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  click2: function click2(e) {\n    if (e.target.ownerDocument.querySelectorAll(\'.tree_b\').length > 0) {\n      e.target.ownerDocument.querySelectorAll(\'.tree_b\')[0].style.display = \'none\';\n    }\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click2\',\n        data: e.target.getAttribute(\'data-href\')\n      });\n    }\n  },\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: e.target.getAttribute(\'data-href\')\n      });\n    }\n  },\n  pade: function pade(e) {\n    var handler = this.props.customHandler;\n    var tree = top.document.querySelectorAll(\'.tree_b\')[0];\n    tree.style.display = \'none\';\n  },\n  click1: function click1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click1\',\n        data: e.target.parentElement.querySelectorAll(\'span\')[0].getAttribute(\'data-href\')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      var item = data.map(function (d, i) {\n        if (d.display == \'none\') {\n          return React.createElement(\'li\', { style: { display: \'none\' } });\n        } else if (d.aa == \'jia\') {\n          return React.createElement(\n            \'li\',\n            { \'data-lth\': d.lth },\n            React.createElement(\n              \'span\',\n              { \'data-lth\': d.lth, \'data-href\': d.href, onClick: _this.click },\n              d.text\n            ),\n            React.createElement(\'i\', { onClick: _this.click1, className: \'jia\' })\n          );\n        } else if (d.aa == \'jian\') {\n          return React.createElement(\n            \'li\',\n            { \'data-lth\': d.lth },\n            React.createElement(\n              \'span\',\n              { \'data-lth\': d.lth, \'data-href\': d.href, onClick: _this.click },\n              d.text\n            ),\n            React.createElement(\'i\', { onClick: _this.click1, className: \'jian\' })\n          );\n        } else {\n          return React.createElement(\n            \'li\',\n            { onClick: _this.click2, \'data-lth\': d.lth, \'data-href\': d.href, className: d.aa },\n            d.text\n          );\n        }\n      });\n    }\n    return React.createElement(\n      \'div\',\n      { className: \'tree_b\', style: { display: \'none\' } },\n      React.createElement(\'div\', { onClick: _this.pade, className: \'pade\' }),\n      React.createElement(\n        \'div\',\n        { className: \'title\' },\n        \'\\u5408\\u540C\\u5217\\u8868\'\n      ),\n      React.createElement(\n        \'ul\',\n        { className: \'tree_box\' },\n        item\n      )\n    );\n  }\n});';
    },
    getData_control29_eZ512s: function (elem) {
      console.log(elem.parentElement.className);if (!elem) {
        return;
      }var data = { title: [], content: [] };if ($(elem).children("tr").length > 0) {
        $(elem).children("tr").each(function () {
          if ($(this).children("td").length > 0 && $(this).children("td").eq(1).text() !== '') {
            var arr = [];$(this).children("td").each(function () {
              arr.push($(this).text().trim());
            });data.content.push(arr);
          } else if ($(this).children("th").length > 0) {
            var arr = [];$(this).children("th").each(function () {
              arr.push($(this).text().trim());
            });data.title.push(arr);
          }
        });
      }return data;
    },
    doAction_uiControl23_rUH4bl: function (data, elem) {
      if (data.eventType == 'click') {
        //debugger;
        var idx = parseInt(data.dataCustom) + 1;$(elem).children("tr").eq(idx).children("td").eq(1).children('a').click();
      }if (data.eventType == 'tongguo') {
        var idx = parseInt(data.dataCustom) + 1;$(elem).children("tr").eq(idx).children("td").eq(8).children('a').eq(0).click();
      }
    },
    getTemplate_uiControl23_rUH4bl: function getTemplate_uiControl23_rUH4bl() {
      var selfTemplate = 'module.exports = React.createClass({\n  \n  \n   tongguo:function(e){\n    var handler = this.props.customHandler;\n     \n     if(e.target.tagName==\'SPAN\'){\n      var _target = e.target.parentElement;\n    }\n     else if(e.target.tagName==\'DIV\'){\n      var _target = e.target;\n    }\n    if(handler){\n      handler({\n        eventType:\'tongguo\',\n        data:_target.getAttribute(\'data-index\')\n      })\n    }\n  },\n  \n  \n  click:function(e){\n    var handler = this.props.customHandler;\n    if(e.target.className==\'sts\' || e.target.parentElement.className==\'sts\'){\n      return ;\n    }\n    else if(e.target.tagName==\'I\'){\n      return ;\n    }\n    else if(e.target.tagName==\'SPAN\'){\n      var _target = e.target.parentElement.parentElement;\n    }\n     else if(e.target.tagName==\'DIV\'){\n      var _target = e.target.parentElement;\n    }\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:_target.getAttribute(\'data-index\')\n      })\n    }\n  },\n  toggle:function(e){\n    //debugger;\n    if(e.target.className==\'xia\'){\n      \n     var lth = e.target.parentElement.parentElement.querySelectorAll(\'.kkk\').length;\n      for(var i=0;i<lth;i++){\n       e.target.parentElement.parentElement.querySelectorAll(\'.kkk\')[i].style.display=\'block\'\n      }\n      e.target.className=\'shang\'\n    }\n   else if(e.target.className==\'shang\'){\n      \n      var lth = e.target.parentElement.parentElement.querySelectorAll(\'.kkk\').length;\n      for(var i=0;i<lth;i++){\n       e.target.parentElement.parentElement.querySelectorAll(\'.kkk\')[i].style.display=\'none\'\n      }\n      e.target.className=\'xia\'\n    }\n  },\n  render: function() {\n    var _this = this;\n    var data = this.props.customData ;\n   var content = data && data.content.map(function(d,i){\n      return (\n        <section  data-index={i} onClick={_this.click} style={{margin:\'10px 0\',background:\'#fff\',padding:\'10px\'}}>\n        {\n             d.map(function(d1,i1){\n              if(i1==1){\n                return(<div className=\'title\' style={{height:\'30px\',lineHeight:\'30px\',paddingRight:\'90px\',color:"#000"}}><span>{d1}</span></div>)\n              }\n              else if(i1==8 && d1==\'\u672A\u63D0\u4EA4\'){\n                return(<div className=\'sts\' style={{height:\'30px\',lineHeight:\'30px\',background:\'#AAAAAA\',color:\'#fff\'}}><span>{d1}</span></div>)\n              }\n              else if(i1==8 && d1==\'\u5DF2\u901A\u8FC7\'){\n                return(<div data-index={i} onClick={_this.tongguo} className=\'sts\' style={{height:\'30px\',lineHeight:\'30px\',background:\'#8FC31F\',color:\'#fff\'}}><span>{d1}</span></div>)\n              }\n              else if(i1==3){\n                 return(<div className=\'btn_box\' style={{lineHeight:\'30px\',paddingBottom:\'10px\',borderBottom:\'1px solid #E2E2E2\'}}><span style={{color:\'#767676\'}}>{data.title[0][i1]}</span><span style={{color:\'#3A4774\',marginLeft:\'20px\'}}>{d1}</span><i className=\'xia\' onClick={_this.toggle}></i></div>)\n              }\n              \n              \n               else if(i1==4){\n               return(<div className=\'kkk\' style={{lineHeight:\'30px\',paddingTop:\'10px\'}}><span style={{color:\'#767676\'}}>{data.title[0][i1]}</span><span style={{color:\'#3A4774\',marginLeft:\'20px\'}}>{d1}</span></div>)\n              }\n              \n               else if(i1>3 && i1!==4){\n                 return(<div className=\'kkk\' style={{height:\'30px\',lineHeight:\'30px\'}}><span style={{color:\'#767676\'}}>{data.title[0][i1]}</span><span style={{color:\'#3A4774\',marginLeft:\'20px\'}}>{d1}</span></div>)\n              }\n             else{\n                 return(<div style={{height:\'30px\',lineHeight:\'30px\'}}><span style={{color:\'#767676\'}}>{data.title[0][i1]}</span><span style={{color:\'#3A4774\',marginLeft:\'20px\'}}>{d1}</span></div>)\n              }\n            })\n          }\n        </section>\n      )\n    })\n    return (\n      <div className=\'box_list\' style={{background:\'#F9F9F9\',paddingTop:\'50px;\'}}>\n        {content}\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n\n  tongguo: function tongguo(e) {\n    var handler = this.props.customHandler;\n\n    if (e.target.tagName == \'SPAN\') {\n      var _target = e.target.parentElement;\n    } else if (e.target.tagName == \'DIV\') {\n      var _target = e.target;\n    }\n    if (handler) {\n      handler({\n        eventType: \'tongguo\',\n        data: _target.getAttribute(\'data-index\')\n      });\n    }\n  },\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (e.target.className == \'sts\' || e.target.parentElement.className == \'sts\') {\n      return;\n    } else if (e.target.tagName == \'I\') {\n      return;\n    } else if (e.target.tagName == \'SPAN\') {\n      var _target = e.target.parentElement.parentElement;\n    } else if (e.target.tagName == \'DIV\') {\n      var _target = e.target.parentElement;\n    }\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: _target.getAttribute(\'data-index\')\n      });\n    }\n  },\n  toggle: function toggle(e) {\n    //debugger;\n    if (e.target.className == \'xia\') {\n\n      var lth = e.target.parentElement.parentElement.querySelectorAll(\'.kkk\').length;\n      for (var i = 0; i < lth; i++) {\n        e.target.parentElement.parentElement.querySelectorAll(\'.kkk\')[i].style.display = \'block\';\n      }\n      e.target.className = \'shang\';\n    } else if (e.target.className == \'shang\') {\n\n      var lth = e.target.parentElement.parentElement.querySelectorAll(\'.kkk\').length;\n      for (var i = 0; i < lth; i++) {\n        e.target.parentElement.parentElement.querySelectorAll(\'.kkk\')[i].style.display = \'none\';\n      }\n      e.target.className = \'xia\';\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData;\n    var content = data && data.content.map(function (d, i) {\n      return React.createElement(\n        \'section\',\n        { \'data-index\': i, onClick: _this.click, style: { margin: \'10px 0\', background: \'#fff\', padding: \'10px\' } },\n        d.map(function (d1, i1) {\n          if (i1 == 1) {\n            return React.createElement(\n              \'div\',\n              { className: \'title\', style: { height: \'30px\', lineHeight: \'30px\', paddingRight: \'90px\', color: "#000" } },\n              React.createElement(\n                \'span\',\n                null,\n                d1\n              )\n            );\n          } else if (i1 == 8 && d1 == \'\u672A\u63D0\u4EA4\') {\n            return React.createElement(\n              \'div\',\n              { className: \'sts\', style: { height: \'30px\', lineHeight: \'30px\', background: \'#AAAAAA\', color: \'#fff\' } },\n              React.createElement(\n                \'span\',\n                null,\n                d1\n              )\n            );\n          } else if (i1 == 8 && d1 == \'\u5DF2\u901A\u8FC7\') {\n            return React.createElement(\n              \'div\',\n              { \'data-index\': i, onClick: _this.tongguo, className: \'sts\', style: { height: \'30px\', lineHeight: \'30px\', background: \'#8FC31F\', color: \'#fff\' } },\n              React.createElement(\n                \'span\',\n                null,\n                d1\n              )\n            );\n          } else if (i1 == 3) {\n            return React.createElement(\n              \'div\',\n              { className: \'btn_box\', style: { lineHeight: \'30px\', paddingBottom: \'10px\', borderBottom: \'1px solid #E2E2E2\' } },\n              React.createElement(\n                \'span\',\n                { style: { color: \'#767676\' } },\n                data.title[0][i1]\n              ),\n              React.createElement(\n                \'span\',\n                { style: { color: \'#3A4774\', marginLeft: \'20px\' } },\n                d1\n              ),\n              React.createElement(\'i\', { className: \'xia\', onClick: _this.toggle })\n            );\n          } else if (i1 == 4) {\n            return React.createElement(\n              \'div\',\n              { className: \'kkk\', style: { lineHeight: \'30px\', paddingTop: \'10px\' } },\n              React.createElement(\n                \'span\',\n                { style: { color: \'#767676\' } },\n                data.title[0][i1]\n              ),\n              React.createElement(\n                \'span\',\n                { style: { color: \'#3A4774\', marginLeft: \'20px\' } },\n                d1\n              )\n            );\n          } else if (i1 > 3 && i1 !== 4) {\n            return React.createElement(\n              \'div\',\n              { className: \'kkk\', style: { height: \'30px\', lineHeight: \'30px\' } },\n              React.createElement(\n                \'span\',\n                { style: { color: \'#767676\' } },\n                data.title[0][i1]\n              ),\n              React.createElement(\n                \'span\',\n                { style: { color: \'#3A4774\', marginLeft: \'20px\' } },\n                d1\n              )\n            );\n          } else {\n            return React.createElement(\n              \'div\',\n              { style: { height: \'30px\', lineHeight: \'30px\' } },\n              React.createElement(\n                \'span\',\n                { style: { color: \'#767676\' } },\n                data.title[0][i1]\n              ),\n              React.createElement(\n                \'span\',\n                { style: { color: \'#3A4774\', marginLeft: \'20px\' } },\n                d1\n              )\n            );\n          }\n        })\n      );\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'box_list\', style: { background: \'#F9F9F9\', paddingTop: \'50px;\' } },\n      content\n    );\n  }\n});';
    },
    getData_control53_RR5tot: function (elem) {},
    doAction_uiControl42_50weE0: function (data, elem) {},
    getTemplate_uiControl42_50weE0: function getTemplate_uiControl42_50weE0() {
      var selfTemplate = 'import { back } from \'appRenderer\';\nmodule.exports = React.createClass({\n  handleClick1: function(e) {\n    var handler = this.props.customHandler;\n    var tree = top.document.querySelectorAll(\'.tree_b\')[0];\n    if(tree.style.display==\'none\'){\n      tree.style.display=\'block\'\n    }\n    else{\n       tree.style.display=\'none\'\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n    var _this = this;\n    return (\n      <header className="navbar navbar-primary header" style = {{"background":"#004899","width":"100%","position":"fixed","z-index":"111"}}>\n        <h2 className="navbar-title navbar-center" style = {{"font-size":"18px"}}>\u5206\u5305\u7ED3\u7B97\u5217\u8868</h2>\n        <div className="navbar-nav navbar-left">\n          <a onClick={back} className="navbar-nav-item">\n            <span className="navbar-nav-title">\u8FD4\u56DE</span>\n            <span className="icon icon-left-nav navbar-icon"></span>\n          </ a>\n        </div>\n        <div className="navbar-nav navbar-right">\n          <a onClick={_this.handleClick1} className="navbar-nav-item">\n            <span className="navbar-nav-title">\u5408\u540C\u5217\u8868</span>\n          </ a>\n        </div>\n      </header>\n    )\n  }\n});';
      return "'use strict';\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick1: function handleClick1(e) {\n    var handler = this.props.customHandler;\n    var tree = top.document.querySelectorAll('.tree_b')[0];\n    if (tree.style.display == 'none') {\n      tree.style.display = 'block';\n    } else {\n      tree.style.display = 'none';\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var _this = this;\n    return React.createElement(\n      'header',\n      { className: 'navbar navbar-primary header', style: { \"background\": \"#004899\", \"width\": \"100%\", \"position\": \"fixed\", \"z-index\": \"111\" } },\n      React.createElement(\n        'h2',\n        { className: 'navbar-title navbar-center', style: { \"font-size\": \"18px\" } },\n        '\\u5206\\u5305\\u7ED3\\u7B97\\u5217\\u8868'\n      ),\n      React.createElement(\n        'div',\n        { className: 'navbar-nav navbar-left' },\n        React.createElement(\n          'a',\n          { onClick: _appRenderer.back, className: 'navbar-nav-item' },\n          React.createElement(\n            'span',\n            { className: 'navbar-nav-title' },\n            '\\u8FD4\\u56DE'\n          ),\n          React.createElement('span', { className: 'icon icon-left-nav navbar-icon' })\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'navbar-nav navbar-right' },\n        React.createElement(\n          'a',\n          { onClick: _this.handleClick1, className: 'navbar-nav-item' },\n          React.createElement(\n            'span',\n            { className: 'navbar-nav-title' },\n            '\\u5408\\u540C\\u5217\\u8868'\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control46_r6xAKh: function (elem) {
      if (!elem) {
        return;
      }var data = []; //console.log(elem)
      if ($(elem).find('input').eq(0)[0].disabled == true) {
        data.push('1');
      } else {
        data.push('2');
      }return data;
    },
    doAction_uiControl35_ys9NrE: function (data, elem) {
      if (data.eventType == 'click') {
        $(elem).find('input').eq(0).click();
      }
    },
    getTemplate_uiControl35_ys9NrE: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data && data &&data[0] && data[0]=='1'){\n      return (\n        <div onClick={_this.click} className='button_nn'>\n          <span>\u589E\u52A0</span>\n        </div>\n      )\n    }\n    else if(data &&data[0] && data[0]=='2'){\n     return (\n        <div onClick={_this.click} className='button_n'>\n          <span>\u589E\u52A0</span>\n        </div>\n      )\n    }\n    else{\n      return(<div></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data && data && data[0] && data[0] == '1') {\n      return React.createElement(\n        'div',\n        { onClick: _this.click, className: 'button_nn' },\n        React.createElement(\n          'span',\n          null,\n          '\\u589E\\u52A0'\n        )\n      );\n    } else if (data && data[0] && data[0] == '2') {\n      return React.createElement(\n        'div',\n        { onClick: _this.click, className: 'button_n' },\n        React.createElement(\n          'span',\n          null,\n          '\\u589E\\u52A0'\n        )\n      );\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    }
  }, "list_fenbao");
})(window, ysp);