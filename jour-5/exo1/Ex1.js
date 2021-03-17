function calculate(num1, operator, num2) {


	if (isNaN(process.argv[2]) || isNaN(process.argv[4]) || process.argv[3] === undefined ) {
		console.log("Assurer vous d'avoir mis 3 paramètres correct");
	  return}

	if (process.argv[3] == 'x') {

		console.log(num1 * num2)

	} else if (process.argv[3] == '+') {

		console.log(num1 + num2)

	} else if (process.argv[3] == '-') {

		console.log(num1 - num2)

	} else if (process.argv[3] == '/') {

		console.log(num1 / num2)

	} else if (process.argv[3] == '%') {

		console.log(num1 % num2)

	}
	else{
		console.log("Entré un operateur correct")
	}
	
}

calculate(parseInt(process.argv[2]),(process.argv[3]), parseInt(process.argv[4]))
