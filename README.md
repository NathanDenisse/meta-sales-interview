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

## Dépôt privé, et pourquoi Pages reste désactivé

Le dépôt [NathanDenisse/meta-sales-interview](https://github.com/NathanDenisse/meta-sales-interview)
est **privé**, vérifié avec `gh repo view --json visibility` qui renvoie `PRIVATE`.

GitHub Pages n'est **pas** activé, et ce n'est pas un oubli. Sur GitHub, un dépôt privé peut avoir
Pages activé, mais le site publié devient alors **accessible à quiconque connaît son URL**. La
visibilité privée d'un site Pages n'existe que sur GitHub Enterprise Cloud, et uniquement pour des
dépôts appartenant à une organisation. Ce dépôt appartient à un compte personnel (`type: User`), donc
l'option n'existe pas ici, quel que soit le plan.

Comme le contenu cite du revenu par compte client nommé, publier reviendrait à exposer de la donnée
interne Indeed. Aucun workflow de déploiement n'est présent dans le projet, précisément pour éviter
qu'un `git push` ne mette le site en ligne par accident.

### Consulter le site depuis un téléphone

Deux options qui ne passent par aucun hébergeur tiers.

Sur le même réseau Wi-Fi que le Mac, expose le serveur de développement puis ouvre l'adresse affichée
depuis le téléphone :

```bash
npm run dev -- --host      # affiche une URL en 192.168.x.x à ouvrir sur le téléphone
```

À distance, GitHub Codespaces permet d'ouvrir le dépôt et de faire tourner `npm run dev`, avec un port
transféré en visibilité **privée** : l'accès demande alors une authentification GitHub, ce que Pages ne
sait pas faire ici.

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
