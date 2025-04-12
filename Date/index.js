// -----------------Get DOB and find age--------------

// var dob = new Date("01 Aug,2005")
// var date = new Date()

// var milisecondAge = date.getTime()- dob.getTime()
// var yearDif = milisecondAge/(1000*60*60*24*365)
// var monthdif = milisecondAge/(1000*60*60*24*365*12)
// var day = milisecondAge/(1000*60*60*24*365*12*30)

// console.log(`i'm  ${yearDif.toFixed(0)} years ${monthdif.toFixed(0)} months and ${day.toFixed(0)} days now `);

// var dob = new Date("09 Aug,2005")
// var date = new Date()

// var milisecondAge = date.getTime()- dob.getTime()
// // var yearDif = milisecondAge/(1000*60*60*24*365)
// var yearDif = date.getFullYear()-dob.getFullYear()
// var monthdif = date.getMonth()-dob.getMonth()
// var day =   date.getDay()-dob.getDay()

// console.log(`i'm  ${yearDif.toFixed(0)} years ${monthdif.toFixed(0)} months and ${day.toFixed(0)} days now `);

// Create a Date object for the current date and time
var rightNow = new Date();

// Get the day of the week as a number (0 for Sunday, 1 for Monday, etc.)
var dayNumber = rightNow.getDay();

// Array to map day numbers to day names
var arr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// Get the name of the day from the array
var dayName = arr[dayNumber];
console.log("Today is", dayName);

// Get the current date
console.log("Date:", rightNow.getDate());

// Get the full year
console.log("Year:", rightNow.getFullYear());

// var milisecondAge = date.getTime()- dob.getTime()
// // var yearDif = milisecondAge/(1000*60*60*24*365)
// var yearDif = date.getFullYear()-dob.getFullYear()
// var monthdif = date.getMonth()-dob.getMonth()
// var day =   date.getDay()-dob.getDay()

// console.log(`i'm  ${yearDif.toFixed(0)} years ${monthdif.toFixed(0)} months and ${day.toFixed(0)} days now `);

// Create a Date object for the current date and time
var rightNow = new Date();

// Get the day of the week as a number (0 for Sunday, 1 for Monday, etc.)
var dayNumber = rightNow.getDay();

// Array to map day numbers to day names
var arr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// Get the name of the day from the array
var dayName = arr[dayNumber];
console.log("Today is", dayName);

// Get the current date
console.log("Date:", rightNow.getDate());

// Get the full year
console.log("Year:", rightNow.getFullYear());

