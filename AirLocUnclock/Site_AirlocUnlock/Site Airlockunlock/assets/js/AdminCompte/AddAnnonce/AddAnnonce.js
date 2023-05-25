var addTitre = document.getElementById("addTitre");
var addAdresse = document.getElementById("addAdresse");
var addImg1 = document.getElementById("addImg1");
var addImg2 = document.getElementById("addImg2");
var addImg3 = document.getElementById("addImg3");
var addImg4 = document.getElementById("addImg4");
var addImg5 = document.getElementById("addImg5");
var addNbVoyageurMax = document.getElementById("addNbVoyageurMax");
var addNbChambre = document.getElementById("addNbChambre");
var addNbSalleDeBain = document.getElementById("addNbSalleDeBain");
var addDescription = document.getElementById("addDescription");
var addPrixParNuit = document.getElementById("addPrixParNuit");
var VerifAddValid = false;


function addAnnonceLoc() {
    
     if (addTitre.value != '') {
        if (addAdresse.value != '') {
            if (addImg1.value !='') {
                if (addImg2.value == '') {
                    if (addImg3.value == '') {
                        if (addImg4.value == '') {
                            if (addImg5.value == '') {
                                if (addNbVoyageurMax.value != '') {
                                    if (addNbChambre.value != '') {
                                        if (addNbSalleDeBain.value != '') {
                                            if (addDescription.value !='') {
                                                if (addPrixParNuit.value !='') {
                                                    VerifAddValid = true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    if(VerifAddValid == true){
/*
VERSION LOCALE
*/
        localStorage.setItem('addTitle', addTitre.value);
     // localStorage.setItem('Adresse', addAdresse.value);
        localStorage.setItem('img1', addImg1.value);
     /* localStorage.setItem('img2', addImg2.value);
        localStorage.setItem('img3', addImg3.value);
        localStorage.setItem('img4', addImg4.value);
        localStorage.setItem('img5', addImg5.value); */
        
        /*localStorage.setItem('nbVoy', addNbVoyageurMax.value);
        localStorage.setItem('nbCham', addNbChambre.value);
        localStorage.setItem('nbSdB', addNbSalleDeBain.value);
        localStorage.setItem('Description', addDescription.value);
     */ localStorage.setItem('addPrix', addPrixParNuit.value);
        /*      
        
        REQUETE AJAX 
        data : {
        Titre : addTitre.value,
        Adresse : addAdresse.value, 
        }
                */
    }
    
}
