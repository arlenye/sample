<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>
<head>
<title>选择日期</title>
<style type="text/css">
		a { color: blue; text-decoration: none }
		a:link { color: blue; text-decoration: none }
		a:hover { color: #FF714C; text-decoration: underline }

		td { font-size:13px; }

		.header{
			font-size:13px;
			font-weight:bold;
			color: white;
			background-color: #AAAAFF;
		}
		</style>
</head>
<body bgcolor="white">
<script src="calendar.js" language="javascript"></script>
<div align="center"><script type="text/javascript">
				// var obj = window.dialogArguments;
				// alert(obj);
				// 改成以getElementById的方式来获取对象。
				//var agt=navigator.userAgent.toLowerCase();
				//var is_ie=(document.all);
				//alert(is_ie);
				//if(is_ie){
				//alert("yes");
			//	}
				var obj = opener.document.getElementById('<%=request.getParameter("fieldName")%>');
				var oldValue = obj.value;
				// var oldValue = opener.field.value;
				// alert(oldValue);
				
				/*
				 * 按确定的事件？（应该是按日期的事件）
				 */
				function btnOKClick(){
					close();
				}
				
				/*
				 * 按“今天”的事件
				 */
				function btnTodayClick() {
					var date = new Date();
					var today = 1900 + (date.getYear() % 1900) + "-";
					var month = date.getMonth() + 1;
					var day = date.getDate();

					if (month < 10)
					today += "0";
					today += month + "-";

					if (day < 10)
					today += "0"
					today += day;

					obj.value = today;
					close();
				}
				
				/*
				 * 按“关闭”的事件
				 */
				function btnCancelClick(){
					obj.value = oldValue;
					close();
				}
				
				/*
				 * 按“清除”的事件
				 */
				function btnClearClick(){
					obj.value = "";
					close();
				}

				cal = new Calendar(200, 140);
				cal.show();
			</script>
<table width="150">
	<tr align="center">
		<td><a href="#" onclick="btnTodayClick();">今天</a></td>
		<td><a href="#" onclick="btnClearClick();">清除</a></td>
		<td><a href="#" onclick="btnCancelClick();">关闭</a></td>
	</tr>
</table>
</div>
</body>
</html>
