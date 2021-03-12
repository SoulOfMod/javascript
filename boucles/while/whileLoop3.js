ussainBolt = 0
tysonGay = 0

while (ussainBolt <= 100 && tysonGay <= 100) {

    tysonGay = tysonGay + Math.floor(Math.random() * 10) + 1

    ussainBolt = ussainBolt + Math.floor(Math.random() * 10) + 1

    console.log(ussainBolt)

    console.log(tysonGay)

}
if (ussainBolt > 100) {
    console.log("usain won",ussainBolt)
}
else if (tysonGay > 100) {
    console.log("Tyson won",tysonGay)
}
