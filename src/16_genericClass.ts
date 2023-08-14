class Antrian<T> {
  private data: T[];

  //   cara 1 menggunakan spread di parameter
  constructor(...elements: T[]) {
    this.data = elements;
  }

  //   cara 2 tanpa spread di parameter
  //   constructor(elements: T[]) {
  //     this.data = elements;
  //   }

  // element: T karna ingin hanya 1 value yg ditambahkan bukan satu array
  add(element: T): void {
    this.data.push(element);
  }
  addMultipleVal(...elements: T[]): void {
    this.data.push(...elements);
  }
  showArr(): T[] {
    return this.data;
  }
}
// jika menggunakan pemanggilan cara 1 yaitu spread maka di parmaternya tinggal masukkan value
let numberAntrian = new Antrian<number>(1, 2, 3);

// jika menggunakan cara 2 yaitu tidak menggunakan spread maka paramternya harus ditambah array [] karna ts membaca hanya 1 paramter
// let numberAntrian = new Antrian<number>([1, 2, 3]);

numberAntrian.add(4);
numberAntrian.addMultipleVal(5, 6, 7);
console.log(numberAntrian.showArr()); //[ 1, 2, 3, 4, 5, 6, 7]

// bisa jg jika ingin beda2 tipe data dalam 1 array
let randomAntrian = new Antrian<number | string>("1", 2, 3, "4", 5);
randomAntrian.add("6");
randomAntrian.addMultipleVal(7, "8", "9");
console.log(randomAntrian.showArr()); // '1', 2, 3, '4', 5, '6', 7, '8', '9']
