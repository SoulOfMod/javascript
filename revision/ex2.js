/* - Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
- La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
- Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false */

function countEach(word) {

    console.log("word", word)
    xcount = 0
    ocount = 0

    console.log("word length", word.length)


    for (i = 0; i < word.length; i++) {

        console.log("word char at", word.charAt(i))
        
        if (word.charAt(i) === "x") {
            xcount++
            console.log(xcount)
        }

        else if (word.charAt(i) === "o") {
            ocount++
            console.log(ocount)
        }

        else {

        }
    }

    if (xcount === ocount) {

        console.log("true")

    } else {

        console.log("false")
    }

}

countEach('xooxxoox')
