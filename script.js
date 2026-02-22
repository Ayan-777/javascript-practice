// Declare a variable myName and store your name in it. Print it using console.log().
// let myName = "Ayan Mondal";
// console.log(myName); 

// What happens if you declare a variable with let twice? Try it.
// => if you declare a variable with let twice that will give us error
// let myName = 45;
// console.log(myName)
// let myName = 45;
//     ^

// SyntaxError: Identifier 'myName' has already been declared

// Create a const variable PI with value 3.14 and print it.
// const pI = 3.5;

// >>>>>>>>>>>>>>>>🔹 Data Types & Type System
// Create a variable age with a number value and print its type using typeof.
// let age = 50;
// console.log(typeof(age));
// >>>ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script.js 
// number

// Store true in a variable called isStudent and print it.
// let isStudent = true;

// Create a variable with null value. What is its type?
// let score = null;
// console.log(typeof(score))
// >>> ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script.js 
// object
// 


// >>>>>>>>>>>>>>>>> 🔹 Operators
// Add two numbers 5 and 10 and print the result
// let a = 5;
// let b =10;
// console.log(a + b);
// >>>ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script.js 
// 15

//Use the % operator to find the remainder when 17 is divided by 5.
// let a = 17;

// let b = 5;
// let c = a%b;
// console.log(c)
// >>>>ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script.js 
// 2

// If a = 5, b = "5", check (a == b) and (a === b).
// let a = 5
// let b = "5";
// >>>>>a ==b
// false
// a === b
// false


// >>>>>>>>>>🔹 Control Flow
// Write an if-else statement that checks if a number is positive or negative.

//let num = 100;
// let num = -100;

// if(num >= 0){
//     console.log(`your ${num} number is a positive`)
// }else{
//     console.log(`your ${num} number is a negative`)
// }


// Write a program that prints "Even" if a number is even, "Odd" if it’s odd.

// // let num = 40;
// let num = 15;
// if (num % 2 === 0){
//     console.log(`Your number is ${num} a even number `)
// }else{
//     console.log(`Your number is ${num} a odd number `)
// // }
// >>>>>>ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script.js 
// Your number is 40 a even number 
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script.js 
// Your number is 15 a odd number 

// Use switch to print the day name for a number (1 → Sunday, 2 → Monday ...).

// let num = 5;

// switch (num){
//     case 1 :
//         console.log("sunday");
//         break;
//     case 2: 
//     console.log("Monday");
//     break;   
//         case 3: 
//     console.log("Tuesday,");
//     break;   
//         case 4: 
//     console.log("Wednesday");
//     break;   
//         case 5: 
//     console.log("Thursday");
//     break;   
//         case 6: 
//     console.log("Friday");
//     break;  
//         case 7: 
//     console.log("Saturday");
//     break;    
// }

// >>>>>>ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script.js 
// Thursday

//  >>>>>>>>>>>>>>>>Loops

// Use a for loop to print numbers from 1 to 10.

// for (let i = 1; i <= 10; i++ ){
//     console.log(i);
// }
// >>>>>ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script.js 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// Use a while loop to print numbers from 5 to 1.

// let i = 5;
// while(i >= 1){
//     console.log(i);
//     i--;
// }
// >>>>>  node script.js 
// 5
// 4
// 3
// 2
// 1

// Print the sum of numbers from 1 to 100 using a loop.

// let j = 0
// for (let i = 1; i <= 100; i++){
//     j = j+i;
   
// }
//  console.log(`your sum is ${j}`)
//  >>>>ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script.js 
// your sum is 4950

// >>>>>>>>>>>>>>🔹 Functions
// Write a function greet() that prints "Hello, World!".

// function greet (){
//     console.log("Hello, world")
// }
// greet();
// >>>>ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script.js 
// Hello, world

// Write a function add(a, b) that returns the sum of two numbers.

// function add (a, b){
//     return a+ b;
// }

// add();
// >>>>>>>add(10,5)
// 15

// Write a function square(num) that returns the square of a number.

// function square(i){
//    return i*i;
// }
// console.log(square(11))
// >>>>>>>>> ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script.js 
// 121


// >>>>>>>>>🔹 Arrays
// Create an array fruits with "apple", "banana", "orange". Print the second element.

// let fruits =[ "apple", "banana", "orange"];
// console.log(fruits[1]);
// >>>>>>>>>ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script.js 
// banana

// Add "grape" to the array and print the updated array.
// let fruits =[ "apple", "banana", "orange"];
// fruits.push("grape");
// console.log(fruits)
// >>>>>>ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script.js 
// [ 'apple', 'banana', 'orange', 'grape' ]

// Use a loop to print all elements of the array.
// let arr =[1, 2, 3, 4, 5, 6, 7]
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }
// >>>>>>>>1
// script.js:211 2
// script.js:211 3
// script.js:211 4
// script.js:211 5
// script.js:211 6
// script.js:211 7