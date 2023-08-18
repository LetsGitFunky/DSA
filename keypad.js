/**
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function(digits) {
//     let keypad = {
//         2: ["a", "b", "c"],
//         3: ["d", "e", "f"],
//         4: ["g", "h", "i"],
//         5: ["j", "k", "l"],
//         6: ["m", "n", "o"],
//         7: ["p", "q", "r", "s"],
//         8: ["t", "u", "v"],
//         9: ["w", "x", "y", "z"]
//     }

//     let result = [];
//     if (digits.length === 0) return [];
//         let firstLetters = keypad[digits[0]];
//         for (let i = 0; i < firstLetters.length; i++) {
//             let letter1 = firstLetters[i]
//             if (digits.length > 1) {
//                 let secondLetters = keypad[digits[1]];
//                 for (let j = 0; j <secondLetters.length; j++) {
//                     let letter2 = secondLetters[j]
//                     if (digits.length > 2) {
//                         let thirdLetters = keypad[digits[2]];
//                         for (let k = 0; k <thirdLetters.length; k++) {
//                             let letter3 = thirdLetters[k]
//                             if (digits.length > 3) {
//                                 let fourthLetters = keypad[digits[3]];
//                                 for (let l = 0; l < fourthLetters.length; l++) {
//                                     let letter4 = fourthLetters[l];
//                                     result.push(letter1 + letter2 + letter3 + letter4)
//                                 }
//                             } else {
//                                 result.push(letter1 + letter2 + letter3)
//                             }
//                         }
//                     } else {
//                         result.push(letter1 + letter2)
//                     }
//                 }
//             } else {
//                 result.push(letter1)
//             }
//         }
//     return result;
// };

var letterCombinations = function(digits) {
    let keypad = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }
    let results = [];
    if (digits.length === 0) return [];
    let array = digits.split("");
    let letters = keypad[array.shift()];
    console.log(letters)
    let newArray = letterCombinations(array.join(""));
    for (let i = 0; i < letters.length; i++) {
        if (newArray.length === 0) {
            results.push(letters[i])
        } else {
            for (let j = 0; j < newArray.length; j++) {
                results.push(letters[i] + newArray[j])
            }
        }
    }
    return results;
};
