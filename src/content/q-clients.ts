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
      "Si tu ouvres ce niveau tôt, ou seulement le jour où le compte est en danger.",
      "Si tu montes avec ton contact ou dans son dos : la seconde option te fait gagner une réunion et perdre le compte.",
      "Si tu apportes une information que ce niveau n'a pas, et si tu sais la dire dans son langage.",
      "Si tu ressors avec une décision datée plutôt qu'avec une bonne impression.",
    ],
    traps: [
      "Confondre celui qui porte le sujet en interne et celui qui tient le budget : c'est le signal négatif le plus repéré.",
      "Monter pour faire un point d'avancement : sans lecture nouvelle, la réunion n'a pas de suite.",
      "Parler produit à une direction financière, qui attend marge, trésorerie et coût du retard.",
      "Entrer sans point de sortie décidé : une réunion dirigeant qui se termine sur une prochaine réunion est perdue.",
    ],
    followUps: [
      {
        question: "Comment tu identifies celui qui tient vraiment le budget ?",
        how: "Dis la question exacte que tu poses à ton contact, qui valide et à quelle période de l'année, puis recoupe avec la donnée du compte. Ne reconstitue pas l'organigramme tout seul.",
      },
      {
        question: "Et si ton contact refuse que tu montes ?",
        how: "Ne force pas. Donne-lui un document qui le grandit devant sa direction et fais-toi inviter par lui. S'il refuse encore, tu viens d'apprendre son poids réel dans la maison.",
      },
      {
        question: "Qu'est-ce que tu dis dans les trois premières minutes ?",
        how: "Pourquoi changer, pourquoi maintenant, pourquoi nous, dans cet ordre. Passe le moins de temps sur le troisième, c'est le plus facile et c'est celui que tout le monde sur-travaille.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Les faits sont réels : Système U et U Emploi dans ton book, passage par les agences Ideuzo et Matière Grise, deal de 438 204 € signé le 18 mai 2026, bookings de 101 986 € en 2023 à 547 277 € en 2026. La chronologie des rendez-vous et le partage des rôles entre agences et enseigne sont reconstitués : vérifie qui était vraiment dans la pièce avant de raconter cette version.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Sur Système U, je travaillais avec les agences Ideuzo et Matière Grise, qui exécutaient les campagnes de recrutement des magasins. Le compte progressait, de 101 986 € de bookings en 2023 à 184 732 € en 2024, mais chaque décision restait à l'échelle d'une campagne.",
        task: "Je devais amener la discussion au niveau qui arbitre un budget d'enseigne, sans court-circuiter les agences par lesquelles je passais.",
        action: [
          "J'ai demandé à mes interlocuteurs agence qui validait le budget côté enseigne et à quel moment de l'année, plutôt que de deviner l'organigramme.",
          "J'ai produit la lecture que ce niveau n'avait pas : la performance de recrutement consolidée sur tout le périmètre, et non magasin par magasin.",
          "J'ai proposé la montée aux agences comme un gain pour elles, avec un document coconstruit et présenté à deux, plutôt que d'écrire directement à l'enseigne.",
          "J'ai cadré la réunion sur trois points : ce que produit le dispositif actuel, ce que produirait un dispositif à l'échelle du réseau, et la décision à prendre avec son ordre de grandeur.",
          "J'ai refusé de sortir sur un accord de principe : calendrier de déploiement daté et point de mesure fixé avant de quitter la salle.",
        ],
        result:
          "Les bookings sont passés de 352 979 € en 2025 à 547 277 € en 2026, dont un deal de 438 204 € signé le 18 mai 2026, le plus gros de mon portefeuille. Il existe désormais un interlocuteur de niveau enseigne qui porte le sujet en interne, donc le compte ne dépend plus d'une seule campagne.",
        learning:
          "On ne monte pas dans une organisation avec un titre, on y monte avec un chiffre que le niveau du dessus n'a pas encore vu. Et on y monte avec son contact.",
      },
      en: {
        situation:
          "On Systeme U I worked with the Ideuzo and Matiere Grise agencies, which ran the stores' recruitment campaigns. The account was growing, from 101,986 EUR of bookings in 2023 to 184,732 EUR in 2024, but every decision stayed at campaign level.",
        task: "I had to take the conversation to the level that arbitrates a brand wide budget, without going around the agencies I worked through.",
        action: [
          "I asked my agency contacts who approved the budget on the brand side and at what point in the year, rather than guessing the org chart.",
          "I produced the reading that level did not have: recruitment performance consolidated across the whole perimeter instead of store by store.",
          "I offered the elevation to the agencies as a win for them, with a jointly built document presented by the two of us, rather than writing to the brand directly.",
          "I framed the meeting on three points: what the current setup delivers, what a network wide setup would deliver, and the decision to take with its order of magnitude.",
          "I refused to leave on an agreement in principle: a dated rollout calendar and a measurement checkpoint were set before we left the room.",
        ],
        result:
          "Bookings went from 352,979 EUR in 2025 to 547,277 EUR in 2026, including a 438,204 EUR deal signed on 18 May 2026, the largest in my book. There is now a brand level counterpart who carries the topic internally, so the account no longer depends on a single campaign.",
        learning:
          "You do not climb an organisation with a title, you climb it with a number the level above has not seen yet. And you climb it with your contact.",
      },
    },
    script: {
      fr: {
        hook: "Je fais monter une relation quand j'ai quelque chose à dire à ce niveau, et je l'ouvre tôt, pas le jour où le compte est en danger.",
        body: [
          "Dès qu'un compte devient structurant, je demande à mon contact qui valide le budget et à quelle période de l'année. Puis j'ouvre deux relations en parallèle, une au budget et une à l'usage. Un sponsor qu'on active quand le deal va mal n'est plus une ancre de relation, c'est un pompier.",
          "Je ne contacte jamais ce niveau dans le dos de mon interlocuteur. Je lui apporte la lecture consolidée de son réseau qu'il n'a pas, et c'est lui qui la présente avec moi. Sur Système U, la relation passait par les agences Ideuzo et Matière Grise, donc la montée vers l'enseigne s'est faite à deux, sur un document coconstruit.",
          "Devant un dirigeant, je garde trois temps, pourquoi changer, pourquoi maintenant, pourquoi nous. Je change de langage selon la fonction : coût du retard et trésorerie pour une direction financière, contribution au revenu pour une direction marketing. Et je n'entre pas sans savoir avec quoi je veux sortir, une décision datée et pas une prochaine réunion.",
        ],
        closing:
          "Sur Système U, les bookings sont passés de 352 979 € en 2025 à 547 277 € en 2026. Je peux détailler cette montée.",
        keyBeats: [
          "Ouvrir tôt, deux portes",
          "Jamais dans le dos du contact",
          "Pourquoi changer, maintenant, nous",
          "Le langage de la fonction",
          "Sortir avec une décision datée",
        ],
      },
      en: {
        hook: "I elevate a relationship when I have something worth saying at that level, and I open it early, not on the day the account is at risk.",
        body: [
          "As soon as an account becomes structural, I ask my contact who approves the budget and at what point in the year. Then I open two relationships in parallel, one on the budget and one on usage. A sponsor activated when the deal is in trouble is no longer a relationship anchor, he is a firefighter.",
          "I never contact that level behind my counterpart's back. I bring him the consolidated reading of his network that he does not have, and he is the one who presents it with me. On Systeme U the relationship ran through the Ideuzo and Matiere Grise agencies, so the move up to the brand was made by the two of us, on a jointly built document.",
          "In front of an executive I keep three steps, why change, why now, why us. I change the language depending on the function: cost of delay and cash for a finance director, contribution to revenue for a marketing director. And I do not walk in without knowing what I want to walk out with, a dated decision rather than another meeting.",
        ],
        closing:
          "On Systeme U, bookings went from 352,979 EUR in 2025 to 547,277 EUR in 2026. I can walk you through how that move happened.",
        keyBeats: [
          "Open early, two doors",
          "Never behind the contact's back",
          "Why change, why now, why us",
          "Speak the function's language",
          "Leave with a dated decision",
        ],
      },
    },
    metrics: [
      "Système U bookings : 101 986 € en 2023, 184 732 € en 2024, 352 979 € en 2025, 547 277 € en 2026",
      "Deal de 438 204 € signé le 18 mai 2026",
      "Agences Ideuzo et Matière Grise",
    ],
    targetSeconds: 86,
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
      "Si tu as une définition vérifiable de la confiance, donc des actes datés et pas des intentions.",
      "Si tu sais dire ce que le produit ne fera pas, y compris quand cela réduit ton budget.",
      "Si tes chiffres portent leur base : un chiffre sans base est la relance la plus facile à poser.",
      "Si la relation tient après un mauvais mois.",
    ],
    traps: [
      "Parler de proximité et de relationnel sans un seul acte concret derrière.",
      "Promettre un résultat que tu ne contrôles pas : la première promesse non tenue annule les six mois d'avant.",
      "Laisser le client découvrir la mauvaise nouvelle : à partir de là, il vérifie tout ce que tu dis.",
      "Faire reposer toute la relation sur une seule personne chez le client.",
    ],
    followUps: [
      {
        question: "Qu'est-ce que tu fais dans les trente premiers jours ?",
        how: "Un engagement petit, daté et tenu, plus une lecture de leur marché qu'ils n'avaient pas. Commence petit et vite, la confiance vient de la répétition et pas de la taille de la promesse.",
      },
      {
        question: "Comment tu réagis quand le résultat n'est pas là ?",
        how: "Tu annonces avant qu'ils ne le voient, avec le diagnostic et l'option corrective. Donne aussi le délai que tu te fixes avant de revenir avec une mesure.",
      },
      {
        question: "Et quand ton interlocuteur change ?",
        how: "Explique que tu réinstalles le même rituel en une réunion, parce que l'historique chiffré du compte existe déjà. S'il te faut un trimestre, c'est que rien n'était écrit.",
      },
    ],
    basis: "vecu",
    basisNote:
      "Vécu. Les deux bornes ADMR demandent une phrase d'explication : 24 K€ est un rythme annualisé depuis 2022 et 253 K€ un rythme annuel sur le réseau complet, pas du revenu encaissé. Si on te pousse, bascule sur ton propre périmètre, 12 K€ en 2022 puis 139 K€ au 5 septembre 2026.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Quand j'ai commencé avec la Fédération ADMR, le réseau dépensait environ 24 K€ par an en rythme 2022 et n'avait aucune raison particulière de me croire. C'est un réseau associatif à fédérations départementales autonomes, donc une confiance à construire à plusieurs endroits à la fois.",
        task: "Je devais devenir l'interlocuteur qu'on rappelle avant d'être celui qui propose un budget plus important.",
        action: [
          "J'ai commencé par un engagement petit et daté plutôt que par une grande promesse : une analyse de leur recrutement livrée à la date annoncée, sans contrepartie.",
          "J'ai imposé une règle sur mes chiffres : chacun porte sa source, sa fenêtre de mesure et son mode de calcul, les ratios se calculent en somme sur somme, et je ne mélange jamais deux sources qui divergent.",
          "J'ai dit ce qui ne marcherait pas chez eux avant qu'ils ne le découvrent, y compris quand cela réduisait le budget que je pouvais proposer.",
          "J'ai installé une revue régulière avec les mêmes indicateurs d'une fois sur l'autre, pour que la discussion porte sur les décisions et non sur la validité des chiffres.",
          "J'ai répliqué ce fonctionnement au niveau des fédérations départementales, pour que la relation ne tienne pas à une seule personne au siège.",
        ],
        result:
          "Le réseau est passé d'environ 24 K€ en rythme 2022 à environ 253 K€ en rythme 2026, et mon périmètre ADMR de 12 K€ en 2022 à 139 K€ au 5 septembre 2026. La relation tient désormais même quand un mois est mauvais, parce que la mesure n'est plus un sujet de débat.",
        learning:
          "Le jour où un client cesse de contester les chiffres est le jour où l'on peut enfin parler de stratégie. Tout le reste vient après.",
      },
      en: {
        situation:
          "When I started with the ADMR federation, the network spent around 24K EUR a year at 2022 run rate and had no particular reason to believe me. It is a non profit home care network with autonomous departmental federations, so trust had to be built in several places at once.",
        task: "I had to become the person they call back before becoming the person who proposes a bigger budget.",
        action: [
          "I started with a small dated commitment rather than a big promise: an analysis of their recruitment delivered on the announced date, with nothing attached.",
          "I enforced a rule on my numbers: each one carries its source, its measurement window and how it was calculated, ratios are computed as sum over sum, and I never mix two diverging sources.",
          "I told them what would not work on their perimeter before they found out, including when that shrank the budget I could propose.",
          "I set up a regular review with the same indicators every time, so the discussion could be about decisions rather than about whether the numbers were valid.",
          "I replicated that way of working at departmental federation level, so the relationship did not rest on one person at head office.",
        ],
        result:
          "The network went from around 24K EUR at 2022 run rate to around 253K EUR at 2026 run rate, and my own ADMR perimeter from 12K EUR in 2022 to 139K EUR as of 5 September 2026. The lasting effect is that the relationship holds even in a bad month, because measurement is no longer up for debate.",
        learning:
          "The day a client stops challenging your numbers is the day you can finally talk strategy. Everything else comes after that.",
      },
    },
    script: {
      fr: {
        hook: "Pour moi, la confiance n'est pas un climat, c'est une suite de promesses petites, datées et vérifiables.",
        body: [
          "Je ne commence pas par une proposition, je commence par un livrable que je tiens : une lecture de leur marché de recrutement, remise à la date annoncée, sans contrepartie. C'est petit exprès. Une promesse tenue à trente jours vaut mieux qu'une promesse ambitieuse à six mois.",
          "Ensuite je rends mes chiffres attaquables. Chacun porte sa source, sa fenêtre de mesure et son mode de calcul, et les ratios se calculent en somme sur somme. Tant qu'un client discute la validité d'un chiffre, il ne discute pas la décision. Chez ADMR, c'est le jour où la mesure a cessé d'être un sujet que nous avons pu parler de stratégie.",
          "Le troisième point est celui qui coûte. Je dis ce qui ne marchera pas chez eux, y compris quand cela réduit le budget que je peux proposer. Et quand un mois est mauvais, je l'annonce avant qu'ils ne le découvrent, avec le diagnostic et l'option corrective. Un client qui apprend une mauvaise nouvelle par son fournisseur arrête de vérifier derrière lui.",
        ],
        closing: "C'est ce qui fait tenir une relation quand le résultat n'est pas là. J'ai un cas ADMR précis si vous voulez le dérouler.",
        keyBeats: [
          "Une promesse petite et datée",
          "Chaque chiffre avec sa base",
          "Dire ce qui ne marchera pas",
          "Annoncer la mauvaise nouvelle en premier",
        ],
      },
      en: {
        hook: "To me trust is not a mood, it is a series of small, dated, verifiable promises.",
        body: [
          "I do not start with a proposal, I start with something I deliver: a reading of their hiring market, handed over on the date I announced, with nothing attached. It is small on purpose. A promise kept in thirty days is worth more than an ambitious promise in six months.",
          "Then I make my numbers challengeable. Each one carries its source, its measurement window and how it was calculated, and ratios are computed as sum over sum. As long as a client is arguing about whether a number is valid, he is not discussing the decision. At ADMR, the day measurement stopped being the subject was the day we could talk strategy.",
          "The third point is the expensive one. I say what will not work on their perimeter, including when that shrinks the budget I can propose. And when a month is bad, I tell them before they find out, with the diagnosis and the corrective option. A client who hears bad news from his supplier stops double checking him.",
        ],
        closing: "That is what holds a relationship together when results are not there. I have a specific ADMR case if you want to go through it.",
        keyBeats: [
          "One small dated promise",
          "Every number with its base",
          "Say what will not work",
          "Deliver the bad news first",
        ],
      },
    },
    metrics: [
      "ADMR : environ 24 K€ en rythme 2022, environ 253 K€ en rythme 2026",
      "Périmètre ADMR : 12 K€ en 2022, 139 K€ au 5 septembre 2026",
      "Fédération ADMR : 164 859 € sur 12 mois dans le book",
    ],
    targetSeconds: 84,
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
      "Si tu as réellement fait changer d'avis un client, et si tu as mesuré l'effet du changement.",
      "Si tu t'appuies sur sa donnée à lui plutôt que sur une conviction de vendeur.",
      "Si tu offres une façon de te tromper : un test avec un critère d'arrêt écrit avant de démarrer.",
      "Si tu protèges la position interne de ton interlocuteur pendant que tu le contredis.",
    ],
    traps: [
      "Raconter une histoire où tu avais raison depuis le début : aucune décision difficile n'y est visible.",
      "Gagner l'argument sans obtenir la décision : on attend un changement de comportement, pas un débat gagné.",
      "Ne pas dire ce que tu aurais fait si le test avait échoué.",
      "Oublier que l'inverse de ce qu'il demande peut le mettre en difficulté devant sa propre direction.",
    ],
    followUps: [
      {
        question: "Et s'il avait refusé quand même ?",
        how: "Tu exécutes sa décision, tu poses la mesure et tu fixes la date de revue. Avoir raison plus tard ne sert à rien si rien n'a été instrumenté au départ.",
      },
      {
        question: "Qu'est-ce qui a fait basculer la décision ?",
        how: "Nomme le moment exact, en général un chiffre sur son propre périmètre qui contredit son intuition, jamais ton argumentaire.",
      },
      {
        question: "Qu'est-ce que ta mesure ne prouvait pas ?",
        how: "Dis-le toi-même, la saisonnalité du métier par exemple. Annoncer l'angle mort de ta mesure est ce qui rend crédible tout le reste.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le compte est réel : Groupe Saint-Gatien, 129 406 € sur douze mois, une centaine de cliniques et d'hôpitaux privés, et tu produis bien des audits par établissement. La demande initiale, le périmètre du test et son critère de succès sont reconstitués. Avant l'entretien, remplace le résultat du test par le chiffre réel que tu peux montrer, sinon reprends la structure avec un autre arbitrage vécu.",
    answer: {
      fr: {
        situation:
          "Le Groupe Saint-Gatien regroupe une centaine de cliniques et d'hôpitaux privés et pèse 129 406 € sur douze mois dans mon portefeuille. Le client voulait répartir son budget de façon homogène entre les établissements, pour que personne ne se sente lésé.",
        task: "Je devais obtenir l'inverse, concentrer la dépense sur moins d'établissements, sans mettre mon interlocuteur en difficulté devant ses directeurs.",
        action: [
          "J'ai refusé de répondre par une recommandation générale et j'ai construit un audit sur leur propre périmètre, établissement par établissement, avec la tension de recrutement par métier et par zone.",
          "J'ai choisi de demander moins de sites plutôt qu'un budget plus élevé, parce que c'est ce qui désarme le soupçon de vente additionnelle : une dizaine d'établissements critiques par mois au lieu de cent.",
          "J'ai transformé le désaccord en test plutôt qu'en argumentaire : trois cliniques sur le même intitulé de poste soignant, une durée fixée, un critère de succès écrit avant de démarrer.",
          "J'ai annoncé moi-même l'angle mort de la mesure, la saisonnalité du métier, pour qu'on ne me l'oppose pas à la fin.",
          "Je me suis engagé à revenir à l'ancienne répartition si le critère n'était pas atteint, et j'ai préparé mon interlocuteur à défendre le choix avec la lecture par établissement.",
        ],
        result:
          "Le critère a été atteint sur le périmètre test et l'allocation se discute maintenant à partir de la tension mesurée, pas de l'égalité de traitement. Le compte est resté dans les sept réseaux qui font 84 % de mon revenu, et la revue d'allocation est devenue un rendez-vous régulier.",
        learning:
          "Un client ne change pas d'avis parce qu'on a raison, il change d'avis quand on lui donne un moyen peu risqué de vérifier. Depuis, je n'ouvre plus un désaccord d'allocation sans critère d'arrêt écrit à l'avance.",
      },
      en: {
        situation:
          "Groupe Saint-Gatien brings together around a hundred private clinics and hospitals and represents 129,406 EUR over twelve months in my book. The client wanted to spread budget evenly across sites so that nobody felt short changed.",
        task: "I had to get the opposite, concentrating spend on fewer sites, without putting my counterpart in a difficult position in front of his site directors.",
        action: [
          "I refused to answer with a generic recommendation and built an audit on their own perimeter, site by site, with hiring tension by role and by area.",
          "I chose to ask for fewer sites rather than a bigger budget, because that is what disarms the suspicion of an upsell: around ten critical sites a month instead of a hundred.",
          "I turned the disagreement into a test rather than a pitch: three clinics on the same care job title, a fixed duration, and a success criterion written before we started.",
          "I flagged the blind spot of the measurement myself, the seasonality of that job, so it could not be used against me at the end.",
          "I committed to reverting to the old split if the criterion was not met, and I prepared my counterpart to defend the choice with the site by site reading.",
        ],
        result:
          "The criterion was met on the test perimeter, and allocation is now discussed from measured hiring tension rather than from equal treatment. The account stayed among the seven networks that make 84% of my revenue, and the allocation review became a recurring meeting.",
        learning:
          "A client does not change his mind because you are right, he changes it when you give him a low risk way to check. Since then I do not open an allocation disagreement without a stop criterion written upfront.",
      },
    },
    metrics: [
      "Groupe Saint-Gatien : 129 406 € sur 12 mois, une centaine de cliniques et hôpitaux privés",
      "7 réseaux = 84 % du book",
    ],
    targetSeconds: 101,
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
      "Si tu as un ordre du jour fixe, donc si tu en as vraiment animé.",
      "Si tu sais dire ce que tu coupes quand la réunion déborde.",
      "Si tu maîtrises assez tes chiffres pour tenir la contradiction en direct.",
    ],
    traps: [
      "Ouvrir sur le produit plutôt que sur l'objectif de recrutement du client.",
      "Dérouler quarante pages de reporting : tu passes en justification et tu perds la main.",
      "Montrer un chiffre dont tu ignores la fenêtre de mesure : une contestation gagnée par le client et la réunion bascule.",
      "Terminer sans étape datée ni responsable nommé de chaque côté.",
    ],
    followUps: [
      {
        question: "Que fais-tu si le trimestre est mauvais ?",
        how: "Tu ouvres dessus, diagnostic par couche puis action corrective. Une revue qui garde la mauvaise nouvelle pour la fin se paye à la revue suivante.",
      },
      {
        question: "Qui doit être dans la salle ?",
        how: "Celui qui exécute et celui qui arbitre le budget. Sans le second, tu fais un point d'avancement et tu le sais dès l'invitation.",
      },
      {
        question: "Comment tu prépares sans y passer deux jours ?",
        how: "Parle de tes routines d'analyse de compte : la production du matériel est outillée, ton temps va à l'interprétation et aux décisions à proposer.",
      },
    ],
    basis: "vecu",
    basisNote:
      "Vécu. Attention au chiffre de croissance : le brut est +46,6 % mais il mélange croissance réelle et réassignations de comptes, donc cite le +38 % à périmètre constant. Ne présente pas la revue comme la cause de cette croissance, seulement comme le cadre dans lequel les décisions ont été prises.",
    format: "script",
    answer: {
      fr: {
        situation:
          "À mes débuts sur le book DCA, je tenais entre 60 et 80 démonstrations produit et revues de performance par mois. J'ai vite vu la différence entre les revues qui débouchaient sur une décision et celles qui finissaient par un remerciement poli.",
        task: "Je devais faire de la revue un moment de décision, et pouvoir la répéter à cette fréquence sans y passer mes journées.",
        action: [
          "Je fixe l'objectif de recrutement du client avant de parler de performance : combien de postes, sur quels métiers, dans quel délai, sinon la suite n'a pas de référence.",
          "Je lis le compte toujours dans le même ordre, la saisonnalité, la fiabilité de la mesure, la forme de la dépense, la santé de la diffusion, et les chiffres de performance en dernier.",
          "Je mets chaque chiffre avec sa source et sa fenêtre de mesure, et je calcule les ratios en somme sur somme pour qu'aucune moyenne de moyennes ne rende le résultat contestable.",
          "Quand le temps manque, je coupe le constat historique et la comparaison de marché, jamais les décisions ni les prochaines étapes.",
          "Je termine par deux ou trois étapes datées avec un responsable nommé de chaque côté, et j'ouvre la revue suivante exactement dessus.",
        ],
        result:
          "Ce format a accompagné une croissance de 38 % à périmètre constant sur janvier à septembre 2026 contre 2025, et des atterrissages à 108 % au Q1 et 133 % au Q2 2026. L'effet durable est que les décisions se prennent en réunion, donc les comptes majeurs avancent au rythme des revues et pas au rythme des incidents.",
        learning:
          "Une revue se juge à ce qui change après. La meilleure preuve qu'elle a fonctionné est de pouvoir ouvrir la suivante sur les décisions de la fois d'avant.",
      },
      en: {
        situation:
          "Early on the DCA book I ran 60 to 80 product demos and performance reviews a month. I quickly saw the difference between reviews that produced a decision and reviews that ended with a polite thank you.",
        task: "I had to turn the review into a decision moment, and make it repeatable at that frequency without spending my days on it.",
        action: [
          "I set the client's hiring objective before discussing performance: how many roles, in which jobs, by when, otherwise nothing that follows has a reference point.",
          "I read the account in the same fixed order every time: seasonality, how far the measurement can be trusted, the shape of the spend, delivery health, and the performance numbers last.",
          "I attach to every figure its source and its measurement window, and I compute ratios as sum over sum so that no average of averages makes the result contestable.",
          "When time runs short I cut the historical findings and the market comparison, never the decisions or the next steps.",
          "I close on two or three dated steps with a named owner on each side, and I open the following review on exactly those.",
        ],
        result:
          "That format supported 38% like for like growth from January to September 2026 versus 2025, with landings at 108% in Q1 and 133% in Q2 2026. The lasting effect is that decisions happen in the meeting, so major accounts move at the pace of reviews rather than at the pace of incidents.",
        learning:
          "A review is judged by what changes afterwards. The best proof it worked is being able to open the next one on the decisions taken in the previous one.",
      },
    },
    script: {
      fr: {
        hook: "Une revue se juge à ce qui change après, donc je la construis à l'envers, à partir des décisions que je veux voir prises.",
        body: [
          "J'ouvre sur l'objectif de recrutement, jamais sur la performance : combien de postes, sur quels métiers, dans quel délai. Ensuite je lis le compte dans un ordre fixe, la saisonnalité, la fiabilité de la mesure, la forme de la dépense, la santé de la diffusion, et les chiffres en dernier. Le même ordre à chaque fois fait gagner dix minutes.",
          "Deux personnes doivent être là, celle qui exécute et celle qui arbitre le budget. Sans la seconde, c'est un point d'avancement. Et quand un client me dit qu'il ne peut pas prouver que ça marche, je ne sors pas mon reporting : je l'aide à monter sa propre mesure sur un périmètre isolé. Un chiffre qu'il a fabriqué, il ne le conteste pas.",
          "Une revue déborde presque toujours. Quand il reste vingt minutes, je coupe le constat historique et la comparaison de marché, je garde l'écart à l'objectif et les deux décisions à prendre. Je ne coupe jamais la fin, deux ou trois étapes datées avec un responsable nommé de chaque côté.",
        ],
        closing: "C'est le format que j'ai tenu à 60 à 80 revues par mois. Je peux dérouler l'ordre du jour d'un compte précis.",
        keyBeats: [
          "L'objectif avant la performance",
          "Toujours le même ordre de lecture",
          "L'arbitre du budget dans la salle",
          "Couper le constat, jamais les décisions",
        ],
      },
      en: {
        hook: "A review is judged by what changes afterwards, so I build it backwards, from the decisions I want taken.",
        body: [
          "I open on the hiring objective, never on performance: how many roles, in which jobs, by when. Then I read the account in a fixed order, seasonality, how far the measurement can be trusted, the shape of the spend, delivery health, and the numbers last. Keeping the same order every time saves ten minutes.",
          "Two people have to be there, the one who executes and the one who arbitrates the budget. Without the second it is a progress update. And when a client tells me he cannot prove it works, I do not pull out my reporting: I help him build his own measurement on an isolated perimeter. A number he built himself is a number he will not contest.",
          "A review almost always overruns. When twenty minutes are left, I cut the historical findings and the market comparison, and I keep the gap to the objective and the two decisions to take. I never cut the ending, two or three dated steps with a named owner on each side.",
        ],
        closing: "That is the format I ran at 60 to 80 reviews a month. I can walk through the actual agenda of one account.",
        keyBeats: [
          "Objective before performance",
          "Same reading order every time",
          "Budget owner in the room",
          "Cut the findings, never the decisions",
        ],
      },
    },
    metrics: [
      "60 à 80 démos et revues de performance par mois",
      "+38 % à périmètre constant janvier à septembre 2026 contre 2025",
      "108 % au Q1 2026, 133 % au Q2 2026",
    ],
    targetSeconds: 87,
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
      "Si tu connais les signaux avancés de perte, et si tu sais qu'un volume qui baisse arrive trop tard.",
      "Si tu as un critère explicite pour arrêter d'investir, pas seulement pour relancer.",
      "Si tu ouvres une autre porte sans court-circuiter ton contact.",
    ],
    traps: [
      "Relancer six fois avec le même message : c'est l'erreur la plus courante et la plus visible.",
      "Dramatiser en interne avant d'avoir vérifié le plus simple, un interlocuteur parti de l'entreprise.",
      "L'ultimatum déguisé, dois-je fermer votre dossier : quelques réponses de plus, la relation en moins.",
      "Garder le compte au forecast pour ne pas afficher un trou : c'est exactement ce que la question teste.",
    ],
    followUps: [
      {
        question: "Au bout de combien de temps tu considères le compte comme perdu ?",
        how: "Donne une règle et tiens-la : deux tentatives de nature différente sans réponse, sortie du forecast, passage en couverture à l'échelle. Une règle vaut mieux qu'un espoir.",
      },
      {
        question: "Qu'est-ce que tu mets dans le message qui débloque ?",
        how: "Une information courte et utile sur leur marché, sans demande de rendez-vous. Le silence se casse avec de la valeur, pas avec une relance de plus.",
      },
      {
        question: "Et si un concurrent a pris la place ?",
        how: "Tu le demandes franchement, tu écoutes ce qui a manqué, et tu poses un point de contact daté. Une perte assumée se regagne, une perte niée non.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Aucun épisode de compte silencieux n'est documenté dans ta banque de faits : c'est un canevas. Avant l'entretien, retrouve un vrai cas de ton book et remplace le nom, la cause réelle du silence, la date de reprise de contact et le montant en jeu. La méthode en cinq temps est solide, mais ne cite aucun chiffre inventé.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Un réseau du haut de mon portefeuille a cessé de répondre pendant deux mois après une période de collaboration normale. Aucune alerte, aucun conflit, simplement plus de réponse à mes messages ni à mes appels.",
        task: "Je devais comprendre la cause du silence avant de décider s'il fallait relancer, changer d'interlocuteur ou sortir le compte de mon forecast.",
        action: [
          "J'ai regardé la donnée du compte avant ma boîte d'envoi, publication, dépense, arrivées et départs de contacts, pour dater le moment où le rythme a changé.",
          "J'ai vérifié l'hypothèse la plus simple d'abord, un interlocuteur parti ou changé de poste, ce qui explique la majorité des silences.",
          "J'ai changé la nature du message au lieu de répéter le même : une information courte et utile sur leur marché de recrutement, sans demande de rendez-vous.",
          "J'ai ouvert une deuxième porte à un autre niveau en le disant à mon contact initial, et j'ai sollicité un relais interne qui connaissait déjà le compte.",
          "J'ai posé ma limite avant d'avoir la réponse : deux tentatives de nature différente sans retour, le compte sort du forecast et passe en couverture à l'échelle.",
        ],
        result:
          "Le contact a repris dans le mois et le compte est revenu dans un cycle de revue régulier, avec un forecast assaini entre temps parce que je n'avais pas maintenu artificiellement une opportunité. La règle est restée et je l'applique partout depuis.",
        learning:
          "Le silence est une information, pas un échec personnel. Ce qui coûte cher n'est pas de perdre le contact, c'est de garder au forecast un compte qui ne répond plus.",
      },
      en: {
        situation:
          "A network at the top of my book stopped replying for two months after a normal period of collaboration. No alert, no conflict, simply no more answers to my emails or my calls.",
        task: "I had to understand the cause of the silence before deciding whether to follow up, change counterpart, or take the account out of my forecast.",
        action: [
          "I looked at the account data before my sent folder, posting, spend, contacts arriving and leaving, to date the moment the rhythm changed.",
          "I checked the simplest hypothesis first, a contact who had left or changed roles, which explains most silences.",
          "I changed the nature of the message instead of repeating the same one: something short and useful about their hiring market, with no meeting request.",
          "I opened a second door at another level while telling my original contact, and I asked an internal colleague who already knew the account to relay.",
          "I set my limit before I had the answer: two attempts of a different nature with no reply, and the account leaves the forecast and moves to scaled coverage.",
        ],
        result:
          "Contact resumed within the month and the account went back into a regular review cycle, with a cleaner forecast in the meantime because I had not artificially kept an opportunity alive. The rule stayed, and I have applied it everywhere since.",
        learning:
          "Silence is information, not a personal failure. What costs you is not losing contact, it is keeping an unresponsive account in your forecast.",
      },
    },
    script: {
      fr: {
        hook: "Deux mois de silence, ce n'est pas un problème de relance, c'est un signal que j'ai lu trop tard.",
        body: [
          "Les signes précurseurs sont toujours les mêmes : une réunion décalée deux fois, des réponses qui passent de deux heures à six jours, une baisse d'usage sur quinze jours, un nouvel interlocuteur qui apparaît sans être présenté. La dépense qui baisse arrive après, c'est un indicateur tardif. Donc je commence par la donnée du compte et je date le moment où le rythme a changé.",
          "Je teste ensuite l'hypothèse la plus simple, un contact parti ou changé de poste, qui explique la majorité des silences. Puis je change la nature du message au lieu de le répéter : une information courte et utile sur leur marché, sans demande de rendez-vous. Et j'ouvre une deuxième porte en le disant à mon contact initial.",
          "Le point dur est de savoir quand arrêter d'investir. Ma règle : deux tentatives de nature différente sans réponse, le compte sort du forecast et passe en couverture à l'échelle. Il reste dans mon suivi, il ne prend plus mes semaines. Et s'il redevient joignable, je ne reviens pas avec une offre d'essai, mais avec un périmètre mesurable et une durée.",
        ],
        closing: "Le coût réel n'est pas le compte silencieux, c'est la place qu'il garde dans un forecast. Dites-moi si vous préférez un cas concret.",
        keyBeats: [
          "Les signaux avancés, pas le volume",
          "Vérifier le plus simple d'abord",
          "Changer la nature, pas la fréquence",
          "Deux tentatives, puis sortie du forecast",
        ],
      },
      en: {
        hook: "Two months of silence is not a follow up problem, it is a signal I read too late.",
        body: [
          "The early signs are always the same: a meeting pushed back twice, replies that go from two hours to six days, usage dropping over a fortnight, a new contact appearing without an introduction. Spend going down comes after all of that, it is a lagging indicator. So I start with the account data and I date the moment the rhythm changed.",
          "Then I test the simplest hypothesis, a contact who left or changed roles, which explains most silences. After that I change the nature of the message instead of repeating it: something short and useful about their market, with no meeting request. And I open a second door while telling my original contact.",
          "The hard part is knowing when to stop investing. My rule: two attempts of a different nature with no answer, and the account leaves the forecast and moves to scaled coverage. It stays in my tracking, it stops taking my weeks. And if it becomes reachable again, I do not come back with a trial offer, but with a measurable perimeter and a duration.",
        ],
        closing: "The real cost is not the silent account, it is the space it keeps in a forecast. Tell me if you would rather have a concrete case.",
        keyBeats: [
          "Early signals, not volume",
          "Check the simplest cause first",
          "Change the nature, not the frequency",
          "Two attempts, then out of the forecast",
        ],
      },
    },
    metrics: [
      "Règle personnelle : sortie du forecast après deux tentatives de nature différente sans réponse",
    ],
    targetSeconds: 90,
  },
];
