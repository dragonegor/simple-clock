function clockForSite() {
	var nowTime = new Date();
	var h = nowTime.getHours();
	var min = nowTime.getMinutes();
	var s = nowTime.getSeconds();
	var d = nowTime.getDate();
	var m = nowTime.getMonth();
	var y = nowTime.getFullYear();
	function setDate(i) {
		if (i < 10){
			i = "0" + i;
		}
		return i;
	}
	h = setDate(h);
	min = setDate(min);
	s = setDate(s);
	d = setDate(d);
	m = setDate(m+1);
	var myClock = (h + ':' + min + ':' + s + ' | ' + d + '.' + m + '.' + y);
	document.getElementById('clock').innerHTML = myClock;
}
setInterval(clockForSite, 1000);

