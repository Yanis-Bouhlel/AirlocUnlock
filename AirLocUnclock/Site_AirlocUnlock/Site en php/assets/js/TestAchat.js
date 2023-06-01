function AchatTest(){

    var emailProrietaire = localStorage.getItem("emailProprietaire");
    var titre  = localStorage.getItem("TitreReserv");
    var emailLocataire = localStorage.getItem("email");

    var data = {
            emailProrietaire: emailProrietaire,
            titre: titre,
            emailLocataire: emailLocataire
            
        };
    
        var request = $.ajax({
        url:"http://51.210.151.13/btssnir/projets2023/airlocunlock/api-airlocunlock/reservations.php",
        method : "POST",
        data: JSON.stringify(data), 
        datatype:"json",
        success:(data) =>{
           alert('votre a bien été effectué veiller la consulter sur l application ')
        }
})

    
    
   
    
}