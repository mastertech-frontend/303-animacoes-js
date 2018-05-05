let mario = document.querySelector('img');
let posicaoX = 0;
let posicaoY = 0;
let incremento = 100;
let andando = false;

window.onkeydown = function(event){
    if(event.key == 'ArrowDown'){
        posicaoY += incremento;
    }

    if(event.key == 'ArrowUp'){
        posicaoY -= incremento;
    }

    if(event.key == 'ArrowLeft'){
        posicaoX -= incremento;
    }

    if(event.key == 'ArrowRight'){
        posicaoX += incremento;
    }

    if(andando){
        mario.src = 'img/mario-jump.png';
    }else{
        mario.src = 'img/mario.ico';
    }

    andando = !andando;

    mario.style.transform = ` translateX(${posicaoX}%) translateY(${posicaoY}%)`;


    // console.log(event);
    // // mario.style.transform = 'translateX(100%)';

    // if(mario.classList.contains('mover')){
    //     mario.classList.remove('mover');
    // }else{
    //     mario.classList.add('mover');
    // }
    
}