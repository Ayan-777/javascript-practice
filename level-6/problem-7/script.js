let input = document.getElementById("input");
let addbtn = document.getElementById("addbtn");
let count = document.getElementById("count");
let list = document.getElementById("list");
let message = document.getElementById("message");
let deleteAllbtn = document.getElementById("deleteAll");
let lastadd = document.getElementById("lastadd");
let counterlimitmessage = document.getElementById("counterlimit");

let maxcount = 50;
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function render() {
  list.innerHTML = "";
  tasks.forEach((text, index) => {
    createtask(text, index);
  });
  updateCount();
  updateLastTask();
}

render();

input.addEventListener("input", () => {
  let currlength = input.value.length;

  let remaining = maxcount - currlength;

  if (remaining > 0) {
    counterlimitmessage.textContent = `Remaining : ${remaining}/50`;
  } else {
    counterlimitmessage.textContent = "Limit reached!";

    if (currlength > maxcount) {
      input.value = input.value.substring(0, maxcount);
    }
  }
});

addbtn.addEventListener("click", () => {
  addbtn.disabled = true;
  let text = input.value;

  setTimeout(() => {
    addbtn.disabled = false;
  }, 2000);

  if (tasks.includes(input.value)) {
    message.textContent = "Task already exists";
    setTimeout(() => {
      message.textContent = "";
    }, 2000);
    return;
  }

  if (text.trim() === "") {
    addbtn.disabled = true;
    message.textContent = "Error: empty input";
    setTimeout(() => {
      message.textContent = "";
      addbtn.disabled = false;
    }, 2000);
    return;
  }

  tasks.push(text);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  render();

  message.textContent = "Task Added ✅";
  setTimeout(() => {
    message.textContent = "";
  }, 2000);

  input.value = "";
});

function createtask(text, index) {
  let task = document.createElement("div");
  task.classList.add("task");

  let span = document.createElement("span");
  span.textContent = text;

  let deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";

  task.addEventListener("click", () => {
    
    document.querySelectorAll('.task').forEach(t => {
      t.style.backgroundColor = ''
    })
    task.style.backgroundColor = "yellow";
  });

  deletebtn.addEventListener("click", () => {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    render();
    updateLastTask();
  });

  list.appendChild(task);
  task.appendChild(span);
  task.appendChild(deletebtn);
}

function updateCount() {
  count.textContent = `tasks count : ${tasks.length}`;
}

function updateLastTask() {
  if (tasks.length === 0) {
    lastadd.textContent = "last add : none";
  } else {
    lastadd.textContent = `last add : ${tasks[tasks.length - 1]}`;
  }
}

deleteAllbtn.addEventListener("click", () => {
  message.textContent = "All Tasks Deleting.....⚠️";

  if (tasks.length === 0) {
    message.textContent = "All Tasks already remove!";
    setTimeout(() => {
      message.textContent = "";
    }, 2000);
  }

  setTimeout(() => {
    tasks = [];
    list.innerHTML = "";
    localStorage.clear();
    message.textContent = "";
    updateCount();
    updateLastTask();
  }, 2000);
});


