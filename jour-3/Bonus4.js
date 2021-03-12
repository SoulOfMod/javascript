empty = []
Max = 0

for (i = 1; i <= 20; i++) {

    empty.push(Math.floor(Math.random() * 101));
}

console.table(empty)

for (j = 1; j <= 20; j++) {
    if (empty[j] > Max) {
        Max = empty[j]
    };
    
}

console.log(Max)