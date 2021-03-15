var cat = {
	name: "Garfield",
	age: 3,
	isCute : true,
	};

    var cat2 = {
	name: "Norman",
	age: 1,
	isCute : false,
	};


    cats = [cat,cat2]

	
	console.log(cats)
	console.log(cat.age)
	console.log(cat["age"])
	console.log(cats[0].age)
	console.log(cats[0]["age"])

	console.log(cat2.isCute)
	console.log(cat2["isCute"])
	console.log(cats[1].isCute)
	console.log(cats[1]["isCute"])