// 1. once(fn) - run only one time
// function once(fn) {
//   let count = 0;

//   return function(arg){
//     if(count < 1){
//         count++
//         return fn(arg)
//     }
//   }
// }

// let T = once((msg) => console.log(msg));

// T('Hi');
// T('hi')
// ░▒▓   …/my-all-coding-main/level-7/closure    main !?   v22.22.0   23:27  
// ❯ node new.js 
// Hi

// 2. limit(fn, n) - run max N times
// function limit(fn, n) {
//   let count = 0;

//   return function(f){
//     if(count < n){
//         count++;
//         return fn(f)
//     }
//   }
// }

// let T = limit((m) => console.log(m),2);

// T('one');
// T('two');
// T('three');
// ░▒▓   …/my-all-coding-main/level-7/closure    main !?   v22.22.0   23:27  
// ❯ node new.js 
// one
// two


// 3. toggle(...values) - cycle through values
// function toggle(...values) {
//     let ind = 0;

//     return function(){
//         let curr = values[ind % values.length];
//         ind++
//         return curr
//     }
// }

// let T = toggle('On', 'Off');
// console.log(T())
// console.log(T())
// console.log(T())
// console.log(T())
// ░▒▓   …/my-all-coding-main/level-7/closure    main !?   v22.22.0   23:30  
// ❯ node new.js 
// On
// Off
// On
// Off