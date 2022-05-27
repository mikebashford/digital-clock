let currentDateTime;
let is24Hour = true;
const use24HourButton = document.querySelector(".button");
const hourDisplay = document.querySelector(".hr");

updateTime();
setInterval(updateTime, 1000);

function updateTime() {
  currentDateTime = new Date(Date.now());
  const hours = formatTime(getCorrectHours(currentDateTime.getHours()));
  const minutes = formatTime(currentDateTime.getMinutes());
  const seconds = formatTime(currentDateTime.getSeconds());

  const currentTimeString = `${hours}${minutes}${seconds}`;
  document.querySelectorAll(".digit").forEach((digit, index) => {
    digit.textContent = currentTimeString[index];
  });
}

function formatTime(num) {
  return num < 10 ? `0${num}` : `${num}`;
}

function getCorrectHours(hours) {
  if (is24Hour) {
    return hours;
  } else {
    return convert24HourToAMPM(hours);
  }
}

function convert24HourToAMPM(hour) {
  if (hour > 12) {
    return hour - 12;
  } else if (hour === 0) {
    return 12;
  } else {
    return hour;
  }
}

use24HourButton.addEventListener("click", () => {
  is24Hour = !is24Hour;
  hourDisplay.textContent = is24Hour
    ? "24"
    : currentDateTime.getHours() > 11
    ? "PM"
    : "AM";
  updateTime();
});
