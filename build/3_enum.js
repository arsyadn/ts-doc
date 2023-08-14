"use strict";
// enum numeric
var Months;
(function (Months) {
    Months[Months["JAN"] = 1] = "JAN";
    Months[Months["FEB"] = 2] = "FEB";
    Months[Months["MAR"] = 200] = "MAR";
    Months[Months["APR"] = 201] = "APR";
    Months[Months["MAY"] = 202] = "MAY";
})(Months || (Months = {}));
console.log(Months);
// property object pertama dimulai dari 0.
// enum string
var MonthsStr;
(function (MonthsStr) {
    MonthsStr["JAN"] = "January";
    MonthsStr["FEB"] = "February";
    MonthsStr["MAR"] = "March";
    MonthsStr["APR"] = "April";
    MonthsStr["MAY"] = "May";
    //   JUN, // jika value tidak dimasukkan string maka akan error karna enum adalah increment dari property atasnya
})(MonthsStr || (MonthsStr = {}));
console.log(MonthsStr);
