let matrix = document.querySelector('#matrix');

setInterval(function(){
    let quantidade = 10 + Math.floor(Math.random() * 40);

    for(let i = 0; i < quantidade; i ++){
        let p = document.createElement('p');
        p.innerHTML = 'lorem ipsum dolor sit amet';
        p.style.left = Math.random() * window.innerWidth + 'px';
        
        let delay = Math.random();
        let opacity = Math.random();
        p.style.animationDelay = delay + 's';
        p.style.opacity = opacity;
        matrix.appendChild(p);

        setTimeout(function(){
            matrix.removeChild(p);
        }, 5000);
    }
}, 1000);
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