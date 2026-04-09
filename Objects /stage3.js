// Your Task (START)
// Solve this:
// 👉 Output:
// ["name:Ayan", "age:19"]
// ⚠️ Use:
// 👉 Object.entries() + .map()

// let user = { name: "Ayan", age: 19 };

// let result = Object.entries(user).map(([key, value]) => {
//     return key + ':' + value
// })

// console.log(result)
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   12:29 
// ❯ node stage3.js
// [ 'name:Ayan', 'age:19' ]

// 🚀 Next Level Question
// 🔥 Q2 — Filter Object
// 👉 Convert into:
// { age: 19 }
// ⚠️ Rules
// Keep only number values
// Use:
// Object.entries()
// .filter()
// Object.fromEntries()

// let user = {
//   name: "Ayan",
//   age: 19,
//   isAdmin: false
// };

// let result = Object.entries(user)
// .filter(([k,v]) => {
//     return typeof v === 'number'
// })

// console.log(Object.fromEntries(result))
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   12:47 
// ❯ node stage3.js
// { age: 19 }

// 🔥 Q3 — Transform Values (Important)
// 🎯 Goal
// 👉 Convert into:
// {
//   name: "AYAN",
//   city: "KOLKATA"
// }
// ⚠️ Rules
// Convert ALL values to uppercase
// Use:
// Object.entries()
// .map()
// Object.fromEntries()

// let user = {
//   name: "ayan",
//   city: "kolkata"
// };

// let result = Object.entries(user).map(([k,v]) =>[ k, v.toUpperCase()])

// console.log(Object.fromEntries(result))

// ❓ Q4 (don’t skip)
// 👉 Output:

// {
//   user_name: "Ayan",
//   user_age: 19
// }

// let user = {
//   name: "Ayan",
//   age: 19
// };

// let result = Object.entries(user)
// .map(([k,v]) => ['user_'+ k,v])

// console.log(Object.fromEntries(result))
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   13:02 
// ❯ node stage3.js
// { user_name: 'Ayan', user_age: 19 }

// 🔥 Q5 — Conditional Transform
// 🎯 Goal
// 👉 Output:
// {
//   name: "AYAN",
//   age: 19,
//   city: "KOLKATA"
// }
// ⚠️ Rules
// Only convert string values → uppercase
// Keep numbers unchanged
// Use:
// Object.entries()
// .map()
// Object.fromEntries()

// let user = {
//   name: "ayan",
//   age: 19,
//   city: "kolkata",
// };

// let result = Object.entries(user).map(([k,v]) => [ k, typeof v === 'string' ? v.toUpperCase() : v])

// console.log(Object.fromEntries(result))
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   13:19  
// ❯ node stage3.js 
// { name: 'AYAN', age: 19, city: 'KOLKATA' }



// 🔥 Q6 — Remove Falsy Values
// 🎯 Goal
// 👉 Output:
// {
//   name: "Ayan",
//   country: "India"
// }
// ⚠️ Rules
// Remove all falsy values
// 0, "", false, null, undefined, NaN
// Use:
// Object.entries()
// .filter()
// Object.fromEntries()

// let obj = {
//   name: "Ayan",
//   age: 0,
//   city: "",
//   isAdmin: false,
//   country: "India"
// };


// let result = Object.entries(obj)
// .filter(([k,v]) => {
//     return Boolean(v) 
// })
// console.log(Object.fromEntries(result))░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   13:31  
// ❯ node stage3.js 
// { name: 'Ayan', country: 'India' }