let countel = document.getElementById("count");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let message = document.getElementById("message");

let count = 0;

plus.addEventListener("click", () => {
  if (count < 10) {
    count++;
    countel.innerHTML = count;
  }
  if (count === 10) {
    message.innerHTML = "Max limit";
  } else {
    message.innerHTML = "";
  }
});

minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countel.innerHTML = count;
  }
  if (count === 0) {
    message.innerHTML = "Min Limit";
  } else {
    message.innerHTML = "";
  }
});
