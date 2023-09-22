var intToRoman = function(num) {
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const thousands = ["", "M", "MM", "MMM"];

    let roman = "";

    roman += thousands[Math.floor(num / 1000)]
    roman += hundreds[Math.floor((num % 1000) / 100)]
    roman += tens[Math.floor((num % 100) / 10)]
    roman += ones[Math.floor(num % 10)]

    return roman;
};

//  Optimized for Memory
// var intToRoman = function(num) {
//     const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
//     const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
//     const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
//     const thousands = ["", "M", "MM", "MMM"];

//     return thousands[Math.floor(num / 1000)] + hundreds[Math.floor((num % 1000) / 100)] + tens[Math.floor((num % 100) / 10)] + ones[Math.floor(num % 10)]
// };

// alternative approach
// var intToRoman = function(num) {
//     const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
//     const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

//     let roman = "";

//     for (let i = 0; i < symbols.length && num > 0; i++) {
//         while (num >= values[i]) {
//             roman += symbols[i];
//             num -= values[i];
//         }
//     }

//     return roman;
// };

// Recursive
// var intToRoman = function(num) {
//     const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
//     const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

//     // Recursive helper function
//     const helper = (n, idx) => {
//         if (n === 0) return "";

//         for (; idx < values.length; idx++) {
//             if (values[idx] <= n) {
//                 return symbols[idx] + helper(n - values[idx], idx);
//             }
//         }
//     };

//     return helper(num, 0);
// };
