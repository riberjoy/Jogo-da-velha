var player1 = true;
var player2 = false;

var pontosPlay1= 0;
var pontosPlay2=0;

var vencedor;
var valor1;
var valor2;
var valor3;

var viloes = [1,2,3,4,5,6,7];
var coragem = [1,2,3,4,5,6,7,8,9,10];
var eustacio = [1,2,3];
var muriel = [1,2,3];

var tabuleiro =  [0,0,0,0,0,0,0,0,0];


function destaca(p1, p2, p3){
    valor1 = 'q'+(p1+1);
    valor2 = 'q'+(p2+1);
    valor3 = 'q'+(p3+1);

    document.getElementById(valor1).style.border =  "2px solid rgb(0, 255, 0)";
    document.getElementById(valor1).style.background = "rgba(0, 255, 0, 0.349)";
    document.getElementById(valor2).style.border =  "2px solid rgb(0, 255, 0)";
    document.getElementById(valor2).style.background = "rgba(0, 255, 0, 0.349)";
    document.getElementById(valor3).style.border =  "2px solid rgb(0, 255, 0)";
    document.getElementById(valor3).style.background = "rgba(0, 255, 0, 0.349)";
}

function alteraPlacar(jogador){
    if(jogador==1){
        pontosPlay1++;
        document.getElementById("mensagem").innerHTML = "VENCEDOR!";
        document.getElementById("pontosPlayer1").innerHTML = pontosPlay1.toString();
        document.getElementById("imagemPlayer1").style.border = "3px solid rgb(255, 4, 0)";

    }else if(jogador==2){
        pontosPlay2++;
        document.getElementById("mensagem2").innerHTML = "VENCEDOR!";
        document.getElementById("pontosPlayer2").innerHTML = pontosPlay2.toString();
        document.getElementById("imagemPlayer2").style.border = "3px solid rgb(255, 4, 0)";
    }else{
        document.getElementById("mensagem").innerHTML = "VELHA!";
        document.getElementById("mensagem2").innerHTML = "VELHA!";
        document.getElementById("imagemPlayer1").style.border = "3px solid rgb(255, 4, 0)";
        document.getElementById("imagemPlayer2").style.border = "3px solid rgb(255, 4, 0)";
    }
    document.getElementById("btnRestart").style.display = "block";
}

function limpaTabuleiro(){
    for(var i=0; i<9;i++){
        var aux = 'quad'+(i+1);
        var img = document.getElementById(aux);
        img.src = "../Jogo-da-velha-master/imagens/fundo.png";
        tabuleiro[i]=0;   
    }
    vencedor = null;

    document.getElementById("mensagem").innerHTML = "";
    document.getElementById("mensagem2").innerHTML = "";

    document.getElementById(valor1).style.border =  "none";
    document.getElementById(valor1).style.background = "rgba(255, 212, 212, 0.39)";
    document.getElementById(valor2).style.border =  "none";
    document.getElementById(valor2).style.background = "rgba(255, 212, 212, 0.39)";
    document.getElementById(valor3).style.border =  "none";
    document.getElementById(valor3).style.background = "rgba(255, 212, 212, 0.39)";

    document.getElementById("imagemPlayer1").style.border = "3px solid white";
    document.getElementById("imagemPlayer2").style.border = "3px solid white";

    document.getElementById("btnRestart").style.display = "none";
}

function analiseTabuleiro(){
    if((tabuleiro[0]==1) && (tabuleiro[1]==1) && (tabuleiro[2]==1)){ //linha 1
        destaca(0,1,2);
        alteraPlacar(1);
        vencedor = 1;
    }else if(tabuleiro[3]==1 && tabuleiro[4]==1 && tabuleiro[5]==1){//linha 2
        destaca(3,4,5);
        alteraPlacar(1);
        vencedor = 1;
    }else if(tabuleiro[6]==1 && tabuleiro[7]==1 && tabuleiro[8]==1){//linha 3
        destaca(6,7,8);
        alteraPlacar(1);
        vencedor = 1;
    }else if(tabuleiro[0]==1 && tabuleiro[3]==1 && tabuleiro[6]==1){//coluna 1
        destaca(0,3,6);
        alteraPlacar(1);
        vencedor = 1;
    }else if(tabuleiro[1]==1 && tabuleiro[4]==1 && tabuleiro[7]==1){//coluna 2
        destaca(1,4,7);
        alteraPlacar(1);
        vencedor = 1;
    }else if(tabuleiro[2]==1 && tabuleiro[5]==1 && tabuleiro[8]==1){//coluna 3
        destaca(2,5,8);
        alteraPlacar(1);
        vencedor = 1;
    }else if(tabuleiro[0]==1 && tabuleiro[4]==1 && tabuleiro[8]==1){//diagonal 1
        destaca(0,4,8);
        alteraPlacar(1);
        vencedor = 1;
    }else if(tabuleiro[2]==1 && tabuleiro[4]==1 && tabuleiro[6]==1){//diagonal 2
        destaca(2,4,6);
        alteraPlacar(1);
        vencedor = 1;
    }else if(tabuleiro[0]==2 && tabuleiro[1]==2 && tabuleiro[2]==2){ //linha 1
        destaca(0,1,2);
        alteraPlacar(2);
        vencedor = 2;
    }else if(tabuleiro[3]==2 && tabuleiro[4]==2 && tabuleiro[5]==2){//linha 2
        destaca(3,4,5);
        alteraPlacar(2);
        vencedor = 2;
    }else if(tabuleiro[6]==2 && tabuleiro[7]==2 && tabuleiro[8]==2){//linha 3
        destaca(6,7,8);
        alteraPlacar(2);
        vencedor = 2;
    }else if(tabuleiro[0]==2 && tabuleiro[3]==2 && tabuleiro[6]==2){//coluna 1
        destaca(0,3,6);
        alteraPlacar(2);
        vencedor = 2;
    }else if(tabuleiro[1]==2 && tabuleiro[4]==2 && tabuleiro[7]==2){//coluna 2
        destaca(1,4,7);
        alteraPlacar(2);
        vencedor = 2;
    }else if(tabuleiro[2]==2 && tabuleiro[5]==2 && tabuleiro[8]==2){//coluna 3
        destaca(2,5,8);
        alteraPlacar(2);
        vencedor = 2;
    }else if(tabuleiro[0]==2 && tabuleiro[4]==2 && tabuleiro[8]==2){//diagonal 1
        destaca(0,4,8);
        alteraPlacar(2);
        vencedor = 2;
    }else if(tabuleiro[2]==2 && tabuleiro[4]==2 && tabuleiro[6]==2){//diagonal 2
        destaca(2,4,6);
        alteraPlacar(2);
        vencedor = 2;
    }else if(!tabuleiro.includes(0)){
        alteraPlacar(3);
    }
}

function jogada(posi){
    if(tabuleiro[(posi-1)] == 0 && vencedor==null){
        var apelidoTag = 'quad'+posi;
        if(player1 == true){
            var img = document.getElementById(apelidoTag);
            img.src = "../Jogo-da-velha-master/imagens/xis.svg";
            
            player1 = false;
            player2 = true;    

            tabuleiro[posi-1] = 1;
            analiseTabuleiro();

        }else if(player2 == true){
            var img = document.createElement("IMG");
            var img = document.getElementById(apelidoTag);
            img.src = "../Jogo-da-velha-master/imagens/circulo.svg";

            player1 = true;
            player2 = false;

            tabuleiro[posi-1] = 2;
            analiseTabuleiro();
        }
    }
}