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
/*
btnreserve.onclick= ()=>{

    btn.reserrve.onclick= ()=>{
        fetch("assets/js/data.json"+id.value)
            .then(response => response.json())
            .then(data => { data.forEach(reser => {alert(reser.id)
            });

}
*/

fetch("assets/js/data.json")
    .then(response => response.json())
    .then(data => {
        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);

        const id = urlParams.get('id')
        data.forEach(reservation => {
            if(reservation.id==id ){
                var Titre = document.getElementById('Titre');
                Titre.innerHTML= reservation.localisation;
                var Description = document.getElementById("Description");
                Description.innerHTML= reservation.description;
                var Image1= document.getElementById("ImgResa1")
                Image1.innerHTML=reservation.photo1;
            }

        });
    })
