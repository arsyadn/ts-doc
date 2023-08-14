// cara 1
// export class User {
//   public name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// cara 2 (easier way)
export class User {
  constructor(public name: string) {}
}

let user = new User("Arsyad");
console.log(user);
