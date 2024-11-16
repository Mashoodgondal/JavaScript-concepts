// ----------------To reverse an array without using the reverse() method,--------------------

// let array = [1,3,4,5,6,7,8]
// let start=0
// let end=array.length-1
// const reverseArray=(array)=>{
// while (start<end) {
//     let temp = array[start]
//     array[start]= array[end]
//     array[end]=temp
//     start++
//     end--
// }
// return array

// }
// console.log(reverseArray(array));


// ----------How can you find the index of a specific element in an array?-------------

// let array = [1,3,4,5,9,12,14]

// const fondIndex=(target,array)=>{
//     for (let i = 0; i < array.length; i++) {
        
//     if (array[i]===target) {
//         return i
        
//     }
   
//     }
//     return -1
// }
// console.log(fondIndex(3,array));

// -----------------Another Method----------------


// let array = [1,3,4,5,9,12,14]
// let findIndexof = array.indexOf(5)
// console.log(findIndexof);



// ---------------Write a function to remove duplicate values from an array.------------


// let array = [1,3,4,5,3,9,12,9,5]

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
let array1 = [1,3,4,5,9,12,14]
let array2 = [1,9,12,14]
let intersection = array1.filter(ele=>array2.includes(ele))
console.log(intersection);


// How can you sort an array of objects based on a specific key? (e.g., [{id: 1, name: "A"}, {id: 2, name: "B"}] sorted by name).
// Write a function to group elements of an array based on a specific condition (e.g., group numbers by even and odd).
// How can you shuffle the elements of an array randomly?

