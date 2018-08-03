(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control14_Z6RT8A: function (elem) {
      if (elem) {
        var arr = { title: [], content: [], status: [] };var tit = elem.querySelector(".c010");var tdt = tit.querySelectorAll("td");for (var i = 1; i < tdt.length; i++) {
          arr.title.push(tdt[i].textContent.trim());
        }var trs = elem.querySelectorAll("tr");for (var j = 1; j < trs.length; j++) {
          if (j % 2 == 0) {
            var tds = trs[j].querySelectorAll("td");var pData = [];
            for (var k = 1; k < tds.length; k++) {
              pData.push(tds[k].textContent.trim());
            }arr.content.push(pData);if (trs[j].className == "textbgcolor04") {
              arr.status.push(true);
            } else {
              arr.status.push(false);
            }
          }
        }return arr;
      }
      return [];
    },
    doAction_uiControl7_PTb8Jl: function (data, elem) {
      if (data.eventType == "table") {
        var index = parseInt(data.dataCustom);
      }
    },
    getTemplate_uiControl7_PTb8Jl: function () {
      var selfTemplate = "module.exports = React.createClass({\n  tableClick:function(e){\n    var target = e.target;\n    var index = target.dataset.index;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:index,\n        eventType:'table'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var dataContent = data && data.content || [];\n    return (\n      <div>\n        {\n          dataContent && dataContent.map((item,index)=>{\n            return(\n            \t<div className=\"ysp-dc-content-table\">\n              \t{\n                  item.map((ite,ind)=>{\n                    return(\n                      <div>\n                        {\n                          data.title[ind] == \"\u4EBA\u5458\" ? \n                            <div className=\"ysp-dcContent-table-RY\">\n                            \t<span>{data && data.title[ind]}\uFF1A</span>\n                        \t\t\t<span data-index = {index} onClick={this.tableClick.bind(this)}>{ite}</span>\n                            </div>\n                            :\n                          \t<div>\n                          \t\t<span>{data && data.title[ind]}\uFF1A</span>\n                        \t\t\t<span>{ite}</span>\n                          \t</div>\n                        }\n                        \n                      </div>\n                    );\n                  })\n                }\n              </div>\n            );\n          }\n          )\n        }\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  tableClick: function tableClick(e) {\n    var target = e.target;\n    var index = target.dataset.index;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: index,\n        eventType: 'table'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n\n    var data = this.props.customData;\n    var dataContent = data && data.content || [];\n    return React.createElement(\n      \"div\",\n      null,\n      dataContent && dataContent.map(function (item, index) {\n        return React.createElement(\n          \"div\",\n          { className: \"ysp-dc-content-table\" },\n          item.map(function (ite, ind) {\n            return React.createElement(\n              \"div\",\n              null,\n              data.title[ind] == \"\u4EBA\u5458\" ? React.createElement(\n                \"div\",\n                { className: \"ysp-dcContent-table-RY\" },\n                React.createElement(\n                  \"span\",\n                  null,\n                  data && data.title[ind],\n                  \"\\uFF1A\"\n                ),\n                React.createElement(\n                  \"span\",\n                  { \"data-index\": index, onClick: _this.tableClick.bind(_this) },\n                  ite\n                )\n              ) : React.createElement(\n                \"div\",\n                null,\n                React.createElement(\n                  \"span\",\n                  null,\n                  data && data.title[ind],\n                  \"\\uFF1A\"\n                ),\n                React.createElement(\n                  \"span\",\n                  null,\n                  ite\n                )\n              )\n            );\n          })\n        );\n      })\n    );\n  }\n});";
    },
    getData_control15_ZyA8bh: function (elem) {
      if (elem) {
        var arr = { titleName: "", title: "", check: [], select: [], textArea: [] };var title = elem.querySelectorAll("tr")[0].querySelector("td").textContent.trim();arr.titleName = title;var tit = elem.querySelectorAll("tr")[1].querySelectorAll("td")[1];arr.title = tit.textContent.trim();var radio = elem.querySelectorAll("input[type=radio]");for (var i = 0; i < radio.length; i++) {
          if (radio[i].checked) {
            arr.check.push(true);
          } else {
            arr.check.push(false);
          }
        }var options = elem.querySelectorAll("option");for (var i = 0; i < options.length; i++) {
          arr.select.push(options[i].textContent);
        }var testArea = elem.querySelector("#replyRemark").value;arr.textArea.push(testArea);arr.ts = elem.querySelector("#checkreplyRemark").textContent;return arr;
      }return [];
    },
    doAction_uiControl13_7lZgRR: function (data, elem) {
      if (data.eventType == 'order') {
        var value = data.dataCustom.value[0];var selectEl = elem.querySelector('select');selectEl.selectedIndex = value;if (selectEl.onchange) {
          selectEl.onchange();
        } else if (selectEl.dispatchEvent) {
          selectEl.dispatchEvent(new Event('change'));
        } else {
          selectEl.dispatchEvent(new MouseEvent('click', { view: selectEl.ownerDocument.defaultView, bubbles: true, cancelable: true }));
        }
      }if (data.eventType == "radio") {
        var title = data.dataCustom.title;var radio = elem.querySelectorAll("input[type=radio]");if ("同意" == title || "重新提交" == title) {
          radio && radio[0].click();
        }if ("不同意" == title || "撤销结案" == title) {
          radio && radio[1].click();
        }
      }if ("chang" == data.eventType) {
        var value = data.dataCustom;elem.querySelector("#replyRemark").value = value;
      }
    },
    getTemplate_uiControl13_7lZgRR: function () {
      var selfTemplate = "module.exports = React.createClass({\n  getInitialState: function() {\n    return { \n      text: this.props.customData && this.props.customData.textArea\n    }; \n  },\n  componentWillReceiveProps:function(nextProps){\n    this.setState({\n      text: nextProps.customData && nextProps.customData.textArea\n    })\n  },\n  orderOptions:function(){\n    var data = this.props.customData && this.props.customData.select;\n    return data.map((item,index)=>{\n      return (\n      \t<option value={index}>{item}</option>\n      )\n    })\n  },\n  orderChange:function(e){\n    var value = e.target.value;\n    var textValue = e.target.querySelectorAll(\"option\")[value].textContent;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{\n          value: [value,textValue]\n        },\n        eventType:'order'\n      })\n    }\n    \n    e.target.parentElement.parentElement.nextElementSibling.value = textValue;\n  },\n  radioClick:function(e){\n    var target = e.target;\n    var title = target.dataset.title;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{\n          title: title\n        },\n        eventType:'radio'\n      })\n    }\n  },\n  textChang:function(e){\n    var target = e.target;\n    var value = target.value;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:value,\n        eventType:'chang'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    return (\n      <div className=\"ysp-dc-content-SP\">\n        <div>\n          <span className=\"ysp-dc-content-Person\">\u5BA1\u6279\u4EBA\uFF1A</span>\n          <span>{data && data.title}</span>\n        </div>\n        \n        <div>\n          <span className=\"ysp-dc-content-CL\">\u5904\u7406\uFF1A</span>\n          {\n            data && data.titleName == \"\u7533\u8BF7\" ? \n              <span>\n          \t<input type=\"radio\" name=\"commandId\"  checked={data.check[0]} value=\"\u91CD\u65B0\u63D0\u4EA4\" onClick={this.radioClick.bind(this)} data-title=\"\u91CD\u65B0\u63D0\u4EA4\"/>\u91CD\u65B0\u63D0\u4EA4\n            &nbsp;&nbsp;\n            <input type=\"radio\" name=\"commandId\" value =\"\u64A4\u9500\u7ED3\u6848\" checked={data.check[1]} onClick={this.radioClick.bind(this)} data-title=\"\u64A4\u9500\u7ED3\u6848\"/>\u64A4\u9500\u7ED3\u6848\n          </span>\n              :\n            <span>\n          \t<input type=\"radio\" name=\"commandId\"  checked={data.check[0]} value=\"\u540C\u610F\" onClick={this.radioClick.bind(this)} data-title=\"\u540C\u610F\"/>\u540C\u610F\n            &nbsp;&nbsp;\n            <input type=\"radio\" name=\"commandId\" value =\"\u4E0D\u540C\u610F\" checked={data.check[1]} onClick={this.radioClick.bind(this)} data-title=\"\u4E0D\u540C\u610F\"/>\u4E0D\u540C\u610F\n          </span>\n          }\n          \n        </div>\n        \n        <div className=\"ysp-dc-content-select\">\n          <span>\u6279\u6CE8 <i style={{\"color\":\"red\"}}>*</i>\uFF1A</span>\n          <span>\n          \t<select selectedIndex = \"0\" onChange={_this.orderChange.bind(_this)}>\n              {this.orderOptions()}\n            </select>\n          </span>\n        </div>\n        <div style={{\"marginLeft\":\"86px\"}}>\n        \t{data.ts !=\"\" ? <div><font style={{'color':'red'}}>{data&&data.ts}</font></div>:\"\"}\n        </div>\n        <ATextarea style={{\"width\":\"240px\",\"marginLeft\":\"86px\"}} value= {data && data.textArea}onChange={this.textChang.bind(this)}></ATextarea>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  getInitialState: function getInitialState() {\n    return {\n      text: this.props.customData && this.props.customData.textArea\n    };\n  },\n  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {\n    this.setState({\n      text: nextProps.customData && nextProps.customData.textArea\n    });\n  },\n  orderOptions: function orderOptions() {\n    var data = this.props.customData && this.props.customData.select;\n    return data.map(function (item, index) {\n      return React.createElement(\n        'option',\n        { value: index },\n        item\n      );\n    });\n  },\n  orderChange: function orderChange(e) {\n    var value = e.target.value;\n    var textValue = e.target.querySelectorAll(\"option\")[value].textContent;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: {\n          value: [value, textValue]\n        },\n        eventType: 'order'\n      });\n    }\n\n    e.target.parentElement.parentElement.nextElementSibling.value = textValue;\n  },\n  radioClick: function radioClick(e) {\n    var target = e.target;\n    var title = target.dataset.title;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: {\n          title: title\n        },\n        eventType: 'radio'\n      });\n    }\n  },\n  textChang: function textChang(e) {\n    var target = e.target;\n    var value = target.value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: value,\n        eventType: 'chang'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    return React.createElement(\n      'div',\n      { className: 'ysp-dc-content-SP' },\n      React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'span',\n          { className: 'ysp-dc-content-Person' },\n          '\\u5BA1\\u6279\\u4EBA\\uFF1A'\n        ),\n        React.createElement(\n          'span',\n          null,\n          data && data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'span',\n          { className: 'ysp-dc-content-CL' },\n          '\\u5904\\u7406\\uFF1A'\n        ),\n        data && data.titleName == \"\u7533\u8BF7\" ? React.createElement(\n          'span',\n          null,\n          React.createElement('input', { type: 'radio', name: 'commandId', checked: data.check[0], value: '\\u91CD\\u65B0\\u63D0\\u4EA4', onClick: this.radioClick.bind(this), 'data-title': '\\u91CD\\u65B0\\u63D0\\u4EA4' }),\n          '\\u91CD\\u65B0\\u63D0\\u4EA4 \\xA0\\xA0',\n          React.createElement('input', { type: 'radio', name: 'commandId', value: '\\u64A4\\u9500\\u7ED3\\u6848', checked: data.check[1], onClick: this.radioClick.bind(this), 'data-title': '\\u64A4\\u9500\\u7ED3\\u6848' }),\n          '\\u64A4\\u9500\\u7ED3\\u6848'\n        ) : React.createElement(\n          'span',\n          null,\n          React.createElement('input', { type: 'radio', name: 'commandId', checked: data.check[0], value: '\\u540C\\u610F', onClick: this.radioClick.bind(this), 'data-title': '\\u540C\\u610F' }),\n          '\\u540C\\u610F \\xA0\\xA0',\n          React.createElement('input', { type: 'radio', name: 'commandId', value: '\\u4E0D\\u540C\\u610F', checked: data.check[1], onClick: this.radioClick.bind(this), 'data-title': '\\u4E0D\\u540C\\u610F' }),\n          '\\u4E0D\\u540C\\u610F'\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'ysp-dc-content-select' },\n        React.createElement(\n          'span',\n          null,\n          '\\u6279\\u6CE8 ',\n          React.createElement(\n            'i',\n            { style: { \"color\": \"red\" } },\n            '*'\n          ),\n          '\\uFF1A'\n        ),\n        React.createElement(\n          'span',\n          null,\n          React.createElement(\n            'select',\n            { selectedIndex: '0', onChange: _this.orderChange.bind(_this) },\n            this.orderOptions()\n          )\n        )\n      ),\n      React.createElement(\n        'div',\n        { style: { \"marginLeft\": \"86px\" } },\n        data.ts != \"\" ? React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'font',\n            { style: { 'color': 'red' } },\n            data && data.ts\n          )\n        ) : \"\"\n      ),\n      React.createElement(ATextarea, { style: { \"width\": \"240px\", \"marginLeft\": \"86px\" }, value: data && data.textArea, onChange: this.textChang.bind(this) })\n    );\n  }\n});";
    },

    getData_control20_XRgW0e: function (elem) {
      if (!elem) {
        return;
      }var data = { flag: [], fileName: [], text: [] };var fileTable = elem.querySelector("#fileTable");if (null != fileTable) {
        var trs = elem.querySelector("#fileTable").querySelectorAll(".line01");for (var i = 0; i < trs.length; i++) {
          var isA = trs && trs[i].querySelectorAll("td")[1].textContent;if (isA) {
            data.flag.push("false");
          } else {
            data.flag.push("true");
          }var inputValue = trs[i].querySelectorAll("td")[1].querySelector("input").value;var index = inputValue.lastIndexOf("\\");var str = inputValue.substring(index + 1, inputValue.length);data.fileName.push(str);
        }return data;
      } else {
        var el = elem.querySelector("#back1");if (el) {
          var elLine = elem.querySelector("#back1").querySelectorAll('tr[class="line01"]');for (var i = 0; i < elLine.length; i++) {
            var textContent = elLine[i].querySelectorAll("td")[0].querySelector("a").textContent.trim();data.text.push(textContent);
          }
        }return data;
      }
    },
    doAction_uiControl21_41bnAA: function (data, elem) {
      if (data.eventType == "click") {
        var index = data.dataCustom;var trs = elem.querySelector("#fileTable").querySelectorAll(".line01");trs && trs[index].querySelectorAll("td")[1].querySelector("input").click();
      }if (data.eventType == "add") {
        var trs = elem.querySelector("#fileTable").querySelectorAll("tr");trs && trs[0].querySelectorAll("td")[0].querySelector("a").click();
      }if (data.eventType == "delete") {
        var index = data.dataCustom;var trs = elem.querySelector("#fileTable").querySelectorAll(".line01");trs && trs[index].querySelectorAll("td")[0].querySelector("a").click();
      }
    },
    getTemplate_uiControl21_41bnAA: function () {
      var selfTemplate = "\nmodule.exports = React.createClass({\n  \n  fileInput:function(e){\n    var target = e.target;\n    var index = target.dataset.index;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:index,\n        eventType:'click'\n      })\n    }\n  },\n  addClick:function(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'add'\n      })\n    }\n  },\n  deleteFile:function(e){\n    var target = e.target;\n    var index = target.dataset.index;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:index,\n        eventType:'delete'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData && this.props.customData.flag;\n    var fileName= this.props.customData && this.props.customData.fileName;\n    var text = this.props.customData && this.props.customData.text;\n    return (\n      <div>\n      \t{\n          data && data.length >0 ? \n            <div className=\"ysp-dc-file\">\n              <div>\u9644\u4EF6\uFF1A</div>\n              <div className=\"ysp-dc-file-top\">\n              \t<span onClick={this.addClick.bind(this)}>\u6DFB\u52A0\u6587\u4EF6</span>\n                <span>\uFF08\u9644\u4EF6\u5927\u5C0F\u603B\u548C\u4E0D\u80FD\u8D85\u8FC725M\uFF09</span>\n              </div>\n              \n              {\n                data && data.map((item,index)=>{\n                  return(\n                    <div>\n                      {\n                        item == \"true\" ?\n                          <div>\n                            <span data-index = {index} onClick={this.deleteFile.bind(this)}>\u5220\u9664\u6587\u4EF6</span>\n                            <span>\n                              <input type=\"button\" value = \"\u9009\u6587\u4EF6\" data-index = {index} onClick={this.fileInput.bind(this)}/>\n                            </span>\n                            <span>{fileName && fileName[index]}</span>\n                          </div>\n                          :\n                          <div>\n                            <span data-index = {index} onClick={this.deleteFile.bind(this)}>\u5220\u9664\u6587\u4EF6</span>\n                            <span>\n                            </span>\n                            <span>{fileName && fileName[index]}</span>\n                          </div>\n                      }\n                  </div>\n                  );\n                }\n                )\n              }\n            </div>\n            : \n          \t<div className=\"ysp-dc-FJ\">\n            \t<div>\u9644\u4EF6\uFF1A</div>\n          \t\t{\n              text && text.map((item,index)=>{\n                return(\n                \t<div>{item}</div>\n                );\n              })\n            }\n          \t</div>\n        }\n      </div>\n      \n    )\n  }\n});\n";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n\n  fileInput: function fileInput(e) {\n    var target = e.target;\n    var index = target.dataset.index;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: index,\n        eventType: 'click'\n      });\n    }\n  },\n  addClick: function addClick(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'add'\n      });\n    }\n  },\n  deleteFile: function deleteFile(e) {\n    var target = e.target;\n    var index = target.dataset.index;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: index,\n        eventType: 'delete'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n\n    var data = this.props.customData && this.props.customData.flag;\n    var fileName = this.props.customData && this.props.customData.fileName;\n    var text = this.props.customData && this.props.customData.text;\n    return React.createElement(\n      'div',\n      null,\n      data && data.length > 0 ? React.createElement(\n        'div',\n        { className: 'ysp-dc-file' },\n        React.createElement(\n          'div',\n          null,\n          '\\u9644\\u4EF6\\uFF1A'\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-dc-file-top' },\n          React.createElement(\n            'span',\n            { onClick: this.addClick.bind(this) },\n            '\\u6DFB\\u52A0\\u6587\\u4EF6'\n          ),\n          React.createElement(\n            'span',\n            null,\n            '\\uFF08\\u9644\\u4EF6\\u5927\\u5C0F\\u603B\\u548C\\u4E0D\\u80FD\\u8D85\\u8FC725M\\uFF09'\n          )\n        ),\n        data && data.map(function (item, index) {\n          return React.createElement(\n            'div',\n            null,\n            item == \"true\" ? React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                { 'data-index': index, onClick: _this.deleteFile.bind(_this) },\n                '\\u5220\\u9664\\u6587\\u4EF6'\n              ),\n              React.createElement(\n                'span',\n                null,\n                React.createElement('input', { type: 'button', value: '\\u9009\\u6587\\u4EF6', 'data-index': index, onClick: _this.fileInput.bind(_this) })\n              ),\n              React.createElement(\n                'span',\n                null,\n                fileName && fileName[index]\n              )\n            ) : React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                { 'data-index': index, onClick: _this.deleteFile.bind(_this) },\n                '\\u5220\\u9664\\u6587\\u4EF6'\n              ),\n              React.createElement('span', null),\n              React.createElement(\n                'span',\n                null,\n                fileName && fileName[index]\n              )\n            )\n          );\n        })\n      ) : React.createElement(\n        'div',\n        { className: 'ysp-dc-FJ' },\n        React.createElement(\n          'div',\n          null,\n          '\\u9644\\u4EF6\\uFF1A'\n        ),\n        text && text.map(function (item, index) {\n          return React.createElement(\n            'div',\n            null,\n            item\n          );\n        })\n      )\n    );\n  }\n});";
    },
    getData_control23_9mNWVc: function (elem) {
      if (elem) {
        var arr = { title: "", content: [] };var tbody = elem.querySelector(".tab01left");var trs = tbody.querySelectorAll("tr");arr.title = trs[0].textContent.trim(); /********1**********/var td1 = trs[1].querySelectorAll("td");for (var i = 0; i < td1.length; i++) {
          var obj = { status: '', left: '', right: { tip: '', val: [], font: "" } };obj.status = trs[1].style.display;if (i % 2 != 0) {
            obj.left = td1[i].previousElementSibling.textContent.trim();obj.right.tip = "text";obj.right.val.push(td1[i].textContent.trim());arr.content.push(obj);
          }
        } /********2**********/var td2 = trs[2].querySelectorAll("td");for (var i = 0; i < td2.length; i++) {
          var obj = { status: '', left: '', right: { tip: '', val: [], font: "" } };obj.status = trs[2].style.display;if (i % 2 != 0) {
            if (td2[i].querySelector("#_Display_proposer")) {
              obj.left = td2[i].previousElementSibling.textContent.trim();obj.right.tip = "input";obj.right.val.push(td2[i].querySelector("#_Display_proposer").value);
            } else {
              obj.left = td2[i].previousElementSibling.textContent.trim();obj.right.tip = "text";obj.right.val.push(td2[i].textContent.trim());
            }arr.content.push(obj);
          }
        } /********3**********/if (trs[3].getAttribute("class") == "line01") {
          var td3 = trs[3].querySelectorAll("td");for (var i = 0; i < td3.length; i++) {
            var obj = { status: '', left: '', right: { tip: '', val: [], test: [], sel: "", font: "" } };obj.status = trs[3].style.display;if (i % 2 != 0) {
              obj.left = td3[i].previousElementSibling.textContent.trim();obj.right.tip = "text";obj.right.val.push(td3[i].textContent.trim());arr.content.push(obj);
            }
          }
        } else {
          var td3 = trs[4].querySelectorAll("td");for (var i = 0; i < td3.length; i++) {
            var obj = { status: '', left: '', right: { tip: '', val: [], test: [], sel: "", font: "" } };obj.status = trs[4].style.display;if (i % 2 != 0) {
              if (td3[i].querySelector("#ext-gen9")) {
                obj.left = td3[i].previousElementSibling.textContent.trim();obj.right.tip = "select";var div = elem.querySelector("#ext-gen18").querySelectorAll("div");for (var j = 0; j < div.length; j++) {
                  obj.right.val.push(div[j].textContent);obj.right.test.push(div[j].textContent);if (div[j].className.indexOf("x-combo-selected") != -1) {
                    obj.right.sel = div[j].textContent;
                  }
                }
              } else if (td3[i].querySelector("#_Display_deputy")) {
                obj.left = td3[i].previousElementSibling.textContent.trim().substring(0, 5);obj.right.tip = "input";obj.right.val.push(td3[i].querySelector("#_Display_deputy").value);obj.right.font = td3[i].querySelector("#check_Display_deputy").textContent;
              }arr.content.push(obj);
            }
          }
        } /********4**********/var td4 = trs[5].querySelectorAll("td");for (var i = 0; i < td4.length; i++) {
          var obj = { status: '', left: '', right: { tip: '', val: [], test: [], font: "" } };obj.status = trs[5].style.display;if (i % 2 != 0) {
            if (td4[1].querySelector("#vacationType")) {
              obj.left = td4[1].previousElementSibling.textContent.trim().substring(0, 2);obj.right.tip = "select";var option = td4[1].querySelector("#vacationType").querySelectorAll("option");for (var j = 0; j < option.length; j++) {
                obj.right.val.push(option[j].textContent);obj.right.test.push(option[j].value);
              }
            } else {
              obj.left = td4[i].previousElementSibling.textContent.trim();obj.right.tip = "text";obj.right.val.push(td4[i].textContent.trim());
            }arr.content.push(obj);
          }
        } /********5**********/var td5 = trs[6].querySelectorAll("td");for (var i = 0; i < td5.length; i++) {
          var obj = { status: '', left: '', right: { tip: '', val: [], font: "" } };obj.status = trs[6].style.display;if (i % 2 != 0) {
            obj.left = td5[i].previousElementSibling.textContent.trim();obj.right.tip = "text";obj.right.val.push(td5[i].textContent.trim());arr.content.push(obj);
          }
        } /********6**********/if (trs[7].querySelector("#vacationInfo")) {
          var obj = { status: '', left: '', right: { tip: '', val: [], font: "" } };obj.status = trs[7].style.display;obj.left = trs[7].querySelector(".c06left00").textContent.trim();obj.right.tip = "text";obj.right.val.push(trs[7].querySelector("#vacationInfo").textContent);arr.content.push(obj);
        } else {
          var td = trs[7].querySelector(".c11left01");var obj1 = { status: '', left: '', right: { tip: '', val: [], font: "" } };obj1.status = trs[7].style.display;obj1.left = td.previousElementSibling.textContent.trim().substring(0, 6);obj1.right.tip = "date";var dateValue = td.querySelector("#startDate").value;var year = dateValue.substring(0, 4);var month = dateValue.substring(5, 7);var day = dateValue.substring(8, 10);var nowDate = year + "-" + month + "-" + day;obj1.right.val.push(nowDate);obj1.right.font = td.querySelector("#checkstartDate").textContent;arr.content.push(obj1);var td6 = trs[7].querySelector(".c1140");var obj2 = { status: '', left: '', right: { tip: '', val: [], font: "" } };obj2.status = trs[7].style.display;obj2.left = td6.previousElementSibling.textContent.trim().substring(0, 6);obj2.right.tip = "date";var dateValue = td6.querySelector("#endDate").value;var year = dateValue.substring(0, 4);var month = dateValue.substring(5, 7);var day = dateValue.substring(8, 10);var nowDate = year + "-" + month + "-" + day;obj2.right.val.push(nowDate);obj2.right.font = td6.querySelector("#checkendDate").textContent;arr.content.push(obj2);
        } /********7**********/if (trs[8].getAttribute("class") == "line01") {
          var td7 = trs[8].querySelectorAll("td");for (var i = 0; i < td7.length; i++) {
            var obj = { status: '', left: '', right: { tip: '', val: [], font: "" } };obj.status = trs[8].style.display;if (i % 2 != 0) {
              obj.left = td7[i].previousElementSibling.textContent.trim();obj.right.tip = "text";obj.right.val.push(td7[i].textContent);arr.content.push(obj);
            }
          }
        } else {
          var td7 = trs[10].querySelectorAll("td");for (var i = 0; i < td7.length; i++) {
            var obj = { status: '', left: '', right: { tip: '', val: [], font: "" } };obj.status = trs[10].style.display;if (i % 2 != 0) {
              obj.left = td7[i].previousElementSibling.textContent.trim().substring(0, 2);obj.right.tip = "span";obj.right.val.push(td7[i].querySelector("#totalTime").value);obj.right.font = td7[i].querySelector("#checktotalTime").textContent;arr.content.push(obj);
            }
          }
        } /********8**********/if (trs[9].getAttribute("class") == "line01") {
          var td8 = trs[9].querySelectorAll("td");for (var i = 0; i < td8.length; i++) {
            var obj = { status: '', left: '', right: { tip: '', val: [], font: "" } };obj.status = trs[9].style.display;if (i % 2 != 0) {
              obj.left = trs[9].querySelector(".c06left00").textContent.trim();obj.right.tip = "text";obj.right.val.push(trs[9].querySelector(".c1140left").textContent.trim());arr.content.push(obj);
            }
          }
        } else {
          var td8 = trs[11].querySelectorAll("td");for (var i = 0; i < td8.length; i++) {
            var obj = { status: '', left: '', right: { tip: '', val: [], font: "" } };obj.status = trs[11].style.display;if (i % 2 != 0) {
              obj.left = td8[i].previousElementSibling.textContent.trim().substring(0, 4);obj.right.tip = "textarea";obj.right.val.push(td8[i].textContent.trim());obj.right.font = td8[i].querySelector("#checkreason").textContent;arr.content.push(obj);
            }
          }
        } /********9**********/if (trs[10].getAttribute("class") == "line01") {
          var td9 = trs[10].querySelectorAll("td");for (var i = 0; i < td9.length; i++) {
            var obj = { status: '', left: '', right: { tip: '', val: [], font: "" } };obj.status = trs[10].style.display;if (i % 2 != 0) {
              if (td9[0].textContent == "请假事由：") {
                obj.left = td9[0].textContent.trim();obj.right.tip = "text";obj.right.val.push(trs[10].querySelector(".c1140left").textContent.trim());
              }arr.content.push(obj);
            }
          }
        } //   } else {
        //     var td9 = trs[13].querySelectorAll("td");
        //     for (var i = 0; i < td9.length; i++) {
        //       var obj = {
        //         status: '',
        //         left: '',
        //         right: {
        //           tip: '',
        //           val: []
        //         }
        //       };
        //       obj.status = trs[13].style.display;
        //       if (i % 2 != 0) {
        //         if (td9[i].querySelector("#ticketNumber")) {
        //           obj.left = td9[i].previousElementSibling.textContent.trim();
        //           obj.right.tip = "inputs";
        //           obj.right.val.push(td9[i].querySelector("#ticketNumber").value);
        //           obj.right.font = td9[i].querySelector("#checkticketNumber").nextElementSibling.textContent;
        //         } else {
        //           obj.left = td9[i].previousElementSibling.textContent.trim();
        //           obj.right.tip = "text";
        //           obj.right.val.push(td9[i].textContent.trim());
        //         }
        //         arr.content.push(obj);
        //       }
        //     }
        // } /********10**********/ 
        //   var td10 = trs[14].querySelectorAll("td");
        //   for (var i = 0; i < td10.length; i++) {
        //     var obj = {
        //       status: '',
        //       left: '',
        //       right: {
        //         tip: '',
        //         val: [],
        //         font: ""
        //       }
        //     };
        //     obj.status = trs[14].style.display;
        //     if (i % 2 != 0) {
        //       if (td10[i].querySelector("#backAndForth")) {
        //         obj.left = td10[i].previousElementSibling.textContent.trim();
        //         obj.right.tip = "inputs";
        //         obj.right.val.push(td10[i].querySelector("#backAndForth").value);
        //         obj.left = td10[i].previousElementSibling.textContent.trim();
        //         obj.right.tip = "input";
        //         obj.right.val.push(td10[i].querySelector("#_Display_noticeIdentity").textContent.trim());
        //         obj.right.font = td10[i].querySelector("#_str_noticeIdentity").nextElementSibling.textContent;
        //       }
        //       arr.content.push(obj);
        //   } /********11**********/
        //   var td11 = trs[16].querySelector("#fileTable").querySelectorAll(".line01");
        //   var obj = {
        //     status: '',
        //     left: '',
        //     right: {
        //       tip: '',
        //       val: [],
        //       font: ""
        //     }
        //   };
        //   obj.left = trs[16].querySelector("#fileTable").parentElement.parentElement.previousElementSibling.textContent;
        //   obj.right.tip = "file";
        //   obj.right.font = td11.length;
        //   arr.content.push(obj);
        return arr;
      }return [];
    },
    doAction_uiControl24_XWkhcf: function (data, elem) {
      var type = data.eventType;if (type == 'click') {
        elem.querySelectorAll('.c11left')[1].querySelector('a').click();
      } else if (type == "textArea") {
        var value = data.customData;elem.querySelector("#reason").value = value;
      } else if (type == "select") {
        var i = data.customData;var ind = i.ind;var val = i.val;var selectEl = elem.querySelector('select');selectEl.selectedIndex = val;if (selectEl.onchange) {
          selectEl.onchange();
        } else if (selectEl.dispatchEvent) {
          selectEl.dispatchEvent(new Event('change'));
        } else {
          selectEl.dispatchEvent(new MouseEvent('click', { view: selectEl.ownerDocument.defaultView, bubbles: true, cancelable: true }));
        }
      } else if (type == "selclick") {
        debugger;var i = data.customData.ind;elem.querySelector("#ext-gen11").click();var el = elem.querySelector("#ext-gen18").querySelectorAll("div");if (el[i].getAttribute("class") != ".loading-indicator") {
          el && el[i].click();
        }
      } else if (type = "date") {
        var ind = data.customData.ind;var val = data.customData.val;debugger;if (ind == "8") {
          // elem.querySelector("#startDatetrigger").previousElementSibling.click();
          elem.querySelector("#startDate").value = val;
        } else {
          // elem.querySelector("#endDatetrigger").previousElementSibling.click();
          elem.querySelector("#endDate").value = val;
        }
      }
    },
    getTemplate_uiControl24_XWkhcf: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  textAreaClick:function(e){\n    var target = e.target;\n    var value = target.value;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data: value,\n        eventType:'textArea'\n      })\n    }\n  },\n  selectChange:function(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{ind:target.getAttribute(\"data-index\"),val:target.value},\n        eventType:\"select\"\n      })\n    }\n  },\n  selClick:function(e){\n    var target = e.target;\n    var vlue = target.value;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{ind:vlue},\n        eventType:\"selclick\"\n      })\n    }\n  },\n  dateClick:function(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{ind:target.getAttribute(\"data-index\"),val:target.value},\n        eventType:\"date\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this=this;\n    var trs=data.content.map(function(d,i){\n      \n      if(d.right.tip == \"text\"){\n        if(d.status!=\"none\"){\n          if(d.left != \"\"){\n            if(d.left==\"\u5047\u522B\u8BF4\u660E\uFF1A\"){\n              if(d.right.val==\"\"){\n                return(\n                  <div className='line'>\n                  <span className='lineLeft'>{d.left}</span>\n                  <span className='lineRight'>{d.right.val}</span>\n                </div>\n              )\n              }else{\n                return(\n                  <div className='line'>\n                  <span className='lineLeft'>{d.left}</span>\n                  <textarea  className='lineRight textarea' value={d.right.val}></textarea>\n                </div>\n              )\n              }\n            }else{\n              return(\n                  <div className='line'>\n                  <span className='lineLeft'>{d.left}</span>\n                  <span className='lineRight'>{d.right.val}</span>\n                </div>\n              )\n            }\n          }\n        }else{\n          return(<div></div>)\n        }\n      }else if(d.right.tip == \"input\"){\n        if(d.status!=\"none\"){\n          if(d.left == '\u7533\u8BF7\u4EBA'){\n             return(\n              <div className='line'>\n              <span className='lineLeft'>{d.left}</span>\n              <span className='lineBtn'>\n                {d.right.val}\n                <i onClick={_this.onClick} className=\"roleImg\">\n                </i>\n              </span>\n            </div>\n          )\n          }else{\n          return(\n              <div className='line'>\n              <span className='lineLeft'>{d.left} <font style={{'color':'#FF0000'}}>*</font>\uFF1A</span>\n              <span className='lineBtn2'>\n                {d.right.val}\n                <i onClick={_this.onClick} className=\"roleImg\"></i>\n                </span>\n            </div>\n          )\n          }\n        }else{\n          return(<div></div>)\n        }\n      }else if(d.right.tip == \"select\"){\n        if(d.status!=\"none\"){\n          var options=d.right.val.map(function(dd,ii){\n            return(\n              <option value={ii} selected={d.right.sel==dd?\"selected\":\"\"}>{dd}</option>\n            )\n          })\n          if(d.left == '\u516C\u53F8/\u5DE5\u5382\uFF1A'){\n            return(\n            <div className='line'>\n              <span className='lineLeft'>{d.left}</span>\n              <span className='selectedsWid'>\n                <select style={{'margin-bottom':'0','margin-top':'7px'}}  onChange= {_this.selClick.bind(_this)}>{options}</select>\n              </span>\n            </div>\n          )\n          }else{\n          return(\n            <div className='line'>\n              <span className='lineLeft'>{d.left} <font style={{'color':'#FF0000'}}>*</font>\uFF1A</span>\n              <span className='selectedsWid'>\n                <select style={{'margin-bottom':'0','margin-top':'7px'}} data-index={i} onChange = {_this.selectChange.bind(_this)}>{options}</select>\n              </span>\n            </div>\n          )}\n      \t}else{\n          return(<div></div>)\n        }\n      }else if(d.right.tip == \"date\"){\n        if(d.status!=\"none\"){\n          return(\n              <div className='line'>\n              <span className='lineLeft'>{d.left} <font style={{'color':'#FF0000'}}>*</font>\uFF1A</span>\n              <span className='lineDate'><AInput type=\"date\" value={d.right.val} data-index={i} onBlur={_this.dateClick.bind(_this)}/></span>\n            </div>\n          )\n        }else{\n          return(<div></div>)\n        }\n      }else if(d.right.tip == \"span\"){\n        if(d.status!=\"none\"){\n          return(\n              <div className='line'>\n              <span className='lineLeft'>{d.left} <font style={{'color':'#FF0000'}}>*</font>\uFF1A</span>\n              <span className='lineSpan'>\n                <AInput type='text' value={d.right.val}/>\n                <span>\u5C0F\u65F6</span>\n              </span>\n            </div>\n          )\n        }else{\n          return(<div></div>)\n        }\n      }else if(d.right.tip == \"textarea\"){\n        if(d.status!=\"none\"){\n          return(\n          \t<div className='line'>\n            \t<span className='lineLeft'>{d.left} <font style={{'color':'#FF0000'}}>*</font>\uFF1A</span>\n              <span className='lineTextareaRight'>\n                <ATextarea value={d.right.val} onChange={_this.textAreaClick.bind(_this)}/>\n              </span>\n            </div>\n          )\n        }else{\n          return(<div></div>)\n        }\n      // }else if(d.right.tip == \"file\"){\n      //   if(d.status!=\"none\"){\n      //     if(d.right.font!=0){\n      //       for(var i = 0; i < d.right.font; i++){\n      //          <div>\n      //               <span className=\"less\"></span>\n      //             <input type=\"file\"/>\n      //             <input type=\"text\"/>\n      //           </div>\n      //       }\n      //     }\n      //     return(\n      //       <div>\n      //         <div className='line'>\n      //         <div className='lineLeft'>{d.left}</div>\n      //         <div className='lineFile'>\n      //           <span className=\"add\"></span>\n      //           <span>\u540D\u79F0<font>\uFF08\u9644\u4EF6\u5927\u5C0F\u603B\u548C\u4E0D\u80FD\u8D85\u8FC725M\uFF09</font></span>\n      //           <span>\u8BF4\u660E</span>\n      //         </div>\n      //       </div>\n      //       </div>\n      //     )\n      //   }else{\n      //     return(<div></div>)\n      //   }\n      }\n    });\n    return (\n      <div className=\"ysp-dc-content-first\">\n        \n        {trs}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  textAreaClick: function textAreaClick(e) {\n    var target = e.target;\n    var value = target.value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: value,\n        eventType: 'textArea'\n      });\n    }\n  },\n  selectChange: function selectChange(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: { ind: target.getAttribute(\"data-index\"), val: target.value },\n        eventType: \"select\"\n      });\n    }\n  },\n  selClick: function selClick(e) {\n    var target = e.target;\n    var vlue = target.value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: { ind: vlue },\n        eventType: \"selclick\"\n      });\n    }\n  },\n  dateClick: function dateClick(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: { ind: target.getAttribute(\"data-index\"), val: target.value },\n        eventType: \"date\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var trs = data.content.map(function (d, i) {\n\n      if (d.right.tip == \"text\") {\n        if (d.status != \"none\") {\n          if (d.left != \"\") {\n            if (d.left == \"\u5047\u522B\u8BF4\u660E\uFF1A\") {\n              if (d.right.val == \"\") {\n                return React.createElement(\n                  'div',\n                  { className: 'line' },\n                  React.createElement(\n                    'span',\n                    { className: 'lineLeft' },\n                    d.left\n                  ),\n                  React.createElement(\n                    'span',\n                    { className: 'lineRight' },\n                    d.right.val\n                  )\n                );\n              } else {\n                return React.createElement(\n                  'div',\n                  { className: 'line' },\n                  React.createElement(\n                    'span',\n                    { className: 'lineLeft' },\n                    d.left\n                  ),\n                  React.createElement('textarea', { className: 'lineRight textarea', value: d.right.val })\n                );\n              }\n            } else {\n              return React.createElement(\n                'div',\n                { className: 'line' },\n                React.createElement(\n                  'span',\n                  { className: 'lineLeft' },\n                  d.left\n                ),\n                React.createElement(\n                  'span',\n                  { className: 'lineRight' },\n                  d.right.val\n                )\n              );\n            }\n          }\n        } else {\n          return React.createElement('div', null);\n        }\n      } else if (d.right.tip == \"input\") {\n        if (d.status != \"none\") {\n          if (d.left == '\u7533\u8BF7\u4EBA') {\n            return React.createElement(\n              'div',\n              { className: 'line' },\n              React.createElement(\n                'span',\n                { className: 'lineLeft' },\n                d.left\n              ),\n              React.createElement(\n                'span',\n                { className: 'lineBtn' },\n                d.right.val,\n                React.createElement('i', { onClick: _this.onClick, className: 'roleImg' })\n              )\n            );\n          } else {\n            return React.createElement(\n              'div',\n              { className: 'line' },\n              React.createElement(\n                'span',\n                { className: 'lineLeft' },\n                d.left,\n                ' ',\n                React.createElement(\n                  'font',\n                  { style: { 'color': '#FF0000' } },\n                  '*'\n                ),\n                '\\uFF1A'\n              ),\n              React.createElement(\n                'span',\n                { className: 'lineBtn2' },\n                d.right.val,\n                React.createElement('i', { onClick: _this.onClick, className: 'roleImg' })\n              )\n            );\n          }\n        } else {\n          return React.createElement('div', null);\n        }\n      } else if (d.right.tip == \"select\") {\n        if (d.status != \"none\") {\n          var options = d.right.val.map(function (dd, ii) {\n            return React.createElement(\n              'option',\n              { value: ii, selected: d.right.sel == dd ? \"selected\" : \"\" },\n              dd\n            );\n          });\n          if (d.left == '\u516C\u53F8/\u5DE5\u5382\uFF1A') {\n            return React.createElement(\n              'div',\n              { className: 'line' },\n              React.createElement(\n                'span',\n                { className: 'lineLeft' },\n                d.left\n              ),\n              React.createElement(\n                'span',\n                { className: 'selectedsWid' },\n                React.createElement(\n                  'select',\n                  { style: { 'margin-bottom': '0', 'margin-top': '7px' }, onChange: _this.selClick.bind(_this) },\n                  options\n                )\n              )\n            );\n          } else {\n            return React.createElement(\n              'div',\n              { className: 'line' },\n              React.createElement(\n                'span',\n                { className: 'lineLeft' },\n                d.left,\n                ' ',\n                React.createElement(\n                  'font',\n                  { style: { 'color': '#FF0000' } },\n                  '*'\n                ),\n                '\\uFF1A'\n              ),\n              React.createElement(\n                'span',\n                { className: 'selectedsWid' },\n                React.createElement(\n                  'select',\n                  { style: { 'margin-bottom': '0', 'margin-top': '7px' }, 'data-index': i, onChange: _this.selectChange.bind(_this) },\n                  options\n                )\n              )\n            );\n          }\n        } else {\n          return React.createElement('div', null);\n        }\n      } else if (d.right.tip == \"date\") {\n        if (d.status != \"none\") {\n          return React.createElement(\n            'div',\n            { className: 'line' },\n            React.createElement(\n              'span',\n              { className: 'lineLeft' },\n              d.left,\n              ' ',\n              React.createElement(\n                'font',\n                { style: { 'color': '#FF0000' } },\n                '*'\n              ),\n              '\\uFF1A'\n            ),\n            React.createElement(\n              'span',\n              { className: 'lineDate' },\n              React.createElement(AInput, { type: 'date', value: d.right.val, 'data-index': i, onBlur: _this.dateClick.bind(_this) })\n            )\n          );\n        } else {\n          return React.createElement('div', null);\n        }\n      } else if (d.right.tip == \"span\") {\n        if (d.status != \"none\") {\n          return React.createElement(\n            'div',\n            { className: 'line' },\n            React.createElement(\n              'span',\n              { className: 'lineLeft' },\n              d.left,\n              ' ',\n              React.createElement(\n                'font',\n                { style: { 'color': '#FF0000' } },\n                '*'\n              ),\n              '\\uFF1A'\n            ),\n            React.createElement(\n              'span',\n              { className: 'lineSpan' },\n              React.createElement(AInput, { type: 'text', value: d.right.val }),\n              React.createElement(\n                'span',\n                null,\n                '\\u5C0F\\u65F6'\n              )\n            )\n          );\n        } else {\n          return React.createElement('div', null);\n        }\n      } else if (d.right.tip == \"textarea\") {\n        if (d.status != \"none\") {\n          return React.createElement(\n            'div',\n            { className: 'line' },\n            React.createElement(\n              'span',\n              { className: 'lineLeft' },\n              d.left,\n              ' ',\n              React.createElement(\n                'font',\n                { style: { 'color': '#FF0000' } },\n                '*'\n              ),\n              '\\uFF1A'\n            ),\n            React.createElement(\n              'span',\n              { className: 'lineTextareaRight' },\n              React.createElement(ATextarea, { value: d.right.val, onChange: _this.textAreaClick.bind(_this) })\n            )\n          );\n        } else {\n          return React.createElement('div', null);\n        }\n        // }else if(d.right.tip == \"file\"){\n        //   if(d.status!=\"none\"){\n        //     if(d.right.font!=0){\n        //       for(var i = 0; i < d.right.font; i++){\n        //          <div>\n        //               <span className=\"less\"></span>\n        //             <input type=\"file\"/>\n        //             <input type=\"text\"/>\n        //           </div>\n        //       }\n        //     }\n        //     return(\n        //       <div>\n        //         <div className='line'>\n        //         <div className='lineLeft'>{d.left}</div>\n        //         <div className='lineFile'>\n        //           <span className=\"add\"></span>\n        //           <span>\u540D\u79F0<font>\uFF08\u9644\u4EF6\u5927\u5C0F\u603B\u548C\u4E0D\u80FD\u8D85\u8FC725M\uFF09</font></span>\n        //           <span>\u8BF4\u660E</span>\n        //         </div>\n        //       </div>\n        //       </div>\n        //     )\n        //   }else{\n        //     return(<div></div>)\n        //   }\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'ysp-dc-content-first' },\n      trs\n    );\n  }\n});";
    },
    getData_control24_3EXEDT: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl2_EPPILT: function (data, elem) {
      if (data.eventType == "yesClick") {
        elem.querySelector("#submitDisabled").click();
      }if (data.eventType == "noClick") {
        elem.querySelector('input[type="reset"]').click();
      }
    },
    getTemplate_uiControl2_EPPILT: function () {
      var selfTemplate = "module.exports = React.createClass({\n  getInitialState: function() {\n    return { \n      text: this.props.customData && this.props.customData.textArea\n    }; \n  },\n  yesClick:function(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'yesClick'\n      })\n    }\n  },\n  noClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'noClick'\n      })\n    }\n  },\n  radioClick:function(e){\n    var target = e.target;\n    var title = target.dataset.title;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{\n          title: title\n        },\n        eventType:'radio'\n      })\n    }\n    \n  },\n  render: function() {\n    var _this = this;\n    return (\n      <div className=\"ysp-dc-button\">\n        <span onClick={this.yesClick.bind(this)}>\u786E\u5B9A</span>\n        <span onClick={this.noClick.bind(this)}>\u8FD4\u56DE</span>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  getInitialState: function getInitialState() {\n    return {\n      text: this.props.customData && this.props.customData.textArea\n    };\n  },\n  yesClick: function yesClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'yesClick'\n      });\n    }\n  },\n  noClick: function noClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'noClick'\n      });\n    }\n  },\n  radioClick: function radioClick(e) {\n    var target = e.target;\n    var title = target.dataset.title;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: {\n          title: title\n        },\n        eventType: 'radio'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    return React.createElement(\n      'div',\n      { className: 'ysp-dc-button' },\n      React.createElement(\n        'span',\n        { onClick: this.yesClick.bind(this) },\n        '\\u786E\\u5B9A'\n      ),\n      React.createElement(\n        'span',\n        { onClick: this.noClick.bind(this) },\n        '\\u8FD4\\u56DE'\n      )\n    );\n  }\n});";
    }
  }, "sheet");
})(window, ysp);