let Fibonacci=0;
let sumafibonacciPares=0;
let numeroInicial1=0;
let numeroInicial2=1;
for (let contador = 1; sumafibonacciPares < 4000000; contador++) {
    Fibonacci=numeroInicial1+numeroInicial2;
    numeroInicial1=numeroInicial2;
    numeroInicial2=Fibonacci;  
    if(Fibonacci%2===0){
        sumafibonacciPares=sumafibonacciPares+Fibonacci;
    }
         
}
console.log(sumafibonacciPares); 