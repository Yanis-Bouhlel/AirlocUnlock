<?php

date_default_timezone_set('Europe/Paris');

// Headers requis
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//récupère la méthode de requête (GET, POST, PUT, DELETE)
switch ($_SERVER['REQUEST_METHOD']) {

	// méthode de requête = GET
	case 'GET':
		
		if (!empty($_GET["email"])) {
			$emailSelection = $_GET["email"];
			include("reservations/lire_un.php");
		} else {
			include_once 'reservations/lire.php';
		}
		break;
	default:

		header("HTTP/1.0 405 Method Not Allowed");
		break;

	// méthode de requête = POST
	case 'POST':

		$donnees = json_decode(file_get_contents("php://input"));
       if (!empty($donnees->nom)) {
           include("reservations/creer.php");
       } else {
           include("reservations/verif.php");
       }
		break;

	// méthode de requête = PUT
	case 'PUT':

		$donnees = json_decode(file_get_contents("php://input"));
		include("reservations/modifier.php");
		break;
	// méthode de requête = DELETE
	case 'DELETE':

		$emailSelection = $_GET["email"];
		$nomSelection = $_GET["nom"];
		include("reservations/supprimer.php");
		break;

}