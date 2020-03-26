let suma=0;
for (let contador = 1; contador < 1000; contador++) {
    if (contador%3===0 ||  contador%5===0) {
        suma+=contador;
    }
    
}
console.log(suma);
