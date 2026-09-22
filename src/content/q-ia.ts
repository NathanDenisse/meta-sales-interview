import type { Question } from "../types";

export const qIa: Question[] = [
  {
    id: "ia-usage",
    category: "ia",
    difficulty: "classique",
    priority: true,
    prompt: {
      fr: "Comment utilises-tu l'IA aujourd'hui dans ton travail ?",
      en: "How do you use AI in your work today?",
    },
    whatTheyTest: [
      "Si tu es utilisateur d'un chatbot ou si tu as construit quelque chose qui tient.",
      "Si l'IA touche ta donnée réelle ou seulement du texte générique.",
      "Si tu as pensé au risque avant qu'on te pose la question.",
      "Si ton usage profite à l'équipe ou seulement à ton propre rendement.",
    ],
    traps: [
      "Dire que tu utilises ChatGPT pour rédiger tes e-mails : c'est le niveau zéro, tout le monde y est.",
      "Parler d'outils et de modèles sans jamais dire quelle décision ou quel livrable en sort.",
      "Oublier les garde-fous : sur de la donnée client, l'absence de contrôle est rédhibitoire.",
      "Noyer l'intervieweur sous le vocabulaire technique au lieu de partir du travail commercial.",
    ],
    followUps: [
      {
        question: "Comment tu t'assures que l'agent ne fait pas de bêtise ?",
        how: "Décris le hook : il intercepte chaque action et bloque toute écriture, sauvegarde Salesforce, lancement de campagne, changement de budget. La règle est que l'agent prépare et que tu valides.",
      },
      {
        question: "Combien de temps ça t'a pris à construire ?",
        how: "Réponds en logique d'amortissement plutôt qu'en heures : construit une fois, réutilisé par plusieurs personnes sur une vingtaine de tâches récurrentes.",
      },
      {
        question: "Tes collègues s'en servent vraiment ?",
        how: "Dis oui et dis pourquoi c'est possible : les procédures sont packagées et les garde-fous rendent l'usage acceptable sur de la donnée client réelle.",
      },
    ],
    basis: "vecu",
    answer: {
      fr: {
        situation:
          "Je travaille dans Cursor avec Claude, connecté par MCP à la Data Platform d'Indeed en IQL, Trino et Snowflake, à Salesforce, à Gmail et Google Workspace, à Glean et à Lemlist. L'agent lit donc la donnée à la source, au lieu de dépendre de ce que je copie-colle dans une fenêtre de chat.",
        task: "Je voulais que l'IA produise du travail livrable à un client, pas des brouillons que je dois réécrire entièrement.",
        action: [
          "J'ai branché l'agent directement sur les sources, ce qui supprime l'étape où j'exporte un fichier et où je me trompe de colonne.",
          "J'ai transformé une vingtaine de tâches récurrentes en procédures réutilisables, des instructions et des scripts packagés qui donnent le même résultat à chaque exécution : analyse de compte, deck d'audit, refresh du forecast et du commit hebdomadaire, tri des alertes contractuelles, réponses clients, campagnes ABM, sites clients.",
          "J'ai écrit des garde-fous techniques : un hook intercepte chaque action de l'agent et bloque toute écriture, une sauvegarde Salesforce, un lancement de campagne, un changement de budget. L'agent prépare, je valide.",
          "J'ai partagé ces procédures avec des collègues, donc le travail est construit une fois et réutilisé plusieurs fois.",
          "J'ai audité mon propre poste pour qu'il reste rapide : 24 000 tokens de contexte fixe chargés avant chaque requête, 549 outils connectés pour 165 réellement utilisés, règles permanentes ramenées de 4 163 à 2 340 tokens sans rien supprimer.",
        ],
        result:
          "Le travail récurrent qui prenait des heures est devenu reproductible, et le point de contrôle humain est inscrit dans l'outil plutôt que dans ma discipline personnelle. Effet durable : une vingtaine de procédures qui tournent pour plusieurs personnes, pas seulement pour moi.",
        learning:
          "La valeur n'est pas dans le modèle, elle est dans l'accès aux données et dans les garde-fous. Sans les deux, tu obtiens du texte crédible et faux.",
      },
      en: {
        situation:
          "I work in Cursor with Claude, connected over MCP to Indeed's Data Platform through IQL, Trino and Snowflake, plus Salesforce, Gmail and Google Workspace, Glean and Lemlist. The agent therefore reads the data at source, instead of depending on what I paste into a chat window.",
        task: "I wanted AI to produce work I can put in front of a client, not drafts I have to rewrite from scratch.",
        action: [
          "I wired the agent straight into the sources, which removes the step where I export a file and pick the wrong column.",
          "I turned around twenty recurring tasks into reusable procedures, packaged instructions and scripts that return the same result every run: account analysis, audit decks, weekly forecast and commit refresh, contract alert triage, client replies, ABM campaigns, client-facing sites.",
          "I wrote technical guardrails: a hook intercepts every agent action and blocks any write, a Salesforce save, a campaign launch, a budget change. The agent prepares, I approve.",
          "I shared those procedures with colleagues, so the work is built once and reused many times.",
          "I audited my own setup to keep it fast: 24,000 tokens of fixed context loaded before every request, 549 connected tools for 165 actually used, standing rules cut from 4,163 to 2,340 tokens without deleting anything.",
        ],
        result:
          "Recurring work that used to take hours became reproducible, and the human checkpoint now lives in the tooling rather than in my personal discipline. The lasting effect is around twenty procedures running for several people, not just for me.",
        learning:
          "The value is not in the model, it is in data access and in the guardrails. Without both, you get text that is credible and wrong.",
      },
    },
    metrics: [
      "Une vingtaine de tâches récurrentes transformées en procédures réutilisables et partagées",
      "Connexions MCP : Data Platform (IQL, Trino, Snowflake), Salesforce, Gmail et Google Workspace, Glean, Lemlist",
      "Hook de garde-fou bloquant toute écriture : Salesforce, lancement de campagne, changement de budget",
      "Audit du poste : 24 000 tokens de contexte fixe, 549 outils connectés pour 165 utilisés, règles de 4 163 à 2 340 tokens",
    ],
    targetSeconds: 115,
  },

  {
    id: "ia-exemple-concret",
    category: "ia",
    difficulty: "moins-classique",
    priority: true,
    prompt: {
      fr: "Donne-moi un exemple précis où l'IA t'a fait gagner du temps ou de l'argent.",
      en: "Give me a specific example where AI saved you time or money.",
    },
    whatTheyTest: [
      "Si tu as un cas chiffré et daté, ou une impression générale de gain de temps.",
      "Si le gain porte sur le résultat commercial et pas seulement sur ton confort.",
      "Si tu peux décrire la chaîne complète, de la donnée jusqu'à l'envoi.",
      "Si la qualité a été contrôlée, ou sacrifiée au volume.",
    ],
    traps: [
      "Dire je gagne deux heures par jour sans pouvoir dire sur quoi.",
      "Présenter le volume comme la performance : 165 e-mails sans contrôle ne valent rien.",
      "Oublier de dire ce que le gain a permis de faire de nouveau, pas seulement plus vite.",
      "Passer sous silence l'étape de validation humaine, l'intervieweur la cherchera.",
    ],
    followUps: [
      {
        question: "Quel a été le taux de réponse ?",
        how: "Si tu ne l'as pas sous la main, dis-le franchement et redonne le gain que tu peux prouver : délai divisé, zéro crédit d'enrichissement, benchmark local sur chaque message.",
      },
      {
        question: "En quoi c'est mieux qu'un mailing classique ?",
        how: "Sur le fond : chaque gérant reçoit la part de clics candidats de sa propre zone, pas une moyenne nationale. C'est ce qui n'était pas faisable à la main sur 165 destinataires.",
      },
      {
        question: "Tu as relu les 165 e-mails ?",
        how: "Décris la page de revue compte par compte avant envoi, et enchaîne sur le contrôle qualité qui a intercepté neuf messages faux.",
      },
    ],
    basis: "vecu",
    answer: {
      fr: {
        situation:
          "Sur deux réseaux de franchise de mon book, je voulais une campagne d'approche où chaque gérant reçoit le benchmark de sa propre zone en part de clics candidats. Fait à la main, c'est plusieurs semaines de travail pour une personne.",
        task: "Je devais produire 165 e-mails individuellement personnalisés sans acheter d'enrichissement de données et sans dégrader la qualité.",
        action: [
          "J'ai fait calculer le benchmark zone par zone directement sur la Data Platform, donc chaque e-mail porte les chiffres de sa propre zone et pas une moyenne nationale.",
          "J'ai packagé la chaîne complète en procédure réutilisable, de la récupération des établissements jusqu'à la génération du message.",
          "J'ai vérifié la délivrabilité des adresses en interne au lieu d'acheter des crédits d'enrichissement, ce qui a ramené le coût de sourcing à zéro.",
          "J'ai maintenu la validation humaine en bout de chaîne : l'agent prépare les 165 messages, rien ne part sans mon accord explicite.",
          "J'ai relu une page de revue compte par compte avant tout envoi, pour que la personnalisation reste un avantage et ne devienne pas un risque.",
        ],
        result:
          "165 e-mails individuellement personnalisés sur deux réseaux, produits en quelques jours au lieu de plusieurs semaines, et zéro crédit d'enrichissement payant consommé. La procédure est réutilisable, donc le réseau suivant coûte une fraction du premier.",
        learning:
          "Le vrai gain n'est pas la vitesse de rédaction, c'est que la personnalisation par zone devienne possible à 165 exemplaires. À la main, on se serait résigné à une moyenne nationale, qui ne convainc personne.",
      },
      en: {
        situation:
          "On two franchise networks in my book, I wanted an outreach campaign where each manager receives the benchmark for their own catchment area, in share of candidate clicks. Done by hand, that is several weeks of work for one person.",
        task: "I had to produce 165 individually personalised emails without buying data enrichment and without lowering quality.",
        action: [
          "I had the benchmark computed area by area directly on the Data Platform, so each email carries the numbers of its own area rather than a national average.",
          "I packaged the whole chain into a reusable procedure, from pulling the list of sites through to generating the message.",
          "I checked address deliverability in-house instead of buying enrichment credits, which brought the sourcing cost down to zero.",
          "I kept human validation at the end of the chain: the agent prepares the 165 messages, nothing leaves without my explicit approval.",
          "I reviewed an account by account review page before any send, so that personalisation stays an advantage and does not become a risk.",
        ],
        result:
          "165 individually personalised emails across two networks, produced in a few days instead of several weeks, with zero paid enrichment credits consumed. The procedure is reusable, so the next network costs a fraction of the first.",
        learning:
          "The real gain is not writing speed, it is that per-area personalisation becomes feasible at 165 recipients. By hand you settle for a national average, which convinces nobody.",
      },
    },
    metrics: [
      "165 e-mails individuellement personnalisés sur deux réseaux de franchise",
      "Délai : quelques jours au lieu de plusieurs semaines",
      "Zéro crédit d'enrichissement payant consommé",
      "Un benchmark local de part de clics candidats par établissement, calculé sur la Data Platform",
    ],
    targetSeconds: 100,
  },

  {
    id: "ia-erreur",
    category: "ia",
    difficulty: "moins-classique",
    prompt: {
      fr: "Raconte-moi une fois où tu as repéré une erreur dans un résultat produit par une IA.",
      en: "Tell me about a time you caught an error in an AI-generated output.",
    },
    whatTheyTest: [
      "Si tu vérifies vraiment les sorties, ou si tu fais confiance par défaut.",
      "Si tu corriges la cause ou seulement le symptôme visible.",
      "Si tu mesures la portée du problème avant de conclure.",
      "Si tu sais reconnaître une erreur sans te dédouaner sur l'outil.",
    ],
    traps: [
      "Raconter une faute d'orthographe ou une hallucination grossière : ça ne prouve aucune méthode.",
      "Corriger les cas repérés sans toucher à la règle qui les produit.",
      "Oublier de dire combien de cas étaient potentiellement touchés.",
      "Blâmer le modèle : ici l'erreur venait de la définition de l'indicateur, donc de toi.",
    ],
    followUps: [
      {
        question: "Comment tu l'as repéré ?",
        how: "Nomme le signal exact : une incohérence interne, beaucoup de clics et zéro candidature. Ce n'était pas visible à la lecture du texte, mais dans la donnée sous-jacente.",
      },
      {
        question: "Qu'est-ce que tu as changé pour que ça ne revienne pas ?",
        how: "Deux changements de règle : les candidatures descendent désormais jusqu'au calcul, et un concurrent doit franchir un seuil minimum avant d'être nommé dans un e-mail client.",
      },
      {
        question: "Et si tu ne l'avais pas vu ?",
        how: "Assume-le sans dramatiser : neuf gérants auraient reçu une affirmation fausse sur leur concurrence locale, dont deux avec un concurrent annoncé en position numéro un.",
      },
    ],
    basis: "vecu",
    answer: {
      fr: {
        situation:
          "Dans cette campagne, le pipeline désignait l'employeur le plus populaire de chaque zone à partir des clics candidats seuls. À Strasbourg, une marketplace ressortait première avec 1 154 clics et zéro candidature.",
        task: "Je devais comprendre pourquoi un acteur sans aucune candidature mesurable arrivait en tête, avant d'envoyer quoi que ce soit à un client.",
        action: [
          "J'ai ouvert le cas : cette marketplace renvoie les candidats vers son propre site, donc rien n'est mesurable chez nous, et un classement sur les clics seuls la faisait mécaniquement gagner.",
          "J'ai mesuré la portée avant de corriger : neuf e-mails allaient affirmer à des gérants qu'un concurrent dominait leur zone alors qu'il n'y captait aucune candidature, dont deux en position numéro un.",
          "J'ai vérifié les 114 paires zone-concurrent du réseau au lieu de me contenter du cas que j'avais repéré.",
          "J'ai corrigé la cause et non les neuf cas : les candidatures descendent désormais jusqu'au calcul, et un concurrent doit franchir un seuil minimum avant d'être nommé dans un e-mail.",
          "J'ai relancé le contrôle sur 298 paires après correction, zéro anomalie, et c'est seulement ensuite que j'ai autorisé l'envoi.",
        ],
        result:
          "Aucun des neuf e-mails faux n'est parti, et le correctif protège toutes les campagnes suivantes puisqu'il est dans la règle de calcul et pas dans une relecture. Sur un contrôle voisin, dix agents lancés en parallèle ont vérifié 181 noms d'établissements contre les sources officielles et détecté onze noms faux avant qu'ils n'arrivent chez un client.",
        learning:
          "Une sortie d'IA devient dangereuse quand elle est plausible, pas quand elle est absurde. Le signal ici était une incohérence interne, beaucoup de clics et zéro candidature, invisible à la lecture du texte.",
      },
      en: {
        situation:
          "In that campaign, the pipeline was naming the most popular employer in each area from candidate clicks alone. In Strasbourg a marketplace came out first with 1,154 clicks and zero applications.",
        task: "I had to understand why a player with no measurable applications ranked first, before anything went out to a client.",
        action: [
          "I opened the case: that marketplace redirects candidates to its own site, so nothing is measurable on our side, and ranking on clicks alone made it win mechanically.",
          "I sized the problem before fixing it: nine emails were about to tell managers that a competitor dominated their area when it captured no applications there, two of them naming that competitor in first position.",
          "I checked all 114 area and competitor pairs in the network rather than settling for the single case I had spotted.",
          "I fixed the cause rather than the nine cases: applications now flow all the way into the calculation, and a competitor must clear a minimum threshold before being named in an email.",
          "I reran the check on 298 pairs after the fix, found zero anomalies, and only then approved the send.",
        ],
        result:
          "None of the nine incorrect emails went out, and the fix protects every later campaign because it sits in the calculation rule rather than in a proofread. On a neighbouring check, ten agents run in parallel verified 181 site names against official sources and caught eleven wrong names before they reached a client.",
        learning:
          "An AI output becomes dangerous when it is plausible, not when it is absurd. The signal here was an internal inconsistency, many clicks and zero applications, invisible when reading the text.",
      },
    },
    metrics: [
      "Strasbourg : une marketplace première avec 1 154 clics et zéro candidature",
      "Neuf e-mails faux interceptés, dont deux annonçant ce concurrent en position numéro un",
      "114 paires zone-concurrent vérifiées, puis 298 paires revérifiées après correction, zéro anomalie",
      "181 noms d'établissements vérifiés par dix agents en parallèle, onze noms faux détectés",
    ],
    targetSeconds: 110,
  },

  {
    id: "ia-metier",
    category: "ia",
    difficulty: "moins-classique",
    prompt: {
      fr: "Comment l'IA va-t-elle changer le métier de commercial ?",
      en: "How will AI change the sales job?",
    },
    whatTheyTest: [
      "Si ton opinion s'appuie sur ta pratique ou sur des articles que tu as lus.",
      "Si tu vois le déplacement de la valeur et pas seulement le gain de temps.",
      "Si tu es lucide sur les risques sans être défaitiste.",
      "Si tu relies ta réponse à ce que vivent les annonceurs, pas seulement les vendeurs.",
    ],
    traps: [
      "Faire de la prospective générale : personne ne teste ta capacité à prédire, on teste ta pratique.",
      "Dire que l'IA ne remplacera jamais l'humain : c'est une phrase creuse qui ne dit rien de toi.",
      "Oublier le versant risque, alors que c'est là que tu as le plus de matière réelle.",
      "Citer l'IAB sans préciser que c'est une prévision sectorielle de septembre 2026.",
    ],
    followUps: [
      {
        question: "Qu'est-ce qui ne sera jamais automatisé selon toi ?",
        how: "Réponds par le contrôle et l'arbitrage, et appuie-toi sur ton cas : c'est un humain qui a vu l'incohérence entre 1 154 clics et zéro candidature.",
      },
      {
        question: "Ce que tu décris menace-t-il ton propre poste ?",
        how: "Ne te défends pas : dis que la part de production de matière baisse et que la part d'arbitrage monte, et que tu as choisi de te placer du bon côté en construisant les outils.",
      },
      {
        question: "Comment tu convaincs un collègue réticent ?",
        how: "Par le garde-fou avant l'outil : montre que l'agent ne peut rien écrire sans validation. C'est ce qui rend l'essai acceptable sur de la donnée client.",
      },
    ],
    basis: "vecu",
    answer: {
      fr: {
        situation:
          "J'ai audité mon propre poste de travail après plusieurs mois d'usage intensif. J'y ai trouvé 24 000 tokens de contexte fixe chargés avant chaque requête et 549 outils connectés pour 165 réellement utilisés.",
        task: "Je voulais répondre à cette question depuis ma pratique mesurée plutôt que depuis des prédictions générales.",
        action: [
          "J'ai constaté que la préparation se compresse : un travail d'analyse de compte qui prenait des heures se produit maintenant à la demande, donc le temps se déplace vers la conversation client.",
          "J'ai constaté que la personnalisation change d'échelle : 165 e-mails portant chacun le benchmark de sa propre zone, ce qui n'était pas arbitrable en temps auparavant.",
          "J'ai constaté que la compétence critique devient le contrôle : c'est en vérifiant 114 puis 298 paires zone-concurrent que j'ai évité d'envoyer neuf affirmations fausses à des clients.",
          "J'ai ramené mes règles permanentes de 4 163 à 2 340 tokens sans rien supprimer, après avoir découvert qu'au-delà de 2 000 à 3 000 tokens l'attention du modèle sur ses propres règles se dégrade, donc une partie de mes garde-fous était déjà ignorée en silence.",
          "J'ai regardé le signal côté marché : l'IAB chiffre en septembre 2026 à 86 % la part des acheteurs qui ont changé ou vont changer leur façon de mesurer à cause de l'IA conversationnelle et des agents. C'est une prévision sectorielle, pas un constat audité.",
        ],
        result:
          "Ma conclusion est que le commercial ne disparaît pas, mais que la part de son temps consacrée à produire de la matière baisse et que celle consacrée à arbitrer et à vérifier monte. Chez moi c'est déjà mesurable : une vingtaine de procédures automatisées, et un contrôle humain obligatoire inscrit dans l'outil.",
        learning:
          "Ceux qui perdront ne sont pas ceux qui n'utilisent pas l'IA, ce sont ceux qui l'utilisent sans dispositif de vérification. La plausibilité n'est pas la vérité, et ma propre découverte sur les règles ignorées en silence en est la meilleure illustration.",
      },
      en: {
        situation:
          "I audited my own workstation after several months of heavy use. I found 24,000 tokens of fixed context loaded before every request and 549 connected tools for 165 actually used.",
        task: "I wanted to answer this question from measured practice rather than from general predictions.",
        action: [
          "I saw preparation compress: account analysis work that used to take hours is now produced on demand, so time shifts towards the client conversation.",
          "I saw personalisation change scale: 165 emails each carrying the benchmark of its own catchment area, which was not affordable in time before.",
          "I saw the critical skill become verification: checking 114 and then 298 area and competitor pairs is what stopped nine false statements reaching clients.",
          "I cut my standing rules from 4,163 to 2,340 tokens without deleting anything, after finding that beyond 2,000 to 3,000 tokens the model's attention to its own rules degrades, so part of my guardrails was already being ignored silently.",
          "I looked at the market signal: in September 2026 the IAB put at 86 percent the share of buyers who have changed or will change how they measure because of conversational AI and agents. That is an industry forecast, not an audited finding.",
        ],
        result:
          "My conclusion is that the salesperson does not disappear, but the share of time spent producing material falls and the share spent arbitrating and verifying rises. In my own work that is already measurable: around twenty automated procedures, and a mandatory human checkpoint written into the tooling.",
        learning:
          "The people who lose will not be the ones who do not use AI, they will be the ones who use it with no verification layer. Plausible is not true, and my own discovery about silently ignored rules is the best illustration of that.",
      },
    },
    metrics: [
      "Audit du poste : 24 000 tokens de contexte fixe, 549 outils connectés pour 165 utilisés",
      "Règles permanentes ramenées de 4 163 à 2 340 tokens, seuil de dégradation observé entre 2 000 et 3 000 tokens",
      "114 puis 298 paires zone-concurrent vérifiées, neuf affirmations fausses évitées",
      "IAB septembre 2026 : 86 % des acheteurs changent leur façon de mesurer (prévision sectorielle)",
    ],
    targetSeconds: 110,
  },

  {
    id: "ia-chez-meta",
    category: "ia",
    difficulty: "piege",
    prompt: {
      fr: "Qu'est-ce que tu apporterais concrètement à notre équipe sur l'IA ?",
      en: "What would you concretely bring to our team on AI?",
    },
    whatTheyTest: [
      "Si tu restes humble face à une entreprise qui construit ces modèles.",
      "Si tu proposes une méthode transposable ou un discours d'expert autoproclamé.",
      "Si tu penses conformité et politique d'usage avant automatisation.",
      "Si tu écoutes avant de proposer, ce qui est exactement le réflexe attendu sur un compte client.",
    ],
    traps: [
      "Venir expliquer l'IA à Meta : c'est le piège principal de la question.",
      "Promettre un plan des 90 premiers jours alors que tu ne connais ni leurs outils ni leur politique d'usage.",
      "Parler modèles et architectures : ce qu'ils achètent, c'est ta méthode de travail commerciale.",
      "Oublier de dire ce que tu n'apportes pas, ce qui est justement ce qui rend le reste crédible.",
    ],
    followUps: [
      {
        question: "Qu'est-ce qui te fait penser que ça se transpose ?",
        how: "Le principe se transpose, pas l'outil : tâche récurrente, procédure packagée, garde-fou qui bloque l'écriture, contrôle de sortie sur échantillon large. Dis-le dans cet ordre.",
      },
      {
        question: "Et si notre politique interne t'interdit ce que tu fais aujourd'hui ?",
        how: "Réponds que c'est le point de départ, pas un obstacle : tu as déjà construit dans un cadre contraint, avec un hook qui bloque toute écriture sur de la donnée client.",
      },
      {
        question: "Tu es développeur ?",
        how: "Sois clair : non, commercial qui a appris à outiller son propre travail. Cite ce que tu as livré, pas ce que tu sais coder.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Ce que tu as construit chez Indeed est réel et vérifiable. En revanche les cinq étapes d'arrivée chez Meta sont inventées, puisque tu ne connais ni leur outillage interne ni leur politique d'usage de l'IA : garde la structure, mais dis explicitement en entretien que tu proposes une méthode et pas un plan validé, et termine en demandant ce qui existe déjà.",
    answer: {
      fr: {
        situation:
          "Chez Indeed, je n'ai pas seulement utilisé l'IA, j'ai construit ce qui permet à une équipe commerciale de s'en servir sur de la donnée client réelle : une vingtaine de procédures réutilisables et des garde-fous qui bloquent toute écriture automatique. Face à une entreprise qui construit ces modèles, je pars du principe que ce que j'apporte est une méthode de travail, pas une expertise technique.",
        task: "Je devais dire honnêtement ce que je peux apporter sans promettre un plan que je ne peux pas encore tenir.",
        action: [
          "Je commencerais par écouter : quels outils internes existent déjà, ce que votre politique autorise sur la donnée annonceur, et ce que l'équipe fait déjà bien.",
          "Je chercherais les tâches récurrentes et chronophages, du type revue de performance de compte ou préparation de revue trimestrielle, parce que c'est là que la procédure réutilisable rapporte le plus.",
          "Je poserais le garde-fou avant l'automatisation : l'agent prépare, un humain valide, aucune écriture automatique sur un budget, une campagne ou un CRM.",
          "Je mettrais en place le contrôle de sortie que j'ai appris à mes dépens : un seuil minimum avant d'affirmer un chiffre à un client, et une vérification sur un échantillon large plutôt que sur le seul cas repéré.",
          "Je partagerais chaque procédure au lieu de la garder, comme je l'ai fait avec mes collègues chez Indeed.",
        ],
        result:
          "Ce que j'apporte concrètement est une méthode déjà éprouvée sur de la donnée client : 165 e-mails personnalisés produits en quelques jours, et neuf affirmations fausses interceptées avant envoi grâce à un contrôle sur 114 puis 298 paires. Ce que je n'apporte pas, c'est un plan tout fait pour Meta, parce que je ne connais pas encore votre outillage ni vos contraintes.",
        learning:
          "La question n'est pas ce que l'IA peut faire, c'est ce qu'on accepte de lui laisser faire sans relecture. C'est cette frontière que je sais poser, et c'est elle qui rend l'adoption possible dans une équipe.",
      },
      en: {
        situation:
          "At Indeed I did not just use AI, I built what lets a sales team use it on real client data: around twenty reusable procedures and guardrails that block any automated write. Facing a company that builds these models, I assume what I bring is a way of working, not technical expertise.",
        task: "I had to say honestly what I can bring without promising a plan I cannot yet stand behind.",
        action: [
          "I would start by listening: which internal tools already exist, what your policy allows on advertiser data, and what the team already does well.",
          "I would look for the recurring, time-consuming tasks, things like account performance reviews or quarterly business review preparation, because that is where a packaged procedure pays back most.",
          "I would put the guardrail in before the automation: the agent prepares, a human approves, no automated write on a budget, a campaign or a CRM.",
          "I would set up the output check I learned the hard way: a minimum threshold before stating a number to a client, and verification across a broad sample rather than just the case you spotted.",
          "I would share every procedure instead of keeping it, as I did with colleagues at Indeed.",
        ],
        result:
          "What I concretely bring is a method already proven on client data: 165 personalised emails produced in a few days, and nine false statements intercepted before sending thanks to a check across 114 and then 298 pairs. What I do not bring is a ready-made plan for Meta, because I do not yet know your tooling or your constraints.",
        learning:
          "The question is not what AI can do, it is what you are willing to let it do unreviewed. Drawing that line is what I know how to do, and it is what makes adoption possible in a team.",
      },
    },
    metrics: [
      "Une vingtaine de procédures réutilisables construites et partagées chez Indeed",
      "Hook de garde-fou bloquant toute écriture : Salesforce, campagne, budget",
      "165 e-mails personnalisés produits en quelques jours, zéro crédit d'enrichissement",
      "Neuf affirmations fausses interceptées, 114 puis 298 paires vérifiées avant envoi",
    ],
    targetSeconds: 100,
  },
];
