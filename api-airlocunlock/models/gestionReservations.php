<?php
class reservations
{
    // Connexion
    private $connexion;
    private $table = "gestion_reservations";

    // object properties
    public $id;
    public $nom;
    public $adresse;
    public $date;
    public $photo1;
    public $photo2;
    public $photo3;
    public $photo4;
    public $photo5;
    public $nbChambre;
    public $nbVoyageur;
    public $nbSBain;
    public $note;
    public $description;
    public $prix;
    public $ClientTapkey;
    public $emailProrietaire;
    public $emailLocataire;
    public $lng;
    public $lat;

    /**
     * Constructeur avec $db pour la connexion à la base de données
     *
     * @param $db
     */
    public function __construct($db)
    {
        $this->connexion = $db;
    }

    /**
     * Lecture des reservations
     *
     * @return void
     */
    public function lire()
    {
        // On écrit la requête
        $sql = "SELECT id, nom, adresse, date, photo1, photo2, photo3, photo4, photo5, nbChambre, nbVoyageur, nbSBain, note, description, prix, ClientTapkey, emailProrietaire, emailLocataire,lng, lat FROM " . $this->table;

        // On prépare la requête
        $query = $this->connexion->prepare($sql);

        // On exécute la requête
        $query->execute();

        // On retourne le résultat
        return $query;
    }

    /**
     * Créer une reservations
     *
     * @return void
     */
    public function creer()
    {

        // Ecriture de la requête SQL en y insérant le nom de la table
        $sql = "INSERT INTO " . $this->table . " SET nom = :nom, adresse = :adresse, date = :date, photo1 = :photo1, photo2 = :photo2, photo3 = :photo3, photo4 = :photo4, photo5 = :photo5, nbChambre = :nbChambre, nbVoyageur = :nbVoyageur, nbSBain = :nbSBain, note = :note, description = :description, prix = :prix, ClientTapkey = :ClientTapkey, emailProrietaire = :emailProrietaire, emailLocataire = :emailLocataire, lng = :lng, lat = :lat";

        // Préparation de la requête
        $query = $this->connexion->prepare($sql);

        // Protection contre les injections
        $this->nom = htmlspecialchars(strip_tags($this->nom));
        $this->adresse = htmlspecialchars(strip_tags($this->adresse));
        $this->date = htmlspecialchars(strip_tags($this->date));
        $this->photo1 = htmlspecialchars(strip_tags($this->photo1));
        $this->photo2 = htmlspecialchars(strip_tags($this->photo2));
        $this->photo3 = htmlspecialchars(strip_tags($this->photo3));
        $this->photo4 = htmlspecialchars(strip_tags($this->photo4));
        $this->photo5 = htmlspecialchars(strip_tags($this->photo5));
        $this->nbChambre = htmlspecialchars(strip_tags($this->nbChambre));
        $this->nbVoyageur = htmlspecialchars(strip_tags($this->nbVoyageur));
        $this->nbSBain = htmlspecialchars(strip_tags($this->nbSBain));
        $this->note = htmlspecialchars(strip_tags($this->note));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->prix = htmlspecialchars(strip_tags($this->prix));
        $this->ClientTapkey = htmlspecialchars(strip_tags($this->ClientTapkey));
        $this->emailProrietaire = htmlspecialchars(strip_tags($this->emailProrietaire));
        $this->emailLocataire = htmlspecialchars(strip_tags($this->emailLocataire));
        $this->lng = htmlspecialchars(strip_tags($this->lng));
        $this->lat = htmlspecialchars(strip_tags($this->lat));

        // Ajout des données protégées
        $query->bindParam(":nom", $this->nom);
        $query->bindParam(":adresse", $this->adresse);
        $query->bindParam(":date", $this->date);
        $query->bindParam(":photo1", $this->photo1);
        $query->bindParam(":photo2", $this->photo2);
        $query->bindParam(":photo3", $this->photo3);
        $query->bindParam(":photo4", $this->photo4);
        $query->bindParam(":photo5", $this->photo5);
        $query->bindParam(":nbChambre", $this->nbChambre);
        $query->bindParam(":nbVoyageur", $this->nbVoyageur);
        $query->bindParam(":nbSBain", $this->nbSBain);
        $query->bindParam(":note", $this->note);
        $query->bindParam(":description", $this->description);
        $query->bindParam(":prix", $this->prix);
        $query->bindParam(":ClientTapkey", $this->ClientTapkey);
        $query->bindParam(":emailProrietaire", $this->emailProrietaire);
        $query->bindParam(":emailLocataire", $this->emailLocataire);
        $query->bindParam(":lng", $this->lng);
        $query->bindParam(":lat", $this->lat);
        
        // Exécution de la requête
        if ($query->execute()) {
            return true;
        }
        return false;
    }

    /**
     * Lire une reservations
     *
     * @return void
     */
    public function lireUn()
    {
        // On écrit la requête
        $sql = "SELECT id, nom, adresse, date, photo1, photo2, photo3, photo4, photo5, nbChambre, nbVoyageur, nbSBain, note, description, prix, ClientTapkey, emailProrietaire, emailLocataire, lng, lat FROM " . $this->table . " WHERE emailProrietaire = ?";

        // On prépare la requête
        $query = $this->connexion->prepare($sql);

        // On sécurise les données
        $this->emailProrietaire = htmlspecialchars(strip_tags($this->emailProrietaire));

        // On attache l'id
        $query->bindParam(1, $this->emailProrietaire);

        // On exécute la requête
        $query->execute();
        
        // On retourne le résultat
        return $query;
    }

    /**
     * Supprimer une reservations
     *
     * @return void
     */
    public function supprimer()
    {
        // On écrit la requête
        $sql = "DELETE FROM " . $this->table . " WHERE emailProrietaire = ? AND nom = ?";

        // On prépare la requête
        $query = $this->connexion->prepare($sql);

        // On sécurise les données
        $this->emailProrietaire = htmlspecialchars(strip_tags($this->emailProrietaire));
        $this->nom = htmlspecialchars(strip_tags($this->nom));

        // On attache l'id
        $query->bindParam(1, $this->emailProrietaire);
        $query->bindParam(2, $this->nom);

        // On exécute la requête
        if ($query->execute()) {
            return true;
        }

        return false;
    }

    /**
     * Mettre à jour une reservations
     *
     * @return void
     */
    public function modifier()
    {
        // On écrit la requête
        $sql = "UPDATE " . $this->table . " SET  nom = :nom, adresse = :adresse, date = :date, photo1 = :photo1, photo2 = :photo2, photo3 = :photo3, photo4 = :photo4, photo5 = :photo5, nbChambre = :nbChambre, nbVoyageur = :nbVoyageur, nbSBain = :nbSBain, note = :note, description = :description, prix = :prix, ClientTapkey = :ClientTapkey, emailProrietaire = :emailProrietaire, emailLocataire = :emailLocataire, lng = :lng, lat = :lat WHERE emailProrietaire = :emailProrietaire";

        // On prépare la requête
        $query = $this->connexion->prepare($sql);

        // Protection contre les injections
        $this->nom = htmlspecialchars(strip_tags($this->nom));
        $this->adresse = htmlspecialchars(strip_tags($this->adresse));
        $this->date = htmlspecialchars(strip_tags($this->date));
        $this->photo1 = htmlspecialchars(strip_tags($this->photo1));
        $this->photo2 = htmlspecialchars(strip_tags($this->photo2));
        $this->photo3 = htmlspecialchars(strip_tags($this->photo3));
        $this->photo4 = htmlspecialchars(strip_tags($this->photo4));
        $this->photo5 = htmlspecialchars(strip_tags($this->photo5));
        $this->nbChambre = htmlspecialchars(strip_tags($this->nbChambre));
        $this->nbVoyageur = htmlspecialchars(strip_tags($this->nbVoyageur));
        $this->nbSBain = htmlspecialchars(strip_tags($this->nbSBain));
        $this->note = htmlspecialchars(strip_tags($this->note));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->prix = htmlspecialchars(strip_tags($this->prix));
        $this->ClientTapkey = htmlspecialchars(strip_tags($this->ClientTapkey));
        $this->emailProrietaire = htmlspecialchars(strip_tags($this->emailProrietaire));
        $this->emailLocataire = htmlspecialchars(strip_tags($this->emailLocataire));
        $this->lng = htmlspecialchars(strip_tags($this->lng));
        $this->lat = htmlspecialchars(strip_tags($this->lat));

        // Ajout des données protégées
        $query->bindParam(":nom", $this->nom);
        $query->bindParam(":adresse", $this->adresse);
        $query->bindParam(":date", $this->date);
        $query->bindParam(":photo1", $this->photo1);
        $query->bindParam(":photo2", $this->photo2);
        $query->bindParam(":photo3", $this->photo3);
        $query->bindParam(":photo4", $this->photo4);
        $query->bindParam(":photo5", $this->photo5);
        $query->bindParam(":nbChambre", $this->nbChambre);
        $query->bindParam(":nbVoyageur", $this->nbVoyageur);
        $query->bindParam(":nbSBain", $this->nbSBain);
        $query->bindParam(":note", $this->note);
        $query->bindParam(":description", $this->description);
        $query->bindParam(":prix", $this->prix);
        $query->bindParam(":ClientTapkey", $this->ClientTapkey);
        $query->bindParam(":emailProrietaire", $this->emailProrietaire);
        $query->bindParam(":emailLocataire", $this->emailLocataire);
        $query->bindParam(":lng", $this->lng);
        $query->bindParam(":lat", $this->lat);

        // On exécute
        if ($query->execute()) {
            return true;
        }

        return false;
    }

}