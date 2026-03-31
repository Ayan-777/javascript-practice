let input = document.getElementById("input");
let strengthmessage = document.getElementById("strengthmessage");
let showbtn = document.getElementById("showbtn");

let isOn = false

input.addEventListener("input", () => {
  let text = input.value;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&]).*$/.test(text);

  if (text.length >= 8 && passwordRegex) {
    strengthmessage.textContent = "password strength Strong ✅🥳";
    strengthmessage.style.color = "green";
  } else if (text.length >= 6 && passwordRegex) {
    strengthmessage.textContent = "password strength Medium ⚠️";
    strengthmessage.style.color = "orange";
  } else {
    strengthmessage.textContent = "password strength Weak ❌ Reed the rules";
    strengthmessage.style.color = "Red";
  }
});

showbtn.addEventListener("click", () => {
  isOn = !isOn;

  if(isOn){
    input.type = 'text'
    showbtn.textContent = "👁";
  }else{
    input.type = 'password'
    showbtn.textContent = "︶";
  }
});
