

function torrar(pao, nome = 'cliente', valor){
    console.log("fazendo torrada com " + pao)
    console.log("pedido feito por " + nome )
    console.log('o valor do pedido é ' + valor)
 }

torrar('pão de forma', 'matheus', 10.90 )  

function multiplicacao(numA, numB){
    let multiplicar = numA * numB
    console.log(multiplicar)
}

multiplicacao(5, 8)  

function multiplicacao(numA, numB){
    let multiplicar = numA * numB
    return multiplicar
}

 let resultado = multiplicacao(9, 42)

 console.log('o resultado da soma é ' + resultado) 

 function firstName(name){
    let primeiroNome = name.split("-")[0]
    return primeiroNome
 }

 let userName = firstName("matheus-ribeiro-da-silva")

 console.log('bem vindo ' + userName)