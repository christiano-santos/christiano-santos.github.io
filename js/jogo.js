


//pegar altura e largura do navegador;
var altura = 0;
var largura = 0;
var vidas = 3;
var tempo = 10;
var nivel = window.location.search;
//43256520359 21071971
var criarMosquitoTempo = 1500;
nivel = (nivel.replace('?',''));

if (nivel === 'normal') {
    var criarMosquitoTempo = 1500;
} else if(nivel === 'dificil'){
    var criarMosquitoTempo = 1000;
}else if(nivel === 'chuqnoia'){
   
    var criarMosquitoTempo = 750;
}


function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    // console.log(altura, largura);
};

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function(){
    tempo -= 1;
    if(tempo === -1){
        var sound = document.getElementById("youwin");
        sound.play();
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        alert('Ganhou Mizeravi!');
        window.location.href='win.html';
    }else{
    document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000);

function removeVida() {

    if(vidas == 0){
        var sound = document.getElementById("youlose");
        sound.play();
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        alert('Perdeu PlayBoy');
        window.location.href='gameover.html';
    }else{
        document.getElementById('v'+vidas).src = "img/coracao_vazio.png"; 
        --vidas;
    }
    
}

function funcaoRandomina() {
    //remove mosquito caso exista
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
        removeVida();
        // console.log(document.getElementById('v1').src);
        // console.log('removeu mosquito')
    }
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;
    // console.log(posicaoX, posicaoY)

    var mosquito = document.createElement('img');
    mosquito.src = 'img/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function () {
        var sound = document.getElementById("som");
        sound.play();
        this.remove();
        console.log('Elemento clicado a tempo!')
    }
    document.body.appendChild(mosquito);
};

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);
    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}


// file:///home/christiano/Documentos/JavaScript/img/avainadepau.png
// file:///home/christiano/Documentos/JavaScript/Jogo/img/avainadepau.png