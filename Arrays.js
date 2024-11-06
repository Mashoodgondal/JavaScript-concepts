// let weight=12;
// for(let i=0; i<=weight; i++){
//     if (i==13) {
//         continue;
//     }
//     console.log(i);
// }

// *****
// *****
// *****
// *****


// let row=4;
// let col=5;
// let str ='';
// for(let i=0;i<row ; i++){
//     for(let j=0;j<col;j++){
//         str= str +'*';
//     }
//     console.log(str)
//     str='';
// }

// table


// let num=23;
// for(let i=1;i<=10;i++){
//     console.log(`${num} *${i}=${num*i}`)
// }


// Array


// let age=[4,5];
// console.log(age[1])


// let age = [5,34,5,2,78,24,8];
// for(let i=0;i<age.length;i++){
//     console.log(age[i]*3)
// }

// Find maximum from Array
// Formula: Maximum  =  Numbar.MIN_SAFE_INTEGER;

// let age =[304,455,57,900,68,740];
// let maximum=Number.MIN_SAFE_INTEGER;
// for(i=0;i<age.length;i++){
//     if(maximum<age[i]){
//         maximum=age[i]
//     }
// }
// console.log(maximum)



// FIND MINIMUM
// Number.MAX_SAFE_INTEGER;



// let age =[304,5,57,0,8,740];
// let MINIMUM=Number.MAX_SAFE_INTEGER;
// for(i=0;i<age.length;i++){
//     if(MINIMUM>age[i]){
//         MINIMUM=age[i]
//     }
// }
// console.log(MINIMUM)



//function:



// let person={
//     name: "ali",
//     age: 32,
//     height: 5

// }
// console.log(person)


// let person={
//     name: "ali",
//         age: 32,
//         height: 5
    
// }
// let animal={
//     type: 'cow',
//     age2: 67,

// }
// let all={
//     ...animal,
//     ...person

// }
// console.log(all)





// Distruction :
// All remaining Elements are store in an other variable:

// let names=['ali', 'asghar', 'ahmad', 'akram']
// let [name1, name2, ...other]=names;
// console.log( name1,name2, other);




// let person={
//     name: 'ali',
//     age: '43',
//     hobies:['hockey','love']
     
// }
// let {name,age, hobies}=person;
// console.log(name, age, hobies[1])



// Functions


// function addTowNumbers(num1,num2){
//     return  num1+num2;
// }


// let result= addTowNumbers(4,8)
// console.log(result)


// my function [syntex]

// const myfunction=()=>{

// };


// const addition=(num1,num2)=>{
//     return  num1+num2;
// }

// let result=addition(6,3)
// console.log(result)


//   To find type:

// function addition(num1,num2){
//    console.log(typeof(num1))
//     return num1+num2;
// }

// let result= addition('3',4)
// console.log(result)



// Function into a function:

// const rutien=(massege,name)=>{
//     console.log(massege);
//     const dailyRutien=(username)=>{
//     console.log(username);
//     }
//     dailyRutien(name)

// }
// rutien('Hellow','Mashood')


// Default parameters


// const myfunction=(num1=5,num2=7)=>{
//     result=num1*num2;
//     return result;
// }
// console.log(myfunction())

// Simple function practice:

// function fun1(){
//     console.log('this function')
//     function fun2(){
//         console.log('2nd')
//     }
// fun2()    
// }
// fun1()





// sort the array in accending order by using functions:

// make function
// function replace( num1,num2){
// let temp=num1;
// num1=num2;
// temp=num2;
// }


// let arr=[23,56,3,5,8,90,223,456,3,123,-87,-67,456,9];

// for(let j=0 ; j<arr.length;j++)
// for( let i=0;i>arr.length-j;i++){
//     if(arr[i]>arr[i+1]){
//         replace(arr[i],arr[i+1])
//     }
   
// }



// For each method

// let arr = [2, 3 ,4, 5];
// let sum = 0;
// arr.forEach(function(element) { 
//     sum =+ element;
// });
//    console.log(sum);





// Filter Medhod

// this medhod is used where we  need some numbers from whole array


// let Number =[23,43,25,-76,454,67,-14]
// const positiveNumbers= Number.filter((element)=> element > 0)
// console.log(positiveNumbers);


// Reduce

// this method is used to perform any operation on Array

// let arr=[4,6,7,4,12]
// const sum= arr.reduce((first,second) => first+second)
// console.log(sum);

// let bickes = [
//     {bik: 1,bikname:'roadprince', price: 60},
//     {bik:2,bikname: 'honda', price: 80},
//     {bik:3,bikname:'haveybike', price:  120},
//      ]


// const totalPrice = bickes.reduce((a,b) => a + b.price, 0 );
// console.log(totalPrice);



// let products = [
//     {pId: 1, pTitle: 'laptop', price: 1000},
//     {pId: 2, pTitle: 'mobile', price: 2000},
//     {pId: 3, pTitle: 'mouse', price: 10000},
//     {pId: 4, pTitle: 'keyboard', price: 500},
// ]

// const totalPrice = products.reduce((a, b) => a + b.price, 0);
// console.log(totalPrice);


// Sort the Array

// let arr=[1,3,2,8,5,3,9]
// const sortedarray=arr.sort((a,b)=> a-b)
// console.log(sortedarray);



// Every

// let numbers=[2,34,56,3,245,56,54]
// const positiveNumbers=numbers.every((num)=>num>0)
// console.log(positiveNumbers);

// some

// let numbers=[2,34,-56,3,-5,56,54]
// const positiveNumbers=numbers.some((num)=>num>0)
// console.log(positiveNumbers);

// fill

// let arr=[2,34,567,43,34,5,54,2,44,5]
// const numbers=arr.fill('q',2,5)
// console.log(numbers);

// Spice

// const arr=[23,43,4,3,13254,6,8,4,6,78,5,]
// arr.splice(2,3, 'art')
// arr.splice( 6,2, 'ase')
// console.log(arr);



// itratable

// let i='qwetyu'
// for(char of i){
//     console.log(char);
// }

// sets

// let numbers= new Set([1,4,6,8])
// // console.log(numbers);
//  let num1 = numbers
// num1.add('qwer')
// numbers.add('adr')

// console.log(numbers);
// console.log(num1)


// Object Assign

// let person={
//     name:'Mashood',
//     age: '18',
//     Gender: 'male',
//     hobbies:['singing' ,'poetry'],
//     skills:{
//         technical:['c++','java'],
//         nonTechnical:['speaking','anyOne']
//     }
// }
// console.log(person?.skills?.nonTechnical);
// const numbers = [10, 5, -20, 3, 8];
// const maxNumber = numbers.reduce(
//   (max, current) => (current > max ? current : max),
//   numbers[0]
// );

// console.log(maxNumber);

// let arr1 = [21, -323, 34, 3, 342];

// const maximum = arr1.reduce((cur, max) => (cur > max ? cur : max), arr1[0]);
// console.log(maximum);

// --------minimum----------

// let arr2 = [23, 445, 334, 5, 43434, -55, 3332, 54, 4, 32, 2, 345, 67, 32];
// const minimum = arr2.reduce((max, crnt) => (max < crnt ? max : crnt), arr2[0]);
// console.log(minimum);

// --------find duplicate---------

// let arr = [2, 344, 23, 543, 2, 43, 32, 43, 54, 4, 5];

// const duplicate = arr.filter((ele, index, ary) => ary.indexOf(ele) !== index);

// console.log(duplicate)

// ------------Delete All Duplicate--------
// let arr = [2, 344, 23, 543, 2, 43, 32, 43, 54, 4, 5];

// const duplicate = arr.filter((ele, index, ary) => ary.indexOf(ele) == index);

// console.log(duplicate)

// ---------Count duplicate---------
// let arr = [2, 32, 23, 43, 22, 43, 32, 43, 54, 4, 54];

// const duplicate = arr.filter((ele,index,ary)=>ary.indexOf(ele)!==index)

   
//     let duplicateArray= duplicate
// let count= duplicateArray.filter((ele)=>ele>0).length
   



// console.log(count);






// MAP -- REDUCE -- FILTER 

// a)  MAP

// let arr= [1,2,3,4,5]
// let newarr= arr.map((num)=> num+1)
// console.log(newarr);

// let arr= [1,3,5]
// let newarr= arr.map((num)=> num*num)
// console.log(newarr);


// let arr=["apple","banana","mango"]
// let newarr= arr.map((fruits)=> fruits.toUpperCase())
// console.log(newarr);


//         =====> Filter <======

// let arr=[2,3,45,65,6,76,7,87,8,87,5,54,4,5,6,7,7,5,4,]
// let odd= arr.filter((num)=>num%2!==0)
// console.log(odd);



//       ======> Reduce <======

// let arr= [1,5,7,8,9,7,65,4,43,32,5,4]
// let sum= arr.reduce((current,result)=> current+result)
// console.log(sum);

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
// ------Even Numbers from Arrays-----------

// let arr = [3, -1, 5, -9, 0, -7, 8, -4];
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index]%2==0) {
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


// -------------Count all odd Numbers----------

// let arr = [34,45,32,4,56,2,4,53,23,32]
// let count=0
// const countOdd =()=>{
//     for (let i = 0; i < arr.length; i++) {
      
//         if(arr[i]%2!==0){
//             count=count+1
//         }
//     }
//     return count
// }
// console.log(countOdd(arr));
// -----------Delete from specific position---------
// let arr = [34,45,32,4,56,2,4,53,23,32]
// if(arr.length>0){
//   arr.splice(4,1)
//   console.log(arr);
  
// }
// else{
//     console.log("invalid position");
    
// }

// ----------sort Array---------


// let arr = [3, 1, 5, 9, 7, 8, 4];
// let narray = arr.sort((a,b)=> a - b) //ascending
// console.log(narray);

// -----------for of ---------------


// let arr=[2,34,43,5,3,5]
// for( const val of arr){
//     console.log(val);
    
// }
  

// ---------------Binaty Search---------------

// let array =[3,66,7,65,7,9,6,56,87,75]

// let sortedArray = array.sort((a,b)=>a-b)
// const binarySearch=(arr,target)=>{
//     let left=0 
//     let right = arr.length-1
//     while (left<=right) {
//         const mid = Math.floor((left+right)/2)
//         if (arr[mid]===target) {
//             return mid 
//         }
//         else if(arr[mid]<target){left= mid +1}
//         else{
        
//             right=  mid-1 
//         }
        
//     }
// return -1 
// }
// console.log(sortedArray);

// console.log(binarySearch(sortedArray,20));
