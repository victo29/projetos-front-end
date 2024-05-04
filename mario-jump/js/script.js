const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const background = document.querySelector('.background')
let perdeu = false;
const jump = ()=>{
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    },900);
}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition)

    if (pipePosition <= 120 && marioPosition < 80 && pipePosition > 0){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "img/mario-jump-images/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);
        perdeu = true;
        background.classList.remove('escondido')
    };

},10);

let contador = 0;
const pontuacao = document.querySelector('.pontuacao');
const alteraPontuacao = setInterval( () =>{
    contador += 1;
    pontuacao.textContent = contador;

    if(perdeu){
        clearInterval(alteraPontuacao);
    };
} ,100);



document.addEventListener('keydown', jump);
