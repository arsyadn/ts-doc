"use strict";
// --- 1. Array Number
let arrNum;
arrNum = [1, 2, 3];
// arrNum = ["Halo", "Halo", "Halo", "Halo"] //maka akan error karna hanya number
// --- 2. Array String
let arrStr;
arrStr = ["Halo", "Halo", "Halo", "Halo"];
// --- 3. Array Any
let arrAny;
arrAny = [2, "Halo", true, [], {}];
// apapun tipe data di value tsb tidak akan error karna any
// --- 4. Tuples (array tipe data yg terbatas)
let arrTuples;
arrTuples = ["Halo", true];
// arrTuples = ['Halo', 90] //maka akan error karna tipe data index ke 1 tidak sesuai
// arrTuples = ['Halo', false, 80] //maka akan error karna panjang arraynya cuma 2
