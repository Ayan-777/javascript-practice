let btn = document.getElementById("btn");
let message = document.getElementById("message");
let countEl = document.getElementById("count");

let count = 0;
let duration = 300;
let timer;
btn.addEventListener("mousedown", () => {
  if (timer) return;
  timer = setInterval(() => {
    if (count < 20) {
      count++;
      countEl.innerHTML = count;
    } else {
      message.innerHTML = "Limit Reached";
      clearInterval(timer);
    }
  }, duration);
});

btn.addEventListener("mouseup", () => {
  timer = null;
  clearInterval(timer);
});
