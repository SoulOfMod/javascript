numbers = []
max = 0
for (i = 0; i < 50; i++) {
    numbers.push(Math.floor(Math.random() * 101));
    
    if (max < numbers[i]) {
        max = numbers[i]
    }

}
console.table(numbers)
console.log(max)