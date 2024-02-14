// This function is for start the game
function play(){
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('playground');

    setTextElementValueById('life',5);
    setTextElementValueById('score',0);

    continueGame();
}

// This function is for continue the game
function continueGame (){
    const alphabet = getRandomAlpha();
    const currentAplha = document.getElementById('current-alphabet');
    currentAplha.innerText = alphabet;

    addBgById(alphabet);

}

// this function is for update the score and life count.
function handleKeyPassed (event){
    const playerPressed = event.key;

    const currentAplhaElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAplhaElement.innerText;
    const currentoLower = currentAlphabet.toLocaleLowerCase();

    if(playerPressed === currentoLower ){
        // const currentScoreElement = document.getElementById('score');
        // const currentScoreData =  currentScoreElement.innerText;
        // const currentscore = parseInt(currentScoreData);

        // const newScore = currentscore + 1;

        // currentScoreElement.innerText = newScore;

        // removeBgById(playerPressed);
        // continueGame();
        /** Do it different way */

        const currentScore = getTextElementValueById('score');
        const newScore = currentScore + 1;
        setTextElementValueById('score',newScore);
        removeBgById(playerPressed);
        continueGame();
    }
    else{

        const currentLife = getTextElementValueById('life');
        const newLife = currentLife - 1;
        setTextElementValueById('life', newLife);
        // const currentLifeElement = document.getElementById('life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const updateLife = currentLife - 1;

        // currentLifeElement.innerText = updateLife;
        /** Do it different way */

        if(newLife === 0){
            hideElementById('playground');
            showElementById('final-score');
        }
        
    }
}

document.addEventListener('keyup',handleKeyPassed);

