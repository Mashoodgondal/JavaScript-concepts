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

let fruits = ["Mango", "Banana", "Orange", "Pineapple"];
// let newFruits = fruits.slice(0).concat("abc");
let newFruits = [].concat(fruits, "abc", "an");
// let newFruits = [...fruits, "newElements"];
fruits.push("Fruits");
console.log(fruits);
console.log(newFruits);

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
// fruits = ["Dates", "Mango"];
// fruits.push("Dates");
// console.log(fruits);


// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];

// for(let fruit of fruits){
//     // console.log(a);
// }

// for(let index in fruits){
//     console.log(index, fruits[index]);
// }


// let laptops = ["HP", "MAC"];

// let hp = laptops[0];
// let mac = laptops[1];

// let [hp, mac, dell] = laptops;


// console.log(hp, mac, dell)