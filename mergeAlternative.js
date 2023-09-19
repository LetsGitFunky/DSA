var mergeAlternately = function(word1, word2) {
    // let newWord = [];
    // let longestWord = Math.max(word1.length, word2.length)
    // for (let i = 0; i < longestWord; i++) {
    //     newWord.push(word1[i])
    //     newWord.push(word2[i])
    // }
    // return newWord.join("");
    let newWord = "";
    let longestWord = Math.max(word1.length, word2.length)
    for (let i = 0; i < longestWord; i++) {
        if (word1[i]) newWord += word1[i]
        if (word2[i]) newWord += word2[i]
    }
    return newWord
};
