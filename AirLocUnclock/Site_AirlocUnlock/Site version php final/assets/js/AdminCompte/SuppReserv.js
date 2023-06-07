function SuppReservation(){
    debugger;
    var emailProprietaire = localStorage.getItem("email");
    var nom = localStorage.getItem("TitreBien");
    

        var request = $.ajax({
        url:'http://51.210.151.13/btssnir/projets2023/airlocunlock/api-airlocunlock/reservations.php?email='+ emailProprietaire +'&nom='+nom,
        method : "DELETE", 
        success:(data) =>{
            console.log(data);
            alert('votre bien a été supprimer');
            redirection();
     
        }
})


}

function redirection(){
            var url = window.location.href;
    
            // Modification de l'URL
            url = "index.html";
    
            // Redirection vers la nouvelle URL
            window.location.href = url;
}