<?php

// On inclut les fichiers de configuration et d'accès aux données
include_once './config/database.php';
include_once './models/gestionClients.php';

// On instancie la base de données
$database = new Database();
$db = $database->getConnection();

// On instancie les clients
$clients = new clients($db);

// On vérifie que toute les données sont présente
if (!empty($donnees->nom) && !empty($donnees->prenom) && !empty($donnees->email) && !empty($donnees->mdp) && !empty($donnees->numero) && !empty($donnees->status)) {

    // Ici on a reçu les données
    // On hydrate notre objet
    $clients->nom = $donnees->nom;
    $clients->prenom = $donnees->prenom;
    $clients->email = $donnees->email;
    $clients->mdp = $donnees->mdp;
    $clients->numero = $donnees->numero;
    $clients->status = $donnees->status;

    // On éxecute méthode creer
    if ($clients->creer()) {
        // Ici la création a fonctionné
        // On envoie un code 201
        http_response_code(201);
        echo json_encode(["message" => "L'ajout a été effectué"]);
    } else {
        // Ici la création n'a pas fonctionné
        // On envoie un code 503
        http_response_code(503);
        echo json_encode(["message" => "L'ajout n'a pas été effectué"]);
    }
} else {
    // Ici, toutes les données ne sont pas présentes
    // On envoie un code 400 - Requête incorrecte
    http_response_code(400);
    echo json_encode(["message" => "Toutes les données requises doivent être fournies"]);
}