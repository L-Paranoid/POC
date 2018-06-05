(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control7_uJ3Ikm: function (elem) {
      if (!elem) {
        return '';
      }return elem.textContent.replace(/\s/ig, '');
    },
    doAction_uiControl12_wld1Tn: function (data, elem) {},
    getTemplate_uiControl12_wld1Tn: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\n\n\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.data.customData;\n    return (\n      <Header amStyle=\"primary\" title={data}>\n  <HeaderLeft>\n    <AMUI.Button amStyle=\"primary\" onClick={back}>\u8FD4\u56DE</AMUI.Button>\n  </HeaderLeft>\n</Header>\n    )\n  }\n});\n";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.data.customData;\n    return React.createElement(\n      _yspInteriorComponents.Header,\n      { amStyle: 'primary', title: data },\n      React.createElement(\n        _yspInteriorComponents.HeaderLeft,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: 'primary', onClick: _appRenderer.back },\n          '\\u8FD4\\u56DE'\n        )\n      )\n    );\n  }\n});";
    },
    getData_control66_m7Jve4: function (elem) {
      if (!elem) {
        return '';
      }return elem.innerHTML;
    },
    doAction_uiControl83_yvO6gW: function (data, elem) {},
    getTemplate_uiControl83_yvO6gW: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        <div dangerouslySetInnerHTML={{__html:this.props.data.customData}}></div>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement(\n      "div",\n      null,\n      React.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.data.customData } })\n    );\n  }\n});';
    }
  });
})(window, ysp);