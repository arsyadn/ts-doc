type Obj = {
  name: string;
  age: number;
  address: string;
};

let dataUser: Obj = {
  name: "Arsyad",
  age: 22,
  address: "Depok",
  //   jika ditambahkan property lagi atau value di property tidak sesuai maka error karna tdk sesuai type Obj
};
