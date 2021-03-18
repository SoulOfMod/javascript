var prompt = require("prompt");
mysteryNum = Math.floor(Math.random() * 100) + 1

	prompt.start();

function onErr(err) {
	console.log(err);
	return;
}



function displayPrompt() {
prompt.get({name: "userNumber", description : "Entrez un chiffre entree 1 et 100"}, 

function (err, res) {
	if (err) {
		return onErr(err);
	}

	if (res.userNumber<1 || res.userNumber>100) {
		console.log("Tu comprends pas ce que je te demande? Entre 1 et 100")
		displayPrompt()
	}

	else if (res.userNumber < mysteryNum) {
		console.log("Cherche plus grand.")
		displayPrompt()
	} else if (res.userNumber > mysteryNum) {
		console.log("Cherche moins grand.")
		displayPrompt()
	}
	else{
		console.log("Bingo Genius!")
	}



})
}
displayPrompt()