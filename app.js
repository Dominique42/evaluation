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
                    src="https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/images/instruments-musique-monde/hang.webp"
                    alt="">
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


 <div class="centrer hautdiv couleur" id="hero">
        <img src="" alt="">
        <h1 class="lignes">MusicHalle - Instruments du Monde</h1> 
        <p class="lignes">${donnees.accroche}
        </p>
        <a href="" class="lignes">${donnees.callToAction}</a>

        <!-- intitulés des thémes -->

    </div>
    `
};
