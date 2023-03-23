carte = new google.maps.Map(document.getElementById("map"), options);
var BtnAffiche = document.getElementById("afficheMap")
var main = document.getElementById("main")
var map = document.getElementById("Carte")


function ShowMap() {
    if(map.style.display != "none"){
        map.style.display = "none";
        main.style.display = ""
        BtnAffiche.innerText = "Afficher la carte"
    }
    else{
        BtnAffiche.style.fontWeight = "900";
        main.style.display = "none "
        map.style.display = ""
        map.style.marginTop = "10px" 
        BtnAffiche.style.marginTop = "10px" 
        BtnAffiche.innerText = "Retirer la carte"
        MarkersOnTheBeat()
    }
}
function MarkersOnTheBeat(){
carte = new google.maps.Map(document.getElementById("carte"), options);

      $.ajax({
    url: "./assets/js/data.json", 
    method: "GET",
    //dataType: "JSON",
    success: (mark) => {
        console.log(mark.length)
        for (let y = 0; y < mark.length; y++) {
            console.log(mark[y].lat);
            console.log(mark[y].lng);
            markers = new google.maps.Marker({
            position: { lat: mark[y].lat, lng: mark[y].lng },
            map: carte,
          });

        }
    }
  })
}

 function StreamezHoudi(){

     $.ajax({
         url: "./assets/js/data.json",
         method: "GET",
         dataType: "json",
         success: function(response) {
             console.log("response : "+ response.lat);
             places = personne.markers;

             var options = {
                 center:  new google.maps.LatLng(10, 10),
                 zoom: 3,
                 mapTypeId: google.maps.MapTypeId.ROADMAP
             };

             // Create Map
             var map = new google.maps.Map(document.getElementById("map"), options);

             //  latLng Array of JSON  [{lat,lng},{},...{}]
             let latLng = Array();
             //let places = Array();
             for(let i=0; i<places.length;i++){
                 for(key in places[i]){
                     if(key == "latLng") latLng.push(places[i][key]);
                 }
             }


             // set markers on  Map
             for (let i = 0; i < latLng.length; i++) {
                 setInfoMarker(places[i],new google.maps.Marker({
                     position: latLng[i],
                     map: map,
                     title: places[i].namePlace
                 }));
             }
         }
     });

 }