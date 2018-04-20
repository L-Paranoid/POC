'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control17_Q0UeZX: function (elem) {
      if (!elem) return false;
    },
    doAction_uiControl16_vUbiGb: function (data, elem) {
      if (data.eventType == 'click') {
        elem.ownerDocument.defaultView.open('http://hrportal.boe.com.cn/kaoqin/kaoqinpage', 'HR - 考勤');
      }if (data.eventType == 'click1') {
        elem.ownerDocument.defaultView.open('http://hrportal.boe.com.cn/boefoot/page', 'HR - BOE足迹');
      }
    },
    getTemplate_uiControl16_vUbiGb: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n      \t<div onClick={()=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}>\n          HR - \u8003\u52E4\n      \t</div>\n        <div onClick={()=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click1'\n            })\n          }\n        }}>\n          HR - BOE\u8DB3\u8FF9\n      \t</div>\n      </div>\n    )\n  }\n});";
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var _this = this;\n\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        \'div\',\n        { onClick: function onClick() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'click\'\n              });\n            }\n          } },\n        \'HR - \\u8003\\u52E4\'\n      ),\n      React.createElement(\n        \'div\',\n        { onClick: function onClick() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'click1\'\n              });\n            }\n          } },\n        \'HR - BOE\\u8DB3\\u8FF9\'\n      )\n    );\n  }\n});';
    }
  });
})(window, ysp);