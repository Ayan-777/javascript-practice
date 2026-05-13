// Mini Rate Limiter

function createRateLimiter(fn, limit, windowMs) {
  let count = 0;
  let timer;

  return function (str) {
    if (count === 0) {
      timer = setTimeout(() => {
        count = 0;
      }, windowMs);
    }

    if (count < limit) {
      count++;
      return fn(str);
    } else {
      console.log("Rate limit exceeded");
    }
  };
}


function apiCall(msg) {
  console.log("API called:", msg);
}

let limited = createRateLimiter(apiCall, 3, 2000);

limited("first"); // API called: first
limited("second"); // API called: second
limited("third"); // API called: third
limited("fourth"); // Rate limit exceeded
limited("fifth"); // Rate limit exceeded

// After 2 seconds...
setTimeout(() => {
  limited("sixth"); // API called: sixth
}, 2100);
