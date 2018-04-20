
function getTjPrjitem(status) {
	var url = path + "/common/selectdialog/index.jsp?type=getPrjitem&page=getPrjitem.jsp&time=" + new Date();
	var style = "dialogWidth:515px;dialogHeight:555px;status:no;help:no;resizable:no;scroll:no; ";
	var parm = new Array();
	parm.push(new Array("请选择工程"));
	parm.push(new Array());	
	
	var val = window.showModalDialog(url, parm, style);
	
	if (val == null) {
		return false;
	}
	if (val[0] != null) {
		if (val[0] != "" && typeof (val[0]) != "undefined") {		
			//document.getElementById("prjname").innerHTML = val[2];e
			//document.getElementById("sitem").style.display = "";
			if (1 == status) {
				//document.getElementById("sitem2").style.display = "none";
			}
		}
	}
	setTimeout("window.location.reload()", 500);
	return val[2];
}

function getParentPrjitem(){
	return getTjPrjitem(1);
}


function setTjNo(){
	$(".tj-muti-no").each(function(idx,obj){
		$(obj).html(idx);
	});
}

function setChooseData(cdata,currow){
	var resourceid = $("form input[tjid='resourceid']");
	var resid = $("form input[tjid='resid']");
	var resourcecode = $("form input[tjid='resourcecode']");
	var resourcename = $("form input[tjid='resourcename']");
	var resourcetypename = $("form input[tjid='resourcetypename']");
	var appstandard = $("form input[tjid='appstandard']");
	var resourcespec = $("form input[tjid='resourcespec']");
	var unit = $("form input[tjid='unit']");	
	var type=$("form input[tjid='type']");
	var resourcetype=$("form input[tjid='resourcetype']");
	
	var code = $("form input[tjid='resourcecode']");
	var name = $("form input[tjid='resourcename']");
	var unit2 = $("form input[tjid='resourceunit']");
	var unit3 = $("form input[tjid='resourceunit2']");
	
	var str = $("#resids").val();
	var cr = parseInt(currow);
	
	$.each(cdata,function(idx,d){
		str += d[0]+",";
		if(resourceid!= undefined){
			$(resourceid[cr+idx]).val(d[0]);
		}
		if(resid!=undefined){
			$(resid[cr+idx]).val(d[0]);
		}
		if(resourcecode!= undefined){
			$(resourcecode[cr+idx]).val(d[1]);
		}
		if(code!= undefined){
			$(code[cr+idx]).val(d[1]);
		}
		if(resourcename!=undefined){
			$(resourcename[cr+idx]).val(d[4]);
		}
		if(name!=undefined){
			$(name[cr+idx]).val(d[4]);
		}
		if(resourcetypename!=undefined){
			$(resourcetypename[cr+idx]).val(d[6]);
		}
		
		if(type!=undefined){
			$(type[cr+idx]).val(d[6]);
		}
		if(resourcespec!=undefined){
			$(resourcespec[cr+idx]).val(d[3]);
		}
		if(unit!=undefined){
			$(unit[cr+idx]).val(d[2]);
		}
		if(unit2!=undefined){
			$(unit[cr+idx]).val(d[2]);
		}
		if(unit3!=undefined){
			$(unit3[cr+idx]).val(d[2]);
		}
	});
	$("#resids").val(str);
}
function setChooseDataForWbs(cdata,currow){
	
	var resid = $("form input[tjid='resid']");
	var resourcecode = $("form input[tjid='resourcecode']");
	var name = $("form input[tjid='resourcename']");
	var unit3 = $("form input[tjid='resourceunit2']");
	var resourcespec = $("form input[tjid='resourcespec']");
	
	var cr = parseInt(currow);
	
	$.each(cdata,function(idx,d){
		if(resid!=undefined){
			$(resid[cr+idx]).val(d[0]);
		}
		if(resourcecode!= undefined){
			$(resourcecode[cr+idx]).val(d[1]);
		}
		if(name!=undefined){
			$(name[cr+idx]).val(d[4]);
		}
		if(resourcespec!=undefined){
			$(resourcespec[cr+idx]).val(d[3]);
		}
		if(unit3!=undefined){
			$(unit3[cr+idx]).val(d[2]);
		}
	});
}
function checkChoosedforWbs(retpara){
	var ret = true;
	var resid = $("form input[tjid='resid']");
	
	var idstr = "";
	$.each(resid,function(idx,obj){
			idstr += $(obj).val() + ",";
	});
	var msgString = "";
	$.each(retpara,function(i,d){
		if(idstr.indexOf(d[0]+"")>=0){
			msgString+="'"+d[1]+" "+d[4]+"' ,";
		}
	});
	if(msgString!=""){
		ret=false;
		alert(msgString+"已选请勿重复选择!");
	}
	return ret;
}
function gettjTypeResourceForDesignbillForWbs(rownum,imgobj){
	setTjNo();
	var url = path + "/common/selectdialog/index.jsp?type=gettestResource&page=gettjResourceFordesignbill.jsp&time=" + escape(new Date());
	var style = "dialogWidth:850px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push(new Array("????????????"));
	parm.callback = function(val) {
		if (val == null) {
		return false;
	}
	
	if(!checkChoosedforWbs(val)){
		return false;
	};
	
	if(val && val.length>0){
		if(val.length == 1){
			setChooseDataForWbs(val,rownum);
		}else{
			var blankrow = 0;
			
			$("form input[tjid='resourcename']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});

			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;
				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}
				setTjNo();
			}
			
			setChooseDataForWbs(val,rownum);
		}
	}else{
		return false;
	}
	return true;
	}
	var val = window.showModalDialog(url, parm, style);
	
}

function gettjTypeResourceForDesignbill1(rownum,imgobj){
	var str = $("#resids").val();
	setTjNo();
	rownum = $(imgobj).next().html();
	
	var url = path + "/common/selectdialog/index.jsp?type=gettestResource&page=gettjResourceFordesignbill.jsp&time=" + escape(new Date());
	var style = "dialogWidth:850px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push([str]);
	var val = window.showModalDialog(url, parm, style);
	
	for(var idx in val){
		
		if(str.indexOf(val[idx][0]) >= 0){
			alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
			return false;
		}
	}
	if(val && val.length>0){
		if(val.length == 1){
			setChooseData(val,rownum);
		}else{
			var blankrow = 0;
			
			$("form input[tjid='resourcename']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});

			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;
				
				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}

				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}
				
				setTjNo();
			}
			setChooseData(val,rownum);
		}
	}else{
		return false;
	}
}

function getPrjsubcontractorysmUnchecktj(rownum,imgobj) {
	var str = $("#resids").val();
	setTjNo();
	rownum = $(imgobj).next().html();
	
	var url = path + "/common/selectdialog/index.jsp?type=getPrjsubcontractorysm&page=gettjPrjsubcontractorysmUncheck.jsp&time=" + escape(new Date());
	var style = "dialogWidth:1040px;dialogHeight:580px;status:no;help:no;resizable:no;scroll:no; ";
	var parm = new Array();
	parm.push([str]);
	//parm.push(new Array("???????\u03bb!"));
	//parm.push(new Array(document.all(departid).value, document.all(subcontractorname).value));
	var val = window.showModalDialog(url, parm, style);
	
	for(var idx in val){
		if(str.indexOf(val[idx][0]) >= 0){
			alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
			return false;
		}
	}
	if(val && val.length>0){
		if(val.length == 1){
			setChooseDataSubcontractorysmUnchecktj(val,rownum);
		}else{
			var blankrow = 0;
			
			$("form input[tjid='subdepid']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});

			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;
				
				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}

				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}
				
				setTjNo();
			}
			setChooseDataSubcontractorysmUnchecktj(val,rownum);
		}
	}else{
		return false;
	}
	/*if (val == null) {
		return false;
	}
	if (val[0] != null) {
		if (document.all(departid) != null) {
			document.all(departid).value = val[0][0];
		}
		if (document.all(subcontractorname) != null) {
			document.all(subcontractorname).value = val[0][1];
		}
		if (document.all(submode) != null) {
			document.all(submode).value = val[0][2];
		}
		return true;
	}
	return false;*/
}

function setChooseDataSubcontractorysmUnchecktj(cdata,currow){
	var subdepid = $("form input[tjid='subdepid']");
	var subdeptname = $("form input[tjid='subdeptname']");
	var str = $("#resids").val();
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
		str += d[0]+",";
		if(subdepid!=undefined){
			$(subdepid[cr+idx]).val(d[0]);
		}
		if(subdeptname!=undefined){
			$(subdeptname[cr+idx]).val(d[1]);
		}
	});
	$("#resids").val(str);
}

function gettestMaterialStockInStoretj(rownum,imgobj) {
	var str = $("#resids").val();
	setTjNo();
	rownum = $(imgobj).next().html();
	var url = path + "/common/selectdialog/index.jsp?type=gettestmaterialstockinstore&page=gettjtestmaterialstockinstore.jsp&time=" + escape(new Date());
	var style = "dialogWidth:980px;dialogHeight:590px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push([str]);
	var val = window.showModalDialog(url, parm, style);
	
	for(var idx in val){
		
		if(str.indexOf(val[idx][0]) >= 0){
			alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
			return false;
		}
	}
	if(val && val.length>0){
		if(val.length == 1){
			setChooseDataForMaterialStockInStore(val,rownum);
		}else{
			var blankrow = 0;
			
			$("form input[tjid='instorename']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});

			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;
				
				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}

				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}
				
				setTjNo();
			}
			
			setChooseDataForMaterialStockInStore(val,rownum);
		}
	}else{
		return false;
	}
}

function setChooseDataForMaterialStockInStore(cdata,currow){
	var instorecode = $("form input[tjid='instorecode']");
	var instorename = $("form input[tjid='instorename']");
	var str = $("#resids").val();
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
		str += d[0]+",";
		if(instorecode!=undefined){
			$(instorecode[cr+idx]).val(d[0]);
		}
		if(instorename!=undefined){
			$(instorename[cr+idx]).val(d[1]);
		}
	});
	$("#resids").val(str);
}

//外购统购入库调差材料复选bryan-2012-08-03
function getResourcesByCheckMult(checkid,rownum,imgobj){
	
	var check = document.all(checkid).value;//合同id
	if (check == "" || check == null) {
		//请选择合同
		alert("\u8bf7\u9009\u62e9\u6750\u6599\u5408\u540c\u7f16\u7801!");
		return false;
	}
	
	setTjNo();
	var str = $("#resids").val();
	rownum = $(imgobj).next().html();
	var url = path + "/common/selectdialog/index.jsp?type=getResourcesByCheck&page=getResourcesByCheckMult.jsp&checkid=" + check + "&time=" + escape(new Date());
	var style = "dialogWidth:850px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push([str]);
	
	var val = window.showModalDialog(url, parm, style);
	if(val==null&&val){return false;}
	for(var idx in val){
		if(str.indexOf(val[idx][0]+"@"+val[idx][6]) >= 0){
			//材料只能选择一次
			alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
			return false;
		}
	}
	
	if(val && val.length>0){
		if(val.length == 1){
			setChooseResourcesByCheckData2(val,rownum);
		}else{
			var blankrow = 0;
			$("form input[tjid='multname']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});

			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;
				

				var trobj = imgobj.parentNode;
			//	alert(trobj);
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				

				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}
				
				setTjNo();
			}
			setChooseResourcesByCheckData2(val,rownum);
		}
	}else{
		return false;
	}
}



function setChooseResourcesByCheckData2(cdata,currow){
	
	var multresid = $("form input[tjid='multresid']");
	var multname = $("form input[tjid='multname']");
	var multcode = $("form input[tjid='multcode']");
	var multspec = $("form input[tjid='multspec']");
	var multunit = $("form input[tjid='multunit']");
	
	var multtype = $("form input[tjid='multtype']");
	var multprice = $("form input[tjid='multprice']");
	var multcount = $("form input[tjid='multcount']");
	
	var multcheckid = $("form input[tjid='multcheckid']");
	var multcheckname = $("form input[tjid='multcheckname']");
	//childrenvalue[id] = [ id,name,code,spec,unit,type,avgprice,counts,checkid,checkname ]
	var str = $("#resids").val();
	var cr = parseInt(currow);
	
	$.each(cdata,function(idx,d){
		str += ","+d[0]+"@"+d[6];
		if(multresid!= undefined){
			$(multresid[cr+idx]).val(d[0]);
		}
		if(multname!= undefined){
			$(multname[cr+idx]).val(d[1]);
		}
		if(multcode!= undefined){
			$(multcode[cr+idx]).val(d[2]);
		}
		if(multspec!= undefined){
			$(multspec[cr+idx]).val(d[3]);
		}
		if(multunit!= undefined){
			$(multunit[cr+idx]).val(d[4]);
		}
		if(multtype!= undefined){
			$(multtype[cr+idx]).val(d[5]);
		}
		if(multprice!= undefined){
			$(multprice[cr+idx]).val(d[6]);
		}
		if(multcount!= undefined){
			$(multcount[cr+idx]).val(d[7]);
		}
		if(multcheckid!= undefined){
			$(multcheckid[cr+idx]).val(d[8]);
		}
		if(multcheckname!= undefined){
			$(multcheckname[cr+idx]).val(d[9]);
		}
	});
	
	$("#resids").val(str);
}
/*
 * 超设计用量多选材料
 * */
function setChooseData1(cdata,currow){

	var partid = $("form input[tjid='partid']");
	var partname = $("form input[tjid='partname']");
	var resid = $("form input[tjid='resid']");
	var name = $("form input[tjid='resourcename']");
	var code = $("form input[tjid='code']");
	var formnum = $("form input[tjid='formnum']");
	var bidprice = $("form input[tjid='bidprice']");
	var resourcespec=$("form input[tjid='resourcespec']");
	
	var str = $("#resids").val();
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
		str += d[0]+",";
		if(resid!=undefined)
		{
			$(resid[cr+idx]).val(d[3]);
		}
		if(code!=undefined)
		{
			$(code[cr+idx]).val(d[5]);
		}
		if(partname!=undefined)
		{
			$(partname[cr+idx]).val(d[2]);
		}
		if(name!=undefined)
		{
			$(name[cr+idx]).val(d[4]);
		}
		if(resourcespec!=undefined)
		{
			$(resourcespec[cr+idx]).val(d[8]);
		}
		if(formnum!=undefined)
		{
			$(formnum[cr+idx]).val(d[6]);
		}
		if(bidprice!=undefined)
		{
			$(bidprice[cr+idx]).val(d[7]);
		}
	});
	$("#resids").val(str);
}
function getDesignnumOver1(rownum,imgobj){
	var str = $("#resids").val();
	setTjNo();

	rownum = $(imgobj).next().html();
	
	var url = path + "/common/selectdialog/index.jsp?type=getDesignnumOver&page=getDesignnumOver.jsp&time=" + escape(new Date());
	var style = "dialogWidth:860px;dialogHeight:550px;status:no;help:no;resizable:yes;scroll:no; ";
	var parm = new Array();
	parm.push([str]);
  debugger;
	var val = window.showModalDialog(url, parm, style);
	
	if(val==null)
	{
		return false;
	}
	if((str!=undefined)&&(str!=null)){
		for(var idx in val){
			if(str.indexOf(val[idx][0]) >= 0){
				alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
				return false;
			}
		}
	}
	//alert(rownum+"----"+val);
	if(val && val.length>0){
		if(val.length == 1){
			setChooseData1(val,rownum);
		}else{
			var blankrow = 0;
			
			$("form input[tjid='resourcename']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;
				

				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				

				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}
				
				setTjNo();
			}
			
			setChooseData1(val,rownum);
		}
	}else{
		return false;
	}
}

/*
*得到对应材料合同中的租赁合同资源
*/
function setChooseResourcesByContract(cdata,currow){
	var materialcode = $("form input[tjid='materialcode']");
	var materialname = $("form input[tjid='materialname']");
	var materialspec = $("form input[tjid='materialspec']");
	var materialunit = $("form input[tjid='materialunit']");
	var materialtype = $("form input[tjid='materialtype']");
	var materialprice = $("form input[tjid='materialprice']");
	
	var materialresid = $("form input[tjid='materialresid']");
	var contractnum = $("form input[tjid='contractnum']");
	
	var str = $("#resids").val();
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
		str += d[0]+",";
		$(materialresid[cr+idx]).val(d[0]);
		$(materialcode[cr+idx]).val(d[2]);
		$(materialname[cr+idx]).val(d[1]);
		$(materialspec[cr+idx]).val(d[3]);
		$(materialunit[cr+idx]).val(d[4]);
		$(materialtype[cr+idx]).val(d[5]);
		$(materialprice[cr+idx]).val(d[6]);
		$(contractnum[cr+idx]).val(d[7]);
	});
	$("#resids").val(str);
}

function singlecommonysmMult2(parm,rownum,imgobj) {
	
	var realpath;
	var balancemonth = parm;
	if (balancemonth != null && balancemonth.indexOf("\u5e74") != -1) {
		balancemonth = balancemonth.replace("\u5e74", "-");
	}
	if (balancemonth != null && balancemonth.indexOf("\u6708") != -1) {
		balancemonth = balancemonth.replace("\u6708", "-");
	}
	realpath = "/lqpm/Conbilldetail_singlelistMult.action?balancemonth=" + balancemonth;
	
	var url = path + "/erp/lqpm/contract/singlecommonysmMult2.jsp?realpath=" + realpath;
	var style = "dialogWidth:660px;dialogHeight:570px;status:no;help:no;resizable:no;scroll:auto;";
	var parm = new Array();
	parm.push(new Array("????????????"));
  debugger
	var val = window.showModalDialog(url, parm, style);
	if (val == null) {
		return false;
	}
	//不能重复选择合同清单
	if(!checkChoosedforSinglecommonysmMult(val)){
		return false;
	};
	
	if(val && val.length>0){
		if(val.length == 1){
			setSinglecommonysmMult2(val,rownum);
		}else{
			var blankrow = 0;			
			$("form input[tjid='multCode']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;	
				
				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}			
				setTjNo();
			}	
			setSinglecommonysmMult2(val,rownum);
		}
	}else{
		return false;
	}
}

function setSinglecommonysmMult2(cdata,currow){
	
	var multId = $("form input[tjid='multId']");
	var multCode = $("form input[tjid='multCode']");
	var multName = $("form input[tjid='multName']");
	var multMeasureid = $("form input[tjid='multMeasureid']");
	var multPrice= $("form input[tjid='multPrice']");
	var multQuantity2= $("form input[tjid='multQuantity2']");
	var multynum = $("form input[tjid='multYnum']");
	var multyamount = $("form input[tjid='multYamount']");
	var multtnum = $("form input[tjid='multTnum']");
	var multtamount = $("form input[tjid='multTamount']");
	
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
		
		if(multId!=undefined){
			$(multId[cr+idx]).val(d[0]);
		}
		if(multCode!=undefined){
			$(multCode[cr+idx]).val(d[1]);
		}
		if(multName!=undefined){
			$(multName[cr+idx]).val(d[2]);
		}
		if(multMeasureid!=undefined){
			$(multMeasureid[cr+idx]).val(d[3]);
		}
		
		if(multPrice!=undefined){
			$(multPrice[cr+idx]).val(d[4]);
		}
		if(multQuantity2!=undefined){
			$(multQuantity2[cr+idx]).val(d[5]);
		}
		if(multynum!=undefined){
			$(multynum[cr+idx]).val(d[6]);
		}
		if(multyamount!=undefined){
			$(multyamount[cr+idx]).val(d[7]);
		}
		if(multtnum!=undefined){
			$(multtnum[cr+idx]).val(d[8]);
		}
		if(multtamount!=undefined){
			$(multtamount[cr+idx]).val(d[9]);
		}
	});
}



function singlecommonysmMult(parm,rownum,imgobj) {
	var realpath;
	var balancemonth = parm;
	if (balancemonth != null && balancemonth.indexOf("\u5e74") != -1) {
		balancemonth = balancemonth.replace("\u5e74", "-");
	}
	if (balancemonth != null && balancemonth.indexOf("\u6708") != -1) {
		balancemonth = balancemonth.replace("\u6708", "-");
	}
	realpath = "/pm/Subconbill_singlelistMult.action?balancemonth=" + balancemonth;
	
	var url = path + "/erp/lqpm/contract/singlecommonysmMult.jsp?subcontractid="+document.all("subcontractid").value+"&realpath=" + realpath;
	var style = "dialogWidth:660px;dialogHeight:570px;status:no;help:no;resizable:no;scroll:auto;";
	var parm = new Array();
	parm.push(new Array("????????????"));
  debugger;
  parm = [];
  parm.callback=function(val){
    if (val == null) {
		return false;
	}
	//不能重复选择合同清单
	if(!checkChoosedforSinglecommonysmMult(val)){
		return false;
	};
	
	if(val && val.length>0){
    debugger;
		if(val.length == 1){
			setSinglecommonysmMult(val,rownum);
		}else{
			var blankrow = 0;			
			$("form input[tjid='multCode']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;	
				
				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}			
				setTjNo();
			}	
			setSinglecommonysmMult(val,rownum);
		}
	}else{
		return false;
	}
  }
	var val = window.showModalDialog(url, parm, style);
}
function setSinglecommonysmMult(cdata,currow){
	
	var multId = $("form input[tjid='multId']");
	var multCode = $("form input[tjid='multCode']");
	var multName = $("form input[tjid='multName']");
	var multMeasureid = $("form input[tjid='multMeasureid']");
	var multPrice= $("form input[tjid='multPrice']");
	var multQuantity= $("form input[tjid='multQuantity']");
	var multAmount= $("form input[tjid='multAmount']");
	var multCheckobjectid = $("form input[tjid='multCheckobjectid']");
	var multCollectobjectid = $("form input[tjid='multCollectobjectid']");
	var multCheckobjectname = $("form input[tjid='multCheckobjectname']");
	var multCollectobjectname= $("form input[tjid='multCollectobjectname']");
	
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
		if(multId!=undefined){
			$(multId[cr+idx]).val(d[0]);
		}
		if(multCode!=undefined){
			$(multCode[cr+idx]).val(d[1]);
		}
		if(multName!=undefined){
			$(multName[cr+idx]).val(d[2]);
		}
		if(multMeasureid!=undefined){
			$(multMeasureid[cr+idx]).val(d[3]);
		}
		if(multPrice!=undefined){
			$(multPrice[cr+idx]).val(d[4]);
		}
		if(multQuantity!=undefined){
			$(multQuantity[cr+idx]).val(d[5]);
		}
		if(multAmount!=undefined){
			$(multAmount[cr+idx]).val(d[6]);
		}
		if(multCheckobjectid!=undefined){
			$(multCheckobjectid[cr+idx]).val(d[7]);
		}
		if(multCollectobjectid!=undefined){
			$(multCollectobjectid[cr+idx]).val(d[8]);
		}
		if(multCollectobjectname!=undefined){
			$(multCollectobjectname[cr+idx]).val(d[9]);
		}
		if(multCheckobjectname!=undefined){
			$(multCheckobjectname[cr+idx]).val(d[10]);
		}
	});
}
//判断重复
function checkChoosedforSinglecommonysmMult(retpara){
	var ret = true;
	var resid = $("form input[tjid='multId']");
	
	var idstr = "";
	$.each(resid,function(idx,obj){
			idstr += $(obj).val() + ",";
	});
	var msgString = "";
	$.each(retpara,function(i,d){
		if(idstr.indexOf(d[0]+"")>=0){
			msgString+="'"+d[1]+" "+d[2]+"' ,";
		}
	});
	if(msgString!=""){
		ret=false;
		alert(msgString+"已选请勿重复选择!");
	}
	return ret;
}
//人力资源-薪酬管理-人员帐套设置-ZSJ-2013.05.21
function getLqhrEmployeeSalaryMult(rownum,imgobj,headerid) {
	var str = $("#resids").val();
	var tempid = document.all(headerid).value;
	setTjNo();
	rownum = $(imgobj).next().html()-1;
	var url = path + "/common/selectdialog/index.jsp?tempid="+tempid+"&type=getEmployeeForEmpmoveSalary&page=getEmployeeForEmpmoveSalaryMult.jsp&back=1&time=" + escape(new Date());
	var style = "dialogWidth:1025px;dialogHeight:620px;status:no;help:no;resizable:no;scroll:no; ";
	var parm = new Array();
	parm.push([str]);
	var val = window.showModalDialog(url, parm, style);
	if (val == null) {
		return false;
	}
	if(!checkChoosedforGetLqhrEmployeeSalaryMult(val)){
		return false;
	};
	if(val && val.length>0){
		if(val.length == 1){
			setLqhrEmployeeSalaryMult(val,rownum);
		}else{
			var blankrow = 0;			
			$("form input[tjid='MultEmpcode']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;	
				
				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}			
				setTjNo();
			}	
			setLqhrEmployeeSalaryMult(val,rownum);
		}
	}else{
		return false;
	}
	//写rowid
	generateRowidAuto();
}
function setLqhrEmployeeSalaryMult(cdata,currow){
    var MultEmpid = $("form input[tjid='MultEmpid']");
	var MultEmpcode = $("form input[tjid='MultEmpcode']");
	var MultEmpname = $("form input[tjid='MultEmpname']");
	var MultEmpdeprt = $("form input[tjid='MultEmpdeprt']");
	var MultOrgid= $("form input[tjid='MultOrgid']");
	var str = $("#resids").val();
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
	    if(MultEmpid!=undefined){
			$(MultEmpid[cr+idx]).val(d[0]);
		}
		if(MultEmpcode!=undefined){
			$(MultEmpcode[cr+idx]).val(d[1]);
		}
		if(MultEmpname!=undefined){
			$(MultEmpname[cr+idx]).val(d[2]);
		}
		if(MultEmpdeprt!=undefined){
			$(MultEmpdeprt[cr+idx]).val(d[3]);
		}
		if(MultOrgid!=undefined){
			$(MultOrgid[cr+idx]).val(d[4]);
		}
	});
	$("#resids").val(str);
}
function checkChoosedforGetLqhrEmployeeSalaryMult(retpara){
    var ret = true;
	var resid = $("form input[tjid='MultEmpid']");
	
	var idstr = "";
	$.each(resid,function(idx,obj){
			idstr += $(obj).val() + ",";
	});
	var msgString = "";
	$.each(retpara,function(i,d){
		if(idstr.indexOf(d[0]+"")>=0){
			msgString+="'"+d[1]+" "+d[2]+"' ,";
		}
	});
	if(msgString!=""){
		ret=false;
		alert(msgString+"已选请勿重复选择!");
	}
	return ret;
}
function getMultResourcesByContract(contractid,rownum,imgobj) {
	var contract = document.all(contractid).value;
	if (contract == null || contract == "") {
		alert("\u8bf7\u8f93\u5165\u79df\u8d41\u5408\u540c!");
		return false;
	}
	
	setTjNo();
	var str = $("#resids").val();
	
	rownum = $(imgobj).next().html();
	
	var url = path + "/common/selectdialog/index.jsp?type=getResourcesByContract&page=getResourcesByContractMult.jsp&contractid=" + contract + "&time=" + escape(new Date());
	var style = "dialogWidth:850px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push([str]);
	var val = window.showModalDialog(url, parm, style);
	/*for(var idx in val){
		if(str.indexOf(val[idx][0]) >= 0){
			alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
			return false;
		}
	}*/
	//alert(rownum+"----"+val);
	if(val && val.length>0){
		if(val.length == 1){
			setChooseResourcesByContract(val,rownum);
		}else{
			var blankrow = 0;
			
			$("form input[tjid='materialcode']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});

			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;
				

				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				

				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}
				
				setTjNo();
			}
			
			setChooseResourcesByContract(val,rownum);
		}
	}else{
		return false;
	}
}

/*
*得到对应周转材进场的资源
*/
function setChooseResourcesByLendTurnIn(cdata,currow){
	var materialcode = $("form input[tjid='materialcode']");
	var materialname = $("form input[tjid='materialname']");
	var materialspec = $("form input[tjid='materialspec']");
	var materialunit = $("form input[tjid='materialunit']");
	var materialtype = $("form input[tjid='materialtype']");
	var materialprice = $("form input[tjid='materialprice']");
	var materialresid = $("form input[tjid='materialresid']");
	var intotalnum = $("form input[tjid='intotalnum']");
	var countsnow = $("form input[tjid='countsnow']");
	
	var str = $("#resids").val();
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){

		//alert(d);
	
		str += d[0]+",";//[ id,name,code,spec,unit,type,intotalnum,countsnow];

		$(materialresid[cr+idx]).val(d[0]);
		$(materialcode[cr+idx]).val(d[2]);
		$(materialname[cr+idx]).val(d[1]);
		$(materialspec[cr+idx]).val(d[3]);
		$(materialunit[cr+idx]).val(d[4]);
		$(materialtype[cr+idx]).val(d[5]);
		$(materialprice[cr+idx]).val(d[6]);
		$(intotalnum[cr+idx]).val(d[7]);
		$(countsnow[cr+idx]).val(d[8]);
	});
	$("#resids").val(str);
}
function getResourceByLendTurnInMutl(rownum,imgobj) {
	setTjNo();
	var str = $("#resids").val();
	rownum = $(imgobj).next().html();
	
	var url = path + "/common/selectdialog/index.jsp?type=getResourceByLendTurnIn&page=getResourceByLendTurnIn.jsp&time=" + escape(new Date());
	var style = "dialogWidth:850px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push([str]);
	var val = window.showModalDialog(url, parm, style);

	if(val==null){return false;}
	if (document.all["resids"] != undefined) {
		var str = document.all["resids"].value;
		var strArray = new Array();
		if (str.indexOf(",") != -1) {
			strArray = str.split(",");
		}
		/*var i = 0;
			while (i <= strArray.length) {
				if (strArray[i] == val[0][0]) {
					alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
					return false;
				}
				i++;
			}*/
		
		document.all["resids"].value = document.all["resids"].value + "," + val[0][0];
		
	}
	if(val && val.length>0){
		if(val.length == 1){
			setChooseResourcesByLendTurnIn(val,rownum);
		}else{
			var blankrow = 0;
			
			$("form input[tjid='mcode']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});

			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;
				

				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				

				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}
				
				setTjNo();
			}
			
			setChooseResourcesByLendTurnIn(val,rownum);
		}
	}else{
		return false;
	}
	
	
	/*for(var idx in val){
		if(str.indexOf(val[idx][0]) >= 0){
			alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
			return false;
		}
	}
	if(val && val.length>0){
		if(val.length == 1){
			setChooseData(val,rownum);
		}else{
			var blankrow = 0;			
			$("form input[tjid='materialcode']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;		
				var trobj = imgobj.parentNode.parentNode;
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}			
				setTjNo();
			}	
			setChooseData(val,rownum);
		}
	}else{
		return false;
	}
	*/
}

//协同门户-个人自助-借用护照-代借护照cal2013-11-26
function getempassportregisterMutl(rownum,imgobj){
	setTjNo();
	var str = $("#resids").val();
	rownum = $(imgobj).next().html();
	
	var url = path + "/common/selectdialog/index.jsp?type=getempassportregister&page=getempassportregister.jsp&time=" + escape(new Date());
	var style = "dialogWidth:860px;dialogHeight:562px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push([str]);
	var val = window.showModalDialog(url, parm, style);

	if(val==null){return false;}
	if (document.all["resids"] != undefined) {
		var str = document.all["resids"].value;
		var strArray = new Array();
		if (str.indexOf(",") != -1) {
			strArray = str.split(",");
		}
		
		document.all["resids"].value = document.all["resids"].value + "," + val[0][0];
		
	}
	if(val && val.length>0){
		if(val.length == 1){
			setChoosegetempassportregister(val,rownum);
		}else{
			var blankrow = 0;
			
			$("form input[tjid='name']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});

			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;
				

				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				

				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}
				
				setTjNo();
			}
			
			setChoosegetempassportregister(val,rownum);
		}
	}else{
		return false;
	}
}

function setChoosegetempassportregister(cdata,currow){
	var id = $("form input[tjid='id']");
	var orgname = $("form input[tjid='orgname']");
	var name = $("form input[tjid='name']");
	var porttypename = $("form input[tjid='porttypename']");
	var code = $("form input[tjid='code']");
	var signdate = $("form input[tjid='signdate']");
	var limits = $("form input[tjid='limits']");
	
	var str = $("#resids").val();
	var cr = parseInt(currow);
	
	$.each(cdata,function(idx,d){
		str += ","+d[0];
		if(id!= undefined){
			$(id[cr+idx]).val(d[0]);
		}
		if(orgname!= undefined){
			$(orgname[cr+idx]).val(d[1]);
		}
		if(name!= undefined){
			$(name[cr+idx]).val(d[2]);
		}
		if(porttypename!= undefined){
			$(porttypename[cr+idx]).val(d[3]);
		}
		if(code!= undefined){
			$(code[cr+idx]).val(d[4]);
		}
		if(signdate!= undefined){
			$(signdate[cr+idx]).val(d[5]);
		}
		if(limits!= undefined){
			$(limits[cr+idx]).val(d[6]);
		}
	});
	$("#resids").val(str);
}

//甲供入库调差材料复选bryan-2012-08-06
function getTurnResourcesByCheckMult(checkid,rownum,imgobj){
	var check = document.all(checkid).value;//合同id
	if (check == "" || check == null) {
		//请选择合同
		alert("\u8bf7\u9009\u62e9\u6750\u6599\u5408\u540c\u7f16\u7801!");
		return false;
	}
	
	setTjNo();
	var str = $("#resids").val();
	
	
	rownum = $(imgobj).next().html();
	
	var url = path + "/common/selectdialog/index.jsp?type=getResourcesByCheck&page=getResourcesByCheckMult.jsp&checkid=" + check + "&time=" + escape(new Date());
	var style = "dialogWidth:850px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push([str]);
	
	var val = window.showModalDialog(url, parm, style);
	if(val==null&&val){return false;}
	for(var idx in val){
		if(str.indexOf(val[idx][0]+"@"+val[idx][6]) >= 0){
			//材料只能选择一次
			alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
			return false;
		}
	}
	if(val && val.length>0){
		if(val.length == 1){
			setChooseResourcesByCheckData2(val,rownum);
		}else{
			var blankrow = 0;
			
			$("form input[tjid='multname']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});

			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;
				

				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				

				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}
				
				setTjNo();
			}
			
			setChooseResourcesByCheckData2(val,rownum);
		}
	}else{
		return false;
	}
}

/*
*工程领用出库材料复选-bryan
*   
*/
function getResourceAndMoveoutInfoMult(outdate,deportid,rownum,imgobj){
	var checkdate = document.all(outdate).value;
 	//alert(checkdate);
	if (checkdate == "") {
		alert("\u8bf7\u5148\u9009\u62e9\u8c03\u62e8\u6216\u53d1\u6599\u65e5\u671f\uff01");
		return false;
	}
	setTjNo();
	var str = $("#resids").val();
	
	rownum = $(imgobj).next().html();
	
	//不允许一条资源被多次加入
	var deport = document.all(deportid).value;
	var url = path + "/common/selectdialog/index.jsp?type=getResourceAndMoveoutInfo&page=getResourceAndMoveoutInfoMult.jsp&deportid=" + deport + "&outdate=" + checkdate + "&time=" + escape(new Date());
	var style = "dialogWidth:850px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push([str]);
	
	var val = window.showModalDialog(url, parm, style);
	if(val==null&&val){return false;}
	for(var idx in val){
		if(str.indexOf(val[idx][0]) >= 0){
			//材料只能选择一次
			alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
			return false;
		}
	}
	if(val && val.length>0){
		if(val.length == 1){
			setResourceAndMoveoutInfoData(val,rownum);
		}else{
			var blankrow = 0;
			
			$("form input[tjid='multname']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});

			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;
				

				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				

				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}
				
				setTjNo();
			}
			
			setResourceAndMoveoutInfoData(val,rownum);
		}
	}else{
		return false;
	}
}
/*
*工程领用出库材料复选-bryan-不检查重复项
*   
*/
function getResourceAndMoveoutInfoMultUncheck(outdate,deportid,rownum,imgobj){
	var checkdate = document.all(outdate).value;
 	//alert(checkdate);
	if (checkdate == "") {
		alert("\u8bf7\u5148\u9009\u62e9\u8c03\u62e8\u6216\u53d1\u6599\u65e5\u671f\uff01");
		return false;
	}
	setTjNo();
	
	rownum = $(imgobj).next().html();
	
	var deport = document.all(deportid).value;
	var url = path + "/common/selectdialog/index.jsp?type=getResourceAndMoveoutInfo&page=getResourceAndMoveoutInfoMult.jsp&deportid=" + deport + "&outdate=" + checkdate + "&time=" + escape(new Date());
	var style = "dialogWidth:850px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	//parm.push([str]);
	
	var val = window.showModalDialog(url, parm, style);
	if(val==null&&val){return false;}
	if(val && val.length>0){
		if(val.length == 1){
			setResourceAndMoveoutInfoUnckeckData(val,rownum);
		}else{
			var blankrow = 0;
			
			$("form input[tjid='multname']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});

			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;
				

				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				

				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}
				
				setTjNo();
			}
			
			setResourceAndMoveoutInfoUnckeckData(val,rownum);
		}
	}else{
		return false;
	}
}

function setResourceAndMoveoutInfoData(cdata,currow){
	
	var multresid = $("form input[tjid='multresid']");
	var multname = $("form input[tjid='multname']");
	var multcode = $("form input[tjid='multcode']");
	var multspec = $("form input[tjid='multspec']");
	var multunit = $("form input[tjid='multunit']");
	
	var multtype = $("form input[tjid='multtype']");
	var multprice = $("form input[tjid='multprice']");
	var multcount = $("form input[tjid='multcount']");
	
	var multdetailid = $("form input[tjid='multdetailid']");

	var str = $("#resids").val();
	var cr = parseInt(currow);
	
	
	$.each(cdata,function(idx,d){
		str += ","+d[0];
		if(multresid!= undefined){
			$(multresid[cr+idx]).val(d[0]);
		}
		if(multname!= undefined){
			$(multname[cr+idx]).val(d[1]);
		}
		if(multcode!= undefined){
			$(multcode[cr+idx]).val(d[2]);
		}
		if(multspec!= undefined){
			$(multspec[cr+idx]).val(d[3]);
		}
		if(multunit!= undefined){
			$(multunit[cr+idx]).val(d[4]);
		}
		if(multtype!= undefined){
			$(multtype[cr+idx]).val(d[5]);
		}
		if(multprice!= undefined){
			$(multprice[cr+idx]).val(d[6]);
		}
		if(multcount!= undefined){
			$(multcount[cr+idx]).val(d[7]);
		}
		if(multdetailid!= undefined){
			$(multdetailid[cr+idx]).val(d[9]);
		}
	});
	
	$("#resids").val(str);
}

function setResourceAndMoveoutInfoUnckeckData(cdata,currow){
	
	var multresid = $("form input[tjid='multresid']");
	var multname = $("form input[tjid='multname']");
	var multcode = $("form input[tjid='multcode']");
	var multspec = $("form input[tjid='multspec']");
	var multunit = $("form input[tjid='multunit']");
	
	var multtype = $("form input[tjid='multtype']");
	var multprice = $("form input[tjid='multprice']");
	var multcount = $("form input[tjid='multcount']");
	
	var multdetailid = $("form input[tjid='multdetailid']");

	//var str = $("#resids").val();
	var cr = parseInt(currow);
	
	
	$.each(cdata,function(idx,d){
		//str += ","+d[0];
		if(multresid!= undefined){
			$(multresid[cr+idx]).val(d[0]);
		}
		if(multname!= undefined){
			$(multname[cr+idx]).val(d[1]);
		}
		if(multcode!= undefined){
			$(multcode[cr+idx]).val(d[2]);
		}
		if(multspec!= undefined){
			$(multspec[cr+idx]).val(d[3]);
		}
		if(multunit!= undefined){
			$(multunit[cr+idx]).val(d[4]);
		}
		if(multtype!= undefined){
			$(multtype[cr+idx]).val(d[5]);
		}
		if(multprice!= undefined){
			$(multprice[cr+idx]).val(d[6]);
		}
		if(multcount!= undefined){
			$(multcount[cr+idx]).val(d[7]);
		}
		if(multdetailid!= undefined){
			$(multdetailid[cr+idx]).val(d[9]);
		}
	});
	
	//$("#resids").val(str);
}

function getConBillMutil(rownum,imgobj){
	var contractid=document.all("unitestockcheckmove.contractid").value;
	var strs = $("form input[tjid='multresourcecode']");
	var str="";
    for(var i=0;i<strs.length;i++){
    	str+=strs.get(i).value+","
    }
   // alert("ff"+str);
	setTjNo();
	rownum = $(imgobj).next().html();
	var url = path + "/common/selectdialog/index.jsp?type=getResourcesByAccept&page=getResourcesByAcceptMult.jsp&contractid=" + contractid + "&time=" + escape(new Date());
	var style = "dialogWidth:632px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();    
	parm.push([str]);
	var val = window.showModalDialog(url, parm, style);
	
	if(val==null&&val){return false;}
	
	for(var idx in val){
		//alert("str:"+str+"val:"+val[idx][3]);
		if(str.indexOf(val[idx][3]) >= 0){
			//材料只能选择一次
			alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
			return false;
		}
	}
		if(val && val.length>0){
		if(val.length == 1){
			setChooseDataforAccept(val,rownum);
		}else{
			var blankrow = 0;			
			$("form input[tjid='multid']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;		

				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}			
				setTjNo();
			}	
			setChooseDataforAccept(val,rownum);
		}
	}else{
		return false;
	}
}

function setChooseDataforAccept(cdata,currow){
   var condetailid=$("form input[tjid='multresid']");
   var condetailnum=$("form input[tjid='multnum']");
   var condetailprice=$("form input[tjid='multsingleprice']");
   var resourcecode=$("form input[tjid='multresourcecode']");
   var resourcename=$("form input[tjid='multresourcename']");
   var resourcetype=$("form input[tjid='multresourcetype']");
   var resourcespec=$("form input[tjid='multresourcespec']");
   var resourceunit=$("form input[tjid='multunit']");
   var cr = parseInt(currow);
   $.each(cdata,function(idx,d){
	   $(condetailid[cr+idx]).val(d[0]);
	   $(condetailnum[cr+idx]).val(d[1]);
	   $(condetailprice[cr+idx]).val(d[2]);
	   $(resourcecode[cr+idx]).val(d[3]);
	   $(resourcename[cr+idx]).val(d[4]);
	   $(resourcetype[cr+idx]).val(d[5]);
	   $(resourcespec[cr+idx]).val(d[6]);
	   $(resourceunit[cr+idx]).val(d[7]);
   });
}

function gettjtestTypeResourceUncheck(rownum,imgobj) {
	var str = $("#resids").val();
	setTjNo();
	rownum = $(imgobj).next().html();
	var url = path + "/common/selectdialog/index.jsp?type=gettestResource&page=gettjtestResource.jsp&time=" + escape(new Date());
	var style = "dialogWidth:850px;dialogHeight:565px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();    
	parm.push([str]);
	var val = window.showModalDialog(url, parm, style);
	
		if(val && val.length>0){
		if(val.length == 1){
			setChooseDatazyj(val,rownum);
		}else{
			var blankrow = 0;			
			$("form input[tjid='code']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;		

				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}			
				setTjNo();
			}	
			setChooseDatazyj(val,rownum);
		}
	}else{
		return false;
	}
}
function gettjtestTypeResource(rownum,imgobj) {
	var str = $("#resids").val();
	setTjNo();
	rownum = $(imgobj).next().html();
	var url = path + "/common/selectdialog/index.jsp?type=gettestResource&page=gettjtestResource.jsp&time=" + escape(new Date());
	var style = "dialogWidth:850px;dialogHeight:565px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();    
	parm.push([str]);
	var val = window.showModalDialog(url, parm, style);
	/*for(var idx in val){
		if(str.indexOf(val[idx][0]) >= 0){
			alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
			return false;
		}
	}*/
		if(val && val.length>0){
		if(val.length == 1){
			setChooseDatazyj(val,rownum);
		}else{
			var blankrow = 0;			
			$("form input[tjid='code']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;		

				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}			
				setTjNo();
			}	
			setChooseDatazyj(val,rownum);
		}
	}else{
		return false;
	}
}
function setChooseDatazyj(cdata,currow){
	var materialresid = $("form input[tjid='materialresid']");
	var code = $("form input[tjid='code']");
	var name = $("form input[tjid='name']");
	var typename = $("form input[tjid='typename']");
	var spec = $("form input[tjid='spec']");
	var unit = $("form input[tjid='unit']");
	var str = $("#resids").val();
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
		str += d[0]+",";
		$(materialresid[cr+idx]).val(d[0]);
		$(code[cr+idx]).val(d[1]);
		$(name[cr+idx]).val(d[4]);
		$(typename[cr+idx]).val(d[6]);
		$(spec[cr+idx]).val(d[3]);
		$(unit[cr+idx]).val(d[2]);
	});
	$("#resids").val(str);
}

/*
*周转材调拨调差复选
*/
function getResourceTurnamortizeInfoMult(checkdate, deportid, rownum,imgobj) {

	//不允许一条资源被多次加入
	var deportid;
	if (deportid != "") {
		deportid = document.all(deportid).value;
	}
	if (deportid == "") {
		alert("\u8bf7\u5148\u9009\u62e9\u4ed3\u5e93\uff01");
		return false;
	}
	var outdate = document.all(checkdate).value;
	if (outdate == "") {
		alert("\u8bf7\u5148\u9009\u62e9\u8c03\u62e8\u65e5\u671f\uff01");
		return false;
	}
	var url = path + "/common/selectdialog/index.jsp?type=getResourceTurnamortizeInfo&page=getResourceTurnamortizeInfoMult.jsp&checkdate=" + outdate + "&deportid=" + deportid + "&time=" + escape(new Date());
	var style = "dialogWidth:850px;dialogHeight:565px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push(new Array("????????????"));
	//parm.push(document.getElementById("resids"));		
	var val = window.showModalDialog(url, parm, style);
	if(val==null&&val){return false;}
	if(val && val.length>0){
		if(val.length == 1){
			setResourceTurnamortizeInfoData(val,rownum);
		}else{
			var blankrow = 0;
			
			$("form input[tjid='multname']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});

			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;
				

				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				

				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}
				
				setTjNo();
			}
			
			setResourceTurnamortizeInfoData(val,rownum);
		}
	}else{
		return false;
	}
}
function setResourceTurnamortizeInfoData(cdata,currow){
//'resid','instorebillidetaild','name','code','spec','unit','type','','moveprice','countstorenum','','formervalue','nowvalue'
	var multresid = $("form input[tjid='multresid']");
	var multinstorebillidetaild = $("form input[tjid='multinstorebillidetaild']");
	var multname = $("form input[tjid='multname']");
	var multcode = $("form input[tjid='multcode']");
	var multspec = $("form input[tjid='multspec']");
	var multunit = $("form input[tjid='multunit']");
	
	var multtype = $("form input[tjid='multtype']");
	var multprice = $("form input[tjid='multprice']");
	var multcount = $("form input[tjid='multcount']");
	

	//var str = $("#resids").val();
	var cr = parseInt(currow);
	
	
//resid, instorebillidetaild, name, code, spec, unit, type, counts, avgpice, countstorenum, totalnum, formvalue, deprevalue, price
	$.each(cdata,function(idx,d){
		//str += ","+d[0];
		if(multresid!= undefined){
			$(multresid[cr+idx]).val(d[0]);
		}
		if(multname!= undefined){
			$(multname[cr+idx]).val(d[2]);
		}
		if(multcode!= undefined){
			$(multcode[cr+idx]).val(d[3]);
		}
		if(multspec!= undefined){
			$(multspec[cr+idx]).val(d[4]);
		}
		if(multunit!= undefined){
			$(multunit[cr+idx]).val(d[5]);
		}
		if(multtype!= undefined){
			$(multtype[cr+idx]).val(d[6]);
		}
		if(multprice!= undefined){
			$(multprice[cr+idx]).val(d[13]);
		}
		if(multcount!= undefined){
			$(multcount[cr+idx]).val(d[7]);
		}
		if(multinstorebillidetaild!= undefined){
			$(multinstorebillidetaild[cr+idx]).val(d[1]);
		}
	});
	
	//$("#resids").val(str);
}

function gettjResourceTurnamortizeInfo1(rownum,imgobj,checkdate) {
	setTjNo();
	var outdate = document.all(checkdate).value;
	if (outdate == "") {
	alert("\u8bf7\u5148\u9009\u62e9\u8f6c\u5e93\u6216\u644a\u9500\u65e5\u671f\uff01");
		return false;
	}
	var str = $("#resids").val();
	rownum = $(imgobj).next().html();
	var url = path + "/common/selectdialog/index.jsp?type=getResourceTurnamortizeInfotj&page=getResourceTurnamortizeInfotj.jsp&time=" + escape(new Date())+"&checkdate=" + outdate;
	var style = "dialogWidth:850px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push([str]);
	var val = window.showModalDialog(url, parm, style);
		for(var idx in val){
		if(str.indexOf(val[idx][0]) >= 0){
				alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
				return false;
				}
		}
		if(val && val.length>0){
		if(val.length == 1){
			setChooseDataIntoNewForPrice(val,rownum);
		}else{
			var blankrow = 0;			
			$("form input[tjid='code']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;		

				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}			
				setTjNo();
			}	
			setChooseDataIntoNewForPrice(val,rownum);
		}
	}else{
		return false;
	}
}

function setChooseDataInto1(cdata,currow){
	var instorebillidetaild = $("form input[tjid='instorebillidetaild']");
	var resid = $("form input[tjid='resid']");
	var code = $("form input[tjid='code']");
	var name = $("form input[tjid='name']");
	var spec = $("form input[tjid='spec']");
	var unit = $("form input[tjid='unit']");
	var type = $("form input[tjid='type']");
	var avgprice = $("form input[tjid='avgprice']");
	var totalnum = $("form input[tjid='totalnum']");
    var returnum = $("form input[tjid='returnum']");
    var price = $("form input[tjid='price']");
    var amount = $("form input[tjid='amount']");
    var formvalue = $("form input[tjid='formvalue']");
    var deprevalue = $("form input[tjid='deprevalue']");
	var str = $("#resids").val();
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
	/// id, code, unit, spec, name, instorebillidetaild, type ,avgprice,totalnum,countstorenum,,pricein,amountin,tanamount,canamount
		str += d[0]+",";
		if(resid!= undefined){
			$(resid[cr+idx]).val(d[0]);
		}
		if(code!= undefined){
			$(code[cr+idx]).val(d[2]);
		}
		if(name!= undefined){
			$(name[cr+idx]).val(d[1]);
		}
		if(spec!= undefined){
			$(spec[cr+idx]).val(d[3]);
		}
		if(unit!= undefined){
			$(unit[cr+idx]).val(d[4]);
		}
		if(type!= undefined){
			$(type[cr+idx]).val(d[6]);
		}
		if(avgprice!= undefined){
			$(avgprice[cr+idx]).val(d[7]);
		}
		if(totalnum!= undefined){
			$(totalnum[cr+idx]).val(d[8]);
		}
		if(returnum!= undefined){
			$(returnum[cr+idx]).val(d[9]);
		}
		if(price!= undefined){
			$(price[cr+idx]).val(d[10]);
		}
		if(amount!= undefined){
			$(amount[cr+idx]).val(d[11]);
		}
		if(formvalue!= undefined){
			$(formvalue[cr+idx]).val(d[12]);
		}
		if(deprevalue!= undefined){
			$(deprevalue[cr+idx]).val(d[13]);
		}
		
	});
	$("#resids").val(str);
}

function setChooseDataIntoNewForPrice(cdata,currow){
	var instorebillidetaild = $("form input[tjid='instorebillidetaild']");
	var resid = $("form input[tjid='resid']");
	var code = $("form input[tjid='code']");
	var name = $("form input[tjid='name']");
	var spec = $("form input[tjid='spec']");
	var unit = $("form input[tjid='unit']");
	var type = $("form input[tjid='type']");

	var totalnum = $("form input[tjid='totalnum']");
    var returnum = $("form input[tjid='returnum']");
    var price = $("form input[tjid='price']");

    var formvalue = $("form input[tjid='formvalue']");
    var deprevalue = $("form input[tjid='deprevalue']");
    var cutevalue = $("form input[tjid='cutevalue']");
	var str = $("#resids").val();
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
	/// id, code, unit, spec, name, instorebillidetaild, type ,avgprice,totalnum,countstorenum,,pricein,amountin,tanamount,canamount
		str += d[0]+",";
		if(resid!= undefined){
			$(resid[cr+idx]).val(d[0]);
		}
		if(code!= undefined){
			$(code[cr+idx]).val(d[2]);
		}
		if(name!= undefined){
			$(name[cr+idx]).val(d[1]);
		}
		if(spec!= undefined){
			$(spec[cr+idx]).val(d[3]);
		}
		if(unit!= undefined){
			$(unit[cr+idx]).val(d[4]);
		}
		if(type!= undefined){
			$(type[cr+idx]).val(d[6]);
		}
		if(totalnum!= undefined){
			$(totalnum[cr+idx]).val(d[8]);
		}
		if(returnum!= undefined){
			$(returnum[cr+idx]).val(d[9]);
		}
		if(price!= undefined){
			$(price[cr+idx]).val(d[7]);
		}
		if(formvalue!= undefined){
			$(formvalue[cr+idx]).val(d[11]);
		}
		if(deprevalue!= undefined){
			$(deprevalue[cr+idx]).val(d[12]);
		}

		if(cutevalue!= undefined){
			$(cutevalue[cr+idx]).val(d[13]);
		}
	});
	$("#resids").val(str);
}


function gettjResourceTurnamortizeInfo2(rownum,imgobj,checkdate,deportid) {
	//var 
	if (deportid != ""&&deportid != null) {
		deportid = document.all(deportid).value;
	}
	if (deportid == ""||deportid == null) {
		alert("\u8bf7\u5148\u9009\u62e9\u4ed3\u5e93\uff01");
		return false;
	}
	var outdate = document.all(checkdate).value;
	if (outdate == "") {
		alert("\u8bf7\u5148\u9009\u62e9\u8c03\u62e8\u65e5\u671f\uff01");
		return false;
	}
	setTjNo();
	var str = $("#resids").val();
	rownum = $(imgobj).next().html();
	var url = path + "/common/selectdialog/index.jsp?type=getResourceTurnamortizeInfotj&page=getResourceTurnamortizeInfotj.jsp&time=" + escape(new Date())+"&checkdate=" + outdate;
	var style = "dialogWidth:850px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push([str]);
	var val = window.showModalDialog(url, parm, style);
		for(var idx in val){
		if(str.indexOf(val[idx][0]) >= 0){
				alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
				return false;
				}
		}
		if(val && val.length>0){
		if(val.length == 1){
			setChooseDataInto(val,rownum);
		}else{
			var blankrow = 0;			
			$("form input[tjid='code']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;		

				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}			
				setTjNo();
			}	
			setChooseDataInto(val,rownum);
		}
	}else{
		return false;
	}
	function setChooseDataInto(cdata,currow){
	var instorebillidetaild = $("form input[tjid='instorebillidetaild']");
	var resid = $("form input[tjid='resid']");
	var code = $("form input[tjid='code']");
	var name = $("form input[tjid='name']");
	var spec = $("form input[tjid='spec']");
	var unit = $("form input[tjid='unit']");
	var type = $("form input[tjid='type']");
	var avgprice = $("form input[tjid='avgprice']");
	var totalnum = $("form input[tjid='totalnum']");
    var returnum = $("form input[tjid='returnum']");
    var price = $("form input[tjid='price']");
    var amount = $("form input[tjid='amount']");
    var formervalue = $("form input[tjid='formervalue']");
   	var	 nowvalue = $("form input[tjid='nowvalue']");
    var deprevalue = $("form input[tjid='deprevalue']");
	var str = $("#resids").val();
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
	/// id, code, unit, spec, name, instorebillidetaild, type ,avgprice,totalnum,countstorenum,,pricein,amountin,tanamount,canamount
		str += d[0]+",";
		$(resid[cr+idx]).val(d[0]);
		$(code[cr+idx]).val(d[2]);
		$(name[cr+idx]).val(d[1]);
		$(spec[cr+idx]).val(d[3]);
		$(unit[cr+idx]).val(d[4]);
		$(type[cr+idx]).val(d[6]);
	//	$(avgprice[cr+idx]).val(d[7]);
		$(totalnum[cr+idx]).val(d[8]);
		$(returnum[cr+idx]).val(d[9]);
		$(price[cr+idx]).val(d[7]);
	//	$(amount[cr+idx]).val(d[11]);
		$(formervalue[cr+idx]).val(d[11]);
		$(nowvalue[cr+idx]).val(d[11]);
	});
	$("#resids").val(str);
}
}

function gettjResourcesByAllInstore1(rownum,imgobj,checkdate, deportid) {
	var deportid = document.all(deportid).value;
	var outdate = document.all(checkdate).value;
	if (deportid == "") {
		alert("\u8bf7\u5148\u9009\u62e9\u4ed3\u5e93\uff01");
		return false;
	}
	if (outdate == "") {
		alert("\u8bf7\u5148\u9009\u62e9\u62a5\u635f\u6216\u5904\u7406\u65e5\u671f\uff01");
		return false;
	}
	
	setTjNo();
	var str = $("#resids").val();
	rownum = $(imgobj).next().html();
	var url = path + "/erp/lqpm/materials/getMaterialInstore.jsp?deportid=" + deportid + "&checkdate=" + outdate;
	var style = "dialogWidth:650px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no; ";
	var parm = new Array();
	parm.push([str]);
	var val = window.showModalDialog(url, parm, style);
	if (document.all["resids"] != undefined) {
		for(var idx in val){
		if(str.indexOf(val[idx][0]) >= 0){
				alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
				return false;
				}
		}
		if(val && val.length>0){
		if(val.length == 1){
			setChooseDataInstore(val,rownum);
		}else{
			var blankrow = 0;			
			$("form input[tjid='code']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;		

				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}			
				setTjNo();
			}	
			setChooseDataInstore(val,rownum);
		}
	}else{
		return false;
}
	function setChooseDataInstore(cdata,currow){
	var instorebillidetaild = $("form input[tjid='instorebillidetaild']");
	var resid = $("form input[tjid='resid']");
	var code = $("form input[tjid='code']");
	var name = $("form input[tjid='name']");
	var spec = $("form input[tjid='spec']");
	var unit = $("form input[tjid='unit']");
	var type = $("form input[tjid='type']");
	var avgprice = $("form input[tjid='avgprice']");
	var totalnum = $("form input[tjid='totalnum']");
    var returnum = $("form input[tjid='returnum']");
    var price = $("form input[tjid='price']");
    var amount = $("form input[tjid='amount']");
    var formvalue = $("form input[tjid='formvalue']");
    var deprevalue = $("form input[tjid='deprevalue']");
	var str = $("#resids").val();
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
	/// id, codde, unit, spec, name, instorebillidetaild, type ,avgprice,totalnum,countstorenum,,pricein,amountin,tanamount,canamount
		str += d[0]+",";
		$(resid[cr+idx]).val(d[0]);
		$(code[cr+idx]).val(d[1]);
		$(name[cr+idx]).val(d[2]);
		$(spec[cr+idx]).val(d[3]);
		$(unit[cr+idx]).val(d[4]);
		$(type[cr+idx]).val(d[8]);
		$(avgprice[cr+idx]).val(d[7]);
		//$(totalnum[cr+idx]).val(d[8]);
		$(returnum[cr+idx]).val(d[9]);
		$(price[cr+idx]).val(d[10]);
		$(amount[cr+idx]).val(d[11]);
		$(formvalue[cr+idx]).val(d[12]);
		$(deprevalue[cr+idx]).val(d[13]);
	});
	$("#resids").val(str);
}
}
}
////////自有周转材退回

function getResourceByFreeturnbacktj(rownum,imgobj,checkdate) {
	//不允许一条资源被多次加入
	var str = $("#resids").val();
	var outdate = document.all(checkdate).value;
	if (outdate == "") {
		alert("\u8bf7\u5148\u9009\u62e9\u9000\u56de\u65e5\u671f\uff01");
		return false;
	}
	setTjNo();
	rownum = $(imgobj).next().html();
	var url = path + "/common/selectdialog/index.jsp?type=getResourceByFreeturnback&page=getResourceByFreeturnbacktj.jsp&checkdate=" + outdate + "&time=" + escape(new Date());
	var style = "dialogWidth:850px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push([str]);
	var val = window.showModalDialog(url, parm, style);
	for(var idx in val){
		if(str.indexOf(val[idx][0]) >= 0){
			alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
			return false;
		}
	}
	if(val && val.length>0){
		if(val.length == 1){
			setChooseDataByFree(val,rownum);
		}else{
			var blankrow = 0;			
			$("form input[tjid='code']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;		

				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}			
				setTjNo();
			}	
			setChooseDataByFree(val,rownum);
		}
	}else{
		return false;
	}
	
	function setChooseDataByFree(cdata,currow){
		var resid = $("form input[tjid='resid']");
		var code = $("form input[tjid='code']");
		var name = $("form input[tjid='name']");
		var spec = $("form input[tjid='spec']");
		var unit = $("form input[tjid='unit']");
		var str = $("#resids").val();
		var cr = parseInt(currow);
		$.each(cdata,function(idx,d){
			str += d[0]+",";
			$(resid[cr+idx]).val(d[0]);
			$(code[cr+idx]).val(d[1]);
			$(name[cr+idx]).val(d[4]);
			$(spec[cr+idx]).val(d[3]);
			$(unit[cr+idx]).val(d[2]);
		});
		$("#resids").val(str);
	}
}
///材料验收
function gettestMaterialCheckContractBilltj(rownum,imgobj,contractid, contype, resid, resourcename, resourcecode, resourcespec, typename, unit, stockprice, stocknum, nochecknum, typeurl, orgid) {
	var str = $("#resids").val();
	setTjNo();
	rownum = $(imgobj).next().html();
	var paramconid = contractid;
	var paramcontype = contype;
	var url = path + "/erp/lqpm/materials/getUnionConBilllist.jsp?paramconid=" + paramconid + "&paramcontype=" + paramcontype;
	if (typeurl == "1") {
		url = path + "/erp/lqpm/materialturn/getturnconbilllist.jsp?paramconid=" + paramconid + "&orgid=" + orgid;
	}
	var style = "dialogWidth:850px;dialogHeight:530px;status:no;help:no;resizable:no;scroll:no; ";
	var parm = new Array();
	parm.push([str]);
	var val = window.showModalDialog(url, parm, style); //重新打开一个页面并接受返回值
	for(var idx in val ){
		if(str.indexOf(val[idx][0]+"@"+val[idx][6]) >= 0){
			alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
			return false;
		}
	}
	if(val && val.length>0){
		if(val.length == 1){
			setChooseContractBill(val,rownum);
		}else{
			var blankrow = 0;			
			$("form input[tjid='code']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;	
				
				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}			
				setTjNo();
			}	
			setChooseContractBill(val,rownum);
		}
	}else{
		return false;
	}
	function setChooseContractBill(cdata,currow){
		var resid = $("form input[tjid='resid']");
		var code = $("form input[tjid='code']");
		var name = $("form input[tjid='name']");
		var spec = $("form input[tjid='spec']");
		var unit = $("form input[tjid='unit']");
		var price = $("form input[tjid='price']");
		var num = $("form input[tjid='num']");
		var typename= $("form input[tjid='typename']");
		var stockprice= $("form input[tjid='stockprice']");
		var str = $("#resids").val();
		var cr = parseInt(currow);
		$.each(cdata,function(idx,d){
			str += ","+d[0]+"@"+d[6];
			$(resid[cr+idx]).val(d[1]);
			$(code[cr+idx]).val(d[2]);
			$(name[cr+idx]).val(d[3]);
			$(spec[cr+idx]).val(d[4]);
			$(unit[cr+idx]).val(d[5]);
			$(price[cr+idx]).val(d[6]);
			$(num[cr+idx]).val(d[7]);
			$(typename[cr+idx]).val(d[8]);
		    $(stockprice[cr+idx]).val(d[6]);
		});
		$("#resids").val(str);
	}
}
function getResourceAndMoveoutInfo1tj(rownum,imgobj,outdate, deportid) {
	var str = $("#resids").val();
///, resid, name, code, spec, unit, price, avgPrice, counts, detailid
	var checkdate = document.all(outdate).value;
	if (checkdate == "") {
		alert("\u8bf7\u5148\u9009\u62e9\u8c03\u62e8\u6216\u53d1\u6599\u65e5\u671f\uff01");
		return false;
	}
	var deport = document.all(deportid).value;
	setTjNo();	
	rownum = $(imgobj).next().html();
//	var url = path + "/common/selectdialog/index.jsp?type=getResourceAndMoveoutInfo&page=getResourceAndMoveoutInfo.jsp&deportid=" + deport + "&outdate=" + checkdate + "&time=" + escape(new Date());
	//bryan 2015-05-7  修改因日期影响材料的单价因素
	var url = path + "/common/selectdialog/index.jsp?type=getResourceAndMoveoutInfo&page=getResourceAndMoveoutInfo.jsp&deportid=" + deport + "&outdate=&time=" + escape(new Date());
	var style = "dialogWidth:690px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push([str]);
	var val = window.showModalDialog(url, parm, style);
	for(var idx in val){
		if(str.indexOf(val[idx][0]) >= 0){
			alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
			return false;
		}
	}
	if(val && val.length>0){
		if(val.length == 1){
			setMoveoutInfo1(val,rownum);
		}else{
			var blankrow = 0;			
			$("form input[tjid='code']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;	
				
				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}			
				setTjNo();
			}	
			setMoveoutInfo1(val,rownum);
		}
	}else{
		return false;
	}
	function setMoveoutInfo1(cdata,currow){
	var resid = $("form input[tjid='resid']");
	var code = $("form input[tjid='code']");
	var name = $("form input[tjid='name']");
	var spec = $("form input[tjid='spec']");
	var unit = $("form input[tjid='unit']");
	var designnum = $("form input[tjid='designnum']");
	var uptoamount = $("form input[tjid='uptoamount']");
	var counts = $("form input[tjid='counts']");
	var outavgprice = $("form input[tjid='outavgprice']");
	var price = $("form input[tjid='price']");
	var type = $("form input[tjid='type']");
	var str = $("#resids").val();
	var cr = parseInt(currow);	
	$.each(cdata,function(idx,d){
		str += d[0]+",";
		$(resid[cr+idx]).val(d[0]);
		$(code[cr+idx]).val(d[1]);
		$(name[cr+idx]).val(d[2]);
		$(spec[cr+idx]).val(d[3]);
		$(unit[cr+idx]).val(d[4]);
		//$(designnum[cr+idx]).val(d[2]);
		//$(uptoamount[cr+idx]).val(d[2]);
		$(counts[cr+idx]).val(d[7]);
		$(outavgprice[cr+idx]).val(d[6]);
		$(price[cr+idx]).val(d[6]);
		$(type[cr+idx]).val(d[5]);
	});
	$("#resids").val(str);
}
	
}


//甲供材料入库
function getResourcesByCheckInMult(checkid,rownum,imgobj,resourcecode){
	
	var check = document.all(checkid).value;//合同id
	if (check == "" || check == null) {
	//请选择合同
		alert("\u8bf7\u9009\u62e9\u6750\u6599\u5408\u540c\u7f16\u7801!");
		return false;
	}
	
	setTjNo();
	var str = $("#resids").val();
	
	
	rownum = $(imgobj).next().html();
	
	var url = path + "/common/selectdialog/index.jsp?type=getResourcesByCheck&page=getResourcesByCheckInMult.jsp&checkid=" + check + "&resourcecode="+resourcecode + "&time=" + escape(new Date());
	var style = "dialogWidth:850px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push([str]);
	
	var val = window.showModalDialog(url, parm, style);
	if(val==null&&val){return false;}
	for(var idx in val){
		if(str.indexOf(val[idx][0]+"@"+val[idx][6]) >= 0){
			//材料只能选择一次
			alert("\u4e00\u4e2a\u6750\u6599\u53ea\u80fd\u9009\u62e9\u4e00\u6b21\uff01");
			return false;
		}
	}
	if(val && val.length>0){
		if(val.length == 1){
			setChooseResourcesByCheckInData(val,rownum);
		}else{
		var blankrow = 0;
			
			$("form input[tjid='multname']").each(function(idx,obj){
			if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
 
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;
				

				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				
 
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}
				
				setTjNo();
			}
			
			setChooseResourcesByCheckInData(val,rownum);
		}
	}else{
		return false;
	}
}
function setChooseResourcesByCheckInData(cdata,currow){
	var multresid = $("form input[tjid='multresid']");
	var multname = $("form input[tjid='multname']");
	var multcode = $("form input[tjid='multcode']");
	var multspec = $("form input[tjid='multspec']");
	var multunit = $("form input[tjid='multunit']");
	var multtype = $("form input[tjid='multtype']");
	var multprice = $("form input[tjid='multprice']");
	var multcount = $("form input[tjid='multcount']");
	var multcheckid = $("form input[tjid='multcheckid']");
	var multcheckname = $("form input[tjid='multcheckname']");
	var expenses = $("form input[tjid='expenses']");
	var expensesprice = $("form input[tjid='expensesprice']");
	
	
	//childrenvalue[id] = [ id,name,code,spec,unit,type,avgprice,counts,checkid,checkname ]
	//getResourcesByCheck(checkid, resid, name, code, spec, unit, type, avgprice, counts, newcheckid, checkname, instoretype)
	var str = $("#resids").val();
	var cr = parseInt(currow);
	
	$.each(cdata,function(idx,d){
		str += ","+d[0]+"@"+d[6];
	if(multresid!= undefined){
			$(multresid[cr+idx]).val(d[0]);
		}
		if(multname!= undefined){
			$(multname[cr+idx]).val(d[1]);
		}
		if(multcode!= undefined){
			$(multcode[cr+idx]).val(d[2]);
		}
		if(multspec!= undefined){
			$(multspec[cr+idx]).val(d[3]);
		}
		if(multunit!= undefined){
			$(multunit[cr+idx]).val(d[4]);
		}
		if(multtype!= undefined){
			$(multtype[cr+idx]).val(d[5]);
		}
		if(multprice!= undefined){
			$(multprice[cr+idx]).val(d[6]);
		}
		if(multcount!= undefined){
			$(multcount[cr+idx]).val(d[7]);
		}
		if(multcheckid!= undefined){
			$(multcheckid[cr+idx]).val(d[8]);
		}
		if(multcheckname!= undefined){
			$(multcheckname[cr+idx]).val(d[9]);
		}
		if(expenses!= undefined){
			$(expenses[cr+idx]).val(d[10]);
		}
		if(expensesprice!= undefined){
	    	$(expensesprice[cr+idx]).val(d[11]);
		    /* 
		    var expenprice  =  d[11];
		  	 if(expenprice==null || expenprice==""){
		  	   $(expensesprice[cr+idx]).val(d[6]);
		     }else{
		       $(expensesprice[cr+idx]).val(d[11]);
		     }
		     */
		}
	});
	$("#resids").val(str);
}
 function getMateTurnConBalDetailMult(rownum,imgobj) {
	setTjNo();
	rownum = $(imgobj).next().html();
	var url = path + "/erp/lqpm/materials/getMateTurnConBalDetailMult.jsp";
	var style = "dialogWidth:850px;dialogHeight:570px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push(new Array("test"));
	parm.push(new Array());
	var val = window.showModalDialog(url, parm, style);
	if(val==null&&val){return false;}
	if(val && val.length>0){
		if(val.length == 1){
			setMateTurnConBalDetailMult(val,rownum);
		}else{
			var blankrow = 0;
			
			$("form input[tjid='multname']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});

			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;
				

				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				

				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}
				
				setTjNo();
			}
			setMateTurnConBalDetailMult(val,rownum);
		}
	}else{
		return false;
	}
	
	return true;
}

function setMateTurnConBalDetailMult(cdata,currow){

	//[ id,code,name,unit,price,billnum,billamount,topredatenum,topredateamount,tonowdatenum,tonowdateamount,monthnum];
	var multresid = $("form input[tjid='multresid']");
	var multcode = $("form input[tjid='multcode']");
	var multname = $("form input[tjid='multname']");
	var multunit = $("form input[tjid='multunit']");
	
	var multprice = $("form input[tjid='multprice']");
	var multbillnum = $("form input[tjid='multbillnum']");
	var multbillamount = $("form input[tjid='multbillamount']");
	var multbilltax = $("form input[tjid='multbilltax']");
	var multtopredatenum = $("form input[tjid='multtopredatenum']");
	var multtopredateamount = $("form input[tjid='multtopredateamount']");
	
	var multtonowdatenum = $("form input[tjid='multtonowdatenum']");
	var multtonowdateamount = $("form input[tjid='multtonowdateamount']");
	var multmonthnum = $("form input[tjid='multmonthnum']");
	var intotalnum = $("form input[tjid='intotalnum']");
	var outnum = $("form input[tjid='outnum']");
	var notnull = $("form input[tjid='notnull']");
	var multtocountnum = $("form input[tjid='multtocountnum']");
	

	var cr = parseInt(currow);
	
	$.each(cdata,function(idx,d){
	if(multresid!= undefined){
			$(multresid[cr+idx]).val(d[0]);
		}
		if(multcode!= undefined){
			$(multcode[cr+idx]).val(d[1]);
		}
		if(multname!= undefined){
			$(multname[cr+idx]).val(d[2]);
		}
		if(multunit!= undefined){
			$(multunit[cr+idx]).val(d[3]);
		}
		if(multprice!= undefined){
			$(multprice[cr+idx]).val(d[4]);
		}
		if(multbillnum!= undefined){
			$(multbillnum[cr+idx]).val(d[5]);
		}
		if(multbillamount!= undefined){
			$(multbillamount[cr+idx]).val(d[6]);
		}
		if(multtocountnum!= undefined){
			$(multtocountnum[cr+idx]).val(d[17]);
		}
		if(multbilltax!= undefined){
			$(multbilltax[cr+idx]).val(d[18]);
		}
		if(multtopredatenum!= undefined){
			$(multtopredatenum[cr+idx]).val(d[7]);
		}
		
		if(multtopredateamount!= undefined){
			$(multtopredateamount[cr+idx]).val(d[8]);
		}
		if(multtonowdatenum!= undefined){
			$(multtonowdatenum[cr+idx]).val(d[9]);
		}
		if(multtonowdateamount!= undefined){
			$(multtonowdateamount[cr+idx]).val(d[10]);
		}
		if(multmonthnum!= undefined){
			$(multmonthnum[cr+idx]).val(d[11]);
		}
		/* 进场信息 */
		if(intotalnum!= undefined){
			$(intotalnum[cr+idx]).val(d[12]);
		}
		if(outnum!= undefined){
			$(outnum[cr+idx]).val(d[13]);
		}
		if(notnull!= undefined){
			$(notnull[cr+idx]).val(d[14]);
		}
	});}

	function  getTransportContract(){
	    var selectType=$("input[name='materialcontract.type']:checked").val(); //获取选择的合同类别
	   // alert(selectType);
	    var url = path + "/common/selectdialog/index.jsp?type=getMaterialCheckRefContract1&page=getMaterialCheckRefContract1.jsp&selectType="+selectType+"&time=" + escape(new Date());
		var style = "dialogWidth:780px;dialogHeight:580px;status:no;help:no;resizable:no;scroll:no; ";
		var parm = new Array();
		parm.push(new Array("????????????"));
		var val = window.showModalDialog(url, parm, style);
		if (val == null) {
			return false;
		}
		if (val[0] != null) {
		    $("#transportid").val(val[0][0]);
			$("#transport").val(val[0][2]);
			
		}
	   return true;
	}
	/*
	*运输合同
	*/	
	
	function  getTransportContractNew(){
	    var selectType=$("input[name='materialcontract.type']:checked").val(); //获取选择的合同类别
	   // alert(selectType);
	    var url = path + "/common/selectdialog/index.jsp?type=getMaterialCheckRefContractNew&page=getMaterialCheckRefContractNew.jsp&selectType="+selectType+"&time=" + escape(new Date());
		var style = "dialogWidth:780px;dialogHeight:580px;status:no;help:no;resizable:no;scroll:no; ";
		var parm = new Array();
		parm.push(new Array("????????????"));
		var val = window.showModalDialog(url, parm, style);
		if (val == null) {
			return false;
		}
		if (val[0] != null) {
		    $("#transportid").val(val[0][0]);
			$("#transport").val(val[0][2]);
			$("#transportunit").val(val[0][4]); //取到运输单位
			
			$("#tranunit").show();   //显示运输单位
			$("#transportunit").show();   
            $("#transportunitlabel").show();
            
		}
		
	   return true;
	}
	
function checkSameids(para){
	var ret = true;
	var multsubcontractid = $("form input[multid='multsubcontractid']");
	
	var idstr = "";
	$.each(multsubcontractid,function(idx,obj){
		idstr += $(obj).val() + ",";
	});
	var msgString="";
	$.each(para,function(i,d){
		if(idstr.indexOf(d[0])>=0){
			msgString+="'"+d[1]+" "+d[2]+"',";
		}
	});
	if(msgString!=""){
		alert(msgString+"已选请勿重复选择!")
		ret = false;
	}
	return ret;
}

//wbs清单多选 2013-8-21 cal (在signbilldetailiteminput.jsp里用到)
function getProcessallplandetailfortotaltj(rownum,imgobj,signbilldetailid) {
	setTjNo();
	rownum = $(imgobj).next().html();
	var url = path + "/common/selectdialog/index.jsp?type=processallplandetailtreefortotaltj&page=processallplandetailtreefortotaltj.jsp?signbilldetailid="+signbilldetailid+"&time=" + escape(new Date());
	var style = "dialogWidth:850px;dialogHeight:550px;status:no;help:no;resizable:no;scroll:no; ";
	var parm = new Array();
	parm.push(new Array("?????????"));
	var val = window.showModalDialog(url, parm, style);
	if (val == null) {
		return false;
	}
	
	if(val && val.length>0){
		setwbsforsignbill(val,imgobj,rownum);
	}else{
		return false;
	}
	
}
function setProcessallplandetailfortotal(cdata,currow){
	var taskcode = $("form input[tjid='taskcode']");
	var code = $("form input[tjid='code']");
	var workcontent = $("form input[tjid='workcontent']");
	var unit = $("form select[class='inputcss;inputcsstag']");
	
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
		//alert(d[0]+"---"+d[1]+"---------"+d[2]+"---------"+d[3]);
		if(taskcode!= undefined){
			$(taskcode[cr+idx]).val(d[0]);
		}
		if(code!= undefined){
			$(code[cr+idx]).val(d[1]);
		}
		if(workcontent!= undefined){
			$(workcontent[cr+idx]).val(d[2]);
		}
		if(unit!= undefined){
			$(unit[cr+idx]).val(d[4]);
		}
	});
}

//判断重复
function checkConCostValueBillDetail(retpara){
	var ret = true;
	var resid = $("form input[multid='multconbilldetailid']");
	
	var idstr = "";
	$.each(resid,function(idx,obj){
			idstr += $(obj).val() + ",";
	});
	var msgString = "";
	$.each(retpara,function(i,d){
		if(idstr.indexOf(d[0]+"")>=0){
			msgString+="'"+d[1]+" "+d[2]+"' ,";
		}
	});
	if(msgString!=""){
		ret=false;
		alert(msgString+"已选请勿重复选择!");
	}
	return ret;
}

//综合项目-成本管理-产值核定，选清单改为多选2013-10-22cal
function getConCostValueBillDetailtj(rownum,imgobj,conid) {
	var url = path + "/common/selectdialog/index.jsp?type=getConBillCostValueDetailtj&page=getConBillCostValueDetailtj.jsp&conid=" + conid + "&time=" + escape(new Date());
	var style = "dialogWidth:850px;dialogHeight:550px;status:no;help:no;resizable:no;scroll:no; ";
	var parm = new Array();
	parm.push(new Array("?????????"));  
	//parm.push( new Array(document.all( conbilldetailid ).value , document.all( code ).value,document.all( name ).value));	
	var val = window.showModalDialog(url, parm, style);
	if (val == null) {
		return false;
	}
	if(!checkConCostValueBillDetail(val)){
		return false;
	}
	
	if(val && val.length>0){
		if(val.length == 1){
			setConCostValueBillDetail(val,rownum);
		}else{
			var blankrow = 0;
			
			$("form input[multid='multdetailcode']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});

			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;
				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}
				
				setTjNo();
			}
			
			setConCostValueBillDetail(val,rownum);
		}
	}else{
		return false;
	}
	/*if (val[0] != null) {
		document.all(conbilldetailid).value = val[0][0];
		document.all(code).value = val[0][1];
		document.all(name).value = val[0][2];
		document.all(unitname).value = val[0][3];
		document.all(price).value = val[0][4];
		if (document.all(costyear) != null) {
			document.all(costyear).value = val[0][5];
		}
		if (document.all(costyearamount) != null) {
			document.all(costyearamount).value = val[0][6];
		}
		if (document.all(addtocost) != null) {
			document.all(addtocost).value = val[0][7];
		}
		if (document.all(addtocostamount) != null) {
			document.all(addtocostamount).value = val[0][8];
		}
	}
	return true;*/
}

function setConCostValueBillDetail(cdata,currow){
	var multconbilldetailid = $("form input[multid='multconbilldetailid']");
	var multdetailcode = $("form input[multid='multdetailcode']");
	var multdetailname = $("form input[multid='multdetailname']");
	var multdetailunitname = $("form input[multid='multdetailunitname']");
	var multdetailprice = $("form input[multid='multdetailprice']");
	var multcostyear = $("form input[multid='multcostyear']");
	var multcostyearamount = $("form input[multid='multcostyearamount']");
	var multaddtocost = $("form input[multid='multaddtocost']");
	var multaddtocostamount = $("form input[multid='multaddtocostamount']");
	
	
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
		if(multconbilldetailid!= undefined){
				$(multconbilldetailid[cr+idx]).val(d[0]);
		}
		if(multdetailcode!= undefined){
			$(multdetailcode[cr+idx]).val(d[1]);
		}
		if(multdetailname!= undefined){
			$(multdetailname[cr+idx]).val(d[2]);
		}
		if(multdetailunitname!= undefined){
			$(multdetailunitname[cr+idx]).val(d[3]);
		}
		if(multdetailprice!= undefined){
			$(multdetailprice[cr+idx]).val(d[4]);
		}
		if(multcostyear!= undefined){
			$(multcostyear[cr+idx]).val(d[5]);
		}
		if(multcostyearamount!= undefined){
			$(multcostyearamount[cr+idx]).val(d[6]);
		}
		if(multaddtocost!= undefined){
			$(multaddtocost[cr+idx]).val(d[7]);
		}
		if(multaddtocostamount!= undefined){
			$(multaddtocostamount[cr+idx]).val(d[8]);
		}
	});
}

/*
*wbs分包清单复选-bryan
*   
*/
function getSubConInfoMult(rownum,imgobj){
	
	setTjNo();
	rownum = $(imgobj).next().html();
	var url = path + "/common/selectdialog/index.jsp?type=getSubConInfoMult&page=getSubConInfoMult.jsp&time=" + escape(new Date());
	var style = "dialogWidth:850px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
		var parm = new Array();
		parm.push(new Array("????????????"));
	
	var val = window.showModalDialog(url, parm, style);
	if(val==null&&val){return false;}
	
	if(!checkSameids(val)){
		return false;
	}
	
	if(val && val.length>0){
		if(val.length == 1){
			setSubConInfoMultData(val,rownum);
		}else{
			var blankrow = 0;
			
			$("form input[multid='multsubcontractid']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});

			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;
				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}
				
				setTjNo();
			}
			
			setSubConInfoMultData(val,rownum);
		}
	}else{
		return false;
	}
}

function setSubConInfoMultData(cdata,currow){
	var multsubcontractid = $("form input[multid='multsubcontractid']");
	var multcode = $("form input[multid='multcode']");
	var multname = $("form input[multid='multname']");
	
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
	if(multsubcontractid!= undefined){
			$(multsubcontractid[cr+idx]).val(d[0]);
		}
		if(multcode!= undefined){
			$(multcode[cr+idx]).val(d[1]);
		}
		if(multname!= undefined){
			$(multname[cr+idx]).val(d[2]);
		}
	});
}

/*
 *wbs劳务分包清单——选择分包商
 */
 function getSubCompInfoMult(subcompanyid,subcompanyname){
 	var url = path + "/common/selectdialog/index.jsp?type=getSubContractCompany&page=getSubContractCompany.jsp&time=" + escape(new Date());
	var style = "dialogWidth:460px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push(new Array("????????????"));
	
	var val = window.showModalDialog(url, parm, style);
	if (val == null) {
		return false;
	}
	if (val[0] != null) {
		if (document.all(subcompanyid) != null) {
			document.all(subcompanyid).value = val[0][0];
		}
		if (document.all(subcompanyname) != null) {
			document.all(subcompanyname).value = val[0][1];
		}
		return true;
	}
	return false;
 }
 
 /*
  *选择帐套模板   bryan  2013-06-13
  */
 function getbooktemp(){
	var url = path + "/common/selectdialog/index.jsp?type=getbooktemp&page=getbooktemp.jsp&time=" + escape(new Date());
	var style = "dialogWidth:460px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push(new Array("????????????"));
		
	var val = window.showModalDialog(url, parm, style);
	if (val == null) {
		return false;
	}
	if (val[0] != null) {
		if (document.all("empsalarysetofbook.code") != null) {
			document.all("empsalarysetofbook.code").value = val[0][1];
		}
		if (document.all("empsalarysetofbook.name") != null) {
			document.all("empsalarysetofbook.name").value = val[0][2];
		}
		if (document.all("empsalarysetofbook.taxtypeid") != null) {
			document.all("empsalarysetofbook.taxtypeid").value = val[0][3];
		}
		setSbookTempDetail(val[0][0]);
		return true;
	}
	return false;
 }
 
 /**
  * 选择要进行验收登记的采购记录，并设置返回这条采购申请的ID
  */
 function getComputerbuyInStore(id,code,name) {
 	var url = path + "/erp/office/computer/computerregist/getComputerbuyInStore.jsp?time=" + escape(new Date());
 	var style = "dialogWidth:800px;dialogHeight:590px;status:no;help:no;resizable:no;scroll:no;";
 	var parm = new Array();
 	//parm.push(new Array("\u9009\u62e9\u6750\u6599\u5165\u5e93\u6e05\u5355"));
 	var val = window.showModalDialog(url,parm, style);
 	if (val == null) {
 		return false;
 	}
 	if (val[0] != null) {
 		if (document.all(id) != null) {
 			document.all(id).value = val[0][0];
 		}
 		if (document.all(code) != null) {
 			document.all(code).value = val[0][1];
 		}
 		if (document.all(name) != null) {
 			document.all(name).value = val[0][2];
 		}
 		setComputerbuyDetail(val[0][0]);
 		return true;
 	}
 	return false;
 }
 /**
  * 选择要进行验收登记的采购记录，并设置返回这条采购申请的ID
  */
 function getComputertypeInStore(id,type,brand,model,fixnumber,serialnumber,cpu,memory,disk,amount,buydate,presentorgid,presentuser,typename,brandname,usemanname,departname,pcType,allocateType,memoryname,diskname) {
	 var url = path + "/erp/office/computer/getComputertypeInStore.jsp?time=" + escape(new Date())+"&pcType=00";
	 if(pcType == "01"){
		 if(allocateType == "1"){
			 //只显示未用状态的计算机
			 url = path + "/erp/office/computer/getComputertypeInStore.jsp?time=" + escape(new Date())+"&pcType=04";
		 }else{
			 //只显示使用，备用，维修三种状态的计算机
			 url = path + "/erp/office/computer/getComputertypeInStore.jsp?time=" + escape(new Date())+"&pcType=01";
		 }
	 }else if(pcType == "02"){
		// 只显示使用状态的计算机
		 url = path + "/erp/office/computer/getComputertypeInStore2.jsp?time=" + escape(new Date())+"&pcType=02";
	 }else if(pcType == "03"){
		// 只显示使用,备用两种状态的计算机
		 url = path + "/erp/office/computer/getComputertypeInStore2.jsp?time=" + escape(new Date())+"&pcType=03";
	 }
	 var style = "dialogWidth:800px;dialogHeight:590px;status:no;help:no;resizable:no;scroll:no;";
	 var parm = new Array();
	 //parm.push(new Array("\u9009\u62e9\u6750\u6599\u5165\u5e93\u6e05\u5355"));
	 var val = window.showModalDialog(url,parm, style);
	 if (val == null) {
		 return false;
	 }
	 if (val[0] != null) {
		 if (document.all(id) != null) {
			 document.all(id).value = val[0][0];
		 }
		 if (document.all(fixnumber) != null) {
			 document.all(fixnumber).value = val[0][1];
		 }
		 if (document.all(brand) != null) {
			 document.all(brand).value = val[0][2];
		 }
		 if (document.all(model) != null) {
			 document.all(model).value = val[0][3];
		 }
		 if (document.all(type) != null) {
			 document.all(type).value = val[0][4];
		 }
		 if (document.all(serialnumber) != null) {
			 document.all(serialnumber).value = val[0][5];
		 }
		 if (document.all(cpu) != null) {
			 document.all(cpu).value = val[0][6];
		 }
		 if (document.all(memory) != null) {
			 document.all(memory).value = val[0][7];
		 }
		 if (document.all(disk) != null) {
			 document.all(disk).value = val[0][8];
		 }
		 if (document.all(amount) != null) {
			 document.all(amount).value = val[0][9];
		 }
		 if (document.all(buydate) != null) {
			 document.all(buydate).value = val[0][10];
		 }
		 if(presentorgid!=null && document.all(presentorgid) != null){
			 document.all(presentorgid).value = val[0][12];
		 }
		 if(presentuser != null && document.all(presentuser) != null){
			 document.all(presentuser).value = val[0][11];
		 }
		 if(typename != null && document.all(typename) != null){
			 document.all(typename).value = val[0][13];
		 }
		 if(brandname != null && document.all(brandname) != null){
			 document.all(brandname).value = val[0][14];
		 }
		 if(usemanname != null && document.all(usemanname) != null){
			 document.all(usemanname).value = val[0][15];
		 }
		 if(departname != null && document.all(departname) != null){
			 document.all(departname).value = val[0][16];
		 }
		 if (document.all(memoryname) != null) {
			 document.all(memoryname).value = val[0][17];
		 }
		 if (document.all(diskname) != null) {
			 document.all(diskname).value = val[0][18];
		 }
		 return true;
	 }
	 return false;
 }
 /**
  * 选择检测通知单记录，并设置返回这条检测通知的ID
  */
 function getMaterialtypeInStore(id,code,materialname,model,groupcode,amount,entertime,maker,usefor,address,createdate) {
	 var url = path + "/erp/lqpm/quality/qualitycheck/qualitycheckinstore.jsp?time=" + escape(new Date());
	 var style = "dialogWidth:800px;dialogHeight:590px;status:no;help:no;resizable:no;scroll:no;";
	 var parm = new Array();
	 //parm.push(new Array("\u9009\u62e9\u6750\u6599\u5165\u5e93\u6e05\u5355"));
	 var val = window.showModalDialog(url,parm, style);
	 if (val == null) {
		 return false;
	 }
	 if (val[0] != null) {
		 if (document.all(id) != null) {
			 document.all(id).value = val[0][0];
		 }
		 if (document.all(code) != null) {
			 document.all(code).value = val[0][1];
		 }
		 if (document.all(materialname) != null) {
			 document.all(materialname).value = val[0][2];
		 }
		 if (document.all(model) != null) {
			 document.all(model).value = val[0][11];
		 }
		 if (document.all(groupcode) != null) {
			 document.all(groupcode).value = val[0][10];
		 }
		 if (document.all(amount) != null) {
			 document.all(amount).value = val[0][13];
		 }
		 if (document.all(entertime) != null) {
			 document.all(entertime).value = val[0][12];
		 }
		 if (document.all(maker) != null) {
			 document.all(maker).value = val[0][14];
		 }
		 if (document.all(usefor) != null) {
			 document.all(usefor).value = val[0][15];
		 }
		 if (document.all(address) != null) {
			 document.all(address).value = val[0][7];
		 }
		 if (document.all(createdate) != null) {
			 document.all(createdate).value = val[0][4];
		 }
		 return true;
	 }
	 return false;
 }

 function getMultOrgForSingle(orgid, orgname) {
 	var url = path + "/common/selectdialog/index.jsp?type=getMultOrgForSingle&page=getMultOrgForSingle.jsp&time=" + escape(new Date());
 	var style = "dialogWidth:400px;dialogHeight:470px;status:no;help:no;resizable:no;scroll:no; ";
 	var parm = new Array();
 	parm.push(new Array("????????????"));
 	parm.push(new Array(document.all(orgid).value, document.all(orgname).value));	

 	var val = window.showModalDialog(url, parm, style);
 	if (val == null) {
 		return false;
 	}
 	if(!checkSelectedOrg(val)){
		return false;
	}
 	if (val[0] != null) {
 		if (val[0][0] != null) {
 			document.all(orgid).value = val[0][0];
 		}
 		var charindex = val[0][1].lastIndexOf("&nbsp");
 		if (charindex >= 0) {
 			if (document.all(orgname) != null) {
 				document.all(orgname).value = val[0][1].substring(charindex + 5, val[0][1].length);
 			}
 		} else {
 			if (document.all(orgname) != null) {
 				document.all(orgname).value = val[0][1];
 			}
 		}
 		return true;
 	}
 	return false;
 }
 function getMultOrgAndProForSingle(orgid, orgname) {
	 	var url = path + "/common/selectdialog/index.jsp?type=getMultOrgAndProForSingle&page=getMultOrgAndProForSingle.jsp&time=" + escape(new Date());
	 	var style = "dialogWidth:400px;dialogHeight:470px;status:no;help:no;resizable:no;scroll:no; ";
	 	var parm = new Array();
	 	parm.push(new Array("????????????"));
	 	parm.push(new Array(document.all(orgid).value, document.all(orgname).value));	

	 	var val = window.showModalDialog(url, parm, style);
	 	if (val == null) {
	 		return false;
	 	}
	 	if(!checkSelectedOrg(val)){
			return false;
		}
	 	if (val[0] != null) {
	 		if (val[0][0] != null) {
	 			document.all(orgid).value = val[0][0];
	 		}
	 		var charindex = val[0][1].lastIndexOf("&nbsp");
	 		if (charindex >= 0) {
	 			if (document.all(orgname) != null) {
	 				document.all(orgname).value = val[0][1].substring(charindex + 5, val[0][1].length);
	 			}
	 		} else {
	 			if (document.all(orgname) != null) {
	 				document.all(orgname).value = val[0][1];
	 			}
	 		}
	 		return true;
	 	}
	 	return false;
	 }
 function checkSelectedOrg(cdata){
	var orgids = $("form input[ tagid='orgid' ]");
	var ret = true;
	var idstr = "";
	$.each(orgids,function(idx,obj){
			idstr += $(obj).val() + ",";
	});
	var msgString = "";
	$.each(cdata,function(i,d){
		if(idstr.indexOf(d[0]+"")>=0){
			msgString+="'"+d[1]+"' 已选请勿重复选择!";
		}
	});
	if(msgString!=""){
		ret=false;
		alert(msgString);
	}
	return ret;
 }
function getObjects(index,headerid){
	
	var url = path + "/common/selectdialog/index.jsp?type=getObject&page=getObject.jsp&headerid="+headerid+"&time=" + escape(new Date());
 	var style = "dialogWidth:400px;dialogHeight:500px;status:no;help:no;resizable:no;scroll:no; ";
 	var parm = new Array();
 	parm.push(new Array("????????????"));

 	var val = window.showModalDialog(url, parm, style);
 	
 	
 	if (val == null) {return false;}
 	var idsString="";
 	var namesString="";
 	$.each(val,function(idx,d){
 		idsString = idsString + d[0]+",";
 		namesString = namesString + d[1]+",";
 	});
 	document.all("objid"+index).value = idsString.substring(0,idsString.lastIndexOf(","));
 	
 	document.all("orgnames"+index).value = namesString.substring(0,namesString.lastIndexOf(","));
 	
}

function getObjects06(index,headerid){

	var url = path + "/common/selectdialog/index.jsp?type=getObject&page=getObject06.jsp&headerid="+headerid+"&time=" + escape(new Date());
 	var style = "dialogWidth:400px;dialogHeight:500px;status:no;help:no;resizable:no;scroll:no; ";
 	var parm = new Array();
 	parm.push(new Array("????????????"));

 	var val = window.showModalDialog(url, parm, style);
 	
 	
 	if (val == null) {return false;}
 	var idsString="";
 	var namesString="";
 	$.each(val,function(idx,d){
 		idsString = idsString + d[0]+",";
 		namesString = namesString + d[1]+",";
 	});
 	document.all("objid"+index).value = idsString.substring(0,idsString.lastIndexOf(","));
 	
 	document.all("orgnames"+index).value = namesString.substring(0,namesString.lastIndexOf(","));
 	
}


function getMultiEmpForSingle(id,name){
	var url = path + "/common/selectdialog/getMultiPerson.jsp?time=" + escape(new Date());
	var style = "dialogWidth:1016px;dialogHeight:545px;status:no;help:no;resizable:no;scroll:no; ";
	var parm = new Array();
	parm.push(new Array("?????????"));
	var val = window.showModalDialog(url, parm, style);
	
	if (val == null||val==undefined) {
 		return false;
 	}
 	if(!checkSelectedEmp(val)){
		return false;
	}
	if(val!==null&&val!==undefined){
			//获取单位
		if(val.length>0){
			var names="" ;
			var ids="";
			for(var i=0;i<val.length;i++){
				names = names+","+val[i][2];
				ids= ids+","+val[i][0];
			}
			
			document.getElementById(name).value=names.substring(1,names.length);
			document.getElementById(id).value=ids.substring(1,ids.length);
		}
	}
}
function checkSelectedEmp(cdata){
	var empids = $("form input[ tagid='empids' ]");
	var ret = true;
	var idstr = "";
	$.each(empids,function(idx,obj){
			idstr += $(obj).val() + ",";
	});
	var msgString = "";
	$.each(cdata,function(i,d){
		if(idstr.indexOf(d[0]+"")>=0){
			msgString+="'"+d[2]+"' ";
		}
	});
	if(msgString!=""){
		ret=false;
		alert(msgString+"已选请勿重复选择!");
	}
	return ret;
 }
function getManCheckPoint(){
	var url = path + "/common/selectdialog/index.jsp?type=getCheckpoint&page=getCheckPoint.jsp?time=" + escape(new Date());
	var style = "dialogWidth:630px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
 	parm.push(new Array("????????????"));
	
	var val = window.showModalDialog(url, parm, style);
	if (val == null) {
		return false;
	}
	if (val[0] != null) {
		setManCheckPoint(val[0][0]);
		return true;
	}else{
		return false;
	}
}
function getCompCheckPoint(){
	var url = path + "/common/selectdialog/index.jsp?type=getCheckpoint2&page=getCheckPoint2.jsp?time=" + escape(new Date());
	var style = "dialogWidth:630px;dialogHeight:552px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
 	parm.push(new Array("????????????"));
	
	var val = window.showModalDialog(url, parm, style);
	if (val == null) {
		return false;
	}
	if (val[0] != null) {
		
		setCompCheckPoint(val[0][0]);
		return true;
	}else{
		return false;
	}
}
function getEmpInfoCommon(empid,empname,dutypost,ptype){
	var url = path + "/common/selectdialog/index.jsp?type=getEmpInfoCommon&page=getEmpInfoCommon.jsp&back=1&time=" + escape(new Date());
	var style = "dialogWidth:800px;dialogHeight:620px;status:no;help:no;resizable:no;scroll:no; ";
	var parm = new Array();
	var val = window.showModalDialog(url, parm, style);
	if (val == null) {
		return false;
	}
	//alert(val[0]);
	//empid,empname,sex,nation,orgname,dutyposte,firstdegree,firstspecial,degree,special,telphone,mobile
	if (val[0] != null) {
		if (document.all(empid) != undefined) {
			document.all(empid).value = val[0][0];
		}
		if (document.all(empname) != undefined) {
			document.all(empname).value = val[0][1];
		}
		if (document.all(dutypost) != undefined) {
			document.all(dutypost).value = val[0][5];
		}
		if(ptype=='2'){
		if (document.all("legalofficersincharge.sex") != undefined) {
			document.all("legalofficersincharge.sex").value = val[0][2];
		}
		if (document.all("legalofficersincharge.nation") != undefined) {
			document.all("legalofficersincharge.nation").value = val[0][3];
		}
		if (document.all("legalofficersincharge.emporgname") != undefined) {
			document.all("legalofficersincharge.emporgname").value = val[0][4];
		}
		if (document.all("legalofficersincharge.firstdegree") != undefined) {
			document.all("legalofficersincharge.firstdegree").value = val[0][6];
		}
		if (document.all("legalofficersincharge.firstspecial") != undefined) {
			document.all("legalofficersincharge.firstspecial").value = val[0][7];
		}
		if (document.all("legalofficersincharge.degree") != undefined) {
			document.all("legalofficersincharge.degree").value = val[0][8];
		}
		if (document.all("legalofficersincharge.special") != undefined) {
			document.all("legalofficersincharge.special").value = val[0][9];
		}
		if (document.all("legalofficersincharge.telphone") != undefined) {
			document.all("legalofficersincharge.telphone").value = val[0][10];
		}
		if (document.all("legalofficersincharge.mobile") != undefined) {
			document.all("legalofficersincharge.mobile").value = val[0][11];
		}
		}else if(ptype=='1'){
			if (document.all("legalofficerschief.sex") != undefined) {
				document.all("legalofficerschief.sex").value = val[0][2];
			}
			if (document.all("legalofficerschief.nation") != undefined) {
				document.all("legalofficerschief.nation").value = val[0][3];
			}
			if (document.all("legalofficerschief.emporgname") != undefined) {
				document.all("legalofficerschief.emporgname").value = val[0][4];
			}
			if (document.all("legalofficerschief.firstdegree") != undefined) {
				document.all("legalofficerschief.firstdegree").value = val[0][6];
			}
			if (document.all("legalofficerschief.firstspecial") != undefined) {
				document.all("legalofficerschief.firstspecial").value = val[0][7];
			}
			if (document.all("legalofficerschief.degree") != undefined) {
				document.all("legalofficerschief.degree").value = val[0][8];
			}
			if (document.all("legalofficerschief.special") != undefined) {
				document.all("legalofficerschief.special").value = val[0][9];
			}
			if (document.all("legalofficerschief.telphone") != undefined) {
				document.all("legalofficerschief.telphone").value = val[0][10];
			}
			if (document.all("legalofficerschief.mobile") != undefined) {
				document.all("legalofficerschief.mobile").value = val[0][11];
			}
		}
	}
	return true;
}

function getEmpInfoCommonMult06(rownum,imgobj) {
	
	setTjNo();
	rownum = $(imgobj).next().html();
	var url = path + "/common/selectdialog/index.jsp?type=getEmpInfoCommonMult06&page=getEmpInfoCommonMult06.jsp&back=1&time=" + escape(new Date());
	var style = "dialogWidth:1025px;dialogHeight:620px;status:no;help:no;resizable:no;scroll:no; ";
	var parm = new Array();
	var val = window.showModalDialog(url, parm, style);
	if (val == null) {
		return false;
	}
	if(!checkempinfosame(val)){
		return false;
	};
	if(val && val.length>0){
		if(val.length == 1){
			setuserinfoCommon06(val,rownum);
		}else{
			var blankrow = 0;			
			$("form input[tagid='empname']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;	
				
				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}			
				setTjNo();
			}	
			setuserinfoCommon06(val,rownum);
		}
	}else{
		return false;
	}
}


function getEmpInfoCommonMult(rownum,imgobj) {
	setTjNo();
	rownum = $(imgobj).next().html();
	var url = path + "/common/selectdialog/index.jsp?type=getEmpInfoCommonMult&page=getEmpInfoCommonMult.jsp&back=1&time=" + escape(new Date());
	var style = "dialogWidth:1025px;dialogHeight:620px;status:no;help:no;resizable:no;scroll:no; ";
	var parm = new Array();
	var val = window.showModalDialog(url, parm, style);
	if (val == null) {
		return false;
	}
	if(!checkempinfosame(val)){
		return false;
	};
	if(val && val.length>0){
		if(val.length == 1){
			setuserinfoCommon(val,rownum);
		}else{
			var blankrow = 0;			
			$("form input[tagid='empname']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;	
				
				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}			
				setTjNo();
			}	
			setuserinfoCommon(val,rownum);
		}
	}else{
		return false;
	}
}
function setuserinfoCommon(cdata,currow){
	//empid,empname,sex,nation,orgname,dutyposte,firstdegree,firstspecial,degree,special,telphone,mobile
	var empid = $("form input[tagid='empid']");
	var empname = $("form input[tagid='empname']");
	var sex = $("form input[tagid='sex']");
	var nation = $("form input[tagid='nation']");
	var emporgname = $("form input[tagid='emporgname']");
	var dutypost = $("form input[tagid='dutypost']");
	var firstdegree = $("form input[tagid='firstdegree']");
	var firstspecial = $("form input[tagid='firstspecial']");
	var degree = $("form input[tagid='degree']");
	var special = $("form input[tagid='special']");
	var telphone = $("form input[tagid='telphone']");
	var mobile = $("form input[tagid='mobile']");
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
		if(empid!=undefined){
			$(empid[cr+idx]).val(d[0]);
		}
		if(empname!=undefined){
			$(empname[cr+idx]).val(d[1]);
		}
		if(sex!=undefined){
			$(sex[cr+idx]).val(d[2]);
		}
		if(nation!=undefined){
			$(nation[cr+idx]).val(d[3]);
		}
		if(emporgname!=undefined){
			$(emporgname[cr+idx]).val(d[4]);
		}
		if(dutypost!=undefined){
			$(dutypost[cr+idx]).val(d[5]);
		}
		if(firstdegree!=undefined){
			$(firstdegree[cr+idx]).val(d[6]);
		}
		if(firstspecial!=undefined){
			$(firstspecial[cr+idx]).val(d[7]);
		}
		if(degree!=undefined){
			$(degree[cr+idx]).val(d[8]);
		}
		if(special!=undefined){
			$(special[cr+idx]).val(d[9]);
		}
		if(telphone!=undefined){
			$(telphone[cr+idx]).val(d[10]);
		}
		if(mobile!=undefined){
			$(mobile[cr+idx]).val(d[11]);
		}
	});
}


function setuserinfoCommon06(cdata,currow){
	var empid = $("form input[tagid='empid']");
	var empname = $("form input[tagid='empname']");	
	var dutyorgnames = $("form input[tagid='dutyorgnames']");
	var dutypostnames = $("form input[tagid='dutypostnames']");
	var nation = $("form input[tagid='nation']");
	
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
		if(empid!=undefined){
			$(empid[cr+idx]).val(d[0]);
		}
		if(empname!=undefined){
			$(empname[cr+idx]).val(d[1]);
		}
		if(dutyorgnames!=undefined){
			$(dutyorgnames[cr+idx]).val(d[2]);
		}
		if(dutypostnames!=undefined){
			$(dutypostnames[cr+idx]).val(d[3]);
		}
		if(nation!=undefined){
			$(nation[cr+idx]).val(d[4]);
		}		
	});
}


function checkempinfosame(retpara){
    var ret = true;
	var empid = $("form input[checkid='empid']");
	
	var idstr = "";
	$.each(empid,function(idx,obj){
			idstr += $(obj).val() + ",";
	});
	var msgString = "";
	$.each(retpara,function(i,d){
		if(idstr.indexOf(d[0]+"")>=0){
			msgString+="'"+d[1]+"',";
		}
	});
	if(msgString!=""){
		ret=false;
		alert(msgString+"已选请勿重复选择!");
	}
	return ret;
}
function getQualification(qualifications,qualStr){
	var url = path + "/common/selectdialog/index.jsp?type=getQualification&page=getQualification.jsp?time=" + escape(new Date());
 	var style = "dialogWidth:400px;dialogHeight:500px;status:no;help:no;resizable:no;scroll:no; ";
 	var parm = new Array();
 	parm.push(new Array("????????????"));

 	var val = window.showModalDialog(url, parm, style);
 	
 	
 	if (val == null) {return false;}
 	var idsString="";
 	var namesString="";
 	$.each(val,function(idx,d){
 		idsString = idsString + d[0]+",";
 		namesString = namesString + d[1]+",";
 	});
 	document.all(qualifications).value = idsString.substring(0,idsString.lastIndexOf(","));
 	
 	document.all(qualStr).value = namesString.substring(0,namesString.lastIndexOf(","));
 	
}


function getAllProjectMult(rownum,imgobj) {
	setTjNo();
	rownum = $(imgobj).next().html();
	var url = path + "/common/selectdialog/index.jsp?type=getPrjitem&page=getallprjmult.jsp&time=" + new Date();
	var style = "dialogWidth:750px;dialogHeight:560px;status:no;help:no;resizable:no;scroll:no;";
	var parm = new Array();
	parm.push(new Array("?????"));
	var val = window.showModalDialog(url, parm, style);
	if (val == null) {
		return false;
	}
	if(!checkprjsame(val)){
		return false;
	};
	if(val && val.length>0){
		if(val.length == 1){
			setprjinfo(val,rownum);
		}else{
			var blankrow = 0;			
			$("form input[tagid='prjid']").each(function(idx,obj){
				if(idx > rownum){
					if($(obj).val() == ""){
						blankrow++;
					}else{
						return false;
					}
				}
			});
			if(blankrow < (val.length -1)){
				var addrow = val.length - 1 -blankrow;	
				
				var trobj = imgobj.parentNode;
				var deep = 0;
				while(trobj.tagName != "TR" && deep < 100){
					trobj = trobj.parentNode;
					deep++;
				}
				
				for(var i=0;i<addrow;i++){
					add(trobj,'afterEnd');
				}			
				setTjNo();
			}	
			setprjinfo(val,rownum);
		}
	}else{
		return false;
	}
}

function checkprjsame(retpara){
    var ret = true;
	var prjid = $("form input[tagid='prjid']");
	
	var idstr = "";
	$.each(prjid,function(idx,obj){
			idstr += $(obj).val() + ",";
	});
	var msgString = "";
	$.each(retpara,function(i,d){
		if(idstr.indexOf(d[0]+"")>=0){
			msgString+="'"+d[1]+"',";
		}
	});
	if(msgString!=""){
		ret=false;
		alert(msgString+"已选请勿重复选择!");
	}
	return ret;
}


function setprjinfo(cdata,currow){
	var prjid = $("form input[tagid='prjid']");
	var prjname = $("form input[tagid='prjname']");	
	
	var cr = parseInt(currow);
	$.each(cdata,function(idx,d){
		if(prjid!=undefined){
			$(prjid[cr+idx]).val(d[0]);
		}
		if(prjname!=undefined){
			$(prjname[cr+idx]).val(d[1]);
		}	
	});
}
