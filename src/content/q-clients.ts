import type { Question } from "../types";

export const qClients: Question[] = [
  {
    id: "client-relation-haute",
    category: "clients",
    difficulty: "moins-classique",
    prompt: {
      fr: "Comment fais-tu remonter une relation client au bon niveau hiérarchique ?",
      en: "How do you elevate a client relationship to the right level of seniority?",
    },
    whatTheyTest: [
      "Si tu sais qui décide vraiment du budget, au-delà de ton contact quotidien.",
      "Si tu montes sans court-circuiter ton interlocuteur, donc sans brûler la relation qui te fait vivre.",
      "Si tu as quelque chose à dire à ce niveau : un dirigeant ne reçoit pas pour un point d'avancement.",
      "Si tu transformes l'accès obtenu en engagement chiffré et pas en simple rencontre.",
    ],
    traps: [
      "Écrire directement au dirigeant en doublant ton contact : tu gagnes un rendez-vous et tu perds l'allié interne.",
      "Monter sans nouvelle information : si tu n'apportes pas une lecture qu'il n'a pas, la réunion n'aura pas de suite.",
      "Confondre le titre et le pouvoir de décision, surtout dans un réseau où le siège ne décide pas pour les établissements.",
      "Ne pas préparer la question d'argent : à ce niveau, on attend un ordre de grandeur, pas une brochure.",
    ],
    followUps: [
      {
        question: "Comment tu as identifié le vrai décideur ?",
        how: "Décris la question que tu poses à ton contact, qui valide le budget et à quel moment de l'année, puis recoupe avec ce que tu vois dans les données du compte.",
      },
      {
        question: "Qu'est-ce que tu as mis dans le premier échange avec ce niveau ?",
        how: "Un constat chiffré sur son périmètre, une comparaison avec son marché, une décision à prendre. Trois choses, pas plus.",
      },
      {
        question: "Comment tu as gardé ton contact opérationnel dans la boucle ?",
        how: "Montre que tu l'as fait co-construire et présenter avec toi. La montée doit le grandir, sinon elle se retourne contre toi.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Les faits sont réels : Système U et U Emploi dans le book, passage par les agences Ideuzo et Matière Grise, deal de 438 204 € signé le 18 mai 2026, bookings de 101 986 € en 2023 à 547 277 € en 2026. La chronologie des rendez-vous et la répartition des rôles entre agences et enseigne sont reconstituées : vérifie qui était vraiment dans la pièce avant de raconter cette version.",
    answer: {
      fr: {
        situation:
          "Sur Système U, je travaillais avec les agences Ideuzo et Matière Grise, qui exécutaient les campagnes de recrutement des magasins. Le compte progressait bien, de 101 986 € de bookings en 2023 à 184 732 € en 2024, mais chaque décision restait à l'échelle d'une campagne, jamais à l'échelle de l'enseigne.",
        task: "Je devais faire passer la discussion d'un sujet d'exécution à un sujet de politique de recrutement du réseau, donc l'amener au niveau qui arbitre un budget annuel.",
        action: [
          "J'ai d'abord demandé à mes interlocuteurs agence qui validait le budget côté enseigne et à quel moment de l'année, au lieu de deviner l'organigramme.",
          "J'ai construit une lecture que personne n'avait à ce niveau : la performance du recrutement consolidée sur l'ensemble du périmètre, et pas magasin par magasin.",
          "J'ai proposé la montée à mes contacts agence comme un gain pour eux, avec une présentation coconstruite et présentée à deux, jamais un contact dans leur dos.",
          "J'ai cadré la réunion sur trois points seulement : ce que produit le dispositif actuel, ce que produirait un dispositif à l'échelle du réseau, et la décision à prendre avec son ordre de grandeur.",
          "J'ai transformé l'accord de principe en engagement daté, avec un calendrier de déploiement et un point de mesure à échéance fixe.",
        ],
        result:
          "Le compte est passé de 352 979 € de bookings en 2025 à 547 277 € en 2026, avec un deal de 438 204 € signé le 18 mai 2026, mon plus gros. L'effet durable est qu'il existe désormais un interlocuteur de niveau réseau qui porte le sujet en interne, donc la relation ne dépend plus d'une seule personne ni d'une seule campagne.",
        learning:
          "On ne monte pas dans une organisation avec un titre, on y monte avec un chiffre que le niveau du dessus n'a pas encore vu. Et on y monte avec son contact, jamais contre lui.",
      },
      en: {
        situation:
          "On Systeme U I worked with the Ideuzo and Matiere Grise agencies, which ran the stores' recruitment campaigns. The account was growing, from 101,986 EUR of bookings in 2023 to 184,732 EUR in 2024, but every decision stayed at campaign level, never at retail brand level.",
        task: "I had to move the conversation from execution to the network's hiring policy, which meant taking it to the level that approves an annual budget.",
        action: [
          "I first asked my agency contacts who approved the budget on the brand side and at what point in the year, instead of guessing the org chart.",
          "I built a reading nobody had at that level: recruitment performance consolidated across the whole perimeter rather than store by store.",
          "I pitched the elevation to my agency contacts as a win for them, with a jointly built deck presented by the two of us, never a contact behind their back.",
          "I framed the meeting on three points only: what the current setup delivers, what a network wide setup would deliver, and the decision to take with its order of magnitude.",
          "I turned the agreement in principle into a dated commitment, with a rollout calendar and a measurement checkpoint on a fixed date.",
        ],
        result:
          "The account went from 352,979 EUR of bookings in 2025 to 547,277 EUR in 2026, including a 438,204 EUR deal signed on 18 May 2026, my largest. The lasting effect is that a network level sponsor now carries the topic internally, so the relationship no longer depends on one person or one campaign.",
        learning:
          "You do not climb an organisation with a title, you climb it with a number the level above has not seen yet. And you climb it with your contact, never against them.",
      },
    },
    metrics: [
      "Système U bookings : 101 986 € en 2023, 184 732 € en 2024, 352 979 € en 2025, 547 277 € en 2026",
      "Deal de 438 204 € signé le 18 mai 2026",
      "Agences Ideuzo et Matière Grise",
    ],
    targetSeconds: 115,
  },
  {
    id: "client-confiance",
    category: "clients",
    difficulty: "classique",
    prompt: {
      fr: "Comment construis-tu la confiance avec un nouveau client ?",
      en: "How do you build trust with a new client?",
    },
    whatTheyTest: [
      "Si tu as une définition opérationnelle de la confiance, donc des actes vérifiables et pas des intentions.",
      "Si tu sais dire ce que le produit ne fera pas, ce qui est le test le plus rapide de la crédibilité.",
      "Si tu tiens des promesses petites et datées avant de demander quoi que ce soit de gros.",
      "Si la confiance que tu construis survit à un mauvais mois.",
    ],
    traps: [
      "Parler de relationnel et de proximité sans un seul acte concret derrière.",
      "Promettre un résultat que tu ne contrôles pas : la première promesse non tenue annule les six mois suivants.",
      "Attendre le premier problème pour montrer que tu es fiable, au lieu de l'installer dès le premier livrable.",
      "Oublier la traçabilité des chiffres : un chiffre sans source est une promesse de plus.",
    ],
    followUps: [
      {
        question: "Qu'est-ce que tu fais dans les 30 premiers jours d'une nouvelle relation ?",
        how: "Un engagement petit, daté et tenu, plus une lecture de leur marché qu'ils n'avaient pas. La confiance vient de la répétition, commence donc petit et vite.",
      },
      {
        question: "Comment tu réagis quand le résultat n'est pas au rendez-vous ?",
        how: "Tu annonces avant qu'ils ne le découvrent, avec le diagnostic et l'option corrective. Apprendre une mauvaise nouvelle par son fournisseur, c'est ce qui construit la confiance.",
      },
      {
        question: "Comment tu fais quand le contact change côté client ?",
        how: "Explique que tu réinstalles le même rituel avec le nouveau venu, et que l'historique chiffré du compte te permet de repartir en une réunion plutôt qu'en un trimestre.",
      },
    ],
    basis: "vecu",
    answer: {
      fr: {
        situation:
          "Quand j'ai commencé à travailler avec la Fédération ADMR, le réseau dépensait environ 24 K€ par an en rythme 2022 et n'avait aucune raison particulière de me croire. C'est un réseau associatif de services à la personne, avec des fédérations départementales autonomes, donc une confiance à construire à plusieurs endroits à la fois.",
        task: "Je devais devenir l'interlocuteur qu'on rappelle, avant d'être celui qui propose un budget plus important.",
        action: [
          "J'ai commencé par un engagement petit et daté plutôt que par une grande promesse : une analyse de leur recrutement livrée à la date annoncée, sans condition.",
          "J'ai imposé une règle sur mes chiffres : chaque chiffre que je montre porte sa source, sa fenêtre de mesure et son moteur de calcul, les ratios se calculent en somme sur somme, et je ne mélange jamais deux sources qui divergent.",
          "J'ai dit ce qui ne marcherait pas chez eux avant qu'ils ne le découvrent, y compris quand cela réduisait le budget que je pouvais proposer.",
          "J'ai installé un rituel de revue régulier, avec les mêmes indicateurs d'une fois sur l'autre, pour que la discussion porte sur les décisions et non sur la validité des chiffres.",
          "J'ai répliqué ce fonctionnement au niveau des fédérations départementales, pour que la confiance ne repose pas sur une seule personne au siège.",
        ],
        result:
          "Le réseau est passé d'environ 24 K€ en rythme 2022 à environ 253 K€ en rythme 2026, et mon propre périmètre ADMR est passé de 12 K€ en 2022 à 19 K€, 36 K€, 74 K€ puis 139 K€ au 5 septembre 2026. L'effet durable est que la relation tient même quand un mois est mauvais, parce que la mesure n'est plus un sujet de discussion.",
        learning:
          "La confiance n'est pas un climat, c'est une suite de petites promesses tenues et vérifiables. Le jour où le client cesse de contester tes chiffres, tu peux enfin parler de stratégie.",
      },
      en: {
        situation:
          "When I started working with the ADMR federation, the network spent around 24K EUR a year at 2022 run rate and had no particular reason to believe me. It is a non profit home care network with autonomous departmental federations, so trust had to be built in several places at once.",
        task: "I had to become the person they call back, before becoming the person who proposes a bigger budget.",
        action: [
          "I started with a small dated commitment rather than a big promise: an analysis of their recruitment delivered on the announced date, with no strings attached.",
          "I enforced a rule on my numbers: every figure I show carries its source, its measurement window and its calculation engine, ratios are computed as sum over sum, and I never mix two diverging sources.",
          "I told them what would not work on their perimeter before they found out, including when that shrank the budget I could propose.",
          "I set up a regular review ritual with the same indicators every time, so the discussion could be about decisions rather than about whether the numbers were valid.",
          "I replicated that way of working at departmental federation level, so trust did not rest on a single person at head office.",
        ],
        result:
          "The network went from around 24K EUR at 2022 run rate to around 253K EUR at 2026 run rate, and my own ADMR perimeter grew from 12K EUR in 2022 to 19K, 36K, 74K and then 139K EUR as of 5 September 2026. The lasting effect is that the relationship holds even in a bad month, because measurement is no longer up for debate.",
        learning:
          "Trust is not a mood, it is a series of small kept and verifiable promises. The day a client stops challenging your numbers is the day you can finally talk strategy.",
      },
    },
    metrics: [
      "ADMR : environ 24 K€ en rythme 2022, environ 253 K€ en rythme 2026",
      "Périmètre ADMR : 12 K€ en 2022, 19 K€ en 2023, 36 K€ en 2024, 74 K€ en 2025, 139 K€ au 5 septembre 2026",
      "Fédération ADMR : 164 859 € sur 12 mois dans le book",
    ],
    targetSeconds: 110,
  },
  {
    id: "client-pousser-contre",
    category: "clients",
    difficulty: "moins-classique",
    prompt: {
      fr: "Raconte-moi une fois où tu as convaincu un client de faire l'inverse de ce qu'il voulait.",
      en: "Tell me about a time you convinced a client to do the opposite of what they wanted.",
    },
    whatTheyTest: [
      "Si tu sais contredire un client sans le mettre en position de perdant.",
      "Si tu t'appuies sur sa donnée à lui et pas sur une conviction de vendeur.",
      "Si tu proposes une façon de te tromper, donc un test avec un critère d'arrêt.",
      "Si tu as vérifié après coup que ton conseil était le bon.",
    ],
    traps: [
      "Raconter une histoire où tu avais raison depuis le début : elle sonne faux et elle ne montre aucune méthode.",
      "Gagner l'argument sans obtenir la décision : l'intervieweur attend un changement de comportement, pas un débat gagné.",
      "Ne pas dire ce que tu aurais fait si le test avait échoué.",
      "Oublier le contexte politique interne du client : l'inverse de ce qu'il veut peut le mettre en difficulté devant sa direction.",
    ],
    followUps: [
      {
        question: "Comment tu réagis si le client refuse quand même ?",
        how: "Tu exécutes sa décision, tu instrumentes la mesure, et tu prévois un point de revue daté. Avoir raison trop tard ne sert à rien si la mesure n'a pas été posée.",
      },
      {
        question: "Qu'est-ce qui a fait basculer la décision ?",
        how: "Nomme le moment précis, en général un chiffre sur son propre périmètre qui contredit son intuition, pas ton argumentaire.",
      },
      {
        question: "Comment tu évites que ce soit vécu comme un désaveu ?",
        how: "Fais porter la décision par le client, avec un test à faible risque et une sortie possible. Le but est qu'il gagne, pas que tu aies raison.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le compte est réel : Groupe Saint-Gatien, 129 406 € sur douze mois, une centaine de cliniques et hôpitaux privés, et tu as bien construit des dashboards d'audit client. La demande initiale du client, la négociation et le test de concentration du budget sont reconstitués : ne raconte cette version que si un arbitrage équivalent a réellement eu lieu, sinon reprends la structure avec un vrai cas.",
    answer: {
      fr: {
        situation:
          "Le Groupe Saint-Gatien regroupe une centaine de cliniques et hôpitaux privés et pèse 129 406 € sur douze mois dans mon book. Le réflexe naturel côté client était de répartir le budget de manière homogène entre les établissements, pour que personne ne se sente lésé.",
        task: "Je devais montrer qu'une répartition équitable produisait un résultat médiocre partout, et obtenir un changement d'allocation sans mettre mon interlocuteur en difficulté devant ses directeurs d'établissement.",
        action: [
          "J'ai construit un dashboard d'audit sur leur propre périmètre, établissement par établissement, plutôt que d'arriver avec une recommandation générale.",
          "J'ai montré l'écart de tension par métier et par zone : certains postes se pourvoient sans effort, d'autres restent ouverts quel que soit le budget mis.",
          "J'ai proposé l'inverse de la demande initiale, concentrer la dépense sur les métiers et les établissements réellement en tension, et l'assumer comme un choix d'efficacité, pas comme une punition.",
          "J'ai transformé le désaccord en test : une période d'essai limitée, un critère de succès défini à l'avance, et un engagement à revenir à l'ancienne répartition si le critère n'était pas atteint.",
          "J'ai préparé mon interlocuteur à défendre ce choix en interne, avec une lecture par établissement qu'il pouvait présenter lui-même.",
        ],
        result:
          "Le compte est resté l'un des sept premiers réseaux de mon book, qui pèsent ensemble 84 % du revenu, et l'allocation est désormais discutée à partir de la tension mesurée et non de l'égalité de traitement. L'effet durable est que la revue d'allocation est devenue un rendez-vous régulier, donc la discussion budgétaire ne repart plus de zéro.",
        learning:
          "On ne convainc pas un client en ayant raison, on le convainc en lui donnant un moyen peu risqué de vérifier. Le test avec critère d'arrêt fait plus que n'importe quel argumentaire.",
      },
      en: {
        situation:
          "Groupe Saint-Gatien brings together around a hundred private clinics and hospitals and represents 129,406 EUR over twelve months in my book. The client's natural instinct was to spread budget evenly across sites so nobody felt short changed.",
        task: "I had to show that an even split produced mediocre results everywhere, and get the allocation changed without putting my counterpart in a difficult position in front of his site directors.",
        action: [
          "I built an audit dashboard on their own perimeter, site by site, instead of arriving with a generic recommendation.",
          "I showed the difference in hiring tension by role and by area: some roles fill themselves, others stay open whatever budget you put behind them.",
          "I proposed the opposite of the initial request, concentrating spend on the roles and sites genuinely under tension, and owned it as an efficiency choice rather than a punishment.",
          "I turned the disagreement into a test: a limited trial period, a success criterion defined upfront, and a commitment to revert to the old split if the criterion was not met.",
          "I prepared my counterpart to defend that choice internally, with a site by site reading he could present himself.",
        ],
        result:
          "The account remained one of the seven networks that together make 84% of my book revenue, and allocation is now discussed from measured hiring tension rather than from equal treatment. The lasting effect is that the allocation review became a recurring meeting, so the budget conversation no longer restarts from scratch.",
        learning:
          "You do not convince a client by being right, you convince them by giving them a low risk way to check. A test with a stop criterion does more than any pitch.",
      },
    },
    metrics: [
      "Groupe Saint-Gatien : 129 406 € sur 12 mois, une centaine de cliniques et hôpitaux privés",
      "7 réseaux = 84 % du book",
    ],
    targetSeconds: 110,
  },
  {
    id: "client-business-review",
    category: "clients",
    difficulty: "classique",
    prompt: {
      fr: "Comment structures-tu une revue d'activité client ?",
      en: "How do you structure a client business review?",
    },
    whatTheyTest: [
      "Si ta revue produit des décisions ou seulement un rapport.",
      "Si tu maîtrises assez la donnée pour tenir la contradiction en direct.",
      "Si tu parles le langage du client, recrutement et coût, plutôt que le vocabulaire produit.",
      "Si tu sais faire entrer le bon niveau hiérarchique dans la salle.",
    ],
    traps: [
      "Dérouler quarante slides de reporting : la revue devient un exercice de justification et tu perds la main.",
      "Ouvrir sur le produit plutôt que sur l'objectif de recrutement du client.",
      "Montrer un chiffre dont tu ne connais ni la source ni la fenêtre : une seule contestation gagnée par le client et toute la réunion bascule.",
      "Terminer sans prochaine étape datée avec un responsable nommé.",
    ],
    followUps: [
      {
        question: "Que fais-tu si les résultats du trimestre sont mauvais ?",
        how: "Tu ouvres dessus, tu donnes le diagnostic par couche et l'action corrective. Une revue qui cache le mauvais trimestre se paye à la suivante.",
      },
      {
        question: "Comment tu prépares une revue sans y passer deux jours ?",
        how: "Parle de tes routines automatisées d'analyse de compte : la production du matériel est industrialisée, ton temps va à l'interprétation et aux décisions.",
      },
      {
        question: "Qui doit être dans la salle ?",
        how: "L'opérationnel qui exécute et la personne qui arbitre le budget. Sans le second, tu fais un point d'avancement, pas une revue d'activité.",
      },
    ],
    basis: "vecu",
    answer: {
      fr: {
        situation:
          "À mes débuts sur le book DCA, je tenais entre 60 et 80 démonstrations produit et revues de performance par mois. J'ai vite vu la différence entre les revues qui débouchaient sur une décision et celles qui se terminaient par un remerciement poli.",
        task: "Je devais faire de la revue d'activité un moment de décision, pas un compte rendu, et pouvoir la répéter à cette fréquence sans y passer mes journées.",
        action: [
          "Je fixe l'objectif du client avant de parler de performance : combien de postes à pourvoir, sur quels métiers, dans quel délai, sinon la suite n'a pas de référence.",
          "Je lis le compte toujours dans le même ordre, la forme de l'entreprise et sa saisonnalité, la confiance dans la mesure, la forme de la dépense, la santé de la diffusion, l'approvisionnement créatif, et seulement ensuite les chiffres de performance.",
          "Je mets chaque chiffre avec sa source, sa fenêtre de mesure et son moteur de calcul, et je calcule les ratios en somme sur somme pour qu'aucune moyenne de moyennes ne rende le résultat contestable.",
          "Je réduis la partie constat à l'essentiel et je consacre la deuxième moitié aux décisions : ce qu'on arrête, ce qu'on renforce, ce qu'on teste.",
          "Je termine par deux ou trois prochaines étapes datées, avec un responsable nommé de chaque côté, et je les reprends telles quelles en ouverture de la revue suivante.",
          "J'automatise la production du matériel avec mes routines d'analyse de compte, ce qui me laisse le temps de préparer l'interprétation plutôt que les tableaux.",
        ],
        result:
          "Ce format a accompagné une croissance de 38 % à périmètre constant sur janvier à septembre 2026 contre 2025, et des atterrissages à 108 % au Q1 et 133 % au Q2 2026. L'effet durable est que les décisions se prennent en réunion, donc les comptes majeurs avancent au rythme des revues et pas au rythme des incidents.",
        learning:
          "Une revue d'activité se juge à ce qui change après, pas à la qualité des slides. La meilleure preuve qu'elle a fonctionné, c'est de pouvoir ouvrir la suivante sur les décisions prises la fois d'avant.",
      },
      en: {
        situation:
          "Early on the DCA book I ran 60 to 80 product demos and performance reviews a month. I quickly saw the difference between reviews that produced a decision and reviews that ended with a polite thank you.",
        task: "I had to turn the business review into a decision moment rather than a report, and make it repeatable at that frequency without spending my days on it.",
        action: [
          "I set the client's objective before discussing performance: how many roles to fill, in which jobs, by when, otherwise nothing that follows has a reference point.",
          "I read the account in the same fixed order every time: the shape of the company and its seasonality, trust in the measurement, the shape of the spend, delivery health, creative supply, and only then the performance numbers.",
          "I attach to every figure its source, its measurement window and its calculation engine, and I compute ratios as sum over sum so no average of averages makes the result contestable.",
          "I keep the findings section short and spend the second half on decisions: what we stop, what we reinforce, what we test.",
          "I close with two or three dated next steps, each with a named owner on both sides, and I reopen the following review with exactly those items.",
          "I automate the production of the material with my account analysis routines, which leaves me time to prepare the interpretation rather than the tables.",
        ],
        result:
          "That format supported 38% like for like growth from January to September 2026 versus 2025, with landings at 108% in Q1 and 133% in Q2 2026. The lasting effect is that decisions happen in the meeting, so major accounts move at the pace of reviews rather than at the pace of incidents.",
        learning:
          "A business review is judged by what changes afterwards, not by the quality of the slides. The best proof it worked is being able to open the next one on the decisions taken in the previous one.",
      },
    },
    metrics: [
      "60 à 80 démos et revues de performance par mois",
      "+38 % à périmètre constant janvier à septembre 2026 contre 2025",
      "108 % au Q1 2026, 133 % au Q2 2026",
    ],
    targetSeconds: 115,
  },
  {
    id: "client-relation-froide",
    category: "clients",
    difficulty: "piege",
    prompt: {
      fr: "Un compte important ne te répond plus depuis deux mois. Que fais-tu ?",
      en: "An important account has not replied to you for two months. What do you do?",
    },
    whatTheyTest: [
      "Si tu cherches la cause avant de relancer, ou si tu ajoutes du bruit à du silence.",
      "Si tu utilises les signaux disponibles, activité du compte, changement de contact, appels d'offres, plutôt que ton intuition.",
      "Si tu sais changer de porte d'entrée sans harceler.",
      "Si tu poses une limite : au bout d'un moment, un compte silencieux doit sortir de ton forecast.",
    ],
    traps: [
      "Relancer six fois avec le même message : c'est l'erreur la plus courante et la plus visible.",
      "Dramatiser en interne avant d'avoir vérifié les faits, par exemple un contact simplement parti de l'entreprise.",
      "Donner un ultimatum déguisé, le fameux dois-je fermer votre dossier, qui abîme la relation pour un taux de réponse marginal.",
      "Garder le compte au forecast pour ne pas afficher un trou : c'est ce que le recruteur cherche à détecter.",
    ],
    followUps: [
      {
        question: "Au bout de combien de temps tu considères le compte comme perdu ?",
        how: "Donne une règle claire, par exemple une sortie du forecast à la deuxième relance sans réponse, et un passage en couverture à l'échelle. Une règle vaut mieux qu'un espoir.",
      },
      {
        question: "Qu'est-ce que tu mets dans le message qui débloque ?",
        how: "Une information utile sur leur marché, courte, sans demande de rendez-vous. Le silence se casse avec de la valeur, pas avec une relance.",
      },
      {
        question: "Et si c'est un concurrent qui a pris la place ?",
        how: "Tu le dis franchement, tu demandes ce qui a manqué, et tu gardes un point de contact daté. Une relation perdue proprement se regagne, une relation niée ne revient pas.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Aucun épisode de compte silencieux n'est documenté dans ta banque de faits : c'est un canevas. Avant l'entretien, retrouve un vrai cas dans ton book, remplace le nom du compte, la cause réelle du silence, la date de reprise de contact et le montant en jeu. Garde la méthode en cinq temps, elle est solide, mais ne cite pas de chiffre inventé.",
    answer: {
      fr: {
        situation:
          "Un réseau du haut de mon book, du niveau de ceux qui pèsent plus de 100 K€ par an, a cessé de répondre pendant deux mois après une période de collaboration normale. Aucune alerte, aucun conflit, simplement plus de réponse à mes messages ni à mes appels.",
        task: "Je devais comprendre la cause du silence avant de décider s'il fallait relancer, changer d'interlocuteur ou sortir le compte de mon forecast.",
        action: [
          "J'ai commencé par regarder les données du compte plutôt que ma boîte d'envoi : activité de publication, dépense, arrivée ou départ de contacts, pour savoir si le silence venait d'eux ou d'un changement interne.",
          "J'ai vérifié l'hypothèse la plus simple d'abord, un interlocuteur parti ou changé de poste, ce qui explique la majorité des silences.",
          "J'ai changé la nature du contact au lieu de répéter la même relance : un message court avec une information utile sur leur marché de recrutement, sans demande de rendez-vous.",
          "J'ai ouvert une deuxième porte d'entrée à un autre niveau, en restant transparent avec le contact initial, et j'ai sollicité un relais interne qui avait déjà une relation avec le compte.",
          "J'ai posé ma limite : à la deuxième tentative sans réponse, le compte sort de mon forecast et passe en couverture à l'échelle, sans disparaître de mon suivi.",
        ],
        result:
          "Le contact a repris dans le mois et le compte est retourné dans un cycle de revue régulier, avec un forecast assaini entre temps parce que je n'avais pas maintenu artificiellement une opportunité. L'effet durable est une règle simple que j'applique désormais partout : 2 relances sans réponse, changement de porte d'entrée et sortie du forecast.",
        learning:
          "Le silence est une information, pas un échec personnel. Ce qui coûte cher, ce n'est pas de perdre le contact, c'est de garder au forecast un compte qui ne répond plus.",
      },
      en: {
        situation:
          "A network at the top of my book, of the size that bills over 100K EUR a year, stopped replying for two months after a normal period of collaboration. No alert, no conflict, simply no more answers to my emails or calls.",
        task: "I had to understand the cause of the silence before deciding whether to follow up, change counterpart, or take the account out of my forecast.",
        action: [
          "I started by looking at the account data rather than my sent folder: posting activity, spend, contacts arriving or leaving, to find out whether the silence came from them or from an internal change.",
          "I checked the simplest hypothesis first, a contact who had left or changed roles, which explains most silences.",
          "I changed the nature of the contact instead of repeating the same follow up: a short message with a useful insight on their hiring market, with no meeting request.",
          "I opened a second door at a different level, staying transparent with the original contact, and asked an internal colleague who already knew the account to relay.",
          "I set my limit: after a second attempt with no answer, the account leaves my forecast and moves to scaled coverage, without disappearing from my tracking.",
        ],
        result:
          "Contact resumed within the month and the account went back into a regular review cycle, with a cleaner forecast in the meantime because I had not artificially kept an opportunity alive. The lasting effect is a simple rule I now apply everywhere: 2 follow ups without an answer, change of entry point and removal from the forecast.",
        learning:
          "Silence is information, not a personal failure. What costs you is not losing contact, it is keeping an unresponsive account in your forecast.",
      },
    },
    metrics: [
      "Règle personnelle : sortie du forecast après deux relances sans réponse",
    ],
    targetSeconds: 105,
  },
];
