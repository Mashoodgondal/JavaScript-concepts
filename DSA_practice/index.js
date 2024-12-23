// 1---- Find the Maximum Number in an Array
// let arr = [2, 4, 15, 34, 6, 4, 56]
// let maxNum = arr.reduce((previous, curront) => previous > curront ? previous : curront)
// console.log(maxNum);

// 2--------- Check if a String is a Palindrome
// let str = '3234'
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
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10]
let n = 10
let expectedSum = n * (n + 1) / 2
let actualSum = arr.reduce((pre, cur) => pre + cur, 0)
console.log(expectedSum - actualSum);



