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