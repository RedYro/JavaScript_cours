// Navbar a //

let links = document.querySelectorAll('nav a');
let pageActive = window.location.href; // Stockage localisation dans une variable
for (let i = 0; i < links.length; i++){ // On boucle sur le tableau "links" qui contient les "a"
    if(pageActive.includes(links[i].href)){ // On vérifie si la localisation de la page contient le lien sur lequel on clique // si true
        links[i].classList.add(`actuel`); // Ajout de la classe "actuel"
    }
}

// Formulaire contact //

let form = document.querySelector(`form`);
let inputEmail = document.getElementsByName(`email`);
let inputSubject = document.getElementsByName(`subject`);
let messageArea = document.getElementsByName(`message`);
let info = document.querySelector(`#info`);

// Condition "if" nécessaire pour empêcher les erreurs sur les autres pages ("Acceuil", "À propos") 
if(form){
    form.addEventListener(`submit`, validationForm);
    function validationForm(event) {
        event.preventDefault();
        // Stockage des valeurs des inputs
        let email = inputEmail[0].value.trim();
        let subject = inputSubject[0].value.trim();
        let message = messageArea[0].value.trim();
        let donnees = [email, subject, message];

        if(donnees.includes(``)){
            info.innerHTML = `<p class="alert alert-dark">Veuillez renseigner tous les champs</p>`;
            for (let i = 0; i < event.target.length - 2; i++) {
                event.target[i].labels[0].classList.add(`error`)
            }
        } else{
            info.innerHTML = ``;
            for (let i = 0; i < event.target.length - 2; i++) {
                event.target[i].labels[0].classList.remove(`error`);
            }
            let myRegexMail = /^[a-zA-Z0-9._-]+@[a-z0-9_-]+\.[a-z]{2,6}$/;
            if (!myRegexMail.test(email)){
                info.innerHTML = info.innerHTML + `<p class="alert alert-dark">Vérifiez votre adresse mail.</p>`;
            }
            let myRegexNumber = /\d/; // \d => raccourci pour [0-9] // d = décimal
            if (myRegexNumber.test(subject) || subject.length < 10 || subject.length > 100) {
                info.innerHTML = info.innerHTML + `<p class="alert alert-dark">Vérifiez votre sujet.</p>`;
            }
            if (message.length < 5 || message.length > 500 || !isNaN(message)) {
                info.innerHTML = info.innerHTML + `<p class="alert alert-dark">Vérifiez votre message.</p>`;
            }
            if(info.innerHTML === ``){
                info.innerHTML = `<p class="alert alert-success">Votre demande a bien été envoyée.</p>`;
            }
        }
    }
}
