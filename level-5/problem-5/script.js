let button = document.getElementById("button");
let message = document.getElementById("message");

let duration = 2000;
let timer;
let isconf = false

button.addEventListener("mousedown", () => {
    isconf = false
    message.innerHTML = '........';

  timer = setTimeout(() => {
    message.innerHTML = "Confirmed ✅";
    isconf = true;
  }, duration);
});

function cancel(){
    clearTimeout(timer);
    if(!isconf){
        message.innerHTML = 'Cancelled ❌';
    }
}

button.addEventListener('mouseup', cancel);
button.addEventListener('mouseleave', cancel)
