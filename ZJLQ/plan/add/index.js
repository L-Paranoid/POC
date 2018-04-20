(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control61_rOnQmG: function (elem) {
      if (!elem) {
        return;
      }var data = { content1: [], content2: [],
        content3: []
      };if ($(elem).children('table').length > 0) {
        var elem1 = $(elem).children("table").eq(1).children("tbody")[0];$(elem1).find("td").each(function (i) {
          if ($(this)[0].className == 'table_input_td' && $(this).text().trim() !== '') {
            data.content1.push({ text: $(this).text().trim(), po: 'left' });
          } else if ($(this).find('select').length > 0) {
            var arr = [];$(this).find('select').find('option').each(function () {
              arr.push($(this).text());
            });data.content1.push({ text: arr, po: 'right1' });
          } else if ($(this)[0].className == 'table_input_td2') {
            data.content1.push({ text: $(this).text().trim(), po: 'right' });
          }
        });
      }return data;
    },
    doAction_uiControl48_CICnmF: function (data, elem) {
      if (data.eventType == 'onchange1') {
        // debugger;
        var idx = data.dataCustom;$(elem).children("table").eq(1).children('tbody').children('tr').eq(1).children('td').eq(1).find('option').eq(idx)[0].selected = true;
      }if (data.eventType == 'onchange2') {
        // debugger;
        var idx = data.dataCustom;$(elem).children("table").eq(1).children('tbody').children('tr').eq(1).children('td').eq(3).find('option').eq(idx)[0].selected = true;
      }if (data.eventType == 'blur1') {
        //debugger;
        var idx = data.dataCustom;$(elem).children("table").eq(1).children('tbody').children('tr').eq(0).children('td').eq(1).find('input').prop('value', idx);
      }if (data.eventType == 'blur2') {
        // debugger;
        var idx = data.dataCustom;$(elem).children("table").eq(1).children('tbody').children('tr').eq(0).children('td').eq(3).find('input').prop('value', idx);
      }
    },
    getTemplate_uiControl48_CICnmF: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onChange1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'onchange1',\n        data:e.target.selectedIndex\n      })\n    }\n  },\n   onChange2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'onchange2',\n        data:e.target.selectedIndex\n      })\n    }\n  },\n   blur1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'blur1',\n        data:e.target.value\n      })\n    }\n  },\n   blur2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'blur2',\n        data:e.target.value\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n//     var item1 = data && data.content1.map(function(d,i){\n//         if(d.po=='left'){\n//           return(<div className='n1'>{d.text}</div>)\n//         }\n//         else if(d.po=='right1'){\n         \n//         }\n//         else{\n//            return(<div className='n2'>{d.text}</div>)\n//         }\n//       })\n    var option1 = data && data.content1 && data.content1[5].text.map(function(d1,i1){\n      return (<option>{d1}</option>)\n    })\n    var option2 = data && data.content1 && data.content1[7].text.map(function(d2,i2){\n      return (<option>{d2}</option>)\n    })\n    return (\n      <div class=\"c1_box\">\n        <div class=\"n1\">\u5206\u5305\u7ED3\u7B97\u7F16\u7801:</div>\n        <div class=\"n2\"><AInput onBlur={_this.blur1} value='' /></div>\n        <div class=\"n1\">\u671F\u53F7:</div>\n        <div class=\"n2\"><AInput onBlur={_this.blur2} value='' /></div>\n        <div class=\"n1\">\u662F\u5426\u4E3A\u7EC8\u7ED3\u7B97:</div>\n        <div class=\"n2\"><select onChange={_this.onChange1}>{option1}</select></div>\n        <div class=\"n1\">\u7ED3\u7B97\u671F\u95F4:</div>\n        <div class=\"n2\"><select onChange={_this.onChange2}>{option2}</select></div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onChange1: function onChange1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'onchange1',\n        data: e.target.selectedIndex\n      });\n    }\n  },\n  onChange2: function onChange2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'onchange2',\n        data: e.target.selectedIndex\n      });\n    }\n  },\n  blur1: function blur1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'blur1',\n        data: e.target.value\n      });\n    }\n  },\n  blur2: function blur2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'blur2',\n        data: e.target.value\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    //     var item1 = data && data.content1.map(function(d,i){\n    //         if(d.po=='left'){\n    //           return(<div className='n1'>{d.text}</div>)\n    //         }\n    //         else if(d.po=='right1'){\n\n    //         }\n    //         else{\n    //            return(<div className='n2'>{d.text}</div>)\n    //         }\n    //       })\n    var option1 = data && data.content1 && data.content1[5].text.map(function (d1, i1) {\n      return React.createElement(\n        'option',\n        null,\n        d1\n      );\n    });\n    var option2 = data && data.content1 && data.content1[7].text.map(function (d2, i2) {\n      return React.createElement(\n        'option',\n        null,\n        d2\n      );\n    });\n    return React.createElement(\n      'div',\n      { 'class': 'c1_box' },\n      React.createElement(\n        'div',\n        { 'class': 'n1' },\n        '\\u5206\\u5305\\u7ED3\\u7B97\\u7F16\\u7801:'\n      ),\n      React.createElement(\n        'div',\n        { 'class': 'n2' },\n        React.createElement(AInput, { onBlur: _this.blur1, value: '' })\n      ),\n      React.createElement(\n        'div',\n        { 'class': 'n1' },\n        '\\u671F\\u53F7:'\n      ),\n      React.createElement(\n        'div',\n        { 'class': 'n2' },\n        React.createElement(AInput, { onBlur: _this.blur2, value: '' })\n      ),\n      React.createElement(\n        'div',\n        { 'class': 'n1' },\n        '\\u662F\\u5426\\u4E3A\\u7EC8\\u7ED3\\u7B97:'\n      ),\n      React.createElement(\n        'div',\n        { 'class': 'n2' },\n        React.createElement(\n          'select',\n          { onChange: _this.onChange1 },\n          option1\n        )\n      ),\n      React.createElement(\n        'div',\n        { 'class': 'n1' },\n        '\\u7ED3\\u7B97\\u671F\\u95F4:'\n      ),\n      React.createElement(\n        'div',\n        { 'class': 'n2' },\n        React.createElement(\n          'select',\n          { onChange: _this.onChange2 },\n          option2\n        )\n      )\n    );\n  }\n});";
    },
    getData_control62_LkPoN4: function (elem) {},
    doAction_uiControl49_TTZmmr: function (data, elem) {},
    getTemplate_uiControl49_TTZmmr: function () {
      var selfTemplate = "import { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  handleClick1: function(e) {\n    var handler = this.props.customHandler;\n    var tree = top.document.querySelectorAll('.tree_b')[0];\n    if(tree.style.display=='none'){\n      tree.style.display='block'\n    }\n    else{\n       tree.style.display='none'\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n    var _this = this;\n    return (\n      <header className=\"navbar navbar-primary header\" style = {{\"background\":\"#004899\",\"width\":\"100%\",\"position\":\"fixed\",\"z-index\":\"111\"}}>\n        <h2 className=\"navbar-title navbar-center\" style = {{\"font-size\":\"18px\"}}>\u5206\u5305\u7ED3\u7B97\u57FA\u672C\u4FE1\u606F</h2>\n        <div className=\"navbar-nav navbar-left\">\n          <a onClick={back} className=\"navbar-nav-item\">\n            <span className=\"navbar-nav-title\">\u8FD4\u56DE</span>\n            <span className=\"icon icon-left-nav navbar-icon\"></span>\n          </ a>\n        </div>\n      </header>\n    )\n  }\n});";
      return "'use strict';\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick1: function handleClick1(e) {\n    var handler = this.props.customHandler;\n    var tree = top.document.querySelectorAll('.tree_b')[0];\n    if (tree.style.display == 'none') {\n      tree.style.display = 'block';\n    } else {\n      tree.style.display = 'none';\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var _this = this;\n    return React.createElement(\n      'header',\n      { className: 'navbar navbar-primary header', style: { \"background\": \"#004899\", \"width\": \"100%\", \"position\": \"fixed\", \"z-index\": \"111\" } },\n      React.createElement(\n        'h2',\n        { className: 'navbar-title navbar-center', style: { \"font-size\": \"18px\" } },\n        '\\u5206\\u5305\\u7ED3\\u7B97\\u57FA\\u672C\\u4FE1\\u606F'\n      ),\n      React.createElement(\n        'div',\n        { className: 'navbar-nav navbar-left' },\n        React.createElement(\n          'a',\n          { onClick: _appRenderer.back, className: 'navbar-nav-item' },\n          React.createElement(\n            'span',\n            { className: 'navbar-nav-title' },\n            '\\u8FD4\\u56DE'\n          ),\n          React.createElement('span', { className: 'icon icon-left-nav navbar-icon' })\n        )\n      )\n    );\n  }\n});";
    },
    getData_control63_FlsTrQ: function (elem) {},
    doAction_uiControl50_5R3KpE: function (data, elem) {
      if (data.eventType == 'click') {
        $(elem).click();
      }
    },
    getTemplate_uiControl50_5R3KpE: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    return (\n      <div onClick={_this.click} className='button_n'>\n     \t\t<span>\u4FDD\u5B58</span>\n      </div>\n    )\n  }\n});\n";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    return React.createElement(\n      'div',\n      { onClick: _this.click, className: 'button_n' },\n      React.createElement(\n        'span',\n        null,\n        '\\u4FDD\\u5B58'\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);