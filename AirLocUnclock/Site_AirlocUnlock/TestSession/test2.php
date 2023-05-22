<?php
// Vérifie si l'utilisateur est connecté
if (isset($_POST['Deco'])) {
    // Détruit toutes les données de session
    $deco = $_POST['Deco'] ;
    session_destroy();
}
//$deco =  ;
// Redirige l'utilisateur vers la page de connexion
header("Location: PageReserv.php?id=$deco");
exit();
