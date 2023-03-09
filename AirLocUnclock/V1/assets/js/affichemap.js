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

    }
         
}

