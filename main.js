
 const math = require('./math');

function contar(maxcount){
   
    for ( number = 1; number<=maxcount; number=number+1){
    console.log(number);
}
}
contar(1000);
console.log('........');
contar(10);
console.log('.........');
contar(80);
/*
 console.log(math.sumar(2,3 ));
console.log(math.restar(30,3 ));
console.log(math.multiplicar(20, 40 ));
console.log(math.dividir(100,10 ));

console.log(math.abs(-100)); //debe devolver 100
console.log(math.abs( 400)); //debe devolver 400
console.log(math.abs(20)); //debe devolver 20
console.log(math.abs(-10)); //debe devolver 10
*/