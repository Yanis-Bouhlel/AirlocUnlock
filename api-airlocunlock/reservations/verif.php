<?php

// On inclut les fichiers de configuration et d'accès aux données
include_once './config/database.php';
include_once './models/gestionReservations.php';

// On instancie la base de données
$database = new Database();
$db = $database->getConnection();

// On instancie les clients
$reservations = new reservations($db);

// On récupère les données
$stmt = $reservations->lire();
// On initialise un tableau associatif
$tableaureservations = [];
$tableaureservations['reservations'] = [];

// On parcourt les clients
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
$donneesreservations = json_encode($tableaureservations);
$reservations = json_decode($donneesreservations, true);

// On parcourt le tableau des clients pour chercher l'email et le mdp
for ($i = 0; $i < count($reservations['reservations']); $i++) {
    if ($reservations['reservations'][$i]['emailLocataire'] == $donnees->email) {
        $bool = true;
        break;
    } else {
        $bool = false;
    }
}
echo json_encode(["message" => $bool]);