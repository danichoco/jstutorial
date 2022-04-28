const math = require('./math')

function contar(maxcount){
  for(nb=1; nb <= maxcount; nb++){
       console.log(nb);
     }
}

function sumarHastaN(target){
  result = 0;
  for( i = 1; i<= target; i++){
    result= result + i; 
   }
       return result;
}
/*
console.log('aritmetica')
console.log(math.sumar(25, 42 ));
console.log(math.restar(50, 25 ));
console.log(math.multiplicar(30, 4 ));
console.log(math.dividir(100, 10 ));

console.log('valor absoluto')
console.log(math.abs(-250 )); //debe devolver 250
console.log(math.abs(50 )); //debe devolver 50
console.log(math.abs(-30)); //debe devolver 30
console.log(math.abs(100 )); //debe devolver 100

console.log('contando numeros enteros')
console.log('...........')
contar(200)
console.log('...........')
contar(40)
console.log('...........')
contar(50)
console.log('...........')

console.log('..............')
console.log('sumando numeros enteros')
console.log(sumarHastaN(22))
console.log(sumarHastaN(55))
console.log(sumarHastaN(64))
*/

function calcMax(numbers){
    max = 0;
   for(i= 0; i < numbers.lenght; i++){
   
    if(numbers[i] > max){
      max = numbers[i];
  }
}
   return max;
}

console.log(calcMax([5, 10, 4, 8, 20, 6])); //debe devolver 20
console.log(calcMax([400, 1000, 35, 40, 220])); //debe devolver 1000
console.log(calcMax([50, 100, 4444, 800, 203, 7])); //debe devolver 4444