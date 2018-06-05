(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control22_28w8yH: function (elem) {},
    doAction_uiControl27_cdadfT: function (data, elem) {},
    getTemplate_uiControl27_cdadfT: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default () =>\n<Header amStyle=\"primary\" title=\"\u66F4\u591A\u52A8\u6001\">\n  <HeaderLeft>\n    <AMUI.Button amStyle=\"primary\" onClick={back}>\u8FD4\u56DE</AMUI.Button>\n  </HeaderLeft>\n</Header>;";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nexports.default = function () {\n  return React.createElement(\n    _yspInteriorComponents.Header,\n    { amStyle: 'primary', title: '\\u66F4\\u591A\\u52A8\\u6001' },\n    React.createElement(\n      _yspInteriorComponents.HeaderLeft,\n      null,\n      React.createElement(\n        AMUI.Button,\n        { amStyle: 'primary', onClick: _appRenderer.back },\n        '\\u8FD4\\u56DE'\n      )\n    )\n  );\n};";
    },
    getData_control2_hTgIiw: function (elem) {
      if (!elem) {
        return '';
      }var data = [];var trs = elem.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');var obj = {};obj.title = tds[0].textContent;obj.date = tds[1].textContent;data.push(obj);
      }return data;
    },
    doAction_uiControl5_BM09BT: function (data, elem) {},
    getTemplate_uiControl5_BM09BT: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click: function(){\n    alert('\u8BE5\u9875\u9762\u6682\u672A\u9002\u914D');\n  },\n  render: function() {\n    var data = this.props.data.customData || []\n    var list = data.map(function(d,i){\n      return (\n        <AMUI.List.Item\n          title={d.title}\n          subTitle={d.date}\n          >\n        </AMUI.List.Item>\n      )\n    })\n    return (\n      <div>\n        <AMUI.List onClick={this.click}>{list}</AMUI.List>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click() {\n    alert('\u8BE5\u9875\u9762\u6682\u672A\u9002\u914D');\n  },\n  render: function render() {\n    var data = this.props.data.customData || [];\n    var list = data.map(function (d, i) {\n      return React.createElement(AMUI.List.Item, {\n        title: d.title,\n        subTitle: d.date\n      });\n    });\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(\n        AMUI.List,\n        { onClick: this.click },\n        list\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);