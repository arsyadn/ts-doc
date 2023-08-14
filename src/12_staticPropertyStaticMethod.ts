export class User {
  name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }
  setName(value: string) {
    this.name = value;
  }
  getName = (): string => {
    return this.name;
  };
}

// public = bisa diakses semua class
// protected = bisa diakses class tsb dan turunannya
// private = hanya bisa diakses class tsb.

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  // static property
  static getName: string = "Admin";

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  //   setter
  set email(value: string) {
    if (value.length < 5) {
      this._email = "Email Salah";
    } else {
      this._email = value;
    }
  }

  //   getter
  get email(): string {
    return this._email;
  }

  //   static method
  static getNameRole() {
    return "Halo";
  }
}

// bukan static propety
// let admin = new Admin("08127328", "Arsyad", 25);

// static property
// let admin = Admin.getName;
// console.log(admin);

// static method
let admin = Admin.getNameRole();
console.log(admin);
