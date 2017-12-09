var testObjekat = {
	naziv: "Startit kurs pravljenja sajtova",
	trajanjeNedjelja: 33,
	predavac: {
		ime: "Petar",
		prezime: "Popovic",
	},
	ocenePolaznika: [3, 2, 7, 4, 8, 1, 9,  2, 10, 10, 3, 6, 3, 1, 7, 3, 5, 4, 10, 9, 1, 9],
	organizacija: "Startit",
	kursJosTraje: true
};

function niz(objekat){
	var noviNiz = [];

	for (var i = 0; i < objekat.ocenePolaznika.length; i++) {
		
		noviNiz[i] = objekat.ocenePolaznika[i] + "/10";

		
	}
	console.log(noviNiz);

}

niz(testObjekat);