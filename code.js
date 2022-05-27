let currentDateTime;
let is24Hour = true;
const use24HourButton = document.querySelector(".button");

updateTime();
setInterval(updateTime, 1000);

function updateTime() {
  currentDateTime = new Date(Date.now());
  const hours = currentDateTime.getHours();
  const minutes = currentDateTime.getMinutes();
  const seconds = currentDateTime.getSeconds();

  const currentTimeString = `${hours}${minutes}${seconds}`;
  document.querySelectorAll(".digit").forEach((digit, index) => {
    digit.textContent = currentTimeString[index];
  });
}

function formatTime(num) {
  return num < 10 ? `0${num}` : `${num}`;
}

use24HourButton.addEventListener("click", () => {
  is24Hour = !is24Hour;
});
