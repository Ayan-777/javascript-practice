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

// let arr = [10, 5, 3, 4, 3, 5, 6];

// if(arr.length === 0) return 0;

// let seen = new Set();

// let result = -1

// for(let num of arr){
//     if(seen.has(num)){
//         result = num
//         break
//     }
//     seen.add(num)
// }
// console.log(result)

// 🧠 Question 4 — Group Anagrams
// 🔥 Problem
// 👉 Output:

// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]
// 📌 What is Anagram?
// 👉 Words with same letters:

// "eat", "tea", "ate" ✔️
// "tan", "nat" ✔️
// 🎯 Goal

// 👉 Group words that are anagrams together

// ⚠️ Rules
// ❌ Don’t use nested loops (O(n²))
// ✅ Use smart logic (hashing idea)
// Order inside groups doesn’t matter

// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

// let result = arr.reduce((acc,word) => {
//     let key  = word.split('').sort().join('');

//     if(!acc[key]){
//         acc[key] = [];

//     }

//     acc[key].push(word)
//     return acc
// },{})

// console.log(result)

// ░▒▓   …/my-all-coding-main/Objects    main !   v22.22.0   11:07 
// ❯ node stage7.js
// { aet: [ 'eat', 'tea', 'ate' ], ant: [ 'tan', 'nat' ], abt: [ 'bat' ] }

// 🧠 Question 5 — Group Words by Pattern
// 🔥 Problem
// 👉 Output:
// [
//   ["abc", "bcd", "xyz"],
//   ["acef"],
//   ["az", "ba"],
//   ["a", "z"]
// ]
// 📌 What is the pattern?
// 👉 Words belong to same group if:
// Each letter shifts by same amount
// 🎯 Goal
// 👉 Group words with same shifting pattern
// ⚠️ Rules
// ❌ No nested loops
// ✅ Use hashing (like anagram problem)
// ⚠️ Handle circular shift (z → a)

// let arr = ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"];

// let finaloutput = arr.reduce((acc,word) => {
//     let pattern = [];

//     for(let i = 0; i < word.length; i++){
//         let diff = word.charCodeAt[i] - word.charCodeAt[i - 1];

//         if(diff < 0) diff += 26

//         pattern.push(diff)
//     }

//     let key = pattern.join(',');

//     if(!acc[key]){
//         acc[key] = []
//     }

//     acc[key].push(word)
//     return acc
// },{})

// console.log(Object.values(finaloutput))
// ░▒▓   …/my-all-coding-main/Objects    main !   v22.22.0   13:29 
// ❯ node stage7.js
// [ [ 'abc', 'bcd', 'xyz' ], [ 'acef' ], [ 'az', 'ba' ], [ 'a', 'z' ] ]

// 🧠 ⚔️ Stage 7 — Final Set
// 🔥 Q1 — Longest Substring Without Repeating Characters
// let str = "abcabcbb";
// 👉 Output:
// 3
// 👉 Explanation:
// "abc" → length 3 ✔️
// After that repeats start
// 📌 Rules
// Return length only
// ❌ No brute force
// ✅ Use smart logic (hint: sliding window)
function LongestSubstring(str) {
  let map = new Map();
  let result = 0;
  let left = 0;

  for(let right = 0; right < str.length; right++){
    while(map.has(str[right])){
      map.delete(str[left])
        left++
    }
    
    result = Math.max(result, right - left +1)
    map.set(str[right])
  }
  return result
}

console.log(LongestSubstring("abcabcbb"));
// ░▒▓   …/my-all-coding-main/Objects    main !   v22.22.0   14:12  
// ❯ node stage7.js 
// 3

