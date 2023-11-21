function direcao(e){
    var direcao = document.getElementById("slide");

    if(e == 1){
        //esquerda

        direcao.scrollLeft = direcao.scrollLeft - 200;
    }else if(e == 2){
        //direita

        direcao.scrollLeft = direcao.scrollLeft + 200;
    }
}









// buscar os elementos

const left = document.querySelector('#bnt-left');
const right = document.querySelector('#bnt-right');
const block = document.querySelectorAll('.block');

// configuração do autoplay
const auto = true;
// intervalo de transição
const intervalo = 1000;
// exibição do intervalo
let temporizador;

// eventos
left.addEventListener('click', leftblock);
right.addEventListener('click', rightblock);

function rightblock(){
    // localizando a classe atual
    const atual = document.querySelector('.atual');
    // remover a classe atual do elemento selecionado
    atual.classList.remove('atual');

    // verificar se existe um próximo elemento
    if (atual.previousElementSibling){
        atual.previousElementSibling.classList.add('atual');
    }else{
        block[0].classList.add('atual');
    }
}

function rightblock(){
     // localizando a classe atual
     const atual = document.querySelector('.atual');
     // remover a classe atual do elemento selecionado
     atual.classList.remove('atual');

     if (atual.previousElementSibling){
        atual.previousElementSibling.classList.add('atual');
     }else{
        block[block.length-1].classList.add('atual');
     }
}
