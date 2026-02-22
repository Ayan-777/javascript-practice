//      🟢 Arrays (5 Questions)

// >>>>>>>>>> Create an array of 5 numbers and print it.

// let arry = [2, 5, 8, 4, 5];
// console.log(arry);

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script2.js 
// [ 2, 5, 8, 4, 5 ]

// >>>>>>>>>>>>>>  Add a new number at the end of the array.
// let arry = [2, 5, 8, 4, 5];
// arry.push(2)
// console.log(arry)

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script2.js 
// [ 2, 5, 8, 4, 5, 2 ]

// >>>>>>>>>>>>>>  Remove the first number from the array.
//  let arry = [2, 5, 8, 4, 5];
// arry.shift();
// console.log(arry)

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script2.js 
// [ 5, 8, 4, 5 ]

// >>>>>>>>>>>>>>  Find the length of the array.
// let arry = [2, 5, 8, 4, 5];
// console.log(arry.length)

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script2.js 
// 5

// >>>>>>>>>>>>>>  Loop fthrough the array and print each number.
// let arry = [2, 5, 8, 4, 5];

// for (let i = 0; i < arry.length; i++){
//     console.log(arry[i])
// }

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node script2.js 
// 2
// 5
// 8
// 4
// 5

//                    🟢 DOM (5 Questions)


// Select a <p> element and change its text to "Hello World".

// let p = document.querySelector("p");
// p.textContent = "Hello World";

// // Select a <div> with id box and change its background color.

// let box = document.querySelector("#box")
// box.style.backgroundColor = "lightblue"  


// // Add a new <li> to an existing list in HTML.

// let ul = document.querySelector("ul");
// let newli = document.createElement("li");

// newli.textContent = "exsting list"

// ul.appendChild(newli)

// // Get the value from an input field and print it using console.log().
// let input = document.querySelector("input");

// input.addEventListener("input", function(e){
//     console.log(e.data)
// })

// // Change the text of a button when it is clicked.
// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     btn.textContent = "Hello world"
// })


//           🟢 Events (5 Questions)
// >>>>>>>>>> Make a button that shows an alert when clicked.
// let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     alert("why you click me")

// })

// // >>>>>>>>>> Change the color of a <div> when the mouse moves over it.

// let box = document.querySelector("div");
// box.addEventListener("mouseover", function(e){
//     box.style.backgroundColor = "green"

// })

// // >>>>>>>>>> Print a message in console when any key is pressed.

// // let input = document.querySelector("input");

// // input.addEventListener("keydown", function(evt){
// //     console.log("The key was :",evt.key)
// // })

// // >>>>>>>>>> Prevent a form from submitting when a button is clicked.

// let form = document.querySelector("form");

// form.addEventListener("submit", function(data){
//     data.preventDefault();
// })

// // >>>>>>>>>> Make sure an email input contains @ symbol before submitting the form.


//                 🟢 Forms & Validation (5 Questions)

// >>>>>>>>>>>>> Check if an input field is empty when a button is clicked.

//  let input = document.querySelector("nameInput");
//   let button = document.querySelector("checkBtn");

//   button.addEventListener("click", function() {
//     if (input.value.trim() === "") {
//       console.log("Input is empty");
//     } else {
//       console.log("Input has value:", input.value);
//     }
//   });

// >>>>>>>>>>>>> Check if a number entered is greater than 10.
// let input = document.querySelector("#inputnum");

// input.addEventListener("input", function() {
//     if (Number(input.value) > 10) {
//         console.log("Your number is greater than 10");
//     } else {
//         console.log("Your number is less than or equal to 10");
//     }
// });


// // >>>>>>>>>>>>> Make a password input and check if it has at least 6 characters.
// let password = document.querySelector("#passwordint");

// let button = document.querySelector("#checkPassword")

// button.addEventListener("click", function(){
//     if(password.value.length >= 6){
//         console.log("password is valid");
//     }else(
//         console.log("Password should be greter then 6 numbers")
//     )
// })

// >>>>>>>>>>>>> // Print the value of name and email input fields when form is submitted.
// let form = document.querySelector("form");
// let name = document.querySelector("#name")
// let email = document.querySelector("#email")

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     console.log("Name:", name.value);
//     console.log("Email:", email.value);
// });

// Name: Ayan
// script2.js:170 Email: mondalayan091@gmail.com

// >>>>>>>>>>>>> Make sure an email input contains @ symbol before submitting the form.

// let email = document.querySelector("#email");
//  let form = document.querySelector("form");

//  form.addEventListener("submit", function(data){
//     data.preventDefault();
//     if (!email.value.includes("@")){
//         alert("Please include @ in your email")
//     }else{
//         console.log("email is valid")
//     }
//  })



//             🟢 LocalStorage, SessionStorage, Cookies (5 Questions)



//  >>>>>>>>>>>>>>>>>>> Save your name in localStorage and show it in console.

// localStorage.setItem("Name", "Ayan");

// let name = localStorage.getItem("Name");
// console.log(name)
// script2.js:201 Ayan

//  >>>>>>>>>>>>>>>>>>> Save your age in sessionStorage and show it in console.

// sessionStorage.setItem("age", 19);
// let Age = sessionStorage.getItem("age");
// console.log(Age)
// script2.js:208 19


//  >>>>>>>>>>>>>>>>>>> Delete a key from localStorage.

// localStorage.removeItem("Name");
// localStorage
// Storage {tasks: '[{"imageUrl":"https://i.pinimg.com/736x/ef/28/8d/e… out side","homeTown":"Uk","selected":"no-rush"}]', length: 1}

//  >>>>>>>>>>>>>>>>>>> Check if a key exists in sessionStorage.

// if(sessionStorage.getItem("age" !== "")){
//     console.log("Your key not exists in sessionStorage")
// }else(
//     console.log("Your key is exists in sessionStorage")
// )
// script2.js:223 Your key is exists in sessionStorage

//  >>>>>>>>>>>>>>>>>>> Set a cookie named user with value Ayan and show it in console.
// document.cookie = "name = Ayan";
// console.log(document.cookie)

// name; name=Ayan