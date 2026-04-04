// 🚀 LEVEL 7 — Q5 (Private Todo Manager)
// 🎯 Goal
// Build a private todo system using closures
// 🧠 Problem
// Create:
// createTodoManager()
// 📌 It should return:
// addTask(task)
// removeTask(task)
// getTasks()
// getCount()
// ❗ Rules
// ❌ No global variables
// ❌ Tasks array must be private
// ❌ No direct access like todo.tasks
// ⚡ Behavior Rules
// ✔ addTask → adds task
// ✔ removeTask → removes only first matching task
// ✔ getTasks → returns all tasks
// ✔ getCount → returns number of tasks

function createTodoManager() {
  let Tasks = [];
  return {
    addTask(task) {
      Tasks.push(task);
      return Tasks;
    },

    removeTask(task) {
      let index = Tasks.indexOf(task);
      if (index > -1) {
        Tasks.splice(index, 1);
      }

      return Tasks;
    },
    getTasks() {
      return Tasks;
    },

    getCount(){
       return Tasks.length
    }
  };
}

let todo = createTodoManager();

todo.addTask("Study");
todo.addTask("Code");
todo.addTask("Gym");

console.log(todo.getTasks());

todo.removeTask("Code");

console.log(todo.getTasks());


console.log(todo.getCount()); 
// ░▒▓   …/my-all-coding-main/level-7/closure    main ?   v22.22.0   01:05  
// ❯ node problem-5.js 
// [ 'Study', 'Code', 'Gym' ]
// [ 'Study', 'Gym' ]
// 2