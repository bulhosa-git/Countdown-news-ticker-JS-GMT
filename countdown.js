//(09:00, 10:00, 15:30, 23:59)
var timeoutDate = "2022/09/22 23:59:00";

//Language
var lang = "pt";
if(location.href.includes("/es/")) { lang = "es"; }

//EDIT here
if(lang == "pt") {
    var msgCountdown = "Últimas horas com promoções até -30%";
    var msgCountdownLink = "https://tiffosi.com/#";
} else {
    var msgCountdown = "Últimas horas de Rebajas hasta -30%";
    var msgCountdownLink = "https://tiffosi.com/#";
}

if(lang == "pt") {
    var msgCountdownTermina = "Termina em";
    var msgCountdownTerminou = "Terminou";
} else {
    var msgCountdownTermina = "Termina en";
    var msgCountdownTerminou = "Terminado";
}
  
//Pre Header
var headerBody = "";
headerBody += "<div class=\"pre-header pre-header-marquee\"><span>";
headerBody += "<a href=\"" + msgCountdownLink + "\">"; 
headerBody += msgCountdown;
headerBody += "</a></span></div>"; 
headerBody += "<div class=\"pre-header-countdown\"><span id=\"clock-desc\">" + msgCountdownTermina + "</span><span id=\"clock\" class=\"clock\">0D 0H 0M 0S</span></div>"; 

//Inject JS Code
var elM = document.querySelector('.page-header');
if(elM) { //Safety first
	elM.insertAdjacentHTML('afterbegin', headerBody);
}
var clock = document.getElementById("clock");
var clockDesc = document.getElementById("clock-desc");
var countDownDate = new Date(timeoutDate).getTime();
var now = new Date().getTime();
var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

if(minutes < 10) { minutes = ("0" + minutes); }
if(seconds < 10) { seconds = ("0" + seconds); }

if (distance > 0) {
	clock.innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S";
} else {
	clock.innerHTML = "0D 0H 0M 0S";
	clockDesc.innerHTML = msgCountdownTerminou;
}

var clockInterval = setInterval(function() {
	now = new Date().getTime();
	distance = countDownDate - now;

	days = Math.floor(distance / (1000 * 60 * 60 * 24));
	hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	seconds = Math.floor((distance % (1000 * 60)) / 1000);

	if(minutes < 10) { minutes = ("0" + minutes); }
	if(seconds < 10) { seconds = ("0" + seconds); }

	clock.innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S";

	if (distance < 0) {
		clearInterval(clockInterval);
		clock.innerHTML = "0D 0H 0M 0S";
		clockDesc.innerHTML = msgCountdownTerminou;
	}
}, 1000);
