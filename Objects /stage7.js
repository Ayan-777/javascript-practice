// (Q1)
// 🎯 Problem
// 🎯 Output
// [1, 3, 5]
// 🧠 Meaning
// 👉 Return numbers that appear ONLY ONCE
// ⚠️ Rules
// Use object OR reduce
// No .filter() shortcut logic

// let arr = [1, 2, 2, 3, 4, 4, 5];

// let freq = arr.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc
// },{});

// let result = []

// for(let key in freq){
//     if(freq[key] === 1){
//         result.push(Number(key))
//     }
// }

// console.log(result);


// 🧠 Stage 7 — Question 2
// 🔥 Problem: Find First Non-Repeating Element
// 👉 Output:
// 1
// 📌 Rules
// Return the first element that appears only once
// If none → return -1
// ❌ Don’t use .indexOf() trick
// ❌ Don’t use .filter()
// ✅ Prefer clean logic (interview style)


// let arr = [4, 5, 1, 2, 0, 4, 5, 2];

// if(arr.length === 0)return -1
// let appear = arr.reduce((acc,curr) => {
//    acc[curr] = (acc[curr] || 0) + 1;
//   return acc
// },{});

// let result = -1

// for(let num of arr){
//     if(appear[num] === 1){
//         result = num
//         break;
//     }
// }

// console.log(result)
// ░▒▓   …/my-all-coding-main/Objects    main ?   v22.22.0   23:41  
// ❯ node stage7.js 
// 1




// 🧠 Stage 7 — Question 3
// 🔥 Problem: First Repeating Element
// 👉 Output:
// 3
// 📌 Rules
// Return the first element that repeats
// If none → return -1
// ❌ No .indexOf() tricks
// ❌ No .filter()
// ✅ Clean logic (interview style)
// 🧠 Twist (important)

// 👉 Not “most frequent”
// 👉 Not “any repeating”

// 👉 FIRST repeating based on order

let arr = [10, 5, 3, 4, 3, 5, 6];

if(arr.length === 0) return 0;

let seen = new Set();

let result = -1

for(let num of arr){
    if(seen.has(num)){
        result = num
        break
    }
    seen.add(num)
}
console.log(result)