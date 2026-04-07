//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NESTED OBJECTS + LOOPING>>>>>>>>>>>>>>>>

// 🔥 Q1 — Nested Access
// 👉 Print "Durgapur"

// let user = {
//   name: "Ayan",
//   address: {
//     city: "Durgapur",
//     pin: 713201
//   }
// };

// console.log(user.address?.city)

// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   18:11 
// ❯ node stage2.js
// Durgapur

// 🔥 Q2 — Safe Access
// 👉 Try to access user.address.city safely (no error)

// let user = {
//   name: "Ayan"
// };

// console.log(user.address?.city)
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   18:11 
// ❯ node stage2.js
// undefined

// 🔥 Q3 — Loop Keys
// 👉 Print all keys only

// let user = { name: "Ayan", age: 19 };

// for(let key in user){
//     console.log(key)
// }
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   18:14 
// ❯ node stage2.js
// name
// age

// 🔥 Q4 — Loop Values
// 👉 Print all values only
// let book = {
//     title: 'I FEEL IN LOVE WITH HOPE',
//     author: 'LANCALI',
//     price: 339
// };

// for(let key in book){
//     console.log(book[key])
// }

// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   18:26 
// ❯ node stage2.js
// I FEEL IN LOVE WITH HOPE
// LANCALI
// 339

// 🔥 Q5 — Key + Value
// 👉 Print like:
// name Ayan
// age 19

// let user = { name: "Ayan", age: 19 };

// for(let key in user){
//     console.log(key, user[key])
// }
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   18:26 
// ❯ node stage2.js
// name Ayan
// age 19

// 🔥 Q6 — Count Properties (without Object.keys length)
// 👉 Count keys using loop

// let user = { name: "Ayan", age: 19 };

// let Count = 0;

// for(let key in user){
//   Count++
// }
//  console.log(Count)
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   22:41 
// ❯ node stage2.js
// 2

// 🔥 Q7 (Important)
// 👉 Print "true" (js skill)

// let user = {
//   name: "Ayan",
//   skills: {
//     js: true,
//     python: false
//   }
// };

// console.log(user.skills.js)

// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   22:48 
// ❯ node stage2.js
// true

// 🔥 Q8 — Deep Access (Tricky)
// 👉 Print "Durgapur"
// 👉 (No error if anything missing)

// let data = {
//   user: {
//     profile: {
//       name: "Ayan",
//       address: {
//         city: "Durgapur"
//       }
//     }
//   }
// };

// console.log(data.user.profile.address?.city);

// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   22:56 
// ❯ node stage2.js
// Durgapur

// 🔥 Q9 — Safe Nested Check
// 👉 Check if user.address.city exists
// 👉 If yes → print it
// 👉 If not → print "Not Found"

// let user = {
//   name: "Ayan"
// };

// console.log(user.address?.city ? user.address.city :'Not found')
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   23:15 
// ❯ node stage2.js
// Not found

// 🔥 Q10 — Loop Nested Object
// 👉 Print only skills where value = true
// 👉 Output:
// js
// java

// let user = {
//   name: "Ayan",
//   skills: {
//     js: true,
//     python: false,
//     java: true
//   }
// };

// for(let skill in user.skills){
//     if(user.skills[skill]){
//         console.log(skill)
//     }
// }

// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   23:08 
// ❯ node stage2.js
// js
// java

// 🔥 Q11 — Count Nested Keys
// 👉 Count ALL keys (including nested)
// 👉 Expected: 5

// let obj = {
//   a: 1,
//   b: { x: 10, y: 20 },
//   c: 3
// };

// let count  = 0

// for (let key in obj) {
//   count++;
//   if(typeof obj[key] === "object"){
//     for(let inner in obj[key]){
//         count++
//     }
//   }
// }

// console.log(count)
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   23:13 
// ❯ node stage2.js
// 6

// 🔥 Q12 — Flatten Object (Important)
// 👉 Convert into:
// {
//   name: "Ayan",
//   city: "Durgapur",
//   pin: 713201
// }

// let obj = {
//   name: "Ayan",
//   address: {
//     city: "Durgapur",
//     pin: 713201
//   }
// };
// let result = { ...obj }; // Start with a copy of the main object

// for (let key in result) {
//     if(typeof result[key] === 'object'){
//         Object.assign(result, result[key])
//         delete result[key]
//     }
// }
// console.log(result)
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   17:37 
// ❯ node stage2.js
// { name: 'Ayan', city: 'Durgapur', pin: 713201 }

// 🔥 Q12.2 — Multiple Nested Objects
// let obj = {
//   name: "Ayan",
//   address: {
//     city: "Durgapur"
//   },
//   contact: {
//     phone: 12345,
//     email: "ayan@mail.com"
//   }
// };

// let result = {...obj};

// for(let key in result){
//     if(typeof result[key] === 'object'){
//         Object.assign(result, result[key])
//         delete result[key]
//     }
// }

// console.log(result)

// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   17:55 
// ❯ node stage2.js
// {
//   name: 'Ayan',
//   city: 'Durgapur',
//   phone: 12345,
//   email: 'ayan@mail.com'
// }

// 🔥 Q12.3 — Mixed Data (Important)
// 👉 Flatten it (keep normal values + extract nested)
// let obj = {
//   name: "Ayan",
//   age: 19,
//   address: {
//     city: "Durgapur",
//     pin: 713201
//   }
// };

// let result = {...obj};

// for(let key in result){
//     if(typeof result[key] === 'object'){
//         Object.assign(result, result[key])
//         delete result[key]
//     }
// }

// console.log(result)

// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   17:55 
// ❯ node stage2.js
// { name: 'Ayan', age: 19, city: 'Durgapur', pin: 713201 }

// 🔥 Q12.4 — One Level Only Rule
// 👉 Flatten only one level
// let obj = {
//   a: 1,
//   b: {
//     x: 10,
//     y: {
//       z: 20
//     }
//   }
// };

// let result = {...obj};

// for(let key in result){
//     if(typeof result[key] === 'object'){
//         Object.assign(result, result[key])
//         delete result[key]
//     }
// }

// console.log(result)
// ▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   18:04 
// ❯ node stage2.js
// { a: 1, x: 10, y: { z: 20 } }

// 🔥 Q13 — Find Key by Value
// 👉 Find key where value = 20
// 👉 Output: "b"

// let obj = {
//   a: 10,
//   b: 20,
//   c: 30
// };

// for(let key in obj){
//     if(obj[key] === 20){
//         console.log(key)
//     }
// }
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   18:12 
// ❯ node stage2.js
// b

// 🔥 Q14 — Nested Sum
// 👉 Sum ALL values (including nested)
// 👉 Expected: 50

// let obj = {
//   a: 10,
//   b: {
//     x: 5,
//     y: 15,
//   },
//   c: 20,
// };

// let count = 0;
// for (let key in obj) {
//   if (typeof obj[key] === "number") {
//     count += obj[key];
//   }

//   if (typeof obj[key] === "object") {
//     for (let inner in obj[key]) {
//       count += obj[key][inner];
//     }
//   }
// }

// console.log(count);

// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   16:44 
// ❯ node stage2.js
// 50

// 🔥 Q14.2 — Nested Sum (Slightly Harder)
// 👉 Same idea… but a twist.
// 🎯 Goal
// 👉 Output:
// 40
// 👉 Because:
// 10 + 5 + 2 + 3 + 20 = 40
// ⚠️ Rule
// Your current code ❌ will NOT fully work
// Because now nesting is deeper than 1 level

// let obj = {
//   a: 10,
//   b: {
//     x: 5,
//     y: {
//       p: 2,
//       q: 3
//     }
//   },
//   c: 20
// };

// function gettotal(obj){
//   let total = 0;

//   for(let key in obj){
//     if(typeof obj[key] === 'number'){
//       total += obj[key]
//     }else if(typeof obj[key] === 'object' && obj[key] !== null){
//       total += gettotal(obj[key])
//     }
//   }
//   return total
// }

// console.log(gettotal(obj))

// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   17:14 
// ❯ node stage2.js
// 40

// 🔥 Q1 — Sum with Arrays + Objects (REAL WORLD)
// 🎯 Goal
// 👉 Output:
// 45
// 👉 Because:
// 10 + 1 + 2 + 5 + 20 + 3 + 4 = 45
// ⚠️ Twist
// 👉 Now data contains:
// object ✅
// array ✅

// let obj = {
//   a: 10,
//   b: [1, 2, { x: 5 }],
//   c: {
//     d: 20,
//     e: [3, 4],
//   },
// };

// function gettotal(obj) {
//   let total = 0;

//   for(let key in obj){
//     let value = obj[key]

//     if(typeof value === 'number'){
//       total += value
//     }else if(typeof value === 'object' && value !== null){
//       total += gettotal(value)
//     }
//   }
//   return total
// }

// console.log(gettotal(obj));
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   17:32  
// ❯ node stage2.js 
// 45


// 🔥 Q2 — Count All Numbers (Not Sum)
// 🎯 Goal
// 👉 Count ONLY numbers
// 5
// 👉 Numbers are:
// 10, 5, 1, 2, 20
// ⚠️ Twist
// 👉 Ignore:
// strings ❌
// anything else ❌

let obj = {
  a: 10,
  b: {
    x: 5,
    y: "hello",
    z: [1, 2, "test"]
  },
  c: 20
};


function getcounter(obj){
  let count = 0;

  for(let key in obj){
    let value = obj[key];

    if(typeof value === 'number'){
      count++
    }else if(typeof value === 'object' && value !== null){
      count += getcounter(value)
    }

  }

  return count
}

console.log(getcounter(obj))