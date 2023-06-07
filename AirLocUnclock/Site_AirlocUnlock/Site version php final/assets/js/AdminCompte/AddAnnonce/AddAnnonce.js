function VerifForm()
{

   var titre = document.getElementById('addTitre').value;
   var adresse = document.getElementById('addAdresse').value;
    var date = document.getElementById('addDate').value;
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

   if (titre === '' || date === '' ||  adresse === '' || img1 === '' || img2 === '' || img3 === '' || img4 === '' || img5 === '' || nbVoyageurMax === '' || nbChambre === '' || nbSalleDeBain === '' || description === '' || prixParNuit === '' || lng === '' || lat === '' || note === '' || serrureTapkey === '' || !conditionsAcceptees)
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
      var date = document.getElementById('addDate').value;
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
     var emailProprietaire = localStorage.getItem("email");

      //Créer un objet js pour récupérer les valeurs
      var data = {
         nom: titre,
         adresse: adresse,
         date:date,
         photo1: img1,
         photo2: img2,
         photo3: img3,
         photo4: img4,
         photo5: img5,
         nbVoyageur: nbVoyageurMax,
         nbChambre: nbChambre,
         nbSBain: nbSalleDeBain,
         note: note,
         description: description,
         prix: prixParNuit,
         ClientTapkey: serrureTapkey,
         emailProprietaire:emailProprietaire,
         lng: lng,
         lat: lat

    
      };
      var request = $.ajax(
      {
         method: "POST",
         url: "http://51.210.151.13/btssnir/projets2023/airlocunlock/api-airlocunlock/reservations.php",
         data: JSON.stringify(data),
         //dataType: "json",
          
         success: (data) =>
         {
            
            console.log(data);
      
            alert(data.message);
            alert('Votre bien a ete ajouter');
         },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
      });
   }

}

