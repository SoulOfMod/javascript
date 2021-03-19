const moment = require("moment")

function calculateAge(birthday) {

age = moment(birthday);
nowToday = moment();
difference = nowToday.diff(age , 'year') 

console.log("Vous avez " + difference + " ans")



}

calculateAge("1996-02-27")
