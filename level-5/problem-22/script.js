let btn = document.getElementById("btn");
let message = document.getElementById("message");

let count = 6;
let timer;
btn.addEventListener("click", () => {
  btn.disabled = true;
  timer = setInterval(() => {
    count--;

    message.innerHTML = `Wait ${count}`;
    if (count <= 0) {
        clearInterval(timer);
        btn.disabled = false;
        message.innerHTML = 'Ready';
        count = 6
    }
  }, 500);
});
