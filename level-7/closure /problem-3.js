// 🚀 LEVEL 7 — Q3 (Advanced Counter: Limit + Reset)
// 🎯 Goal
// Upgrade your counter with real control features
// 🧠 Problem
// Create:
// createSmartCounter(limit)
// ❗ Rules
// ❌ No global variables
// ❌ Cannot access count directly
// ✅ Must use closure
// 💡 Behavior Rules
// ✔ count starts at 0
// ✔ increment stops at limit
// ✔ decrement can go below (no limit)
// ✔ reset → back to 0

function createSmartCounter(limit) {
  let count = 0;
  let obj = {};

  obj.increment = function () {
    if (count === limit) {
      return "Limit reached";
    } else {
      count++;
      return count;
    }
  };

  obj.decrement = function () {
    count--;
    return count;
  };

  obj.getValue = function () {
    return count;
  };

  obj.reset = function () {
    count = 0;
    return count;
  };

  return obj;
}

let counter = createSmartCounter(3);

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3
console.log(counter.increment()); // ❌ "Limit reached"

console.log(counter.decrement()); // 2
console.log(counter.getValue()); // 2

counter.reset();
console.log(counter.getValue());
