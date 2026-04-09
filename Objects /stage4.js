

// 🟣 Stage 4 — Memory + Reference (START)
// 🧠 Rule #1 (Golden Rule)

// 👉 Objects are stored in memory (heap)
// 👉 Variables store reference (address), not actual object
// 🔥 Step 1 — The Core Concept
// let a = { value: 10 };
// let b = a;
// 👉 What happens internally:
// Memory (Heap):
// { value: 10 }   ← stored somewhere
// Stack:
// a ──► address_1
// b ──► address_1
// 👉 BOTH point to SAME object
// 🔥 Step 2 — Mutation
// b.value = 20;
// 👉 You are NOT changing b
// 👉 You are changing the object in memory
// So:
// Memory:
// { value: 20 }
// ✅ Final Answer
// console.log(a.value);
// 👉 Output: 20
// 🧠 Why?
// 👉 Because:
// a and b point to SAME reference
// Changing one → affects both
// ❗ Important Line (Remember this forever)
// “Objects are shared by reference, not copied by default”


//❓ let a = { value: 10 };
// let b = a;
// b.value = 20;
// console.log(a.value);



//❓ let obj1 = { name: "Ayan" };
// let obj2 = obj1;
// obj2.name = { name: "Rahul" };
// console.log(obj1.name);



// ❓let a = { x: 1 };
// let b = a;
// b.x = 2;
// b = { x: 3 };
// console.log(a.x);



// let obj = {
//   a: 1,
//   b: { x: 10 }
// };

// let copy1 = { ...obj };
// let copy2 = copy1;

// copy1.b.x = 50;
// copy2.a = 100;

// console.log(obj);




let obj = { a: 1 };
let copy = { ...obj };

copy.a = 5;

console.log(obj.a);