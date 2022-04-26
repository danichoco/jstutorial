function sumar (a , b){
    return a+b;
}

function restar (a , b){
    return a-b;
}

function multiplicar (a , b){
    return a*b;
}

function dividir (a , b){
    return a/b;
}

function abs(number){
    result = 0;
    if(number < 0){
     result = number * -1;
 }
 else{            
     result = number;
 }
    return result;
}
console.log(sumar(2,4))
console.log(restar(8,3))
console.log(multiplicar(50, 20))
console.log(dividir(3,6))

console.log(abs(-100)) //debe devolver 100
console.log(abs(60)) //debe devolver 60
console.log(abs(-20)) //debe devolver -20
console.log(dividir(20)) //debe devolver 20
