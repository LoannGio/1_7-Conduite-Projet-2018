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
|T#3.1D|views/project.ejs|Ajouter un bouton "Retirer du projet" qui détache l’utilisateur courant du projet et le renvoie à la page avec la liste des projets restants.|0.3|US#5|US#6|TODO|-|
|T#3.2D|views/projectUsers.ejs|Créer le fichier "projectUsers.ejs" qui affiche la page permettant d'inviter les développeurs. Additionner un bouton "Inviter" et un élément du type input avec l’option "autocomplete" qui sera utilisé pour chercher les développeurs par email ou par nom d'utilisateur. Quand on clique sur le bouton, le développeur cherché sera invité au projet. |0.3|-|US#7|TODO|-|
|T#3.3D|views/acceptProject.ejs|Les invitations seront envoyées par courrier électronique avec un lien d'activation qui vous enverra sur une page "acceptProject.ejs" avec deux boutons : "Accepter" et "Ne pas accepter". Le bouton "Accepter" ajoutera le développeur au projet. Le bouton "Ne pas accepter" refusera l'invitation au projet. |0.3|-|US#7|TODO|-|
|T#3.4D|views/projectUsers.ejs|Additionner une liste avec les développeurs attachés au projet. Cette liste doit afficher les noms et les emails des développeurs liés au projet. Chaque fois qu’un développeur est invité, le même doit s'additionner à la liste une fois il admet l'invitation.|0.3|-|US#7|TODO|-|
|T#3.5D|views/modifyUS.ejs|Créer le fichier "modifyUS.ejs" qui affiche la page permettant de modifier un User Story : description, priorité, difficulté, US dépendantes, état, planification.|0.3|-|US#10|TODO|-|
|T#3.6D|views/project.ejs|Ajouter une liste qui montre les différents sprints du projet. Lorsque vous cliquez sur un sprint, vous serez redirigé vers les détails du sprint.|0.3|US#5|US#13|TODO|-|
|T#3.7D|views/sprint.ejs, model/sprint.js, views/createTask.ejs|Un bouton "+" à proximite de la liste de taches permet d'acceder à la page de creation d'un tâche "createTask.ejs". Dans la page de creation des tâches nous aurons 5 champs à remplire: description, durée, tâches dependantes, user stories asossociées et l'état (par defaut il sera fixé à TODO). Un bouton "Apply" envoie les données sous la forme d'un JSON via la méthode POST à la route responsable de la création de la tâche. Si les données sont validées, la tâche est crée et nous serons  renvoyés à la page du sprint. Si les donnés ne sont pas validées un message d’erreur s'affiche.|0.3||US#14|TODO|-|
|T#3.8D|views/sprint.ejs, model/sprint.js|Ajouter une liste qui montre les différents tâches du projet. Lorsque vous cliquez sur un tâche, vous serez redirigé vers les détails de la tâche (description, durée, tâches dependantes, user stories asossociées et l'état).|0.3||US#15|TODO|-|
|T#3.9D|views/taskModify.ejs|Créer le fichier "taskModify.ejs" qui affiche la page permettant au développeur de s'appropier d'une tâche. Un bouton "Approprier" permets de lier une tâche et un développeur. Si on fait clic sur ce bouton le même changera du nom à "Désapproprier" (cela indique que on a retiré le lien entre la tâche et le développeur). Créer un champ d’état avec une liste pliable et les options TODO, ONGOING, DONE.|0.3||16|TODO|-|
|T#3.10D|model/task.js, views/taskModify.ejs|Lorsque vous cliquez sur une tâche d’un sprint de "views/sprint.ejs" vous serez redirigé vers le fichier des détails de la tâche "taskModify.ejs". Sur le champ d’état on va sélectionner une seule option d’un liste pliable (TODO, ONGOING, DONE). Un bouton "Cancel" permet d'annuler l'operation et de revenir sur la page du sprint. Un bouton "Apply" permet valider les modifications, sauvegarder l’information (date des changements d'états, développeurs associés à ces changements) et revenir sur la page du sprint.|0.3||US#17|TODO|-|
|T#3.11D|views/sprint.ejs, model/sprint.js|Un bouton supprimer à coté de chaque tache servira pour supprimer n’importe quelle tâche associée au sprint. Lorsque le développeur fait clic sur ce bouton une petite sera présenté avec la question "Souhaite-vous supprimer la tâche ?", un bouton "Cancel" permet d'annuler l'opération de suppression et un bouton "Accept" supprimera la tâche.|0.3||US#18|TODO|-|
T#3.12D|views/dependencesGraph.ejs||5||US#18|TODO|-|