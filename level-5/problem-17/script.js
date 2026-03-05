let input = document.getElementById("input");
let submit = document.getElementById("submitbtn");
let message = document.getElementById("message");

let right_password = "1234";
let attempts = 0;

submit.addEventListener("click", () => {
  let entervalue = input.value;

  if (entervalue === right_password) {
    message.innerHTML = "Your are successfully login ✅";
    attempts = 0;
  } else {
    attempts++;
    message.innerHTML = `Wrong password! ❌ Attempts: ${attempts}`;
    if (attempts >= 5) {
      Lock();
    }
    input.value = "";
  }
});

function Lock() {
  input.disabled = true;
  submit.disabled = true;
  message.innerHTML = "Locked! 🔒 Wait 5 seconds...";

  setTimeout(() => {
    input.disabled = false;
    submit.disabled = false;
    attempts = 0;
    message.innerHTML = "Try again.";
  }, 5000);
}
