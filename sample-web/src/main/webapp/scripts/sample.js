/** sample.js 封装sample相关处理 **/

//加载用户笔记本列表
function loadSamples(pageNo){
	
	var sampleName = $("#sampleName").val();
	var code = $("#code").val();
	var place = $("#place").val();
	var status = $("#status").val();
	var pageSize = $("#pageSize").val();
	

   	//发送ajax请求
   	$.ajax({
   		url:base_path+"/sample/list.do",
   		type:"post",
   		data:{"sampleName":sampleName,"code":code,"place":place,"status":status,"pageNo":pageNo,"pageSize":pageSize},
   		dataType:"json",
   		success:function(result){
   			if(result.status==0){
   				$("#sampleTable tr").empty();
   				createSampleTh();
   				var samples = result.data;
   				//循环生成列表元素
   				for(var i=0;i<samples.length;i++){
   					/*var sampleName = samples[i].sampleName;
   					var code = samples[i].code;
   					var place = samples[i].place;
   					var date = samples[i].date;
   					var status = samples[i].status;*/
   					createSampleTrs(samples[i]);
   				}
   			}
   		},
   		error:function(){
   			alert("加载笔记本列表异常");
   		}
   	});
    
};

//创建笔记本列表li元素
function createSampleTh(){
	
	var s = "";
	s+='<select id="isDb" onchange="loadSamples(1)">';
	s+='<option value="">--</option>';
	s+='<option value="1">是</option>';
	s+='<option value="0">否</option>';
	s+='</select>';
	
	//构建列表li元素
	var tr = "";
	tr+='<tr>';
	tr+='<th></th>';
	tr+='<th>样本名称</th>';
	tr+='<th>样本代码</th>';
	tr+='<th>样本地点</th>';
	tr+='<th>样本时间</th>';
	tr+='<th>状态 '+s+'</th>';
	tr+='<th align="center">选择</th>';
	tr+='<th>修改</th>';
	tr+='</tr>';
	//将bookId绑定到li元素上
	var $sampleTr = $(tr);
	//将li元素添加到ul列表中
	$("#sampleTable").append($sampleTr);
};



//创建笔记本列表li元素
function createSampleTrs(sample){
	//构建列表li元素
	var tr = "";
	tr+='<tr>';
	tr+='<td></td>';
	tr+='<td>'+sample.sampleName+'</td>';
	tr+='<td>'+sample.code+'</td>';
	tr+='<td>'+sample.place+'</td>';
	tr+='<td>'+sample.date+'</td>';
	tr+='<td>'+sample.status+'</td>';
	tr+='<td><input type=\"radio\" name=\"sampleId\" value='+sample.sampleId+' /></td>';
	tr+='<td><a style=\"cursor:hand\" onClick=loadRecord("+sampleId+")>修改</a></td>';
	tr+='</tr>';
	//将bookId绑定到li元素上
	var $sampleTr = $(tr);
	//将li元素添加到ul列表中
	$("#sampleTable").append($sampleTr);
};

