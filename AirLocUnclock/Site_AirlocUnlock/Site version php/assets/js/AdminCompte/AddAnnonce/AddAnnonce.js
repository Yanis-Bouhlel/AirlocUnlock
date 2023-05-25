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

function VerifForm()
{

if (addTitre.value == '') {
         alert('rempliser le champs mes couilles ');
     }
    else if (addAdresse.value == '') {
            alert('rempliser le champs mes couilles ');
        }
        else if (addImg1.value =='') {
                         alert('rempliser le champs mes couilles ');
            }
                else if (addImg2.value == '') {
                             alert('rempliser le champs mes couilles ');
                }
                    else if (addImg3.value == '') {
                                 alert('rempliser le champs mes couilles ');
                    }
                        else if (addImg4.value == '') {
                                     alert('rempliser le champs mes couilles ');
                        }
                            else if (addImg5.value == '') {
                                         alert('rempliser le champs mes couilles ');
                            }
    
                                else if (addNbVoyageurMax.value == '') {
                                             alert('rempliser le champs mes couilles ');
                                }
                                    else if (addNbChambre.value == '') {
                                                 alert('rempliser le champs mes couilles ');
                                    }
                                        else if (addNbSalleDeBain.value == '') {
                                                     alert('rempliser le champs mes couilles ');
                                        }
                                            else if (addDescription.value =='') {
                                       
                                            }
                                                else (addPrixParNuit.value == '') {
                                                 alert('rempliser le champs mes couilles ');
                                                }
    
}

function addAnnonceLoc() { 
    VerifForm();
    VerifAddValid == true;
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
        
        REQUETE AJAX :
        
        data : {
        Titre : addTitre.value,
        Adresse : addAdresse.value
        success : function (){
        
        localStorage.setItem('addTitle', addTitre.value);
        localStorage.setItem('Adresse', addAdresse.value);
        localStorage.setItem('img1', addImg1.value);
        localStorage.setItem('img2', addImg2.value);
        localStorage.setItem('img3', addImg3.value);
        localStorage.setItem('img4', addImg4.value);
        localStorage.setItem('img5', addImg5.value); 
        
        /*localStorage.setItem('nbVoy', addNbVoyageurMax.value);
        localStorage.setItem('nbCham', addNbChambre.value);
        localStorage.setItem('nbSdB', addNbSalleDeBain.value);
        localStorage.setItem('Description', addDescription.value);
      localStorage.setItem('addPrix', addPrixParNuit.value);
        }
        }
    */
    }
    
}
