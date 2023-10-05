// https://leetcode.com/problems/jump-game/

var canJump = function(nums) {
    // value of first element
    // while loop
    // 2nd element from value of first one
    // repeat until end is reached
    // return true if we make it to length
    // false if we don't
    let lastIndex = nums.length - 1;

    for(let i = nums.length; i>=0; i--){

        if(i + nums[i] >= lastIndex)
        lastIndex = i;
    }

    return lastIndex == 0;
};
