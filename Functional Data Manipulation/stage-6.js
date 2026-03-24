// 🧠 Q1 — totalRevenueFromActiveUsers
// 🎯 Goal:

// Return total money spent by active users only

// function totalRevenueFromActiveUsers(users) {
//   return users
//   .filter(user => user.active === true)
//   .map(user => user.purchases.reduce((a,b) => a + b ,0))
//   .reduce((acc, curr) => acc + curr, 0)
// }

// console.log(
//   totalRevenueFromActiveUsers([
//     { name: "Ayan", active: true, purchases: [100, 200] },
//     { name: "Sara", active: false, purchases: [500] },
//     { name: "Rahul", active: true, purchases: [50] },
//   ]),
// );
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   18:25 
// ❯ node stage-6.js
// 350

// 🧠 Q2 — mostExpensiveProduct
// 🎯 Goal:

// Return the product name with highest price

// function mostExpensiveProduct(products){
//     return [...products].sort((a,b) => b.price - a.price)[0].name

// }

// console.log(mostExpensiveProduct([
//   {name:"Pen", price:10},
//   {name:"Book", price:50},
//   {name:"Bag", price:80}
// ]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   20:39 
// ❯ node stage-6.js
// Bag

// 🧠 Q3 — countWords
// 🎯 Goal:

// Count how many times each word appears

// function countWords(words) {
//   return words.reduce((acc, curr) => {
//     if (!acc[curr]) {
//       acc[curr] = 0;
//     }

//     acc[curr] += 1;
//     return acc;
//   }, {});
// }

// console.log(
//   countWords(["apple", "banana", "apple", "orange", "banana", "apple"]),
// );

// 🧠 Q4 — filterUsersByMinPurchase
// 🎯 Goal:

// Return names of users whose total purchases ≥ minAmount

// function filterUsersByMinPurchase(users, minAmount) {
//   return users
//     .filter((x) => {
//       let total = x.purchases.reduce((a, b) => a + b, 0);
//       return total >= minAmount;
//     })
//     .map((users) => users.name);
// }

// console.log(
//   filterUsersByMinPurchase(
//     [
//       { name: "Ayan", purchases: [100, 200] },
//       { name: "Sara", purchases: [50] },
//       { name: "Rahul", purchases: [300] },
//     ],
//     200,
//   ),
// );

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   20:08 
// ❯ node stage-6.js
// [ 'Ayan', 'Rahul' ]

// 🧠 Q5 — totalStockByCategory
// 🎯 Goal:

// Return total stock grouped by category

// function totalStockByCategory(stocks){
//   return stocks
//   .reduce((acc, curr) => {
//     if(!acc[curr.category]){
//       acc[curr.category] = 0
//     }

//     acc[curr.category] += curr.stock
//     return acc
//   },{})
// }

// console.log(totalStockByCategory([
//  {name:"Pen", category:"Stationery", stock:10},
//  {name:"Book", category:"Stationery", stock:5},
//  {name:"Shirt", category:"Clothing", stock:8}
// ]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   20:24 
// ❯ node stage-6.js
// { Stationery: 15, Clothing: 8 }

// 🧠 Q6 — findUserWithMostPurchases
// 🎯 Goal:

// Return the name of user who made the highest total purchases\

// function findUserWithMostPurchases(users) {
//   let result = users.reduce((acc, curr) => {
//     let acctotal = acc.purchases.reduce((a, b) => a + b, 0);
//     let currtotal = curr.purchases.reduce((a, b) => a + b, 0);

//     return currtotal > acctotal ? curr : acc;
//   });

//   return result.name;
// }

// console.log(
//   findUserWithMostPurchases([
//     { name: "Ayan", purchases: [100, 200] },
//     { name: "Sara", purchases: [500] },
//     { name: "Rahul", purchases: [50, 50, 50] },
//   ]),
// );
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   20:59 
// ❯ node stage-6.js
// Sara

// 🧠 Q7 — filterProductsByMinTotalValue
// 🎯 Goal:

// Return product names where price × quantity ≥ minValue

// function filterProductsByMinTotalValue(products, minValue) {
//     return products
//     .filter((item) => {
//         let total = item.price * item.quantity;
//         return total >= minValue
//     })
//     .map(item => item.name)
// }

// console.log(
//   filterProductsByMinTotalValue(
//     [
//       { name: "Pen", price: 10, quantity: 5 },
//       { name: "Book", price: 50, quantity: 1 },
//       { name: "Bag", price: 100, quantity: 2 },
//     ],
//     200,
//   ),
// );
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   22:22 
// ❯ node stage-6.js
// [ 'Bag' ]

// 🧠 Q8 — groupOrdersByUser
// 🎯 Goal:

// Group order amounts by user name

// function groupOrdersByUser(users){
//     return users.reduce((acc, curr) => {
//         if(!acc[curr.user]){
//             acc[curr.user] = []
//         }

//         acc[curr.user].push(curr.amount)
//         return acc
//     },{})
// }

// console.log(groupOrdersByUser([
//   {user:"Ayan", amount:100},
//   {user:"Sara", amount:200},
//   {user:"Ayan", amount:50}
// ]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   20:06 
// ❯ node stage-6.js
// { Ayan: [ 100, 50 ], Sara: [ 200 ] }

// 🧠 Q9 — getTopScorer
// 🎯 Goal:

// Return name of student with highest total marks

// function getTopScorer(student){
//     return student.reduce((acc, curr) => {
//         let acctotal = acc.marks.reduce((a,c) => a+ c,0);
//         let currtotal = curr.marks.reduce((a,c) => a+ c,0)

//         return currtotal > acctotal ? curr : acc
//     }).name
// }

// console.log(getTopScorer([
//   {name:"Ayan", marks:[80,90]},
//   {name:"Sara", marks:[100]},
//   {name:"Rahul", marks:[70,60,50]}
// ]))

// // ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   20:06 
// // ❯ node stage-6.js
// // Rahul

// 🧠 Q10 — averagePurchasePerUser
// 🎯 Goal:

// Return an object where each user has their average purchase value

// function averagePurchasePerUser(users){

//     return users.reduce((acc, curr)=> {
//         let total = curr.purchases.reduce((a,b) => a + b ,0)

//         let avg = total/curr.purchases.length;

//         acc[curr.name] = avg;
//         return acc
//     },{})

// }

// console.log(averagePurchasePerUser([
//   {name:"Ayan", purchases:[100,200]},
//   {name:"Sara", purchases:[50,150,250]}
// ]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   17:22 
// ❯ node stage-6.js
// { Ayan: 150, Sara: 150 }

// 🧠 Q11 — findInactiveUsersWithHighSpending
// 🎯 Goal:

// Return names of users who are:
// ❌ inactive
// 💰 BUT total purchases ≥ minAmount

// function findInactiveUsersWithHighSpending(users, minAmount) {
//     return users
//     .filter((x) => {
//         let total = x.purchases.reduce((a,b) => a + b ,0)
//         return !x.active && total >= minAmount;
//     })
//     .map(x => x.name)
// }

// console.log(
//   findInactiveUsersWithHighSpending(
//     [
//       { name: "Ayan", active: true, purchases: [100] },
//       { name: "Sara", active: false, purchases: [200, 300] },
//       { name: "Rahul", active: false, purchases: [50] },
//     ],
//     400,
//   ),
// );

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   18:22  
// ❯ node stage-6.js 
// [ 'Sara' ]