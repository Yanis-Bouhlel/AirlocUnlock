var BouttonAffichage = document.getElementById("afficheMap")
var main = document.getElementById("main")
var mapgoogle = document.getElementById("carte")

function ShowMap() {
    if(mapgoogle.style.display != "none"){
        mapgoogle.style.display = "none";
        main.style.display = "block";
        BouttonAffichage.innerText = "Afficher la carte"
    }
    else{
        BouttonAffichage.style.fontWeight = "900";
        main.style.display = "none ";
        mapgoogle.style.display = "block";
        mapgoogle.style.marginTop = "10px" ;
        BouttonAffichage.style.marginTop = "10px" ;
        BouttonAffichage.innerText = "Retirer la carte";
        initialiser();
    }
    
}
function initialiser() {
    var xmlhttp = new XMLHttpRequest();
     xmlhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             var markers = JSON.parse(this.responseText);
             var mapOptions = {
                 zoom: 13,
                 center: {lat: 48.852969, lng: 2.349903}
             };
             var map = new google.maps.Map(document.getElementById('carte'), mapOptions);
             for (var i = 0; i < markers.length; i++) {
                 if(markers[i].ClientTapkey==true){
                     var marker = new google.maps.Marker({
                         position: {lat: markers[i].lat, lng: markers[i].lng},
                         map: map,
                         title: markers[i].title,
                         icon:"/assets/img/cadenasv2.png"
                     });

                 }
                 else{
                     var marker = new google.maps.Marker({
                         position: {lat: markers[i].lat, lng: markers[i].lng},
                         map: map,
                         title: markers[i].title,
                     });

                 }

             }
         }
     };
     xmlhttp.open("GET", "assets/js/data.json", true);
     xmlhttp.send();
 }






