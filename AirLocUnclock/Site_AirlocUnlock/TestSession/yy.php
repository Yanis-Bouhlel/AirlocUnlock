<?php
session_start(); // Initialise la session

// Vérifie si les informations de connexion sont stockées dans la session
if (!isset($_SESSION['login']) || !isset($_SESSION['mdp'])) {
    header("Location: test.php");
    // Redirige l'utilisateur vers la page d'accueil si les informations de connexion ne sont pas stockées
    // dans la session
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Page de réservation</title>
</head>
<body>
<h1>Page de réservation</h1>
<p>Vous êtes connecté en tant que <?php echo $_SESSION['login']; ?></p>
<a href="test.php">Retour à la page d'accueil</a>
</body>
</html>
