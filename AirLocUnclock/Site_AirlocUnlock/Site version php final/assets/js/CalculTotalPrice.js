$("#input-date1").change( function() {
 CalendarPrix();
});

$("#input-date2").change( function() {
 CalendarPrix();
});

function CalendarPrix() {

// Récupère les références des éléments <input> par leur ID
var inputDate1 = document.getElementById("input-date1");
var inputDate2 = document.getElementById("input-date2");

var prixNuit = document.getElementById("Prix");
var Total = document.getElementById("PrixTotal");


// Récupère les valeurs des éléments <input> de type date
var date1 = new Date(inputDate1.value);
var date2 = new Date(inputDate2.value);

// Calcule la différence en millisecondes entre les deux dates
var difference = date2.getTime() - date1.getTime();

// Convertit la différence en jours
var differenceEnJours = Math.floor(difference / (1000 * 60 * 60 * 24));
    
var NbNuit = differenceEnJours;
var PrixTotal = NbNuit * prixNuit.innerHTML.replace("€", "");
    if(PrixTotal < 0){
        alert('vous avez inversé les dates veuillez modifier vos dates');
    }

    if(PrixTotal == 0){
        alert('vous avez reservé 0 nuit');
    }
    
    Total.innerHTML = PrixTotal + " €";
    
    // Stockage des dates dans le localStorage
  if (localStorage.getItem("Date1") == null) {
    localStorage.setItem("Date1", inputDate1.value);
  }
          else if (localStorage.getItem("Date1") != null) {
                    localStorage.removeItem("Date1");
                    localStorage.setItem("Date1", inputDate1.value);

                }
    
      if (localStorage.getItem("Date2") == null) {
    localStorage.setItem("Date2", inputDate2.value);
  }
          else if (localStorage.getItem("Date2") != null) {
                    localStorage.removeItem("Date2");
                    localStorage.setItem("Date2", inputDate2.value);

                }
  
    
    
    if(localStorage.getItem("PrixStock") == null){
                    localStorage.setItem("PrixStock", PrixTotal)
                }
        else if (localStorage.getItem("PrixStock") != null) {
                    localStorage.removeItem("PrixStock");
                    localStorage.setItem("PrixStock", PrixTotal)

                }
   
    
}