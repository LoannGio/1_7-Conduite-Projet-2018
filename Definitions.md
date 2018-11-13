# 1_7-Conduite-Projet-2018
Projet de Conduite de projet 2018 (groupe 1_7)

## Définitions
Définitions en tout genre, chaque fois que l'on se met d'accord sur quelque chose, on le note dans ce fichier qui permet de centraliser. Utile pour avoir une trâce des tâches de définition.
(Eviter de remplir à l'avance. On le fait que quand on a besoin.)

En gras les attributs obligatoires.

### T#1.1D - Projet
* __id__ : entier unique
* __Nom__ : String
* Description : String
* __Durée d'un sprint__ : entier (nombre de jours)
* Backlog : Liste de User Story, vide à la création
* Utilisateurs : Liste des Utilisateur associé
* Sprints : Liste des sprints du projets, vide à la création

### User Story
* __id__ : entier unique
* description : String
* priorité : String parmi {"Haute", "Moyenne", "Faille"}, défaut "Failbe"
* difficulté : entier, defaut 0
* Etat : String parmi {"TODO", "DONE"}, défaut "DONE"
* Planification : entier

### Développeur (utilisateur inscrit)
* __username__ : nom utilisateur
* __email__ : un email unique propre à l'utilisateur
* __password__ : mot de passe, 6-12 caractères
* projects : liste des id des projets associé à l'utilisateur, vide à la création

### Sprint
(pas sur que celui la soit utile. A-t-on un objet "Sprint" a stocker dans la BD ?)

### Tâche

### Routes
* /projet/creer : créer un projet
* /projet/liste : lister les projets
* /projet/edit/{id} : modifier un projet
* /login/create : inscription
* /login : connexion
* / : accueil
