# Meta Sales Interview

Site local de préparation à l'entretien commercial Meta (Strategic Account Manager). Chaque question
reçoit une réponse structurée en STAR, en français et en anglais, avec ce que l'intervieweur teste, les
pièges, les relances probables et les chiffres mobilisés.

## Lancer le site

```bash
cd ~/meta-sales-interview
npm install      # seulement la première fois
npm run dev      # http://localhost:5191
```

Autres commandes : `npm run typecheck`, `npm run build`, `npm run preview`.

## À ne pas publier

Ce site contient des chiffres internes Indeed, dont du revenu par compte client nommé. Il reste
**local**. Si une version en ligne devient nécessaire, il faut un hébergement authentifié, pas GitHub
Pages public.

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
