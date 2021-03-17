function multiply(num) {
	for (i = 1; i <= 10; i++) {
		console.log(num + " fois " + i + "=" + num * i)

	}

}
multiply(parseInt(process.argv[2]))
