(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control12_FaRmHR: function (elem) {
      if (!elem) {
        return false;
      }
    },
    doAction_uiControl12_gAnWRJ: function (data, elem) {
      if (data.eventType == 'click') {
        var timer = setInterval(function () {
          console.log('开始了....');if (elem.ownerDocument.querySelector('#iframeWindow').contentWindow.document.querySelector('#imanage').contentWindow.document.querySelector('#myTab').querySelectorAll('li')[1]) {
            elem.ownerDocument.querySelector('#iframeWindow').contentWindow.document.querySelector('#imanage').contentWindow.document.querySelector('#myTab').querySelectorAll('li')[1].click();clearInterval(timer);
          }
        }, 200);
      }
    }, getTemplate_uiControl12_gAnWRJ: function () {
      var selfTemplate = 'import {Component} from \'react\';\nimport {CommonHead} from \'ysp-custom-components\';\nexport default class extends Component{\n  componentDidMount(){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\'\n      })\n    }\n  }\n  render(){\n    return (\n    \t<CommonHead\n        title={"\u4FE1\u606F\u7BA1\u7406\u7CFB\u7EDF"}\n        />\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      return React.createElement(_yspCustomComponents.CommonHead, {\n        title: "\u4FE1\u606F\u7BA1\u7406\u7CFB\u7EDF"\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);