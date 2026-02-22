//  >>>>>>>>>>>>>>>>>>>> 🧪 Lab 1: Silent Counter >>>>>>>>>>>>

// Goal: Create a function countSilent(str)
// Rules:

// Count how many spaces are in the string
// Do not use .split(" ")

// Return the count as a number

// Example:
// countSilent("Hello World From JS") // 3


// const countSilent = (str) => {
//     let count =  0;

//     for(let i = 0; i <= str.length; i++){
//         if(str[i] === " "){
//         count++
//         }
//     }
//     return count

// }


// console.log(countSilent("Hello World From JS")) // 3






// >>>>>>>>>>>>>>>>> 🧪 Lab 2: Middle Finder

// Goal: Create a function getMiddle(word)
// Rules:
// If word length is odd, return the middle character
// If even, return the two middle characters
// Do not use any library functions that directly do this

// Example:
// getMiddle("testing") // "t"
// getMiddle("code")    // "od"




// function getMiddle(word){
//     let mid = Math.floor(word.length / 2)
//     if(word.length % 2 === 0){
//         return word[mid -1] + word[mid] 
//     }else{
//     return word[mid]
//     }


// }

// console.log(getMiddle("codet"))
// console.log(getMiddle("code"))



// 🧪 Question 2: Mirror Index
// Goal: Create a function mirrorChar(word, index)
// Rules:
// Given a word and an index
// Return the character from the mirror position
// Mirror index = word.length - 1 - index
// If index is invalid → return "Invalid"

// Example:
// mirrorChar("abcd", 0) // "d"
// mirrorChar("abcd", 1) // "c"
// mirrorChar("abcd", 4) // "Invalid"


// function mirrorChar(word, index){
//     let mirror = word.length - 1 - index;

//     if(!word[mirror]){
//         return "Invalid"
//     }else{
//         return word[mirror]
//     }

// }

// console.log(mirrorChar("abcd", 0)) // "d"
// console.log(mirrorChar("abcd", 1)) // "c"
// console.log(mirrorChar("abcd", 4)) // "Invalid"



// >>>>>>>>>>>>>>>>> 🧪 Question 1: Edge Grabber

// Goal: Create a function getEdges(word)
// Rules:
// If word length is odd → return first, middle, last characters combined
// If even → return first and last characters only
// No direct helper libraries
// Example:

// getEdges("testing") // "ttg"
// getEdges("code")    // "ce"


// function getEdges(word) {

//     let first = word[0];
//     let mid = Math.floor(word.length / 2)
//     let last = word[word.length -1]
//     if (word.length % 2 !== 0) {
//         return `${first}${word[mid]}${last}`
//     } else {
//         return `${first}${last}`
//     }
// }

// console.log(getEdges("testing"))
// console.log(getEdges("code"))




// >>>>>>>>>>>>>>>>> 🧪 Lab 3: Clean the Noise

// Goal: Create a function cleanString(str)
// Rules:
// Remove all numbers
// Keep letters and spaces
// Return the cleaned string

// Example:
// cleanString("he11o w0rld 2026") // "heo wrld "


// function cleanString(str) {
//     let result = ""

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i]
//         if (char >= "0" && char <= "9") {

//         } else {
//             result += char
//         }
//     }
//     return result

// }

// console.log(cleanString("he11o w0rld 2026"))
// console.log(cleanString("he11o w0rld hi"))




//>>>>>>>>>>>>>>>>>>>>>> 🧪 Lab 4: Secret Reverse

// Goal: Create a function secretReverse(str)

// Rules:
// Reverse each word
// Keep word order the same
// Words are separated by spaces

// Example:
// secretReverse("hello world") // "olleh dlrow"


// function secretReverse(str){
//     let result = []
//     let words = str.split(" ")
//     for(let i = 0; i < words.length ; i++){
//         result.push(words[i].split("").reverse().join(""))
//     }
//     return result.join(" ")

// }

// console.log(secretReverse("hello world"))



// >>>>>>>>>>>>>>>>>> 🧪 Today’s Practice Labs (Base Strength)
// 🔹 Lab 1: Space Trimmer
// Goal: Create a function trimSpaces(str)
// Rules:

// Remove spaces from start and end only
// Keep middle spaces
// Do not use .trim()

// Example:

// trimSpaces("   hello world   ") // "hello world"
// trimSpaces("  hi there")        // "hi there"




// function trimSpaces(str){

//     let start = 0;
//     let end = str.length -1

//     while(str[start] === " "){
//         start++
//     }
//     while(str[end] === " "){
//         end--
//     }

//     return str.slice(start, end +1)
// }

// console.log( trimSpaces("   hello world   "));



// >>>>>>>>>>>>>>>>>>>>> Lab 2: Letter Counter

// Goal: Create a function countLetter(str, ch)
// Rules:
// Count how many times ch appears in str
// Case-sensitive
// Use loop

// Example:

// countLetter("banana", "a") // 3
// countLetter("Hello", "l")  // 2

// function countLetter(str, char){
//     let count = 0;

//     let charx = char
//     for(let i = 0; i <= str.length ; i++){
//         if(str[i] === charx){
//             count++
//         }
//     }
//     return count
// }

// console.log(countLetter("Hello", "l"));
// console.log(countLetter("banana", "a"));



// 🔹 Lab 3: First Unique

// Goal: Create a function firstUnique(str)
// Rules:
// Return the first character that appears only once
// If none → return "None"

// Example:

// firstUnique("aabbcdd") // "c"
// firstUnique("aabb")    // "None"


// function firstUnique(str) {
    
//     for(let char of str){
//         let count = 0
    

//     for(let i of str){
//         if(i === char){
//             count ++
//         }
//     }

//     if(count === 1){
//         return char
//     }

// }
//     return "None"

// }
// console.log(firstUnique("aabbcdd"));
