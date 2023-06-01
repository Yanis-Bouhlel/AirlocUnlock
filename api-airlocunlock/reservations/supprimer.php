<?php

// On inclut les fichiers de configuration et d'accès aux données
include_once './config/database.php';
include_once './models/gestionReservations.php';

// On instancie la base de données
$database = new Database();
$db = $database->getConnection();

// On instancie les reservations
$reservations = new reservations($db);

// On récupère l'email de la reservations
$reservations->emailProrietaire = $emailSelection;
$reservations->nom = $nomSelection;

if (!empty($reservations->emailProrietaire) && !empty($reservations->nom)) {

    //On execute la méthode supprimer et on récupère les données
    if ($reservations->supprimer()) {
        // Ici la suppression a fonctionné
        // On envoie un code 200
        http_response_code(200);
        echo json_encode(["message" => "La suppression a été effectuée"]);
    } else {
        // Ici la suppression n'a pas fonctionné
        // On envoie un code 503
        http_response_code(503);
        echo json_encode(["message" => "La suppression n'a pas été effectuée"]);
    }
} else {
    // Ici, toutes les données ne sont pas présentes
    // On envoie un code 400 - Requête incorrecte
    http_response_code(400);
    echo json_encode(["message" => "Toutes les données requises doivent être fournies"]);
}
