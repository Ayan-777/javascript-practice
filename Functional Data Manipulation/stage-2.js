// Q1 — activeUserNames(users)
// Goal:
// Return names of users whose active status is true.

// Rules
// Use filter + map
// Order must stay same

// function  activeUserNames(users){
//     return users
//     .filter((x) => x.active === true)
//     .map((x) => x.name)
// }

// console.log(activeUserNames([
//  {name:"Ayan", active:true},
//  {name:"Rahul", active:false},
//  {name:"Sara", active:true}
// ]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main !   v22.22.0   23:11 
// ❯ node stage-2.js
// [ 'Ayan', 'Sara' ]

// Q2 — expensiveProducts(products)
// Goal:
// Return products with price greater than 1000.

// Rules
// Use filter

// function expensiveProducts(products) {
//   return products.filter((x) => x.price > 1000);
// }
// console.log(
//   expensiveProducts([
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1500 },
//     { name: "Monitor", price: 8000 },
//   ]),
// );

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main !   v22.22.0   23:15 
// ❯ node stage-2.js
// [ { name: 'Keyboard', price: 1500 }, { name: 'Monitor', price: 8000 } ]

// Q3 — productNames(products)

// Goal:
// Return array containing only product names.

// Rules
// Use map

// function productNames(products){
//     return products.map((x) => x.name)
// }

// console.log(productNames(
// [
//  {name:"Mouse", price:500},
//  {name:"Keyboard", price:1500}
// ]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main !   v22.22.0   23:17 
// ❯ node stage-2.js
// [ 'Mouse', 'Keyboard' ]

// Q4 — firstCompletedTask(tasks)

// Goal:
// Return the first task where completed is true.

// Rules
// Use find()

// function firstCompletedTask(tasks){
//     return tasks.find((x) => x.completed === true)
// }

// console.log(firstCompletedTask(

// [
//  {task:"Study JS", completed:false},
//  {task:"Do project", completed:true},
//  {task:"Exercise", completed:true}
// ]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main !   v22.22.0   23:17 
// ❯ node stage-2.js
// { task: 'Do project', completed: true }

// Q5 — hasAdminUser(users)

// Goal:
// Check if any user has role "admin".

// Rules
// Use some()

// function hasAdminUser(users) {
//   return users.some((x) => x.role === "admin");
// }

// console.log(
//   hasAdminUser([
//     { name: "Ayan", role: "user" },
//     { name: "Rahul", role: "admin" },
//     { name: "Sara", role: "user" },
//   ]),
// );

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main !   v22.22.0   23:19 
// ❯ node stage-2.js
// true

// Q6 — allTasksCompleted(tasks)
// Goal:
// Check if every task is completed.

// Rules
// Use every()

// function allTasksCompleted(tasks) {
//   return tasks.every((x) => x.completed === true);
// }

// console.log(
//   allTasksCompleted([
//     { task: "A", completed: true },
//     { task: "B", completed: true },
//   ]),
// );

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main !   v22.22.0   23:23  
// ❯ node stage-2.js 
// true


// Q7 — totalCartPrice(cart)
// Goal:
// Return total price of all items.

// Rules
// Use reduce()

// function totalCartPrice(cart){
//     return cart.reduce((a, c) => a + c.price ,0)
// }
// console.log(totalCartPrice(
// [
//  {name:"Book", price:200},
//  {name:"Pen", price:50},
//  {name:"Bag", price:1000}
// ]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main !   v22.22.0   23:28  
// ❯ node stage-2.js 
// 1250

// Q8 — totalQuantity(cart)
// Goal:
// Return total quantity of items.

// Rules
// Use reduce()

// function totalQuantity(cart){
//     return cart.reduce((a, c) => a + c.quantity, 0)
// }

// console.log(totalQuantity(
// [
//  {name:"Pen", quantity:2},
//  {name:"Book", quantity:3}
// ]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main !   v22.22.0   23:33  
// ❯ node stage-2.js 
// 5


// Q9 — sortProductsByPrice(products)
// Goal:
// Sort products from cheapest to most expensive.

// Rules
// Use sort()
// function sortProductsByPrice(products){
//     return products.sort((a, b) => a.price - b.price);
// }
// console.log(sortProductsByPrice(
// [
//  {name:"Keyboard", price:1500},
//  {name:"Mouse", price:500},
//  {name:"Monitor", price:8000}
// ]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main !   v22.22.0   23:36  
// ❯ node stage-2.js 
// [
//   { name: 'Mouse', price: 500 },
//   { name: 'Keyboard', price: 1500 },
//   { name: 'Monitor', price: 8000 }
// ]


// Q10 — sortUsersByAge(users)
// Goal:
// Sort users from  oldest → youngest.

// Rules
// Use sort()
// function sortUsersByAge(users){
//     return users.sort((a, b) =>  b.age - a.age)
// }

// console.log(sortUsersByAge([
//  {name:"Ayan", age:20},
//  {name:"Rahul", age:25},
//  {name:"Sara", age:18}
// ]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main !   v22.22.0   23:36  
// ❯ node stage-2.js 
// [
//   { name: 'Rahul', age: 25 },
//   { name: 'Ayan', age: 20 },
//   { name: 'Sara', age: 18 }
// ]