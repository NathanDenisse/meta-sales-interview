# Standard de réponse

Norme interne du dépôt. Toute réponse du site s'écrit contre ce document.
Établi le 23 septembre 2026 à partir des sources listées en fin de fichier.

Ce document dit trois choses : quel format pour quel type de question, quelle
longueur, et ce qui fait qu'une réponse est notée bien ou mal. Il ne dit pas
quoi raconter : la matière vient de `src/content/facts.ts` et de
`src/content/inspirations.ts`.

---

## 1. Le processus Meta, et ce qu'il change pour nous

Pour un poste commercial Meta (Account Manager, Client Solutions Manager,
Client Partner, Agency Partner, Strategic Account Manager), les candidats
décrivent une boucle en quatre à cinq temps : screen recruteur, screen avec un
Client Partner ou le hiring manager, un panel de trois à cinq entretiens dont
souvent une étude de cas, puis un team match avec le head of industry de la
verticale. IGotAnOffer a classé les questions réellement rapportées sur
Glassdoor : produit et stratégie 43 %, carrière 25 %, leadership 17 %, service
client 15 %.

Trois conséquences directes sur la façon d'écrire :

1. **La connaissance produit et marché pèse plus que la belle histoire.** C'est
   la première famille de questions en volume. Une réponse qui ne sait pas dire
   d'où vient la croissance du revenu publicitaire est plus pénalisée qu'une
   histoire STAR moyenne.
2. **Chaque entretien est noté séparément** sur une échelle Below Expectations /
   Meets / Strong / Exceptional, avec une note de synthèse du type « soft no » ou
   « strong yes ». Il n'y a pas de rattrapage global : chaque réponse doit tenir
   seule.
3. **La motivation est éliminatoire, y compris chez un candidat senior.** Un
   candidat Agency Solutions Manager rapporte sur Blind un entretien director
   entièrement consacré à « what is your motivation for applying to Meta »,
   perdu sur cette seule question. La famille motivation n'est pas un
   échauffement.

La grille comportementale que Meta communique à ses candidats (round Leadership
& Drive) note quatre axes : driving resourcefulness and results, seeking
opportunities to grow and learn, taking ownership and accountability, resolving
conflict. Le STAR y est demandé explicitement.

---

## 2. Choisir le format : `star` ou `script`

Le site dispose de deux formats. Le choix se fait sur la **forme de la question**,
pas sur la famille.

| La question dit | Format | Pourquoi |
|---|---|---|
| « Raconte-moi une fois où… », « Parle-moi d'un… », « As-tu déjà… » | `star` | L'intervieweur demande un événement daté. Répondre par une méthode est hors sujet. |
| « Comment fais-tu… », « Que fais-tu quand… », « Comment structures-tu… » | `script` | Il demande un mécanisme. Forcer une anecdote fait perdre la méthode et sonne faux. |
| Cas hypothétique : « Il te reste trois semaines… », « On te confie un book demain… » | `script` | Il teste un plan, pas un souvenir. |
| Motivation, opinion, connaissance marché | `script` | Un souvenir daté n'a rien à y faire. |

Le STAR reste toujours renseigné dans `answer`, même en format `script` : c'est
le repli quand l'intervieweur relance par « donne-moi un exemple précis », ce
qui est la relance la plus fréquente sur une réponse de méthode.

**Règle de bascule à l'oral** : une réponse `script` se termine toujours par une
main tendue vers l'exemple. Si l'intervieweur la prend, on passe au STAR.

### Sous-structure d'un `script`

Les sources sur les questions d'opinion et de méthode convergent vers une
structure qui n'est pas STAR :

- **hook** : la position, en une phrase. On annonce la conclusion avant de la
  justifier. C'est le point que toutes les sources sur la longueur répètent :
  le résultat d'abord, le contexte ensuite.
- **body** : trois blocs, jamais quatre. Un bloc = un critère + la raison + une
  conséquence concrète. Le troisième bloc est celui où l'on nomme un arbitrage
  ou une limite : c'est là que se joue la différence entre un candidat qui a
  fait le métier et un candidat qui l'a lu.
- **closing** : une phrase qui rend la main, et qui propose l'exemple.

### Sous-structure d'un `star`

Budget en secondes mesuré par les guides 2026 : Situation 10 à 15 s, Task 5 à
10 s, Action 45 à 60 s, Result 15 à 25 s. Action et Result doivent occuper au
moins les deux tiers du temps. Une Situation qui dépasse 20 à 25 % du total est
le défaut le plus fréquent et le plus repérable.

Traduit dans nos champs :

- `situation` : deux phrases. Où, quand, quel enjeu. Aucun acronyme maison.
- `task` : une phrase, ce que **je** porte.
- `action` : quatre à cinq puces, chronologiques, à la première personne du
  singulier. Une puce contient une décision, pas une intention. « J'ai décidé de
  X plutôt que Y parce que Z » vaut mieux que « j'ai travaillé avec l'équipe ».
- `result` : le chiffre, puis ce qui a changé structurellement.
- `learning` : obligatoire sur les questions d'échec, facultatif ailleurs.

---

## 3. Longueur cible

Les sources s'accordent : 60 à 90 secondes pour une réponse courante, jusqu'à
120 pour une histoire riche en entretien panel. Au-delà de deux minutes,
l'intervieweur prépare sa question suivante au lieu d'écouter.

| Type | `targetSeconds` | Mots à 150 mots/minute |
|---|---|---|
| Discours de méthode, d'opinion ou de motivation | 70 à 92 | 175 à 230 |
| STAR courant | 90 à 105 | 225 à 260 |
| STAR complexe, deal majeur | 105 à 120 | 260 à 300 |

`targetSeconds` doit correspondre au texte réellement écrit. Un chrono qui ment
est pire qu'un chrono absent : il entraîne à parler trop vite.

Convention de comptage du dépôt, à appliquer sans exception :

- format `script` : `hook` + `body` + `closing` de la version française ;
- format `star` : `situation` + `task` + `action` + `result` de la version
  française. Le bloc `learning` ne compte pas, parce qu'il ne se dit que si
  l'intervieweur relance.

Contrôle : nombre de mots divisé par 2,5. Le dépôt contient un script de
vérification, voir l'historique de commit ; le chiffre ne s'estime jamais à
l'oeil.

---

## 4. Les critères d'évaluation réellement utilisés

Compilés depuis les grilles Meta, les guides de recrutement commercial et les
retours de managers qui recrutent.

1. **Ownership.** La question filtre en premier sur la responsabilité. Un
   manager qui a recruté plus de deux cents commerciaux résume : « bad candidates
   talk about bad luck, great candidates take ownership ». La cause nommée doit
   être une cause que le candidat contrôlait.
2. **Spécificité.** « Vague answers sont un signal » : le timing, le prix du
   concurrent, le client pas prêt. Une réponse crédible nomme le moment exact où
   la situation a basculé.
3. **Je plutôt que nous.** Les évaluateurs, humains comme automatisés, comptent
   les verbes à la première personne du singulier. « Nous avons fait X » ne dit
   rien de ce que le candidat a fait.
4. **Un chiffre, avec sa base.** Pas une avalanche : un chiffre qui prouve, et
   la base sur laquelle il est calculé. Un chiffre sans base est la relance la
   plus facile à poser et la plus coûteuse à rater.
5. **Un arbitrage visible.** Deux options pesées, une choisie, la raison dite.
   Une histoire sans décision difficile passe pour de la chance.
6. **Un changement structurel à la fin.** Pas « j'ai travaillé plus dur » mais
   « depuis, je fais X systématiquement », avec l'effet mesuré si possible.
7. **Concision.** La réponse tient dans le budget, et s'arrête. Le silence après
   la réponse est un outil, pas un vide à combler.

---

## 5. Les erreurs éliminatoires

À vérifier sur chaque réponse avant de la considérer finie.

- **La fausse faiblesse.** « Je travaille trop, je délègue mal. » Noté proche de
  zéro : la réflexion n'est pas méritée.
- **La perte qui laisse le candidat impeccable.** Un manager le dit ainsi : les
  imposteurs donnent une histoire de perte qui les fait quand même bien
  paraître. Si la réponse ne coûte rien à celui qui la dit, elle ne vaut rien.
- **Le collègue transformé en méchant.** L'intervieweur en conclut que le
  candidat sera le collègue difficile de son équipe.
- **Le moindre mot négatif sur l'employeur actuel.** Barre haute : zéro
  négativité. L'intervieweur entend comment le candidat parlera de Meta dans
  dix-huit mois.
- **La remise accordée par réflexe.** « Où faut-il que je sois ? » est le
  signal exact à ne pas envoyer. On échange une concession, on ne la donne pas.
- **Le jargon récité.** Nommer MEDDIC ou Challenger sans pouvoir expliquer une
  décision prise grâce au cadre. Les grilles de notation dédiées pénalisent la
  définition récitée et récompensent l'élément mobilisé dans une situation
  réelle.
- **Confondre champion et economic buyer.** Erreur classée en red flag dans les
  grilles MEDDPICC. Le champion vend en interne, l'economic buyer tient le
  budget. Parfois la même personne, le plus souvent non.
- **La liste d'outils sur la question IA.** Nommer ChatGPT, Copilot et
  Perplexity range le candidat dans la catégorie vocabulaire. Ce qui compte est
  un moment de jugement : une vérification, une correction, un refus d'utiliser
  l'outil.
- **Dire qu'on n'utilise pas l'IA.** En 2026, se lit comme un décalage.
- **La prévision citée comme un résultat.** Dans un métier où l'annonceur
  vérifie, c'est la faute la plus repérable et la moins rattrapable.
- **Le monologue de plus de deux minutes.** Perte d'attention mesurée entre 90
  et 120 secondes de parole continue.

---

## 6. Le vocabulaire de métier attendu, et comment le mobiliser

Les cadres sont reconnus par les intervieweurs, mais la grille de notation
récompense l'usage, pas le nom. La règle d'écriture du site : **décrire le
mécanisme, nommer le cadre seulement si la question le demande.**

| Mécanisme | Ce qu'on écrit | Ce qu'on n'écrit pas |
|---|---|---|
| Multi-threading | « J'ai arrêté de dépendre d'un seul interlocuteur : j'ai ouvert une relation au budget et une à l'usage. » | « J'ai multi-threadé le compte. » |
| Economic buyer / champion | « La personne qui portait le sujet en interne n'était pas celle qui signait le budget. » | « Mon champion n'était pas l'EB. » |
| Mutual action plan | « On a écrit ensemble les étapes jusqu'à la mise en ligne, avec un nom et une date sur chaque ligne, et plus de lignes de leur côté que du mien. » | « On a fait un MAP. » |
| Paper process | « J'ai demandé tôt combien de temps prend leur validation juridique. La réponse, trois semaines, a déplacé toute la date de signature. » | « J'ai qualifié le paper process. » |
| Value selling | « J'ai chiffré le coût de ne rien faire avant de parler du prix. » | « J'ai fait du value selling. » |
| Cost of inaction | « Sans changement, ils repartaient sur le même nombre de candidatures le trimestre suivant. » | — |
| Land and expand | « J'ai obtenu un premier périmètre étroit et mesurable, puis j'ai élargi sur la preuve. » | « Land and expand. » |
| Give-get | « Je n'ai pas refusé la remise, je l'ai échangée contre un engagement de durée. » | — |

Détails utiles pour la précision, à mobiliser sans les nommer :

- Un mutual action plan se co-écrit avec l'acheteur, ses lignes doivent être plus
  nombreuses que celles du vendeur, les dates se déduisent à rebours de sa date
  de mise en service, et il porte une ligne « plus gros risque » explicite.
- Le multi-threading se décrit par une carte à six colonnes : rôle, nom,
  influence, sentiment, dernier contact, prochain contact. Le sponsor exécutif
  s'active en semaine trois, pas en semaine dix-huit, et ce n'est pas un closer
  mais une ancre de relation.
- Sur une demande de remise, l'ordre est : ne pas dire non, demander ce qui
  motive la demande, distinguer budget contraint, comparaison concurrente et
  valeur non perçue, puis échanger.
- Sur un churn, les signaux avancés sont les réunions manquées, les réponses qui
  ralentissent, la baisse d'usage sur quatorze jours, le changement
  d'interlocuteur sans présentation, et les questions sur les conditions de
  résiliation ou l'export des données. Les indicateurs de volume sont des
  indicateurs tardifs.
- Sur la priorisation d'un book, la réponse moyenne cite le revenu et la date de
  renouvellement, qui sont des sorties. La réponse forte part de la probabilité
  de perte et de l'endroit où la présence change le résultat, pas de qui pèse le
  plus aujourd'hui.
- Face à un dirigeant, l'ordre est : pourquoi changer, pourquoi maintenant,
  pourquoi nous. Les candidats passent l'essentiel du temps sur le troisième, qui
  est le plus facile. Le langage change selon la fonction : marge, trésorerie et
  coût du retard pour une direction financière, pipeline et contribution au
  revenu pour une direction marketing.

---

## 7. Squelettes par famille

Pour chaque famille du site, la trame qui fait consensus dans les sources.

### Deals et négociation
- **Deal complexe (`star`)** : dire d'entrée pourquoi il était complexe, en une
  dimension nommée (nombre de décideurs, intermédiaire, calendrier contraint).
  Une action = un obstacle levé. Nommer la personne qui bloquait et ce qu'on a
  fait d'elle. Finir sur le montant et sur ce qui a été reproductible ensuite.
- **Deal dont on est fier (`star`)** : les managers utilisent cette question pour
  tester la précision. Montant exact et pas arrondi, pain nommé, rôle des
  différents interlocuteurs, « je » et pas « on ». La fierté doit porter sur une
  décision, pas sur la taille.
- **C-level (`star`)** : comment la réunion a été obtenue, ce qui a été dit dans
  les trois premières minutes, la question qui prouve la préparation, et le
  point de sortie décidé. Une réunion C-level sans next step défini est une
  réunion perdue.
- **Plusieurs décideurs (`script`)** : cartographier avant d'arbitrer. Nommer le
  conflit d'intérêts réel plutôt que le lisser. Choisir l'objectif commun le plus
  haut et y rattacher chaque demande.
- **Remise (`script`)** : ne jamais dire non tout de suite, diagnostiquer,
  échanger. Nommer la contrepartie qu'on demande. Dire à quel plancher on
  s'arrête.
- **Croissance de compte (`star`)** : point de départ, mécanisme qui a produit la
  croissance, et la part qui vient de ce mécanisme plutôt que du marché.
- **Cycle long (`star`)** : ce qui a débloqué, et la raison pour laquelle on n'a
  pas abandonné, formulée comme un critère et non comme de l'entêtement.

### Agences et partenaires
Presque toutes ces questions sont des questions de méthode, donc `script`.
Le fil commun attendu : l'agence n'est pas un obstacle à contourner, c'est un
client dont le modèle économique diffère de celui de l'annonceur. Une réponse
forte nomme ce modèle (commission sur volume, honoraires, rémunération à la
performance) et en tire une conséquence sur la recommandation. Ne jamais décrire
un contournement de l'agence : c'est un signal de sortie immédiat dans un
environnement où une grande part du business passe par elles.

### Pertes, churn et échecs
Structure imposée par les sources : ce que je croyais vrai, ce qui s'est
réellement passé, le moment exact où ça a basculé, ma part, ce que j'ai changé
ensuite et l'effet du changement. La cause nommée doit être interne. La question
« qu'as-tu changé après ? » viendra, et « rien, parfois on perd » est la pire
réponse possible.

### Priorisation
Un critère explicite et défendable, appliqué à un exemple chiffré, et surtout
**ce à quoi on renonce**. Une réponse de priorisation sans renoncement nommé
n'est pas une réponse de priorisation. Distinguer le plan d'arrivée
(où je vais concentrer) du plan d'apprentissage (ce que je vérifie d'abord) :
les deux sont demandés séparément.

### Motivation et adéquation
Quatre temps sur « pourquoi partir » : le déclencheur factuel, la situation
décrite sans reproche, ce que je vais chercher, le pont vers l'entreprise.
Soixante à quatre-vingt-dix secondes. Sur « pourquoi Meta », la faute classique
est l'empilement de statistiques : trois raisons nommées, chacune avec une
conséquence sur le métier, valent mieux que huit chiffres.

### IA et outillage
Structure qui distingue le vocabulaire de la maîtrise : la tâche, ce que l'IA a
fait, **le moment où j'ai jugé** (vérifié, corrigé, ou décidé de ne pas
l'utiliser), le résultat mesurable. Le moment de jugement est le cœur de la
réponse, pas l'outil.

### Relation client
La preuve d'un conseiller est d'avoir fait changer d'avis un client, et d'avoir
mesuré l'effet. Sur la revue d'activité, donner un ordre du jour fixe et dire ce
qu'on coupe quand le temps manque.

### Analyse et diagnostic
Un ordre de diagnostic fixe, énoncé à voix haute, du plus probable au moins
probable, avec ce qu'on regarde à chaque étape et ce qui ferait changer
d'hypothèse. La méthode compte plus que la conclusion.

### Leadership et collaboration
Les quatre axes de la grille Meta : débrouillardise et résultat, envie
d'apprendre, responsabilité, résolution de conflit. Sur le conflit, jamais de
méchant : un désaccord entre deux positions défendables, et un mécanisme de
résolution qui ne passe pas par l'escalade.

---

## 8. Contrôle avant de considérer une réponse finie

- [ ] Le format correspond à la forme de la question.
- [ ] `targetSeconds` correspond au texte, à 150 mots par minute.
- [ ] Au moins un élément que seul quelqu'un ayant fait le métier peut dire.
- [ ] Aucun chiffre absent de `src/content/facts.ts`.
- [ ] Les prévisions sont annoncées comme telles.
- [ ] La première personne du singulier domine.
- [ ] Un arbitrage est visible.
- [ ] Aucune fausse faiblesse, aucun méchant, aucun reproche à l'employeur.
- [ ] `whatTheyTest`, `traps` et `followUps` viennent des critères de ce
      document, pas d'une intuition.
- [ ] Ni tiret cadratin, ni demi-cadratin, ni emoji.
- [ ] Tutoiement dans les conseils uniquement, jamais dans le texte à dire.

---

## Sources

Processus et attentes Meta
- IGotAnOffer, Meta account manager interview : https://igotanoffer.com/blogs/tech/facebook-account-manager-interview
- IGotAnOffer, Meta Leadership & Drive interview : https://igotanoffer.com/en/advice/meta-leadership-and-drive-interview
- Aakash Gupta, document de préparation remis par Meta à ses candidats : https://substack.com/@aakashgupta/note/c-62800941
- Product Alliance, Meta PM interview cheat sheet : https://www.productalliance.com/guides/meta-pm-interview-cheat-sheet
- Exponent, Meta interview guide : https://www.tryexponent.com/guides/meta-product-manager-interview
- Nora AI, Meta Account Manager interview guide 2026 : https://interview.norahq.com/interview-guides/meta-account-manager-interview-guide-2026
- Dataford, Meta Account Executive interview questions 2026 : https://dataford.io/interview-guides/meta-platforms/account-executive
- Hacking the Case Interview, Meta case study : https://www.hackingthecaseinterview.com/pages/facebook-case-study-interview
- Reddit r/DigitalMarketing, retour d'une ancienne Client Solutions Manager : https://www.reddit.com/r/DigitalMarketing/comments/1jlyqm7/client_solutions_manager_at_meta/
- Blind, entretien Agency Solutions Manager perdu sur la question de motivation : https://www.teamblind.com/post/an-interview-experience-at-meta-that-left-me-truly-puzzled-oymndjnt
- Blind, onsite Client Partner : https://www.teamblind.com/post/Meta-On-site-Interview---Client-Partner---Non-Tech-1u7hUee4
- interviews.chat, exemples STAR Meta orientés agence : https://www.interviews.chat/star-questions/meta-technical-account-manager

Structure et longueur
- Capstone Workforce, STAR Method 2026, budgets en secondes : https://capstoneworkforce.com/job-seekers/star-method
- Residency Advisor, longueur d'une réponse comportementale : https://residencyadvisor.com/resources/behavioral-interview-questions/how-long-should-a-strong-behavioral-interview-answer-actually-be
- InterviewMochi, la règle des deux minutes : https://interviewmochi.com/blog/interview-answer-length-2-minute-rule
- FoundRole, répartition du temps STAR et résultat en premier : https://www.foundrole.com/blog/star-method-how-to-answer-any-behavioral-interview-question
- MockRound, les limites du STAR et la structure Contexte / Enjeu / Choix / Action / Impact / Réflexion : https://mockround.ai/resources/the-star-method-is-not-enough-how-to-give-high-signal-answers
- FinalRound AI, questions comportementales Meta avec mauvaises et bonnes réponses : https://www.finalroundai.com/blog/meta-behavioral-interview-questions-with-examples

Critères des recruteurs commerciaux
- Talentfoot, Tyler Kosik sur l'évaluation des commerciaux : https://talentfoot.com/how-to-identify-elite-saas-sales-talent/
- Eliezer Nerenberg, la question du deal perdu posée à plus de deux cents candidats : https://www.linkedin.com/posts/eliezer-nerenberg_tell-me-about-a-deal-you-lost-that-still-activity-7468285397442306049-HLv9
- Morgan Brewka, reconnaître un imposteur en entretien commercial : https://www.linkedin.com/posts/morgan-brewka_most-sales-hiring-mistakes-arent-made-at-activity-7485774541978263552-6ehE
- Scott Blostein, ownership, leçon, application : https://www.linkedin.com/posts/scottblostein_tell-me-about-a-deal-you-lost-and-what-you-activity-7379862809829990400-EYbM
- Jamaica Slicer, ce que cherche la question du deal perdu : https://www.linkedin.com/posts/jamaicaslicer_my-favorite-interview-question-for-gtm-roles-activity-7425556070573436929-qsTH
- Seán Reid, prioriser un book par probabilité de perte : https://www.linkedin.com/posts/sean-reid_if-youre-interviewing-for-a-customer-success-activity-7479940766346432513-8XOJ
- Sales Career Hub, la réponse en trois lignes sur le départ : https://www.salescareerhub.com/p/3-line-story-short-tenure-sales
- gitGood, la question du départ en quatre temps : https://gitgood.dev/blog/why-are-you-leaving-answer-that-doesnt-sink-candidacy-2026
- Sales Introverts, parler d'un objectif manqué : https://salesintroverts.com/blog/ow-to-answer-quota-performance-sales-interviews/

Cadres de vente
- CRO Report, grille de notation des questions MEDDPICC : https://thecroreport.com/blog/meddpicc-interview-questions/
- Hyperbound, MEDDIC et MEDDPICC sans sonner robotique : https://www.hyperbound.ai/blog/meddic-meddpicc-qualification-framework
- Sybill, MEDDIC contre MEDDPICC : https://www.sybill.ai/blogs/meddpicc-vs-meddic
- MEDDICC, utiliser le cadre pendant l'entretien lui-même : https://meddicc.com/resources/tips-for-your-job-interview-with-a-meddic-company
- Apollo, éléments et preuves MEDDPICC : https://www.apollo.io/insights/meddpicc-sales
- DealCollab, mutual action plan : https://dealcollab.io/blog/mutual-action-plan
- SalesArmor, modèle de close plan : https://www.salesarmor.app/blog/mutual-action-plan-template
- Rework, multi-threading des deals complexes : https://resources.rework.com/guides/enterprise-account-executive-playbooks/multi-threading-enterprise-deals
- Rework, mutual action plans et leurs mésusages : https://resources.rework.com/guides/sales-process/mutual-action-plans

Prix, churn, dirigeants, IA
- Hyring, banque de questions de vente avec réponses attendues : https://hyring.com/jobseeker-toolkit/interview-questions/role/sales
- HubSpot, neuf façons de répondre à une demande de remise : https://blog.hubspot.com/sales/responses-prospect-asks-for-discount
- SBI Growth, vendre la valeur plutôt que le prix : https://sbigrowth.com/insights/blog/selling-value-instead-price-when-prospect-wants-discount
- OneTwoResume, négociation et concession échangée : https://www.onetworesume.com/interview-questions/sales-representatives-wholesale-and-manufacturing
- Matt Haycox, signaux avancés de churn : https://matt-haycox.com/sales-client-acquisition/client-retention/
- SuccessCoaching, indicateurs avancés contre indicateurs tardifs : https://successcoaching.co/blog/managing-churn
- WNTD Partners, causes racines de churn : https://wntdpartners.com/7-steps-your-churn-analysis-might-be-missing/
- HubSpot, rendez-vous avec un dirigeant : https://blog.hubspot.com/sales/how-meet-with-c-level-executives
- Closing Foundry, point de vue plutôt que pitch, pourquoi changer / maintenant / nous : https://www.closingfoundry.com/insights/how-to-get-a-meeting-with-the-c-suite
- AI Career Pivot, répondre à « comment utilises-tu l'IA » en 2026 : https://ai-career-pivot.com/blog/how-to-answer-how-do-you-use-ai-interview-2026
- 80Twenty, faible contre forte réponse sur l'IA : https://www.80twenty.com/sdr-interview-questions/
- Gangly, questions IA en entretien commercial : https://getgangly.com/blog/sdr-interview-questions
