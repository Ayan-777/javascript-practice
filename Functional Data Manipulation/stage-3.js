// 🧠 Q11 — activeUserEmails
// Goal
// Return emails of active users only.
// Rules
// Use filter + map
// Keep order the same

// function activeUserEmails(users){
//     return users
//     .filter((x) => x.active === true)
//     .map((x) => x.email)
// }

// console.log(activeUserEmails([
//  {name:"Ayan", email:"ayan@mail.com", active:true},
//  {name:"Rahul", email:"rahul@mail.com", active:false},
//  {name:"Sara", email:"sara@mail.com", active:true}
// ]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   22:31 
// ❯ node stage-3.js
// [ 'ayan@mail.com', 'sara@mail.com' ]

// 🧠 Q12 — totalActiveBalance
// Goal
// Return total balance of active users.
// Rules
// Use filter + reduce

// function totalActiveBalance(users) {
//     return users
//     .filter((x) => x.active === true)
//     .reduce((acc, curr) => acc + curr.balance , 0)
// }
// console.log(
//   totalActiveBalance([
//     { name: "Ayan", balance: 500, active: true },
//     { name: "Rahul", balance: 300, active: false },
//     { name: "Sara", balance: 700, active: true },
//   ]),
// );
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   22:45 
// ❯ node stage-3.js
// 1200

// 🧠 Q13 — sortedProductNames
// Goal
// Return product names sorted by price (cheap → expensive).
// Rules
// Use sort + map

// function sortedProductNames(users){
//     return users
//     .sort((a, b) => a.price - b.price)
//     .map((x) => x.name)
// }
// console.log(sortedProductNames(
//  [
//  {name:"Keyboard", price:1500},
//  {name:"Mouse", price:500},
//  {name:"Monitor", price:8000}
// ]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   22:49 
// ❯ node stage-3.js
// [ 'Mouse', 'Keyboard', 'Monitor' ]

// 🧠 Q14 — expensiveProductNames
// Goal
// Return names of products whose price > 1000.
// Rules
// Use filter + map

// function expensiveProductNames(items) {
//   return items
//   .filter((x) => x.price > 1000)
//   .map((x) => x.name);
// }
// console.log(
//   expensiveProductNames([
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1500 },
//     { name: "Monitor", price: 8000 },
//   ]),
// );
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   22:49  
// ❯ node stage-3.js 
// [ 'Keyboard', 'Monitor' ]


// 🧠 Q15 — hasExpensiveProduct
// Goal
// Check if any product price > 5000.
// Rules
// Use some()

// function hasExpensiveProduct(items){
//     return items.some((x) => x.price > 5000)
// }

// console.log(hasExpensiveProduct(
// [
//  {name:"Mouse", price:500},
//  {name:"Keyboard", price:1500},
//  {name:"Monitor", price:8000}
// ]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   22:51  
// ❯ node stage-3.js 
// true



// 🧠 Q16 — allUsersActive
// Goal
// Check if every user is active.
// Rules
// Use every()

// function allUsersActive(names){
//     return names.every((x) => x.active === true)
// }
// console.log(allUsersActive(
// [
//  {name:"Ayan", active:true},
//  {name:"Rahul", active:true},
//  {name:"Sara", active:false}
// ]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   22:53  
// ❯ node stage-3.js 
// false


// 🧠 Q17 — totalOrderAmount
// Goal
// Calculate total amount of all orders.
// Rules
// Use reduce()

// function totalOrderAmount(acc){
//     return acc.reduce((acc, curr) => acc + curr.amount, 0)
// }

// console.log(totalOrderAmount(
// [
//  {id:1, amount:200},
//  {id:2, amount:500},
//  {id:3, amount:300}
// ]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   22:55  
// ❯ node stage-3.js 
// 1000



// 🧠 Q18 — highestPriceProduct
// Goal
// Return the product with highest price.
// Rules
// Use reduce()

// function highestPriceProduct(items){
//     return items.reduce((max, item) => 
//         item.price > max.price ? item : max
//     )
// }

// console.log(highestPriceProduct(
// [
//  {name:"Mouse", price:500},
//  {name:"Keyboard", price:1500},
//  {name:"Monitor", price:8000}
// ]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   22:58  
// ❯ node stage-3.js 
// { name: 'Monitor', price: 8000 }

// 🧠 Q19 — completedTaskNames
// Goal
// Return names of completed tasks.
// Rules
// Use filter + map

// function completedTaskNames(tasks){
//     return tasks
//     .filter((x) => x.completed === true)
//     .map((x) => x.task)
// }

// console.log(completedTaskNames(
// [
//  {task:"Study JS", completed:true},
//  {task:"Exercise", completed:false},
//  {task:"Build Project", completed:true}
// ]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   23:10  
// ❯ node stage-3.js 
// [ 'Study JS', 'Build Project' ]


// 🧠 Q20 — sortUsersByName
// Goal
// Sort users alphabetically by name.
// Rules
// Use sort()

// function sortUsersByName(users){
//     return users.sort((a, b) => a.name.localeCompare(b.name))
// }

// console.log(sortUsersByName(
// [
//  {name:"Rahul"},
//  {name:"Ayan"},
//  {name:"Sara"}
// ]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   23:16  
// ❯ node stage-3.js 
// [ { name: 'Ayan' }, { name: 'Rahul' }, { name: 'Sara' } ]

