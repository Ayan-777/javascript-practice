// 🚀 Lab 1: The "Vip Only" Club
// Goal: Create a function isAllowed(name) that checks if a person is on a guest list.

// Create an array: let guestList = ["ayan", "gemini", "john", "sara"].

// The function should take a name as an argument.

// Lowercase the name before checking.

// If the name is in the array, return "Welcome to the club!".

// If not, return "Sorry, you are not on the list.".

// let guestList = ["ayan", "gemini", "john", "sara"]
// const isAllowed = (name) => {
//     let lowername = name.toLowerCase();
//     for(let i = 0; i < guestList.length; i++){
//         if(guestList[i] === lowername){
//         return `Welcome ${name} to the club!`
//     }
//     } 
//     return `Sorry, ${name} you are not on the list get lost`   
// }

// let test = isAllowed("chaGpt");
// console.log(test)


// let test2 = isAllowed("sara");
// console.log(test2)









// Ready for Lab 2: The Fruit Counter?
// Here is the challenge again to save you from scrolling:
// let myStock = [
//   { name: "Apple", qty: 10 }, 
//   { name: "Banana", qty: 5 }, 
//   { name: "Orange", qty: 8 }
// ];
// function countTotal (stockArray) {
//     let result = 0

//     for(let i = 0; i < stockArray.length; i++){
//         result += stockArray[i].qty
//     }
//     return result
// }

// console.log(countTotal(myStock));



// Lab 3: Email Formatter
// Now for the "data cleaner." Imagine a user types their name into a form, but they are messy and add extra spaces or capital letters


// function formatEmail(username) {
//     let result = username.trim().toLowerCase() + "@company.com"

//     return result
// }

// console.log(formatEmail(" Ayandeve  "));
// console.log(formatEmail(" gemini  "));



// Lab 4: Shopping Cart "Delete"
// You’ve used splice before in our big inventory lab, but let's see if you can do it from scratch with just a simple list.


// function reItem (cart, itemName){

//     let index = cart.indexOf(itemName)

//     if(index !== -1){
//         cart.splice(index, 1)
//     }
//     return cart
// }

// let myCart = ["Milk", "Bread", "Eggs","Phone", "Laptop"];

// console.log(reItem(myCart, "Bread"));





// The Score Booster
// This is the last one! It combines loops, conditionals (if/else), and creating new data.

// function boostScores(scores) {
//     let upgraded = [];

//     for (let i = 0; i < scores.length; i++) {
//         if (scores[i] < 50) {
//             upgraded.push(scores[i] + 10)
//         } else {
//             upgraded.push(scores[i]);
//         }
//     }
//     return upgraded

// }


// console.log(boostScores([40, 75, 50, 30]));






// function highAndLow(numbers){

//     const arrstr = numbers.split(" ")
 
//     let bignumber = Math.max(...arrstr)
//     let lownumber = Math.min(...arrstr)

    
//     return `${bignumber} ${lownumber}`
// }

// console.log(highAndLow("1 2 3 4 5"))





// Friend or Foe?
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...


// function friend (friends){
//     let fifriend = []

//     for(let name of friends){
//         if(name.length === 4){
//             fifriend.push(name)
//         }
//     }
//     return fifriend
  
// }

// let test = friend(["Ryan", "Kieran", "Jason", "Yous"])
// console.log(test)



// Split Strings

// function convertHTML(str){
//     let result = ""
//     let words = str.split("");

//     for(let word of words){
//         let replace = "";
//         if (word === "&"){
//             replace = "&amp;"
//         }else if(word === "<"){
//             replace = "&lt;"
//         }else if(word === ">"){
//             replace = "&gt;"
//         }
//         else if(word === '"'){
//             replace = "&quot;"
//         }else if(word === "'"){
//             replace = "&apos;"
//         }else{
//             replace = word;
//         }
//         result += replace
//     }
//     return result
    
// }

// console.log(convertHTML("Dolce & Gabbana"))





// function  sumFibs(num) {
//     let prev = 0;
//     let curre = 1;
//     let result = 0;

//     while (curre <= num) {
//         if(curre % 2 !== 0){
//             result += curre
//         }

//         let next = prev + curre;
//         prev = curre;
//         curre = next;
//     }
//     return result
// }

// console.log(sumFibs(10));





// function dropElements(arr, func){
//     let result = []
//     for (let i = 0; i < arr.length; i++){
//         if(func(arr[i])){
//             result += arr.slice(i)
//         }else []
//     }
//     return result
// }


// console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));

// The third argument is the array where map is being called on.

// const numbers = [3, 4, 5, 6, 7].map((element, index, array) => {
//   console.log("Element:", element);
//   console.log("Index:", index);
//   console.log("Array:", array);
//   return element * 2;
// });



// function getIndexToIns (arry, num){
//   const sortary = arry.sort((a,b) => a - b);
//   const indexs = sortary.findIndex(x => x >= num);
//   return indexs 
  
// }

// console.log(getIndexToIns([60, 10, 20, 30, 40, 50],40))
// console.log(getIndexToIns([1,10,2],10))

// 🧠 Practice Question 1 — Sorted Insert Position

// Task:
// Create a function that:
// Takes an array and a number.
// Sorts the array in ascending order.
// Returns the lowest index where the number should be inserted.

// function getIndex(arry, num){
//   let sort = arry.sort((a,b) => a-b)
//   let index = sort.findIndex(x => x >= num);
//   return index
// }


// console.log(getIndex([5, 3, 20, 10], 7))
// ❯ node script6.js 
// 2

// 🧠 Practice Question 2 — First Greater Number Index

// Task:
// Create a function that:
// Takes an array and a number.
// Returns the index of the first element strictly greater than the given number.
// If none found → return -1.

function firstGreater(arry, num){
    let sort = arry.sort((a,b) => a-b)
  let index = sort.findIndex(x => x > num);
  return index 
}

console.log(firstGreater([2, 4, 6, 8], 5));
// ░▒▓   …/my-all-coding-main   main !   v22.22.0   12:49  
// ❯ node script6.js 
// 2