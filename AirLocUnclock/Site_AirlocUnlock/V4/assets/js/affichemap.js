
/*
var BtnAffiche = document.getElementById("afficheMap")
var main = document.getElementById("main")
var map = document.getElementById("map")


function ShowMap() {
    if(map.style.display != "none"){
        map.style.display = "none";
        main.style.display = ""
        BtnAffiche.innerText = "Afficher la carte"
    }
    else{
        main.style.display = "none"
        map.style.display = ""
        map.style.marginTop = "10px"
        map.style.overflow = "auto"
        map.style.position = "absolute"
        BtnAffiche.style.fontWeight = "900"
        BtnAffiche.style.marginTop = "10px"
        BtnAffiche.innerText = "Retirer la carte"
        MarkersOnTheBeat()
    }
}
function MarkersOnTheBeat(){
carte = new google.maps.Map(document.getElementById("map"));

      $.ajax({
    url: "./assets/js/data.json", 
    method: "GET",
    dataType: "JSON",
    success: (mark) => {
        console.log(mark.length)
        for (let y = 0; y < mark.length; y++) {
            console.log(mark[y].lat);
            console.log(mark[y].lng);
            /*markers = new google.maps.Marker({
            position: { lat: mark[y].lat, lng: mark[y].lng },
            map: carte,
          });*/

        }
    }
  })
}
*/

var BtnAffiche = document.getElementById("afficheMap")
var DivMap = document.getElementById("map")
var main = document.getElementById("main")
var myCenter=new google.maps.LatLng(53, -1.33);

var marker=new google.maps.Marker({
    position:myCenter,
    url: '/',
    animation:google.maps.Animation.DROP
});

function initialize()
{
    var mapProp = {
        center:myCenter,
        zoom: 14,
    };

    var map=new google.maps.Map(document.getElementById("map"),mapProp);

    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addListener(marker, 'click', function() {window.location.href = marker.url;});
DivMap.style.position = "absolute"