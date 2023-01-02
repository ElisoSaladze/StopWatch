//global variables. 
const time_element = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let counter = 0;
let interval = null;

//for buttons to work.
start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);


//timer function. counts time
function timer () {
    counter++;

    let hours = Math.floor(counter / 3600);
    let minutes = Math.floor((counter - (hours * 3600)) / 60);
    let seconds = (counter % 60);

//adds zeroes in front 
//of numbers so they will look like 
//for example 01:12:03 instead of 1:12:3
    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;


    time_element.innerText = `${hours}:${minutes}:${seconds}`;
}

function start() {
    if (interval) {
        return;
    }

    interval = setInterval(timer, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    counter = 0;
    time_element.innerText = '00:00:00';
}