//5.Dobili smo sirove podatke i zaduženje da izvučemo određenu statistiku.
//Naš zadatak: Napraviti novi objekat koji će da sadrži zbir godina iskustva po departmentima, dakle:

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

function sumOfExp (niz){
	var sumIT=0;
	var sumEng=0;
	var sumMng=0;
	var sumExp = [];
	for (var i = 0; i < niz.length; i++) {

		if (niz[i].department=== 'IT') {
			sumIT += niz[i].yearsExperience;

		}
		else if (niz[i].department === 'Engineering'){
			sumEng += niz[i].yearsExperience;
		}
		else{
			sumMng += niz[i].yearsExperience;
		}

		
	}
	sumExp.push({IT : sumIT, ENGRINEERING : sumEng, MANAGEMENT : sumMng})
	console.log(sumExp);
}
sumOfExp (people);