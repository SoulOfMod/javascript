function checkPal(palin) {

    normaltab = palin.split("")
    console.log(normaltab)

    reversetab = normaltab.reverse()
    console.log(reversetab)


    for (i = 0; i < normaltab.length; i++) {
        if (normaltab[i] === reversetab[normaltab.length - 1 - i]) {
            return "Palindrome";
        } else {
            return "nope";
        }
    }
}
console.log(checkPal("kayak"));