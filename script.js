let hours = 0;
let mins = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

const hoursDisplay = document.getElementById("hours");
const minsDisplay = document.getElementById("mins");
const secDisplay = document.getElementById("sec");
const msDisplay = document.getElementById("ms");
const logList = document.getElementById("logList");

function startTimer() {
    clearInterval(interval);
    interval = setInterval(() => {
        milliseconds += 10;

        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds === 60) {
            seconds = 0;
            mins++;
        }
        if (mins === 60) {
            mins = 0;
            hours++;
        }

        hoursDisplay.textContent = hours < 10 ? `0${hours}` : hours;
        minsDisplay.textContent = mins < 10 ? `0${mins}` : mins;
        secDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;
        msDisplay.textContent = milliseconds < 100 ? `0${milliseconds / 10}` : milliseconds / 10;
    }, 10);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    hours = 0;
    mins = 0;
    seconds = 0;
    milliseconds = 0;
    hoursDisplay.textContent = "00";
    minsDisplay.textContent = "00";
    secDisplay.textContent = "00";
    msDisplay.textContent = "00";
    logList.innerHTML = "";  // Clear the history log on reset
}

function recordLap() {
    const lapTime = `${hoursDisplay.textContent}:${minsDisplay.textContent}:${secDisplay.textContent}:${msDisplay.textContent}`;
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap: ${lapTime}`;
    logList.appendChild(lapItem);
}

document.querySelector(".buttons button:nth-child(1)").addEventListener("click", startTimer);
document.querySelector(".buttons button:nth-child(2)").addEventListener("click", stopTimer);
document.querySelector(".buttons button:nth-child(3)").addEventListener("click", resetTimer);
