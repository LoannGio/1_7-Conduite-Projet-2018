# 1_7-Conduite-Projet-2018
Projet de Conduite de projet 2018 (groupe 1_7)

## Tâches du Sprint 2
ID d'une tâche : T#[Numéro Sprint].[NuméroTâche][D|I|F] avec :
* D : tâche de définition
* I : tâche d'implémentation
* F : tâche d'infrastructure

Signification des symboles :
* \* &nbsp;: Tout, tous
* \- &nbsp;: Rien, aucun

Les User stories traîtées dans le Sprint 2 sont visibles dans le fichier SPRINT2.md

|ID|Description|Durée|Dépendances|US associées|État|
|--|-----------|-----|-----------|------------|----|
|T#2.1D|Définir ce qu'est un "Développeur"|0.25|-|-|DONE|
|T#2.2D|Définir ce qu'est une "User Story".|0.25|-|-|DONE|
|T#2.3D|Définir ce qu'est une "Sprint".|0.25|-|-|TODO|
|T#2.4D|Définir les routes et les fichiers qui vont permettre la gestion des utilisateurs, user stories, sprints, projets.|0.25|-|-|DONE|
|T#2.5I|Implémenter le fichier "login.ejs", page HTML côté client permettant de se connecter. (formulaire demandant de renseigner obligatoirement les informations permettant d'identifier un développeur (cf. T#2.1D). Sur la validation, envoie les données saisies au fichier de traitement de la route correspondante en méthode POST)|0.5|T#2.1D, T#2.4D|US#2|TODO|
|T#2.6I|Dans le fichier serveur gérant les routes correspondant à la gestion d'un utilisateur (cf. T#2.4D), implémenter les fonctions permettant d'afficher le fichier "login.ejs" à un utilisateur et de gérer le POST de ce même fichier (authentification).|1|T#2.1D, T#2.4D|US#2|TODO|
|T#2.7I|Implémenter le fichier "modifierProjet.ejs" permettant d'afficher la page de modification des informations d'un projet. (formulaire de modification avec champs préremplis avec les valeurs actuelle du projet modifié. Les champs modifiables sont : Nom, description, durée d'un sprint. Sur la validation, envoie les données saisies au fichier de traitement de la route correspondante en méthode PUT).|0.5|T#1.1D, T#2.4D|US#4|DONE|
|T#2.8I|Dans le fichier serveur gérant les routes correspondant à la gestion d'un projet (cf. T#2.4D), implémenter les fonctions permettant d'afficher le fichier "modifierProjet.ejs" à un utilisateur et de gérer le PUT de ce même fichier (modification du projet aux valeurs renseignées).|1|T#1.1D, T#2.4D|US#4|DONE|
|T#2.9I|Implémenter le fichier "creerUS.ejs" permettant de créer une User Story dans un projet. (formulaire avec champs obligatoires. Champs à remplir pour la création : cf. T#2.2D. Sur la validation, envoie les données saisies au fichier de traitement de la route correspondante en méthode POST)|0.5|T#2.2D, T#2.4D|US#8|TODO|
|T#2.10I|Dans le fichier serveur gérant les routes correspondant à la gestion d'une user story (cf. T#2.4D), implémenter les fonctions permettant d'afficher le fichier "creerUS.ejs" à un utilisateur et de gérer le POST de ce même fichier (création d'une User Story avec les valeurs renseignées).|1|T#2.2D, T#2.4D|US#8|TODO|
|T#2.11I|Implémenter le fichier "supprUS.ejs" demandant confirmation pour la suppression d'une User Story d'un projet. (Affiche les informations relatives à la User Story et comporte une case cochable et un bouton Supprimer. Le bouton n'est utilisable que si la case précédente est cochée. La case cochable est accompagnée d'un texte informant l'utilisateur des effets de la suppression. Sur la validation, envoie une demande de suppression de la User Story  au fichier de traitement de la route correspondante en méthode DELETE)|0.5|T#2.2D, T#2.4D|US#8|TODO|
|T#2.12I|Dans le fichier serveur gérant les routes correspondant à la gestion d'une user story (cf. T#2.4D), implémenter les fonctions permettant d'afficher le fichier "supprUS.ejs" à un utilisateur et de gérer le DELETE de ce même fichier (suppression d'une User Story).|1|T#2.2D, T#2.4D|US#8|TODO|
|T#2.13I|Implémenter le fichier "backlog.ejs" permettant d'afficher le backlog d'un projet. (liste des User Stories du projet.)|0.5|T#2.2D, T#2.4D|US#9|TODO|
|T#2.14I|Dans le fichier serveur gérant les routes correspondant à la gestion d'un projet (cf. T#2.4D), implémenter les fonctions permettant d'afficher le fichier "backlog.ejs" à un utilisateur.|0.5|T#2.2D, T#2.4D|US#9|TODO|
|T#2.15I|Implémenter le fichier "creerSprint.ejs" permettant de créer un sprint dans un projet (formulaire avec champs obligatoire. Champs à renseigner : cf. T#2.3D. Sur la validation, envoie les données saisies au fichier de traitement de la route correspondante en méthode POST)|0.5|T#2.3D, T#2.4D|US#11|TODO|
|T#2.16I|Dans le fichier serveur gérant les routes correspondant à la gestion d'un projet (cf. T#2.4D), implémenter les fonctions permettant d'afficher le fichier "creerSprint.ejs" à un utilisateur et de gérer le POST de ce même fichier (création d'un Sprint avec les valeurs renseignées. Calcul automatique de la date de fin avec la durée d'un sprint (déjà connu à la création d'un projet)).|1|T#2.3D, T#2.4D|US#11|TODO|
|T#2.17I|Implémenter le fichier "supprSprint.ejs" permettant de supprimer un sprint d'un projet (Affiche les informations relatives au Sprint et comporte une case cochable et un bouton Supprimer. Le bouton n'est utilisable que si la case précédente est cochée. La case cochable est accompagnée d'un texte informant l'utilisateur des effets de la suppression. Sur la validation, envoie la demande de suppression au fichier de traitement de la route correspondante en méthode DELETE)|0.5|T#2.3D, T#2.4D|US#11|TODO|
|T#2.18I|Dans le fichier serveur gérant les routes correspondant à la gestion d'un sprint (cf. T#2.4D), implémenter les fonctions permettant d'afficher le fichier "supprSprint.ejs" à un utilisateur et de gérer le DELETE de ce même fichier (suppression du sprint d'un projet).|1.5|T#2.3D, T#2.4D|US#11|TODO|
|T#2.19I|Implémenter un fichier "header.ejs" qui sera appelé au début de chaque fichier .ejs et permettra d'inclure dans ceux-ci le code permettant de naviguer entre les différentes routes en cliquant sur des boutons (c'est un menu de navigation).|1|T#2.4D|-|TODO|
|T#2.20F|Construire la release|0.5|*|-|TODO||
