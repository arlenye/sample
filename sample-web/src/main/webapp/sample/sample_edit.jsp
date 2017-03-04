<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>  

<%@ page import="com.dzcy.sample.dao.*" %>

<html>
<script language="javascript" src="<%=request.getContextPath()%>/js/ui_public.js"></script>
<script language="javascript" src="<%=request.getContextPath()%>/js/ui_valid.js"></script>
<head>
<title>样例维护编辑</title>
<link href="<%=request.getContextPath()%>/css/dzcy.css" type="text/css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/css/xcontrol.css" type="text/css" rel="stylesheet">

<%
    SampleTO sampleTo = (SampleTO)request.getAttribute("sampleto");
    
    String sampleId = "";
    String name = "";
    String code = "";
    String place = "";
    String setDate = "";
    String status = "";
    
    if (sampleTo!=null) {
        sampleId = sampleTo.getSampleId()+"";
        name = sampleTo.getName();
        code = sampleTo.getCode();
        place = sampleTo.getPlace();
        setDate = sampleTo.getSetDate();
        status = sampleTo.getStatus();
    }
    
    String action = request.getAttribute("action")+"";
    
    String msg = "";
    Object objmsg = request.getAttribute("msg");
    if (objmsg!=null) msg = objmsg+"";
%>
<script>
function save()  {
    if (!checkInput(editform)) return; 
    var go="<%=action%>";
    var action = "<%=request.getContextPath()%>/sample.sv?method=insert";
    if (go=="upd") action = "<%=request.getContextPath()%>/sample.sv?method=update";
    document.editform.action = action;
    document.editform.submit();
}
</script>

</head>

<BODY>

<form  name="editform"  method="post" action="<%=request.getContextPath()%>/sample.do?globe.method=add"  >
<table  class="form_table" >

<tr> 
<td> 样本名称</td> 
<td> <input type="text" name="name" value="<%=name%>"  maxlength="20" caption="样本名称"  /></td> 
</tr> 
<tr> 
<td> 样本编号</td> 
<td> <input type="text" name="code" value="<%=code%>"  maxlength="10" caption="样本编号" notNull /><%=msg%></td> 
</tr> 
<tr> 
<td> 样本地点</td> 
<td> <input type="text" name="place" value="<%=place%>"  maxlength="40" caption="样本地点"  /></td> 
</tr> 
<tr> 
<td> 样本时间</td> 
<td> <input type="text" name="setDate" value="<%=setDate%>"  id="setDate" isDate readonly caption="样本时间" class="readonly"  /> 
     <input type="image"  onClick="javascript:showDateDialog('<%=request.getContextPath()%>','setDate'); return false;"  src="<%=request.getContextPath()%>/js/date.gif"</td> 
</tr> 
<tr> 
<td> 样本命令</td> 
<td> <input type="text" name="status" value="<%=status%>"  maxlength="1" caption="样本状态"  /></td> 
</tr> 
<tr> 
<td> <input type="hidden" name="sampleId" value="<%=sampleId%>" /></td> 
</tr> 
</table>
</form>
<table  class="toolbar_table" >

<tr> 
<td> <input type="button"  name="querybtn"  class="button" value="保存" onClick="save()" /><input type="button"  name="delbtn"  class="button" value="关闭" onClick="javascript:closeWindow();" /></td> 
</tr> 
</table>

</BODY>
</HTML>