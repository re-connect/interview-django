# Test connaissances web basiques

## Contexte et stack technique

- Application backend Python Django
  - [Api] Django rest framework
  - [Authentification] Django rest framework simple jwt
  - [Base de données] SQlite

## Mise en place du projet

- Cloner le repository `git clone git@github.com:re-connect/interview-django.git`
- `cd interview-django`
- `cd backend`
- Démarrer le serveur `python manage.py runserver`
- Le serveur a démarré à [http://localhost:8000](http://localhost:8000)

## Ce qui est déjà en place

- Authentification possible en jwt
- Base de données avec des utilisateurs de des données
- Il y a un utilisateur de test: username: tester passwd: I@mTheT€ster

## Missions

- 1. Forker le projet sur votre github
- 2. Faire fonctionner le projet en local
- 3. Rajouter une page d'authentification sur le frontend qui permet de se connecter et de récupérer un token jwt pour faire des requêtes au backend
- 4. Dans une page d'accueil authentifiée, afficher les informations de l'utilisateur dans le frontend dans le header
- 5. Ajouter une barre de recherche par nom (idéalement, une recherche dans le backend via un call AJAX, sinon, en pur frontend)
  - 5.bonus Ajouter une barre de recherche front et une barre de recherche back
- 6. Ajouter un bouton qui permet d'enregistrer une personne dans la base de données
  - 6.bonus À la création d'une personne en bdd, persister en base l'email du créateur et la date de création
  - 6.bonus-bis Ajouter un bouton sur chaque personne qui permet de le supprimer de la base de données
## Points d'attention

- 1. Attention à faire du code propre, selon vos propres standards (pas forcément des tests unitaires, mais ça peut pas être mauvais)
- 2. Committez et pushez régulièrement
- 3. N'hésitez pas à noter les timings de ce que vous faites pour savoir où vous avez perdu du temps
