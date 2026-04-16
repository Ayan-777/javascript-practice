// 🚀 LEVEL 7 — Q1 (Closures Basic)
// 🎯 Goal:
// Understand how a function remembers data
// 🧠 Problem
// Create a function:
// createCounter()
// 👉 It should return another function
// 📌 Rules:
// Every time you call returned function → number increases

// function createCounter(){
//     let count = 0;

//     return function(){
//         count++
//         return count
//     };
// }

// let countfn = createCounter()

// console.log(countfn())
// console.log(countfn())
// console.log(countfn())
// ░▒▓   …/my-all-coding-main/level-7   main ✘?   v22.22.0   23:59  
// ❯ node problem-1.js 
// 1
// 2
// 3





// 🚀 LEVEL 7 — Q2 (Private Counter with Controls)
// 🎯 Goal:
// Create a counter with private state + multiple controls
// 🧠 Problem
// Create a function:
// createAdvancedCounter()
// 👉 It should return an object with 3 methods:
// 📌 Methods:
// counter.increment() // +1
// counter.decrement() // -1
// counter.getValue()  // current value


// function createAdvancedCounter(){
//     let count = 0
//     let objects = {}

//     objects.increment = function(){
//         count++
//         return count
//     }

//     objects.decrement = function (){
//         count--
//         return count
//     }

//     objects.getValue = function(){
//         return count
//     }

//     return objects
// }

// let counter = createAdvancedCounter();

// console.log(counter.increment()); 
// console.log(counter.increment()); 
// console.log(counter.decrement()); 
// console.log(counter.getValue());  
// ░▒▓   …/my-all-coding-main/level-7/closure    main ✘?   v22.22.0   00:20  
// ❯ node problem-2.js 
// 1
// 2
// 1
// 1

// 🚀 LEVEL 7 — Q3 (Advanced Counter: Limit + Reset)
// 🎯 Goal
// Upgrade your counter with real control features
// 🧠 Problem
// Create:
// createSmartCounter(limit)
// ❗ Rules
// ❌ No global variables
// ❌ Cannot access count directly
// ✅ Must use closure
// 💡 Behavior Rules
// ✔ count starts at 0
// ✔ increment stops at limit
// ✔ decrement can go below (no limit)
// ✔ reset → back to 0

// function createSmartCounter(limit) {
//   let count = 0;
//   let obj = {};

//   obj.increment = function () {
//     if (count === limit) {
//       return "Limit reached";
//     } else {
//       count++;
//       return count;
//     }
//   };

//   obj.decrement = function () {
//     count--;
//     return count;
//   };

//   obj.getValue = function () {
//     return count;
//   };

//   obj.reset = function () {
//     count = 0;
//     return count;
//   };

//   return obj;
// }

// let counter = createSmartCounter(3);

// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.increment()); // 3
// console.log(counter.increment()); // ❌ "Limit reached"

// console.log(counter.decrement()); // 2
// console.log(counter.getValue()); // 2

// counter.reset();
// console.log(counter.getValue());




// 🚀 LEVEL 7 — Q4 (Private Bank System)
// 🎯 Goal
// Build a secure bank account using closures
// 🧠 Problem
// Create:
// createBankAccount(initialBalance)
// 📜 Expected History Format
// [
//   "Deposited: 50",
//   "Withdrawn: 30",
//   "Failed Withdrawal: 200"
// ]
// ❗ Rules
// ❌ No global variables
// ❌ balance must be private
// ❌ history must be private
// ❌ No direct access like acc.balance

// function createBankAccount(initialBalance) {
//   let balance = initialBalance;
//   let history = [];
//   let obj = {};

//   obj.deposit = function (amount) {
//     balance += amount;
//     history.push(`Deposited: ${amount}`);
//     return balance;
//   };

//   obj.withdraw = function (amount) {
//     if (amount > balance) {
//       history.push(`Failed Withdrawal: ${amount}`);
//       return "Insufficient funds";
//     } else {
//       balance -= amount;
//       history.push(`Withdraw: ${amount}`);
//       return balance;
//     }
//   };

//   obj.getBalance = function () {
//     return balance;
//   };

//   obj.getHistory = function () {
//     return history;
//   };

//   return obj;
// }
// let acc = createBankAccount(100);

// console.log(acc.getBalance());

// acc.deposit(50);
// console.log(acc.getBalance());

// acc.withdraw(30);
// console.log(acc.getBalance());

// console.log(acc.withdraw(200));

// console.log(acc.getHistory());

// ▓   …/my-all-coding-main/level-7/closure    main ?   v22.22.0   00:20 
// ❯ node problem-4.js
// 100
// 150
// 120
// Insufficient funds
// [ 'Deposited: 50', 'Withdraw: 30', 'Failed Withdrawal: 200' ]




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

// function createTodoManager() {
//   let Tasks = [];
//   return {
//     addTask(task) {
//       Tasks.push(task);
//       return Tasks;
//     },

//     removeTask(task) {
//       let index = Tasks.indexOf(task);
//       if (index > -1) {
//         Tasks.splice(index, 1);
//       }

//       return Tasks;
//     },
//     getTasks() {
//       return Tasks;
//     },

//     getCount(){
//        return Tasks.length
//     }
//   };
// }

// let todo = createTodoManager();

// todo.addTask("Study");
// todo.addTask("Code");
// todo.addTask("Gym");

// console.log(todo.getTasks());

// todo.removeTask("Code");

// console.log(todo.getTasks());


// console.log(todo.getCount()); 
// ░▒▓   …/my-all-coding-main/level-7/closure    main ?   v22.22.0   01:05  
// ❯ node problem-5.js 
// [ 'Study', 'Code', 'Gym' ]
// [ 'Study', 'Gym' ]
// 2

// Q6 (Private Cart System)
// 🎯 Goal
// Build a shopping cart using closures
// 🧠 Problem
// Create:
// createCart()
// 📌 It should return:
// addItem(name, price)
// removeItem(name)
// getTotal()
// getItems()
// ❗ Rules
// ❌ No global variables
// ❌ Items must be private
// ❌ Remove only FIRST matching item
// ⚡ Behavior Rules
// ✔ addItem → pushes object {name, price}
// ✔ removeItem → removes first match only
// ✔ getTotal → sum of all prices
// ✔ getItems → return items

// function createCart() {
//   let items = [];

//   return {
//     addItem(item, price) {
//       items.push({ item: item, price: price });
//       return items;
//     },

//     removeItem(item) {
//       let index = items.findIndex((obj) => obj.item === item);
//       if (index !== -1) {
//         items.splice(index, 1);
//       }
//       return items;
//     },

//     getTotal() {
//       return items.reduce((a, b) => a + b.price, 0);
//     },

//     getItems() {
//       return items;
//     },
//   };
// }

// let cart = createCart();

// cart.addItem("Apple", 50);
// cart.addItem("Banana", 30);
// cart.addItem("Apple", 50);

// console.log(cart.getItems());

// console.log(cart.getTotal()); // 130

// cart.removeItem("Apple");

// console.log(cart.getItems());


// 🚀 LEVEL 7 — Q7 (Private Expense Tracker)
// 🎯 Goal
// Build an expense tracker using closures
// 🧠 Problem
// Create:
// createExpenseTracker()
// 📌 It should return:
// addExpense(title, amount)
// removeExpense(title)
// getTotalExpense()
// getAllExpenses()
// ❗ Rules
// ❌ No global variables
// ❌ Data must be private
// ❌ Remove only FIRST matching expense
// ⚡ Behavior Rules
// ✔ addExpense → push {title, amount}
// ✔ removeExpense → remove first match
// ✔ getTotalExpense → sum of all amounts
// ✔ getAllExpenses → return all data


// function createExpenseTracker(){
//     let items = [];

//     return {
//         addExpense(title,amount){
//             items.push({title : title , amount: amount})
//             return items
//         },

//         removeExpense(title){
//             let index = items.findIndex((obj) => obj.title === title);
//             if(index !== -1){
//                 items.splice(index, 1)
//             }
//             return items
//         },

//         getTotalExpense(){
//             return items.reduce((a,b) => a + b.amount ,0)
//         },

//         getAllExpenses(){
//             return items
//         }
//     }
// }


// let tracker = createExpenseTracker();

// tracker.addExpense("Food", 200);
// tracker.addExpense("Travel", 500);
// tracker.addExpense("Food", 100);

// console.log(tracker.getAllExpenses());

// console.log(tracker.getTotalExpense()); // 800

// tracker.removeExpense("Food");

// console.log(tracker.getAllExpenses());

// ▒▓   …/my-all-coding-main/level-7/closure    main ?   v22.22.0   22:52  
// ❯ node problem-7.js 
// [
//   { title: 'Food', amount: 200 },
//   { title: 'Travel', amount: 500 },
//   { title: 'Food', amount: 100 }
// ]
// 800
// [ { title: 'Travel', amount: 500 }, { title: 'Food', amount: 100 } ]



// Q8 (Private Login System — FINAL BOSS)
// 🎯 Goal

// Build a secure login system using closures

// 🧠 Problem

// Create:

// createLoginSystem(password)
// 📌 It should return:
// login(inputPassword)
// resetPassword(newPassword)
// getAttempts()
// ⚡ Rules
// ✔ Correct password → "Login successful"
// ✔ Wrong password → "Wrong password"
// ✔ Max 3 wrong attempts → "Account locked"
// ✔ After lock → no login allowed
// ✔ resetPassword works ONLY if not locked
// ❗ Conditions
// ❌ No global variables
// ❌ Everything must be private
// ❌ Track attempts internally

// function createLoginSystem(password) {
//   let attempts = 0;
//   let locked = false;
//   return {
//     login(text) {
//       if (locked) return "Account locked";
//       if (password === text) {
//         attempts = 0
//         return "Login successful";
//       } else{
//         attempts++;
//         if (attempts >= 3) {
//           locked = true;
//           return "Account locked";
//         }
//         return "Worng Password";
//       }
//     },

//     resetPassword(newPassword) {
//       if (locked) {
//         return "Account locked";
//       } else {
//         password = newPassword;
//         return "Password updated";
//       }
//     },

//     getAttempts() {
//       return attempts;
//     },
//   };
// }

// let user = createLoginSystem("1234");
// // let user = createLoginSystem("1234");

// console.log(user.login("1111")); // Wrong password
// console.log(user.login("2222")); // Wrong password
// console.log(user.getAttempts()); // 2

// console.log(user.login("3333")); // Wrong password
// console.log(user.login("1234")); // Account locked ❌

// user.resetPassword("abcd"); // should NOT work

// console.log(user.getAttempts()); // 3
