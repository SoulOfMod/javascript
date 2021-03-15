function compare(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is bigger than " + num2);
    }
    else if (num2 > num1) {
        console.log(num2 + " is bigger than " + num1);
    }
    else {
        console.log("Both are the same");

    }
}

compare(25, 12)
compare(11, 11)
compare(5, 12)