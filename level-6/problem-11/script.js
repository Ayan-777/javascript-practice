let input = document.getElementById("input");
let btn = document.getElementById("searchbtn");
let result = document.getElementById("message");
let word = document.getElementById("word");
let casebtn = document.getElementById("caseEl");

let originalText = word.textContent;

function highlight() {
  let text = input.value.trim();

  if (text === "") {
    word.innerHTML = originalText;
    result.textContent = "";
    return;
  }

  let flag = casebtn.checked ? "g" : "gi";
  let regex = new RegExp(text, flag);
  let matches = originalText.match(regex);
  let count = matches ? matches.length : 0;

  let highlightText = originalText.replace(regex, (x) => {
    return `<span style="background: yellow;">${x}</span>`;
  });

  word.innerHTML = highlightText;

  if (count === 0) {
    result.textContent = "No results found";
  } else {
    result.textContent = `Matches: ${count}`;
  }
}

btn.addEventListener("click", highlight);
casebtn.addEventListener("change", highlight);
