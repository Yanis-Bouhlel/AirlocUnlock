function afficheBien(){
    var email =  document.getElementById("emailModal").value;
    
    var request = $.ajax({
        method: "GET", 
        url: 'http://51.210.151.13/btssnir/projets2023/airlocunlock/api-airlocunlock/reservations.php?email='+ email, 
        dataType : "json",
        //dataType: "json",
        success: (data) => {

            console.log(data);
     localStorage.getItem('prenom');
        }
})
    }
    
    
