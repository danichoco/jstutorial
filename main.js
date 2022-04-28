
 const math = require('./math');

function contar(maxcount){
   
    for ( n = 1; n<=maxcount; n++){
    console.log(n);
  }
}
  function sumarHastaN(target){
       result = 0;
   
       for(i = 1; i <= target; i++){
        
        result += i;
     }
     return result;
  }

 console.log('........');
 console.log('aritmetica');
 console.log(math.sumar(2,3 ));
 console.log(math.restar(30,3 ));
 console.log(math.multiplicar(20, 40 ));
 console.log(math.dividir(100,10 ));

 console.log('........');
 console.log('valor absoluto');
 console.log(math.abs(-100)); //debe devolver 100
 console.log(math.abs( 400)); //debe devolver 400
 console.log(math.abs(20)); //debe devolver 20
 console.log(math.abs(-10)); //debe devolver 10

 console.log('........');
 console.log('contando numeros enteros');
 contar(50);
 console.log('........');
 contar(10);
 console.log('.........');
 contar(80);

 console.log('sumando numeros enteros');
 console.log('.........');
 console.log(sumarHastaN(2));
 console.log(sumarHastaN(10));
 console.log(sumarHastaN(20));