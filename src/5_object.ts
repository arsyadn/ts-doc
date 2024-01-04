type Obj = {
  name: string;
  age: number;
  address: string;
  number?: number; //optional using "?"
};

let dataUser: Obj = {
  name: "Arsyad",
  age: 22,
  address: "Depok",
  //   jika ditambahkan property lagi atau value di property tidak sesuai maka error karna tdk sesuai type Obj
};

// - nested obj
type Person = {
  name: string;
  age: number;
  address: string;
  privacy: {
    ethnic: string;
    religion: string;
  };
};
const handleDetailOfPerson = (person: Person): string => {
  return `Hey ${person.name}, you're a ${person.privacy.ethnic} ${person.privacy.religion}`;
};
const inputObj = {
  name: "Arsyad",
  age: 23,
  address: "Jakarta",
  privacy: {
    ethnic: "Minangnese",
    religion: "Islam",
  },
};
console.log(handleDetailOfPerson(inputObj));

// - readonly
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 1,
  username: "arsyadn",
};

console.log(user.id);
// user.id = 2 //it will return error cause of readonly property aren't able to change the value

// - Intersection objs types
type Color = {
  color: string;
};
type Border = {
  border: number;
};
type ColorBorder = Color & Border;
const colorVal: ColorBorder = {
  color: "white",
  border: 10,
};

type ColorBorderSecond = Color & Border & { width: string };
const colorValSecond: ColorBorderSecond = {
  color: "white",
  border: 10,
  width: "10px",
};
