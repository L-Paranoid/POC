(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control37_skXV1H: function (elem) {
      var doc = elem.ownerDocument;var tables = doc.querySelectorAll('table');var t;for (var i = 0; i < tables.length; i++) {
        if (tables[i].textContent.indexOf('序号') > -1) {
          t = tables[i];
        }
      }var trs = t.querySelectorAll('tr');var data = [];var title = trs[0].querySelectorAll('td');for (var i = 1; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');var d = [];for (var j = 0; j < tds.length; j++) {
          var obj = {};obj.key = title[j].textContent;if (j == tds.length - 1) {
            obj.type = 'op';obj.see = tds[j].querySelector('a').textContent.trim();obj.down = tds[j].querySelectorAll('a').length > 1 ? tds[j].querySelectorAll('a')[1].textContent.trim() : '';
          } else {
            obj.value = tds[j].textContent.trim();
          }d.push(obj);
        }data.push(d);
      }return data;
    },
    doAction_uiControl52_dIZTqW: function (data, elem) {
      var type = data.eventType;var index = +data.dataCustom + 1;var doc = elem.ownerDocument;debugger;var tables = doc.querySelectorAll('table');var t;for (var i = 0; i < tables.length; i++) {
        if (tables[i].textContent.indexOf('序号') > -1) {
          t = tables[i];
        }
      }var trs = t.querySelectorAll('tr');if (type == 'down') {
        var tds = trs[index].querySelectorAll('td');tds[tds.length - 1].querySelectorAll('a')[1].click();
      } else if (type == 'see') {
        var tds = trs[index].querySelectorAll('td');tds[tds.length - 1].querySelectorAll('a')[0].click();
      }
    },
    getTemplate_uiControl52_dIZTqW: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  downClick: function(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    while(true){\n      if(target.tagName.toLowerCase() != \'li\'){\n        target = target.parentElement;\n      }else {\n        break;\n      }\n    }\n    if(handler){\n      handler({\n        data:target.getAttribute(\'data-id\'),\n        eventType: \'down\'\n      })\n    }\n  },\n  see: function(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    while(true){\n      if(target.tagName.toLowerCase() != \'li\'){\n        target = target.parentElement;\n      }else {\n        break;\n      }\n    }\n    if(handler){\n      handler({\n        data:target.getAttribute(\'data-id\'),\n        eventType: \'see\'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    if(!data){\n       return(<div></div>);\n    }\n    var me = this;\n    var list = data.map(function(d,i){\n      return(\n        <div className="border1">\n          {\n            d.map(function(k,j){\n              if(k.type != \'op\'){\n                return(\n                  <AMUI.List.Item\n                    data-id={i}\n                   subTitle={k.key+\'\uFF1A\'+k.value}\n                   >\n                 </AMUI.List.Item>  \n                )\n              }else {\n                return(\n                  <li className="item item-content" data-id={i} >\n                    <span>{k.key+\'\uFF1A\'}</span>\n                    <p className="absolute  l90">\n                      <a onClick={me.see}>{k.see}</a>\n                  {k.down?<a className="marginL10px"onClick={me.downClick}>{k.down}</a>:<span></span>}\n                    </p>\n                </li>\n                )\n              }\n              \n            })\n          }\n        </div>\n      )\n    })\n    return (\n      <div>\n        {list}\n      </div>\n    );\n  }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  downClick: function downClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    while (true) {\n      if (target.tagName.toLowerCase() != 'li') {\n        target = target.parentElement;\n      } else {\n        break;\n      }\n    }\n    if (handler) {\n      handler({\n        data: target.getAttribute('data-id'),\n        eventType: 'down'\n      });\n    }\n  },\n  see: function see(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    while (true) {\n      if (target.tagName.toLowerCase() != 'li') {\n        target = target.parentElement;\n      } else {\n        break;\n      }\n    }\n    if (handler) {\n      handler({\n        data: target.getAttribute('data-id'),\n        eventType: 'see'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    if (!data) {\n      return React.createElement('div', null);\n    }\n    var me = this;\n    var list = data.map(function (d, i) {\n      return React.createElement(\n        'div',\n        { className: 'border1' },\n        d.map(function (k, j) {\n          if (k.type != 'op') {\n            return React.createElement(AMUI.List.Item, {\n              'data-id': i,\n              subTitle: k.key + '\uFF1A' + k.value\n            });\n          } else {\n            return React.createElement(\n              'li',\n              { className: 'item item-content', 'data-id': i },\n              React.createElement(\n                'span',\n                null,\n                k.key + '\uFF1A'\n              ),\n              React.createElement(\n                'p',\n                { className: 'absolute  l90' },\n                React.createElement(\n                  'a',\n                  { onClick: me.see },\n                  k.see\n                ),\n                k.down ? React.createElement(\n                  'a',\n                  { className: 'marginL10px', onClick: me.downClick },\n                  k.down\n                ) : React.createElement('span', null)\n              )\n            );\n          }\n        })\n      );\n    });\n    return React.createElement(\n      'div',\n      null,\n      list\n    );\n  }\n});";
    },
    getData_control39_wPC4kU: function (elem) {
      if (!elem) {
        return '';
      }var doc = elem.ownerDocument;return doc.defaultView.parent.document.querySelector('#topFrame').contentDocument.querySelector('.li1').textContent; // var word = doc.querySelector('.word-12');
      // return word.textContent;
    },
    doAction_uiControl41_TyQLpG: function (data, elem) {
      var type = data.eventType;var doc = elem.ownerDocument;if (type == 'new') {
        doc.querySelector('.intbut-2').click();
      } else if (type == 'back') {
        if (top.className != 'inner-frame') {
          var frames = top.document.querySelector('#runtimeEngine').contentDocument.querySelectorAll('.inner-frame');frames[frames.length - 1].contentWindow.location.href = 'http://218.95.181.41:8081/ajjwork/index_zzq.jsp';
        } else {
          top.localtion.href = 'http://218.95.181.41:8081/ajjwork/index_zzq.jsp';
        }
      }
    },
    getTemplate_uiControl41_TyQLpG: function () {
      var selfTemplate = 'import { Header, HeaderLeft, HeaderRight } from \'ysp-interior-components\';\nimport { back } from \'appRenderer\';\n\nmodule.exports = React.createClass({\n\tclick: function() {\n    var handler = this.props.customHandler;\n    if(handler){\n    \thandler({eventType:\'new\'})  \n    }\n  }, \n  backBtn: function() {\n    var handler = this.props.customHandler;\n    if(handler){\n    \thandler({eventType:\'back\'})  \n    }\n  }, \n  render: function() {\n    var me = this;\n    var data = this.props.data.customData;\n    return (\n      <Header amStyle="primary" title={data}>\n  <HeaderLeft>\n    <AMUI.Button amStyle="primary" style={{ margin: 0 }} onClick={me.backBtn}>\u9996\u9875</AMUI.Button>\n  </HeaderLeft>\n  <HeaderRight>\n    {data==\' \u73B0\u573A\u68C0\u67E5\u65B9\u6848\u62DF\u5B9A\'?<AMUI.Button amStyle="primary" style={{ margin: 0 }} onClick={this.click}>\u65B0\u589E</AMUI.Button>:\'\'}\n  </HeaderRight>\n</Header>\n    )\n  }\n});\n\n\n\n';
      return '\'use strict\';\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nvar _appRenderer = require(\'appRenderer\');\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  click: function click() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({ eventType: \'new\' });\n    }\n  },\n  backBtn: function backBtn() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({ eventType: \'back\' });\n    }\n  },\n  render: function render() {\n    var me = this;\n    var data = this.props.data.customData;\n    return React.createElement(\n      _yspInteriorComponents.Header,\n      { amStyle: \'primary\', title: data },\n      React.createElement(\n        _yspInteriorComponents.HeaderLeft,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: \'primary\', style: { margin: 0 }, onClick: me.backBtn },\n          \'\\u9996\\u9875\'\n        )\n      ),\n      React.createElement(\n        _yspInteriorComponents.HeaderRight,\n        null,\n        data == \' \u73B0\u573A\u68C0\u67E5\u65B9\u6848\u62DF\u5B9A\' ? React.createElement(\n          AMUI.Button,\n          { amStyle: \'primary\', style: { margin: 0 }, onClick: this.click },\n          \'\\u65B0\\u589E\'\n        ) : \'\'\n      )\n    );\n  }\n});';
    },
    getData_control85_rUqtRr: function (elem) {
      if (!elem) {
        return;
      }var value = elem.value;return value;
    },
    doAction_uiControl105_8Lp4m6: function (data, elem) {
      var value = data.dataCustom;var type = data.eventType;if (type == 'blur') {
        elem.value = value.replace(/\//, '-');
      }
    },
    getTemplate_uiControl105_8Lp4m6: function () {
      var selfTemplate = "module.exports = React.createClass({\n  blur: function(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'blur',\n        data: e.target.value\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    return (\n      <div>\n        <input type=\"date\" defaultValue={data} onBlur={this.blur}/>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  blur: function blur(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'blur',\n        data: e.target.value\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\"input\", { type: \"date\", defaultValue: data, onBlur: this.blur })\n    );\n  }\n});";
    },
    getData_control86_N6O2Pb: function (elem) {
      if (!elem) {
        return;
      }var value = elem.value;return value;
    },
    doAction_uiControl106_DfyvTA: function (data, elem) {
      var value = data.dataCustom;var type = data.eventType;if (type == 'blur') {
        elem.value = value.replace(/\//, '-');
      }
    },
    getTemplate_uiControl106_DfyvTA: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  blur: function(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'blur\',\n        data: e.target.value\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    return (\n      <div>\n        <input type="date" defaultValue={data} onBlur={this.blur}/>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  blur: function blur(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'blur\',\n        data: e.target.value\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    return React.createElement(\n      "div",\n      null,\n      React.createElement("input", { type: "date", defaultValue: data, onBlur: this.blur })\n    );\n  }\n});';
    },
    getData_control87_UQmDfE: function (elem) {
      if (!elem) {
        return '';
      }return elem.value;
    },
    doAction_uiControl107_VcxWpQ: function (data, elem) {
      elem.click();
    },
    getTemplate_uiControl107_VcxWpQ: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  click: function(e) {\n    var handler = this.props.customHandler;\n\t\tdebugger;\n    \te.target.ownerDocument.querySelector(\'.icon.icon-close.modal-icon\').click();  \n\n    if(handler) {\n      handler({\n        eventType:\'click\'\n      })\n\t\t}\n  },\n  render: function() {\n    return (\n      <div>\n        <AMUI.Button className="marginT10" amSize=\'sm\' block amStyle="secondary" onClick={this.click}>{this.props.data.customData}</AMUI.Button>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    debugger;\n    e.target.ownerDocument.querySelector(\'.icon.icon-close.modal-icon\').click();\n\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        AMUI.Button,\n        { className: \'marginT10\', amSize: \'sm\', block: true, amStyle: \'secondary\', onClick: this.click },\n        this.props.data.customData\n      )\n    );\n  }\n});';
    }
  }, "zfjc_xcjcfand");
})(window, ysp);