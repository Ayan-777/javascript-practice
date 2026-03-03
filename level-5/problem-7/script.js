let btn = document.getElementById("btn");
let message = document.getElementById("message");

let lasttime = 0;

btn.addEventListener("click", () => {
  let now = Date.now();
  let diff = now - lasttime;

  if (lasttime !== 0) {
    if (diff < 150) {
      message.innerHTML = "Super Fast 🚀";
    } else if (diff < 250) {
      message.innerHTML = "Very Fast ⚡️";
    } else if (diff < 450) {
      message.innerHTML = "Fast 🏃💨";
    } else if (diff < 520) {
      message.innerHTML = "Normal 🏃";
    } else {
      message.innerHTML = "Slow 🐢";
    }
  }
  lasttime = now;
});
