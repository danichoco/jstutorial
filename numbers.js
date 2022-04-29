function contar (maxCount){
    for( number = 1; number <= maxCount; number++){
        console.log(number);
    }
}

function sumarHastaN(target){
    result = 0;
     for( i =1; i<= target; i++){
         result = result + i;
     } 
     return result;
}

function calcMax(numbers) {
    max = 0;
    for( i =0; i < numbers.length; i++){
       if(numbers[i] > max) {
            max=numbers[i];
       }
    }
    return max;
}


module.exports={
    contar, sumarHastaN, calcMax
}