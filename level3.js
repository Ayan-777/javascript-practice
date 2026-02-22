// 🧠 LEVEL +3 — Drill Set 1
// >>>>>>>>>>>>>>>>>>>>🔹 Q1 — countDigitsAfterFirstUpperUntilLower(str)

const { Types } = require("mongoose");

// Rules:
// Find the first uppercase letter
// Count digits after it
// Stop when a lowercase letter appears
// If no uppercase → return 0

// function countDigitsAfterFirstUpperUntilLower(str) {
//     let count = 0;
//     let seenupper = false;
//     for(let char of str){
//         if(char >= 'A' && char <= 'Z'){
//             seenupper = true
//             continue
//         }

//         if(seenupper){ 
//             if(char >= 'a' && char <= 'z'){
//                 break
//             }
//             if(char >= '0' && char <= '9'){
//                 count++
//             }
//         }
//     }
//     return count
// }

// console.log(countDigitsAfterFirstUpperUntilLower("A12b"))
// console.log(countDigitsAfterFirstUpperUntilLower("aA9Z7x"))
// console.log(countDigitsAfterFirstUpperUntilLower("abc"))
// console.log(countDigitsAfterFirstUpperUntilLower("Z99!"))   
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 2
// 0
// 2


// >>>>>>>>>>>>>🔹 Q2 — firstSpecialBetweenLetters(str)

// Rules:
// Find the first letter
// Return the first special character after it
// Stop when another letter appears
// If none → return null

// function firstSpecialBetweenLetters(str) {
//     let seenletter = false;
//     for (let char of str) {
//         if (
//             (char >= 'a' && char <= 'z') ||
//             (char >= 'A' && char <= 'Z')
//         ) {
//             seenletter = true
//             continue
//         }

//         if (seenletter) {
//             if (
//                 (char >= 'a' && char <= 'z') ||
//                 (char >= 'A' && char <= 'Z')
//             ){
//                 break
//             }

//                 if (!(
//                     (char >= 'a' && char <= 'z') ||
//                     (char >= 'A' && char <= 'Z') ||
//                     (char >= '0' && char <= '9')
//                 )) {
//                     return char
//                 }
//         }

//     }
//     return null
// }


// console.log(firstSpecialBetweenLetters("a!b"))
// console.log(firstSpecialBetweenLetters("A@#C"))
// console.log(firstSpecialBetweenLetters("ab"))
// console.log(firstSpecialBetweenLetters("1a$9B"))   
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// !
// @
// null
// $

// >>>>>>🔹 Q3 — hasUpperDigitUpperPattern(str)

// Rules:

// Return true if:
// An uppercase letter appears
// Later a digit appears
// Later another uppercase letter appears
// Order matters
// Else → false

// function hasUpperDigitUpperPattern(str){

//     let seenupper = false;
//     let seenDigit = false
//     for(let char of str){
//         if (char >= 'A' && char <= 'Z') {
//             seenupper = true

//         }

//         if(seenupper){
//             if(char >= '0' && char <= '9'){
//                 seenDigit = true
//             }
//         }
//         if(seenDigit && char >= 'A' && char <= 'Z'){
//             return true
//         }
//     }
//     return false
// }


// console.log(hasUpperDigitUpperPattern("A1B" ))    
// console.log(hasUpperDigitUpperPattern("Aa1B"))    
// console.log(hasUpperDigitUpperPattern("AB1" ))    
// console.log(hasUpperDigitUpperPattern("a1B" ))    
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// true
// true
// false
// false


// >>>>>>>>>>>>>>>>>🔹 Q4 — countLowercaseBlocks(str)

// Rules:
// Count how many separate lowercase groups exist
// Continuous lowercase letters = 1 block

// function countLowercaseBlocks(str) {

//     let count = 0;
//     let block = false
//     for (let char of str) {
//         if (char >= 'a' && char <= 'z') {
//             if (!block) {
//                 count++
//                 block = true
//             }

//         } else {
//             block = false
//         }


//     }
//     return count

// }
// console.log(countLowercaseBlocks("aaBBccDdd"))
// console.log(countLowercaseBlocks("ABC"))
// console.log(countLowercaseBlocks("a1b2c"))
// console.log(countLowercaseBlocks("abCD"))



// 🔹 Q5 — indexOfDigitAfterSpecialBeforeLetter(str)

// Rules:
// Find a special character
// After it, find a digit
// That digit must appear before any letter
// Return its index
// Else → -1

// function indexOfDigitAfterSpecialBeforeLetter(str) {
//     let seenspecial = false

//     for (let i = 0; i < str.length; i++) {
//         if (!(
//             (str[i] >= 'a' && str[i] <= 'z') ||
//             (str[i] >= 'A' && str[i] <= 'Z') ||
//             (str[i] >= '0' && str[i] <= '9')
//         )){
//             seenspecial = true
//         }

//         if(seenspecial){
//             if(str[i] >= '0' && str[i] <= '9'){
//                 return i
//             }
//         }

//         if(
//             (str[i] >= 'a' && str[i] <= 'z')||
//             (str[i] >= 'A' && str[i] <= 'Z')&&
//             seenspecial
//         ){
//             seenspecial = false
//         }
//     }
//     return -1
// }


// console.log(indexOfDigitAfterSpecialBeforeLetter("!3a"))
// console.log(indexOfDigitAfterSpecialBeforeLetter("@9#"))
// console.log(indexOfDigitAfterSpecialBeforeLetter("#a1"))
// console.log(indexOfDigitAfterSpecialBeforeLetter("1!2B"))

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 1
// 1
// -1
// 2







// 🧠 LEVEL +3 — Block Logic Practice

//>>>>>>>>>>>>>>>.. 🔹 Q1 — countDigitBlocks(str)
// Rules:
// Count how many separate digit blocks exist
// Continuous digits = 1 block
// Digits are 0–9

// function countDigitBlocks(str) {
//     let count = 0;
//     let block = false;

//     for (let char of str) {
//         if (char >= '0' && char <= '9' && !block) {
//             count++
//             block = true
//         } else if (!(char >= '0' && char <= '9')) {
//             block = false
//         }
//     }
//     return count
// }

// console.log(countDigitBlocks("12ab345c6"))
// console.log(countDigitBlocks("abc"))
// console.log(countDigitBlocks("9a8b7"))
// console.log(countDigitBlocks("12345"))   
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3
// 0
// 3
// 1


// >>>>>>>>>>>>>>>>>. 🔹 Q2 — countUppercaseBlocks(str)

// Rules:
// Count how many uppercase letter blocks exist
// Continuous uppercase letters = 1 block
// Uppercase = A–Z

// function countUppercaseBlocks(str){
//    let count = 0;
//    let block  = false;

//    for(let char of str){
//     if(char >= 'A' && char <= 'Z' && !block){
//         count++
//         block = true
//     }else if(!(char >= 'A' && char <= 'Z')){
//         block = false
//     }
//    }
//    return count
// }

// console.log(countUppercaseBlocks("AAaaBBcDDD")) 
// console.log(countUppercaseBlocks("abc")       ) 
// console.log(countUppercaseBlocks("A1B2C")     ) 
// console.log(countUppercaseBlocks("ABCD")      ) 
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3
// 0
// 3
// 1



// 🔹 Q3 — hasExactlyOneLowercaseBlock(str)

// Rules:
// Return true only if
// Exactly one lowercase block exists
// Else → false

// function hasExactlyOneLowercaseBlock(str) {
//     let block = false;
//     let count = 0
//     for (let char of str) {
//         if (char >= 'a' && char <= 'z' && !block) {
//             count++
//             block = true
//         }

//         if (!(char >= 'a' && char <= 'z')) {
//             block = false
//         }


//     }
//     if (count === 1) {
//         return true
//     } else return false


// }


// console.log(hasExactlyOneLowercaseBlock("AAaaBB"))
// console.log(hasExactlyOneLowercaseBlock("aaBBcc"))
// console.log(hasExactlyOneLowercaseBlock("ABC"))
// console.log(hasExactlyOneLowercaseBlock("a1A"))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// true
// false
// false
// true



// 🧠 LEVEL +3 — Multi-Condition Block Practice (NEW)

// >>>>>>>>>>>.🔹 Q1 — countLowercaseBlocksAfterUpper(str)

// Rules:

// A lowercase block counts only if it starts after an uppercase letter
// Continuous lowercase letters = 1 block
// Uppercase letters can appear multiple times

// function countLowercaseBlocksAfterUpper(str) {
//     let count = 0;
//     let lowerblock = false;
//     let seenupper = false

//     for (let char of str) {
//         if (char >= 'A' && char <= 'Z') {
//             seenupper = true
//         }

//         if (seenupper) {
//             if (char >= 'a' && char <= 'z' && !lowerblock) {
//                 count++
//                 lowerblock = true
//             } else if (!(char >= 'a' && char <= 'z')) {
//                 lowerblock = false
//             }
//         }
//     }
//     return count
// }

// console.log(countLowercaseBlocksAfterUpper("AaaBBccDdd"))
// console.log(countLowercaseBlocksAfterUpper("aaBBcc"))
// console.log(countLowercaseBlocksAfterUpper("A1b2c"))
// console.log(countLowercaseBlocksAfterUpper("ABC")) 
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3
// 1
// 2
// 0



// >>>>>>>>>>>.. 🔹 Q2 — hasExactlyTwoDigitBlocks(str)

// Rules:
// Return true only if exactly two digit blocks exist
// Continuous digits = 1 block
// Else return false

// function hasExactlyTwoDigitBlocks(str){
//     let digitblock = false;
//     let count = 0;

//     for(let char of str){
//         if(char >= '0' && char <= '9' && !digitblock){
//             count++
//             digitblock = true
//         }else if(!(char >= '0' && char <= '9')){
//             digitblock = false
//         }
//     }

//     if( count === 2){
//         return true
//     } else return false
// }

// console.log(hasExactlyTwoDigitBlocks("12ab34"))   
// console.log(hasExactlyTwoDigitBlocks("1a2b3") )   
// console.log(hasExactlyTwoDigitBlocks("1234")  )   
// console.log(hasExactlyTwoDigitBlocks("a1b22c"))   
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// true
// false
// false
// true


// 🔹 Q3 — firstUppercaseBlockLength(str)

// Rules:
// Find the first uppercase block
// Return its length
// If no uppercase block → return 0

// function firstUppercaseBlockLength(str) {
//     let count = 0;
//     let block = false
//     for (let char of str) {
//         if (char >= 'A' && char <= 'Z') {
//             count++
//             block = true
//         } else if (block) {
//             return count
//         }

//     }

//     return 0
// }

// console.log(firstUppercaseBlockLength("aaBBcDDD"))
// console.log(firstUppercaseBlockLength("abc"))
// console.log(firstUppercaseBlockLength("A1BC"))
// console.log(firstUppercaseBlockLength("XYZabc"))

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 0
// 1
// 3




// >>>>>>>>>>>>>>>>>>> Q2 — countDigitBlocks(str)

// Rules:
// A digit block = continuous digits (0–9)
// Count total digit blocks in the string
// Digits must be consecutive to form a block


// function countDigitBlocks(str) {

//     let count = 0;
//     let numblock = false;

//     for(let char of str){
//         if(char >= '0' && char <= '9' && !numblock){
//             count++
//             numblock = true
//         }else if(!( char >= '0' && char <= '9')){
//             numblock = false
//         }
//     }
//     return count
// }

// console.log(countDigitBlocks("a12b345c6"))
// console.log(countDigitBlocks("abc"))
// console.log(countDigitBlocks("12345"))
// console.log(countDigitBlocks("a1b2c3"))   
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3
// 0
// 1
// 3



// >>>>>>>>>>🔹 Q3 — countLowercaseBlocks(str)

// Rules:
// A lowercase block = continuous a–z
// Count lowercase blocks only
// Uppercase, digits, special characters break the block

// function countLowercaseBlocks(str) {
//     let count = 0;
//     let numblock = false;

//     for (let char of str) {
//         if (char >= 'a' && char <= 'z' && !numblock) {
//             count++
//             numblock = true
//         } else if (!(char >= 'a' && char <= 'z')) {
//             numblock = false
//         }
//     }
//     return count
// }

// console.log(countLowercaseBlocks("aaBBccdd"))
// console.log(countLowercaseBlocks("ABC"))
// console.log(countLowercaseBlocks("a1b2c"))
// console.log(countLowercaseBlocks("abCD"))   
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 0
// 3
// 1
// a

// >>>>>>>🔹 Q4 — countLowercaseBlocksAfterUpper(str)

// Rules:
// Start counting only after at least one uppercase letter appears
// Lowercase blocks before uppercase are ignored
// Continuous lowercase letters = 1 block

// function countLowercaseBlocksAfterUpper(str) {
//     let upper = false;
//     let count = 0;
//     let block = false;

//     for (let char of str) {
//         if (char >= 'A' && char <= 'Z') {
//             upper = true
//         }

//         if (upper) {
//             if (char >= 'a' && char <= 'z' && !block) {
//                 count++
//                 block = true
//             } else if (!(char >= 'a' && char <= 'z')) {
//                 block = false
//             }
//         }
//     }
//     return count
// }

// console.log(countLowercaseBlocksAfterUpper("AaaBBccDdd"))
// console.log(countLowercaseBlocksAfterUpper("aaBBcc"))
// console.log(countLowercaseBlocksAfterUpper("A1b2c"))
// console.log(countLowercaseBlocksAfterUpper("ABC"))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3
// 1
// 2
// 0


// >>>>>>>>>>>>>🔹 Q5 — countDigitBlocksBeforeLowercase(str)

// Rules:
// Count digit blocks only before any lowercase letter appears
// Once a lowercase letter appears → stop counting
// Continuous digits = 1 block

// function countDigitBlocksBeforeLowercase(str) {
//     let count = 0;
//     let block = false;

//     for (let char of str) {
//         if (char >= '0' && char <= '9' && !block) {
//             count++
//             block = true
//         }
//         if (!(char >= '0' && char <= '9')) {
//             block = false
//         }

//         if (char >= 'a' && char <= 'z') {
//             return count
//         }
//     }
//     return count
// }

// console.log(countDigitBlocksBeforeLowercase("12AB34c56"))
// console.log(countDigitBlocksBeforeLowercase("a123"))
// console.log(countDigitBlocksBeforeLowercase("99X88Y"))
// console.log(countDigitBlocksBeforeLowercase("123abc")) 
// ayan @ayan-LOQ - 15IAX9: ~/Coding/question solve$ node level3.js
// 2
// 0
// 2
// 1


// >>>>>>>>>>>>>>>>> 🔹 Q6 — firstUppercaseBlockLength(str)

// Rules:
// Find the first uppercase block
// Return its length
// If no uppercase block exists → return 0

// function firstUppercaseBlockLength(str) {
//     let count = 0;
//     let block = false;
//     for (let char of str) {
//         if (char >= 'A' && char <= 'Z') {
//             count++
//             block = true
//         } 
//         else if (block) {
//             return count
//         }
//     }
//     return count
// }

// console.log(firstUppercaseBlockLength("aaBBccDD"))
// console.log(firstUppercaseBlockLength("abc"))
// console.log(firstUppercaseBlockLength("A12BC"))
// console.log(firstUppercaseBlockLength("XXyyZZ"))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 0
// 1
// 2


// >>>>>>>>>>>>>>>>>> 🔹 Q7 — countLowercaseBlocksUntilSpecial(str)

// Rules:
// Count lowercase blocks
// Stop counting when a special character appears
// Special character = not letter and not digit

// function countLowercaseBlocksUntilSpecial(str) {
//     let count = 0;
//     let block = false;

//     for (let char of str) {
//         if (char >= 'a' && char <= 'z' && !block) {
//             count++
//             block = true
//         } else if (!(char >= 'a' && char <= 'z')) {
//             block = false
//         }

//         if (!(
//             (char >= 'a' && char <= 'z') ||
//             (char >= 'A' && char <= 'Z') ||
//             (char >= '0' && char <= '9')
//         )) {
//             return count
//         }
//     }
//     return count
// }


// console.log(countLowercaseBlocksUntilSpecial("aaBBcc@dd"))
// console.log(countLowercaseBlocksUntilSpecial("@abc"))
// console.log(countLowercaseBlocksUntilSpecial("ab12cd!"))
// console.log(countLowercaseBlocksUntilSpecial("ABC"))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 0
// 2
// 0


// >>>>>>>>>>>>>>>>>>> 🔹 Q8 — hasLowercaseBlockAfterUpper(str)

// Rules:
// Return true if any lowercase block appears after uppercase
// Otherwise return false
// Stop immediately once condition is satisfied

// function hasLowercaseBlockAfterUpper(str) {
//     let seenupper = false;
//     let lowerblock = false
//     for (let char of str) {
//         if (char >= 'A' && char <= 'Z') {
//             seenupper = true
//         }

//         if (char >= 'a' && char <= 'z' && !lowerblock) {
//             lowerblock = true
//         }
//         if (!(char >= 'a' && char <= 'z')) {
//             lowerblock = false
//         }

//         if (seenupper && lowerblock) {
//             return true
//         }
//     }
//     return false
// }

// console.log(hasLowercaseBlockAfterUpper("Aaa"))
// console.log(hasLowercaseBlockAfterUpper("aaBB"))
// console.log(hasLowercaseBlockAfterUpper("ABCd"))
// console.log(hasLowercaseBlockAfterUpper("123"))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// true
// false
// true
// false


// >>>>>>>>>>>>>>>>🔹 Q9 — countUppercaseBlocksAfterDigit(str)

// Rules:
// Count uppercase blocks
// An uppercase block counts only if it starts after a digit appears
// Continuous uppercase letters = 1 block

// function countUppercaseBlocksAfterDigit(str) {
//     let count = 0;
//     let seenDigit = false;
//     let block = false;

//     for(let char of str){
//         if(char >= '0' && char <= '9'){
//             seenDigit = true
//         }

//         if(seenDigit){
//             if(char >= 'A' && char <= 'Z' && !block){
//                 count++
//                 block = true
//             }else if(!(char >= 'A' && char <= 'Z')){
//                 block = false
//             }
//         }
//     }
//     return count
// }

// console.log(countUppercaseBlocksAfterDigit("1AA2BB"))
// console.log(countUppercaseBlocksAfterDigit("AA1BB"))
// console.log(countUppercaseBlocksAfterDigit("ABC"))
// console.log(countUppercaseBlocksAfterDigit("9A1BC"))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 1
// 0
// 2


// 🔹 Q10 — countDigitBlocksBetweenLetters(str)

// Rules:
// Count digit blocks
// A digit block counts only if it appears between letters
// Stop counting if a special character appears

// function countDigitBlocksBetweenLetters(str) {
//     let count = 0;
//     let block = false;
//     let seenletter = false



//     for (let char of str) {
//         let isletter = (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z');
//         let isdigit = (char >= '0' && char <= '9')

//         if (!isletter && !isdigit) {
//             return count;
//         }

//         if (isletter) {
//             seenletter = true;
//             block = false
//         } else if (isdigit && seenletter) {
//             if (!block) {
//                 count++
//                 block = true
//             }
//         }
//     }
//     return count
// }

// console.log(countDigitBlocksBetweenLetters("a12b34c"))
// console.log(countDigitBlocksBetweenLetters("1a23b"))
// console.log(countDigitBlocksBetweenLetters("a12@34b"))
// console.log(countDigitBlocksBetweenLetters("abc"))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 1
// 1
// 0


// >>>>>>>>>>>>>>>>>>> 🔹 Q11 — firstLowercaseBlockAfterUpperLength (Level-3)

// Rules

// Find the first lowercase block
// That block must start after at least one uppercase
// Return the length of that block
// If none → return 0
// function firstLowercaseBlockAfterUpperLength(str) {
//     let seenUpper = false;
//     let inBlock = false;
//     let count = 0;

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';

//         
//         if (isUpper) {

//             if (inBlock) return count; 

//             seenUpper = true;
//         } 

//         else if (isLower && seenUpper) {
//             inBlock = true;
//             count++;
//         } 

//         else {

//             if (inBlock) return count;
//         }
//     }

//     return count; 
// }

// console.log(firstLowercaseBlockAfterUpperLength("AAbbcc")) // 2
// console.log(firstLowercaseBlockAfterUpperLength("aaBBcc")) // 0
// console.log(firstLowercaseBlockAfterUpperLength("A1bc2"))  // 2
// console.log(firstLowercaseBlockAfterUpperLength("ABC"))    // 0
// console.log(firstLowercaseBlockAfterUpperLength("Aaa"))    // 3
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 4
// 2
// 2
// 0
// 2


// >>>>>>>>>>> 🔹 Q12 — countBlocksUntilSecondUppercase (Level-3)

// Rules
// Count blocks (lowercase / uppercase / digit)
// Stop counting when the second uppercase block starts
// Do not count the second uppercase block

// function countBlocksUntilSecondUppercase(str) {

//     let count = 0;
//     let secondupper = 0;
//     let currentblock = '';

//     for (let char of str) {
//         let type = (char >= 'A' && char <= 'Z') ? 'upper' :
//             (char >= 'a' && char <= 'z') ? 'lower' :
//                 (char >= '0' && char <= '9') ? 'digit' : 'special';

//         if (type !== currentblock) {
//             if (type === 'upper') {
//                 secondupper++

//                 if (secondupper === 2) return count;
//             }
//             count++
//             currentblock = type
//         }

//     }
//     return count
// }

// console.log(countBlocksUntilSecondUppercase("aaBBccDDdd")) // 3
// console.log(countBlocksUntilSecondUppercase("AA")) // 0
// console.log(countBlocksUntilSecondUppercase("aA1BBc")) // 2
// console.log(countBlocksUntilSecondUppercase("abc")) // 1
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3
// 1
// 3
// 1

// if(isdigit && isletter && secondupper){
//     return count
// }
// if (!isletter && !isdigit) {
//     count++;
//     block = true
// } else if(!isdigit && !isletter && !secondupper){
//     block = false
// }



// >>>>>>>>>>>>🔹 Q13 — hasDigitBlockAfterLowercaseBeforeUpper (Level-3)

// Rules

// Return true if:
// a lowercase block appears
// then a digit block appears
// before any uppercase block
// Stop immediately when result is known

// function hasDigitBlockAfterLowercaseBeforeUpper(str) {
//     let seenlower = false;
//     let block = false
//     let currentblock = ''

//     for(let char of str){

//         let type = 
//         (char >= 'a' && char <= 'z') ? 'lower' : 
//         (char >= '0' && char <= '9') ? 'digit' :
//         (char >= 'A' && char <= 'Z') ? 'upper' :'speacial';

//         if(type === 'upper'){
//             return false
//         }

//         if(type !== currentblock){
//             if(type === 'lower'){
//                 seenlower = true
//                 block = true
//             } else {
//                 block = false
//             }
//             currentblock = type
//         }

//         if(seenlower){
//             if(type ==='digit'){
//                 return true
//             }
//         }

//     }
//     return false
// }

// console.log(hasDigitBlockAfterLowercaseBeforeUpper("aa12BB")) // true
// console.log(hasDigitBlockAfterLowercaseBeforeUpper("12aaBB")) // false
// console.log(hasDigitBlockAfterLowercaseBeforeUpper("aaBB12")) // false
// console.log(hasDigitBlockAfterLowercaseBeforeUpper("aa12")) // true
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// true
// false
// false
// true




// >>>>>>>>>>>🔹 Q14 — countLowercaseBlocksAfterDigitUntilUpper (Level-3)

// Rules
// Start counting after a digit appears
// Count lowercase blocks
// Stop when an uppercase appears

// function countLowercaseBlocksAfterDigitUntilUpper(str) {
//     let count = 0;
//     let seenDigit = false;
//     let block = false

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';
//         const isdigit = char >= '0' && char <= '9'

//         if (isUpper){
//             return count;
//         }

//         if(isdigit){
//             seenDigit = true;
//         }

//         if(seenDigit){
//             if(isLower && !block){
//                 count++
//                 block = true
//             }else{
//                 block = false
//             }
//         }
//     }
//     return count
// }


// console.log(countLowercaseBlocksAfterDigitUntilUpper("1aaBB"))  // 1
// console.log(countLowercaseBlocksAfterDigitUntilUpper("aa1bbC"))  // 1
// console.log(countLowercaseBlocksAfterDigitUntilUpper("1a2bC"))  // 2
// console.log(countLowercaseBlocksAfterDigitUntilUpper("abc"))  // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 1
// 1
// 2
// 0


// >>>>>>>>>>🔹 Q15 — firstBlockTypeAfterSpecial (Level-3)

// Rules

// Special = not letter, not digit
// Find the first block that starts after a special
// Return:
// "lowercase"
// "uppercase"
// "digit"
// If no block → "none"

// function firstBlockTypeAfterSpecial(str) {
//     let seenspecial = false;
//     let currentblock = '';
//     let block = '';

//     for (let char of str) {

//         let type =
//             (char >= 'a' && char <= 'z') ? 'lower' :
//                 (char >= '0' && char <= '9') ? 'digit' :
//                     (char >= 'A' && char <= 'Z') ? 'upper' : 'speacial';



//         if (type === 'speacial') {
//             seenspecial = true;

//         }

//         if (type !== currentblock) {
//             block = true

//         } else {
//             block = false
//         }

//         if(seenspecial && type ==='lower') return 'lowercase';
//         if(seenspecial && type ==='digit') return 'digit';
//         if(seenspecial && type ==='upper') return 'uppercase';

//         currentblock = type
//     }
//     return "none"
// }

// console.log(firstBlockTypeAfterSpecial("@aaBB"))// "lowercase"
// console.log(firstBlockTypeAfterSpecial("!AA99"))// "uppercase"
// console.log(firstBlockTypeAfterSpecial("!123a"))// "digit"
// console.log(firstBlockTypeAfterSpecial("abc"))// "none"
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// lowercase
// uppercase
// digit
// none



// 🔹############ Q1 — countBlocksUntilDigit(str)
// Rules
// Count blocks (lowercase / uppercase)
// Stop counting when first digit block starts
// Do NOT count digit block

// function countBlocksUntilDigit(str) {
//     let count = 0;
//     let blocktype = ''

//     for (let char of str) {
//         let type = 
//             (char >= 'A' && char <= 'Z') ? 'upper' :
//             (char >= 'a' && char <= 'z') ? 'lower' :
//             (char >= '0' && char <= '9') ? 'digit' : 'special';


//         if (type === 'digit') {
//             return count
//         }

//         if (type !== blocktype) {
//             count++
//             blocktype = type
//         }

//     }
//     return count

// }

// console.log(countBlocksUntilDigit("aaBB12cc")) // 2
// console.log(countBlocksUntilDigit("abc123")) // 1
// console.log(countBlocksUntilDigit("AAaa")) // 2
// console.log(countBlocksUntilDigit("123aa")) // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 1
// 2
// 0


// >>>>>>>>>>>>🔹 Q2 — countLowercaseBlocksAfterUpper(str)
// Rules
// Count lowercase blocks
// Start counting only after an uppercase block appears

// function countLowercaseBlocksAfterUpper(str) {
//     let count = 0;
//     let seenupper = false;
//     let block = false

//     for (let char of str) {
//         if ((char >= 'A' && char <= 'Z')) {
//             seenupper = true
//             block = false
//             continue
//         }

//         if (seenupper && char >= 'a' && char <= 'z') {
//             if (!block) {
//                 count++
//                 block = true
//             }
//         } else {
//             block = false
//         }
//     }
//     return count
// }


// console.log(countLowercaseBlocksAfterUpper("AAaaBBcc")) // 2
// console.log(countLowercaseBlocksAfterUpper("aaBBcc")) // 1
// console.log(countLowercaseBlocksAfterUpper("abc")) // 0
// console.log(countLowercaseBlocksAfterUpper("A1a2b")) // 2
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 1
// 0
// 2


// >>>>>>>>>>>>>>>>🔹 Q3 — stopAtSecondLowercaseBlock(str)
// Rules
// Count blocks (any type)
// Stop counting when second lowercase block starts
// Do NOT count second lowercase block

// function stopAtSecondLowercaseBlock(str) {

//     let count = 0;
//     let curretblock = '';
//     let lowerblock = 0;

//     for (let char of str) {
//         let type =
//             (char >= 'A' && char <= 'Z') ? 'upper' :
//                 (char >= 'a' && char <= 'z') ? 'lower' :
//                     (char >= '0' && char <= '9') ? 'digit' : 'special'

//         if (type !== curretblock) {
//             if (type === 'lower') {
//                 lowerblock++
//                 if (lowerblock === 2) return count
//             }
//             count++
//             curretblock = type
//         }
//     }
//     return count

// }

// console.log(stopAtSecondLowercaseBlock("aaBBccDD"))
// console.log(stopAtSecondLowercaseBlock("AAaaBB"))
// console.log(stopAtSecondLowercaseBlock("aa"))
// console.log(stopAtSecondLowercaseBlock("ABC")) 
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 3
// 1
// 1




// 🟦 Q1 — countDigitBlocksAfterLowerBeforeUpper(str)

// Rules
// Start counting after a lowercase block appears
// Count digit blocks
// Stop immediately when an uppercase block appears
// Do NOT count the uppercase block

// function countDigitBlocksAfterLowerBeforeUpper(str) {
//     let count = 0;
//     let seenlower = false;
//     let block = false;

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';
//         const isdigit = char >= '0' && char <= '9';

//         if (isUpper) {
//             return count
//         }
//         if (isLower) {
//             seenlower = true
//         }

//         if (seenlower) {
//             if (isdigit && !block) {
//                 count++
//                 block = true
//             } else {
//                 block = false
//             }
//         }
//     }
//     return count
// }

// console.log(countDigitBlocksAfterLowerBeforeUpper("aa12BB")) // 1
// console.log(countDigitBlocksAfterLowerBeforeUpper("12aa34BB")) // 1
// console.log(countDigitBlocksAfterLowerBeforeUpper("aa1b2C")) // 2
// console.log(countDigitBlocksAfterLowerBeforeUpper("AA12")) // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 1
// 1
// 2
// 0



// // 🟦 Q2 — firstUppercaseBlockAfterDigit(str)

// // Rules

// // A digit block must appear first
// // Find the first uppercase block after that digit
// // Return the length of that uppercase block
// // If not found → return 0

// function firstUppercaseBlockAfterDigit(str) {
//     let count = 0;
//     let seenDigit = false;
//     let block = false;

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isdigit = char >= '0' && char <= '9';

//         if (isdigit) {
//             seenDigit = true
//         }

//         if (seenDigit) {
//             if (isUpper ) {
//                 count++
//                 block = true
//             } else if(block){
//                 return count
//             }
//         }

//     }
//     return count
// }

// console.log(firstUppercaseBlockAfterDigit("12AAbb")) // 2
// console.log(firstUppercaseBlockAfterDigit("aa1BBcc")) // 2
// console.log(firstUppercaseBlockAfterDigit("AA12bb")) // 0
// console.log(firstUppercaseBlockAfterDigit("123")) // 0

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 2
// 0
// 0


// 🟦 Q3 — hasLowercaseBlockBetweenDigitAndUpper(str)
// Rules

// Return true if:
// a digit block appears
// then a lowercase block appears
// before any uppercase block
// Stop immediately when result is known

// function hasLowercaseBlockBetweenDigitAndUpper(str) {
//     let seenDigit = false;
//     let block = false;

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';
//         const isdigit = char >= '0' && char <= '9';

//         if(isUpper){
//             return false
//         }

//         if(isdigit){
//             seenDigit = true
//         }

//         if(seenDigit){
//             if(isLower && !block){
//                 block = true
//             }else {
//                 block = false
//             }
//         }

//         if(seenDigit && isLower){
//             return true
//         }


//     }
//     return false
// }

// console.log(hasLowercaseBlockBetweenDigitAndUpper("12aaBB")) // true
// console.log(hasLowercaseBlockBetweenDigitAndUpper("aa12BB")) // false
// console.log(hasLowercaseBlockBetweenDigitAndUpper("12BBaa")) // false
// console.log(hasLowercaseBlockBetweenDigitAndUpper("12aa")) // true
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// true
// false
// false
// true


// 🔹>>>>>>>>>>>>>>>> Q1 — countUppercaseBlocksAfterLower(str)

// Rules
// Start counting after a lowercase block appears
// Count uppercase blocks
// Do NOT count lowercase or digit blocks

// function countUppercaseBlocksAfterLower(str) {
//     let seenlower = false;
//     let count = 0;
//     let block = false;

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';

//         if(isLower){
//             seenlower = true;
//         }

//         if(seenlower){
//             if(isUpper && !block){
//                 count++
//                 block = true
//             }else{
//                 block = false
//             }
//         }
//     }
//     return count
// }


// console.log(countUppercaseBlocksAfterLower("aaBBccDD")) // 2
// console.log(countUppercaseBlocksAfterLower("BBaaCC"))  // 1
// console.log(countUppercaseBlocksAfterLower("aa12BB"))  // 1
// console.log(countUppercaseBlocksAfterLower("ABC"))  // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 1
// 1
// 0



// 🔹 Q2 — stopAtSecondDigitBlock(str)

// Rules
// Count all blocks (lower / upper / digit)
// Stop counting when second digit block starts
// Do NOT count the second digit block

// function stopAtSecondDigitBlock(str) {
//     let count = 0;
//     let currentblock = ''
//     let digitblockblock = 0

//     for (let char of str) {
//         let type =
//             (char >= 'A' && char <= 'Z') ? 'upper' :
//                 (char >= 'a' && char <= 'z') ? 'lower' :
//                     (char >= '0' && char <= '9') ? 'digit' : 'special';

//         if (type !== currentblock) {

//             if (type === 'digit') {
//                 digitblockblock++
//                 if (digitblockblock === 2) return count
//             }
//             count++
//             currentblock = type

//         }


//     }
//     return count
// }

// console.log(stopAtSecondDigitBlock("aa11BB22cc")) // 3
// console.log(stopAtSecondDigitBlock("11AA22")) // 1
// console.log(stopAtSecondDigitBlock("abc")) // 1
// console.log(stopAtSecondDigitBlock("1a2b")) // 2
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3
// 2
// 1
// 2
// i think your this console.log(stopAtSecondDigitBlock("11AA22"))  1 example is wrong because 11 =1 and AA = 2 so answer should be 2 not 1



// 🔹 Q3 — hasUppercaseBlockAfterDigitBeforeLower(str)

// Rules

// Return true if:
// a digit block appears
// then an uppercase block appears
// before any lowercase block
// Stop immediately when result is known

// function hasUppercaseBlockAfterDigitBeforeLower(str) {
//     let seenDigit = false;
//     let block = false;
//     let seenupper =false

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';
//         const isdigit = char >= '0' && char <= '9';

//         if(isdigit){
//             seenDigit = true;
//         }

//         if(seenDigit){
//             if(isUpper && !block){
//                 block =true
//                 seenupper = true
//             }else{
//                 block = false
//             }

//         }
//         if(seenupper && isLower){
//             return true
//         }

//     }
//     return false
// }

// console.log(hasUppercaseBlockAfterDigitBeforeLower("12AAaa")) // true
// console.log(hasUppercaseBlockAfterDigitBeforeLower("AA12BB")) // false
// console.log(hasUppercaseBlockAfterDigitBeforeLower("12aaBB")) // false
// console.log(hasUppercaseBlockAfterDigitBeforeLower("12BB")  ) // true

// 🔹 Q4 — countLowercaseBlocksUntilUpper(str)

// Rules
// Count lowercase blocks
// Stop counting when first uppercase block starts
// Do NOT count uppercase block

// function countLowercaseBlocksUntilUpper(str) {
//     let count = 0;
//     let block = false;

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';

//         if (isUpper) {
//             return count
//         }

//         if (isLower && !block) {
//             count++
//             block = true
//         } else block = false
//     }
//     return count
// }

// console.log(countLowercaseBlocksUntilUpper("aaBBcc"))// 1
// console.log(countLowercaseBlocksUntilUpper("aa12bbCC"))// 2
// console.log(countLowercaseBlocksUntilUpper("ABC"))// 0
// console.log(countLowercaseBlocksUntilUpper("aa"))// 1
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 1
// 2
// 0
// 1

// 🔹 Q5 — firstDigitBlockLengthAfterLower(str)

// Rules

// A lowercase block must appear first
// Find the first digit block after it
// Return the length of that digit block
// If not found → return 0

// function firstDigitBlockLengthAfterLower(str) {
//     let count = 0;
//     let seenlower = false;
//     let block = false

//     for (let char of str) {
//         const isLower = char >= 'a' && char <= 'z';
//         const isdigit = char >= '0' && char <= '9';

//         if(isLower){
//             seenlower = true
//         }

//         if(seenlower){
//             if(isdigit){
//                 count++
//                 block = true
//             } else if(block){
//                 return count
//             }
//         }

//     }
//     return count
// }

// console.log(firstDigitBlockLengthAfterLower("aa123BB")) // 3
// console.log(firstDigitBlockLengthAfterLower("AA12")) // 0
// console.log(firstDigitBlockLengthAfterLower("aa1b22")) // 1
// console.log(firstDigitBlockLengthAfterLower("aaBB")) // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3
// 0
// 1
// 0


// 🧩 Problem — countValidBlocksAfterSpecial(str)
// Rules (read CAREFULLY):

// A special character (anything not letter or digit) must appear first
// After the FIRST special block ends, start processing
// Count ONLY these blocks:
// uppercase blocks
// digit blocks
// DO NOT count:
// lowercase blocks
// special blocks
// STOP IMMEDIATELY when:
// a lowercase block appears
// Return the count

// function countValidBlocksAfterSpecial(str) {
//     let count = 0;
//     let seenspecial = false;
//     let currentblock = '';


//     for (let char of str) {
//         let type =
//             (char >= 'A' && char <= 'Z') ? 'upper' :
//                 (char >= 'a' && char <= 'z') ? 'lower' :
//                     (char >= '0' && char <= '9') ? 'digit' : 'special';



//         if (type === 'special') {
//             seenspecial = true
//         }

//         if (seenspecial && type === 'lower') {
//             return count
//         }

//         if (type !== currentblock) {
//             if (seenspecial &&  type !== 'special' && (type === 'upper' || type === 'digit')) {
//                 count++
//             } else block = false

//             currentblock = type
//         }


//     }
//     return count
// }

// console.log(countValidBlocksAfterSpecial("@@AA11BB"))   // 3  
// console.log(countValidBlocksAfterSpecial("!!AAaa11"))   // 1  
// console.log(countValidBlocksAfterSpecial("@@123ABC"))  // 2
// console.log(countValidBlocksAfterSpecial("AA@@11BB"))   // 0  
// console.log(countValidBlocksAfterSpecial("@@aaBB"))   // 0  
// console.log(countValidBlocksAfterSpecial("$$11AA##BB"))   // 2  
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3
// 1
// 2
// 2
// 0
// 3


// 🔹 Q1 — countDigitBlocksBetweenLowerAndUpper(str)

// Rules

// A lowercase block must appear first
// Start counting digit blocks after that lowercase block
// Stop counting when an uppercase block appears
// Do NOT count the uppercase block

// function countDigitBlocksBetweenLowerAndUpper(str) {
//     let count = 0;
//     let seenlower = false;
//     let digitblock = false;

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';
//         const isdigit = char >= '0' && char <= '9';

//         if (isLower) {
//             seenlower = true;
//         }

//         if (seenlower && isUpper) return count;

//         if (seenlower) {
//             if (isdigit && !digitblock) {
//                 count++
//                 digitblock = true
//             } else digitblock = false
//         }

//     }
//     return count
// }

// console.log(countDigitBlocksBetweenLowerAndUpper("aa11bb22CC")) // 2
// console.log(countDigitBlocksBetweenLowerAndUpper("11aa22BB")) // 1
// console.log(countDigitBlocksBetweenLowerAndUpper("aaBB11")) // 0
// console.log(countDigitBlocksBetweenLowerAndUpper("aa12")) // 1
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 1
// 0
// 1



// 🔹 Q2 — firstLowercaseBlockLengthAfterDigitBeforeUpper(str)

// Rules

// A digit block must appear first
// Find the first lowercase block
// It must appear before any uppercase
// Return its length
// If not found → return 0

// function firstLowercaseBlockLengthAfterDigitBeforeUpper(str) {
//     let seenDigit = false;
//     let count = 0;
//     let lowerblock = false;

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';
//         const isdigit = char >= '0' && char <= '9';

//         if (isdigit) {
//             seenDigit = true;
//         }



//         if (seenDigit) {
//             if (isLower) {
//                 count++
//                 lowerblock = true
//             }else if(lowerblock){
//                 return count
//             }

//         }
//         if (seenDigit && isUpper) return count
//     }
//     return count
// }

// console.log(firstLowercaseBlockLengthAfterDigitBeforeUpper("11aaBB")) // 2
// console.log(firstLowercaseBlockLengthAfterDigitBeforeUpper("aa11bb")) // 0
// console.log(firstLowercaseBlockLengthAfterDigitBeforeUpper("11AAaa")) // 0
// console.log(firstLowercaseBlockLengthAfterDigitBeforeUpper("11a2bC")) // 1
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 2
// 0
// 1

// 🔹 Q3 — hasUppercaseBlockAfterLowerBeforeDigit(str)

// Rules

// A lowercase block must appear
// Then an uppercase block must appear
// This must happen before any digit block
// Return true / false
// Stop as soon as result is known
// function hasUppercaseBlockAfterLowerBeforeDigit(str) {

//     let seenLower = false;
//     let seenUpper = false;

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';
//         const isDigit = char >= '0' && char <= '9';

//         // digit ends the game
//         if (isDigit) {
//             return seenLower && seenUpper;
//         }

//         if (isLower) {
//             seenLower = true;
//         }

//         if (seenLower && isUpper) {
//             seenUpper = true;
//         }
//     }

//     // no digit appeared
//     return seenLower && seenUpper;
// }


// console.log(hasUppercaseBlockAfterLowerBeforeDigit("aaBB12")) // true
// console.log(hasUppercaseBlockAfterLowerBeforeDigit("BBaa12")) // false
// console.log(hasUppercaseBlockAfterLowerBeforeDigit("aa12BB")) // false
// console.log(hasUppercaseBlockAfterLowerBeforeDigit("aaBB")) // true
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// true
// false
// false
// true


// 🔹 Q4 — countAllBlocksUntilSecondLowercaseBlock(str)

// Rules
// Count all blocks (lower / upper / digit)
// Stop counting when second lowercase block starts
// Do NOT count the second lowercase block

// function countAllBlocksUntilSecondLowercaseBlock(str) {
//     let count = 0;
//     let currentblock = '';
//     let countLower = 0;

//     for (let char of str) {
//         let type =
//             (char >= 'A' && char <= 'Z') ? 'upper' :
//                 (char >= 'a' && char <= 'z') ? 'lower' :
//                     (char >= '0' && char <= '9') ? 'digit' : 'special';

//                     if(type === 'lower'){
//                         seenLower = true;
//                     }

//                     if(type !== currentblock){
//                         if(type === 'lower'){
//                         countLower ++
//                          if(countLower === 2)return count   
//                         }
//                         count++
//                         currentblock = type
//                     }

//     }
//     return count
// }

// console.log(countAllBlocksUntilSecondLowercaseBlock("AA11bbCCdd")) // 3
// console.log(countAllBlocksUntilSecondLowercaseBlock("bbAA")) // 0
// console.log(countAllBlocksUntilSecondLowercaseBlock("AA11bb")) // 2
// console.log(countAllBlocksUntilSecondLowercaseBlock("AA11")) // 2
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 4
// 2
// 3
// 2
// "AA11bbCCdd"
//     "AA" → uppercase block → count = 1
//     "11" → digit block → count = 2
//     "bb" → first lowercase block → count = 3
//     "CC" → uppercase block → count = 4
//     "dd" → second lwercase block → stop, do not count "dd".
//     👉 Answer = 4 ✅
// "bbAA"
//     "bb" → first lowercase block → count = 1
//     "AA" → uppercase block → count = 2
//     No second lowerase block → stop never triggered.
//     👉 Answer = 2 ✅
// "AA11bb"
//     "AA" → uppercase block → count = 1
//     "11" → digit block → count = 2
//     "bb" → first lowercase block → count = 3
//     No second lowercase block → stop never triggered.
//     👉 Answer = 3 (not 2) ❌
// "AA11"
//     "AA" → uppercase block → count = 1
//     "11" → digit block → count = 2
//     No lowercase blcks at all.
//     👉 Answer = 2 ✅
// ✔️ Final Correct Outputs:
//     "AA11bbCCdd" → 4
//     "bbAA" → 2
//     "AA11bb" → 3
//     "AA11" → 2



// 🔹 Q5 — firstBlockTypeAfterDigitBeforeSpecial(str)

// Rules

// A digit block must appear first
// Find the first block after it
// It must appear before any special character
// Return:
// "lowercase"
// "uppercase"
// "digit"
// If none → "none"

// function firstBlockTypeAfterDigitBeforeSpecial(str) {
//     let seenDigit = false;
//     let currentblock = ''
//     let block = true
//     let seenspecial = false;

//     for (let char of str) {
//         let type =
//             (char >= 'A' && char <= 'Z') ? 'upper' :
//                 (char >= 'a' && char <= 'z') ? 'lower' :
//                     (char >= '0' && char <= '9') ? 'digit' : 'special';

//         if (type === 'digit') {
//             seenDigit = true;
//         }

//         if (type === 'special') {
//             seenspecial = true;
//         }

//         if (type !== currentblock) {
//             block = true
//         } else {
//             block = false
//         }


//         if (seenDigit && type === 'upper') return 'uppercase';
//         if (seenDigit && type === 'lower') return 'lowercase';
//         if (seenDigit && type === 'digit') return 'digit';
//         currentblock = type
//     }
//     return 'none'
// }

// console.log(firstBlockTypeAfterDigitBeforeSpecial("11aa@@")) // "lowercase"
// console.log(firstBlockTypeAfterDigitBeforeSpecial("11AA!!")) // "uppercase"
// console.log(firstBlockTypeAfterDigitBeforeSpecial("11@@AA")) // "none"
// console.log(firstBlockTypeAfterDigitBeforeSpecial("AA11bb")) // "lowercase"




// 🔹 PATTERN 1 — Seen-Before (Flags)
// Q1.1

// Return true if a digit appears after at least one uppercase letter.

// function hasDigitAfterUpper(str){
//     let seenUpper = false;
//     let seenDigit = false;

//     for(let char of str){
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isDigit = char >= '0' && char <= '9';

//         if(isDigit){
//             return seenUpper
//         }
//         if(isUpper){
//             seenUpper = true;
//         }
//         if(isDigit){
//             seenDigit = true
//         }

//     }
//     return seenUpper &&  seenDigit
// }

// console.log(hasDigitAfterUpper("AA9"))      // true
// console.log(hasDigitAfterUpper("9AA"))      // false
// console.log(hasDigitAfterUpper("aaA"))      // false
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// true
// false
// false


// Q1.2

// Return the count of lowercase letters that appear after any digit.

// function countLowerAfterDigit(str) {
//     let count = 0;
//     let seenDigit = false;

//     for (let char of str) {
//         const isLower = char >= 'a' && char <= 'z';
//         const isDigit = char >= '0' && char <= '9';

//         if (isDigit) {
//             seenDigit = true
//         }

//         if (isLower && seenDigit) {
//             count++

//         }
//     }
//     return count
// }

// console.log(countLowerAfterDigit("1a2bc"))  // 3
// console.log(countLowerAfterDigit("abc1")) // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3
// 0


// >>>>>>>>>>>> 🔹 PATTERN 2 — Order Enforcement (A → B → C)
// Q2.1
// Return true if a lowercase block appears after digits but before uppercase.
// function lowerAfterDigitBeforeUpper(str) {
//     let seenDigit = false;
//     let seenLowerAfterDigit = false;

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';
//         const isDigit = char >= '0' && char <= '9';

//         if (isDigit) {
//             seenDigit = true;
//         }

//         if (seenDigit && isLower) {
//             seenLowerAfterDigit = true;
//         }

//         if (seenDigit && seenLowerAfterDigit && isUpper) {
//             return true;
//         }
//     }

//     return false;
// }
// console.log(lowerAfterDigitBeforeUpper("11aaBB")) // true
// console.log(lowerAfterDigitBeforeUpper("aa11BB")) // false
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// true
// false


// Q2.2
// Return true if uppercase appears only after lowercase and before digits.

// function upperAfterLowerBeforeDigit(str) {
//     let seenlower = false;
//     let seenLowerAfterupper = false;

//     for(let char of str){
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';
//         const isDigit = char >= '0' && char <= '9';

//         if(isLower){
//             seenlower = true;
//         }
//         if(seenlower && isUpper){
//             seenLowerAfterupper = true
//         }

//         if(seenlower && seenLowerAfterupper && isDigit){
//             return true
//         }

//     }
//     return false
// }

// console.log(upperAfterLowerBeforeDigit("aaBB11")) // true
// console.log(upperAfterLowerBeforeDigit("BBaa11")) // false
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// true
// false


// >>>>>>>>>>🔹 PATTERN 3 — Block / Group Detection
// Q3.1
// Return the length of the first uppercase block.

// function firstUpperBlockLength(str){
//     let seenupperblock = false;
//     let count = 0 ;

//     for(let char of str){
//         const isUpper = char >= 'A' && char <= 'Z';

//         if(isUpper){
//             seenupperblock = true
//             count++
//         }else if(seenupperblock) return count
//     }
//     return count
// }

// console.log(firstUpperBlockLength("aaBBBcc")) // 3
// console.log(firstUpperBlockLength("aa")     ) // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3
// 0


// Q3.2
// Count how many letter blocks exist (uppercase or lowercase).

// function countLetterBlocks(str) {
//     let count = 0
//     let letterblock = false

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';

//         if (isUpper || isLower){
//             if(!letterblock){
//                 count++
//             letterblock = true
//             }else letterblock = false
//         }
//     }
//     return count
// }

// console.log(countLetterBlocks("AA11bbCC")) // 3
// console.log(countLetterBlocks("123"))// 0

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3
// 0



// >>>>>>>>>>>>>> 🔹 PATTERN 4 — Break-Once / Invalid-Once
// Q4.1
// Count digits until the first lowercase appears.

// function countDigitsUntilLower(str) {
//     let count = 0;

//     for (let char of str) {

//         const isLower = char >= 'a' && char <= 'z';
//         const isDigit = char >= '0' && char <= '9';

//         if(isLower) return count;

//         if(isDigit){
//             count++
//         }
//     }
//     return count
// }

// console.log(countDigitsUntilLower("12A3b9")) // 3
// console.log(countDigitsUntilLower("abc"))// 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3
// 0

// Q4.2
// Return true if uppercase appears before any digit, else stop.

// function upperBeforeDigit(str) {
//     let seenupper = false;

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isDigit = char >= '0' && char <= '9';

//         if(isUpper){
//             seenupper = true
//         }
//         if(seenupper && isDigit){
//             return true
//         }

//     }
//     return false
// }

// console.log(upperBeforeDigit("AA1")) // true
// console.log(upperBeforeDigit("1AA")) // false
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// true
// false




// 🔹 PATTERN 5 — Conditional Counting
// Q5.1
// Count uppercase letters only after the first digit.

// function countUpperAfterDigit(str) {
//     let seenDigit = false;
//     let count = 0;

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isDigit = char >= '0' && char <= '9';

//         if(isDigit){
//             seenDigit = true
//         }

//         if(seenDigit){
//             if(isUpper){
//                 count++
//             }
//         }

//     }
//     return count
// }

// console.log(countUpperAfterDigit("1A2BB")) // 3
// console.log(countUpperAfterDigit("AA1"))// 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3
// 0


// Q5.2

// Count digits that appear inside a lowercase block.

// function digitsInsideLower(str) {
//     let insidelower = false;
//     let count = 0

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';
//         const isDigit = char >= '0' && char <= '9';

//         if(isLower){
//             insidelower = true
//         }else if(isUpper){
//             insidelower = false
//         }

//         if(insidelower && isDigit){
//             count++
//         }

//     }
//     return count
// }

// console.log( digitsInsideLower("aa1b2C")) // 2
// console.log(digitsInsideLower("AA12")  )// 0
// yan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 0

// 🔹 PATTERN 6 — Reset State
// Q6.1
// Count lowercase letters, but reset count when digit appears.

// function countLowerResetOnDigit(str){

//     let count = 0;

//     for(let char of str){

//         const isLower = char >= 'a' && char <= 'z';
//         const isDigit = char >= '0' && char <= '9';

//         if(isLower){
//             count++
//         }
//         if(isDigit){
//             count =0
//         }

//     }
//     return count
// }

// console.log(countLowerResetOnDigit("aa1bb2ccc")) // 3
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3



// Q6.2
// Return length of the last uppercase block.

// function lastUpperBlockLength(str) {
//     let count = 0;

//     for(let char of str){
//         const isUpper = char >= 'A' && char <= 'Z';

//         if(!isUpper){
//             count = 0
//         }else if(isUpper){
//             count++
//         }
//     }
//     return count
// }

// console.log(lastUpperBlockLength("AA11BB22CCC")) // 3
// console.log(lastUpperBlockLength("aa"))// 0
// /ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3
// 0


// >>>>>>>>>>>>>🔹 PATTERN 7 — Early Exit (Return Fast)
// Q7.1
// Return index of first digit, stop immediately.

// function firstDigitIndex(str) {
//     let seenDigit = false;

//     for (let i = 0; i < str.length; i++) {
//         if(str[i] >= '0' && str[i] <= '9'){
//             seenDigit = true
//         }
//         if(seenDigit){
//             return i
//         }
//     }
//     return -1
// }

// console.log(firstDigitIndex("aa3bb2")) // 2
// console.log(firstDigitIndex("abc"))// -1
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// -1

// Q7.2
// Return true if lowercase appears after uppercase, stop early.

// function lowerAfterUpper(str) {
//     let seenupper = false;

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';

//         if(isUpper){
//             seenupper = true;
//         }
//         if(seenupper){
//             if(isLower){
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(lowerAfterUpper("AAa")) // true
// console.log(lowerAfterUpper("aAA")) // false

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// true
// false


// 🔹 PATTERN 8 — Previous + Current Relation
// Q8.1
// Count how many times a digit is immediately followed by a letter.

// function digitFollowedByLetter(str){
//     let seenletter = false;
//     let count = 0;

//     for(let char of str){
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';
//          const isDigit = char >= '0' && char <= '9';

//          if(isUpper || isLower){
//             seenletter = true
//          }

//         if(seenletter && isDigit){
//             count ++
//         } 

//     }
//     return count
// }

// console.log(digitFollowedByLetter("1a2B3_")) // 2
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2


// Q8.2
// Return true if two same-type characters appear consecutively.

// function sameTypeAdjacent(str) {
//     let last = '';

//     for (let char of str) {
//         let type =
//             (char >= 'A' && char <= 'Z') ? 'upper' :
//                 (char >= 'a' && char <= 'z') ? 'lower' :
//                     (char >= '0' && char <= '9') ? 'digit' : 'special';

//         if (type === last) {
//             return true
//         }

//         last = type
//     }
//     return false
// }

// console.log(sameTypeAdjacent("AAbb")) // true
// console.log(sameTypeAdjacent("A1b")) // false
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// true
// false


// >>>>>>>>>>>>>>> 🔹 LEVEL 3 — PRACTICE SET (Exam-style)
// 🧩 Pattern 1 — State Tracking (inside / outside)
// Q1.1
// Count digits that appear inside an uppercase block.

// function countDigitsInsideUpper(str) {
//     let inupper = false;
//     let count = 0

//     for (let char of str) {

//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';
//         const isDigit = char >= '0' && char <= '9';

//         if (isUpper) {
//             inupper = true
//         } else if (isLower) {
//             inupper = false
//         }

//         if (inupper && isDigit) {
//             count++
//         }
//     }
//     return count

// }

// console.log(countDigitsInsideUpper("AA1B2c3")) // 2
// console.log(countDigitsInsideUpper("aa12BB3")) // 1
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 1



// Q1.2
// Return true if a lowercase letter appears inside a digit block.

// function lowerInsideDigit(str){
//     let indigit = false;
//     for(let char of str){
//         const isLower = char >= 'a' && char <= 'z';
//         const isDigit = char >= '0' && char <= '9';
//         const isUpper = char >= 'A' && char <= 'Z';
//         if(isDigit){
//             indigit = true
//         }

//         if(indigit && isLower){
//             return true
//         }

//         if(isUpper){
//             indigit = false
//         }
//     }
//     return false

// }

// console.log(lowerInsideDigit("11a22")) // true
// console.log(lowerInsideDigit("a1b2") ) // false
// console.log(lowerInsideDigit("a b"));   // false
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// true
// true
// false

// 🧩 Pattern 2 — Block Length Tracking

// Q2.1
// Return the length of the first lowercase block.

// function firstLowerBlockLength(str) {
//     let lowerblock = false;

//     for (let i = 0; i < str.length; i++) {
//         const isLower = str[i] >= 'a' && str[i] <= 'z';

//         if(isLower){
//             lowerblock = true
//             return i
//         }else lowerblock = false
//     }
//     return 0
// }

// console.log(firstLowerBlockLength("AAaaBB")) // 2
// console.log(firstLowerBlockLength("AA11")  ) // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 0

// Q2.2
// Return the length of the longest digit block.

// function longestDigitBlock(str) {
//     let currentcount = 0;
//     let maxcount = 0
//     for (let char of str) {
//         const isDigit = char >= '0' && char <= '9';

//         if (isDigit) {
//             currentcount++
//         } else {
//             currentcount = 0
//         }

//         maxcount = Math.max(maxcount, currentcount)
//     }
//     return maxcount
// }

// console.log(longestDigitBlock("a12b333c4")) // 3
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3


// 🧩 Pattern 3 — Reset on Condition

// Q3.1
// Count letters, but reset count when a digit appears.
// Return final count.

// function countLettersResetOnDigit(str){
//     let count =0
//     for(let char of str){
//         const isDigit = char >= '0' && char <= '9';
//         const isletter = (char >= 'A' && char <= 'Z'|| char >= 'a' && char <= 'z');

//         if(isletter){
//             count++
//         }
//         if(isDigit){
//             count = 0
//         }
//     }
//     return count
// }

// console.log(countLettersResetOnDigit("ab1cde")) // 3
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3

// Q3.2
// Return the length of the last lowercase block.

// function lastLowerBlockLength(str) {
//     let count = 0;

//     for (let char of str) {
//         const isLower = char >= 'a' && char <= 'z';

//         if (isLower) {
//             count++
//         } else if (!isLower) {
//             count = 0
//         }
//     }
//     return count
// }

// console.log(lastLowerBlockLength("AAaaBBcc")) // 2
// console.log(lastLowerBlockLength("AA")) // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 0

// 🧩 Pattern 4 — Seen Flag

// Q4.1
// Return true if a digit appears after a lowercase letter.

// function digitAfterLower(str) {
//     let seenLower = false;

//     for (let char of str) {
//         const isLower = char >= 'a' && char <= 'z';
//         const isDigit = char >= '0' && char <= '9';

//         if(isLower){
//             seenLower = true
//         }
//         if(seenLower && isDigit){
//             return true
//         }
//     }
//     return false
// }

// console.log(digitAfterLower("a1")) // true
// console.log(digitAfterLower("1a")) // false
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// true
// false

// Q4.2
// Count uppercase letters only after the first digit appears.

// function upperAfterDigit(str) {
//     let count = 0;
//     let seenDigit = false

//     for (let char of str) {
//         const isDigit = char >= '0' && char <= '9';
//         const isUpper = char >= 'A' && char <= 'Z';

//         if(isDigit){
//             seenDigit = true
//         }

//         if(seenDigit){
//             if(isUpper){
//                 count++
//             }
//         }
//     }
//     return count
// }

// console.log(upperAfterDigit("a1BCdE")) // 3
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3


// 🧩 Pattern 5 — Conditional Counting

// Q5.1
// Count special characters that appear outside letter blocks.

// function specialOutsideLetters(str) {
//     let count = 0;

//     for (let char of str) {
//         let type =
//             (char >= 'A' && char <= 'Z') ? 'upper' :
//                 (char >= 'a' && char <= 'z') ? 'lower' :
//                     (char >= '0' && char <= '9') ? 'digit' : 'special';


//         if (type === 'upper' || type === 'lower') {
//             count++
//         }else if(type === 'special'){
//             return count
//         }

//     }
//     return count
// }

// console.log(specialOutsideLetters("ab@#c$")) // 2
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2

// Q5.2
// Count digits that appear inside lowercase blocks.

// function digitsInsideLower(str) {
//     let count = 0;
//     let inlower = false;

//     for (let char of str) {
//         const isDigit = char >= '0' && char <= '9';
//         const islower = char >= 'a' && char <= 'z';

//         if (islower) inlower = true;

//         if (inlower && isDigit) {
//             count++
//         }
//     }
//     return count
// }

// console.log(digitsInsideLower("aa1b2C")) // 2
// console.log(digitsInsideLower("AA12")) // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 0


// 🧩 Pattern 6 — First vs Last Block

// Q6.1
// Return length of the first uppercase block.

// function firstUpperBlockLength(str){
//     let count = 0;


//     for(let char of str){
//          const isUpper = char >= 'A' && char <= 'Z';

//          if(isUpper){
//             count++
//          }else if(!isUpper){
//             return count
//          }

//     }
//     return count
// }

// console.log(firstUpperBlockLength("AA11BB")) // 2
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2



// Q6.2
// Return length of the last uppercase block.

// function lastUpperBlockLength(str){
//     let count = 0;

//     for(let char of str){
//         const isUpper = char >= 'A' && char <= 'Z';

//         if(!isUpper){
//             count = 0
//         }else if(isUpper){
//             count++
//         }
//     }
//     return count
// }

// console.log(lastUpperBlockLength("AA11BB22CCC")) // 3
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 3


// 🧩 Pattern 7 — Early Exit (Return Fast)

// Q7.1
// Return index of the first digit, stop immediately.

// function firstDigitIndex(str){

//     for(let i = 0; i <str.length; i++){

//          if(str[i] >= '0' &&str[i] <= '9'){
//             return i
//          }
//     }
//     return -1
// }

// console.log(firstDigitIndex("aa3bb2")) // 2
// console.log(firstDigitIndex("abc")   )// -1
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// -1

// Q7.2
// Return true if lowercase appears after uppercase (stop early).

// function lowerAfterUpper(str) {
//     let seenupper = false;

//     for (let char of str) {
//         const isLower = char >= 'a' && char <= 'z';
//         const isUpper = char >= 'A' && char <= 'Z';

//         if(isUpper){
//             seenupper = true;
//         }
//         if(seenupper && isLower){
//             return true
//         }
//     }
//     return false
// }

// console.log(lowerAfterUpper("AAa")) // true
// console.log(lowerAfterUpper("aAA")) // false

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// true
// false

// 🧩 Pattern 8 — Previous + Current Relation

// Q8.1
// Count how many times a digit is immediately followed by a letter.

// function digitFollowedByLetter(str) {
//     let seenletter = false;
//     let count = 0;

//     for (let char of str) {
//         const isDigit = char >= '0' && char <= '9';
//         const isletter = (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z');

//         if(isletter){
//             seenletter = true
//         }

//         if(seenletter && isDigit){
//             count++
//         }
//     }
//     return count
// }

// console.log(digitFollowedByLetter("1a2B3_")) // 2
// console.log(digitFollowedByLetter("1a2B_")) // 1
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// 2
// 1


// Q8.2
// Return true if two same-type characters appear consecutively.

// function sameTypeAdjacent(str){
//     let last = '';

//     for(let char of str){
//          let type =
//             (char >= 'A' && char <= 'Z') ? 'upper' :
//                 (char >= 'a' && char <= 'z') ? 'lower' :
//                     (char >= '0' && char <= '9') ? 'digit' : 'special';


//         if(type === last){
//             return true
//         }

//         last = type
//     }
//     return false
// } 

// console.log(sameTypeAdjacent("AAbb")) // true
// console.log(sameTypeAdjacent("A1b") ) // false
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level3.js 
// true
// false