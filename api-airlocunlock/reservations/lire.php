<?php

// On inclut les fichiers de configuration et d'accès aux données
include_once './config/database.php';
include_once './models/gestionReservations.php';

// On instancie la base de données
$database = new Database();
$db = $database->getConnection();

// On instancie les reservations
$reservations = new reservations($db);

//On execute la méthode lire et on récupère les données
$stmt = $reservations->lire();

// On vérifie si on a au moins une reservations
if ($stmt->rowCount() > 0) {
    // On initialise un tableau associatif
    $tableaureservations = [];
    $tableaureservations['reservations'] = [];

    // On parcourt les reservations
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $prod = [
            "id" => $id,
            "nom" => $nom,
            "adresse" => $adresse,
            "date" => $date,
            "photo1" => $photo1,
            "photo2" => $photo2,
            "photo3" => $photo3,
            "photo4" => $photo4,
            "photo5" => $photo5,
            "nbChambre" => $nbChambre,
            "nbVoyageur" => $nbVoyageur,
            "nbSBain" => $nbSBain,
            "note" => $note,
            "description" => $description,
            "prix" => $prix,
            "ClientTapkey" => $ClientTapkey,
            "emailProrietaire" => $emailProrietaire,
            "emailLocataire" => $emailLocataire,
            "lng" => $lng,
            "lat" => $lat
        ];

        $tableaureservations['reservations'][] = $prod;
    }

    // On envoie le code réponse 200 OK
    http_response_code(200);
    // On encode en json et on envoie
    echo json_encode($tableaureservations);
} else {
    // Ici, toutes les données ne sont pas présentes
    // On envoie un code 503 - Requête incorrecte
    http_response_code(503);
    echo json_encode(["message" => "La base de données ne comporte aucunes données"]);
}