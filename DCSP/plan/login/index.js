(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control6_yoQFcz: function (elem) {
      if (!elem) {
        return '';
      }var password = elem.querySelector('#password');if (password) {
        return password.value;
      } else {
        return '';
      }
    },
    doAction_uiControl9_USU7L8: function (data, elem) {
      var value = data.customData;var type = data.eventType;var password = elem.querySelector('#password');if (password && type == 'change') {
        password.value = value;
      }
    },
    getTemplate_uiControl9_USU7L8: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleChange: function(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'change\',\n        data: e.target.value\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    var me = this;\n    return (\n      <div className="bottom-line">\n        <AInput type="password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" onBlur={me.handleChange} className="pwd" value={data} />\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  handleChange: function handleChange(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'change\',\n        data: e.target.value\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var me = this;\n    return React.createElement(\n      "div",\n      { className: "bottom-line" },\n      React.createElement(AInput, { type: "password", placeholder: "\\u8BF7\\u8F93\\u5165\\u5BC6\\u7801", onBlur: me.handleChange, className: "pwd", value: data })\n    );\n  }\n});';
    },

    getData_control10_gVim8s: function (elem) {
      if (!elem) {
        return '';
      }var userName = elem.querySelector('#userName');if (userName && userName.value != '请输入用户名') {
        return userName.value;
      } else {
        return '';
      }
    },
    doAction_uiControl13_P0L50H: function (data, elem) {
      var value = data.customData;var type = data.eventType;var userName = elem.querySelector('#userName');if (userName && type == 'change') {
        userName.value = value;
      }
    },
    getTemplate_uiControl13_P0L50H: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleChange: function(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'change\',\n        data: e.target.value\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    var me = this;\n    return (\n      <div className="bottom-line">\n        <AInput type="text" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D" onBlur={me.handleChange} className="pwd" value={data} />\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  handleChange: function handleChange(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'change\',\n        data: e.target.value\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var me = this;\n    return React.createElement(\n      "div",\n      { className: "bottom-line" },\n      React.createElement(AInput, { type: "text", placeholder: "\\u8BF7\\u8F93\\u5165\\u7528\\u6237\\u540D", onBlur: me.handleChange, className: "pwd", value: data })\n    );\n  }\n});';
    },
    getData_control11_AG6b4K: function (elem) {
      if (!elem) {
        return '';
      }var identyCode = elem.querySelector('#identyCode');if (identyCode && identyCode.value != '请输入验证码') {
        return identyCode.value;
      } else {
        return '';
      }
    },
    doAction_uiControl14_yg2B54: function (data, elem) {
      var value = data.customData;var type = data.eventType;var identyCode = elem.querySelector('#identyCode');if (identyCode && type == 'change') {
        identyCode.value = value;
      }
    },
    getTemplate_uiControl14_yg2B54: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleChange: function(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'change\',\n        data: e.target.value\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    var me = this;\n    return (\n      <div className="bottom-line">\n        <AInput type="password" placeholder="\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801" onBlur={me.handleChange} className="pwd" value={data} />\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  handleChange: function handleChange(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'change\',\n        data: e.target.value\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var me = this;\n    return React.createElement(\n      "div",\n      { className: "bottom-line" },\n      React.createElement(AInput, { type: "password", placeholder: "\\u8BF7\\u8F93\\u5165\\u9A8C\\u8BC1\\u7801", onBlur: me.handleChange, className: "pwd", value: data })\n    );\n  }\n});';
    }
  }, "login");
})(window, ysp);