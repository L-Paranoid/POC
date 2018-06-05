(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control25_VzCR4R: function (elem) {
      if (!elem) {
        return '';
      }return elem.innerHTML.replace('../images/rq_excel.gif', 'http://218.95.181.41:8081/report/images/rq_excel.gif').replace(/href=(\".*\" )/ig, 'data-href=$1').replace(/img/ig, 'span');
    }, doAction_uiControl36_g7DBMu: function (data, elem) {
      var type = data.eventType;var value = data.customData.trim();var doc = elem.ownerDocument;if (type == 'click') {
        var str = '[href=' + '\"' + value + '\"' + ']';doc.querySelector(str).click();
      }
    },
    getTemplate_uiControl36_g7DBMu: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  click:function(e){\n    var target = e.target;                \n    var callBack = this.props.customHandler;          \n    if(callBack) {   \n      callBack({\n        data:e.target.getAttribute(\'data-href\'),\n        eventType:\'click\' \n      })\n    }\n  },\n  render: function() {\n    var me = this;\n    var data = this.props.data.customData;\n    return (\n      <div className="ohidden w100">\n        <div onClick={me.click} dangerouslySetInnerHTML={{__html: data}}></div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  click: function click(e) {\n    var target = e.target;\n    var callBack = this.props.customHandler;\n    if (callBack) {\n      callBack({\n        data: e.target.getAttribute(\'data-href\'),\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    var me = this;\n    var data = this.props.data.customData;\n    return React.createElement(\n      \'div\',\n      { className: \'ohidden w100\' },\n      React.createElement(\'div\', { onClick: me.click, dangerouslySetInnerHTML: { __html: data } })\n    );\n  }\n});';
    },

    getData_control23_MZAOyo: function (elem) {
      var doc = elem.ownerDocument;if (!elem && doc.querySelector('#reportFrame1')) {
        return '';
      }var innerDoc = doc.querySelector('#reportFrame1').contentDocument;var tab = innerDoc.querySelector('.tab');if (!tab) {
        return '';
      }var trs = tab.querySelectorAll('tr');var data = [];var title = trs[0].querySelectorAll('td');for (var i = 1; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');var d = [];for (var j = 0; j < tds.length; j++) {
          var obj = {};obj.key = title[j].textContent;obj.value = tds[j].textContent.trim();d.push(obj);
        }data.push(d);
      }return data;
    },
    doAction_uiControl33_V5aORN: function (data, elem) {},
    getTemplate_uiControl33_V5aORN: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.data.customData;\n    if(!data){\n       return(<div></div>);\n    }\n    var list = data.map(function(d,i){\n      return(\n        <div className="border1">\n          {\n            d.map(function(k,j){\n              return(\n              \t<AMUI.List.Item\n                 subTitle={k.key+\'\uFF1A\'+k.value}\n                 >\n               </AMUI.List.Item>  \n              )\n            })\n          }\n        </div>\n      )\n    })\n    return (\n      <div>\n        {list}\n      </div>\n    );\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.data.customData;\n    if (!data) {\n      return React.createElement("div", null);\n    }\n    var list = data.map(function (d, i) {\n      return React.createElement(\n        "div",\n        { className: "border1" },\n        d.map(function (k, j) {\n          return React.createElement(AMUI.List.Item, {\n            subTitle: k.key + \'\uFF1A\' + k.value\n          });\n        })\n      );\n    });\n    return React.createElement(\n      "div",\n      null,\n      list\n    );\n  }\n});';
    },
    getData_control18_wD3N3g: function (elem) {
      var doc = elem.ownerDocument;if (!elem && doc.querySelector('#reportFrame1')) {
        return '';
      }var innerDoc = doc.querySelector('#reportFrame1').contentDocument;if (innerDoc.querySelector('td.report1_4')) {
        return '';
      }return 1;
    },
    doAction_uiControl26_v2FBPc: function (data, elem) {
      var doc = elem.ownerDocument;var innerDoc = doc.querySelector('#reportFrame1').contentDocument;innerDoc.querySelector('[value="返 回"').click();
    },
    getTemplate_uiControl26_v2FBPc: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  click: function() {\n    var handler = this.props.customHandler;\n    if(handler) {\n      handler({\n        eventType:\'back\'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    if(!data){\n       return (<div></div>)\n    }\n    return (\n      <div>\n        <button onClick={this.click} className="backBtn">\u8FD4\u56DE</button>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  click: function click() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'back\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    if (!data) {\n      return React.createElement("div", null);\n    }\n    return React.createElement(\n      "div",\n      null,\n      React.createElement(\n        "button",\n        { onClick: this.click, className: "backBtn" },\n        "\\u8FD4\\u56DE"\n      )\n    );\n  }\n});';
    },
    getData_control71_478yFF: function (elem) {
      if (!elem) {
        return;
      }var value = elem.value;return value;
    },
    doAction_uiControl91_eqHzVb: function (data, elem) {
      var value = data.dataCustom;var type = data.eventType;if (type == 'blur') {
        elem.value = value.replace(/\//, '-');
      }
    },
    getTemplate_uiControl91_eqHzVb: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  blur: function(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'blur\',\n        data: e.target.value\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    return (\n      <div>\n        <input type="date" defaultValue={data} onBlur={this.blur}/>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  blur: function blur(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'blur\',\n        data: e.target.value\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    return React.createElement(\n      "div",\n      null,\n      React.createElement("input", { type: "date", defaultValue: data, onBlur: this.blur })\n    );\n  }\n});';
    },
    getData_control83_Mt24TU: function (elem) {
      if (!elem) {
        return;
      }var value = elem.value;return value;
    },
    doAction_uiControl103_XH5rxF: function (data, elem) {
      var value = data.dataCustom;var type = data.eventType;if (type == 'blur') {
        elem.value = value.replace(/\//, '-');
      }
    },
    getTemplate_uiControl103_XH5rxF: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  blur: function(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'blur\',\n        data: e.target.value\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    return (\n      <div>\n        <input type="date" defaultValue={data} onBlur={this.blur}/>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  blur: function blur(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'blur\',\n        data: e.target.value\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    return React.createElement(\n      "div",\n      null,\n      React.createElement("input", { type: "date", defaultValue: data, onBlur: this.blur })\n    );\n  }\n});';
    },
    getData_control84_EOtSbt: function (elem) {
      if (!elem) {
        return '';
      }return elem.value;
    },
    doAction_uiControl104_meBgD1: function (data, elem) {
      elem.click();
    },
    getTemplate_uiControl104_meBgD1: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  click: function(e) {\n    var handler = this.props.customHandler;\n\t\tdebugger;\n    \te.target.ownerDocument.querySelector(\'.icon.icon-close.modal-icon\').click();  \n\n    if(handler) {\n      handler({\n        eventType:\'click\'\n      })\n\t\t}\n  },\n  render: function() {\n    return (\n      <div>\n        <AMUI.Button amSize=\'sm\' block amStyle="secondary" onClick={this.click}>{this.props.data.customData}</AMUI.Button>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    debugger;\n    e.target.ownerDocument.querySelector(\'.icon.icon-close.modal-icon\').click();\n\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        AMUI.Button,\n        { amSize: \'sm\', block: true, amStyle: \'secondary\', onClick: this.click },\n        this.props.data.customData\n      )\n    );\n  }\n});';
    }
  }, "xzzf");
})(window, ysp);