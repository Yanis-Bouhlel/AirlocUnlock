/*
var request = $.ajax({
    
    method :"POST",
    url: "1234/AirLockUnlock/Verif,
    data: {email: $("#emailModal"}[0].value,password:$("#mdpModal")[0].value},
    dataType:"json",
    success:(data)=>{
        console.log(data);
    }
});
*/
//crée deux variables globales pour retenir le nom et le prenom
var nom_utilisateur;
var prenom_utilisateur;
//
var BonjourNom = document.getElementById('HelloName');
//var name = data.prenom
var emailModal = document.getElementById("emailModal")
var mdpModal = document.getElementById("mdpModal")
var btnCo = document.getElementById("SendCompte");

function myCompte(){

if (emailModal.value == "isma" && mdpModal.value=="1234"){
    BonjourNom.style = "Block";
   BonjourNom.innerHTML = emailModal.value; //+ name ; 
    //récupère après la requête ajax le nom et le prénom, pour l'instant on met que les nifos qu'on a
    nom_utilisateur = emailModal.value;
    prenom_utilisateur = mdpModal.value;
    btnCo.onsubmit ;
}
else
{
    
    
    }
}



/*function goToIndex(){
    const url = "index.php?nom=" + nom_utilisateur + "&prenom=" + prenom_utilisateur;
    document.location.href = url;
}*/