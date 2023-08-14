// 1. String untuk return harus string
function getName(): string {
  return "Halo";
}
console.log(getName());

// 2. Number untuk return harus number
function getAge(): number {
  return 200;
}

// 3. Void (jika function tsb tidak mau ada return)
function printName(name: string): void {
  console.log(`My name is ${name}`);
}

printName("Arsyad");

// 4. Argument / Params
function multiple(val1: number, val2: number): number {
  return val1 * val2;
}
console.log(multiple(10, 40));

// 5. Function as data type
type Tambah = (val1: number, val2: number) => number;

const penjumlahan: Tambah = (nilai1: number, nilai2: number): number => {
  //jika pada params bukan number maka akan error karna tidak sesuai dgn type Tambah
  return nilai1 + nilai2;
};
