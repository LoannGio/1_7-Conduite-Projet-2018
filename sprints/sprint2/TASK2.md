# 1_7-Conduite-Projet-2018
Projet de Conduite de projet 2018 (groupe 1_7)

## Tâches du Sprint 2
ID d'une tâche : T#[Numéro Sprint].[NuméroTâche][D|I|F] avec :
* D : tâche de définition
* I : tâche d'implémentation
* F : tâche d'infrastructure
* E : tâche d'écriture d'un test (scénario)
* T : tâche d'exécution d'un test

Signification des symboles :
* \* &nbsp;: Tout, tous
* \- &nbsp;: Rien, aucun

Les User stories traîtées dans le Sprint 2 sont visibles dans le fichier SPRINT2.md
<br>Les schémas des intéractions entre composants se trouve dans le dossier "schemas".

|ID|Composants|Description|Durée en jh|Dépendances|US associées|État|Réaliser par|
|---|---|---|---|---|---|---|---|
|T#2.1D|-|Dans le fichier "Definitions.md" définir ce qu'est un "Développeur" (utilisateur connecté à notre application et objet de notre BD, il faut définir ses attributs (obligatoires et facultatifs)).|0.1|-|-|DONE|-|
|T#2.2D|-|Dans le fichier "Definitions.md" définir ce qu'est une "User Story" (objet de notre BD, il faut définir ses attributs(obligatoires et facultatifs)).|0.1|-|-|DONE|-|
|T#2.3D|-|Dans le fichier "Definitions.md" définir ce qu'est une "Sprint" (objet de notre BD, il faut définir ses attributs(obligatoires et facultatifs)).|0.1|-|-|TODO|-|
|T#2.4D|-|Dans le fichier "Definitions.md" définir les routes et les fichiers qui vont permettre la gestion des utilisateurs, user stories, sprints, projets.|0.25|-|-|DONE|-|
|T#2.5D|views/createAccount.ejs|Créer le fichier "createAccount.ejs" qui affiche la page permettant à l'utilisateur de créer son compte en entrant son addresse mail, son nom d'utilisateur et son mot passe.|0.1|-|US#1|TODO|-|
|T#2.6D|views/project.ejs|Créer le fichier "project.ejs" qui affiche la page permettant aux developeurs de visualiser le projet: nom du projet, description, durée d'un sprint, backlog (liste des US), liste des sprints.|0.1|-|US#9|TODO|-|
|T#2.7D|views/projectModify.ejs|Créer le fichier "projectModify.ejs" qui affiche la page permettant de modifier un projet: description, nom, durée d'un sprint.|0.1|-|US#4|TODO|-|
|T#2.8D|views/createUS.ejs|Créer le fichier "createUS.ejs" qui affiche la page permettant aux developpeurs d'ajouter une US en completant les champs: description, priorité, difficulté, planification.|0.1|-|US#8|TODO|-|
|T#2.9D|views/sprintPlanification.ejs|Créer le fichier "sprintPlanification.ejs" qui affiche la page permettant aux developpeurs de lier ou enlever une User Story à un Sprint.|0.1|-|US#12|TODO|-|
|T#2.10D|model/login.js|Créer le fichier "login.js" dont le rôle est de communiquer avec la base de données afin de gérer les comptes. "addUser(user)" pour ajouter un utilisateur. "existUser(user)" pour vérifier si un utilisateurs exist déjà dans la BD.|0.1|-|US#4, US#8, US#9|TODO|-|
|T#2.11D|model/project.js|Créer le fichier "project.js" dont le rôle est de communiquer avec la base de données afin de gérer un projet (modification des attributs, ajout/suppression/modification du backlog, ajout de sprint). "setAttribute(projetAttribute)"|0.1|-|US#12|TODO|-|
|T#2.12D|model/sprint.js|Créer le fichier "sprint.js" dont le rôle est de communiquer avec la base de données afin de gérer un sprint (modification/suppression du sprint,ajout/suppression/modification de tâche)|0.1|-|US#12|TODO|-|
|T#2.13I|views/createAccount.ejs, model/login.js|Implémenter la création d'un compte utilisateur. "createAccount.ejs" doit avoir 3 champs à remplire: email, username et password. Un bouton "Apply" envoie les données sous la forme d'un JSON {email: "email", username: "username", password: "password"} via la méthode POST à la route responsable de la création de compte (cf Définition.md). Si les données sont validées, l'utilisateur est connecté en tant que developpeur et renvoyé à la page d'accueil. Si les donnés ne sont pas validées un message d’erreur s'affiche. Un lien "Sign in" permet à l'utilisateur de revenir sur la page de login.|0.25|T#2.1D, T#2.4D, T#2.5D, T#2.10D|US#1|TODO|-|
|T#2.14I|views/project.ejs model/project.js|Implémenter la visualisation d'un projet. Lorsque un developpeur clic sur une US, il accéde à la page de modification de cette US. Un bouton "Modify" permet d'accéder à la page de modification du projet. Lorsque un developpeur clic sur un sprint, il accede à la page du sprint. Un bouton "Modify" permet d'acceder à la page de modification du projet. Un bouton "+" à proximite du backlog permet d'acceder à la page de creation d'un US.|0.75|T#2.2D, T#2.4D, T#2.6D, T#2.11D|US#9|TODO|-|
|T#2.15I|views/projectModify.ejs, model/project.js|Implémenter la modification d'un projet. Cette modification n'affecte que la description, nom, durée d'un sprint. "projectModify.ejs" devra proposer les 3 champs près remplit avec les informations actuelles. Un bouton "Cancel" permet d'annuler l'operation et de revenir sur la page du projet. Un bouton "Apply" permet d'appliquer la modification en envoyant les information en JSON: {name:"name", description:"description", sprintDuration:"sprintDuration"} via la méthode POST à la route responsable de la modification du projet (cf Définition.md) et de revenir sur la page du projet.|0.25|T#2.2D, T#2.4D, T#2.7D, T#2.11D|US#4|TODO|-|
|T#2.16I|views/createUS.ejs, model/projet.js|Implémenter la création d'une User Story. "createUS.ejs" doit proposer de remplir la description, de choisir entre 3 difficultés  "Haute", "Moyenne", "Faible", de placer une difficulté (par défaut 0),de planifier un sprint. A la création la tâche est à l'état TODO. Un bouton "Cancel" permet d'annuler l'operation et de revenir sur la page du projet. Un bouton "Apply" permet de créer l'US en envoyant les données en JSON: {description:"description", dificulty:"dificulty", priority:"priority", sprint: nb_sprint} via la méthode POST à la route responsable de la création des Us (cf Definition.md) et de revenir sur la page du projet.|0.25|T#2.2D, T#2.4D, T#2.7D, T#2.11D|US#8|TODO|-|
|T#2.17I|views/sprintPlanification.ejs, model/sprint.js|Implémenter la possibilité de lier ou enlever des US à un sprint. "sprintPlanification.ejs" doit afficher la totalité du backlog. Les US coloriées en "vert" sont dans le print et les US coloriées en "rouge" ne le sont pas. Cliqué sur une US change sont état "vert"->"rouger", "rouge"->"vert". Un bouton "Cancel" permet d'annuler l'operation et de revenir sur la page du sprint. Un bouton "Apply" permet valider les modifications en envoyant les données en JSON: {us:[1,2,3,...]} via la méthode POST à la route responsable de la modification du backlog partiel (cf Definition) et de revenir sur la page du sprint.|0.5|T#2.9D, T#2.4D, T#2.12D |US#12|TODO|-|
|T#2.18I|views/project.ejs model/project.js|Implementation de la création d'un sprint. Dans "project.ejs" ajout d'un bouton "+" à proximite de la liste de sprints permet de créer le prochain sprint (le backlog partiel du sprint sera près remplit en fonction de la planification du backlog du projet, toute les autres informations resteront null).|0.25| T#2.3D, T#2.14I|US#11|TODO|-|
|T#2.19I|view/usModify.ejs, model/projet.js|Implementation de la suppression d'une User Story. Un bouton "Delete" dans "usModify.ejs" permet de supprimer l'User Story concerné via la méthode DELETE à la route responsable de la suppression des User Story.|0.25|T#2.4D, T#2.10D|US#8|TODO|-|
|T#2.20I|view/usModify.ejs, model/projet.js|Implementation de la suppression d'un Sprint. Un bouton "Delete" dans "sprint.ejs" permet de supprimer du sprint concerné via la méthode DELETE à la route responsable de la suppression des sprints. L'utilisateur devra recevoir un message lui demandant de valider sa demande avant d'envoyer la requête.|0.25|T#2.4D, T#2.10D|US#11|TODO|-|
|T#2.21T|-|Implementation de test(s) unitaire(s) pour le module "model/login.js"|0.25|T#2.1D, T#2.10D|US#1|TODO|-|
|T#2.22T|-|Implementation de test(s) unitaire(s) pour le module "model/project.js"|0.25|T#2.2D, T#2.11D|US#4, US#8, US#9|TODO|-|
|T#2.23T|-|Implementation de test(s) unitaire(s) pour le module "model/sprint.js"|0.25|T#2.3D, T#2.12D|US#11, US#12|TODO|-|
|T#2.24E|-|Ecriture du test de validation de US#1.|0.1|-|US#1|TODO|-|
|T#2.25E|-|Ecriture du test de validation de US#4.|0.1|-|US#4|TODO|-|
|T#2.26E|-|Ecriture du test de validation de US#8.|0.1|-|US#8|TODO|-|
|T#2.27E|-|Ecriture du test de validation de US#9.|0.1|-|US#9|TODO|-|
|T#2.28E|-|Ecriture du test de validation de US#11.|0.1|-|US#11|TODO|-|
|T#2.29E|-|Ecriture du test de validation de US#12.|0.1|-|US#12|TODO|-|
|T#2.30T|-|Réaliser le test de validation de US#1.|0.25|T#2.13I, T#2.21T, T#2.24E|US#2|TODO|-|
|T#2.31T|-|Réaliser le test de validation de US#4.|0.25|T#2.15I, T#2.22T, T#2.25E|US#4|TODO|-|
|T#2.32T|-|Réaliser le test de validation de US#8.|0.25|T#2.16I, T#2.19I, T#2.22T, T#2.26E|US#8|TODO|-|
|T#2.33T|-|Réaliser le test de validation de US#9.|0.25|T#2.14I, T#2.22T, T#2.27E|US#9|TODO|-|
|T#2.34T|-|Réaliser le test de validation de US#11.|0.25|T#2.18I, T2.20I, T#2.23T, T#2.28E|US#11|TODO|-|
|T#2.35T|-|Réaliser le test de validation de US#12.|0.25|T#2.17I, T#2.23T, T#2.29E|US#12|TODO|-|
