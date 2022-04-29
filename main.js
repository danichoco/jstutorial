const math= require('./math')
const nb= require('./number')
 
function arithmetic(){
     console.log('aritmetica')
     console.log(math.sumar(25 , 43))
     console.log(math.restar(50 , 30))
     console.log(math.multiplicar( 100 , 4))
     console.log(math.dividir(500 , 2))
    
}

function absValue(){
     console.log('absoluto')
     console.log(math.abs (25))
     console.log(math.abs(-500))
     console.log(math.abs( 100 ))
     console.log(math.abs( -2))
}
 
function counter(){
    console.log('...........')
    console.log('contando los valores')
    nb.contar(50)
    console.log('...........')
    nb.contar(100)
    console.log('...........')
    nb.contar(80)
}
 
function sumarHastaN(){
    console.log('...........')
    console.log('sumando valores')
    console.log(nb.sumarHastaN(45))
    console.log(nb.sumarHastaN(60))
    console.log(nb.sumarHastaN(100))
    console.log(nb.sumarHastaN(30))
    
}
 
function calcMax(){
    console.log(nb.calcMax([5,10,4,6,20,8]))
    console.log(nb.calcMax([20, 500, 30, 50, 3, 7]))
    console.log(nb.calcMax([15, 8, 6, 55, 43]))
    console.log(nb.calcMax([33, 60, 78, 90]))
}
