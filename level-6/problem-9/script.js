let input = document.getElementById("input");
let resbtn = document.getElementById("reset");
let charmessage = document.getElementById("typemessage");
let mismessage = document.getElementById("mistakemessage");
let rightworngm = document.getElementById("right");

let word = "The quick brown fox jumps over the lazy dog";

input.addEventListener("input", () => {
  let mistake = 0;
  let text = input.value;

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== word[i]) {
      mistake++;
    }
  }

  charmessage.textContent = `Characters typed: ${text.length}`;
  mismessage.textContent = `Mistakes: ${mistake}`;

  let last = text.length - 1;

  if (last > 0) {
    if (text[last] === word[last]) {
      rightworngm.textContent = "Correct letter: ✅";
    } else {
      rightworngm.textContent = "Correct letter: ❌";
    }
  } else {
    rightworngm.textContent = "Correct letter:";
  }
});

resbtn.addEventListener("click", () => {
  charmessage.innerHTML = "Characters typed:";
  mismessage.innerHTML = "Mistakes:";
  rightworngm.innerHTML = "Correct letter :";
  input.value = "";
});
