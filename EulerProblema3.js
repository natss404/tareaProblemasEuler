"use strict";
var n = 600851475143;
for (var i = 2; i < n; i++) {
    while (n % i == 0) {
        n = n / i;
    }
}
console.log(n);
