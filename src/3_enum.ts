// enum numeric
enum Months {
  JAN = 1, //default = 0
  FEB, // 2
  MAR = 200,
  APR, //202
  MAY, //203
}

console.log(Months);

// property object pertama dimulai dari 0.

// enum string
enum MonthsStr {
  JAN = "January",
  FEB = "February",
  MAR = "March",
  APR = "April",
  MAY = "May",
  //   JUN, // jika value tidak dimasukkan string maka akan error karna enum adalah increment dari property atasnya
}

console.log(MonthsStr);
