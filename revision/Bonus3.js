/* - Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
- La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
- Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false */

function countEach(word) {

    console.log("word", word)
    xcount = 0
    Xcount = 0
    ocount = 0
    Ocount = 0

    console.log("word length", word.length)


    for (i = 0; i < word.length; i++) {

        if (word.charAt(i) !== "x" && word.charAt(i) != "X" && word.charAt(i) != "o" && word.charAt(i) != "O") {
            console.log("x/X/o/O only")
            return
        }
        else {

            if (word.charAt(i) === "x") {
                xcount++
            }

            else if (word.charAt(i) === "X") {
                Xcount++
            }

            else if (word.charAt(i) === "o") {
                ocount++
            }

            else if (word.charAt(i) === "O") {
                Ocount++
            }

            else {

            }
        }
    }
    console.log("x count : " + xcount)
    console.log("X count : " + Xcount)
    console.log("o count : " + ocount)
    console.log("O count : " + Ocount)



    if (xcount === 0 && ocount === 0 && Xcount === 0 && Ocount === 0) {
        console.log("La string est tellement vide,met des X/x/O/o pour régler ça")
        return
    }

    else {

        if (xcount === ocount) {

            console.log("Même nombre de x que o")

        } else if (xcount !== ocount) {

            console.log("Pas même nombre de x que o")
        }

        if (Xcount === Ocount) {

            console.log("Même nombre de X que O")
        }

        else if (Xcount !== Ocount) {

            console.log("Pas même nombre de X que O")
        }

    }


}

countEach('')
