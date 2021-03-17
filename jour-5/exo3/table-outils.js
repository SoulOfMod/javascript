function multiply(num) {
	for (i = 1; i <= 10; i++) {
		console.log(num + " fois " + i + "=" + num * i)

	}

}

function addition(num) {
	
	for (i = 1; i <= 10; i++) {
		console.log((num + " plus " + i + "=") + +num + +i)

	}

}

module.exports = {
	multiply,
	addition,
  };