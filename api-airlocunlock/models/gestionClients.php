<?php
class clients
{
    // Connexion
    private $connexion;
    private $table = "gestion_clients";

    // object properties
    public $id;
    public $nom;
    public $prenom;
    public $email;
    public $mdp;
    public $numero;
    public $status;


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
     * Lecture des clients
     *
     * @return void
     */
    public function lire()
    {
        // On écrit la requête
        $sql = "SELECT id, nom, prenom, email, mdp, numero, status FROM " . $this->table;
        //$sql = "SELECT * FROM"  . $this->table. "ORDER BY id ASC";
        // On prépare la requête
        $query = $this->connexion->prepare($sql);

        // On exécute la requête
        $query->execute();

        // On retourne le résultat
        return $query;
    }

    /**
     * Créer une clients
     *
     * @return void
     */
    public function creer()
    {
        // Ecriture de la requête SQL en y insérant le nom de la table
        $sql = "INSERT INTO " . $this->table . " SET nom = :nom, prenom = :prenom, email = :email, mdp = :mdp, numero = :numero, status = :status";

        // Préparation de la requête
        $query = $this->connexion->prepare($sql);

        // Protection contre les injections
        $this->nom = htmlspecialchars(strip_tags($this->nom));
        $this->prenom = htmlspecialchars(strip_tags($this->prenom));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->mdp = htmlspecialchars(strip_tags($this->mdp));
        $this->numero = htmlspecialchars(strip_tags($this->numero));
        $this->status = htmlspecialchars(strip_tags($this->status));


        // Ajout des données protégées
        $query->bindParam(":nom", $this->nom);
        $query->bindParam(":prenom", $this->prenom);
        $query->bindParam(":email", $this->email);
        $query->bindParam(":mdp", $this->mdp);
        $query->bindParam(":numero", $this->numero);
        $query->bindParam(":status", $this->status);

        // Exécution de la requête
        if ($query->execute()) {
            return true;
        }
        return false;
    }

    /**
     * Lire un client
     *
     * @return void
     */
    public function lireUn()
    {
        // On écrit la requête
        $sql = "SELECT id, nom, prenom, email, mdp, numero, status FROM " . $this->table . " WHERE email = ?";

        // On prépare la requête
        $query = $this->connexion->prepare($sql);

        // On attache l'id
        $query->bindParam(1, $this->email);

        // On exécute la requête
        $query->execute();

        // on récupère la ligne
        $row = $query->fetch(PDO::FETCH_ASSOC);

        // On hydrate l'objet
        $this->id = $row['id'];
        $this->nom = $row['nom'];
        $this->prenom = $row['prenom'];
        $this->email = $row['email'];
        $this->mdp = $row['mdp'];
        $this->numero = $row['numero'];
        $this->status = $row['status'];

    }

    /**
     * Supprimer un client
     *
     * @return void
     */
    public function supprimer()
    {
        // On écrit la requête
        $sql = "DELETE FROM " . $this->table . " WHERE email = ?";

        // On prépare la requête
        $query = $this->connexion->prepare($sql);

        // On sécurise les données
        $this->id = htmlspecialchars(strip_tags($this->email));

        // On attache l'id
        $query->bindParam(1, $this->email);

        // On exécute la requête
        if ($query->execute()) {
            return true;
        }

        return false;
    }

    /**
     * Mettre à jour un client
     *
     * @return void
     */
    public function modifier()
    {
        // On écrit la requête
        $sql = "UPDATE " . $this->table . " SET  nom = :nom, prenom = :prenom, email = :email, mdp = :mdp, numero = :numero,  status = :status WHERE email = :email";

        // On prépare la requête
        $query = $this->connexion->prepare($sql);

        // On sécurise les données
        $this->nom = htmlspecialchars(strip_tags($this->nom));
        $this->prenom = htmlspecialchars(strip_tags($this->prenom));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->mdp = htmlspecialchars(strip_tags($this->mdp));
        $this->numero = htmlspecialchars(strip_tags($this->numero));
        $this->status = htmlspecialchars(strip_tags($this->status));



        // On attache les variables
        $query->bindParam(":nom", $this->nom);
        $query->bindParam(":prenom", $this->prenom);
        $query->bindParam(":email", $this->email);
        $query->bindParam(":mdp", $this->mdp);
        $query->bindParam(":numero", $this->numero);
        $query->bindParam(":status", $this->status);


        // On exécute
        if ($query->execute()) {
            return true;
        }

        return false;
    }


}