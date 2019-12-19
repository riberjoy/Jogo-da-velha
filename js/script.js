var player1 = true;
var player2 = false;

var pontosPlay1= 0;
var pontosPlay2=0;

var vencedor = false;

var valor1;
var valor2;
var valor3;

var tabuleiro =  [0,0,0,0,0,0,0,0,0];

function selecionaPrimeiro(){
    var numero = Math.random() * (2 - 1) + 1;
    if(numero <= 1.5){
        document.getElementById("mensagem").innerHTML = "Player 1 inicia!";
        player1 = true;
        player2 = false;
    }else{
        document.getElementById("mensagem2").innerHTML = "Player 2 inicia!";
        player1 = false;
        player2 = true;
    }
    document.getElementById("menu").style.display = "none";
    document.getElementById("player1").style.display = "flex";
    document.getElementById("player2").style.display = "flex ";
    document.getElementById("tabuleiro").style.display = "grid";

    escolherPersonagem();
}

function escolherPersonagem(){
    var personagem1 = Math.floor(Math.random() * (9));
    var personagem = 'personagem_0'+personagem1;
    var img = document.getElementById("person1");
    img.src = "../Jogo da velha/imagens/"+personagem+".png";

    do{
        var personagem2 = Math.floor(Math.random() * (9));
    }while(personagem1 == personagem2)
    
    personagem = 'personagem_0'+personagem2;
    var img = document.getElementById("person2");
    img.src = "../Jogo da velha/imagens/"+personagem+".png";
}

function destaca(p1, p2, p3){
    valor1 = 'q'+(p1+1);
    valor2 = 'q'+(p2+1);
    valor3 = 'q'+(p3+1);

    vencedor = true;

    document.getElementById(valor1).style.border =  "2px solid rgb(0, 255, 0)";
    document.getElementById(valor1).style.background = "rgba(0, 255, 0, 0.349)";
    document.getElementById(valor2).style.border =  "2px solid rgb(0, 255, 0)";
    document.getElementById(valor2).style.background = "rgba(0, 255, 0, 0.349)";
    document.getElementById(valor3).style.border =  "2px solid rgb(0, 255, 0)";
    document.getElementById(valor3).style.background = "rgba(0, 255, 0, 0.349)";
}

function alteraPlacar(op){
    if(op==1){
        document.getElementById("mensagem").innerHTML = "VELHA!";
        document.getElementById("mensagem2").innerHTML = "VELHA!";
        document.getElementById("imagemPlayer1").style.border = "3px solid rgb(255, 4, 0)";
        document.getElementById("imagemPlayer2").style.border = "3px solid rgb(255, 4, 0)";
    }else if(player1 == true){
        pontosPlay1++;
        document.getElementById("mensagem").innerHTML = "VENCEDOR!";
        document.getElementById("pontosPlayer1").innerHTML = pontosPlay1.toString();
        document.getElementById("imagemPlayer1").style.border = "3px solid rgb(255, 4, 0)";
    }else{
        pontosPlay2++;
        document.getElementById("mensagem2").innerHTML = "VENCEDOR!";
        document.getElementById("pontosPlayer2").innerHTML = pontosPlay2.toString();
        document.getElementById("imagemPlayer2").style.border = "3px solid rgb(255, 4, 0)";
    }

    document.getElementById("btnRestart").style.display = "block";
}

function limpaTabuleiro(){
    for(var i=0; i<9;i++){
        var aux = 'quad'+(i+1);
        var img = document.getElementById(aux);
        img.src = "../Jogo da velha/imagens/fundo.png";
        tabuleiro[i]=0;   
    }
    vencedor = false;

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
    escolherPersonagem();
    selecionaPrimeiro();
}

function analiseTabuleiro(){
    
    if(((tabuleiro[0]==tabuleiro[1]) && tabuleiro[1] == tabuleiro[2]) && tabuleiro[2] != 0){ //linha 1
        destaca(0,1,2);
        alteraPlacar();
    }else if(((tabuleiro[3]==tabuleiro[4]) && tabuleiro[4] == tabuleiro[5]) && tabuleiro[5] != 0){//linha 2
        destaca(3,4,5);
        alteraPlacar();
    }else if(((tabuleiro[6]==tabuleiro[7]) && tabuleiro[7] ==tabuleiro[8]) && tabuleiro[8] != 0){//linha 3
        destaca(6,7,8);
        alteraPlacar();
    }else if(((tabuleiro[0]==tabuleiro[3]) && tabuleiro[3] ==tabuleiro[6]) && tabuleiro[6] != 0){//coluna 1
        destaca(0,3,6);
        alteraPlacar();
    }else if(((tabuleiro[1]==tabuleiro[4]) && tabuleiro[4] ==tabuleiro[7]) && tabuleiro[7] != 0){//coluna 2
        destaca(1,4,7);
        alteraPlacar();
    }else if(((tabuleiro[2]==tabuleiro[5]) && tabuleiro[5] ==tabuleiro[8]) && tabuleiro[8] != 0){//coluna 3
        destaca(2,5,8);
        alteraPlacar();
    }else if(((tabuleiro[0]==tabuleiro[4]) && tabuleiro[4] ==tabuleiro[8]) && tabuleiro[8] != 0){//diagonal 1
        destaca(0,4,8);
        alteraPlacar();
    }else if(((tabuleiro[2]==tabuleiro[4]) && tabuleiro[4] ==tabuleiro[6]) && tabuleiro[6] != 0){//diagonal 2
        destaca(2,4,6);
        alteraPlacar();
    }else if(!tabuleiro.includes(0)){
        alteraPlacar(1);
    }
}

function jogada(posi){
    if(tabuleiro[(posi-1)] == 0 && vencedor==false){
        var apelidoTag = 'quad'+posi;
        if(player1 == true){
            var img = document.getElementById(apelidoTag);
            img.src = "../Jogo da velha/imagens/xis.svg";

            tabuleiro[posi-1] = 1;
            document.getElementById("mensagem").innerHTML = "";
            analiseTabuleiro();

            player1 = false;
            player2 = true;

            if(vencedor==false){
                document.getElementById("imagemPlayer2").style.border = "3px solid rgb(255, 4, 0)";
                document.getElementById("imagemPlayer1").style.border = "3px solid rgb(255, 255, 255)";
            }else{
                document.getElementById("imagemPlayer2").style.border = "3px solid rgb(255, 255, 255)";
                document.getElementById("imagemPlayer1").style.border = "3px solid rgb(255, 255, 255)";
            }
            
        }else if(player2 == true){
            var img = document.createElement("IMG");
            var img = document.getElementById(apelidoTag);
            img.src = "../Jogo da velha/imagens/circulo.svg";

            tabuleiro[posi-1] = 2;
            document.getElementById("mensagem2").innerHTML = "";
            
            analiseTabuleiro();
            
            player1 = true;
            player2 = false;

            if(vencedor == false){
                document.getElementById("imagemPlayer1").style.border = "3px solid rgb(255, 4, 0)";
                document.getElementById("imagemPlayer2").style.border = "3px solid rgb(255, 255, 255)";
            }else{
                document.getElementById("imagemPlayer2").style.border = "3px solid rgb(255, 255, 255)";
                document.getElementById("imagemPlayer1").style.border = "3px solid rgb(255, 255, 255)";
            }
        }
    }
}