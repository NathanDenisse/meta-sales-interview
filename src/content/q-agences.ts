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
      "Si tu nommes ta part exacte dans une chaîne où trois acteurs peuvent revendiquer la victoire.",
      "Si tu dis ce que l'intermédiaire a gagné, et pas seulement ce que tu as facturé.",
      "Si un arbitrage est visible : ce que tu as choisi de ne pas faire, et pourquoi.",
      "Si le chiffre que tu cites porte sa base, parce que c'est la relance la plus facile à poser.",
    ],
    traps: [
      "Raconter le deal comme si l'intermédiaire n'avait été qu'un tampon administratif sur le chemin.",
      "Laisser entendre que la victoire vient d'un contact pris sans lui.",
      "Citer les 153 211 euros comme le montant du deal : c'est le revenu sur douze mois de MERCI+ et Family Sphere réunis.",
      "Dire « on » là où tu peux dire « je » : l'intervieweur compte les deux.",
    ],
    followUps: [
      {
        question: "Ce n'est pas ton plus gros deal ?",
        how: "Assume-le tout de suite : ton plus gros, 438 204 euros le 18 mai 2026, est passé par Ideuzo sur Système U. Précise que c'est une opportunité unique et pas un accord annuel, avant qu'on te le demande.",
      },
      {
        question: "Qu'a fait l'intermédiaire, et qu'as-tu fait ?",
        how: "Découpe en deux phrases sans t'approprier son travail : il tenait la relation et la diffusion, tu apportais la lecture de performance et le paramétrage. Nomme sa part en premier.",
      },
      {
        question: "Pourquoi ça se reproduirait ?",
        how: "Montre le mécanisme et pas la satisfaction déclarée : un engagement groupé se rejoue sur un autre paquet d'agences locales, alors qu'une relation sympathique ne se rejoue pas.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le réseau Family Sphere, l'intermédiaire Tomorhow et les 153 211 euros sur douze mois sont exacts, mais ce montant couvre MERCI+ et Family Sphere ensemble, pas ce deal seul. Le regroupement d'agences locales dans un engagement unique est reconstitué : vérifie le périmètre réellement vendu d'un coup et ce que Tomorhow porte, la diffusion seule ou aussi le paramétrage.",
    answer: {
      fr: {
        situation:
          "Family Sphere est un réseau de garde d'enfants en franchise, et une partie de ses agences locales ne passe pas par moi mais par Tomorhow, qui diffuse pour elles. Chaque agence décidait seule, sur des budgets trop petits pour justifier une négociation individuelle.",
        task: "Faire investir ce réseau sans vendre agence par agence, alors que la relation et la diffusion étaient chez l'intermédiaire.",
        action: [
          "J'ai posé la règle dès le premier échange : aucune sollicitation d'une agence locale sans Tomorhow. Une phrase, et la discussion a changé de nature.",
          "J'ai produit la lecture qu'il ne pouvait pas fabriquer seul : candidatures et coût par candidature agence par agence, face aux agences restées en diffusion gratuite.",
          "J'ai choisi de regrouper plusieurs agences d'une même zone dans un engagement unique plutôt que d'empiler des accords individuels, parce qu'un seul cadre lui coûtait beaucoup moins de travail qu'à moi.",
          "J'ai fixé un seuil avant de lancer : en dessous de trois agences prêtes à s'engager sur la même période, je ne montais pas le dossier, parce qu'un engagement groupé trop petit coûte plus de coordination qu'il ne rapporte.",
          "J'ai laissé Tomorhow présenter le dossier à ses clients, avec mes chiffres et son nom dessus.",
        ],
        result:
          "MERCI+ et Family Sphere pèsent aujourd'hui 153 211 euros sur douze mois, les deux réseaux réunis, et font partie de mes sept premiers réseaux qui portent 84 % de mon revenu. Sur ce périmètre, l'engagement groupé est devenu la façon normale d'acheter.",
        learning:
          "Sur un réseau éclaté, l'intermédiaire n'est pas l'obstacle : c'est le seul acteur capable de porter un engagement agrégé.",
      },
      en: {
        situation:
          "Family Sphere is a franchised childcare network, and part of its local branches do not come to me directly but through Tomorhow, who runs distribution for them. Each branch decided on its own, on budgets too small to justify an individual negotiation.",
        task: "Get that network to invest without selling branch by branch, while the relationship and the distribution sat with the partner.",
        action: [
          "I set the rule in the first conversation: no approach to a local branch without Tomorhow. One sentence, and the nature of the discussion changed.",
          "I produced the read they could not build alone: applications and cost per application branch by branch, against branches still posting for free.",
          "I chose to group several branches from the same area into a single commitment rather than stack individual agreements, because one framework cost them far less work than it cost me.",
          "I set a threshold before launching: below three branches ready to commit over the same period I did not build the case, because a grouped commitment that small costs more coordination than it returns.",
          "I let Tomorhow present the case to their own clients, with my numbers and their name on it.",
        ],
        result:
          "MERCI+ and Family Sphere are now worth 153,211 euros over twelve months, the two networks combined, and sit in my top seven networks, which carry 84 percent of my revenue. On that perimeter, the grouped commitment became the normal way to buy.",
        learning:
          "On a fragmented network the partner is not the obstacle: they are the only party able to carry an aggregated commitment.",
      },
    },
    metrics: [
      "MERCI+ et Family Sphere : 153 211 euros sur 12 mois, les deux réseaux réunis, en partie via Tomorhow",
      "Sept premiers réseaux : 84 % du revenu du book",
      "Plus gros deal signé : 438 204 euros le 18 mai 2026 via Ideuzo, opportunité unique et non accord annuel",
    ],
    targetSeconds: 96,
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
      "Si tu sais que l'agence a ses propres objectifs contractuels, et lesquels.",
      "Si tu produis un arbitrage visible, ou si tu restes au niveau des principes.",
      "Si le désaccord se règle devant l'agence et pas derrière elle.",
      "Si tu nommes le seuil à partir duquel tu tranches contre sa recommandation.",
    ],
    traps: [
      "Répondre « le client final passe avant » sans voir que l'agence est aussi ton client.",
      "Dire que tu irais parler à l'annonceur sans elle : signal de sortie immédiat.",
      "Nier le conflit et prétendre que tout le monde veut la même chose.",
      "Transformer l'agence en méchant : l'intervieweur en déduit comment tu parleras de tes collègues.",
    ],
    followUps: [
      {
        question: "Et si l'agence te demande de ne pas partager une donnée avec son client ?",
        how: "Sépare le confidentiel du factuel : tu acceptes de ne pas la contourner, tu n'acceptes pas de cacher un résultat qui fausse la décision. Dis la limite en une phrase et n'argumente pas plus.",
      },
      {
        question: "Tu as déjà tranché contre une agence ?",
        how: "Si tu ne l'as pas fait, dis-le et donne ton seuil : tu tranches quand sa recommandation dégrade un résultat mesurable, jamais sur une divergence de goût.",
      },
      {
        question: "Comment tu repères la divergence tôt ?",
        how: "Demande en début de relation sur quels indicateurs son client la juge et à quel rythme. Tu obtiens le biais sans jamais parler de son contrat.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Aucune divergence franche entre un intermédiaire et un annonceur n'est documentée dans ta banque de faits. Garde la méthode et remplace le test borné par un arbitrage réel, par exemple une répartition de budget discutée avec Ideuzo, Matière Grise ou Tomorhow, avec ce que ça a changé en euros.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Un intermédiaire recommande à son client une allocation qui l'arrange : le budget se concentre là où le paramétrage lui coûte le moins de travail, pas là où les postes restent ouverts. Les deux sont mes clients, et je vois l'écart dans la donnée avant eux.",
        task: "Faire corriger l'allocation sans faire perdre la face à l'agence devant son propre client.",
        action: [
          "J'ai vérifié que la divergence était réelle, poste par poste, candidatures et coût par candidature, avant d'en parler à qui que ce soit.",
          "Je suis allé voir l'agence seule, avant toute réunion commune, pour qu'elle se positionne sans public.",
          "Plutôt que de demander un changement de doctrine, j'ai proposé un test borné : deux postes, un mois, une mesure convenue d'avance, donc réversible.",
          "J'ai laissé l'agence présenter le résultat à son client comme sa recommandation, et pas comme ma correction.",
        ],
        result:
          "Le budget a cessé de financer des postes déjà pourvus, le coût par candidature des postes en tension a baissé, et l'agence a gardé la propriété de la décision devant son client.",
        learning:
          "Un conflit d'intérêts ne se gagne pas en ayant raison, il se gagne en fabriquant une version de la bonne décision qu'elle peut signer de son nom.",
      },
      en: {
        situation:
          "A partner recommends an allocation that suits them: budget concentrates where setup costs them the least work, not where the roles stay open. Both are my clients, and I see the gap in the data before they do.",
        task: "Get the allocation corrected without making the agency lose face in front of its own client.",
        action: [
          "I checked the divergence was real, role by role, applications and cost per application, before mentioning it to anyone.",
          "I met the agency alone, ahead of any joint call, so they could take a position without an audience.",
          "Instead of asking for a change of doctrine, I proposed a bounded test: two roles, one month, a measure agreed up front, so it stayed reversible.",
          "I let the agency present the outcome to its client as their recommendation, not as my correction.",
        ],
        result:
          "Budget stopped funding roles that were already filled, cost per application dropped on the roles still open, and the agency kept ownership of the decision in front of its client.",
        learning:
          "You do not win a conflict of interest by being right, you win it by building a version of the right decision they can sign their own name on.",
      },
    },
    script: {
      fr: {
        hook:
          "L'intérêt d'une agence n'est pas celui de son client, et ce n'est pas un défaut : elle est payée sur autre chose. Mon travail est de rendre la bonne décision rentable pour elle aussi.",
        body: [
          "Je commence par vérifier que la divergence existe vraiment, dans la donnée, poste par poste. Une agence rémunérée sur le volume de dépense concentre naturellement le budget là où le paramétrage lui demande le moins de travail, et ce n'est presque jamais là où les postes restent ouverts.",
          "Ensuite je vais la voir seule, avant toute réunion commune. Je montre l'écart et je lui laisse le temps de se positionner sans public. Ce que je cherche n'est pas d'avoir raison, c'est une version de la décision qu'elle puisse signer de son nom devant son client.",
          "Si elle résiste, je ne demande pas un changement de doctrine, je demande un test borné : deux ou trois postes, un mois, une mesure convenue d'avance. Un test est réversible, donc il engage peu son crédit. Et je ne passe jamais au-dessus d'elle : si le désaccord tient, je pose les deux options chiffrées dans la même réunion, avec elle dans la pièce, et l'annonceur choisit.",
        ],
        closing: "Je tranche seulement quand sa recommandation dégrade un résultat mesurable, et je peux prendre un cas précis si vous voulez.",
        keyBeats: [
          "Vérifier la divergence dans la donnée",
          "Le modèle de rémunération explique le biais",
          "L'agence seule, sans public",
          "Test borné plutôt que doctrine",
          "Jamais au-dessus d'elle",
        ],
      },
      en: {
        hook:
          "An agency's interest is not its client's interest, and that is not a flaw: they are paid on something else. My job is to make the right decision profitable for them too.",
        body: [
          "I start by checking the divergence is real, in the data, role by role. An agency paid on a percentage of spend naturally concentrates budget where setup asks the least work of them, and that is almost never where the roles stay open.",
          "Then I meet them alone, ahead of any joint call. I show the gap and give them time to take a position without an audience. What I am after is not being right, it is a version of the decision they can sign their own name on in front of their client.",
          "If they push back, I do not ask for a change of doctrine, I ask for a bounded test: two or three roles, one month, a measure agreed up front. A test is reversible, so it puts little of their credibility at stake. And I never go over their head: if the disagreement holds, I put both quantified options in the same meeting, with them in the room, and the advertiser chooses.",
        ],
        closing: "I only rule against their recommendation when it degrades a measurable result, and I am happy to take a specific case.",
        keyBeats: [
          "Check the divergence in the data",
          "The pay model explains the bias",
          "The agency alone, no audience",
          "Bounded test, not doctrine",
          "Never over their head",
        ],
      },
    },
    metrics: [],
    targetSeconds: 86,
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
      "Ta réaction immédiate : forcer la porte ou devenir utile, ils le savent en une phrase.",
      "Si tu comprends que l'agence protège sa valeur commerciale et pas son confort.",
      "Si tu sais piloter un compte sans voir la décision, et avec quoi tu remplaces l'accès.",
      "Si tu nommes le risque de dépendance plutôt que de le passer sous silence.",
    ],
    traps: [
      "Raconter que tu as trouvé un contact chez l'annonceur pour passer outre : c'est éliminatoire ici.",
      "Traiter le blocage comme de la mauvaise foi, alors que c'est un réflexe économique rationnel.",
      "Attendre que la relation s'ouvre d'elle-même, ce qui n'est pas une méthode.",
      "Oublier de dire comment tu gardes une lecture fiable de la performance sans accès.",
    ],
    followUps: [
      {
        question: "Et si tu apprends que l'annonceur est mécontent ?",
        how: "Remonte le sujet à l'agence avec la donnée et propose d'être dans la réunion à trois. Ne transforme jamais une insatisfaction en porte d'entrée, ça se voit.",
      },
      {
        question: "Tu acceptes de ne jamais rencontrer le décideur ?",
        how: "Non, mais demande-le comme un service rendu à l'agence, sur un sujet qu'elle ne veut pas porter seule. Formule-le ainsi à voix haute : l'accès se mérite, il ne se réclame pas.",
      },
      {
        question: "Comment tu évites de dépendre totalement d'elle ?",
        how: "Cite ce que tu produis et que personne d'autre ne produit, plus une cadence écrite. C'est ce qui te garde dans la décision sans accès direct.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Les intermédiaires sont exacts, Ideuzo et Matière Grise sur Système U et Tomorhow sur une partie de Family Sphere, ainsi que le deal de 438 204 euros du 18 mai 2026. Un refus formel d'accès n'est pas documenté : garde le raisonnement sur l'absence d'accès direct et n'affirme un blocage explicite que si tu en as vécu un.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Sur une partie de mon portefeuille, l'accès direct au décideur est l'exception : Système U est adressé via Ideuzo et Matière Grise, une partie de Family Sphere via Tomorhow. L'intermédiaire tient la relation et n'a aucune raison spontanée de me mettre dans la salle.",
        task: "Faire grandir ces comptes sans accès direct au décideur, et sans chercher à forcer cet accès.",
        action: [
          "J'ai accepté le cadre à voix haute : aucune sollicitation de son client sans lui.",
          "J'ai demandé ce qui justifierait ma présence de son point de vue, et j'ai obtenu les sujets qu'il ne voulait pas porter seul, le technique et la lecture de marché.",
          "Je me suis rendu utile sur ce qu'il n'avait pas envie de faire, le diagnostic et le paramétrage, au lieu de réclamer ce qu'il voulait garder.",
          "J'ai nommé le risque plutôt que de le contourner : sans visibilité sur l'arbitrage budgétaire, j'ai demandé un point trimestriel à trois, pas un contact direct.",
        ],
        result:
          "Le plus gros deal que j'ai signé, 438 204 euros le 18 mai 2026, est passé par ce canal, sur Système U via Ideuzo. C'est une opportunité unique et pas un accord annuel, et je n'ai jamais eu la relation directe avec l'entité concernée.",
        learning:
          "Sans accès direct, ce qui me rend difficile à remplacer n'est pas la proximité avec le client, c'est d'être celui qui produit la lecture de performance.",
      },
      en: {
        situation:
          "On part of my portfolio, direct access to the decision maker is the exception: Système U goes through Ideuzo and Matière Grise, part of Family Sphere through Tomorhow. The partner owns the relationship and has no spontaneous reason to put me in the room.",
        task: "Grow those accounts without direct access to the decision maker, and without trying to force that access.",
        action: [
          "I accepted the rule out loud: no approach to their client without them.",
          "I asked what would justify my presence from their point of view, and I got the topics they did not want to carry alone, the technical ones and the market read.",
          "I made myself useful on what they did not want to do, diagnosis and setup, instead of asking for what they wanted to keep.",
          "I named the risk instead of working around it: with no visibility on the budget trade off, I asked for a quarterly three way review, not a direct contact.",
        ],
        result:
          "The largest deal I have signed, 438,204 euros on 18 May 2026, came through that channel, on Système U via Ideuzo. It is a single opportunity and not an annual agreement, and I never held the direct relationship with the entity involved.",
        learning:
          "Without direct access, what makes me hard to replace is not closeness to the client, it is being the person who produces the performance read.",
      },
    },
    script: {
      fr: {
        hook:
          "Une agence qui protège l'accès à son client ne fait pas de la mauvaise foi : elle protège sa valeur. Je n'essaie donc pas d'ouvrir la porte, je fais en sorte qu'elle ait intérêt à me l'ouvrir.",
        body: [
          "Premier geste, je dis à voix haute que je ne solliciterai pas son client sans elle : cette phrase retire le soupçon qui explique le blocage. Ensuite je demande ce qui justifierait ma présence de son point de vue, et c'est toujours un sujet qu'elle ne veut pas porter seule, un point technique ou une mauvaise nouvelle à annoncer.",
          "En attendant, je remplace l'accès par la donnée. Je produis la lecture de performance établissement par établissement, que personne d'autre ne produit. Elle me met dans la décision même quand je ne suis pas dans la pièce, sans que j'aie besoin d'être intrusif.",
          "Je nomme quand même la limite : sans visibilité sur l'arbitrage budgétaire, je pilote à l'aveugle et je le découvrirai trop tard. Donc je demande un point trimestriel à trois, jamais un contact direct. Mon plus gros deal, 438 204 euros signés le 18 mai 2026, est passé par un intermédiaire, sur une entité dont je n'ai jamais tenu la relation.",
        ],
        closing: "Un accès se gagne en étant utile sur ce que l'agence ne veut pas faire, il ne se réclame pas.",
        keyBeats: [
          "Elle protège sa valeur, pas son confort",
          "La règle dite à voix haute",
          "Ce qui justifie ma présence, de son point de vue",
          "La donnée remplace l'accès",
          "Point à trois, pas de contact direct",
        ],
      },
      en: {
        hook:
          "An agency protecting access to its client is not acting in bad faith: it is protecting its value. So I do not try to force the door, I make it worth their while to open it.",
        body: [
          "First move, I say out loud that I will not approach their client without them: that sentence removes the suspicion behind the block. Then I ask what would justify my presence from their point of view, and it is always a topic they would rather not carry alone, a technical point or bad news to deliver.",
          "In the meantime, I replace access with data. I produce the site by site performance read, which nobody else produces. It puts me inside the decision even when I am not in the room, without any need to be intrusive.",
          "I still name the limit: with no visibility on the budget trade off, I am flying blind and I will find out too late. So I ask for a quarterly three way review, never a direct contact. My largest deal, 438,204 euros signed on 18 May 2026, came through a partner, on an entity whose relationship I never held.",
        ],
        closing: "Access is earned by being useful on what the agency does not want to do, it is not claimed.",
        keyBeats: [
          "They protect value, not comfort",
          "The rule said out loud",
          "What justifies my presence, their view",
          "Data replaces access",
          "Three way review, no direct contact",
        ],
      },
    },
    metrics: [
      "Système U adressé via Ideuzo et Matière Grise, Family Sphere en partie via Tomorhow",
      "438 204 euros signés le 18 mai 2026 via un intermédiaire, opportunité unique et non accord annuel",
    ],
    targetSeconds: 88,
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
      "Si tu connais l'économie réelle d'une agence : son temps, sa marge, la rétention de son client.",
      "Si tu réduis le coût de la recommandation au lieu d'augmenter la pression commerciale.",
      "Ton honnêteté concurrentielle, parce que dénigrer devant une agence se sait vite.",
      "Si tu mesures la préférence en volume déplacé et pas au ressenti de la dernière réunion.",
    ],
    traps: [
      "Ne parler que d'incitation financière, alors qu'une agence choisit aussi ce qui lui coûte le moins d'effort.",
      "Demander l'exclusivité, que personne n'accorde, au lieu d'un périmètre de test.",
      "Attaquer le concurrent : tu perds la confiance de l'agence dans la même phrase.",
      "Confondre relation agréable et préférence réelle, qui se lit dans les budgets.",
    ],
    followUps: [
      {
        question: "Et si l'agence est déjà engagée avec un concurrent ?",
        how: "Ne demande pas un basculement. Demande un périmètre restreint et mesurable, et fournis la comparaison sous une forme qu'elle pourra présenter elle-même.",
      },
      {
        question: "Comment tu sais que tu es devenu le choix par défaut ?",
        how: "Cite le volume déplacé et les demandes entrantes, pas la qualité des échanges. La courbe Système U 2024 à 2026 est ta preuve la plus propre.",
      },
      {
        question: "Tu fais quoi si un concurrent est meilleur sur un cas précis ?",
        how: "Reconnais-le sans transition ni nuance défensive. C'est ce qui rend crédible tout le reste, et l'agence s'en souvient quand le choix se rouvre.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "La croissance de Système U avec les mêmes intermédiaires est exacte, année par année. Les leviers décrits, notamment ce que tu prends en charge à la place de l'agence, sont une reconstitution de ton mode opératoire : vérifie ce que tu fais réellement pour Ideuzo et Matière Grise avant de l'affirmer, et n'invente aucun mécanisme d'incitation financière.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Sur Système U, le budget de diffusion ne dépend pas de moi mais d'intermédiaires qui ont plusieurs plateformes à disposition et aucune obligation d'en privilégier une. Leur arbitrage se joue autant sur le temps que mon produit leur coûte que sur le résultat qu'il livre.",
        task: "Devenir leur recommandation par défaut, sans acheter cette préférence et sans dénigrer les autres plateformes.",
        action: [
          "J'ai demandé sur quoi l'agence était jugée par son propre client, résultat livré et temps passé, puis j'ai cherché où mon produit lui coûtait de l'effort.",
          "J'ai supprimé cet effort : analyse de compte et benchmark local prêts à présenter, paramétrage pris en charge, pour qu'une recommandation chez moi soit la moins chère à produire de son plan.",
          "J'ai fourni la comparaison chiffrée entre les établissements sponsorisés et ceux restés en gratuit, pour qu'elle défende une incrémentalité et non une préférence de fournisseur.",
          "Je n'ai jamais demandé d'exclusivité : j'ai demandé un périmètre de test mesurable, puis j'ai laissé les chiffres l'élargir.",
        ],
        result:
          "Avec les mêmes intermédiaires, les bookings du réseau sont passés de 184 732 euros en 2024 à 352 979 en 2025 et 547 277 en 2026. La préférence s'est traduite en volume déplacé, pas en déclaration d'intention.",
        learning:
          "Une agence pousse ce qui la fait gagner devant son client et ce qui lui coûte le moins de travail. Je joue sur les deux, dans cet ordre.",
      },
      en: {
        situation:
          "On Système U the distribution budget does not sit with me but with partners who have several platforms available and no obligation to favour any of them. Their choice depends as much on how much of their time my product costs as on the result it delivers.",
        task: "Become their default recommendation, without buying that preference and without running competitors down.",
        action: [
          "I asked what the agency was judged on by its own client, delivered results and time spent, then looked for where my product cost them effort.",
          "I removed that effort: account analysis and local benchmark ready to present, setup handled on my side, so that recommending me became the cheapest recommendation in their plan to produce.",
          "I supplied the quantified comparison between sponsored sites and sites still posting for free, so they could defend incrementality rather than a vendor preference.",
          "I never asked for exclusivity: I asked for a measurable test perimeter, then let the numbers widen it.",
        ],
        result:
          "With the same partners, network bookings went from 184,732 euros in 2024 to 352,979 in 2025 and 547,277 in 2026. The preference showed up as volume moved, not as a statement of intent.",
        learning:
          "An agency pushes what makes it win in front of its client and what costs it the least work. I play on both, in that order.",
      },
    },
    script: {
      fr: {
        hook:
          "Une agence ne pousse pas la meilleure plateforme, elle pousse celle qui la fait gagner devant son client pour le moins de travail possible. Je joue sur ces deux variables, dans cet ordre.",
        body: [
          "Je commence par demander sur quoi son client la juge, et à quel rythme. Une agence au forfait vend du temps, donc elle arbitre à l'effort. Une agence rémunérée à la performance arbitre au résultat du mois. Je sais alors ce que je dois lui retirer des mains.",
          "Ensuite je baisse le coût de la recommandation. Analyse de compte et benchmark local prêts à présenter, paramétrage pris en charge, comparaison chiffrée entre les établissements sponsorisés et ceux restés en gratuit. L'objectif est que me recommander soit la recommandation la moins chère à produire de son plan.",
          "Je ne demande jamais l'exclusivité, personne ne l'accorde. Je demande un périmètre de test mesurable et je laisse les chiffres l'élargir. Et quand un concurrent est meilleur sur un cas, je le dis : c'est ce qui rend crédible tout le reste. Avec les mêmes intermédiaires, les bookings de Système U sont passés de 184 732 euros en 2024 à 547 277 en 2026.",
        ],
        closing: "La préférence se mesure en volume déplacé, jamais à la qualité des échanges.",
        keyBeats: [
          "Gagner devant son client, pour peu de travail",
          "Sur quoi son client la juge",
          "Baisser le coût de la recommandation",
          "Test mesurable, pas d'exclusivité",
          "Volume déplacé comme preuve",
        ],
      },
      en: {
        hook:
          "An agency does not push the best platform, it pushes the one that makes it win in front of its client for the least possible work. I play on those two variables, in that order.",
        body: [
          "I start by asking what its client judges it on, and how often. An agency on a retainer sells time, so it decides on effort. An agency paid on performance decides on this month's result. From there I know what I have to take off their hands.",
          "Then I lower the cost of recommending me. Account analysis and local benchmark ready to present, setup handled on my side, a quantified comparison between sponsored sites and sites still posting for free. The goal is that recommending me is the cheapest recommendation in their plan to produce.",
          "I never ask for exclusivity, nobody grants it. I ask for a measurable test perimeter and let the numbers widen it. And when a competitor is better on a given case, I say so: that is what makes everything else I claim credible. With the same partners, Système U bookings went from 184,732 euros in 2024 to 547,277 in 2026.",
        ],
        closing: "Preference is measured in budget moved, never in how pleasant the conversations are.",
        keyBeats: [
          "Win for them, at low effort",
          "What their client judges them on",
          "Lower the cost of recommending",
          "Measurable test, no exclusivity",
          "Budget moved as proof",
        ],
      },
    },
    metrics: [
      "Système U avec les mêmes intermédiaires : 184 732 euros en 2024, 352 979 en 2025, 547 277 en 2026",
    ],
    targetSeconds: 82,
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
      "Si tu industrialises le matériel au lieu de refaire le travail à chaque demande.",
      "Si tu mesures l'autonomie obtenue et pas le nombre de sessions tenues.",
      "Si tu anticipes le turnover chez le partenaire, qui efface une formation en quelques semaines.",
    ],
    traps: [
      "Décrire une formation produit descendante : une équipe d'agence ne retient que ce qui l'aide à gagner son client.",
      "Compter les sessions plutôt que les campagnes lancées sans toi.",
      "Faire reposer le savoir sur une seule personne, donc sur son prochain changement de poste.",
      "Former le trader, le commercial et le patron d'agence de la même façon.",
    ],
    followUps: [
      {
        question: "Comment tu sais que la formation a pris ?",
        how: "Donne un critère observable et daté : ils lancent et diagnostiquent sans toi, et les questions qui remontent passent du paramétrage à l'allocation de budget.",
      },
      {
        question: "Que fais-tu quand la personne formée part ?",
        how: "Montre que tu l'avais anticipé : le savoir est dans un matériel réutilisable et chez plusieurs personnes. Ne raconte pas une reconstruction héroïque.",
      },
      {
        question: "Comment tu passes à l'échelle sur plusieurs agences ?",
        how: "Parle d'industrialisation : le même diagnostic produit automatiquement par établissement. Tu personnalises sans refaire le travail à la main.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Les faits sont exacts : une vingtaine de tâches récurrentes industrialisées avec l'IA, plus de vingt webinars pour plus de six cents franchisés, et une campagne de 165 e-mails personnalisés par établissement. Ils ont été construits pour ton propre travail commercial, pas comme un programme de formation d'agence : avant de le raconter ainsi, dis précisément ce que tu as transmis à Ideuzo, Matière Grise ou Tomorhow, et sous quelle forme.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Sur les réseaux que j'adresse via un intermédiaire, la personne qui exécute la campagne n'est pas dans mon équipe et a dix autres sujets. Chaque question basique qui remonte jusqu'à moi est le signe que le compte ne peut pas grandir sans moi.",
        task: "Rendre l'équipe de l'intermédiaire capable de lancer, lire et défendre une campagne sans m'appeler.",
        action: [
          "J'ai séparé les besoins : celui qui exécute veut un mode opératoire, celui qui vend veut un argument chiffré sur ses comptes, celui qui dirige veut un résultat présentable.",
          "J'ai industrialisé le matériel plutôt que de le refaire à la demande : une vingtaine de tâches récurrentes automatisées, dont l'analyse de compte et le benchmark local, pour sortir un diagnostic par établissement.",
          "J'ai transformé ce diagnostic en support prêt à l'emploi, jusqu'à une campagne de 165 messages personnalisés par établissement, ce qui donne un point d'entrée concret pour chaque site.",
          "J'ai formé plusieurs personnes chez le partenaire, sur les cas réels de son portefeuille, pour qu'un départ n'efface pas le savoir.",
        ],
        result:
          "L'équipe partenaire a porté le diagnostic par établissement sans moi, avec un matériel qui couvre 165 établissements, et mes sollicitations sont passées des questions de paramétrage aux questions d'allocation de budget.",
        learning:
          "Une équipe d'agence n'apprend pas un produit, elle apprend à gagner devant son client. Je forme donc sur ses cas et j'industrialise le reste pour ne jamais être le goulot d'étranglement.",
      },
      en: {
        situation:
          "On the networks I address through a partner, the person running the campaign is not on my team and has ten other topics. Every basic question that reaches me is a sign the account cannot grow without me.",
        task: "Make the partner team able to launch, read and defend a campaign without calling me.",
        action: [
          "I separated the needs: the person executing wants a procedure, the person selling wants a quantified argument on their own accounts, the person leading wants a presentable result.",
          "I industrialised the material instead of rebuilding it on request: around twenty recurring tasks automated, including account analysis and local benchmarks, to produce a per site diagnosis.",
          "I turned that diagnosis into ready to use material, up to a campaign of 165 messages personalised per site, which gives a concrete entry point for every location.",
          "I trained several people at the partner, on real cases from their own portfolio, so one departure would not wipe out the knowledge.",
        ],
        result:
          "The partner team carried the per site diagnosis without me, with material covering 165 sites, and the questions coming to me moved from setup issues to budget allocation.",
        learning:
          "An agency team does not learn a product, it learns how to win in front of its client. So I train on their cases and industrialise the rest, to never be the bottleneck.",
      },
    },
    script: {
      fr: {
        hook:
          "Une équipe d'agence n'apprend pas un produit, elle apprend à gagner devant son client. Je ne fais donc pas de formation produit, je construis son argumentaire sur son propre portefeuille.",
        body: [
          "Je sépare trois besoins qui n'ont rien à voir. Celui qui exécute veut un mode opératoire. Celui qui vend veut un argument chiffré sur ses comptes à lui. Celui qui dirige veut un résultat présentable à son client. Une même session pour les trois ne sert personne.",
          "Ensuite j'industrialise le matériel au lieu de le refaire à chaque demande. J'ai automatisé une vingtaine de tâches récurrentes, dont l'analyse de compte et le benchmark local, ce qui me permet de sortir un diagnostic par établissement. J'ai animé plus de vingt webinars pour plus de six cents franchisés sur ce principe : le contenu est commun, les chiffres sont les leurs.",
          "Je mesure ce que ça produit, pas le nombre de sessions tenues : campagnes lancées sans moi, et niveau des questions qui remontent. Quand elles passent du paramétrage à l'allocation de budget, c'est pris. Et je forme toujours deux ou trois personnes, parce qu'un départ efface une formation en quelques semaines.",
        ],
        closing: "Je peux détailler le contenu réel d'une session si vous voulez voir ce que j'y mets.",
        keyBeats: [
          "Gagner devant son client, pas connaître le produit",
          "Trois besoins, trois formats",
          "Industrialiser le matériel",
          "Mesurer les lancements sans moi",
          "Plusieurs personnes, jamais une",
        ],
      },
      en: {
        hook:
          "An agency team does not learn a product, it learns how to win in front of its client. So I do not run product training, I build their pitch on their own portfolio.",
        body: [
          "I separate three needs that have nothing in common. The person executing wants a procedure. The person selling wants a quantified argument on their own accounts. The person leading wants a result they can present to their client. One session for all three serves nobody.",
          "Then I industrialise the material instead of rebuilding it on request. I automated around twenty recurring tasks, including account analysis and local benchmarks, which lets me produce a per site diagnosis. I have run more than twenty webinars for over six hundred franchisees on that principle: the content is shared, the numbers are theirs.",
          "I measure what it produces, not the number of sessions held: campaigns launched without me, and the level of the questions that reach me. When they move from setup to budget allocation, it has landed. And I always train two or three people, because one departure wipes out a training in a few weeks.",
        ],
        closing: "I am happy to go through what I actually put in a session if that is useful.",
        keyBeats: [
          "Winning for them, not product knowledge",
          "Three needs, three formats",
          "Industrialise the material",
          "Measure launches without me",
          "Several people, never one",
        ],
      },
    },
    metrics: [
      "Une vingtaine de tâches récurrentes industrialisées avec l'IA, dont l'analyse de compte et les benchmarks locaux",
      "Plus de 20 webinars animés, touchant plus de 600 franchisés",
      "Campagne de 165 e-mails personnalisés par établissement",
    ],
    targetSeconds: 82,
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
      "Ta cartographie : qui décide, qui exécute, qui peut bloquer, qui paie.",
      "Si tu dis qui tranche quand deux partenaires sont en désaccord.",
      "Si tu refuses de devenir l'agent de liaison entre deux partenaires qui ne se parlent pas.",
      "Ton honnêteté sur ce que tu ne contrôles pas dans cette chaîne.",
    ],
    traps: [
      "Décrire une organisation idéale au lieu de nommer le point de décision.",
      "Porter la coordination à leur place, ce qui te transforme en coût et pas en valeur.",
      "Donner une version différente à chaque acteur : ils se parlent, et la contradiction se paie.",
      "Oublier le niveau qui exécute réellement, souvent local, qui décide de l'adoption.",
    ],
    followUps: [
      {
        question: "Que fais-tu quand les deux partenaires se renvoient la responsabilité ?",
        how: "Ramène-les sur la mesure commune et propose un seul point à trois. Écris qui décide quoi et pour quand, puis envoie-le aux deux en même temps.",
      },
      {
        question: "Qui est ton client dans cette configuration ?",
        how: "Les deux, avec une hiérarchie que tu énonces sans hésiter : l'annonceur pour l'objectif, les partenaires pour l'exécution.",
      },
      {
        question: "Tu n'as jamais eu d'agence créative dans la boucle ?",
        how: "Dis-le franchement et nomme ta transposition : ton troisième acteur est un partenaire technique de diffusion, pas un créatif. La structure à trois est la même, l'objet du désaccord change.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "La chaîne à trois est ton quotidien réel : une tête de réseau qui négocie, des dizaines à des centaines d'établissements qui décident et paient localement, et un intermédiaire qui diffuse. En revanche tu n'as pas de couple agence média et agence créative : annonce la transposition à voix haute plutôt que de laisser croire que tu as vécu cette configuration.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Je n'ai pas eu le couple agence média et agence créative, mais j'ai l'équivalent structurel tous les jours : une tête de réseau qui négocie le cadre, des dizaines à des centaines d'établissements qui décident et paient localement, et un intermédiaire qui diffuse. Trois acteurs, trois intérêts, aucun qui contrôle toute la chaîne.",
        task: "Faire tenir un compte où la décision, le paiement et l'exécution sont chez trois acteurs différents, sans devenir leur agent de liaison.",
        action: [
          "J'ai cartographié la chaîne et fait valider la carte par les intéressés : qui arbitre le budget, qui exécute, qui peut bloquer, qui paie.",
          "J'ai dit ce que je portais et ce que je ne portais pas : la donnée et la mesure, jamais le planning interne du client ni la coordination entre deux partenaires.",
          "J'ai imposé une mesure unique et partagée, pour qu'un désaccord se règle sur un chiffre commun et pas sur trois exports différents.",
          "J'ai continué à travailler le niveau local, parce qu'un accord au centre ne crée pas l'usage : ce sont les établissements qui adoptent ou pas.",
        ],
        result:
          "C'est le mode de fonctionnement de la quasi-totalité de mes comptes : 817 réseaux parents et 4 584 comptes advertisers, dont 26 réseaux et 633 comptes qui facturent sur douze mois.",
        learning:
          "Dans une chaîne à trois, ma valeur n'est pas de faire circuler l'information, c'est de fournir la seule mesure que les trois acceptent.",
      },
      en: {
        situation:
          "I have not had the media agency plus creative agency pairing, but I live the structural equivalent every day: a network head office that negotiates the framework, dozens to hundreds of sites that decide and pay locally, and a partner that runs distribution. Three parties, three interests, none of them controlling the full chain.",
        task: "Hold together an account where decision, payment and execution sit with three different parties, without becoming their liaison officer.",
        action: [
          "I mapped the chain and had the parties confirm the map: who arbitrates the budget, who executes, who can block, who pays.",
          "I said what I own and what I do not: the data and the measurement, never the client's internal planning nor the coordination between two partners.",
          "I imposed one shared measurement, so a disagreement gets settled on a common number instead of three different exports.",
          "I kept working the local level, because an agreement at the centre does not create usage: the sites either adopt or they do not.",
        ],
        result:
          "This is how almost my entire book works: 817 parent networks and 4,584 advertiser accounts, of which 26 networks and 633 accounts bill over twelve months.",
        learning:
          "In a three party chain my value is not moving information around, it is providing the one measurement all three accept.",
      },
    },
    script: {
      fr: {
        hook:
          "Dans une chaîne à trois, ma valeur n'est pas de faire circuler l'information, c'est de fournir la seule mesure que les trois acceptent.",
        body: [
          "Je n'ai pas eu le couple agence média et agence créative, mais j'ai l'équivalent tous les jours, avec un partenaire technique à la place du créatif. Je commence donc par cartographier et faire valider la carte par les intéressés : qui arbitre le budget, qui exécute, qui peut bloquer, qui paie. Chez moi, une tête de réseau négocie, des dizaines d'établissements décident et paient localement, et un intermédiaire diffuse.",
          "Ensuite je dis ce que je porte et ce que je ne porte pas. Je porte la donnée et la mesure. Je ne porte ni le planning interne du client, ni la coordination entre deux partenaires qui ne se parlent pas. Sans cette frontière, je deviens leur chef de projet gratuit, donc un coût et plus une valeur.",
          "Enfin j'impose une mesure unique, la même pour les trois, et j'écris après chaque point qui décide quoi et pour quand, envoyé aux trois en même temps. Une seule version de la vérité, parce qu'ils se parlent et que la contradiction se paie. Et je continue de travailler le niveau local, parce qu'un accord au centre ne crée pas l'usage.",
        ],
        closing: "Quand les deux partenaires se renvoient la responsabilité, le chiffre commun tranche à ma place.",
        keyBeats: [
          "Une mesure que les trois acceptent",
          "Cartographier, faire valider",
          "Ce que je porte, ce que je refuse",
          "Une seule version écrite",
          "Le niveau local crée l'usage",
        ],
      },
      en: {
        hook:
          "In a three party chain my value is not moving information around, it is providing the one measurement all three accept.",
        body: [
          "I have not had the media agency plus creative agency pairing, but I live the equivalent every day, with a technical partner in the creative agency's place. So I start by mapping the chain and having the parties confirm the map: who arbitrates the budget, who executes, who can block, who pays. In my case a head office negotiates, dozens of sites decide and pay locally, and a partner runs distribution.",
          "Then I say what I own and what I do not. I own the data and the measurement. I do not own the client's internal planning, nor the coordination between two partners who do not talk to each other. Without that boundary I become their free project manager, which makes me a cost rather than a value.",
          "Finally I impose one measurement, the same for all three, and after every call I write down who decides what and by when, sent to all three at once. One version of the truth, because they talk to each other and contradictions get paid for. And I keep working the local level, because an agreement at the centre does not create usage.",
        ],
        closing: "When the two partners push responsibility back and forth, the shared number decides instead of me.",
        keyBeats: [
          "One measurement all three accept",
          "Map it, have it confirmed",
          "What I own, what I refuse",
          "One written version",
          "Local level creates usage",
        ],
      },
    },
    metrics: [
      "Book : 817 réseaux parents, 4 584 comptes advertisers, 26 réseaux et 633 comptes qui facturent sur 12 mois",
    ],
    targetSeconds: 90,
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
      "Ta réaction sous accusation : te défendre, charger le partenaire, ou reprendre le diagnostic.",
      "Si tu établis un fait technique avant de parler de responsabilité.",
      "Ta loyauté envers le partenaire, testée au moment où le charger serait plus confortable.",
      "Si tu traites la cause structurelle et pas seulement l'incident.",
    ],
    traps: [
      "Dire « ce n'est pas nous, c'est l'agence » : tu gagnes la réunion et tu perds le partenaire.",
      "Endosser une faute qui n'est pas la tienne pour calmer le client, ce qui crée un précédent intenable.",
      "Parler de responsabilité avant d'avoir établi ce qui s'est passé dans la diffusion.",
      "Ressortir intact de l'histoire : un incident qui ne t'a rien coûté n'intéresse personne.",
    ],
    followUps: [
      {
        question: "Comment tu présentes l'erreur du partenaire au client ?",
        how: "Présente le fait et la correction, pas le coupable, si possible avec le partenaire dans la pièce. Le client veut savoir que c'est corrigé et que ça ne reviendra pas.",
      },
      {
        question: "Et si le partenaire refuse de reconnaître le problème ?",
        how: "Reste sur la donnée vérifiable et propose un contrôle conjoint. Si le fait est établi et qu'il le nie encore, remonte le sujet dans un cadre à trois, jamais par écrit au client seul.",
      },
      {
        question: "Qu'est-ce que tu changes pour que ça n'arrive plus ?",
        how: "Nomme un contrôle daté : vérification de la mise en ligne avant chaque démarrage, au lieu d'un diagnostic déclenché par la plainte.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le fait technique est exact : certains réseaux passent par un outil de diffusion tiers, par exemple un flux Beetween chez Kangourou Kids, et dans cette configuration tu ne contrôles ni la mise en ligne ni parfois le paramétrage. L'incident, le reproche du client et le déroulé de la résolution sont reconstitués : remplace-les par le vrai incident, sa durée et son issue.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Sur un réseau diffusé par un flux technique, un flux Beetween chez Kangourou Kids, je ne contrôle ni la mise en ligne des offres ni parfois leur paramétrage. Quand les candidatures manquent, le client me le dit à moi, parce que je suis la plateforme, même si la cause est plus haut dans la chaîne.",
        task: "Établir ce qui s'est réellement passé et faire corriger, sans charger le partenaire technique devant le client ni endosser une faute qui n'est pas la mienne.",
        action: [
          "J'ai accusé réception du problème sans donner ni explication ni coupable avant d'avoir regardé les faits.",
          "J'ai refait le diagnostic poste par poste : ce qui était publié, sous quel intitulé, avec quel paramétrage, et ce qui n'était jamais arrivé en ligne.",
          "J'ai demandé au partenaire technique une vérification et pas une justification, sur la partie du diagnostic que je ne vois pas.",
          "J'ai reconnu devant le client que je n'avais pas vu l'écart avant lui, ce qui m'a coûté sur le moment, puis j'ai posé un contrôle de mise en ligne avant chaque démarrage.",
        ],
        result:
          "La diffusion a été rétablie, le client a maintenu son investissement, et le partenaire technique est resté dans la boucle au lieu d'être désigné. L'écart suivant a été détecté par nous et pas par le client.",
        learning:
          "Quand je ne contrôle pas l'exécution, ma valeur est d'être celui qui établit le fait le plus vite. Un fait partagé ferme l'incident, une recherche de responsable le fait durer.",
      },
      en: {
        situation:
          "On a network distributed through a technical feed, a Beetween feed at Kangourou Kids, I control neither when jobs go live nor sometimes how they are set up. When applications are missing the client tells me, because I am the platform, even if the cause sits further up the chain.",
        task: "Establish what actually happened and get it fixed, without blaming the technical partner in front of the client and without owning a fault that is not mine.",
        action: [
          "I acknowledged the problem without offering an explanation or a culprit before looking at the facts.",
          "I redid the diagnosis role by role: what was live, under which title, with which setup, and what never went live at all.",
          "I asked the technical partner for a check rather than a justification, on the part of the diagnosis I cannot see.",
          "I admitted to the client that I had not spotted the gap before they did, which cost me in the moment, then I put a go live check in place before every start.",
        ],
        result:
          "Distribution was restored, the client kept its investment, and the technical partner stayed in the loop instead of being named. The next gap was caught by us and not by the client.",
        learning:
          "When I do not control execution, my value is being the person who establishes the fact fastest. A shared fact closes the incident, a hunt for the culprit keeps it alive.",
      },
    },
    script: {
      fr: {
        hook:
          "Sous accusation, je ne me défends pas et je ne charge pas le partenaire : j'établis le fait, parce que c'est la seule chose qui ferme l'incident.",
        body: [
          "J'accuse réception, sans explication et sans coupable. Puis je refais le diagnostic poste par poste : ce qui est réellement publié, sous quel intitulé, avec quel paramétrage, et ce qui n'est jamais arrivé en ligne. Sur un réseau diffusé par un flux, un flux Beetween chez Kangourou Kids par exemple, je ne vois pas la mise en ligne, donc une partie du diagnostic est chez le partenaire technique.",
          "À lui, je demande une vérification, pas une justification. Puis je reviens vers le client avec le fait et la correction, jamais avec la responsabilité : ce qui n'a pas été diffusé, ce qui est corrigé, à partir de quand la mesure redevient lisible.",
          "Ce que je refuse, c'est de dire que c'est l'agence : je gagnerais la réunion et je perdrais le partenaire. Je refuse aussi d'endosser une faute qui n'est pas la mienne, parce que le précédent est intenable. En revanche je reconnais ma part, je n'ai pas vu l'écart avant le client, et j'y réponds par un contrôle de mise en ligne avant chaque démarrage.",
        ],
        closing: "C'est ce contrôle qui a le plus changé ma façon de travailler avec un partenaire technique.",
        keyBeats: [
          "Établir le fait, pas le coupable",
          "Diagnostic poste par poste",
          "Vérification, pas justification",
          "Ni accusation, ni faute endossée",
          "Contrôle avant chaque démarrage",
        ],
      },
      en: {
        hook:
          "Under accusation I neither defend myself nor blame the partner: I establish the fact, because that is the only thing that closes the incident.",
        body: [
          "I acknowledge the problem, with no explanation and no culprit. Then I redo the diagnosis role by role: what is actually live, under which title, with which setup, and what never went live at all. On a network distributed through a feed, a Beetween feed at Kangourou Kids for instance, I cannot see the go live, so part of the diagnosis sits with the technical partner.",
          "From them I ask for a check, not a justification. Then I go back to the client with the fact and the fix, never with liability: what was not distributed, what is corrected, and from when the measurement becomes readable again.",
          "What I refuse is to say it was the agency: I would win the meeting and lose the partner. I also refuse to own a fault that is not mine, because that precedent is impossible to hold. What I do own is my part, I did not spot the gap before the client did, and I answer that with a go live check before every start.",
        ],
        closing: "That check is what changed my way of working with a technical partner the most.",
        keyBeats: [
          "Establish the fact, not the culprit",
          "Diagnosis role by role",
          "A check, not a justification",
          "No blaming, no false ownership",
          "Go live check before every start",
        ],
      },
    },
    metrics: [
      "Flux Beetween chez Kangourou Kids : ni la mise en ligne ni parfois le paramétrage ne sont sous ton contrôle",
    ],
    targetSeconds: 88,
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
      "Si tu sais nommer les modèles : honoraires fixes, commission sur la dépense, retainer, rémunération à la performance.",
      "Si tu en tires une conséquence concrète sur ta recommandation, et pas un procès d'intention.",
      "Comment tu obtiens l'information sans demander le contrat.",
      "Ta maturité : parler d'argent avec un partenaire sans le braquer ni le juger.",
    ],
    traps: [
      "Présenter l'agence comme intéressée, alors qu'elle suit une incitation contractuelle normale.",
      "Ignorer le sujet en disant qu'elle veut juste le meilleur résultat pour son client.",
      "Rester théorique sans dire ce que tu changes dans ta proposition.",
      "En conclure qu'il faut passer en direct : c'est la réponse qui te coûte le poste.",
    ],
    followUps: [
      {
        question: "Comment tu obtiens une information aussi sensible ?",
        how: "Ne demande jamais le contrat. Demande sur quels indicateurs son client la juge et à quel rythme : ça suffit à déduire le biais, et ce n'est pas indiscret.",
      },
      {
        question: "Une agence payée à la performance, tu l'abordes comment ?",
        how: "Apporte un résultat mesurable sur le mois, puis vends l'investissement long comme une réduction de risque sur sa propre rémunération, pas comme un pari.",
      },
      {
        question: "Et si le modèle pousse à dépenser plus que nécessaire ?",
        how: "Propose de dépenser sur moins d'établissements, avec un plafond et une mesure avant d'élargir. Un euro qui ne produit rien finit toujours par se voir.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Ta banque de faits ne documente aucun modèle de rémunération précis chez Ideuzo, Matière Grise ou Tomorhow, et aucun cas où tu as ajusté ton approche à cause de ce modèle. Avant l'entretien, vérifie comment au moins un de tes intermédiaires est réellement rémunéré, pour pouvoir donner un exemple vrai. Ne cite aucun pourcentage.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Les intermédiaires par lesquels je passe ne sont pas rémunérés de la même façon : certains sur des honoraires fixes, d'autres sur un pourcentage de la dépense, d'autres sur la performance obtenue. Cette structure n'est pas un détail contractuel, elle détermine ce qu'ils ont intérêt à recommander.",
        task: "Adapter ma proposition au modèle économique de chaque partenaire, sans lui prêter de mauvaise intention et sans jamais chercher à l'écarter.",
        action: [
          "Je n'ai pas demandé le contrat : j'ai demandé sur quels indicateurs son client le jugeait et à quel rythme, ce qui suffit à comprendre le biais.",
          "J'en ai tiré la conséquence sans jugement : un partenaire payé sur la dépense n'a pas d'intérêt spontané à recommander l'économie, un partenaire payé à la performance n'a pas d'intérêt à recommander l'investissement long.",
          "Face à une rémunération sur la dépense, j'ai proposé de concentrer le budget sur moins d'établissements, avec un plafond d'entités par mois et une mesure avant d'élargir.",
          "Face à une rémunération à la performance, j'ai sécurisé d'abord un résultat mesurable sur le mois, puis présenté l'investissement long comme une réduction de risque sur sa propre rémunération.",
        ],
        result:
          "La recommandation qui sort est défendable par les deux parties : le partenaire garde sa rémunération, l'annonceur voit son coût par candidature s'améliorer. Je n'ai jamais eu besoin de contourner un intermédiaire pour corriger une trajectoire.",
        learning:
          "Un partenaire ne recommande pas ce qui est vrai, il recommande ce qui est vrai et bon pour lui. Mon travail est de faire se recouvrir les deux.",
      },
      en: {
        situation:
          "The partners I work through are not paid the same way: some on fixed fees, some on a percentage of spend, some on performance delivered. That structure is not a contractual detail, it determines what they have an interest in recommending.",
        task: "Adapt my proposal to each partner's economics, without assuming bad faith and without ever trying to cut them out.",
        action: [
          "I did not ask for the contract: I asked what their client measured them on and how often, which is enough to understand the bias.",
          "I drew the consequence without judgement: a partner paid on spend has no spontaneous interest in recommending savings, a partner paid on performance has no interest in recommending long term investment.",
          "Facing a spend based model, I proposed concentrating budget on fewer sites, with a cap on entities per month and a measurement before widening.",
          "Facing a performance based model, I first secured a measurable result within the month, then framed the long term investment as risk reduction on their own compensation.",
        ],
        result:
          "The recommendation that comes out is defensible by both sides: the partner keeps its compensation, the advertiser sees cost per application improve. I have never needed to bypass a partner to correct a trajectory.",
        learning:
          "A partner does not recommend what is true, it recommends what is true and good for them. My job is to make those two overlap.",
      },
    },
    script: {
      fr: {
        hook:
          "Un partenaire ne recommande pas ce qui est vrai, il recommande ce qui est vrai et bon pour lui. Mon travail est de faire se recouvrir les deux.",
        body: [
          "Je ne demande jamais le contrat. Je demande sur quels indicateurs son client la juge, et à quel rythme. Honoraires fixes, commission sur la dépense, retainer, rémunération à la performance : chacun produit un biais différent, et aucun n'est malhonnête.",
          "J'en tire une conséquence sur ma recommandation. Face à une agence payée sur la dépense, je propose souvent de dépenser sur moins d'établissements et pas sur plus : un plafond d'entités critiques par mois, deux ou trois annonces par entité, et une mesure avant d'élargir. Ça désarme d'emblée le soupçon de vente additionnelle, et ça rend le résultat visible quelque part au lieu de se diluer partout.",
          "Face à une agence rémunérée à la performance, l'ordre s'inverse : je sécurise d'abord un résultat mesurable dans le mois, puis je présente l'investissement long comme une réduction de risque sur sa propre rémunération. Dans les deux cas, ce que je fabrique est une preuve d'incrémentalité qu'elle peut présenter comme sa victoire.",
        ],
        closing: "Je n'ai jamais eu besoin de contourner un intermédiaire pour corriger une trajectoire.",
        keyBeats: [
          "Vrai et bon pour elle",
          "Pas le contrat, les indicateurs",
          "Dépense : concentrer, plafonner",
          "Performance : résultat court d'abord",
          "Une preuve qu'elle peut signer",
        ],
      },
      en: {
        hook:
          "A partner does not recommend what is true, it recommends what is true and good for them. My job is to make those two overlap.",
        body: [
          "I never ask for the contract. I ask what their client measures them on, and how often. Fixed fees, a commission on spend, a retainer, performance based pay: each produces a different bias, and none of them is dishonest.",
          "I draw a consequence for my recommendation. With an agency paid on spend, I often propose spending on fewer sites rather than more: a cap on critical entities per month, two or three ads per entity, and a measurement before widening. That disarms the upsell suspicion straight away, and it makes the result visible somewhere instead of diluted everywhere.",
          "With an agency paid on performance, the order flips: I first secure a measurable result within the month, then frame the long term investment as risk reduction on their own compensation. In both cases what I build is an incrementality proof they can present as their own win.",
        ],
        closing: "I have never needed to bypass a partner to correct a trajectory.",
        keyBeats: [
          "True and good for them",
          "Not the contract, the metrics",
          "Spend based: concentrate and cap",
          "Performance based: short result first",
          "A proof they can sign",
        ],
      },
    },
    metrics: [],
    targetSeconds: 80,
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
      "Si tu pilotes un book partenaire en capacité installée et pas en relations individuelles.",
      "Ton critère de priorisation, et surtout ce à quoi tu renonces.",
      "Si tu mesures un partenaire autrement que par la dépense du trimestre.",
      "Ton réalisme sur ce que tu perds en passant du direct au partenaire.",
    ],
    traps: [
      "Décrire le même métier qu'en direct, avec juste un intermédiaire ajouté au milieu.",
      "Promettre de tout couvrir : une priorisation sans renoncement nommé n'est pas une priorisation.",
      "Dépendre du reporting du partenaire, faute de mesure à toi.",
      "Présenter un plan projeté comme une expérience déjà vécue.",
    ],
    followUps: [
      {
        question: "Quels indicateurs tu suivrais sur un partenaire ?",
        how: "Cite l'autonomie et la couverture avant la dépense : comptes actifs chez lui, campagnes lancées sans toi, part de son portefeuille qui investit. La dépense est la conséquence.",
      },
      {
        question: "Comment tu gérerais un partenaire qui stagne ?",
        how: "Distingue celui qui ne peut pas de celui qui ne veut pas, et dis lequel : le premier relève de la formation, le second d'un arbitrage de ton temps.",
      },
      {
        question: "Qu'est-ce que tu perdrais par rapport au direct ?",
        how: "La visibilité fine et la vitesse de réaction. Dis-le sans l'adoucir, puis dis comment tu compenses avec ta propre mesure.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "La question est prospective : le plan est une projection, pas un book 100 % partenaires que tu as déjà tenu. Les faits de structure sont exacts, 817 réseaux parents dont 791 à compte unique, 4 584 comptes advertisers, 1,15 million d'euros sur douze mois et sept réseaux à 84 % du revenu. Annonce clairement ce qui est vécu et ce qui est projeté.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Une partie de mon book fonctionne déjà comme un book partenaire : Système U passe par Ideuzo et Matière Grise, une partie de Family Sphere par Tomorhow, et certains réseaux par un outil de diffusion tiers. Je gère 817 réseaux parents et 4 584 comptes advertisers, dont 791 parents ne contiennent qu'un seul compte.",
        task: "Aborder un portefeuille de partenaires comme une capacité à installer chez d'autres équipes, et pas comme une liste de relations à entretenir.",
        action: [
          "Je partirais de la concentration réelle du chiffre : sur mon book, sept réseaux font 84 % du revenu, donc je chercherais d'abord quels partenaires portent l'essentiel du potentiel, et j'assumerais de ne pas couvrir le reste.",
          "Je segmenterais par capacité et par volonté, parce que celui qui ne peut pas relève de la formation et celui qui ne veut pas d'un arbitrage de mon temps.",
          "Je bâtirais ma propre mesure, compte par compte et établissement par établissement, pour ne pas dépendre du reporting du partenaire.",
          "Je développerais un deuxième rang de partenaires avant que le premier ne devienne indispensable.",
        ],
        result:
          "C'est la mécanique qui produit déjà mes résultats sur la partie intermédiée du book, qui pèse 1,15 million d'euros sur douze mois. Ce que je mesure en premier chez un partenaire, c'est ce qu'il sait faire sans moi.",
        learning:
          "Un book partenaire ne se gère pas en relations mais en capacité installée. La dépense est une conséquence, pas un pilote.",
      },
      en: {
        situation:
          "Part of my book already works like a partner book: Système U goes through Ideuzo and Matière Grise, part of Family Sphere through Tomorhow, and some networks through a third party distribution tool. I run 817 parent networks and 4,584 advertiser accounts, of which 791 parents hold a single account.",
        task: "Approach a partner portfolio as capability to install inside other teams, rather than a list of relationships to maintain.",
        action: [
          "I would start from where revenue actually concentrates: on my book seven networks make 84 percent of revenue, so I would first find which partners carry most of the potential, and accept not covering the rest.",
          "I would segment by ability and by willingness, because the one who cannot calls for enablement and the one who will not calls for a decision about my own time.",
          "I would build my own measurement, account by account and site by site, so I do not depend on partner reporting.",
          "I would grow a second tier of partners before the first tier becomes indispensable.",
        ],
        result:
          "That is the mechanism already producing my results on the intermediated part of the book, which stands at 1.15 million euros over twelve months. The first thing I measure about a partner is what they can do without me.",
        learning:
          "A partner book is not managed through relationships, it is managed through installed capability. Spend is a consequence, not a steering wheel.",
      },
    },
    script: {
      fr: {
        hook:
          "Un book partenaire ne se pilote pas en relations, il se pilote en capacité installée chez d'autres équipes. La première chose que je mesurerais est ce que le partenaire sait faire sans moi.",
        body: [
          "Je partirais de la concentration. Sur mon book actuel, sept réseaux font 84 % du revenu, et 791 de mes 817 parents ne contiennent qu'un seul compte. Je chercherais donc quels partenaires portent l'essentiel du potentiel, et je dirais à mon manager ce que je ne couvre pas, parce qu'une priorisation sans renoncement n'en est pas une.",
          "Ensuite je segmenterais par capacité et par volonté, parce que ça ne se traite pas pareil. Celui qui ne peut pas relève de la formation. Celui qui ne veut pas relève d'un arbitrage de mon temps. Et je piloterais la couverture avant la dépense : comptes actifs chez chaque partenaire, campagnes lancées sans moi, part de son portefeuille qui investit.",
          "Ce que je perdrais par rapport au direct, c'est la visibilité fine et la vitesse de réaction. Je le compenserais par ma propre mesure, établissement par établissement, pour ne pas dépendre de leur reporting. Et je développerais un deuxième rang de partenaires avant que le premier ne devienne indispensable.",
        ],
        closing: "Une partie de mon book fonctionne déjà ainsi, donc je peux dire ce qui a marché et ce qui m'a coûté cher.",
        keyBeats: [
          "Capacité installée, pas relation",
          "Concentration, et ce que je lâche",
          "Capacité contre volonté",
          "Couverture avant dépense",
          "Deuxième rang de partenaires",
        ],
      },
      en: {
        hook:
          "A partner book is not steered through relationships, it is steered through capability installed inside other teams. The first thing I would measure is what the partner can do without me.",
        body: [
          "I would start from concentration. On my current book seven networks make 84 percent of revenue, and 791 of my 817 parents hold a single account. So I would look for which partners carry most of the potential, and tell my manager what I am not covering, because a prioritisation without something dropped is not one.",
          "Then I would segment by ability and by willingness, because they are not handled the same way. The one who cannot calls for enablement. The one who will not calls for a decision about my own time. And I would steer coverage before spend: active accounts per partner, campaigns launched without me, share of their portfolio that invests.",
          "What I would lose compared to direct is fine grained visibility and speed of reaction. I would offset that with my own measurement, site by site, so I do not depend on their reporting. And I would grow a second tier of partners before the first tier becomes indispensable.",
        ],
        closing: "Part of my book already works this way, so I can tell you what worked and what cost me dearly.",
        keyBeats: [
          "Installed capability, not relationships",
          "Concentration, and what I drop",
          "Ability versus willingness",
          "Coverage before spend",
          "A second tier of partners",
        ],
      },
    },
    metrics: [
      "Book : 817 réseaux parents dont 791 à compte unique, 4 584 comptes advertisers",
      "Sept premiers réseaux : 84 % du revenu, pour 1,15 M€ sur 12 mois",
    ],
    targetSeconds: 88,
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
      "Ta constance sur plusieurs exercices, y compris les années où le partenaire ne rapporte rien.",
      "Ta gestion des mauvaises nouvelles, qui est le vrai test de la confiance.",
      "Si tu prouves la durée par une trajectoire chiffrée plutôt que par une déclaration.",
    ],
    traps: [
      "Répondre par la proximité personnelle : les recruteurs entendent cette réponse toute la journée.",
      "Ne donner aucun chiffre, alors qu'une relation durable se lit sur une courbe pluriannuelle.",
      "Oublier la fiabilité opérationnelle, qui est ce qu'une agence valorise au quotidien.",
      "Faire reposer la relation sur une seule personne, qui changera de poste.",
    ],
    followUps: [
      {
        question: "Comment tu annonces une mauvaise nouvelle à un partenaire ?",
        how: "Tôt, avec le fait et l'option de correction, et avant que son client ne le découvre. Dis que c'est le moment précis où la relation se construit ou se perd.",
      },
      {
        question: "Comment tu résistes au changement d'interlocuteur ?",
        how: "Diffuse la même lecture à plusieurs personnes et laisse du matériel réutilisable. Une relation qui tient à une personne est un risque, pas un actif.",
      },
      {
        question: "Comment tu prouves que la relation est durable ?",
        how: "Par la pente, pas par le ressenti : quatre exercices consécutifs de croissance avec les mêmes intermédiaires dans la boucle.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "La courbe Système U est exacte et suffit à porter la réponse, année par année, avec Ideuzo et Matière Grise dans la boucle. L'atelier où des commerciaux Indeed pitchent devant l'agence vient d'une réussite d'un autre commercial, justement avec Ideuzo : présente-le comme ce que tu proposes, jamais comme un souvenir, tant que tu ne l'as pas organisé toi-même.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Système U est adressé via Ideuzo et Matière Grise, et je travaille avec eux depuis quatre exercices sans avoir jamais eu la relation directe avec les magasins qui décident et paient.",
        task: "Construire une relation qui survive aux changements de personnes et aux années creuses, plutôt qu'une bonne entente ponctuelle.",
        action: [
          "J'ai été fiable sur l'opérationnel, y compris sur les sujets ingrats de paramétrage, parce que c'est ce qu'une agence valorise au quotidien.",
          "J'ai apporté avant de demander : le benchmark local par entité, qu'ils ne pouvaient pas produire seuls et qui leur servait devant leur client.",
          "J'ai annoncé les mauvaises nouvelles moi-même et tôt, avant que leur client ne les découvre, ce qui coûte sur le moment et paie sur la durée.",
          "J'ai tenu la cadence l'année où le réseau ne pesait presque rien, et j'ai diffusé la même lecture à plusieurs interlocuteurs pour ne pas dépendre d'une seule personne.",
        ],
        result:
          "Les bookings du réseau ont progressé quatre exercices de suite avec les mêmes intermédiaires : 101 986 euros en 2023, 184 732 en 2024, 352 979 en 2025 et 547 277 en 2026.",
        learning:
          "Une relation d'agence ne se mesure pas à la qualité des échanges mais à la pente sur plusieurs années.",
      },
      en: {
        situation:
          "Système U is addressed through Ideuzo and Matière Grise, and I have worked with them across four fiscal years without ever holding the direct relationship with the stores that decide and pay.",
        task: "Build a relationship that survives people changing and lean years, rather than a good rapport at a point in time.",
        action: [
          "I was reliable on the operational side, including the thankless setup work, because that is what an agency values day to day.",
          "I gave before asking: the local benchmark by entity, which they could not produce alone and which served them in front of their client.",
          "I delivered bad news myself and early, before their client found it, which costs in the moment and pays over time.",
          "I kept the cadence in the year the network was worth almost nothing, and I shared the same read with several contacts so as not to depend on one person.",
        ],
        result:
          "Network bookings grew four years in a row with the same partners: 101,986 euros in 2023, 184,732 in 2024, 352,979 in 2025 and 547,277 in 2026.",
        learning:
          "An agency relationship is not measured by how pleasant the conversations are, it is measured by the slope over several years.",
      },
    },
    script: {
      fr: {
        hook:
          "Une relation d'agence ne se mesure pas à la qualité des échanges, elle se mesure à la pente sur plusieurs années.",
        body: [
          "Elle tient d'abord sur la fiabilité opérationnelle, y compris les sujets ingrats de paramétrage, parce que c'est ce qu'une agence valorise au quotidien. Et j'apporte avant de demander : le benchmark local par entité, qu'ils ne peuvent pas produire seuls et qui leur sert devant leur propre client.",
          "Le levier qui crée le plus de réciprocité est contre-intuitif : plutôt que de leur présenter un catalogue, faire venir leurs équipes chez nous et laisser nos commerciaux pitcher devant elles, en s'exposant à leur critique. C'est nous qui prenons le risque, et ça crée une dette qu'aucune réunion commerciale ne crée.",
          "Ensuite il faut tenir les années creuses. Sur Système U, le réseau pesait 101 986 euros de bookings en 2023, puis 184 732, 352 979, et 547 277 en 2026, quatre exercices de progression avec les mêmes intermédiaires. Ce qui a compté dans l'intervalle, c'est d'avoir annoncé moi-même les mauvaises nouvelles, avant que leur client ne les découvre.",
        ],
        closing: "Et je ne laisse jamais la relation tenir à une seule personne, parce qu'elle finira par changer de poste.",
        keyBeats: [
          "La pente, pas les échanges",
          "Fiabilité, puis apport gratuit",
          "Pitcher devant eux, prendre le risque",
          "Tenir les années creuses",
          "Plusieurs interlocuteurs",
        ],
      },
      en: {
        hook:
          "An agency relationship is not measured by how pleasant the conversations are, it is measured by the slope over several years.",
        body: [
          "It rests first on operational reliability, including the thankless setup work, because that is what an agency values day to day. And I give before asking: the local benchmark by entity, which they cannot produce alone and which serves them in front of their own client.",
          "The lever that creates the most reciprocity is counter intuitive: rather than presenting them a catalogue, bring their teams into our office and let our own sellers pitch in front of them, exposed to their criticism. We take the risk, and that builds a debt no sales meeting ever builds.",
          "Then you have to hold through the lean years. On Système U the network was worth 101,986 euros of bookings in 2023, then 184,732, 352,979, and 547,277 in 2026, four years of growth with the same partners. What mattered in between was delivering the bad news myself, before their client found it.",
        ],
        closing: "And I never let the relationship rest on one person, because that person will eventually move on.",
        keyBeats: [
          "The slope, not the conversations",
          "Reliability, then free value",
          "Pitch in front of them, take the risk",
          "Hold through lean years",
          "Several contacts, never one",
        ],
      },
    },
    metrics: [
      "Système U via Ideuzo et Matière Grise : 101 986 euros en 2023, 184 732 en 2024, 352 979 en 2025, 547 277 en 2026",
    ],
    targetSeconds: 79,
  },
];
