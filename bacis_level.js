// Test 1: Space Counter
// Input: "I am learning JS"
// Output: 3

// function countSpaces(str) {
//     let count = 0
//     for(let i = 0; i <= str.length; i++){
//         if(str[i] === " "){
//              count++
//         }
//     }
//     return count
// }

// console.log(countSpaces("I am Learning JS"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// 3


// Test 2: Character Finder
// Input: ("hello", "e")
// Output: true
// If not found → false

// function hasChar(str, ch) {


//     for(let i = 0; i <= str.length; i++){
//         if(str[i] === ch){
//             return true
//         }
//     }
//     return false

// }

// console.log(hasChar("hello", "h"))

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// true



// // 🔹 Test 3: String Builder
// // Input: "abc"
// // Output: "a-b-c"

// function dashJoin(str) {
//     let srt = str.split("").join("-")
//     return srt
// }


// console.log(dashJoin("abc"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// a-b-c




// 🔹 Test 4: Index Thinking (IMPORTANT)
//  Input: ("abcd", 2)
//  Output: "c"

// function charAtIndex(str, index) {
//      write code
//      If index invalid → "Invalid"
// }

// function charAtIndex(str, index) {


//     for(let i = 0; i <= str.length; i++){
//         if(str[i] === index){
//             return str[i]
//         }
//     }
//     return "Invalid"
// }

// console.log(charAtIndex(("abcd", 2)))





// Test 5: Reverse Logic (No split/reverse)
// Input: "dog"
// Output: "god"

// function reverseString(str) {
//     let fristin = str.length[0];
//     let last = str.length -1
//     let mid = Math.floor(str.length / 2)

//     return `${fristin}${str[mid]}${last}`
// }
// console.log(reverseString("dog"))




// function countVowels (str){
//     let count = 0;
//     let vowels = ["a","e","i","o","u"];

//     for(let char of str){
//         if(vowels.includes(char)){
//             count++
//         }
//     }

//     return count


// }

// console.log(countVowels("education"));


// function removeSpaces(str){
//     let result = ""


//     for(let i = 0; i < str.length ; i++){
//         if (str[i] !== " ") {
//             result += str[i]
//         }
//     }
//     return result
// }

// console.log(removeSpaces("I am learning"));



// Return last character

// function lastChar(str){

//     last = str[str.length -1];
//     return last
// }
// console.log(lastChar("hello")) // "o"









// 🔁 Part 1: Re-type (not copy-paste)

// Re-write these from memory:
// countSpaces
// removeSpaces
// lastChar

// countSpaces
// function countSpaces(str){

//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === " "){
//             count++
//         }
//     }
//     return count
// }

// console.log(countSpaces("I love js "))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// 3



// removeSpaces

// function removeSpaces(str){
//     let result = "";

//     for(let i = 0; i < str.length; i++){
//         if(str[i] !== " "){
//             result += str[i]
//         }
//     }

//     return result
// }
// console.log(removeSpaces("I love js "))

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// Ilovejs



// lastChar

// function lastChar(str){
//     let lastch = str[str.length - 1]
//     return lastch
// }

// console.log(lastChar("I love javascript"))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// t



// Option A
// // Count how many times "a" appears
// countA("banana") // 3

// function countA(str){
//     let count = 0;

//     for(let i = 0; i <= str.length; i++){
//         if(str[i] === "a"){
//             count++
//         }
//     }
//     return count
// }
// console.log(countA("banana"))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// 3



// Option B
// // Return first character
// firstChar("hello") // "h"

// function firstChar(str){
//     let first = str[0]
//     return `${first}`
// }

// console.log(firstChar("hello"));




// Step 2️⃣ Tiny New Concept (VERY small)

// After countA, we introduce string comparison logic with this:

// // Check if string starts with a vowel
// startsWithVowel("apple") // true
// startsWithVowel("banana") // false


// function startsWithVowel(str){
//     let vowel = ["a", "e", "i", "o", "u"];

//     return vowel.includes(str.charAt(0).toLowerCase())


// }

// console.log(startsWithVowel("apple"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// true














// >>>>>>>>>lastChar
// function lastChar(str){
//     return str[str.length -1]
// }
// console.log(lastChar("i love javascript"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// t


//>>>>>>>>>> countA

// function countA(str){
//     let count = 0;
//     for(let i = 0; i <= str.length; i++){
//         if(str[i] === "a"){
//             count++
//         }
//     }
//     return count
// }
// console.log(countA("i aa love javascript"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// 4


// >>>>>>>>>>>>>> startsWithVowel



// function startsWithVowel(str){
//     let vowel = ['a','e','i','o','u'];

//     return vowel.includes(str.charAt(0).toLowerCase())
// }

//  console.log(startsWithVowel("I aa love javascript"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// true




// countConsonants("education") // 4

// function countConsonants(str){
//     let vowel = ['a','e','i','o','u'];
//     let count = 0;

//     for(let char of str.toLowerCase()){
//         if(!vowel.includes(char)){
//             count++
//         }
//     }
//     return count
// }


// console.log(countConsonants("eDucation"));
// // ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// // 4


// function countConsonants(str){
//    let vowel = ['a','e','i','o','u'];
//     let count = 0;

//     for(let char of str.toLowerCase()){
//         if(char > "a" && char <= "z"){
//             if(!vowel.includes(char)){
//                 count++
//             }

//         }
//     }
//     return count

// }

// console.log(countConsonants("I love JS 123!"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// 4



// 🟦 Option 1️⃣ (Unlocked NOW)
// countVowels(str)
// countVowels("I love JS 123!") // 3
// // i, o, e

// function countVowels(str){
//     let vowel = ['a','e','i','o','u'];
//     let count = 0;

//     for(let char of str.toLowerCase()){
//         if(vowel.includes(char)){
//             count++
//         }
//     }
//     return count
// }

// console.log(countVowels("I love JS 123!"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// 3



// function countWords(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++){
//         if(str[i] !== " " && (i === 0 || str[i - 1] === " ")){
//             count++
//         }
//     }
//     return count
// }

//     console.log(countWords("I love JavaScript"));
//     console.log(countWords(""));
//     console.log(countWords("I love JS"));



// >>>>>>>>>>> Problem: reverseString(str)

// function reverseString(str){
//     let result  = "";

//     for (let i = str.length -1 ; i >= 0; i--) {
//         result += str[i]
//     }
//     return result
// }

// function reverseString(str){

//     return str.split("").reverse().join("")
// }

// console.log(reverseString("I love js"));







// >>>>>>>>>> reverseString

// function reverseString(str){
//     let result = "";

//     for(let i = str.length -1; i >= 0; i--){
//         result += str[i]
//     }
//     return result
// }

// console.log(reverseString("i love js"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// sj evol i

// >>>>>>>>>>>>>>> countVowels

// function countVowels(str){
//     let count = 0;
//     let vowels = ['a','e','i','o','u'];

//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             count++
//         }
//     }
//     return count
// }

// console.log(countVowels("I love JS"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// 3

// countConsonants

// function countConsonants(str){
//     let vowel = ['a','e','i','o','u'];
//     let count = 0;

//     for(let char of str.toLowerCase()){
//         if (char >= "a" && char <= "z") {
//             if(!vowel.includes(char)){
//                 count++
//             }
//         }
//     }
//     return count
// }

// console.log(countConsonants("I love JS 123!"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// 4



// Return first vowel
// firstVowel("javascript") // "a"

// function firstVowel(str){
//     let vowel = ['a','e','i','o','u'];

//     for (let i = 0; i < str.length; i++) {
//         if(vowel.includes(str[i])) {
           
//             return str[i]
//         }
        
//     }
    

// }

// console.log(firstVowel("javascript"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// a





// function countUpper(str){
//     let count = 0;

//     for(let char of str){
//         if(char >= "A" && char <= "Z"){
//             count++
//         }
//     }
//     return count
// }

// console.log(countUpper("I Love JS") );
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// 4



// >>>>>>>>>>>>>>>> Count lowercase letters
// function lowercase(str){
//     let count = 0;

//     for(let char of str){
//         if(char >= "a" && char <= "z"){
//             count++
//         }
//     }
//     return count
// }

// console.log(lowercase("I Love JS"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// 3











// >>>>>>>>>>>> 🧠 Problem 2 — slightly sharper
// // Return last vowel
// lastVowel("javascript") // "i"

// function lastVowel(str){
//     let result = "";
//     let vowel = ['a','e','i','o','u'];
//     let upp = str.toLowerCase()
//     for(let i = upp.length - 1; i >= 0; i--){
//         if(vowel.includes(upp[i])){
//             return result += upp[i]
//         }
//     }
//     return "Sorry there is no vowel"
    
// }

// console.log(lastVowel("javascript"));
// console.log(lastVowel("HELLO"));
// console.log(lastVowel("rhythm"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// i
// o
// Sorry there is no vowel

























// 🧪 Problem 1 (Start here)
// 🔹 containsDigit(str)
// Return true if the string has any number (0–9)
// Else return false
// Examples:

// containsDigit("hello")      // false
// containsDigit("js123")      // true
// containsDigit("I love JS")  // false


// function containsDigit(str){
//     let number = ['0','1','2','3','4','5','6','7','8','9'];

//     for(let char of str){
//         if (number.includes(char)) {
//             return true
//         }
//     }
//     return false
// }

// console.log(containsDigit("hello"));
// console.log(containsDigit("js123"));
// console.log(containsDigit("I love JS"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// false
// true
// false



// 🧪 Problem 2 (Only if you feel fresh)

// If you feel even slightly tired → say “stop”.
// 🔹 countDigits(str)
// Return how many digits are in the string.
// Examples:

// countDigits("js123")       // 3
// countDigits("hello")       // 0
// countDigits("2025 is here")// 4



// function countDigits(str){
//      let number = ['0','1','2','3','4','5','6','7','8','9'];
//     let count = 0;
//      for(let char of str){
//         if (number.includes(char)) {
//             count++
//         } 
//      }
//      return count
// }
// console.log(countDigits("js123"));
// console.log( countDigits("hello"));
// console.log(countDigits("2025 is here"));




// 🧪 Cycle 1 (NOW) — 3 Problems Only
// 🔹 Problem 1 (Warm-up)
// // hasUpper(str)
// // Return true if string has any uppercase letter

// hasUpper("hello")    // false
// hasUpper("Hello")    // true
// hasUpper("js JS")    // true

// function hasUpper(str){
    
//     for (let i = 0; i <= str.length; i++) {
//         if (str[i] >= "A" && str[i] <= "Z") {
//             return true
//         }
        
//     }
//     return false
    
// }

// console.log(hasUpper("hello"));
// console.log(hasUpper("Hello"));
// console.log(hasUpper("js JS") );

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// false
// true
// true



// >>>>Problem 2 (Core)
// // countLower(str)
// // Count how many lowercase letters

// countLower("I Love JS")   // 3
// countLower("hello") 


// function countLower(str){
//     let count = 0;
//     for (let i = 0; i <= str.length; i++) {
//         if (str[i] >= "a" && str[i] <= "z") {
//             count++
//         }
//     }
//     return count
// }
// console.log(countLower("I Love JS"));
// console.log(countLower("hello"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// 3
// 5


// >>>>>>>>🔹 Problem 3 (Thinking)
// // firstDigit(str)
// // Return the first digit in the string
// // If none → return null

// firstDigit("abc123")   // "1"
// firstDigit("no digits")// null

// function firstDigit(str){
        
//     for (let i = 0; i <= str.length; i++) {
//         if (str[i] >= "0" && str[i] <= "9") {
//             return str[i]
//         }
//     }
//     return null
// }

// console.log(firstDigit("abc123"));
// console.log(firstDigit("no digits"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// 1
// null





// 🔹>>>>>>>>>> Problem 1 — endsWithDigit(str)

// Return true if the string ends with a digit, else false.

// Examples
// endsWithDigit("file1")     // true
// endsWithDigit("version2") // true
// endsWithDigit("hello")    // false
// endsWithDigit("js!")      // false

// function endsWithDigit(str) {
//     let number = ['0','1','2','3','4','5','6','7','8','9'];
//     let last = str[str.length -1]

//     if(number.includes(last)){
//         return true
//     }else return false

// }

// console.log(endsWithDigit("file1"));
// console.log(endsWithDigit("version2"));
// console.log(endsWithDigit("hello"));
// console.log(endsWithDigit("js!"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// true
// true
// false
// false



// >>>>>>>>>>>>🔹 Problem 2 — countSpaces(str)

// Count how many spaces are in the string.
// Examples
// countSpaces("I love JS")     // 2
// countSpaces("NoSpaces")     // 0
// countSpaces(" a b c ")      // 4

// function countSpaces(str) {
//     let count = 0;

//     for(let char of str){
//         if(char === " "){
//             count++
//         }
//     }
//     return count
// }


// console.log(countSpaces("I love JS"));
// console.log(countSpaces("NoSpaces"));
// console.log(countSpaces(" a b c "));


// >>>>>>>>>>>>>>>>🔹 Problem 3 — firstUpper(str)
// Return the first uppercase letter in the string.
// If none → return null.
// Examples

// firstUpper("helloWorld")   // "W"
// firstUpper("JS rocks")     // "J"
// firstUpper("no upper")    // null

// function firstUpper(str) {
    
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= "A" && str[i] <= "Z") {
//             return str[i]
//         }
//     }
//     return null

// }

// console.log(firstUpper("helloWorld"));
// console.log(firstUpper("JS rocks"));
// console.log(firstUpper("no upper"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// W
// J
// null






// >>>>>>>>>>🔹 Problem 4 — endsWithUpper(str)

// Goal:
// Return true if the string ends with an uppercase letter, else false.

// Examples:

// endsWithUpper("helloA")   // true
// endsWithUpper("JS")       // true
// endsWithUpper("hello")    // false
// endsWithUpper("hi!")      // false

// function endsWithUpper(str){
//     let last = str[str.length -1]
//     for(let i = 0; i <= str.length; i++){
//         if(str[i] >= 'A'&& str[i] <= 'Z'){
//             if (str[i]=== last) {
//                 return true
//             }
//         }
//     }
//     return false
// }
// console.log(endsWithUpper("helloA") );
// console.log(endsWithUpper("JS")   );
// console.log(endsWithUpper("hello") );
// console.log(endsWithUpper("hi!"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// true
// true
// false
// false




// >>>>>>. Problem 5 — countSymbols(str)
// Goal:
// Count characters that are NOT:
// letters (a–z, A–Z)
// digits (0–9)
// spaces
// Examples:
// countSymbols("Hi!")            // 1
// countSymbols("JS@2025!")       // 2
// countSymbols("No symbols")     // 0
// countSymbols("Wow!! Nice :)")  // 4


// function countSymbols(str){
//     let count = 0;
//     let symbols = ['~','!','@','#','$','%','^','&','*','(',')',"'",'"',';',':']

//     for(let char of str){
//         if(symbols.includes(char)){
//             count++
//         }
//     }
//     return count
// }

// console.log(countSymbols("Hi!"));
// console.log(countSymbols("JS@2025!"));
// console.log(countSymbols("No symbols"));
// console.log(countSymbols("Wow!! Nice :)"));



// >>>>>>>>>>>>>>>> 🧪 Practice Set — Clean & Sharp (3 Problems)
// 🔹 Problem 1 — startsWithLower(str)

// function startsWithLower(str){
//     let first = str[0]
//     for(let char of str){
//         if(char >= 'a' && char <= 'z'){
//             if(char === first){
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(startsWithLower("hello"));
// console.log(startsWithLower("Hello"));
// console.log(startsWithLower("1hello"));


// >>>>>>>>>>.🔹 Problem 2 — countUpper(str)

// function countUpper(str){
//     let count = 0;
//     for(let char of str){
//         if(char >= 'A' && char <= 'Z'){
//             count++
//         }
//     }
//     return count
// }


// console.log(countUpper("I Love JS"));
// console.log(countUpper("hello"));
// console.log(countUpper("ABCdef"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// 3
// 4
// 0

// // 🔹 Problem 3 — lastDigit(str)

// function lastDigit(str){
       
//     for(let i = str.length -1; i >= 0; i--){
//         if( str[i] >= '0' && str[i] <= '9'){
            
//            return str[i]
//         }
//     }
//     return null
// }

// console.log(lastDigit("abc123"));
// console.log(lastDigit("2025 is now"));
// console.log(lastDigit("no digits"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// 3
// 5
// null




// 🔹 Problem 1 — endsWithLower(str)
// Rule: Check ONLY the last character

// function endsWithLower(str){
//       let last = str[str.length -1]
//     for(let i = 0; i <= str.length; i++){
//         if(str[i] >= 'a'&& str[i] <= 'z'){
//             if (str[i]=== last) {
//                 return true
//             }
//         }
//     }
//     return false
// }


// console.log(endsWithLower("hello"));   
// console.log(endsWithLower("Hello"));   
// console.log(endsWithLower("hi!"));   
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// true
// true
// false


// >>>>>>>>>>> 🔹 Problem 2 — countLetters(str)
// Count only letters (a–z, A–Z). Ignore digits, spaces, symbols.

// function countLetters(str){
//     let count = 0;
//     for(let char of str.toLowerCase()){
//         if(char >= 'a' && char <= 'z'){
//             count++
//         }
//     }
//     return count
// }


// console.log(countLetters("I love JS 123!")); 
// console.log(countLetters("ABC!!!"));         
// console.log(countLetters("2025"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// 7
// 3
// 0


// 🔹 Problem 3 — firstLower(str)
// Return the first lowercase letter in the string.
// If none → return null.

// function firstLower(str){
//        for(let char of str){
//         if(char >= 'a' && char <= 'z'){
//             return char
//         }
//     }
//     return null
// }


// console.log(firstLower("HELlo"));  
// console.log(firstLower("JS Rocks"))
// console.log(firstLower("NOPE"));    

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node ./exact_level.js
// l
// o
// null