var isPalindrome = function(x) {
    let str = x.toString();
    if (str.split("").reverse().join("") === str) return true;
    return false;
};
