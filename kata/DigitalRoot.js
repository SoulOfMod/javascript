/* function digital_root(n) {
	ns = n.toString()
	result = ns.split("")
	console.log(result)
  }

  digital_root(14) */



/* n = 154
ns = n.toString()
result = ns.split("")
console.log(result)
superres = +result[0] + +result[1] + +result[2]
console.log(superres) */

function digital_root(n) {
	return (n - 1) % 9 + 1
	//console.log((n - 1) % 9 + 1)
}

digital_root(145)