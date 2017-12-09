//4.Dobili smo sirove podatke i zaduženje da izvučemo određenu statistiku.
//Izračunati koliko godina iskustva imaju svi ljudi ukupno.

var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  }
];

function yearsOfExperience(niz){
	var experience = 0; 
	for (var i = 0; i < niz.length; i++) {
		experience += niz[i].yearsExperience;
	}

	return experience



}
yearsOfExperience(people);