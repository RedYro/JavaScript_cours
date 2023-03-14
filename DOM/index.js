
// alert('ok')

//---------- Validation du formulaire


// Je sélectionne mon formulaire d'inscription grâce à son id =>  variable letInscription
let letInscription = document.querySelector('#form_inscription');
// console.log(letInscription);

//Je récupère les informations du formulaire lors de l'envoi de celui-ci
letInscription.addEventListener('submit', inscription);

function inscription(event){

    event.preventDefault();// ça permet d'empêcher l'envoi de formulaire 
    // console.log('ok');
    let info = document.querySelector('#info');
    let erreur = document.querySelectorAll('.erreur');

    //Récupération du contenus des champs dans des variables
    let prenom = (event.target.prenom.value).trim();//méthode supprime les espaces aux deux extrémités d'une chaîne de caractére.
    let nom = (event.target.nom.value).trim();
    let mail = (event.target.mail.value).trim();
    let mdp = (event.target.mdp.value).trim();
    let confmdp = (event.target.confmdp.value).trim();
    // console.log(prenom, nom, mail,mdp, confmdp);

    //Je stock les données de mon formulaire dans un tabelau
    let donnee = [prenom, nom, mail,mdp, confmdp];
    // Si le tableau contient un élément  avec une chaîne de caractére dvide
        if (donnee.includes('')) {
            info.innerHTML=`<p class="alert alert-danger">Tout les champs sont requis</p>`;
           
            for(let i = 0; i < event.target.length-1 ; i++){
                
                    if(event.target[i].value === ''){

                        event.target[i].classList.add('error');
                    }else{
                        event.target[i].classList.remove('error');
                    }
            }
            
        }else{

            if (!isNaN(prenom) || !isNaN(nom)) {

                info.innerHTML = `<p class="alert alert-danger">Le nom ou le prénom n'est pas valide</p>`;
                if (!isNaN(prenom)) {

                    event.target.prenom.classList.add('error');

                }
                if(!isNaN(nom)) {

                    event.target.nom.classList.add('error');
                    
                }else{
                    event.target.nom.classList.remove('error');
                    event.target.prenom.classList.add('error');
                }
             
                

                
            } 
            // else {
                
            // }



            
        }




}