(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control21_JeqTfq: function (elem) {
      if (!elem) {
        return;
      }var data = { text: [] };var el = elem.querySelector("#ext-gen97");var tds = el.querySelector("tr").querySelectorAll("td");if (tds.length > 1) {
        for (var i = 1; i < tds.length; i++) {
          data.text.push(tds[i].textContent.trim());
        }return data;
      } else {
        return data;
      }
    },
    doAction_uiControl22_kf0oMx: function (data, elem) {
      if (data.eventType == "click") {
        var index = parseInt(data.customData) + 1;var el = elem.querySelector("#ext-gen97");var tds = el.querySelector("tr").querySelectorAll("td");tds[index].click();
      }
    },
    getTemplate_uiControl22_kf0oMx: function () {
      var selfTemplate = "module.exports = React.createClass({\n  getInitialState: function() {\n    return { \n      flag: \"false\"\n    }; \n  },\n  personClick:function(e){\n    var target = e.target;\n    var index = target.dataset.index;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:index,\n        eventType:'click'\n      })\n    }\n    this.setState({\n\t\t\tflag:\"true\"\n    })\n  },\n  render: function() {\n    var data =this.props.customData && this.props.customData.text;\n    return (\n      <div className=\"ysp-chose-person\">\n        <div>\u5DF2\u9009\u4EBA\u5458</div>\n        \t{\n            data && data.map((item,index)=>\n              <div className={this.state.flag == \"true\" ? \"ysp-chose-clickPerson\" : \"ysp-chose-Person\"} data-index = {index} onClick={this.personClick.bind(this)}>\n              \t{item}\n              </div>\n            )\n          }\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  getInitialState: function getInitialState() {\n    return {\n      flag: \"false\"\n    };\n  },\n  personClick: function personClick(e) {\n    var target = e.target;\n    var index = target.dataset.index;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: index,\n        eventType: 'click'\n      });\n    }\n    this.setState({\n      flag: \"true\"\n    });\n  },\n  render: function render() {\n    var _this = this;\n\n    var data = this.props.customData && this.props.customData.text;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-chose-person\" },\n      React.createElement(\n        \"div\",\n        null,\n        \"\\u5DF2\\u9009\\u4EBA\\u5458\"\n      ),\n      data && data.map(function (item, index) {\n        return React.createElement(\n          \"div\",\n          { className: _this.state.flag == \"true\" ? \"ysp-chose-clickPerson\" : \"ysp-chose-Person\", \"data-index\": index, onClick: _this.personClick.bind(_this) },\n          item\n        );\n      })\n    );\n  }\n});";
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
    }
  });
})(window, ysp);