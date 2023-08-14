// ts biasa without generic
// function getTheName(value: any) {
//   return value;
// }
// console.log(getTheName("Arsyad").length);
// console.log(getTheName(123).length); //jika tanpa generic maka hasilnya undefined karna memang number ga bisa pake length

// generic
// 1. function biasa
// function getTheName<T>(value: T) {
//   return value;
// }

// console.log(getTheName("Arsyad"));
// // console.log(getTheName(123).length); //jika di generic ditambah .length maka akan otomatis error
// console.log(getTheName(123)); //sebagai gantinya jika ketik . (titik) maka akan otomatis ada method bawaan number sendiri

// 2. arrow function
// const getTheName = <T>(value: T) => {
//   return value;
// };
// console.log(getTheName("Arsyad"));
// console.log(getTheName(123));
