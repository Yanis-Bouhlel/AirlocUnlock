<?php

// On inclut les fichiers de configuration et d'accès aux données
include_once './config/database.php';
include_once './models/gestionClients.php';

// On instancie la base de données
$database = new Database();
$db = $database->getConnection();

// On instancie les clients
$clients = new clients($db);

// On execute la méthode lire et on récupère les données
$stmt = $clients->lire();

// On vérifie si on a au moins un client
if ($stmt->rowCount() > 0) {
    // On initialise un tableau associatif
    $tableauclients = [];
    $tableauclients['clients'] = [];

    // On parcourt les clients
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $prod = [
            "id" => $id,
            "nom" => $nom,
            "prenom" => $prenom,
            "email" => $email,
            "mdp" => $mdp,
            "numero" => $numero,
            "status" => $status
        ];

        $tableauclients['clients'][] = $prod;
    }

    // On envoie le code réponse 200 OK
    http_response_code(200);

    // On encode en json et on envoie
    echo json_encode($tableauclients);
} else {
    // Ici, toutes les données ne sont pas présentes
    // On envoie un code 503 - Requête incorrecte
    http_response_code(503);
    echo json_encode(["message" => "La base de données ne comporte aucunes données"]);
}