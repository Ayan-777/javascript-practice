// Stage 4 — Pattern #10: memoize(fn)
// What it does:
// If you call a function with the same arguments twice, instead of running the function again, it returns the cached result from the first call.
// Why it matters:
// Some functions are expensive to run (complex calculations, API calls). Memoization saves time by caching results.
// Requirements:

// Takes a function fn as argument
// Returns a new function that caches results
// If the same argument is passed again, return the cached result instead of running fn again
// If it's a new argument, run fn and cache the result

// function memoize(fn){
//     let cache = {};
//     return function(arg){
//         if(arg in cache){
//             return cache[arg]
//         }else{
//             let result = fn(arg)
//             cache[arg] = result
//             return result
//         }
//     }
// }

// function slowSquare(n) {
//   console.log('calculating...');
//   return n * n;
// }

// let memoDouble = memoize(slowSquare);

// console.log(memoDouble(4));
// console.log(memoDouble(4));
// console.log(memoDouble(5));
// console.log(memoDouble(4));
// ❯ node stage4.js
// calculating...
// 16
// 16
// calculating...
// 25
// 16

// Same memoize function you wrote. New scenario:
// javascriptfunction slowDouble(n) {
//   console.log('doubling...');
//   return n * 2;
// }
// let memoDouble = memoize(slowDouble);
// You write the test cases. Call memoDouble with different arguments, including repeats.
// Predict what will print before you run it. Then run it and check if you were right.

// function memoize(fn){
//     let cache = {};

//     return function(arg){
//         if(arg in cache){
//             return cache[arg]
//         }else{
//             let result = fn(arg);
//             cache[arg] = result
//             return result
//         }
//     }
// }

// function slowDouble(n) {
//   console.log('doubling...');
//   return n * 2;
// }

// let memoDouble = memoize(slowDouble);

// console.log(memoDouble(4));
// console.log(memoDouble(4));
// console.log(memoDouble(5));
// console.log(memoDouble(4));
// console.log(memoDouble(5));
//   …/my-all-coding-main/level-7/closure    main !?   v22.22.0   11:44 
// ❯ node stage4.js
// doubling...
// 8
// 8
// doubling...
// 10
// 8
// 10

// #11: curry(fn)
// This one is harder.
// What it does:
// Instead of calling a function with all arguments at once, you call it one argument at a time.
// Example:
// javascriptfunction add(a, b, c) {
//   return a + b + c;
// }

// let curriedAdd = curry(add);

// curriedAdd(1)(2)(3);  // returns 6
// Think about it:

// curriedAdd(1) should return a function
// curriedAdd(1)(2) should return another function
// curriedAdd(1)(2)(3) should return the final result 6

// function curry(fn) {
//   return function curried(...args) {
//     if(args.length >= fn.length){
//         return fn(...args)
//     } else {
//         return function(...newarg){
//             return curried(...args, ...newarg)
//         }
//     }
//   }
// }

// function add(a, b, c) {
//   return a + b + c;
// }

// let curriedAdd = curry(add);
// console.log(curriedAdd(1)(2)(3));  // returns 6
// console.log(curriedAdd(1,5)(3))
// console.log(curriedAdd(1)(2,3))

// predict --
// 6
// 9
// 6
// ░▒▓   …/my-all-coding-main/level-7/closure    main !?   v22.22.0   14:42 
// ❯ node stage4.js
// 6
// 9
// 6

// function compose(f, g) {

//     return function(x){
//         return f(g(x))
//     }
// }

// const double = (x) => x * 2;
// const addTen = (x) => x + 10;

// const doubleThenAdd = compose(addTen, double);
// console.log(doubleThenAdd(5)); // double(5) = 10, addTen(10) = 20
// ░▒▓   …/my-all-coding-main/level-7/closure    main !   v22.22.0   20:26  
// ❯ node stage4.js 
// 20