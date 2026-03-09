// >>>>>>>>>>> Q1 — doubleNumbers(arr)
// Goal:
// Return a new array where every number is doubled.

// Rules
// Use map()
// Do not use loops
// Array must keep same length
// Empty array → []

// function doubleNumbers(arr) {
//   if (arr.length === 0) return [];
//   let newmap = arr.map((x) => x * 2);
//   return newmap;
// }

// console.log(doubleNumbers([1,2,3,4]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   15:45 
// ❯ node script.js
// [ 2, 4, 6, 8 ]


// >>>>>>>>>>>Q2 — numbersToStrings(arr)
// Goal:
// Convert every number into a string.

// Rules
// Use map()
// Order must stay the same

// function numbersToStrings(arr){
//     let newarr = arr.map((x) => x.toString())
//     return newarr 
// }

// console.log(numbersToStrings([1,2,3]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   15:45  
// ❯ node script.js 
// [ '1', '2', '3' ]

// >>>>>>>>>> Q3 — addFiveToNumbers(arr)
// Goal:
// Add 5 to every number.

// Rules
// Use map()
// Return a new array

// function addFiveToNumbers(arr){
//     return arr.map((x) => x+5)
// }

// console.log(addFiveToNumbers([10,20,30]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   16:25  
// ❯ node script.js 
// [ 15, 25, 35 ]


// >>>>>>>>>>>>> Q4 — keepEvenNumbers(arr)
// Goal:
// Return only even numbers.

// Rules
// Use filter()
// Odd numbers must be removed
// Order must stay same

// function keepEvenNumbers(arr){
//     return arr.filter((x) => x % 2 === 0)
// }

// console.log(keepEvenNumbers([1,2,3,4,5,6]))
// .0   16:49  
// ❯ node script.js 
// [ 2, 4, 6 ]


// >>>>>>>>>> Q5 — numbersGreaterThanTen(arr)
// Goal:
// Return numbers greater than 10.

// Rules
// Use filter()
// Keep numbers > 10

// function  numbersGreaterThanTen(arr){
//     return arr.filter((x) => x > 10)
// }


// console.log(numbersGreaterThanTen([5,12,8,20,3]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   16:49  
// ❯ node script.js 
// [ 12, 20 ]

// >>>>>>>>>>> Q6 — longWords(arr)

// Goal:
// Return words with length greater than 3.

// Rules
// Use filter()
// Keep words where word.length > 3

// function longWords(arr){
//     return arr.filter((x) => x.length > 3)
// }

// console.log(longWords(["cat","elephant","dog","tiger"]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   16:53  
// ❯ node script.js 
// [ 'elephant', 'tiger' ]


// >>>>>>>>>>>>>> Q7 — firstNumberGreaterThanTen(arr)
// Goal:
// Return the first number greater than 10.

// Rules
// Use find()
// Stop at first match

// function firstNumberGreaterThanTen(arr){
//     return arr.find((x) => x > 10)
// }

// console.log(firstNumberGreaterThanTen([4,7,9,15,20]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   17:03  
// ❯ node script.js 
// 15


// >>>>>>>>>>>> Q8 — firstEvenNumber(arr)
// Goal:
// Return the first even number.

// Rules
// Use find()
// Stop after first match

// function firstEvenNumber(arr){
//     return arr.find((x) => x%2 === 0);
// }

// console.log(firstEvenNumber([3,5,7,8,10]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   17:03  
// ❯ node script.js 
// 8

// Q9 — hasNegativeNumber(arr)
// Goal:
// Check if array contains any negative number.

// Rules
// Use some()
// Return true if number < 0

// function hasNegativeNumber(arr){
//     return arr.some((x) => x < 0)
// }

// console.log(hasNegativeNumber([3,5,-2,8]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   17:05  
// ❯ node script.js 
// true

//>>>>>>>>>>> Q10 — hasNumberGreaterThanHundred(arr)
// Goal:
// Check if any number is greater than 100.

// Rules
// Use some()

// function hasNumberGreaterThanHundred(arr){
//     return arr.some((x) => x > 100)
// }

// console.log(hasNumberGreaterThanHundred([10,20,30,40]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   17:11  
// ❯ node script.js 
// false

// >>>>>>>>>>> Q11 — allNumbersPositive(arr)
// Goal:
// Check if all numbers are positive.

// Rules
// Use every()
// All numbers must be > 0

// function allNumbersPositive(arr){
//     return arr.every((x) => x > 0)
// }

// console.log(allNumbersPositive([3,7,9,10]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   23:36  
// ❯ node script.js 
// true

// >>>>>>>>>>>> Q12 — allNumbersEven(arr)
// Goal:
// Check if all numbers are even.

// Rules
// Use every()
// If any odd → false

// function allNumbersEven(arr){
//     return arr.every((x) => x % 2 === 0)
// }

// console.log(allNumbersEven([2,4,6,7]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   23:42  
// ❯ node script.js 
// false


// >>>>>>>>>>>>> Q13 — sumOfNumbers(arr)
// Goal:
// Return sum of all numbers.

// Rules
// Use reduce()
// Start accumulator = 0

// function sumOfNumbers(arr){
//     return arr.reduce((acc, curr) => acc + curr,0)
// }

// console.log(sumOfNumbers([1,2,3,4,5]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   23:46  
// ❯ node script.js 
// 15

// >>>>>>>>>>>>>> Q14 — productOfNumbers(arr)
// Goal:
// Multiply all numbers.

// Rules
// Use reduce()
// Start accumulator = 1

// function productOfNumbers(arr){
//     return arr.reduce((acc, curr) => acc * curr, 1)
// }

// console.log(productOfNumbers([2,3,4]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   23:50  
// ❯ node script.js 
// 24


// >>>>>>>> Q15 — sortNumbersAscending(arr)
// Goal:
// Sort numbers from smallest → largest.

// Rules
// Use sort()
// Must use numeric comparison

// function sortNumbersAscending(arr){
//     return arr.sort((a,b) => a - b)
// }

// console.log(sortNumbersAscending([5,2,9,1,7]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   23:55  
// ❯ node script.js 
// [ 1, 2, 5, 7, 9 ]



// >>>>>>> Q16 — sortNumbersDescending(arr)
// Goal:
// Sort numbers from largest → smallest.

// Rules
// Use sort()

// function sortNumbersDescending(arr){
//     return arr.sort((a,b) => b - a)
// }

// console.log(sortNumbersDescending([5,2,9,1,7]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   00:08  
// ❯ node script.js 
// [ 9, 7, 5, 2, 1 ]