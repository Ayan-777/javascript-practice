// Q8 (Private Login System — FINAL BOSS)
// 🎯 Goal

// Build a secure login system using closures

// 🧠 Problem

// Create:

// createLoginSystem(password)
// 📌 It should return:
// login(inputPassword)
// resetPassword(newPassword)
// getAttempts()
// ⚡ Rules
// ✔ Correct password → "Login successful"
// ✔ Wrong password → "Wrong password"
// ✔ Max 3 wrong attempts → "Account locked"
// ✔ After lock → no login allowed
// ✔ resetPassword works ONLY if not locked
// ❗ Conditions
// ❌ No global variables
// ❌ Everything must be private
// ❌ Track attempts internally

function createLoginSystem(password) {
  let attempts = 0;
  let locked = false;
  return {
    login(text) {
      if (locked) return "Account locked";
      if (password === text) {
        attempts = 0
        return "Login successful";
      } else{
        attempts++;
        if (attempts >= 3) {
          locked = true;
          return "Account locked";
        }
        return "Worng Password";
      }
    },

    resetPassword(newPassword) {
      if (locked) {
        return "Account locked";
      } else {
        password = newPassword;
        return "Password updated";
      }
    },

    getAttempts() {
      return attempts;
    },
  };
}

let user = createLoginSystem("1234");
// let user = createLoginSystem("1234");

console.log(user.login("1111")); // Wrong password
console.log(user.login("2222")); // Wrong password
console.log(user.getAttempts()); // 2

console.log(user.login("3333")); // Wrong password
console.log(user.login("1234")); // Account locked ❌

user.resetPassword("abcd"); // should NOT work

console.log(user.getAttempts()); // 3
