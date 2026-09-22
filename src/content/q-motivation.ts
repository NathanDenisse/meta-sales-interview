import type { Question } from "../types";

export const qMotivation: Question[] = [
  {
    id: "pourquoi-meta",
    category: "motivation",
    difficulty: "classique",
    priority: true,
    prompt: {
      fr: "Pourquoi Meta ?",
      en: "Why Meta?",
    },
    whatTheyTest: [
      "Si tu as réellement regardé le marché publicitaire, ou si tu récites la page carrières.",
      "Si ta motivation porte sur ce que tu vas construire, et pas sur la notoriété de la marque.",
      "Si tu sais citer un chiffre en annonçant son statut, résultat publié ou prévision.",
      "Si tu vois où ton expérience de vente décentralisée s'inscrit dans un portefeuille Meta.",
    ],
    traps: [
      "Parler de prestige, de séniorité ou de rémunération : tu deviens immédiatement interchangeable.",
      "Citer la prévision EMARKETER comme un résultat acquis : en face de toi, quelqu'un connaît la différence.",
      "Critiquer Indeed pour justifier ton intérêt : la question porte sur Meta, pas sur ton employeur.",
      "Empiler six chiffres sans jamais dire lequel a changé ta décision de candidater.",
    ],
    followUps: [
      {
        question: "Pourquoi maintenant plutôt que dans deux ans ?",
        how: "Rattache-le à ta courbe d'apprentissage : trois trimestres au-dessus de la cible, le métier est devenu répétable chez toi, donc c'est maintenant que le changement coûte le moins cher à tout le monde.",
      },
      {
        question: "Qu'est-ce qui pourrait te décevoir chez Meta ?",
        how: "Réponds franchement : un rôle où tu ne verrais que le reporting et jamais la décision d'allocation du client. Puis retourne la question sur la façon dont le poste est construit.",
      },
      {
        question: "Tu cites EMARKETER, mais c'est une prévision privée.",
        how: "Confirme tout de suite sans te défendre : modélisation d'avril 2026, pas un résultat. Enchaîne sur le chiffre publié, 59,363 Md$ au deuxième trimestre 2026, +27 % sur un an.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Les chiffres marché et ta motivation déclarée sont réels. Le déclencheur raconté, avoir séparé résultats publiés et prévisions avant de candidater, est reconstitué : remplace-le par le vrai moment où Meta est devenu une option pour toi, et revérifie le dernier trimestre publié le jour de l'entretien.",
    answer: {
      fr: {
        situation:
          "Je vends depuis juin 2022 chez Indeed sur des réseaux décentralisés français, et depuis 2025 je passe une partie de mon temps à instrumenter mon propre travail avec des agents connectés directement à nos données. En regardant où bascule le budget de mes clients, j'ai constaté que la décision média ne se prend plus au même endroit qu'il y a trois ans.",
        task: "Je voulais un poste où la plateforme concentre à la fois le volume, la mesure et l'automatisation, et où je travaillerais moins de comptes mais beaucoup plus en profondeur.",
        action: [
          "J'ai vérifié la trajectoire sur les résultats publiés et pas sur les commentaires : 59,363 Md$ de revenu publicitaire au deuxième trimestre 2026, +27 % sur un an, avec +14 % d'impressions et +12 % de prix moyen par annonce.",
          "J'ai regardé d'où vient la croissance produit : Advantage+ de bout en bout dépasse 75 Md$ de rythme annuel, et plus de 9 millions de petites entreprises utilisent au moins un outil créatif génératif.",
          "J'ai lu le détail technique parce que c'est ce que je devrai expliquer à un annonceur : Andromeda récupère les annonces éligibles, GEM les classe et les séquence, avec +8,3 % de clics et +15,7 % de conversions sur Facebook, chiffres mesurés par Meta et non audités.",
          "J'ai mis en face la demande du marché : l'IAB a revu en septembre 2026 la dépense publicitaire américaine à +12,3 % pour 2026, avec le social à +16,5 %, et 86 % des acheteurs qui ont changé ou vont changer leur façon de mesurer à cause de l'IA conversationnelle et des agents.",
          "J'ai enfin regardé ce que j'apporte de spécifique : je vends des réseaux décentralisés, où l'accord se négocie au centre puis se gagne établissement par établissement, ce qui est la structure même d'un grand annonceur multi-marques et multi-agences.",
        ],
        result:
          "Ma conclusion n'est pas que Meta est gros, c'est que la valeur du commercial s'y déplace vers le conseil d'allocation et la preuve de mesure, et c'est la compétence que je veux construire pour les dix prochaines années. La prévision EMARKETER d'avril 2026 qui place Meta devant Google à 243,46 Md$ contre 239,54, je la cite comme un signal de direction, pas comme un acquis.",
        learning:
          "Ce que je cherche est un environnement plus exigeant et des comptes moins nombreux et plus gros. Je préfère le dire comme ça plutôt que de parler de la marque.",
      },
      en: {
        situation:
          "I have been selling to decentralised French networks at Indeed since June 2022, and since 2025 I have spent part of my time instrumenting my own work with agents connected directly to our data. Watching where my clients' budgets move, I saw that the media decision is no longer made in the same place it was three years ago.",
        task: "I wanted a role where the platform concentrates volume, measurement and automation at once, and where I would carry fewer accounts but go much deeper on each.",
        action: [
          "I checked the trajectory against published results rather than commentary: $59.363 billion in advertising revenue in the second quarter of 2026, up 27 percent year over year, with impressions up 14 percent and average price per ad up 12 percent.",
          "I looked at where product growth comes from: end to end Advantage+ is past a $75 billion annual run rate, and more than 9 million small businesses use at least one generative creative tool.",
          "I read the technical detail because that is what I will have to explain to an advertiser: Andromeda retrieves eligible ads, GEM ranks and sequences them, delivering 8.3 percent more clicks and 15.7 percent more conversions on Facebook, measured by Meta and not audited.",
          "I set that against demand: in September 2026 the IAB revised US ad spend to plus 12.3 percent for 2026, with social at plus 16.5 percent, and reported that 86 percent of buyers have changed or will change how they measure because of conversational AI and agents.",
          "Finally I looked at what I specifically bring: I sell decentralised networks, where the agreement is negotiated at the centre and then won site by site, which is exactly the structure of a large multi-brand, multi-agency advertiser.",
        ],
        result:
          "My conclusion is not that Meta is large, it is that the value of the salesperson here shifts towards allocation advice and proof of measurement, and that is the skill I want to build for the next ten years. The April 2026 EMARKETER forecast putting Meta ahead of Google at $243.46 billion against $239.54 billion is something I quote as a directional signal, not as a settled fact.",
        learning:
          "What I am looking for is a more demanding environment and fewer, larger accounts. I would rather say it that way than talk about the brand.",
      },
    },
    metrics: [
      "Revenu publicitaire Meta T2 2026 : 59,363 Md$, +27 % sur un an (résultats publiés)",
      "Impressions +14 %, prix moyen par annonce +12 %, 3,60 Md de personnes actives par jour en juin 2026 (résultats publiés)",
      "Advantage+ de bout en bout : plus de 75 Md$ de rythme annuel, plus de 9 M de petites entreprises sur au moins un outil créatif génératif (déclaré par Meta)",
      "Andromeda + GEM : +8,3 % de clics, +15,7 % de conversions sur Facebook (mesuré par Meta, non audité)",
      "EMARKETER avril 2026 : 243,46 Md$ contre 239,54 Md$, 26,8 % contre 26,4 % de part (prévision de modélisation privée)",
      "IAB septembre 2026 : dépense US +12,3 % en 2026, social +16,5 %, 86 % des acheteurs changent leur mesure (prévision sectorielle)",
    ],
    targetSeconds: 120,
  },

  {
    id: "pourquoi-partir",
    category: "motivation",
    difficulty: "piege",
    priority: true,
    prompt: {
      fr: "Pourquoi quitter Indeed maintenant ?",
      en: "Why leave Indeed now?",
    },
    whatTheyTest: [
      "Si tu pars vers quelque chose ou si tu fuis quelque chose.",
      "Si tu restes loyal envers ton employeur actuel quand on te pousse à le critiquer.",
      "Si ton départ arrive après une réussite ou après un échec que tu maquilles.",
      "Si tu sais nommer précisément ce que tu n'apprends plus là où tu es.",
    ],
    traps: [
      "Un seul mot négatif sur Indeed, ton management ou ton territoire : c'est éliminatoire dans un entretien commercial.",
      "Parler de rémunération, de titre ou de séniorité.",
      "Rester vague : sans chiffre de performance, ton départ ressemble à une sortie subie.",
      "Dire que tu t'ennuies. Dis plutôt ce que tu as fini de construire, ce n'est pas la même chose.",
    ],
    followUps: [
      {
        question: "Ton manager sait-il que tu cherches ?",
        how: "Réponds simplement, sans dramatiser, et redis que tu tiens tes chiffres et tes engagements jusqu'au dernier jour. Ne transforme pas ça en confidence.",
      },
      {
        question: "Qu'est-ce que tu n'as pas réussi à obtenir chez Indeed ?",
        how: "Une seule chose, factuelle et tournée vers l'avenir : des comptes moins nombreux et plus gros, avec plus de profondeur stratégique. Aucun grief, aucun nom.",
      },
      {
        question: "Pourquoi ne pas bouger en interne ?",
        how: "Rappelle ce que tu as déjà pris en interne, neuf mois de couverture National Accounts et six mois de couverture d'un book Inside Sales, puis dis que la marche suivante que tu veux n'existe pas sur ton périmètre.",
      },
    ],
    basis: "vecu",
    answer: {
      fr: {
        situation:
          "Je suis Senior Account Executive sur les comptes décentralisés d'Indeed depuis septembre 2023, après des débuts comme Account Executive en juin 2022. Sur les douze derniers mois, mon book pèse 1,15 M€ de revenu, avec 817 réseaux parents et 4 584 comptes advertisers.",
        task: "Je voulais m'assurer de partir d'une position solide et pas d'une difficulté, et savoir précisément ce que je n'apprenais plus.",
        action: [
          "J'ai tenu ma cible trois trimestres de suite : 108 % au premier trimestre 2026, 133 % au deuxième, environ 108 % sur le troisième en cours.",
          "J'ai fait croître mon book de 38 % à périmètre constant entre 2025 et 2026, donc sans compter les comptes ajoutés en cours de route.",
          "J'ai pris deux couvertures en plus de mon poste : neuf mois sur un book National Accounts en santé et services à la personne, avec Petits-fils, Shiva et AXA, puis six mois sur le book Inside Sales d'une collègue.",
          "J'ai transformé une vingtaine de tâches récurrentes en procédures outillées que mes collègues réutilisent, donc ce que j'ai construit continue de tourner sans moi.",
          "J'ai constaté que ce qui me reste à apprendre n'est plus sur mon périmètre : la profondeur stratégique vient du nombre de comptes qui baisse et de leur taille qui monte, pas du volume.",
        ],
        result:
          "Je pars après trois trimestres au-dessus de la cible et un President's Club en 2023, avec un book en croissance de 38 % et documenté pour la personne qui le reprendra. Ce n'est pas un départ de repli, c'est un changement de terrain d'entraînement.",
        learning:
          "Le bon moment pour changer est celui où tu peux transmettre proprement, pas celui où tu n'en peux plus. J'ai attendu d'être dans le premier cas.",
      },
      en: {
        situation:
          "I have been a Senior Account Executive on Indeed's decentralised accounts since September 2023, after starting as an Account Executive in June 2022. Over the last twelve months my book represents 1.15 million euros of revenue, across 817 parent networks and 4,584 advertiser accounts.",
        task: "I wanted to be sure I was leaving from a position of strength rather than difficulty, and to name precisely what I was no longer learning.",
        action: [
          "I hit target three quarters in a row: 108 percent in the first quarter of 2026, 133 percent in the second, and around 108 percent in the third, still in progress.",
          "I grew my book by 38 percent on a like for like basis between 2025 and 2026, so excluding accounts added along the way.",
          "I took on two coverages on top of my own role: nine months on a National Accounts book in healthcare and home services, with Petits-fils, Shiva and AXA, then six months covering a colleague's Inside Sales book.",
          "I turned around twenty recurring tasks into tooled, reusable procedures that my colleagues now run, so what I built keeps working without me.",
          "I concluded that what I still have to learn is no longer available on my patch: strategic depth comes from carrying fewer and larger accounts, not from volume.",
        ],
        result:
          "I am leaving after three quarters above target and a 2023 President's Club, with a book growing 38 percent and documented for whoever picks it up. This is not a retreat, it is a change of training ground.",
        learning:
          "The right moment to move is when you can hand over cleanly, not when you have had enough. I waited for the first case.",
      },
    },
    metrics: [
      "108 % au T1 2026, 133 % au T2 2026, environ 108 % au T3 2026 en cours",
      "President's Club 2023, cible annuelle 1,5 M€ et plus",
      "Book : 817 réseaux parents, 4 584 comptes advertisers, 1,15 M€ sur 12 mois",
      "Croissance du book +38 % à périmètre constant, 2026 contre 2025",
      "Couverture NAM de 9 mois en 2023-24, couverture d'un book Inside Sales de 6 mois",
    ],
    targetSeconds: 105,
  },

  {
    id: "motivation-profonde",
    category: "motivation",
    difficulty: "classique",
    priority: true,
    prompt: {
      fr: "Qu'est-ce qui te motive vraiment dans ce métier ?",
      en: "What really motivates you in this job?",
    },
    whatTheyTest: [
      "Si ta motivation survit à un trimestre difficile, ou si elle dépend de la victoire.",
      "Si tu parles d'un moteur vérifiable plutôt que d'adjectifs sur toi-même.",
      "Si le moteur que tu décris est cohérent avec ton parcours réel.",
      "Si tu sais relier ce moteur au quotidien concret du poste visé.",
    ],
    traps: [
      "Dire que tu aimes le contact humain ou le challenge : tout le monde le dit, personne ne le prouve.",
      "Parler de la compétition et du classement : ça marche jusqu'au premier trimestre où tu es derrière.",
      "Raconter une motivation sans la rattacher à un résultat mesuré.",
      "Oublier que la question mesure ta durabilité, pas ton enthousiasme du jour.",
    ],
    followUps: [
      {
        question: "Et quand ça ne marche pas, qu'est-ce qui te fait tenir ?",
        how: "Bascule sur l'activité mesurable : tu pilotes le nombre de conversations ouvertes, pas la signature. Cite les 60 à 80 démonstrations et revues de performance par mois de tes débuts.",
      },
      {
        question: "Qu'est-ce que tu détestes dans ce métier ?",
        how: "Donne une vraie réponse, pas une fausse faiblesse : vendre sans pouvoir vérifier l'effet chez le client. Enchaîne sur ce que tu fais pour l'éviter.",
      },
      {
        question: "Tu as été fondateur, pourquoi être redevenu commercial ?",
        how: "Dis que c'est le même moteur sur un cycle plus long et un terrain plus grand, et appuie-toi sur ADMR passé d'environ 24 K€ en rythme 2022 à environ 253 K€ en rythme 2026.",
      },
    ],
    basis: "vecu",
    answer: {
      fr: {
        situation:
          "Avant Indeed, j'ai cofondé et dirigé Cosmic Junior, une EdTech de cours de code pour enfants, de janvier 2021 à 2023. J'y portais le pricing, le marketing et l'acquisition, et j'ai recruté et managé 25 professeurs.",
        task: "Je devais faire tenir ensemble une offre, des professeurs et des familles, et c'est là que j'ai identifié ce qui me tient réellement dans ce métier.",
        action: [
          "J'ai construit l'offre et le prix moi-même, puis je les ai corrigés avec les retours des premières familles plutôt qu'avec mon intuition.",
          "J'ai recruté et managé 25 professeurs, donc chaque vente que je signais se transformait en heures réellement délivrées, plus de 3 000 cours au total.",
          "J'ai amené la société de 0 à 100 000 $ d'ARR en moins de huit mois, en mesurant canal par canal ce qui produisait les inscriptions.",
          "J'ai retrouvé exactement le même moteur chez Indeed, sur des cycles plus longs : faire passer ADMR d'environ 24 K€ en rythme 2022 à environ 253 K€ en rythme 2026.",
          "À mes débuts chez Indeed, j'ai tenu 60 à 80 démonstrations et revues de performance par mois, parce que c'est le seul moyen de savoir ce qui marche vraiment plutôt que ce qu'on croit.",
        ],
        result:
          "Ce qui me motive est le moment où une décision abstraite, un prix ou une allocation de budget, devient un résultat vérifiable pour quelqu'un : 3 000 cours délivrés d'un côté, un réseau multiplié par dix en quatre ans de l'autre. C'est une motivation qui dure parce qu'elle se mesure au lieu de se raconter.",
        learning:
          "Je me méfie des motivations qu'on ne peut pas chiffrer, elles s'épuisent au premier trimestre difficile. La mienne me donne quelque chose à regarder même les semaines sans signature.",
      },
      en: {
        situation:
          "Before Indeed I co-founded and ran Cosmic Junior, an EdTech company teaching coding to children, from January 2021 to 2023. I owned pricing, marketing and acquisition, and I recruited and managed 25 teachers.",
        task: "I had to hold an offer, a teaching team and families together, and that is where I identified what actually keeps me in this job.",
        action: [
          "I built the offer and the pricing myself, then corrected both with feedback from the first families rather than with my own intuition.",
          "I recruited and managed 25 teachers, so every sale I signed turned into hours actually delivered, more than 3,000 courses in total.",
          "I took the company from zero to $100,000 in ARR in under eight months, measuring channel by channel what actually produced sign-ups.",
          "I found exactly the same driver at Indeed, on longer cycles: taking ADMR from roughly 24,000 euros on a 2022 run rate to roughly 253,000 euros on a 2026 run rate.",
          "In my early months at Indeed I ran 60 to 80 demos and performance reviews a month, because that is the only way to learn what really works rather than what people assume works.",
        ],
        result:
          "What motivates me is the moment an abstract decision, a price or a budget allocation, becomes a verifiable outcome for someone: 3,000 courses delivered on one side, a network multiplied by ten in four years on the other. It lasts because it is measured rather than narrated.",
        learning:
          "I am wary of motivations you cannot put a number on, they run out in the first hard quarter. Mine gives me something to look at even in weeks with no signature.",
      },
    },
    metrics: [
      "Cosmic Junior : 0 à 100 K$ d'ARR en moins de 8 mois, 25 professeurs, plus de 3 000 cours délivrés",
      "ADMR : environ 24 K€ en rythme 2022 à environ 253 K€ en rythme 2026",
      "60 à 80 démonstrations et revues de performance par mois à ses débuts chez Indeed",
    ],
    targetSeconds: 105,
  },

  {
    id: "pourquoi-toi",
    category: "motivation",
    difficulty: "classique",
    priority: true,
    prompt: {
      fr: "Pourquoi devrions-nous te choisir plutôt qu'un autre candidat ?",
      en: "Why should we choose you over another candidate?",
    },
    whatTheyTest: [
      "Si tu sais nommer deux ou trois choses que la plupart des candidats n'ont pas.",
      "Si tu argumentes par des résultats datés plutôt que par des qualités.",
      "Si ta différence est utile au poste précis, pas juste remarquable.",
      "Si tu restes factuel sous une question qui pousse à l'autopromotion.",
    ],
    traps: [
      "Lister des qualités : rigoureux, persévérant, orienté résultats. Aucune n'est vérifiable.",
      "Te comparer aux autres candidats que tu ne connais pas.",
      "Citer un seul gros chiffre sans expliquer ce que tu as fait pour l'obtenir.",
      "Oublier la deuxième compétence rare, l'IA, qui est ce qui te distingue vraiment aujourd'hui.",
    ],
    followUps: [
      {
        question: "Qu'est-ce qui ne va pas marcher chez nous dans ton profil ?",
        how: "Nomme une vraie limite : tu n'as pas vendu de média de marque à une agence média. Dis comment tu la combles, et par quoi tu compenses.",
      },
      {
        question: "Ce deal à 438 204 €, quelle était ta part réelle ?",
        how: "Sois précis sur ton rôle : entrée par les agences, travail du centre en parallèle, closing le 18 mai 2026. Nomme les autres contributeurs, ça te crédibilise.",
      },
      {
        question: "Tout le monde dit utiliser l'IA aujourd'hui.",
        how: "Distingue l'usage de la construction : toi tu as écrit une vingtaine de procédures réutilisables et des garde-fous qui bloquent l'écriture automatique. Propose de le montrer.",
      },
    ],
    basis: "vecu",
    answer: {
      fr: {
        situation:
          "La plupart des candidats à ce type de poste vendent à un décideur unique, dans une organisation centralisée. Moi, je vends depuis quatre ans des réseaux décentralisés, où l'accord se négocie au centre et où l'adoption se gagne ensuite établissement par établissement.",
        task: "Je devais démontrer que ce modèle produit nettement plus de revenu qu'une signature centrale laissée sans suite.",
        action: [
          "Sur Système U, j'ai travaillé le centre et les agences en parallèle plutôt que d'attendre un mandat descendant.",
          "J'ai closé le 18 mai 2026 le plus gros deal de ma carrière, 438 204 €, sur ce réseau via les agences.",
          "J'ai fait passer Système U de 101 986 € de bookings en 2023 à 547 277 € en 2026.",
          "J'ai animé plus de 20 webinars touchant plus de 600 franchisés, parce que l'adoption locale ne se décrète pas depuis un siège.",
          "En parallèle, j'ai outillé mon équipe sur l'IA : une vingtaine de procédures réutilisables partagées, et des garde-fous techniques qui bloquent toute écriture automatique sur de la donnée client.",
        ],
        result:
          "Deux compétences rares dans le même profil : la vente multi-niveaux qui transforme un accord-cadre en revenu réel, et le pilotage de l'adoption de l'IA dans une équipe commerciale. Sur Système U seul, cela représente un facteur cinq en trois ans, de 101 986 € à 547 277 €.",
        learning:
          "Un accord signé au centre ne vaut rien tant que les établissements ne l'ont pas adopté. C'est précisément l'endroit où je suis utile.",
      },
      en: {
        situation:
          "Most candidates for this kind of role sell to a single decision maker inside a centralised organisation. I have spent four years selling to decentralised networks, where the agreement is negotiated at the centre and adoption is then won site by site.",
        task: "I had to prove that this model produces materially more revenue than a central signature left to itself.",
        action: [
          "On Système U, I worked the centre and the agencies in parallel rather than waiting for a top-down mandate.",
          "On 18 May 2026 I closed the largest deal of my career, 438,204 euros, on that network through the agencies.",
          "I took Système U from 101,986 euros of bookings in 2023 to 547,277 euros in 2026.",
          "I ran more than 20 webinars reaching over 600 franchisees, because local adoption cannot be mandated from head office.",
          "In parallel I equipped my team on AI: around twenty reusable, shared procedures, plus technical guardrails that block any automated write on real client data.",
        ],
        result:
          "Two rare skills in one profile: multi-level selling that turns a framework agreement into actual revenue, and driving AI adoption inside a sales team. On Système U alone that is a factor of five in three years, from 101,986 to 547,277 euros.",
        learning:
          "An agreement signed at the centre is worth nothing until the sites adopt it. That is exactly where I am useful.",
      },
    },
    metrics: [
      "Plus gros deal gagné : 438 204 €, closé le 18 mai 2026, réseau Système U via agences",
      "Système U : 101 986 € de bookings en 2023, 547 277 € en 2026",
      "Plus de 20 webinars, plus de 600 franchisés touchés",
      "Une vingtaine de procédures IA réutilisables partagées avec des collègues",
    ],
    targetSeconds: 100,
  },

  {
    id: "motivation-argent",
    category: "motivation",
    difficulty: "moins-classique",
    priority: true,
    prompt: {
      fr: "Qu'est-ce qui te motive au-delà de la rémunération ?",
      en: "What motivates you beyond compensation?",
    },
    whatTheyTest: [
      "Si tu continues à produire de la valeur quand ce n'est pas commissionné.",
      "Si tu penses équipe ou seulement quota individuel.",
      "Si tu as des preuves de ce désintéressement, ou seulement une déclaration.",
      "Si tu sais parler d'argent sans gêne, ce qui est aussi un signal commercial.",
    ],
    traps: [
      "Nier l'importance de la rémunération : personne ne te croit, et c'est un mauvais signal pour un commercial.",
      "Répondre par un principe abstrait comme l'impact ou le sens, sans une seule action derrière.",
      "Citer uniquement des actions qui servaient ton propre quota : la question porte sur le reste.",
      "Durer trop longtemps : cette question se traite en 90 secondes, pas en trois minutes.",
    ],
    followUps: [
      {
        question: "Donc la rémunération ne compte pas pour toi ?",
        how: "Assume-la : elle compte, c'est la sanction du résultat. Mais dis que ce n'est pas elle qui décide de ce que tu fais le vendredi après-midi.",
      },
      {
        question: "Ces procédures partagées, ça t'a coûté combien de temps ?",
        how: "Réponds en logique d'investissement : construit une fois, réutilisé par plusieurs. Cite les 165 e-mails ABM produits en quelques jours au lieu de plusieurs semaines.",
      },
      {
        question: "Pourquoi avoir accepté deux couvertures de book ?",
        how: "Parce que le book d'un collègue absent devient un problème pour les clients. Reste factuel : neuf mois côté National Accounts, six mois côté Inside Sales.",
      },
    ],
    basis: "vecu",
    answer: {
      fr: {
        situation:
          "Chez Cosmic Junior, j'ai travaillé deux ans sur une structure que je construisais moi-même, donc la rémunération n'était pas le moteur du quotidien. Chez Indeed le variable existe, et pourtant le travail dont je suis le plus fier n'est pas commissionné.",
        task: "Je voulais vérifier ce que je continue à faire quand personne ne le compte dans mon quota.",
        action: [
          "J'ai animé plus de 20 webinars pour plus de 600 franchisés, du travail collectif qui ne remonte pas directement sur mes comptes.",
          "J'ai pris neuf mois de couverture d'un book National Accounts en santé et services à la personne, puis six mois de couverture du book Inside Sales d'une collègue.",
          "J'ai transformé une vingtaine de tâches récurrentes en procédures outillées et je les ai partagées avec mes collègues, au lieu de les garder pour mon seul rendement.",
          "J'ai écrit des garde-fous techniques qui empêchent un agent d'écrire dans Salesforce, de lancer une campagne ou de modifier un budget sans validation humaine, pour que l'équipe puisse utiliser ces outils sans risque.",
          "J'ai audité mon propre poste de travail et publié le résultat : 549 outils connectés pour 165 réellement utilisés, et des règles permanentes ramenées de 4 163 à 2 340 tokens sans rien supprimer.",
        ],
        result:
          "Aucune de ces cinq actions n'est payée au variable, et ce sont exactement celles que je citerais si on me demandait ce que j'ai laissé derrière moi. Ce qui me motive est de construire une fois ce que plusieurs personnes réutilisent ensuite.",
        learning:
          "La rémunération sanctionne le résultat, elle ne le produit pas. Ce qui le produit, chez moi, c'est de rendre le travail réutilisable par quelqu'un d'autre.",
      },
      en: {
        situation:
          "At Cosmic Junior I spent two years on a company I was building myself, so compensation was not the day-to-day driver. At Indeed there is a variable component, and yet the work I am proudest of is not commissioned.",
        task: "I wanted to check what I keep doing when nobody counts it towards my quota.",
        action: [
          "I ran more than 20 webinars for over 600 franchisees, collective work that does not land directly on my own accounts.",
          "I covered a National Accounts book in healthcare and home services for nine months, then a colleague's Inside Sales book for six months.",
          "I turned around twenty recurring tasks into tooled procedures and shared them with colleagues, instead of keeping them for my own output.",
          "I wrote technical guardrails that stop an agent writing to Salesforce, launching a campaign or changing a budget without human validation, so the team can use these tools safely.",
          "I audited my own workstation and published the result: 549 connected tools for 165 actually used, and standing rules cut from 4,163 to 2,340 tokens without deleting anything.",
        ],
        result:
          "None of those five actions is paid on variable, and they are exactly the ones I would name if asked what I left behind. What motivates me is building something once that several people then reuse.",
        learning:
          "Compensation rewards the result, it does not produce it. What produces it, for me, is making the work reusable by someone else.",
      },
    },
    metrics: [
      "Plus de 20 webinars, plus de 600 franchisés touchés",
      "Couverture NAM de 9 mois, couverture d'un book Inside Sales de 6 mois",
      "Une vingtaine de procédures IA réutilisables partagées",
      "Audit du poste de travail : 549 outils connectés pour 165 utilisés, règles de 4 163 à 2 340 tokens",
    ],
    targetSeconds: 95,
  },

  {
    id: "ambition-5-ans",
    category: "motivation",
    difficulty: "classique",
    prompt: {
      fr: "Où te vois-tu dans cinq ans ?",
      en: "Where do you see yourself in five years?",
    },
    whatTheyTest: [
      "Si le poste proposé est une étape cohérente de ta trajectoire ou un simple palier.",
      "Si tu raisonnes en compétences à acquérir ou en titres à décrocher.",
      "Si tu risques de partir dans dix-huit mois.",
      "Si tu sais dire une ambition sans promettre ce que tu ne tiendras pas.",
    ],
    traps: [
      "Annoncer un titre précis dans une organisation que tu ne connais pas encore.",
      "Dire que tu veux manager alors que rien dans ton discours ne le prépare.",
      "Répondre que tu ne sais pas : ça se lit comme une absence de projet.",
      "Laisser entendre que ce poste est une porte d'entrée vers un autre métier.",
    ],
    followUps: [
      {
        question: "Tu veux manager ou rester contributeur individuel ?",
        how: "Ne tranche pas artificiellement. Dis que tu as déjà managé 25 professeurs chez Cosmic Junior, que ça t'a plu, et que tu veux d'abord maîtriser le métier avant de choisir.",
      },
      {
        question: "Qu'est-ce qui te ferait partir avant cinq ans ?",
        how: "Une seule réponse honnête : ne plus rien apprendre. Puis demande comment l'équipe fait progresser ses commerciaux sur deux ou trois ans.",
      },
      {
        question: "Tu as été fondateur, tu ne vas pas repartir entreprendre ?",
        how: "Réponds sans esquive : Cosmic Junior était de janvier 2021 à 2023, tu es depuis chez Indeed, et ce que tu cherches maintenant est la profondeur sur un périmètre, pas le zéro à un.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Nathan n'a pas formulé de plan à cinq ans dans sa banque de faits : la projection ci-dessous est inventée, seule la trajectoire passée est réelle (AE en juin 2022, Senior AE en septembre 2023, couverture NAM de neuf mois, 25 professeurs managés chez Cosmic Junior). Remplace les quatre jalons par ceux que tu veux vraiment défendre, et garde la logique : parler de ce que tu veux savoir faire, pas du titre que tu veux porter.",
    answer: {
      fr: {
        situation:
          "En quinze mois chez Indeed, je suis passé d'Account Executive à Senior Account Executive, puis j'ai couvert pendant neuf mois un book National Accounts en remplacement de la manager sortante. Cette progression s'est faite en élargissant ce que je sais faire, pas en attendant un titre.",
        task: "Je veux continuer sur la même logique : choisir chaque marche suivante par la compétence qu'elle m'oblige à construire.",
        action: [
          "Sur les douze à dix-huit premiers mois, je veux savoir tenir un portefeuille de comptes stratégiques au niveau de la mesure et de l'allocation, et pas seulement de la relation.",
          "Ensuite, je veux être la personne vers qui l'équipe se tourne sur un sujet précis, probablement la mesure dans un marché où l'IAB chiffre à 86 % les acheteurs qui changent leur façon de mesurer à cause de l'IA.",
          "À trois ans, je veux porter les comptes les plus complexes du périmètre, ceux qui combinent plusieurs marques, plusieurs agences et plusieurs marchés.",
          "À cinq ans, je veux avoir le choix entre approfondir comme contributeur individuel senior sur les plus gros comptes et encadrer une petite équipe, ce que j'ai déjà fait sur un autre métier avec 25 professeurs chez Cosmic Junior.",
          "Dans les deux cas, je veux continuer à outiller l'équipe, comme je l'ai fait en partageant une vingtaine de procédures avec mes collègues.",
        ],
        result:
          "Ma trajectoire donne le rythme : une prise de responsabilité supplémentaire tous les douze à dix-huit mois, sans changer d'entreprise à chaque fois. Ce que je cherche à cinq ans est la profondeur sur un périmètre, pas une succession de lignes sur un CV.",
        learning:
          "Je réponds par compétences plutôt que par postes, parce qu'un organigramme à cinq ans est invérifiable alors qu'une compétence se vérifie.",
      },
      en: {
        situation:
          "In fifteen months at Indeed I moved from Account Executive to Senior Account Executive, then covered a National Accounts book for nine months, replacing the outgoing manager. That progression came from widening what I can do, not from waiting for a title.",
        task: "I want to keep the same logic: choose each next step by the skill it forces me to build.",
        action: [
          "Over the first twelve to eighteen months, I want to be able to hold a portfolio of strategic accounts at the level of measurement and allocation, not just relationship.",
          "After that, I want to be the person the team turns to on one specific topic, most likely measurement, in a market where the IAB puts at 86 percent the share of buyers changing how they measure because of AI.",
          "At three years, I want to carry the most complex accounts on the patch, the ones combining several brands, several agencies and several markets.",
          "At five years, I want the choice between going deeper as a senior individual contributor on the largest accounts and leading a small team, which I have already done in another field with 25 teachers at Cosmic Junior.",
          "In either case I want to keep equipping the team, as I did by sharing around twenty procedures with my colleagues.",
        ],
        result:
          "My track record sets the pace: one additional level of responsibility every twelve to eighteen months, without changing company each time. What I want at five years is depth on a patch, not a sequence of lines on a CV.",
        learning:
          "I answer in skills rather than job titles, because an org chart five years out cannot be verified whereas a skill can.",
      },
    },
    metrics: [
      "AE DCA en juin 2022, Senior AE en septembre 2023, soit 15 mois",
      "Couverture NAM de 9 mois en 2023-24 en remplacement de la manager sortante",
      "25 professeurs recrutés et managés chez Cosmic Junior",
      "IAB septembre 2026 : 86 % des acheteurs changent leur façon de mesurer (prévision sectorielle)",
    ],
    targetSeconds: 95,
  },

  {
    id: "resilience",
    category: "motivation",
    difficulty: "moins-classique",
    prompt: {
      fr: "Comment gères-tu le rejet et les périodes difficiles ?",
      en: "How do you handle rejection and difficult periods?",
    },
    whatTheyTest: [
      "Si tu as un mécanisme concret, ou seulement de la bonne volonté.",
      "Si tu sais séparer ce que tu contrôles de ce que tu subis.",
      "Si tu reconnais une période difficile sans la dramatiser ni la nier.",
      "Si ton système tient quand le cycle de vente est long.",
    ],
    traps: [
      "Dire que le rejet ne t'atteint pas : c'est soit faux, soit inquiétant.",
      "Raconter une difficulté déjà résolue en une semaine, ça ne prouve rien.",
      "Blâmer le marché, le produit ou le prix.",
      "Oublier le mécanisme : sans indicateur d'activité, ta réponse reste une déclaration d'intention.",
    ],
    followUps: [
      {
        question: "Quelle a été ta pire semaine ?",
        how: "Donne une vraie semaine, avec ce que tu as fait le lundi suivant. L'intervieweur cherche le redémarrage, pas le drame.",
      },
      {
        question: "Comment sais-tu quand arrêter d'investir sur un compte ?",
        how: "Donne un critère explicite : absence de signal côté client sur une fenêtre définie. Et rappelle que sur Système U le signal existait, il passait par les agences.",
      },
      {
        question: "Qui t'aide dans ces moments-là ?",
        how: "Cite l'équipe et le manager sans te dévaloriser. Montre que tu demandes de l'aide tôt, c'est un signal de maturité commerciale.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Les chiffres Système U, ADMR et le volume de démonstrations sont réels. La description d'une longue période creuse sur Système U et le détail du changement d'entrée par les agences sont reconstitués : reprends tes vraies dates de relance et remplace par le creux que tu as réellement traversé.",
    answer: {
      fr: {
        situation:
          "Sur Système U, près de trois ans séparent les 101 986 € de bookings de 2023 du deal de 438 204 € closé le 18 mai 2026. Sur cette période, la grande majorité de mes sollicitations n'a pas abouti.",
        task: "Je devais continuer à investir sur un compte qui ne rapportait pas encore, sans que ça pèse sur le reste de mon book.",
        action: [
          "J'ai séparé ce que je contrôle de ce que je ne contrôle pas : je ne contrôle pas le calendrier d'un réseau, je contrôle le nombre de conversations que j'ouvre.",
          "J'ai tenu un volume d'activité mesurable élevé, jusqu'à 60 à 80 démonstrations et revues de performance par mois à mes débuts, pour que mon résultat ne dépende jamais d'un seul compte.",
          "J'ai traité chaque refus comme une information sur le moment ou sur l'interlocuteur, pas sur la valeur de l'offre, et j'ai fini par changer d'entrée en passant par les agences.",
          "J'ai gardé des victoires intermédiaires visibles, notamment ADMR passé d'environ 24 K€ en rythme 2022 à environ 253 K€ en rythme 2026, pour tenir pendant le creux.",
          "J'ai accepté deux couvertures de book en plus de mon poste, ce qui m'a obligé à une discipline de priorisation quand tout ne pouvait pas avancer en même temps.",
        ],
        result:
          "Système U est passé de 101 986 € en 2023 à 547 277 € en 2026, et le deal de 438 204 € est arrivé la troisième année. Sur la même dynamique, mon book a progressé de 38 % à périmètre constant.",
        learning:
          "Le rejet cesse de m'atteindre quand mon indicateur quotidien est l'activité et pas la signature. La signature est une conséquence, et elle arrive toujours en retard.",
      },
      en: {
        situation:
          "On Système U, nearly three years separate the 101,986 euros of bookings in 2023 from the 438,204 euro deal closed on 18 May 2026. Across that period the large majority of my approaches went nowhere.",
        task: "I had to keep investing in an account that was not yet paying off, without letting it weigh on the rest of my book.",
        action: [
          "I separated what I control from what I do not: I do not control a network's calendar, I control how many conversations I open.",
          "I kept a high measurable activity level, up to 60 to 80 demos and performance reviews a month in my early period, so my result never depended on one account.",
          "I treated each refusal as information about timing or about the person, not about the value of the offer, and eventually changed my route in by going through the agencies.",
          "I kept intermediate wins visible, in particular ADMR moving from roughly 24,000 euros on a 2022 run rate to roughly 253,000 euros on a 2026 run rate, to get through the flat stretch.",
          "I took on two book coverages on top of my own role, which forced a prioritisation discipline when not everything could move at once.",
        ],
        result:
          "Système U went from 101,986 euros in 2023 to 547,277 euros in 2026, and the 438,204 euro deal landed in the third year. On the same dynamic, my book grew 38 percent like for like.",
        learning:
          "Rejection stops reaching me once my daily indicator is activity rather than signature. The signature is a consequence, and it always arrives late.",
      },
    },
    metrics: [
      "Système U : 101 986 € en 2023, 547 277 € en 2026, deal de 438 204 € le 18 mai 2026",
      "ADMR : environ 24 K€ en rythme 2022 à environ 253 K€ en rythme 2026",
      "60 à 80 démonstrations et revues de performance par mois à ses débuts",
      "Croissance du book +38 % à périmètre constant, 2026 contre 2025",
    ],
    targetSeconds: 105,
  },

  {
    id: "connaissance-meta",
    category: "motivation",
    difficulty: "piege",
    prompt: {
      fr: "Que sais-tu de notre activité publicitaire ?",
      en: "What do you know about our advertising business?",
    },
    whatTheyTest: [
      "Si tu distingues un résultat publié d'une prévision, ce qui est la base de la crédibilité devant un annonceur.",
      "Si tu comprends d'où vient la croissance, volume d'impressions ou prix.",
      "Si tu connais les produits, pas seulement les revenus.",
      "Si tu sais tirer une conséquence commerciale de ce que tu cites.",
    ],
    traps: [
      "Réciter des chiffres sans dire lesquels sont publiés et lesquels sont modélisés.",
      "Donner la prévision EMARKETER comme la preuve que Meta a dépassé Google : c'est une prévision d'avril 2026, pas un résultat.",
      "Oublier de dire que les chiffres Andromeda et GEM sont mesurés par Meta et non audités.",
      "Débiter deux minutes de données sans jamais conclure sur ce que ça change pour un annonceur.",
    ],
    followUps: [
      {
        question: "D'où vient la croissance selon toi, volume ou prix ?",
        how: "Réponds avec les deux chiffres du T2 2026 : +14 % d'impressions et +12 % de prix moyen par annonce, donc un partage à peu près équilibré. C'est une histoire commerciale différente d'une croissance de pur volume.",
      },
      {
        question: "Que penses-tu d'Advantage+ pour un grand annonceur ?",
        how: "Pars du fait déclaré, plus de 75 Md$ de rythme annuel de bout en bout, puis dis ce qui reste à gagner en vente : l'arbitrage entre automatisation et contrôle de la marque.",
      },
      {
        question: "Quelle est la principale menace sur ce business ?",
        how: "Une réponse mesurée : le changement des méthodes de mesure, que l'IAB chiffre à 86 % des acheteurs. Tu cadres ça comme un enjeu de vente, pas comme une critique.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Tous les chiffres cités sont dans ta banque de faits vérifiée, avec leur statut. En revanche la mise en scène, avoir trié publié contre prévu avant de candidater, est reconstituée : raconte-le à ta manière, et revérifie le dernier trimestre publié la veille de l'entretien.",
    answer: {
      fr: {
        situation:
          "Je vends de la publicité de recrutement depuis quatre ans, donc j'observe le marché publicitaire par obligation professionnelle. Avant de candidater, j'ai voulu séparer ce qui est publié de ce qui est prévu, parce que les deux ne s'utilisent pas de la même façon devant un annonceur.",
        task: "Je devais pouvoir décrire votre activité publicitaire uniquement avec des chiffres que je peux défendre s'ils sont contestés.",
        action: [
          "Sur les résultats publiés du deuxième trimestre 2026, je retiens 59,363 Md$ de revenu publicitaire, +27 % sur un an, +14 % d'impressions et +12 % de prix moyen par annonce, avec 3,60 milliards de personnes actives par jour en juin 2026.",
          "Je lis cette croissance comme un partage à peu près équilibré entre inventaire et valeur de l'inventaire, ce qui n'est pas la même histoire commerciale qu'une croissance portée par le seul volume.",
          "Côté produit, Advantage+ de bout en bout dépasse 75 Md$ de rythme annuel et plus de 9 millions de petites entreprises utilisent au moins un outil créatif génératif, chiffres déclarés par Meta.",
          "Côté mécanique, Andromeda récupère les annonces éligibles et GEM les classe et les séquence, avec +8,3 % de clics et +15,7 % de conversions sur Facebook, chiffres mesurés par Meta et non audités.",
          "Je sépare nettement la prévision : EMARKETER, en avril 2026, place Meta devant Google en revenu publicitaire digital net mondial, 243,46 Md$ contre 239,54, soit 26,8 % de part contre 26,4, Amazon troisième à 9,0 % et 62,3 % pour les trois réunis. C'est une modélisation privée, pas un résultat.",
        ],
        result:
          "La conséquence commerciale que j'en tire est que la conversation avec l'annonceur se déplace de l'achat d'inventaire vers l'arbitrage d'allocation et la preuve de mesure, d'autant que l'IAB chiffrait en septembre 2026 à 86 % la part des acheteurs qui ont changé ou vont changer leur mesure à cause de l'IA conversationnelle et des agents.",
        learning:
          "Je cite toujours un chiffre avec son statut. Annoncer une prévision comme un résultat est la façon la plus rapide de perdre la confiance d'un annonceur, et je ne veux pas commencer comme ça.",
      },
      en: {
        situation:
          "I have been selling recruitment advertising for four years, so I follow the ad market as part of the job. Before applying, I wanted to separate what is published from what is forecast, because the two cannot be used the same way in front of an advertiser.",
        task: "I needed to be able to describe your advertising business using only numbers I can defend if they are challenged.",
        action: [
          "From the published second quarter 2026 results, I take $59.363 billion of advertising revenue, up 27 percent year over year, impressions up 14 percent and average price per ad up 12 percent, with 3.60 billion daily active people in June 2026.",
          "I read that growth as a roughly balanced split between inventory and the value of that inventory, which is a different commercial story from growth driven by volume alone.",
          "On product, end to end Advantage+ is past a $75 billion annual run rate and more than 9 million small businesses use at least one generative creative tool, both stated by Meta.",
          "On the mechanics, Andromeda retrieves eligible ads and GEM ranks and sequences them, delivering 8.3 percent more clicks and 15.7 percent more conversions on Facebook, measured by Meta and not audited.",
          "I keep the forecast clearly separate: in April 2026 EMARKETER projects Meta ahead of Google in worldwide net digital ad revenue, $243.46 billion against $239.54 billion, a 26.8 percent share against 26.4 percent, with Amazon third at 9.0 percent and 62.3 percent for the three combined. That is private modelling, not a result.",
        ],
        result:
          "The commercial consequence I draw is that the advertiser conversation moves from buying inventory to arbitrating allocation and proving measurement, all the more so since the IAB put at 86 percent in September 2026 the share of buyers who have changed or will change how they measure because of conversational AI and agents.",
        learning:
          "I always quote a number with its status. Presenting a forecast as a result is the fastest way to lose an advertiser's trust, and I do not want to start that way.",
      },
    },
    metrics: [
      "T2 2026 publié : 59,363 Md$, +27 % sur un an, impressions +14 %, prix moyen par annonce +12 %",
      "3,60 milliards de personnes actives par jour en juin 2026 (résultats publiés)",
      "Advantage+ de bout en bout : plus de 75 Md$ de rythme annuel, plus de 9 M de petites entreprises (déclaré par Meta)",
      "Andromeda + GEM : +8,3 % de clics, +15,7 % de conversions sur Facebook (mesuré par Meta, non audité)",
      "EMARKETER avril 2026 : 243,46 contre 239,54 Md$, 26,8 % contre 26,4 %, Amazon 9,0 %, trio à 62,3 % (prévision)",
      "IAB septembre 2026 : US +12,3 %, social +16,5 %, CTV +15,6 %, commerce media +13,6 %, search +8,1 %, TV linéaire -1,5 %",
    ],
    targetSeconds: 120,
  },
];
