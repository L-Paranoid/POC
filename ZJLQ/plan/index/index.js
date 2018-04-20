"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control17_uSFshS: function getData_control17_uSFshS(elem) {
      var data = elem.textContent.trim();return data;
    },
    doAction_uiControl11_O2Sacd: function doAction_uiControl11_O2Sacd(data, elem) {},
    getTemplate_uiControl11_O2Sacd: function getTemplate_uiControl11_O2Sacd() {
      var selfTemplate = "\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  handleClick1: function(e) {\n    var handler = this.props.customHandler;\n    var tree = top.document.querySelectorAll('.tree_b')[0];\n    if(tree.style.display=='none'){\n      tree.style.display='block'\n    }\n    else{\n       tree.style.display='none'\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n    var _this = this;\n    return (\n      <header className=\"navbar navbar-primary header\" style = {{\"background\":\"#004899\",\"width\":\"100%\",\"position\":\"fixed\",\"z-index\":\"111\"}}>\n        <h2 className=\"navbar-title navbar-center\" style = {{\"font-size\":\"18px\"}}>\u534E\u5317\u516C\u53F8\u7389\u77F3\u516B\u6807\u9879\u76EE\u90E8</h2>\n        <div className=\"navbar-nav navbar-left\">\n          <a onClick={back} className=\"navbar-nav-item\">\n            <span className=\"navbar-nav-title\">\u8FD4\u56DE</span>\n            <span className=\"icon icon-left-nav navbar-icon\"></span>\n          </ a>\n        </div>\n      </header>\n    )\n  }\n});";
      return "'use strict';\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick1: function handleClick1(e) {\n    var handler = this.props.customHandler;\n    var tree = top.document.querySelectorAll('.tree_b')[0];\n    if (tree.style.display == 'none') {\n      tree.style.display = 'block';\n    } else {\n      tree.style.display = 'none';\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var _this = this;\n    return React.createElement(\n      'header',\n      { className: 'navbar navbar-primary header', style: { \"background\": \"#004899\", \"width\": \"100%\", \"position\": \"fixed\", \"z-index\": \"111\" } },\n      React.createElement(\n        'h2',\n        { className: 'navbar-title navbar-center', style: { \"font-size\": \"18px\" } },\n        '\\u534E\\u5317\\u516C\\u53F8\\u7389\\u77F3\\u516B\\u6807\\u9879\\u76EE\\u90E8'\n      ),\n      React.createElement(\n        'div',\n        { className: 'navbar-nav navbar-left' },\n        React.createElement(\n          'a',\n          { onClick: _appRenderer.back, className: 'navbar-nav-item' },\n          React.createElement(\n            'span',\n            { className: 'navbar-nav-title' },\n            '\\u8FD4\\u56DE'\n          ),\n          React.createElement('span', { className: 'icon icon-left-nav navbar-icon' })\n        )\n      )\n    );\n  }\n});";
    },
    getData_control18_xKReUV: function getData_control18_xKReUV(elem) {},
    doAction_uiControl12_xCmtbX: function doAction_uiControl12_xCmtbX(data, elem) {
      if (data.eventType == 'click') {
        elem.click();
      }
    },
    getTemplate_uiControl12_xCmtbX: function getTemplate_uiControl12_xCmtbX() {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    return (\n      <div onClick={_this.click} className='button_1'>\n        <span>\u7EFC\u5408\u9879\u76EE</span>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    return React.createElement(\n      'div',\n      { onClick: _this.click, className: 'button_1' },\n      React.createElement(\n        'span',\n        null,\n        '\\u7EFC\\u5408\\u9879\\u76EE'\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);