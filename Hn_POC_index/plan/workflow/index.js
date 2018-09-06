(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control5_swQBlt: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent;
    },
    doAction_uiControl5_qvBT1p: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.appMain.back();
      }
    },
    getTemplate_uiControl5_qvBT1p: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onclick:function(e){    \n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var data=this.props.customData;\n    return (\n      <div className='ysp-hn-hander-tt'>\n        <span onClick={this.onclick.bind(this)}>\u8FD4\u56DE</span><span>{data}</span>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onclick: function onclick(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'ysp-hn-hander-tt' },\n      React.createElement(\n        'span',\n        { onClick: this.onclick.bind(this) },\n        '\\u8FD4\\u56DE'\n      ),\n      React.createElement(\n        'span',\n        null,\n        data\n      )\n    );\n  }\n});";
    },
    getData_control8_b93Fal: function (elem) {
      if (!elem) {
        return;
      }var data = [];var trs = elem.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var trL = {};var tds = trs[i].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
          if (j > 0) {
            if (j == 1) {
              trL.chboxChecked = tds[j].querySelector("input[type='CheckBox']").checked;
            } else if (j == 2) {
              trL.imgsrc = tds[j].querySelector('img').getAttribute('src');
            } else if (j == 3) {
              trL.titleA = tds[j].querySelector('a').textContent.trim();var sps = tds[j].querySelectorAll('span');var sparr = [];for (var z = 0; z < sps.length; z++) {
                if (sps[z].textContent != "") {
                  sparr.push(sps[z].textContent);
                }
              }trL.titleD = sparr;
            } else if (j == 4) {
              trL.detail = tds[j].textContent.trim();
            } else if (j == 5) {
              trL.dateBegin = tds[j].querySelector('div').querySelectorAll('div')[0].textContent.trim();trL.dateEND = tds[j].querySelector('div').querySelectorAll('div')[2].textContent.trim();
            } else if (j == 6) {
              trL.btn = tds[j].querySelector('button').textContent.trim();
            }
          }
        }data.push(trL);
      }return data;
    },
    doAction_uiControl8_92TIyT: function (data, elem) {
      if (data.eventType == 'clickIpt') {
        //debugger;
        var index = parseInt(data.dataCustom);var target = elem.querySelectorAll('tr')[index].querySelectorAll('td')[1].querySelector('input'); //console.log(target);
        var evt = target.ownerDocument.createEvent('MouseEvents');evt.initEvent('mousedown', true);target.dispatchEvent(evt);target.click();
      } else if (data.eventType == 'clickA') {//debugger;
        //var index = parseInt(data.dataCustom);
        //elem.querySelectorAll('tr')[index].querySelectorAll('td')[3].querySelector('a').click();
      } else if (data.eventType == 'clickBtn') {
        debugger;var index = parseInt(data.dataCustom);var target = elem.querySelectorAll('tr')[index].querySelectorAll('td')[6].querySelector('button');var evt = target.ownerDocument.createEvent('MouseEvents');evt.initEvent('mousedown', true);target.dispatchEvent(evt);target.click();
      }
    },
    getTemplate_uiControl8_92TIyT: function () {
      var selfTemplate = "module.exports = React.createClass({\n  clickIpt:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'clickIpt',\n        data:target.dataset.index\n      })\n    }\n  },\n  clickA:function(e){\n    debugger;\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'clickA',\n        data:target.dataset.index\n      })\n    }\n  },\n  clickBtn:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'clickBtn',\n        data:target.dataset.index\n      })\n    }\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    var list=data && data.map(function(d,i){\n      var src1=\"https://performancemanager15.sapsf.cn\" + d.imgsrc;      \n      return (\n        data && <div className='contentBox'>\n          \t<div className='ysp-contentBox-img'>\n          \t\t\t<span className={d.chboxChecked==true?\"iptchecked\":'iptunchecked'} onClick={_this.clickIpt.bind(_this)} data-index={i}></span>\n          \t\t\t<img src={src1} style={{'width':'60px'}}/>\n          \t</div>\n        \t\t\n          \t<div className='ysp-content-detail'>\n          \t\t\t<p data-index={i} onClick={_this.clickA.bind(_this)} className='ysp-color-blue-tt'>{d.titleA}</p>\n              \t<p>{d.titleD[0]}</p>\n              \t<p>{d.titleD[1]}</p>\n          \t</div>\n          \t<div className='ysp-content-detail'>\n          \t\t\t<p>{d.detail}</p>\n              \t<p>{d.dateBegin}</p>\n              \t<p>{d.dateEND}</p>\n          \t</div>\n          \t<div className='ysp-content-btn'><button data-index={i} onClick={_this.clickBtn.bind(_this)}>{d.btn}</button></div>\n        </div>\n        \n      )\n    })\n    return (\n      <div className='ysp-hn-listContent-tt'>\n        {list}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  clickIpt: function clickIpt(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'clickIpt',\n        data: target.dataset.index\n      });\n    }\n  },\n  clickA: function clickA(e) {\n    debugger;\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'clickA',\n        data: target.dataset.index\n      });\n    }\n  },\n  clickBtn: function clickBtn(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'clickBtn',\n        data: target.dataset.index\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var list = data && data.map(function (d, i) {\n      var src1 = \"https://performancemanager15.sapsf.cn\" + d.imgsrc;\n      return data && React.createElement(\n        'div',\n        { className: 'contentBox' },\n        React.createElement(\n          'div',\n          { className: 'ysp-contentBox-img' },\n          React.createElement('span', { className: d.chboxChecked == true ? \"iptchecked\" : 'iptunchecked', onClick: _this.clickIpt.bind(_this), 'data-index': i }),\n          React.createElement('img', { src: src1, style: { 'width': '60px' } })\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-content-detail' },\n          React.createElement(\n            'p',\n            { 'data-index': i, onClick: _this.clickA.bind(_this), className: 'ysp-color-blue-tt' },\n            d.titleA\n          ),\n          React.createElement(\n            'p',\n            null,\n            d.titleD[0]\n          ),\n          React.createElement(\n            'p',\n            null,\n            d.titleD[1]\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-content-detail' },\n          React.createElement(\n            'p',\n            null,\n            d.detail\n          ),\n          React.createElement(\n            'p',\n            null,\n            d.dateBegin\n          ),\n          React.createElement(\n            'p',\n            null,\n            d.dateEND\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-content-btn' },\n          React.createElement(\n            'button',\n            { 'data-index': i, onClick: _this.clickBtn.bind(_this) },\n            d.btn\n          )\n        )\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'ysp-hn-listContent-tt' },\n      list\n    );\n  }\n});";
    }
  }, "workflow");
})(window, ysp);