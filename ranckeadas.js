function jogador(vitorias, derrotas){
    let resultado = vitorias - derrotas
        return resultado
     
}
let saldoRanckeadas = jogador(85, 20 )

if(saldoRanckeadas <10){
    console.log("o jogador tem saldo de " + saldoRanckeadas + " vitorias, e esta no nivel ferro")
}
else if(saldoRanckeadas <=20 ){
    console.log("o jogador tem saldo de " + saldoRanckeadas + " vitorias, e esta no nivel bronze")
}
else if (saldoRanckeadas <=50 ){
    console.log('o jogador tem saldo de ' + saldoRanckeadas + ' vitorias, e esta no nivel prata')
}   
else if (saldoRanckeadas >=50 ){
    console.log('o jogador tem saldo de ' + saldoRanckeadas + " vitorias, e esta no nivel ouro")
}
else{
    console.log('O jogador ainda não teve nenhuma partida')
}
