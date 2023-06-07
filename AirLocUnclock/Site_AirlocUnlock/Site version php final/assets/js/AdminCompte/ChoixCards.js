var Title = localStorage.getItem('Titre');
var Photo = localStorage.getItem('Photo');
var Id = localStorage.getItem("Id");

var Title1 = localStorage.getItem('addTitle');
var Photo1 = localStorage.getItem('img1');
var addPrix = localStorage.getItem("addPrix");
var Prixajt = document.getElementById("Price");

var MesResas = document.getElementById("MesResas");
var MesLocs = document.getElementById("MesLocs");
var MesLocs1 = document.getElementById("MesLocs-1");

var addAppart = document.getElementById("addAppart");
var Choix1 = document.getElementById("Choix1MyAccount");
var Choix2 = document.getElementById("Choix1Loc");
var Titre = document.getElementById("Titre");

var RowResa = document.getElementById("RowResa");
var ColResa = document.getElementById("ColResa");

var RowLoc = document.getElementById("RowLoc");
var ColLoc = document.getElementById("ColLoc");

var TitreCardloc = document.getElementById("TitleLoc");
var imgCardLoc = document.getElementById("imgCardLoc");

var TitleResa = document.getElementById("TitleResa");
var imgResa = document.getElementById("imgResa");

var CardmonBien = document.getElementById("CardmonBien");

function ChoixResaOuLocs(data){
    if (data == "Resa"){
        Choix1.style.display = "none";
        ShowResa();
    }
    else if (data == "Loc"){
        Choix1.style.display = "none";
        Choix2.style.display = "";
    }
}

function ChoixLoc(data){
    if (data == "addAppart"){
        Choix2.style.display = "none";
        addAppart.style.display = "";
        Titre.innerHTML = "Renseignez votre logement";
    }
    else if (data == "mesBien"){
        Choix2.style.display = "none";
        RowLoc.style.display = "";
        ShowLoc();
    }
}

function ShowResa(){
     var email = localStorage.getItem('email');
    
     var request = $.ajax({
        method: "POST", 
        url: 'http://51.210.151.13/btssnir/projets2023/airlocunlock/api-airlocunlock/reservations.php',
        data: {
        emailLocataire: email
    },
        //dataType : "json",
        success: (data) => {
            console.log("dd")
    
                    if(data.message == "l'utilisateur n'a pas de location"){
                Titre.innerHTML = "vous n'aver aucune reservation a louer";
                RowResa.style.display= "none";
            }
             else {
        Titre.innerHTML = "Mes Locations";
        imgResa.src = data.reservations[0].photo1;
        TitleResa.innerHTML = data.reservations[0].nom;
        RowResa.style.display = "";
            } 
        
}

    })
    
    /*
    imgCard.src = Photo;
    TitreCard.innerHTML = Title;
    RowResa.style.display = "";
    */
}

function getLink(){
    ColResa.href = "PageReserv.html?id=" + Id;
}


function ShowLoc(){
    var email = localStorage.getItem('email');
    var request = $.ajax({
        method: "GET", 
        url: 'http://51.210.151.13/btssnir/projets2023/airlocunlock/api-airlocunlock/reservations.php?email='+ email, 
        dataType : "json",
        success: (data) => {
                                console.log(data)

                    if(data.message == "l'utilisateur n'a pas de r\u00e9servation(s)"){
                Titre.innerHTML = "vous n'aver aucune reservation a louer";
                RowLoc.style.display= "none";
            }
             else {
        Titre.innerHTML = "Mes Locations";
        Prixajt.innerHTML = data.reservations[0].prix;
        imgCardLoc.src = data.reservations[0].photo1;
        TitreCardloc.innerHTML = data.reservations[0].nom;
                 
                           if(localStorage.getItem("TitreBien") == null){
                    localStorage.setItem("TitreBien", data.reservations[0].nom)
                }
                        else if (localStorage.getItem("TitreBien") != null) {
                    localStorage.removeItem("TitreBien");
                    localStorage.setItem("TitreBien", data.reservations[0].nom)

                }
        IdReserv = data.reservations[0].id;
        RowLoc.style.display = "";
            } 
        
}

    })
    }



