// var twoSum = function(nums, target) {
//     let result = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 result.push(i, j);
//             }
//         }
//     }
//     return result;
// };

var twoSum = function(nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (obj[complement] != undefined) {
            return [obj[complement], i]
        }
        obj[nums[i]] = i;
    }
    return [];
};
