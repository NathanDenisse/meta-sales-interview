import type { Question } from "../types";

export const qPerte: Question[] = [
  {
    id: "perte-closing",
    category: "perte",
    difficulty: "classique",
    priority: true,
    prompt: {
      fr: "Raconte-moi une fois où tu n'as pas réussi à closer un client.",
      en: "Tell me about a time you failed to close a client.",
    },
    whatTheyTest: [
      "Ta capacité à nommer une cause que tu contrôlais, sans la déguiser.",
      "Ta qualification : la plupart des deals perdus sont des deals mal qualifiés au départ.",
      "Le changement concret que la perte a produit dans ta méthode, et sa preuve.",
      "Ton rapport à l'échec : un senior en parle calmement, sans se justifier ni s'effondrer.",
    ],
    traps: [
      "Accuser le prix, le produit, le marché ou le client. C'est éliminatoire, même quand c'est vrai en partie.",
      "Choisir une perte insignifiante pour se protéger : l'intervieweur voit l'esquive.",
      "Terminer par un retournement héroïque. La question porte sur la perte, pas sur le sauvetage.",
      "Rester dans le regret sans énoncer la règle que tu appliques depuis.",
    ],
    followUps: [
      {
        question: "À quel moment précis le deal était-il déjà perdu ?",
        how: "Donne un moment daté et un signal concret, par exemple le premier report de rendez-vous par le décideur budgétaire. Un senior sait relire sa chronologie.",
      },
      {
        question: "Qu'est-ce que tu fais différemment depuis ?",
        how: "Une seule règle, vérifiable, appliquée à tous tes deals. Pas une liste de bonnes intentions.",
      },
      {
        question: "Tu as retenté sur ce compte ?",
        how: "Dis ce que tu as gardé de la relation et à quelle condition tu reviendrais. Perdre un deal n'est pas perdre un compte.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Ta banque de faits ne contient aucun deal perdu documenté : remplace la situation et le résultat par une vraie perte, avec le nom du réseau, le montant en jeu et la date. Garde la structure, en particulier la cause que tu contrôlais.",
    answer: {
      fr: {
        situation:
          "Je travaille un réseau décentralisé où mon interlocuteur, côté siège, est convaincu et moteur depuis le premier échange. Le projet avance vite, jusqu'à ce que l'arbitrage budgétaire remonte à un niveau que je n'avais jamais rencontré.",
        task: "Transformer l'adhésion du siège en engagement signé avant la fin de l'exercice.",
        action: [
          "J'ai confondu enthousiasme et pouvoir de décision : je me suis appuyé sur un champion sans vérifier qui signait réellement.",
          "J'ai continué à investir du temps sur la relation qui répondait, plutôt que d'aller chercher celle qui décidait et qui ne me répondait pas.",
          "J'ai découvert tard que l'arbitrage se faisait à un autre niveau, et j'ai demandé l'accès quand la décision était déjà en cours.",
          "J'ai envoyé la proposition sans avoir fait valider l'ordre de grandeur budgétaire en amont, donc elle est arrivée hors cadre.",
          "Quand la réponse négative est tombée, j'ai demandé un retour honnête au lieu de relancer, et j'ai noté que le décideur n'avait jamais été dans la boucle.",
        ],
        result:
          "J'ai perdu le deal sur l'exercice, et j'en ai tiré une règle que j'applique depuis : tant que je n'ai pas parlé à la personne qui arbitre le budget, le deal reste en qualification et ne compte pas dans mon pipeline. Mon taux de surprise en fin de trimestre a nettement baissé.",
        learning:
          "Un deal ne se perd presque jamais au closing, il se perd à la qualification. Mon champion me donne l'accès, il ne me donne pas la décision.",
      },
      en: {
        situation:
          "I was working a decentralised network where my contact at head office was convinced and driving from the first conversation. The project moved fast, until the budget decision went up to a level I had never met.",
        task: "Turn head office buy in into a signed commitment before the end of the fiscal year.",
        action: [
          "I mistook enthusiasm for authority: I leaned on a champion without verifying who actually signed.",
          "I kept investing time in the relationship that answered me, instead of chasing the one that decided and did not.",
          "I found out late that the arbitration happened at another level, and I asked for access when the decision was already under way.",
          "I sent the proposal without having the budget range validated upstream, so it landed outside their frame.",
          "When the no came, I asked for honest feedback instead of chasing, and I noted that the decision maker had never been in the loop.",
        ],
        result:
          "I lost the deal for that year, and I took one rule from it that I have applied since: until I have spoken to the person who arbitrates the budget, the deal stays in qualification and does not count in my pipeline. My end of quarter surprises dropped sharply.",
        learning:
          "A deal is almost never lost at closing, it is lost at qualification. My champion gives me access, not the decision.",
      },
    },
    metrics: [],
    targetSeconds: 100,
  },

  {
    id: "churn",
    category: "perte",
    difficulty: "classique",
    priority: true,
    prompt: {
      fr: "Raconte-moi une fois où tu as eu un churn.",
      en: "Tell me about a time you had a client churn.",
    },
    whatTheyTest: [
      "Ta lucidité : as-tu vu le signal d'alerte, et à quel moment.",
      "Ta distinction entre relation et usage : un client content qui n'utilise plus part quand même.",
      "Ta responsabilité dans le départ, formulée sans détour.",
      "Ce que tu as changé dans ton suivi pour que ça ne se reproduise pas sur les autres comptes.",
    ],
    traps: [
      "Raconter la reconquête. L'intervieweur cherche la lucidité, pas l'héroïsme.",
      "Dire que le client a changé de stratégie ou réduit son budget : c'est une description, pas une cause.",
      "Prétendre qu'il n'y avait aucun signal. Il y en a toujours un, l'admettre vaut mieux que de le nier.",
      "Confondre la bonne relation avec le décideur et la santé réelle du compte.",
    ],
    followUps: [
      {
        question: "Quel était le premier signal ?",
        how: "Nomme un indicateur d'usage, pas une impression : baisse du nombre d'établissements actifs, publications qui continuent sans investissement, revue de performance repoussée deux fois.",
      },
      {
        question: "Pourquoi ne l'as-tu pas vu plus tôt ?",
        how: "Réponds sans détour : tu suivais le chiffre facturé, qui est un indicateur retardé, et pas l'usage, qui est un indicateur avancé.",
      },
      {
        question: "Comment tu détectes le risque aujourd'hui ?",
        how: "Décris un mécanisme concret et régulier, appliqué à tout le portefeuille, pas un réflexe ponctuel sur les gros comptes.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Aucun churn n'est documenté dans ta banque de faits : remplace le réseau, le montant perdu et la date par un cas réel, et surtout par le signal d'alerte que tu as toi-même manqué. Sans ce détail vécu, la réponse sonne théorique.",
    answer: {
      fr: {
        situation:
          "Un réseau décentralisé investissait depuis plusieurs exercices, avec un cadre négocié au siège et des établissements qui activaient localement. La relation avec le siège était excellente et le chiffre facturé restait stable, jusqu'au non renouvellement.",
        task: "Sécuriser la reconduction d'un compte que je considérais comme acquis.",
        action: [
          "J'ai suivi le mauvais indicateur : je regardais le revenu facturé, qui est un indicateur retardé, au lieu du nombre d'établissements réellement actifs.",
          "J'ai laissé passer deux revues de performance reportées par le siège sans en faire un signal, parce que la relation restait bonne.",
          "Je n'ai pas remarqué que l'usage se concentrait sur une poignée d'établissements, donc que le compte reposait sur quelques personnes et pas sur une habitude de réseau.",
          "Quand mon interlocuteur historique a changé de poste, je n'avais aucune relation de secours au niveau opérationnel pour reprendre le fil.",
          "À l'annonce du non renouvellement, j'ai demandé un débriefing honnête plutôt que de négocier, et j'ai écrit ce qui avait manqué, point par point.",
        ],
        result:
          "J'ai perdu le compte, et j'ai changé ma façon de suivre tout mon portefeuille : je pilote maintenant la couverture, c'est-à-dire le nombre d'établissements actifs par réseau, et je traite toute baisse de cette couverture comme une alerte, même quand le revenu ne bouge pas encore.",
        learning:
          "Un churn ne commence pas le jour du non renouvellement, il commence le jour où l'usage se rétrécit sans que le chiffre bouge. La relation est un indicateur de confort, pas un indicateur de santé.",
      },
      en: {
        situation:
          "A decentralised network had been investing for several years, under a framework agreed at head office with sites activating locally. The relationship at head office was excellent and billed revenue was stable, right up to the non renewal.",
        task: "Secure the renewal of an account I considered safe.",
        action: [
          "I tracked the wrong indicator: I watched billed revenue, which is a lagging measure, instead of the number of sites actually active.",
          "I let two performance reviews be postponed by head office without treating it as a signal, because the relationship still felt good.",
          "I did not notice that usage was concentrating on a handful of sites, meaning the account rested on a few individuals rather than on a network habit.",
          "When my long standing contact moved role, I had no backup relationship at operational level to pick the thread back up.",
          "When the non renewal came, I asked for an honest debrief instead of negotiating, and wrote down what had been missing, point by point.",
        ],
        result:
          "I lost the account, and I changed how I monitor my whole portfolio: I now track coverage, meaning the number of active sites per network, and I treat any drop in coverage as an alert even when revenue has not moved yet.",
        learning:
          "Churn does not start on the day of non renewal, it starts the day usage narrows while revenue stays flat. The relationship is a comfort indicator, not a health indicator.",
      },
    },
    metrics: [],
    targetSeconds: 105,
  },

  {
    id: "erreur",
    category: "perte",
    difficulty: "classique",
    prompt: {
      fr: "Parle-moi d'une erreur que tu as commise avec un client.",
      en: "Tell me about a mistake you made with a client.",
    },
    whatTheyTest: [
      "Ta capacité à choisir une erreur réelle, avec un coût, et pas une fausse faiblesse.",
      "Ta réaction immédiate : as-tu prévenu avant que le client ne découvre.",
      "Ta gestion de la charge, quand accepter trop devient une faute professionnelle.",
      "Le correctif structurel, pas la promesse de mieux faire.",
    ],
    traps: [
      "Sortir la fausse erreur du perfectionniste ou du trop impliqué. C'est lu instantanément.",
      "Raconter une erreur commise par quelqu'un d'autre et que tu as réparée.",
      "Passer sous silence l'effet sur le client, qui est justement ce qui est évalué.",
      "Se sur excuser. Une erreur assumée se raconte en trois phrases, puis on passe au correctif.",
    ],
    followUps: [
      {
        question: "Comment le client a-t-il réagi ?",
        how: "Sois précis et sobre : dire que le client a très bien pris les choses affaiblit l'erreur. Assume qu'il y a eu un coût de confiance.",
      },
      {
        question: "Comment tu empêches que ça se reproduise ?",
        how: "Décris un mécanisme, pas une intention : un niveau de service annoncé par segment, et un arbitrage explicite quand la charge dépasse la capacité.",
      },
      {
        question: "Tu aurais dû refuser la charge supplémentaire ?",
        how: "Réponds franchement : tu aurais dû l'accepter en négociant le périmètre, pas l'accepter en silence puis dégrader le service.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le contexte de surcharge est réel : cover de neuf mois d'un book National Account Manager, puis six mois sur le book Inside Sales d'une collègue, en plus de ton portefeuille de 817 réseaux parents. L'incident client précis, son déroulé et sa conséquence sont reconstitués : remplace-les par un manquement réel de ta part, daté et nommé.",
    answer: {
      fr: {
        situation:
          "J'ai couvert le book Inside Sales d'une collègue pendant six mois, en plus de mon propre portefeuille de 817 réseaux parents, après avoir déjà assuré neuf mois de cover sur un book de National Account Manager. J'ai accepté sans renégocier le niveau de service que je pouvais tenir.",
        task: "Maintenir la qualité de suivi sur mes comptes pendant que je portais deux portefeuilles.",
        action: [
          "J'ai laissé glisser le suivi d'un compte sans accepter de me l'avouer, en me disant que la relation absorberait le retard.",
          "Je n'ai pas prévenu le client que le rythme de nos points allait changer, donc il l'a constaté avant que je ne le dise, ce qui est la vraie faute.",
          "Quand je m'en suis rendu compte, j'ai appelé au lieu d'écrire, j'ai nommé le manquement sans chercher d'excuse et j'ai donné une date de retour à la normale.",
          "J'ai repris moi-même l'analyse en retard et je l'ai livrée avant la date annoncée, pour que l'engagement suivant soit tenu au-delà de la promesse.",
          "J'ai ensuite arbitré explicitement avec mon management le niveau de service par segment, au lieu de subir la double charge en silence.",
        ],
        result:
          "Le compte est resté, mais j'ai payé un coût de confiance évitable. Depuis, j'annonce à l'avance la cadence que je peux tenir par segment, et je remonte l'arbitrage quand la capacité ne suit pas, ce qui m'a permis de tenir 108 % au Q1 et 133 % au Q2 2026 sans dégrader le suivi.",
        learning:
          "Accepter une surcharge sans renégocier le périmètre n'est pas de l'engagement, c'est une promesse que je ne peux pas tenir. Un client pardonne un délai annoncé, pas un silence.",
      },
      en: {
        situation:
          "I covered a colleague's Inside Sales book for six months on top of my own portfolio of 817 parent networks, after already covering a National Account Manager book for nine months. I accepted without renegotiating the service level I could realistically hold.",
        task: "Keep the quality of follow up on my own accounts while carrying two portfolios.",
        action: [
          "I let follow up slip on one account without admitting it to myself, assuming the relationship would absorb the delay.",
          "I did not warn the client that our cadence would change, so they noticed before I said it, which is the real mistake.",
          "Once I saw it, I called rather than emailed, named the failure without excuses, and gave a date for getting back on track.",
          "I redid the overdue analysis myself and delivered it ahead of the date I had given, so the next commitment was beaten rather than met.",
          "I then arbitrated service levels by segment explicitly with my manager, instead of absorbing the double load in silence.",
        ],
        result:
          "The account stayed, but I paid an avoidable trust cost. Since then I state upfront the cadence I can hold per segment and escalate when capacity does not follow, which is how I delivered 108 percent in Q1 and 133 percent in Q2 2026 without degrading follow up.",
        learning:
          "Taking on overload without renegotiating scope is not commitment, it is a promise I cannot keep. A client forgives a delay that is announced, not a silence.",
      },
    },
    metrics: [
      "Cover de 6 mois du book Inside Sales DCA d'une collègue, en plus du sien",
      "Cover National Account Manager : 9 mois en 2023-24",
      "Book : 817 réseaux parents, 4 584 comptes advertisers",
      "Atteinte : 108 % au Q1 2026, 133 % au Q2 2026",
    ],
    targetSeconds: 105,
  },

  {
    id: "objectif-manque",
    category: "perte",
    difficulty: "piege",
    prompt: {
      fr: "Raconte-moi un trimestre où tu n'as pas atteint ton objectif.",
      en: "Tell me about a quarter where you missed your target.",
    },
    whatTheyTest: [
      "Ton honnêteté sur un chiffre vérifiable : mentir ici est disqualifiant et facile à recouper.",
      "Ton analyse de la cause, qui doit porter sur ta construction de pipeline et pas sur le marché.",
      "Ta réaction pendant le trimestre, pas seulement après.",
      "La preuve que le correctif a fonctionné, chiffrée.",
    ],
    traps: [
      "Répondre que ça n'est jamais arrivé. Tu passes pour quelqu'un qui n'a jamais pris de risque, ou qui ment.",
      "Blâmer la saisonnalité, un budget client gelé ou une réorganisation : ce sont des conditions, pas des causes.",
      "Ne pas savoir chiffrer l'écart. Un senior connaît son pourcentage d'atteinte.",
      "Rester sur le constat sans montrer le trimestre suivant, qui est la seule preuve que tu as corrigé.",
    ],
    followUps: [
      {
        question: "Tu as vu venir le trou combien de temps avant ?",
        how: "Donne un délai concret et ce que tu as fait dès ce moment. Voir tard est une faute de pilotage, le reconnaître vaut mieux que le masquer.",
      },
      {
        question: "Qu'as-tu changé exactement ?",
        how: "Une cause, un correctif, une preuve chiffrée. Ici : dépendance à quelques gros réseaux, élargissement de la couverture, croissance mesurée ensuite.",
      },
      {
        question: "Ton book est très concentré, ce n'est pas un risque ?",
        how: "Assume le fait : sept réseaux font 84 % du book. Puis montre que tu le pilotes, en travaillant la base des comptes qui ne facturent pas encore.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Les chiffres trimestriels sont exacts (2025 : 202, 197, 293 puis 185 K€ ; 2026 : 219, 365 et 298 K€ au 5 septembre). En revanche ton pourcentage d'atteinte par trimestre en 2025 n'est pas dans la banque de faits : vérifie dans ton attainment réel quel trimestre est passé sous 100 %, le creux à 185 K€ est le candidat le plus probable. Si aucun trimestre n'est sous quota, raconte ce creux comme un trimestre sous ta propre barre et dis-le tel quel, ne prétends pas avoir manqué un objectif que tu as atteint.",
    answer: {
      fr: {
        situation:
          "Après un troisième trimestre 2025 à 293 000 euros, mon meilleur de l'année, je suis retombé à 185 000 euros au trimestre suivant, soit un tiers de moins. Sur un book où sept réseaux pèsent 84 % du chiffre, deux décalages d'investissement suffisent à faire un trou.",
        task: "Comprendre ce que j'avais mal construit, et remettre le portefeuille sur une trajectoire qui ne dépende pas de quelques comptes.",
        action: [
          "J'ai regardé ma propre construction de pipeline avant de regarder le marché : j'avais concentré mes efforts sur les réseaux qui facturaient déjà, parce que c'est là que l'effort paie le plus vite.",
          "J'ai constaté le chiffre qui explique tout : sur 817 réseaux parents et 4 584 comptes, seuls 26 réseaux et 633 comptes facturaient réellement sur douze mois.",
          "J'ai changé ma cible d'activité en visant la couverture, c'est-à-dire le nombre de réseaux et d'établissements actifs, et plus seulement le revenu des comptes connus.",
          "J'ai industrialisé la partie qui ne passe pas à l'échelle en one to one, avec des webinars, plus de 20 sessions et plus de 600 franchisés touchés, pour ouvrir des comptes que je n'avais pas le temps de voir un par un.",
          "J'ai repris la discipline de revue de performance sur les comptes dormants, pour détecter les réveils possibles avant qu'un trimestre ne dépende d'un seul deal.",
        ],
        result:
          "Le portefeuille est reparti : 219 000 euros au premier trimestre 2026 puis 365 000 au deuxième, soit 85 % de croissance en glissement annuel sur ce trimestre, et une croissance de book de 38 % à périmètre constant sur janvier à septembre 2026, confirmée par deux méthodes indépendantes à 38,0 % et 39,1 %.",
        learning:
          "Un trimestre manqué se prépare deux trimestres plus tôt, dans le choix des comptes que je travaille. Depuis, je pilote la couverture en même temps que le revenu.",
      },
      en: {
        situation:
          "After a third quarter 2025 at 293,000 euros, my best of the year, I dropped to 185,000 the following quarter, a third lower. On a book where seven networks carry 84 percent of revenue, two delayed investments are enough to create a hole.",
        task: "Understand what I had built badly, and put the portfolio back on a path that does not depend on a few accounts.",
        action: [
          "I looked at my own pipeline construction before looking at the market: I had concentrated my effort on networks already billing, because that is where effort pays fastest.",
          "I faced the number that explains it: out of 817 parent networks and 4,584 advertiser accounts, only 26 networks and 633 accounts actually billed over twelve months.",
          "I changed my activity target to coverage, meaning the number of active networks and sites, rather than revenue from known accounts only.",
          "I industrialised what does not scale one to one, running over 20 webinars reaching more than 600 franchisees, to open accounts I had no time to meet individually.",
          "I put performance reviews back on dormant accounts, to spot possible restarts before a quarter depended on a single deal.",
        ],
        result:
          "The portfolio recovered: 219,000 euros in Q1 2026 and 365,000 in Q2, which is 85 percent year on year growth for that quarter, and 38 percent book growth on a like for like perimeter from January to September 2026, confirmed by two independent methods at 38.0 and 39.1 percent.",
        learning:
          "A missed quarter is built two quarters earlier, in the accounts I choose to work. Since then I manage coverage and revenue at the same time.",
      },
    },
    metrics: [
      "Trimestres 2025 : 202, 197, 293 puis 185 K€",
      "Trimestres 2026 : 219, 365 et 298 K€ au 5 septembre, +8 % YoY au Q1, +85 % au Q2",
      "Book : 817 réseaux parents et 4 584 comptes, dont 26 réseaux et 633 comptes qui facturent sur 12 mois, pour 1,15 M€",
      "Croissance du book : +38 % à périmètre constant sur janvier-septembre 2026 (38,0 % et 39,1 % par deux méthodes)",
      "Sept premiers réseaux : 84 % du book",
    ],
    targetSeconds: 120,
  },

  {
    id: "client-mecontent",
    category: "perte",
    difficulty: "moins-classique",
    prompt: {
      fr: "Comment as-tu récupéré un client mécontent qui menaçait de partir ?",
      en: "How did you win back an unhappy client who was threatening to leave?",
    },
    whatTheyTest: [
      "Ta capacité à écouter avant de défendre, quand la pression est forte.",
      "Ta distinction entre le grief exprimé et le problème réel, qui est rarement le même.",
      "Ton usage de la donnée pour sortir la discussion de l'émotion, sans nier le ressenti.",
      "Ta capacité à t'engager sur du mesurable plutôt que sur des efforts.",
    ],
    traps: [
      "Se défendre dans les premières minutes : le client veut d'abord être entendu.",
      "Offrir une compensation commerciale tout de suite, ce qui valide implicitement que la valeur n'était pas là.",
      "Promettre un résultat que tu ne contrôles pas pour calmer la réunion.",
      "Raconter uniquement la partie où ça se termine bien, sans dire ce qui avait cassé et pourquoi.",
    ],
    followUps: [
      {
        question: "Et si le problème venait vraiment de ton produit ?",
        how: "Dis-le franchement, engage-toi sur ce que tu contrôles, la remontée et le délai de réponse, et ne t'engage pas sur une correction que tu ne maîtrises pas.",
      },
      {
        question: "Comment tu sais que la confiance est revenue ?",
        how: "Par un fait, pas par un ressenti : reprise de l'usage, réouverture du budget, réengagement d'établissements qui s'étaient arrêtés.",
      },
      {
        question: "Comment tu évites d'en arriver là ?",
        how: "Parle de cadence : une revue de performance régulière fait remonter les griefs à temps, pendant qu'ils sont encore des ajustements.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Aucun épisode de client mécontent n'est documenté dans ta banque de faits : remplace le compte, le grief exact et le résultat par un cas réel, avec la mesure qui prouve que la situation est repartie. Sans chiffre de sortie, cette réponse reste un discours de méthode.",
    answer: {
      fr: {
        situation:
          "Un réseau important me demande un point en urgence : les résultats ne sont pas au niveau attendu depuis plusieurs semaines et la reconduction est ouvertement remise en cause. Le message est venu directement du niveau qui arbitre le budget.",
        task: "Comprendre la cause réelle de l'insatisfaction et remettre le compte sur une trajectoire mesurable, sans acheter la paix par un geste commercial.",
        action: [
          "J'ai pris le rendez-vous sous 48 heures et je suis venu sans proposition, uniquement pour écouter et faire préciser chaque grief.",
          "J'ai reformulé ce que j'avais entendu et j'ai fait valider ma reformulation, pour ne pas travailler sur le mauvais problème.",
          "J'ai sorti les chiffres établissement par établissement plutôt que la moyenne du réseau, ce qui a montré que le problème était concentré sur une partie du périmètre et pas général.",
          "Je me suis engagé sur deux actions précises avec une date, et j'ai refusé de m'engager sur ce que je ne contrôlais pas.",
          "J'ai mis en place un point de contrôle court et régulier jusqu'à ce que la courbe reparte, au lieu d'attendre la revue trimestrielle suivante.",
        ],
        result:
          "Le compte a été reconduit, et la mesure de sortie est l'usage : les établissements qui s'étaient arrêtés ont réinvesti, ce qui est la seule preuve que la confiance est revenue.",
        learning:
          "Un client mécontent conteste rarement ce qu'il dit contester. Tant que je n'ai pas segmenté le problème avec des chiffres, je réponds à un ressenti et pas à une cause.",
      },
      en: {
        situation:
          "A major network asked for an urgent meeting: results had been below expectations for several weeks and renewal was openly in question. The message came straight from the level that arbitrates the budget.",
        task: "Find the real cause of the dissatisfaction and put the account back on a measurable path, without buying peace with a commercial gesture.",
        action: [
          "I took the meeting within 48 hours and came with no proposal, only to listen and have every grievance spelled out.",
          "I played back what I had heard and had my summary validated, so I would not solve the wrong problem.",
          "I brought out site by site figures rather than the network average, which showed the problem was concentrated on part of the perimeter, not general.",
          "I committed to two specific actions with a date, and refused to commit on anything I did not control.",
          "I set up a short recurring checkpoint until the curve turned, instead of waiting for the next quarterly review.",
        ],
        result:
          "The account renewed, and the proof was usage: sites that had stopped started investing again, which is the only real evidence that trust came back.",
        learning:
          "An unhappy client rarely disputes what they say they dispute. Until I have segmented the problem with numbers, I am answering a feeling, not a cause.",
      },
    },
    metrics: [],
    targetSeconds: 100,
  },

  {
    id: "mauvaise-nouvelle",
    category: "perte",
    difficulty: "moins-classique",
    prompt: {
      fr: "Comment annonces-tu une mauvaise nouvelle à un client ?",
      en: "How do you deliver bad news to a client?",
    },
    whatTheyTest: [
      "Ta rapidité : une mauvaise nouvelle annoncée tard devient un problème de confiance.",
      "Ton choix du canal et ton courage : appeler plutôt qu'écrire quand c'est sérieux.",
      "Ta capacité à annoncer sans noyer, et à venir avec une option plutôt qu'avec une excuse.",
      "Ta gestion du client comme d'un partenaire adulte, pas comme de quelqu'un à protéger.",
    ],
    traps: [
      "Attendre d'avoir la solution complète avant de prévenir. Le délai coûte plus cher que la nouvelle.",
      "Diluer la nouvelle dans un contexte long : le client doit comprendre en dix secondes.",
      "Faire porter la faute à une autre équipe interne, ce qui affaiblit toute ta maison.",
      "Promettre une compensation exagérée pour faire passer l'inconfort du moment.",
    ],
    followUps: [
      {
        question: "Un exemple concret ?",
        how: "Prépare un cas réel et daté, avec ce que tu as dit dans les trente premières secondes de l'appel. C'est cette phrase d'ouverture que l'intervieweur veut entendre.",
      },
      {
        question: "Et si la nouvelle vient d'une décision interne que tu désapprouves ?",
        how: "Porte la décision sans te désolidariser publiquement. Tu expliques le cadre, tu ne prends pas le client à témoin contre ton entreprise.",
      },
      {
        question: "Comment tu limites la casse ensuite ?",
        how: "Un engagement mesurable et une date de retour, puis un suivi plus serré pendant quelques semaines. La réparation se prouve par la cadence.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Aucune annonce difficile précise n'est documentée dans ta banque de faits : remplace la situation par un cas réel, par exemple une revue de performance où les résultats étaient sous l'attendu, ou un changement de cadre subi par le client, avec la date et l'issue. Garde la méthode, en particulier l'annonce dans les trente premières secondes.",
    answer: {
      fr: {
        situation:
          "Je dois annoncer à un client que ce qui était prévu ne se passera pas comme prévu, et je l'apprends avant lui. J'ai le choix entre prendre le téléphone tout de suite ou attendre d'avoir une solution complète.",
        task: "Annoncer vite, clairement, et sortir de l'appel avec une décision partagée plutôt qu'avec une tension ouverte.",
        action: [
          "J'appelle dans la journée, avant que le client ne le découvre par lui-même, parce que le délai coûte plus cher que la nouvelle.",
          "Je dis la nouvelle dans les trente premières secondes, en une phrase, sans préambule qui laisserait penser que je cherche à l'enrober.",
          "Je donne le fait et sa conséquence concrète pour lui, pas l'explication interne qui ne l'intéresse pas et qui ressemble à une excuse.",
          "J'arrive avec au moins une option et ce qu'elle implique, pour que l'appel se termine sur une décision à prendre et pas sur un constat.",
          "Je conclus par un engagement daté et je le tiens, puis je resserre la cadence de suivi pendant les semaines suivantes.",
        ],
        result:
          "Le sujet reste un incident traité au lieu de devenir un dossier de défiance, et la relation sort renforcée parce que le client sait qu'il apprendra les mauvaises nouvelles par moi en premier.",
        learning:
          "La qualité d'une relation commerciale ne se mesure pas quand tout va bien, elle se mesure au délai entre le moment où j'apprends un problème et le moment où le client l'apprend.",
      },
      en: {
        situation:
          "I have to tell a client that what was planned will not happen as planned, and I know before they do. My choice is to call immediately or wait until I have a full solution.",
        task: "Deliver the news fast and clearly, and end the call with a shared decision rather than open tension.",
        action: [
          "I call the same day, before the client finds out on their own, because the delay costs more than the news.",
          "I say it in the first thirty seconds, in one sentence, with no preamble that would suggest I am dressing it up.",
          "I give the fact and its concrete consequence for them, not the internal explanation, which does not interest them and sounds like an excuse.",
          "I bring at least one option and what it implies, so the call ends on a decision to make rather than on a statement of damage.",
          "I close with a dated commitment, I keep it, and I tighten the follow up cadence for the following weeks.",
        ],
        result:
          "The issue stays an incident that was handled instead of becoming a trust problem, and the relationship comes out stronger because the client knows bad news will reach them from me first.",
        learning:
          "The quality of a commercial relationship is not measured when things go well, it is measured by the delay between the moment I learn about a problem and the moment the client does.",
      },
    },
    metrics: [],
    targetSeconds: 95,
  },
];
