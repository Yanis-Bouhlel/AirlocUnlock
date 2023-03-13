// créer la carte Google Maps
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('mapID'), {
        center: {lat: 48.8584, lng: 2.2945},
        zoom: 12
    });
}

// ajouter un marqueur à la tour Eiffel
var marker;
document.getElementById('markerBtn').addEventListener('click', function() {
    if (marker) {
        marker.setMap(null);
    }
    marker = new google.maps.Marker({
        position: {lat: 48.8584, lng: 2.2945},
        map: map,
        title: 'Tour Eiffel'
    });
});

// afficher ou masquer la carte
var mapDiv = document.getElementById('mapID');
var showHideBtn = document.getElementById('showHideBtn');
showHideBtn.addEventListener('click', function() {
    if (mapDiv.style.display === 'none') {
        mapDiv.style.display = 'block';
        showHideBtn.innerText = 'Masquer la carte';
    } else {
        mapDiv.style.display = 'none';
        showHideBtn.innerText = 'Afficher la carte';
    }
});
