function multiply(num) {
	
	if (isNaN(process.argv[2]) || process.argv[2] === undefined ){
		console.log("Assurer vous d'avoir mis un nombre");
	  return
	}
	
	for (i = 1; i <= 10; i++) {
		console.log(num + " fois " + i + "=" + num * i)

	}

}

function addition(num) {
	
	if (isNaN(process.argv[2]) || process.argv[2] === undefined ){
		console.log("Assurer vous d'avoir mis un nombre");
	  return
	}
	
	for (i = 1; i <= 10; i++) {
		console.log((num + " plus " + i + "=") + +num + +i)

	}

}

module.exports = {
	multiply,
	addition,
  };