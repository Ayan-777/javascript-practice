// const combineLists = (essentialItems, treatItems) => [...treatItems, ...essentialItems];


// let result = combineLists(["Milk", "Eggs"], ["Chocolate", "Ice Cream"])
// console.log(result)

// Write a function onlyEvens(arr) that takes an array of numbers and returns a new array with only the even numbers.

// const  onlyEvens = (arr) => {
//     let result = [];
//     for( let i = 0; i < arr.length ; i++){
//         if(arr[i]% 2 === 0){
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

// let aa = onlyEvens([1,2,3,4,5,6,7,8])
// console.log("Your even Numbers Array: ",aa)



// Write a function called createSquare(size, char) that returns a string representing a square. But here is the catch: it’s hollow!

// const createSquare = (size, char) => {
//     let result = "";

//     for(let i = 1; i <= size; i++){
//         if (i === 1 || i === size){
//             result = result + char.repeat(size) + "\n"
//         }else{
//             let middleSpaces = " ".repeat(size -2)
//             result += char + middleSpaces + char + "\n";
//         }
//     }
//     return result
// }

// let patt = createSquare(5, "*")
// console.log("your pattan might look like this" + "\n"+ patt)




// function titleCase (str) {
//   const result = []
//   const words = str.toLowerCase().split(" ");

//   for(let word of words){
//     result.push(word.charAt(0).toUpperCase()+ word.slice(1))
//   }

//   return result.join(" ")
// }
// let test = titleCase("i love javascript");
// console.log(test)

// function shuffleWord(word) {
//     let result = [];
//     let reversed = word.toLowerCase().split("").reverse().join("")

//     result.push(reversed.charAt(0).toUpperCase()+ reversed.slice(1))
//     return result
// }

// let test = shuffleWord("javAscript");
// console.log(test)


// Write a function called encryptWord(word) that takes a word and replaces specific letters with symbols.

// const encryptWord = (word) => {

//     let secret = ""


//     for (let letter of word.toLowerCase()){
//         if (letter === "a") {
//             secret += "4"; 
//         } else if (letter === "e") {
//             secret += "3";
//         } else if (letter === "i") {
//             secret += "1";
//         } else {
//             secret += letter;
//         }
//     }
//     return secret

// }

// let test1 = encryptWord("Apple")
// console.log(test1)


// Implement a Falsy Remover

// function bouncer(arr) {
//     let result = [];
//     for (let item of arr) {
//         if (item ) {
//             result.push(item)
//         }
//     }
//     return result
// }

// let test1 = bouncer([7, "ate", "", false, 9]);
// console.log(test1)
// ;



// // Implement a Unique Sorted Union
// function uniteUnique(...allArrays) {
//     let finalResult = [];
//     for (const arry of allArrays) {
       
//         for (const number of arry) {
//             if (!finalResult.includes(number)){
//                 finalResult.push(number)
//             }
//         }
//     }

//     return finalResult;
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))



// function generatePassword (genra) {
//   let result = "";
//   let randstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
 
//   for(let i = 0; i < genra; i++){
//     let randomind = Math.floor(Math.random() * randstr.length);
//     let char = randstr[randomind];
//     result += char
//   } 
//   return result
// }

// console.log(generatePassword(10))


// function sumAll(arry){
//   let result = 0;
//   let start = Math.max(...arry)
//   let end = Math.min(...arry)
  
//   for(let i = end; i <= start; i++){
//     result += i
//   }
//   return result
// }

// console.log(sumAll([1, 4]))





// Implement a DNA Pair Generator


// function pairElement (str){
//   let result = [];

//   for(let char of str){
//     let patner = "";

//     if(char === "A"){
//       patner = "T"
//     }else if(char === "T"){
//       patner = "A"
//     }else if(char === "C"){
//       patner = "G"
//     }else if(char === "G"){
//       patner = "C"
//     }
//     result.push([char, patner])
//   }
//   return result
// }

// console.log(pairElement("ATCGA"))



// console.log("hallo".slice(2))



// Object.prototype.toJadenCase = function () {

//     let line = this
//     let words = line.split(" ")

//     words = words.map(word => {
//         return word[0].toUpperCase() + word.slice(1)
//     })

//     return words.join(" ")
// }



// console.log("i love js".toJadenCase())
// console.log("because i love problems".toJadenCase())




