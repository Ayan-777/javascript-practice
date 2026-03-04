let btn = document.getElementById("btn");
let message = document.getElementById("message");

let isLocked = false;

btn.addEventListener("click", () => {
  if (isLocked) return;
  message.innerHTML = "Locked";
  isLocked = true;
  btn.disabled = true;

  setTimeout(() => {
    btn.disabled = false;
    isLocked = false;
    message.innerHTML = "UnLocked";
  }, 2000);
  
});
