# 1_7-Conduite-Projet-2018
Projet de Conduite de projet 2018 (groupe 1_7)

## Backlog du Sprint 1

|ID|User Story|Priorité|Difficulté|Etat|Planification|
|---|---|---|---|---|---|
|US#1|En tant que visiteur, je souhaite m'inscrire (__login__, __mot de passe__, __adresse mail__) à l'application afin de m'y connecter.|Moyenne|3|TODO|Sprint 1|
|US#2|En tant que visiteur, je souhaite me connecter (__login__, __mot de passe__) afin de commencer à utiliser l'application (je deviens alors un développeur).|Moyenne|8|TODO|Sprint 1|
|US#3|En tant que développeur, je souhaite pouvoir créer un projet(__Nom__, description, __génération d'un backlog vide__, __durée d'un Sprint__) afin de commencer la gestion de ce projet.|Haute|1|TODO|Sprint 1|
|US#4|En tant que développeur, je souhaite modifier un projet(nom, description, durée d'un sprint) ou le réinitialiser afin de mettre à jour les informations qui lui sont associées|Haute|3|TODO|Sprint 1|
|US#5|En tant que développeur, je souhaite visualiser la liste des projets que j'ai créé et auxquels je suis associé afin de les consulter.|Haute|2|TODO|Sprint 1|
|US#6|En tant que développeur, je souhaite me retirer d'un projet afin qu'il ne soit plus disponible dans la liste des projet auxquels je suis associés.|Moyenne|2|TODO|Sprint 3|
|US#8|En tant que développeur, dans un projet, je souhaite créer ou supprimer une User Story(__Id__, description, priorité, difficulté, User Stories dépendants, Planification) afin d'organiser le Backlog.|Haute|2|TODO|Sprint 1|
|US#9|En tant que développeur, dans un projet, je souhaite visualiser le Backlog (liste des User Story).|Haute|2|TODO|Sprint 1|
|US#10|En tant que développeur, dans un projet, je souhaite modifier une User Story(description, priorité, difficulté, US dépendantes, état, planification) afin de la mettre à jour.|Haute|3|TODO|Sprint 1|


## Tâches du Sprint 1
ID d'une tâche : T#[Numéro Sprint].[NuméroTâche][D|I|F] avec :
* D : tâche de définition
* I : tâche d'implémentation
* F : tâche d'infrastructure

Signification des symboles :
* \* &nbsp;: Tout, tous
* \- &nbsp;: Rien, aucun

|ID|Description|Durée|Dépendances|US associées|État|
|--|-----------|-----|-----------|------------|----|
|T#1.0F|Implémenter un Dockerfile permettant d'exécuter l'application.|1|-|-|DONE|
|T#1.1D|Définir les attributs d'un "Projet".|0.25|-|-|DONE|
|T#1.2D|Définir les attributs d'une "User Story".|0.25|-|-|TODO|
|T#1.14D|Définir les attributs d'un "Développeur".|0.25|-|-|DONE|
|T#1.3I|Impélmenter le fichier "creerProjet.ejs"|0.5|T#1.1D|US#3|DONE|
|T#1.4I|Impélmenter le fichier "listeProjets.ejs"|0.5|T#1.1D|US#5|DONE|
|T#1.5I|Impélmenter le fichier "modifierProjet.ejs"|0.5|T#1.1D|US#4|TODO|
|T#1.7I|Impélmenter le fichier "supprUS.ejs"|0.5|T#1.2D|US#8|TODO|
|T#1.6I|Impélmenter le fichier "creerUS.ejs"|0.5|T#1.2D|US#8|TODO|
|T#1.8I|Impélmenter le fichier "backlog.ejs"|0.5|T#1.2D|US#9|TODO|
|T#1.9I|Impélmenter le fichier "modifierUS.ejs"|0.5|T#1.2D|US#10|TODO|
|T#1.10I|Impélmenter le fichier "projet.js" comportant les requètes CRUD à la base de données concernant un Projet.|1|T#1.1D T#1.2D|-|DOING|
|T#1.16I|Implémenter le fichier "login.ejs" permettant de se connecter.|1|T#1.14D|US#2|DOING|
|T#1.17I|Implémenter le fichier "SignUp.ejs" permettant de créer un compte ded développeur.|1|T#1.14D|US#1|DOING|
|T#1.11I|Impélmenter le fichier "server.js" gérant les routes de l'application.|1.5|T#1.12F|-|DOING|
|T#1.12F|Mettre en place une architecture client/server NodeJS.|0.5|-|-|DONE|
|T#1.15F|Mettre en place la base de données et sa fonction de connexion.|0.5|-|-|DONE|
|T#1.13F|Construire la release|0.5|*|-|DONE||


Lien vers la release : https://github.com/LoannGio/1_7-Conduite-Projet-2018/releases/tag/0.1.0
