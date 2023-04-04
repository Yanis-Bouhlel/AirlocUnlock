function LoadPageReserv(IdHouse) {
    var Titre = document.getElementbyId('Titre')
    var Notes = document.getElementbyId('note')
    var Commentaires = document.getElementbyId('Commentaires')
    var Tapkey = document.getElementbyId('Tapkey')
    var Adresse = document.getElementbyId('Adresse')
    var Notes = document.getElementbyId('note')
    var Commentaires = document.getElementbyId('Commentaires')
    var Tapkey = document.getElementbyId('Tapkey')
    var NbvoyageurMax = document.getElementbyId('NbvoyageurMax')
    var NbChambre = document.getElementbyId('NbChambre')
    var NbSalleDeBain = document.getElementbyId('NbSalleDeBain')
    var Description = document.getElementbyId('Description')
    var Prix = document.getElementbyId('Prix')
    var Nbvoyageur = document.getElementbyId('Nbvoyageur')
    var Commentaires = document.getElementbyId('Commentaires')
    var DateArriver = document.getElementbyId('DateArriver')
    var DateDepart = document.getElementbyId('DateDepart')
    var PrixTotal = document.getElementbyId('PrixTotal')
    
    console.log(IdHouse);
    
}
fetch("assets/js/data.json")
    .then(response => response.json())
    .then(data => {
    
        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);

        const id = urlParams.get('id')
        
        data.forEach(reservation => {
            if(reservation.id==id ){
                var Titre1 = document.getElementById('Titre1');
                Titre1.innerHTML= reservation.localisation;
                var Description = document.getElementById("Description");
                Description.innerHTML= reservation.description;
                var Image1= document.getElementById("ImgResa1")
                Image1.src=reservation.photo1;
                var Image2= document.getElementById("ImgResa2");
                Image2.src=reservation.photo2;
                var Image3= document.getElementById("ImgResa3");
                Image3.src=reservation.photo3;
                var Prix = document.getElementById("Prix");
                Prix.innerHTML=reservation.prix;
                var Note1=document.getElementById("note1");
                Note1.innerHTML=reservation.note;
                var Note2=document.getElementById("note2");
                Note2.innerHTML=reservation.note;
                var Tapkey = document.getElementById("Tapkey");
                if(reservation.ClientTapkey == true){
                    Tapkey.innerHTML = 'Serrure Tapkey';
                    
                }
                else{
                    Tapkey.innerHTML = 'Pas de serrure Tapkey';
                }
                
            }

        });
    })
