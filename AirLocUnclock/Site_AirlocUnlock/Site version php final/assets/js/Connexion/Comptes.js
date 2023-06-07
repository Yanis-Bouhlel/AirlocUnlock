//crée deux variables globales pour retenir le nom et le prenom
var nom_utilisateur;
var prenom_utilisateur;
var Nom = document.getElementById('NameEmail');
var emailModal = document.getElementById("emailModal");
var mdpModal = document.getElementById("mdpModal");
var TextModal = document.getElementById("TextModal");
var TextModal = document.getElementById("TextModal");
var MonCompte = document.getElementById("MonCompte")
var Nom = document.getElementById('NameEmail');
var deco = document.getElementById("Deconnexion");

function Verif() {
    var VerifConnexion;
    var btnMainDropDown = document.getElementById("btnMainDropDown");
    var miseEnLoc = document.getElementById("miseEnLoc");
    var insMiniModal = document.getElementById("insMiniModal");
    var coMiniModal = document.getElementById("coMiniModal");
    var Deconnexion = document.getElementById("Deconnexion");
    var prenom_utilisateur  = localStorage.getItem('prenom');
    
    if (prenom_utilisateur) {
        VerifConnexion = true;        
    } else {
        VerifConnexion = false;
    }
    
    if (VerifConnexion==true) {
        insMiniModal.style.display = "none";
        coMiniModal.style.display = "none";
        MonCompte.style.display = "";
        Deconnexion.style.display = "";
    } else {
        insMiniModal.style.display = "";
        coMiniModal.style.display = "";
        MonCompte.style.display = "none";
        Deconnexion.style.display = "none";
    }
}

//header style connexion
function headerConnexion() {
    Verif();
  var VerifConnexion;
    var prenom_utilisateur  = localStorage.getItem('prenom');
    
    if (prenom_utilisateur) {
        VerifConnexion = true;        
    } else {
        VerifConnexion = false;
    }
    if (!VerifConnexion) {
        
        var AuthentificationModal = new bootstrap.Modal(document.getElementById('modal-1'));
        AuthentificationModal.show();
        
    }
}

//modal paypal connexion 
function PayOrConnect() {
    var VerifConnexion;
    
    // Récupérer l'email de l'utilisateur depuis le localStorage
    var prenom_utilisateur = localStorage.getItem('prenom');
    
    // Vérifier si l'utilisateur est connecté
    if (prenom_utilisateur) {
        VerifConnexion = true;
        
    } else {
        VerifConnexion = false;
    }
    
    if (VerifConnexion == true) {
        var PaypalModal = new bootstrap.Modal(document.getElementById('modal-2'));
        PaypalModal.show();
    } else {
        
        var AuthentificationModal = new bootstrap.Modal(document.getElementById('modal-1'));
        AuthentificationModal.show();
    }
}

//Style connexion modal 
function connexion() {
    var SeConnecter = document.getElementById("Connecter");
    var ChoixForm = document.getElementById("ChoixForm");
    var FormConnexion = document.getElementById("FormConnexion");
    if (ChoixForm.style.display != "none") {
        TextModal.style.display = "none";
        ChoixForm.style.display = "none";
        FormConnexion.style.display = "";
    } else {
        ChoixForm.style.display = "";
        FormConnexion.style.display = "none";
    }
}

//Style inscription modal
function inscription() {
    var FormInscription = document.getElementById("FormInscription");
    var emailInscriptionModal = document.getElementById("emailInscriptionModal");
    var mdpInscriptionModal = document.getElementById("mdpInscriptionModal");
    var NumberModal = document.getElementById("NumberModal");
    
    if (ChoixForm.style.display != "none") {
        TextModal.style.display = "none";
        ChoixForm.style.display = "none";
        FormInscription.style.display = "";
    } else {
        ChoixForm.style.display = "";
        FormInscription.style.display = "none";
        
    }
    
    
}

//Style boutton retour inscription
function RetourMenuInscription() {
    var FormInscription = document.getElementById("FormInscription");
    var ChoixForm = document.getElementById("ChoixForm");
    FormInscription.style.display = "none";
    ChoixForm.style.display = "";
    TextModal.style.display = "";
    
}

//style boutton retour connexion
function RetourMenuConnexion() {
    var FormConnexion = document.getElementById("FormConnexion");
    var ChoixForm = document.getElementById("ChoixForm");
    FormConnexion.style.display = "none";
    ChoixForm.style.display = "";
    TextModal.style.display = "";
    
}

//Récupération email LocalStorage 
function NomEmailValue() {

    // Récupérer du prenom de l'utilisateur depuis le localStorage
    var prenom_utilisateur  = localStorage.getItem('prenom');
    // Vérifier si la variable contient une valeur(connecter ou pas)
    if (prenom_utilisateur) {
        
        // L'utilisateur est connecté, mettre à jour la div avec l'id 'NameEmail' avec son email
        var Nom = document.getElementById('NameEmail');
        Nom.style.marginRight = "50px";
        // Modification du contenu HTML de l'élément Nom pour afficher prenom utilisateur 
        Nom.innerHTML = 'Bonjour, ' + prenom_utilisateur;
        
    } 
    
    else {
        console.log('Utilisateur non connecté');
    }
    
}
// Appeler la fonction NomEmailValue une fois que la page est chargée
$(function() {
    NomEmailValue();
});

//Stockage prenom et email localstorage
function recupPrenom(email){
    var email =  document.getElementById("emailModal").value;
    var request = $.ajax({
        method: "GET", 
        url: 'http://51.210.151.13/btssnir/projets2023/airlocunlock/api-airlocunlock/clients.php?email='+ email, 
        dataType : "json",
        success: (data) => {
            localStorage.setItem('email', data.email);
            // Ajouter l'email de l'utilisateur dans le localStorage
            localStorage.setItem('prenom', data.prenom);
            // Modification du contenu HTML de l'élément Nom pour afficher prenom utilisateur 
            Nom.innerHTML = 'Bonjour, ' + localStorage.getItem('prenom');
            Nom.style.marginRight = "50px";
        }
})
    }


//Verification formulaire modal connexion + recupération email localStorage 
function myCompte() {
    
    var email =  document.getElementById("emailModal").value;
    var mdp = document.getElementById("mdpModal").value;
    //Créer un objet js pour récupérer les valeurs
    var data = {
            email: email,
            mdp: mdp
        };
    var request = $.ajax({
        method: "POST", 
        url: "http://51.210.151.13/btssnir/projets2023/airlocunlock/api-airlocunlock/clients.php",
        // Conversion de l'objet JavaScript en chaîne JSON pour l'envoyer au serveur
        data: JSON.stringify(data), 
        success: (data) => {
            if (data.message == true) {
                // Appel d'une fonction recupPrenom() avec l'e-mail en tant qu'argument pour récupérer le prénom
                recupPrenom(email);
                
                //fermeture modal
                $('#modal-1').modal('hide');
            }
                else {
                    alert('le mot de passe ou lutilisateur es incorrect');
                }
                         }
    });
    
}


//deconnexion + Suppression email LocalStorage 
function Logout() {
    localStorage.removeItem("prenom");
    localStorage.removeItem("email");
    localStorage.removeItem("Date1");
    localStorage.removeItem("Date2");
    localStorage.removeItem("emailProprietaire");
    localStorage.removeItem("Titre");
    localStorage.removeItem("TitreReserv");
    localStorage.removeItem("TitreBien");
    
    Nom.innerHTML = " ";
    var url = window.location.href;
    
    // Modification de l'URL
    url = "index.html";
    
    // Redirection vers la nouvelle URL
    window.location.href = url;
    
}
