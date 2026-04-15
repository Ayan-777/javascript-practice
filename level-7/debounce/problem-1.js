// Debounce Problem 1 (Foundation)
// 🎯 Goal
// Build your own debounce function
// 🧠 Problem
// Create a function:
// debounce(fn, delay)
// 📌 It should:
// ✔ Return a new function
// ✔ When called multiple times → only run LAST call
// ✔ Wait for "delay" ms before running
// ✅ Expected Output
// Hi   (only once after 500ms)
// ⚠️ Rules
// ❌ No global variables
// ❌ Must use closure
// ✔ Use setTimeout
// ✔ Use clearTimeout


// function debounce(fn, delay){
//     let timer ;

//     return function(...args){
//         clearTimeout(timer)

//         timer = setTimeout(() => {
//             fn.apply(this,args)
//         },delay)
//     }
// }


// const say = debounce((name) => {
//   console.log("Hi " + name);
// }, 500);

// say("Ayan");
// say("Rahul");
// say("John");
// ░▒▓   …/my-all-coding-main/level-7/debounce   main !?   v22.22.0   23:01  
// ❯ node problem-1.js 
// Hi John