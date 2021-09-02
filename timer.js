var sound = new Howl({
  urls: ["./sound.mp3"],
  volume: 0.2,
});

const timerOfDay = document.querySelector(".day");
const timerOfHour = document.querySelector(".hour");
const timerOfMinute = document.querySelector(".minute");
const timerOfSecond = document.querySelector(".second");
const buttonStart = document.querySelector(".start");
const buttonStop = document.querySelector(".stop");
const selectors = document.querySelectorAll(".timeSelector");
let condition = false; // состояние. таймер вкл или выкл
function updateElements(event) {
  let valueOnDisplay = "";
  if (event.target.value <= 9) {
    valueOnDisplay = "0" + event.target.value;
  } else {
    valueOnDisplay = event.target.value;
  }
  switch (event.target.id) {
    case "days":
      timerOfDay.innerText = valueOnDisplay;
      break;
    case "hours":
      timerOfHour.innerText = valueOnDisplay;
      break;
    case "minutes":
      timerOfMinute.innerText = valueOnDisplay;
      break;
    case "seconds":
      timerOfSecond.innerText = valueOnDisplay;
      break;
  }
}
export function toDisplayValues() {
  selectors.forEach((el) => {
    el.value = "00";
    el.addEventListener("change", updateElements);
  });
  buttonStop.addEventListener("click", stopTime);
  buttonStart.addEventListener("click", startTime);
}
function stopTime(event) {
  event.preventDefault();
  condition = false;
  timerOfDay.innerText = "00";
  timerOfHour.innerText = "00";
  timerOfMinute.innerText = "00";
  timerOfSecond.innerText = "00";
  sound.stop();
}
function startTime(event) {
  condition = true;
  event.preventDefault();
  var newInterwal = setInterval(function () {
    if (condition) {
      let seconds = parseInt(timerOfSecond.innerText);
      let minutes = parseInt(timerOfMinute.innerText);
      let hours = parseInt(timerOfHour.innerText);
      let days = parseInt(timerOfDay.innerText);
      if (seconds <= 0 && minutes == 0 && hours == 0 && days == 0) {
        timerOfDay.innerText = "00";
        timerOfHour.innerText = "00";
        timerOfMinute.innerText = "00";
        timerOfSecond.innerText = "00";
        clearInterval(newInterwal);
        condition = false;
        sound.play();
        return;
      }
      seconds--;
      if (seconds <= 0 && minutes > 0) {
        minutes--;
        seconds = 59;
      }
      if (minutes == 0 && hours > 0 && seconds <= 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      }
      if (hours == 0 && days > 0 && minutes == 0 && seconds <= 0) {
        days--;
        hours = 23;
        minutes = 59;
        seconds = 59;
      }

      timerOfSecond.innerText = seconds;
      if (seconds < 10) {
        timerOfSecond.innerText = "0" + seconds;
      }
      timerOfMinute.innerText = minutes;
      if (minutes < 10) {
        timerOfMinute.innerText = "0" + minutes;
      }
      timerOfHour.innerText = hours;
      if (hours < 10) {
        timerOfHour.innerText = "0" + hours;
      }
      timerOfDay.innerText = days;
      if (days < 10) {
        timerOfDay.innerText = "0" + days;
      }
    } else {
      clearInterval(newInterwal);
      return;
    }
  }, 1000);
}
