let btn = document.getElementById("btn");
let message = document.getElementById("message");

let isOn = false;

btn.addEventListener("click", () => {
  isOn = !isOn;

  btn.innerHTML = isOn ? "Light" : "Dark";
  message.innerHTML = isOn ? "Mode: Light" : "Mode: Dark";

  if (isOn) {
    document.body.style.backgroundColor = "black";
  }else{
    document.body.style.backgroundColor = "white";
  }
});
