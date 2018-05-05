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