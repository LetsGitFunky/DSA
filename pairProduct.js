const pairProduct = (numbers, targetProduct) => {
    let obj = {};

    for (let i = 0; i < numbers.length; i++) {
        let complement = targetProduct / numbers[i];
        if (complement in obj) {
            return [obj[complement], i]
        }
        obj[numbers[i]] = i;
    }
};
