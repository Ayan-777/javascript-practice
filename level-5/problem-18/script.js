let btn = document.getElementById("btn");
let message = document.getElementById("message");

let count = 0;
let timer;
btn.addEventListener("click", () => {
//   if (timer) return;
  count++;
  message.innerHTML = `Click -> ${count}`;

  clearTimeout(timer)
  timer = setTimeout(() => {
    count = 0;
    message.innerHTML = 'Streak reset! Start again'
    timer = null;
  }, 3000);
});
