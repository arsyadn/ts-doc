"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("Nyala");
    }
    off() {
        console.log("Mati");
    }
}
class Macbook {
    constructor(name, isKeyboardLight) {
        this.name = name;
        this.isKeyboardLight = isKeyboardLight;
    }
    on() {
        console.log("Nyala");
    }
    off() {
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
