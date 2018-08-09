(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control13_TGOyJG: function (elem) {
      if (elem) {
        var arr = { oneTitle: [], oneContent: [], page: [] };var trs = elem.querySelector(".tab02").querySelectorAll("tr");var ths = trs[0].querySelectorAll("td");for (var i = 1; i < ths.length; i++) {
          arr.oneTitle.push(ths[i].textContent.trim());
        }
        for (var j = 1; j < trs.length; j++) {
          if (j % 2 == 0) {
            var tds = trs[j].querySelectorAll("td");var pData = [];for (var k = 1; k < tds.length; k++) {
              pData.push(tds[k].textContent.trim()); // if (tds[1].textContent.trim().indexOf("ERP") <= -1) {
              //   pData.push(tds[k].textContent.trim());
              // }
            }arr.oneContent.push(pData);
          }
        }var page = elem.querySelector(".Page");
        return arr;
      }return [];
    },
    doAction_uiControl11_CKT2zM: function (data, elem) {
      if (data.eventType == "click") {
        // debugger;
        var ind = parseInt(data.dataCustom.index);var title = data.dataCustom.title;var index = ind * 2 + 2;if (title.indexOf("ERP") <= -1) {
          var trs = elem.querySelector('table[class^="tab02"]').querySelectorAll("tr");var tds = trs[index].querySelectorAll("td");tds[1].querySelector("a").click();
        }
      }
    },
    getTemplate_uiControl11_CKT2zM: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  onClick(e){\n   // debugger;\n    var target=e.target;\n    var index = target.parentElement.parentElement.dataset.index;\n    var title = target.parentElement.parentElement.dataset.title;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:{\n          index: index,\n          title: title\n        },\n        eventType:\"click\"\n      })\n    }\n  }\n  render() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data.oneContent.length==0){\n      return(\n        <div>\u6682\u65E0\u6570\u636E</div>\n      )\n    }\n    var lis = data&&data.oneContent.length>0&&data.oneContent.map(function(d,i){\n      return(\n        <div  className=\"ysp_cards\" data-title = {d[0]} data-index={i} onClick={_this.onClick.bind(_this)}>\n          <span className=\"ysp_img\"></span>\n          <div className=\"ysp_cards-body\">\n            <label>{data.oneTitle[0]}\uFF1A</label>\n            <span >{d[0]}</span>\n            <label>{data.oneTitle[1]}\uFF1A</label>\n            <span>{d[1]}</span>\n            <label>{data.oneTitle[2]}\uFF1A</label>\n            <span>{d[2]}</span>\n            <label>{data.oneTitle[3]}\uFF1A</label>\n            <span>{d[3]}</span>\n            <label>{data.oneTitle[4]}\uFF1A</label>\n            <span>{d[4]}</span>\n          </div>\n        </div>\n        \n      )\n    })\n    return (\n      <div className=\"ysp_entirety\">\n        {lis}\n      </div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"onClick\",\n    value: function onClick(e) {\n      // debugger;\n      var target = e.target;\n      var index = target.parentElement.parentElement.dataset.index;\n      var title = target.parentElement.parentElement.dataset.title;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: {\n            index: index,\n            title: title\n          },\n          eventType: \"click\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      if (data.oneContent.length == 0) {\n        return React.createElement(\n          \"div\",\n          null,\n          \"\\u6682\\u65E0\\u6570\\u636E\"\n        );\n      }\n      var lis = data && data.oneContent.length > 0 && data.oneContent.map(function (d, i) {\n        return React.createElement(\n          \"div\",\n          { className: \"ysp_cards\", \"data-title\": d[0], \"data-index\": i, onClick: _this.onClick.bind(_this) },\n          React.createElement(\"span\", { className: \"ysp_img\" }),\n          React.createElement(\n            \"div\",\n            { className: \"ysp_cards-body\" },\n            React.createElement(\n              \"label\",\n              null,\n              data.oneTitle[0],\n              \"\\uFF1A\"\n            ),\n            React.createElement(\n              \"span\",\n              null,\n              d[0]\n            ),\n            React.createElement(\n              \"label\",\n              null,\n              data.oneTitle[1],\n              \"\\uFF1A\"\n            ),\n            React.createElement(\n              \"span\",\n              null,\n              d[1]\n            ),\n            React.createElement(\n              \"label\",\n              null,\n              data.oneTitle[2],\n              \"\\uFF1A\"\n            ),\n            React.createElement(\n              \"span\",\n              null,\n              d[2]\n            ),\n            React.createElement(\n              \"label\",\n              null,\n              data.oneTitle[3],\n              \"\\uFF1A\"\n            ),\n            React.createElement(\n              \"span\",\n              null,\n              d[3]\n            ),\n            React.createElement(\n              \"label\",\n              null,\n              data.oneTitle[4],\n              \"\\uFF1A\"\n            ),\n            React.createElement(\n              \"span\",\n              null,\n              d[4]\n            )\n          )\n        );\n      });\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_entirety\" },\n        lis\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;\n;";
    },
    getData_control16_XUDBPK: function (elem) {//   var arr = [];
      //   var number = [];
      //   var num = elem.querySelectorAll(".Number");
      //   for (var i = 0; i < num.length; i++) {
      //     number.push(num[i].textContent.trim());
      //   }
      //   arr.push(number);
      //   var sel = elem.querySelectorAll("select");
      //   for (var j = 0; j < sel.length; j++) {
      //     var obj = {
      //       sel: [],
      //       select: []
      //     };
      //     var options = sel[j].querySelectorAll("option");
      //     for (var k = 0; k < options.length; k++) {
      //       obj.sel.push(options[k].textContent); // if (options[k].selected) {
      //       //   obj.select.push("selected");
      //       // } else {
      //       //   obj.select.push("");
      //       // }
      //       if (options[k].selected) {
      //         obj.select.push(options[k].textContent);
      //       }
      //     }
      //     arr.push(obj);
      //   }
      //   return arr;
      // }
      // return [];
    },
    doAction_uiControl14_CSJ9aE: function (data, elem) {
      if (data.eventType == "click") {
        var clas = data.dataCustom;if (clas == "ysp_left") {
          elem.querySelectorAll("td")[1].querySelector("a").click();
        } else {
          elem.querySelectorAll("td")[3].querySelector("a").click();
        }
      } else if (data.eventType == "change") {
        debugger;var i = parseInt(data.dataCustom);var option = elem.querySelectorAll("td")[2].querySelector("select").querySelectorAll("option")[ind];$(option).prop("selected", true);
      } else if (data.eventType == "selchange") {
        var i = parseInt(data.dataCustom);var option = elem.querySelectorAll("td")[4].querySelector("select").querySelectorAll("option")[ind];$(option).prop("selected", true);
      } //     var target=e.target;
      //     var handler=this.props.customHandler;
      //     if(handler){
      //       handler({
      //         data:target.className,
      //         eventType:"click"
      //       })
      //     }
      //   },
      //   onChange: function(e){
      //     var target=e.target;
      //     var handler=this.props.customHandler;
      //     if(handler){
      //       handler({
      //         data:target.getAttribute("data-index"),
      //         eventType:"change"
      //       })
      //     }
      //   },
      //   selChange: function(e){
      //     var target=e.target;
      //     var handler=this.props.customHandler;
      //     if(handler){
      //       handler({
      //         data:target.getAttribute("data-index"),
      //         eventType:"selchange"
      //       })
      //     }
      //   },
      //   render: function() {
      //     var data = this.props.customData;
      //     var dataSelect = data && data[1].select;
      //     var _this = this;
      //     var lis = data[1].sel.map(function(d,i){
      //       return(
      //           <option selected={data[1].select[i]} data-index={i} onChange={_this.onChange.bind(_this)}>
      //           {dataSelect == d ? dataSelect : d}
      //         	</option>
      //       )
      //     });
      //     var sel = data[2].sel.map(function(d,i){
      //       return(
      //           <option selected={data[2].select[i]} data-index={i} onChange={_this.selChange.bind(_this)}>{d}</option>
      //       )
      //     });
      //     return (
      //       <div className="ysp_page">
      //         <span className="ysp_share">共{data[0][0]}页，{data[0][1]}笔资料</span>
      //         <span className="ysp_left" onClick={_this.onClick.bind(_this)}></span>
      //         <div className="div1">
      //           <span className="ysp_first">到第</span>
      //           <select>{lis}</select>
      //           <span className="ysp_pages">页</span>
      //         </div>
      //         <span className="ysp_right" onClick={_this.onClick.bind(_this)}></span>
      //         <div className="div2">
      //           <span className="ysp_each">每页显示</span>
      //           <select>{sel}</select>
      //           <span className="ysp_single">笔</span>
      //         </div>
      //       </div>
      //     )
      //   }
      // });
    },
    getTemplate_uiControl14_CSJ9aE: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n    \n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\"div\", null);\n  }\n});";
    },
    getData_control27_54mlyR: function (elem) {},
    doAction_uiControl26_yGNVwQ: function (data, elem) {
      if (data.eventType == 'click') {
        var url = "http://123.125.21.40/dachanoa/homepage.html";ysp.appMain.reloadPage(url); // ysp.runtime.Model.setForceMatchModels(['menu']);
      }
    },
    getTemplate_uiControl26_yGNVwQ: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click\"\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div style={{'background':'rgb(0,141,216)','width':'100%','height':'44px'}}>\n        <div>\n          <span style={{'color':'#fff','float':'left','paddingLeft':'20px','margin-top':'10px'}} onClick={this.onClick.bind(this)}>\u8FD4\u56DE</span>\n        </div>\n        <div style={{'color':'#fff','padding-left':'140px','padding-top':'10px','font-weight':'600'}}>\u5F85\u5904\u7406\u4E8B\u9879</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  onClick: function onClick(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"click\"\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      { style: { 'background': 'rgb(0,141,216)', 'width': '100%', 'height': '44px' } },\n      React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'span',\n          { style: { 'color': '#fff', 'float': 'left', 'paddingLeft': '20px', 'margin-top': '10px' }, onClick: this.onClick.bind(this) },\n          '\\u8FD4\\u56DE'\n        )\n      ),\n      React.createElement(\n        'div',\n        { style: { 'color': '#fff', 'padding-left': '140px', 'padding-top': '10px', 'font-weight': '600' } },\n        '\\u5F85\\u5904\\u7406\\u4E8B\\u9879'\n      )\n    );\n  }\n});";
    }
  }, "toDo");
})(window, ysp);