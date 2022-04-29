const math = require('./math')
const nbs = require('./numbers')


function arithmethic(){
    console.log('..........')
    console.log('aritmetica')
    console.log(math.sumar(23, 24))
    console.log(math.restar(46, 44))
    console.log(math.multiplicar(3, 35))
    console.log(math.dividir(44, 2))
}

function absValue() {
    console.log('......')
    console.log('absoluto')
    console.log(math.abs(400))//debe devolver 100
    console.log(math.abs(-60))//debe devolver 60
    console.log(math.abs(440))//debe devolver 44
    console.log(math.abs(-490))//debe devolver 490

}
    
    function countNumbers() {
        console.log('......')
        console.log('contando los valores')
        console.log('......')
        nbs.contar(40)
        console.log('......')
        nbs.contar(55)
        console.log('......')
        nbs.contar(60)
        console.log('......')
        nbs.contar(35)
        
    }

    function sumarHasta(){
 console.log('sumando hasta N')
 console.log(nbs.sumarHastaN(40))
 console.log(nbs.sumarHastaN(200))
 console.log(nbs.sumarHastaN(30))
 console.log(nbs.sumarHastaN(6))
}

function calcularMayor(){
console.log('calculando el mayor')
console.log(nbs.calcMax([5,10,4,8,20,6]));
}


arithmethic()
absValue()
countNumbers()
sumarHasta()
calcularMayor()