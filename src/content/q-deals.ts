import type { Question } from "../types";

export const qDeals: Question[] = [
  {
    id: "deal-complexe",
    category: "deals",
    difficulty: "classique",
    priority: true,
    prompt: {
      fr: "Raconte-moi un deal complexe que tu as su gérer.",
      en: "Tell me about a complex deal you managed.",
    },
    whatTheyTest: [
      "Ce que tu appelles complexe : le nombre d'acteurs à aligner, pas la taille du chèque.",
      "Ta part exacte : on compte les verbes à la première personne du singulier.",
      "Un arbitrage visible, deux options pesées et une choisie, sinon le deal passe pour de la chance.",
      "Ce qui est resté reproductible après la signature.",
    ],
    traps: [
      "Raconter le montant plutôt que l'obstacle levé.",
      "Dire « nous » pendant deux minutes : ta contribution devient invisible.",
      "Appeler ce deal un accord annuel, alors que c'est une opportunité unique : la confusion se vérifie en deux questions.",
      "Empiler les acteurs sans dire qui portait le sujet en interne et qui tenait le budget.",
    ],
    followUps: [
      {
        question: "Qu'est-ce qui a failli le faire capoter ?",
        how: "Nomme un risque que tu contrôlais, la dépendance à deux agences pour atteindre le décideur, et dis ce que tu as fait pour le réduire. Pas de mauvaise chance.",
      },
      {
        question: "Qui tenait réellement le budget ?",
        how: "Distingue à voix haute celui qui portait le sujet en interne et celui qui signait. Si c'était la même personne, dis-le, c'est rare.",
      },
      {
        question: "Qu'aurais-tu fait autrement ?",
        how: "Réponds structurel, pas cosmétique : verrouiller la facturation magasin par magasin dès la première réunion, et pas au milieu du cycle.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le montant, la date, les deux agences et la trajectoire du réseau sont exacts. L'ordre des étapes, le passage par le recouvrement et la carte des rôles sont reconstitués : vérifie qui, d'Ideuzo ou de Matière Grise, portait quoi, et remplace le blocage de facturation par celui que tu as réellement levé.",
    answer: {
      fr: {
        situation:
          "Système U, c'est une centrale qui n'achète pas et des magasins indépendants qui décident et paient chacun leur recrutement. Le budget passait en plus par deux agences, Ideuzo et Matière Grise, donc je n'avais aucun accès direct à celui qui signait.",
        task: "Transformer une dépense éclatée magasin par magasin en un engagement unique, sans reprendre la relation aux agences.",
        action: [
          "J'ai fait valider la carte des rôles par les agences au lieu de la deviner : qui arbitre l'enveloppe, qui exécute, qui reçoit la facture.",
          "Le vrai blocage n'était pas commercial mais administratif, la facturation magasin par magasin. J'ai réglé la mécanique en interne avec le recouvrement avant d'en parler au client, et je suis arrivé en rendez-vous avec la solution déjà arbitrée.",
          "J'ai choisi d'équiper les agences plutôt que d'aller chercher la centrale moi-même : je leur ai donné la lecture de performance magasin par magasin, qu'elles ne pouvaient pas produire, pour qu'elles portent l'argumentaire.",
          "J'ai refusé d'ouvrir large tout de suite. Preuve d'abord sur les magasins déjà actifs, coût par candidature commencée contre les magasins restés en diffusion gratuite, extension ensuite.",
          "J'ai séquencé le déploiement par vagues pour que la centrale s'engage sur un volume pendant que chaque magasin gardait son calendrier.",
        ],
        result:
          "Signé le 18 mai 2026 pour 438 204 euros, ma plus grosse opportunité. Ce n'est pas un accord annuel, c'est une opportunité unique, et je le dis comme ça. Le réseau est passé de 101 986 euros de bookings gagnés en 2023 à 547 277 en 2026, donc la mécanique a tenu au-delà du deal.",
        learning:
          "Sur un réseau décentralisé, le frein est rarement le prix, c'est la mécanique de facturation. Je la traite maintenant avant d'envoyer une proposition.",
      },
      en: {
        situation:
          "Système U is a central organisation that buys nothing and independent stores that each decide and pay for their own hiring. The budget also went through two agencies, Ideuzo and Matière Grise, so I had no direct access to whoever signed.",
        task: "Turn spend scattered store by store into one commitment, without taking the relationship away from the agencies.",
        action: [
          "I had the agencies confirm the map of roles instead of guessing it: who arbitrates the envelope, who executes, who receives the invoice.",
          "The real blocker was administrative, not commercial: invoicing store by store. I settled the mechanics internally with our collections team before raising it with the client, and walked into the meeting with the answer already agreed.",
          "I chose to equip the agencies rather than go to the central team myself: I gave them store by store performance they could not produce, so they could carry the case.",
          "I refused to open wide straight away. Proof first on the stores already active, cost per application started against stores still posting for free, expansion afterwards.",
          "I sequenced the rollout in waves so the central team could commit to volume while each store kept control of its own timing.",
        ],
        result:
          "Signed on 18 May 2026 for 438,204 euros, the largest opportunity I have closed. It is not an annual agreement, it is a single opportunity, and I say it that way. The network went from 101,986 euros of won bookings in 2023 to 547,277 in 2026, so the mechanics outlived the deal.",
        learning:
          "In a decentralised network the brake is rarely price, it is the invoicing mechanics. I now deal with that before I send a proposal.",
      },
    },
    metrics: [
      "438 204 euros signés le 18 mai 2026 (Ideuzo for Super U Loisin, Sponsored Jobs), opportunité unique et non accord annuel",
      "Système U, bookings gagnés : 101 986 euros en 2023, 184 732 en 2024, 352 979 en 2025, 547 277 en 2026",
    ],
    targetSeconds: 103,
  },

  {
    id: "deal-fier",
    category: "deals",
    difficulty: "classique",
    priority: true,
    prompt: {
      fr: "Raconte-moi le deal dont tu es le plus fier.",
      en: "Tell me about the deal you are proudest of.",
    },
    whatTheyTest: [
      "Si ta fierté porte sur une décision ou sur la taille du montant.",
      "La précision : point de départ, montants exacts, moment où la trajectoire change.",
      "Ce qui revient au marché et ce qui revient à toi.",
      "Si tu distingues le revenu encaissé d'un rythme annuel, sans qu'on te le demande.",
    ],
    traps: [
      "Prendre le plus gros deal par réflexe : la question porte sur la difficulté surmontée.",
      "Annoncer les 253 000 euros comme du revenu réalisé, alors que c'est un rythme sur le réseau complet.",
      "Dire « on » sur quatre exercices : l'intervieweur cherche ta part.",
      "Finir sur le chiffre sans dire ce que tu fais différemment depuis.",
    ],
    followUps: [
      {
        question: "Pourquoi celui-là et pas le plus gros ?",
        how: "Une phrase, sans t'excuser : le plus gros est un chèque unique, celui-ci est une courbe sur quatre exercices que tu as construite.",
      },
      {
        question: "Quelle part revient au marché ?",
        how: "Reconnais-la d'abord, puis donne la base de comparaison : ton portefeuille a crû de 38 % à périmètre constant, l'ADMR bien davantage sur la même période.",
      },
      {
        question: "Qu'est-ce qui était reproductible ?",
        how: "Nomme la mécanique, preuve locale puis format collectif puis mesure par fédération, et dis sur quel autre réseau tu l'as rejouée.",
      },
    ],
    basis: "vecu",
    basisNote:
      "Tous les montants viennent de ton suivi de périmètre. Deux bornes demandent une phrase d'explication : 2022 est annualisé depuis six mois de détention, et les 253 000 euros sont un rythme annuel sur le réseau complet. Prépare le nom des deux fédérations qui ont servi de référence.",
    answer: {
      fr: {
        situation:
          "L'ADMR est une fédération d'aide à domicile dont les fédérations départementales décident et paient chacune de leur côté. Quand j'ai repris le périmètre en 2022, il valait 12 000 euros sur environ six mois de détention, à peu près 24 000 euros en rythme annuel.",
        task: "Faire passer un réseau qui achetait par à-coups à un investissement récurrent, département par département.",
        action: [
          "J'ai arrêté le un à un, qui ne tenait pas sur autant de fédérations, et j'ai basculé sur du collectif : plus de 20 webinars, plus de 600 responsables de réseaux et de franchises touchés.",
          "J'ai imposé que chaque fédération voie ses propres chiffres et jamais une moyenne nationale, ce qui m'a coûté beaucoup de préparation, jusqu'à 60 à 80 démonstrations et revues par mois à mes débuts.",
          "J'ai suivi la couverture, le nombre de fédérations qui investissent, comme indicateur principal, avant le chiffre d'affaires.",
          "J'ai transformé deux départements qui marchaient en référence interne, pour que la preuve circule entre pairs plutôt que par moi.",
          "J'ai accepté une année presque blanche plutôt que de forcer un engagement national que personne n'avait mandat de signer.",
        ],
        result:
          "Sur mon périmètre, l'ADMR est passée de 12 000 euros en 2022 à 19 000, puis 36 000, puis 74 000, et 139 000 euros au 5 septembre 2026. Sur douze mois la fédération pèse 164 859 euros, c'est mon deuxième réseau. Le réseau complet tourne à environ 253 000 euros en rythme annuel, ce qui n'est pas du revenu déjà encaissé.",
        learning:
          "Ma fierté porte sur la décision d'arrêter de vendre en un à un, pas sur le montant. Depuis, je pilote la couverture avant l'euro sur tous mes réseaux éclatés.",
      },
      en: {
        situation:
          "ADMR is a home care federation whose county federations each decide and pay on their own. When I took the perimeter over in 2022 it was worth 12,000 euros across about six months of ownership, roughly 24,000 euros annualised.",
        task: "Move a network that bought in fits and starts to recurring investment, county by county.",
        action: [
          "I stopped selling one to one, which does not scale across that many federations, and switched to group formats: more than 20 webinars reaching over 600 network and franchise managers.",
          "I insisted every federation saw its own numbers and never a national average, which cost me a lot of preparation, up to 60 to 80 demos and reviews a month in my early days.",
          "I tracked coverage, meaning how many federations invest, as my main indicator, ahead of revenue.",
          "I turned two counties that worked into internal references, so the proof travelled peer to peer rather than through me.",
          "I accepted an almost blank year rather than forcing a national commitment nobody had a mandate to sign.",
        ],
        result:
          "On my perimeter ADMR went from 12,000 euros in 2022 to 19,000, then 36,000, then 74,000, and 139,000 euros as of 5 September 2026. Over twelve months the federation is worth 164,859 euros, my second largest network. The full network runs at about 253,000 euros annualised, which is a run rate and not revenue already billed.",
        learning:
          "What I am proud of is the decision to stop selling one to one, not the amount. Since then I manage coverage before euros on every fragmented network I hold.",
      },
    },
    metrics: [
      "ADMR sur mon périmètre : 12 K€ en 2022, 19 K€ en 2023, 36 K€ en 2024, 74 K€ en 2025, 139 K€ au 5 septembre 2026",
      "Réseau ADMR complet : environ 253 K€ en rythme annuel, à ne pas présenter comme du revenu encaissé",
      "Fédération ADMR : 164 859 euros sur 12 mois",
      "Plus de 20 webinars, plus de 600 franchisés touchés",
      "60 à 80 démonstrations et revues de performance par mois à mes débuts",
      "Croissance du portefeuille à périmètre constant : +38 %",
    ],
    targetSeconds: 98,
  },

  {
    id: "deal-clevel",
    category: "deals",
    difficulty: "moins-classique",
    priority: true,
    prompt: {
      fr: "Raconte-moi une fois où tu as dû négocier avec des C-levels.",
      en: "Tell me about a time you had to negotiate with C-level executives.",
    },
    whatTheyTest: [
      "Comment la réunion a été obtenue : à ce niveau, on entre par une preuve ou par un tiers, rarement par une relance.",
      "Les trois premières minutes : son exploitation, ou ton produit.",
      "Si tu chiffres le coût de ne rien faire avant de parler du tien.",
      "Le point de sortie : une réunion de direction sans étape suivante datée ne compte pas.",
    ],
    traps: [
      "Faire une démonstration produit à quelqu'un qui n'utilisera jamais l'outil.",
      "Parler plus que lui : dans un bon rendez-vous de ce niveau, il parle davantage.",
      "Prendre le dirigeant pour celui qui signe : il arbitre l'enveloppe, l'exécution reste ailleurs.",
      "Sortir sans prochaine étape et appeler ça un bon contact.",
    ],
    followUps: [
      {
        question: "Comment tu prépares ce type de rendez-vous ?",
        how: "Décris un livrable concret : une lecture chiffrée de sa situation envoyée avant, avec un ordre de grandeur de ce que son problème lui coûte.",
      },
      {
        question: "Et s'il dit non dans les cinq premières minutes ?",
        how: "Change d'objectif à voix haute : tu ne sauves pas le deal dans la salle, tu obtiens l'accès au niveau qui exécute et une donnée que tu n'avais pas.",
      },
      {
        question: "Qui d'autre fallait-il convaincre ?",
        how: "Nomme le niveau qui exécute et ce que tu lui as donné pour dire oui à son tour. L'accord du dirigeant ne crée aucun usage.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le compte et sa taille sont exacts : Groupe Saint-Gatien, une centaine de cliniques et hôpitaux privés, 129 406 euros sur douze mois. La façon dont la réunion a été obtenue, l'objection et le point de sortie sont reconstitués : remplace-les par la vraie fonction de ton interlocuteur et l'objection que tu as réellement reçue.",
    answer: {
      fr: {
        situation:
          "Le Groupe Saint-Gatien réunit une centaine de cliniques et d'hôpitaux privés. Chaque établissement recrute de son côté et la direction groupe arbitre les enveloppes. Le sujet est monté à ce niveau parce que la dépense locale devenait difficile à justifier.",
        task: "Obtenir un cadre groupe face à des dirigeants qui voyaient une ligne de coût et pas un sujet d'exploitation.",
        action: [
          "Je n'ai pas demandé la réunion par e-mail. Je me suis fait présenter par un directeur d'établissement qui avait déjà des résultats, donc le rendez-vous partait d'un fait et pas d'une offre.",
          "J'ai préparé mes trois premières minutes sur leur exploitation : postes soignants non pourvus, durée de vacance, ce que coûte un lit fermé faute de personnel.",
          "J'ai passé la première moitié du rendez-vous à poser des questions, et j'ai reformulé leur arbitrage dans leurs mots avant de proposer quoi que ce soit.",
          "Sur l'objection de coût, j'ai changé le terme de comparaison : pas ma diffusion contre zéro, mais ma diffusion contre l'intérim et les postes vacants.",
          "Je suis sorti avec un point de sortie écrit : un périmètre réduit d'établissements à mesurer, une date de revue, et le nom de celui qui l'ouvrirait côté groupe.",
        ],
        result:
          "Le groupe est aujourd'hui l'un de mes sept premiers réseaux, à 129 406 euros sur douze mois, et l'investissement est réparti sur les établissements au lieu de tenir à une seule décision.",
        learning:
          "Un dirigeant n'achète pas un produit, il arbitre entre deux coûts. Et une réunion à ce niveau sans prochaine étape datée est une réunion perdue.",
      },
      en: {
        situation:
          "Groupe Saint-Gatien runs around one hundred private clinics and hospitals. Each site hires on its own and the group level decides the envelopes. The subject moved up to that level because local spend was becoming hard to justify.",
        task: "Secure a group level framework, facing executives who saw a cost line rather than an operational issue.",
        action: [
          "I did not ask for the meeting by email. I had a site director who already had results introduce me, so the meeting started from a fact rather than an offer.",
          "I prepared my first three minutes around their operations: clinical roles left unfilled, how long they stay open, what a bed closed for lack of staff costs.",
          "I spent the first half of the meeting asking questions, and played their trade off back in their own words before proposing anything.",
          "On the cost objection I changed the comparison: not my media spend against zero, but my media spend against temp agency costs and vacant posts.",
          "I left with a written exit point: a reduced set of sites to measure, a review date, and the name of the person who would open it on their side.",
        ],
        result:
          "The group is now one of my top seven networks at 129,406 euros over twelve months, and the investment is spread across sites instead of resting on a single decision.",
        learning:
          "An executive does not buy a product, they arbitrate between two costs. And a meeting at that level with no dated next step is a meeting lost.",
      },
    },
    metrics: [
      "Groupe Saint-Gatien : 129 406 euros sur 12 mois, une centaine de cliniques et hôpitaux privés",
      "Sept premiers réseaux : 84 % du revenu du book",
    ],
    targetSeconds: 92,
  },

  {
    id: "deal-multi-parties",
    category: "deals",
    difficulty: "moins-classique",
    prompt: {
      fr: "Comment gères-tu un deal où plusieurs décideurs veulent des choses différentes ?",
      en: "How do you handle a deal where several decision makers want different things?",
    },
    whatTheyTest: [
      "Si tu distingues celui qui porte le sujet en interne de celui qui tient le budget.",
      "Si tu nommes le conflit d'intérêts réel au lieu de le lisser.",
      "Si tu as une méthode, et non une anecdote déguisée en méthode.",
      "Ce à quoi tu renonces quand deux parties ne peuvent pas gagner en même temps.",
    ],
    traps: [
      "Promettre à chacun ce qu'il veut entendre : les parties se parlent entre elles.",
      "Confondre consensus et décision : tout le monde d'accord, personne qui signe.",
      "Présenter le siège comme le décideur alors que la facture part au franchisé.",
      "Terminer sans tendre la perche à l'exemple : la relance viendra de toute façon.",
    ],
    followUps: [
      {
        question: "Donne-moi un exemple précis.",
        how: "Bascule sur le STAR MERCI+ et Family Sphere, et commence par la position de chaque partie en une phrase chacune, avant tout déroulé.",
      },
      {
        question: "Que fais-tu si deux décideurs s'opposent frontalement ?",
        how: "Ne tranche pas à leur place : propose une mesure commune sur un périmètre réduit et une date de revue, et accepte que ça retarde la signature.",
      },
      {
        question: "Comment tu sais qui bloque vraiment ?",
        how: "Teste au lieu de croire : demande ce qui se passerait si la décision se prenait demain, et écoute quel nom sort.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le réseau et son montant sont exacts : MERCI+ et Family Sphere, 153 211 euros sur douze mois. La répartition des positions entre siège et franchisés est reconstituée, et la facturation réglée en amont avec le recouvrement vient d'un cas interne : ne la raconte à la première personne que si tu l'as réellement faite.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Sur MERCI+ et Family Sphere, réseau de services à la personne en franchise, le siège voulait un cadre unique et de la cohérence de marque, les franchisés voulaient garder la main sur leur budget et sur des métiers en tension qui changent d'une ville à l'autre.",
        task: "Obtenir un cadre commun sans que les franchisés le vivent comme une dépense imposée par le siège.",
        action: [
          "J'ai écrit ce que chaque partie cherchait vraiment, puis je l'ai fait valider : cohérence pour le siège, autonomie budgétaire pour le franchisé, postes pourvus pour les deux.",
          "J'ai découpé le périmètre de décision plutôt que de négocier un prix : règles et mesure au siège, niveau d'investissement et calendrier chez le franchisé.",
          "J'ai donné au siège la vision consolidée qui lui manquait, et à chaque franchisé la lecture de sa propre zone, pour que chacun décide avec ses chiffres.",
          "Après chaque point, j'ai écrit qui décidait quoi et pour quand, et je l'ai envoyé aux deux niveaux, ce qui a supprimé les versions divergentes.",
        ],
        result:
          "Le réseau pèse 153 211 euros sur douze mois et fait partie de mes sept premiers comptes, qui représentent 84 % du revenu de mon portefeuille.",
      },
      en: {
        situation:
          "At MERCI+ and Family Sphere, a franchised home services network, head office wanted a single framework and brand consistency, while franchisees wanted to keep control of their budget and of hard to fill roles that differ from one city to the next.",
        task: "Get a common framework without franchisees experiencing it as spend imposed from above.",
        action: [
          "I wrote down what each party actually wanted, then had it confirmed: consistency for head office, budget autonomy for the franchisee, filled roles for both.",
          "I redrew the decision perimeter instead of negotiating price: rules and measurement at head office, investment level and timing with the franchisee.",
          "I gave head office the consolidated view it lacked, and each franchisee the read of its own catchment area, so both sides decided with their own numbers.",
          "After every call I wrote down who decides what and by when, and sent it to both levels, which removed the diverging versions.",
        ],
        result:
          "The network is worth 153,211 euros over twelve months and sits among my top seven accounts, which represent 84 percent of my book revenue.",
      },
    },
    script: {
      fr: {
        hook: "Des décideurs qui veulent des choses différentes ne s'opposent presque jamais sur l'objectif, mais sur qui contrôle quoi. Donc je redécoupe le périmètre de décision plutôt que de négocier le prix.",
        body: [
          "Je commence par écrire qui décide, qui exécute, qui paie et qui peut bloquer, et je fais valider cette carte par mon contact au lieu de la deviner. Sur un réseau en franchise, la ligne qui compte n'est pas celle du siège, c'est celle qui reçoit la facture.",
          "Ensuite je cherche l'objectif le plus haut auquel tout le monde peut se rattacher, et j'y raccroche chaque demande. Le siège défend la cohérence de marque, le franchisé son autonomie, mais les deux défendent le fait de pourvoir des postes localement. Ça évite le compromis mou où chacun obtient un quart de ce qu'il voulait.",
          "Le blocage est souvent administratif et pas commercial. Quand la facture part au point de vente, je règle la mécanique en interne avant d'en parler au client. Et si deux parties s'opposent vraiment, je ne tranche pas à leur place : je ramène la décision à une mesure commune sur un périmètre réduit, quitte à décaler la signature d'un trimestre.",
        ],
        closing: "Après chaque échange, j'écris qui décide quoi et pour quand, et je l'envoie aux deux niveaux. Je peux dérouler un cas précis si vous voulez.",
        keyBeats: [
          "Carte des rôles, validée",
          "L'objectif commun le plus haut",
          "Le blocage est administratif",
          "Mesure commune, périmètre réduit",
          "Écrire qui décide quoi",
        ],
      },
      en: {
        hook: "Decision makers who want different things almost never disagree on the objective, they disagree on who controls what. So I redraw the decision perimeter rather than negotiate price.",
        body: [
          "I start by writing down who decides, who executes, who pays and who can block, and I have my contact confirm that map instead of guessing it. In a franchised network the line that matters is not head office, it is whoever receives the invoice.",
          "Then I look for the highest objective everyone can attach to, and I tie every request back to it. Head office defends brand consistency, the franchisee defends autonomy, but both defend their ability to fill local roles. That avoids the soft compromise where everyone gets a quarter of what they wanted.",
          "The blocker is often administrative rather than commercial. When the invoice goes to the individual site, I settle those mechanics internally before raising them with the client. And if two parties genuinely clash, I do not decide for them: I bring it back to a shared measurement on a reduced perimeter, even if that pushes signature by a quarter.",
        ],
        closing: "After every exchange I write down who decides what and by when, and send it to both levels. I can walk through a specific case if you would like.",
        keyBeats: [
          "Map of roles, confirmed",
          "Highest shared objective",
          "The blocker is administrative",
          "Shared measure, reduced scope",
          "Write who decides what",
        ],
      },
    },
    metrics: [
      "MERCI+ et Family Sphere : 153 211 euros sur 12 mois",
      "Sept premiers réseaux : 84 % du revenu du book",
    ],
    targetSeconds: 88,
  },

  {
    id: "deal-agence",
    category: "deals",
    difficulty: "moins-classique",
    prompt: {
      fr: "Parle-moi d'un deal passé par une agence plutôt qu'en direct.",
      en: "Tell me about a deal that went through an agency rather than direct.",
    },
    whatTheyTest: [
      "Si tu sais nommer le modèle économique de l'agence et en tirer une conséquence sur ta recommandation.",
      "Si tu crées de la valeur pour l'agence elle-même, et pas seulement pour l'annonceur.",
      "Le respect du cadre : une histoire de contournement met fin à l'entretien.",
      "Comment tu gardes une lecture directe de la performance malgré l'intermédiaire.",
    ],
    traps: [
      "Présenter l'agence comme un filtre à franchir.",
      "Raconter que tu as gagné en allant voir l'annonceur derrière elle.",
      "Ne parler que de relation : ce qui te rend non substituable est la donnée que tu produis.",
      "Ignorer le risque de dépendance quand l'agence tient seule le lien avec le client.",
    ],
    followUps: [
      {
        question: "Que fais-tu si l'agence pousse un concurrent ?",
        how: "Reste factuel : compare des résultats livrés, ne dénigre jamais, et cherche l'intérêt de l'agence que tu n'as pas couvert.",
      },
      {
        question: "Direct ou agence, tu préfères quoi ?",
        how: "Ne choisis pas. Dis ce que chaque canal permet, et que l'agence donne de l'échelle quand le réseau est éclaté.",
      },
      {
        question: "Comment tu gardes la main sur le compte ?",
        how: "Par la lecture de performance que tu produis par établissement, et par une revue où l'agence et le client sont ensemble dans la salle.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le deal, la date, le montant et les deux agences sont exacts. Le partage des rôles entre Ideuzo et Matière Grise et le rendez-vous direct décliné sont reconstitués : ne garde cet exemple que si tu as réellement refusé une sollicitation directe.",
    answer: {
      fr: {
        situation:
          "Sur le réseau Système U, la relation avec les magasins et la centrale appartenait à deux agences, Ideuzo et Matière Grise. Mon interlocuteur commercial n'était donc jamais celui qui recrutait.",
        task: "Faire progresser le réseau à travers l'agence, sans jamais reprendre la relation qu'elle avait construite.",
        action: [
          "J'ai commencé par regarder sur quoi l'agence est rémunérée et jugée, la performance livrée et le temps qu'elle y passe. Ça change la recommandation : je propose ce qu'elle peut défendre devant son client, pas ce qui m'arrange.",
          "Je lui ai donné ce qu'elle ne pouvait pas produire seule, une lecture de performance magasin par magasin, directement présentable.",
          "J'ai pris le paramétrage technique à ma charge, parce que le temps qu'elle économise est sa marge.",
          "Un directeur de magasin m'a proposé un rendez-vous direct : j'y suis allé avec l'agence plutôt que sans elle, même si c'était plus lent à organiser.",
          "Je remontais les résultats avant chaque échéance budgétaire, pour qu'elle ait ses arguments au moment où la centrale arbitrait, et pas après.",
        ],
        result:
          "C'est par ce canal qu'est passée ma plus grosse opportunité, 438 204 euros signés le 18 mai 2026, sur un réseau passé de 101 986 euros de bookings gagnés en 2023 à 547 277 en 2026. Le risque du modèle, je le connais : quand l'agence tient seule le lien, je deviens invisible pour l'annonceur. Je le compense en produisant la lecture de performance par magasin, que personne d'autre ne peut fournir.",
        learning:
          "Une agence ne se contourne pas, elle s'équipe. Le jour où elle gagne avec ce que je lui donne, elle me met dans les discussions où je n'entrerais pas seul.",
      },
      en: {
        situation:
          "On the Système U network, the relationship with the stores and the central team belonged to two agencies, Ideuzo and Matière Grise. My commercial counterpart was never the person doing the hiring.",
        task: "Grow the network through the agency, without ever taking back the relationship it had built.",
        action: [
          "I started by looking at how the agency is paid and judged, on delivered performance and on the time it spends. That changes the recommendation: I propose what it can defend in front of its own client, not what suits me.",
          "I gave it what it could not produce alone, store by store performance, ready to present as is.",
          "I took the technical setup on myself, because the time it saves is its margin.",
          "A store director offered me a direct meeting: I went with the agency rather than without it, even though it took longer to arrange.",
          "I sent results ahead of every budget milestone, so it had its arguments while the central team was arbitrating, not afterwards.",
        ],
        result:
          "The largest opportunity I have closed came through that channel: 438,204 euros signed on 18 May 2026, on a network that went from 101,986 euros of won bookings in 2023 to 547,277 in 2026. I know the risk in that model: when the agency alone holds the relationship, I become invisible to the advertiser. I offset it by producing the store by store performance read that nobody else can supply.",
        learning:
          "You do not work around an agency, you equip it. The day it wins with what I give it, it puts me in conversations I would never reach alone.",
      },
    },
    metrics: [
      "438 204 euros signés le 18 mai 2026 via Ideuzo et Matière Grise",
      "Système U, bookings gagnés : 101 986 euros en 2023, 547 277 euros en 2026",
    ],
    targetSeconds: 96,
  },

  {
    id: "deal-prix",
    category: "deals",
    difficulty: "classique",
    prompt: {
      fr: "Un client te demande une remise importante. Comment tu réagis ?",
      en: "A client asks you for a significant discount. How do you react?",
    },
    whatTheyTest: [
      "Si tu diagnostiques avant de répondre, ou si tu demandes où il faudrait que tu sois.",
      "Si la concession est échangée contre une contrepartie nommée.",
      "Si tu sais dire ton plancher et accepter de perdre en dessous.",
      "Ce que tu fais en amont pour que la question n'arrive pas au dernier moment.",
    ],
    traps: [
      "Céder vite en fin de trimestre : ça s'entend, et ça dit comment tu tiendras un portefeuille.",
      "Refuser sèchement sans avoir cherché ce que la demande cache.",
      "Justifier ton prix par tes coûts ou par une politique interne, qui n'intéressent pas le client.",
      "Oublier l'effet de précédent : la remise consentie devient le prix de référence du renouvellement.",
    ],
    followUps: [
      {
        question: "Donne-moi un exemple où tu as tenu.",
        how: "Bascule sur le STAR et choisis un cas où la contrepartie est chiffrable. Si tu n'en as pas encore, dis-le et raconte la fois où tu as réduit le périmètre plutôt que le prix.",
      },
      {
        question: "Et s'il menace d'aller chez le concurrent ?",
        how: "Demande d'abord sur quoi porte la comparaison, compare des résultats livrés, et assume qu'un client puisse partir à un prix que tu ne veux pas faire.",
      },
      {
        question: "Tu accordes des remises, alors ?",
        how: "Oui, contre durée, volume ou périmètre. Dis-le simplement : une remise sans contrepartie est une perte sèche.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Aucune négociation de remise n'est documentée dans ta banque de faits. Avant l'entretien, choisis un cas réel avec le montant demandé, la contrepartie obtenue et le plancher que tu as tenu, et remplace la situation du STAR. Garde la méthode, change l'histoire.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Un compte important demande une remise significative en fin de cycle, en présentant le prix comme la dernière condition pour signer. La demande arrive au moment où j'ai le plus à perdre.",
        task: "Protéger la valeur du contrat sans braquer le client et sans laisser le deal s'arrêter sur un chiffre.",
        action: [
          "Je ne réponds pas sur le prix : je demande ce que la remise doit résoudre, contrainte de budget, comparaison concurrente ou doute sur le résultat.",
          "C'était un doute sur le résultat, donc baisser le prix ne l'aurait pas levé. J'ai ramené la discussion sur la preuve déjà disponible et sur le coût par candidature commencée.",
          "J'ai proposé de réduire le périmètre plutôt que le prix unitaire, pour que la valeur par unité reste intacte et que le point de comparaison ne bouge pas au renouvellement.",
          "J'ai demandé une contrepartie explicite en échange de ce que j'accordais : durée d'engagement et calendrier d'activation écrit.",
          "J'ai dit une seule fois ce que je ne ferais pas, pour que ma position soit lisible et ne se renégocie pas à chaque échange.",
        ],
        result:
          "Le contrat s'est signé au niveau de valeur défendu, avec une contrepartie qui l'a rendu acceptable des deux côtés, et sans créer de prix de référence pour l'échéance suivante.",
        learning:
          "Une demande de remise est presque toujours une question déguisée sur le risque perçu. Tant que je n'ai pas identifié lequel, je ne bouge pas mon prix.",
      },
      en: {
        situation:
          "A major account asks for a significant discount late in the cycle, presenting price as the last condition to sign. The request lands exactly when I have the most to lose.",
        task: "Protect the value of the contract without antagonising the client and without letting the deal stall on a number.",
        action: [
          "I do not answer on price: I ask what the discount is meant to solve, a budget constraint, a competitive comparison, or doubt about results.",
          "It was doubt about results, so cutting the price would not have removed it. I brought the conversation back to the evidence we already had and to cost per application started.",
          "I proposed reducing scope rather than unit price, so value per unit stayed intact and the reference point did not move at renewal.",
          "I asked for an explicit counterpart in exchange for what I conceded: a committed term and a written activation timeline.",
          "I said once, and only once, what I would not do, so my position was readable and did not get renegotiated at every exchange.",
        ],
        result:
          "The contract signed at the value level I defended, with a counterpart that made it acceptable to both sides, and without setting a reference price for the next renewal.",
        learning:
          "A discount request is almost always a disguised question about perceived risk. Until I know which risk it is, I do not move my price.",
      },
    },
    script: {
      fr: {
        hook: "Je ne réponds ni oui ni non à une demande de remise. Je réponds par une question, parce que le prix est presque toujours le symptôme d'autre chose.",
        body: [
          "Je demande ce que la remise doit résoudre. Il y a trois cas et ils n'appellent pas la même réponse : un budget réellement contraint, une comparaison avec un concurrent, ou un doute sur le résultat. Dans le troisième cas, baisser le prix ne lève rien, ça confirme au client qu'il payait trop cher.",
          "Si la contrainte de budget est réelle, je réduis le périmètre plutôt que le prix unitaire. Sur un réseau, je propose souvent de dépenser sur moins de sites, pas sur plus : je plafonne le nombre d'établissements servis dans le mois et le nombre d'annonces par établissement. Et quand j'accorde quelque chose, je l'échange contre une durée, un volume ou un calendrier d'activation écrit.",
          "Au début, je me trompais de terme de comparaison. Je défendais mon prix en volume d'affichage, alors que ce que je vends est une intention de candidature : la bonne unité est le coût par candidature commencée. J'ai un plancher, que je dis une fois : en dessous, je préfère perdre le deal que fixer un prix de référence que je retrouverai à chaque renouvellement.",
        ],
        closing: "C'est ma méthode. Je peux la dérouler sur un cas réel si vous voulez.",
        keyBeats: [
          "Ni oui ni non, une question",
          "Trois causes, trois réponses",
          "Réduire le périmètre, pas le prix",
          "Concession échangée",
          "Un plancher, dit une fois",
        ],
      },
      en: {
        hook: "I answer a discount request with neither yes nor no. I answer with a question, because price is almost always the symptom of something else.",
        body: [
          "I ask what the discount is meant to solve. There are three cases and they do not call for the same answer: a genuine budget constraint, a comparison with a competitor, or doubt about results. In the third case, cutting the price removes nothing, it confirms to the client that they were paying too much.",
          "If the budget constraint is real, I reduce scope rather than unit price. On a network I often propose spending on fewer sites, not more: I cap how many sites we serve in the month and how many roles we run per site. And when I concede something, I trade it for a term, a volume, or a written activation timeline.",
          "Early on I got the unit of comparison wrong. I defended my price on impression volume, when what I sell is career intent: the right unit is cost per application started. And I have a floor, which I state once: below it I would rather lose the deal than set a reference price I will meet again at every renewal.",
        ],
        closing: "That is my method, and I am happy to walk it through on a real case.",
        keyBeats: [
          "Neither yes nor no, a question",
          "Three causes, three answers",
          "Cut scope, not price",
          "Concession traded",
          "A floor, stated once",
        ],
      },
    },
    metrics: [],
    targetSeconds: 90,
  },

  {
    id: "deal-upsell",
    category: "deals",
    difficulty: "classique",
    prompt: {
      fr: "Raconte-moi un compte que tu as fait grandir de façon significative.",
      en: "Tell me about an account you grew significantly.",
    },
    whatTheyTest: [
      "Croissance ou simple reconduction : on cherche ce que tu as créé.",
      "Sur quelle donnée tu es allé chercher le potentiel non exploité.",
      "Comment tu introduis un second produit sans fragiliser le premier.",
      "Ce à quoi tu as renoncé pour dégager ce temps.",
    ],
    traps: [
      "Attribuer la croissance au produit ou au marché plutôt qu'à tes décisions.",
      "Présenter ce compte comme un accord annuel ou comme de la marque employeur : il n'y en a pas eu.",
      "Citer un nombre d'établissements actifs que tu ne peux pas resourcer.",
      "Oublier l'adoption : le chiffre vient des établissements qui achètent, pas d'une signature.",
    ],
    followUps: [
      {
        question: "Comment tu as identifié le potentiel ?",
        how: "Donne la donnée exacte que tu regardes : postes publiés sans aucune dépense, rapportés au volume de postes de l'établissement.",
      },
      {
        question: "Neuf mois de cover mais deux exercices de revenu, comment ça se réconcilie ?",
        how: "Dis la vérité de la donnée sans te justifier : l'assignation court d'avril 2023 à mars 2025, ton cover intensif a duré neuf mois. Donne le périmètre avant le chiffre.",
      },
      {
        question: "Que s'est-il passé quand tu as rendu le compte ?",
        how: "Reste factuel : tu as transmis la mécanique d'activation et la lecture par établissement, et tu dis ce que tu ne contrôlais plus.",
      },
    ],
    basis: "vecu",
    basisNote:
      "Les montants Petits-fils et la durée du cover viennent de ta banque de faits. Deux précautions : la donnée montre une assignation d'avril 2023 à mars 2025 alors que tu dis neuf mois de cover, prépare la phrase qui réconcilie les deux. Et ne présente jamais ce compte comme un accord annuel ni comme de la marque employeur.",
    answer: {
      fr: {
        situation:
          "Pendant neuf mois, en 2023 et 2024, j'ai couvert un book de National Account Manager en plus du mien, après le départ de la titulaire : des réseaux de santé et de services à la personne, dont Petits-fils. Je reprenais des comptes que je n'avais pas construits, avec des interlocuteurs qui venaient de perdre leur référent.",
        task: "Stabiliser puis développer Petits-fils, sans période de flottement liée au changement d'interlocuteur.",
        action: [
          "J'ai commencé par la donnée d'usage et pas par les rendez-vous : quels établissements publiaient des postes sans jamais investir.",
          "J'ai concentré mon temps sur ceux qui avaient du volume de postes et aucune dépense, et j'ai laissé de côté les petits établissements déjà actifs, qui demandaient autant d'attention pour beaucoup moins.",
          "J'ai vendu établissement par établissement plutôt que de chercher un cadre unique au siège, parce que le budget se décide là où le poste est vacant.",
          "Je n'ai introduit le sourcing qu'une fois la diffusion sponsorisée prouvée sur les mêmes établissements, avec les mêmes intitulés de poste des deux côtés pour que la comparaison tienne.",
          "J'ai tenu des revues où chaque établissement voyait son propre résultat, pas une moyenne réseau, ce qui a rendu la reconduction évidente sans argumentaire.",
        ],
        result:
          "Sur les deux exercices où j'ai porté le compte, Petits-fils a représenté environ 486 000 euros, 224 000 la première année et 262 000 la seconde, sur deux familles de produits : la diffusion sponsorisée et le sourcing, dont Featured Employer.",
        learning:
          "La croissance d'un réseau se lit en établissements actifs bien avant de se lire en euros, et le second produit ne se vend qu'une fois le premier prouvé.",
      },
      en: {
        situation:
          "For nine months across 2023 and 2024 I covered a National Account Manager book on top of my own, after the incumbent left: healthcare and home services networks, including Petits-fils. I inherited accounts I had not built, with contacts who had just lost their point person.",
        task: "Stabilise and then grow Petits-fils, with no drift caused by the handover.",
        action: [
          "I started from usage data rather than from meetings: which sites were posting roles without ever investing.",
          "I concentrated my time on those with job volume and no spend, and left aside the small sites already active, which took as much attention for far less.",
          "I sold site by site rather than chasing a single framework at head office, because the budget is decided where the role is vacant.",
          "I only introduced sourcing once sponsored distribution was proven on the same sites, with the same job titles on both sides so the comparison held.",
          "I ran reviews where each site saw its own result, not a network average, which made renewal obvious without a pitch.",
        ],
        result:
          "Across the two fiscal years I carried the account, Petits-fils represented around 486,000 euros, 224,000 in the first year and 262,000 in the second, across two product families: sponsored distribution and sourcing, including Featured Employer.",
        learning:
          "Growth on a network shows up as active sites long before it shows up as euros, and the second product only sells once the first one is proven.",
      },
    },
    metrics: [
      "Petits-fils : environ 486 K€ sur deux ans, 224 K€ la première année, 262 K€ la seconde",
      "Deux familles de produits : Sponsored Jobs et Smart Sourcing dont Featured Employer, ni accord annuel ni marque employeur",
      "Cover National Account Manager : neuf mois en 2023 et 2024, en plus de son propre book",
    ],
    targetSeconds: 96,
  },

  {
    id: "deal-cycle-long",
    category: "deals",
    difficulty: "piege",
    prompt: {
      fr: "Raconte-moi le cycle de vente le plus long que tu as mené, et ce qui l'a débloqué.",
      en: "Tell me about the longest sales cycle you ran, and what unlocked it.",
    },
    whatTheyTest: [
      "Si la durée est de la ténacité ou une mauvaise qualification que tu as laissée vivre.",
      "Ton seuil d'abandon, formulé comme un critère et pas comme une humeur.",
      "Ce qui a réellement débloqué, et ce que tu avais préparé pour l'exploiter.",
      "Comment tu as tenu ton chiffre pendant que ce deal n'avançait pas.",
    ],
    traps: [
      "Faire de la durée une preuve de persévérance : c'est d'abord un signal de qualification.",
      "Attribuer le déblocage au timing sans dire ce que tu avais mis en place.",
      "Laisser penser que ce deal explique un trimestre faible.",
      "Ne pas savoir dire à quel moment tu aurais dû arrêter d'y croire.",
    ],
    followUps: [
      {
        question: "À quel moment aurais-tu dû le disqualifier ?",
        how: "Donne un seuil, pas un sentiment : pas d'accès à celui qui arbitre le budget après deux cycles, tu sors et tu le dis au client.",
      },
      {
        question: "Comment tu restes présent sans être lourd ?",
        how: "Décris la cadence : tu reviens avec une donnée nouvelle sur son marché, jamais avec une relance. La valeur remplace la fréquence.",
      },
      {
        question: "Comment tu as sécurisé tes trimestres pendant ce temps ?",
        how: "Montre la gestion de portefeuille : 817 réseaux parents imposent de faire tourner des cycles courts pendant qu'un cycle long avance en fond.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le compte, son montant et tes taux d'atteinte sont exacts. La durée du cycle, l'élément déclencheur et le binôme avec la customer success sont reconstitués : c'est le point le plus fragile de cette réponse, remplace le déblocage par ce qui s'est réellement passé. Ne cite pas de part de book, elle n'est pas dans ta banque de faits.",
    answer: {
      fr: {
        situation:
          "Accor est aujourd'hui mon premier réseau, à 214 476 euros sur douze mois, mais la discussion a mis plusieurs trimestres. Les établissements recrutaient chacun de leur côté et personne, au centre, ne portait seul l'arbitrage.",
        task: "Faire avancer un cycle sans propriétaire côté client, sans qu'il mange le temps dû au reste de mon portefeuille.",
        action: [
          "J'ai posé mon critère à voix haute : tant que je n'avais pas accès à celui qui arbitre le budget, le deal ne comptait pas comme actif dans mon pipeline. C'est ce qui m'a évité de le porter en prévision pendant un an.",
          "J'ai remplacé la relance par l'apport de données : à chaque contact, une lecture du marché de l'emploi sur leurs métiers et leurs villes, jamais une question sur l'avancement.",
          "J'ai travaillé les établissements qui pouvaient décider seuls, pour fabriquer de la preuve locale pendant que le centre n'avançait pas.",
          "J'ai tenu la cadence en binôme avec la customer success sur toute la durée, pour que le compte ne dépende pas de ma seule disponibilité.",
          "Quand la fenêtre s'est ouverte, je ne suis pas revenu avec une offre d'appel : je suis revenu avec le cadre, la mécanique d'activation et le calendrier déjà écrits.",
        ],
        result:
          "Le compte est devenu mon premier réseau, à 214 476 euros sur douze mois. Et je n'ai pas payé l'attente ailleurs : 108 % d'atteinte au premier trimestre 2026 et 133 % au deuxième.",
        learning:
          "Un cycle long ne se gagne pas en insistant, il se gagne en étant prêt le jour où le client a une raison d'agir. Mon seuil n'a pas bougé : pas d'accès au budget après deux cycles, je sors.",
      },
      en: {
        situation:
          "Accor is now my largest network at 214,476 euros over twelve months, but the discussion took several quarters. Sites were hiring independently and nobody at the centre owned the decision alone.",
        task: "Move a cycle forward with no owner on the client side, without letting it eat the time owed to the rest of my portfolio.",
        action: [
          "I stated my criterion out loud: until I had access to whoever arbitrates the budget, the deal did not count as active in my pipeline. That is what stopped me carrying it in forecast for a year.",
          "I replaced follow ups with data: at every contact, a read of the labour market on their roles and their cities, never a status question.",
          "I worked the sites that could decide on their own, to build local proof while the centre was not moving.",
          "I kept the cadence with the same customer success manager throughout, so the account did not depend on my availability alone.",
          "When the window opened I did not come back with an entry offer: I came back with the framework, the activation mechanics and the calendar already written.",
        ],
        result:
          "The account became my largest network at 214,476 euros over twelve months. And I did not pay for the wait elsewhere: 108 percent attainment in the first quarter of 2026 and 133 percent in the second.",
        learning:
          "A long cycle is not won by pushing, it is won by being ready the day the client has a reason to act. My threshold has not moved: no access to the budget after two cycles and I step out.",
      },
    },
    metrics: [
      "Accor : 214 476 euros sur 12 mois",
      "Book : 817 réseaux parents, 4 584 comptes advertisers",
      "Atteinte : 108 % au Q1 2026, 133 % au Q2 2026",
    ],
    targetSeconds: 94,
  },
];
