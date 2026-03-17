let input = document.getElementById("input");
let typemessage = document.getElementById("typemessage");
let timermessage = document.getElementById("timer");

let started = false;
let timer;
let time = 0;
let stopTimer;

input.addEventListener("input", () => {
  let text = input.value;
  let count = text.length;
  typemessage.innerHTML = `Typed: ${count}`;

  if (!started && count > 0) {
    started = true;
    timer = setInterval(() => {
      time++;
      timermessage.innerHTML = `Time: ${time} sec`;
    }, 1000);
  }

  if (count === 0) {
    clearInterval(timer);
    started = false;
    time = 0;
    timermessage.innerHTML = `Time: ${time} sec`;
  }
  clearTimeout(stopTimer);
  stopTimer = setTimeout(() => {
    clearInterval(timer);
    started = false;
  }, 1000);
});
