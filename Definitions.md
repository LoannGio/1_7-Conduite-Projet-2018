# 1_7-Conduite-Projet-2018
Projet de Conduite de projet 2018 (groupe 1_7)

## Définitions
Définitions en tout genre, chaque fois que l'on se met d'accord sur quelque chose, on le note dans ce fichier qui permet de centraliser. Utile pour avoir une trâce des tâches de définition.
(Eviter de remplir à l'avance. On le fait que quand on a besoin.)

En gras les attributs obligatoires.

### Définition of Done
Une tâche est considérée finie lorsque sa réalisation correspond à sa description. Les tests ne sont pas compris dans la DoD d'une tâche : il existe des tâches spécifiques pour eux.

### Organisation des tâches
La distribution des tâches se fait de manière autonome en suivant le protocole suivant :

Je suis un développeur qui ne réalise aucune tâche :
* Je vais dans la liste des tâches
* Je trouve une tâche dont les tâches dépendantes sont toutes réalisées et qui n'est ni en état DOING ni en état DONE
* Je passe l'état de la tâche trouvée en DOING et je marque mon nom dans la colonne Développeur


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

### Tâche

### T#2.4D - Routes
* /projet/creer : créer un projet
* /projet/liste : lister les projets
* /projet/edit/{id} : modifier un projet
* /login/creer : inscription
* /login : connexion
* / : accueil
