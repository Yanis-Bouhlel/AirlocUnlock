//localStorage.removeItem("Titre");
//localStorage.removeItem("Photo");
var idReel
var Titre
var photo1

$(function() {
    var request = $.ajax({
            
            url: "http://51.210.151.13/btssnir/projets2023/airlocunlock/api-airlocunlock/reservations.php",
            method: "GET",
            success: (data) =>{
                PageReserve(data.reservations);
            }
        })
    
    
});
//fetch("assets/js/data.json")
  //  .then(response => response.json())
    //.then(data => {
function PageReserve(data){
    
        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);

        const id = urlParams.get('id')
            idReel = id
      
        data.forEach(reservation => {
            if(reservation.id==id ){
                idReel = id
                
                var Titre1 = document.getElementById('Titre1');
                Titre1.innerHTML= reservation.nom;
                Titre1.style.marginLeft = "30px";
                //stockage titre 
                        if(localStorage.getItem("TitreReserv") == null){
                    localStorage.setItem("TitreReserv", reservation.nom)
                }
                        else if (localStorage.getItem("TitreReserv") != null) {
                    localStorage.removeItem("TitreReserv");
                    localStorage.setItem("TitreReserv", reservation.nom)

                }
                //fin stokage titre
                Titre = reservation.adresse;
                
                var Description = document.getElementById("Description");
                Description.innerHTML= reservation.description;
                
                var Image1= document.getElementById("ImgResa1")
                Image1.src=reservation.photo1;
                photo1 = String(reservation.photo1)
                
                var Image2= document.getElementById("ImgResa2");
                Image2.src=reservation.photo2;
                
                var Image3= document.getElementById("ImgResa3");
                Image3.src=reservation.photo3;
                
                var Image4=document.getElementById("ImgResa4")
                Image4.src=reservation.photo4;
                
                var Image5= document.getElementById("ImgResa5");
                Image5.src=reservation.photo5;

                var Prix = document.getElementById("Prix");
                Prix.innerHTML= reservation.prix;
           
                
                var PrixTotal = document.getElementById("PrixTotal");
                PrixTotal.innerHTML = localStorage.getItem("PrixStock") 
                //stockage prix
                     if(localStorage.getItem("PrixStock") == null){
                    localStorage.setItem("PrixStock", reservation.prix)
                }
                else if (localStorage.getItem("PrixStock") != null){
                    localStorage.removeItem("PrixStock");
                    localStorage.setItem("PrixStock", reservation.prix)

                }
                //fin stockage 
                
                var Note1=document.getElementById("note1");
                Note1.innerHTML=reservation.note;
                Note1.style.marginLeft= "30px"; 

                var Note2=document.getElementById("note2");
                Note2.innerHTML=reservation.note;
                
                var Adresse = document.getElementById('Adresse'); 
                Adresse.innerHTML= reservation.adresse;
                
                var NbvoyageurMax = document.getElementById('NbvoyageurMax');
                NbvoyageurMax.innerHTML=reservation.nbVoyageur + " Voyageurs";
                
                var NbSalleDeBain = document.getElementById('NbSalleDeBain');
                NbSalleDeBain.innerHTML = reservation.nbSBain + " Salle de bains";
                
                var NbChambre = document.getElementById('NbChambre');
                NbChambre.innerHTML = reservation.nbChambre + " Chambre";
                
                var Titre2 = document.getElementById('Titre2');
                Titre2.innerHTML = reservation.nom;
                
                var Tapkey = document.getElementById("Tapkey");
                if(reservation.ClientTapkey == true){
                    Tapkey.innerHTML = 'Serrure Tapkey'; 
                }
                else{
                    Tapkey.innerHTML = 'Pas de serrure Tapkey';
                }
                //emailpropritaire stockage 
                          if(localStorage.getItem("emailProprietaire") == null){
                    localStorage.setItem("emailProprietaire", reservation.emailProrietaire)
                }
                else if (localStorage.getItem("emailProprietaire") != null) {
                    localStorage.removeItem("emailProprietaire");
                    localStorage.setItem("emailProprietaire", reservation.emailProrietaire)

                }
                //fin emailproprietaire stockage
            }

        });
    //})
    
}
      

function getId(){
    localStorage.setItem("Id", idReel)
    localStorage.setItem("Titre", Titre)
    localStorage.setItem("Photo", photo1)
}

