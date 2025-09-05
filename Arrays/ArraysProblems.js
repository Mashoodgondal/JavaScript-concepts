// ----------------To reverse an array without using the reverse() method,--------------------

// let array = [1, 2, 6, 9, 0, 34, 3, 4, 5, 6, 7, 8]
// let start = 0
// let end = array.length - 1
// const reverseArray = (array) => {
//     while (start < end) {
//         let temp = array[start]
//         array[start] = array[end]
//         array[end] = temp
//         start++
//         end--
//     }
//     return array

// }
// console.log(reverseArray(array));

// ----------How can you find the index of a specific element in an array?-------------

// let array = [1, 3, 4, 5, 9, 12, 14]

// const fondIndex = (target, array) => {
//     for (let i = 0; i < array.length; i++) {

//         if (array[i] === target) {
//             return i

//         }

//     }
//     return -1
// }
// console.log(fondIndex(15, array));

// -----------------Another Method----------------


// let array = [1, 3, 4, 5, 9, 12, 14]
// let findIndexof = array.indexOf(5)
// console.log(array.indexOf(9));



// ---------------Write a function to remove duplicate values from an array.------------

// let removeDuplicate = array.filter((ele,index,ary)=> ary.indexOf(ele)==index)
// console.log(removeDuplicate);


// ---------------How do you merge two arrays into one? Show two methods--------------

// ----------method 1 --------------

// let array1 = [1,3,4,5,9,12,14]
// let array2 = [1,3,4,5,9]
// console.log(...array1 ,...array2);

// --------method 2------------

// let array1 = [1,3,4,5,9,12,14]
// let array2 = [1,3,4,5,9]
// console.log(array1.concat(array2));


// -----------Write a function to find the largest and smallest numbers in an array of integers.-------

// ------------largest------------
// let array = [1,3,4,5,9,12,14]

// let largest = array.reduce((cru,pre)=>cru>pre?cru:pre)
// console.log(largest);

// ------------smallest----------
// let array = [1,3,4,5,9,12,14]

// let largest = array.reduce((cru,pre)=>cru<pre?cru:pre)
// console.log(largest);


// -----------------How do you flatten a nested array (e.g., [1, [2, [3, [4]]]])?---------------

// let array = [1, [2, [3, [4]]]]
// let flatArray = array.flat(Infinity)
// console.log(flatArray);

// ------------Write a function to find the intersection of two arrays.------------
// let array1 = [1, 3, 4, 5, 9, 12, 14]
// let array2 = [1, 9, 12, 14]
// let intersection = array1.filter(ele => array1.includes(ele))
// console.log(intersection);


//-----------How can you sort an array of objects based on a specific key? (e.g., [{id: 1, name: "A"}, {id: 2, name: "B"}] sorted by name).

// const data = [
//     { id: 3, name: "Charlie" },
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" }
// ];

// const sortedArray = data.sort((a, b) => {
//     if (a.name > b.name) return 1
//     if (a.name < b.name) return -1
//     return 0
// }
// )
// console.log(sortedArray);




// Write a function to group elements of an array based on a specific condition (e.g., group numbers by even and odd).

let array1 = [2, 3, 54, 3, 5, , 3, 56, 74, 88, 65, 65, 27, 15, 74, 74, 14, 62, 44, 35, 6,]
let array2 = [2, 3, 54, 3, 5, , 3, 56, 74, 88, 65, 65, 27, 15, 74, 74, 14, 62, 44, 35, 6,]
const grouped = (array1, array2) => {
    // const group = {
    let eve = []
    let odd = []
    // }
    array1.forEach(element => {
        if (element % 2 == 0) {
            eve.push(element)
        }
        else {
            odd.push(element)
        }
    });
    array2.forEach(element => {
        if (element % 2 == 0) {
            eve.push(element)
        }
        else {
            odd.push(element)
        }
    });
    return { eve, odd };
}
const result = grouped(array1, array2)
console.log("Even = ", result.eve, "Odd = ", result.odd);







