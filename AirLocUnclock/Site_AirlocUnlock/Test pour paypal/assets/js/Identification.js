var VerifConnexion = false ; 
var TextModal = document.getElementById("TextModal");

function PayOrConnect(){
    if (VerifConnexion == true){
        var Reserver = document.getElementById('Reserver');
        Reserver.addEventListener('click', function() {
        var PaypalModal = new bootstrap.Modal(document.getElementById('modal-2'));
        PaypalModal.show();
  });
    }
    else {
        var Reserver = document.getElementById('Reserver');
        Reserver.addEventListener('click', function() {
        var AuthentificationModal = new bootstrap.Modal(document.getElementById('modal-1'));
        AuthentificationModal.show();
  });
    }
}

/*
function EnvoiForm(){
    $.ajax({
        url : apiYAnnick, 
        data : {}
        success : function(data){
        if (data.success == true){
            VerifConnexion = true ; 
        }
    }
    })
}

*/

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
