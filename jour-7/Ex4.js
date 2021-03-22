var array = [1, "toto", 34, "javascript", 8, NaN, -1];

var numbers = array.filter(
    function (num) {
        if (typeof (num) === 'number') {
            return num;
        }
    }
)

console.log(numbers);