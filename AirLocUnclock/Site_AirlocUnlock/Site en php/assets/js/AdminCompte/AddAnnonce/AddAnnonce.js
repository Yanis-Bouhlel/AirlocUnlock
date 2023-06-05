function VerifForm()
{

   var titre = document.getElementById('addTitre').value;
   var adresse = document.getElementById('addAdresse').value;
   var img1 = document.getElementById('addImg1').value;
   var img2 = document.getElementById('addImg2').value;
   var img3 = document.getElementById('addImg3').value;
   var img4 = document.getElementById('addImg4').value;
   var img5 = document.getElementById('addImg5').value;
   var nbVoyageurMax = document.getElementById('addNbVoyageurMax').value;
   var nbChambre = document.getElementById('addNbChambre').value;
   var nbSalleDeBain = document.getElementById('addNbSalleDeBain').value;
   var description = document.getElementById('addDescription').value;
   var prixParNuit = document.getElementById('addPrixParNuit').value;
   var lng = document.getElementById('addlng').value;
   var lat = document.getElementById('addlat').value;
   var note = document.getElementById('addNote').value;
   var serrureTapkey = document.getElementById('addSerrureTapkey').value;
    
   var conditionsAcceptees = document.getElementById('formCheck-1').checked;

   if (titre === '' || adresse === '' || img1 === '' || img2 === '' || img3 === '' || img4 === '' || img5 === '' || nbVoyageurMax === '' || nbChambre === '' || nbSalleDeBain === '' || description === '' || prixParNuit === '' || lng === '' || lat === '' || note === '' || serrureTapkey === '' || !conditionsAcceptees)
   {
      alert("Veuillez remplir tous les champs et accepter les conditions générales.");
      return false;
   }
   else
   {
      return true;
   }

}

function addAnnonceLoc()
{
   if (VerifForm() == true)
   {
      var titre = document.getElementById('addTitre').value;
      var adresse = document.getElementById('addAdresse').value;
      var img1 = document.getElementById('addImg1').value;
      var img2 = document.getElementById('addImg2').value;
      var img3 = document.getElementById('addImg3').value;
      var img4 = document.getElementById('addImg4').value;
      var img5 = document.getElementById('addImg5').value;
      var nbVoyageurMax = document.getElementById('addNbVoyageurMax').value;
      var nbChambre = document.getElementById('addNbChambre').value;
      var nbSalleDeBain = document.getElementById('addNbSalleDeBain').value;
      var description = document.getElementById('addDescription').value;
      var prixParNuit = document.getElementById('addPrixParNuit').value;
      var lng = document.getElementById('addlng').value;
      var lat = document.getElementById('addlat').value;
      var note = document.getElementById('addNote').value;
      var serrureTapkey = document.getElementById('addSerrureTapkey').value;

      //Créer un objet js pour récupérer les valeurs
      var data = {
         nom: titre,
         adresse: adresse,
         photo1: img1,
         photo2: img2,
         photo3: img3,
         photo4: img4,
         photo5: img5,
         nbVoyageur: nbVoyageurMax,
         nbChambre: nbChambre,
         nbSBain: nbSalleDeBain,
         description: description,
         prix: prixParNuit,
         lng: lng,
         lat: lat,
         note: note,
         ClientTapkey: serrureTapkey
      };
      var request = $.ajax(
      {
         method: "POST",
         url: "http://51.210.151.13/btssnir/projets2023/airlocunlock/api-airlocunlock/reservations/creer.php",
         data: JSON.stringify(data),
         //dataType: "json",
          
         success: (data) =>
         {
            
            console.log(data);
      
            if (data.message == "L ajout n a pas ete effectue")
            {
              alert('votre bien a bien été enregistrer');
            }
            else
            {
               alert('vous avez mal entrer certaine information');
            }
         },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
      });
   }

}
/*
        /*
        VERSION LOCALE
        */
//localStorage.setItem('addTitle', addTitre.value);
// localStorage.setItem('Adresse', addAdresse.value);
//localStorage.setItem('img1', addImg1.value);
/* localStorage.setItem('img2', addImg2.value);
   localStorage.setItem('img3', addImg3.value);
   localStorage.setItem('img4', addImg4.value);
   localStorage.setItem('img5', addImg5.value); */

/*localStorage.setItem('nbVoy', addNbVoyageurMax.value);
        localStorage.setItem('nbCham', addNbChambre.value);
        localStorage.setItem('nbSdB', addNbSalleDeBain.value);
        localStorage.setItem('Description', addDescription.value);
     */
//localStorage.setItem('addPrix', addPrixParNuit.value);
/*      
        
        REQUETE AJAX :
        
        data : {
        Titre : addTitre.value,
        Adresse : addAdresse.value
        success : function (){
        
        localStorage.setItem('addTitle', addTitre.value);
        localStorage.setItem('Adresse', addAdresse.value);
        localStorage.setItem('img1', addImg1.value);
        localStorage.setItem('img2', addImg2.value);
        localStorage.setItem('img3', addImg3.value);
        localStorage.setItem('img4', addImg4.value);
        localStorage.setItem('img5', addImg5.value); 
        
        /*localStorage.setItem('nbVoy', addNbVoyageurMax.value);
        localStorage.setItem('nbCham', addNbChambre.value);
        localStorage.setItem('nbSdB', addNbSalleDeBain.value);
        localStorage.setItem('Description', addDescription.value);
      localStorage.setItem('addPrix', addPrixParNuit.value);
        }
        }
    */
/*
    }*/
