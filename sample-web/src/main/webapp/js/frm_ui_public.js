//=======
	
	function checkboxSelectedAll(headObj, needChangeName) {
		checkboxName = headObj.name;
		checkboxValue = headObj.checked;
		
		//??checkbox???????
		if (needChangeName && checkboxName.substring(0, 4) == 'all_') {
			checkboxName = checkboxName.substring(4);
		}
		
		var checkObj = document.getElementsByName(checkboxName);
		if (checkObj) {
			for (var i = 0; i < checkObj.length; i++) {
				checkObj[i].checked = checkboxValue;
			}
		}
	}
	
	function trim(str) { 
		if (str.length > 0) {
			while ((str.substring(0,1) == " ") && (str.length > 0)) { 
				str = str.substring(1,str.length); 
			} 
			
			while (str.substring(str.length-1,str.length) == " ") { 
				str = str.substring(0,str.length-1); 
			}
		}
		return str;
	}
	
	function typeofFunction(targetObj, functionName) {

		if (document.all) {
			var funcObj = eval("targetObj." + functionName);
			if (funcObj) {
				var funStr = funcObj.toString();
				return (funStr && funStr.length >= 8 && funStr.substring(0, 8) == "function");
			} else {
				return false;
			}
		} else {
			return eval("typeof targetObj."+functionName) == "function";
		}

	}
	
	function buildForm(url, target, name) {
		var urls = url.split("?");
		if (urls[1])
			var params = urls[1].split("&");
			
		var formObj = document.createElement("FORM");
		formObj.action = urls[0];
		formObj.target = target;
		formObj.method = "POST";
		
		if (name)
			formObj.name = name;
			
		if (params) {
			for (var i = 0; i < params.length; i ++) {
				var inputObj = document.createElement("INPUT");
				inputObj.type = "hidden"
				inputObj.name = params[i].split("=")[0];
				inputObj.value = params[i].split("=")[1];
				
				formObj.appendChild(inputObj);								
			}		
		}
		
		document.body.appendChild(formObj);
		formObj.submit();
		document.body.removeChild(formObj);	
	}

	function startWith(oStr, sStr) {
		var s = oStr.substring(0, sStr.length);
		return s.toLowerCase() == sStr.toLowerCase();
	}
	
	//???????????????
	function getBoundingClientLeft(obj) {
		var left = 2;
		if (obj.clientLeft)
			left = obj.clientLeft;
		while (obj) {			
			left += obj.offsetLeft;
			obj = obj.offsetParent;
		}
		return left;
	}

	function getBoundingClientTop(obj) {
		var top = 2;
		if (obj.clientTop)
			top = obj.clientTop;
		while (obj) {
			top += obj.offsetTop;
			obj = obj.offsetParent;
		}
		return top;
	}

	function getBoundingClientRight(obj) {
		return obj.offsetWidth + getBoundingClientLeft(obj);
	}
	
	function getBoundingClientBottom(obj) {
		return obj.offsetHeight + getBoundingClientTop(obj);
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
