// méthode XMLHttpRequest() pour récupérer les marqueurs à partir d’un fichier JSON appelé “markers.json”
/*
var BtnAffiche = document.getElementById("afficheMap");
var main = document.getElementById("main");
var map = document.getElementById("Carte");

function ShowMap() {
    if(map.style.display != "none"){
        map.style.display = "none";
        main.style.display = "";
        BtnAffiche.innerText = "Afficher la carte";
    }
    else{
        BtnAffiche.style.fontWeight = "900";
        main.style.display = "none ";
        map.style.display = "";
        map.style.marginTop = "10px" ;
        BtnAffiche.style.marginTop = "10px" ;
        BtnAffiche.innerText = "Retirer la carte";

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var markers = JSON.parse(this.responseText);
                var mapOptions = {
                    zoom: 4,
                    center: {lat: -33, lng: 151}
                };
                var map = new google.maps.Map(document.getElementById('Carte'), mapOptions);
                for (var i = 0; i < markers.length; i++) {
                    var marker = new google.maps.Marker({
                        position: {lat: markers[i].lat, lng: markers[i].lng},
                        map: map,
                        title: markers[i].title
                    });
                }
            }
        };
        xmlhttp.open("GET", "assets/js/data.json", true);
        xmlhttp.send();
    }
}
/*

/*

//Ce code crée une carte Google Maps en utilisant l’élément HTML avec l’ID map. Il définit le niveau de zoom et le centre de la carte en utilisant les valeurs de latitude et de longitude du premier point dans le fichier JSON. Ensuite, il parcourt les points et crée un marqueur pour chaque point en utilisant les valeurs de latitude et de longitude. Les marqueurs sont ajoutés à la carte en utilisant la propriété map du marqueur.


var data = '[ { "id": 1, "lng": "48.96123006959159", "lat": "2.511857670069799" }, { "id": 2, "lng": "48.96123006959159", "lat": "2.511857670069799" }, { "id": 3, "lng": "48.96123006959159", "lat": "2.511857670069799" }]';
var points = JSON.parse(data);

// Créer une carte Google Maps
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: new google.maps.LatLng(points[0].lat, points[0].lng)
});

// Afficher les points sur la carte
for (var i = 0; i < points.length; i++) {
    var point = points[i];
    var latLng = new google.maps.LatLng(point.lat, point.lng);
    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
}
*/