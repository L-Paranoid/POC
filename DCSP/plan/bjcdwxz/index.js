(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control61_nKCdsF: function (elem) {
      if (!elem) {
        return;
      }var trs = elem.querySelectorAll('tr');var data = [];for (var i = 1; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');var obj = {};obj.title = tds[1].textContent;obj.name = tds[2].textContent;data.push(obj);
      }return data;
    },
    doAction_uiControl79_yUZmXc: function (data, elem) {
      var doc = elem.ownerDocument;var mWin = doc.defaultView;var index = +data.customData + 1;var trs = elem.querySelectorAll('tr');trs[index].querySelector('input').click();mWin.doconfirm();
    },
    getTemplate_uiControl79_yUZmXc: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click: function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    while(true){\n      if(target.tagName.toLowerCase() != 'li'){\n        target = target.parentElement;\n      }else {\n        break;\n      }\n    }\n    if(handler){\n      handler({\n        eventType:'click',\n        data:target.getAttribute('data-id')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    var me = this;\n    var list = data.map(function(d,i){\n      return(\n      \t<AMUI.List.Item\n         data-id={i}\n         onClick={me.click}\n         title={d.title}\n         after={d.name}\n         >\n       </AMUI.List.Item>\n      )\n    })\n    return (\n      <div className=\"marginT10\">\n        <AMUI.List>{list}</AMUI.List>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    while (true) {\n      if (target.tagName.toLowerCase() != 'li') {\n        target = target.parentElement;\n      } else {\n        break;\n      }\n    }\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: target.getAttribute('data-id')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var me = this;\n    var list = data.map(function (d, i) {\n      return React.createElement(AMUI.List.Item, {\n        'data-id': i,\n        onClick: me.click,\n        title: d.title,\n        after: d.name\n      });\n    });\n    return React.createElement(\n      'div',\n      { className: 'marginT10' },\n      React.createElement(\n        AMUI.List,\n        null,\n        list\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);