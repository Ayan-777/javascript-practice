// 🚀 LEVEL 7 — Q4 (Private Bank System)
// 🎯 Goal
// Build a secure bank account using closures
// 🧠 Problem
// Create:
// createBankAccount(initialBalance)
// 📜 Expected History Format
// [
//   "Deposited: 50",
//   "Withdrawn: 30",
//   "Failed Withdrawal: 200"
// ]
// ❗ Rules
// ❌ No global variables
// ❌ balance must be private
// ❌ history must be private
// ❌ No direct access like acc.balance

function createBankAccount(initialBalance) {
  let balance = initialBalance;
  let history = [];
  let obj = {};

  obj.deposit = function (amount) {
    balance += amount;
    history.push(`Deposited: ${amount}`);
    return balance;
  };

  obj.withdraw = function (amount) {
    if (amount > balance) {
      history.push(`Failed Withdrawal: ${amount}`);
      return "Insufficient funds";
    } else {
      balance -= amount;
      history.push(`Withdraw: ${amount}`);
      return balance;
    }
  };

  obj.getBalance = function () {
    return balance;
  };

  obj.getHistory = function () {
    return history;
  };

  return obj;
}
let acc = createBankAccount(100);

console.log(acc.getBalance());

acc.deposit(50);
console.log(acc.getBalance());

acc.withdraw(30);
console.log(acc.getBalance());

console.log(acc.withdraw(200));

console.log(acc.getHistory());

// ▓   …/my-all-coding-main/level-7/closure    main ?   v22.22.0   00:20 
// ❯ node problem-4.js
// 100
// 150
// 120
// Insufficient funds
// [ 'Deposited: 50', 'Withdraw: 30', 'Failed Withdrawal: 200' ]
