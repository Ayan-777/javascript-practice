let input = document.getElementById("input");
let btn = document.getElementById("searchbtn");
let result = document.getElementById("message");
let word = document.getElementById("word");

let originalText = word.textContent;

btn.addEventListener("click", () => {
  let text = input.value.trim();

  if(text === ''){
    result.textContent = '';
    return;
  }

  let regex = new RegExp(text, 'gi');
  let matches = originalText.match(regex);
  let count = matches ? matches.length : '0 Not Found';

  let highlight = originalText.replace(regex,(x) => {
    return `<span style="background: yellow;">${x}</span>`
  })

  word.innerHTML = highlight;
  result.textContent = `Matches: ${count}`;

});
