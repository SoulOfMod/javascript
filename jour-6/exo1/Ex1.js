function formatDate(stringDate) {

	newDate = new Date(stringDate)
	year = newDate.getFullYear()
	month = newDate.getMonth()
	day = newDate.getDate()
	console.log(day + "/" + (month + 1) + "/" + year)

}

//formatDate(process.argv[2]) //via la console

//formatDate('2021/04/16') //via le code
