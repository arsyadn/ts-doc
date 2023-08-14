"use strict";
// cara 1
// export class User {
//   public name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// cara 2 (easier way)
class User {
    constructor(name) {
        this.name = name;
    }
}
exports.User = User;
let user = new User("Arsyad");
console.log(user);
