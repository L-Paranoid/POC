(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control11_LRqE7x: function (elem) {},
    doAction_uiControl9_fhqTvA: function (data, elem) {
      if (data.eventType == "click") {
        // elem.ownerDocument.defaultView.open('http://123.125.21.40/dachanoa/menu/middle.jsp', '');
        elem.click();ysp.runtime.Model.setForceMatchModels(['menu']);
      }
    },
    getTemplate_uiControl9_fhqTvA: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  componentDidMount:function(){\n    var _this = this;\n    var handler=_this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\'\n      })\n    }\n  },\n  // onClick:function(){\n  //   var _this = this;\n  //   var handler=_this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:\'click\'\n  //     })\n  //   }\n  // },\n  render: function() {\n    return (\n      <div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  componentDidMount: function componentDidMount() {\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  // onClick:function(){\n  //   var _this = this;\n  //   var handler=_this.props.customHandler;\n  //   if(handler){\n  //     handler({\n  //       eventType:\'click\'\n  //     })\n  //   }\n  // },\n  render: function render() {\n    return React.createElement(\'div\', null);\n  }\n});';
    },
    getData_control8_cagIIx: function (elem) {},
    doAction_uiControl6_VV4dNL: function (data, elem) {
      if (data.eventType == "click") {
        elem.querySelector("a").click();
      }
    },
    getTemplate_uiControl6_VV4dNL: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click\"\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"ysp_entirety\">\n        <div className=\"ysp_content1\" onClick={this.onClick.bind(this)}>\n          <span className=\"ysp_logo\"></span>\n          <span className=\"ysp_text\">\u5F85\u5904\u7406\u4E8B\u9879</span>\n        </div>\n      </div>\n    )\n  }\n});";
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n  onClick: function onClick(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: "click"\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      "div",\n      { className: "ysp_entirety" },\n      React.createElement(\n        "div",\n        { className: "ysp_content1", onClick: this.onClick.bind(this) },\n        React.createElement("span", { className: "ysp_logo" }),\n        React.createElement(\n          "span",\n          { className: "ysp_text" },\n          "\\u5F85\\u5904\\u7406\\u4E8B\\u9879"\n        )\n      )\n    );\n  }\n});';
    },
    getData_control1_DGgHzg: function (elem) {
      if (elem) {
        return elem.textContent.trim();
      }return "";
    },
    doAction_uiControl1_zDXCQi: function (data, elem) {
      if (data.eventType == "click") {
        elem.querySelector("a").click(); // elem.ownerDocument.defaultView.open("http://123.125.21.40/dachanoa/quickenter.html");
      }
    },
    getTemplate_uiControl1_zDXCQi: function () {
      var selfTemplate = 'import {Component} from "react";\nexport default class extends Component{\n    onClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:"click"\n      })\n    }\n  }\n  render() {\n    var data = this.props.customData;\n    return (\n      <div className="ysp_entirety">\n        <div className="ysp_title">\n          <h1>\u5FEB\u6377\u64CD\u4F5C</h1>\n        </div>\n        {data=="\u8BF7\u5047\u7533\u8BF7\u5355" ? <div className="ysp_content" onClick={this.onClick.bind(this)}>\n          <span className="ysp_logo"></span>\n          <span className="ysp_text">{data}</span>\n        </div>:""}\n      </div>\n    )\n  }\n};';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "onClick",\n    value: function onClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: "click"\n        });\n      }\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        "div",\n        { className: "ysp_entirety" },\n        React.createElement(\n          "div",\n          { className: "ysp_title" },\n          React.createElement(\n            "h1",\n            null,\n            "\\u5FEB\\u6377\\u64CD\\u4F5C"\n          )\n        ),\n        data == "\u8BF7\u5047\u7533\u8BF7\u5355" ? React.createElement(\n          "div",\n          { className: "ysp_content", onClick: this.onClick.bind(this) },\n          React.createElement("span", { className: "ysp_logo" }),\n          React.createElement(\n            "span",\n            { className: "ysp_text" },\n            data\n          )\n        ) : ""\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;\n;';
    }
  });
})(window, ysp);