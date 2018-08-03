(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_Q1UnsR: function (elem) {
      if (elem) {
        var arr = [];var userName = elem.querySelector("#j_username").value;arr.push(userName);var password = elem.querySelector("input[name='j_password']").value;arr.push(password);var remember = elem.querySelector("input[name='_acegi_security_remember_me']").checked;arr.push(remember);return arr;
      }return [];
    },
    doAction_uiControl0_u2O70N: function (data, elem) {
      if (data.eventType == "onchange") {
        var val = data.dataCustom.val;var clas = data.dataCustom.clas;if (clas == "userName") {
          elem.querySelector("#j_username").value = val;
        } else {
          elem.querySelector("input[name='j_password']").value = val;
        }
      } else if (data.eventType == "btnclick") {
        elem.querySelector("input[type='image']").click();
      } else if (data.eventType == "checkclick") {
        elem.querySelector("input[name='_acegi_security_remember_me']").click();
      }
    },
    getTemplate_uiControl0_u2O70N: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  constructor(props){\n    super(props);\n    this.state={\n      remember: props.customData[2]\n    }\n  }\n  checkClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"checkclick\"\n      })\n    }\n    this.setState({\n      remember:!this.state.remember\n    })\n  }\n  onChange(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:{clas:target.className,val:target.value},\n        eventType:\"onchange\"\n      })\n    }\n  }\n  btnClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"btnclick\"\n      })\n    }\n  }\n  render() {\n    var data = this.props.customData;\n    var _this = this;\n    return (\n      <div className=\"ysp_login_background\">\n        <div className=\"ysp_login_card\">\n          <div className=\"ysp_userName\">\n            <label>\u7528&nbsp;&nbsp;\u6237&nbsp;&nbsp;\u540D\uFF1A</label>\n            <AInput type=\"text\" className=\"userName\" onChange={_this.onChange.bind(_this)} value={data[0]}/>\n          </div>\n          <div className=\"ysp_password\">\n            <label>\u5BC6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u7801\uFF1A</label>\n            <AInput type=\"password\" className=\"password\" onChange={_this.onChange.bind(_this)} value={data[1]}/>\n          </div>\n          <div className=\"ysp_role\">\n            <label>\u89D2\u8272\u9009\u62E9\uFF1A</label>\n            <select className=\"role\">\n              <option>\u81EA\u52A8\u9009\u62E9</option>\n            </select>\n          </div>\n          <div className=\"ysp_rmbbox\">\n            <label>\n              <span className={_this.state.remember ? \"checked\":\"unchecked\"}  onClick={_this.checkClick.bind(_this)}></span>\n              <span className=\"text\">30\u5929\u5185\u81EA\u52A8\u767B\u5F55</span>\n            </label>\n          </div>\n          <div className=\"ysp_btn\">\n            <span className=\"btn\" onClick={_this.btnClick.bind(_this)}>\u767B\u5F55</span>\n          </div>\n        </div>\n      </div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      remember: props.customData[2]\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \"checkClick\",\n    value: function checkClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"checkclick\"\n        });\n      }\n      this.setState({\n        remember: !this.state.remember\n      });\n    }\n  }, {\n    key: \"onChange\",\n    value: function onChange(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { clas: target.className, val: target.value },\n          eventType: \"onchange\"\n        });\n      }\n    }\n  }, {\n    key: \"btnClick\",\n    value: function btnClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"btnclick\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_login_background\" },\n        React.createElement(\n          \"div\",\n          { className: \"ysp_login_card\" },\n          React.createElement(\n            \"div\",\n            { className: \"ysp_userName\" },\n            React.createElement(\n              \"label\",\n              null,\n              \"\\u7528\\xA0\\xA0\\u6237\\xA0\\xA0\\u540D\\uFF1A\"\n            ),\n            React.createElement(AInput, { type: \"text\", className: \"userName\", onChange: _this.onChange.bind(_this), value: data[0] })\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"ysp_password\" },\n            React.createElement(\n              \"label\",\n              null,\n              \"\\u5BC6\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\u7801\\uFF1A\"\n            ),\n            React.createElement(AInput, { type: \"password\", className: \"password\", onChange: _this.onChange.bind(_this), value: data[1] })\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"ysp_role\" },\n            React.createElement(\n              \"label\",\n              null,\n              \"\\u89D2\\u8272\\u9009\\u62E9\\uFF1A\"\n            ),\n            React.createElement(\n              \"select\",\n              { className: \"role\" },\n              React.createElement(\n                \"option\",\n                null,\n                \"\\u81EA\\u52A8\\u9009\\u62E9\"\n              )\n            )\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"ysp_rmbbox\" },\n            React.createElement(\n              \"label\",\n              null,\n              React.createElement(\"span\", { className: _this.state.remember ? \"checked\" : \"unchecked\", onClick: _this.checkClick.bind(_this) }),\n              React.createElement(\n                \"span\",\n                { className: \"text\" },\n                \"30\\u5929\\u5185\\u81EA\\u52A8\\u767B\\u5F55\"\n              )\n            )\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"ysp_btn\" },\n            React.createElement(\n              \"span\",\n              { className: \"btn\", onClick: _this.btnClick.bind(_this) },\n              \"\\u767B\\u5F55\"\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;\n;";
    }
  }, "login");
})(window, ysp);