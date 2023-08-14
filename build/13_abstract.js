"use strict";
class Vehicle {
    start() {
        console.log("Menyalakan Mesin..");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Bike extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
console.log(car.wheels);
car.start();
let bike = new Bike();
console.log(bike.wheels);
bike.start();
