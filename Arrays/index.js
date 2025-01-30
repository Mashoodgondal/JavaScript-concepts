// --------str printing--------

// let str=''
// for (let i = 0; i < 6; i++) {
//    for (let j = 0; j < 5; j++) {
//    str = str+'0'

//    }
//     console.log(str);
//     str=''

// }
// let str=''
// for (let i = 0; i < 6; i++) {
//    for (let j = i; j < 5; j++) {
//    str = str+'s'

//    }
//     console.log(str);
//     str=''

// }



// let year = 22;

// // Write the logic to check if the year is a leap year
// if (year % 4 === 0) {
//   console.log(`${year} is a leap year`);
// } else {
//   console.log(`${year} is not a leap year`);
// }

// 2--------
// let date1 = new Date("2024-10-01");
// let date2 = new Date("2024-10-01");

// if (date1.getTime() < date2.getTime()) {
//   console.log(`Date1 is earlier than Date2`);
// } else if (date1.getTime() === date2.getTime()) {
//   console.log(`Date1 is the same as Date2`);
// } else {
//   console.log(`Date1 is later than Date2`);
// }

// ------------ARRAYS-----------
// ----------Copy Array---------
// let arr = [34,45,32,4,56,2,4,53,23,32]
// let arr2= arr
// console.log(arr2);

// -------Negative Number-------

// let arr = [3, -1, 5, -9, 0, -7, 8, -4];
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index]<0) {
//         console.log(arr[index]);

//     }

// }
// -----------Positive Numbers-----------

// let arr = [3, -1, 5, -9, 0, -7, 8, -4];
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index]>0) {
//         console.log(arr[index]);

//     }

// }

// ---------sum of Array----------

// let arr = [3, 1, 5, 9, 7, 8, 4];
// const sum = arr.reduce((cru,next) =>(cru+next))
// console.log(sum);



// ----------Count Negetive Elements--------

// let array = [4, -1, -3, 7, 8, 2];
// const countNegative=()=>{

//     let Count=0
//    for (let i = 0; i < array.length; i++) {
//     if (array[i]<0) {
//       Count=  Count+1;
//     }

//    }
//    return Count

// }
// console.log(countNegative(array));


// ------another method--------

// let array = [4, -1, 3, 7, 8, 2];
// const countNegative=()=>{
//     return array.filter((element)=>element<0).length
// }
// console.log(countNegative(array));


// -------------------Array sorting manually----------------

// let numbers = [-23, -324, 34, 234, 23, 334, 78, 34, 6576];
// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length - i; j++) {
//         if (numbers[j] > numbers[j + 1]) {
//             let temp = numbers[j]
//             numbers[j] = numbers[j + 1]
//             numbers[j + 1] = temp
//         }

//     }

// }
// console.log(numbers);


for (let i = 0; i < 100; i++) {
    console.log(i, "I am a boy");


}