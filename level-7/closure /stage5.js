// for (var i = 0; i < 3; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(j);
//     }, 1000);
//   })(i);
// }
//  Mon  4 May - 17:19  ~/coding/javascript-practice/javascript-practice/level-7/closure    origin ☊ main 1☀ 
//  @sonic  node stage5.js
// 0
// 1
// 2


// function makeTimer() {
//   let message = 'Hello';
//   let cap = message
//   setTimeout(function() {
//     console.log(cap);
//   }, 2000);
//   message = 'Goodbye';
// }

// makeTimer();
//  Mon  4 May - 17:34  ~/coding/javascript-practice/javascript-practice/level-7/closure    origin ☊ main 1☀ 
//  @sonic  node stage5.js
// Hello




// function setupButtons() {
//   let buttons = ['Home', 'About', 'Contact'];
  
//   buttons.forEach(function(button, index) {
//     setTimeout(function() {
//       console.log('Clicked: ' + button);
//     }, index * 1000);
//   });
// }

// setupButtons();

//  Mon  4 May - 19:36  ~/coding/javascript-practice/javascript-practice/level-7/closure    origin ☊ main 1☀ 
//  @sonic  node stage5.js 
// Clicked: Home
// Clicked: About
// Clicked: Contact






