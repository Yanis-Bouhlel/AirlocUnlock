<!DOCTYPE html>
<html lang="fr">
<?php  ?>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>AirlocUnlock</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&amp;display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Aclonica&amp;display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Actor&amp;display=swap">
    <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="assets/fonts/simple-line-icons.min.css">
    <link rel="stylesheet" href="assets/fonts/fontawesome5-overrides.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <nav class="navbar navbar-light navbar-expand-md sticky-top navbar-shrink py-3" id="mainNav">
        <div class="container"><a class="navbar-brand d-flex align-items-center" href="/"><img src="assets/img/avatars/Capture007.png" style="width: 191px;"></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item"><button class="btn btn-primary" type="button" style="background: rgba(51,98,255,0);color: rgb(85,85,85);font-family: Actor, sans-serif;box-shadow: 0px 0px 6px 0px rgba(85,85,85,0.82);border-style: solid;border-color: rgb(85,85,85);font-size: 14px;">N'importe où&nbsp; | Une Semaine | Ajouter des voyageurs&nbsp; &nbsp;&nbsp;<span style="border-radius: 72px;width: 101px;height: 40px;background: #ff5a60;font-size: 18px;border-width: 26px;padding: 2px;padding-top: 3px;padding-bottom: 2px;padding-left: 2px;padding-right: 2px;">&nbsp;<i class="icon-magnifier" style="color: rgb(255,255,255);padding-bottom: 0px;padding-top: 0px;margin-top: 0px;font-size: 14px;"></i>&nbsp;</span></button></li>
                </ul>
                <div class="dropdown no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#" style="padding-right: 0px;margin-bottom: 2px;"><span class="d-none d-lg-inline me-2 text-gray-600 small"></span><img class="border rounded-circle img-profile" src="assets/img/avatars/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" style="width: 30px;" width="30" height="32"></a>
                    <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in" style="width: 210px;"><a class="dropdown-item" id="test-3" href="Inscription.html" onclick=""><i class="fa fa-user-circle fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Inscription</a><a class="dropdown-item" id="test-4" href="Login.html" onclick=""><i class="fa fa-user-circle-o fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Connexion</a>
                        <div class="dropdown-divider"></div><a class="dropdown-item" href="MettreEnLoc.html"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-house fa-sm fa-fw me-2 text-gray-400" style="height: 18px;">
                                <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"></path>
                                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"></path>
                            </svg>&nbsp;Mettre en location</a><a class="dropdown-item" href="#"><i class="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>Paramètres</a><a class="dropdown-item" href="#"><i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Déconnexion</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div id="main" onload="LoadPageReserv('<?php $id = $_GET['id'] ; echo $id ; ?>')">
    <h1 id="Titre" style="text-align: left;margin-top: 10px;margin-bottom: 10px;">Titre</h1>
    <p>&nbsp;<span id="note">Note</span>&nbsp;·&nbsp;<span id="Commentaires">Commentaires</span>&nbsp;·&nbsp;<span id="Tapkey">Tapkey ou non</span>&nbsp;·&nbsp;<span id="Adresse">Adresse</span></p>
    <div class="row">
        <div class="col">
            <div class="container">
                <div class="row">
                    <div class="col-md-6"><img id="ImgResa" style="/*width: 100%;*//*height: 100%;*/"></div>
                    <div class="col">
                        <div class="row">
                            <div class="col-md-6"><img id="ImgResa"></div>
                            <div class="col-md-6"><img id="ImgResa"></div>
                        </div>
                        <div class="row" style="margin-top: 10px;">
                            <div class="col-md-6"><img id="ImgResa"></div>
                            <div class="col-md-6"><img id="ImgResa"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" style="margin-top: 10px;">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title" id="Titre">Title</h4>
                        <h6 class="text-muted card-subtitle mb-2"><span id="NbvoyageurMax">Nb voyageur</span>&nbsp;·&nbsp;<span id="NbChambre">Nb Chambres</span>&nbsp;·&nbsp;<span id="NbSalleDeBain">Nb Salle de bain</span></h6>
                        <p class="card-text" id="Description">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6" style="font-size: 9px;border-radius: 40px;">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <h1><span id="Prix">Prix €</span>&nbsp;<span style="font-size: 20px;">par nuit</span></h1>
                            </div>
                            <div class="col-md-6">
                                <h1 style="font-size: 30px;width: 100%;height: 100%;">&nbsp;<i class="fa fa-star" style="font-size: 20px;margin-right: 10px;"></i><span id="note" style="font-size: 20px;">notes</span>&nbsp;</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6" style="border-style: none;border-color: rgb(0,0,0);border-right: 1px solid rgb(0,0,0);"><button class="btn btn-primary" id="DateArriver" type="button" style="width: 105%;height: 100%;border-radius: 0px;background: transparent;border-top-left-radius: 10px;border-top-right-radius: 0px;color: rgb(0,0,0);border-color: transparent;border-top-color: #000000;border-right-color: rgb(255,255,255);border-bottom-color: rgba(0,0,0,0);border-left-color: rgb(0,0,0);font-family: Actor, sans-serif;">Date Debut</button></div>
                            <div class="col-md-6" style="border-left-color: rgb(0,0,0);"><button class="btn btn-primary" id="DateDepart" type="button" style="width: 105%;height: 100%;background: transparent;border-top-left-radius: 0px;border-top-right-radius: 10px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;color: rgb(0,0,0);border-color: #000000;border-bottom-color: transparent;border-left-color: rgb(255,255,255);margin-left: -12px;font-family: Actor, sans-serif;">Date de fin</button></div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 offset-xl-0" style="height: 46.7px;"><select id="NbVoyageur" style="width: 100%;height: 100%;border-radius: 10px;border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-style: solid;border-bottom-color: rgb(0,0,0);border-left-color: rgb(0,0,0);margin: auto;font-family: Actor, sans-serif;font-size: 16px;">
                                    <optgroup label="This is a group">
                                        <option value="12" selected="">This is item 1</option>
                                        <option value="13">This is item 2</option>
                                        <option value="14">This is item 3</option>
                                    </optgroup>
                                </select></div>
                        </div><button class="btn btn-primary" type="button" style="margin: auto;width: 100%;background: #ff5a60;border-radius: 5px;margin-top: 15px;border-style: none;border-right-style: none;">Reserver</button>
                        <div class="row" style="margin-top: 10px;">
                            <div class="col-md-6">
                                <h1>Total :</h1>
                            </div>
                            <div class="col-md-6">
                                <h1 style="text-align: right;">&nbsp;<span id="PrixTotal">Prix</span><span>&nbsp; €</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/affichemap.js"></script>
    <script src="assets/js/bold-and-bright.js"></script>
    <script src="assets/js/fonctionSourisMap.js"></script>
    <script src="http://maps.google.com/maps/api/js?sensor=false"></script>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/PageReservation.js"></script>
    <script src="assets/js/Test.js"></script>
</body>

</html>