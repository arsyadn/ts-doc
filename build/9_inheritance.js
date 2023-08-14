"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
// public = bisa diakses semua class
// protected = bisa diakses class tsb dan turunannya
// private = hanya bisa diakses class tsb.
class Admin extends User {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
}
let admin = new Admin("Arsyad", 25);
// admin.getName();
// admin.getRole();
// admin.setName("Arsyad");
console.log(admin);
