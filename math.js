function sumar( a,b){
    return a+b;
}

function restar( a,b){
    return a-b;
}

function multiplicar( a,b){
    return a*b;
}

function dividir( a,b){
    return a/b;
}

 function abs(number){
     result = 0;
       
          if(number < 0){
         result = number * -1;
      }
      else{
          return number;
      }
      return number;
     }

module.exports={
  sumar, restar, multiplicar, dividir, abs
}