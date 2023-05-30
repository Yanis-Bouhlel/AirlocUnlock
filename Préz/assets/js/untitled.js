var Title = document.getElementById('Title')
var titre = document.getElementById('titre')
var Init = document.getElementById('Choice')
var Diapo = document.getElementById('Soutenances')

var home = document.getElementById('home')

var linkYanis = document.getElementById('linkYanis')
var linkIsma = document.getElementById('linkIsma')
var linkMaha = document.getElementById('linkMaham')
var linkTedi = document.getElementById('linkTedi')

var Yanis = document.getElementById('Yanis')
var Isma = document.getElementById('Isma')
var Maha = document.getElementById('Maha')
var Tedi = document.getElementById('Tedi')

var Presentation = document.getElementById('Presentation')

var TitlePres = document.getElementById('TitlePres')
var ChoixePres = document.getElementById('ChoixePres')
var WebSite = document.getElementById('WebSite')
var SmartLock = document.getElementById('SmartLock')


function Link(data){
    if (data == "Yanis"){
        Title.style.display = "none"
        Init.style.display = "none"
        Diapo.style.display = "none"
        
        home.classList.remove("underline")
        linkMaha.classList.remove("underline")
        linkIsma.classList.remove("underline")
        linkTedi.classList.remove("underline")
        
        linkYanis.classList.add("underline")
        
        Maha.style.display = "none"
        Tedi.style.display = "none"
        Isma.style.display = "none"
        
        home.style.color = "#00000080"
        linkTedi.style.color = "#00000080"
        linkIsma.style.color = "#00000080"
        linkMaha.style.color = "#00000080"
        
        linkYanis.style.color = "rgb(0,0,0)"
        linkYanis.style.fontWeight = "bolder" 
        
        Yanis.style.marginTop = "50px"
        Yanis.style.display = ""
    } 
    else if (data == "Rapport de Projet"){
        window.location.href = "file:///C:/Users/Yanis/Downloads/Rapport%20de%20Projet%20(1).pdf"
    }
    else if (data == "Maha"){
        Title.style.display = "none"
        Init.style.display = "none"
        Diapo.style.display = "none"
        
        home.classList.remove("underline")
        linkYanis.classList.remove("underline")
        linkIsma.classList.remove("underline")
        linkTedi.classList.remove("underline")
        
        linkMaha.classList.add("underline")
        
        Isma.style.display = "none"
        Tedi.style.display = "none"
        Yanis.style.display = "none"
        
        home.style.color = "#00000080"
        linkYanis.style.color = "#00000080"
        linkIsma.style.color = "#00000080"
        linkTedi.style.color = "#00000080"
        
        linkMaha.style.color = "rgb(0,0,0)"
        linkMaha.style.fontWeight = "bolder" 
        
        Maha.style.marginTop = "50px"
        Maha.style.display = ""
    } 
    else if (data == "Isma"){
        Title.style.display = "none"
        Init.style.display = "none"
        Diapo.style.display = "none"
        
        Maha.style.display = "none"
        Tedi.style.display = "none"
        Yanis.style.display = "none"
        
        home.classList.remove("underline")
        linkYanis.classList.remove("underline")
        linkMaha.classList.remove("underline")
        linkTedi.classList.remove("underline")
        
        linkIsma.classList.add("underline")
        
        home.style.color = "#00000080"
        linkYanis.style.color = "#00000080"
        linkTedi.style.color = "#00000080"
        linkMaha.style.color = "#00000080"
        
        linkIsma.style.color = "rgb(0,0,0)"
        linkIsma.style.fontWeight = "bolder" 
        
        Isma.style.marginTop = "50px"
        Isma.style.display = ""
    } 
    else if (data == "Tedi"){
        Title.style.display = "none"
        Init.style.display = "none"
        Diapo.style.display = "none"
        
        home.classList.remove("underline")
        linkYanis.classList.remove("underline")
        linkIsma.classList.remove("underline")
        linkMaha.classList.remove("underline")
        
        linkTedi.classList.add("underline")
        
        Maha.style.display = "none"
        Isma.style.display = "none"
        Yanis.style.display = "none"
        
        home.style.color = "#00000080"
        linkYanis.style.color = "#00000080"
        linkIsma.style.color = "#00000080"
        linkMaha.style.color = "#00000080"
        
        linkTedi.style.color = "rgb(0,0,0)"
        linkTedi.style.fontWeight = "bolder" 
        
        Tedi.style.marginTop = "50px"
        Tedi.style.display = ""
    }
}

function ChangePage(data){

    if (data == "Soutenences"){
        Title.style.display = "none"
        Init.style.display = "none"
        Diapo.style.marginTop = "35px"
        titre.style.fontSize = "56px"
        Diapo.style.display = ""
    }
    else if (data == "Rapport"){
        window.location.href = "assets/pdf/Rapport_AirLocUnlock.pdf"
    }
    else if (data == "Présentation"){
        Title.style.display = "none"
        Init.style.display = "none"
        Presentation.style.display = ""
    }
    else if (data == "Return"){
        
        Title.style.display = ""
        Init.style.display = ""
        Diapo.style.display = "none"
        
        Presentation.style.display = "none"
        ChoixePres.style.display = ""
        WebSite.style.display = "none"
        SmartLock.style.display = "none"
        
        Maha.style.display = "none"
        Isma.style.display = "none"
        Yanis.style.display = "none"
        Tedi.style.display = "none"
        
        linkTedi.style.color = "#00000080"
        linkYanis.style.color = "#00000080"
        linkIsma.style.color = "#00000080"
        linkMaha.style.color = "#00000080"
        home.style.color = "#000"
        
        linkTedi.classList.remove("underline")
        linkYanis.classList.remove("underline")
        linkIsma.classList.remove("underline")
        linkMaha.classList.remove("underline")
        
        home.classList.add("underline")


    }
}

function ChoixPres(data){
    if(data == "Site"){
        ChoixePres.style.display = "none"
        WebSite.style.display = ""
        SmartLock.style.display = "none"
    }
    else if (data == "Lock"){
        ChoixePres.style.display = "none"
        WebSite.style.display = "none"
        SmartLock.style.display = ""
    }
}

function ImgOpen(data){
    if (data == "isma"){
        var isma = document.getElementById('imgIsma')
        isma.src = "assets/img/Soutenance/Isma/Capture2.png"
    }
    else if (data == "Tedi"){
        var Tedi = document.getElementById('imgTedi')
        Tedi.src = "assets/img/Soutenance/Tedi/Capture2.png"
    }
    else if (data == "Maha"){
        var Maha = document.getElementById('imgMaha')
        Maha.src = "assets/img/Soutenance/Maha/Capture2.png"
    }
    else if (data == "Mary"){
        var Mary = document.getElementById('imgMary')
        Mary.src = "assets/img/Soutenance/Mary/Capture2.png"
    }
    else if (data == "Yanis"){
        var Yanis = document.getElementById('imgYanis')
        Yanis.src = "assets/img/Soutenance/Yanis/Capture2.png"
    }
    
}

function ImgLeave(data){
    if (data == "isma"){
        var isma = document.getElementById('imgIsma')
        isma.src = "assets/img/Soutenance/Isma/Capture.png"
    }
    else if (data == "Tedi"){
        var Tedi = document.getElementById('imgTedi')
        Tedi.src = "assets/img/Soutenance/Tedi/Capture.png"
    }
    else if (data == "Maha"){
        var Maha = document.getElementById('imgMaha')
        Maha.src = "assets/img/Soutenance/Maha/Capture.png"
    }
    else if (data == "Mary"){
        var Mary = document.getElementById('imgMary')
        Mary.src = "assets/img/Soutenance/Mary/Capture.png"
    }
    else if (data == "Yanis"){
        var Yanis = document.getElementById('imgYanis')
        Yanis.src = "assets/img/Soutenance/Yanis/Capture.png"
    }
}

function Redirect(data){
    if (data == "isma"){
        window.location.href = "https://docs.google.com/presentation/d/e/2PACX-1vRXbCguiAXar2pcYu72jQCgEaEwwnykYYCM5RDowK9TMbAb3QRwZ6-U_TQXBGJLM55IBBsza30pDQma/pub?start=false&loop=false&delayms=3000"
    }
    else if (data == "Tedi"){
        window.location.href = "https://docs.google.com/presentation/d/e/2PACX-1vRMcL5r2uLR2C1eTLJ0AnFfKN7RqLolMPh8-O4a6b9PAj63LE4AlPuOtiSxK_bwxioJyE2aFvHN-r4Y/pub?start=false&loop=false&delayms=3000"
    }
    else if (data == "Maha"){
        window.location.href = "https://docs.google.com/presentation/d/e/2PACX-1vRKlwgGT3jdp6Bw9qUHgLAM-Y7P-JH3raZ1jaPFblsrzQiVijJI--KhRfb3j0HJtZIXAI2FSVU5YGeE/pub?start=false&loop=false&delayms=3000"
    }
    else if (data == "Mary"){
        window.location.href = "https://docs.google.com/presentation/d/e/2PACX-1vTi9sQWqdX7b0Vuqf-dcHWwM4_t5EPKLltZMRd7nl2OmcOW72pFya2esRkDbd6PkHBw45uDYMBdk82B/pub?start=false&loop=false&delayms=3000"
    }
    else if (data == "Yanis"){
        window.location.href = "https://docs.google.com/presentation/d/e/2PACX-1vR0GjzjQGTBW7R4LV5GeHh9d6fJKMPylmFk8wvkkTPAKDiSwHlMSSRZeIKPxyq7Y2yDSS-Gjyb-NXz6/pub?start=false&loop=false&delayms=3000"
    }
}