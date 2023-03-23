var BtnAffiche = document.getElementById("afficheMap");
var main = document.getElementById("main");
var map = document.getElementById("DivMap");

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
                var map = new google.maps.Map(document.getElementById('DivMap'), mapOptions);
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
fetch("assets/js/data.json").then(res => res.json()).then(data => {
    data.forEach(key => {
        var myLatLng = [key.lat, key.lng]
        setMark(myLatLng);
    })
})

function setMark(coorD){

    const maCarteSection = document.createElement('section')
    maCarteSection.setAttribute('id', 'Carte')
    maCarteSection.setAttribute("style", "display: none;width: 100%;")
    document.getElementById("DivMap").appendChild(maCarteSection)

    const maCarteIframe = document.createElement('iframe');
    maCarteIframe.setAttribute("allowfullscreen", "");
    maCarteIframe.setAttribute("frameborder", "0");
    maCarteIframe.setAttribute("loading", "lazy");
    maCarteIframe.setAttribute("width","100%");
    maCarteIframe.setAttribute("height","400");
    maCarteIframe.setAttribute("id","IFRAMEDIV");
    maCarteSection.appendChild(maCarteIframe);


    const map = new google.maps.Map(document.getElementById("IFRAMEDIV"), {
        zoom: 5.5,
        center: myLatLng,
    });

    new google.maps.Marker({
        position: myLatLng[0],
        map: map,
    });

}
*/