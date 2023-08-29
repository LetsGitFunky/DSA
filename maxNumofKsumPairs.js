var maxOperations = function(nums, k) {
    // sort array

    let sortedArray = nums.sort((a,b) => a - b);

    // create two pointers

    let pointer1 = 0;

    let pointer2 = sortedArray.length - 1;

    // counter

    let operationCounter = 0;

    // compare the two numbers at the pointers

    while (pointer1 < pointer2) {

        let firstNumber = sortedArray[pointer1];

        let secondNumber = sortedArray[pointer2];

        if (firstNumber + secondNumber === k) {
            pointer1 += 1
            operationCounter += 1;
            pointer2 -= 1;
        } else if (firstNumber + secondNumber < k) {
            pointer1 += 1;
        } else {
            pointer2 -= 1;
        };

    };

    return operationCounter;

};
