// 1---- Find the Maximum Number in an Array
// let arr = [2, 4, 15, 34, 6, 4, 56]
// let maxNum = arr.reduce((previous, curront) => previous > curront ? previous : curront)
// console.log(maxNum);

// 2--------- Check if a String is a Palindrome
// let str = '323'
// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed === str;
// }


// let rev = reverseString(str);
// if (rev === true) {
//     console.log("Palindrome");

// }
// else {
//     console.log("Non Palindrome");

// }

// 3. Sum of Elements in an Array------------
// let arr = [2, 4, 15, 34, 6, 4, 56]
// let sum = arr.reduce((pre, cru) => pre + cru, 0)
// console.log(sum);



// -------------- 4.Find Factorial of a Number-----------

// const Factorial = (n) => {
//     for (let i = n; i > 0; i--) {
//         return n * Factorial(n - 1)

//     }
//     return 1
// }
// Factorial(5)
// console.log(Factorial(5));

// -------- 5.Find the Missing Number in an Array--------
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
// let n = 11
// let expectedSum = n * (n + 1) / 2
// let actualSum = arr.reduce((pre, cur) => pre + cur, 0)
// console.log(expectedSum - actualSum);


// ------------ 6.Count Vowels in a String-------
// const countVowels = (str) => {
//     let count = 0;
//     let Vowels = 'aeiou'
//     for (const char of str) {
//         if (Vowels.includes(char))
//             count++
//     }
//     return count
// }
// console.log(countVowels('hy how are you'));


// let str = 'hallow world'
// function countVowels(str) {
//     const matches = str.match(/[aeiouAEIOU]/g);
//     return matches ? matches.length : 0;
// }

// // Example usage
// console.log(countVowels(str));


// const sum = () => {
//     for (let i = 0; i < arr.length; i++) {
//         return arr[i] + arr[i + 1]

//     }
// }
//

// console.log(sum(arr));
// let arr = [2, 4, 5, 6, 7, 8, 1]
// let arr2 = arr.reduce((pre, cru) => pre + cru)
// console.log(arr2);
// var twoSum = function (arr, target) {

//     for (i = 1; i <= arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target)
//                 return [i, j]
//         }

//     }
//     return []
// }


// console.log(twoSum([1, 3, 4, 3, 6, 3, 6, 5, 4], 12));
// var arg = function (a, b, c) {
//     return arg.length;  // This returns the number of formal parameters (3 in this case)
// };

// console.log(arg(1, 2, 3));  // Output: 3

// -------------------plus one at the end of array------------
// var plusOne = function (digits) {
//     for (let i = digits.length - 1; i >= 0; i) {
//         if (digits[i] < 9) {
//             digits[i]++;
//             return digits
//         }
//         return digits[i] = 0
//     }
//     digits.unshift(1)
//     return digits;
// };
// console.log(plusOne(1, 2, 3));

// Given an integer array nums and an integer k, return true if there are two distinct
//   indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
// let arr = [1, 2, 3, 4, 5]

// let nums = new Set(arr).size !== arr.length

// console.log(nums);

//                    ------------------------
// You are given an integer array height of length n. There are n vertical lines drawn
//  such that the two endpoints of the ith line are (i, 0) and (i, height[i]).Find two lines that together
//  with the x-axis form a container, such that the container contains the most water.
//                    ------------------------

// var maxArea = function (height) {
//     let left = 0
//     let right = height.length - 1
//     let maxWater = 0
//     while (left < right) {
//         let minHight = Math.min(height[left], height[right])
//         let width = right - left
//         let area = minHight * width
//         maxWater = Math.max(maxWater, area)
//         if (height[left] < height[right]) {
//             left++;
//         }
//         else {
//             right--
//         }
//     }
//     return maxWater
// };
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log("Good thing is good");
// ==================
// var maxArea = function (height) {
//     let left = 0
//     let right = height.length - 1
//     let maxWater = 0
//     while (left < right) {
//         let minHight = Math.min(height[left], height[right])
//         let width = right - left
//         let area = minHight * width
//         maxWater = Math.max(maxWater, area)
//         if (height[left] < height[right]) {
//             left++;
//         }
//         else {
//             right--
//         }
//     }
//     return maxWater
// };
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

//   ------------------------------
//  Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that
//  i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set
//  must not contain duplicate triplets.
//  -------------------------------

// var sortedArrayToBST = function (nums) {
//     if (nums.length === 0) return null; // Base case

//     let mid = Math.floor(nums.length / 2); // Find middle element

//     return {
//         val: nums[mid], // Root node value
//         left: sortedArrayToBST(nums.slice(0, mid)), // Left subtree
//         right: sortedArrayToBST(nums.slice(mid + 1)) // Right subtree
//     };
// };



// var threeSum = function (nums) {
//     const map = new Map();
//     for (let i = 0; i <= nums.length; i++) {
//         for (let j = i; j < nums.length; j++) {
//             const complemnt = 0 - nums[i] - nums[j]
//             if (map.has(complemnt)) {
//                 return [map.get(complemnt), nums[i], nums[j]]
//             }
//             map.set(nums[i], nums[j])
//         }

//     }
//     return []

// };

// console.log(threeSum([-1, 0, -1, 2, -1, -4]));

//                          --------------------
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
//                        --------------------------


// var removeElement = function (nums, val) {
//     let arrlength = nums.length
//     for (let i = 0; i <= nums.length - 1; i++) {
//         if (val === nums[i]) {
//             nums.splice(i, 1)
//             nums.push('_')
//             i--
//         }
//     }
//     while (nums.length < arrlength) {
//         nums.push('_')
//     }

//     return nums

// };

// console.log(removeElement([3, 2, 2, 3, 4, 3], 2));


// var removeElement = function (nums, val) {
//     let k = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }

//     return k;
// };
//                     --------------
//     Input: nums = [1, 1, 2]
// Output: 2, nums = [1, 2, _]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k(hence they are underscores).
//                   --------------

// var removeDuplicates = function (nums) {
//     let duplicate = nums.filter((ele, index, arry) => arry.indexOf(ele) == index)

//     return duplicate;
// };
// console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 5, 4, 3, 2, 4]));
//   ========== 2 ========
// var removeDuplicates = function (nums) {
//     let s = nums.sort((a,b) => a-b)

//     let unique = new Set(s)


//     return unique
// };

// console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 6, 6, 6, 2, 1, 0]));
//    =========== 3 =============

// var removeDuplicates = function (nums) {
//     let newarr = []
//     for (let i = 0; i <= nums.length; i++) {
//         if (newarr.includes(nums[i])) {
//             newarr = []
//         }
//         else {
//             newarr.push(nums[i])
//         }
//     }
//     return newarr;
// }
// console.log(removeDuplicates([1, 1, 2]));

// var removeDuplicates = function (nums) {
//     let k = 1
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[k - 1]) {
//             nums[k] = nums[i]
//             k++
//         }
//     }
//     return k
// }
// console.log(removeDuplicates(1, 1, 2));

var printvar = function (nums, k, num1, m) {

    let narr = []
    let narr1 = []
    for (let i = 0; i <= k; i++) {
        narr.push(nums[i])

    }
    for (let i = 0; i <= m; i++) {
        narr1.push(num1[i])
    }
    return [...narr, ...narr1]
}
console.log(printvar([1, 2, 3, 4], 2, [7, 6, 9, 4], 2));
let narr = []
let narr1 = []
for (let i = 0; i <= k; i++) {
    narr.push(nums[i])

}
for (let i = 0; i <= m; i++) {
    narr1.push(num1[i])
}
return [...narr, ...narr1]