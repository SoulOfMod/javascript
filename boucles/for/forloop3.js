//Lancez un dé 20 fois et affichez la somme de tout les résultats plus grand ou égale à 5
var somme = 0

for (var i = 0; i < 20; i++) {
    resultDice = Math.floor(Math.random() * 6) + 1
    //console.log("dans for resultDice :" + resultDice)
    
    if (resultDice >= 5) {
        somme = somme + resultDice
        //console.log("Dans le if resultDice :" + resultDice)
    }
}
//console.log("apres for resultDice :" + resultDice)

console.log("Somme des dé lancé:" + somme)