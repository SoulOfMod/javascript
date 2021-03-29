//Faire une string et fait tableau

var str = "hello";

strToArray = str.split("");

console.log(strToArray);


//Affiche la dernière lettre du tableau


lastlet = strToArray[strToArray.length - 1]

console.log(lastlet)


// tab de 1 - 5 et affiche inverse

tab1a5 = [1, 2, 3, 4, 5]


for (let i = 4; i >= 0; i--) {
	console.log(tab1a5[i])
}

// supprime dernier elem de l'array (while)

while (tab1a5.length != [] /*ou 0 ou >0 */ ) {
	tab1a5.pop()
}
console.log(tab1a5)