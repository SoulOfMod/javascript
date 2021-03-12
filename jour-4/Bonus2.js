function launchDice(numberOfDice) {
    total = 0
    for (i = 0; i < numberOfDice; i++) {
        result = Math.floor(Math.random() * 6) + 1
        total = total + result
    }
    console.log(total)
}

player1 = launchDice(5);
player2 = launchDice(5);

if (player1 > player2) {
    console.log("player1 win")
} else if (player2 > player1) {
    console.log("player2 win")
}
else {
    console.log("same results")
}