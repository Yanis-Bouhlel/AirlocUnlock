<?php

// On inclut les fichiers de configuration et d'accès aux données
include_once './config/database.php';
include_once './models/gestionClients.php';

// On instancie la base de données
$database = new Database();
$db = $database->getConnection();

// On instancie les clients
$clients = new clients($db);

// On récupère les données
$stmt = $clients->lire();
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
$donneesclients = json_encode($tableauclients);
$clients = json_decode($donneesclients, true);

// On parcourt le tableau des clients pour chercher l'email et le mdp
for ($i = 0; $i < count($clients['clients']); $i++) {
    if ($clients['clients'][$i]['email'] == $donnees->email && $clients['clients'][$i]['mdp'] == $donnees->mdp) {
        $bool = true;
        break;
    } else {
        $bool = false;
    }
}
echo json_encode(["message" => $bool]);