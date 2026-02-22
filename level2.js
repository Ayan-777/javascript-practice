// Level +2 — Drill Set A (5 Questions)





// 🔹 Q1 — countLettersAtEnd(str)

// Rule:
// Count consecutive letters from the END only.
// Stop as soon as a non-letter appears.

// function countLettersAtEnd(str){
//     let count = 0;
//     for(let i = str.length -1 ; i >= 0; i--){
//         if(
//             (str[i] >= 'A' && str[i] <= 'Z')||
//             (str[i] >= 'a' && str[i] <= 'z')
//         ){
//             count++
//         }else return count
//     }
//     return count
// }



// console.log(countLettersAtEnd("abc123XYZ") )  // 3
// console.log(countLettersAtEnd("Hello!!") )   // 0
// console.log(countLettersAtEnd("123abc") )    // 3
// console.log(countLettersAtEnd("!!!"))        // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// 3
// 0
// 3
// 0


// >>>>>>>>>>>.🔹 Q2 — hasUpperBeforeLower(str)

// Rule:
// Return true if any uppercase letter appears before any lowercase letter.

// function hasUpperBeforeLower(str) {
//     let seenUpper = false;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= 'A' && str[i] <= 'Z') {
//             seenUpper = true
//         }
//         if (seenUpper && str[i] >= 'a' && str[i] <= 'z') {
//             return true
//         }

//     }
//     return false


// }

// console.log(hasUpperBeforeLower("HELlo"))
// console.log(hasUpperBeforeLower("hello"))
// console.log(hasUpperBeforeLower("heLLo"))
// console.log(hasUpperBeforeLower("A!b"))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// true
// false
// false
// true



// >>>>>>>>>>>>> 🔹 Q3 — removeDigitsAtEnd(str)

// Rule:
// Remove only trailing digits.
// Digits in the middle must stay.

// function removeDigitsAtEnd(str) {
//     let result = [];
//     let remove = true
//     for(let i = str.length - 1; i >= 0; i--){
//         if(remove && str[i] >= '0' && str[i] <= '9'){
//            continue 
//         }else {
//             remove = false
//             result.push(str[i])
//         }


//     }
//     return result.reverse().join('')
// }

// console.log(removeDigitsAtEnd("file123"))   // "file"
// console.log(removeDigitsAtEnd("a1b2"))     // "a1b"
// console.log(removeDigitsAtEnd("123"))     // ""
// console.log(removeDigitsAtEnd("abc"))     // "abc"



// >>>>>>>>>>>>>>🔹 Q4 — firstUpperAfterDigit(str)

// Rule:
// Return the first uppercase letter that appears AFTER any digit.
// If none → null.

// function firstUpperAfterDigit(str) {
//     let seenDigit = false

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= '0' && str[i] <= '9') {
//             seenDigit = true
//         }
//         if ( seenDigit && str[i] >= 'A' && str[i] <= 'Z') {
//             return str[i]
//         }
//     }
//     return null
// }

// console.log(firstUpperAfterDigit("a1Bcd"))  // "B"
// console.log(firstUpperAfterDigit("AB1cD"))  // "D"
// console.log(firstUpperAfterDigit("abc"))  // null
// console.log(firstUpperAfterDigit("1a2b"))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// B
// D
// null
// null


// 🔹 >>>>>>>>>>>>>>>> Q5 — isValidSimpleID(str)

// Rule:
// Return true only if:
// starts with a letter
// ends with a digit
// contains only letters and digits

// function isValidSimpleID(str) {
//     if(!(
//         (str[0] >= 'a' && str[0] <= 'z')||
//         (str[0] >= 'A' && str[0] <= 'Z')
//     )){
//         return false
//     }

//     let last = str[str.length-1]
//     if(!(last >= '0' && last <= '9')){
//         return false
//     }

//    for(let char of str){
//     if(!(
//         (char[0] >= 'a' && char[0] <= 'z')||
//         (char[0] >= 'A' && char[0] <= 'Z')||
//         (char >= '0' && char <= '9')
//     )){
//         return false
//     }
//    }
//    return true

// }



// console.log(isValidSimpleID("A12"))    
// console.log(isValidSimpleID("a9"))    
// console.log(isValidSimpleID("1A2"))     
// console.log(isValidSimpleID("Ab!"))     

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// true
// true
// false
// false


// 🔹 >>>>>>>>>>>>>>>>>>>> Q1 — countDigitsInMiddle(str)

// Rule:
// Count digits that are NOT at the start and NOT at the end.

// function countDigitsInMiddle(str){
//     let count = 0;

//     for(let i = 1; i < str.length -1; i++){
//         if(str[i] >= '0' && str[i] <= '9'){
//             count++
//         }
//     }
//     return count


// }

// console.log(countDigitsInMiddle("a1b2c"))   
// console.log(countDigitsInMiddle("123abc")) 
// console.log(countDigitsInMiddle("a1b2"))  
// console.log(countDigitsInMiddle("1a2b3"))  
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// 2
// 2
// 1
// 1




// 🔹>>>>>>>>>>> Q2 — hasLowerAfterUpper(str)

// Rule:
// Return true if any lowercase letter appears AFTER any uppercase letter.


// function hasLowerAfterUpper(str) {
//     let seenUpper = false;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= 'A' && str[i] <= 'Z') {
//             seenUpper = true
//         }

//         if (seenUpper && str[i] >= 'a' && str[i] <= 'z') {
//             return true
//         }
//     }
//     return false

// }


// console.log(hasLowerAfterUpper("ABc"))
// console.log(hasLowerAfterUpper("abc"))
// console.log(hasLowerAfterUpper("aBC"))
// console.log(hasLowerAfterUpper("A!b"))     
// // ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// // true
// // false
// // false
// // true





// 🔹 Q3 — removeLettersAtStart(str)

// Rule:
// Remove only leading letters.
// Letters in middle/end must stay.

// function removeLettersAtStart(str){
//     let removing = true
//     let result = ''
//     for(let i = 0; i <str.length ;i++){
//         if(removing &&(
//             (str[i] >= 'A' && str[i] <= 'Z')||
//             (str[i] >= 'a' && str[i] <= 'z')

//         )){
//             continue
//         }else {
//             removing = false;
//             result += str[i]
//         }
//     } 
//     return result
// }


// console.log(removeLettersAtStart("abc123") )  // "123"
// console.log(removeLettersAtStart("AbC!9")  )  // "!9"
// console.log(removeLettersAtStart("123abc") )  // "123abc"
// console.log(removeLettersAtStart("abc")    )  // ""






// 🔹>>>>>>>>>>> Q4 — firstDigitAfterLetter(str)

// Rule:
// Return the first digit that appears AFTER any letter.
// If none → null.
// function firstDigitAfterLetter(str) {
//     let seeletter = false
//     for (let i = 0; i < str.length; i++) {
//         if ((str[i] >= 'A' && str[i] <= 'Z') ||
//             (str[i] >= 'a' && str[i] <= 'z')
//         ){
//             seeletter = true
//         }

//         if(seeletter && str[i] >= '0' && str[i] <= '9'){
//             return str[i]
//         }
//     }
//     return null
// }
// console.log(firstDigitAfterLetter("a1b2"))  
// console.log(firstDigitAfterLetter("1a2") )  
// console.log(firstDigitAfterLetter("123") )   
// console.log(firstDigitAfterLetter("ab!") )   
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// 1
// 2
// null
// null



// 🔹>>>>>>>>>>> Q5 — isStrongSimpleCode(str)

// Rule (ALL must be true):
// starts with a letter
// ends with a letter
// contains at least one digit
// contains only letters & digits


// function isStrongSimpleCode(str) {

//     if (!(
//         (str[0] >= 'A' && str[0] <= 'Z') ||
//         (str[0] >= 'a' && str[0] <= 'z')
//     )) {
//         return false
//     }

//     let last = str[str.length - 1]
//     if (!(
//         (last >= 'A' && last <= 'Z') ||
//         (last >= 'a' && last <= 'z')
//     )) {
//         return false
//     }

//     let hasdigit = false
//     for (let char of str) {
//         if (!(
//             (char >= 'A' && char <= 'Z') ||
//             (char >= 'a' && char <= 'z') ||
//             (char >= '0' && char <= '9')

//         )){
//             return false
//         }

//         if(char >= '0'&& char <= '9'){
//             hasdigit = true
//         }
//     }
//     return hasdigit
// }
// console.log(isStrongSimpleCode("A1b"))    
// console.log(isStrongSimpleCode("a9Z"))    
// console.log(isStrongSimpleCode("A1!"))     
// console.log(isStrongSimpleCode("1Ab"))     
// console.log(isStrongSimpleCode("Abc"))     

// // ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// true
// true
// false
// false
// false



// 🔹 Q6 — firstLetterAfterSymbol(str)
// Rule:

// Return the first letter (A–Z or a–z)
// that appears immediately AFTER a symbol
// Symbol = anything that is NOT a letter and NOT a digit
// If none → return null

// function firstLetterAfterSymbol(str){
//     let seensymb = false
//     for(let i = 0; i < str.length; i++){
//         if(!(
//             (str[i] >= 'A' && str[i] <= 'Z')||
//             (str[i] >= 'a' && str[i] <= 'z')||
//             (str[i] >= '0' && str[i] <= '9')
//         )){
//             seensymb = true
//         }
//         if(seensymb &&(
//             (str[i] >= 'A' && str[i] <= 'Z')||
//             (str[i] >= 'a' && str[i] <= 'z')
//         )){
//             return str[i]
//         } 

//         if(seensymb && str[i] >= '0' && str[i] <= '9'){
//             seensymb = false
//         }
//     }
//     return null
// }

// console.log(firstLetterAfterSymbol("ab#Cd"))    // "C"
// console.log(firstLetterAfterSymbol("a1!b2"))   // "b"
// console.log(firstLetterAfterSymbol("abc")  )   // null
// console.log(firstLetterAfterSymbol("@A1")  )   // "A"
// console.log(firstLetterAfterSymbol("A#1b") )   // null


// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// C
// b
// null
// A
// null


// 🔹 LEVEL +2 >>>>>>>>>>>>>>> — Q7
// countLettersAfterDigit(str)
// Rule:
// Count letters (A–Z, a–z)
// that appear AFTER the first digit
// Stop counting if another digit appears
// If no digit exists → return 0

// function countLettersAfterDigit(str) {
//     let count = 0
//     let seenDigit = false;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= '0' && str[i] <= '9') {
//             if (seenDigit) {
//                 return count
//             }
//             seenDigit = true;

//         } else if (seenDigit &&
//             (
//                 (str[i] >= 'A' && str[i] <= 'Z') ||
//                 (str[i] >= 'a' && str[i] <= 'z')
//             )) {
//             count++
//         }
//     }

//     return count
// }

// console.log(countLettersAfterDigit("ab1CdE"))   // 3   (C d E)
// console.log(countLettersAfterDigit("1abc2de"))  // 3   (a b c → stop at 2)
// console.log(countLettersAfterDigit("abc"))  // 0
// console.log(countLettersAfterDigit("a1b2c"))  // 1   (b)
// console.log(countLettersAfterDigit("12abc")) // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// 3
// 3
// 0
// 1
// 0
// ayan@ay



// >>>>>>>>>>>>>>>>> Practice Q1 — countDigitsAfterLetter(str)

// Rule:
// Find the first letter
// After that, count consecutive digits
// Stop when a non-digit appears
// If no letter → return 0

// function countDigitsAfterLetter(str) {

//     let count = 0;
//     let seenletter = false;

//     for(let i = 0; i < str.length; i++){
//         if(
//             (str[i] >= 'a' && str[i] <= 'z') ||
//             (str[i] >= 'A' && str[i] <= 'Z')
//         ){
//             if(seenletter) return count
//             seenletter = true
//         }else if(seenletter){
//             if(str[i] >= '0' && str[i] <= '9'){
//                 count++
//             }
//         }
//     }
//     return count
// }


// console.log(countDigitsAfterLetter("a123b"))   // 3
// console.log(countDigitsAfterLetter("1a45!"))   // 2
// console.log(countDigitsAfterLetter("123"))   // 0
// console.log(countDigitsAfterLetter("A9Z8"))   // 1
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// 3
// 2
// 0
// 1



// 🔹 Practice Q2 — firstDigitAfterUpper(str)

// Rule:
// Find the first uppercase letter
// Return the first digit that appears AFTER it
// If none → return null

// function firstDigitAfterUpper(str) {
//     let seenUpper = false;

//     for(let i = 0; i < str.length; i++){
//         if(str[i] >= 'A' && str[i] <= 'Z'){
//             seenUpper = true
//         }

//         if(seenUpper && str[i] >= '0' && str[i] <= '9'){
//             return str[i]
//         }
//     }
//     return null
// }

// console.log(firstDigitAfterUpper("aB2c"))   // "2"
// console.log(firstDigitAfterUpper("ABc9"))   // "9"
// console.log(firstDigitAfterUpper("abc123"))  // null
// console.log(firstDigitAfterUpper("A!7b"))  // "7"


// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// 2
// 9
// null
// 7





// 🔹 Level 2 Practice Set (Strings & Logic)
// >>>>>>>>>>>> Q1 — countLettersAfterDigit(str)

// Rules:
// Find the first digit
// After that, count consecutive letters
// Stop when a non-letter appears
// If no digit → return 0

// function countLettersAfterDigit(str){
//     let count  = 0;
//     let seenDigit = false;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] >= '0' && str [i] <= '9'){
//             if(seenDigit) return count
//             seenDigit = true
//         }else if(seenDigit){
//             if(
//                 (str[i] >= 'a' && str [i] <= 'z')||
//                 (str[i] >= 'A' && str [i] <= 'Z')
//             ){
//                 count++
//             }
//         }

//     }
//     return count
// }

// console.log(countLettersAfterDigit("1abc2"))
// console.log(countLettersAfterDigit("a9XY!"))
// console.log(countLettersAfterDigit("abc"))
// console.log(countLettersAfterDigit("5aB9"))


// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// 3
// 2
// 0
// 2


// >>>>>>>>>>>>>> Q2 — firstUpperAfterDigit(str)

// Rules:
// Find the first digit
// Return the first uppercase letter AFTER it
// If none → return null
// Examples:

// function firstUpperAfterDigit(str) {
//     let seenDigit = false
//     for(let i = 0; i< str.length; i++){
//         if(str[i] >= '0' && str[i] <= '9'){
//             seenDigit = true
//         }
//         if(seenDigit && str[i] >= 'A' && str[i]<= 'Z'){
//             return str[i]
//         }
//     }
//     return null
// }

// console.log(firstUpperAfterDigit("a3Bc"))  
// console.log(firstUpperAfterDigit("9abC"))  
// console.log(firstUpperAfterDigit("abc"))   
// console.log(firstUpperAfterDigit("4xYz")) 
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// B
// C
// null
// Y



// Q3 — countDigitsBetweenLetters(str)

// Rules:
// Find the first letter
// Then count digits
// Stop when another letter appears
// If no starting letter → return 0


// function countDigitsBetweenLetters(str) {
//     let seenletter = false;
//     let count  = 0
//     for(let i of str){
//         if(
//             (i >= 'A' && i <= 'Z')||
//             (i >= 'a' && i <= 'z')
//         ){
//             if(seenletter) return count
//             seenletter = true
//         }else if(seenletter){
//             if(i >= '0' && i <= '9'){
//                 count++
//             }
//         }
//     }
//     return count
// }


// console.log(countDigitsBetweenLetters("a123b"))   
// console.log(countDigitsBetweenLetters("A9Z"))   
// console.log(countDigitsBetweenLetters("1a45!"))  
// console.log(countDigitsBetweenLetters("123"))  

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// 3
// 1
// 2
// 0

// >>>>>>>>>>>>>>>> Q4 — hasUpperThenDigit(str)

// Rules:
// Return true if:
// An uppercase letter appears
// And later a digit appears
// Otherwise return false
// Examples:

// function hasUpperThenDigit(str) {
//     let seenUpper = false;
//     for(let i of str){
//         if( i >= 'A' && i <= 'Z'){
//             seenUpper = true
//         }
//         if(seenUpper && i >= '0' && i <= '9'){
//             return true
//         }
//     }
//     return false
// }


// console.log(hasUpperThenDigit("aB2c"))
// console.log(hasUpperThenDigit("abc2"))
// console.log(hasUpperThenDigit("A!"))
// console.log(hasUpperThenDigit("A9"))   
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// true
// false
// false
// true


// >>>>>>>>>>>>>>> Q5 — indexOfFirstDigitAfterLetter(str)

// Rules:
// Find the first letter
// Return the index of the first digit after it
// If none → -1

// function indexOfFirstDigitAfterLetter(str) {
//    let seeletter = false

//     for(let i = 0; i <str.length; i++){
//         if(
//             (str[i] >= 'A' && str[i] <= 'Z')||
//             (str[i] >= 'a' && str[i] <= 'z')
//         ){
//             seeletter = true
//         }

//         if(seeletter && str[i] >= '0' && str[i] <= '9'){
//             return i
//         }
//     }
//     return -1
// }


// console.log(indexOfFirstDigitAfterLetter("a1b"))
// console.log(indexOfFirstDigitAfterLetter("1a9"))
// console.log(indexOfFirstDigitAfterLetter("abc"))
// console.log(indexOfFirstDigitAfterLetter("A!7"))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// 1
// 2
// -1
// 2


// >>>>>>>>>>>>>>>>>>>> Q6 — countUppercaseBeforeDigit(str)

// Rules:
// Stop when the first digit appears
// Count how many uppercase letters appeared before it
// If no digit → count all uppercase letters

// function countUppercaseBeforeDigit(str) {
//     let seenDigit = true;
//     let count = 0
//     for(let i = 0 ; i < str.length ; i++){
//         if(str[i] >= '0' && str[i] <= '9'){
//             seenDigit = false
//         }
//         if(seenDigit && str[i] >= 'A' && str[i] <= 'Z'){
//             count++
//         }
//     }
//     return count
// }


// console.log(countUppercaseBeforeDigit("ABc2d"))
// console.log(countUppercaseBeforeDigit("aBcD9"))
// console.log(countUppercaseBeforeDigit("abc"))
// console.log(countUppercaseBeforeDigit("A1B"))  
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// 2
// 2
// 0
// 1 



// >>>>>>>>>>>>>> Q7 — firstSpecialAfterDigit(str)

// Rules:
// Find the first digit
// Return the first special character (!@#$%^&*) after it
// If none → null
// Examples:

// function firstSpecialAfterDigit(str) {
//     let seenDigit = false;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= '0' && str[i] <= '9') {
//             seenDigit = true
//             continue
//         }
//         if(seenDigit){
//             if(!(
//                 (str[i] >= '0' && str[i] <= '9')||
//                 (str[i] >= 'A' && str[i] <= 'Z')||
//                 (str[i] >= 'a' && str[i] <= 'z')
//             )){
//                 return str[i] 
//             } 
//         }

//     }
//     return null
// }
// console.log(firstSpecialAfterDigit("a3!b"))
// console.log(firstSpecialAfterDigit("9abc#"))
// console.log(firstSpecialAfterDigit("1ab"))    
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// !
// #
// null


// 🧠 LEVEL +2 — Morning Practice Set
// >>>>>>>>>>>>>>>> 🔹 Q1 — countLowercaseAfterUpper(str)

// Rules:
// Find the first uppercase letter
// After that, count consecutive lowercase letters
// Stop when a non-lowercase appears
// If no uppercase → return 0

// function countLowercaseAfterUpper(str){
//     let count = 0;
//     let seenUpper = false
//     for(let char of str){
//         if(char >= 'A' && char <= 'Z'){
//             if(seenUpper) return count;
//             seenUpper = true
//         }
//         if(seenUpper && char >= 'a' && char <= 'z'){
//             count++
//         }
//     }
//     return count
// }
// console.log(countLowercaseAfterUpper("aBcdE"))   
// console.log(countLowercaseAfterUpper("ABCd") )   
// console.log(countLowercaseAfterUpper("abc")  )   
// console.log(countLowercaseAfterUpper("Zxy9") ) 

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// 2
// 0
// 0
// 2



// 🔹 Q2 — firstDigitAfterLower(str)

// Rules:
// Find the first lowercase letter
// Return the first digit after it
// If none → return null

// function firstDigitAfterLower(str){
//     let seenlower = false
//     for(let char of str){
//         if(char >= 'a'&& char <= 'z'){
//             seenlower = true
//         }
//         if(seenlower && char >= '0' && char <= '9'){
//             return char
//         }
//     }
//     return null
// }


// console.log(firstDigitAfterLower("A b3C"))
// console.log(firstDigitAfterLower("abc1"))
// console.log(firstDigitAfterLower("ABC9"))
// console.log(firstDigitAfterLower("a!7b"))

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// 3
// 1
// null
// 7


// >>>>>>>>>>>>>> 🔹 Q3 — countLettersBetweenDigits(str)

// Rules:
// Find the first digit
// Count letters after it
// Stop when another digit appears
// If no digit → return 0

// function countLettersBetweenDigits(str){
//     let count = 0;
//     let seenDigit = false;
//     for(let char of str){
//         if(char >= '0' && char<= '9'){
//             if(seenDigit) return count;
//             seenDigit = true
//         }

//         if(seenDigit &&(
//             (char >= 'a' && char<= 'z')||
//             (char >= 'A' && char<= 'Z')
//         )){
//             count++
//         }
//     }
//     return count


// }

// console.log(countLettersBetweenDigits("1ab2c"))
// console.log(countLettersBetweenDigits("9XYZ"))
// console.log(countLettersBetweenDigits("abc"))
// console.log(countLettersBetweenDigits("1aB9"))

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// 2
// 3
// 0
// 2

// 🔹 Q4 — hasDigitThenUpper(str)

// Rules:
// Return true if:
// A digit appears
// And later an uppercase letter appears
// Else → false

// function hasDigitThenUpper(str){
//     let seenDigit = false;

//     for(let char of str){
//         if(char >= '0' && char <= '9'){
//             seenDigit = true
//         }

//         if(seenDigit && char >= 'A' && char<= 'Z'){
//             return true
//         }
//     }
//     return false
// }

// console.log(hasDigitThenUpper("a1B")  ) 
// console.log(hasDigitThenUpper("AB1")  ) 
// console.log(hasDigitThenUpper("1a")   ) 
// console.log(hasDigitThenUpper("9Z")   ) 
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// true
// false
// false
// true



// 🔹 Q5 — indexOfFirstUpperAfterDigit(str)

// Rules:
// Find the first digit
// Return the index of the first uppercase letter after it
// If none → return -1

// function indexOfFirstUpperAfterDigit(str){

//     let digit = false
//     for(let i = 0; i < str.length; i++){
//         if(str[i] >= '0' && str[i] <= '9'){
//             digit = true
//             continue
//         }

//         if( digit && str[i] >= 'A' && str[i] <= 'Z'){
//                 return i
//             }

//     }
//     return -1
// } 


// console.log(indexOfFirstUpperAfterDigit("a1Bc"))   
// console.log(indexOfFirstUpperAfterDigit("9abC"))   
// console.log(indexOfFirstUpperAfterDigit("abc") )   
// console.log(indexOfFirstUpperAfterDigit("1!Z") ) 
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// 2
// 3
// -1
// 2  



// 🔹 Q6 — countSpecialAfterLetter(str)

// Rules:
// Find the first letter
// Count special characters after it
// (special = NOT letter, NOT digit)
// Stop when a digit appears
// If no letter → return 0

// function countSpecialAfterLetter(str) {
//     let count = 0;
//     let seeletter = false;

//     for (let char of str) {
//         if (
//             (char >= 'a' && char <= 'z') ||
//             (char >= 'A' && char <= 'Z')

//         ) {
//             seeletter = true
//             continue
//         }

//         if (seeletter) {
//             if (seeletter && char >= '0' && char <= '9') {
//                 break
//             }
//             if (!(

//                 (char >= 'a' && char <= 'z') ||
//                 (char >= 'A' && char <= 'Z') ||
//                 (char >= '0' && char <= '9')
//             )) {
//                 count++
//             }
//         }

//         // if (seeletter && char >= '0' && char <= '9') {
//         //     seeletter = false
//         // }

//     }
//     return count
// }

// console.log(countSpecialAfterLetter("a!@3"))
// console.log(countSpecialAfterLetter("A#1!"))
// console.log(countSpecialAfterLetter("123"))
// console.log(countSpecialAfterLetter("b$%c9"))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level+2.js 
// 2
// 1
// 0
// 2


