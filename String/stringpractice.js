// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];
// let someFruits = fruits.slice(1, 3);
// console.log(someFruits);


// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];
// fruits.splice(0, 1, "Bear");
// console.log(fruits);


// let name = "Hassan";
// let newName = name.slice(1, 5);
//   name.splice(1, 1, "B");
// name.pop();
// console.log(name);
// console.log(newName);

// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];
// let newFruits = fruits.slice(0).concat("abc");
// let newFruits = [].concat(fruits, "abc", "an");
// let newFruits = [...fruits, "newElements"];
// fruits.push("Fruits");
// console.log(fruits);
// console.log(newFruits);

// let i = 0;
// while(i < fruits.length){
//     console.log(fruits[i]);
//     i++;
// }

// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     console.log(element);

// }

// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];
// // fruits = ["Dates", "Mango"];
// fruits.push("Dates");
// console.log(fruits);


// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];

// for(let fruit of fruits){
//     console.log(fruit);
// }

// for(let i in fruits){
//     console.log(i, fruits[i]);
// }


// let laptops = ["HP", "MAC"];

// let hp = laptops[0];
// let mac = laptops[1];

// let [hp, mac, dell] = laptops;


// console.log(hp, mac, dell)



// --------------String----------

// let str = 'muhhammad'

// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     console.log(element);

// }


//     name: 'Anas',
//     gender: 'Male',
//     age: 23,
//     hobbies: ['Cricket', 'Sleeping'],
//     "my height": 6,
// };


// person.name = 'Hassan';
// person = {
//     name: 'hassan'
// }


// console.log(person['name']



// let key = 'name'
// let value = 'ali'
// let user = {
//     [key]:value
// }
// console.log(user);


// const addition =(num1,num2)=>{
// console.log(typeof(num1));
// console.log(typeof(num2));
// return num1+num2
// }
// console.log(addition(4,"a"));



// let person= {
//     name:'ali',
//     age:'43',
//     gender:'male',
//     address:'fsd'
// }

// const someDetails=({name,age})=>{
//     console.log(name,age);

// }
// someDetails(person)


// function fun2(){
//     console.log("function2");

// }
// function fun1(fun2){
//     console.log("function1");
//     fun2()
// }
// fun1(fun2)


//  ------------Iterables----------------

// let str = 'abc';
// for (let char of str) {
//     console.log(char);
// }


// const person = {
//     name: 'anas',
//     age: 24,
//     degree: 'bscs'
// }

// for (let i of person) {
//     console.log(i);
// }
// const person = {
//     name: 'anas',
//     age: 23,
//     university: 'Riphah',
//     hobbies: ['sleeping', 'sleeping', 'sleeping'],
//     skillType:{
//         technical: ['python', 'java'],
//         nonTechnical: ['presentation', 'communication']
//     }
// }

// console.log(person?.skillType?.technical);

// ------------new line----------

// var greet = "Hey\tman you \n are doing great!";
// console.log(greet)


// -------String length------


// var greet = "Hey man you are doing great!";
// console.log(greet.length)

// ---------code at index------
// var greet = "Hey mAn you are doing great!";
// console.log(greet.charCodeAt(5));

// --------------Replace word in String---------
// var greet = "Hey man you are doing great!a";

// var man = greet.replace("man", "ahmad");
// console.log(man);

// var x = " hey Man how are you"
// var result = ''
// for (let i = 0; i < x.length; i++) {
//   if (i == 0 || i - 1 == '') {
//     result += x.charAt[i].toUpperCase()
//   }
//   else {
//     result += x[i]
//   }
// }
// console.log(result);

// -------------find fibonacy------------

const fibonacy = (num) => {
  let firstNum = 0;
  if (num == 0) {
    return
  }
  let secondNum = 1;
  if (num == 1) {
    return
  }
  for (let i = 0; i < num; i++) {
    let thirdNum = firstNum + secondNum;
    console.log(" " + thirdNum);

    firstNum = secondNum
    secondNum = thirdNum

  }
}
fibonacy(6)


//  ------------Iterables----------------

// let str = 'abc';
// for (let char of str) {
//     console.log(char);
// }


// const person = {
//     name: 'anas',
//     age: 24,
//     degree: 'bscs'
// }

// for (let i of person) {
//     console.log(i);
// }
// const person = {
//     name: 'anas',
//     age: 23,
//     university: 'Riphah',
//     hobbies: ['sleeping', 'sleeping', 'sleeping'],
//     skillType:{
//         technical: ['python', 'java'],
//         nonTechnical: ['presentation', 'communication']
//     }
// }

// console.log(person?.skillType?.technical);
//  ------------Iterables----------------

// let str = 'abc';
// for (let char of str) {
//     console.log(char);
// }


// const person = {
//     name: 'anas',
//     age: 24,
//     degree: 'bscs'
// }

// let person= {
//     name:'ali',
//     age:'43',
//     gender:'male',
//     address:'fsd'
// }

// const someDetails=({name,age})=>{
//     console.log(name,age);

// }
// someDetails(person)
// let person= {
//     name:'ali',
//     age:'43',
//     gender:'male',
//     address:'fsd'
// }

// const someDetails=({name,age})=>{
//     console.log(name,age);

// }
// someDetails(person)
// let person= {
//     name:'ali',
//     age:'43',
//     gender:'male',
//     address:'fsd'
// }

// const someDetails=({name,age})=>{
//     console.log(name,age);

// }
// someDetails(person)
