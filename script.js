let randomNumber = Math.floor(Math.random() * 100) + 1; //creando variables y Math es una libreria que importo, me va dar numero random de 1 a 100 y no incluye 0

const guesses = document.querySelector('.guesses'); //const no se puede csambiar 
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector ('.guessField');

let guessCount = 1;
let resetButton;


function checkGuess() {
    let userGuess = Number(guessField.value); //tomando el valor de guessField

    if(userGuess === randomNumber){
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();

    } else if (guessCount === 10){
        lastResult.textContent = 'Game Over!!!';
        setGameOver();

    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber){
            lowOrHi.textContent = 'Too low!';

        } else{
            lowOrHi.textContent = 'Too High!'
        }
    }
    guessCount ++;
    guessField.value = '';
    guessField.focus();

}

guessSubmit.addEventListener('click', checkGuess);

//empezar el juego de nuevo una vez finalizado
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start New Game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p'); //querySelectorAll me devuelve varios elementos
    for(let i = 0; i < resetParas.length; i++ ){
        resetParas[i].textContent = '';

    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
} 
