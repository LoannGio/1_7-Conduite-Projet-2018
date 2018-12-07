# 1_7-Conduite-Projet-2018
Projet de Conduite de projet 2018 (groupe 1_7)

## Tâches du Sprint 3
ID d'une tâche : T#[Numéro Sprint].[NuméroTâche][D|I|F] avec :
* D : tâche de définition
* I : tâche d'implémentation
* F : tâche d'infrastructure
* E : tâche d'écriture d'un test (scénario)
* T : tâche d'exécution d'un test

Signification des symboles :
* \* &nbsp;: Tout, tous
* \- &nbsp;: Rien, aucun

Les User stories traîtées dans le Sprint 3 sont visibles dans le fichier SPRINT3.md

|ID|Composants|Description|Durée en jh|Dépendances|US associées|État|Réaliser par|
|---|---|---|---|---|---|---|---|
|T#3.1D|views/projectUsers.ejs|Créer le fichier "projectUsers.ejs" qui affichera tous les développeurs qui collaborent pour un project donnés.|0.3|-|US#7|TODO|-|
|T#3.2D|views/createUS.ejs|Créer le fichier "createUS.ejs" qui affiche la page permettant aux developpeurs d'ajouter une US en completant les champs: description, priorité, difficulté, planification.|0.1|-|US#8|TODO|-|
|T#3.3D|views/modifyUS.ejs|Créer le fichier "modifyUS.ejs" qui affiche la page permettant de modifier un User Story : description, priorité, difficulté, US dépendantes, état, planification.|0.3|-|US#10|TODO|-|
|T#3.4D|views/sprint.ejs|Créer le fichier "sprint.ejs" qui affiche la page permettant aux developeurs de visualiser le sprint: User story liées, liste des tâches.|0.3|-|US#15, US#12|TODO|-|
|T#3.5D|views/sprintPlanification.ejs|Créer le fichier "sprintPlanification.ejs" qui affiche la page permettant aux developpeurs de lier ou enlever une User Story à un Sprint.|0.1|-|US#12|TODO|-|
|T#3.6D|model/backlog.js|Créer le fichier "backlog.js" dont le rôle est de communiquer avec la base de données afin de gérer la liste des user story d'un projet (ajout/modification/suppression des user story)|0.1|-|US#8, US#9, US#10|TODO|-|
|T#3.7D|model/sprint.js|Créer le fichier "sprint.js" dont le rôle est de communiquer avec la base de données afin de gérer les sprints (ajout/modification/suppression de sprints)|0.1|-|US#11, US#12|TODO|-|
|T#3.8D|model/task.js|Créer le fichier "task.js" dont le rôle est de communiquer avec la base de données afin de gérer les tâches (ajout/suppression/modification de tâches)|0.1|-|US#15, US#16, US#17, US#18|TODO|-|
|T#3.9I|views/project.ejs|Sur la page d'un projet, ajouter un bouton "Quitter le projet" qui détache l’utilisateur courant du projet et le renvoie à la liste de ses projets restants.|0.3|-|US#6|TODO|-|
|T#3.10I|views/project.ejs model/backlog.js|Sur la page du projet, afficher la liste des User Story du backlog.|0.75|T#3.6D|US#9|TODO|-|
|T#3.11I|views/project.ejs model/backlog.js|Sur la page du projet, lorsque un developpeur clic sur une US, il accéde à la page de modification de cette US. Un bouton "Modify" permet d'accéder à la page de modification du projet. Lorsque un developpeur clic sur un sprint, il accede à la page du sprint. Un bouton "Modify" permet d'acceder à la page de modification du projet. Un bouton "+" à proximite du backlog permet d'acceder à la page de creation d'un US.|0.75|T#3.10I|US#8|TODO|-|
|T#3.12I|views/createUS.ejs, model/backlog.js|Implémenter la création d'une User Story. "createUS.ejs" doit proposer de remplir la description, de choisir entre 3 difficultés  "Haute", "Moyenne", "Faible", de placer une difficulté (par défaut 0),de planifier un sprint. A la création la tâche est à l'état TODO. Un bouton "Cancel" permet d'annuler l'operation et de revenir sur la page du projet. Un bouton "Apply" permet de créer l'US en envoyant les données en JSON: {description:"description", dificulty:"dificulty", priority:"priority", sprint: nb_sprint} via la méthode POST à la route responsable de la création des Us (cf Definition.md) et de revenir sur la page du projet.|0.25|T#3.2D, T#3.6D|US#8|TODO|-|
|T#3.13I|view/usModify.ejs, model/projet.js|Implementation de la suppression d'une User Story. Un bouton "Delete" dans "usModify.ejs" permet de supprimer l'User Story concerné via la méthode DELETE à la route responsable de la suppression des User Story.|0.25|T#3.3D, T#3.6D|US#8|TODO|-|
|T#3.14I|views/sprintPlanification.ejs,  model/backlog.js, model/sprint.js|Implémenter la possibilité de lier ou enlever des US à un sprint. "sprintPlanification.ejs" doit afficher la totalité du backlog. Les US coloriées en "vert" sont dans le print et les US coloriées en "rouge" ne le sont pas. Cliqué sur une US change sont état "vert"->"rouger", "rouge"->"vert". Un bouton "Cancel" permet d'annuler l'operation et de revenir sur la page du sprint. Un bouton "Apply" permet valider les modifications en envoyant les données en JSON: {us:[1,2,3,...]} via la méthode POST à la route responsable de la modification du backlog partiel (cf Definition) et de revenir sur la page du sprint.|0.5|T#3.5D, T#3.6D, T#3.7D|US#12|TODO|-|
|T#3.15I|views/project.ejs model/sprint.js|Implementation de la création d'un sprint. Dans "project.ejs" ajout d'un bouton "+" à proximite de la liste de sprints permet de créer le prochain sprint (le backlog partiel du sprint sera près remplit en fonction de la planification du backlog du projet, toute les autres informations resteront null).|0.25| T#3.7D|US#11|TODO|-|
|T#3.16I|view/sprint.ejs, model/task.js|Implementation de la suppression d'un Sprint. Un bouton "Delete" dans "sprint.ejs" permet de supprimer du sprint concerné via la méthode DELETE à la route responsable de la suppression des sprints. L'utilisateur devra recevoir un message lui demandant de valider sa demande avant d'envoyer la requête.|0.25|T#3.4D, T#3.7D|US#11|TODO|-|
|T#3.17I|views/sprint.ejs, model/task.js|Ajouter une liste qui montre les différents tâches du projet. Lorsque vous cliquez sur un tâche, vous serez redirigé vers les détails de la tâche (description, durée, tâches dependantes, user stories asossociées et l'état).|0.3|T#3.4D, T#3.8D|US#15|TODO|-|
|T#3.18I|views/sprint.ejs, model/sprint.js, views/createTask.ejs|Un bouton "+" à proximite de la liste de taches permet d'acceder à la page de creation d'un tâche "createTask.ejs". Dans la page de creation des tâches nous aurons 5 champs à remplire: description, durée, tâches dependantes, user stories asossociées et l'état (par defaut il sera fixé à TODO). Un bouton "Apply" envoie les données sous la forme d'un JSON via la méthode POST à la route responsable de la création de la tâche. Si les données sont validées, la tâche est crée et nous serons  renvoyés à la page du sprint. Si les donnés ne sont pas validées un message d’erreur s'affiche.|0.3|T#3.4D, T#3.8D|US#14|TODO|-|
|T#3.19I|views/sprint.ejs, models/task.js|Un developeur pourra cliquer sur l'état d'une tâche. Si la tâche est à l'état TODO elle passera à ON GOING. Si la tâche est à l'état ON GOING elle passera à TODO.|0.3|T#3.4D, T#3.8D|US#16, US#17|TODO|-|
|T#3.20I|model/task.js, views/taskModify.ejs|Lorsque vous cliquez sur une tâche d’un sprint de "views/sprint.ejs" vous serez redirigé vers le fichier des détails de la tâche "taskModify.ejs". Sur le champ d’état on va sélectionner une seule option d’un liste pliable (TODO, ONGOING, DONE). Un bouton "Cancel" permet d'annuler l'operation et de revenir sur la page du sprint. Un bouton "Apply" permet valider les modifications, sauvegarder l’information (date des changements d'états, développeurs associés à ces changements) et revenir sur la page du sprint. Un bouton "Delete" permet de supprimer la tâche.|0.3|T#3.8D|US#18|TODO|-|
|T#3.21I|views/projectUsers.ej|Ajouter sur "projectUsers.ejs", un champ texte dans lequel on pourra entrer le nom d'un autre utilisateur afin de l'inviter sur le projet. Un boutton "Ajouter Dévelopeur" permettra d'envoyer le contenu du champ. Les invitations seront envoyées par courrier électronique avec un lien d'activation qui vous enverra sur votre liste de projets dans lequel ce trouvera désormais le projet en question.|0.3|T#3.1D|US#7|TODO|-|
|T#2.22T|-|Implementation de test(s) unitaire(s) pour le module "model/backlog.js"|0.25|T#3.6D|US#8, US#9, US#10|TODO|-|
|T#2.23T|-|Implementation de test(s) unitaire(s) pour le module "model/sprint.js"|0.25|T#3.7D	|US#11, US#12|TODO|-|
|T#2.24T|-|Implementation de test(s) unitaire(s) pour le module "model/task.js"|0.25|T#3.8D| US#15, US#16, US#17, US#18 |TODO|-|
|T#3.25E|-|Ecriture du test de validation de US#6.|0.1|-|US#6|TODO|-|
|T#3.26E|-|Ecriture du test de validation de US#7.|0.1|-|US#7|TODO|-|
|T#3.27E|-|Ecriture du test de validation de US#8.|0.1|-|US#8|TODO|-|
|T#3.28E|-|Ecriture du test de validation de US#9.|0.1|-|US#9|TODO|-|
|T#3.29E|-|Ecriture du test de validation de US#10.|0.1|-|US#10|TODO|-|
|T#3.30E|-|Ecriture du test de validation de US#11.|0.1|-|US#11|TODO|-|
|T#3.31E|-|Ecriture du test de validation de US#12.|0.1|-|US#12|TODO|-|
|T#3.32E|-|Ecriture du test de validation de US#13.|0.1|-|US#13|TODO|-|
|T#3.33E|-|Ecriture du test de validation de US#14.|0.1|-|US#14|TODO|-|
|T#3.34E|-|Ecriture du test de validation de US#15.|0.1|-|US#15|TODO|-|
|T#3.35E|-|Ecriture du test de validation de US#16.|0.1|-|US#16|TODO|-|
|T#3.36E|-|Ecriture du test de validation de US#17.|0.1|-|US#17|TODO|-|
|T#3.37E|-|Ecriture du test de validation de US#18|0.1|-|US#18|TODO|-|
|T#3.38T|-|Réaliser le test de validation de US#6|0.1|T#3.9I, T#3.25E|US#6|TODO|-|
|T#3.39T|-|Réaliser le test de validation de US#7|0.25|T#3.21I, T#3.26E|US#7|TODO|-|
|T#3.40T|-|Réaliser le test de validation de US#8|0.25|T#3.11I, T#3.12I, T#3.13I, T#3.27E|US#8|TODO|-|
|T#3.41T|-|Réaliser le test de validation de US#9|0.25|T#3.10I, T#3.28E|US#9|TODO|-|
|T#3.42T|-|Réaliser le test de validation de US#10.|0.25|T#3.29E|US#10|TODO|-|
|T#3.43T|-|Réaliser le test de validation de US#11.|0.25|T#3.15I, T#3.16I, T#3.30E|US#11|TODO|-|
|T#3.44T|-|Réaliser le test de validation de US#12.|0.25|T#3.14I, T#3.31E|US#12|TODO|-|
|T#3.45T|-|Réaliser le test de validation de US#13.|0.25|T#3.32E|US#13|TODO|-|
|T#3.46T|-|Réaliser le test de validation de US#14.|0.25|T#3.18I, T#3.33E|US#14|TODO|-|
|T#3.47T|-|Réaliser le test de validation de US#15.|0.25| T#3.17I, T#3.34E|US#15|TODO|-|
|T#3.48T|-|Réaliser le test de validation de US#16.|0.25|T#3.19I, T#3.35E|US#16|TODO|-|
|T#3.49T|-|Réaliser le test de validation de US#17.|0.25|T#3.19I, T#3.36E|US#17|TODO|-|
|T#3.50T|-|Réaliser le test de validation de US#18.|0.25|T#3.20I, T#3.37E|US#18|TODO|-|
