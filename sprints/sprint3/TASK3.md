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
|T#3.1D|views/project.ejs|Ajouter un bouton "Retirer du projet" qui détache l’utilisateur du projet et le renvoie à la page avec la liste des projets restants.|0.3|US#5|US#6|TODO|-|
|T#3.2D|views/project.ejs|Additionner un bouton "Inviter" et un élément du type input avec l’option "autocomplete" qui sera utilisé pour chercher les développeurs par email ou par nom d'utilisateur. Quand on clique sur le bouton, le développeur cherché sera invité au projet. |0.3|-|US#7|TODO|-|
|T#3.3D|views/project.ejs|Les invitations seront envoyées par courrier électronique avec un lien d'activation qui vous enverra sur une page avec deux boutons : "Accepter" et "Ne pas accepter". Le bouton "Accepter" ajoutera le développeur au projet. Le bouton "Ne pas accepter" refusera l'invitation au projet. |0.3|-|US#7|TODO|-|
|T#3.4D|views/project.ejs|Additionner une liste avec les développeurs attachés au projet. Cette liste doit afficher les noms et les emails des développeurs liés au projet. Chaque fois qu’un développeur est invité, le même doit s'additionner à la liste une fois il admet l'invitation.|0.3|-|US#7|TODO|-|

