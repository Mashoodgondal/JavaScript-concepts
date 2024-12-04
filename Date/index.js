// -----------------Get DOB and find age--------------

var dob = new Date("01 Aug,2005")
var date = new Date()

var milisecondAge = date.getTime()- dob.getTime()
var yearDif = milisecondAge/(1000*60*60*24*365)
var monthdif = milisecondAge/(1000*60*60*24*365*12)
var day = milisecondAge/(1000*60*60*24*365*12*30)

console.log(`i'm  ${yearDif.toFixed(0)} years ${monthdif.toFixed(0)} months and ${day.toFixed(0)} days now `);

var dob = new Date("09 Aug,2005")
var date = new Date()

var milisecondAge = date.getTime()- dob.getTime()
// var yearDif = milisecondAge/(1000*60*60*24*365)
var yearDif = date.getFullYear()-dob.getFullYear()
var monthdif = date.getMonth()-dob.getMonth()
var day =   date.getDay()-dob.getDay()

console.log(`i'm  ${yearDif.toFixed(0)} years ${monthdif.toFixed(0)} months and ${day.toFixed(0)} days now `);

sun - 0
mon - 1
tue - 2
wed - 3
thu - 4
fri - 5
sat - 6

getDay

var dayNumber = rightNow.getDay();
var arr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
var dayName = arr[dayNumber];
console.log("today is ", dayName)
