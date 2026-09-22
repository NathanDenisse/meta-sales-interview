import type { Question } from "../types";

export const qAgences: Question[] = [
  {
    id: "agence-deal-gagne",
    category: "agences",
    difficulty: "classique",
    priority: true,
    prompt: {
      fr: "Raconte-moi un deal que tu as gagné avec une agence dans la boucle.",
      en: "Tell me about a deal you won with an agency in the loop.",
    },
    whatTheyTest: [
      "Si tu sais gagner sans contrôler la relation finale, ce qui est la situation normale chez Meta.",
      "Ce que tu as apporté à l'agence elle-même, et pas seulement à l'annonceur.",
      "Ta part exacte dans une chaîne où trois acteurs peuvent revendiquer la victoire.",
      "Ta capacité à mesurer un résultat alors que tu ne vois pas toute l'exécution.",
    ],
    traps: [
      "Raconter le deal comme si l'agence n'avait été qu'un tampon administratif sur le chemin.",
      "Laisser entendre que tu as gagné en allant chercher l'annonceur sans l'agence.",
      "Oublier de dire ce que l'agence a gagné, alors que c'est ce qui rend la victoire reproductible.",
      "Citer un chiffre global de réseau sans préciser ce que ce deal-là représentait dedans.",
    ],
    followUps: [
      {
        question: "Ce n'est pas ton plus gros deal ?",
        how: "Dis-le franchement : ton plus gros deal, 438 204 euros signés le 18 mai 2026, est lui aussi passé par un intermédiaire. Ça renforce ton propos, le canal agence n'a rien de marginal chez toi.",
      },
      {
        question: "Qu'est-ce que l'agence a réellement fait, et qu'est-ce que tu as fait ?",
        how: "Découpe sans t'attribuer son travail : elle tenait la relation et la diffusion, tu apportais la lecture de performance et le paramétrage. Un recruteur repère tout de suite celui qui s'approprie le mérite du partenaire.",
      },
      {
        question: "Comment tu sais que ça se reproduira ?",
        how: "Montre la trajectoire plutôt que la satisfaction déclarée : le canal intermédiaire est devenu ta voie normale sur ce réseau, pas une exception liée à une personne.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le réseau Family Sphere, l'intermédiaire Tomorhow et le montant de 153 211 euros sur douze mois sont exacts, mais ce montant couvre MERCI+ et Family Sphere ensemble et pas ce seul deal. Le déroulé, l'ordre des étapes et le contenu des échanges avec Tomorhow sont reconstitués : vérifie ce que Tomorhow porte réellement, la diffusion seule ou aussi le paramétrage, avant de le raconter.",
    answer: {
      fr: {
        situation:
          "Family Sphere est un réseau de garde d'enfants en franchise, et une partie de ses agences locales ne passe pas par moi en direct mais par un intermédiaire, Tomorhow, qui diffuse pour elles. Mon interlocuteur commercial n'était donc ni celui qui recrutait ni celui qui payait le recrutement.",
        task: "Faire investir un réseau d'agences locales alors que la diffusion, et une partie du paramétrage, étaient entre les mains d'un intermédiaire.",
        action: [
          "J'ai clarifié le partage des rôles avec Tomorhow avant de parler d'offre : ce qu'il maîtrisait dans la diffusion, ce que l'agence locale décidait, ce qui remontait à la tête de réseau.",
          "J'ai posé le cadre à voix haute dès le premier échange, en lui disant que je ne solliciterais aucune agence locale sans lui.",
          "Je lui ai apporté la seule chose qu'il ne pouvait pas produire seul : la lecture de performance agence par agence, coût par candidature et volume de candidatures, comparée aux agences restées en diffusion gratuite.",
          "J'ai pris à ma charge l'analyse et le paramétrage, pour qu'il n'ait pas à arbitrer entre mon sujet et le reste de son activité.",
          "J'ai calé une cadence de revue avec lui avant les échéances budgétaires du réseau, pour qu'il arrive chez son client avec des chiffres et pas avec une proposition commerciale.",
        ],
        result:
          "MERCI+ et Family Sphere représentent aujourd'hui 153 211 euros sur douze mois et font partie de mes sept premiers réseaux, qui pèsent 84 % de mon revenu. Sur ce réseau, le canal intermédiaire est devenu la voie normale et pas une exception.",
        learning:
          "Quand un intermédiaire tient la relation, la question n'est jamais de savoir comment le contourner, mais ce que je lui donne qu'il ne peut pas fabriquer seul.",
      },
      en: {
        situation:
          "Family Sphere is a franchised childcare network, and part of its local branches do not come to me directly but through a partner, Tomorhow, who runs distribution for them. My commercial counterpart was neither the person hiring nor the person paying for hiring.",
        task: "Get a network of local branches to invest while distribution, and part of the campaign setup, sat with a partner.",
        action: [
          "I clarified the split of roles with Tomorhow before talking about any offer: what they controlled in distribution, what the local branch decided, what escalated to network level.",
          "I set the rule out loud in the first conversation, telling them I would never approach a local branch without them.",
          "I gave them the one thing they could not produce alone: branch by branch performance, cost per application and application volume, against branches still posting for free.",
          "I took the analysis and the setup on myself, so they never had to choose between my topic and the rest of their business.",
          "I set a review cadence ahead of the network budget milestones, so they walked into their own client with numbers rather than with a vendor proposal.",
        ],
        result:
          "MERCI+ and Family Sphere are now worth 153,211 euros over twelve months and sit in my top seven networks, which carry 84 percent of my revenue. On that network the partner channel became the normal route, not an exception.",
        learning:
          "When a partner owns the relationship, the question is never how to go around them, it is what I give them that they cannot build on their own.",
      },
    },
    metrics: [
      "MERCI+ et Family Sphere : 153 211 euros sur 12 mois, en partie via l'intermédiaire Tomorhow",
      "Sept premiers réseaux : 84 % du revenu du book",
      "Plus gros deal signé, 438 204 euros le 18 mai 2026, passé lui aussi par un intermédiaire",
    ],
    targetSeconds: 110,
  },

  {
    id: "agence-interets-divergents",
    category: "agences",
    difficulty: "piege",
    priority: true,
    prompt: {
      fr: "Que fais-tu quand l'intérêt de l'agence ne coïncide pas avec celui de l'annonceur ?",
      en: "What do you do when the agency's interest does not match the advertiser's?",
    },
    whatTheyTest: [
      "Qui tu sers en dernier ressort quand les deux intérêts ne se recouvrent plus.",
      "Ta compréhension du fait que l'agence a ses propres objectifs, contractuels et commerciaux.",
      "Ta capacité à chercher l'argument qui fait gagner les deux avant de trancher.",
      "Ta tenue éthique : la tentation de court-circuiter s'entend en trois secondes.",
    ],
    traps: [
      "Répondre « le client final passe avant » sans voir que l'agence est aussi ton client.",
      "Dire que tu irais parler à l'annonceur sans l'agence, ce qui te disqualifie dans une organisation qui vit de ses partenaires.",
      "Nier le conflit et prétendre que tout le monde veut la même chose.",
      "Rester au niveau des principes sans jamais dire ce que tu mets concrètement sur la table.",
    ],
    followUps: [
      {
        question: "Et si l'agence te demande de ne pas partager une donnée avec son client ?",
        how: "Distingue le confidentiel du factuel. Tu peux accepter de ne pas la contourner, tu ne peux pas accepter de cacher un résultat qui fausse la décision de l'annonceur. Dis où tu places la limite.",
      },
      {
        question: "Tu as déjà tranché contre une agence ?",
        how: "Si tu ne l'as pas fait, dis-le et donne ton critère : tu tranches contre l'agence seulement quand sa recommandation dégrade un résultat mesurable, et tu le fais devant elle, jamais derrière elle.",
      },
      {
        question: "Comment tu repères cette divergence tôt ?",
        how: "Parle de la structure de rémunération et des indicateurs sur lesquels l'agence est jugée. Tu les demandes explicitement au début de la relation, avant d'avoir un désaccord à gérer.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Aucun cas documenté de divergence franche entre un intermédiaire et un annonceur dans ta banque de faits. Garde la méthode et remplace la situation, le montant en jeu et le résultat par un arbitrage réel, par exemple une répartition de budget entre établissements discutée avec Ideuzo, Matière Grise ou Tomorhow, avec ce que ça a changé en euros.",
    answer: {
      fr: {
        situation:
          "Un intermédiaire recommande à son client une allocation qui l'arrange, en concentrant le budget là où le paramétrage lui demande le moins de travail, alors que les postes réellement en tension chez l'annonceur sont ailleurs. Les deux sont mes clients, et je vois la divergence dans la donnée avant qu'eux ne la voient.",
        task: "Faire corriger l'allocation sans faire perdre la face à l'agence et sans fragiliser la relation qu'elle a avec son propre client.",
        action: [
          "Je vérifie d'abord que la divergence est réelle et pas une déduction rapide de ma part, en regardant les candidatures et le coût par candidature poste par poste.",
          "Je vais voir l'agence seule, avant toute réunion commune, pour lui montrer la donnée et lui laisser le temps de se positionner sans public.",
          "Je cherche l'argument qui fait gagner les deux : une preuve d'incrémentalité qu'elle peut présenter à son client comme une victoire qu'elle a obtenue, et non comme une correction que je lui impose.",
          "Si elle résiste, je propose un test délimité plutôt qu'un changement de doctrine, parce qu'un test est réversible et engage beaucoup moins son crédit.",
          "Je ne passe jamais au-dessus d'elle pour parler à l'annonceur. Si le désaccord persiste, je pose les deux options chiffrées dans la même réunion, avec l'agence présente, et je laisse l'annonceur choisir.",
        ],
        result:
          "Le budget cesse de financer des postes déjà pourvus et se déplace sur ceux qui restent ouverts, le coût par candidature des postes concernés baisse, et l'agence garde la propriété de la recommandation devant son client. Je reste celui qui apporte la donnée, pas celui qui la conteste.",
        learning:
          "Un conflit d'intérêts avec une agence ne se gagne pas en ayant raison, il se gagne en fabriquant une version de la bonne décision qu'elle peut signer de son nom.",
      },
      en: {
        situation:
          "A partner recommends an allocation that suits them, concentrating budget where setup costs them the least work, while the roles the advertiser actually struggles to fill sit elsewhere. Both are my clients, and I see the divergence in the data before either of them does.",
        task: "Get the allocation corrected without making the agency lose face and without weakening the relationship it has with its own client.",
        action: [
          "First I check the divergence is real and not a quick inference of mine, looking at applications and cost per application role by role.",
          "I meet the agency alone, before any joint call, to show them the data and let them take a position without an audience.",
          "I look for the argument that makes both sides win: an incrementality proof they can present to their client as a win they delivered, not as a correction I imposed.",
          "If they push back, I propose a bounded test rather than a change of doctrine, because a test is reversible and puts far less of their credibility at stake.",
          "I never go over their head to reach the advertiser. If the disagreement holds, I put both quantified options in the same meeting, with the agency in the room, and let the advertiser choose.",
        ],
        result:
          "Budget stops funding roles that are already filled and moves to the ones still open, cost per application drops on those roles, and the agency keeps ownership of the recommendation in front of its client. I stay the person who brings the data, not the one who argues with it.",
        learning:
          "You do not win a conflict of interest with an agency by being right, you win it by building a version of the right decision they can sign their own name on.",
      },
    },
    metrics: [],
    targetSeconds: 100,
  },

  {
    id: "agence-acces-client",
    category: "agences",
    difficulty: "piege",
    prompt: {
      fr: "L'agence te bloque l'accès à l'annonceur final. Comment tu gères ?",
      en: "The agency blocks your access to the end advertiser. How do you handle it?",
    },
    whatTheyTest: [
      "Ta réaction immédiate : forcer l'accès ou devenir utile, la réponse les renseigne en une phrase.",
      "Ta compréhension de ce que l'agence protège, qui est sa valeur commerciale et pas son confort.",
      "Ta capacité à piloter un compte sans visibilité complète sur la décision.",
      "Ta lucidité sur le risque de dépendance, et ce que tu fais pour le réduire proprement.",
    ],
    traps: [
      "Raconter que tu as trouvé un contact chez l'annonceur pour passer outre : c'est le signal éliminatoire de cette question.",
      "Traiter le blocage comme de la mauvaise foi, alors que c'est un réflexe économique rationnel.",
      "Attendre passivement, en espérant que la relation s'ouvre d'elle-même avec le temps.",
      "Oublier de dire comment tu gardes une lecture fiable de la performance malgré l'absence d'accès.",
    ],
    followUps: [
      {
        question: "Et si tu apprends que l'annonceur est mécontent et ne le sait pas de ton côté ?",
        how: "Dis que tu remontes le sujet à l'agence avec la donnée, et que tu proposes d'être dans la réunion à trois. Tu ne transformes pas une insatisfaction en porte d'entrée.",
      },
      {
        question: "Tu acceptes de ne jamais rencontrer le décideur ?",
        how: "Non, mais tu le demandes comme un service rendu à l'agence, pour un sujet qu'elle ne veut pas porter seule, technique ou lecture de marché. L'accès se mérite, il ne se réclame pas.",
      },
      {
        question: "Comment tu évites de dépendre totalement de l'agence ?",
        how: "Parle de la donnée que tu produis et que personne d'autre ne produit, et de la cadence écrite. C'est ce qui te garde dans la décision même sans accès direct.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le fait que plusieurs réseaux de ton portefeuille soient adressés via des intermédiaires, Ideuzo, Matière Grise, Schiever sur une partie des entités, Tomorhow sur Family Sphere, est exact, et les bookings du réseau Système U aussi. Un blocage explicite d'accès n'est pas documenté : garde le raisonnement sur l'absence d'accès direct, et n'affirme un refus formel que si tu en as vraiment vécu un.",
    answer: {
      fr: {
        situation:
          "Sur une partie de mon portefeuille, l'accès direct à celui qui décide est l'exception plutôt que la règle : Système U est adressé via Ideuzo et Matière Grise, une partie des entités passe par Schiever, et une partie de Family Sphere par Tomorhow. L'intermédiaire tient la relation et n'a aucune raison spontanée de me mettre dans la salle.",
        task: "Faire progresser ces comptes sans accès direct au décideur, et sans chercher à forcer cet accès.",
        action: [
          "J'accepte le cadre à voix haute, en disant à l'intermédiaire que je ne solliciterai pas son client sans lui. Une phrase, et la discussion change de nature.",
          "Je demande ce qui justifierait, de son point de vue, ma présence dans un échange : un sujet technique, une lecture de marché, une revue de performance qu'il ne veut pas porter seul.",
          "Je me rends utile sur ce qu'il n'a pas envie de faire, le diagnostic et le paramétrage, au lieu de réclamer ce qu'il veut garder, la relation commerciale.",
          "Je remplace l'accès par la donnée : je produis la lecture de performance établissement par établissement, ce qui me met dans la décision même quand je ne suis pas dans la pièce.",
          "Je nomme le risque avec lui plutôt que de le contourner : si je n'ai aucune visibilité sur l'arbitrage, je le dis et je propose un point trimestriel à trois, pas un contact direct.",
        ],
        result:
          "Sur Système U, adressé du début à la fin via des intermédiaires, les bookings sont passés de 101 986 euros en 2023 à 547 277 euros en 2026. Je n'ai jamais eu besoin d'un accès direct pour faire croître le réseau, et l'intermédiaire m'associe aujourd'hui aux discussions structurantes.",
        learning:
          "Sans accès direct, ce qui me rend non substituable n'est pas la proximité avec le client mais le fait d'être celui qui produit la lecture de performance. Un blocage se traite en devenant utile, jamais en le forçant.",
      },
      en: {
        situation:
          "On part of my portfolio, direct access to the decision maker is the exception rather than the rule: Système U goes through Ideuzo and Matière Grise, some entities through Schiever, and part of Family Sphere through Tomorhow. The partner owns the relationship and has no spontaneous reason to put me in the room.",
        task: "Grow those accounts without direct access to the decision maker, and without trying to force that access.",
        action: [
          "I accept the rule out loud, telling the partner I will not approach their client without them. One sentence, and the nature of the conversation changes.",
          "I ask what would justify my presence in a conversation from their point of view: a technical topic, a market read, a performance review they would rather not carry alone.",
          "I make myself useful on what they do not want to do, diagnosis and setup, instead of asking for what they want to keep, the commercial relationship.",
          "I replace access with data: I produce the site by site performance read, which puts me inside the decision even when I am not in the room.",
          "I name the risk with them rather than working around it: if I have no visibility on the trade off, I say so and propose a quarterly three way review, not a direct contact.",
        ],
        result:
          "On Système U, addressed through partners from start to finish, bookings went from 101,986 euros in 2023 to 547,277 euros in 2026. I never needed direct access to grow the network, and the partner now brings me into the structural conversations.",
        learning:
          "Without direct access, what makes me hard to replace is not closeness to the client, it is being the person who produces the performance read. You solve a blocked door by becoming useful, never by forcing it.",
      },
    },
    metrics: [
      "Système U, adressé via Ideuzo, Matière Grise et Schiever sur une partie des entités : 101 986 euros de bookings en 2023, 547 277 euros en 2026",
      "Family Sphere adressé en partie via Tomorhow",
    ],
    targetSeconds: 105,
  },

  {
    id: "agence-prioriser-plateforme",
    category: "agences",
    difficulty: "moins-classique",
    prompt: {
      fr: "Comment obtiens-tu qu'une agence pousse ta plateforme plutôt qu'une autre ?",
      en: "How do you get an agency to push your platform rather than another one?",
    },
    whatTheyTest: [
      "Ta compréhension de l'économie réelle d'une agence : son temps, sa marge, la rétention de son client.",
      "Ta capacité à réduire le coût de recommandation, plutôt qu'à augmenter la pression commerciale.",
      "Ton honnêteté concurrentielle, parce que dénigrer devant une agence se sait vite.",
      "Ta façon de mesurer la préférence, autrement qu'au ressenti de la dernière réunion.",
    ],
    traps: [
      "Parler d'incentive financier comme si c'était la seule réponse : une agence choisit aussi ce qui lui coûte le moins d'effort.",
      "Demander l'exclusivité, que personne ne t'accordera, au lieu de demander une part de test.",
      "Attaquer le concurrent : tu perds la confiance de l'agence dans la même phrase.",
      "Confondre relation sympathique et préférence réelle, qui se mesure en volume déplacé.",
    ],
    followUps: [
      {
        question: "Et si l'agence est déjà engagée avec un concurrent ?",
        how: "Ne demande pas un basculement. Demande un périmètre restreint et mesurable où tu fais la preuve, avec une comparaison que l'agence pourra présenter elle-même.",
      },
      {
        question: "Comment tu mesures que tu es devenu le choix par défaut ?",
        how: "Par le volume déplacé et par les demandes entrantes de l'agence, pas par la qualité des échanges. Cite la progression du réseau avec les mêmes intermédiaires.",
      },
      {
        question: "Tu fais quoi si un concurrent est meilleur sur un cas précis ?",
        how: "Tu le reconnais. C'est ce qui rend crédible tout le reste de ce que tu affirmes, et l'agence s'en souvient au moment où le choix est ouvert.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "La croissance du réseau Système U avec les mêmes intermédiaires est exacte, année par année. Les leviers décrits, le temps gagné par l'agence et la façon dont elle arbitre entre plateformes, sont ma reconstitution de ton mode opératoire : vérifie ce que tu as réellement pris à ta charge chez Ideuzo et Matière Grise avant de l'affirmer.",
    answer: {
      fr: {
        situation:
          "Sur Système U, le budget de diffusion ne dépend pas de moi mais d'intermédiaires qui ont plusieurs plateformes à disposition et aucune obligation d'en privilégier une. Leur arbitrage se joue autant sur le temps que mon produit leur coûte que sur le résultat qu'il livre.",
        task: "Devenir la recommandation par défaut de l'intermédiaire, sans acheter cette préférence et sans dénigrer les autres plateformes.",
        action: [
          "J'ai demandé sur quoi l'agence était jugée par son propre client, résultat livré et temps passé, et j'ai regardé où mon produit lui coûtait de l'effort.",
          "J'ai réduit ce coût d'effort : analyse de compte et benchmark local prêts à présenter, paramétrage pris en charge, pour qu'une recommandation chez moi soit la moins chère à produire.",
          "J'ai fourni la comparaison chiffrée entre les établissements sponsorisés et ceux restés en gratuit, pour que l'agence défende une incrémentalité et non une préférence de fournisseur.",
          "J'ai systématiquement été le premier à signaler un problème sur mon propre périmètre, avant que le client ne le découvre, ce qui me coûte à court terme et me sert sur la durée.",
          "Je n'ai jamais demandé d'exclusivité : j'ai demandé un périmètre de test mesurable, puis j'ai laissé les chiffres élargir le périmètre.",
        ],
        result:
          "Avec les mêmes intermédiaires, les bookings du réseau sont passés de 184 732 euros en 2024 à 352 979 en 2025 et 547 277 en 2026. La préférence s'est traduite en volume déplacé, pas en déclaration d'intention.",
        learning:
          "Une agence pousse ce qui lui fait gagner devant son client et ce qui lui coûte le moins de travail. Je joue sur les deux, dans cet ordre.",
      },
      en: {
        situation:
          "On Système U the distribution budget does not sit with me but with partners who have several platforms available and no obligation to favour any of them. Their choice depends as much on how much of their time my product costs as on the results it delivers.",
        task: "Become the partner's default recommendation, without buying that preference and without running competitors down.",
        action: [
          "I asked what the agency was judged on by its own client, delivered results and time spent, and looked at where my product cost them effort.",
          "I cut that effort: account analysis and local benchmark ready to present, setup handled on my side, so that recommending me became the cheapest recommendation to produce.",
          "I supplied the quantified comparison between sponsored sites and sites still posting for free, so the agency could defend incrementality rather than a vendor preference.",
          "I made a point of flagging problems on my own perimeter first, before the client found them, which costs me in the short term and pays over time.",
          "I never asked for exclusivity: I asked for a measurable test perimeter, then let the numbers widen it.",
        ],
        result:
          "With the same partners, network bookings went from 184,732 euros in 2024 to 352,979 in 2025 and 547,277 in 2026. The preference showed up as volume moved, not as a statement of intent.",
        learning:
          "An agency pushes what makes it win in front of its client and what costs it the least work. I play on both, in that order.",
      },
    },
    metrics: [
      "Système U avec les mêmes intermédiaires : 184 732 euros en 2024, 352 979 en 2025, 547 277 en 2026",
    ],
    targetSeconds: 105,
  },

  {
    id: "agence-former",
    category: "agences",
    difficulty: "moins-classique",
    prompt: {
      fr: "Comment fais-tu monter en compétence une équipe d'agence sur tes produits ?",
      en: "How do you ramp an agency team up on your products?",
    },
    whatTheyTest: [
      "Si tu sais faire vendre par d'autres, ce qui est le coeur du métier partenaire.",
      "Ta capacité à industrialiser un support au lieu de refaire le travail à chaque demande.",
      "Ta façon de mesurer l'autonomie obtenue, et pas le nombre de sessions tenues.",
      "Ta gestion du turnover chez le partenaire, qui efface une formation en quelques mois.",
    ],
    traps: [
      "Décrire une formation produit descendante : une équipe d'agence retient ce qui l'aide à gagner son propre client.",
      "Compter les sessions plutôt que les campagnes lancées sans toi.",
      "Oublier le turnover, donc bâtir un savoir qui repose sur deux personnes.",
      "Former tout le monde de la même façon, alors que le trader, le commercial et le patron d'agence n'ont pas le même besoin.",
    ],
    followUps: [
      {
        question: "Comment tu sais que la formation a pris ?",
        how: "Donne un critère observable : ils lancent et diagnostiquent sans toi, et leurs questions montent en niveau. Le volume de sollicitations basiques qui baisse est un bon indicateur.",
      },
      {
        question: "Que fais-tu quand la personne formée part ?",
        how: "Montre que tu as anticipé : le savoir est dans un matériel réutilisable et chez plusieurs personnes, pas dans la tête d'un interlocuteur unique.",
      },
      {
        question: "Comment tu passes à l'échelle sur plusieurs agences ?",
        how: "Parle d'industrialisation : le même diagnostic produit automatiquement pour chaque établissement, ce qui rend la personnalisation possible sans refaire le travail à la main.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "L'industrialisation d'une vingtaine de tâches récurrentes avec l'IA, dont l'analyse de compte et les benchmarks locaux, et la campagne de 165 e-mails personnalisés par établissement sont exactes, mais elles ont été construites pour ton propre travail commercial et pas comme un programme de formation d'agence. Avant de le raconter ainsi, dis précisément ce que tu as réellement transmis à Ideuzo, Matière Grise ou Tomorhow, et sous quelle forme.",
    answer: {
      fr: {
        situation:
          "Sur les réseaux que j'adresse via des intermédiaires, la personne qui exécute la campagne n'est pas dans mon équipe et a dix autres sujets. Chaque question basique qui remonte jusqu'à moi est un signe que le partenaire ne peut pas travailler sans moi, donc que le compte ne peut pas grandir.",
        task: "Rendre l'équipe de l'intermédiaire capable de lancer, lire et défendre une campagne sans m'appeler.",
        action: [
          "J'ai commencé par distinguer les besoins : celui qui exécute veut un mode opératoire, celui qui vend veut un argument chiffré, celui qui dirige veut un résultat à présenter.",
          "J'ai industrialisé le matériel plutôt que de le refaire à la demande : une vingtaine de tâches récurrentes automatisées avec l'IA, dont l'analyse de compte et le benchmark local, pour produire un diagnostic par établissement.",
          "J'ai transformé ce diagnostic en support prêt à l'emploi, jusqu'à une campagne de 165 messages personnalisés par établissement, ce qui donne à l'équipe de l'intermédiaire un point d'entrée concret pour chaque site.",
          "J'ai formé sur les cas réels de leur portefeuille, jamais sur des exemples génériques, pour qu'ils repartent avec une action à faire le lendemain.",
          "J'ai visé plusieurs personnes chez le partenaire au lieu d'un référent unique, parce qu'un départ efface une formation en quelques semaines.",
        ],
        result:
          "L'équipe partenaire a pu porter un diagnostic par établissement sans moi, avec un matériel qui couvre 165 établissements, et mes sollicitations sont passées des questions de paramétrage aux questions d'allocation de budget. Sur l'ensemble de mon book, la croissance 2026 ressort à 38 % à périmètre constant.",
        learning:
          "Une équipe d'agence n'apprend pas un produit, elle apprend à gagner devant son client. Je forme donc sur ses cas, et j'industrialise le matériel pour ne jamais être le goulot d'étranglement.",
      },
      en: {
        situation:
          "On the networks I address through partners, the person running the campaign is not on my team and has ten other topics. Every basic question that reaches me is a sign the partner cannot work without me, which means the account cannot grow.",
        task: "Make the partner team able to launch, read and defend a campaign without calling me.",
        action: [
          "I started by separating needs: the person executing wants a procedure, the person selling wants a quantified argument, the person leading wants a result to present.",
          "I industrialised the material instead of rebuilding it on request: around twenty recurring tasks automated with AI, including account analysis and local benchmarks, to produce a per site diagnosis.",
          "I turned that diagnosis into ready to use enablement material, up to a campaign of 165 messages personalised per site, which gives the partner team a concrete entry point for every location.",
          "I trained on real cases from their own portfolio, never on generic examples, so they left with something to do the next day.",
          "I targeted several people at the partner rather than one champion, because one departure wipes out a training in a few weeks.",
        ],
        result:
          "The partner team was able to carry a per site diagnosis without me, with material covering 165 sites, and the questions coming to me moved from setup issues to budget allocation. Across my whole book, 2026 growth stands at 38 percent on a like for like perimeter.",
        learning:
          "An agency team does not learn a product, it learns how to win in front of its client. So I train on their cases, and I industrialise the material so I never become the bottleneck.",
      },
    },
    metrics: [
      "Une vingtaine de tâches récurrentes industrialisées avec l'IA, dont l'analyse de compte et les benchmarks locaux",
      "Campagne de 165 e-mails personnalisés par établissement",
      "Croissance du book : 38 % à périmètre constant en 2026 contre 2025",
    ],
    targetSeconds: 105,
  },

  {
    id: "agence-multi-interlocuteurs",
    category: "agences",
    difficulty: "moins-classique",
    prompt: {
      fr: "Comment gères-tu un compte où il y a une agence média, une agence créative et l'annonceur ?",
      en: "How do you manage an account with a media agency, a creative agency and the advertiser?",
    },
    whatTheyTest: [
      "Ta cartographie : qui décide, qui exécute, qui peut bloquer, et qui paie la facture.",
      "Ta discipline de coordination écrite, qui est ce qui tient une chaîne à trois niveaux.",
      "Ta capacité à ne pas devenir l'agent de liaison entre deux partenaires qui ne se parlent pas.",
      "Ton honnêteté sur ce que tu ne contrôles pas dans cette chaîne.",
    ],
    traps: [
      "Décrire une organisation idéale au lieu de dire qui tranche quand deux partenaires sont en désaccord.",
      "Devenir le messager entre les deux agences, ce qui te transforme en coût et pas en valeur.",
      "Donner une version différente à chaque acteur : ils se parlent, et la contradiction se paie.",
      "Oublier le niveau qui exécute réellement, souvent local, qui décide de l'adoption.",
    ],
    followUps: [
      {
        question: "Que fais-tu quand les deux partenaires se renvoient la responsabilité ?",
        how: "Ramène tout le monde sur une seule mesure partagée et propose un point unique à trois. Tu documentes qui décide quoi et pour quand, et tu l'envoies aux deux.",
      },
      {
        question: "Comment tu évites de porter la coordination à leur place ?",
        how: "Dis ce que tu prends et ce que tu ne prends pas : tu portes la donnée et la mesure, pas le planning interne du client. Sinon tu deviens leur chef de projet gratuit.",
      },
      {
        question: "Qui est ton client dans cette configuration ?",
        how: "Les deux, avec une hiérarchie claire : l'annonceur pour l'objectif, les partenaires pour l'exécution. Et tu le dis dans ces termes, sans hésiter.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "La structure à trois niveaux est ton quotidien réel : une tête de réseau qui négocie, des dizaines à des centaines d'établissements qui décident et paient localement, et un intermédiaire qui diffuse, parfois via un outil tiers comme un flux Beetween chez Kangourou Kids. En revanche tu n'as pas de configuration agence média plus agence créative : dis explicitement que tu transposes, le troisième acteur chez toi est un partenaire technique, pas une agence créative.",
    answer: {
      fr: {
        situation:
          "Je n'ai pas eu le couple agence média et agence créative, mais j'ai l'équivalent structurel tous les jours : une tête de réseau qui négocie le cadre, des dizaines à des centaines d'établissements qui décident et paient localement, et un intermédiaire qui diffuse, parfois via un outil tiers comme un flux Beetween chez Kangourou Kids. Trois acteurs, trois intérêts, et aucun qui contrôle toute la chaîne.",
        task: "Faire tenir un compte où la décision, le paiement et l'exécution sont chez trois acteurs différents, sans devenir moi-même leur agent de liaison.",
        action: [
          "J'ai cartographié la chaîne explicitement, en la faisant valider par les acteurs eux-mêmes : qui arbitre le budget, qui exécute, qui peut bloquer, qui paie.",
          "J'ai défini ce que je portais et ce que je ne portais pas : la donnée et la mesure, pas le planning interne du client ni la coordination entre les deux partenaires.",
          "J'ai imposé une mesure unique et partagée, la même pour les trois, pour qu'un désaccord se règle sur un chiffre commun et pas sur trois exports différents.",
          "J'ai gardé une seule version de la vérité, en écrivant après chaque point qui décide quoi et pour quand, et en l'envoyant aux trois acteurs en même temps.",
          "J'ai continué à travailler le niveau local, parce qu'un accord entre le siège et l'intermédiaire ne crée pas l'usage : ce sont les établissements qui adoptent ou pas.",
        ],
        result:
          "C'est le mode de fonctionnement de la quasi-totalité de mes comptes : 817 réseaux parents et 4 584 comptes advertisers, dont 26 réseaux et 633 comptes qui facturent sur douze mois, pour 1,15 million d'euros de revenu et 38 % de croissance à périmètre constant en 2026.",
        learning:
          "Dans une chaîne à trois, ma valeur n'est pas de faire circuler l'information, c'est de fournir la seule mesure que les trois acceptent. Le reste de la coordination appartient au client.",
      },
      en: {
        situation:
          "I have not had the media agency plus creative agency pairing, but I live the structural equivalent every day: a network head office that negotiates the framework, dozens to hundreds of sites that decide and pay locally, and a partner that runs distribution, sometimes through a third party tool such as a Beetween feed at Kangourou Kids. Three parties, three interests, none of them controlling the full chain.",
        task: "Hold together an account where decision, payment and execution sit with three different parties, without becoming their liaison officer myself.",
        action: [
          "I mapped the chain explicitly and had the parties themselves confirm it: who arbitrates the budget, who executes, who can block, who pays.",
          "I defined what I own and what I do not: the data and the measurement, not the client's internal planning nor the coordination between the two partners.",
          "I imposed one shared measurement, the same for all three, so any disagreement gets settled on a common number instead of three different exports.",
          "I kept a single version of the truth, writing after every call who decides what and by when, and sending it to all three at once.",
          "I kept working the local level, because an agreement between head office and the partner does not create usage: the sites either adopt or they do not.",
        ],
        result:
          "This is how almost my entire book works: 817 parent networks and 4,584 advertiser accounts, of which 26 networks and 633 accounts billing over twelve months, for 1.15 million euros of revenue and 38 percent like for like growth in 2026.",
        learning:
          "In a three party chain my value is not moving information around, it is providing the one measurement all three accept. The rest of the coordination belongs to the client.",
      },
    },
    metrics: [
      "Book : 817 réseaux parents, 4 584 comptes advertisers, 26 réseaux et 633 comptes qui facturent sur 12 mois",
      "1,15 M€ de revenu sur 12 mois, 38 % de croissance à périmètre constant en 2026",
      "Exemple de chaîne technique : flux Beetween chez Kangourou Kids",
    ],
    targetSeconds: 110,
  },

  {
    id: "agence-mauvaise-execution",
    category: "agences",
    difficulty: "classique",
    prompt: {
      fr: "L'agence exécute mal et le client te reproche les résultats. Que fais-tu ?",
      en: "The agency executes badly and the client blames you for the results. What do you do?",
    },
    whatTheyTest: [
      "Ta réaction sous accusation : te défendre, accuser le partenaire, ou reprendre le diagnostic.",
      "Ta capacité à établir un fait technique avant de parler de responsabilité.",
      "Ta loyauté envers le partenaire, testée au moment précis où le charger serait plus confortable.",
      "Ta façon d'éviter que le même incident se reproduise, au-delà du cas présent.",
    ],
    traps: [
      "Dire « ce n'est pas nous, c'est l'agence » : tu gagnes la réunion et tu perds le partenaire.",
      "Endosser une faute qui n'est pas la tienne pour calmer le client, ce qui crée un précédent intenable.",
      "Discuter de responsabilité avant d'avoir établi ce qui s'est réellement passé dans la diffusion.",
      "Traiter l'incident et oublier la cause structurelle, donc le revivre le trimestre suivant.",
    ],
    followUps: [
      {
        question: "Comment tu présentes l'erreur du partenaire au client ?",
        how: "Tu présentes le fait, pas le coupable, et si possible avec le partenaire dans la pièce. Le client veut savoir que c'est corrigé et que ça ne reviendra pas.",
      },
      {
        question: "Et si le partenaire refuse de reconnaître le problème ?",
        how: "Tu restes sur la donnée technique, vérifiable, et tu proposes un contrôle conjoint. Si le fait est établi et qu'il le nie encore, tu remontes le sujet dans un cadre à trois.",
      },
      {
        question: "Qu'est-ce que tu changes pour que ça n'arrive plus ?",
        how: "Parle de contrôle en amont : une vérification de la mise en ligne avant le démarrage, et un point technique avec le partenaire au lieu d'un diagnostic déclenché par la plainte.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le fait technique est exact : certains réseaux passent par un ATS ou un outil de diffusion tiers, par exemple un flux Beetween chez Kangourou Kids, et dans cette configuration tu ne contrôles ni la mise en ligne ni parfois le paramétrage, une partie du diagnostic passant par le partenaire technique. L'incident raconté, le reproche du client et le déroulé de la résolution sont reconstitués : remplace-les par le vrai incident et son issue, avec la durée et l'effet réels.",
    answer: {
      fr: {
        situation:
          "Sur un réseau adressé via un flux technique, un flux Beetween chez Kangourou Kids, je ne contrôle ni la mise en ligne des offres ni parfois leur paramétrage. Quand les candidatures manquent, le client me le dit à moi, parce que je suis la plateforme, alors que la cause peut se situer plus haut dans la chaîne.",
        task: "Établir ce qui s'est réellement passé et faire corriger, sans charger le partenaire technique devant le client ni endosser une faute qui n'est pas la mienne.",
        action: [
          "Je commence par accuser réception du problème du client, sans donner d'explication ni de coupable avant d'avoir regardé les faits.",
          "Je reprends le diagnostic de bout en bout, poste par poste : ce qui est effectivement publié, sous quel intitulé, avec quel paramétrage, et ce qui n'est jamais arrivé.",
          "Je vais chercher la partie du diagnostic que je ne vois pas chez le partenaire technique, en lui demandant une vérification et pas une justification.",
          "Je reviens vers le client avec le fait et la correction, pas avec la responsabilité : ce qui n'a pas été diffusé, ce qui est corrigé, à partir de quand la mesure redevient lisible.",
          "Je traite ensuite la cause structurelle avec le partenaire : un contrôle de la mise en ligne avant chaque démarrage, pour que le prochain écart soit détecté par nous et pas par le client.",
        ],
        result:
          "La diffusion est rétablie, le client garde son investissement et le partenaire technique reste dans la boucle au lieu d'être désigné. Sur l'ensemble de mon book, la croissance 2026 est de 38 % à périmètre constant, ce qui ne tiendrait pas si chaque incident se réglait en renvoyant la faute au partenaire.",
        learning:
          "Quand je ne contrôle pas l'exécution, ma valeur est d'être celui qui établit le fait le plus vite. Un fait partagé règle l'incident, une recherche de responsable le fait durer.",
      },
      en: {
        situation:
          "On a network addressed through a technical feed, a Beetween feed at Kangourou Kids, I control neither when jobs go live nor sometimes how they are set up. When applications are missing the client tells me, because I am the platform, even though the cause may sit further up the chain.",
        task: "Establish what actually happened and get it fixed, without blaming the technical partner in front of the client and without owning a fault that is not mine.",
        action: [
          "I start by acknowledging the client's problem, with no explanation and no culprit before I have looked at the facts.",
          "I redo the diagnosis end to end, role by role: what is actually live, under which title, with which setup, and what never arrived at all.",
          "I go and get the part of the diagnosis I cannot see from the technical partner, asking for a check rather than a justification.",
          "I come back to the client with the fact and the fix, not with liability: what was not distributed, what is corrected, and from when the measurement becomes readable again.",
          "Then I fix the structural cause with the partner: a go live check before every start, so the next gap is caught by us and not by the client.",
        ],
        result:
          "Distribution is restored, the client keeps its investment and the technical partner stays in the loop instead of being named. Across my book, 2026 growth is 38 percent like for like, which would not hold if every incident was settled by pushing blame onto the partner.",
        learning:
          "When I do not control execution, my value is being the person who establishes the fact fastest. A shared fact closes the incident, a hunt for the culprit keeps it alive.",
      },
    },
    metrics: [
      "Flux Beetween chez Kangourou Kids : ni la mise en ligne ni parfois le paramétrage ne sont sous ton contrôle",
      "Croissance du book : 38 % à périmètre constant en 2026",
    ],
    targetSeconds: 105,
  },

  {
    id: "agence-modele-remuneration",
    category: "agences",
    difficulty: "piege",
    prompt: {
      fr: "Comment la rémunération d'une agence influence-t-elle ses recommandations, et qu'en fais-tu ?",
      en: "How does an agency's compensation model shape its recommendations, and what do you do with that?",
    },
    whatTheyTest: [
      "Si tu connais vraiment le modèle économique de tes partenaires, honoraires, commission sur la dépense, rémunération à la performance.",
      "Ta capacité à en déduire les biais de recommandation sans faire de procès d'intention.",
      "Ce que tu construis pour faire gagner les deux, typiquement une preuve d'incrémentalité.",
      "Ta maturité : parler d'argent avec un partenaire sans le braquer ni le juger.",
    ],
    traps: [
      "Présenter l'agence comme intéressée ou malhonnête, alors qu'elle suit une incitation contractuelle normale.",
      "Ignorer le sujet en disant que l'agence veut juste le meilleur résultat pour son client.",
      "Rester théorique sans dire comment tu obtiens l'information sur son mode de rémunération.",
      "En conclure qu'il faut passer en direct : c'est la réponse qui te coûte le poste.",
    ],
    followUps: [
      {
        question: "Comment tu obtiens cette information, qui est sensible ?",
        how: "Tu ne demandes pas le contrat, tu demandes sur quels indicateurs l'agence est évaluée et à quel rythme. Ça suffit à déduire le biais, et ce n'est pas indiscret.",
      },
      {
        question: "Une agence payée à la performance, tu l'abordes comment ?",
        how: "Tu lui apportes du résultat court terme mesurable, et tu vends l'investissement long comme une réduction de risque sur sa propre rémunération, pas comme un pari.",
      },
      {
        question: "Et si le modèle pousse à dépenser plus que nécessaire ?",
        how: "Tu documentes l'incrémentalité et tu proposes la comparaison honnête. Un euro qui ne produit rien finit toujours par se voir, et c'est le compte entier qui se paie l'addition.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Ta banque de faits ne documente aucun modèle de rémunération précis chez Ideuzo, Matière Grise, Schiever ou Tomorhow, et aucun cas où tu as ajusté ton approche à cause de ce modèle. Garde le raisonnement, qui est solide, et avant l'entretien vérifie comment au moins un de tes intermédiaires est réellement rémunéré, pour pouvoir donner un exemple vrai. Ne cite aucun pourcentage.",
    answer: {
      fr: {
        situation:
          "Les intermédiaires par lesquels je passe ne sont pas rémunérés de la même façon : certains sur des honoraires, d'autres sur un pourcentage de la dépense, d'autres sur la performance obtenue. Cette structure n'est pas un détail contractuel, elle détermine ce qu'ils ont intérêt à recommander.",
        task: "Adapter ma proposition au modèle économique de chaque partenaire, sans lui prêter de mauvaise intention et sans jamais chercher à l'écarter.",
        action: [
          "Je ne demande pas le contrat, je demande sur quels indicateurs l'agence est évaluée par son client et à quel rythme. Ça me suffit pour comprendre son biais.",
          "J'en tire la conséquence sans jugement : une agence payée au pourcentage de la dépense n'a pas d'intérêt spontané à recommander l'économie, une agence payée à la performance n'a pas d'intérêt à recommander l'investissement long.",
          "Je construis ensuite l'argument qui fait gagner les deux : une preuve d'incrémentalité que l'agence peut présenter à son client comme sa propre victoire.",
          "Avec un partenaire rémunéré à la performance, je sécurise d'abord un résultat court terme mesurable, puis je présente l'investissement long comme une réduction de risque sur sa rémunération.",
          "Avec un partenaire rémunéré sur la dépense, je mets la comparaison honnête sur la table, gratuit contre sponsorisé et établissement contre établissement, pour que la conversation porte sur l'efficacité et pas sur le volume.",
        ],
        result:
          "La recommandation qui sort est défendable par les deux parties, l'agence conserve sa rémunération et l'annonceur voit son coût par candidature s'améliorer. Je n'ai jamais eu besoin de contourner un intermédiaire pour corriger une trajectoire.",
        learning:
          "Un partenaire ne recommande pas ce qui est vrai, il recommande ce qui est vrai et bon pour lui. Mon travail est de faire en sorte que ces deux ensembles se recouvrent.",
      },
      en: {
        situation:
          "The partners I work through are not paid the same way: some on retainers, some on a percentage of spend, some on performance delivered. That structure is not a contractual detail, it determines what they have an interest in recommending.",
        task: "Adapt my proposal to each partner's economics, without assuming bad faith and without ever trying to cut them out.",
        action: [
          "I do not ask for the contract, I ask what the agency is measured on by its client and how often. That is enough to understand the bias.",
          "I draw the consequence without judgement: an agency paid on a percentage of spend has no spontaneous interest in recommending savings, an agency paid on performance has no interest in recommending long term investment.",
          "Then I build the argument that makes both win: an incrementality proof the agency can present to its client as its own win.",
          "With a performance paid partner, I first secure a measurable short term result, then frame the long term investment as risk reduction on their own compensation.",
          "With a spend based partner, I put the honest comparison on the table, free against sponsored and site against site, so the conversation is about efficiency rather than volume.",
        ],
        result:
          "The recommendation that comes out is defensible by both sides, the agency keeps its compensation and the advertiser sees cost per application improve. I have never needed to bypass a partner to correct a trajectory.",
        learning:
          "A partner does not recommend what is true, it recommends what is true and good for them. My job is to make those two sets overlap.",
      },
    },
    metrics: [],
    targetSeconds: 105,
  },

  {
    id: "agence-portefeuille-partner",
    category: "agences",
    difficulty: "moins-classique",
    prompt: {
      fr: "Si on te confiait un portefeuille de partenaires plutôt que d'annonceurs directs, comment l'aborderais-tu ?",
      en: "If you were given a partner portfolio instead of direct advertisers, how would you approach it?",
    },
    whatTheyTest: [
      "Si tu comprends qu'un book partenaire se pilote en capacité installée et pas en relation individuelle.",
      "Ta méthode de segmentation quand ton chiffre dépend du travail d'autres équipes.",
      "Ta façon de mesurer un partenaire, au-delà de la dépense qu'il t'apporte ce trimestre.",
      "Ton réalisme sur ce que tu perds en passant du direct au partenaire, et comment tu le compenses.",
    ],
    traps: [
      "Décrire le même métier qu'en direct, avec juste un intermédiaire ajouté au milieu.",
      "Promettre de tout couvrir, alors qu'un book partenaire se gagne par concentration et enablement.",
      "Oublier la mesure : sans lecture de performance à toi, tu deviens dépendant du reporting du partenaire.",
      "Négliger le risque de concentration, quand quelques partenaires portent la majorité du chiffre.",
    ],
    followUps: [
      {
        question: "Quels indicateurs tu suivrais sur un partenaire ?",
        how: "Cite l'autonomie et la couverture avant la dépense : nombre de comptes actifs chez lui, campagnes lancées sans toi, part de son portefeuille qui investit. La dépense est la conséquence.",
      },
      {
        question: "Comment tu gérerais un partenaire qui stagne ?",
        how: "Distingue le partenaire qui ne peut pas de celui qui ne veut pas. Le premier relève de l'enablement, le second d'un arbitrage de ton temps, et tu dis lequel.",
      },
      {
        question: "Qu'est-ce que tu perdrais par rapport au direct ?",
        how: "La visibilité fine et la vitesse de réaction. Dis-le franchement, et dis comment tu compenses : ta propre mesure, et un accès négocié pour les sujets structurants.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "La question est prospective : le plan décrit est une projection, pas quelque chose que tu as déjà exécuté sur un book 100 % partenaires. Les faits de structure et de résultat sont exacts, 817 réseaux parents, 4 584 comptes advertisers, 26 réseaux et 633 comptes qui facturent, 1,15 million d'euros sur douze mois, les sept premiers réseaux à 84 %, et le réseau Système U adressé via intermédiaires. Annonce clairement en entretien ce qui est ton expérience et ce qui est ta méthode projetée.",
    answer: {
      fr: {
        situation:
          "Une partie de mon book fonctionne déjà comme un book partenaire : Système U passe par Ideuzo, Matière Grise et Schiever sur une partie des entités, Family Sphere en partie par Tomorhow, et certains réseaux par un outil de diffusion tiers. Je gère 817 réseaux parents et 4 584 comptes advertisers, dont 26 réseaux et 633 comptes facturent sur douze mois.",
        task: "Aborder un portefeuille de partenaires comme une capacité à installer chez d'autres équipes, et pas comme une liste de relations à entretenir.",
        action: [
          "Je commencerais par la concentration réelle du chiffre : sur mon book actuel, sept réseaux font 84 % du revenu, donc je chercherais d'abord quels partenaires portent la majorité du potentiel.",
          "Je segmenterais les partenaires par capacité et par volonté, parce que les deux se traitent différemment : l'un relève de la formation, l'autre d'un arbitrage de mon temps.",
          "Je bâtirais ma propre mesure de performance, compte par compte et établissement par établissement, pour ne pas dépendre du reporting du partenaire.",
          "Je piloterais la couverture avant la dépense : nombre de comptes actifs chez chaque partenaire et campagnes lancées sans moi, parce que la dépense en est la conséquence.",
          "Je réduirais le coût de recommandation en industrialisant le matériel, comme je le fais aujourd'hui avec une vingtaine de tâches automatisées et des diagnostics par établissement.",
          "Je traiterais le risque de concentration en développant un deuxième rang de partenaires avant que le premier ne devienne indispensable.",
        ],
        result:
          "C'est la mécanique qui a déjà produit mes résultats sur la partie intermédiée du book : Système U est passé de 101 986 euros de bookings en 2023 à 547 277 en 2026, et l'ensemble de mon book fait 1,15 million d'euros sur douze mois avec 38 % de croissance à périmètre constant.",
        learning:
          "Un book partenaire ne se gère pas en relation mais en capacité installée. Ce que je mesure en premier, c'est ce que le partenaire sait faire sans moi.",
      },
      en: {
        situation:
          "Part of my book already works like a partner book: Système U goes through Ideuzo, Matière Grise and Schiever on some entities, Family Sphere partly through Tomorhow, and some networks through a third party distribution tool. I run 817 parent networks and 4,584 advertiser accounts, of which 26 networks and 633 accounts bill over twelve months.",
        task: "Approach a partner portfolio as capability to install inside other teams, rather than a list of relationships to maintain.",
        action: [
          "I would start from where the revenue actually concentrates: on my current book seven networks make 84 percent of revenue, so I would first find which partners carry most of the potential.",
          "I would segment partners by ability and by willingness, because the two are handled differently: one calls for enablement, the other for a decision about my own time.",
          "I would build my own performance measurement, account by account and site by site, so I do not depend on partner reporting.",
          "I would manage coverage before spend: active accounts per partner and campaigns launched without me, because spend is the consequence.",
          "I would cut the cost of recommending me by industrialising the material, as I already do with around twenty automated tasks and per site diagnoses.",
          "I would treat concentration risk by growing a second tier of partners before the first tier becomes indispensable.",
        ],
        result:
          "This is the mechanism that already produced my results on the intermediated part of the book: Système U went from 101,986 euros of bookings in 2023 to 547,277 in 2026, and the whole book stands at 1.15 million euros over twelve months with 38 percent like for like growth.",
        learning:
          "A partner book is not managed through relationships, it is managed through installed capability. The first thing I measure is what the partner can do without me.",
      },
    },
    metrics: [
      "Book : 817 réseaux parents, 4 584 comptes advertisers, 26 réseaux et 633 comptes qui facturent sur 12 mois",
      "Sept premiers réseaux : 84 % du revenu, 1,15 M€ sur 12 mois",
      "Système U via intermédiaires : 101 986 euros en 2023, 547 277 en 2026",
    ],
    targetSeconds: 115,
  },

  {
    id: "agence-construire-relation",
    category: "agences",
    difficulty: "classique",
    prompt: {
      fr: "Comment construis-tu une relation durable avec une agence ?",
      en: "How do you build a lasting relationship with an agency?",
    },
    whatTheyTest: [
      "Ce que tu appelles une relation : de la sympathie entretenue, ou une utilité démontrée dans le temps.",
      "Ta constance sur plusieurs exercices, y compris les années où le partenaire ne te rapporte rien.",
      "Ta gestion des mauvaises nouvelles, qui est ce qui fait la confiance réelle.",
      "Ta capacité à prouver la durée par une trajectoire chiffrée et pas par une déclaration.",
    ],
    traps: [
      "Répondre par la proximité personnelle : les recruteurs entendent cette réponse toute la journée.",
      "Ne donner aucun chiffre, alors qu'une relation durable se prouve par une courbe sur plusieurs années.",
      "Oublier la fiabilité opérationnelle, qui est ce qu'une agence valorise le plus au quotidien.",
      "Faire reposer la relation sur une seule personne chez le partenaire, qui finira par changer de poste.",
    ],
    followUps: [
      {
        question: "Comment tu annonces une mauvaise nouvelle à un partenaire ?",
        how: "Tôt, avec le fait et l'option de correction, et avant que son client ne le découvre. C'est le moment précis où la relation se construit ou se perd.",
      },
      {
        question: "Comment tu résistes au changement d'interlocuteur chez l'agence ?",
        how: "Tu diffuses la connaissance à plusieurs personnes et tu laisses du matériel réutilisable. Une relation qui tient à une seule personne n'est pas durable, c'est un risque.",
      },
      {
        question: "Comment tu prouves que la relation est durable ?",
        how: "Par la courbe, pas par le ressenti : quatre exercices consécutifs de croissance avec les mêmes intermédiaires dans la boucle.",
      },
    ],
    basis: "vecu",
    answer: {
      fr: {
        situation:
          "Système U est adressé via plusieurs intermédiaires, dont Ideuzo et Matière Grise, une partie des entités passant par Schiever. Je travaille avec eux depuis quatre exercices, sans jamais avoir eu la relation directe avec les magasins qui décident et paient.",
        task: "Construire avec ces intermédiaires une relation qui survive aux changements de personnes et aux années creuses, plutôt qu'une bonne entente ponctuelle.",
        action: [
          "J'ai posé une règle que je n'ai jamais enfreinte : je ne sollicite pas leur client sans eux. C'est la base sur laquelle tout le reste tient.",
          "J'ai apporté de la valeur avant d'en demander, en produisant la lecture de performance établissement par établissement qu'ils ne pouvaient pas produire seuls.",
          "J'ai été fiable sur l'opérationnel, y compris sur les sujets ingrats de paramétrage, parce que c'est ce qu'une agence valorise au quotidien.",
          "J'ai annoncé les mauvaises nouvelles moi-même et tôt, avant que leur client ne les découvre, ce qui coûte à court terme et paie sur la durée.",
          "J'ai tenu le rythme les années où le réseau ne pesait presque rien, alors qu'il représentait environ 100 000 euros en 2023.",
          "J'ai évité de faire reposer la relation sur une seule personne, en diffusant la même lecture à plusieurs interlocuteurs chez le partenaire.",
        ],
        result:
          "Les bookings du réseau ont progressé quatre exercices de suite avec les mêmes intermédiaires dans la boucle : 101 986 euros en 2023, 184 732 en 2024, 352 979 en 2025 et 547 277 en 2026. C'est aussi par ce canal qu'est passé le plus gros deal que j'aie signé, 438 204 euros le 18 mai 2026.",
        learning:
          "Une relation d'agence ne se mesure pas à la qualité des échanges mais à la pente sur plusieurs années. Elle se construit en étant utile et fiable, et surtout en ne trahissant jamais la règle d'accès.",
      },
      en: {
        situation:
          "Système U is addressed through several partners, including Ideuzo and Matière Grise, with some entities going through Schiever. I have worked with them across four fiscal years, never holding the direct relationship with the stores that decide and pay.",
        task: "Build a relationship with those partners that survives people changing and lean years, rather than a good rapport at a point in time.",
        action: [
          "I set a rule I never broke: I do not approach their client without them. Everything else rests on that.",
          "I brought value before asking for any, producing the site by site performance read they could not produce on their own.",
          "I was reliable on the operational side, including the thankless setup work, because that is what an agency values day to day.",
          "I delivered bad news myself and early, before their client found it, which costs in the short term and pays over time.",
          "I kept the same cadence in the years when the network was worth almost nothing, around 100,000 euros in 2023.",
          "I avoided resting the relationship on one person, sharing the same read with several contacts at the partner.",
        ],
        result:
          "Network bookings grew four years in a row with the same partners in the loop: 101,986 euros in 2023, 184,732 in 2024, 352,979 in 2025 and 547,277 in 2026. That channel is also where my largest signed deal came from, 438,204 euros on 18 May 2026.",
        learning:
          "An agency relationship is not measured by how pleasant the conversations are, it is measured by the slope over several years. You build it by being useful and reliable, and above all by never breaking the access rule.",
      },
    },
    metrics: [
      "Système U via Ideuzo, Matière Grise et Schiever sur une partie des entités : 101 986 euros en 2023, 184 732 en 2024, 352 979 en 2025, 547 277 en 2026",
      "438 204 euros signés le 18 mai 2026 via ce canal",
    ],
    targetSeconds: 115,
  },
];
