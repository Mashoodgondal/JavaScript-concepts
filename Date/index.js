// -----------------Get DOB and find age--------------

var dob = new Date("01 Aug,2005")
var date = new Date()

var milisecondAge = date.getTime()- dob.getTime()
var yearDif = milisecondAge/(1000*60*60*24*365)
var monthdif = milisecondAge/(1000*60*60*24*365*12)
var day = milisecondAge/(1000*60*60*24*365*12*30)

console.log(`i'm  ${yearDif.toFixed(0)} years ${monthdif.toFixed(0)} months and ${day.toFixed(0)} days now `);
