numbers = []
for (i = 0; i < 50; i++) {
    numbers.push(Math.floor(Math.random() * 101));

}

j = 0

while (numbers[j] < 75 || numbers[j] > 100) {

    j++

}

console.table(numbers)
console.log(numbers[j])