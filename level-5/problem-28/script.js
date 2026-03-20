let input = document.getElementById("input");
let submit = document.getElementById("addbtn");
let list = document.getElementById("list");
let message = document.getElementById("message");

// load save tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render tasks on page loading
tasks.forEach((text) => {
  createTask(text);
});

updateCount();

submit.addEventListener("click", () => {
  let text = input.value;

  if (text.trim() === "") {
    message.innerHTML = "Please enter something";
    return;
  }

  if (list.children.length >= 5) {
    list.removeChild(list.firstChild);
    tasks.shift();
  }

  tasks.push(text);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  createTask(text);
  updateCount();

  input.value = "";
});

function createTask(text) {
  let task = document.createElement("div");
  task.classList.add("task");

  let span = document.createElement("span");

  span.innerHTML = text;

  let delebtn = document.createElement("button");
  delebtn.innerHTML = "Delete";

  delebtn.addEventListener("click", () => {
    task.remove();

    // remove from array
    tasks = tasks.filter((x) => x !== text);
    localStorage.setItem("tasks", JSON.stringify(tasks));


    updateCount();
  });

  span.addEventListener("click", () => {
    span.classList.toggle("line-through");
  });

  list.appendChild(task);
  task.appendChild(span);
  task.appendChild(delebtn);
}

function updateCount(){
    message.innerHTML = `Total Tasks: ${tasks.length}`;
}