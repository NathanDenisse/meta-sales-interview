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
      "Si ta motivation porte sur ce que tu vas construire, et pas sur la notoriété de la marque.",
      "Si tu tires une conséquence sur le métier de commercial, au lieu d'empiler des statistiques.",
      "Si tu sais citer un chiffre en annonçant son statut, résultat publié ou déclaration de l'entreprise.",
      "Si tu vois où ton expérience de vente décentralisée s'inscrit dans un portefeuille Meta.",
    ],
    traps: [
      "Parler de prestige, de séniorité ou de rémunération : tu deviens immédiatement interchangeable.",
      "Empiler les chiffres : trois raisons nommées, chacune avec sa conséquence, valent mieux que huit statistiques.",
      "Réciter une motivation générique, du type envie de rejoindre une équipe ambitieuse : ça s'entend tout de suite.",
      "Critiquer Indeed pour justifier ton intérêt : la question porte sur Meta, pas sur ton employeur.",
    ],
    followUps: [
      {
        question: "Pourquoi maintenant plutôt que dans deux ans ?",
        how: "Rattache-le à ta courbe d'apprentissage : trois trimestres au-dessus de la cible et un portefeuille transmissible, donc le changement coûte le moins cher maintenant.",
      },
      {
        question: "Qu'est-ce qui pourrait te décevoir chez Meta ?",
        how: "Réponds franchement : un rôle où tu ne verrais que le reporting et jamais la décision d'allocation du client. Puis retourne la question sur la façon dont le poste est construit.",
      },
      {
        question: "Donne-moi un exemple de cette conversation d'allocation.",
        how: "C'est la relance attendue : bascule sur le STAR, un client à qui tu as fait concentrer son budget sur moins de périmètres au lieu de l'étaler.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Canevas assumé. La veille, revérifie le dernier trimestre publié : si un T3 est sorti, remplace le chiffre du deuxième trimestre. Décide aussi laquelle des trois raisons tu développes si on ne t'en laisse qu'une.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Je vends de la publicité de recrutement chez Indeed depuis juin 2022, sur des réseaux décentralisés français. Depuis deux ans, mes interlocuteurs ne me demandent plus ce que coûte une annonce, ils me demandent où mettre leur budget.",
        task: "Je voulais un poste où cette conversation d'allocation est le cœur du métier et pas une extension du reporting.",
        action: [
          "J'ai vérifié la trajectoire sur les résultats publiés et non sur les commentaires : +27 % de revenu publicitaire au deuxième trimestre 2026, avec le prix moyen par annonce en hausse de 12 % et les impressions de 14 %.",
          "J'ai regardé ce que l'automatisation laisse au commercial : Meta déclare plus de 75 Md$ de rythme annuel sur Advantage+, donc l'avantage ne se joue plus sur le réglage de la campagne.",
          "J'ai comparé avec ce que je fais déjà : sur un réseau décentralisé, je négocie au centre puis je vais chercher l'adoption établissement par établissement.",
        ],
        result:
          "Ma conclusion n'est pas que Meta est gros, c'est que la valeur du commercial s'y déplace vers le conseil d'allocation et la preuve de mesure. C'est la compétence que je veux construire, et c'est celle que j'exerce déjà à plus petite échelle.",
        learning:
          "Je cherche moins de comptes et plus de profondeur. Je préfère le dire comme ça plutôt que de parler de la marque.",
      },
      en: {
        situation:
          "I have been selling recruitment advertising at Indeed since June 2022, to decentralised French networks. For two years now my contacts have stopped asking what an ad costs and started asking where to put their budget.",
        task: "I wanted a role where that allocation conversation is the core of the job, not an extension of reporting.",
        action: [
          "I checked the trajectory against published results rather than commentary: advertising revenue up 27 percent in the second quarter of 2026, with average price per ad up 12 percent and impressions up 14 percent.",
          "I looked at what automation leaves to the salesperson: Meta states an annual run rate above 75 billion dollars on Advantage+, so the edge is no longer in setting up the campaign.",
          "I compared that with what I already do: on a decentralised network, I negotiate at the centre and then go and win adoption site by site.",
        ],
        result:
          "My conclusion is not that Meta is large, it is that the value of the salesperson shifts towards allocation advice and proof of measurement. That is the skill I want to build, and it is the one I already practise on a smaller scale.",
        learning:
          "I am looking for fewer accounts and more depth. I would rather say it that way than talk about the brand.",
      },
    },
    script: {
      fr: {
        hook: "Je candidate chez Meta parce que c'est là que le métier de commercial publicitaire change le plus vite, et je préfère apprendre un métier là où il se réinvente.",
        body: [
          "La première raison est la nature de la croissance. Au deuxième trimestre 2026, Meta a publié 27 % de croissance du revenu publicitaire, portée autant par le prix moyen par annonce que par le volume d'impressions. Un annonceur qui paie l'impression plus cher n'achète plus de l'inventaire, il attend qu'on défende son allocation.",
          "La deuxième raison est l'automatisation. Meta déclare plus de 75 milliards de dollars de rythme annuel sur Advantage+. Quand la machine prend le ciblage, le commercial perd l'avantage sur le réglage et le garde sur le cadrage et la mesure. Il récupère surtout l'arbitrage que mes clients me posent déjà : jusqu'où laisser la main à la machine quand la marque veut choisir où elle apparaît.",
          "La troisième raison est ce que j'apporte. Je vends des réseaux décentralisés, où l'accord se négocie au centre et où l'adoption se gagne établissement par établissement. C'est la structure d'un grand annonceur multi-marques, et je veux la retrouver sur moins de comptes et plus en profondeur.",
        ],
        closing: "Voilà mes trois raisons, et je peux creuser celle que vous voulez.",
        keyBeats: [
          "La croissance vient du prix",
          "L'automatisation déplace le métier",
          "Ce que j'apporte, le multi-sites",
          "Rendre la main",
        ],
      },
      en: {
        hook: "I am applying to Meta because this is where the advertising sales job is changing fastest, and I would rather learn a job where it is being reinvented.",
        body: [
          "The first reason is the nature of the growth. In the second quarter of 2026 Meta reported advertising revenue up 27 percent, driven as much by average price per ad as by impression volume. An advertiser paying more for the same impression is no longer buying inventory, they expect someone to defend their allocation.",
          "The second reason is automation. Meta states an annual run rate above 75 billion dollars on Advantage+. Once the machine handles targeting, the salesperson loses the edge on settings and keeps it on framing and measurement. Above all they inherit the trade-off my clients already put to me: how far to hand over to the machine when the brand wants to choose where it appears.",
          "The third reason is what I bring. I sell decentralised networks, where the agreement is negotiated at the centre and adoption is won site by site. That is the structure of a large multi-brand advertiser, and I want to do it on fewer accounts and in more depth.",
        ],
        closing: "Those are my three reasons, and I am happy to go deeper on whichever one you want.",
        keyBeats: [
          "Growth comes from price",
          "Automation moves the job",
          "What I bring, multi-site",
          "Hand back",
        ],
      },
    },
    metrics: [
      "Revenu publicitaire Meta T2 2026 : +27 % sur un an, impressions +14 %, prix moyen par annonce +12 % (résultats publiés)",
      "Advantage+ de bout en bout : plus de 75 Md$ de rythme annuel (déclaré par Meta)",
    ],
    targetSeconds: 82,
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
      "Un seul mot négatif sur Indeed, ton management ou ton territoire : l'intervieweur entend comment tu parleras de Meta dans dix-huit mois.",
      "Rester vague, du type je sentais que c'était le moment : sans déclencheur daté, le départ se lit comme subi.",
      "Dire que tu t'ennuies. Dis plutôt ce que tu as fini de construire, ce n'est pas la même chose.",
      "La formule surpréparée, du type infiniment reconnaissant et prêt pour la prochaine aventure : elle se repère immédiatement.",
    ],
    followUps: [
      {
        question: "Qu'est-ce que tu n'as pas réussi à obtenir chez Indeed ?",
        how: "Une seule chose, factuelle et tournée vers l'avenir : des comptes moins nombreux et plus gros, avec plus de profondeur stratégique. Aucun grief, aucun nom.",
      },
      {
        question: "Pourquoi ne pas bouger en interne ?",
        how: "Rappelle ce que tu as déjà pris en interne, neuf mois de couverture National Accounts et six mois d'un book Inside Sales, puis dis que la marche suivante n'existe pas sur ton périmètre.",
      },
      {
        question: "Ton manager sait-il que tu cherches ?",
        how: "Réponds simplement, sans dramatiser, et redis que tu tiens tes chiffres et tes engagements jusqu'au dernier jour. N'en fais pas une confidence.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Canevas. Le point à décider est le déclencheur que tu assumes à voix haute et sa date : portefeuille transmis, ou fin d'un cycle d'atteinte. Relis ta formulation une fois en cherchant uniquement ce qui pourrait s'entendre comme un reproche.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Je suis Senior Account Executive sur les comptes décentralisés d'Indeed depuis septembre 2023, après des débuts comme Account Executive en juin 2022. Mon portefeuille pèse 1,15 M€ de revenu sur douze mois.",
        task: "Je voulais partir d'une position tenue plutôt que d'une difficulté, et savoir nommer ce que je n'apprenais plus.",
        action: [
          "J'ai tenu ma cible trois trimestres de suite : 108 % au premier trimestre 2026, 133 % au deuxième, environ 108 % sur le troisième en cours.",
          "J'ai fait croître mon portefeuille de 38 % à périmètre constant, donc sans compter les comptes ajoutés en cours de route.",
          "J'ai transformé une vingtaine de tâches récurrentes en procédures que mes collègues réutilisent, donc ce que j'ai construit continue de tourner sans moi.",
        ],
        result:
          "Je pars après trois trimestres au-dessus de la cible, avec un portefeuille en croissance et documenté pour la personne qui le reprendra. Ce n'est pas un départ de repli, c'est un changement de terrain d'entraînement.",
        learning:
          "Le bon moment pour changer est celui où l'on peut transmettre proprement, pas celui où l'on n'en peut plus.",
      },
      en: {
        situation:
          "I have been a Senior Account Executive on Indeed's decentralised accounts since September 2023, after starting as an Account Executive in June 2022. My book represents 1.15 million euros of revenue over twelve months.",
        task: "I wanted to leave from a position I was holding rather than from a difficulty, and to be able to name what I was no longer learning.",
        action: [
          "I hit target three quarters in a row: 108 percent in the first quarter of 2026, 133 percent in the second, around 108 percent in the third, still in progress.",
          "I grew my book by 38 percent on a like for like basis, so excluding accounts added along the way.",
          "I turned around twenty recurring tasks into procedures my colleagues now reuse, so what I built keeps running without me.",
        ],
        result:
          "I am leaving after three quarters above target, with a growing book, documented for whoever picks it up. This is not a retreat, it is a change of training ground.",
        learning:
          "The right moment to move is when you can hand over cleanly, not when you have had enough.",
      },
    },
    script: {
      fr: {
        hook: "Le déclencheur est concret : j'ai fini de transmettre mon portefeuille sous une forme réutilisable, et à partir de là, ce qu'il me restait à apprendre n'était plus sur mon périmètre.",
        body: [
          "Mon poste actuel m'a appris à tenir un portefeuille très large, plus de huit cents réseaux dont sept font 84 % du revenu, et à prioriser sans que personne me dise où aller. Je le dis sans réserve, et je tiens mes engagements jusqu'au dernier jour.",
          "Ce que je vais chercher est précis : moins de comptes, plus gros, où la discussion porte sur l'allocation du budget et sur la preuve de mesure. Sur un portefeuille large, la compétence qui progresse est l'organisation. La profondeur stratégique ne s'obtient pas en ajoutant du volume.",
          "Je voulais aussi partir après une bonne période. J'ai fait 133 % d'atteinte au deuxième trimestre 2026 et mon portefeuille croît de 38 % à périmètre constant. Quand on part après une mauvaise période, on passe l'entretien à expliquer autre chose que son projet.",
        ],
        closing: "Et c'est chez vous que la conversation d'allocation se tient en premier, donc le pont est direct.",
        keyBeats: [
          "Le déclencheur, la transmission",
          "Ce que le poste m'a appris",
          "Ce que je vais chercher",
          "Partir d'une position tenue",
        ],
      },
      en: {
        hook: "The trigger is concrete: I finished handing over my book in a reusable form, and from there what I still had to learn was no longer available on my patch.",
        body: [
          "My current role taught me to hold a very wide portfolio, more than eight hundred networks of which seven make 84 percent of the revenue, and to prioritise without anyone telling me where to go. I say that without hedging, and I will honour my commitments until the last day.",
          "What I am going after is precise: fewer accounts, larger ones, where the discussion is about budget allocation and proof of measurement. On a wide portfolio, the skill that keeps improving is organisation. Strategic depth does not come from adding volume.",
          "I also wanted to leave after a good stretch. I finished the second quarter of 2026 at 133 percent of target, with my book growing 38 percent like for like. When you leave after a bad stretch, you spend the interview explaining something other than your plan.",
        ],
        closing: "And this is where the allocation conversation happens first, so the bridge is a direct one.",
        keyBeats: [
          "The trigger, the handover",
          "What the role taught me",
          "What I am going after",
          "Leaving from strength",
        ],
      },
    },
    metrics: [
      "108 % au T1 2026, 133 % au T2 2026, environ 108 % au T3 2026 en cours",
      "Book : 817 réseaux parents, 1,15 M€ de revenu sur 12 mois, les 7 premiers réseaux faisant 84 % du revenu",
      "Croissance du book +38 % à périmètre constant, 2026 contre 2025",
      "Une vingtaine de procédures réutilisables partagées avec des collègues",
    ],
    targetSeconds: 74,
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
      "Si tu décris un moteur vérifiable plutôt que des adjectifs sur toi-même.",
      "Si le moteur est cohérent avec ton parcours réel.",
      "Si tu le relies au quotidien concret du poste visé.",
    ],
    traps: [
      "Dire que tu aimes le contact humain ou le challenge : tout le monde le dit, personne ne le prouve.",
      "Parler de compétition et de classement : ça marche jusqu'au premier trimestre où tu es derrière.",
      "Rester dans l'abstrait : dis comment tu vérifies que ta motivation est réelle, pas ce que tu ressens.",
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
        how: "Dis que c'est le même moteur sur un cycle plus long, et appuie-toi sur ADMR, d'environ 24 K€ en rythme 2022 à environ 253 K€ en rythme 2026.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Canevas, mais le moteur décrit doit être le tien. Décide si tu gardes le chiffre d'activité de tes débuts, 60 à 80 par mois, ou si tu préfères un rythme actuel que tu peux défendre chiffre en main.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Avant Indeed, j'ai cofondé et dirigé Cosmic Junior, une EdTech de cours de code pour enfants, de janvier 2021 à 2023. J'y portais le prix, le marketing et l'acquisition.",
        task: "Je devais faire tenir ensemble une offre, des professeurs et des familles, et c'est là que j'ai identifié ce qui me tient dans ce métier.",
        action: [
          "J'ai construit l'offre et le prix moi-même, puis je les ai corrigés avec les retours des premières familles plutôt qu'avec mon intuition.",
          "J'ai recruté et managé 25 professeurs, donc chaque vente signée devenait des heures réellement délivrées, plus de 3 000 cours au total.",
          "J'ai amené la société de 0 à 100 000 $ d'ARR en moins de huit mois, en mesurant canal par canal ce qui produisait les inscriptions.",
          "J'ai retrouvé le même moteur chez Indeed sur des cycles plus longs, en faisant passer ADMR d'environ 24 K€ en rythme 2022 à environ 253 K€ en rythme 2026.",
        ],
        result:
          "Ce qui me motive est le moment où une décision abstraite, un prix ou une allocation, devient un résultat vérifiable pour quelqu'un. C'est une motivation qui dure parce qu'elle se mesure au lieu de se raconter.",
        learning:
          "Je me méfie des motivations qu'on ne peut pas chiffrer : elles s'épuisent au premier trimestre difficile.",
      },
      en: {
        situation:
          "Before Indeed I co-founded and ran Cosmic Junior, an EdTech company teaching coding to children, from January 2021 to 2023. I owned pricing, marketing and acquisition.",
        task: "I had to hold an offer, a teaching team and families together, and that is where I identified what actually keeps me in this job.",
        action: [
          "I built the offer and the pricing myself, then corrected both with feedback from the first families rather than with my own intuition.",
          "I recruited and managed 25 teachers, so every sale I signed turned into hours actually delivered, more than 3,000 courses in total.",
          "I took the company from zero to 100,000 dollars of ARR in under eight months, measuring channel by channel what produced sign-ups.",
          "I found the same driver at Indeed on longer cycles, taking ADMR from roughly 24,000 euros on a 2022 run rate to roughly 253,000 euros on a 2026 run rate.",
        ],
        result:
          "What motivates me is the moment an abstract decision, a price or an allocation, becomes a verifiable outcome for someone. It lasts because it is measured rather than narrated.",
        learning:
          "I am wary of motivations you cannot put a number on: they run out in the first hard quarter.",
      },
    },
    script: {
      fr: {
        hook: "Ce qui me tient, c'est le moment où une décision abstraite, un prix ou une allocation de budget, devient un résultat vérifiable pour quelqu'un.",
        body: [
          "La vente m'intéresse d'abord parce qu'elle se mesure. On peut se raconter beaucoup de choses sur la qualité d'une relation client, mais il y a un chiffre à la fin, et ce chiffre dit si on a été utile ou seulement présent.",
          "Le deuxième moteur est la compréhension du modèle d'en face. Avant de vendre, je veux savoir comment l'entreprise gagne de l'argent et ce que lui coûte un poste vacant un mois de plus. Ce travail ne s'épuise pas : chaque secteur a sa mécanique, et je repars de zéro à chaque client.",
          "Le troisième est de piloter une activité plutôt qu'une signature. À mes débuts, je tenais 60 à 80 démonstrations et revues de performance par mois. C'est ce qui me donne quelque chose à regarder les semaines où rien ne se signe.",
        ],
        closing: "C'est une motivation qui se vérifie au lieu de se déclarer, et j'ai un exemple précis si vous le voulez.",
        keyBeats: ["Ça se mesure", "Comprendre le modèle du client", "Piloter l'activité", "Vérifiable, pas déclaratif"],
      },
      en: {
        hook: "What keeps me in this job is the moment an abstract decision, a price or a budget allocation, turns into a verifiable outcome for someone.",
        body: [
          "I am drawn to sales first because it is measured. You can tell yourself a lot of stories about the quality of a client relationship, but there is a number at the end, and that number says whether you were useful or merely present.",
          "The second driver is understanding the model in front of me. Before selling, I want to know how the company makes money and what one more month of an unfilled role costs it. That work never runs out: every sector has its own mechanics, and I start from scratch with each client.",
          "The third is steering on activity rather than on signatures. In my early months I ran 60 to 80 demos and performance reviews a month. That is what gives me something to look at in the weeks when nothing closes.",
        ],
        closing: "It is a motivation you can check rather than declare, and I have a specific example if you want one.",
        keyBeats: ["It is measured", "Understand the client's model", "Steer on activity", "Checked, not declared"],
      },
    },
    metrics: [
      "Cosmic Junior : 0 à 100 K$ d'ARR en moins de 8 mois, 25 professeurs, plus de 3 000 cours délivrés",
      "ADMR : environ 24 K€ en rythme 2022 à environ 253 K€ en rythme 2026",
      "60 à 80 démonstrations et revues de performance par mois à ses débuts chez Indeed",
    ],
    targetSeconds: 72,
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
      "Si ta différence est utile au poste précis, pas seulement remarquable.",
      "Si tu restes factuel sous une question qui pousse à l'autopromotion.",
    ],
    traps: [
      "Lister des qualités : rigoureux, persévérant, orienté résultats. Aucune n'est vérifiable.",
      "Te comparer à des candidats que tu ne connais pas.",
      "Promettre une preuve que tu ne peux pas fournir : si tu proposes de démontrer, sois prêt à le faire dans l'entretien.",
      "Enchaîner les réussites sans jamais nommer ta limite : on te la demandera juste après.",
    ],
    followUps: [
      {
        question: "Qu'est-ce qui ne va pas marcher chez nous dans ton profil ?",
        how: "Nomme une vraie limite : tu n'as pas vendu de média de marque à une agence média. Dis comment tu la combles, et par quoi tu compenses.",
      },
      {
        question: "Donne-moi un exemple concret de cette vente multi-niveaux.",
        how: "C'est la relance attendue : le centre et les agences travaillés en parallèle, le plus gros deal du book closé le 18 mai 2026 à 438 204 €. Nomme les autres contributeurs, ça te crédibilise.",
      },
      {
        question: "Tout le monde dit utiliser l'IA aujourd'hui.",
        how: "Distingue l'usage de la construction : tu as écrit une vingtaine de procédures réutilisables et des garde-fous qui bloquent l'écriture automatique. Propose de le montrer.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Canevas. Revérifie les deux chiffres Système U avant l'entretien, ce sont les seuls que tu avances ici. Et décide à l'avance la limite que tu admets en relance, sinon tu improviseras une fausse faiblesse.",
    format: "script",
    answer: {
      fr: {
        situation:
          "La plupart des candidats à ce type de poste vendent à un décideur unique dans une organisation centralisée. Je vends depuis quatre ans des réseaux décentralisés, où l'accord se négocie au centre et où l'adoption se gagne ensuite établissement par établissement.",
        task: "Je devais démontrer que ce modèle produit plus de revenu qu'une signature centrale laissée sans suite.",
        action: [
          "Sur Système U, j'ai travaillé le centre et les agences en parallèle plutôt que d'attendre un mandat descendant.",
          "J'ai closé le 18 mai 2026 le plus gros deal de ma carrière, 438 204 €, sur ce réseau via les agences.",
          "J'ai animé plus de 20 webinars touchant plus de 600 franchisés, parce que l'adoption locale ne se décrète pas depuis un siège.",
          "En parallèle, j'ai outillé mon équipe sur l'IA : une vingtaine de procédures réutilisables partagées, et des garde-fous qui bloquent toute écriture automatique sur de la donnée client.",
        ],
        result:
          "Deux compétences rares dans le même profil : la vente multi-niveaux qui transforme un accord-cadre en revenu réel, et le pilotage de l'adoption de l'IA dans une équipe. Sur Système U, cela fait 101 986 € de bookings en 2023 et 547 277 € en 2026.",
        learning:
          "Un accord signé au centre ne vaut rien tant que les établissements ne l'ont pas adopté. C'est là que je suis utile.",
      },
      en: {
        situation:
          "Most candidates for this kind of role sell to a single decision maker inside a centralised organisation. I have spent four years selling to decentralised networks, where the agreement is negotiated at the centre and adoption is then won site by site.",
        task: "I had to prove that this model produces more revenue than a central signature left to itself.",
        action: [
          "On Système U, I worked the centre and the agencies in parallel rather than waiting for a top-down mandate.",
          "On 18 May 2026 I closed the largest deal of my career, 438,204 euros, on that network through the agencies.",
          "I ran more than 20 webinars reaching over 600 franchisees, because local adoption cannot be mandated from head office.",
          "In parallel I equipped my team on AI: around twenty reusable shared procedures, plus guardrails that block any automated write on client data.",
        ],
        result:
          "Two rare skills in one profile: multi-level selling that turns a framework agreement into actual revenue, and driving AI adoption inside a sales team. On Système U that means 101,986 euros of bookings in 2023 and 547,277 euros in 2026.",
        learning:
          "An agreement signed at the centre is worth nothing until the sites adopt it. That is where I am useful.",
      },
    },
    script: {
      fr: {
        hook: "Je ne connais pas les autres candidats, donc je vous dis ce que j'apporte et vous jugerez de l'écart.",
        body: [
          "Le premier point est la vente multi-niveaux. Sur Système U, l'accord se négocie au centre et l'adoption se gagne magasin par magasin, à travers les agences. Le réseau est passé de 101 986 € de bookings en 2023 à 547 277 € en 2026. Ce n'est pas de la relance, c'est de l'animation : une signature centrale ne vaut rien tant que le terrain ne l'a pas prise.",
          "Le deuxième point est l'outillage. J'ai transformé une vingtaine de tâches en procédures que mes collègues réutilisent, avec des garde-fous qui interdisent toute écriture automatique sur de la donnée client. Utiliser l'IA et la rendre sûre pour une équipe ne sont pas la même compétence.",
          "Le troisième point est la façon de citer un chiffre : j'annonce toujours son statut, résultat publié ou prévision. Dans un métier où l'annonceur vérifie, c'est ce qui décide s'il vous croit la deuxième fois.",
        ],
        closing: "Ce sont trois choses démontrables, et je peux en prendre une en exemple maintenant.",
        keyBeats: [
          "Pas de comparaison",
          "Vente multi-niveaux",
          "Outillage et garde-fous",
          "Chiffres avec leur statut",
        ],
      },
      en: {
        hook: "I do not know the other candidates, so I will tell you what I bring and you can judge the gap.",
        body: [
          "The first thing is multi-level selling. On Système U the agreement is negotiated at the centre and adoption is won store by store, through the agencies. The network went from 101,986 euros of bookings in 2023 to 547,277 euros in 2026. That is not chasing, it is enablement: a central signature is worth nothing until the field takes it up.",
          "The second is tooling. I turned around twenty tasks into procedures my colleagues now reuse, with guardrails that forbid any automated write on client data. Using AI and making it safe for a team are not the same skill.",
          "The third is how I quote a number: I always give its status, published result or forecast. In a job where the advertiser checks, that is what decides whether they believe you the second time.",
        ],
        closing: "Those three things can be demonstrated rather than claimed, and I can take one as an example right now.",
        keyBeats: [
          "No comparison",
          "Multi-level selling",
          "Tooling and guardrails",
          "Numbers with their status",
        ],
      },
    },
    metrics: [
      "Système U : 101 986 € de bookings en 2023, 547 277 € en 2026",
      "Plus gros deal gagné : 438 204 €, closé le 18 mai 2026, réseau Système U via agences",
      "Plus de 20 webinars, plus de 600 franchisés touchés",
      "Une vingtaine de procédures IA réutilisables partagées avec des collègues",
    ],
    targetSeconds: 72,
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
      "Si tu sais parler d'argent sans gêne, ce qui est en soi un signal commercial.",
      "Si tu continues à produire de la valeur quand ce n'est pas commissionné.",
      "Si tu as des preuves de ce que tu avances, ou seulement une déclaration.",
      "Si tu penses équipe ou seulement quota individuel.",
    ],
    traps: [
      "Nier que la rémunération compte : personne ne te croit, et c'est un mauvais signal pour un commercial.",
      "Répondre par un principe abstrait comme l'impact ou le sens, sans une seule action derrière.",
      "Citer uniquement des actions qui servaient ton propre quota : la question porte sur le reste.",
      "Durer trop longtemps : cette question se traite en une minute et demie, pas en trois.",
    ],
    followUps: [
      {
        question: "Donc la rémunération ne compte pas pour toi ?",
        how: "Assume-la : elle compte, c'est la sanction du résultat. Mais dis que ce n'est pas elle qui décide de ce que tu fais le vendredi après-midi.",
      },
      {
        question: "Ces procédures partagées, ça t'a coûté combien de temps ?",
        how: "Réponds en logique d'investissement : construit une fois, réutilisé par plusieurs. Cite les 165 e-mails ABM individualisés produits en quelques jours.",
      },
      {
        question: "Pourquoi avoir accepté deux couvertures de book ?",
        how: "Parce que le book d'un collègue absent devient un problème pour les clients. Reste factuel : neuf mois côté National Accounts, six mois côté Inside Sales.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Canevas. Prépare mot pour mot la phrase par laquelle tu assumes que la rémunération compte : c'est le seul endroit de la réponse où une hésitation s'entend. Vérifie ensuite que chaque exemple non commissionné que tu cites est bien un travail que tu as fait toi-même.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Chez Indeed, le variable existe, et pourtant le travail dont je suis le plus fier n'est pas commissionné.",
        task: "Je voulais vérifier ce que je continue à faire quand personne ne le compte dans mon quota.",
        action: [
          "J'ai animé plus de 20 webinars pour plus de 600 franchisés, du travail collectif qui ne remonte pas sur mes comptes.",
          "J'ai pris neuf mois de couverture d'un book National Accounts en santé et services à la personne, puis six mois du book Inside Sales d'une collègue.",
          "J'ai transformé une vingtaine de tâches récurrentes en procédures outillées et je les ai partagées, au lieu de les garder pour mon seul rendement.",
          "J'ai écrit les garde-fous qui empêchent un agent de modifier un budget ou de lancer une campagne sans validation humaine, pour que l'équipe puisse s'en servir sans risque.",
        ],
        result:
          "Aucune de ces quatre actions n'est payée au variable, et ce sont exactement celles que je citerais si on me demandait ce que j'ai laissé derrière moi.",
        learning:
          "La rémunération sanctionne le résultat, elle ne le produit pas. Ce qui le produit, chez moi, c'est de rendre le travail réutilisable par quelqu'un d'autre.",
      },
      en: {
        situation:
          "At Indeed there is a variable component, and yet the work I am proudest of is not commissioned.",
        task: "I wanted to check what I keep doing when nobody counts it towards my quota.",
        action: [
          "I ran more than 20 webinars for over 600 franchisees, collective work that does not land on my own accounts.",
          "I covered a National Accounts book in healthcare and home services for nine months, then a colleague's Inside Sales book for six months.",
          "I turned around twenty recurring tasks into tooled procedures and shared them, instead of keeping them for my own output.",
          "I wrote the guardrails that stop an agent changing a budget or launching a campaign without human validation, so the team can use them safely.",
        ],
        result:
          "None of those four actions is paid on variable, and they are exactly the ones I would name if asked what I left behind.",
        learning:
          "Compensation rewards the result, it does not produce it. What produces it, for me, is making the work reusable by someone else.",
      },
    },
    script: {
      fr: {
        hook: "La rémunération compte, je ne vais pas prétendre le contraire : c'est la sanction du résultat. Mais elle ne le produit pas.",
        body: [
          "Ce qui le produit chez moi, c'est de construire une fois ce que plusieurs réutilisent. Une vingtaine de procédures partagées avec mes collègues, et des garde-fous qui empêchent un agent de modifier un budget client sans validation humaine. Rien de tout cela n'est commissionné.",
          "Le deuxième moteur est la qualité de la décision du client. Vendre ce qui ne marchera pas rapporte une fois. Concrètement, je refuse de cadrer un test sur le poste le plus difficile du client, même quand il insiste : ça coûte un trimestre, et ça évite de griller le produit chez lui pour deux ans.",
          "Le troisième est l'équipe. Neuf mois de couverture d'un book National Accounts, six mois sur celui d'une collègue : deux choses qui ne comptent dans le quota de personne, et qui font qu'une équipe tient quand quelqu'un manque.",
        ],
        closing: "Si la rémunération était mon seul moteur, je ne passerais pas de temps sur ces trois-là.",
        keyBeats: ["Assumer la rémunération", "Construire une fois", "Refuser le mauvais test", "L'équipe"],
      },
      en: {
        hook: "Compensation matters, I am not going to pretend otherwise: it rewards the result. But it does not produce it.",
        body: [
          "What produces it, for me, is building once what several people then reuse. Around twenty procedures shared with colleagues, and guardrails that stop an agent changing a client budget without human validation. None of that is commissioned.",
          "The second driver is the quality of the decision the client makes. Selling something that will not work pays once. In practice, I refuse to scope a pilot on the client's hardest role, even when they insist: it costs a quarter, and it avoids burning the product there for two years.",
          "The third is the team. Nine months covering a National Accounts book, six months covering a colleague's: two things that count towards nobody's quota, and that keep a team standing when someone is missing.",
        ],
        closing: "If compensation were my only driver, I would not spend time on any of those three.",
        keyBeats: ["Own the money question", "Build once, reuse", "Refuse the wrong pilot", "The team"],
      },
    },
    metrics: [
      "Plus de 20 webinars, plus de 600 franchisés touchés",
      "Couverture NAM de 9 mois, couverture d'un book Inside Sales de 6 mois",
      "Une vingtaine de procédures IA réutilisables partagées",
      "165 e-mails ABM individualisés produits en août 2026, zéro crédit d'enrichissement consommé",
    ],
    targetSeconds: 70,
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
      "Si tu raisonnes en compétences à acquérir plutôt qu'en titres à décrocher.",
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
        how: "Ne tranche pas artificiellement. Dis que tu as managé 25 personnes chez Cosmic Junior, que ça t'a plu, et que tu veux maîtriser le métier avant de choisir.",
      },
      {
        question: "Qu'est-ce qui te ferait partir avant cinq ans ?",
        how: "Une seule réponse honnête : ne plus rien apprendre. Puis demande comment l'équipe fait progresser ses commerciaux sur deux ou trois ans.",
      },
      {
        question: "Tu as été fondateur, tu ne vas pas repartir entreprendre ?",
        how: "Réponds sans esquive : Cosmic Junior allait de janvier 2021 à 2023, et ce que tu cherches maintenant est la profondeur sur un périmètre, pas le zéro à un.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Canevas. Les trois jalons sont des jalons de compétence, pas de titre : remplace-les si tu veux en défendre d'autres. Le seul arbitrage à faire avant l'entretien est de savoir si tu dis oui au management ou si tu gardes le choix ouvert, et de t'y tenir sur les relances.",
    format: "script",
    answer: {
      fr: {
        situation:
          "En quinze mois chez Indeed, je suis passé d'Account Executive à Senior Account Executive, puis j'ai couvert neuf mois un book National Accounts en remplacement de la manager sortante.",
        task: "Je veux continuer sur la même logique : choisir chaque marche suivante par la compétence qu'elle m'oblige à construire.",
        action: [
          "Sur douze à dix-huit mois, tenir des comptes stratégiques au niveau de la mesure et de l'allocation, et pas seulement de la relation.",
          "À trois ans, porter les comptes les plus complexes du périmètre, ceux qui combinent plusieurs marques, plusieurs agences et plusieurs marchés.",
          "À cinq ans, avoir le choix entre approfondir comme contributeur individuel senior et encadrer une petite équipe, ce que j'ai déjà fait avec 25 personnes chez Cosmic Junior.",
        ],
        result:
          "Ma trajectoire donne le rythme : une responsabilité de plus tous les douze à dix-huit mois, sans changer d'entreprise à chaque fois. Ce que je cherche à cinq ans est la profondeur sur un périmètre, pas une succession de lignes sur un CV.",
        learning:
          "Je réponds par compétences plutôt que par postes, parce qu'un organigramme à cinq ans est invérifiable alors qu'une compétence se vérifie.",
      },
      en: {
        situation:
          "In fifteen months at Indeed I moved from Account Executive to Senior Account Executive, then covered a National Accounts book for nine months, replacing the outgoing manager.",
        task: "I want to keep the same logic: choose each next step by the skill it forces me to build.",
        action: [
          "Over twelve to eighteen months, hold strategic accounts at the level of measurement and allocation, not just relationship.",
          "At three years, carry the most complex accounts on the patch, the ones combining several brands, several agencies and several markets.",
          "At five years, have the choice between going deeper as a senior individual contributor and leading a small team, which I have already done with 25 people at Cosmic Junior.",
        ],
        result:
          "My track record sets the pace: one more level of responsibility every twelve to eighteen months, without changing company each time. What I want at five years is depth on a patch, not a sequence of lines on a CV.",
        learning:
          "I answer in skills rather than job titles, because an org chart five years out cannot be verified whereas a skill can.",
      },
    },
    script: {
      fr: {
        hook: "Je réponds par compétences plutôt que par titres, parce qu'un organigramme à cinq ans est invérifiable alors qu'une compétence se vérifie.",
        body: [
          "Sur douze à dix-huit mois, je veux tenir des comptes stratégiques au niveau de la mesure et de l'allocation, pas seulement de la relation. Concrètement, savoir défendre une recommandation de budget devant quelqu'un qui la conteste, avec ses chiffres à lui.",
          "À trois ans, je veux porter les comptes les plus complexes du périmètre, ceux qui combinent plusieurs marques, plusieurs agences et plusieurs marchés, et être la personne vers qui l'équipe se tourne sur un sujet précis, probablement la mesure.",
          "À cinq ans, je veux avoir le choix entre approfondir comme contributeur individuel senior et encadrer une petite équipe. Je ne tranche pas aujourd'hui : j'ai managé 25 personnes dans une autre vie et cela m'a plu, mais annoncer un titre dans une organisation que je ne connais pas encore n'aurait aucune valeur.",
        ],
        closing: "Le fil est le même sur les trois étapes : prendre une responsabilité de plus quand la précédente est vraiment acquise.",
        keyBeats: [
          "12 à 18 mois : mesure et allocation",
          "3 ans : les comptes complexes",
          "5 ans : le choix",
          "Compétences, pas titres",
        ],
      },
      en: {
        hook: "I answer in skills rather than titles, because an org chart five years out cannot be verified whereas a skill can.",
        body: [
          "Over twelve to eighteen months, I want to hold strategic accounts at the level of measurement and allocation, not just relationship. In practice, that means defending a budget recommendation in front of someone who disputes it, using their own numbers.",
          "At three years, I want to carry the most complex accounts on the patch, the ones combining several brands, several agencies and several markets, and to be the person the team turns to on one specific topic, most likely measurement.",
          "At five years, I want the choice between going deeper as a senior individual contributor and leading a small team. I am not deciding that today: I managed 25 people in another life and I enjoyed it, but naming a title in an organisation I do not know yet would be worth nothing.",
        ],
        closing: "The thread is the same across the three steps: take one more level of responsibility once the previous one is genuinely earned.",
        keyBeats: [
          "12 to 18 months: measurement",
          "3 years: the complex accounts",
          "5 years: the choice",
          "Skills, not titles",
        ],
      },
    },
    metrics: [
      "AE DCA en juin 2022, Senior AE en septembre 2023, soit 15 mois",
      "Couverture NAM de 9 mois en 2023-24 en remplacement de la manager sortante",
      "25 professeurs recrutés et managés chez Cosmic Junior",
    ],
    targetSeconds: 70,
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
      "Répondre par un principe sans dire ce que tu fais concrètement le lundi matin.",
      "Blâmer le marché, le produit ou le prix.",
      "Confondre persévérance et insistance : au troisième non identique, c'est l'angle qui change, pas la dose.",
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
    basis: "canevas",
    basisNote:
      "Canevas, mais le mécanisme doit être celui que tu appliques vraiment : choisis l'indicateur d'activité que tu comptes réellement chaque semaine, et sois prêt à dire où tu le notes. Garde une vraie semaine difficile en réserve, la relance vient presque toujours.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Sur Système U, près de trois ans séparent les 101 986 € de bookings de 2023 du deal de 438 204 € closé le 18 mai 2026. Sur cette période, la majorité de mes sollicitations n'a pas abouti.",
        task: "Je devais continuer à investir sur un compte qui ne rapportait pas encore, sans que ça pèse sur le reste de mon portefeuille.",
        action: [
          "J'ai séparé ce que je contrôle de ce que je subis : pas le calendrier du réseau, mais le nombre de conversations que j'ouvre.",
          "J'ai tenu un volume d'activité mesurable élevé, jusqu'à 60 à 80 démonstrations et revues de performance par mois, pour que mon résultat ne dépende jamais d'un seul compte.",
          "Au troisième refus identique, j'ai changé d'angle d'entrée plutôt que de dose : je suis passé par les agences au lieu du centre.",
          "J'ai gardé des victoires intermédiaires visibles, notamment ADMR passé d'environ 24 K€ en rythme 2022 à environ 253 K€ en rythme 2026.",
        ],
        result:
          "Système U est passé de 101 986 € en 2023 à 547 277 € en 2026, et le deal de 438 204 € est arrivé la troisième année.",
        learning:
          "Le rejet cesse de m'atteindre quand mon indicateur quotidien est l'activité et pas la signature. La signature est une conséquence, et elle arrive toujours en retard.",
      },
      en: {
        situation:
          "On Système U, nearly three years separate the 101,986 euros of bookings in 2023 from the 438,204 euro deal closed on 18 May 2026. Across that period most of my approaches went nowhere.",
        task: "I had to keep investing in an account that was not yet paying off, without letting it weigh on the rest of my book.",
        action: [
          "I separated what I control from what I absorb: not the network's calendar, but the number of conversations I open.",
          "I kept a high measurable activity level, up to 60 to 80 demos and performance reviews a month, so my result never depended on one account.",
          "At the third identical refusal I changed my route in rather than my persistence: I went through the agencies instead of the centre.",
          "I kept intermediate wins visible, in particular ADMR moving from roughly 24,000 euros on a 2022 run rate to roughly 253,000 euros on a 2026 run rate.",
        ],
        result:
          "Système U went from 101,986 euros in 2023 to 547,277 euros in 2026, and the 438,204 euro deal landed in the third year.",
        learning:
          "Rejection stops reaching me once my daily indicator is activity rather than signature. The signature is a consequence, and it always arrives late.",
      },
    },
    script: {
      fr: {
        hook: "Le rejet m'atteint comme tout le monde. Ce qui a changé, c'est que je ne pilote plus mon moral sur la signature.",
        body: [
          "Le mécanisme commence par un tri. Je ne contrôle ni le calendrier d'un réseau, ni le gel d'un budget. Je contrôle le nombre de conversations que j'ouvre chaque semaine, et je le compte : à mes débuts, c'était 60 à 80 démonstrations et revues de performance par mois.",
          "Ensuite, je traite un refus comme une information et pas comme un verdict. Je note qui a dit non et pourquoi. Quand le même non revient trois fois, je change d'angle d'entrée et pas de dose d'insistance : sur Système U, c'est ce qui m'a fait passer par les agences plutôt que par le centre.",
          "Enfin, je découpe les cycles longs en étapes vérifiables et je demande de l'aide tôt, ce qui n'est pas un réflexe naturel en vente. Entre les 101 986 € de 2023 sur Système U et le deal de 438 204 € de mai 2026, il fallait quelque chose à regarder entre les deux.",
        ],
        closing: "La signature est une conséquence, elle arrive toujours en retard, et mon travail est de tenir l'activité jusque-là.",
        keyBeats: [
          "Trier contrôlable et subi",
          "Un refus est une information",
          "Changer d'angle au troisième non",
          "Des étapes vérifiables",
        ],
      },
      en: {
        hook: "Rejection gets to me like anyone else. What changed is that I no longer run my morale on signatures.",
        body: [
          "The mechanism starts with a sort. I do not control a network's calendar, or a budget freeze. I control the number of conversations I open each week, and I count them: in my early period that was 60 to 80 demos and performance reviews a month.",
          "Then I treat a refusal as information rather than a verdict. I write down who said no and why. When the same no comes back three times, I change my route in rather than my persistence: on Système U, that is what took me through the agencies instead of the centre.",
          "Finally, I break long cycles into checkable steps and I ask for help early, which is not a natural reflex in sales. Between the 101,986 euros of 2023 on Système U and the 438,204 euro deal of May 2026, I needed something to look at in between.",
        ],
        closing: "The signature is a consequence, it always arrives late, and my job is to hold the activity until then.",
        keyBeats: [
          "Sort controlled from absorbed",
          "A no is information",
          "Change the route at the third no",
          "Checkable steps",
        ],
      },
    },
    metrics: [
      "Système U : 101 986 € en 2023, 547 277 € en 2026, deal de 438 204 € le 18 mai 2026",
      "ADMR : environ 24 K€ en rythme 2022 à environ 253 K€ en rythme 2026",
      "60 à 80 démonstrations et revues de performance par mois à ses débuts",
    ],
    targetSeconds: 78,
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
      "Si tu distingues un résultat publié, une déclaration de l'entreprise et une prévision.",
      "Si tu comprends d'où vient la croissance, volume d'impressions ou prix.",
      "Si tu connais les produits, pas seulement les revenus.",
      "Si tu tires une conséquence commerciale de ce que tu cites.",
    ],
    traps: [
      "Réciter des chiffres sans dire lesquels sont publiés et lesquels sont modélisés.",
      "Donner la prévision EMARKETER comme la preuve que Meta a dépassé Google : c'est une prévision, pas un résultat.",
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
        how: "Pars du fait déclaré, plus de 75 Md$ de rythme annuel, puis dis ce qui reste à gagner en vente : l'arbitrage entre automatisation et contrôle de la marque.",
      },
      {
        question: "Quelle est la principale menace sur ce business ?",
        how: "Une réponse mesurée : le changement des méthodes de mesure, que l'IAB chiffre à 86 % des acheteurs. Cadre-le comme un enjeu de vente, pas comme une critique.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Canevas de maîtrise du marché, distinct de la réponse sur ta motivation. La veille de l'entretien, revérifie le dernier trimestre publié et les prévisions citées : si un chiffre a bougé, c'est ici qu'il faut le corriger. Décide aussi lequel des trois blocs tu abandonnes si on te coupe.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Je vends de la publicité de recrutement depuis quatre ans, donc j'observe ce marché par obligation professionnelle. Avant de candidater, j'ai séparé ce qui est publié de ce qui est prévu.",
        task: "Je devais pouvoir décrire votre activité publicitaire uniquement avec des chiffres que je peux défendre s'ils sont contestés.",
        action: [
          "Résultats publiés du deuxième trimestre 2026 : 59,363 Md$ de revenu publicitaire, +27 % sur un an, +14 % d'impressions et +12 % de prix moyen par annonce, avec 3,60 milliards de personnes actives par jour en juin 2026.",
          "Déclaré par Meta : Advantage+ de bout en bout dépasse 75 Md$ de rythme annuel, et plus de 9 millions de petites entreprises utilisent au moins un outil créatif génératif.",
          "Mesuré par Meta et non audité : Andromeda récupère les annonces éligibles, GEM les classe et les séquence, avec +8,3 % de clics et +15,7 % de conversions sur Facebook.",
          "Prévisions : EMARKETER place Meta devant Google en part mondiale, 26,8 % contre 26,4 %, et l'IAB annonce le social à +16,5 % en 2026 avec 86 % des acheteurs qui changent leur façon de mesurer.",
        ],
        result:
          "La conséquence commerciale que j'en tire est que la conversation avec l'annonceur se déplace de l'achat d'inventaire vers l'arbitrage d'allocation et la preuve de mesure.",
        learning:
          "Je cite toujours un chiffre avec son statut. Annoncer une prévision comme un résultat est la façon la plus rapide de perdre la confiance d'un annonceur.",
      },
      en: {
        situation:
          "I have been selling recruitment advertising for four years, so I follow this market as part of the job. Before applying, I separated what is published from what is forecast.",
        task: "I needed to be able to describe your advertising business using only numbers I can defend if they are challenged.",
        action: [
          "Published second quarter 2026 results: 59.363 billion dollars of advertising revenue, up 27 percent year over year, impressions up 14 percent and average price per ad up 12 percent, with 3.60 billion daily active people in June 2026.",
          "Stated by Meta: end to end Advantage+ is past a 75 billion dollar annual run rate, and more than 9 million small businesses use at least one generative creative tool.",
          "Measured by Meta and not audited: Andromeda retrieves eligible ads, GEM ranks and sequences them, delivering 8.3 percent more clicks and 15.7 percent more conversions on Facebook.",
          "Forecasts: EMARKETER puts Meta ahead of Google on worldwide share, 26.8 percent against 26.4 percent, and the IAB forecasts social up 16.5 percent in 2026 with 86 percent of buyers changing how they measure.",
        ],
        result:
          "The commercial consequence I draw is that the advertiser conversation moves from buying inventory towards arbitrating allocation and proving measurement.",
        learning:
          "I always quote a number with its status. Presenting a forecast as a result is the fastest way to lose an advertiser's trust.",
      },
    },
    script: {
      fr: {
        hook: "Je sépare ce qui est publié de ce qui est prévu, parce que les deux ne s'utilisent pas de la même façon devant un annonceur.",
        body: [
          "Publié : au deuxième trimestre 2026, 59,363 milliards de dollars de revenu publicitaire, en hausse de 27 % sur un an, avec 14 % d'impressions en plus et 12 % de prix moyen par annonce en plus. La croissance vient donc autant de la valeur de l'inventaire que de son volume.",
          "Déclaré par Meta, et je le dis comme tel : plus de 75 milliards de dollars de rythme annuel sur Advantage+, et 8,3 % de clics et 15,7 % de conversions en plus sur Facebook depuis Andromeda et GEM. Ces deux dernières mesures sont faites par Meta et non auditées, donc jamais présentées à un annonceur comme une garantie de performance.",
          "Prévision, et le mot compte : EMARKETER place Meta devant Google en part mondiale, 26,8 % contre 26,4 %, et l'IAB prévoit le social en hausse de 16,5 % en 2026, avec 86 % des acheteurs qui changent leur façon de mesurer. Ce sont une modélisation privée et une enquête, pas des résultats.",
        ],
        closing: "La conséquence pour la vente est que la discussion se déplace de l'achat d'inventaire vers l'allocation et la preuve de mesure, et je revérifie le dernier trimestre publié avant chaque rendez-vous.",
        keyBeats: [
          "Publié : le T2 2026",
          "Déclaré : Advantage+, Andromeda et GEM",
          "Prévu : EMARKETER et IAB",
          "La conséquence commerciale",
        ],
      },
      en: {
        hook: "I separate what is published from what is forecast, because the two cannot be used the same way in front of an advertiser.",
        body: [
          "Published: in the second quarter of 2026, 59.363 billion dollars of advertising revenue, up 27 percent year over year, with impressions up 14 percent and average price per ad up 12 percent. So growth comes as much from the value of the inventory as from its volume.",
          "Stated by Meta, and I say so: more than 75 billion dollars of annual run rate on Advantage+, and 8.3 percent more clicks and 15.7 percent more conversions on Facebook from Andromeda and GEM. Those last two are Meta's own measurements, not audited, so never presented to an advertiser as a performance guarantee.",
          "Forecast, and the word matters: EMARKETER puts Meta ahead of Google on worldwide share, 26.8 percent against 26.4 percent, and the IAB forecasts social up 16.5 percent in 2026, with 86 percent of buyers changing how they measure. That is private modelling and a survey, not results.",
        ],
        closing: "The sales consequence is that the discussion moves from buying inventory towards allocation and proof of measurement, and I recheck the latest published quarter before every meeting.",
        keyBeats: [
          "Published: Q2 2026",
          "Stated: Advantage+, Andromeda and GEM",
          "Forecast: EMARKETER and IAB",
          "The commercial consequence",
        ],
      },
    },
    metrics: [
      "T2 2026 publié : 59,363 Md$, +27 % sur un an, impressions +14 %, prix moyen par annonce +12 %",
      "3,60 milliards de personnes actives par jour en juin 2026 (résultats publiés)",
      "Advantage+ de bout en bout : plus de 75 Md$ de rythme annuel, plus de 9 M de petites entreprises (déclaré par Meta)",
      "Andromeda + GEM : +8,3 % de clics, +15,7 % de conversions sur Facebook (mesuré par Meta, non audité)",
      "EMARKETER avril 2026 : 26,8 % contre 26,4 % de part mondiale (prévision de modélisation privée)",
      "IAB septembre 2026 : social +16,5 % en 2026, 86 % des acheteurs changent leur mesure (prévision sectorielle)",
    ],
    targetSeconds: 88,
  },
];
