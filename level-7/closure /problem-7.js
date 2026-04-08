// 🚀 LEVEL 7 — Q7 (Private Expense Tracker)
// 🎯 Goal
// Build an expense tracker using closures
// 🧠 Problem
// Create:
// createExpenseTracker()
// 📌 It should return:
// addExpense(title, amount)
// removeExpense(title)
// getTotalExpense()
// getAllExpenses()
// ❗ Rules
// ❌ No global variables
// ❌ Data must be private
// ❌ Remove only FIRST matching expense
// ⚡ Behavior Rules
// ✔ addExpense → push {title, amount}
// ✔ removeExpense → remove first match
// ✔ getTotalExpense → sum of all amounts
// ✔ getAllExpenses → return all data


function createExpenseTracker(){
    let items = [];

    return {
        addExpense(title,amount){
            items.push({title : title , amount: amount})
            return items
        },

        removeExpense(title){
            let index = items.findIndex((obj) => obj.title === title);
            if(index !== -1){
                items.splice(index, 1)
            }
            return items
        },

        getTotalExpense(){
            return items.reduce((a,b) => a + b.amount ,0)
        },

        getAllExpenses(){
            return items
        }
    }
}


let tracker = createExpenseTracker();

tracker.addExpense("Food", 200);
tracker.addExpense("Travel", 500);
tracker.addExpense("Food", 100);

console.log(tracker.getAllExpenses());

console.log(tracker.getTotalExpense()); // 800

tracker.removeExpense("Food");

console.log(tracker.getAllExpenses());

// ▒▓   …/my-all-coding-main/level-7/closure    main ?   v22.22.0   22:52  
// ❯ node problem-7.js 
// [
//   { title: 'Food', amount: 200 },
//   { title: 'Travel', amount: 500 },
//   { title: 'Food', amount: 100 }
// ]
// 800
// [ { title: 'Travel', amount: 500 }, { title: 'Food', amount: 100 } ]
