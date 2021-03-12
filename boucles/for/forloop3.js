num = 0
count=0
for (i = 0; i < 20; i++) {

    resultdice = Math.floor(Math.random() * 7)

    if (resultdice >= 5) {
        num = resultdice
        count++;
    } else {
        continue
    }

}
console.log(count)