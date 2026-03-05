let btn = document.getElementById("btn");
let message = document.getElementById("message");

btn.addEventListener("click", () => {
  message.innerHTML = "Processing...";

  btn.disabled = true;

  setTimeout(() => {
    message.innerHTML = "Done";
    btn.disabled = false;
  }, 3000);
});
