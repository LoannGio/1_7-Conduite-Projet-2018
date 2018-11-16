# 1_7-Conduite-Projet-2018
Projet de Conduite de projet 2018 (groupe 1_7)

## Tâches du Sprint 2
* D : tâche de définition
* I : tâche d'implémentation

|ID|Composants|Description|Durée|Dépendances|US associées|État|
|---|---|---|---|---|---|---|
|T2.1D| views/createAccount.ejs, model/login.js | Créer la page permettant à l'utilisateur de créer son compte en entrant son addresse mail, son nom d'utilisateur et son mot passe. Si les données sont validées, l'utilisateur est connecté en tant que developpeur et renvoyé à la page d'accueil "/". Si les donnés ne sont pas validées un message d’erreur s'affiche.| 0.25 |-| US#2 |TODO|
|T2.2D|views/project.ejs, model/project.js|Créer la page permettant aux developeurs de visualiser le projet: nom du projet, description, durée d'un sprint, backlog (liste des US), liste des sprints. Lorsque un developpeur clic sur une US, il accede à la page de modification de cette US "/project/{id}/us/{id\_us}". __(La partie suivante sera découpé et déplacé dans des tâches d'implémentation)__ Un bouton "Modify" permet d'acceder à la page de modification du projet "/project/{id}/modify". Lorsque un developpeur clic sur un sprint, il accede à la page du sprint "/project/{id}/sprint/{sprint\_id}". Un bouton "Modify" permet d'acceder à la page de modification du projet "/project/{id}/modify". Un bouton "+" à proximite du backlog permet d'acceder à la page de creation d'un US "/project/{id}/createUS".|0.25 |-|US#8, US#9|TODO|
|T2.3D|views/projectModify.ejs, model/project.js|Créer la page permettant de modifier un projet: description, nom, durée d'un sprint. Un bouton "Cancel" permet d'annuler l'operation et de revenir sur la page du projet "/project/{id}". Un bouton "Apply" permet d'appliquer la modification.|0.25|-|US#4|TODO|
|T2.4D|views/createUS.ejs, model/project.js|Créer la page permettant aux developpeurs d'ajouter une US en completant les champs: description, priorité, difficulté, planification (aucun champ n'est obligatoire, l'état est fixée à TODO, l'ID est defini sur le suivant disponible). Un bouton "Cancel" permet d'annuler l'operation et de revenir sur la page du projet "/project/{id}". Un bouton "Apply" permet de créer l'US et de revenir sur la page du projet "/project/{id}".|0.25|-|US#8|TODO|
|T2.5D|||0.25|-|US#11|TODO|