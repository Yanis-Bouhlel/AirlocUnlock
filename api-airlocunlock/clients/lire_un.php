<?php

// On inclut les fichiers de configuration et d'accès aux données
include_once './config/database.php';
include_once './models/gestionClients.php';

// On instancie la base de données
$database = new Database();
$db = $database->getConnection();

// On instancie les clients
$clients = new clients($db);
$clients->email = $emailSelection;

if (!empty($clients->email)) {


    // On éxecute méthode lireUn
    $clients->lireUn();
    // On vérifie si le client existe

    if ($emailSelection != null) {

        $prod = [
            "id" => $clients->id,
            "nom" => $clients->nom,
            "prenom" => $clients->prenom,
            "email" => $clients->email,
            "mdp" => $clients->mdp,
            "numero" => $clients->numero,
            "status" => $clients->status
        ];
        // On envoie le code réponse 200 OK
        http_response_code(200);

        // On encode en json et on envoie
        echo json_encode($prod);
    } else {
        // 404 Not found
        http_response_code(404);

        echo json_encode(array("message" => "Le client n'existe pas"));
    }

} else {
    // Ici, toutes les données ne sont pas présentes
    // On envoie un code 400 - Requête incorrecte
    http_response_code(400);
    echo json_encode(["message" => "Toutes les données requises doivent être fournies"]);
}