fetch("assets/js/data.json")
    .then(response => response.json())
    .then(data => {
    
        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);

        const id = urlParams.get('id')
        
        data.forEach(reservation => {
            if(reservation.id==id ){
                console.log(reservation);
                
                var Titre1 = document.getElementById('Titre1');
                Titre1.innerHTML= reservation.adresse;
                
                var Description = document.getElementById("Description");
                Description.innerHTML= reservation.description;
                
                var Image1= document.getElementById("ImgResa1")
                Image1.src=reservation.photo1;
                
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
                
                var Note1=document.getElementById("note1");
                Note1.innerHTML=reservation.note;
                
                var Note2=document.getElementById("note2");
                Note2.innerHTML=reservation.note;
                
                var Adresse = document.getElementById('Adresse'); 
                //console.log(String(reservation.adresse));
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
                
                
            }

        });
    })
