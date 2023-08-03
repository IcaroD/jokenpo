var pedra = false 
var papel = false
var tesoura = false

function selectTesoura(){
    tesoura = true;
    pedra = false;
    papel = false;
}

function selectPapel(){
    tesoura = false;
    pedra = false;
    papel = true;
}

function selectPedra(){
    tesoura = false;
    pedra = true;
    papel = false;
}

function realizarJogada()

    var random = Math.floor(Math.random() * 3);

    if (random == 0){
        resultadoSorteio = 'tesoura';
    }
    else if (random == 1){
        resultadoSorteio = 'papel'
    }
    else{
        resultadoSorteio = 'pedra'
    }

    if ((pedra == true && resultadoSorteio == 'tesoura') || (tesoura == true && resultadoSorteio == 'papel') || (papel == true && resultadoSorteio == 'pedra')){
        document.getElementById("ganhador").innerHTML = "Usuário venceu."
    }
    else if ((papel == true && resultadoSorteio == 'tesoura') || (pedra == true && resultadoSorteio == 'papel') || (tesoura == true && resultadoSorteio == 'pedra')){
        document.getElementById("ganhador").innerHTML = "Computador venceu."
    }
    else if ((tesoura == true && resultadoSorteio == 'tesoura') || (papel == true && resultadoSorteio == 'papel') || (pedra == true && resultadoSorteio == 'pedra')){
        document.getElementById("ganhador").innerHTML = "Houve empate."
    }