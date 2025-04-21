// ===============   Given a zero-based permutation nums (0-indexed), build an array ans of 
// ===============   the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length
//                     and return it.

var buildArray = function (nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[nums[i]])

    }
    return ans
};
console.log(buildArray([0, 2, 1, 5, 3, 4]));
