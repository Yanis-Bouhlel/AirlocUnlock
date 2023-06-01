function SuppReservation(){

    var emailProprietaire = localStorage.getItem("emailProprietaire");
    var nomReserve = localStorage.getItem("TitreReserv");
    

        var request = $.ajax({
        url:'http://51.210.151.13/btssnir/projets2023/airlocunlock/api-airlocunlock/reservations.php?email='+ email'&nom='nom,
        method : "DELETE", 
        success:(data) =>{
            alert()
        }
})

}

