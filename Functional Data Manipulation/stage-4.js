// Q1 — doubleEvenNumbers
// Goal
// Return a new array where only even numbers are doubled.

// function doubleEvenNumbers(numbers){
//     return numbers.map((x) => {
//         if(x % 2 === 0){
//            return x * 2
//         }else{
//           return  x
//         }
//     })
// }

// console.log(doubleEvenNumbers([1,2,3,4]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   19:37  
// ❯ node stage-4.js 
// [ 1, 4, 3, 8 ]


// // 🧠 Q2 — removeValues
// // Goal:
// // Remove all values that appear in extra arguments.
// // Parameters:
// // (arr, ...values)

// function removeValues(arr, ...num){
//     return arr.filter((x) => !num.includes(x))
    
// }

// console.log(removeValues([1,2,3,1,2,3], 2,3))
// .0   19:44  
// ❯ node stage-4.js 
// [ 1, 1 ]


// 🧠 Q3 — totalPrice

// Goal:
// Calculate total price of all products.

// function totalPrice(items){
//     return items.reduce((acc, curr) => acc + curr.price, 0)
// }

// console.log(totalPrice([
//  {name:"Pen", price:10},
//  {name:"Book", price:50}
// ]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   19:45  
// ❯ node stage-4.js 
// 60



// 🧠 Q4 — sortNumbersDescending

// Goal:
// Sort numbers from largest → smallest

// function sortNumbersDescending(num){
//     return num.sort((a, b) => b - a)
// }

// console.log(sortNumbersDescending([3,7,1,9]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   19:47  
// ❯ node stage-4.js 
// [ 9, 7, 3, 1 ]


// 🧠 Q5 — countSpecificValues

// Goal:
// Count how many times specific values appear.

// function countSpecificValues(arr, ...targests){
//     return arr 
//     .filter(x => targests.includes(x))
//     .length
// }


// console.log(countSpecificValues([1,2,3,1,2,3,1], 1,3))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   19:53  
// ❯ node stage-4.js 
// 5


// 🧠 Q6 — getUserNames

// Goal:
// Return all user names.

// function getUserNames(users){
//     return users.map(x => x.name)
// }

// console.log(getUserNames([
//  {name:"Ayan"},
//  {name:"Sara"}
// ]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   19:58  
// ❯ node stage-4.js 
// [ 'Ayan', 'Sara' ]

// 🧠 Q7 — activeUsersCount

// Goal:
// Count how many users are active.

// function activeUsersCount(users){
//     return users
//     .filter(x => x.active)
//     .length
// }

// console.log(activeUsersCount([
//  {name:"Ayan", active:true},
//  {name:"Rahul", active:false},
//  {name:"Sara", active:true}
// ]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   20:30  
// ❯ node stage-4.js 
// 2


// 🧠 Q8 — highestNumber

// Goal:
// Return the largest number.

// function highestNumber(num){
//     return num.reduce((max, num) => {
//         return num > max ? num : max
//     })
// }

// console.log(highestNumber([3,9,2,6]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   20:37  
// ❯ node stage-4.js 
// 9
