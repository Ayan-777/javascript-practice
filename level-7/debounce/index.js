function debounce(fn, delay) {
  let timer;

  return function (str) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        return fn(str);
      }, delay);
    
  };
}
let search = debounce((query) => {
  console.log('Searching:', query);
}, 500);

search('j');
search('ja');
search('jav');
search('java');
search('javascript');
//  Fri 15 May - 22:55  ~/coding/javascript-practice/javascript-practice/level-7/debounce   origin ☊ main 1☀ 
//  @sonic  node index.js                   
// Searching: javascript