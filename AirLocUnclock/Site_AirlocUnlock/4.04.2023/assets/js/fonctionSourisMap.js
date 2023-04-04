// Récupération des données du fichier JSON
/*
fetch('assets/js/data.json')
  .then(response => response.json())
  .then(data => {
    // Initialisation de la carte Google Maps
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 48.856614, lng: 2.3522219}
    });

    // Parcours des données JSON pour ajouter les marqueurs sur la carte
    data.forEach(item => {
      const marker = new google.maps.Marker({
        position: {lat: item.lat, lng: item.lng},
        map: map,
        title: item.name
      });

      // Ajout d'un écouteur d'événement pour afficher l'image au survol du marqueur
      marker.addListener('mouseover', function() {
        const infoWindow = new google.maps.InfoWindow({
          content: `<img src="${item.image}" alt="${item.name}"/>`
        });
        infoWindow.open(map, marker);
      });
    });
  })
  .catch(error => console.error(error));
*/
//Dans cet exemple, nous utilisons la méthode fetch() pour récupérer les données d'un fichier JSON, puis nous parcourons ces données pour ajouter des marqueurs sur la carte Google Maps. Nous ajoutons ensuite un écouteur d'événement pour chaque marqueur, qui affiche une fenêtre d'informations contenant une image lorsque l'utilisateur survole le marqueur. L'attribut item.image dans la balise <img> correspond à l'URL de l'image dans le fichier JSON.