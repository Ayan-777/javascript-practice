// 🧩 Q1 — Warm-up (Very Gentle)

// Return true if two consecutive digits are different.

// function differentAdjacentDigits(str) {
//     let prev = null;

//     for (let char of str) {
//         const isDigit = char >= '0' && char <= '9';
//         if (isDigit) {
//             if (prev && char !== prev) {
//                 return true

//             }
//             prev = char
//         } else prev = null
//     }
//     return false
// }

// console.log(differentAdjacentDigits("1123")) //→ true (1→2)
// console.log(differentAdjacentDigits("1133")) //→ false
// console.log(differentAdjacentDigits("9")) //→ false

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// true
// true
// false

// 🧩 Q2 — Alternation Logic

// Return the length of the longest alternating digit sequence.

// Alternating = digits must be different from the previous digit.

// function longestAlternatingDigits(str) {
//     let current = 0;
//     let long = 0;
//     let prev = null;

//     for (let char of str) {
//         const isDigit = char >= '0' && char <= '9';

//         if (isDigit) {
//             if (char !== prev) {
//                 current++
//             } else {
//                 current = 1
//             }

//             prev = char

//             if (current > long) {
//                 long = current

//             }

//         } else {
//             current = 0;
//             prev = null
//         }
//     }
//     return long
// }

// console.log(longestAlternatingDigits("121212")) // → 6
// console.log(longestAlternatingDigits("112233")) // → 2
// console.log(longestAlternatingDigits("9")) // → 1
// console.log(longestAlternatingDigits("")) // → 0
// console.log(longestAlternatingDigits("123454"));

// 🔹 Q2 — longestAlternatingLetters(str)
// 🎯 Goal
// Return the length of the longest substring of letters
// where adjacent letters are different (case-sensitive).

// Rules
// Consider letters only
// Digit or special → break sequence
// 'a' and 'A' are different
// Same letter → break
// Single letter = 1

// function longestAlternatingLetters(str) {
//     let long = 0;
//     let current = 0;
//     let prev = null;

//     for (let char of str) {
//         const isletter = char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z' ;

//         if(isletter){
//             if(char !== prev){
//                 current++
//             }else{
//                 current = 1
//             }

//             prev = char

//             if(current > long){
//                 long = current;
//             }

//         }else {
//             current = 0;
//             prev = null
//         }

//     }
//     return long
// }

// console.log(longestAlternatingLetters("aAaA")) // 4
// console.log(longestAlternatingLetters("aaBB")) // 2
// console.log(longestAlternatingLetters("A")) // 1
// console.log(longestAlternatingLetters("")) // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 4
// 2
// 1
// 0

// 🔹 Q3 — longestAlternatingLowercase(str)
// 🎯 Goal
// Return the length of the longest alternating lowercase sequence.

// Rules
// Consider only lowercase letters
// Uppercase, digit, special → reset
// Same lowercase letter → break
// Single lowercase letter = 1

// function longestAlternatingLowercase(str) {
//     let long  = 0;
//     let current = 0;
//     let prev = null;

//     for (let char of str) {
//         const islower = char >= 'a' && char <= 'z';

//         if (islower) {
//             if (char !== prev) {
//                 current++
//             } else {
//                 current = 1
//             }

//             prev = char

//             if(current > long){
//                      long = current
//             }

//         } else {
//             current = 0;
//             prev = null
//         }

//     }
//     return long
// }

// console.log(longestAlternatingLowercase("abac")) // 4
// console.log(longestAlternatingLowercase("aabbcc")) // 2
// console.log(longestAlternatingLowercase("AAaBb")) // 1
// console.log(longestAlternatingLowercase("")) // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 4
// 2
// 1
// 0

// 🔹 Q4 — longestAlternatingDigitBlock(str)
// 🎯 Goal
// Return the length of the longest digit block
// where digits alternate.

// Rules
// Block = consecutive digits only
// Same digit twice → break block
// Non-digit → block ends
// Count inside one block only

// function longestAlternatingDigitBlock(str) {
//     let current = 0;
//     let prev = null;
//     let long = 0;

//     for (let char of str) {
//         const isDigit = char >= '0' && char <= '9';

//         if(isDigit){
//             if(char !== prev){
//                 current++
//             }else {
//                 current = 1
//             }

//             prev = char

//             if(current > long){
//                 long = current
//             }
//         }else {
//             current =0
//             prev = null
//         }
//     }
//     return long
// }

// console.log(longestAlternatingDigitBlock("12a3435")) // 3  (343)
// console.log(longestAlternatingDigitBlock("1112")   ) // 2
// console.log(longestAlternatingDigitBlock("a1b2c3") ) // 1
// console.log(longestAlternatingDigitBlock("abc")    ) // 0

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 4
// 2
// 1
// 0

// 🧩 Q1 — Longest Digit Block (Warm-up)

// Goal
// Return the length of the longest digit block.
// Rules
// Digits only
// Non-digit → reset

// function longestDigitBlock(str) {
//     let count = 0;
//     let longest = 0;

//     for (let char of str) {
//         const isDigit = char >= '0' && char <= '9';

//         if (isDigit) {
//             count++

//             if (count > longest) {
//                 longest = count
//             }

//         } else {
//             count = 0
//         }

//     }
//     return longest
// }

// console.log(longestDigitBlock("a12b333c4")) // 3
// console.log(longestDigitBlock("abc")) // 0
// console.log(longestDigitBlock("11aa22")) // 2
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 3
// 0
// 2

// 🧩 Q2 — Longest Alternating Digits (CORE)
// Goal
// Return the length of the longest digit sequence
// where adjacent digits are different.

// Rules
// Consider only digits
// Same digit → break
// Non-digit → reset
// Single digit = 1

// function longestAlternatingDigits(str) {
//     let current = 0;
//     let longest = 0;
//     let prev = null;

//     for (let char of str) {
//         const isDigit = char >= '0' && char <= '9';

//         if (isDigit) {
//             if (char !== prev) {
//                 current++
//             } else {
//                 current = 1
//             }

//             if (current > longest) {
//                 longest = current
//             }

//             prev = char
//         } else {
//             current = 0;
//             prev = null
//         }
//     }
//     return longest
// }

// console.log(longestAlternatingDigits("121212")) // 6
// console.log(longestAlternatingDigits("112233")) // 2
// console.log(longestAlternatingDigits("9")) // 1
// console.log(longestAlternatingDigits("")) // 0

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 6
// 2
// 1
// 0

// 🧩 Q3 — Longest Alternating Lowercase
// Goal
// Return the longest lowercase sequence
// where letters alternate.

// Rules
// Lowercase only
// Uppercase / digit / special → reset
// Same lowercase → break

// function longestAlternatingLowercase(str) {
//     let current = 0;
//     let prev = null;
//     let longest = 0;

//     for (let char of str) {
//          const islower = char >= 'a' && char <= 'z';

//          if(islower){
//             if(char !== prev){
//                 current++
//             }else{
//                 current =1
//             }

//             if(current > longest){
//                 longest = current
//             }

//             prev = char
//          }else{
//             prev = null;
//             current = 0
//          }
//     }
//     return longest
// }

// console.log(longestAlternatingLowercase("abac")) // 4
// console.log(longestAlternatingLowercase("aabbcc")) // 2
// console.log(longestAlternatingLowercase("AAaBb")) // 1
// console.log(longestAlternatingLowercase("")) // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 4
// 2
// 1
// 0

// 🧩 Q4 — Alternating Digits AFTER First Digit

// Goal
// Ignore everything before the first digit.
// Then find longest alternating digit sequence.
// Rules
// Ignore before first digit
// Same digit → break
// Non-digit → reset
// No digit at all → 0

// function longestAltDigitsAfterFirst(str) {
//     let seendigit = false;
//     let current = 0;
//     let longest = 0;
//     let prev = null;

//     for (let char of str) {
//         const isDigit = char >= '0' && char <= '9';

//         if (isDigit) {
//             seendigit = true
//         }

//         if (seendigit && isDigit) {
//             if (char !== prev) {
//                 current++
//             } else {
//                 current = 1;

//             }

//             if (current > longest) {
//                 longest = current
//             }

//             prev = char
//         }else if(seendigit && !isDigit){
//             current = 0;
//             prev = null;
//         }

//     }
//     return longest
// }

// console.log(longestAltDigitsAfterFirst("aa1212")  ) // 4
// console.log(longestAltDigitsAfterFirst("ab112233")) // 2
// console.log(longestAltDigitsAfterFirst("abc")     ) // 0

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 4
// 2
// 0

// 🧩 Q5 — Easy Type Alternation (Mini Bridge)

// Goal
// Return length of longest substring
// where type alternates (letter ↔ digit).

// Rules
// Letter ↔ Digit is valid
// Same type → break
// Special → reset

// function longestLetterDigitAlt(str){
//     let current = 0;
//     let longest =0;
//     let prev = null;

//     for(let char of str){
//         const isDigit = char >= '0' && char <= '9';
//         const isletter = char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z' ;

//         let type = null;
//         if(isDigit) type = 'digit';
//         else if(isletter) type = 'letter';
//         else{
//             current = 0;
//             prev = null;
//             continue
//         }

//         if(type !== prev){
//             current++
//         }else{
//             current = 1;
//         }

//         if(current > longest){
//             longest = current
//         }

//         prev = type
//     }
//     return longest
// }

// console.log(longestLetterDigitAlt("a1b2c")) // 5
// console.log(longestLetterDigitAlt("aa11"))  // 2
// console.log(longestLetterDigitAlt("a@1") )  // 1
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 5
// 2
// 1

// 🔹 Q1 — longestAltLettersAfterVowel(str) ⚠️ (Level-4 Core)
// 🎯 Goal
// Return the length of the longest substring that:
// starts after the first vowel appears
// contains only letters
// adjacent letters must be different

// Rules
// Vowels = a, e, i, o, u (case-insensitive)
// Ignore everything before first vowel
// Same letter twice → break
// Non-letter → reset
// Single letter = 1

// function longestAltLettersAfterVowel(str) {
//     let seenvowel = false
//     let current = 0;
//     let longest = 0;
//     let prev = null;

//     for (let char of str.toLowerCase()) {
//         const isletter =  char >= 'a' && char <= 'z';
//         const vowels = ['a', 'e', 'i', 'o', 'u'];

//         if(vowels.includes(char)){
//             seenvowel = true
//         }
//         if (seenvowel && isletter) {
//             if (char !== prev) {
//                 current++
//             } else {
//                 current = 1
//             }

//             if (current > longest) {
//                 longest = current;
//             }

//             prev = char
//         }else {
//             current = 0;
//             prev = null
//         }

//     }
//     return longest
// }

// console.log(longestAltLettersAfterVowel("bbcaabbcc")) // 2  ("abbc")
// console.log(longestAltLettersAfterVowel("xyzAaa")) // 1
// console.log(longestAltLettersAfterVowel("bbb")) // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 2
// 1
// 0

// 🔹 Q2 — longestIncreasingDigitsAfterFirst(str) ⚠️ (Level-4 Core)
// 🎯 Goal
// Return the length of the longest digit sequence that:
// starts after the first digit
// digits are strictly increasing

// Rules
// Ignore everything before first digit
// Each digit must be greater than previous
// Same or smaller digit → break
// Non-digit → reset
// Single digit = 1
// No digit at all → 0

// function longestIncreasingDigitsAfterFirst(str) {
//     let prev = null;
//     let current = 0;
//     let longest = 0;
//     let seendigit = false;

//     for (let char of str) {
//         const isDigit = char >= '0' && char <= '9';

//         if (!seendigit) {
//             if (isDigit) {
//                 seendigit = true
//             }
//             continue
//         }

//         if (isDigit) {
//             if (prev === null || char > prev) {
//                 current++

//             } else {
//                 current = 1
//             }

//             if (current > longest) {
//                 longest = current
//             }

//             prev = char
//         } else {
//             prev = null
//             current = 0
//         }

//     }
//     return longest

// }

// console.log(longestIncreasingDigitsAfterFirst("aa134579223")) // 5 ("34579")
// console.log(longestIncreasingDigitsAfterFirst("abc")) // 0
// console.log(longestIncreasingDigitsAfterFirst("a1223")) // 2
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 5
// 0
// 2

// 🔹 Q3 — longestEvenOddAlternation(arr) ⚠️ (Level-4 Array Pattern)
// 🎯 Goal
// Return the maximum length of a sequence where:
// numbers alternate between even and odd

// Rules
// Even → Odd → Even → Odd (or reverse)
// Same parity twice → break
// Single number = 1
// Empty array = 0

// function longestEvenOddAlternation(arr) {
//     if (arr.length === 0) return 0;

//     let prev = null;
//     let current = 0;
//     let longest = 0;

//     for (let char of arr) {
//         const parity = char % 2 === 0 ? 'even' : 'odd'

//         if (parity !== prev) {
//             current++
//         } else {
//             current = 1
//         }

//         if (current > longest) {
//             longest = current
//         }

//         prev = parity

//     }
//     return longest
// }

// console.log(longestEvenOddAlternation([2, 4, 7, 10, 11, 14, 13])) // 6
// console.log(longestEvenOddAlternation([2, 4, 6])) // 1
// console.log(longestEvenOddAlternation([])) // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 6
// 1
// 0

// 🔹 Q4 — longestLowercaseAfterUpper(str) ⚠️ (Level-4 Core)
// 🎯 Goal
// Return the length of the longest substring that:
// starts after the first uppercase letter
// contains only lowercase letters
// no consecutive repeating characters

// Rules
// Ignore everything before first uppercase
// Uppercase / digit / special → reset
// Same lowercase twice → break
// Single lowercase = 1
// No uppercase at all → 0

// function longestLowercaseAfterUpper(str) {
//     let longest = 0;
//     let current = 0;
//     let prev = null;
//     let seenupper = false;

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';

//         if (!seenupper) {
//             if (isUpper) {
//                 seenupper = true
//             }
//             continue
//         }

//         if (isLower) {
//             if (prev === null || char !== prev) {
//                 current++
//             } else {
//                 current = 1;
//             }

//             if (current > longest) {
//                 longest = current
//             }

//             prev = char

//         } else {
//             current = 0
//             prev = null
//         }

//     }
//     return longest

// }

// console.log(longestLowercaseAfterUpper("aaBccddeeffggh"))
// console.log(longestLowercaseAfterUpper("abc")) // 0
// console.log(longestLowercaseAfterUpper("Aaa")) // 1
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 2
// 0
// 1

// 🔹 Q5 — longestLetterDigitAltAfterDigit(str) 👑 (Level-4 Boss)

// 🎯 Goal
// Return the length of the longest substring where:
// characters alternate between letter ↔ digit
// sequence must start after the first digit
// letters are case-insensitive

// Rules
// Ignore everything before first digit
// Letter ↔ Digit is valid
// Same type twice → break
// Special character → reset
// Single character = 1
// No digit at all → 0

// function longestLetterDigitAltAfterDigit(str) {
//     let current = 0;
//     let longest = 0;
//     let prev = null;
//     let seenDigit = false;

//     for (let char of str) {
//         const isDigit = char >= '0' && char <= '9';
//         const isletter = char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z';

//         if (!seenDigit) {
//             if (isDigit) {
//                 seenDigit = true;
//             }
//             continue
//         }

//         if (isDigit || isletter) {
//             if (char !== prev) {
//                 current++
//             } else {
//                 current = 1
//             }

//             if (current > longest) {
//                 longest = current
//             }

//             prev = char
//         } else {
//             current = 0;
//             prev = null
//         }

//     }
//     return longest
// }

// console.log(longestLetterDigitAltAfterDigit("aa1a2B3b4cc")) // 7 ("1a2B3b4")
// console.log(longestLetterDigitAltAfterDigit("abc")) // 0
// console.log(longestLetterDigitAltAfterDigit("1a1")) // 2

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 7
// 0
// 2

// 🔹 Q1 — longestVowelConsonantAlt(str)

// 🎯 Goal
// Return the length of the longest substring
// where vowels and consonants alternate.

// Rules
// Only letters allowed
// Vowel ↔ Consonant → valid
// Same type twice → break
// Non-letter → reset
// Single letter = 1

// function longestVowelConsonantAlt(str){
//     let current = 0;
//     let longest = 0;
//     let prev = null;

//     for(let char of str.toLowerCase()){
//         const isletter =  char >= 'a' && char <= 'z';
//         let vowel = 'aeiou'.includes(char);
//         let currentype = vowel ? 'vowel' : 'consonant'

//             if(!isletter){
//                 current = 0;
//                 prev = null;
//                 continue
//             }
//         if(isletter){
//             if(prev === null ||currentype !== prev){
//                 current++
//             }else{
//                 current = 1
//             }

//             if(current > longest ){
//                 longest = current
//             }

//             prev = currentype
//         }
//     }
//     return longest
// }

// console.log(longestVowelConsonantAlt("aBabEci"))   // 7
// console.log(longestVowelConsonantAlt("aaabb")  )   // 2
// console.log(longestVowelConsonantAlt("123a!b") )   // 2
// console.log(longestVowelConsonantAlt("")       )   // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 7
// 2
// 1
// 0

// 🔹 Q2 — longestSignAlternation(arr)

// 🎯 Goal
// Return the longest sequence
// where numbers alternate positive ↔ negative.

// Rules
// Positive → Negative → Positive → ...
// Zero breaks sequence
// Same sign twice → break
// Single number = 1

// function longestSignAlternation(arr) {
//     let current = 0;
//     let longest = 0;
//     let prev = null;

//     for (let num of arr) {
//         const currsign = num > 0 ? 'positive' : 'negative';

//         if(num ===0){
//             current = 0;
//             prev = null;

//             continue
//         }

//         if (prev === null || currsign !== prev) {
//             current++
//         } else {
//             current = 1
//         }

//         if (current > longest) {
//             longest = current
//         }

//         prev = currsign
//     }

//     return longest

// }

// console.log(longestSignAlternation([1, -2, 3, -4, 5]))  // 5
// console.log(longestSignAlternation([1, 2, -3, -4]))  // 2
// console.log(longestSignAlternation([-1, 2, -3, 4, -5, 6]))  // 6
// console.log(longestSignAlternation([0, 1, -2]))  // 2
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 5
// 2
// 6
// 2

// 🔹 Q3 — longestCaseAlternation(str) ⚠️ (Mini Boss)

// 🎯 Goal
// Return the longest substring
// where uppercase and lowercase letters alternate.

// Rules
// Upper ↔ Lower valid
// Same case twice → break
// Non-letter → reset
// Single letter = 1

// function longestCaseAlternation(str) {
//     let current = 0;
//     let longest = 0;
//     let prev = null;

//     for (let char of str) {

//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';

//         const currcase = isUpper ? 'upper' : 'lower';

//         if (!isUpper && !isLower) {
//             current = 0;
//             prev = null
//             continue
//         }

//         if (prev === null || currcase !== prev) {
//             current++
//         } else {
//             current = 1
//         }

//         if (current > longest) longest = current;

//         prev = currcase
//     }
//     return longest
// }

// console.log(longestCaseAlternation("aAaAaA"))    // 6
// console.log(longestCaseAlternation("AAaaBB"))   // 2
// console.log(longestCaseAlternation("a1A2bB"))   // 2
// console.log(longestCaseAlternation(""))   // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 6
// 2
// 2
// 0

// 🔹 Q1 — longestSameCharBlock(str)
// 🎯 Goal
// Return the length of the longest continuous block of the same character.

// Rules
// Characters must be adjacent
// Case-sensitive ('a' !== 'A')
// Empty string → 0
// Single character → 1

// function longestSameCharBlock(str){
//     if(str.length === 0) return 0;

//     let current = 0;
//     let longest = 0;
//     let prev = null;

//     for(let char of str){
//         if(char === prev){
//             current++
//         }else current = 1

//         if(current > longest) longest = current;

//         prev = char
//     }
//     return longest
// }

// console.log(longestSameCharBlock("aaabbccccd"))   // 4
// console.log(longestSameCharBlock("abc"       ))    // 1
// console.log(longestSameCharBlock("aAaa"      ))    // 2
// console.log(longestSameCharBlock(""          ))    // 0

// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 4
// 1
// 2
// 0

// 🔹 Q2 — longestIncreasingSequence(arr)
// 🎯 Goal
// Return length of the longest strictly increasing contiguous subarray.

// Rules
// Only continuous elements
// Must be strictly increasing
// Equal or smaller → break
// Single number → 1
// Empty array → 0

// function longestIncreasingSequence(arr){
//     if(arr.length === 0) return 0
//     let current = 0;
//     let longest = 0;
//     let prev = null;

//     for(let num of arr){

//         if(num > prev){
//             current++
//         }else{
//             current = 1
//         }

//         if(current > longest) longest = current;

//         prev = num
//     }
//     return longest
// }

// console.log(longestIncreasingSequence([1,2,3,2,3,4,5]))     // 4
// console.log(longestIncreasingSequence([5,4,3,2]      ))     // 1
// console.log(longestIncreasingSequence([1,3,5,7,9]    ))     // 5
// console.log(longestIncreasingSequence([1,1,2,3]      ))     // 3
// console.log(longestIncreasingSequence([]             ))     // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 4
// 1
// 5
// 3
// 0

// 🔹 Q3 — longestAlternatingParity(arr)
// 🎯 Goal
// Return length of longest sequence where even ↔ odd alternates.

// Rules
// Even → Odd → Even → ...
// Same parity twice → break
// Zero is even
// Single number → 1
// Empty array → 0

// function longestAlternatingParity(arr){
//     if(arr.length === 0) return 0
//     let current = 0;
//     let longest = 0;
//     let prev = null;

//     for(let num of arr){
//         let currcase = num % 2 === 0 ? 'even' : 'odd';

//         if(currcase !== prev){
//             current++
//         }else{
//             current = 1
//         }

//         if(current > longest) longest = current;

//         prev = currcase
//     }
//     return longest
// }

// console.log(longestAlternatingParity([1,2,3,4,5]))        // 5
// console.log(longestAlternatingParity([2,4,6,1,3]))        // 2
// console.log(longestAlternatingParity([0,1,0,1,0]))        // 5
// console.log(longestAlternatingParity([2,2,1]    ))        // 2
// console.log(longestAlternatingParity([]         ))        // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 5
// 2
// 5
// 2
// 0

// 🔹 Q4 — longestUpperLowerAlternation(str)

// 🎯 Goal
// Return length of longest substring where
// uppercase ↔ lowercase letters alternate.

// Rules
// Upper → Lower → Upper → ...
// Same case twice → break
// Non-letter → reset
// Single letter → 1
// Empty string → 0

// function longestUpperLowerAlternation(str) {
//     if (str.length === 0) return 0;

//     let current = 0;
//     let longest = 0;
//     let prev = null

//     for (let char of str) {
//         const isUpper = char >= 'A' && char <= 'Z';
//         const isLower = char >= 'a' && char <= 'z';
//         const curcase = isUpper ? 'upper' : 'lower';

//         if(!isLower && !isUpper){
//             current = 0;
//             prev = null
//             continue
//         }

//         if(curcase !== prev){
//             current++
//         }else current = 1

//         if(current > longest) longest = current;

//         prev = curcase
//     }
//     return longest
// }

// console.log(longestUpperLowerAlternation("aAaAaA"))     // 6
// console.log(longestUpperLowerAlternation("AAaaBB"))     // 2
// console.log(longestUpperLowerAlternation("a1A2bB"))     // 2
// console.log(longestUpperLowerAlternation("abAB"))     // 2
// console.log(longestUpperLowerAlternation(""))      // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 6
// 2
// 2
// 2
// 0

// 🔹 Q5 — longestNonRepeatingSubstring(str) ⚠️ (Mini Boss)

// 🎯 Goal
// Return length of longest substring without repeating characters.

// Rules
// Characters must be continuous
// If a character repeats → shrink window
// Case-sensitive
// Empty string → 0
// function longestNonRepeatingSubstring(str) {
//     let currentBlock = "";
//     let longest = 0;

//     for(let char of str){
//         let index = currentBlock.indexOf(char);

//         if(index !== -1){
//             currentBlock = currentBlock.substring(index + 1);
//         }

//         currentBlock += char

//         if(currentBlock.length > longest) longest = currentBlock.length;
//     }
//     return longest;
// }

// console.log(longestNonRepeatingSubstring("abcabcbb"))     // 3
// console.log(longestNonRepeatingSubstring("bbbbb"))     // 1
// console.log(longestNonRepeatingSubstring("pwwkew"))     // 3
// console.log(longestNonRepeatingSubstring("abcddef"))     // 4
// console.log(longestNonRepeatingSubstring(""))      // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 3
// 1
// 3
// 4
// 0

// 🔹 Q1 — longestUniqueDigitSubstring(numStr)

// Goal:
// Return length of longest continuous substring
// with no repeating digits.

// Rules:
// Only digits '0'–'9'
// Must be continuous
// If digit repeats → shrink window
// Empty → 0

// function longestUniqueDigitSubstring(numStr){
//     if(numStr.length === 0) return 0;

//     let longest = 0;
//     let currentBlock = "";

//     for(let char of numStr){
//         let index = currentBlock.indexOf(char);

//         if(index !== -1){
//             currentBlock = currentBlock.substring(index +1);
//         }

//         currentBlock += char

//         if(currentBlock.length > longest) longest = currentBlock.length;
//     }
//     return longest
// }

// console.log(longestUniqueDigitSubstring("12134567"))   // 7   ("2134567")
// console.log(longestUniqueDigitSubstring("11111"   ))   // 1
// console.log(longestUniqueDigitSubstring("1231234" ))   // 4   ("3123" or "1234")
// console.log(longestUniqueDigitSubstring(""        ))   // 0
// ayan@ayan-LOQ-15IAX9:~/Coding/question solve$ node level4.js
// 7
// 1
// 4
// 0

// 🔹 Q2 — longestDistinctWordSequence(arr)

// Goal:
// Return longest continuous sequence
// with no repeated words.

// Rules:
// Case-sensitive
// Must be continuous
// Repeated word → shrink window
// Empty array → 0

// function longestDistinctWordSequence(arr){
//     if(arr.length === 0)return 0;

//     let currentBlock = [];
//     let longest = 0;

//     for(let word of arr){
//         let index = currentBlock.indexOf(word);

//         if(index !== -1){
//             currentBlock = currentBlock.slice(index +1)
//         }

//         currentBlock.push(word)

//         if(currentBlock.length > longest) longest = currentBlock.length;
//     }
//     return longest
// }

// console.log(longestDistinctWordSequence(["a","b","c","a","b","c","d"]))   // 4
// console.log(longestDistinctWordSequence(["hello","hello","hello"]    ))  // 1
// console.log(longestDistinctWordSequence(["js","py","java","js","c++"]))  // 4
// console.log(longestDistinctWordSequence([]                           ))   // 0
// 4
// 1
// 4
// 0

// 🔹 Q3 — longestBinaryAlternation(str)

// Goal:
// Return length of longest substring
// where 0 and 1 strictly alternate.

// Rules:
// Only '0' and '1'
// Same digit twice → break
// Non-binary → reset
// Empty → 0

// function longestBinaryAlternation(str) {
//     if(str.length === 0) return 0

//     let current = 0;
//     let longest = 0;
//     let prev = null;

//     for(let char of str){
//         let iszero = char === '0';
//         let isone = char === '1';
//         let curcase = iszero ? 'zero' : 'one';

//         if(!iszero && !isone){
//             current = 0;
//             prev = null
//             continue
//         }

//         if(prev !== curcase){
//             current++
//         }else current = 1;

//         if(current > longest) longest = current;

//         prev = curcase

//     }
//     return longest
// }

// console.log(longestBinaryAlternation("010101"))  // 6
// console.log(longestBinaryAlternation("00110011")) // 2
// console.log(longestBinaryAlternation("1010101")) // 7
// console.log(longestBinaryAlternation("10a010")) // 3
// console.log(longestBinaryAlternation("")) // 0
// PS C:\Users\monda\Downloads\my-all-coding-main\my-all-coding-main> node .\level4.js
// 6
// 2
// 7
// 3
// 0

// 🔹 Q4 — longestIncreasingCharSequence(str)

// Goal:
// Return longest substring
// where characters are strictly increasing alphabetically.

// Rules:
// Must be continuous
// Next char ASCII > previous
// Same or smaller → break
// Empty → 0

// function longestIncreasingCharSequence(str){
//     if(str.length === 0) return 0;

//     let current = 0;
//     let longest = 0;
//     let prev = null;

//     for(let char of str){
//         if(char > prev){
//             current++
//         }else current = 1

//         if(current > longest) longest = current;

//         prev = char
//     }
//     return longest
// }

// console.log(longestIncreasingCharSequence("abcdeabxyz"))   // 5
// console.log(longestIncreasingCharSequence("abcdcba"   ))   // 4
// console.log(longestIncreasingCharSequence("mnopqr"    ))   // 6
// console.log(longestIncreasingCharSequence("aabbcc"    ))   // 2
// console.log(longestIncreasingCharSequence(""          ))   // 0
// PS C:\Users\monda\Downloads\my-all-coding-main\my-all-coding-main> node .\level4.js
// 5
// 4
// 6
// 2
// 0

// // 🔹 Q1 — longestSameDigitBlock(numStr)

// // 🎯 Goal
// // Return the length of the longest continuous block of the same digit.

// // Rules
// // Only digits '0'–'9'
// // Must be continuous
// // Same digit → extend
// // Different digit → reset
// // Empty → 0

// function longestSameDigitBlock(numStr) {
//   if (numStr.length === 0) return 0;

//   let current = 0;
//   let longest = 0;
//   let prev = null;

//   for (let char of numStr) {
//     const isDigit = char >= "0" && char <= "9";

//     if (!isDigit) {
//       current = 0;
//       prev = null;
//       continue;
//     }
//     if (prev === char) {
//       current++;
//     } else current = 1;

//     if (current > longest) longest = current;

//     prev = char;
//   }
//   return longest;
// }

// console.log(longestSameDigitBlock("11122333345")); // 4
// console.log(longestSameDigitBlock("909090")); // 1
// console.log(longestSameDigitBlock("00000")); // 5
// console.log(longestSameDigitBlock("")); // 0
// PS C:\Users\monda\Downloads\my-all-coding-main\my-all-coding-main> node .\level4.js
// 4
// 1
// 5
// 0

// // 🔹 Q2 — longestStrictlyDecreasingSequence(arr)

// // 🎯 Goal
// // Return the length of the longest strictly decreasing contiguous subarray.

// // Rules
// // Only continuous
// // Must strictly decrease
// // Equal or bigger → break
// // Single number → 1
// // Empty → 0

// function  longestStrictlyDecreasingSequence(arr){
//     if(arr.length === 0) return 0;

//     let current = 0;
//     let longest = 0;
//     let prev = null;

//     for(let num of arr){

//         if(num < prev){
//             current++
//         }else current = 1

//         if(current > longest) longest = current;

//         prev = num
//     }
//     return longest
// }

// console.log(longestStrictlyDecreasingSequence([9,8,7,6,5]      ))  // 5
// console.log(longestStrictlyDecreasingSequence([5,6,7,8]        ))  // 1
// console.log(longestStrictlyDecreasingSequence([10,9,8,10,9,8,7]))  // 3
// console.log(longestStrictlyDecreasingSequence([]               ))  // 0

// PS C:\Users\monda\Downloads\my-all-coding-main\my-all-coding-main> node .\level4.js
// 5
// 1
// 4
// 0
// i think your this example // console.log(longestStrictlyDecreasingSequence([10,9,8,10,9,8,7]))  // 3 is wrong because if you see 10,9,8 = 3 but the 10 came break then 10,9,8,7 = 4 so i ans should be 4

// 🔹 Q3 — longestVowelOnlySubstring(str)

// 🎯 Goal
// Return length of the longest substring containing only vowels.

// Rules
// Only vowels → a e i o u
// Consonant or non-letter → reset
// Case-insensitive
// Empty → 0

// function longestVowelOnlySubstring(str){
//     if(str.length === 0) return 0;

//     let current = 0;
//     let longest = 0;

//     for(let char of str){
//         let isvowel = 'aeiou'.includes(char) ;

//         if(!isvowel){
//             current = 0;
//             prev = null;
//             continue
//         }

//         if(isvowel){
//             current++
//         }else  current = 1;

//         if(current > longest ) longest = current;

//         prev = char
//     }
//     return longest
// }

// console.log(longestVowelOnlySubstring("aaeiouxyz" ))    // 6
// console.log(longestVowelOnlySubstring("abcdeeeiou"))    // 5
// console.log(longestVowelOnlySubstring("bcdfg"     ))    // 0
// console.log(longestVowelOnlySubstring(""          ))    // 0
// PS C:\Users\monda\Downloads\my-all-coding-main\my-all-coding-main> node .\level4.js
// 6
// 6
// 0
// 0

// i think you this example // console.log(longestVowelOnlySubstring("abcdeeeiou"))    // 5 is wrong because if you see abcd thire is no vowels but eeeiou these all vowels so the ans should 6 not 5

// 🔹 Q1 — longestSameCharBlock(str)

// Goal:
// Return the length of the longest continuous block of the same character.

// Rules:
// Any character allowed
// Must be continuous
// Same char → extend
// Different char → reset
// Empty → 0

// function longestSameCharBlock(str){
//     if(str.length === 0) return 0;
//     let current = 0;
//     let prev = null;
//     let longest = 0;

//     for(let char of str){
//         if(char !== prev){
//             current = 0;
//             prev = null;
//         }

//         if(char === prev){
//             current++
//         }else{
//             current = 1
//         }

//         if(current > longest) longest = current;

//         prev = char
//     }
//     return longest
// }

// console.log(longestSameCharBlock("aaabbccccd"))   // 4
// console.log(longestSameCharBlock("abc"       ))    // 1
// console.log(longestSameCharBlock(""          ))    // 0

// PS C:\Users\monda\Downloads\my-all-coding-main\my-all-coding-main> node .\level4.js
// 4
// 1
// 0

// 🔹 Q2 — longestIncreasingSequence(arr)

// Goal:
// Return length of the longest strictly increasing contiguous subarray.

// Rules:
// Only continuous
// Must strictly increase
// Equal or smaller → break
// Single number → 1
// Empty → 0

// function longestIncreasingSequence(arr){
//     if(arr.length === 0) return 0;
//     let current = 0;
//     let longest = 0;
//     let prev =null;

//     for(let num of arr){
//         if(num > prev){
//             current++
//         }else{
//             current = 1
//         }

//         if(current > longest) longest = current

//         prev = num
//     }
//     return longest
// }

// console.log(longestIncreasingSequence([1,2,3,2,3,4,5]))   // 4
// console.log(longestIncreasingSequence([5,4,3,2]      ))   // 1
// console.log(longestIncreasingSequence([1,3,5,7,9]    ))   // 5

// PS C:\Users\monda\Downloads\my-all-coding-main\my-all-coding-main> node .\level4.js
// 4
// 1
// 5

// 🔹 Q3 — longestAlternatingParity(arr)

// Goal:
// Return length of longest sequence where even ↔ odd alternates.

// Rules:
// Even ↔ Odd
// Same parity twice → break
// Zero is even
// Empty → 0

// function longestAlternatingParity(arr) {
//     if(arr.length === 0) return 0;
//     let current = 0;
//     let longest = 0;
//     let prev = null;

//     for(let num of arr ){
//         let currcase = num % 2 === 0? 'even' : 'odd';

//         if(currcase !== prev){
//             current++
//         }else current = 1

//         if(current > longest) longest = current;

//         prev = currcase
//     }
//     return longest
// }

// console.log(longestAlternatingParity([1, 2, 3, 4, 5])); // 5
// console.log(longestAlternatingParity([2, 4, 6, 1, 3])); // 2
// console.log(longestAlternatingParity([0, 1, 0, 1, 0])); // 5
// PS C:\Users\monda\Downloads\my-all-coding-main\my-all-coding-main> node .\level4.js
// 5
// 2
// 5

// 🔹 Q4 — longestUpperLowerAlternation(str)

// Goal:
// Return length of longest substring where
// uppercase ↔ lowercase letters alternate.

// Rules:
// Upper ↔ Lower
// Same case twice → break
// Non-letter → reset
// Empty → 0

// function longestUpperLowerAlternation(str) {
//   if (str.length === 0) return 0;

//   let current = 0;
//   let longest = 0;
//   let prev = null;

//   for (let char of str) {
//     const isUpper = char >= "A" && char <= "Z";
//     const isLower = char >= "a" && char <= "z";
//     let curcase = isUpper ? "upper" : "lower";

//     if(!isUpper && !isLower){
//         current = 0;
//         prev = null;
//         continue
//     }

//     if (curcase !== prev) {
//       current++;
//     } else current = 1;

//     if (current > longest) longest = current;

//     prev = curcase;
//   }

//   return longest;
// }

// console.log(longestUpperLowerAlternation("aAaAaA")); // 6
// console.log(longestUpperLowerAlternation("AAaaBB")); // 2
// console.log(longestUpperLowerAlternation("a1A2bB")); // 2
// PS C:\Users\monda\Downloads\my-all-coding-main\my-all-coding-main> node .\level4.js
// 6
// 2
// 2

// 🔹 Q5 — longestVowelOnlySubstring(str) ⚠️

// Goal:
// Return length of the longest substring containing only vowels.

// Rules:
// Only vowels → a e i o u
// Consonant / non-letter → reset
// Case-insensitive
// Empty → 0

// function longestVowelOnlySubstring(str) {
//   if (str.length === 0) return 0;

//   let current = 0;
//   let longest = 0;

//   for (let char of str) {
//     let isvowel = "aeiou".includes(char);

//     if (isvowel){
//         current++
//         if (current > longest) longest = current;

//     }else{
//         current = 0
//     }

//   }

//   return longest;
// }

// console.log(longestVowelOnlySubstring("aaeiouxyz")); // 6
// console.log(longestVowelOnlySubstring("abcdeeeiou")); // 6
// console.log(longestVowelOnlySubstring("bcdfg")); // 0
// PS C:\Users\monda\Downloads\my-all-coding-main\my-all-coding-main> node .\level4.js
// 6
// 6
// 0

// 🔹 Q1 — longestSameCharBlock(str)

// Goal:
// Return length of longest continuous block of same character.

// Rules
// Any character
// Must be continuous
// Different char → reset
// // Empty → 0

// function longestSameCharBlock(str){
//   if(str.length === 0) return 0;
//   let current = 0;
//   let longest = 0;
//   let prev = null;

//   for(let char of str){
//     if(char === prev){
//       current++
//     }else current = 1

//     if(current > longest) longest = current;

//     prev = char
//   }
//   return longest
// }

// console.log(longestSameCharBlock("aaabbccccd" ))  // 4
// console.log(longestSameCharBlock("abc"        ))   // 1
// console.log(longestSameCharBlock(""           ))   // 0

// PS C:\Users\monda\Downloads\my-all-coding-main\my-all-coding-main> node .\level4.js
// 4
// 1
// 0

// 🔹 Q2 — longestIncreasingSequence(arr)

// Goal:
// Return length of longest strictly increasing contiguous subarray.

// Rules
// Only continuous
// Must strictly increase
// Equal or smaller → break
// Empty → 0

// function longestIncreasingSequence(arr){
//   if(arr.length === 0)return 0;
//   let current = 0;
//   let longest = 0;
//   let prev = null;

//   for(let char of arr){
//     if(char > prev){
//       current++
//     }else current = 1;

//     if(current > longest) longest = current;

//     prev = char
//   }
//   return longest
// }

// console.log(longestIncreasingSequence([1,2,3,2,3,4,5]))   // 4
// console.log(longestIncreasingSequence([5,4,3,2]      ))   // 1
// console.log(longestIncreasingSequence([1,3,5,7,9]    ))   // 5
// PS C:\Users\monda\Downloads\my-all-coding-main\my-all-coding-main> node .\level4.js
// 4
// 1
// 5

// 🔹 Q3 — longestAlternatingParity(arr)

// Goal:
// Return length of longest sequence where even ↔ odd alternates.

// Rules
// Same parity twice → break
// Zero is even
// Continuous
// Empty → 0

// function longestAlternatingParity(arr){
//   if(arr.length === 0) return 0;
//   let current = 0;
//   let longest = 0;
//   let prev = null;

//   for(let num of arr){
//     let curcase = num % 2 === 0 ? 'even' : 'odd';

//     if(curcase !== prev){
//       current++
//     }else current = 1;

//     if(current > longest) longest = current;

//     prev = curcase;
//   }
//   return longest
// }

// console.log(longestAlternatingParity([1,2,3,4,5]))       // 5
// console.log(longestAlternatingParity([2,4,6,1,3]))       // 2
// console.log(longestAlternatingParity([0,1,0,1,0]))       // 5
// PS C:\Users\monda\Downloads\my-all-coding-main\my-all-coding-main> node .\level4.js
// 5
// 2
// 5

// 🔹 Q4 — longestUpperLowerAlternation(str)

// Goal:
// Return length of longest substring where uppercase ↔ lowercase alternates.

// Rules
// Same case twice → break
// Non-letter → reset
// Continuous
// Empty → 0

// function longestUpperLowerAlternation(str) {
//   if (str.length === 0) return 0;

//   let current = 0;
//   let longest = 0;
//   let prev = null;

//   for (let char of str) {
//     const isUpper = char >= "A" && char <= "Z";
//     const isLower = char >= "a" && char <= "z";
//     const curcase = isUpper ? "upper" : "lower";

//     if(!isUpper && !isLower){
//         current = 0;
//         prev = null;
//         continue;
//     }

//     if(curcase !== prev){
//         current++
//     }else current = 1;

//     if(current > longest) longest = current;

//     prev = curcase

//   }

//   return longest
// }

// console.log(longestUpperLowerAlternation("aAaAaA")); // 6
// console.log(longestUpperLowerAlternation("AAaaBB")); // 2
// console.log(longestUpperLowerAlternation("a1A2bB")); // 2
// ayanmondal@fedora:~/coding/my-all-coding-main$ node level4.js
// 6
// 2
// 2

// 🔹 Q5 — longestVowelOnlySubstring(str) ⚠️ (Level-4 Boss Lite)

// Goal:
// Return length of longest substring containing only vowels.

// Rules
// Only a e i o u
// Case-insensitive
// Consonant / non-letter → reset
// Empty → 0

// function longestVowelOnlySubstring(str) {
//   if (str.length === 0) return 0;

//   let current = 0;
//   let longest = 0;

//   for (let char of str) {
//     let isvowel = "aeiou".includes(char);

//     if (isvowel) {
//       current++;
//       if (current > longest) longest = current;
//     } else current = 0;
//   }
//   return longest;
// }

// console.log(longestVowelOnlySubstring("aaeiouxyz")); // 6
// console.log(longestVowelOnlySubstring("abcdeeeiou")); // 6
// console.log(longestVowelOnlySubstring("bcdfg")); // 0
// ayanmondal@fedora:~/coding/my-all-coding-main$ node level4.js 
// 6
// 6
// 0