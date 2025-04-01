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
let arr = [1, 2, 3, 4, 5]

let nums = new Set(arr).size !== arr.length

console.log(nums);