var BouttonAffichage = document.getElementById("afficheMap");
var main = document.getElementById("main");
var mapgoogle = document.getElementById("carte");

function ShowMap() {
    if(mapgoogle.style.display != "none"){
        mapgoogle.style.display = "none";
        main.style.display = "flex";
        BouttonAffichage.innerText = "Afficher la carte"
    }
    else{
        BouttonAffichage.style.fontWeight = "900";
        main.style.display = "none ";
        mapgoogle.style.display = "flex";
        mapgoogle.style.marginTop = "10px" ;
        BouttonAffichage.style.marginTop = "10px" ;
        BouttonAffichage.innerText = "Afficher la liste";
        initialiser();
    }
    
}

function initialiser() {
    var xmlhttp = new XMLHttpRequest();
     xmlhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             var markers = JSON.parse(this.responseText).reservations;
             var mapOptions = {
                 zoom: 10,
                 center: {lat: 48.8566, lng: 2.3522 }
             };
             
             //creation de la carte 
             var map = new google.maps.Map(document.getElementById('carte'), mapOptions);
             
             //affichage des point sur la carte 
             for (var i = 0; i < markers.length; i++) {
                var Lat = parseFloat(markers[i].lat) ; 
                var Lng = parseFloat(markers[i].lng) ; 
         
                var description = markers[i].nom

                 if(markers[i].ClientTapkey==true){
                     var marker = new google.maps.Marker({
                         position: {lat: Lng, lng: Lat},
                         map: map,
                         title: description,
                         icon:"./assets/img/cadenasv2.png"
                     });

                 }
                 else{
                     var marker = new google.maps.Marker({
                         position: {lat: Lng, lng: Lat},
                         map: map,
                         title: description,
                     });

                 }

             }
         }
     };
     xmlhttp.open("GET", "http://51.210.151.13/btssnir/projets2023/airlocunlock/api-airlocunlock/reservations.php", true);
     xmlhttp.send();
 }








