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
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    //   setter
    set email(value) {
        if (value.length < 5) {
            this._email = "Email Salah";
        }
        else {
            this._email = value;
        }
    }
    //   getter
    get email() {
        return this._email;
    }
}
let admin = new Admin("08127328", "Arsyad", 25);
// admin.getName();
// admin.getRole();
// admin.setName("Arsyad");
// admin.email = ".com"; //Email Salah
admin.email = "arsyadnurzaky@gmail.com"; //arsyadnurzaky@gmail.com
console.log(admin);
