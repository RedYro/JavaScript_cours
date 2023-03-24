const inputs = document.querySelector(`.input`),
resetBtn = document.querySelector(`.btn-reset`),
hint = document.querySelector(`.hint span`),
wrongLetter = document.querySelector(`.wrong-letter`),
typingInput = document.querySelector(`.typing-text`),
guessLeft = document.querySelector(`.guessLeft`);

let word, maxGuesses, corrects = [], incorrects = [];

function randomWord(){
    let randomObject = wordList[Math.floor(Math.random() * wordList.length)];
    word = randomObject.word;
    maxGuesses = word.length >= 5 ? 8 : 6;correctLetters = [];  
    incorrectLetters = [];
    hint.innerText = randomObject.hint;
    // guessLeft.innerText = maxGuesses;
    wrongLetter.innerHTML = incorrects;
    let html = ``;
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
    // console.log(randomObject);
}
randomWord()

function initGame(e){
    let key = e.target.value;
    if(key.match(/^[a-zA-Z]+$/) && incorrects.includes(` ${key}`) && !corrects.includes(key)){
        if(word.includes(key)){
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key){
                    corrects += (key);
                    inputs.querySelectorAll(`input`)[i].value = key;
                }
                
            }
        } else{
            maxGuesses--;
            incorrects.push(` ${key}`);
        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerHTML = `incorrecte`; 
    }
    typingInput.value = ``;
    setTimeout(()=> {
        if (corrects.length === word.length) {
            alert(`Vous avez gagné !`);
            return randomWord();
        } else if (maxGuesses < 1){
            alert(`Vous avez perdu !`);
            for (let i = 0; i < word.length; i++) {
                inputs.querySelectorAll(`input`)[i].value = word[i];
            }
        }
    })
}

resetBtn.addEventListener(`click`, randomWord());
typingInput.addEventListener(`input`, initGame)
inputs.addEventListener(`click`, ()=> typingInput.focus())
document.addEventListener(`keydown`, ()=> typingInput.focus())
