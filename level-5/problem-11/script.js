let btn = document.getElementById('btn');
let message = document.getElementById('message');


let count = 0;
let duration = 1000;
let timer;

btn.addEventListener('mousedown', () => {
    count = 0;
    timer = setInterval (() => {
        count++;
        message.innerHTML = `Holding: ${count}s`;
    },duration);
})

btn.addEventListener('mouseup', () => {
    clearInterval(timer);
    timer = null
})