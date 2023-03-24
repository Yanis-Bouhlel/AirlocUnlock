function initialiser() {
    var latlng = new google.maps.LatLng(46.779231, 6.659431);
    var options = {
        center: latlng,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var carte = new
    google.maps.Map(document.getElementById("carte"), options);

    /*************** Nouveau code ***************/

    // redéfinition du centre de la carte
    carte.setCenter(new google.maps.LatLng(48.21109, 1.7191036));

    // redéfinition du zoom
    carte.setZoom(6);

    //chemin du tracé
    var tourdefrance = [
        new google.maps.LatLng(48.858859 , 2.3470599), // Paris
        new google.maps.LatLng(45.7579555 , 4.8351209), // Lyon
        new google.maps.LatLng(47.238222 , -1.5609655), // Nantes
        new google.maps.LatLng(48.1159156 , -1.6884545), // Rennes
        new google.maps.LatLng(50.6310675 , 3.0471604), // Lille
        new google.maps.LatLng(48.858859 , 2.3470599) // Paris
    ];

    // creation de l'objet Polyline
    var traceTdF = new google.maps.Polyline({
        path: tourdefrance, // chemin du tracé
        strokeColor: "#d35400", // couleur du tracé
        strokeOpacity: 1.0, // opacité du tracé
        strokeWeight: 2 // grosseur du tracé
    });

    // lier le tracé (le polyline) à la carte
    // ceci permet au tracé d'être affiché sur la carte
    traceTdF.setMap(carte);

}
