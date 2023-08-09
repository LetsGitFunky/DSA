// const intersection = (a, b) => {
//     let obj = {};
//     let result = []
//     let ab = a.concat(b);
//     for (let i = 0; i < ab.length; i++) {
//         if (obj[ab[i]]) {
//             result.push(ab[i])
//         }
//         obj[ab[i]] = 1
//     }
//     return result
// };

const intersection = (a, b) => {
    let result = [];
    let setA = new Set();
    for (let numA of a) {
        setA.add(numA)
    }
    for (let numB of b) {
        if (setA.has(numB)) {
            result.push(numB)
        }
    }
    return result;
};
