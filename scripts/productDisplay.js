function testDB() {
	alert("hello");
	ar connection = new ActiveXObject("ADODB.Connection") ;

	var connectionstring="Data Source=db4free.net;Initial Catalog=nbgardensqa;User ID=gemmai95;Password=raysmithy;Provider=SQLOLEDB";

	connection.Open(connectionstring);
	var rs = new ActiveXObject("ADODB.Recordset");

	rs.Open("SELECT * FROM Product", connection);
	rs.MoveFirst
	while(!rs.eof)
	{
	   document.write(rs.fields(1));
	   rs.movenext;
	}

	rs.close;
	connection.close;
}

function testing() {
	alert("TEST");
}


function startTime() {
	// Getting the time and date
	var today = new Date();
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
	var day = today.getDay();
	var date = today.getDate();
	var month = today.getMonth();
	var year = today.getFullYear();
	
	// Checking the time and date
	hour = checkTime(hour);
	minute = checkTime(minute);
	second = checkTime(second);
	
	var day = dayString(day);
	var month = monthString(month);
	var dateEnding = dayEndingString(date);
	
	// Adding the result to the div
	document.getElementById('clock').innerHTML = hour + ":" + minute;
	var t = setTimeout(function(){startTime()},500);
	
	document.getElementById('date').innerHTML = day + ", " + date + dateEnding + " " + month + " " + year;
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}

function dayString(dayIndex) {
	return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dayIndex];
}

function monthString(monthIndex) {
	return ["January","February","March","April","May","June","July","August","September","October","November","December"][monthIndex];
}

function dayEndingString(endIndex) {
	if (endIndex == 1 || endIndex == 21 || endIndex == 31) {
		return "st";
	} else if (endIndex == 2 || endIndex == 22) {
		return "nd";
	} else if (endIndex == 3 || endIndex == 23) {
		return "rd";
	} else {
		return "th";
	}
}

function changeBackgroundImage(direction) {
	// BUG: Can't have more than 10 images
	
	// Get the image string, remove ".jpg" to leave the number
	var img = document.getElementById('body'),
	style = img.currentStyle || window.getComputedStyle(img, false),
	bi = style.backgroundImage.slice(4, -1);
	var lastFive = bi.substr(bi.length - 6, bi.length); // was 5
	lastFive = lastFive.substr(lastFive.length-6, lastFive.length - 5);
	var imgNo = parseInt(lastFive);
	
	// Next image
	if (direction == 'next'){
		if (imgNo == 10){
			imgNo = 1;
		} else {
			imgNo = imgNo + 1;
		}
	// Previous image
	} else if (direction == 'prev'){
		if (imgNo == 1){
			imgNo = 10;
		} else {
			imgNo = imgNo - 1;
		}
	}
	// Setting the new background image
	document.body.style.backgroundImage = "url('backgrounds/" + imgNo + ".jpg')";	
}

function timetableLoad(direction) {
	// This function runs once when the page loads or refreshes
	// It will just display the content, function below can change day etc
	
	var monday =  	["10-5.30 | Work"];
	var tuesday = 	["9-5.30 | Work"];
	var wednesday = ["9-5.30 | Work"];
	var thursday = 	["9-5.30 | Work"];
	var friday = 	["9-.30 | Work"];
	var saturday = 	["Misc programming projects"];
	var sunday = 	["Misc programming projects"];
	var schedule = [];
	
	var today = new Date();
	var dayNo = today.getDay(); // Get day as integer
	
	var day = dayString(dayNo); // Convert integer to day
	
	if (day == "Monday"){
		schedule = monday;
		document.getElementById('day').innerHTML = "Mon";
	} else if (day == "Tuesday"){
		schedule = tuesday;
		document.getElementById('day').innerHTML = "Tues";
	} else if (day == "Wednesday"){
		schedule = wednesday;
		document.getElementById('day').innerHTML = "Wed";
	} else if (day == "Thursday"){
		schedule = thursday;
		document.getElementById('day').innerHTML = "Thurs";
	} else if (day == "Friday"){
		schedule = friday;
		document.getElementById('day').innerHTML = "Fri";
	} else if (day == "Saturday"){
		schedule = saturday;
		document.getElementById('day').innerHTML = "Sat";
	} else if (day == "Sunday"){
		schedule = sunday;
		document.getElementById('day').innerHTML = "Sun";
	}

	// Putting the correct day schedule in the timetable div
	if (schedule.length == 1){
		document.getElementById('timetable').innerHTML = schedule;
	} else if (schedule.length == 2){
		document.getElementById('timetable').innerHTML = schedule[0] + "<br><br>" + schedule[1];
	} else if (schedule.length == 3){
		document.getElementById('timetable').innerHTML = schedule[0] + "<br><br>" + schedule[1] + "<br><br>" + schedule[2];
	} else {
		// do something
	}
}

function timetable(direction) {
	var monday =  	["10-5.30 | Work"];
	var tuesday = 	["9-5.30 | Work"];
	var wednesday = ["9-5.30 | Work"];
	var thursday = 	["9-5.30 | Work"];
	var friday = 	["9-5.30 | Work"];
	var saturday = 	["Misc programming projects"];
	var sunday = 	["Misc programming projects"];
	var schedule = [];
	
	var day = document.getElementById('day').innerHTML;
	var dayNo;
	
	if (day == "Mon"){
		dayNo = 1;
	} else if (day == "Tues"){
		dayNo = 2;
	} else if (day == "Wed"){
		dayNo = 3;
	} else if (day == "Thurs"){
		dayNo = 4;
	} else if (day == "Fri"){
		dayNo = 5;
	} else if (day == "Sat"){
		dayNo = 6;
	} else if (day == "Sun"){
		dayNo = 0;
	}
	
	// Next Day
	if (direction == 'next'){
		// Next day
		if (dayNo == 6){
			dayNo = 0;
		} else {
			dayNo = dayNo + 1;
		}
	// Previous day
	} else if (direction == 'prev'){
		if (dayNo == 0){
			dayNo = 6;
		} else {
			dayNo = dayNo - 1;
		}
	}
	
	var dayStr = dayString(dayNo); // Convert integer to day
	
	if (dayStr == "Monday"){
		schedule = monday;
		document.getElementById('day').innerHTML = "Mon";
	} else if (dayStr == "Tuesday"){
		schedule = tuesday;
		document.getElementById('day').innerHTML = "Tues";
	} else if (dayStr == "Wednesday"){
		schedule = wednesday;
		document.getElementById('day').innerHTML = "Wed";
	} else if (dayStr == "Thursday"){
		schedule = thursday;
		document.getElementById('day').innerHTML = "Thurs";
	} else if (dayStr == "Friday"){
		schedule = friday;
		document.getElementById('day').innerHTML = "Fri";
	} else if (dayStr == "Saturday"){
		schedule = saturday;
		document.getElementById('day').innerHTML = "Sat";
	} else if (dayStr == "Sunday"){
		schedule = sunday;
		document.getElementById('day').innerHTML = "Sun";
	}
	
	// Putting the correct day schedule in the timetable div
	// BUG: will not work for more than 3 timetable items, need more ifs etc
	if (schedule.length == 1){
		document.getElementById('timetable').innerHTML = schedule;
	} else if (schedule.length == 2){
		document.getElementById('timetable').innerHTML = schedule[0] + "<br><br>" + schedule[1];
	} else if (schedule.length == 3){
		document.getElementById('timetable').innerHTML = schedule[0] + "<br><br>" + schedule[1] + "<br><br>" + schedule[2];
	} else {
		// Do something?
	}
}