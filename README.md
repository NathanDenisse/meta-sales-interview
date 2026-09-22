# Meta Sales Interview

Site local de préparation à l'entretien commercial Meta (Strategic Account Manager). Chaque question
reçoit une réponse structurée en STAR, en français et en anglais, avec ce que l'intervieweur teste, les
pièges, les relances probables et les chiffres mobilisés.

## Lancer le site

```bash
git clone git@github.com:NathanDenisse/meta-sales-interview.git
cd meta-sales-interview
npm install      # seulement la première fois
npm run dev      # http://localhost:5191, ou le port suivant s'il est occupé
```

Autres commandes : `npm run typecheck`, `npm run build`, `npm run preview`.

## Site en ligne

<https://nathandenisse.github.io/meta-sales-interview/>

Le dépôt [NathanDenisse/meta-sales-interview](https://github.com/NathanDenisse/meta-sales-interview)
est **public** et le site est publié par GitHub Pages à chaque `push` sur `main`, via le workflow
`.github/workflows/deploy-pages.yml`.

La publication est un **choix assumé** : le contenu cite du revenu par compte client nommé et des
ressources internes Indeed, et il est donc lisible par tout le monde. Repasser en privé se fait avec
`gh repo edit --visibility private`, ce qui coupe aussi le site.

### Consulter le site depuis un téléphone

Ouvrir l'URL ci-dessus. En local, sur le même réseau Wi-Fi que le Mac :

```bash
npm run dev -- --host      # affiche une URL en 192.168.x.x à ouvrir sur le téléphone
```

## Personnaliser les réponses

Les réponses livrées sont une base, pas un script. Depuis n'importe quelle question, le bouton
**Modifier la réponse** ouvre un éditeur sur les cinq champs STAR, avec ajout, suppression et
réordonnancement des puces d'action, séparément en français et en anglais.

- Les modifications sont enregistrées dans le stockage local du navigateur, la version livrée reste
  intacte et un bouton permet d'y revenir à tout moment.
- La page **Mes réponses** liste tout ce qui a été personnalisé, et permet d'exporter le tout dans un
  fichier JSON puis de le réimporter, par exemple sur une autre machine. À faire après chaque vraie
  session de travail, sinon un nettoyage du navigateur efface le travail.
- Le bouton **Copier au format TypeScript** rend la réponse prête à recoller dans le fichier
  `src/content/q-*.ts` correspondant, pour la rendre permanente dans le dépôt.

## Structure

- `src/content/q-*.ts` : les questions par famille, une famille par fichier, typées `Question[]`.
- `src/content/categories.ts` : les huit familles de questions et ce qu'elles mesurent.
- `src/content/stories.ts` : les neuf histoires qui couvrent la quasi-totalité des questions comportementales.
- `src/content/facts.ts` : la banque de faits, avec provenance, fenêtre de mesure et pièges.
- `src/content/questions.ts` : registre qui agrège les familles.

## La règle d'honnêteté

Chaque réponse porte un `basis` :

| Valeur | Sens |
|---|---|
| `vecu` | Faits et chiffres issus du parcours réel, vérifiés dans la donnée interne |
| `vecu-romance` | Fond réel, détail narratif reconstitué, à relire avant de le dire |
| `canevas` | Réponse idéale écrite de toutes pièces, à personnaliser avant l'entretien |

Une histoire dite en entretien doit être vraie. Le badge existe précisément pour éviter de réciter un
détail inventé, et les réponses `canevas` portent une note qui dit quoi remplacer.

Règle de chiffres : aucune réponse ne cite un nombre absent de `facts.ts`, et les prévisions sont
annoncées comme des prévisions.

## Conventions de rédaction

STAR strict : situation en deux phrases, tâche en une, quatre à six actions à la première personne,
résultat chiffré, puis la leçon. Durée cible à l'oral de 90 à 120 secondes, contrôlable avec le
chronomètre intégré. Pas de tiret cadratin, pas d'emoji.
