(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control29_gmPSVI: function (elem) {
      if (elem) {
        var arr = [];var file = [];var btn = [];var tit = elem.querySelector("input[type='file']");file.push(tit.title);var a = elem.querySelectorAll("a");for (var i = 0; i < a.length; i++) {
          var input = a[i].querySelectorAll("input");for (var j = 0; j < input.length; j++) {
            btn.push(input[j].value);
          }
        }arr.push(file);arr.push(btn);return arr;
      }return [];
    },
    doAction_uiControl25_iSbu7m: function (data, elem) {
      if (data.eventType == "click") {
        debugger;var i = data.dataCustom;var ind = parseInt(i.ind) + 1;var claname = i.classname;if (claname == "btn file") {
          elem.querySelector("input[type='file']").click();
        } else {
          elem.querySelectorAll("a")[ind].querySelector("input").click();
        }
      }
    },
    getTemplate_uiControl25_iSbu7m: function () {
      var selfTemplate = "import { Component } from 'react';\nexport default class extends Component {\n  btnClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:{ind:target.getAttribute(\"data-index\"),classname:target.className},\n        eventType:\"click\"\n      })\n    }\n  }\n  render() {\n    var data = this.props.customData;\n    var _this = this;\n    var span = data[1].map(function(d,i){\n      return(\n        <span onClick={_this.btnClick.bind(_this)} className=\"btn\" data-index={i}>{d}</span>\n      )\n    })\n    return (\n      <div>\n        <AInput type=\"file\" className=\"btn file\" onClick={_this.btnClick.bind(_this)} title={data[0]} value=\"\"/>\n        {span}\n      </div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"btnClick\",\n    value: function btnClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { ind: target.getAttribute(\"data-index\"), classname: target.className },\n          eventType: \"click\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      var span = data[1].map(function (d, i) {\n        return React.createElement(\n          \"span\",\n          { onClick: _this.btnClick.bind(_this), className: \"btn\", \"data-index\": i },\n          d\n        );\n      });\n      return React.createElement(\n        \"div\",\n        null,\n        React.createElement(AInput, { type: \"file\", className: \"btn file\", onClick: _this.btnClick.bind(_this), title: data[0], value: \"\" }),\n        span\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;\n;";
    }
  }, "file");
})(window, ysp);