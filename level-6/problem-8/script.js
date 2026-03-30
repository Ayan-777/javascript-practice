let startbtn = document.getElementById("startbtn");
let message = document.getElementById("message");
let screen = document.body;

let timer;
let gamestate = "null";
let startTime;
startbtn.addEventListener("click", (t) => {
    t.stopPropagation()
  message.textContent = "Wait for green...";
  screen.style.backgroundColor = "#222";
  
  gamestate = "waiting";

  let randomtim = Math.floor(Math.random() * 4000) + 1000;

  timer = setTimeout(() => {
    screen.style.backgroundColor = "green";
    message.textContent = "click now";

    startTime = Date.now();
    gamestate = "ready";
  }, randomtim);
});


screen.addEventListener('click', () => {
    if(gamestate === 'waiting'){
        clearTimeout(timer);
        startbtn.textContent = 'try agian'
        message.textContent = 'Too early click'
        screen.style.backgroundColor = 'red';
        gamestate = 'idle';
    }else if (gamestate === 'ready') {
        startbtn.textContent = 'Start'
        let reaction = Date.now() - startTime;
        message.textContent = `Your reaction time: ${reaction} ms`;
        screen.style.backgroundColor = '';
        gamestate = 'idle'
    }
})