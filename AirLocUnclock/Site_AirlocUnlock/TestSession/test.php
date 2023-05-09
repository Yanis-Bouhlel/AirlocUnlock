<?php
session_start(); // Initialise la session
$_SESSION['login'] = 'isma.sidhou@gmail.com'; // Stocke l'adresse email
$_SESSION['mdp'] = '1234'; // Stocke le mot de passe
?>

<!DOCTYPE html>
<html>
<head>
    <title>Page d'accueil</title>
</head>
<body>
<h1>Bienvenue sur la page d'accueil</h1>
<p>Vous êtes connecté en tant que <?php echo $_SESSION['login']; ?></p>
<a href="yy.php">Aller à la page de réservation</a>
</body>
</html>
