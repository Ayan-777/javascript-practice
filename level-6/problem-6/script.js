let input = document.getElementById("input");
let addbtn = document.getElementById("addbtn");
let list = document.getElementById("list");
let count = document.getElementById("count");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 🔹 LOAD
function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((text, index) => {
    createtask(text, index);
  });

  updateCount();
}

renderTasks();

// 🔹 ADD TASK
addbtn.addEventListener("click", () => {
  let text = input.value;

  if (text.trim() === "") return;

  tasks.push(text);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks();

  input.value = "";
});

// 🔹 CREATE TASK
function createtask(text, index) {
  let task = document.createElement("div");
  task.classList.add("task");

  let span = document.createElement("span");
  span.textContent = text;

  let deletebtn = document.createElement("button");
  deletebtn.textContent = "delete";

  deletebtn.addEventListener("click", () => {
    count.textContent = "Deleting.......";
    deletebtn.disabled = true;
    setTimeout(() => {
      deletebtn.disabled = false;
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));

      renderTasks();
    }, 2000);
  });

  task.appendChild(span);
  task.appendChild(deletebtn);
  list.appendChild(task);
}

// 🔹 UPDATE COUNT
function updateCount() {
  count.textContent = `Total Tasks: ${tasks.length}`;
}
deletebtn.disabled = true;