var array = [1, 2, 3, 4, 5];

var double = array.map(

    function (element) {

        return element * 2;

    }

)

console.log(double);


//ou

var array = [1, 2, 3, 4, 5];

var double = array.map((elem) => elem*2)
console.log(double);
