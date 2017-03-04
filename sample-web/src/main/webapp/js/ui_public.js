
function goPageNo(pageNo, pageCount, pageForm) 
{
	if (isNaN(pageNo) || pageNo == "") {
	    alert("请正确输入页码!");
		return false;
	} else if (pageNo < 1 || (pageNo > pageCount)) {
		alert("输入超出页码范围!");
		return false;
	}
	document.forms[pageForm]["globe.pageno"].value = pageNo;
	document.forms[pageForm].submit(); 
	return false;
}

function goOrder(order, orderSort, orderForm, orderKey) 
{ 

	var orders = order.split(",");
	var orderSorts = orderSort.split(",");
	orderString = "";
	
	if(orders != null && orders.length > 0) {
		for(i = 0; i < orders.length; i++) {
			if (orderSorts[i] != "" && orderSorts[i] != "NONE" && orderSorts[i] != "none") {
				orderString = orderString + orders[i] + " " + orderSorts[i] + ",";
			}
		}
		if(orderString.length > 0) {
			orderString = orderString.substring(0,orderString.length-1);
		}
	}
	
	//orderString = "plan.code asc";
	document.forms[orderForm][orderKey].value = orderString;
	document.forms[orderForm].submit();
}

function checkboxSelAll(headObj) 
{
    n = headObj.name;
	b = headObj.checked;
	// look for combox name for all_name
	if (n.substring(0, 4)=='all_') {
	    n = n.substring(4);
	}
	var checkObj = document.getElementsByName(n);
	if (checkObj) {
	    for (var i = 0; i < checkObj.length; i++) {
	        if (checkObj[i].type=="checkbox") {
			    checkObj[i].checked = b;
			}   
        }
    }
}

function getCheckId(obj)  { 
    var result="";
    if ((!obj)||(obj.length==0)) return "";
    for (i=0; i<obj.length; i++) {
        if (obj[i].type=="checkbox") {
            if (obj[i].checked) {
                result = result + obj[i].value + ",";
            }
        }
    } //end for
    
    if (result.substring(result.length-1,result.length)==",")
    result = result.substring(0,result.length-1);
    return result;
}

function getRadioId(obj)  {  //1
    var result="";
    if ((!obj)||(obj.length==0)) return "";
    for (i=0; i<obj.length; i++) {
        if (obj[i].type=="radio") {
            if (obj[i].checked) {
                result = obj[i].value;
                break;
            }
        }
    } //end for

    return result;
}

function openWindow(this_url,w_width,w_height,w_name,w_top,w_left) {
		if (!w_top)
			w_top = (screen.height - w_height)/2;
		if (!w_left)
			w_left = (screen.width - w_width)/2;
				
		w_param = "top=#t#,left=#l#,width=#w#,height=#h#,channelmode = no,directories=no,resizable=yes,location=no,menubar=no,scrollbars=yes,status=no,titlebar=no,toolbar=no";
		w_param = w_param.replace("#h#",w_height);
		w_param = w_param.replace("#w#",w_width);
		w_param = w_param.replace("#t#",w_top);
		w_param = w_param.replace("#l#",w_left);
	    if (w_name)
			childWindow = window.open(this_url,w_name,w_param);
		else
			childWindow = window.open(this_url,'',w_param);
}
	
function closeWindow()  {
    window.close();
}

function showDateDialog(webpath,fieldName) {
    openWindow(webpath + '/js/calendar.jsp?fieldName='+fieldName, 350, 300);
}

function StringBuffer(bufferSize) {
		if (bufferSize)
			this.bufferSize = bufferSize;
		else
			this.bufferSize = 500;
		this.bf = new Array(this.bufferSize);
		this.top = 0;
		this.value = "";

		this.append = append;
		this.toString = toString;
		this.concatBuffer = concatBuffer;
}

function append(str) {		
		this.bf[this.top++] = str;
		
		if (this.top == this.bufferSize) {
			this.concatBuffer(this.top);
			this.top = 0;
		}
		return this;
}

function toString() {
		this.concatBuffer(this.top);
		return this.value;
}

function concatBuffer(endIndex) {
		for (var i = this.bufferSize-1;i >= endIndex ;i-- ) {
			this.bf[i] = "";
		}
		this.value = this.value.concat(this.bf.join(""));		
}
	