interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string;
  isGaming: boolean;
  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }
  on(): void {
    console.log("Nyala");
  }
  off(): void {
    console.log("Mati");
  }
}

class Macbook implements Laptop {
  name: string;
  isKeyboardLight: boolean;
  constructor(name: string, isKeyboardLight: boolean) {
    this.name = name;
    this.isKeyboardLight = isKeyboardLight;
  }
  on(): void {
    console.log("Nyala");
  }
  off(): void {
    console.log("Mati");
  }
}

let asus = new Asus("Asus Zenbook", true);
console.log(asus);
console.log(asus.name);
console.log(asus.isGaming);
asus.on();
asus.off();

let macbook = new Macbook("MacBook Pro", true);
console.log(macbook);
macbook.on();
macbook.off();
