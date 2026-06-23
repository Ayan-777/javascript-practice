// >>>>>>>>>> Q1 — startsWithUpper(str)

// Return true if the string starts with an uppercase letter, else false.

// function startsWithUpper(str){
//     let first = str[0]
//     if(first >= 'A' && first<= 'Z'){
//         return true
//     }
//     return false
// } 

// console.log(startsWithUpper("Hello"));
// console.log(startsWithUpper("hello"));
// console.log(startsWithUpper("1Hello"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// true
// false
// false




// >>>>>>>>>> Q2 — endsWithDigit(str)

// Return true if the string ends with a digit.

// function endsWithDigit(str){
//     let last = str[str.length - 1];
//         if(last >= '0' && last<= '9'){
//         return true
//     }
//     return false
// }

// console.log(endsWithDigit("file9"));
// console.log(endsWithDigit("file"));
// console.log(endsWithDigit("hi!"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// true
// false
// false


// >>>>>>>>>>>> Q3 — countVowels(str)

// Count vowels (a e i o u), case-insensitive.

// function countVowels(str){
//     let vowels = ['a','e','i','o','u'];
//     let count = 0;

//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             count++
//         }
//     }
//     return count
// }

// console.log(countVowels("Education"));
// console.log(countVowels("JS"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// 5
// 0



// >>>>>>>>>>>> Q4 — countConsonants(str)

// Count only consonant letters.
// Ignore digits, spaces, symbols.

// countConsonants("I love JS 123!")  // 4

// function countConsonants(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;

//     for (let char of str.toLowerCase()) {
//         if ((char >= 'a' && char <= 'z') &&
//             !vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count

// }

// console.log(countConsonants("I love JS 123!"));

// // ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// // 4


// >>>>>>>>>>>>>> Q5 — firstDigit(str)

// Return the first digit in the string.
// If none → null.


// function firstDigit(str){
//     for(let digit of str){
//         if(digit >= '0' && digit <= '9'){
//             return digit
//         }
//     }
//     return null
// }

// console.log(firstDigit("ab3cd9"));
// console.log(firstDigit("hello"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// 3
// null


// >>>>>>>>>>>>> Q6 — lastUpper(str)

// Return the last uppercase letter in the string.
// If none → null.

// function lastUpper(str){

//     for(let i = str.length -1; i >= 0; i--){
//         if(str[i] >= 'A' && str[i] <= 'Z'){
//             return str[i]
//         }

//     }
//     return null

// }
// console.log(lastUpper("abCDe"));
// console.log(lastUpper("hello"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// D
// null



//>>>>>>>>>>>> Q7 — countSpaces(str)

// Count spaces only.

// function countSpaces(str){

//     let count = 0;

//     for(let char of str){
//         if(char === " "){
//             count++
//         }
//     }
//     return count
// }



// console.log(countSpaces("I love JS"));
// console.log(countSpaces("NoSpace"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// 2
// 0



//>>>>>>>>>>>>>>>. Q8 — reverseString(str)
// Reverse the entire string.
// ⚠️ No split / reverse / join.

// function reverseString(str){
//     let result = '';
//     for(let i = str.length -1; i >= 0; i--){
//         result += str[i]
//     }
//     return result
// }


// console.log(reverseString("JS Rocks"));
// console.log(reverseString("JS noob"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// skcoR SJ
// boon SJ


//>>>>>>>>>>> Q9 — hasOnlyLetters(str)

// Return true if the string contains only letters (a–z, A–Z).
// Else false.


// function hasOnlyLetters(str) {

//     for (let char of str) {
//         if (!char >= '0' && char <= '9')  {
//             return false
//         }
//     }
//     return true
// }

// console.log(hasOnlyLetters("Hello"));
// console.log(hasOnlyLetters("Hi123"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// true
// false


// >>>>>>>>>>>>>>>>>>> Q10 — countUpper(str)

// Count uppercase letters.

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
// console.log(countUpper("abc"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// 4
// 0















// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 🧪 LEVEL-1 FINAL TEST

// Q1 — startsWithLower(str)

// Return true if the string starts with a lowercase letter.

// function startsWithLower(str){
//     if( str[0] >= 'a' &&  str[0] <= 'z'){
//         return true
//     }
//     return false
// }

// console.log(startsWithLower("hello"));
// console.log(startsWithLower("Hello"));
// console.log(startsWithLower("1abc"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// true
// false
// false



// >>>>>>>>>>>>> 🔹 Q2 — countUpperAtEnd(str)
// Count consecutive uppercase letters from the END only.


// function countUpperAtEnd(str){
//     let count = 0;

//     for(let i = str.length -1; i >= 0; i--){
//         if(str[i] >= 'A' && str[i] <= 'Z'){
//             count++
//         }else return count
//     }
//     return count
// }

// console.log(countUpperAtEnd("codeABC"));
// console.log(countUpperAtEnd("JSAbC"));
// console.log(countUpperAtEnd("abc"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// 3
// 1
// 0


// 🔹 Q3 — firstLetter(str)

// Return the first letter (A–Z or a–z) found in the string.
// If none → null.

// function firstLetter(str) {
//     for (let i = 0; i <= str.length; i++) {
//         if (
//             (str[i] >= 'A' && str[i] <= 'Z') ||
//             (str[i] >= 'a' && str[i] <= 'z')
//         ){
//             return str[i]
//         }
//     }
//     return null
// }

// console.log(firstLetter("1a2b"));
// console.log(firstLetter("123!"));
// console.log(firstLetter("!Hi"));

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// a
// null
// H



// 🔹 Q4 — removeNonLetters(str)

// Remove everything except letters.
// Keep only A–Z and a–z.


// function removeNonLetters(str){
//     let result = ''
//         for (let i = 0; i <= str.length; i++) {
//         if (
//             (str[i] >= 'A' && str[i] <= 'Z') ||
//             (str[i] >= 'a' && str[i] <= 'z')
//         ){
//             result += str[i]
//         }
//     }
//     return result
// }

// console.log(removeNonLetters("Hi123!"));
// console.log(removeNonLetters("A B C"));
// console.log(removeNonLetters("123"));
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// Hi
// ABC
// 


// >>>>>>>>>>>>>🔹 Q5 — hasLetterAndDigit(str)

// Return true only if the string contains
// at least one letter AND at least one digit.


// function hasLetterAndDigit(str) {
//     let letter = false
//     let digit = false
//     for (let char of str.toLowerCase()) {
//         if (char >= 'a' && char <= 'z') {
//             letter = true
//         }
//         if (char >= '0' && char <= '9') {
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

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// true
// false
// false
// true


















// 🧠 LEVEL +2 — MOCK EXAM


// 🔹 Q1 — countUpperAfterDigit(str)

// Rules:
// Find the first digit
// After that, count consecutive uppercase letters
// Stop when a non-uppercase appears
// If no digit → return 0

// function countUpperAfterDigit(str) {
//     let count = 0;
//     let seenDigit = false;
//     for (let char of str) {
//         if (char >= '0' && char <= '9') {
//             seenDigit = true
//             continue
//         }

//         if (seenDigit) {

//             if(char >= 'A' && char <= 'Z'){
//                 count++
//             } else break
//         }
//     }
//     return count
// }

// console.log(countUpperAfterDigit("a1BCd"))
// console.log(countUpperAfterDigit("9XYZ!"))
// console.log(countUpperAfterDigit("abc"))
// console.log(countUpperAfterDigit("1AbC"))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// 2
// 3
// 0
// 1


// >>>>>>>>>>>>>.🔹 Q2 — firstLowerAfterUpper(str)

// Rules:
// Find the first uppercase letter
// Return the first lowercase letter after it
// If none → return null

// function firstLowerAfterUpper(str){
//     let seenUpper = false;
//     for(let char of str){
//         if(char >= 'A' && char <= 'Z'){
//             seenUpper = true
//         }

//         if(seenUpper && char >= 'a' && char <= 'z'){
//             return char
//         }
//     }
//     return null
// }

// console.log(firstLowerAfterUpper("ABc"))
// console.log(firstLowerAfterUpper("aB!d"))
// console.log(firstLowerAfterUpper("abc"))
// console.log(firstLowerAfterUpper("Z9y"))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// c
// d
// null
// y



// 🔹 Q3 — countDigitsBetweenUpper(str)

// Rules:
// Find the first uppercase letter
// Count digits after it
// Stop when another uppercase letter appears
// If no starting uppercase → return 0

// function countDigitsBetweenUpper(str) {
//     let seenUpper = false;
//     let count = 0;

//     for (let char of str) {
//         if (char >= 'A' && char <= 'Z') {

//             seenUpper = true;
//             continue
//         }

//         if (seenUpper) {
//             if (char >= '0' && char <= '9') {
//                 count++
//             } else break
//             }

//     }
//     return count
// }


// console.log(countDigitsBetweenUpper("A12B"))
// console.log(countDigitsBetweenUpper("aA9z"))
// console.log(countDigitsBetweenUpper("abc"))
// console.log(countDigitsBetweenUpper("Z123x"))

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// 2
// 1
// 0
// 3

// >>>>>>>>>>>>🔹 Q4 — hasLowerThenDigit(str)

// Rules:
// Return true if:
// A lowercase letter appears
// And later a digit appears
// Else → false
// Examples:

// function hasLowerThenDigit(str) {
//     let seenlower = false;

//     for (let char of str) {
//         if (char >= 'a' && char <= 'z') {
//             seenlower = true
//         }
//         if (seenlower && char >= '0' && char <= '9') {
//             return true
//         }
//     }
//     return false
// }


// console.log(hasLowerThenDigit("a1"))
// console.log(hasLowerThenDigit("A1"))
// console.log(hasLowerThenDigit("abc"))
// console.log(hasLowerThenDigit("z9X"))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// true
// false
// false
// true



// 🔹 Q5 — indexOfFirstSpecialAfterDigit(str)

// Rules:
// Find the first digit
// Return the index of the first special character after it
// (special = NOT letter, NOT digit)
// // If none → return -1

// function indexOfFirstSpecialAfterDigit(str){
//     let seenDigit = false;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] >= '0' && str[i] <= '9'){
//             seenDigit = true
//         }

//         if(seenDigit){
//             if(!(
//                 (str[i] >= '0' && str[i] <= '9')||
//                 (str[i] >= 'a' && str[i] <= 'z')||
//                 (str[i] >= 'A' && str[i] <= 'Z')
//             )){
//                 return i
//             }
//         }
//     }
//     return -1
// }


// console.log(indexOfFirstSpecialAfterDigit("a3!b"))
// console.log(indexOfFirstSpecialAfterDigit("9abc#"))
// console.log(indexOfFirstSpecialAfterDigit("1ab"))
// console.log(indexOfFirstSpecialAfterDigit("a1@2"))
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// 2
// 4
// -1
// 2
































// 


// 📝 QUESTION 1 — Seen + Order

// Return true if a digit appears after at least one lowercase letter,
// but before any uppercase letter.

// function digitAfterLowerBeforeUpper(str) {
//     let seenlower = false;
//     let seenDigitafterlower = false

//     for(let char of str){
//         const isDigit = char >= '0' && char <= '9';
//         const islower = char >= 'a' && char <= 'z';
//         const isupper = char >= 'A' && char <= 'Z';

//         if(islower){
//             seenlower = true
//         }

//         if(seenlower&& isDigit){
//             seenDigitafterlower = true
//         }

//         if(seenlower && seenDigitafterlower &&isupper){
//             return true
//         }
//     }
//     return false
// }

// console.log(digitAfterLowerBeforeUpper("aa1BB")) // true
// console.log(digitAfterLowerBeforeUpper("AA1aa")) // false
// console.log(digitAfterLowerBeforeUpper("aaBB1")) // false
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// true
// false
// false


// 📝 QUESTION 2 — Block Detection

// Return the length of the first digit block.

// function firstDigitBlockLength(str) {
//     let count = 0
//     let digitblock = false
//     // let seenDigit = false

//     for (let char of str) {
//         const isDigit = char >= '0' && char <= '9';

//         if (isDigit) {
//             digitblock = true
//             count++
//         }else if(digitblock){
//             return count
//         }

//     }
//     return count
// }

// console.log(firstDigitBlockLength("aa123bb45")) // 3
// console.log(firstDigitBlockLength("abc")) // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// 3
// 0


// 📝 QUESTION 3 — Reset on Condition

// Count lowercase letters,
// but reset the count whenever an uppercase appears.
// Return the final count.

// function countLowerResetOnUpper(str) {
//     let count = 0;
//     let seenlower = false;

//     for (let char of str) {
//         const islower = char >= 'a' && char <= 'z';
//         const isupper = char >= 'A' && char <= 'Z';

//         if(islower){
//             seenlower = true;
//             count++
//         }
//         if(isupper){
//             count = 0
//         }
//     }
//     return count
// }

// console.log(countLowerResetOnUpper("aaBBcccDdd")) // 2
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// 2
// aya


// 📝 QUESTION 4 — Conditional Counting

// Count digits that appear only after the first special character.

// function countDigitsAfterSpecial(str) {

//     let count = 0;
//     let seenspecial = false;

//     for (let char of str) {
//         let type =
//             (char >= 'A' && char <= 'Z') ? 'upper' :
//                 (char >= 'a' && char <= 'z') ? 'lower' :
//                     (char >= '0' && char <= '9') ? 'digit' : 'special';

//         if (type === 'special') {
//             seenspecial = true
//         }

//         if (seenspecial && type === 'digit') {
//             count++
//         }
//     }
//     return count
// }

// console.log(countDigitsAfterSpecial("aa@12#3b")) // 3
// console.log(countDigitsAfterSpecial("123")) // 0

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// 3
// 0

// 📝 QUESTION 5 — First vs Last Block

// Return the length of the last lowercase block.

// function lastLowerBlockLength(str) {
//     let count = 0;


//     for(let char of str){
//                 const islower = char >= 'a' && char <= 'z';

//         if(islower){
//             count++
//         } else {
//             count= 0
//         }
//     }
//     return count
// }

// console.log(lastLowerBlockLength("AAaaBBcc")) // 2
// console.log(lastLowerBlockLength("AA")      ) // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// 2
// 0



// 📝 QUESTION 6 — Early Exit

// Return the index of the first uppercase letter
// that appears after a digit.

// If not found → return -1.

// function firstUpperAfterDigitIndex(str) {
//     let seenDigit = false;

//     for(let i = 0; i < str.length; i++){
//         const isDigit = str[i] >= '0' && str[i] <= '9';
//         const isupper = str[i] >= 'A' && str[i] <= 'Z';

//         if(isDigit){
//             seenDigit = true
//         }
//         if(seenDigit && isupper){
//             return i
//         }
//     }
//     return -1
// }

// console.log(firstUpperAfterDigitIndex("a1bC2D")) // 3
// console.log(firstUpperAfterDigitIndex("ABC")   ) // -1
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// 3
// -1


// 📝 QUESTION 7 — Previous + Current Relation

// Return true if a digit is immediately followed by a special character.

// function digitFollowedBySpecial(str) {

//     let prevdigit = false;
//     for (let char of str) {
//         const isDigit = char >= '0' && char <= '9';
//         const isLetter = (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
//         const isSpecial = !isDigit && !isLetter;

//         if(prevdigit && isSpecial){
//             return true
//         }

//         prevdigit = isDigit
//     }
//     return false
// }

// console.log(digitFollowedBySpecial("1@a")) // true
// console.log(digitFollowedBySpecial("1a@")) // false

// yan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// true
// false


// 📝 QUESTION 8 — Mixed (Level 3 Boss)

// Count how many uppercase blocks appear
// after the first digit.

// function countUpperBlocksAfterDigit(str) {
//     let count = 0;
//     let seenDigit = false
//     let upperblock = false
    
//     for(let char of str){
//         const isDigit = char >= '0' && char <= '9';
//         const isupper = char >= 'A' && char <= 'Z';

//         if(isDigit){
//             seenDigit = true
//         }

//         if(seenDigit){
//             if(isupper && !upperblock){
//                 upperblock = true
//                 count++
//             }else upperblock = false
            
//         }
//     }
//     return count
// }

// console.log(countUpperBlocksAfterDigit("aa1BBccDD3E")) // 3
// console.log(countUpperBlocksAfterDigit("AA11bb")     ) // 0

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node test.js 
// 3
// 0































// 🧪 Question 1 — Longest Same Character Streak
// Write a function:
// Return the length of the longest continuous same character substring.

// function longestSameChar(str){
//     if(str.length === 0) return 0;

//     let current = 0;
//     let longest = 0;
//     let prev = null;

//     for(let char of str){
//         if(char === prev){
//             current++
//         }else current = 1;

//         if(current > longest) longest = current;

//         prev = char
//     }
//     return longest
// }

// console.log(longestSameChar("aaabbccccdde")) //→ 4
// console.log(longestSameChar("abc"         )) //→ 1
// console.log(longestSameChar(""            )) //→ 0
// console.log(longestSameChar("aabbaa"      )) //→ 2
// ayanmondal@fedora:~/coding/my-all-coding-main$ node test.js 
// 4
// 1
// 0
// 2


// 🧪 Question 2 — Valid Alternating Pattern
// Write a function:
// Return true if characters strictly alternate between digit and letter.

// function isAlternating(str){
//     if(str.length === 0) return true;

//     let prev = null;

//     for(let char of str){
//     const isletter = char >= "A" && char <= "Z" || char >= "a" && char <= "z"
//     const isDigit = (char >= "0" && char <= "9");
//     let curcase = isletter ? 'letter' : 'digit';

//     if (!isletter && !isDigit) return false;

//     if(curcase === prev){
//         return false
//     }

//     prev = curcase
    
//     }
//     return true
// }

// console.log(isAlternating("a1b2c3")) //→ true
// console.log(isAlternating("1a2b3c")) //→ true
// console.log(isAlternating("a1b23" )) //→ false
// console.log(isAlternating("ab12"  )) //→ false
// console.log(isAlternating(""      )) //→ true
// ayanmondal@fedora:~/coding/my-all-coding-main$ node test.js 
// true
// true
// false
// false
// true

// // 🧪 Question 3 — Longest Increasing Digit Substring
// // Write:
// // Find the length of the longest continuous increasing digit sequence.
// function longestIncreasingDigitRun(str){
//     if(str.length === 0) return 0;

//     let current = 0;
//     let longest = 0;
//     let prev = null;

//     for(let char of str){

//         if(char > prev){
//             current++
//         }else current = 1;

//         if(current > longest ) longest = current;

//         prev = char;
//     }
//     return longest
// }


// console.log(longestIncreasingDigitRun("1231456789")) //→ 5   ("456789")
// console.log(longestIncreasingDigitRun("13579"     )) //→ 1
// console.log(longestIncreasingDigitRun("112233"    )) //→ 2
// console.log(longestIncreasingDigitRun(""          )) //→ 0
// Example 1: "1231456789"

//     Trace:
//         1 → 2 → 3 → increasing, length = 3.
//         3 → 1 → smaller, break.
//         Restart at 1 → 4 → 5 → 6 → 7 → 8 → 9 → increasing, length = 7.
//     Longest run = 7, not 5.//     👉 So you’re right — the given answer 5 is wrong. The correct answer is 7 ("1456789").
// Example 2: "13579"
//     Trace:
//         1 → 3 → 5 → 7 → 9 → all strictly increasing.
//         Length = 5.
// Longest run = 5, not 1.


// // 🧪 Question 4 — Balanced Parentheses Substring >>>>>>sorry i can't solve this question this is level 5 question i said level 4 exam questions 
// // Write:
// // Return length of longest valid balanced parentheses substring.

// function longestValidParentheses(str){

// }

// console.log(longestValidParentheses("(()())"))  // → 6
// console.log(longestValidParentheses(")()())"))  // → 4
// console.log(longestValidParentheses("((("   ))  // → 0
// console.log(longestValidParentheses("()(()" ))  // → 2



// 🧪 Question 5 — Longest Unique Character Substring
// Write:
// Return length of the longest substring with no repeating characters.

// function longestUniqueSubstring(str){
//     if(str.length === 0) return 0;

//     let longest = 0;
//     let currentBlock = '';

//     for(let char of str){

//         let index = currentBlock.indexOf(char);

//         if(index !== -1){
//             currentBlock = currentBlock.substring(index +1)
//         }

//         currentBlock += char

//         if(currentBlock.length > longest) longest = currentBlock.length;
//     }
//     return longest
// }

// console.log(longestUniqueSubstring("abcabcbb")) // → 3
// console.log(longestUniqueSubstring("bbbbb"   )) // → 1
// console.log(longestUniqueSubstring("pwwkew"  )) // → 3
// console.log(longestUniqueSubstring(""        )) // → 0
// ayanmondal@fedora:~/coding/my-all-coding-main$ node test.js 
// 3
// 1
// 3
// 0









function whatIsInAName(list, iden){
    return list.filter(x => {
        return Object.keys(iden).every(key => {
            return x[key] === iden[key];
        })
    })
}

console.log(whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
))

test