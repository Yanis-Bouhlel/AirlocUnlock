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
        main.style.display = "none "
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
    //dataType: "JSON",
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