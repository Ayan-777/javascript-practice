// Q1 — removeDuplicates
// Goal
// Return a new array with duplicate numbers removed.

// function removeDuplicates(arry){
//     return arry.filter((value,index,array)=> {
//         return array.indexOf(value) === index
//     })
// }

// // sortcart useing Set()

// function removeDuplicates(arry){
//     return[...new Set(arry)]
// }

// console.log(removeDuplicates([1,2,2,3,4,4,5]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   23:02 
// ❯ node stage-5.js
// [ 1, 2, 3, 4, 5 ]

// 🧠 Q2 — mostFrequentNumber
// Goal
// Return the number that appears the most times.

// function mostFrequentNumber(arr){
//     let counts = arr.reduce((acc,num) => {
//         acc[num] = (acc[num] || 0) +1
//         return acc
//     },{})

//     let max = 0;
//     let mostFrequent = null;

//     for(let num in counts){
//         if(counts[num] > max){
//             max = counts[num]
//             mostFrequent = num
//         }
//     }
//     return Number(mostFrequent)
// }

// console.log(mostFrequentNumber([1,2,2,3,3,3,4]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   23:14 
// ❯ node stage-5.js
// 3

// 🧠 Q3 — groupUsersByAge
// Goal
// Group users by their age.

// function groupUsersByAge(users){
//     return users.reduce((acc, cur) => {
//         if(!acc[cur.age]){
//             acc[cur.age] = []
//         }
//         acc[cur.age].push(cur.name)
//         return acc
//     },{})

// }

// console.log(groupUsersByAge([
//  {name:"Ayan", age:20},
//  {name:"Sara", age:20},
//  {name:"Rahul", age:25}
// ]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   23:33 
// ❯ node stage-5.js
// { '20': [ 'Ayan', 'Sara' ], '25': [ 'Rahul' ] }

// 🧠 Q1 — groupUsersByCity

// Goal: Group users by city.

// function groupUsersByCity(users) {
//   return users.reduce((acc, curr) => {
//     if (!acc[curr.city]) {
//       acc[curr.city] = [];
//     }

//     acc[curr.city].push(curr.name)
//     return acc;
//   }, {});
// }

// console.log(groupUsersByCity([
//   { name: "Ayan", city: "Kolkata" },
//   { name: "Sara", city: "Delhi" },
//   { name: "Rahul", city: "Kolkata" },
// ]));

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   00:23 
// ❯ node stage-5.js
// { Kolkata: [ 'Ayan', 'Rahul' ], Delhi: [ 'Sara' ] }

// 🧠 Q2 — groupProductsByCategory

// Goal: Group products by category.

// function groupProductsByCategory(products){
//     return products.reduce((acc, curr) => {
//         if(!acc[curr.category]){
//             acc[curr.category] = []
//         }

//         acc[curr.category].push(curr.name)
//         return acc
//     },{})
// }

// console.log(groupProductsByCategory([
//  {name:"Laptop", category:"Electronics"},
//  {name:"Shirt", category:"Clothing"},
//  {name:"Phone", category:"Electronics"}
// ]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   00:35 
// ❯ node stage-5.js
// { Electronics: [ 'Laptop', 'Phone' ], Clothing: [ 'Shirt' ] }

// 🧠 Q3 — groupNumbersEvenOdd

// Goal: Group numbers into even and odd.

// function groupNumbersEvenOdd(numbers){

//     return numbers.reduce((acc, num) => {
//         let key = num % 2 === 0 ? 'even' : 'odd';
//         if(!acc[key]){
//             acc[key] = []
//         }

//         acc[key].push(num)
//         return acc
//     },{})
// }

// console.log(groupNumbersEvenOdd([1,2,3,4,5,6]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   00:45 
// ❯ node stage-5.js
// { odd: [ 1, 3, 5 ], even: [ 2, 4, 6 ] }

// 🧠 Q4 — groupWordsByLength (harder)

// Goal: Group words by their length.

// function groupWordsByLength(words){
//     return words.reduce((acc, word) => {
//         let wordslength = word.length
//         if(!acc[wordslength]){
//             acc[wordslength] = []
//         }

//         acc[wordslength].push(word)
//         return acc
//     }, {})
// }

// console.log(groupWordsByLength(["cat","dog","tiger","lion"]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   00:51 
// ❯ node stage-5.js
// { '3': [ 'cat', 'dog' ], '4': [ 'lion' ], '5': [ 'tiger' ] }

// 🧠 Q4 — totalCartPrice
// Goal
// Calculate total price of cart items including quantity.

// function totalCartPrice(items) {
//     return items.reduce((acc, curr) => {
//         return acc + (curr.price * curr.quantity)
//     },0)
// }

// console.log(
//   totalCartPrice([
//     { name: "Pen", price: 10, quantity: 2 },
//     { name: "Book", price: 50, quantity: 1 },
//   ]),
// );
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   12:20 
// ❯ node stage-5.js
// 70

// 🧠 Q1 — averageProductPrice
// Goal
// Calculate the average price of all products.
// You must return one number.

// function averageProductPrice(products) {
//     if(products.length === 0) return 0;

//     let sum = products.reduce((acc, curr) => acc + curr.price, 0)
//     return sum/products.length
// }

// console.log(
//   averageProductPrice([
//     { name: "Pen", price: 10 },
//     { name: "Book", price: 50 },
//     { name: "Pencil", price: 20 },
//   ]),
// );


// 🧠 Q2 — expensiveProducts
// Goal
// Return only product names that cost more than 30.

// function expensiveProducts(products){
//     return products
//     .filter((x) => x.price > 30)
//     .map((x) => x.name)
// }

// console.log(expensiveProducts([
//  {name:"Pen", price:10},
//  {name:"Book", price:50},
//  {name:"Bag", price:80}
// ]))


// 🧠 Q1 — totalCartItems
// Goal:
// Return the total quantity of items in the cart.

// function totalCartItems(items){
//     return items.reduce((acc, curr) => acc + curr.quantity,0)
// }

// console.log(totalCartItems([
//  {name:"Pen", price:10, quantity:2},
//  {name:"Book", price:50, quantity:1},
//  {name:"Pencil", price:5, quantity:4}
// ]))
// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   12:58  
// ❯ node stage-5.js 
// 7



// 🧠 Q2 — totalInventoryValue
// Goal
// Calculate the total value of inventory in a store.
// Each product has price and stock.

// function totalInventoryValue(products){
//     return products.reduce((acc, curr) => {
//         return acc +(curr.price * curr.stock)
//     },0)
// }

// console.log(totalInventoryValue([
//  {name:"Laptop", price:50000, stock:2},
//  {name:"Phone", price:20000, stock:3},
//  {name:"Headphones", price:2000, stock:5}
// ]))

// ░▒▓   …/my-all-coding-main/Functional Data Manipulation   main ?   v22.22.0   13:07  
// ❯ node stage-5.js 
// 170000