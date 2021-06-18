var startTimerButton = document.querySelector('.startTimer');

var pauseTimerButton = document.querySelector('.pauseTimer');

var timerDisplay = document.querySelector('.timer');

var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;

function startTimer(){

if(!running){
startTime = new Date().getTime();
	tInterval = setInterval(getShowTime, 1);


// change 1 to 1000 above to run script every second instead of every milisecond

paused = 0;
running = 1;

	timerDisplay.style.background = "#FF0000";
	timerDisplay.style.cursor = "auto";
	startTimerButton.classList.add('lighter');
	pauseTimerButton.classList.remove('lighter');
startTimerButton.style.cursor = "auto";
	pauseTimerButton.style.cursor = "pointer";

}
}

function pauseTimer(){

if(!difference){


} else if(!paused){
clearInterval(tInterval);
	savedTime = difference;
	paused = 1;
	running = 0;
	timerDisplay.style.background = "#A90000";
	timerDisplay.style.color = "#690000";
	timerDisplay.style.cursor = "pointer";
startTimerButton.classList.remove('lighter');
	pauseTimerButton.classList.add('lighter');
startTimerButton.style.cursor = "pointer";
	pauseTimerButton.style.cursor = "auto";

} else {
startTimer();
}

}

function resetTimer(){

clearInterval(tInterval);
	savedTime = 0;
	difference = 0;
	paused = 0;
	running = 0;
	timerDisplay.innerHTML = 'Start Timer!';
	timerDisplay.style.background = "#A90000";
	timerDisplay.style.color = "#fff";
	timerDisplay.style.cursor = "pointer";
	startTimerButton.classList.remove('lighter');
	pauseTimerButton.classList.remove('lighter');
startTimerButton.style.cursor = "pointer";
	pauseTimerButton.style.cursor = "auto";

}

function getShowTime(){
updatedTime = new Date().getTime();
	if(savedTime){
difference = (updatedTime - startTime) + savedTime;

	} else{
difference = updatedTime - startTime;
	}

var hours = Math.floor((difference % (1000 * 60 * 60 * 24)  ) / (1000 * 60 * 60) );
var minutes = Math.floor((difference % (1000 * 60 * 60) ) / (1000 * 60) );
	var seconds = Math.floor((difference % (1000 * 60) ) / 1000);
	var miliseconds = Math.floor( (difference % (1000 * 60) ) / 100);
hours = (hours < 10) ? "0" + hours : hours;
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	seconds = (seconds < 10) ? "0" + seconds : seconds;
	miliseconds = (miliseconds < 100) ? (miliseconds < 10) ? "00" + miliseconds : "0" + miliseconds : miliseconds;
timerDisplay.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + miliseconds;
}
