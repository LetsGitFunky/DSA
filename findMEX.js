const findMEX = (nums, value) => {
    let set = new Set();

    for (let num in nums) {
        set.add(num % value)
    }

}
