function calculateAge(birthday) {

	currentYear = new Date().getFullYear()
	birthdayYear = new Date(birthday).getFullYear()
	currentMonth = new Date().getMonth()
	birthdayMonth = new Date(birthday).getMonth()
	yearEnd = currentYear - birthdayYear
	monthEnd = currentMonth - birthdayMonth
	if ((monthEnd) < 0) {

		console.log("Vous avez " + (yearEnd - 1) + " ans")

	}
	else {
		console.log("Vous avez " + (yearEnd) + " ans")
	}
}

calculateAge("1996-01-27")