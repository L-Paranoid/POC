(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control20_CT4Zs2: function (elem) {
      if (!elem) {
        return '';
      }return '返回';
    },
    doAction_uiControl30_U48BuX: function (data, elem) {
      ysp.appMain.back();
    },
    getTemplate_uiControl30_U48BuX: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  click: function() {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'back\'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div>\n        <AMUI.Button\n          amStyle="primary"\n          onClick={this.click}\n          amSize="lg"\n        >{this.props.data.customData}\n        </AMUI.Button>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  click: function click() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'back\'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      "div",\n      null,\n      React.createElement(\n        AMUI.Button,\n        {\n          amStyle: "primary",\n          onClick: this.click,\n          amSize: "lg"\n        },\n        this.props.data.customData\n      )\n    );\n  }\n});';
    }
  });
})(window, ysp);