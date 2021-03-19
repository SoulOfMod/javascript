const moment = require("moment")

function formatDate(stringDate) {

	stringDate = new Date(stringDate)
	console.log(moment(stringDate).format('Do MMMM YYYY'))
}

formatDate('2021/04/16') //via le code
