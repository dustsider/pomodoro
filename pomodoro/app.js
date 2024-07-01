console.log("Script Loaded"); 
const bells = new Audio('cinematic_church_bell.wav');
const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const resetBtn = document.querySelector('.reset-btn');
const minuteDiv = document.querySelector('.minutes');
const secondDiv = document.querySelector('.seconds');
let myInterval;
let isRunning = false;
let totalSeconds = 0;

const updateSeconds = () => {
    totalSeconds--;

    let minutesLeft = Math.floor(totalSeconds / 60);
    let secondsLeft = totalSeconds % 60;

    minuteDiv.textContent = minutesLeft;
    secondDiv.textContent = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

    if (totalSeconds <= 0) {
        bells.play();
        clearInterval(myInterval);
        isRunning = false;
    }
};

const startTimer = () => {
    if (!isRunning) {
        isRunning = true;
        if (totalSeconds === 0) {
            totalSeconds = Number.parseInt(minuteDiv.textContent) * 60;
            secondDiv.textContent = '00';
        }
        myInterval = setInterval(updateSeconds, 1000);
    } else {
        alert('Session is already running.');
    }
};

const pauseTimer = () => {
    if (isRunning) {
        clearInterval(myInterval);
        isRunning = false;
    }
};

const resetTimer = () => {
    clearInterval(myInterval);
    isRunning = false;
    totalSeconds = 0;
    minuteDiv.textContent = '25'; // Default session minutes
    secondDiv.textContent = '00';
};

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
