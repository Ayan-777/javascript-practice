// >>>>>>>>>> ⚫ Stage 6 — Real-world Systems

//  Q1 (again — now serious)
//  ⚠️ Rules
// Use reduce()
// Build object step by step
// 🎯 Output
// {
//   admin: ["Ayan", "Riya"],
//   user: ["Rahul"]
// }

// let users = [
//   { name: "Ayan", role: "admin" },
//   { name: "Rahul", role: "user" },
//   { name: "Riya", role: "admin" }
// ];

// let result = users.reduce((acc,curr) => {
//     if(!acc[curr.role]){
//         acc[curr.role] = []
//     }

//     acc[curr.role].push(curr.name)
//     return acc
// },{})

// console.log(result)
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   00:19 
// ❯ node stage6.js
// { admin: [ 'Ayan', 'Riya' ], user: [ 'Rahul' ] }

// (Q2)
// Let’s increase difficulty a little:
// 🎯 Problem
// 🎯 Output
// {
//   Ayan: 150,
//   Rahul: 200
// }

// ⚠️ Rules
// Use reduce()
// Sum amounts per user

// let orders = [
//   { user: "Ayan", amount: 100 },
//   { user: "Rahul", amount: 200 },
//   { user: "Ayan", amount: 50 },
// ];

// let result = orders.reduce((acc, curr) => {
//   if (!acc[curr.user]) {
//     acc[curr.user] = 0;
//   }
//   acc[curr.user] += curr.amount;
//   return acc;
// }, {});

// console.log(result);

// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   00:35 
// ❯ node stage6.js
// { Ayan: 150, Rahul: 200 }

// Q3 — Slightly Hard)
// Now combine grouping + counting

// 🎯 Output
// {
//   error: 2,
//   info: 2,
//   warning: 1
// }
// ⚠️ Rules
// Use reduce()
// Count occurrences
// 👉 This is called frequency counter

// let logs = [
//   { type: "error" },
//   { type: "info" },
//   { type: "error" },
//   { type: "warning" },
//   { type: "info" }
// ];

// let result = logs.reduce((acc,curr) => {
//     if(!acc[curr.type]){
//         acc[curr.type] = 0
//     }

//     acc[curr.type] += 1
//     return acc
// },{})

// console.log(result)
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   11:52 
// ❯ node stage6.js
// { error: 2, info: 2, warning: 1 }

// (Q4 — Real Combo)
// Now combine everything:

// 🎯 Output
// {
//   admin: 2,
//   user: 1
// }
// ⚠️ Rules
// Count ONLY active users
// Group by role
// Use reduce()
// 👉 This mixes:
// filtering
// grouping
// counting

// let users = [
//   { name: "Ayan", role: "admin", active: true },
//   { name: "Rahul", role: "user", active: false },
//   { name: "Riya", role: "admin", active: true },
//   { name: "Neha", role: "user", active: true }
// ];

// let filter = users.filter(x => x.active)

// let result = filter.reduce((acc,curr)=> {
//     if(!acc[curr.role]){
//         acc[curr.role] = 0
//     }

//     acc[curr.role] += 1
//     return acc
// },{})

// console.log(result)

// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   12:04 
// ❯ node stage6.js
// { admin: 2, user: 1 }

// (Q5 — Final Boss of Stage 6)

// Now real challenge:
// 🎯 Output
// {
//   Ayan: {
//     credit: 170,
//     debit: 50
//   },
//   Rahul: {
//     credit: 200,
//     debit: 0
//   }
// }
// ⚠️ Rules
// Use reduce()
// Nested object
// Default missing type = 0
// 👉 This is real system-level aggregation

// function usertransaction(user){
//     let users = user.reduce((acc,curr) => {
//         if(!acc[curr.user]){
//             acc[curr.user] = {credit: 0, debit: 0}
//         }

//         acc[curr.user][curr.type] += curr.amount
//         return acc
//     },{})
//     return users
// }

// console.log(usertransaction([
//   { user: "Ayan", type: "credit", amount: 100 },
//   { user: "Ayan", type: "debit", amount: 50 },
//   { user: "Rahul", type: "credit", amount: 200 },
//   { user: "Ayan", type: "credit", amount: 70 }
// ]))

// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   12:17 
// ❯ node stage6.js
// { Ayan: { credit: 170, debit: 50 }, Rahul: { credit: 200, debit: 0 } }

// (Stage 6 )
// If you solve this → I’ll say you’re truly ready
// 🎯 Problem (Mixed Everything)
// 🎯 Output
// {
//   Ayan: {
//     food: 170,
//     trael: 200
//   },
//   Rahul: {
//     food: 50,
//     travel: 30
//   }
// }
// ⚠️ Rules
// Use reduce()
// Dynamic user
// Dynamic category
// No hardcoding (food, travel)

// let data = [
//   { user: "Ayan", category: "food", amount: 100 },
//   { user: "Ayan", category: "travel", amount: 200 },
//   { user: "Rahul", category: "food", amount: 50 },
//   { user: "Ayan", category: "food", amount: 70 },
//   { user: "Rahul", category: "travel", amount: 30 },
// ];

// let result = data.reduce((acc, curr) => {
//   if (!acc[curr.user]) {
//     acc[curr.user] = {};
//   }
//   if (!acc[curr.user][curr.category]) {
//     acc[curr.user][curr.category] = 0;
//   }
//   acc[curr.user][curr.category] += curr.amount;
//   return acc;
// }, {});

// console.log(result);

// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   12:51  
// ❯ node stage6.js 
// { Ayan: { food: 170, travel: 200 }, Rahul: { food: 50, travel: 30 } }