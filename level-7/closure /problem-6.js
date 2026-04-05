// Q6 (Private Cart System)
// 🎯 Goal
// Build a shopping cart using closures
// 🧠 Problem
// Create:
// createCart()
// 📌 It should return:
// addItem(name, price)
// removeItem(name)
// getTotal()
// getItems()
// ❗ Rules
// ❌ No global variables
// ❌ Items must be private
// ❌ Remove only FIRST matching item
// ⚡ Behavior Rules
// ✔ addItem → pushes object {name, price}
// ✔ removeItem → removes first match only
// ✔ getTotal → sum of all prices
// ✔ getItems → return items

function createCart() {
  let items = [];

  return {
    addItem(item, price) {
      items.push({ item: item, price: price });
      return items;
    },

    removeItem(item) {
      let index = items.findIndex((obj) => obj.item === item);
      if (index !== -1) {
        items.splice(index, 1);
      }
      return items;
    },

    getTotal() {
      return items.reduce((a, b) => a + b.price, 0);
    },

    getItems() {
      return items;
    },
  };
}

let cart = createCart();

cart.addItem("Apple", 50);
cart.addItem("Banana", 30);
cart.addItem("Apple", 50);

console.log(cart.getItems());

console.log(cart.getTotal()); // 130

cart.removeItem("Apple");

console.log(cart.getItems());
