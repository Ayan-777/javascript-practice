// Debounce Problem 2
// ⚡ Test Case
// const greet = debounce((name) => {
//   console.log("Hello " + name);
// }, 500);

// greet("Ayan");
// greet("Rahul");
// greet("John");
// ✅ Expected Output
// Hello John
// ⚠️ Rules
// ✔ Must pass arguments correctly
// ✔ Must use closure
// ✔ Must cancel previous calls
// ❌ No shortcuts

// function debounce(fn, delay) {
//   let timer;

//   return function (...args) {
//     clearTimeout(timer)

//     timer = setTimeout(() => {
//         fn.apply(this,args)
//     },delay)
//   };
// }

// const greet = debounce((name) => {
//   console.log("Hello " + name);
// }, 500);

// greet("Ayan");
// greet("Rahul");
// greet("John");

// ░▒▓   …/my-all-coding-main/level-7/debounce   main !?   v22.22.0   23:21  
// ❯ node problem-2.js 
// Hello John




// 😈 Hidden test (real check)
// 👉 Expected:
// Ayan

const obj = {
  name: "Ayan",
   speak: debounce(function () {
    console.log(this.name);
  }, 500)
};

obj.speak();

