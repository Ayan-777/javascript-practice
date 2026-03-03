let btn = document.getElementById("btn");
let message = document.getElementById("message");
let Reset = document.getElementById("resbtn");

let startTime;
let last = 0;
btn.addEventListener("mousedown", () => {
  startTime = Date.now();
});

btn.addEventListener("mouseup", () => {
  let endTime = Date.now();
  let duration =  endTime - startTime;

  if (duration < 1000) {
    message.innerHTML = "Short Press";
  } else {
    message.innerHTML = "Long Press";
  }
});

Reset.addEventListener('click', () => {
    message.innerHTML = 'Have a nice day';
    startTime = 0
    endTime = 0
})
