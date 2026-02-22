// let a = 10;
// function test() {
//   let a = 5;
//   console.log(a);
// }
// test();
// console.log(a);

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script3.js 
// 5
// 10


// What is the difference between global scope and function scope?

// global scope means where we create a variables and we can access easyliy that's call global scope 
// in the other hand we have function scope that's means we create a variables inside a function so we can't access the variables anywhere expeted in this specific function

// Predict the output:
// var x = 1;
// function foo() {
//   console.log(x);
//   var x = 2;
// }
// foo();

//  answer should be undefined

// What is lexical scope in JavaScript?
// > lexical scope means where is variables  physically written in the code that's give us know where the code actully code writtn


// function outer() {
//   let counter = 0;
//   return function inner() {
//     counter++;
//     console.log(counter);
//   };
// }
// const count = outer();
// count(); // 1
// count(); // 2

// Explain in your own words: What is a closure and when do we use it?
//  a closure when a inner function remember and can access variables from its outer function, even after the outer function has finished runing .
//  we use for creating private variables   and when do we use it etc.

// What happens if you call outer() again in the above example?
// Both have the same code inside, but they have different memory — they don’t share the same thing





// 🧍 Part 3: this Keyword
// What will be the output?
// const obj = {
//   name: "Ayan",
//   greet() {
//     console.log("Hello " + this.name);
//   }
// };
// obj.greet();

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script3.js 
// Hello Ayan 
// because it's not a arrow function that's way this refer parent value

// const obj = {
//   name: "Ayan",
//   greet: () => {
//     console.log("Hello " + this.name);
//   }
// };
// obj.greet();
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script3.js 
// Hello undefined
// because here we use arrow function 

// Explain the difference between how this behaves in a normal function vs an arrow function.
// In a normal function, this depends on how the function is called (it changes).
// In an arrow function, this is lexically inherited — it uses the this value from its surrounding scope and never changes


//>>>>>>>>>>>>>>>  ⚙️ Part 4: Object-Oriented JavaScript (OOP)

// Create a constructor function called Car that takes brand and year and has a method info() to log them.

// class Car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }

//   info() {
//     console.log(`${this.brand}, ${this.year}`);
//   }
// }

// let car1 = new Car ("BMW", 1916);
// car1.info();
// script3.js:104 BMW, 1916

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log("Hi " + this.name);
//   }
// }
// const p1 = new Person("Ayan");
// p1.sayHi();
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script3.js 
// Hi Ayan

// What is the difference between class and constructor function?
// constructor function basiclly old before es6 to create using function and new but now we have es6 class newer and it make code more clear and easy and more readable but under the hood it is still using prototypes 



// ⏳ Part 5: Callbacks, Promises, and Async/Await

// What will be printed first?
// console.log("Start");
// setTimeout(() => console.log("Timeout"), 0);
// console.log("End");

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script3.js 
// Start
// End
// Timeout
// ayan@ayan-LO

// because start , end are main code they not inside any function so they are immediately run but the timeout a inside a function so js run the timeout 


// What is a callback function? Give one short example.
// a callback function is passed a argument to anther function 

// function Name (name, callback){
//     console.log("Hello " + name);
//     callback();
// }

// function sayBye (){
//     console.log("Goodbye")
// }

// Name("Ayan", sayBye)
// script3.js:142 Hello Ayan
// script3.js:147 Goodbye


// cut the promise qustion i have to learn more about promise then i will give onther exam


