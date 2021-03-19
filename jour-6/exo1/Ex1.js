function formatDate(stringDate) {

	stringDate = new Date(stringDate)
	year = stringDate.getFullYear()
	month = stringDate.getMonth()
	day = stringDate.getDate()
	console.log(day + "/" + (month + 1) + "/" + year)

}

formatDate(process.argv[2]) //via la console

//formatDate('2021/04/16') //via le code
