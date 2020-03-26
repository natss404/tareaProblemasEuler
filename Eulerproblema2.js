"use strict";
var Fibonacci = 0;
var sumafibonacciPares = 0;
var numeroInicial1 = 0;
var numeroInicial2 = 1;
for (var contador = 1; sumafibonacciPares < 4000000; contador++) {
    Fibonacci = numeroInicial1 + numeroInicial2;
    numeroInicial1 = numeroInicial2;
    numeroInicial2 = Fibonacci;
    if (Fibonacci % 2 === 0) {
        sumafibonacciPares = sumafibonacciPares + Fibonacci;
    }
}
console.log(sumafibonacciPares);
