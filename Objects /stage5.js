// 🔴 Stage 5 — this Keyword (Core JavaScript)
// 🧠 Overview

// 👉 this means:
// “Which object is calling this function?”

// 🔥 Example
// let user = {
//   name: "Ayan",
//   greet: function () {
//     console.log(this.name);
//   }
// };

// user.greet();
// 👉 Output:
// Ayan
// 👉 Because:
// user is calling greet()
// So this = user
// ⚠️ Important

// 👉 this is NOT fixed
// 👉 It changes based on how function is called



// First Question (Stage 5 — Q1)
// let user1 = {
//   name: "Ayan",
//   greet: function () {
//     console.log(this.name);
//   }
// };

// let user2 = {
//   name: "Rahul",
//   greet: user1.greet
// };

// user2.greet();
// ░▒▓   …/my-all-coding-main/Objects    main !?   v22.22.0   22:28  
// ❯ node stage5.js 
// Rahul

// let user = {
//   name: "Ayan",
//   greet: function () {
//     console.log(this.name);
//   }
// };

// let fn = user.greet;

// fn();
// ░▒▓   …/my-all-coding-main/Objects    main !?   v22.22.0   22:30  
// ❯ node stage5.js 
// undefined

// Q3 — Arrow Function Trap
// let user = {
//   name: "Ayan",
//   greet: () => {
//     console.log(this.name);
//   }
// };

// user.greet();
// ░▒▓   …/my-all-coding-main/Objects    main !?   v22.22.0   22:30  
// ❯ node stage5.js 
// undefined

// let user = {
//   name: "Ayan",
//   greet() {
//     function inner() {
//       console.log(this.name);
//     }
//     inner();
//   }
// };

// user.greet();

// ░▒▓   …/my-all-coding-main/Objects    main !?   v22.22.0   22:30  
// ❯ node stage5.js 
// undefined








// Practice Q1
// 🎯 You must:
// Predict output
// THEN fix the code so it prints "Ayan"
// let obj = {
//   name: "Ayan",
//   greet : function () {
//     console.log(this.name);
//   }
// };


// let fn = obj.greet.bind(obj);
// fn();
// ░▒▓   …/my-all-coding-main/Objects    main !?   v22.22.0   23:05  
// ❯ node stage5.js 
// Ayan


// Next — Q2
// 🎯 Task:

// 👉 Fix it so it prints "Ayan"
// let obj = {
//   name: "Ayan",
//   greet() {
//     console.log(this.name);
//   }
// };

// obj.greet();

// ░▒▓   …/my-all-coding-main/Objects    main !?   v22.22.0   23:11  
// ❯ node stage5.js 
// Ayan


// Practice Q3
// 🎯 Task:
// 👉 Fix it using arrow function

// let obj = {
//   name: "Ayan",
//   greet() {
//     let inner = () => {
//       console.log(this.name);
//     }
//     inner();
//   }
// };

// obj.greet();
// ░▒▓   …/my-all-coding-main/Objects    main !?   v22.22.0   23:17  
// ❯ node stage5.js 
// Ayan