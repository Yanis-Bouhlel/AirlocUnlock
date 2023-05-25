//crée deux variables globales pour retenir le nom et le prenom
var nom_utilisateur
var prenom_utilisateur
var Nom = document.getElementById('NameEmail')
var emailModal = document.getElementById("emailModal")
var mdpModal = document.getElementById("mdpModal")
var TextModal = document.getElementById("TextModal")
var TextModal = document.getElementById("TextModal")
var MonCompte = document.getElementById("MonCompte")
var Nom = document.getElementById('NameEmail')
var deco = document.getElementById("Deconnexion")

function Verif(){
    var email_utilisateur = localStorage.getItem('email');

    if (email_utilisateur) {
        VerifConnexion = true;
    
    } 
    else {
        VerifConnexion = false;
    }
    
    if(VerifConnexion){
        insMiniModal.style.display = "none"
        coMiniModal.style.display = "none"
        
        MonCompte.style.display = ""
        Deconnexion.style.display = ""
    }
    else if (!VerifConnexion){
        insMiniModal.style.display = ""
        coMiniModal.style.display = ""
        
        MonCompte.style.display = "none"
        Deconnexion.style.display = "none"
        
    }
}

Verif();

//header style connexion
function headerConnexion(){
    Verif()
    
    var btnMainDropDown = document.getElementById("btnMainDropDown");
    var miseEnLoc = document.getElementById("miseEnLoc");
    var insMiniModal = document.getElementById("insMiniModal");
    var coMiniModal = document.getElementById("coMiniModal");
    var Deconnexion = document.getElementById("Deconnexion");

    
    var email_utilisateur = localStorage.getItem('email');

    if (!VerifConnexion){
        
        var AuthentificationModal = new bootstrap.Modal(document.getElementById('modal-1'));
        AuthentificationModal.show();
        
    }
}

//modal paypal connexion 
function PayOrConnect(){
var VerifConnexion;
    
  // Récupérer l'email de l'utilisateur depuis le localStorage
  var email_utilisateur = localStorage.getItem('email');

  // Vérifier si l'utilisateur est connecté
  if (email_utilisateur) {
    VerifConnexion = true;
    
  } 
   else {
   VerifConnexion = false;
  }
    
    if (VerifConnexion == true){
       var PaypalModal = new bootstrap.Modal(document.getElementById('modal-2'));
        PaypalModal.show();
    }
    else {
       
        var AuthentificationModal = new bootstrap.Modal(document.getElementById('modal-1'));
        AuthentificationModal.show();
    }
}
//Style connexion modal 
function connexion() {
    var SeConnecter= document.getElementById("Connecter");
    var ChoixForm = document.getElementById("ChoixForm");
    var FormConnexion= document.getElementById("FormConnexion");
        if(ChoixForm.style.display != "none"){
        TextModal.style.display = "none";
        ChoixForm.style.display = "none";
        FormConnexion.style.display = "";
    }
        else{
        ChoixForm.style.display = "";
        FormConnexion.style.display = "none";
    }
}


function inscription(){
    var FormInscription = document.getElementById("FormInscription");
    var emailInscriptionModal =document.getElementById("emailInscriptionModal");
    var mdpInscriptionModal = document.getElementById("mdpInscriptionModal");
    var NumberModal = document.getElementById("NumberModal");
    
        if(ChoixForm.style.display != "none"){
        TextModal.style.display = "none";
        ChoixForm.style.display = "none";
        FormInscription.style.display = "";
        console.log("mmmm")
    }
        else{
        ChoixForm.style.display = "";
        FormInscription.style.display = "none";
    }
    
    
}

function RetourMenuInscription(){
    var FormInscription = document.getElementById("FormInscription");
    var ChoixForm = document.getElementById("ChoixForm");
    FormInscription.style.display = "none" ;     
    ChoixForm.style.display = "" ;   
    TextModal.style.display = "";

    }


function RetourMenuConnexion(){
    var FormConnexion= document.getElementById("FormConnexion");
    var ChoixForm = document.getElementById("ChoixForm");
    FormConnexion.style.display = "none" ;     
    ChoixForm.style.display = "" ;   
    TextModal.style.display = "";

    }

//stockage email LocalStorage 
function NomEmailValue() {
    var TextModal = document.getElementById("TextModal");
  // Récupérer l'email de l'utilisateur depuis le localStorage
  var email_utilisateur = localStorage.getItem('email');
  var name = localStorage.getItem('name');
   // Vérifier si l'utilisateur est connecté
  if (email_utilisateur) {
  
    // L'utilisateur est connecté, mettre à jour la div avec l'id 'NameEmail' avec son email
    var Nom = document.getElementById('NameEmail');
    Nom.style.marginRight = "50px"  
    Nom.innerHTML = 'Bonjour, ' + name;
  } else {
    // L'utilisateur n'est pas connecté, ne rien faire
    console.log('Utilisateur non connecté');
  }
    
}
// Appeler la fonction NomEmailValue une fois que la page est chargée
$(function(){
    NomEmailValue();
    
    
    
});





//Verification formulaire modal connexion + recupération email localStorage 
function myCompte(){
/*
var request = $.ajax({

    method :"POST",
    url: "http://51.210.151.13/btssnir/projets2023/airlocunlock/api-airlocunlock/clients.php",
    data: { email: $(#"emailModal.value")},
    dataType:"json",
    success:(data)=>{
        console.log(data);
    }
});

   if (data == true){
    Nom.style.marginRight = "50px"
    Nom.innerHTML = 'Bonjour, ' + localStorage.getItem('name');
    //fermeture modal
    $('#modal-1').modal('hide');    
    
    // Ajouter l'email de l'utilisateur dans le localStorage
    localStorage.setItem('email', emailModal.value);
    localStorage.setItem('name', "isma");
    //récupère après la requête ajax le nom et le prénom, pour l'instant on met que les nifos qu'on a
    nom_utilisateur = emailModal.value;
    prenom_utilisateur = mdpModal.value;
}
else
{
    alert('le mot de passe ou lutilisateur es incorrect');
}
*/
    if (emailModal.value == "isma.sidhou@gmail.com" && mdpModal.value=="1234"){
    Nom.style.marginRight = "50px"
    Nom.innerHTML = 'Bonjour, ' + localStorage.getItem('name');
    //fermeture modal
    $('#modal-1').modal('hide');    
    
    // Ajouter l'email de l'utilisateur dans le localStorage
    localStorage.setItem('email', emailModal.value);
    localStorage.setItem('name', "isma");
    //récupère après la requête ajax le nom et le prénom, pour l'instant on met que les nifos qu'on a
    nom_utilisateur = emailModal.value;
    prenom_utilisateur = mdpModal.value;
}
else
{
    alert('le mot de passe ou lutilisateur es incorrect');
}
        }







//Suppression email LocalStorage 
function Logout() {
    console.log("tes rentrer");
  localStorage.removeItem("email");
       Nom.innerHTML = " ";
    var url = window.location.href;

// Modification de l'URL
url = "index.html";

// Redirection vers la nouvelle URL
window.location.href = url;
    
}

//          isma.sidhou@gmail.com
