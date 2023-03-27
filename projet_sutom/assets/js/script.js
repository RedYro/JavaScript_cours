const inputs = document.querySelector(`.input`);
let resetBtn = document.querySelector(`.btn-reset`);
let wrongLetter = document.querySelector(`.wrong-letter`);
let typingInput = document.querySelector(`.typing-text`);
let guessLeft = document.querySelector(`.guessLeft`);
let details = document.querySelector(`.details`);
let victory = document.createElement(`div`);
let defeat = document.createElement(`div`);


let word, maxGuesses, corrects = [], incorrects = [];

function randomWord() {
    let randomObject = wordList[Math.floor(Math.random() * wordList.length)];
    word = randomObject.word;
    maxGuesses = 6;
    corrects = [];
    incorrects = [];
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrects.join(` `);
    let html = ``;
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
    victory.innerHTML = ``;
    defeat.innerHTML = ``;
    typingInput.disabled = false;
    console.log(randomObject);
}
randomWord();

function initGame(e) {
    let key = e.target.value;
    console.log(key);
    if (key.match(/^[a-zA-Z]+$/) && !corrects.includes(key) && !incorrects.includes(key)) {
        if (word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] == key) {
                    corrects += key;
                    inputs.querySelectorAll(`input`)[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrects.push(key);
            wrongLetter.innerHTML = incorrects.join(` `);
        }
        guessLeft.innerText = maxGuesses;
    }
    e.target.value = ``;
    if (corrects.length === word.length) {
        victory.innerHTML = `<div class="victory"><span>Vous avez gagné !</span></div>`;
        details.appendChild(victory);
        typingInput.disabled = true;
    } else if (maxGuesses < 1) {
        defeat.innerHTML = `<div class="defeat"><span>Vous avez perdu !</span></div>`;
        details.appendChild(defeat);
        typingInput.disabled = true;

        for (let i = 0; i < word.length; i++) {
            inputs.querySelectorAll(`input`)[i].value = word[i];
        }
    }
}

resetBtn.addEventListener(`click`, randomWord);
typingInput.addEventListener(`input`, initGame);
inputs.addEventListener(`click`, ()=> typingInput.focus());
document.addEventListener(`keydown`, ()=> typingInput.focus());
