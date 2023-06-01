<?php
class Database
{
    // Connexion à la base de données
    private $host = "51.210.151.13";
    private $db_name = "airlocunlock";
    private $username = "eleve";
    private $password = "Eleve1234!";
    public $connexion;

    // getter pour la connexion
    public function getConnection()
    {

        $this->connexion = null;

        try {
            $this->connexion = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->connexion->exec("set names utf8");
            //echo "connexion ok";
        } catch (PDOException $exception) {
            echo "Erreur de connexion : " . $exception->getMessage();
        }

        return $this->connexion;
    }
}