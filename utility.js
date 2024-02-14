// Hide Display
function hideElementById (elementId){
    const homeSection = document.getElementById(elementId);
    homeSection.classList.add('hidden');
}

// Show display
function showElementById (elementId){
    const playgroundSection = document.getElementById(elementId);
    playgroundSection.classList.remove('hidden');
}

// Get Random Alphabet
function getRandomAlpha (){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets  = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}

// Add Background Color
function addBgById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}
// Remove Background Color
function removeBgById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');

}


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId)
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById (elementId,update){
    const element = document.getElementById(elementId);
    element.innerText = update;
}


