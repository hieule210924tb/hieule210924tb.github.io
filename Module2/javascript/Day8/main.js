let inputTime = document.getElementById("inputTime");
let displayTime = document.querySelector(".time");
let interval;
let time = 0;
let pause = false;

const start = () => {
  clearInterval(interval);
  time = parseInt(inputTime.value);
  displayTime.innerHTML = time;
  inputTime.value = "";
  pause = false;

  interval = setInterval(() => {
    if (!pause) {
      time--;
      displayTime.innerHTML = time;
      if (time < 0) {
        clearInterval(interval);
        displayTime.innerHTML = 0;
        alert("Hết giờ");
      }
    }
  }, 1000);
};

const stop = () => {
  pause = true;
};

const continueTime = () => {
  pause = false;
};
const reset = () => {
  clearInterval(interval);
  displayTime.innerHTML = 0;
  time = 0;
};
