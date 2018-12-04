# 1_7-Conduite-Projet-2018
Projet de Conduite de projet 2018 (groupe 1_7)

## Organisation
Différentes informations concernant l'organisation de ce projet.

### Définition of Done (DOD)
Une tâche est considérée finie lorsque sa réalisation correspond à sa description. Les tests ne sont pas compris dans la DoD d'une tâche : il existe des tâches spécifiques pour eux.

### Organisation des tâches
La distribution des tâches se fait de manière autonome en suivant le protocole suivant :

Je suis un développeur qui ne réalise aucune tâche :
* Je vais dans la liste des tâches
* Je trouve une tâche dont les tâches dépendantes sont toutes réalisées et qui n'est ni en état DOING ni en état DONE
* Je passe l'état de la tâche trouvée en DOING et je marque mon nom dans la colonne Développeur.

Lorsque je finis une tâche (cf. DOD), je passe son état à DONE.

### Normalisation des noms de commits
Le nom de chaque commit devrait suivre la forme suivante :

[ID tâche][Etat tâche]:[Action effectuée à ce commit]

Si le travail n'est pas lié à une tâche, ne pas renseigner les parties correspondantes


### Arborescence
1_7-Conduite-Projet-2018/ : root</br>
&nbsp;&nbsp;&nbsp;&nbsp;Doc/ : contient les fichiers de documentation d'utilisation/installastion</br>
&nbsp;&nbsp;&nbsp;&nbsp;PATCHNOTES/ : contient les patchnotes relatifs aux différentes releases</br>
&nbsp;&nbsp;&nbsp;&nbsp;sprints/ : contient les dossiers de chaque sprint </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sprint1/ : contient les informations du sprint 1</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sprint2/ : contient les informations du sprint 2</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sprint3/ : contient les informations du sprint 3</br>
&nbsp;&nbsp;&nbsp;&nbsp;schemas/ : contient les schémas des composants de l'application </br>
&nbsp;&nbsp;&nbsp;&nbsp;app/ : dossier source de l'application. Son arborescence est précisée dans le dossier Doc/ </br>
&nbsp;&nbsp;&nbsp;&nbsp;Definitions.md : contient les définitions des objets que gère notre application</br>
&nbsp;&nbsp;&nbsp;&nbsp;Dockerfile : script de création de l'image docker de notre application </br>
&nbsp;&nbsp;&nbsp;&nbsp;README.md : Product Backlog du projet</br>
&nbsp;&nbsp;&nbsp;&nbsp;docker-compose.yml : script d'utilisation pour docker-compose </br>
&nbsp;&nbsp;&nbsp;&nbsp;Organisation.md : informations sur l'organisation du projet </br>
&nbsp;&nbsp;&nbsp;&nbsp;sonar-project.properties : fichier de configuration de sonar </br>
&nbsp;&nbsp;&nbsp;&nbsp;.travis.yml : fichier de configuration de travis </br>
