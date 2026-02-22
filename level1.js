// 🔹 P1 — hasLetterAndDigit(str)

// Return true if the string contains at least one letter AND one digit.

// hasLetterAndDigit("abc123")  // true
// hasLetterAndDigit("abc")     // false
// hasLetterAndDigit("123")     // false
// hasLetterAndDigit("a1!")     // true

// function hasLetterAndDigit(str){

//     let letter = false;
//     let digit = false;

//     for(let char of str.toLowerCase()){
//         if(char >= 'a' && char <= 'z'){
//             letter = true
//         }

//         if(char >= '0' && char <= '9'){
//             digit = true
//         }

//         if(letter && digit){
//             return true
//         }
//     }
//     return false


// }

// console.log(hasLetterAndDigit("abc123"));
// console.log(hasLetterAndDigit("abc"));
// console.log(hasLetterAndDigit("123"));
// console.log(hasLetterAndDigit("a1!"));


// >>>>>>>>>>>>> 🧪 Test — Level +1 (Question 2)
// 🔹 P2 — countVowelsAndConsonants(str)
// Rules (read carefully):
// Count only letters (a–z, A–Z)
// Ignore digits, spaces, symbols
// Vowels = a e i o u

// Return an object


// function countVowelsAndConsonants(str) {
//     let result = {}
//     let vowel = 0;
//     let contain = 0;
//     let vowels = ['a', 'e', 'i', 'o', 'u'];

//     for (let char of str.toLowerCase()) {
//         if (char >= 'a' && char <= 'z') {
//             if (vowels.includes(char)) {
//                 vowel++
//             }

//          else {
//             contain++
//         }}

//     }
//     return result = { vowel, contain }
// }


// console.log(countVowelsAndConsonants("Hello World 123"));


// >>>>>>>>>>🔹 Q1 — hasUpperAndLower(str)

// Goal:
// Return true if the string contains at least one uppercase AND one lowercase letter.

// Examples:

// hasUpperAndLower("Hello")   // true
// hasUpperAndLower("HELLO")   // false
// hasUpperAndLower("hello")   // false
// hasUpperAndLower("He!")     // true


// function hasUpperAndLower(str) {
//     let up = false;
//     let low = false;

//     for (let char of str) {
//         if (char >= 'A' && char <= 'Z') {
//             up = true
//         }
//         if (char >= 'a' && char <= 'z') {
//             low = true
//         }

//         if(up && low){
//             return true
//         }
//     }
//     return false
// }
// console.log(hasUpperAndLower("Hello"));
// console.log(hasUpperAndLower("HELLO"));
// console.log(hasUpperAndLower("hello"));
// console.log(hasUpperAndLower("He!"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// true
// false
// false
// true


// >>>>>>>>>>>>>.🔹 Q2 — countDigitsAtEnd(str)

// Goal:
// Count how many digits appear consecutively at the END of the string.

// function countDigitsAtEnd(str) {
//     let count = 0;
//     let last = str.length -1
//     for (let i = str.length -1; i >= 0; i--) {
//         if(str[i] >= '0' && str[i] <= '9'){
//            count++
//         }else return count
//     }
//     return count
// }

// console.log(countDigitsAtEnd("file123"));
// console.log(countDigitsAtEnd("test9"));
// console.log(countDigitsAtEnd("abc"));
// console.log(countDigitsAtEnd("a1b2"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// 3
// 1
// 0
// 1

// >>>>>>>>>>>>> Q3 — removeSpaces(str)

// Goal:
// Return a new string without any spaces.


// function removeSpaces(str) {
//     let result = ''
//     for (let char of str){
//         if(char === " "){

//         }else{
//             result += char
//         }
//     }
//     return result
// }

// console.log(removeSpaces("I love JS"));
// console.log(removeSpaces(" No space "));


// >>>>>>>>>> Q4 — firstNonLetter(str)

// Goal:
// Return the first character that is NOT a letter.
// If all are letters → null.


// function firstNonLetter(str) {


//     for (let char of str.toLowerCase()){
//         if(!(char >= 'a' && char <= 'z')){
//             return char
//         }
//     }
//     return null

// }

// console.log(firstNonLetter("Hello!"));
// console.log(firstNonLetter("JS2025"));
// console.log(firstNonLetter("World"));


// >>>>>>>>🔹 Q5 — isOnlyAlphaNumeric(str)

// Goal:
// Return true if the string contains only letters and digits.
// Spaces and symbols ❌


// function isOnlyAlphaNumeric(str) {


//     for (let char of str.toLowerCase()) {
//         if (!(
//             (char >= 'a' && char <= 'z') ||
//             ((char >= '0' && char <= '9'))

//         )) {
//             return false
//         }
//     }
//     return true
// }

// console.log(isOnlyAlphaNumeric("Hello123"));
// console.log(isOnlyAlphaNumeric("Hi 123"));
// console.log(isOnlyAlphaNumeric("JS!"));
// console.log(isOnlyAlphaNumeric("a1!"));


// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// true
// false
// false


// Set A (3 questions)

// 🔹 >>>>>>>>>>>>>>>>>>>>> Q1 — startsWithDigit(str)

// Rule:
// Return true if the string starts with a digit.


// function startsWithDigit(str){
//     let first = str[0];
//     for(let char of str){
//         if(char >= '0' && char <= '9'){
//             if(char === first){
//                 return true
//             }

//         }
//     }
//     return false
// }

// console.log(startsWithDigit("1file"));
// console.log(startsWithDigit("file1"));
// console.log(startsWithDigit("!1file"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// true
// false
// false


// 🔹 Q2 — countUpperAtStart(str)

// Rule:
// Count consecutive uppercase letters from the START only.


// function countUpperAtStart(str){
//         let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] >= 'A' && str[i] <= 'Z'){
//             count++
//         }else return count
//     }

// }

// console.log(countUpperAtStart("USAcode"));
// console.log(countUpperAtStart("JsCode"));
// console.log(countUpperAtStart("code"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// 3
// 1
// 0
// >>>>>>>>>>>>>>>>>> 🔹 Q3 — lastLetter(str)

// Rule:
// Return the last letter (a–z or A–Z) in the string.
// Ignore digits, spaces, symbols.
// If none → null


// function lastLetter(str){

//     for(let i = str.length -1; i >= 0; i--){
//         if(str[i] >= 'a' && str[i] <= 'z'){
//             return str[i]
//         }
//     }
//     return null
// }

// console.log(lastLetter("abc123!"));
// console.log(lastLetter("Hi!!!"));
// console.log(lastLetter("123"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// c
// i
// null





















// 🔹 Q1 — endsWithLetter(str)

// Rule:
// Return true if the string ends with a letter (a–z or A–Z).



// function endsWithLetter(str){
//     let last = str[str.length -1]
//         for(let char of str.toLowerCase()){
//         if(char >= 'a' && char <= 'z'){
//             if(char === last){
//                 return true
//             }
//         }
//     }
//     return false
// }


// console.log(endsWithLetter("hello"));
// console.log(endsWithLetter("Hi1"));
// console.log(endsWithLetter("JS1"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// true
// false
// false


// 🔹 Q2 — countLowerAtEnd(str)

// Rule:
// Count consecutive lowercase letters from the END only

// Examples:
// console.log(countLowerAtEnd("codeabc"));   // 3
// console.log(countLowerAtEnd("JSabc"));     // 3
// console.log(countLowerAtEnd("ABC"));       // 0
// console.log(countLowerAtEnd("abCde"));     // 2

// function countLowerAtEnd(str) {
//     let count = 0;

//     for (let i = str.length -1; i >= 0 ; i--) {
//         if (str[i] >= 'a' && str[i] <= 'z') {
//             count++
//         } else return count


//     }
//     return count
// }




// console.log(countLowerAtEnd("codeabc"));
// console.log(countLowerAtEnd("JSabc"));
// console.log(countLowerAtEnd("ABC"));
// console.log(countLowerAtEnd("abCde"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// undefined
// 3
// 0
// 2

// 🔹 Q3 — removeDigits(str)

// Rule:
// Return a new string with all digits removed.
// Keep letters, spaces, symbols.

// Examples:
// console.log(removeDigits("JS2025 Rocks")); // "JS Rocks"
// console.log(removeDigits("a1b2c3"));       // "abc"
// console.log(removeDigits("123!"));         // "!"

// function removeDigits(str){
//     let result = ''
//     for(let char of str){
//         if(char >= '0' && char <= '9'){

//         }else {
//             result += char
//         }
//     }
//     return result
// }

// console.log(removeDigits("JS2025 Rocks"));
// console.log(removeDigits("a1b2c3"));
// console.log(removeDigits("123!"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// JS Rocks
// abc
// !



// >>>>>>>>>>>>> 🔹 Q1 — countUpperAtStart(str)

// Rule:
// Count consecutive UPPERCASE letters from the START only.


// function countUpperAtStart(str){
//         let count = 0;

//     for (let i = 0; i < str.length ; i++) {
//         if (str[i] >= 'A' && str[i] <= 'Z') {
//             count++
//         } else return count


//     }
//     return count
// }



// console.log(countUpperAtStart("ABCdef"));
// console.log(countUpperAtStart("ABcDEF"));
// console.log(countUpperAtStart("abc"));
// console.log(countUpperAtStart("A"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// 3
// 2
// 0
// 1

// >>>>>>>>>>>>>>>>>> 🔹 Q2 — endsWithDigit(str)

// Rule:
// Return true if the string ends with a digit (0–9), else false.


// function endsWithDigit(str){
//     let last = str[str.length - 1]
//          for(let char of str){
//         if(char >= '0' && char <= '9'){
//             if(char === last){
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(endsWithDigit("file1"));
// console.log(endsWithDigit("test"));
// console.log(endsWithDigit("A9"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// true
// false
// true


// >>>>>>>>>>>>>>>>>>>> Q3 — removeLowercase(str)

// Rule:
// Return a new string with all lowercase letters removed.
// Keep uppercase, digits, symbols, spaces.


// function removeLowercase(str){
//     let result = '';
//         for(let char of str){
//         if(char >= 'a' && char <= 'z'){

//         }else {
//             result += char
//         }
//     }
//     return result
// }

// console.log(removeLowercase("AbCde123!"));
// console.log(removeLowercase("hello"));
// console.log(removeLowercase("JS Rocks"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// AC123!

// JS R


// >>>>>>>>>>>>>>>>>> 🔹 Q4 — countDigitsAtEnd(str)

// Rule:
// Count consecutive digits from the END only.

// function countDigitsAtEnd(str){
//         let count = 0
//     for(let i = str.length -1; i >= 0; i--){
//         if(str[i] >= '0' && str[i] <= '9'){
//             count++
//         }else return count
//     }
//     return count
// }

// console.log(countDigitsAtEnd("abc123"));
// console.log(countDigitsAtEnd("A9B8"));
// console.log(countDigitsAtEnd("123"));
// console.log(countDigitsAtEnd("abc"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// 3
// 1
// 3
// 0


// 🧠 Muscle Memory Set — Level-1 (Final Drill)

// Do NOT ask for solution.
// Solve by yourself. Under 5 minutes each.

//>>>>>>>>>>>>>>>>>>  Q1 — startsWithLetter(str)

// Return true if the string starts with a letter (A–Z or a–z).

// function startsWithLetter(str) {


//     if ((str[0] >= 'a' && str[0] <= 'z') ||
//         (str[0] >= 'A' && str[0] <= 'Z')) {
//         return true
//     }
//     return false


// }

// console.log(startsWithLetter("Hello"));
// console.log(startsWithLetter("1abc"));
// console.log(startsWithLetter("!Hi"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// true
// false
// false


// Q2 — countDigitsAtStart(str)

// Count consecutive digits from the START only.


// function countDigitsAtStart(str){
//     let count = 0;
//     for(let i of str){
//         if( i >= '0' && i <= '9'){
//             count++
//         }else return count
//     }
//     return count
// }

// console.log(countDigitsAtStart("123abc"));
// console.log(countDigitsAtStart("12a34"));
// console.log(countDigitsAtStart("abc123"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// 3
// 2
// 0

// >>>>>>>>>>>>>>>>>>> Q3 — removeSymbols(str)

// Remove only symbols.
// Keep letters, digits, spaces.

// function removeSymbols(str) {
//     let result = '';
//     for (let i of str) {
//         if ((i >= 'a' && i <= 'z') ||
//             (i >= 'A' && i <= 'Z') ||
//             (i >= '0' && i <= '9') ||
//         i === " ") {
//             result += i
//         }
//     }
//     return result
// }

// console.log(removeSymbols("Hi!@# 123"));
// console.log(removeSymbols("a$b%c"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// Hi 123
// abc


// >>>>>>>>>>>>>>>>>> Q4 — lastDigit(str)

// Return the last digit in the string.
// If none → null.

// function lastDigit(str){
//     for(let i = str.length -1; i >= 0; i--){
//         if(str[i] >= '0' && str[i] <= '9'){
//             return str[i]
//         }
//     }
//     return null 
// }

// console.log(lastDigit("a1b2c3"));
// console.log(lastDigit("abc"));
// console.log(lastDigit("9!"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// 3
// null
// 9

// >>>>>>>>>>> Q1 — endsWithLetter(str)

// Rule:
// Return true if the string ends with a letter (A–Z or a–z).

// function endsWithLetter(str) {
//     let last = str[str.length - 1]
//     if (
//         (last >= 'a' && last <= 'z') ||
//         (last >= 'A' && last <= 'Z') 
//     ){
//         return true
//     }
//     return false
// }

// console.log(endsWithLetter("Hello"));
// console.log(endsWithLetter("Hi1"));
// console.log(endsWithLetter("A!"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// true
// false
// false



// >>>>>>>>>>>> 🔹 Q2 — countLowerAtStart(str)

// Rule:
// Count consecutive lowercase letters from the START only.

// function countLowerAtStart(str) {
//     let count = 0
//     for (let char of str) {
//         if (char >= 'a' && char <= 'z') {
//             count ++
//         }else return count
//     }


//     return count
// }

// console.log(countLowerAtStart("abcDEF"));
// console.log(countLowerAtStart("abCde"));
// console.log(countLowerAtStart("ABC"));
// console.log(countLowerAtStart("a"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// 3
// 2
// 0
// 1

// >>>>>>>>>>>>>>> 🔹 Q3 — firstDigit(str)

// Rule:
// Return the first digit found in the string.
// If none → null

// function firstDigit(str){
//         let result = ""
//     for (let char of str) {
//         if (char >= '0' && char <= '9') {
//             return result += char
//         } 
//     }
//     return null
// }

// console.log(firstDigit("a1b2"));
// console.log(firstDigit("abc"));
// console.log(firstDigit("9abc"));


// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// 1
// null
// 9


// >>>>>>>>>>>>>>>> 🔹 Q4 — removeUppercase(str)

// Rule:
// Return a new string with all uppercase letters removed.
// Keep lowercase, digits, spaces, symbols.


// function removeUppercase(str){
//     let result = ""
//     for (let char of str) {
//         if (char >= 'A' && char <= 'Z') {

//         }else {
//             result += char
//         }
//     }
//     return result
// }

// console.log(removeUppercase("AbC123!"));
// console.log(removeUppercase("HELLO"));
// console.log(removeUppercase("Hi There"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// b123!

// i here


// >>>>>>>>>>>>>> 🔹 Q5 — hasOnlyLetters(str)

// Rule:
// Return true only if every character is a letter (A–Z or a–z).
// Anything else → false

// function hasOnlyLetters(str) {

//     for (let i = 0; i < str.length; i++) {
//         if (!((str[i] >= 'a' && str[i] <= 'z') ||
//               (str[i] >= 'A' && str[i] <= 'Z'))) {
//             return false
//         }
//     }
//     return true
// }

// console.log(hasOnlyLetters("Hello"));
// console.log(hasOnlyLetters("Hi123"));
// console.log(hasOnlyLetters("Hey!"));


// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node enetry+1.js 
// true
// false
// false