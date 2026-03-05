let btn = document.getElementById("btn");
let message = document.getElementById("message");
let res = document.getElementById("res");

let count = 0;

btn.addEventListener("click", () => {
  if (count < 5) {
    count++;
    message.innerHTML = `Clicked ${count} time`
  }
  if(count === 5){
    message.innerHTML = 'Limit Reached'
    btn.disabled = true
  }
});

res.addEventListener('click', () => {
    count = 0;
    btn.disabled = false
    message.innerHTML = 'see you clicks'
})
