<?php

// On inclut les fichiers de configuration et d'accès aux données
include_once './config/database.php';
include_once './models/gestionReservations.php';

// On instancie la base de données
$database = new Database();
$db = $database->getConnection();

// On instancie les reservations
$reservations = new reservations($db);

// On vérifie que toute les données sont présente
if (!empty($donnees->nom) && !empty($donnees->adresse) && !empty($donnees->date) && !empty($donnees->photo1) && !empty($donnees->photo2) && !empty($donnees->photo3) && !empty($donnees->photo4) && !empty($donnees->photo5) && !empty($donnees->nbChambre) && !empty($donnees->nbVoyageur) && !empty($donnees->nbSBain) && !empty($donnees->note) && !empty($donnees->description) && !empty($donnees->prix) && /*!empty($donnees->ClientTapkey) &&*/!empty($donnees->emailProrietaire) && !empty($donnees->emailLocataire) && !empty($donnees->lng) && !empty($donnees->lat)) {
    // Ici on a reçu les données
    // On hydrate notre objet
    $reservations->nom = $donnees->nom;
    $reservations->adresse = $donnees->adresse;
    $reservations->date = $donnees->date;
    $reservations->photo1 = $donnees->photo1;
    $reservations->photo2 = $donnees->photo2;
    $reservations->photo3 = $donnees->photo3;
    $reservations->photo4 = $donnees->photo4;
    $reservations->photo5 = $donnees->photo5;
    $reservations->nbChambre = $donnees->nbChambre;
    $reservations->nbVoyageur = $donnees->nbVoyageur;
    $reservations->nbSBain = $donnees->nbSBain;
    $reservations->note = $donnees->note;
    $reservations->description = $donnees->description;
    $reservations->prix = $donnees->prix;
    $reservations->ClientTapkey = $donnees->ClientTapkey;
    $reservations->emailProrietaire = $donnees->emailProrietaire;
    $reservations->emailLocataire = $donnees->emailLocataire;
    $reservations->lng = $donnees->lng;
    $reservations->lat = $donnees->lat;

    //On execute la méthode modifier et on récupère les données
    if ($reservations->modifier()) {
        // Ici la modification a fonctionné
        // On envoie un code 200
        http_response_code(200);
        echo json_encode(["message" => "La modification a été effectuée"]);
    } else {
        // Ici la création n'a pas fonctionné
        // On envoie un code 503
        http_response_code(503);
        echo json_encode(["message" => "La modification n'a pas été effectuée"]);
    }
} else {
    // Ici, toutes les données ne sont pas présentes
    // On envoie un code 400 - Requête incorrecte
    http_response_code(400);
    echo json_encode(["message" => "Toutes les données requises doivent être fournies"]);
}
