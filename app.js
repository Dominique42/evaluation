fetch(`instruments-musique-monde.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        /* data.forEach(element =>{
             document.getElementById("cardContainer").innerHTML += ``
     
         })*/

        afficheLesProduits(data.produits)
        afficherNomEntreprise(data)
        afficherAccroche(data)
        afficherLesServices(data.services)
        afficheLesPromesses(data.promesses)
        afficherTemoignages(data.temoignages)
       
    })



// une fonction qui affiche les produits dans la div qui a l'id produits
// Parametre : elle a besoin du tableau de produits : (data.produits)
// retour : rien 
function afficheLesProduits(produits) {
    // je vais dans  le document chercher la div qui a l'id produit
    let div = document.getElementById('produits')


    // j'ai un tableau de produits je veux les afficher un par un : on boucle
    produits.forEach(produit => {
        div.innerHTML += `
     <div class="card">
                <img class=""
                    src="${produit.imageurl}" alt="">
                <h3>${produit.nom}</h3>
                <p>${produit.description}Découvrez les sonorités apaisantes du hang, un instrument mélodique captivant. Parfait pour créer une
                    atmosphère paisible et méditative.</p>


            </div>
    `
    })
}

//je veux afficher le nom de l'entreprise

function afficherNomEntreprise(donnee) {
    document.getElementById(`header`).innerHTML += `
    
    <img class="logo" src="assets/ogo-instrument-2.png" alt="logo"id=header">
    ${donnee.nomEntreprise}
        <ul class="space flex style" id="header">
            <li>
                <a href="#aide" class="teinteecrit decoration">Aide</a>
                <a href="#connexion" class="teinteecrit decoration">Connexion</a>
                <a href="#panier" class="teinteecrit decoration">Panier</a>

            </li>
        </ul>

`
};

//je veux afficher l'accroche

function afficherAccroche(donnees) {
    document.getElementById(`hero`).innerHTML += `


 
        <img src="" alt="">
        <h1 class="lignes">MusicHalle - Instruments du Monde</h1> 
        <p class="lignes">${donnees.accroche}
        </p>
        <a href="" class="lignes">${donnees.callToAction}</a>

    
    `
};

//afficher les services

function afficherLesServices(tableauServices){

tableauServices.forEach(service=>{
document.getElementById(`suite`).innerHTML+=`


    
        <div class="card">
            <h3>${service.nom}</h3>
            <p> ${service.description}
            </p>
            <img src="${service.imageurl}"
                alt="">

        </div>
    
`
})

};

function afficheLesPromesses(Promess) {
    // je vais dans  le document chercher la div qui a l'id promess

         document.getElementById('promess').innerHTML += `
   
            <li><a href="">${Promess[0]}</a> </li>
            <li><a href="">${Promess[1]}</a> </li>
            <li><a href="">${Promess[2]}</a> </li>
        
    `
; }  


//parametre : temoignages le tableau des avis clients
function afficherTemoignages(temoignages){

temoignages.forEach(t=>{
    document.getElementById(`temoignages`).innerHTML+=`

    <div class="couleur card">
            

            <h4>${t.prenom}</h4>
            <p>${etoiles(t.note)}</p>
            <p>${t.prestation}</p>


            <p>${t.commentaire}J'ai découvert une superbe kora chez MusicHalle. Le personnel m'a guidé avec passion, et maintenant je peux
                explorer les magnifiques sonorités de la musique africaine chez moi. Merci !</p>
    </div>
        
    `
})
}


// role: une fonction qui me retourne une chaine de caractere avec des etoiles en fonction de la note donnée par le client
// parametre : note , un nombre sur 5
// retour : les etoiles (chaine de caractere)
function etoiles(note) {
    if(note === 5){
        return '★★★★★'
    }
        
    if (note === 4){
        return `★★★★`
    }
    
    if(note===3){
        return `★★★`
    }
    if(note===2){
        return `★★`
    }
    if(note===1){
        return `★`
    }
    
    
    

}

