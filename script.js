const timer = document.querySelector("#timer");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let paused = true;
let intervalId = 0;

startBtn.addEventListener("click", () => {
  if (paused) {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 10);
    paused = false;
    startBtn.textContent = "Pause";
  } else {
    clearInterval(intervalId);
    paused = true;
    startBtn.textContent = "Resume";
  }
});

pauseBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  paused = true;
  startBtn.textContent = "Resume";
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  elapsedTime = 0;
  paused = true;
  startBtn.textContent = "Start";
  startTime = Date.now();
  updateTime();
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  const secs = Math.floor((elapsedTime / 1000) % 60);
  const mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  timer.textContent = `Time: ${formatTime(hrs)}:${formatTime(mins)}:${formatTime(secs)}`;
}
