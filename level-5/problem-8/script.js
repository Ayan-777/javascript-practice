let btn = document.getElementById("btn");
let countEl = document.getElementById("count");

let isres = false
let count = 0;

btn.addEventListener("click", () => {
    if (isres) return;

  count++;
  countEl.innerHTML = count;
  if (count === 5) {
    isres = true
    countEl.innerHTML = "Auto Reset";
    setTimeout(() => {
      count = 0;
      countEl.innerHTML = count;
      isres = false
    }, 1000);
  }
});
