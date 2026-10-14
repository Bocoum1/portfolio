# Portfolio — Amadou Bocoum

Portfolio d'Amadou Bocoum, étudiant en M2 Data Science et Modélisation Statistique
à l'Université Bretagne Sud. Positionnement : **data science, statistiques,
machine learning et deep learning**.

[Voir le portfolio](https://bocoum1.github.io/portfolio/)

![Aperçu du portfolio : data science, statistiques, ML et DL](docs/portfolio-desktop.png)

Le design est responsive et dispose d'une mise en page dédiée aux écrans mobiles.

## Projets présentés

- **Estimation récursive à noyau** : dérivée de régression, simulations Monte-Carlo, biais et MSE.
- **GLM binomiaux** : logit, probit et cloglog, scoring de Fisher vérifié contre `glm`.
- **MoreMovies** : intégration de trois sources, entrepôt et analyses multidimensionnelles.
- **UKRA** : tableau de bord BI sur les accidents routiers au Royaume-Uni.
- **Local Hybrid RAG**, **Atlas** et **Pathfinding Lab** : applications complémentaires.

Les figures statistiques sont générées par les scripts R des dépôts associés,
et non des maquettes. Les contributions en binôme et les limites sont précisées.
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
