# 1_7-Conduite-Projet-2018
Projet de Conduite de projet 2018 (groupe 1_7)

## Définitions
En gras les attributs obligatoires.

### T#1.1D - Projet
* __id__ : entier unique
* __Nom__ : String
* Description : String
* __Durée d'un sprint__ : entier (nombre de jours)
* Backlog : Liste de User Story, vide à la création
* Utilisateurs : Liste des Utilisateur associé
* Sprints : Liste des sprints du projets, vide à la création

### T#2.2D - User Story
* __id__ : entier unique
* description : String
* priorité : String parmi {"Haute", "Moyenne", "Faible"}, défaut "Failbe"
* difficulté : entier, defaut 0
* Etat : String parmi {"TODO", "DONE"}, défaut "DONE"
* Planification : entier

### T#2.1D - Développeur (utilisateur inscrit)
* __id__ : entier unique
* __username__ : nom utilisateur
* __email__ : un email unique propre à l'utilisateur
* __password__ : mot de passe, 6-12 caractères
* projects : liste des id des projets associé à l'utilisateur, vide à la création

### T#2.3D - Sprint
* __id__ : entier unique
* __Nom__ : nom du sprint
* __dateDebut__ : date de début du sprint
* description : description du sprint
* releaseURL : lien vers la release du sprint
* UserStoriesLinked : User Stories traîtées dans le sprint

### T#2.4D - Routes
* / : accueil
* /login : connexion
* /login/create : inscription
* /projects : lister les projets de l'utilisateur
* /project/create : créer un projet
* /projet/byId/:id : affiche le projet correspondant à l'id
* /projet/byId/:id/modify : modifier un projet correspondant à l'id
* /projet/byId/:id/createUs : ajouter une User Story
* /projet/byId/:project_id/modifyUs/:us_id : modifier une User Story
* /projet/byId/:project_id/sprint/:sprint_id : affiche le sprint correspondant
* /projet/byId/:project_id/sprint/:sprint_id/modify : modifier le sprint
