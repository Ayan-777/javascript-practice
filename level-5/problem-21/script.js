let btn = document.getElementById("btn");
let message = document.getElementById("message");

let count = 0;

btn.addEventListener("dblclick", () => {
  count++;
  btn.innerHTML = "🥹 Thanks";
  message.innerHTML = `Likes ${count}`;

  let characters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomin = Math.floor(Math.random() * characters.length);

    color += characters[randomin];
  }

  document.body.style.backgroundColor = color;
});


