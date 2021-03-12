numbers = []
total = 0
for (i = 0; i < 50; i++) {
    numbers.push(Math.floor(Math.random() * 101));
    total = total + numbers[i]

}
for (i = 0; i < numbers.lenght; i++) {

    total = total + numbers[i]

}
console.table(numbers)
console.log(total)