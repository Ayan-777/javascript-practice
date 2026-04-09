// 🟣 Stage 4 — Memory + Reference

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