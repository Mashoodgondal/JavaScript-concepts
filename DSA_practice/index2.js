// ===============   Given a zero-based permutation nums (0-indexed), build an array ans of
// ===============   the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length
//                     and return it.

// var buildArray = function (nums) {
//     let ans = [];
//     for (let i = 0; i < nums.length; i++) {
//         ans.push(nums[nums[i]])

//     }
//     return ans
// };
// console.log(buildArray([0, 2, 1, 5, 3, 4]));

// -------------Two sum ---------------
// var twoSum = function (nums, target) {
// const map = new Map()
// for (let i = 0; i <= nums.length; i++) {
//     const complemnt = target - nums[i]
//     if (map.has(complemnt)) {
//         return [map.get(complemnt), i]
//     }
//     map.set(nums[i], i)

// }
// return [];
//     for (let i = 0; i <= nums.length; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }

// };
// console.log(twoSum([1, 3, 4, 6, 7, 9], 10));

// ============Given an array nums of size n, return the majority element
// ===============Input: nums = [3,2,3]
// ===============Output: 3