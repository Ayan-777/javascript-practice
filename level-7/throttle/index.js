function throttle(fn, limit) {
  let timer;
  let isWaiting = false;
  return function (str) {
    if (isWaiting === false) {
      isWaiting = true;
      fn(str);
      timer = setTimeout(() => {
        isWaiting = false;
      }, limit);
    }
  };
}


let test = throttle(x => console.log(x),2000)

test('Hi')
test('Hii')
test('Hiii')
test('Hello')
setTimeout(() => {
  test('After 2 seconds');
}, 2100);

// sonic@fedora:~/coding/javascript-practice/javascript-practice/level-7/throttle$ node index.js 
// Hi
// After 2 seconds