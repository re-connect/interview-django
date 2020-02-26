# Test connaissances web basiques

## Contexte et stack technique

- Application frontend React
  - Besoin de Node.js
  - Besoin d'un package-manager `npm` ou `yarn`
- Application backend Python Django
  - [Api] Django rest framework
  - [Authentification] Django rest framework simple jwt
  - [Base de données] SQlite

## Mise en place du projet

- Cloner le repository `git clone git@github.com:re-connect/interview.git`
- `cd interview`

### Frontend

- `cd client`
- `yarn`
- `yarn start`

### Frontend

- `cd backend`
- Démarrer le serveur `python manage.py runserver`

## Ce qui est déjà en place

- Backend
  - Authentification possible en jwt
  - Base de données avec des utilisateurs de des données

## Missions

- 1. Forker le projet sur votre github
- 2. Faire fonctionner le projet en local
- 3. Rajouter une page d'authentification sur le frontend qui permet de se connecter et de récupérer un token jwt pour faire des requêtes au backend
- 4. Dans une page d'accueil authentifiée, afficher les informations de l'utilisateur dans le frontend dans le header

## Points d'attention

- 1. Attention à faire du code propre, selon vos propres standards (pas forcément des tests unitaires, mais ça peut pas être mauvais)
- 2. Committez et pushez régulièrement
- 3. N'hésitez pas à noter les timings de ce que vous faites pour savoir où vous avez perdu du temps
