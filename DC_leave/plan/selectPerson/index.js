(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control21_JeqTfq: function (elem) {
      if (!elem) {
        return;
      }var data = { text: [], flag: [] };var el = elem.querySelector("#ext-gen97");
      var trs = el.querySelectorAll("tr");if (trs) {
        for (var i = 0; i < trs.length; i++) {
          var td = trs[i].querySelectorAll("td")[1];var text = td.textContent.trim();data.text.push(text);
        }for (var i = 0; i < trs.length; i++) {
          var classFlag = trs[i].classList.contains("x-grid-row-selected");if (classFlag) {
            data.flag.push("true");
          } else {
            data.flag.push("false");
          }
        }
      }return data;
    }, doAction_uiControl22_kf0oMx: function (data, elem) {
      if (data.eventType == "click") {
        var index = parseInt(data.customData);var el = elem.querySelector("#ext-gen97");var trs = el.querySelectorAll("tr");var evt = trs[index].ownerDocument.createEvent('MouseEvents');evt.initEvent('mousedown', true);trs[index].dispatchEvent(evt);
      }
    },
    getTemplate_uiControl22_kf0oMx: function () {
      var selfTemplate = "module.exports = React.createClass({\n  getInitialState: function() {\n    return { \n      flag: \"false\"\n    }; \n  },\n  personClick:function(e){\n    var target = e.target;\n    var index = target.dataset.index;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:index,\n        eventType:'click'\n      })\n    }\n    this.setState({\n\t\t\tflag:\"true\"\n    })\n  },\n  render: function() {\n    var data =this.props.customData && this.props.customData.text;\n    var flag = this.props.customData && this.props.customData.flag;\n    return (\n      <div className=\"ysp-chose-person\">\n        <div>\u5DF2\u9009\u4EBA\u5458</div>\n        \t{\n            data && data.map((item,index)=>\n              <div className={flag == \"true\" ? \"ysp-chose-clickPerson\" : \"ysp-chose-Person\"} data-index = {index} onClick={this.personClick.bind(this)}>\n              \t{item}\n              </div>\n            )\n          }\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  getInitialState: function getInitialState() {\n    return {\n      flag: \"false\"\n    };\n  },\n  personClick: function personClick(e) {\n    var target = e.target;\n    var index = target.dataset.index;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: index,\n        eventType: 'click'\n      });\n    }\n    this.setState({\n      flag: \"true\"\n    });\n  },\n  render: function render() {\n    var _this = this;\n\n    var data = this.props.customData && this.props.customData.text;\n    var flag = this.props.customData && this.props.customData.flag;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-chose-person\" },\n      React.createElement(\n        \"div\",\n        null,\n        \"\\u5DF2\\u9009\\u4EBA\\u5458\"\n      ),\n      data && data.map(function (item, index) {\n        return React.createElement(\n          \"div\",\n          { className: flag == \"true\" ? \"ysp-chose-clickPerson\" : \"ysp-chose-Person\", \"data-index\": index, onClick: _this.personClick.bind(_this) },\n          item\n        );\n      })\n    );\n  }\n});";
    },
    getData_control22_X1XHvS: function (elem) {},
    doAction_uiControl23_1c0l4k: function (data, elem) {
      if (data.eventType == "click") {
        elem.click();
      }
    },
    getTemplate_uiControl23_1c0l4k: function () {
      var selfTemplate = "module.exports = React.createClass({\n  clickBt:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"ysp-person-button\" onClick={this.clickBt.bind(this)}>\n        \u786E\u5B9A\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  clickBt: function clickBt(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-person-button\", onClick: this.clickBt.bind(this) },\n      \"\\u786E\\u5B9A\"\n    );\n  }\n});";
    },

    getData_control25_ooCOSt: function (elem) {
      if (!elem) {
        return;
      }var data = { text: [], flag: [] };var trs = elem.querySelectorAll("tr");if (trs) {
        for (var i = 0; i < trs.length; i++) {
          var td = trs[i].querySelectorAll("td")[1];var text = td.textContent.trim();data.text.push(text);
        }for (var i = 0; i < trs.length; i++) {
          var classFlag = trs[i].classList.contains("x-grid-row-selected");if (classFlag) {
            data.flag.push("true");
          } else {
            data.flag.push("false");
          }
        }
      }return data;
    },
    doAction_uiControl16_nQib9l: function (data, elem) {
      if (data.eventType == "click") {
        var index = parseInt(data.customData);var trs = elem.querySelectorAll("tr");var evt = trs[index].ownerDocument.createEvent('MouseEvents');evt.initEvent('mousedown', true);trs[index].dispatchEvent(evt);
      }
    },
    getTemplate_uiControl16_nQib9l: function () {
      var selfTemplate = "module.exports = React.createClass({\n  getInitialState: function() {\n    return { \n      flag: \"false\"\n    }; \n  },\n  personClick:function(e){\n    var target = e.target;\n    var index = target.dataset.index;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:index,\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var data =this.props.customData && this.props.customData.text;\n    var flag = this.props.customData && this.props.customData.flag;\n    return (\n      <div className=\"ysp-chose-person\">\n        <div>\u5F85\u9009\u4EBA\u5458</div>\n        \t{\n            data && data.map((item,index)=>\n              <div className={flag[index] == \"true\" ? \"ysp-chose-clickPerson\" : \"ysp-chose-Person\"} data-index = {index} onClick={this.personClick.bind(this)}>\n              \t{item}\n              </div>\n            )\n          }\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  getInitialState: function getInitialState() {\n    return {\n      flag: \"false\"\n    };\n  },\n  personClick: function personClick(e) {\n    var target = e.target;\n    var index = target.dataset.index;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: index,\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n\n    var data = this.props.customData && this.props.customData.text;\n    var flag = this.props.customData && this.props.customData.flag;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-chose-person\" },\n      React.createElement(\n        \"div\",\n        null,\n        \"\\u5F85\\u9009\\u4EBA\\u5458\"\n      ),\n      data && data.map(function (item, index) {\n        return React.createElement(\n          \"div\",\n          { className: flag[index] == \"true\" ? \"ysp-chose-clickPerson\" : \"ysp-chose-Person\", \"data-index\": index, onClick: _this.personClick.bind(_this) },\n          item\n        );\n      })\n    );\n  }\n});";
    },
    getData_control26_bKATol: function (elem) {},
    doAction_uiControl25_Ix1uDo: function (data, elem) {
      if (data.eventType == "click") {
        var text = data.dataCustom;if ("添加" == text) {
          elem.querySelector("#AddLoc").click();
        } else {
          elem.querySelector("#DelLoc").click();
        }
      }
    },
    getTemplate_uiControl25_Ix1uDo: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick:function(e){\n    var target = e.target;\n    var text = target.dataset.text;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:text,\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"ysp-chose-person-button\">\n        <span data-text = \"\u6DFB\u52A0\" onClick={this.handlerClick.bind(this)}>\u6DFB\u52A0</span>\n        <span data-text = \"\u5220\u9664\" onClick={this.handlerClick.bind(this)}>\u5220\u9664</span>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  handlerClick: function handlerClick(e) {\n    var target = e.target;\n    var text = target.dataset.text;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: text,\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-chose-person-button\" },\n      React.createElement(\n        \"span\",\n        { \"data-text\": \"\\u6DFB\\u52A0\", onClick: this.handlerClick.bind(this) },\n        \"\\u6DFB\\u52A0\"\n      ),\n      React.createElement(\n        \"span\",\n        { \"data-text\": \"\\u5220\\u9664\", onClick: this.handlerClick.bind(this) },\n        \"\\u5220\\u9664\"\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);