// cara 1
// let coba: string = "Apa";
// cara 2
// let coba = "Apa";
// cara 3
// let coba: string;
// cara 4
// type nama = string;
// let kalimat: nama = "Halo";

// --- 1. String
let apayaStr: string = "Hello World";
apayaStr = "Gatau";
// apaya = 50 //maka akan error karna bukan string

// --- 2. Number
let apayaNum: number;
apayaNum = 50;
// apayaNum = true //maka akan error karna bukan number

// --- 3. Boolean
let apayaBoolean: boolean;
apayaBoolean = true;
apayaBoolean = false;
// apayaBoolean = "Halo"; //maka akan error karna bukan boolean

// --- 4. Any
let apayaAny: any;
apayaAny = true;
apayaAny = "Halo";
apayaAny = 50 || false || [];
// tipe data any tidak akan error apapun value didalamnya layaknya JS biasa.
