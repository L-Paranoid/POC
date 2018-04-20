"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control8_HFDAKG: function (elem) {
      //console.log(elem)
      if (!elem) {
        return;
      }var data = { content: [], sval: [] };if ($(elem).children("table").length > 0 && $(elem).children("table").children("tbody").length > 0 && $(elem).children("table").children("tbody").children("tr").length > 0) {
        data.sval.push($(elem).children("div").eq(0).find("input").eq(0).prop('value'));$(elem).children("table").children("tbody").children("tr").each(function (i) {
          if (i > 0) {
            var arr = [];$(this).children("td").each(function (i1) {
              if ($(this)[0].style.display !== 'none' && i1 > 0) {
                arr.push($(this).text().trim());
              }
            });data.content.push(arr);
          }
        });
      }return data;
    },
    doAction_uiControl7_Uov3u5: function (data, elem) {
      if (data.eventType == 'blur') {
        var val = data.dataCustom;$(elem).children("div").eq(0).find("input").eq(0).prop('value', val);
      }
      if (data.eventType == 'search') {
        $(elem).children("div").eq(0).find("input").eq(1).click();
      }if (data.eventType == 'click') {
        top.VALUE = 'mobile';var val = parseInt(data.dataCustom) + 1;$(elem).children("table").eq(0).children("tbody").children("tr").eq(val).find("input").eq(0).click();
      }
    },
    getTemplate_uiControl7_Uov3u5: function getTemplate_uiControl7_Uov3u5() {
      var selfTemplate = "module.exports = React.createClass({\n  blur:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'blur',\n        data:e.target.value\n      })\n    }\n  },\n    click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:e.target.getAttribute('data-index')\n      })\n    }\n  },\n   search:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'search'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    \n    var item = data && data.content.map(function(d,i){\n      if(d[1]!==''){\n        return (\n        <li>\n            <span><AInput onClick={_this.click} data-index={i} name='prjid' type='radio' /></span>\n          {\n             d.map(function(d1,i1){\n               return(<span>{d1}</span>)\n             }) \n            }\n        </li>\n        )\n      }\n      else{\n        return(<li></li>)\n      }\n      \n    })\n      return (\n      <div className='xuanren_box'>\n        <div className='search_box'><AInput placeholder='\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0' value={data && data.sval} onBlur={_this.blur} /><span onClick={_this.search}></span></div>\n      <ul className='box_sele'>\n        <li><span>&nbsp;</span><span>\u5DE5\u7A0B\u7F16\u7801</span><span>\u5DE5\u7A0B\u540D\u79F0</span></li>\n       {item}\n      </ul>\n        </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  blur: function blur(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'blur',\n        data: e.target.value\n      });\n    }\n  },\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: e.target.getAttribute('data-index')\n      });\n    }\n  },\n  search: function search(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'search'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n\n    var item = data && data.content.map(function (d, i) {\n      if (d[1] !== '') {\n        return React.createElement(\n          'li',\n          null,\n          React.createElement(\n            'span',\n            null,\n            React.createElement(AInput, { onClick: _this.click, 'data-index': i, name: 'prjid', type: 'radio' })\n          ),\n          d.map(function (d1, i1) {\n            return React.createElement(\n              'span',\n              null,\n              d1\n            );\n          })\n        );\n      } else {\n        return React.createElement('li', null);\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'xuanren_box' },\n      React.createElement(\n        'div',\n        { className: 'search_box' },\n        React.createElement(AInput, { placeholder: '\\u8BF7\\u8F93\\u5165\\u9879\\u76EE\\u540D\\u79F0', value: data && data.sval, onBlur: _this.blur }),\n        React.createElement('span', { onClick: _this.search })\n      ),\n      React.createElement(\n        'ul',\n        { className: 'box_sele' },\n        React.createElement(\n          'li',\n          null,\n          React.createElement(\n            'span',\n            null,\n            '\\xA0'\n          ),\n          React.createElement(\n            'span',\n            null,\n            '\\u5DE5\\u7A0B\\u7F16\\u7801'\n          ),\n          React.createElement(\n            'span',\n            null,\n            '\\u5DE5\\u7A0B\\u540D\\u79F0'\n          )\n        ),\n        item\n      )\n    );\n  }\n});";
    },
    getData_control19_aHEyHu: function (elem) {
      var data = elem.textContent.trim();return data;
    },
    doAction_uiControl13_e46nio: function (data, elem) {},
    getTemplate_uiControl13_e46nio: function getTemplate_uiControl13_e46nio() {
      var selfTemplate = "\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  handleClick1: function(e) {\n    var handler = this.props.customHandler;\n    var tree = top.document.querySelectorAll('.tree_b')[0];\n    if(tree.style.display=='none'){\n      tree.style.display='block'\n    }\n    else{\n       tree.style.display='none'\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n    var _this = this;\n    return (\n      <header className=\"navbar navbar-primary header\" style = {{\"background\":\"#004899\",\"width\":\"100%\",\"position\":\"fixed\",\"z-index\":\"111\"}}>\n        <h2 className=\"navbar-title navbar-center\" style = {{\"font-size\":\"18px\"}}>\u9009\u62E9\u9879\u76EE</h2>\n        \n      </header>\n    )\n  }\n});";
      return "'use strict';\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick1: function handleClick1(e) {\n    var handler = this.props.customHandler;\n    var tree = top.document.querySelectorAll('.tree_b')[0];\n    if (tree.style.display == 'none') {\n      tree.style.display = 'block';\n    } else {\n      tree.style.display = 'none';\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var _this = this;\n    return React.createElement(\n      'header',\n      { className: 'navbar navbar-primary header', style: { \"background\": \"#004899\", \"width\": \"100%\", \"position\": \"fixed\", \"z-index\": \"111\" } },\n      React.createElement(\n        'h2',\n        { className: 'navbar-title navbar-center', style: { \"font-size\": \"18px\" } },\n        '\\u9009\\u62E9\\u9879\\u76EE'\n      )\n    );\n  }\n});";
    },
    getData_control20_FoCi7w: function (elem) {},
    doAction_uiControl14_x0T9Vo: function (data, elem) {
      if (data.eventType == 'click') {
        elem.click();
      }
    },
    getTemplate_uiControl14_x0T9Vo: function getTemplate_uiControl14_x0T9Vo() {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    return (\n      <div onClick={_this.click} className='button_2'>\n       <span>\u786E\u5B9A</span>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    return React.createElement(\n      'div',\n      { onClick: _this.click, className: 'button_2' },\n      React.createElement(\n        'span',\n        null,\n        '\\u786E\\u5B9A'\n      )\n    );\n  }\n});";
    }
  }, "select_program");
})(window, ysp);