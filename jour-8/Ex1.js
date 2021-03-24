var request = require("request");


request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {

/* 	bodyparse = JSON.parse(body)
	console.log(bodyparse[0].name)
	console.log(typeof bodyparse[0].name)
 */
	getCountry = JSON.parse(body)

	countriesNames = getCountry.map((elem) => (elem.name))

	console.log(countriesNames.join("-"))



})