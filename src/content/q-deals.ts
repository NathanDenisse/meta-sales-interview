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
      "Ta définition de la complexité : le montant impressionne, c'est le nombre d'acteurs à aligner qui est évalué.",
      "Ta capacité à cartographier un circuit de décision que tu ne contrôles pas.",
      "Ce que tu as fait toi, pas ce que l'agence ou l'équipe a fait.",
      "Ta tenue sur le temps long sans perdre la main sur le deal.",
    ],
    traps: [
      "Raconter la taille du chèque au lieu du mécanisme qui l'a rendu possible.",
      "Rester au niveau du siège, alors que chez Meta aussi le budget se dépense au niveau local ou agence.",
      "Dire « nous » du début à la fin : l'intervieweur cherche ta part exacte.",
      "Empiler les noms d'acteurs sans jamais dire qui arbitrait quoi.",
    ],
    followUps: [
      {
        question: "Qu'est-ce qui a failli faire capoter le deal ?",
        how: "Nomme un vrai risque que tu contrôlais : ici la dépendance à deux agences pour parler au décideur. Dis comment tu as réduit ce risque, pas comment tu as eu de la chance.",
      },
      {
        question: "Qu'aurais-tu fait différemment ?",
        how: "Donne une réponse structurelle, pas cosmétique : tu aurais construit le plan d'activation par magasin avant la signature et pas après.",
      },
      {
        question: "Comment tu sécurises la reconduction ?",
        how: "Montre la trajectoire pluriannuelle du réseau plutôt que la satisfaction déclarée du client. Un renouvellement se prouve par la courbe, pas par la relation.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Les montants, la date, les deux agences et le réseau sont exacts. L'enchaînement (cartographie du circuit, vagues de déploiement, verrouillage des bons de commande) est reconstitué : vérifie l'ordre réel des étapes et qui, d'Ideuzo ou de Matière Grise, portait quoi avant de le raconter.",
    answer: {
      fr: {
        situation:
          "Système U est un réseau décentralisé : une centrale d'un côté, des magasins qui décident et paient leur recrutement de l'autre. Le budget média passait en plus par deux agences, Ideuzo et Matière Grise, donc je n'avais pas d'accès direct au décideur qui signait.",
        task: "Transformer une dépense éclatée magasin par magasin en un engagement cadré au niveau du réseau, sans court-circuiter les agences.",
        action: [
          "J'ai cartographié le circuit réel : qui arbitre le budget, qui exécute, qui paie la facture, et j'ai fait valider cette carte par les agences au lieu de la deviner.",
          "J'ai fait des agences mes alliées en leur apportant la lecture de performance magasin par magasin, qu'elles n'avaient pas, pour qu'elles arrivent chez U avec un argumentaire chiffré.",
          "J'ai construit la preuve sur les magasins déjà actifs : coût par candidature et délai de pourvoi, comparés aux magasins restés en diffusion gratuite.",
          "J'ai converti la demande en plan de déploiement par vagues, pour que la centrale s'engage sur un volume et que chaque magasin garde la main sur son calendrier.",
          "J'ai verrouillé la mécanique de commande avec les agences avant la signature, pour qu'aucun bon de commande ne bloque l'activation le jour où le budget est libéré.",
        ],
        result:
          "Le deal a été signé le 18 mai 2026 pour 438 204 euros, le plus gros que j'aie closé. Le réseau est passé de 101 986 euros de bookings en 2023 à 547 277 euros en 2026, donc ce n'était pas un coup unique mais une structure qui tient.",
        learning:
          "Dans un réseau décentralisé, un deal ne se gagne pas à la signature, il se gagne au moment où l'adoption locale devient facile. Je construis maintenant le plan d'activation avant le closing.",
      },
      en: {
        situation:
          "Système U is a decentralised network: one central team, and stores that decide and pay for their own hiring. On top of that, the media budget went through two agencies, Ideuzo and Matière Grise, so I had no direct access to the person signing.",
        task: "Turn spend scattered across stores into one structured commitment at network level, without cutting the agencies out.",
        action: [
          "I mapped the real decision path: who arbitrates the budget, who executes, who pays the invoice, and I had the agencies confirm that map instead of guessing it.",
          "I made the agencies my allies by giving them store level performance they did not have, so they could walk into Système U with numbers.",
          "I built the proof on stores already active: cost per application and time to fill, against stores still posting for free.",
          "I turned the request into a wave by wave rollout plan, so the central team could commit to volume while each store kept control of its own timing.",
          "I locked the ordering mechanics with the agencies before signature, so no purchase order could block activation once the budget was released.",
        ],
        result:
          "The deal closed on 18 May 2026 at 438,204 euros, the largest I have signed. The network went from 101,986 euros of bookings in 2023 to 547,277 euros in 2026, so this was structure, not a one off.",
        learning:
          "In a decentralised network you do not win at signature, you win when local adoption becomes easy. I now build the activation plan before closing, not after.",
      },
    },
    metrics: [
      "438 204 euros signés le 18 mai 2026 (Ideuzo for Super U Loisin, Sponsored Jobs)",
      "Système U : 101 986 euros en 2023, 184 732 en 2024, 352 979 en 2025, 547 277 en 2026",
    ],
    targetSeconds: 115,
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
      "Ce que tu appelles une réussite : un chèque ponctuel ou un compte transformé.",
      "Ta patience commerciale sur plusieurs exercices, sans lâcher le compte entre deux.",
      "Ta capacité à générer de la demande là où personne ne t'attendait.",
      "Ton honnêteté sur ta contribution réelle par rapport à la dynamique du marché.",
    ],
    traps: [
      "Choisir le deal le plus gros par réflexe, alors que la question porte sur la fierté, donc sur la difficulté surmontée.",
      "Parler d'émotion sans chiffre : la fierté sans mesure passe pour de la vantardise.",
      "Oublier de dire ce qui était en jeu si tu échouais.",
      "Laisser croire que la croissance venait du marché et pas de ce que tu as construit.",
    ],
    followUps: [
      {
        question: "Pourquoi celui-là et pas le plus gros ?",
        how: "Assume la distinction : le plus gros deal est un chèque, celui-ci est une courbe sur quatre ans. Dis-le en une phrase, sans t'excuser.",
      },
      {
        question: "Qu'est-ce qui était réplicable ?",
        how: "Décris la mécanique, pas l'anecdote : preuve locale, format collectif pour diffuser, mesure par établissement. C'est ce que Meta veut réutiliser.",
      },
      {
        question: "Quelle part revient au marché ?",
        how: "Reconnais-la franchement, puis ramène au différentiel : la croissance du réseau est très au-dessus du reste de ton book sur la même période.",
      },
    ],
    basis: "vecu",
    answer: {
      fr: {
        situation:
          "L'ADMR est une fédération d'associations d'aide à domicile, avec des fédérations départementales autonomes qui décident et paient chacune de leur côté. Quand j'ai repris le périmètre, il pesait environ 12 000 euros par an, à peu près 24 000 euros en rythme sur l'ensemble du réseau.",
        task: "Faire passer une fédération qui achetait de façon marginale et dispersée à un investissement récurrent, département par département.",
        action: [
          "J'ai arrêté de vendre fédération par fédération en one to one et j'ai monté des webinars : plus de 20 sessions, qui ont touché plus de 600 responsables de réseaux et de franchises.",
          "J'ai systématisé les revues de performance, jusqu'à 60 à 80 démonstrations et revues par mois sur mes débuts, pour que chaque département voie ses propres chiffres et pas une moyenne nationale.",
          "J'ai transformé les départements qui marchaient en référence interne, pour que la preuve circule entre pairs plutôt que par moi.",
          "J'ai traité la couverture comme une métrique à part entière : combien de départements investissent, et pas seulement combien d'euros rentrent.",
          "J'ai tenu le compte sur quatre exercices sans le traiter comme un petit compte, alors qu'il ne pesait rien la première année.",
        ],
        result:
          "Sur mon périmètre, l'ADMR est passée de 12 000 euros en 2022 à 19 000 en 2023, 36 000 en 2024, 74 000 en 2025 et 139 000 euros au 5 septembre 2026. En rythme, le réseau est passé d'environ 24 000 à environ 253 000 euros, et la fédération ADMR est aujourd'hui mon deuxième réseau sur douze mois avec 164 859 euros.",
        learning:
          "Sur un réseau décentralisé, la croissance ne vient pas d'un gros oui mais de la multiplication des oui locaux. Je pilote donc la couverture avant le chiffre d'affaires.",
      },
      en: {
        situation:
          "ADMR is a federation of home care associations, with autonomous county level federations that each decide and pay on their own. When I took the perimeter over it was worth about 12,000 euros a year, roughly 24,000 euros annualised across the network.",
        task: "Move a federation that bought marginally and in scattered pockets to recurring investment, county by county.",
        action: [
          "I stopped selling one federation at a time and ran webinars instead: over 20 sessions reaching more than 600 network and franchise managers.",
          "I made performance reviews systematic, up to 60 to 80 demos and reviews a month in my early days, so each county saw its own numbers rather than a national average.",
          "I turned the counties that worked into internal references, so the proof travelled peer to peer instead of through me.",
          "I treated coverage as a metric in its own right: how many counties invest, not only how many euros come in.",
          "I stayed on the account across four fiscal years and never treated it as a small account, even though it was worth almost nothing in year one.",
        ],
        result:
          "On my perimeter ADMR went from 12,000 euros in 2022 to 19,000 in 2023, 36,000 in 2024, 74,000 in 2025 and 139,000 euros as of 5 September 2026. Annualised, the network moved from about 24,000 to about 253,000 euros, and ADMR is now my second largest network over twelve months at 164,859 euros.",
        learning:
          "In a decentralised network, growth does not come from one big yes, it comes from multiplying local ones. So I manage coverage first and revenue second.",
      },
    },
    metrics: [
      "ADMR sur mon périmètre : 12 K€ en 2022, 19 K€ en 2023, 36 K€ en 2024, 74 K€ en 2025, 139 K€ au 5 septembre 2026",
      "Réseau ADMR en rythme : environ 24 K€ en 2022 à environ 253 K€ en 2026",
      "Fédération ADMR : 164 859 euros sur 12 mois",
      "Plus de 20 webinars, plus de 600 franchisés touchés",
      "60 à 80 démonstrations et revues de performance par mois à mes débuts",
    ],
    targetSeconds: 115,
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
      "Ta capacité à parler la langue du dirigeant : coût, risque, capacité à recruter, pas fonctionnalités.",
      "Ta préparation : un dirigeant te donne vingt minutes, il voit tout de suite si tu improvises.",
      "Ta tenue face à une objection frontale, sans céder ni te braquer.",
      "Ta compréhension de ce qui l'expose personnellement dans la décision.",
    ],
    traps: [
      "Faire une démonstration produit à un dirigeant : il n'utilisera jamais l'outil.",
      "Arriver avec des métriques d'activité au lieu d'un impact sur son exploitation.",
      "Accepter l'objection prix sans avoir reformulé le coût de son problème actuel.",
      "Parler plus que lui. Un bon entretien avec un C-level est majoritairement composé de ses réponses.",
    ],
    followUps: [
      {
        question: "Comment tu prépares ce type de rendez-vous ?",
        how: "Décris un livrable concret : une lecture chiffrée de sa situation avant le rendez-vous, avec un ordre de grandeur de ce que son problème lui coûte.",
      },
      {
        question: "Et s'il te dit non dans les cinq premières minutes ?",
        how: "Montre que tu changes d'objectif : tu ne sauves pas le deal dans la salle, tu obtiens l'accès au bon niveau opérationnel et une donnée que tu n'avais pas.",
      },
      {
        question: "Qui d'autre fallait-il convaincre ?",
        how: "Rappelle que l'accord du dirigeant ne crée pas l'usage : nomme le niveau qui exécute et ce que tu lui as donné pour dire oui à son tour.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le compte, sa taille et son poids dans ton book sont exacts (Groupe Saint-Gatien, une centaine de cliniques et hôpitaux privés, 129 406 euros sur 12 mois). Les interlocuteurs, le déroulé du rendez-vous et les objections citées sont reconstitués : remplace-les par les vrais noms de fonctions et la vraie objection que tu as reçue.",
    answer: {
      fr: {
        situation:
          "Le Groupe Saint-Gatien réunit une centaine de cliniques et d'hôpitaux privés, avec des directions d'établissement qui recrutent chacune de leur côté et une direction groupe qui arbitre les enveloppes. La discussion est montée au niveau de la direction générale et des ressources humaines groupe parce que la dépense locale devenait difficile à justifier.",
        task: "Obtenir un cadre groupe qui sécurise l'investissement, face à des dirigeants qui voyaient une ligne de coût et pas un levier d'exploitation.",
        action: [
          "J'ai préparé une lecture chiffrée de leur situation avant le rendez-vous : tension du marché sur leurs métiers soignants, part des postes qui restaient non pourvus, coût d'un poste vacant pour un établissement.",
          "J'ai ouvert sur leur problème d'exploitation, pas sur le produit : un lit fermé faute de personnel coûte plus cher que n'importe quelle campagne.",
          "J'ai posé des questions pendant la première moitié du rendez-vous et j'ai reformulé leur arbitrage dans leurs mots avant de proposer quoi que ce soit.",
          "Face à l'objection de coût, j'ai déplacé la comparaison : pas le prix de la diffusion contre zéro, mais le prix de la diffusion contre le coût du recours à l'intérim et des postes non pourvus.",
          "J'ai transformé l'accord de principe en un mécanisme exécutable par les directions d'établissement, parce qu'un oui en comité de direction ne recrute personne tout seul.",
        ],
        result:
          "Le groupe est aujourd'hui l'un de mes sept premiers réseaux, avec 129 406 euros sur douze mois, et l'investissement est réparti sur les établissements au lieu de dépendre d'une décision isolée.",
        learning:
          "Un dirigeant n'achète pas une solution, il arbitre entre deux coûts. Mon travail est de rendre le coût de l'inaction visible et chiffré avant de parler du mien.",
      },
      en: {
        situation:
          "Groupe Saint-Gatien runs around one hundred private clinics and hospitals, where each site hires on its own while the group level decides the envelopes. The discussion moved up to general management and group HR because local spend was getting hard to justify.",
        task: "Secure a group level framework, facing executives who saw a cost line rather than an operational lever.",
        action: [
          "I built a quantified read of their own situation before the meeting: market tension on their clinical roles, share of positions left unfilled, cost of a vacant post for a site.",
          "I opened on their operating problem, not on the product: a bed closed for lack of staff costs more than any campaign.",
          "I asked questions for the first half of the meeting and played their trade off back in their own words before proposing anything.",
          "On the cost objection I moved the comparison: not media spend against zero, but media spend against temp agency costs and unfilled positions.",
          "I turned the agreement in principle into something site directors could actually execute, because a yes in a board room does not hire anyone.",
        ],
        result:
          "The group is now one of my top seven networks at 129,406 euros over twelve months, and the investment is spread across sites instead of resting on one isolated decision.",
        learning:
          "An executive does not buy a solution, they arbitrate between two costs. My job is to make the cost of doing nothing visible and quantified before I talk about mine.",
      },
    },
    metrics: [
      "Groupe Saint-Gatien : 129 406 euros sur 12 mois, une centaine de cliniques et hôpitaux privés",
      "Sept premiers réseaux : 84 % du book",
    ],
    targetSeconds: 110,
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
      "Ta méthode de cartographie : sais-tu distinguer qui décide, qui exécute, qui peut bloquer.",
      "Ta capacité à trouver l'objectif commun au lieu de faire un compromis mou.",
      "Ta gestion d'un désaccord interne au client sans prendre parti.",
      "Ta discipline de suivi écrit, qui est ce qui tient un deal multi-acteurs.",
    ],
    traps: [
      "Promettre à chacun ce qu'il veut entendre : les parties se parlent, et la contradiction te coûte le deal.",
      "Choisir un camp parce qu'un interlocuteur est plus sympathique ou plus disponible.",
      "Confondre consensus et décision : tout le monde d'accord et personne qui signe.",
      "Répondre en théorie. La question appelle un cas précis avec des rôles nommés.",
    ],
    followUps: [
      {
        question: "Que fais-tu quand deux décideurs s'opposent frontalement ?",
        how: "Montre que tu ne tranches pas à leur place : tu ramènes la discussion à une métrique partagée et tu laisses la donnée arbitrer.",
      },
      {
        question: "Comment tu identifies le vrai blocage ?",
        how: "Explique que tu testes l'hypothèse au lieu de la croire : tu demandes ce qui se passerait si la décision se prenait demain, et tu écoutes qui est cité.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le réseau et son poids sont exacts (MERCI+ et Family Sphere, 153 211 euros sur 12 mois, services à la personne en franchise). La répartition des positions entre siège et franchisés et le détail du déroulé sont reconstitués : vérifie qui portait quelle position avant de le raconter.",
    answer: {
      fr: {
        situation:
          "Sur MERCI+ et Family Sphere, réseau de services à la personne en franchise, le siège voulait une cohérence de marque et un cadre unique, pendant que les franchisés voulaient garder la main sur leur budget et leurs métiers en tension, qui ne sont pas les mêmes d'une ville à l'autre.",
        task: "Obtenir un cadre commun sans que les franchisés le vivent comme une dépense imposée par le siège.",
        action: [
          "J'ai listé les trois parties et ce que chacune cherchait vraiment : cohérence pour le siège, autonomie budgétaire pour les franchisés, résultat mesurable pour les deux.",
          "J'ai cherché l'objectif partagé plutôt qu'un compromis : personne ne défendait un budget, tout le monde défendait le fait de pourvoir les postes localement.",
          "J'ai proposé un cadre qui sépare ce qui est commun de ce qui est local : les règles et la mesure au siège, le niveau d'investissement et le calendrier chez le franchisé.",
          "J'ai donné au siège la visibilité consolidée qui lui manquait, et au franchisé la lecture de sa propre zone, pour que chacun décide avec ses chiffres.",
          "J'ai écrit après chaque point qui décidait quoi et pour quand, et je l'ai renvoyé aux deux niveaux, ce qui a évité les versions divergentes.",
        ],
        result:
          "Le réseau représente 153 211 euros sur douze mois et fait partie de mes sept premiers comptes, qui pèsent 84 % de mon book.",
        learning:
          "Quand plusieurs décideurs s'opposent, ils ne s'opposent presque jamais sur l'objectif, mais sur qui contrôle quoi. Je redécoupe le périmètre de décision au lieu de négocier le prix.",
      },
      en: {
        situation:
          "At MERCI+ and Family Sphere, a franchised home services network, head office wanted brand consistency and a single framework, while franchisees wanted to keep control of their budget and of the roles they struggle to fill, which differ from one city to the next.",
        task: "Get a common framework without franchisees experiencing it as spend imposed from above.",
        action: [
          "I listed the three parties and what each actually wanted: consistency for head office, budget autonomy for franchisees, measurable results for both.",
          "I looked for the shared objective rather than a compromise: nobody was defending a budget, everybody was defending their ability to fill local roles.",
          "I proposed a framework separating what is common from what is local: rules and measurement at head office, investment level and timing with the franchisee.",
          "I gave head office the consolidated view it lacked, and each franchisee the read of their own catchment area, so both sides decided with their own numbers.",
          "After every call I wrote down who decides what and by when, and sent it to both levels, which killed the divergent versions.",
        ],
        result:
          "The network is worth 153,211 euros over twelve months and sits in my top seven accounts, which represent 84 percent of my book.",
        learning:
          "When decision makers clash, they almost never clash on the objective, they clash on who controls what. So I redraw the decision perimeter instead of negotiating price.",
      },
    },
    metrics: [
      "MERCI+ et Family Sphere : 153 211 euros sur 12 mois",
      "Sept premiers réseaux : 84 % du book",
    ],
    targetSeconds: 100,
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
      "Ta compréhension du modèle agence, central chez Meta : l'agence n'est pas un obstacle, c'est un canal.",
      "Ta capacité à créer de la valeur pour l'agence elle-même, pas seulement pour l'annonceur.",
      "Ton respect du cadre : tu ne contournes pas l'agence pour aller voir le client.",
      "Ta gestion du risque de dépendance quand l'agence tient la relation.",
    ],
    traps: [
      "Présenter l'agence comme un filtre à franchir : rédhibitoire dans une organisation qui vit des agences.",
      "Raconter que tu as gagné en allant voir l'annonceur derrière le dos de l'agence.",
      "Ignorer ce qui motive l'agence, qui est jugée sur sa performance et sur son temps.",
      "Ne pas dire comment tu gardes une lecture directe de la performance malgré l'intermédiaire.",
    ],
    followUps: [
      {
        question: "Comment tu gardes le contrôle du compte si l'agence tient la relation ?",
        how: "Parle de la donnée : tu es celui qui produit la lecture de performance par établissement. C'est ça qui te rend non substituable, pas la proximité.",
      },
      {
        question: "Que fais-tu si l'agence pousse un concurrent ?",
        how: "Reste factuel : tu compares les résultats livrés, tu ne dénigres pas. Et tu regardes si l'agence a un intérêt que tu n'as pas couvert.",
      },
      {
        question: "Direct ou agence, tu préfères quoi ?",
        how: "Ne tombe pas dans le piège de la préférence. Dis ce que chaque canal permet, et que l'agence donne de l'échelle quand le réseau est éclaté.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le deal, la date, le montant et les deux agences sont exacts. Le partage des rôles entre Ideuzo et Matière Grise, ainsi que les échanges décrits, sont reconstitués : confirme qui faisait quoi avant de le raconter en entretien.",
    answer: {
      fr: {
        situation:
          "Sur le réseau Système U, la dépense média ne passait pas par moi en direct mais par deux agences, Ideuzo et Matière Grise, qui tenaient la relation avec les magasins et la centrale. Mon interlocuteur commercial n'était donc pas celui qui recrutait.",
        task: "Faire progresser le réseau en passant par l'agence, sans jamais court-circuiter la relation qu'elle avait construite.",
        action: [
          "J'ai traité l'agence comme un client à part entière : j'ai cherché ce sur quoi elle était jugée, la performance livrée et le temps passé, avant de parler de mon offre.",
          "Je lui ai fourni ce qu'elle ne pouvait pas produire seule : une lecture de performance magasin par magasin, prête à être présentée à son client.",
          "J'ai pris à ma charge la partie technique et le paramétrage, pour que l'agence gagne du temps au lieu d'en perdre à vendre pour moi.",
          "J'ai systématiquement fait remonter les résultats à l'agence avant les échéances budgétaires, pour qu'elle ait ses arguments quand la centrale arbitrait.",
          "Je n'ai jamais sollicité l'annonceur sans l'agence, ce qui m'a valu d'être associé aux discussions les plus structurantes plutôt que consulté à la fin.",
        ],
        result:
          "Le plus gros deal de ma carrière est venu de ce canal : 438 204 euros signés le 18 mai 2026, sur un réseau passé de 101 986 euros de bookings en 2023 à 547 277 euros en 2026.",
        learning:
          "Une agence ne se contourne pas, elle s'équipe. Quand elle gagne grâce à ce que je lui donne, elle me met dans les discussions où je ne serais jamais entré seul.",
      },
      en: {
        situation:
          "On the Système U network, media spend did not come through me directly but through two agencies, Ideuzo and Matière Grise, who owned the relationship with the stores and the central team. My commercial counterpart was not the person doing the hiring.",
        task: "Grow the network through the agency, without ever cutting across the relationship it had built.",
        action: [
          "I treated the agency as a client in its own right: I looked at what it was judged on, delivered performance and time spent, before talking about my offer.",
          "I gave it what it could not produce alone: store by store performance, ready to present to its own client.",
          "I took the technical setup on myself, so the agency gained time instead of spending it selling for me.",
          "I sent results to the agency ahead of every budget milestone, so it had the arguments when the central team arbitrated.",
          "I never approached the advertiser without the agency, which is why I ended up inside the structural conversations instead of being consulted at the end.",
        ],
        result:
          "The biggest deal of my career came through that channel: 438,204 euros signed on 18 May 2026, on a network that went from 101,986 euros of bookings in 2023 to 547,277 in 2026.",
        learning:
          "You do not work around an agency, you equip it. When it wins with what I give it, it puts me in conversations I would never have reached alone.",
      },
    },
    metrics: [
      "438 204 euros signés le 18 mai 2026 via Ideuzo et Matière Grise",
      "Système U : 101 986 euros en 2023, 547 277 euros en 2026",
    ],
    targetSeconds: 105,
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
      "Ta tenue sur la valeur : est-ce que tu cèdes dès que la pression monte.",
      "Ta capacité à comprendre ce que cache la demande de remise, qui est rarement une question de prix.",
      "Ta maîtrise de la contrepartie : tu ne donnes rien sans obtenir quelque chose.",
      "Ta discipline de marge, qui est un signal direct sur la façon dont tu géreras un portefeuille chez Meta.",
    ],
    traps: [
      "Accepter vite pour sécuriser le deal en fin de trimestre : l'intervieweur le lit immédiatement.",
      "Refuser sèchement, sans explorer ce que le client cherche réellement à résoudre.",
      "Justifier ton prix par tes coûts ou par ta politique interne, qui n'intéressent pas le client.",
      "Oublier l'effet de précédent : la remise consentie une fois devient le nouveau prix de référence.",
    ],
    followUps: [
      {
        question: "Et si le client menace d'aller chez le concurrent ?",
        how: "Ne panique pas à l'oral. Demande sur quoi porte la comparaison, montre que tu compares des résultats livrés, et laisse la possibilité qu'un client parte à un prix que tu ne veux pas faire.",
      },
      {
        question: "Tu accordes des remises, parfois ?",
        how: "Dis oui, mais toujours contre quelque chose : durée, volume, périmètre, engagement d'activation. Une remise sans contrepartie est une perte sèche.",
      },
      {
        question: "Comment tu évites que la question arrive ?",
        how: "Parle de ce que tu fais en amont : construire la valeur en chiffres dès la première conversation, pour que la discussion porte sur le résultat et pas sur la ligne de coût.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Aucune négociation de remise précise n'est documentée dans ta banque de faits : remplace la situation et le résultat par un cas réel où tu as tenu ou aménagé ton prix, avec le montant et la contrepartie obtenue. Garde la méthode, change l'histoire.",
    answer: {
      fr: {
        situation:
          "Un compte important me demande une remise significative en fin de cycle, en présentant le prix comme la dernière condition pour signer. La demande arrive tard, au moment où j'ai le plus à perdre.",
        task: "Protéger la valeur du contrat sans braquer le client ni laisser le deal s'arrêter sur un chiffre.",
        action: [
          "Je ne réponds pas sur le prix tout de suite : je demande ce que la remise doit résoudre chez lui, contrainte de budget, comparaison concurrente ou doute sur le résultat.",
          "Je requalifie la demande. Si c'est un doute sur le résultat, la remise ne le lèvera pas, et je ramène la discussion sur la preuve chiffrée déjà disponible.",
          "Si la contrainte de budget est réelle, je propose de réduire le périmètre plutôt que le prix unitaire, pour que la valeur par unité reste intacte.",
          "Quand j'accorde quelque chose, j'exige une contrepartie explicite : durée d'engagement, volume, élargissement du périmètre ou calendrier d'activation.",
          "Je dis clairement ce que je ne peux pas faire, et je le dis une seule fois, pour que ma position soit lisible et ne se renégocie pas à chaque échange.",
        ],
        result:
          "Le contrat est signé au niveau de valeur défendu, avec une contrepartie qui l'a rendu acceptable pour les deux parties, et sans créer de précédent tarifaire pour les échéances suivantes.",
        learning:
          "Une demande de remise est presque toujours une question déguisée sur le risque perçu. Tant que je n'ai pas identifié laquelle, je ne bouge pas mon prix.",
      },
      en: {
        situation:
          "A major account asks for a significant discount late in the cycle, presenting price as the last condition to sign. The request lands exactly when I have the most to lose.",
        task: "Protect the value of the contract without antagonising the client or letting the deal stall on a number.",
        action: [
          "I do not answer on price straight away: I ask what the discount is meant to solve, a real budget constraint, a competitive comparison, or doubt about results.",
          "I requalify the request. If it is doubt about results, a discount will not remove it, so I bring the conversation back to the evidence we already have.",
          "If the budget constraint is real, I reduce scope rather than unit price, so value per unit stays intact.",
          "When I do concede, I require an explicit counterpart: term, volume, wider perimeter, or a committed activation timeline.",
          "I state clearly what I cannot do, and I say it once, so my position is readable and does not get renegotiated at every exchange.",
        ],
        result:
          "The contract signs at the value level I defended, with a counterpart that made it acceptable to both sides, and without setting a pricing precedent for the next renewals.",
        learning:
          "A discount request is almost always a disguised question about perceived risk. Until I know which risk it is, I do not move my price.",
      },
    },
    metrics: [],
    targetSeconds: 95,
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
      "Ta capacité à développer un compte existant, qui est le cœur du métier d'Account Manager.",
      "Ta façon d'introduire un produit supplémentaire sans casser ce qui marche déjà.",
      "Ta lecture de la donnée pour détecter où se trouve le potentiel non exploité.",
      "Ta capacité à obtenir ces résultats dans un contexte que tu n'avais pas choisi.",
    ],
    traps: [
      "Confondre croissance et renouvellement : si le compte a juste reconduit, ce n'est pas ta réponse.",
      "Attribuer la croissance au produit ou au marché plutôt qu'à des décisions que tu as prises.",
      "Survendre un accord : ne présente jamais ce compte comme un accord annuel ou une opération de marque employeur.",
      "Oublier la dimension d'adoption : le chiffre vient du nombre d'établissements actifs, pas d'une signature.",
    ],
    followUps: [
      {
        question: "Comment tu as identifié le potentiel ?",
        how: "Parle de la donnée d'usage : établissements actifs contre établissements du réseau, postes publiés sans investissement, zones où les candidatures manquaient.",
      },
      {
        question: "Comment tu as introduit le second produit ?",
        how: "Raconte la séquence : preuve sur le premier usage, puis extension sur un besoin non couvert, pas un catalogue présenté d'un coup.",
      },
      {
        question: "Que s'est-il passé quand tu as rendu le compte ?",
        how: "Sois factuel et honnête : tu as transmis la mécanique d'activation et la lecture par établissement, et tu dis ce que tu ne contrôlais plus.",
      },
    ],
    basis: "vecu",
    answer: {
      fr: {
        situation:
          "Pendant neuf mois en 2023 et 2024, j'ai couvert un book de National Account Manager en plus du mien, après le départ de la titulaire, sur des comptes santé et services à la personne dont Petits-fils, Shiva et AXA. Je reprenais des comptes que je n'avais pas construits, avec des interlocuteurs qui venaient de perdre leur référent.",
        task: "Stabiliser puis développer ces comptes, en particulier Petits-fils, sans période de flottement liée au changement d'interlocuteur.",
        action: [
          "J'ai commencé par la donnée d'usage plutôt que par les rendez-vous : quels établissements du réseau étaient réellement actifs, et lesquels publiaient sans investir.",
          "J'ai priorisé les établissements à fort volume de postes mais faible activité, parce que c'est là que l'écart entre potentiel et usage était le plus grand.",
          "J'ai déployé la diffusion sponsorisée établissement par établissement, jusqu'à environ 106 établissements actifs, au lieu de négocier un cadre unique au siège.",
          "J'ai introduit un second produit seulement une fois la preuve faite sur le premier : le sourcing, dont Featured Employer, adopté par 19 établissements.",
          "J'ai tenu des revues de performance régulières pour que chaque établissement voie son propre résultat, ce qui a rendu la reconduction évidente sans argumentaire.",
        ],
        result:
          "Sur les deux années où j'ai tenu le compte, Petits-fils a représenté environ 486 000 euros, 224 000 la première année et 262 000 la seconde, avec un usage réparti sur environ 106 établissements en diffusion sponsorisée et 19 en sourcing.",
        learning:
          "Sur un réseau, la croissance se lit en nombre d'établissements actifs bien avant de se lire en euros. Le second produit ne se vend qu'une fois le premier prouvé.",
      },
      en: {
        situation:
          "For nine months across 2023 and 2024 I covered a National Account Manager book on top of my own, after the incumbent left, on healthcare and home services accounts including Petits-fils, Shiva and AXA. I inherited accounts I had not built, with contacts who had just lost their point person.",
        task: "Stabilise and then grow those accounts, Petits-fils in particular, with no drift caused by the handover.",
        action: [
          "I started from usage data rather than from meetings: which sites in the network were actually active, and which were posting without investing.",
          "I prioritised sites with high job volume and low activity, because that is where the gap between potential and usage was widest.",
          "I rolled sponsored distribution out site by site, up to around 106 active sites, instead of negotiating one single framework at head office.",
          "I introduced a second product only once the first was proven: sourcing, including Featured Employer, adopted by 19 sites.",
          "I ran regular performance reviews so each site saw its own result, which made renewal obvious without a pitch.",
        ],
        result:
          "Across the two years I held the account, Petits-fils represented around 486,000 euros, 224,000 in the first year and 262,000 in the second, with usage spread over about 106 sites on sponsored distribution and 19 on sourcing.",
        learning:
          "In a network, growth shows up as active sites long before it shows up as revenue. The second product only sells once the first one is proven.",
      },
    },
    metrics: [
      "Petits-fils : environ 486 K€ sur deux ans, 224 K€ la première année, 262 K€ la seconde",
      "Environ 106 établissements en Sponsored Jobs, 19 en Smart Sourcing dont Featured Employer",
      "Cover National Account Manager : 9 mois en 2023-24, en plus de son propre book",
    ],
    targetSeconds: 115,
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
      "Ta capacité à rester présent sans harceler, sur plusieurs trimestres.",
      "Ton honnêteté : un long cycle est parfois une mauvaise qualification que tu as laissée traîner.",
      "Ta lecture du vrai déclencheur, souvent externe, et ce que tu avais préparé pour l'exploiter.",
      "Ta discipline de pipeline : un deal long ne doit pas masquer un trimestre vide.",
    ],
    traps: [
      "Présenter la durée comme une preuve de ténacité, alors que c'est souvent un signal de mauvaise qualification.",
      "Attribuer le déblocage à la chance ou au timing, sans dire ce que tu avais mis en place pour être prêt.",
      "Oublier de dire comment tu as tenu ton chiffre pendant que ce deal n'avançait pas.",
      "Ne pas savoir dire à quel moment tu aurais dû arrêter d'y croire.",
    ],
    followUps: [
      {
        question: "À quel moment aurais-tu dû le disqualifier ?",
        how: "Réponds franchement avec un critère : absence d'accès au décideur budgétaire après deux cycles. Un commercial senior sait nommer son seuil d'abandon.",
      },
      {
        question: "Comment tu restes présent sans être lourd ?",
        how: "Décris une cadence utile : tu reviens avec une donnée nouvelle sur son marché, pas avec une relance. La valeur remplace la fréquence.",
      },
      {
        question: "Comment tu as sécurisé ton trimestre pendant ce temps ?",
        how: "Montre la gestion de portefeuille : un book de 817 réseaux parents impose de faire vivre plusieurs cycles courts pendant qu'un cycle long avance en fond.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le compte et son poids sont exacts (Accor, 214 476 euros sur 12 mois, 18,6 % de ton book). La durée du cycle, l'élément déclencheur et le déroulé sont reconstitués : c'est le point le plus sensible de cette réponse, remplace le déblocage par ce qui s'est réellement passé avant de la dire.",
    answer: {
      fr: {
        situation:
          "Accor est aujourd'hui mon premier réseau, avec 214 476 euros sur douze mois et 18,6 % de mon book, mais la discussion a mis plusieurs trimestres à aboutir. Les établissements recrutaient chacun de leur côté et personne, au centre, ne portait seul l'arbitrage.",
        task: "Faire avancer un cycle sans propriétaire clair côté client, sans laisser le deal absorber le temps dû au reste de mon portefeuille.",
        action: [
          "J'ai posé un critère de qualification explicite : sans accès à celui qui arbitre le budget, je ne considérais pas le deal comme actif dans mon pipeline.",
          "J'ai remplacé la relance par l'apport de données : à chaque contact, je revenais avec une lecture du marché de l'emploi sur leurs métiers et leurs zones, pas avec une question sur l'avancement.",
          "J'ai travaillé les établissements qui pouvaient décider seuls, pour créer de la preuve locale pendant que le niveau central n'avançait pas.",
          "J'ai préparé à l'avance le cadre et la mécanique d'activation, pour être prêt le jour où une échéance interne ouvrirait la fenêtre.",
          "J'ai maintenu ma production ailleurs pendant toute cette période, en faisant tourner des cycles courts sur le reste de mes 817 réseaux parents.",
        ],
        result:
          "Quand la fenêtre s'est ouverte, le cadre était prêt et le déploiement a pu démarrer sans délai. Le compte est devenu mon premier réseau, à 214 476 euros sur douze mois, et je n'ai pas raté de trimestre pendant l'attente, avec 108 % au Q1 et 133 % au Q2 2026.",
        learning:
          "Un cycle long ne se gagne pas en insistant, il se gagne en étant prêt le jour où le client a une raison d'agir. Entre-temps, un deal long ne doit jamais devenir mon excuse de trimestre.",
      },
      en: {
        situation:
          "Accor is now my largest network at 214,476 euros over twelve months and 18.6 percent of my book, but the discussion took several quarters to land. Sites were hiring independently and nobody at the centre owned the decision alone.",
        task: "Move a cycle forward with no clear owner on the client side, without letting it eat the time owed to the rest of my portfolio.",
        action: [
          "I set an explicit qualification rule: without access to whoever arbitrates the budget, I did not count the deal as active in my pipeline.",
          "I replaced follow ups with data: at every contact I came back with a read of the labour market on their roles and their locations, not with a status question.",
          "I worked the sites that could decide on their own, to build local proof while the centre was not moving.",
          "I prepared the framework and the activation mechanics in advance, so I would be ready the day an internal deadline opened the window.",
          "I kept producing elsewhere throughout, running short cycles across the rest of my 817 parent networks.",
        ],
        result:
          "When the window opened, the framework was ready and rollout started with no delay. The account became my largest network at 214,476 euros over twelve months, and I did not miss a quarter while waiting, landing 108 percent in Q1 and 133 percent in Q2 2026.",
        learning:
          "A long cycle is not won by pushing, it is won by being ready the day the client has a reason to act. In the meantime, a long deal must never become my excuse for the quarter.",
      },
    },
    metrics: [
      "Accor : 214 476 euros sur 12 mois, 18,6 % du book",
      "Book : 817 réseaux parents, 4 584 comptes advertisers",
      "Atteinte : 108 % au Q1 2026, 133 % au Q2 2026",
    ],
    targetSeconds: 115,
  },
];
