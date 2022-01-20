var showDays = document.getElementById("days");
var showHours = document.getElementById("hours");
var showMinutes = document.getElementById("minutes");
var showSeconds = document.getElementById("seconds");


var countdownDate = new Date("Nov 19, 2021 14:15:00").getTime();


//Update de countdown timer every 1 second

var update = setInterval(function () {

    var timeNow = new Date().getTime();
    var timeLeft = countdownDate - timeNow;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    showDays.textContent = days;
    showHours.textContent = hours;
    showMinutes.textContent = minutes;
    showSeconds.textContent = seconds;


}, 1000);


