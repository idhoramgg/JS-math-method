"use strict"

// Math random returns a random number from 0 to 1 (not including 1).

alert(Math.random()) // 0.1234567894322
alert(Math.random()) // 0.5435252343232
alert(Math.random()) // ... (any random numbers)

// math.max returns the greatest
// math.max returns the smallest

alert(Math.max(3, 5, -10, 0, 1)) // 5
alert(Math.min(1, 2)) // 1

//math.pow (kiri sebagai yang akan di naikan/pangkat)(kanan sebagai jumlah pangkat)
alert(Math.pow(2, 10)) // 2 in power 10 = 1024

//math.floor (di bulatkan ke angka kecil, (bawah))
console.log(Math.floor(20.2123))

//math.ceil pembulatan ke atas
console.log(Math.ceil(5.2))

//math.round dibulatkan ke yang terdekat
console.log(Math.round(24.6))

//remoce anyting after the decimal points without rounding
console.log(Math.trunc(5.1))