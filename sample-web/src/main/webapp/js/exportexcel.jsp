<%@ page contentType="text/html; charset=UTF-8"%>
<HTML>
<HEAD>
<TITLE>请选择导出范围</TITLE>
<script language="javascript" src="<%=request.getContextPath()%>/js/ui_valid.js"></script>
</HEAD>


<BODY>
<script>
//定义最大导出范围
var pageRange = 500;
</script>
<CENTER>
<table width="290" height="100" border="0" cellpadding="0" cellspacing="0" style="border:1px solid #0066CC" align="center">
<tr>
    <td height="20" align="center" bgcolor="#0066CC"><font color="#FFFFFF">导出数据</font></td>
</tr>
<tr>
	<td align="center">请选择导出范围(最大可以一次导出<script language="JavaScript">document.write(pageRange)</script>页):</td>
</tr>
<tr>
	<td align="center">
	第<input id="pStart" type="text" size="2" value="1" style="border: 1 solid; height:20">
	<button OnClick="startCurr()" style="height:20; width:30; border: 1 solid">当前</button>页
	&nbsp;&nbsp;到&nbsp;&nbsp;
	第<input id="pEnd" type="text" size="2" value="50" style="border: 1 solid; height:20">
	<button OnClick="endCurr()" style="height:20; width:30; border: 1 solid">当前</button>页
	</td>
</tr>

<tr>
	<td align="center">
	<button OnClick="return startExport();" style="font-size:12;height:20;border: 1 solid">开始导出</button>
	</td>
</tr>
</table>
</CENTER>


<script language="JavaScript">
<!--
	//当前页和最大页
	var maxPage = <%=request.getParameter("maxPage")%>;	
	var currPage = <%=request.getParameter("currPage")%>;
	var hiddenFormName = '<%=request.getParameter("hiddenFormName")%>';

	function init() {
		p1 = document.getElementById('pStart');
		p2 = document.getElementById('pEnd');
		
		if (maxPage < pageRange && maxPage > 0)
			p2.value = maxPage;
		else if (maxPage == 0) {
			p1.value = 0;
			p2.value = 0;
		}
	}

	function startCurr() {
		document.getElementById('pStart').value = currPage;
		if (currPage+pageRange-1 > maxPage)
			document.getElementById('pEnd').value = maxPage
		else
			document.getElementById('pEnd').value = currPage+pageRange-1;
	}
	
	function endCurr() {
		document.getElementById('pEnd').value = currPage;
	}
	
	function startExport() {
		p1 = document.getElementById('pStart');
		p2 = document.getElementById('pEnd');
		
		if (maxPage == 0) {
			alert("没有记录,不能导出");
			close();
			return false;
		}

		if (!isPositiveInt(p1.value)) {
			alert("请输入正整数");
			p1.focus();
			return false;
		}
		if (!isPositiveInt(p2.value)) {
			alert("请输入正整数");
			p2.focus();
			return false;
		}
		var a1 = new Number(p1.value);
		var a2 = new Number(p2.value);
		if (a1 < 1 || (a1 > maxPage)) {
			alert("你输入了一个不存在的页号");
			p1.focus();
			return false;
		}
		if (a2 < 1 || (a2 > maxPage)) {
			alert("你输入了一个不存在的页号");
			p2.focus();
			return false;
		}
		if (a2 < a1) {
			alert("请注意输入数字的大小顺序");
			p1.focus();
			return false;
		}

		if (a2 - a1 > pageRange-1) {
			alert("只能一次导出"+pageRange+"页")
			p2.value = a1 + pageRange-1;
			return false;
		}
		
		if (window.opener) {
			pageNo = window.opener.document.forms[hiddenFormName]['globe.pageno'].value;
			endPageNo = window.opener.document.forms[hiddenFormName]['globe.endpageno'].value;
			action = window.opener.document.forms[hiddenFormName].action;
			
			window.opener.document.forms[hiddenFormName]['globe.pageno'].value = a1;
			window.opener.document.forms[hiddenFormName]['globe.endpageno'].value = a2;
			window.opener.document.forms[hiddenFormName].action = action.replace(".do", ".xls");
			window.opener.document.forms[hiddenFormName].submit();
			
			//恢复hiddenform中的参数
			window.opener.document.forms[hiddenFormName]['globe.pageno'].value = pageNo;
			window.opener.document.forms[hiddenFormName]['globe.endpageno'].value = endPageNo;
			window.opener.document.forms[hiddenFormName].action = action;	
			
		} 
		close();
		return true;
	}

	init();
//-->
</script>

</BODY>
</HTML>
