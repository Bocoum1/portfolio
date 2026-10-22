# Portfolio — Amadou Bocoum

Portfolio d'Amadou Bocoum, étudiant en M2 Data Science et Modélisation Statistique
à l'Université Bretagne Sud. Positionnement : **data science, statistiques,
machine learning, deep learning et algorithmique**.

[Voir le portfolio](https://bocoum1.github.io/portfolio/)

![Aperçu du portfolio : data science, statistiques, ML et DL](docs/portfolio-desktop.png)

Le design est responsive et dispose d'une mise en page dédiée aux écrans mobiles.

## Projets présentés

- **Estimation récursive à noyau** : dérivée de régression, simulations Monte-Carlo, biais et MSE.
- **GLM binomiaux** : logit, probit et cloglog, scoring de Fisher vérifié contre `glm`.
- **MNIST** : comparaison linéaire / MLP / CNN, trois graines et analyse des erreurs sur un test interne.
- **House Prices** : validation croisée, prétraitements par pli et analyse d'une erreur d'extrapolation.
- **Pathfinding Lab** : cinq stratégies de recherche, coût du chemin et exploration animée ; lien vers le projet initial conservé.

**Local Hybrid RAG**, **UKRA** et **MoreMovies** figurent dans une rubrique
complémentaire consacrée aux usages des données.

Les figures statistiques et d'apprentissage proviennent des expériences R et
Python des dépôts associés, et non de maquettes. Les contributions en binôme
et les limites sont précisées. Les scores de test interne ne sont pas présentés
comme des résultats de leaderboard ; l'échec de Ridge sur la RMSE en dollars
est documenté, pas masqué.
Les CV et les documents de laboratoire non autorisés ne sont pas publiés.

## Stack

- Next.js 16 ;
- React 19 ;
- TypeScript ;
- CSS natif.

Le site est exportable sous forme statique et ne dépend d'aucun service côté serveur.

## Développement local

```bash
npm install
npm run dev
```

Ouvrir ensuite [http://localhost:3000](http://localhost:3000).

Le serveur de développement utilise Webpack avec une surveillance par sondage afin
de rester fiable sur les systèmes Linux où la limite `inotify` est déjà sollicitée
par d'autres projets.

## Vérification

```bash
npm run lint
npm run build
```

Le build statique est généré dans `out/`.

## Déploiement
Suivre ce lien pour voir mon portfolio
```text
https://bocoum1.github.io/portfolio/
```
