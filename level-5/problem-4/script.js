let button = document.getElementById("button");
let countel = document.getElementById("count");

let count = 0;
let duration = 200;
let timer;

button.addEventListener("mousedown", () => {
  timer = setInterval(() => {
    count++;
    countel.innerHTML = count;
  }, duration);
});

button.addEventListener('mouseup', () => {
    clearInterval(timer);
})

button.addEventListener('mouseleave', ()=>{
    clearInterval(timer);
})