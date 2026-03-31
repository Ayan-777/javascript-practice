// 🧠 Q1 — getTopActiveUsers
// 🎯 Goal:

// Return names of top N active users based on their total purchases

// function getTopActiveUsers(user,n){
//     return user
//     .filter((x) => x.active)
//     .sort((a,b) => {
//         let atotal = a.purchases.reduce((a,b) => a + b ,0);
//         let btotal = b.purchases.reduce((a,b) => a + b, 0);
//         return btotal - atotal
//     })
//     .slice(0,n)
//     .map(x => x.name)
// }

// console.log(getTopActiveUsers(
// [
//   {name:"Ayan", active:true, purchases:[100,200]},
//   {name:"Sara", active:false, purchases:[500]},
//   {name:"Rahul", active:true, purchases:[300,100]},
//   {name:"Neha", active:true, purchases:[50]}
// ],
// 2
// ))

// 🧠 Q2 — groupAndSortUsersBySpending
// 🎯 Goal:

// Return users grouped by active status and
// inside each group → sorted by total purchases (high → low)

// function groupAndSortUsersBySpending(users){
//     let grouped = users.reduce((acc, curr) => {
//         if(curr.active){
//             acc.active.push(curr)
//         }else{
//             acc.inactive.push(curr)
//         }
//     return acc
//     },{active : [], inactive: []})

//     function getTotal(arr){
//         return arr.reduce((a,b) => a+b ,0)
//     }

//     grouped.active = grouped.active
//     .sort((a,b) => getTotal(b.purchases) - getTotal(a.purchases))
//     .map(x => x.name)

//     grouped.inactive = grouped.inactive
//     .sort((a,b) => getTotal(b.purchases) - getTotal(a.purchases))
//     .map(x => x.name)
//     return grouped
// }

// console.log(groupAndSortUsersBySpending([
//   {name:"Ayan", active:true, purchases:[100,200]},
//   {name:"Sara", active:false, purchases:[500]},
//   {name:"Rahul", active:true, purchases:[300,100]},
//   {name:"Neha", active:false, purchases:[50]}
// ]))
// ▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   20:45 
// ❯ node stage-7.js
// { active: [ 'Rahul', 'Ayan' ], inactive: [ 'Sara', 'Neha' ] }

// 🧠 Q1 — getUsersAboveAverage

// 🎯 Goal:
// Return names of users whose total purchases are above average

// function  getUsersAboveAverage(user){

//   let total = user.map(x => x.purchases.reduce((a,b) => a + b ,0));

//   let average = total.reduce((a,b) => a + b ,0) / user.length;

//   return user
//   .filter((x) => x.purchases.reduce((a,b) => a + b ,0) > average)
//   .map(x => x.name)
// }

// console.log(getUsersAboveAverage([
//   {name:"Ayan", purchases:[100,200]},
//   {name:"Sara", purchases:[500]},
//   {name:"Rahul", purchases:[300,100]},
//   {name:"Neha", purchases:[50]}
// ]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   23:35 
// ❯ node stage-7.js
// [ 'Sara', 'Rahul' ]

// 🎯 Goal:
// Return names of users who spent more than 500 total, sorted by highest spend.

// function getUsers(users) {
//   let total = (arr) => arr.reduce((a,b) => a + b,0);

//     return users
//     .filter(x => total(x.purchases) > 500)
//     .sort((a,b) => total(b.purchases) - total(a.purchases))
//     .map(x => x.name)
// }

// console.log(
//   getUsers([
//     { name: "Ayan", purchases: [200, 300], active: true },
//     { name: "Rahul", purchases: [100, 100], active: true },
//     { name: "Riya", purchases: [400, 200], active: false },
//     { name: "Sam", purchases: [600], active: true },
//   ]),
// );
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   17:51 
// ❯ node stage-7.js
// [ 'Riya', 'Sam' ]

// 🧠 Q2 — getTopActiveUsersAboveAvg

// 🎯 Goal:
// Return names of top 2 ACTIVE users whose total spending is above average

// function getTopActiveUsersAboveAvg(users){

//     let total = (arr) => arr.reduce((a,b) => a + b ,0);
//     let average = users.reduce((a,b) => a + total(b.purchases),0)/users.length;

//     return users
//     .filter(x => x.active && total(x.purchases) > average)
//     .sort((a,b) => total(b.purchases) - total(a.purchases))
//     .slice(0, 2)
//     .map(x => x.name)

// }

// console.log(getTopActiveUsersAboveAvg([
//   { name: "Ayan", purchases: [200, 300], active: true },
//   { name: "Rahul", purchases: [100, 100], active: true },
//   { name: "Riya", purchases: [400, 200], active: false },
//   { name: "Sam", purchases: [600], active: true },
//   { name: "Neha", purchases: [700, 100], active: true }
// ]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   21:19 
// ❯ node stage-7.js
// [ 'Neha', 'Sam' ]

// 🧠 Q5 — getTopActiveUsersBelowAvg

// 🎯 Goal:
// Return names of top 3 ACTIVE users whose total spending is below average

// function getTopActiveUsersBelowAvg(users){

//   let total = (arr) => arr.reduce((a,b) => a + b ,0)

//   let average = users.reduce((a,b) => a + total(b.purchases) ,0) / users.length

//   return users
//   .filter(x => x.active && total(x.purchases) < average)
//   .sort((a , b) => total(a.purchases) - total(b.purchases))
//   .slice(0 ,3)
//   .map(x => x.name)
// }

// console.log(getTopActiveUsersBelowAvg( [
//   { name: "Ayan", purchases: [200, 300], active: true },
//   { name: "Rahul", purchases: [100, 100], active: true },
//   { name: "Riya", purchases: [400, 200], active: false },
//   { name: "Sam", purchases: [600], active: true },
//   { name: "Neha", purchases: [100, 100], active: true },
//   { name: "Arjun", purchases: [50, 50], active: true }
// ]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   17:42 
// ❯ node stage-7.js
// [ 'Arjun', 'Rahul', 'Neha' ]

// 🧠 Q4 — getTopNFrequentWords

// 🎯 Goal:
// Return top N most frequent words from an array

// function getTopNFrequentWords(words,n) {

//   let freq = words.reduce((acc,curr) => {
//     acc[curr] = (acc[curr] || 0) +1
//     return acc
//   },{})

//   return Object.entries(freq)
//   .sort((a,b) => b[1] - a[1])
//   .slice(0 , n)

// }
// console.log(
//   getTopNFrequentWords(
//     ["apple", "banana", "apple", "orange", "banana", "apple"],
//     2
//   )
// );
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   17:50 
// ❯ node stage-7.js
// [ [ 'apple', 3 ], [ 'banana', 2 ] ]

// 🧠 Q6 — getLeastNFrequentWords

// 🎯 Goal:
// Return N least frequent words

// function getLeastNFrequentWords(words, n){
//   let freq = words.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1
//     return acc
//   },{})

//   return Object.entries(freq)
//   .sort((a,b) => a[1] - b[1])
//   .slice(0, n)
// }

// console.log(getLeastNFrequentWords(["apple", "banana", "apple", "orange", "banana", "grape"],2))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   17:50 
// ❯ node stage-7.js
// [ [ 'orange', 1 ], [ 'grape', 1 ] ]

// 🧠 Q7 — getTopNFrequentWordsNamesOnly

// 🎯 Goal:
// Return only word names, not counts

// function getTopNFrequentWordsNamesOnly(words,n){
//   let freqword = words.reduce((acc, curr)=> {
//     acc[curr] = (acc[curr] || 0) + 1
//     return acc
//   },{})

//   return Object.entries(freqword)
//   .sort((a,b) => b[1] - a[1])
//   .slice(0, n)
//   .map(x => x[0])
// }

// console.log(getTopNFrequentWordsNamesOnly(["apple", "banana", "apple", "orange", "banana", "apple"],2))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   18:19 
// ❯ node stage-7.js
// [ 'apple', 'banana' ]

// 🧠 Q8 — getTopNFrequentWordsAsObject

// 🎯 Goal:
// Return result as object, not array

// function getTopNFrequentWordsAsObject(words, n) {
//   let freq = words.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
//   }, {});

//   let entries = Object.entries(freq)
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, n);

//   return Object.fromEntries(entries);
// }

// console.log(
//   getTopNFrequentWordsAsObject(
//     ["apple", "banana", "apple", "orange", "banana", "apple"],
//     2,
//   ),
// );

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   20:41 
// ❯ node stage-7.js
// { apple: 3, banana: 2 }

// 🧠 Q9 — getTopActiveUsersWithNamesOnly (Destructuring Version)

// 🎯 Goal:
// Return top 2 ACTIVE users (names only) who spent the most
// 👉 BUT you must use destructuring

// function getTopActiveUsersWithNamesOnly(users, n){
//     let total = arr => arr.reduce((a,b) => a + b, 0);

//     return users
//     .filter(({active , purchases}) => active && total(purchases))
//     .sort((a,b) => total(b.purchases) - total(a.purchases))
//     .slice(0, n)
//     .map(x => x.name)
// }

// console.log(getTopActiveUsersWithNamesOnly( [
//   { name: "Ayan", purchases: [200, 300], active: true },
//   { name: "Rahul", purchases: [100, 100], active: true },
//   { name: "Riya", purchases: [400, 200], active: false },
//   { name: "Sam", purchases: [600], active: true },
//   { name: "Neha", purchases: [700, 100], active: true }
// ], 2))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   21:07 
// ❯ node stage-7.js
// [ 'Neha', 'Sam' ]

// 🧠 Q10 — getTopSpendingActiveUserByCategory

// 🎯 Goal:
// Return top ACTIVE user for each category based on total spending

// function getTopSpendingActiveUserByCategory(users) {
//     let total = arr => arr.reduce((a,b) => a + b ,0)

//     let activeU = users.filter(x => x.active);

//     let grouping = activeU.reduce((acc,curr) => {
//         if(!acc[curr.category]){
//             acc[curr.category] = [];
//         }
//         acc[curr.category].push(curr);
//         return acc
//     },{})

//     let result = {};

//     for(let i in grouping){
//         let topUser = grouping[i].sort((a,b) => total(b.purchases) - total(a.purchases))[0].name
//         result[i] = topUser
//     }

//     return result
// }

// console.log(
//   getTopSpendingActiveUserByCategory([
//     { name: "Ayan", category: "A", purchases: [200, 300], active: true },
//     { name: "Rahul", category: "A", purchases: [100, 100], active: true },
//     { name: "Riya", category: "B", purchases: [400, 200], active: false },
//     { name: "Sam", category: "B", purchases: [600], active: true },
//     { name: "Neha", category: "A", purchases: [700, 100], active: true },
//   ]),
// );

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   17:52 
// ❯ node stage-7.js
// { A: 'Neha', B: 'Sam' }

// 🧠 Q12 — getTopSpendingUser (NO SORT)
// 🎯 Goal:

// Return the name of the user who spent the most

// 📌 Rules:
// ❌ No .sort()
// ✅ Must use reduce
// ✅ Return only the name
// If empty → return null

// function getTopSpendingUser(users) {
//     if(users.length === 0) return null;
//   let total = (arr) => arr.reduce((a, b) => a + b, 0);

//   let topuser = users.reduce((acc, curr) => {
//     let acctotal = total(acc.purchases);
//     let currtotal = total(curr.purchases);

//     return currtotal > acctotal ? curr : acc;
//   });

//   return topuser.name
// }

// console.log(getTopSpendingUser([
//   { name: "Ayan", purchases: [200, 300] },
//   { name: "Rahul", purchases: [100, 100] },
//   { name: "Sam", purchases: [600] },
//   { name: "Neha", purchases: [700, 100] }
// ]));

// ❯ node stage-7.js
// Neha

// 🧠 Q13 — getTopActiveSpender (NO SORT)
// 🎯 Goal:

// Return the name of the ACTIVE user who spent the most

// 📌 Rules:
// ❌ No .sort()
// ✅ Must use reduce
// ✅ Ignore users where active: false
// ✅ Return only the name
// If no active users → return null

// function getTopActiveSpender(user){
//   if(user.length === 0) return 0;

//   let total = arr => arr.reduce((a,b) => a + b,0);

//   let topuser = user.reduce((acc, curr) => {
//     if(!curr.active) return acc;

//     if(!acc) return acc;

//     return total(acc.purchases) > total(curr.purchases) ? acc : curr
//   },null)

//   return topuser ? topuser.name : null;

// }

// console.log(getTopActiveSpender([
//   { name: "Ayan", purchases: [200, 300], active: true },
//   { name: "Rahul", purchases: [100, 100], active: true },
//   { name: "Riya", purchases: [1000], active: false },
//   { name: "Sam", purchases: [600], active: true },
//   { name: "Neha", purchases: [700, 100], active: true }
// ]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   17:36 
// ❯ node stage-7.js
// Neha

// 🧠 Q14 — getTopActiveSpenderByCategory (FINAL BOSS)
// 🎯 Goal:

// Return an object where:

// Each category → top ACTIVE spender name
// 📌 Rules:
// ❌ No .sort()
// ❌ No .filter()
// ✅ Must use reduce (main logic)
// ✅ Ignore inactive users
// ✅ Return names only (not full objects)
// If a category has no active users → don’t include it

function getTopActiveSpenderByCategory(user) {
  if (user.length === 0) return 0;

  let total = (arr) => arr.reduce((a, b) => a + b, 0);

  let grouping = user.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }

    acc[curr.category].push(curr);
    return acc;
  }, {});

  let result = {};

  for (let ch in grouping) {
    let topuser = grouping[ch].reduce((acc, curr) => {
      if (!acc) return curr;

      return total(acc.purchases) > total(curr.purchases) ? acc : curr;
    }, null);

    if (topuser) {
      result[ch] = topuser.name
      
    }
  }

  return result;
}

console.log(
  getTopActiveSpenderByCategory([
    { name: "Ayan", category: "A", purchases: [200, 300], active: true },
    { name: "Rahul", category: "A", purchases: [100, 100], active: true },
    { name: "Riya", category: "B", purchases: [1000], active: false },
    { name: "Sam", category: "B", purchases: [600], active: true },
    { name: "Neha", category: "A", purchases: [700, 100], active: true },
  ]),
);
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   18:07 
// ❯ node stage-7.js
// { A: 'Neha', B: 'Sam' }
