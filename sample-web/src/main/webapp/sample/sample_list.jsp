<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>  
<%@ page import="org.sample.web.vo.*" %>

<html>
<head>
<title>样本列表</title>
<script language="javascript" src="<%=request.getContextPath()%>/js/ui_public.js"></script>

<link href="<%=request.getContextPath()%>/css/dzcy.css" type="text/css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/css/xcontrol.css" type="text/css" rel="stylesheet">

<script>
function refresh() {
    document.all.queryform.submit();
}

function loadRecord(id) {  
    action = "<%=request.getContextPath()%>/sample.sv?method=load&id="+id;
    openWindow(action,550,400);
}

function queryRecord()  {
    document.all.queryform.submit();
}  

function addRecord() {
    var action = "<%=request.getContextPath()%>/sample/sample_edit.jsp";
    openWindow(action,550,400);
}

function updRecord() {  

    var obj = document.getElementsByName("sampleId");
    var sampleIds = getRadioId(obj);
    
    if (sampleIds.length<=0) {
        alert("没有选择样例记录");  return;
    }
    
    if (sampleIds.indexOf(",")>-1) {
        alert("只能选择一条样例记录修改");  return;
    }

    var action = "<%=request.getContextPath()%>/sample.sv?method=load&id="+sampleIds;
    openWindow(action,550,400);
} 

function delRecord() {   
    var obj = document.getElementsByName("sampleId");
    var sampleIds = getRadioId(obj);
    if (sampleIds.length<=0) {
        alert("你没有选择样例记录");  return;
    }
    if (!confirm("确实要删除吗?")) return;
    var action = "<%=request.getContextPath()%>/sample.sv?method=delete&sampleIds="+sampleIds;
    openWindow(action,200,100);
} 
</script>

</head>
<%
    String namex = request.getParameter("name");
    String codex = request.getParameter("code");
    String placex = request.getParameter("place");
    String setStartDatex = request.getParameter("setStartDate");
    String setEndDatex = request.getParameter("setEndDate");
    String statusx = request.getParameter("status");
    
    if (namex==null) namex = "";
    if (codex==null) codex = "";
    if (placex==null) placex = "";
    if (setStartDatex==null) setStartDatex = "";
    if (setEndDatex==null) setEndDatex = "";
    if (statusx==null) statusx = "";

%>
<BODY>

<form  name="queryform"  method="post" action="<%=request.getContextPath()%>/sample.sv?method=find"  >
<table class="form_table" >
<tr> 
    <td>样本名称</td> 
    <td> <input type="text" name="name" value="<%=namex%>" /></td> 
    
    <td>样本代码</td> 
    <td><input type="text" name="code" value="<%=codex%>" /></td> 
    <td>样本地点</td> 
    <td><input type="text" name="place" value="<%=placex%>" /></td> 
</tr> 
<tr> 
    <td> 样本开始时间</td> 
    <td> <input type="text" name="setStartDate"  id="setStartDate" readonly value="<%=setStartDatex%>"  class="readonly"  /> <input type="image"  onClick="javascript:showDateDialog('<%=request.getContextPath()%>','setStartDate'); return false;"  src="<%=request.getContextPath()%>/js/date.gif"</td> 
    <td> 样本结束时间</td> 
    <td> <input type="text" name="setEndDate"  id="setEndDate" readonly isDate class="readonly" value="<%=setEndDatex%>"  /> <input type="image"  onClick="javascript:showDateDialog('<%=request.getContextPath()%>','setEndDate'); return false;"  src="<%=request.getContextPath()%>/js/date.gif"</td> 
    <td> 样本状态</td> 
    <td> 
    <select  name="status" >
        <option value=""></option>
        <option value="0">正常</option>
        <option value="1">异常</option>
        <option value="2">错误</option>
     </select>
    </td> 
</tr> 
</table>
</form>

<table class="toolbar_table">
<tr> 
<td>
    <input type="button" name="querybtn"  class="button" value="查询" onClick="queryRecord()" />
    <input type="button"  name="addbtn"  class="button" value="添加" onClick="addRecord()" />
    <input type="button"  name="updbtn"  class="button" value="修改" onClick="updRecord()" />
    <input type="button"  name="delbtn"  class="button" value="删除" onClick="delRecord()" />
</td> 
</tr> 
</table> 

<table  id="usertable" class="grid_table" >
<!-- 表头 -->
<tr>  
    <th>选择</th> 
    <th>修改</th>  
    <th>样本名称</th>  
    <th>样本代码</th>  
    <th>样本地点</th>  
    <th>样本时间</th>  
    <th>状态</th> 
</tr> 
<%
    
    List list = (List)request.getAttribute("samplelist");
    if ((list==null)||(list.size()==0)) {
        out.print("<tr><td align=\"center\" colspan=\"7\">没有找到相应记录</td></tr>");
    }
    else {
        
        for (int k=0;k<list.size();k++) {
            SampleTO sto = (SampleTO)list.get(k);
            
            String sampleId = sto.getSampleId()+"";
            String name = sto.getName();
            String code = sto.getCode();
            String place = sto.getPlace();
            String setDate = sto.getSetDate();
            String status = sto.getStatus();
            
            out.println("<tr>");
            out.println("<td><input type=\"radio\" name=\"sampleId\" value="+sampleId+" /></td>");
            out.println("<td><a style=\"cursor:hand\" onClick=loadRecord("+sampleId+")>修改</a></td>");
            out.println("<td>"+name+"</td>");
            out.println("<td>"+code+"</td>");
            out.println("<td>"+place+"</td>");
            out.println("<td>"+setDate+"</td>");
            out.println("<td>"+status+"</td>");
            out.println("</tr>");
        } //end for k
        
       
    }
%>

</table> 


</BODY>
</HTML>