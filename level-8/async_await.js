// What is async/await?
// JavaScript runs code line by line. But some tasks take time — like fetching data from a server. You don't want to freeze the whole program waiting.
// async/await lets you wait for slow tasks without freezing everything.
// Simple example — without fetch, just to understand the concept:
// javascript

// function wait(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function run() {
//   console.log("start");
//   await wait(2000); // wait 2 seconds
//   console.log("end");
// }

// run();

async function userdate() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();

    console.log(data.name);
     console.log(data.email);
  } catch (error) {
    console.log(`Error :${error}`);
  }
}

userdate()