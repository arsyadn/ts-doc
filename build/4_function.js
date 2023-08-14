"use strict";
// 1. String untuk return harus string
function getName() {
    return "Halo";
}
console.log(getName());
// 2. Number untuk return harus number
function getAge() {
    return 200;
}
// 3. Void (jika function tsb tidak mau ada return)
function printName(name) {
    console.log(`My name is ${name}`);
}
printName("Arsyad");
// 4. Argument / Params
function multiple(val1, val2) {
    return val1 * val2;
}
console.log(multiple(10, 40));
const penjumlahan = (nilai1, nilai2) => {
    //jika pada params bukan number maka akan error karna tidak sesuai dgn type Tambah
    return nilai1 + nilai2;
};
