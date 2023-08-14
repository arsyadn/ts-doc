"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Keyboard_1 = require("./Keyboard");
class BaseLaptop {
    constructor(name, type, withNumeric, withTouchButton) {
        this.name = name;
        this.type = type;
        this.withNumeric = withNumeric;
        this.withTouchButton = withTouchButton;
    }
    a() {
        return (0, Keyboard_1.a)();
    }
    b() {
        return (0, Keyboard_1.b)();
    }
}
exports.default = BaseLaptop;
