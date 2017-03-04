// ********** Part I.  Class Defination ********** //
/* ------------ Calendar Object ------------------*/
function Calendar(width, height){

	// Properties and attributes definations
	this.YEAR = 0;
	this.MONTH = 1;
	this.DATE = 2;
	this.WEEK = 3;
	this.monthes = new Array(13);
	this.days = new Array(7);

	// Monthes Chinese definations
	this.monthes[0] = "一月";
	this.monthes[1] = "一月";
	this.monthes[2] = "二月";
	this.monthes[3] = "三月";
	this.monthes[4] = "四月";
	this.monthes[5] = "五月";
	this.monthes[6] = "六月";
	this.monthes[7] = "七月";
	this.monthes[8] = "八月";
	this.monthes[9] = "九月";
	this.monthes[10] = "十月";
	this.monthes[11] = "十一月";
	this.monthes[12] = "十二月";

	// Days Chinese definations
	this.days[0] = "日";
	this.days[1] = "一";
	this.days[2] = "二";
	this.days[3] = "三";
	this.days[4] = "四";
	this.days[5] = "五";
	this.days[6] = "六";

	// Properties of calendar
	this.width = 160;
	this.height = 140;
	this.backgroundColor = "white";
	this.color = "#330099";
	this.overColor = "red";
	this.borderColor = "#CCCCCC";
	this.isUnderline = true;

	// Properties of header
	this.headerBGColor = "#AAAAFF";
	this.headerStyle = "";
	this.headerColor = "white";
	this.headerStyleClass = "";

	// init this object
	var d = new Date();
        /**
         * added by yigo 2005-08-08
         * 这里(thisYear % 1900)作用是将年份转换位IE 3.x格式并且增加1900以得到真实的年份
         * （比如，2002年经过this Year%1900转换位IE 3.x格式位102，然后102再加上1900得到2002）。
         * 下面这条语句可以适用于从1900年到3799年的处理。
         */
	this.year = 1900 + (d.getYear() % 1900);
	this.month = d.getMonth() + 1;
	this.date = d.getDate();
	this.day = d.getDay();
        /**
         * added by yigo, 2005-08-08
         * 这里的current用于和下面一个变量c进行比较，可以不用转1900。
         */
	this.current = d.getYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();

	// Methods definations
	this.setWidth			 = setWidth;
	this.setHeight			 = setHeight;
	this.setBackgroundColor	 = setBackgroundColor;
	this.setColor			 = setColor;
	this.setOverColor		 = setOverColor;
	this.setBorderColor		 = setBorderColor;
	this.setHeaderBGColor	 = setHeaderBGColor;
	this.setHeaderStyle		 = setHeaderStyle;
	this.setHeaderColor		 = setHeaderColor;
	this.setIsUnderline		 = setIsUnderline;

	this.getMaxDayOfMonth	 = getMaxDayOfMonth;
	this.show				 = show;
	this.setYear			 = setYear;
	this.setMonth			 = setMonth;
	this.setDate			 = setDate;
	this.getDate			 = getDate;
	this.getMonth			 = getMonth;
	this.getYear			 = getYear;
	this.add				 = add;
	this.toString			 = toString;
	this.getDay				 = getDay;
	this.getMonthInString	 = getMonthInString;
	this.getChinese			 = getChinese;
	this.getFirstDayOfWeek	 = getFirstDayOfWeek;
	this.getCalendar		 = getCalendar;
	this.getWeeks			 = getWeeks;
	this.getTable			 = getTable;
	this.nextMonth			 = nextMonth;
	this.prevMonth			 = prevMonth;
	this.nextYear			 = nextYear;
	this.prevYear			 = prevYear;
	this.moveTo				 = moveTo;
	this.setOnClick			 = setOnClick;

	this.setWidth(width);
	this.setHeight(height);

	function setOnClick(click){
		this.onclick = click;
	}

	function setWidth(width){
		this.width = width > 300 ? width : 300;
	}

	function setHeight(height){
		this.height = height > 140 ? height : 140;
	}

	function setOverColor(color){
		this.overColor = color;
	}

	function setIsUnderline(underline){
		this.isUnderline = underline;
	}

	function setStyleClass(s){
		this.styleClass = s;
	}

	function setBackgroundColor(color){
		this.backgroundColor = color;
	}

	function setColor(color){
		this.color = color;
	}

	function setBorderColor(color){
		this.borderColor = color;
	}

	function setStyle(style){
		this.style = style;
	}

	function setHeaderBGColor(color){
		this.headerBGColor = color;
	}

	function setHeaderStyle(style){
		this.headerStyle = style;
	}

	function setHeaderColor(color){
		this.headerColor = color;
	}

	function setHeaderStyleClass(styleClass){
		this.headerStyleClass = styleClass;
	}

	// Methods implements
	/* ========================================================= */
	/* Gets current year                                         */
	/* Return int                                                */
	/* ========================================================= */
	function getYear() {
		return this.year;
	}

	/* ========================================================= */
	/* Gets current month                                        */
	/* Return int                                                */
	/* ========================================================= */
	function getMonth(){
		return this.month;
	}

	/* ========================================================= */
	/* Gets current date                                         */
	/* Return int                                                */
	/* ========================================================= */
	function getDate() {
		return this.date;
	}

	/* ========================================================= */
	/* Gets current day of week                                  */
	/* Return string                                             */
	/* ========================================================= */
	function getDay(){
		return this.days[this.day];
	}

	/* ========================================================= */
	/* Gets current month in Chinese                             */
	/* ========================================================= */
	function getMonthInString(){
		return this.monthes[this.month];
	}

	/* ========================================================= */
	/* Sets current year                                         */
	/* Param year(int) - current year                            */
	/* ========================================================= */
	function setYear(year){
		this.year  = year;
	}

	/* ========================================================= */
	/* Sets current month                                        */
	/* Param month(int) - current month                          */
	/* ========================================================= */
	function setMonth(month){
		this.month = month;
	}

	/* ========================================================= */
	/* Sets current date                                         */
	/* Param date(int) - current date                            */
	/* ========================================================= */
	function setDate(date){
		this.date = date;
	}

	/* ========================================================= */
	/* Gets max day of current month                             */
	/* Returns int                                               */
	/* ========================================================= */
	function getMaxDayOfMonth(){
		switch(this.month){
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				return 31;
			case 4:
			case 6:
			case 9:
			case 11:
				return 30;
			case 2:
				if(this.year % 4 == 0 && this.year % 100 != 0){
					return 29;
				}else{
					return 28;
				}
		}
	}

	/* ========================================================= */
	/* Gets table what contain current month                     */
	/* Return string                                             */
	/* ========================================================= */
	function getTable(){
		var firstDay = this.getFirstDayOfWeek();
		var maxDay = this.getMaxDayOfMonth();
		var weeks = this.getWeeks();
		var intDay = 1;

		var table = "<table width='100%' height='" + this.height + "' cellpadding='3' cellspacing='1' bgcolor='" + this.borderColor + "'>";
		// Shows header
		table += "<tr bgcolor='" + this.headerBGColor + "'>";
		if(this.headerStyle != ""){
			for(var i = 0; i < 7; i ++){
				table += "<td align='center' class='" + this.headerStyle + "'>" + this.days[i] + "</td>";
			}
		}else{
			for(var i = 0; i < 7; i ++){
				table += "<td align='center'><font color='" + this.headerColor + "'>" + this.days[i] + "</font></td>";
			}
		}
		table += "</tr>";

		// Show calendar
		table +=  "<tr bgcolor='" + this.backgroundColor + "'>";
		for(var i = 0; i < firstDay; i ++)
			table += "<td>&nbsp;</td>";
		for(var i = firstDay; i < 7; i ++){
			table += "<td align='center' "
					+ "onmouseover='over(this);' "
					+ "onclick='dateClick(" + this.year + ", " + this.month + ", " + (intDay ++) + ")'"
					+ "style='cursor:hand;border:white 1px solid' "
					+ "onmouseout='out(this);'>"
					+ (intDay - 1) + "</td>";
		}
		var c = this.year + "-" + this.month;
		for(var i = 0; i < weeks; i ++){
			table += "<tr bgcolor='" + this.backgroundColor + "' style='font-size:12px;'>";
			for(var j = 0; j < 7; j ++){
				if(intDay <= maxDay){
					if (this.current != c + "-" + intDay) {
						table += "<td align='center' "
							+ "onmouseover='over(this);' "
							+ "onclick='dateClick(" + this.year + ", " + this.month + ", " + (intDay ++) + ")'"
							+ "style='cursor:hand;border:white 1px solid' "
							+ "onmouseout='out(this);'>"
							+ (intDay - 1) + "</td>";
					} else {
					    table += "<td align='center' "
							+ "onmouseover='over(this);' "
							+ "onclick='dateClick(" + this.year + ", " + this.month + ", " + (intDay ++) + ")'"
							+ "style='cursor:hand;border:white 1px solid' "
							+ "onmouseout='out(this);'><b><font color = \"red\">"
							+ (intDay - 1) + "</font></b></td>";
					}
				}
				else
					table += "<td>&nbsp;</td>";
			}
			table += "</tr>";
		}
		// wrap table
		table += "</table>";
		return table;
	}

	function getCalendar(){
		var style = "<style>";
		style += "td.calendar{font-size:12px;}";
		style += "a.calendarStyle{font-size:12px;color:" + this.color + ";text-decoration:none;	background-color: white;	border-bottom : 4px solid white;	border-top : 4px solid white;	border-left  : 4px solid white;	border-right  : 4px solid white;}";
		style += "a.calendarStyle:hover{color:" + this.overColor + ";text-decoration:";

		if(this.isUnderline){
			style += "underline";
		}else{
			style += "none";
		}

		style += ";	background-color: white;	border-bottom : 4px solid white;	border-top : 4px solid white;	border-left  : 4px solid white;	border-right  : 4px solid white;}";
		style += "input.calendarInput{height: 0.4cm;font-size: 9pt;border: 1 solid;}</style>";

		var calendar = style +  "<table width='" + this.width + "' "
		calendar += "height='" + this.height + "' "
		calendar += "cellpadding='0' cellspacing='0' "
		calendar += "bgcolor='" + this.borderColor + "'>";
		calendar += "<tr bgcolor='white'><td align='center' style='line-height:180%'>";
		calendar += "<div id='_title'>"
		calendar += "<font color='" + this.headerBGColor + "'><b>"
		calendar += this.getChinese().substring(0, 11) + "</b></font></div>";
		calendar += "<tr><td><div id='_calendarContainer'>";
		calendar += this.getTable();
		calendar += "</div></td></tr>";
		calendar += "<tr bgcolor='" + this.backgroundColor + "'><td align='center'>";
		calendar += "<table border='0'><tr>"
		calendar += "<td><a href='#' onclick='cal.prevYear();'>上年</a></td><td>|</td>";
		calendar += "<td><a href='#' onclick='cal.prevMonth();'>上月</a></td><td>|</td>";
		calendar += "<td><a href='#' onclick='cal.nextMonth();'>下月</a></td><td>|</td>";
		calendar += "<td><a href='#' onclick='cal.nextYear();'>下年</a></td><td>|</td>";
		calendar += "<td><a href='#' onclick='cal.moveTo();'>转到</a></td>";
		/*
		calendar += "<td onclick='cal.prevYear()' style='cursor:hand' class='calendarStyle' onmouseover='over(this)' onmouseout='out(this)'>上年</td><td>|</td>";
		calendar += "<td onclick='cal.prevMonth()' style='cursor:hand' class='calendarStyle' onmouseover='over(this)' onmouseout='out(this)'>上月</td><td>|</td>";
		calendar += "<td onclick='cal.nextMonth()' style='cursor:hand' class='calendarStyle' onmouseover='over(this)' onmouseout='out(this)'>下月</td><td>|</td> ";
		calendar += "<td onclick='cal.nextYear()' style='cursor:hand' class='calendarStyle' onmouseover='over(this)' onmouseout='out(this)'>下年</td><td>|</td>";
		calendar += "<td onclick='cal.moveTo()' style='cursor:hand' onmouseover='over(this)' onmouseout='out(this)'>转到</td>";
		*/
		calendar += "<form name='_calendarFrom' onsubmit='return true;'>";
		calendar += "</td><td><input type='text' name='_calendarYear' maxlength='4' size='4' class='calendarInput'/></td><td>年</td>";
		calendar += "<td><input type='text' name='_calendarMonth' maxlength='2' size='2' class='calendarInput'/></td><td>月</td>";
		calendar += "</form>";
		calendar += "</tr></table>"
		calendar += "</td></tr>";
		calendar += "</table>";
		return calendar;
	}

	/* ========================================================= */
	/* Move current year, month, week and date relatively        */
	/* Param field - int, this.YEAR, this.MONTH, this.DATE,      */
	/*               this.WEEK                                   */
	/* Param value - int, relative offset, negative move before  */
	/* ========================================================= */
	function add(field, value){
		switch(field){
			case this.YEAR:
				this.date = 1
				this.year += value;
				break;
			case this.MONTH:
				this.date = 1
				this.month += value;
				break;
			case this.DATE:
				this.date += value;
				break;
			case this.WEEK:
				this.date += value * 7;
				break;
		}
		var x = new Date(this.year, this.month - 1, this.date);
		this.year = x.getYear();
		if (this.year <= 100) this.year += 1900;
		this.month = x.getMonth() + 1;
		this.date = x.getDate();
		this.day = x.getDay();
	}

	/* ========================================================= */
	/* Returns the primitive value of a Date object.             */
	/* Overrides the Object.valueOf method                       */
	/* Return String                                             */
	/* ========================================================= */
	function toString(){
		var s = this.year + "-";
		if(this.month < 10) s += "0";
		s += this.month + "-";
		if(this.date < 10) s += "0";
		s += this.date;
		return s;
	}

	/* ========================================================= */
	/* Chinese version of toString method                        */
	/* Return String                                             */
	/* ========================================================= */
	function getChinese(){
		var s = this.year + " 年 ";
		if(this.month < 10) s += "0";
		s += this.month + " 月";
		//if(this.date < 10) s += "0";
		//s += this.date + " 日";
		//s += this.getDay();

		return s;
	}

	/* ========================================================= */
	/* Gets what day is the first day of this month              */
	/* Return int                                                */
	/* ========================================================= */
	function getFirstDayOfWeek(){
		var t = this.day + (1 - this.date);
		t = t % 7;
		t = (7 + t) % 7;
		return t;
	}

	/* ========================================================= */
	/* Gets weeks count of this month                            */
	/* Return int                                                */
	/* ========================================================= */
	function getWeeks(){
		var maxDay = this.getMaxDayOfMonth();
		var firstDay = this.getFirstDayOfWeek();
		var t = maxDay - (7 - firstDay);
		var weeks = parseInt(t / 7);
		if(t % 7 != 0) weeks ++;
		return weeks;
	}

	/* ========================================================= */
	/* Moves current date to next month                          */
	/* ========================================================= */
	function nextMonth(){
		this.add(this.MONTH, 1);
		_calendarContainer.innerHTML = this.getTable();
		_title.innerHTML = this.getChinese().substring(0, 11);
	}

	/* ========================================================= */
	/* Moves current date to previous month                      */
	/* ========================================================= */
	function prevMonth(){
		this.add(this.MONTH, -1);
		_calendarContainer.innerHTML = this.getTable();
		_title.innerHTML = this.getChinese().substring(0, 11);
	}

	/* ========================================================= */
	/* Moves current date to next year                           */
	/* ========================================================= */
	function nextYear(){
		this.add(this.YEAR, 1);
		_calendarContainer.innerHTML = this.getTable();
		_title.innerHTML = this.getChinese().substring(0, 11);
	}

	/* ========================================================= */
	/* Moves current date to previous year                       */
	/* ========================================================= */
	function prevYear(){
		this.add(this.YEAR, -1);
		_calendarContainer.innerHTML = this.getTable();
		_title.innerHTML = this.getChinese().substring(0, 11);
	}

	/* ========================================================= */
	/* Moves current date to an absolute date                    */
	/* ========================================================= */
	function moveTo(){
		var objYear = document.forms["_calendarFrom"].elements("_calendarYear");
		var objMonth = document.forms["_calendarFrom"].elements("_calendarMonth");
		var intYear = parseInt(objYear.value);
		var intMonth = parseInt(objMonth.value);

		if(isNaN(intYear) || (intYear != objYear.value)){
			alert("输入的年份无效");
			objYear.focus();
			objYear.select();
			return;
		}

		if(isNaN(intMonth) || (intMonth != objMonth.value)||((intMonth<1)||(intMonth>12))){
			alert("输入的月份无效");
			objMonth.focus();
			objMonth.select();
			return;
		}

		var tmpDate = new Date(intYear, intMonth - 1, 1);
		this.day = tmpDate.getDay();
		this.year = intYear;
		this.month = intMonth;
		this.date = 1;

		_calendarContainer.innerHTML = this.getTable();
		_title.innerHTML = this.getChinese().substring(0, 11);
	}

	/* ========================================================= */
	/* Default output                                            */
	/* ========================================================= */
	function show(){
		document.write(this.getCalendar());
	}
}

//****************** Part II. Events handles ********************//
/* ============================================================= */
/* Date field mouseover event handle                             */
/* ============================================================= */
function over(b){
	var o = b.style;
	o.borderBottom = "#000000 1px solid";
	o.borderTop = "white 1px solid";
	o.borderRight = "#000000 1px solid";
	o.borderLeft = "white 1px solid";
	o.backgroundColor = "#DDDDFF";
}

/* ============================================================= */
/* Date field mouseout event handle                              */
/* ============================================================= */
function out(b){
	var o = b.style;
	o.borderBottom = "white 1px solid";
	o.borderTop = "white 1px solid";
	o.borderRight = "white 1px solid";
	o.borderLeft = "white 1px solid";
	o.backgroundColor = "white";
}

/* ============================================================= */
/* Date field mousedown event handle                             */
/* ============================================================= */
function down(b){
	var o = b.style;
	o.borderBottom = "white 1px solid";
	o.borderTop = "black 1px solid";
	o.borderRight = "white 1px solid";
	o.borderLeft = "black 1px solid";
	o.backgroundColor = "#DDDDFF";
}

/* ============================================================= */
/* Date field click event handle                                 */
/* ============================================================= */
function dateClick(year, month, day){
	var dateString = year + "-";
	if(month < 10) dateString += "0";
	dateString += month + "-";
	if(day < 10) dateString += "0";
	dateString += day;
	obj.value = dateString;
	close();
}
