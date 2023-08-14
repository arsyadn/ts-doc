// default parameter
// (jika pada parms itu kosong maka akan diisi dgn nilai defaultnya pada contoh ini defaultnya Nurzaky)

const getFullName = (first: string, last: string = "Nurzaky"): string => {
  return `${first} ${last}`;
};

console.log(getFullName("Arsyad", "Matthew"));

// Arsyad Nurzaky
// Arsyad Matthew

// optional parameter, ditandai dgn tanda tanya (?)
// (jika params itu kosong maka tidak error dan parms tsb diisi dgn undefined)
// (optional parameter tidak bisa dipakai pada type data number, ex: 5 + undefined = NaN)

const getYourName = (first: string, last?: string): string => {
  return `${first} ${last}`;
};
console.log(getYourName("Arsyad", "Matthew"));

// Arsyad Undefined
// Arsyad Matthew
