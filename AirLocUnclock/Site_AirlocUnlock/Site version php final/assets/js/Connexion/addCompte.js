function VerifFormInscription()
{
    var email = document.getElementById('emailInscriptionModal').value
   var nom = document.getElementById('nomInscriptionModal-1').value;
   var prenom = document.getElementById('prenomInscriptionModal-2').value;
   var mdp = document.getElementById('mdpInscriptionModal').value;
   var mdpReapeat = document.getElementById('mdpReapeatInscriptionModal-1').value;
   var Number = document.getElementById('NumberModal').value;

   if (email == '' || nom == '' || prenom == '' || mdp == '' || mdpReapeat == '' || Number == '')
   {
    
      alert("Veuillez remplir tous les champs.");
      return false;
   }
   else if (!isValidEmail(email)) {
        alert("Veuillez saisir une adresse e-mail valide.");
        return false;
    } else {
        return true;
    }
}

function isValidEmail(email) {
    // Expression régulière pour vérifier le format de l'adresse e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function InscriptionCompte(){
    
    if(VerifFormInscription()==true)
        {
    var SendInscription = document.getElementById("SendInscription");
    var nom =  document.getElementById("nomInscriptionModal-1").value;
    var prenom = document.getElementById("prenomInscriptionModal-2").value;
    var email = document.getElementById("emailInscriptionModal").value;
    var mdp = document.getElementById("mdpInscriptionModal").value;
    var number = document.getElementById("NumberModal").value;
    
    //Créer un objet js pour récupérer les valeurs
    var data = {
            nom: nom,
            prenom: prenom,
            email: email,
            mdp: mdp,
            numero: number,
            statut: "locataire"
            
        };
        var request = $.ajax({
        url:"http://51.210.151.13/btssnir/projets2023/airlocunlock/api-airlocunlock/clients.php",
        method : "POST",
        data: JSON.stringify(data), 
        datatype:"json",
        success:(data) =>{
            console.log(data);
            alert('Votre Compte a bien ete creer');
        }
})
        }
}



