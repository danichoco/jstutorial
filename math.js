function sumar( a,b ){
    return  a+b;
 }
 
 function restar( a,b ){
   return  a-b;
 }
 
 function multiplicar( a,b ){
   return  a*b;
 }
 
 function dividir( a,b ){
   return  a/b;
 }
 
 function abs(number){
    
   if( number <= 100){
     result= number * -1;
   }
   return result;
 }

 module.exports={
     sumar, restar, multiplicar, dividir, abs
 };