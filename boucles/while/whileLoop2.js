dice = null
count = 0

while (dice !== 6) {
    dice = Math.floor(Math.random()* 6)+1
    console.log(dice)
    count++
}
console.log(count)