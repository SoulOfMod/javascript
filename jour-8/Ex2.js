var request = require("request");


request.get(" https://api.chucknorris.io/jokes/random", function (err, res, body) {

    //    console.log( body)
    console.log("type de body :" + typeof body)
    parsese = JSON.parse(body)
    //    console.log(parsese)
    console.log("type de body parse :" + typeof parsese)


    function getFact(norris) {
        norrisParse = JSON.parse(body)
        norris = norrisParse.value

        console.log("Random fact : " + norris)
    }
    getFact()

})