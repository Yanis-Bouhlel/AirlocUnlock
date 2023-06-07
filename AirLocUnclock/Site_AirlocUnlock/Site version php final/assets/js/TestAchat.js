function AchatTest(){

    var emailProprietaire = localStorage.getItem("emailProprietaire");
    var nom  = localStorage.getItem("TitreReserv");
    var emailLocataire = localStorage.getItem("email");
    var date1 = localStorage.getItem("Date1");
    var date2 = localStorage.getItem("Date1");

    var data = { 
            nom: nom,
            emailProprietaire: emailProprietaire,
            emailLocataire: emailLocataire,
            date1:date1,
            date2:date2
        };
    
        var request = $.ajax({
        url:"http://51.210.151.13/btssnir/projets2023/airlocunlock/api-airlocunlock/reservations.php",
        method : "POST",
        data: JSON.stringify(data), 
        datatype:"json",
        success:(data) =>{
            console.log(data);
           alert('votre a bien été effectué veiller la consulter sur l application ');
        }
})

    
    
   
    
}
