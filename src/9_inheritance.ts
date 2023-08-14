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
  getRole(): { read: boolean; write: boolean } {
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
