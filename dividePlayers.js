var dividePlayers = function(skill) {

    const sortedArray = mergeSort(skill);

    // sort the array

    let pointer1 = 0;

    let pointer2 = sortedArray.length - 1;

    // two pointers from the first to the last

    const comparer = sortedArray[pointer1] + sortedArray[pointer2];

    // comparer = sum of first and last

    let totalChemistry = 0

    while (pointer1 < pointer2) {

        let number1 = sortedArray[pointer1];

        let number2 = sortedArray[pointer2];

        // check the sum of the pointers to comparer
        if ( number1 + number2 === comparer) {
            // move pointers and add product to total chemistry
            totalChemistry += (number1 * number2);
            pointer1++;
            pointer2--;
        } else {
            // return -1 if not equal
            return -1;
        }
    }

    //return total chemistry
    return totalChemistry;


};

var mergeSort = function(array) {

    if (array.length <= 1) return array;
    const mid = Math.floor(array.length / 2);

    const left = array.slice(0, mid);

    const right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
};

var merge = function(left, right) {

    let merged = [];

    while(left.length && right.length) {

        if (left[0] > right[0]) {
            merged.push(right.shift());
        } else {
            merged.push(left.shift());
        }
    }

    return merged.concat(left, right);
};
