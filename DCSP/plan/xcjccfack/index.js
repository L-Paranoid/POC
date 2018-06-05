(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control72_cZIl0m: function (elem) {
      if (!elem) {
        return '';
      }var data = [];var trs = elem.querySelectorAll('tr');for (var i = 0; i < trs.length - 1; i++) {
        if (trs[i].id == 'shspyj' || trs[i].id == 'shspqm' || trs[i].id == 'shspsj') {
          continue;
        } else {
          var tds = trs[i].querySelectorAll('td');if (tds.length == 2) {
            var obj = {};obj.key = tds[0].textContent.trim();if (tds[1].querySelector('textarea')) {
              obj.value = tds[1].querySelector('textarea').value;obj.type = 'textarea';obj.click = tds[1].querySelector('textarea').getAttribute('onclick') ? 'on' : 'off';
            } else if (tds[1].querySelector('input')) {
              if (tds[1].querySelector('input').id == 'checkDate') {
                obj.value = tds[1].querySelector('input').value;obj.type = 'date';obj.click = tds[1].querySelector('input').getAttribute('onclick') ? 'on' : 'off';
              } else {
                obj.value = tds[1].querySelector('input').value;obj.type = 'input';obj.click = tds[1].querySelector('input').getAttribute('onclick') ? 'on' : 'off';
              }
            } else if (tds[1].querySelector('select')) {
              obj.type = 'select';var s = tds[1].querySelector('select');var ops = s.querySelectorAll('option');obj.ops = [];for (var j = 0; j < ops.length; j++) {
                var o = {};o.text = ops[j].textContent;o.value = ops[j].value;o.selected = ops[j].selected;obj.ops.push(o);
              }
            } else {
              obj.value = tds[1].textContent;obj.type = 'text';
            }data.push(obj);
          } else if (tds.length == 4) {
            var ob = {};if (!tds[1].querySelector('input')) {
              continue;
            }if (trs[i].textContent.indexOf('行政执法人员') > -1) {
              ob.key = tds[0].textContent;ob.value = tds[1].querySelector('input').value + '-' + tds[2].querySelector('input').value;ob.click = 'off';ob.type = 'input';data.push(ob);continue;
            }ob.key = tds[0].textContent;ob.value = tds[1].querySelector('input').value;ob.click = tds[1].querySelector('input').getAttribute('onclick') ? 'on' : 'off';ob.type = 'input';data.push(ob);ob = {};if (!tds[3].querySelector('input')) {
              continue;
            }ob.key = tds[2].textContent;ob.value = tds[3].querySelector('input').value;ob.click = tds[3].querySelector('input').getAttribute('onclick') ? 'on' : 'off';
            ob.type = 'input';data.push(ob);
          }
        }
      }return data;
    },
    doAction_uiControl92_nsToXS: function (data, elem) {
      var type = data.eventType;var doc = elem.ownerDocument;var dt = data.customData;var index = +dt.index;var trs = elem.querySelectorAll('tr');if (type == 'inputClick') {
        trs[index].querySelector('input').click();
      } else if (type == 'dateBlur') {
        var value = dt.value;doc.querySelector('#checkDate').value = value.replace(/\//ig, '-');
      } else if (type == 'textareaBlur') {
        var value = dt.value;doc.querySelector('#content').value = value;
      } else if (type == 'selectChange') {
        var value = dt.value;doc.querySelector('#checkType').value = value;
      }
    },
    getTemplate_uiControl92_nsToXS: function () {
      var selfTemplate = "module.exports = React.createClass({\n  inputClick: function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    var data = {};\n    data.index = target.getAttribute('data-id');\n    if(handler){\n      handler({\n        eventType: 'inputClick',\n        data: data\n      })\n    }\n  },\n  dateBlur: function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    var data = {};\n    data.index = target.getAttribute('data-id')\n    data.value = target.value;\n    if(handler){\n      handler({\n        eventType: 'dateBlur',\n        data: data\n      })\n    }\n  },\n  textareaBlur: function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    var data = {};\n    data.index = target.getAttribute('data-id')\n    data.value = target.value;\n    if(handler){\n      handler({\n        eventType: 'textareaBlur',\n        data: data\n      })\n    }\n  },\n  selectChange: function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    var data = {};\n    data.index = target.getAttribute('data-id')\n    data.value = target.value;\n    if(handler){\n      handler({\n        eventType: 'selectChange',\n        data: data\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData || [];\n    var me = this;\n    var list = data.map(function(d,i){\n      if(d.type == 'text'){\n         return(\n           <li className=\"item item-content\"><span>{d.key}</span><span className=\"absolute l50\">{d.value}</span></li>\n         )\n      }else if(d.type == 'input'){\n        if(d.click == 'on'){\n          return(\n            <li className=\"item item-content\"><span>{d.key}</span><AInput data-id={i} type=\"text\" value={d.value} readOnly='true' /><a onClick={me.inputClick} data-id={i} className=\"change\">\u9009\u62E9</a></li>\n          ) \n        }else {\n          return(\n            <li className=\"item item-content\"><span>{d.key}</span><AInput data-id={i} type=\"text\" value={d.value} readOnly='true' /></li>\n          )\n        }\n        \n        \n      }else if(d.type == 'textarea'){\n        return(\n         \t<li className=\"item item-content\"><span>{d.key}</span><textarea onBlur={me.textareaBlur} data-id={i} defaultValue={d.value}></textarea></li>\n        )\n      }else if(d.type == 'date'){\n        return(\n         \t<li className=\"item item-content\"><span>{d.key}</span><input data-id={i} type='date' onBlur={me.dateBlur} defaultValue={d.value}/></li>\n        )\n      }else if(d.type == 'select'){\n        return(\n         \t<li className=\"item item-content\"><span>{d.key}</span><select  data-id={i} onChange={me.selectChange}>\n            {\n              d.ops.map(function(k,j){\n                return(\n                \t<option value={k.value} selected={k.selected}>{k.text}</option>\n                )\n              })\n            }</select></li>\n        )      \n      }\n    })\n    return (\n      <div className=\"detail-div marginT20\">\n        <AMUI.List>{list}</AMUI.List>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  inputClick: function inputClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    var data = {};\n    data.index = target.getAttribute('data-id');\n    if (handler) {\n      handler({\n        eventType: 'inputClick',\n        data: data\n      });\n    }\n  },\n  dateBlur: function dateBlur(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    var data = {};\n    data.index = target.getAttribute('data-id');\n    data.value = target.value;\n    if (handler) {\n      handler({\n        eventType: 'dateBlur',\n        data: data\n      });\n    }\n  },\n  textareaBlur: function textareaBlur(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    var data = {};\n    data.index = target.getAttribute('data-id');\n    data.value = target.value;\n    if (handler) {\n      handler({\n        eventType: 'textareaBlur',\n        data: data\n      });\n    }\n  },\n  selectChange: function selectChange(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    var data = {};\n    data.index = target.getAttribute('data-id');\n    data.value = target.value;\n    if (handler) {\n      handler({\n        eventType: 'selectChange',\n        data: data\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData || [];\n    var me = this;\n    var list = data.map(function (d, i) {\n      if (d.type == 'text') {\n        return React.createElement(\n          'li',\n          { className: 'item item-content' },\n          React.createElement(\n            'span',\n            null,\n            d.key\n          ),\n          React.createElement(\n            'span',\n            { className: 'absolute l50' },\n            d.value\n          )\n        );\n      } else if (d.type == 'input') {\n        if (d.click == 'on') {\n          return React.createElement(\n            'li',\n            { className: 'item item-content' },\n            React.createElement(\n              'span',\n              null,\n              d.key\n            ),\n            React.createElement(AInput, { 'data-id': i, type: 'text', value: d.value, readOnly: 'true' }),\n            React.createElement(\n              'a',\n              { onClick: me.inputClick, 'data-id': i, className: 'change' },\n              '\\u9009\\u62E9'\n            )\n          );\n        } else {\n          return React.createElement(\n            'li',\n            { className: 'item item-content' },\n            React.createElement(\n              'span',\n              null,\n              d.key\n            ),\n            React.createElement(AInput, { 'data-id': i, type: 'text', value: d.value, readOnly: 'true' })\n          );\n        }\n      } else if (d.type == 'textarea') {\n        return React.createElement(\n          'li',\n          { className: 'item item-content' },\n          React.createElement(\n            'span',\n            null,\n            d.key\n          ),\n          React.createElement('textarea', { onBlur: me.textareaBlur, 'data-id': i, defaultValue: d.value })\n        );\n      } else if (d.type == 'date') {\n        return React.createElement(\n          'li',\n          { className: 'item item-content' },\n          React.createElement(\n            'span',\n            null,\n            d.key\n          ),\n          React.createElement('input', { 'data-id': i, type: 'date', onBlur: me.dateBlur, defaultValue: d.value })\n        );\n      } else if (d.type == 'select') {\n        return React.createElement(\n          'li',\n          { className: 'item item-content' },\n          React.createElement(\n            'span',\n            null,\n            d.key\n          ),\n          React.createElement(\n            'select',\n            { 'data-id': i, onChange: me.selectChange },\n            d.ops.map(function (k, j) {\n              return React.createElement(\n                'option',\n                { value: k.value, selected: k.selected },\n                k.text\n              );\n            })\n          )\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'detail-div marginT20' },\n      React.createElement(\n        AMUI.List,\n        null,\n        list\n      )\n    );\n  }\n});";
    },

    getData_control76_gfcB85: function (elem) {
      if (!elem) {
        return '';
      }var tds = elem.querySelectorAll('td');var obj = {};obj.key = tds[0].textContent;obj.value = tds[1].querySelector('input').value;return obj;
    },
    doAction_uiControl95_Svbpey: function (data, elem) {
      var type = data.eventType;var value = data.dataCustom;if (type == 'input') {
        elem.querySelector('input').value = value;
      }
    },
    getTemplate_uiControl95_Svbpey: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  blur: function(e) {\n    var handler = this.props.customHandler;\n    if(handler) {\n      handler({\n        eventType: \'input\',\n        data:e.target.value\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    return (\n      <div className="detail-div marginT20 paddingT20">\n        <AMUI.List className="borderT borderB">\n          <li className="item item-content"><span>{data.key}</span><AInput value={data.value} onBlur={this.blur} type="text" /></li>\n        </AMUI.List>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  blur: function blur(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'input\',\n        data: e.target.value\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    return React.createElement(\n      "div",\n      { className: "detail-div marginT20 paddingT20" },\n      React.createElement(\n        AMUI.List,\n        { className: "borderT borderB" },\n        React.createElement(\n          "li",\n          { className: "item item-content" },\n          React.createElement(\n            "span",\n            null,\n            data.key\n          ),\n          React.createElement(AInput, { value: data.value, onBlur: this.blur, type: "text" })\n        )\n      )\n    );\n  }\n});';
    },

    getData_control77_zUt7Ti: function (elem) {
      if (!elem) {
        return '';
      }var shspyj = elem.querySelector('#shspyj');var shspqm = elem.querySelector('#shspqm');var shspsj = elem.querySelector('#shspsj');var tdLength = shspyj.querySelectorAll('td').length;var pyjTds = shspyj.querySelectorAll('td');var pqmTds = shspqm.querySelectorAll('td');var psjTds = shspsj.querySelectorAll('td');var data = [];for (var i = 0; i < tdLength; i++) {
        var obj = {};obj.title = pyjTds[i].textContent;obj.s1 = pqmTds[i].querySelector('.font_small').textContent;obj.i1 = pqmTds[i].querySelector('input').value;obj.sp1 = pqmTds[i].querySelector('.word-8').style.display == 'none' ? '' : pqmTds[i].querySelector('.word-8').textContent;obj.date = psjTds[i].querySelectorAll('input')[0].value + '年' + psjTds[i].querySelectorAll('input')[1].value + '月' + psjTds[i].querySelectorAll('input')[2].value + '日';data.push(obj);
      }return data;
    },
    doAction_uiControl96_SkB3kh: function (data, elem) {
      var type = data.eventType;var index = +data.customData;var shspqm = elem.querySelector('#shspqm');var pqmTds = shspqm.querySelectorAll('td');pqmTds[index].querySelector('.word-8').click();
    },
    getTemplate_uiControl96_SkB3kh: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  click: function(e) {\n    var handler = this.props.customHandler;\n    handler({\n      eventType: \'click\',\n      data: e.target.getAttribute(\'data-id\')\n    })\n  },\n  render: function() {\n    var data = this.props.data.customData || [];\n    var me =this;\n    var list = data.map(function(d,i){\n      return(\n        <li className="borderB">\n          <p>{d.title}</p>\n          <div>\n            <span>{d.s1}</span>\n            <span>{d.i1}</span>\n            <a data-id={i} onClick={me.click}>{d.sp1}</a>\n          </div>\n          {d.date==\'\u5E74\u6708\u65E5\'?\'\':<p>{d.date}</p>}\n        </li>\n      )\n    });\n    return (\n      <div className="borderB">\n        <ul className="sp-ul poc-ul marginT20">\n          {list}\n        </ul>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    handler({\n      eventType: \'click\',\n      data: e.target.getAttribute(\'data-id\')\n    });\n  },\n  render: function render() {\n    var data = this.props.data.customData || [];\n    var me = this;\n    var list = data.map(function (d, i) {\n      return React.createElement(\n        \'li\',\n        { className: \'borderB\' },\n        React.createElement(\n          \'p\',\n          null,\n          d.title\n        ),\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(\n            \'span\',\n            null,\n            d.s1\n          ),\n          React.createElement(\n            \'span\',\n            null,\n            d.i1\n          ),\n          React.createElement(\n            \'a\',\n            { \'data-id\': i, onClick: me.click },\n            d.sp1\n          )\n        ),\n        d.date == \'\u5E74\u6708\u65E5\' ? \'\' : React.createElement(\n          \'p\',\n          null,\n          d.date\n        )\n      );\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'borderB\' },\n      React.createElement(\n        \'ul\',\n        { className: \'sp-ul poc-ul marginT20\' },\n        list\n      )\n    );\n  }\n});';
    },
    getData_control80_WA0ZV1: function (elem) {
      if (!elem) {
        return '';
      }var obj = {};var doc = elem.ownerDocument;obj.wsbh_h = doc.querySelector('#wsbh_h').value;obj.wsbh_y = doc.querySelector('#wsbh_y').value;obj.wsbh_n = doc.querySelector('#wsbh_n').value;return obj;
    },
    doAction_uiControl99_TSIeO8: function (data, elem) {},
    getTemplate_uiControl99_TSIeO8: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.data.customData;\n    return (\n      <div>\n       ( <span>{data.wsbh_h}</span> )\u5B89\u76D1\u68C0\u67E5 \u3014<span>{data.wsbh_y}</span>\u3015 <span>{data.wsbh_n}</span>\u53F7\n      </div>\n    )\n  }\n});";
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.data.customData;\n    return React.createElement(\n      "div",\n      null,\n      "( ",\n      React.createElement(\n        "span",\n        null,\n        data.wsbh_h\n      ),\n      " )\\u5B89\\u76D1\\u68C0\\u67E5 \\u3014",\n      React.createElement(\n        "span",\n        null,\n        data.wsbh_y\n      ),\n      "\\u3015 ",\n      React.createElement(\n        "span",\n        null,\n        data.wsbh_n\n      ),\n      "\\u53F7"\n    );\n  }\n});';
    },
    getData_control78_cdlAmv: function (elem) {
      if (!elem) {
        return;
      }return elem.innerHTML;
    },
    doAction_uiControl97_eqGMhH: function (data, elem) {
      var type = data.eventType;var id = data.dataCustom;if (type == 'click') {
        if (elem.querySelector('#' + id)) {
          elem.querySelector('#' + id).click();
        }
      }
    },
    getTemplate_uiControl97_eqGMhH: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click: function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n       handler({\n         eventType:'click',\n         data:e.target.id\n       })\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    return (\n      <div className=\"mcc-tree\">\n       \t<div onClick={this.click} dangerouslySetInnerHTML={{__html:data}}></div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: e.target.id\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    return React.createElement(\n      \"div\",\n      { className: \"mcc-tree\" },\n      React.createElement(\"div\", { onClick: this.click, dangerouslySetInnerHTML: { __html: data } })\n    );\n  }\n});";
    }
  });
})(window, ysp);