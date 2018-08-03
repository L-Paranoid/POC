(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control11_LRqE7x: function (elem) {},
    doAction_uiControl9_fhqTvA: function (data, elem) {
      if (data.eventType == "click") {
        // elem.ownerDocument.defaultView.open('http://123.125.21.40/dachanoa/menu/middle.jsp', '');
        //debugger;
        elem.click();ysp.runtime.Model.setForceMatchModels(['menu']);
      }
    },
    getTemplate_uiControl9_fhqTvA: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentDidMount:function(){\n    var _this = this;\n    var handler=_this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  // onClick:function(){\n  //   var _this = this;\n  //   var handler=_this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:'click'\n  //     })\n  //   }\n  // },\n  render: function() {\n    return (\n      <div onClick={this.onClick.bind(this)}>\n        \u6D4B\u8BD5\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  componentDidMount: function componentDidMount() {\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  // onClick:function(){\n  //   var _this = this;\n  //   var handler=_this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:'click'\n  //     })\n  //   }\n  // },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { onClick: this.onClick.bind(this) },\n      '\\u6D4B\\u8BD5'\n    );\n  }\n});";
    },

    getData_control28_zpTJ9u: function (elem) {},
    doAction_uiControl27_C3PWtW: function (data, elem) {
      if (data.eventType == "click") {
        if (ysp.appMain.isIOS()) {
          elem.querySelector('frame[name="mainFrame"]').contentWindow.document.body.ownerDocument.defaultView.location.href = 'http://123.125.21.40/dachanoa/menu/middle.jsp';ysp.runtime.Model.setForceMatchModels(['menu']);
        }
      }
    },
    getTemplate_uiControl27_C3PWtW: function () {
      var selfTemplate = "module.exports = React.createClass({\ncomponentDidMount:function(){\n  var _this = this;\n  _this.onClick();\n},\n  onClick:function(){\n    var _this = this;\n    var handler=_this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div onClick={this.onClick.bind(this)}>\n        \n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  componentDidMount: function componentDidMount() {\n    var _this = this;\n    _this.onClick();\n  },\n  onClick: function onClick() {\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement('div', { onClick: this.onClick.bind(this) });\n  }\n});";
    }
  });
})(window, ysp);