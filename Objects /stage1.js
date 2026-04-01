// 🔥 Q1 — Access Value
// 👉 Print "Ayan" using:
// dot notation
// bracket notation

// let user = { name: "Ayan", age: 19 };

// console.log(user.name)
// console.log(user['name'])
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   17:57  
// ❯ node stage1.js 
// Ayan
// Ayan


// 🔥 Q2 — Dynamic Access
// 👉 Print value using variable key
// let user = { name: "Ayan" };
// let key = "name";

// console.log(user[key])
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   18:06  
// ❯ node stage1.js 
// Ayan

// 🔥 Q3 — Add Property
// add:

// let car = { brand: "Tesla" };

// car.price = 50000
// car.isElectric = true

// console.log(car)
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   18:06  
// ❯ node stage1.js 
// { brand: 'Tesla', price: 50000, isElectric: true }

// 🔥 Q4 — Update Property
// 👉 Change age to 25

// let user = { age: 19 };
// user.age = 25

// console.log(user)
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   18:07  
// ❯ node stage1.js 
// { age: 25 }

// 🔥 Q5 — Delete Property
// 👉 Delete age

// let user = { name: "Ayan", age: 19 };
// delete user.age

// console.log(user)

// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   18:09  
// ❯ node stage1.js 
// { name: 'Ayan' }


// 🔥 Q6 — Trick Question
// let user = { name: "Ayan" };

// let key = "name";

// console.log(user.key);
// console.log(user[key]);

// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   20:31  
// ❯ node stage1.js 
// undefined
// Ayan


// console.log(user.key); this one give us undefined because i think we alreadly define the key = name so if we after define we can't just access writng user.name we have to change the access like user[key]
