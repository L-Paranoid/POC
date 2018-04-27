(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control19_iFa11u: function (elem) {
      if (!elem) {
        return false;
      }
    },
    doAction_uiControl19_pROfAO: function (data, elem) {
      if (data.eventType == 'click') {
        //ysp.appMain.back();
        history.back();
      }
    },
    getTemplate_uiControl19_pROfAO: function () {
      var selfTemplate = 'import {Component} from \'react\';\nimport {CommonHead} from \'ysp-custom-components\';\nexport default class extends Component{\n  render(){\n    var _this = this;\n    return (\n    \t<CommonHead\n        title={"\u53D6\u6837\u767B\u8BB0"}\n        leftShow={true}\n        leftText={"\u8FD4\u56DE"}\n        back={()=>{\n          var handler = _this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'click\'\n            })\n          }\n        }}\n        />\n    )\n  }\n}';
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(_yspCustomComponents.CommonHead, {\n        title: \"\u53D6\u6837\u767B\u8BB0\",\n        leftShow: true,\n        leftText: \"\u8FD4\u56DE\",\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'click'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control18_KNDdQq: function (elem) {
      if (!elem) {
        return false;
      }var edit = [];var trs = elem.children[4].children[0].children;[].forEach.call(trs, function (item, index) {
        if (item) {
          var All = { title: [], content: [] };var tds = item.children;[].forEach.call(tds, function (d, i) {
            if (d) {
              if (i % 2 == 0) {
                All.title.push(ysp.customHelper.trim(d.textContent));
              } else {
                if (d.lastChild.nodeName == "SPAN") {
                  All.content.push(ysp.customHelper.trim(d.querySelectorAll('input')[2].value));
                } else {
                  All.content.push(ysp.customHelper.trim(d.querySelector('input').value));
                }
              }
            }
          });edit.push(All);
        }
      });var data = { edit: edit };return data;
    },
    doAction_uiControl18_N6k5Wf: function (data, elem) {
      if (data.eventType == 'change') {
        var index = parseInt(data.dataCustom.index);var Pindex = parseInt(data.dataCustom.Pindex);if (Pindex == 0) {
          switch (index) {case 0:
              changeValue('#checkTaskNo');break;case 1:
              changeValue('#prodName');break;case 2:
              changeValue('#prodDetailName');break;}
        } else if (Pindex == 1) {
          switch (index) {case 0:
              changeValue('#checkPlanNo');break;case 1:
              changeValue('#checkPlanName');break;case 2:
              changeValue('#produceOrganName');break;}
        } else if (Pindex == 2) {
          switch (index) {case 0:
              changeValue('#courierNumber');break;case 1:
              changeValue('#receiveDate');break;}
        }function changeValue(id) {
          var value = data.dataCustom.value;if (id == '#receiveDate') {
            elem.querySelector(id).nextElementSibling.children[1].value = value;return;
          }elem.querySelector(id).value = value;
        }
      }
    },
    getTemplate_uiControl18_N6k5Wf: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends Component{\n  onChange(e){\n    if(e.target.nodeName == "INPUT"){\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if(handler){\n        handler({\n          data:{index:e.target.parentNode.parentNode.dataset.index,\n                value:e.target.value,\n                Pindex:e.target.parentNode.parentNode.dataset.pindex},\n          eventType:\'change\'\n        })\n      }\n    }\n  }\n  render(){\n    var _this = this;\n    var data = this.props.customData.edit;\n    return (\n    \t<div className=\'edit-storage\'>\n        {data && data.map((item,index)=>{\n          return (\n            <ul>\n              {item.title.map((d,i)=>{\n                if(d){\n                  d = d.replace(\'\uFF1A\',\'\')\n                }\n                return (\n                \t<li data-index={i} data-Pindex={index} onChange={_this.onChange.bind(_this)}>\n                    <div>{d.indexOf(\'*\') !=-1?<span className=\'title\'><b>*</b>{d.replace(\'*\',\'\')}</span>:<span className=\'title\'>{d}</span>}\n                    { index == 2 && i==1?<AInput className=\'content\' type=\'date\' value={item.content[i]}/>: d.length>1 && <AInput className=\'content\' type=\'text\' value={item.content[i]}/> }</div>\n              \t\t</li>\n                )\n              })}\n            </ul>\n          )\n        })}\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'onChange\',\n    value: function onChange(e) {\n      if (e.target.nodeName == "INPUT") {\n        var _this = this;\n        var handler = _this.props.customHandler;\n        if (handler) {\n          handler({\n            data: { index: e.target.parentNode.parentNode.dataset.index,\n              value: e.target.value,\n              Pindex: e.target.parentNode.parentNode.dataset.pindex },\n            eventType: \'change\'\n          });\n        }\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData.edit;\n      return React.createElement(\n        \'div\',\n        { className: \'edit-storage\' },\n        data && data.map(function (item, index) {\n          return React.createElement(\n            \'ul\',\n            null,\n            item.title.map(function (d, i) {\n              if (d) {\n                d = d.replace(\'\uFF1A\', \'\');\n              }\n              return React.createElement(\n                \'li\',\n                { \'data-index\': i, \'data-Pindex\': index, onChange: _this.onChange.bind(_this) },\n                React.createElement(\n                  \'div\',\n                  null,\n                  d.indexOf(\'*\') != -1 ? React.createElement(\n                    \'span\',\n                    { className: \'title\' },\n                    React.createElement(\n                      \'b\',\n                      null,\n                      \'*\'\n                    ),\n                    d.replace(\'*\', \'\')\n                  ) : React.createElement(\n                    \'span\',\n                    { className: \'title\' },\n                    d\n                  ),\n                  index == 2 && i == 1 ? React.createElement(AInput, { className: \'content\', type: \'date\', value: item.content[i] }) : d.length > 1 && React.createElement(AInput, { className: \'content\', type: \'text\', value: item.content[i] })\n                )\n              );\n            })\n          );\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control20_AD7k1T: function (elem) {
      if (!elem) {
        return false;
      }var file = [];var divs = elem.children;[].forEach.call(divs, function (item, index) {
        if (item) {
          var All = { title: [], content: [] };if (index == 0) {
            All.title.push(item.querySelector('label').innerHTML);if (item.querySelector('.uf_domain')) {
              var ufs = item.querySelectorAll('.uf_domain');for (var k = 0; k < ufs.length; k++) {
                if (ufs[k].querySelector('label')) {
                  All.content.push(ufs[k].querySelector('label').innerHTML);
                } else {
                  All.content.push(ufs[k].querySelector('a').textContent);
                }
              }
            } else {
              All.content.push('OK');
            }
          } else if (!item.querySelector('textarea')) {
            var spans = item.querySelectorAll('span');for (var i = 0; i < spans.length; i++) {
              var checked = { title: spans[i].textContent, checked: spans[i].querySelector('input').checked };All.content.push(checked);
            }All.title.push(item.querySelector('label').innerHTML);
          } else {
            All.title.push(item.querySelector('label').innerHTML);All.content.push(item.querySelector('textarea').value);
          }file.push(All);
        }
      });var data = { file: file };return data;
    },
    doAction_uiControl20_352Btd: function (data, elem) {
      if (data.eventType == 'click') {
        var index = data.dataCustom.index;var num = data.dataCustom.childrenNum;elem.children[index].querySelectorAll('span')[num].querySelector('input').click();
      }if (data.eventType == 'file') {
        elem.children[0].querySelector('img').click();
      }if (data.eventType == 'change') {
        elem.lastChild.previousSibling.querySelector('textarea').value = data.dataCustom;
      }if (data.eventType == 'delete') {
        if (elem.children[0].querySelector('.uf_domain')) {
          data.dataCustom = parseInt(data.dataCustom);elem.children[0].querySelectorAll('.uf_domain')[data.dataCustom].querySelector('img').click();
        }
      }
    },
    getTemplate_uiControl20_352Btd: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends Component{\n  onClick(e){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        data:{index:e.target.parentNode.parentNode.dataset.index,\n              childrenNum:e.target.parentNode.parentNode.dataset.checked},\n        eventType:\'click\'\n      })\n    }\n  }\n  render(){\n    var _this = this;\n    var data = this.props.customData.file;\n    return (\n    \t<div className=\'ysp-detail-checked\'>\n      \t{data && data.map((item,index)=>{\n          return(\n          \t<ul>\n              <span className=\'icon-title\'>{item.title}</span>\n            \t{item.content && item.content.map((d,i)=>{\n                if(d.title){\n                  return (\n                    <li className={item.content.length==3?\'lis\':\'li\'} data-index={index} data-checked={i} onClick={_this.onClick.bind(_this)}>\n                      <div>\n                        <span>{d.title}</span>\n                        <input type=\'checkbox\' checked={d.checked}/>\n                      </div>\n                    </li>\n                  )\n                }else{\n                  return(\n                  \t<li data-index={i} className={item.title!=\'\u610F\u89C1:\' ? \'ysp-file\':\'ysp-textarea\'}>\n                    \t{item.title!=\'\u610F\u89C1:\' ? <span>\n                      \t{item.content[i] != \'OK\' && item.content[i]}\n                        {item.content[i]!=\'\' && <b onClick={(e)=>{\n                              \n                              var handler = _this.props.customHandler;\n                              if(handler){\n                                handler({\n                                  data:e.target.parentNode.parentNode.dataset.index,\n                                  eventType:\'delete\'\n                                })\n                              }\n                            }}>X</b>}</span> : <ATextarea value={item.content} onChange={(e)=>{\n                        var handler = _this.props.customHandler;\n                        if(handler){\n                          handler({\n                            data:e.target.value,\n                            eventType:\'change\'\n                          })\n                        }\n                      }}></ATextarea>}\n                      { (item.content == \'OK\' || item.content.length-i == 1) && item.title!=\'\u610F\u89C1:\'? <button onClick={(e)=>{\n                              var handler = _this.props.customHandler;\n                              if(handler){\n                                handler({\n                                  eventType:\'file\'\n                                })\n                              }\n                            }}>\u4E0A\u4F20\u7167\u7247</button>:\'\'}\n                    </li>\n                  )\n                }\n              })}\n            </ul>\n          )\n        })}\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'onClick\',\n    value: function onClick(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { index: e.target.parentNode.parentNode.dataset.index,\n            childrenNum: e.target.parentNode.parentNode.dataset.checked },\n          eventType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData.file;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-detail-checked\' },\n        data && data.map(function (item, index) {\n          return React.createElement(\n            \'ul\',\n            null,\n            React.createElement(\n              \'span\',\n              { className: \'icon-title\' },\n              item.title\n            ),\n            item.content && item.content.map(function (d, i) {\n              if (d.title) {\n                return React.createElement(\n                  \'li\',\n                  { className: item.content.length == 3 ? \'lis\' : \'li\', \'data-index\': index, \'data-checked\': i, onClick: _this.onClick.bind(_this) },\n                  React.createElement(\n                    \'div\',\n                    null,\n                    React.createElement(\n                      \'span\',\n                      null,\n                      d.title\n                    ),\n                    React.createElement(\'input\', { type: \'checkbox\', checked: d.checked })\n                  )\n                );\n              } else {\n                return React.createElement(\n                  \'li\',\n                  { \'data-index\': i, className: item.title != \'\u610F\u89C1:\' ? \'ysp-file\' : \'ysp-textarea\' },\n                  item.title != \'\u610F\u89C1:\' ? React.createElement(\n                    \'span\',\n                    null,\n                    item.content[i] != \'OK\' && item.content[i],\n                    item.content[i] != \'\' && React.createElement(\n                      \'b\',\n                      { onClick: function onClick(e) {\n\n                          var handler = _this.props.customHandler;\n                          if (handler) {\n                            handler({\n                              data: e.target.parentNode.parentNode.dataset.index,\n                              eventType: \'delete\'\n                            });\n                          }\n                        } },\n                      \'X\'\n                    )\n                  ) : React.createElement(ATextarea, { value: item.content, onChange: function onChange(e) {\n                      var handler = _this.props.customHandler;\n                      if (handler) {\n                        handler({\n                          data: e.target.value,\n                          eventType: \'change\'\n                        });\n                      }\n                    } }),\n                  (item.content == \'OK\' || item.content.length - i == 1) && item.title != \'\u610F\u89C1:\' ? React.createElement(\n                    \'button\',\n                    { onClick: function onClick(e) {\n                        var handler = _this.props.customHandler;\n                        if (handler) {\n                          handler({\n                            eventType: \'file\'\n                          });\n                        }\n                      } },\n                    \'\\u4E0A\\u4F20\\u7167\\u7247\'\n                  ) : \'\'\n                );\n              }\n            })\n          );\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control22_cqF0XR: function (elem) {
      if (!elem) {
        return false;
      }if (elem.querySelector('#submitSave').disabled) {
        return false;
      } else {
        return true;
      }
    },
    doAction_uiControl21_pzzuDe: function (data, elem) {
      if (data.eventType == 'click') {
        if (data.dataCustom == 'save') {
          elem.querySelector('#tempSave').click();
        }if (data.dataCustom == 'commit') {
          elem.querySelector('#submitSave').click();
        }
      }
    },
    getTemplate_uiControl21_pzzuDe: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends Component{\n  onClick(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:e.target.dataset.title,\n        evetnType:\'click\'\n      })\n    }\n  }\n  render(){\n    var data = this.props.customData;\n    if(data){\n      return (\n        <div className=\'common-edit-btn\'>\n          <button data-title=\'save\' onClick={this.onClick.bind(this)}>\u6682\u5B58</button>\n          <button data-title=\'commit\' onClick={this.onClick.bind(this)}>\u63D0\u4EA4</button>\n        </div>\n      )\n    }else{\n      return (\n      \t<div></div>\n      )\n    }\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'onClick\',\n    value: function onClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.dataset.title,\n          evetnType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData;\n      if (data) {\n        return React.createElement(\n          \'div\',\n          { className: \'common-edit-btn\' },\n          React.createElement(\n            \'button\',\n            { \'data-title\': \'save\', onClick: this.onClick.bind(this) },\n            \'\\u6682\\u5B58\'\n          ),\n          React.createElement(\n            \'button\',\n            { \'data-title\': \'commit\', onClick: this.onClick.bind(this) },\n            \'\\u63D0\\u4EA4\'\n          )\n        );\n      } else {\n        return React.createElement(\'div\', null);\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  }, "editStorage");
})(window, ysp);