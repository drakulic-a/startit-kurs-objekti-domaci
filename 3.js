// Stigli su nam podaci sa servera. Podaci su u vidu objekta koji čuva informacije o kursu i između ostalog niz ocena polaznika.
 
// Želimo da izračunamo prosečnu ocenu.
 
// Napisati funkciju koja će kao jedini parametar da prima objekat sa rezultatima. Funkcija treba da vrati prosečnu ocenu


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

function rezultati(objekat){
	 var zbir=0;
	 var prosjek=0;

	for (var i = 0; i < objekat.ocenePolaznika.length; i++) {

		zbir += objekat.ocenePolaznika[i];
		prosjek = zbir / objekat.ocenePolaznika.length;

		
	}
	console.log(prosjek);
}
rezultati(testObjekat);