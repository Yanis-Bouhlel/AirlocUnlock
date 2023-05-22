<?php
session_start();

// Vérifie si l'utilisateur est connecté
if(isset($_SESSION['Deco'])) {
    // Détruit toutes les données de session
    session_destroy();
}

// Redirige l'utilisateur vers la page de connexion
header("Location: index.php");
exit();
?>