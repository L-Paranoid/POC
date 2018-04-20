"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control47_Cghkna: function getData_control47_Cghkna(elem) {
      //console.log(elem)
      if (!elem) {
        return;
      }var data = { content: [], sval: [], page: [] };if ($(elem).children("table").length > 0 && $(elem).children("table").children("tbody").length > 0 && $(elem).children("table").children("tbody").children("tr").length > 0) {
        var elem = $(elem).children("table").children("tbody").children("tr").children('td')[0];if ($(elem).children("table").eq(0).find(".inputcss2").length > 0) {
          $(elem).children("table").eq(0).find(".inputcss2").each(function () {
            data.sval.push($(this).prop('value'));
          });
        }$(elem).children("table").eq(1).children("tbody").children("tr").each(function (i) {
          if (i > 0) {
            var arr = [];$(this).children("td").each(function (i1) {
              if ($(this)[0].style.display !== 'none' && i1 > 0) {
                arr.push($(this).text().trim());
              }
            });data.content.push(arr);
          }
        });data.page.push($(elem).children("table").eq(2).children("tbody").children("tr").children("td").contents().eq(0).text().trim().match(/\d+/ig));$(elem).children("table").eq(2).children("tbody").children("tr").children("td").contents().each(function (i) {
          if (i <= 4 && i > 0) {
            data.page.push($(this).text().trim().replace(/页次/ig, "").replace(/\s/ig, ""));
          }
        });
      }return data;
    },
    doAction_uiControl36_wv6vsi: function doAction_uiControl36_wv6vsi(data, elem) {
      if (data.eventType == 'click') {
        var txt = data.dataCustom;var elem = $(elem).children("table").children("tbody").children("tr").children('td')[0];$(elem).children("table").eq(2).children("tbody").children("tr").children("td").find("a").each(function () {
          if ($(this).text().indexOf(txt) !== -1) {
            $(this).click();
          }
        });
      }if (data.eventType == 'select') {
        var txt = parseInt(data.dataCustom) + 1;var elem = $(elem).children("table").children("tbody").children("tr").children('td')[0];
        $(elem).children("table").eq(1).children("tbody").children("tr").eq(txt).find('input').eq(0).click();
      }if (data.eventType == 'blur') {
        var val = data.dataCustom;$(elem).children("table").eq(0).find(".inputcss2").eq(0).prop('value', val);
      }if (data.eventType == 'blur2') {
        var val = data.dataCustom;$(elem).children("table").eq(0).find(".inputcss2").eq(1).prop('value', val);
      }if (data.eventType == 'search') {
        var val = data.dataCustom;$(elem).children("table").eq(0).find("img").eq(0).click();
      }
    },
    getTemplate_uiControl36_wv6vsi: function getTemplate_uiControl36_wv6vsi() {
      var selfTemplate = "module.exports = React.createClass({\n  blur:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'blur',\n        data:e.target.value\n      })\n    }\n  },\n   blur2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'blur2',\n        data:e.target.value\n      })\n    }\n  },\n    click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:e.target.textContent\n      })\n    }\n  },\n  \n    select:function(e){\n    var handler = this.props.customHandler;\n      if(e.target.tagName=='SPAN'){\n        var _target = e.target.parentElement;\n      }\n      else{\n        var _target = e.target;\n      }\n    if(handler){\n      handler({\n        eventType:'select',\n        data:_target.getAttribute('data-index')\n      })\n    }\n  },\n   search:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'search'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    \n    var item = data && data.content.map(function(d,i){\n      if(d[1]!==''){\n        return (\n        <li data-index={i} onClick={_this.select}>    \n          {\n             d.map(function(d1,i1){\n               return(<span>{d1}</span>)\n             }) \n            }\n        </li>\n        )\n      }\n      else{\n        return(<li></li>)\n      }\n      \n    })\n    return (\n      <div className='xuanren_box1'>\n        <div className='search_box1'>\n          <div><span>\u540D\u79F0\uFF1A</span><AInput value={data && data.sval[0]} onBlur={_this.blur} /></div>\n          <div><span>\u7F16\u7801\uFF1A</span><AInput value={data && data.sval[1]} onBlur={_this.blur2} /></div>\n          <div><span onClick={_this.search}></span></div>\n       </div>\n      <ul className='box_sele'>\n        <li><span>\u660E\u7EC6\u7F16\u7801</span><span>\u660E\u7EC6\u540D\u79F0</span><span>\u5355\u4F4D</span><span>\u5355\u4EF7</span><span>\u6570\u91CF</span><span>\u5408\u4EF7</span></li>\n       {item}\n      </ul>\n        {data && data.page ? <div className='page'>\n        \t<div className='p1'>\n            <span>\u6BCF\u9875{data.page[0][1]}\u6761</span><span style={{marginLeft:'20px'}}>\u5171{data.page[0][0]}\u6761</span>  \n          </div>\n          <div className='p2'>\n          \t<div onClick={_this.click}>\u9996\u9875</div>\n            <div onClick={_this.click}>\u4E0A\u4E00\u9875</div>\n            <div>{data.page[1]}</div>\n            <div onClick={_this.click}>\u4E0B\u4E00\u9875</div>\n            <div onClick={_this.click}>\u5C3E\u9875</div>\n          </div>\n        </div>\n        : <div></div>}\n        </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  blur: function blur(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'blur',\n        data: e.target.value\n      });\n    }\n  },\n  blur2: function blur2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'blur2',\n        data: e.target.value\n      });\n    }\n  },\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: e.target.textContent\n      });\n    }\n  },\n\n  select: function select(e) {\n    var handler = this.props.customHandler;\n    if (e.target.tagName == 'SPAN') {\n      var _target = e.target.parentElement;\n    } else {\n      var _target = e.target;\n    }\n    if (handler) {\n      handler({\n        eventType: 'select',\n        data: _target.getAttribute('data-index')\n      });\n    }\n  },\n  search: function search(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'search'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n\n    var item = data && data.content.map(function (d, i) {\n      if (d[1] !== '') {\n        return React.createElement(\n          'li',\n          { 'data-index': i, onClick: _this.select },\n          d.map(function (d1, i1) {\n            return React.createElement(\n              'span',\n              null,\n              d1\n            );\n          })\n        );\n      } else {\n        return React.createElement('li', null);\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'xuanren_box1' },\n      React.createElement(\n        'div',\n        { className: 'search_box1' },\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'span',\n            null,\n            '\\u540D\\u79F0\\uFF1A'\n          ),\n          React.createElement(AInput, { value: data && data.sval[0], onBlur: _this.blur })\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'span',\n            null,\n            '\\u7F16\\u7801\\uFF1A'\n          ),\n          React.createElement(AInput, { value: data && data.sval[1], onBlur: _this.blur2 })\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement('span', { onClick: _this.search })\n        )\n      ),\n      React.createElement(\n        'ul',\n        { className: 'box_sele' },\n        React.createElement(\n          'li',\n          null,\n          React.createElement(\n            'span',\n            null,\n            '\\u660E\\u7EC6\\u7F16\\u7801'\n          ),\n          React.createElement(\n            'span',\n            null,\n            '\\u660E\\u7EC6\\u540D\\u79F0'\n          ),\n          React.createElement(\n            'span',\n            null,\n            '\\u5355\\u4F4D'\n          ),\n          React.createElement(\n            'span',\n            null,\n            '\\u5355\\u4EF7'\n          ),\n          React.createElement(\n            'span',\n            null,\n            '\\u6570\\u91CF'\n          ),\n          React.createElement(\n            'span',\n            null,\n            '\\u5408\\u4EF7'\n          )\n        ),\n        item\n      ),\n      data && data.page ? React.createElement(\n        'div',\n        { className: 'page' },\n        React.createElement(\n          'div',\n          { className: 'p1' },\n          React.createElement(\n            'span',\n            null,\n            '\\u6BCF\\u9875',\n            data.page[0][1],\n            '\\u6761'\n          ),\n          React.createElement(\n            'span',\n            { style: { marginLeft: '20px' } },\n            '\\u5171',\n            data.page[0][0],\n            '\\u6761'\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'p2' },\n          React.createElement(\n            'div',\n            { onClick: _this.click },\n            '\\u9996\\u9875'\n          ),\n          React.createElement(\n            'div',\n            { onClick: _this.click },\n            '\\u4E0A\\u4E00\\u9875'\n          ),\n          React.createElement(\n            'div',\n            null,\n            data.page[1]\n          ),\n          React.createElement(\n            'div',\n            { onClick: _this.click },\n            '\\u4E0B\\u4E00\\u9875'\n          ),\n          React.createElement(\n            'div',\n            { onClick: _this.click },\n            '\\u5C3E\\u9875'\n          )\n        )\n      ) : React.createElement('div', null)\n    );\n  }\n});";
    },
    getData_control48_tZ5Gik: function (elem) {
      if (!elem) {
        return;
      }var data = { text: [], val: [] };if ($(elem).find('option').length > 0) {
        $(elem).find('option').each(function () {
          data.text.push($(this).text());data.val.push($(this).prop('value'));
        });
      }return data;
    },
    doAction_uiControl37_7cR3Tu: function (data, elem) {
      if (data.eventType == 'click') {
        //alert(11111);
        // debugger;
        var idx = data.dataCustom.idx;var val = data.dataCustom.val; // var eventInput = elem.ownerDocument.createEvent("MouseEvents");
        // var eventInput2 = elem.ownerDocument.createEvent("MouseEvents");
        // eventInput.initEvent("mousedown", true, false);
        // $(elem).find("option").eq(idx)[0].dispatchEvent(eventInput);
        // eventInput2.initEvent("dblclick", true, false);
        // $(elem).find("option").eq(idx)[0].dispatchEvent(eventInput2);
        elem.ownerDocument.defaultView.delData = function (val) {
          elem.ownerDocument.defaultView.removeChildrenValue(val);elem.ownerDocument.defaultView.document.iframe_right.initCheckBox();
        };elem.ownerDocument.defaultView.delData(val);
      }
    },
    getTemplate_uiControl37_7cR3Tu: function getTemplate_uiControl37_7cR3Tu() {
      var selfTemplate = "module.exports = React.createClass({\n click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:{\n          idx:e.target.getAttribute('data-index'),\n          val:e.target.getAttribute('data-val')\n        }\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    var data = this.props.customData;\n   var item = data && data.text.map(function(d,i){\n      return(<div data-val={data.val[i]} onClick={_this.click} data-index={i}>{d}<i data-index={i} data-val={data.val[i]}></i></div>)\n    })\n    return (\n      <div className='checked_box'>\n       {item}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: {\n          idx: e.target.getAttribute('data-index'),\n          val: e.target.getAttribute('data-val')\n        }\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData;\n    var item = data && data.text.map(function (d, i) {\n      return React.createElement(\n        'div',\n        { 'data-val': data.val[i], onClick: _this.click, 'data-index': i },\n        d,\n        React.createElement('i', { 'data-index': i, 'data-val': data.val[i] })\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'checked_box' },\n      item\n    );\n  }\n});";
    },
    getData_control6_gnZluH: function (elem) {},
    doAction_uiControl6_KiPNJk: function (data, elem) {
      if (data.eventType == 'click1') {
        $(elem).children("input").eq(1).click();top.lfjnb = true;
      }if (data.eventType == 'click2') {
        top.lfjnb = true;$(elem).children("input").eq(0).click();
      }
    },
    getTemplate_uiControl6_KiPNJk: function getTemplate_uiControl6_KiPNJk() {
      var selfTemplate = "module.exports = React.createClass({\n  click1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click1'\n      })\n    }\n  },\n   click2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click2'\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    return (\n      <div className='button_22'>\n        <span onClick={_this.click1}>\u5173\u95ED</span>\n        <span onClick={_this.click2}>\u786E\u5B9A</span>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click1: function click1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click1'\n      });\n    }\n  },\n  click2: function click2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click2'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    return React.createElement(\n      'div',\n      { className: 'button_22' },\n      React.createElement(\n        'span',\n        { onClick: _this.click1 },\n        '\\u5173\\u95ED'\n      ),\n      React.createElement(\n        'span',\n        { onClick: _this.click2 },\n        '\\u786E\\u5B9A'\n      )\n    );\n  }\n});";
    },
    getData_control42_d6agVW: function (elem) {
      var data = elem.textContent.trim();return data;
    },
    doAction_uiControl32_uEbvLC: function (data, elem) {},
    getTemplate_uiControl32_uEbvLC: function () {
      var selfTemplate = "import { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  handleClick1: function(e) {\n    var handler = this.props.customHandler;\n    var tree = top.document.querySelectorAll('.tree_b')[0];\n    if(tree.style.display=='none'){\n      tree.style.display='block'\n    }\n    else{\n       tree.style.display='none'\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n    var _this = this;\n    return (\n      <header className=\"navbar navbar-primary header\" style = {{\"background\":\"#004899\",\"width\":\"100%\",\"position\":\"fixed\",\"z-index\":\"111\"}}>\n        <h2 className=\"navbar-title navbar-center\" style = {{\"font-size\":\"18px\"}}>\u9009\u62E9\u5408\u540C\u6E05\u5355\u660E\u7EC6</h2>\n        <div className=\"navbar-nav navbar-left\">\n          <a onClick={back} className=\"navbar-nav-item\">\n            <span className=\"navbar-nav-title\">\u8FD4\u56DE</span>\n            <span className=\"icon icon-left-nav navbar-icon\"></span>\n          </ a>\n        </div>\n      </header>\n    )\n  }\n});";
      return "'use strict';\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick1: function handleClick1(e) {\n    var handler = this.props.customHandler;\n    var tree = top.document.querySelectorAll('.tree_b')[0];\n    if (tree.style.display == 'none') {\n      tree.style.display = 'block';\n    } else {\n      tree.style.display = 'none';\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var _this = this;\n    return React.createElement(\n      'header',\n      { className: 'navbar navbar-primary header', style: { \"background\": \"#004899\", \"width\": \"100%\", \"position\": \"fixed\", \"z-index\": \"111\" } },\n      React.createElement(\n        'h2',\n        { className: 'navbar-title navbar-center', style: { \"font-size\": \"18px\" } },\n        '\\u9009\\u62E9\\u5408\\u540C\\u6E05\\u5355\\u660E\\u7EC6'\n      ),\n      React.createElement(\n        'div',\n        { className: 'navbar-nav navbar-left' },\n        React.createElement(\n          'a',\n          { onClick: _appRenderer.back, className: 'navbar-nav-item' },\n          React.createElement(\n            'span',\n            { className: 'navbar-nav-title' },\n            '\\u8FD4\\u56DE'\n          ),\n          React.createElement('span', { className: 'icon icon-left-nav navbar-icon' })\n        )\n      )\n    );\n  }\n});";
    }
  }, "selecthetongqingdan");
})(window, ysp);