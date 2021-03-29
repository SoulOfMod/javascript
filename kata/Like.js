/* function likes(names) {
	tabname = []
	console.log(names)
	tabname.push(names)
	console.table(tabname)
	if (names === undefined) {
		console.log("no one like it")
	}
	else{
		for (i = 0; i < tabname.length; i++) {
			console.log(tabname[i].join(" and ") + " like it")
			
		}
	}
}

 */

function likes(names) {
	if (names.length === 0) {
		return 'no one likes this';
	} else if (names.length === 1) {
		return `${names[0]} likes this`;
	} else if (names.length === 2) {
		return `${names[0]} and ${names[1]} like this`;
	} else if (names.length === 3) {
		return `${names[0]}, ${names[1]} and ${names[2]} like this`;
	} else if (names.length > 3) {
		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
	}
}

