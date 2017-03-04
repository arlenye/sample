function getUnicodeLength(str){
      if(str==null) return 0;
     var cArr = str.match(/[^\x00-\xff]/ig);
     return str.length + (cArr == null ? 0 : cArr.length);

}


function isPositiveInt(inputVal)
{
   inputStr = inputVal.toString()
   if(inputStr=="0") return false;

   for (var i = 0; i < inputStr.length; i++) {
           var oneChar = inputStr.charAt(i)
           if (oneChar < "0" || oneChar > "9")
                   return false
   }
   return true
}

function isNumber(aValue){
   return isValid(aValue)  && !isNaN(aValue);

}

function checkInput(aFormObject){

    var checkFlag=true;
    var len=aFormObject.length;
    var alertMsg="";
    var firstField=null;
  
    for(var i=0;i<len;i++){
      var objItem=aFormObject.elements[i];
   
      if(objItem.disabled==true) continue;
      res=checkField(objItem);           
      if(isValid(res)) {
         checkFlag=false;  
         alertMsg+=res+"\r\n";
         if(firstField==null) firstField=objItem;
      }

   }

    if(!checkFlag)  {
       alert(alertMsg);
       firstField.focus();
    }



    return checkFlag;
 }
  
function checkField(objItem){
	 var resultMsg="";
	
	 if(objItem.getAttribute("notNull")!=null){	
		 if( !isValid(objItem.value)) {
			   resultMsg=objItem.getAttribute("caption")+'不能为空' ;		  
		 }
	  }

	 if(objItem.getAttribute("isNumber")!=null){
		 if( isValid(objItem.value) &&   !isNumber(objItem.value)) {
		    resultMsg=objItem.getAttribute("caption")+'必须是数字';		  
		}
	 }
	 
	 if(objItem.getAttribute("isFilterNumber")!=null){
		 if( isValid(objItem.value) &&   !isFilterNumber(objItem.value)) {
		    resultMsg=objItem.getAttribute("caption")+'必须是数字';		  
		}
	 }

     if(objItem.getAttribute("isPositiveInt")!=null){
		 if( isValid(objItem.value) &&   !isPositiveInt(objItem.value)) {
		      resultMsg=objItem.getAttribute("caption")+'必须是正整数' ; 		
		}
	 }
	 
	 if(objItem.getAttribute("isFilterPositiveInt")!=null){
		 if( isValid(objItem.value) &&   !isFilterPositiveInt(objItem.value)) {
		      resultMsg=objItem.getAttribute("caption")+'必须是正整数' ; 		
		}
	 }


     if(objItem.getAttribute("minLength")!=null){
		 if( getUnicodeLength( objItem.value  )  <  parseInt(objItem.getAttribute("minLength"))) {
		     resultMsg=objItem.getAttribute("caption")+'长度至少必须是'+objItem.getAttribute("minLength") ;		
		}
	   }


     if(objItem.getAttribute("maxLength")!=null){
		 if( getUnicodeLength( objItem.value  ) > parseInt(objItem.getAttribute("maxLength"))  ) {
		    resultMsg=objItem.getAttribute("caption")+'长度不能超过'+objItem.getAttribute("maxLength") ;		
		}
	  }

     //mask
     if(objItem.getAttribute("mask")!=null){
		 if( false ) {  //checkMask(objItem.value)
		     resultMsg=objItem.getAttribute("caption")+'格式必须是'+objItem.getAttribute("mask") ;		
		}
	 }

     //regexp
     if(objItem.getAttribute("regexp")!=null){
		if(!checkRegexp(objItem.value,objItem.getAttribute("regexp"))  ) {
		    resultMsg=objItem.getAttribute("caption")+'格式必须是'+objItem.getAttribute("regexp") ;		
		}
	 }

     //isFilterDate
     if(objItem.getAttribute("isFilterDate")!=null){
		if(isValid(objItem.value) &&   ! isFilterDate(objItem.value)  ) {
		    resultMsg=objItem.getAttribute("caption")+'必须是日期' ;		 
		}
	 }
	 
	 //isDate
     if(objItem.getAttribute("isDate")!=null){
		if(isValid(objItem.value) &&   ! isDate(objItem.value)  ) {
		    resultMsg=objItem.getAttribute("caption")+'必须是日期' ;		 
		}
	 }
	 

     //isEmail
     if(objItem.getAttribute("isEmail")!=null){
	 	if(isValid(objItem.value) &&   ! isEmail(objItem.value) ) {
		   resultMsg=objItem.getAttribute("caption")+'必须是Email格式' ;		 
		}
	 }

     //isURL
     if(objItem.getAttribute("isURL")!=null){
		 if(isValid(objItem.value) &&   !isURL(objItem.value) ) {
		     resultMsg=objItem.getAttribute("caption")+'必须是网址' ;		 
		}
	 }


     //isPhone
     if(objItem.getAttribute("isPhone")!=null){
		 if(isValid(objItem.value) &&  ! isPhone(objItem.value) ) {
		    resultMsg=objItem.getAttribute("caption")+'必须是电话号码' ;
	
		}
	  }
	  
     //isWordChar
     if(objItem.getAttribute("isWordChar")!=null){
		 if( isValid(objItem.value) &&   !isWordChar(objItem.value) ) {
		    resultMsg=objItem.getAttribute("caption")+'必须是有效字符';	
		}
	  }
	  	  
     return resultMsg;

}


function resetForm(formName){
  var elements = document.forms[formName].elements;
  if (elements != null) {
    for (i = 0;i < elements.length; i ++) {
      if (elements[i].getAttribute("resetdisable") != null) continue;    
      if (elements[i].tagName == 'SELECT') {
          elements[i].value = "";
      }
      
      if (elements[i].tagName == 'TEXTAREA') {
          elements[i].innerText = "";
      }
      
      if (elements[i].tagName == 'INPUT') {
          if (elements[i].type == 'text' || elements[i].type == 'password' || elements[i].type == 'hidden')
            elements[i].value = "";
          if (elements[i].type == 'checkbox' || elements[i].type == 'radio')
            elements[i].checked = false;
      }
    
    }
  }
}

function isEmail(str){
   var pattern=/[a-zA-Z0-9_.]{1,}@[a-zA-Z0-9_]{1,}.[a-zA-Z0-9_]{1,}/;
   return checkRegexp(str,pattern);
}


function isWordChar(str){
   var pattern=/^[a-zA-Z0-9_]*$/;
   return checkRegexp(str,pattern);
}



function isPassword(str){
   var pattern=/^(\w){6,20}$/;
   return checkRegexp(str,pattern);
}


function isPhone(str){
   var pattern=/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
   return checkRegexp(str,pattern);
}

function isPostalCode(str){
	var pattern=/^[a-zA-Z0-9 ]{3,12}$/;
  	return checkRegexp(str,pattern);
}

/*function isDate(str){
   return checkRegexp(str,/^(0|[1-9]\d{0,2}|[0-1]\d{3}|20\d{2}|20[0-4]\d|2050)-(\d|0\d|1[0-2])-(\d|[0-2]\d|3[0-1])$/);

}*/



function checkRegexp(strValue,strPattern){
// var pattern = /^-?d $/;
	if(strValue.match(strPattern)==null){
		return false;
	}else{
		return true;
	}
}

function isFilterNumber(value) {
	return isFilter(value, "isNumber");
}

function isFilterPositiveInt(value) {
	return isFilter(value, "isPositiveInt");
}

function isFilterDate(value) {
	return isFilter(value, "isDate");
}

function isFilter(value, type) {
	var vs = value.split(",");
	for (i = 0; i < vs.length; i ++) {
		if (vs[i].toUpperCase() == "NULL") {
			continue;
		} else if ((j = vs[i].indexOf("..")) != -1) {
			min = vs[i].substring(0, j);
			max = vs[i].substring(j + 2);
			if (type == "isNumber") {
				if (!isNumber(min) || !isNumber(max))
					return false;
			} else if (type == "isPositiveInt") {
				if (!isPositiveInt(min) || !isPositiveInt(max))
					return false;
			} else if (type == "isDate") {
				if (!isDate(min) || !isDate(max))
					return false;
			}
		} else {
			if (type == "isNumber") {
				if (!isNumber(vs[i]))
					return false;
			} else if (type == "isPositiveInt") {
				if (!isPositiveInt(vs[i]))
					return false;
			} else if (type == "isDate") {
				if (!isDate(vs[i]))
					return false;
			} 
		}
	}
	return true;
}

function isDate(value) {
	if (!checkRegexp(value, /^\d{4}-\d{2}-\d{2}$/)) return false;
	var ds = value.split("-");
	var date = new Date(ds[0], ds[1]-1, ds[2]);
	return (date.getFullYear() == ds[0] && date.getMonth()+1 == ds[1] && date.getDate() == ds[2]);
}

//=============================================
function isValid(aStr){
  var aRes=true;
  if(aStr==null || aStr=="" ) aRes=false;
  return aRes;
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
	
function checkRegexp(strValue,strPattern){
    if(strValue.match(strPattern)==null){
	    return false;
	}else{
		return true;
	}
}

//==================??===========================
function isNumber(aValue){
   return isValid(aValue)  && !isNaN(aValue);
}

//==================??===========================
function isEmail(str){
   var pattern=/[a-zA-Z0-9_.]{1,}@[a-zA-Z0-9_]{1,}.[a-zA-Z0-9_]{1,}/;
   return checkRegexp(str,pattern);
}

//==================??===========================
function isDate(value) { //2005-12-2
	if (!checkRegexp(value, /^\d{4}-\d{1,2}-\d{1,2}$/)) return false;
	var ds = value.split("-");
	var date = new Date(ds[0], ds[1]-1, ds[2]);
	return (date.getFullYear() == ds[0] && date.getMonth()+1 == ds[1] && date.getDate() == ds[2]);
}

function isPassword(str){
   var pattern=/^(\w){6,20}$/;
   return checkRegexp(str,pattern);
}