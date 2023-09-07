var isValid = function(s) {
    // if (s.length % 2 !== 0) return false;
    let stack = [];

    for (let char of s) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char)
        } else {
            if ((char === ")" && stack[stack.length - 1] === "(") ||
                (char === "]" && stack[stack.length - 1] === "[") ||
                (char === "}" && stack[stack.length - 1] === "{")) {
                    stack.pop()
                } else {
                    return false;
                }
        }
    }

    return stack.length === 0;
};

// var isValid = function(s) {
//     if (s.length % 2 !== 0) return false;
//     // Initialize stack to store the closing brackets expected...
//     let stack = [];
//     // Traverse each charater in input string...
//     for (let idx = 0; idx < s.length; idx++) {
//         // If open parentheses are present, push it to stack...
//         if (s[idx] == '{') {
//             stack.push('}');
//         } else if (s[idx] == '[') {
//             stack.push(']');
//         } else if (s[idx] == '(') {
//             stack.push(')');
//         }
//         // If a close bracket is found, check that it matches the last stored open bracket
//         else if (stack.pop() !== s[idx]) {
//             return false;
//         }
//     }
//     return !stack.length;
// };
