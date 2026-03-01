let countel = document.getElementById("count");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

let count = 0;

plus.addEventListener("click", () => {
  count++;
  countel.innerHTML = count;
});

minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countel.innerHTML = count;
  }
});
