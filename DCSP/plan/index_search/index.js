(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control95_1apmFt: function (elem) {
      if (!elem) {
        return '';
      }return '返回';
    },
    doAction_uiControl121_Typ553: function (data, elem) {
      ysp.appMain.back();
    },
    getTemplate_uiControl121_Typ553: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  click: function() {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: \'back\'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div>\n        <AMUI.Button\n          amStyle="primary"\n          amSize="lg"\n          onClick={this.click}\n        >{this.props.data.customData}\n        </AMUI.Button>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  click: function click() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'back\'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      "div",\n      null,\n      React.createElement(\n        AMUI.Button,\n        {\n          amStyle: "primary",\n          amSize: "lg",\n          onClick: this.click\n        },\n        this.props.data.customData\n      )\n    );\n  }\n});';
    },
    getData_control4_gTAQhZ: function (elem) {
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
    doAction_uiControl11_VGoNg9: function (data, elem) {
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
    getTemplate_uiControl11_VGoNg9: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  downClick: function(e) {\n    alert(\'\u8BE5\u529F\u80FD\u6682\u672A\u9002\u914D\');\n    return;\n    var handler = this.props.customHandler;\n    var target = e.target;\n    while(true){\n      if(target.tagName.toLowerCase() != \'li\'){\n        target = target.parentElement;\n      }else {\n        break;\n      }\n    }\n    if(handler){\n      handler({\n        data:target.getAttribute(\'data-id\'),\n        eventType: \'down\'\n      })\n    }\n  },\n  see: function(e) {\n    alert(\'\u8BE5\u529F\u80FD\u6682\u672A\u9002\u914D\');\n    return;\n    var handler = this.props.customHandler;\n    var target = e.target;\n    while(true){\n      if(target.tagName.toLowerCase() != \'li\'){\n        target = target.parentElement;\n      }else {\n        break;\n      }\n    }\n    if(handler){\n      handler({\n        data:target.getAttribute(\'data-id\'),\n        eventType: \'see\'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    if(!data){\n       return(<div></div>);\n    }\n    var me = this;\n    var list = data.map(function(d,i){\n      return(\n        <div className="border1">\n          {\n            d.map(function(k,j){\n              if(k.type != \'op\'){\n                return(\n                  <AMUI.List.Item\n                    data-id={i}\n                   subTitle={k.key+\'\uFF1A\'+k.value}\n                   >\n                 </AMUI.List.Item>  \n                )\n              }else {\n                return(\n                  <li className="item item-content" data-id={i} >\n                    <span>{k.key+\'\uFF1A\'}</span>\n                    <p className="absolute  l90">\n                      <a onClick={me.see}>{k.see}</a>\n                  {k.down?<a className="marginL10px"onClick={me.downClick}>{k.down}</a>:<span></span>}\n                    </p>\n                </li>\n                )\n              }\n              \n            })\n          }\n        </div>\n      )\n    })\n    return (\n      <div>\n        {list}\n      </div>\n    );\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  downClick: function downClick(e) {\n    alert(\'\u8BE5\u529F\u80FD\u6682\u672A\u9002\u914D\');\n    return;\n    var handler = this.props.customHandler;\n    var target = e.target;\n    while (true) {\n      if (target.tagName.toLowerCase() != \'li\') {\n        target = target.parentElement;\n      } else {\n        break;\n      }\n    }\n    if (handler) {\n      handler({\n        data: target.getAttribute(\'data-id\'),\n        eventType: \'down\'\n      });\n    }\n  },\n  see: function see(e) {\n    alert(\'\u8BE5\u529F\u80FD\u6682\u672A\u9002\u914D\');\n    return;\n    var handler = this.props.customHandler;\n    var target = e.target;\n    while (true) {\n      if (target.tagName.toLowerCase() != \'li\') {\n        target = target.parentElement;\n      } else {\n        break;\n      }\n    }\n    if (handler) {\n      handler({\n        data: target.getAttribute(\'data-id\'),\n        eventType: \'see\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    if (!data) {\n      return React.createElement(\'div\', null);\n    }\n    var me = this;\n    var list = data.map(function (d, i) {\n      return React.createElement(\n        \'div\',\n        { className: \'border1\' },\n        d.map(function (k, j) {\n          if (k.type != \'op\') {\n            return React.createElement(AMUI.List.Item, {\n              \'data-id\': i,\n              subTitle: k.key + \'\uFF1A\' + k.value\n            });\n          } else {\n            return React.createElement(\n              \'li\',\n              { className: \'item item-content\', \'data-id\': i },\n              React.createElement(\n                \'span\',\n                null,\n                k.key + \'\uFF1A\'\n              ),\n              React.createElement(\n                \'p\',\n                { className: \'absolute  l90\' },\n                React.createElement(\n                  \'a\',\n                  { onClick: me.see },\n                  k.see\n                ),\n                k.down ? React.createElement(\n                  \'a\',\n                  { className: \'marginL10px\', onClick: me.downClick },\n                  k.down\n                ) : React.createElement(\'span\', null)\n              )\n            );\n          }\n        })\n      );\n    });\n    return React.createElement(\n      \'div\',\n      null,\n      list\n    );\n  }\n});';
    }
  });
})(window, ysp);