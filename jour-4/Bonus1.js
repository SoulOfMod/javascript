function generatePassword(num) {

    password = ""
    if (num < 6 || num > 15) {
        console.log("error!")

    } else {
        for (i = 1; i < num; i++) {

            randomN = Math.floor(Math.random() * (90 - 65 + 1) + 65)
            randomL = String.fromCharCode(randomN)
            password = password + randomL
        }
        console.log(password)
    }

}

generatePassword(3)
generatePassword(9)
generatePassword(21)
