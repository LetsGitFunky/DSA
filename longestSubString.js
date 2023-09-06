var lengthOfLongestSubstring = function(s) {
    let slength = s.length;
    let longLength = 0;
    let charIndexMap = new Map();
    for (let i = 0, j = 0; j < slength; j++) {
        if (charIndexMap.has(s[j])) {
            i = Math.max(i, charIndexMap.get(s[j]) + 1);
        }
        charIndexMap.set(s[j], j);
        longLength = Math.max(longLength, j - i + 1);
    }
    return longLength;
};

var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let current = 0;
    let set = new Set();
    let longest = 0;

    while (current < s.length) {
        if (!set.has(s[current])) {
            set.add(s[current]);
            longest = Math.max(longest, current - start + 1)
            current ++
        } else {
            set.delete(s[start])
            start++;
        }
    }
    return longest;
};
