// --------------- Validation formulaire --------------- //

// On sélectionne notre formulaire d'inscription grâce à son id => variable letInscription
let inscription = document.querySelector(`#form_inscription`);
inscription.addEventListener(`submit`, Finscription);

// On récupère les infos du formulaire lors de l'envoi de celui-ci
function Finscription(event){
    event.preventDefault(); // permet d'empêcher l'envoi du formulaire
    let info = document.querySelector(`#info`);
    let error = document.querySelectorAll(`.error`);
    // Récupération du contenu des champs dans des variables
    let prenom = (event.target.prenom.value).trim(); // "trim()" => méthode qui supprime les espaces aux deux extrémités d'une chaîne de caractères.
    let nom = (event.target.nom.value).trim();
    let mail = (event.target.mail.value).trim();
    let password = (event.target.password.value).trim();
    let confpassword = (event.target.confpassword.value).trim();
    // Stockage des données du formulaire de un tableau 
    let donnee = [prenom, nom, mail, password, confpassword];
    // Si le tableau contient un élément avec une chaîne de caractères vide 
    if (donnee.includes(``)){
        info.innerHTML = `<p class = "alert alert-danger">Tous les champs sont requis</p>`;
        for(let i = 0; i < event.target.length-1; i++){
            if(event.target[i].value === ``){
                event.target[i].classList.add(`errorBis`);
            } else{
                event.target[i].classList.remove(`errorBis`);
            }
        }
    } else{
        if (!isNaN(prenom) || !isNaN(nom)){
            info.innerHTML = `<p class = "alert alert-danger">Le nom ou prénom n'est pas valide</p>`;
            if (!isNaN(prenom) && !isNaN(nom)){
                event.target.prenom.classList.add(`errorBis`);
                event.target.nom.classList.add(`errorBis`);
            } else if(!isNaN(prenom)){
                event.target.prenom.classList.add(`errorBis`);
                event.target.nom.classList.remove(`errorBis`);
            } else if(!isNaN(nom)){
                event.target.nom.classList.add(`errorBis`);
                event.target.prenom.classList.remove(`errorBis`);
            }
        } else{
            // On vide la variable "info"
            info.innerHTML = ``;
            event.target.nom.classList.remove(`errorBis`);
            event.target.prenom.classList.remove(`errorBis`);
            // Validation prénom
            if (prenom.length < 3){
            error[0].innerHTML = `<div class="alert alert-danger"> Le prénom doit comporter 3 caractères minimum ! </div>`;
            event.target.prenom.classList.add(`errorBis`);
            event.target.prenom.classList.remove(`valid`);
            } else{
            event.target.prenom.classList.remove(`errorBis`);
            event.target.prenom.classList.add(`valid`);
            error[0].innerHTML = ``;
            }
            // Validation nom
            if (nom.length < 3){
                error[1].innerHTML = `<div class="alert alert-danger"> Le nom doit comporter 3 caractères minimum ! </div>`;
                event.target.nom.classList.add(`errorBis`);
                event.target.nom.classList.remove(`valid`);
                } else{
                event.target.nom.classList.remove(`errorBis`);
                event.target.nom.classList.add(`valid`);
                error[1].innerHTML = ``;
                }
        }
        // Validation mail
        // regex => raccourci de "regular expression", moyen de définir ce qui est accepté ou non comme caractères.
        // Le 'regex' qui suit sert à définir ce qui est accepté en terme d'email
        let myRegexEmail = /^[A-Za-z0-9._-]+@[a-z0-9_-]+\.[a-z]{2,5}$/;
        // "^" indique le début : chaîne commence par ...
        // "[]" définissent un intervalle de caractères
        // "+" une ou plusieurs occurence(s) de l'expression 'A-Za-z0-9._-'
        // "\" indique que le caractère qui suit doit être recherché en tant que tel (ici le ".")
        // "{}" quantificateur => indique le nombre de répétitions du caractère qui précède 
        // "$" indique la fin : chaîne finit par ...

        if(!myRegexEmail.test(mail)){ // méthode "test" vérifie si il y a une correspondance entre le contenu de la variable mail et l'expression régulière
            event.target.mail.classList.add(`errorBis`);
            event.target.mail.classList.remove(`valid`);
            error[2].innerHTML = `<div class="alert alert-danger"> L'adresse mail est incorrecte ! </div>`;
        } else{
            event.target.mail.classList.remove(`errorBis`);
            event.target.mail.classList.add(`valid`);
            error[2].innerHTML = ``;
        }
        // Validation mot de passe 
        let myRegexMdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@!&#])\S{6,12}$/;
        // (?=.*[a-z]) => permet de tester la présence de lettres en minuscules
        // (?=.*[A-Z]) => permet de tester la présence de lettres en majuscules
        // (?=.*[0-9]) => permet de tester la présence de chiffres
        // (?=.*[$@!&#]) => permet de tester la présence des caractères spéciaux parmi ceux qui sont indiqués 
        // \S{6,12} => permet de définir une longueur minimale de 6 caractères et maximale de 12
        if (!myRegexMdp.test(password)){
            event.target.password.classList.add(`errorBis`);
            event.target.password.classList.remove(`valid`);
            error[3].innerHTML = `<div class="alert alert-danger"> Le mot de passe est incorrecte ! Il doit contenir des caractères spéciaux ($@!&#), minuscules, majuscules et chiffres.</div>`;
        } else{
            event.target.password.classList.remove(`errorBis`);
            event.target.password.classList.add(`valid`);
            error[3].innerHTML = ``;
        }
        // Validation confirmation mdp 
        if (confpassword === (password)){
            event.target.confpassword.classList.remove(`errorBis`);
            event.target.confpassword.classList.add(`valid`);
            error[4].innerHTML = ``;
            info.innerHTML = `<p class="alert alert-success">Vous êtes bien inscrit(e) !</p>`
        } else{
            event.target.confpassword.classList.add(`errorBis`);
            event.target.confpassword.classList.remove(`valid`);
            error[4].innerHTML = `<div class="alert alert-danger"> Le mot de passe n'est pas identique ! </div>`;
        }
    }
}
