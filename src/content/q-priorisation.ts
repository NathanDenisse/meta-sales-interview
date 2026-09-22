import type { Question } from "../types";

export const qPriorisation: Question[] = [
  {
    id: "prio-methode",
    category: "priorisation",
    difficulty: "classique",
    priority: true,
    prompt: {
      fr: "Comment tu priorises ton portefeuille ?",
      en: "How do you prioritise your book of business?",
    },
    whatTheyTest: [
      "Si tu as une méthode nommée et reproductible, ou seulement de la bonne volonté et une liste de tâches.",
      "Si tu connais la structure économique de ton book par coeur, sans aller chercher un fichier.",
      "Si ta méthode produit des arbitrages, donc des renoncements assumés, et pas seulement un classement.",
      "Si tu sais couvrir la longue traîne au lieu de faire comme si elle n'existait pas.",
    ],
    traps: [
      "Réciter une matrice de manuel sans jamais la brancher sur tes propres chiffres : ils veulent ton book, pas Eisenhower.",
      "Dire que tu commences par les urgences du matin : c'est l'aveu que ta boîte mail pilote ta semaine.",
      "Oublier le chiffre qui justifie tout, 84 % du revenu dans sept réseaux, sinon ta méthode n'a aucune raison d'exister.",
      "Laisser penser que tu abandonnes les petits comptes : dis comment tu les couvres à l'échelle.",
    ],
    followUps: [
      {
        question: "Et si un compte du niveau 3 explose du jour au lendemain ?",
        how: "Montre que le classement se rejoue chaque lundi et que la pente fait remonter un compte sans attendre le trimestre suivant. Donne le déclencheur précis : hausse de dépense, nouveau site qui recrute, changement de contact.",
      },
      {
        question: "Qu'est-ce que tu as arrêté de faire depuis que tu appliques ça ?",
        how: "Nomme un renoncement concret et chiffre le temps récupéré. Un candidat qui ne renonce à rien n'a pas priorisé, il a seulement trié.",
      },
      {
        question: "Comment ton manager sait-il que tu travailles sur les bons comptes ?",
        how: "Parle du forecast et de la revue de book : ton classement est visible, il est discutable, et il porte des dates.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Les chiffres du book sont réels et vérifiables. Le nom de la méthode (poids, pente, fenêtre) et le découpage de la semaine sont une mise en forme : garde-les seulement s'ils décrivent vraiment ta semaine, sinon remplace-les par ta cadence réelle avant l'entretien.",
    answer: {
      fr: {
        situation:
          "Mon portefeuille compte 817 réseaux parents et 4 584 comptes advertisers, mais seuls 26 réseaux et 633 comptes facturent réellement sur douze mois, pour 1,15 M€. Les sept premiers réseaux pèsent 84 % du revenu et 791 parents sur 817 ne contiennent qu'un seul compte.",
        task: "Ma tâche est de produire 1,5 M€ avec 40 heures par semaine, donc de décider à l'avance où passent mes heures au lieu de laisser ma boîte mail le décider.",
        action: [
          "Je note chaque réseau sur trois critères que j'appelle poids, pente, fenêtre : le poids est sa part du revenu sur douze mois, la pente sa trajectoire par rapport à l'an dernier, la fenêtre l'existence d'un événement daté qui rend mon action utile maintenant, fin de bon de commande, saison de recrutement, réunion de franchisés.",
          "Je range le book en trois niveaux : les 26 réseaux qui facturent en niveau 1, les comptes à pente positive mais sans poids en niveau 2, les 791 parents mono compte en niveau 3.",
          "Je bloque la semaine avant qu'elle ne se remplisse : le niveau 1 a des créneaux nominatifs et récurrents, le niveau 2 une cadence trimestrielle, le niveau 3 aucun créneau individuel.",
          "Je couvre le niveau 3 en un à plusieurs plutôt qu'en un à un : plus de 20 webinars ont touché plus de 600 franchisés, ce qu'aucun agenda ne permet en rendez-vous individuels.",
          "J'automatise la préparation pour que le temps aille à la conversation et pas au fichier : je travaille dans Cursor avec Claude connecté à la Data Platform, à Salesforce et à ma boîte mail, et j'ai industrialisé une vingtaine de tâches récurrentes, analyse de compte, refresh du forecast, préparation de rendez-vous, tri des alertes.",
          "Je rejoue le classement chaque lundi : un compte qui perd sa fenêtre redescend, un compte dont la pente s'inverse remonte tout de suite.",
        ],
        result:
          "Le book a progressé de 38 % à périmètre constant sur janvier à septembre 2026 contre 2025, avec 108 % au Q1 et 133 % au Q2 2026. L'effet durable est que la méthode ne dépend pas des comptes du moment : quand le book change, je rejoue les trois critères et j'ai un plan en une heure.",
        learning:
          "Une méthode de priorisation ne vaut que si elle dit ce qu'on ne fera pas. Ces trois critères m'ont surtout servi à arrêter de passer du temps sur des comptes que j'aimais bien mais qui ne bougeaient pas.",
      },
      en: {
        situation:
          "My book holds 817 parent networks and 4,584 advertiser accounts, yet only 26 networks and 633 accounts actually bill over twelve months, for 1.15M EUR. The top seven networks carry 84% of the revenue, and 791 of the 817 parents contain a single account.",
        task: "My job is to deliver 1.5M EUR with 40 hours a week, so I decide in advance where those hours go instead of letting my inbox decide.",
        action: [
          "I score every network on three criteria I call weight, slope and window: weight is its share of trailing twelve month revenue, slope is its trajectory versus last year, window is whether a dated event makes my action useful right now, an ending insertion order, a hiring season, a franchisee convention.",
          "I sort the book into three tiers: the 26 billing networks in tier 1, accounts with a positive slope but no weight yet in tier 2, the 791 single account parents in tier 3.",
          "I block the week before it fills itself: tier 1 gets named recurring slots, tier 2 a quarterly cadence, tier 3 no individual slot at all.",
          "I cover tier 3 one to many rather than one to one: more than 20 webinars reached over 600 franchisees, which no calendar allows through individual meetings.",
          "I automate preparation so the time goes to the conversation and not to the spreadsheet: I work in Cursor with Claude connected to the Data Platform, to Salesforce and to my mailbox, and I industrialised around twenty recurring tasks, account analysis, forecast refresh, meeting prep, alert triage.",
          "I replay the ranking every Monday: an account that loses its window moves down, an account whose slope turns moves up immediately.",
        ],
        result:
          "The book grew 38% like for like from January to September 2026 versus 2025, with 108% attainment in Q1 and 133% in Q2 2026. The lasting effect is that the method does not depend on today's accounts: when the book changes, I rerun the three criteria and have a plan within an hour.",
        learning:
          "A prioritisation method is only worth something if it states what you will not do. Those three criteria mostly helped me stop spending time on accounts I liked but that never moved.",
      },
    },
    metrics: [
      "817 réseaux parents, 4 584 comptes advertisers",
      "26 réseaux et 633 comptes facturent sur 12 mois",
      "1,15 M€ de revenu sur 12 mois",
      "84 % du book dans les 7 premiers réseaux",
      "791 parents sur 817 mono compte",
      "+38 % à périmètre constant janvier à septembre 2026 contre 2025",
      "108 % au Q1 2026, 133 % au Q2 2026",
      "Plus de 20 webinars, plus de 600 franchisés",
    ],
    targetSeconds: 120,
  },
  {
    id: "prio-gros-book",
    category: "priorisation",
    difficulty: "moins-classique",
    priority: true,
    prompt: {
      fr: "Tu as des centaines de comptes et 40 heures par semaine. Comment tu décides où tu passes ton temps ?",
      en: "You have hundreds of accounts and 40 hours a week. How do you decide where your time goes?",
    },
    whatTheyTest: [
      "Si tu supportes l'idée que la majorité de tes comptes ne verra jamais ton visage.",
      "Si tu sais passer du un à un au un à plusieurs quand le book dépasse ce qu'un agenda absorbe.",
      "Si tu mesures ce que rapporte une heure commerciale au lieu de remplir ton calendrier.",
      "Si tu sais dire ce qui arrive aux comptes que tu ne couvres pas individuellement.",
    ],
    traps: [
      "Répondre que tu travailles plus tard le soir : ils testent l'arbitrage, pas l'endurance.",
      "Promettre que tu appelles tout le monde : avec 4 584 comptes le calcul est faux et l'intervieweur le fera devant toi.",
      "Parler d'automatisation sans dire combien de temps elle t'a rendu et où ce temps est parti.",
      "Oublier que la longue traîne produit des signaux : un compte mono site qui triple sa dépense mérite de remonter.",
    ],
    followUps: [
      {
        question: "Combien de comptes touches-tu vraiment dans un trimestre ?",
        how: "Donne un ordre de grandeur assumé et sépare le contact individuel du contact à l'échelle. Assume que le reste passe par du un à plusieurs et du self-serve.",
      },
      {
        question: "Comment évites-tu de rater le prochain gros compte caché dans la longue traîne ?",
        how: "Décris le signal automatique que tu surveilles, hausse de dépense ou de volume d'offres, et la règle qui fait remonter le compte d'un niveau.",
      },
      {
        question: "Que se passe-t-il si un client du niveau 3 se plaint de ne jamais te voir ?",
        how: "Réponds avec le canal que tu lui offres et son délai, pas avec une excuse. Le niveau 3 n'est pas l'abandon, c'est un autre mode de service.",
      },
    ],
    basis: "vecu",
    answer: {
      fr: {
        situation:
          "En arrivant sur le book DCA, je me suis retrouvé avec 4 584 comptes advertisers répartis sur 817 réseaux parents, dont 791 ne contiennent qu'un seul compte. À 60 à 80 démonstrations produit et revues de performance par mois, je touchais une fraction du book et cela se voyait dans mon forecast.",
        task: "Je devais couvrir un book impossible à traiter en un à un sans laisser au hasard la valeur des gros réseaux.",
        action: [
          "J'ai commencé par mesurer plutôt que par ressentir : 26 réseaux et 633 comptes facturent réellement sur douze mois, donc le reste ne mérite pas le même format de contact.",
          "J'ai réservé le temps individuel aux sept réseaux qui font 84 % du revenu, Accor, ADMR, MERCI+ et Family Sphere, Saint-Gatien, Mousquetaires, Système U, Babychou, avec une revue régulière et un interlocuteur nommé.",
          "J'ai basculé la longue traîne sur du un à plusieurs : plus de 20 webinars qui ont touché plus de 600 franchisés, dans un format répétable plutôt qu'un rendez-vous par site.",
          "J'ai industrialisé la préparation dans Cursor avec Claude connecté à la Data Platform, à Salesforce et à ma boîte mail, une vingtaine de tâches récurrentes devenues des routines réutilisables, dont l'analyse de compte et la préparation de rendez-vous.",
          "J'ai gardé une règle simple de remontée : un compte de la longue traîne dont la dépense ou le volume d'offres change nettement repasse en contact individuel.",
        ],
        result:
          "Le book a progressé de 38 % à périmètre constant sur janvier à septembre 2026 contre 2025, et les trimestres sont passés de 202, 197, 293 et 185 K€ en 2025 à 219, 365 et 298 K€ en 2026 au 5 septembre. Ce qui reste, c'est que la préparation qui prenait des heures est devenue automatique, donc le temps gagné va aux comptes qui comptent et pas à la production de fichiers.",
        learning:
          "Avec un book large, la vraie compétence n'est pas la vitesse, c'est le choix du format de contact. Un webinar bien fait vaut trente rendez-vous que je n'aurais jamais eu le temps de tenir.",
      },
      en: {
        situation:
          "When I took over the DCA book I inherited 4,584 advertiser accounts across 817 parent networks, 791 of which hold a single account. At 60 to 80 product demos and performance reviews a month I was still touching a fraction of the book, and my forecast showed it.",
        task: "I had to cover a book that cannot be served one to one without leaving the value of the large networks to chance.",
        action: [
          "I started by measuring instead of guessing: 26 networks and 633 accounts actually bill over twelve months, so the rest does not deserve the same contact format.",
          "I reserved individual time for the seven networks that make 84% of the revenue, Accor, ADMR, MERCI+ and Family Sphere, Saint-Gatien, Mousquetaires, Systeme U, Babychou, each with a regular review and a named counterpart.",
          "I moved the long tail to one to many: more than 20 webinars that reached over 600 franchisees, in a repeatable format rather than one meeting per site.",
          "I industrialised preparation in Cursor with Claude connected to the Data Platform, to Salesforce and to my mailbox, turning around twenty recurring tasks into reusable routines, including account analysis and meeting preparation.",
          "I kept one simple escalation rule: a long tail account whose spend or job volume moves sharply goes back to individual contact.",
        ],
        result:
          "The book grew 38% like for like from January to September 2026 versus 2025, and quarters moved from 202, 197, 293 and 185K EUR in 2025 to 219, 365 and 298K EUR in 2026 as of 5 September. What lasts is that preparation which used to take hours is now automated, so the time saved goes to the accounts that matter rather than to building files.",
        learning:
          "On a wide book the real skill is not speed, it is choosing the contact format. One well built webinar is worth thirty meetings I would never have had time to hold.",
      },
    },
    metrics: [
      "4 584 comptes, 817 réseaux, 791 mono compte",
      "26 réseaux et 633 comptes facturent sur 12 mois",
      "60 à 80 démos et revues de performance par mois",
      "Plus de 20 webinars, plus de 600 franchisés",
      "Trimestres 2025 : 202, 197, 293 et 185 K€",
      "Trimestres 2026 : 219, 365 et 298 K€ au 5 septembre",
      "+38 % à périmètre constant 2026 contre 2025",
    ],
    targetSeconds: 120,
  },
  {
    id: "prio-conflit",
    category: "priorisation",
    difficulty: "classique",
    priority: true,
    prompt: {
      fr: "Deux clients importants te demandent la même chose en même temps. Que fais-tu ?",
      en: "Two important clients ask you for the same thing at the same time. What do you do?",
    },
    whatTheyTest: [
      "Si tu arbitres avec un critère explicite ou si tu improvises selon qui insiste le plus fort.",
      "Si tu sais tenir une conversation d'attente honnête plutôt que de promettre les deux.",
      "Si tu mobilises l'équipe autour de toi au lieu de tout porter seul.",
      "Si tu mesures l'effet de ton arbitrage après coup.",
    ],
    traps: [
      "Dire que tu fais les deux la même nuit : ce n'est pas une réponse de priorisation, c'est une réponse d'épuisement.",
      "Arbitrer uniquement sur le revenu : un intervieweur attend aussi l'échéance et le risque.",
      "Ne pas rappeler le client qui attend : le silence abîme la relation, pas le délai.",
      "Oublier de dire ce que tu as délégué et à qui.",
    ],
    followUps: [
      {
        question: "Et si les deux comptes pèsent exactement le même revenu ?",
        how: "Bascule sur le deuxième critère, l'échéance datée, puis sur le troisième, le risque de perte. Montre que ta règle a un ordre, pas un seul niveau.",
      },
      {
        question: "Comment as-tu annoncé l'attente au deuxième client ?",
        how: "Donne la phrase exacte, avec une date de retour ferme. Un délai annoncé et tenu coûte beaucoup moins cher qu'une promesse vague.",
      },
      {
        question: "Qui d'autre aurait pu traiter la demande à ta place ?",
        how: "Nomme le relais, support, équipe produit ou agence partenaire, et ce que tu lui as donné pour qu'il soit autonome.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le contexte est réel : mai 2026, closing du deal Système U à 438 204 € et montée en charge d'ADMR sur la même période. La simultanéité exacte des deux demandes et le dialogue d'arbitrage sont reconstitués : vérifie qu'un épisode équivalent a bien eu lieu, sinon remplace par deux comptes où la collision s'est vraiment produite.",
    answer: {
      fr: {
        situation:
          "En mai 2026, je préparais le closing de Système U, qui a signé 438 204 € le 18 mai via les agences Ideuzo et Matière Grise. Au même moment, la Fédération ADMR demandait une analyse de performance sur son périmètre, un réseau qui pesait 164 859 € sur douze mois.",
        task: "Je devais servir deux des sept réseaux qui font 84 % de mon book sans faire glisser une signature ni laisser un partenaire historique sans réponse.",
        action: [
          "J'ai posé mon critère à voix haute avant de choisir : d'abord l'échéance datée et irréversible, ensuite le revenu en jeu, ensuite le risque sur la relation.",
          "J'ai gardé pour moi la partie non délégable, la négociation Système U avec les deux agences, parce qu'elle avait une date de signature et aucun rattrapage possible.",
          "J'ai appelé ADMR le jour même pour annoncer un délai précis plutôt que de laisser filer, avec la date exacte à laquelle ils auraient l'analyse.",
          "J'ai fait produire la partie analytique en avance grâce à mes routines d'analyse de compte automatisées, ce qui a raccourci le délai annoncé au lieu de le subir.",
          "Je suis revenu vers ADMR avec l'analyse promise et j'ai utilisé ce rendez-vous pour caler la suite de leur montée en charge.",
        ],
        result:
          "Système U a signé le 18 mai pour 438 204 €, mon plus gros deal, et ADMR a poursuivi sa progression, de 74 K€ en 2025 à 139 K€ au 5 septembre 2026 sur son périmètre. L'effet durable est que l'annonce d'un délai tenu est devenue ma réponse par défaut : je ne promets plus deux dates que je ne peux pas honorer.",
        learning:
          "Ce qui casse une relation, ce n'est presque jamais l'attente, c'est l'incertitude. Nommer le critère devant le client transforme un arbitrage subi en décision compréhensible.",
      },
      en: {
        situation:
          "In May 2026 I was closing Systeme U, which signed 438,204 EUR on 18 May through the Ideuzo and Matiere Grise agencies. At the same time the ADMR federation asked for a performance analysis on its perimeter, a network worth 164,859 EUR over twelve months.",
        task: "I had to serve two of the seven networks that make 84% of my book without slipping a signature or leaving a long standing partner unanswered.",
        action: [
          "I stated my criterion out loud before choosing: first the dated and irreversible deadline, then the revenue at stake, then the relationship risk.",
          "I kept the part nobody else could carry, the Systeme U negotiation with both agencies, because it had a signing date and no second chance.",
          "I called ADMR the same day to announce a precise delay instead of going quiet, with the exact date they would get the analysis.",
          "I had the analytical work produced ahead of schedule through my automated account analysis routines, which shortened the delay I had announced rather than stretching it.",
          "I came back to ADMR with the promised analysis and used that meeting to plan the next step of their ramp up.",
        ],
        result:
          "Systeme U signed on 18 May for 438,204 EUR, my largest deal, and ADMR kept growing, from 74K EUR in 2025 to 139K EUR as of 5 September 2026 on its perimeter. The lasting effect is that announcing a delay I can keep became my default: I no longer promise two dates I cannot honour.",
        learning:
          "What damages a relationship is almost never the wait, it is the uncertainty. Naming the criterion in front of the client turns an imposed trade off into a decision they can understand.",
      },
    },
    metrics: [
      "Deal Système U 438 204 € signé le 18 mai 2026",
      "ADMR 164 859 € sur 12 mois",
      "ADMR 74 K€ en 2025, 139 K€ au 5 septembre 2026",
      "7 réseaux = 84 % du book",
    ],
    targetSeconds: 110,
  },
  {
    id: "prio-trimestre-en-retard",
    category: "priorisation",
    difficulty: "piege",
    priority: true,
    prompt: {
      fr: "Il reste trois semaines dans le trimestre et tu es à 70 % de ton objectif. Quel est ton plan ?",
      en: "Three weeks left in the quarter and you are at 70% of target. What is your plan?",
    },
    whatTheyTest: [
      "Si tu fais la différence entre ce qui peut encore atterrir en trois semaines et ce qui n'atterrira pas.",
      "Si tu construis un plan chiffré compte par compte au lieu d'annoncer que tu vas pousser fort.",
      "Si tu restes honnête avec ton manager sur l'écart plutôt que de le lui faire découvrir la dernière semaine.",
      "Si tu résistes à la tentation de brûler le trimestre suivant pour sauver celui-ci.",
    ],
    traps: [
      "Répondre que tu vas remplir le pipe : en trois semaines, seul ce qui est déjà engagé peut encore se transformer.",
      "Proposer une remise généralisée : tu montres que ton réflexe est le prix, pas la valeur.",
      "Ne pas parler du manager : cacher un écart de 30 % est le vrai signal d'alarme pour un recruteur.",
      "Oublier l'effet sur le trimestre suivant : tirer des budgets en avance se paye immédiatement après.",
    ],
    followUps: [
      {
        question: "Comment tu choisis les comptes à rappeler en priorité ?",
        how: "Donne le critère : montant en jeu multiplié par probabilité de décision avant la fin du trimestre, pas la sympathie ni la facilité d'appel.",
      },
      {
        question: "Que dis-tu à ton manager la première semaine ?",
        how: "Annonce l'écart chiffré, le plan compte par compte et le scénario bas. Ton manager doit apprendre le risque de toi, et tôt.",
      },
      {
        question: "Et si malgré tout tu atterris à 90 % ?",
        how: "Explique ce que tu as appris sur la datation de ton forecast et ce que tu changes au trimestre suivant. Ne t'excuse pas, corrige la méthode.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Les atterrissages sont réels : 108 % au Q1 2026, 133 % au Q2, environ 108 % au Q3 en cours. Le point d'étape à 70 % à trois semaines de la fin est reconstitué : vérifie l'écart réel à mi trimestre dans ton forecast avant de citer ce chiffre, ou remplace-le par le vrai.",
    answer: {
      fr: {
        situation:
          "Au Q1 2026, à trois semaines de la fin, mon atterrissage projeté laissait un écart significatif sur mon objectif trimestriel. Le book était sain mais les budgets des réseaux étaient décalés, ce qui arrive souvent au premier trimestre.",
        task: "Je devais combler l'écart avec ce qui pouvait réellement atterrir en trois semaines, sans casser le trimestre suivant.",
        action: [
          "J'ai séparé mon pipeline en deux : ce qui pouvait être décidé avant la fin du trimestre, donc un budget déjà voté et un décideur identifié, et le reste, que j'ai laissé au trimestre suivant sans y toucher.",
          "J'ai classé la première liste par montant en jeu multiplié par probabilité de décision, et j'ai travaillé dans cet ordre, en commençant par les réseaux du top 7.",
          "J'ai prévenu mon manager dès la première des trois semaines, avec l'écart chiffré, le plan compte par compte et un scénario bas assumé.",
          "J'ai transformé chaque relance en proposition datée et argumentée sur la performance du compte, en m'appuyant sur les analyses produites par mes routines plutôt que sur une remise.",
          "J'ai suivi l'atterrissage tous les deux jours avec un forecast rafraîchi, pour couper vite ce qui ne bougeait pas.",
        ],
        result:
          "Le trimestre a atterri à 108 %, soit 219 K€ contre 202 K€ au Q1 2025, et le Q2 a suivi à 133 % avec 365 K€, donc sans avoir été vidé par anticipation. L'effet durable est que je date désormais mes opportunités par la date de décision du client et non par mon envie de les voir signer.",
        learning:
          "Un retard de trimestre est presque toujours un problème de datation, pas de volume de pipe. Depuis, mon forecast sépare le montant et la date, et c'est la date qui déclenche mes relances.",
      },
      en: {
        situation:
          "In Q1 2026, three weeks from the end, my projected landing left a significant gap against my quarterly target. The book was healthy but network budgets were shifted, which is common in the first quarter.",
        task: "I had to close the gap with what could genuinely land in three weeks, without breaking the following quarter.",
        action: [
          "I split my pipeline in two: what could be decided before quarter end, meaning an approved budget and an identified decision maker, and everything else, which I left untouched for the next quarter.",
          "I ranked the first list by amount at stake times probability of a decision, and worked in that order, starting with the top seven networks.",
          "I flagged it to my manager in the first of those three weeks, with the quantified gap, the account by account plan and an explicit downside scenario.",
          "I turned every follow up into a dated proposal built on the account's performance data from my automated analyses, rather than on a discount.",
          "I tracked the landing every two days with a refreshed forecast, so I could cut fast whatever was not moving.",
        ],
        result:
          "The quarter landed at 108%, 219K EUR against 202K EUR in Q1 2025, and Q2 followed at 133% with 365K EUR, so nothing had been pulled forward. The lasting effect is that I now date opportunities by the client's decision date rather than by when I want them to sign.",
        learning:
          "A quarter running late is almost always a dating problem, not a pipeline volume problem. My forecast now separates amount from date, and the date is what triggers my follow ups.",
      },
    },
    metrics: [
      "Q1 2026 : 219 K€, 108 % de l'objectif",
      "Q1 2025 : 202 K€",
      "Q2 2026 : 365 K€, 133 %",
      "Cible annuelle 1,5 M€ et plus",
    ],
    targetSeconds: 120,
  },
  {
    id: "prio-urgent-important",
    category: "priorisation",
    difficulty: "moins-classique",
    priority: true,
    prompt: {
      fr: "Comment distingues-tu l'urgent de l'important dans ton quotidien ?",
      en: "How do you tell urgent from important in your day to day?",
    },
    whatTheyTest: [
      "Si tu as un test concret pour trancher, ou si tu récites une définition.",
      "Si tu protèges un temps non interruptible pour le travail qui produit le revenu.",
      "Si tu reconnais que certaines urgences sont réelles et méritent de casser le plan.",
      "Si tu as réduit le volume d'urgences à la source plutôt que de mieux les subir.",
    ],
    traps: [
      "Citer la matrice d'Eisenhower comme si c'était une réponse : ils attendent ton test à toi, appliqué à ton book.",
      "Prétendre que tu ignores les urgences : un compte bloqué en diffusion est une urgence légitime.",
      "Ne parler que d'organisation personnelle sans jamais relier au revenu.",
      "Oublier la partie la plus intéressante, ce que tu as automatisé pour que l'urgence n'arrive plus jusqu'à toi.",
    ],
    followUps: [
      {
        question: "Donne-moi un exemple d'urgence que tu as choisi d'ignorer.",
        how: "Choisis un cas où l'urgence était celle de quelqu'un d'autre, explique ce que tu as renvoyé et vers qui, et montre que rien n'a cassé.",
      },
      {
        question: "Comment ton calendrier reflète-t-il cette distinction ?",
        how: "Décris les blocs protégés et leur horaire. Un candidat crédible montre une semaine structurée, pas une intention.",
      },
      {
        question: "Qu'est-ce qui te fait casser ton plan sans hésiter ?",
        how: "Donne deux déclencheurs précis, par exemple un compte du top 7 dont la diffusion s'arrête, ou une signature qui dépend de toi aujourd'hui.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le tri automatisé des alertes, les routines dans Cursor et la structure du book sont réels. Le test en deux questions et le découpage horaire de la journée sont une formalisation : vérifie qu'ils décrivent ta vraie journée, sinon réécris-les avec tes propres blocs.",
    answer: {
      fr: {
        situation:
          "Sur un book de 4 584 comptes, ma boîte mail et les alertes internes produisent en permanence des demandes qui se présentent toutes comme urgentes. Au début, je traitais dans l'ordre d'arrivée, et mes journées se remplissaient sans faire avancer les sept réseaux qui font 84 % du revenu.",
        task: "Je devais me donner un test rapide pour trier en quelques secondes, et surtout réduire le nombre d'urgences qui arrivent jusqu'à moi.",
        action: [
          "J'applique deux questions à toute demande : est-ce qu'elle porte une date imposée par quelqu'un d'autre, et est-ce qu'elle change mon revenu ou ma relation dans les trois mois.",
          "Urgent sans être important, je délègue ou je programme. Important sans être urgent, je lui donne un créneau protégé avant qu'il ne devienne urgent.",
          "Je bloque la première partie de journée pour l'important non urgent, revue de compte, préparation de proposition, analyse, et je n'ouvre pas mes mails pendant ce bloc.",
          "J'ai automatisé le tri des alertes et des tâches récurrentes avec mes routines dans Cursor, ce qui élimine une grande partie des fausses urgences avant qu'elles ne m'atteignent.",
          "Je garde deux déclencheurs qui cassent le plan sans discussion : un compte du top 7 dont la diffusion s'arrête, et une décision client qui se joue dans la journée.",
          "Une fois par semaine, je regarde ce qui est revenu plusieurs fois en urgence, et je corrige la cause plutôt que de retraiter le symptôme.",
        ],
        result:
          "En déplaçant du temps de la réaction vers la préparation, j'ai tenu 108 % au Q1 et 133 % au Q2 2026 tout en couvrant un book de 817 réseaux. Ce qui reste, c'est que la préparation qui prenait des heures est devenue automatique, donc l'important non urgent a enfin une place dans la semaine.",
        learning:
          "L'urgent se reconnaît à la date, l'important à la conséquence. La vraie victoire n'est pas de mieux trier, c'est de supprimer la source des urgences répétitives.",
      },
      en: {
        situation:
          "On a book of 4,584 accounts, my inbox and internal alerts constantly produce requests that all present themselves as urgent. At first I handled them in arrival order, and my days filled up without moving the seven networks that make 84% of the revenue.",
        task: "I needed a quick test to sort in seconds, and above all to reduce the number of urgent items that reach me at all.",
        action: [
          "I ask two questions of any request: does it carry a date set by someone else, and does it change my revenue or my relationship within three months.",
          "Urgent but not important, I delegate or schedule it. Important but not urgent, I give it a protected slot before it turns urgent.",
          "I block the first part of the day for important non urgent work, account reviews, proposal preparation, analysis, and I keep my inbox closed during that block.",
          "I automated alert triage and recurring tasks with my routines in Cursor, which removes most false alarms before they reach me.",
          "I keep two triggers that break the plan with no discussion: a top seven account whose delivery stops, and a client decision that happens today.",
          "Once a week I look at what came back as urgent several times, and I fix the cause rather than reprocessing the symptom.",
        ],
        result:
          "By shifting time from reaction to preparation I delivered 108% in Q1 and 133% in Q2 2026 while covering a book of 817 networks. What lasts is that preparation which used to take hours is now automated, so important non urgent work finally has a place in the week.",
        learning:
          "Urgent is recognised by its date, important by its consequence. The real win is not sorting better, it is removing the source of repeated urgencies.",
      },
    },
    metrics: [
      "4 584 comptes, 817 réseaux",
      "7 réseaux = 84 % du revenu",
      "108 % au Q1 2026, 133 % au Q2 2026",
      "Une vingtaine de tâches récurrentes automatisées",
    ],
    targetSeconds: 100,
  },
  {
    id: "prio-dire-non",
    category: "priorisation",
    difficulty: "moins-classique",
    priority: true,
    prompt: {
      fr: "Raconte-moi une fois où tu as dû dire non à un client ou à un manager.",
      en: "Tell me about a time you had to say no to a client or to a manager.",
    },
    whatTheyTest: [
      "Si tu sais refuser sans abîmer la relation, donc si tu proposes autre chose en même temps.",
      "Si ton non repose sur un critère partageable et pas sur ta fatigue du moment.",
      "Si tu assumes la conséquence du refus au lieu de la maquiller.",
      "Si tu remontes l'information à la bonne personne avant qu'elle ne l'apprenne autrement.",
    ],
    traps: [
      "Choisir un non sans enjeu : si refuser ne coûtait rien, l'histoire ne prouve rien.",
      "Raconter un non brutal : ils évaluent la manière autant que la décision.",
      "Dire non sans contre proposition datée, c'est la version commerciale du silence.",
      "Terminer sans dire ce que le client ou le manager a fait ensuite.",
    ],
    followUps: [
      {
        question: "Quel a été le coût de ce non ?",
        how: "Donne le coût réel, un client contrarié, un délai, un montant. Un non sans coût n'intéresse personne.",
      },
      {
        question: "Comment aurais-tu pu éviter d'en arriver là ?",
        how: "Montre ce que tu as changé en amont, cadrage plus tôt, attentes posées dès le début, critère annoncé avant la demande.",
      },
      {
        question: "Et si ton manager avait insisté ?",
        how: "Explique que tu exposes les conséquences chiffrées puis que tu exécutes la décision prise. Tu n'es pas là pour gagner l'échange, tu es là pour qu'elle soit prise en connaissance de cause.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Aucun épisode de refus n'est documenté dans ta banque de faits : cette réponse est un canevas, remplace-la par un vrai. Pistes à vérifier dans ton historique : une remise ou un geste commercial que tu as refusé, une demande de couverture supplémentaire pendant les six mois où tu couvrais déjà le book Inside Sales d'une collègue, un client qui voulait étaler son budget sur tous ses sites alors que la donnée disait l'inverse. Garde la structure, remplace la situation, les chiffres et le résultat par les tiens.",
    answer: {
      fr: {
        situation:
          "Pendant six mois, j'ai couvert le book Inside Sales DCA d'une collègue en plus du mien, soit deux portefeuilles en parallèle. On m'a demandé de prendre en plus une série de rendez-vous récurrents sur des comptes sans revenu, au moment où mes sept premiers réseaux représentaient 84 % de mon revenu.",
        task: "Je devais refuser une charge supplémentaire sans passer pour quelqu'un qui se protège, et sans laisser le besoin sans solution.",
        action: [
          "J'ai demandé une journée avant de répondre, pour chiffrer plutôt que réagir à chaud.",
          "J'ai montré le calcul : le temps demandé venait mécaniquement des créneaux réservés aux réseaux qui portent l'essentiel du revenu des deux books.",
          "J'ai dit non à la forme demandée et oui au besoin, en proposant un format à l'échelle, un webinar et une séquence de suivi, là où plus de 20 webinars avaient déjà touché plus de 600 franchisés.",
          "J'ai posé une limite datée et révisable, avec un point à la fin du trimestre pour rouvrir la discussion avec les chiffres.",
          "J'ai prévenu les deux managers concernés le même jour, avec le même document, pour que personne ne l'apprenne par quelqu'un d'autre.",
        ],
        result:
          "Sur les 6 mois, les deux portefeuilles ont été tenus et le besoin a été couvert par un format à l'échelle, dans la continuité des plus de 20 webinars qui ont touché plus de 600 franchisés, au lieu d'une série de rendez-vous individuels. L'effet durable est que le format à l'échelle est devenu la réponse par défaut pour les demandes portant sur des comptes sans revenu.",
        learning:
          "Un non tient quand il est accompagné d'un calcul et d'une alternative. Ce que je refuse, ce n'est jamais la personne ni le besoin, c'est le format proposé.",
      },
      en: {
        situation:
          "For six months I covered a colleague's Inside Sales DCA book on top of my own, so two portfolios in parallel. I was then asked to take on a series of recurring meetings on accounts with no revenue, at a time when my top seven networks represented 84% of my revenue.",
        task: "I had to decline extra load without looking self protective, and without leaving the underlying need unanswered.",
        action: [
          "I asked for a day before answering, so I could quantify rather than react.",
          "I showed the arithmetic: the time requested would come straight out of the slots reserved for the networks carrying most of the revenue of both books.",
          "I said no to the format and yes to the need, proposing a scaled format, a webinar plus a follow up sequence, in a channel where more than 20 webinars had already reached over 600 franchisees.",
          "I set a dated and reviewable boundary, with a checkpoint at quarter end to reopen the discussion with numbers.",
          "I informed both managers the same day, with the same document, so nobody learned it from someone else.",
        ],
        result:
          "Across those 6 months both portfolios were delivered and the need was covered through a scaled format, in line with the 20 plus webinars that reached over 600 franchisees, instead of a series of individual meetings. The lasting effect is that the scaled format became the default answer for requests on accounts with no revenue.",
        learning:
          "A no holds when it comes with arithmetic and an alternative. What I decline is never the person or the need, it is the proposed format.",
      },
    },
    metrics: [
      "6 mois de cover du book Inside Sales DCA d'une collègue",
      "7 réseaux = 84 % du revenu",
      "Plus de 20 webinars, plus de 600 franchisés",
    ],
    targetSeconds: 100,
  },
  {
    id: "prio-nouveau-book",
    category: "priorisation",
    difficulty: "moins-classique",
    priority: true,
    prompt: {
      fr: "On te confie un nouveau portefeuille demain matin. Tes 30 premiers jours ?",
      en: "You are handed a new book of business tomorrow morning. What do your first 30 days look like?",
    },
    whatTheyTest: [
      "Si tu commences par comprendre la structure économique avant de décrocher ton téléphone.",
      "Si tu produis un résultat visible dans le mois, et pas seulement un diagnostic.",
      "Si ton plan vient d'une expérience réelle de reprise de périmètre et pas d'un modèle théorique.",
      "Si tu poses une cadence qui survivra au deuxième mois.",
    ],
    traps: [
      "Passer trente jours à analyser : un plan sans premier rendez-vous en semaine une ne convainc pas.",
      "Appeler tout le monde dès le premier jour sans savoir qui pèse quoi.",
      "Oublier la passation avec le prédécesseur, c'est la source la moins chère et la plus rapide.",
      "Ne rien dire de ce que tu arrêtes : reprendre un book, c'est aussi arrêter des habitudes héritées.",
    ],
    followUps: [
      {
        question: "Qu'est-ce que tu regardes en tout premier ?",
        how: "Dis la concentration du revenu et la trajectoire par compte. C'est ce qui décide de tout le reste du plan.",
      },
      {
        question: "Quel résultat concret à la fin du mois ?",
        how: "Annonce un livrable vérifiable, la liste des comptes prioritaires avec un plan daté, plus les premiers rendez-vous tenus.",
      },
      {
        question: "Comment tu gères les clients qui regrettent ton prédécesseur ?",
        how: "Reconnais la relation existante, reprends l'historique avant l'appel, et gagne le droit de proposer en apportant une lecture qu'ils n'avaient pas.",
      },
    ],
    basis: "vecu",
    answer: {
      fr: {
        situation:
          "J'ai repris deux books qui n'étaient pas les miens, un cover National Account Manager de neuf mois en 2023 et 2024 sur un périmètre santé et services à la personne avec Petits-fils, Shiva et AXA, puis le book Inside Sales DCA d'une collègue pendant six mois, en plus du mien. Dans les deux cas, il y avait des dossiers en cours, des interlocuteurs qui ne me connaissaient pas et aucune marge pour perdre un mois.",
        task: "Ma tâche était d'être utile dès la première semaine sans casser des relations construites par quelqu'un d'autre.",
        action: [
          "Semaine 1, je lis la structure économique avant de parler à qui que ce soit : concentration du revenu, comptes qui facturent vraiment, trajectoire par rapport à l'an dernier. Sur mon propre book, cette lecture montre que 26 réseaux sur 817 portent l'essentiel des 1,15 M€.",
          "Semaine 1 toujours, je fais la passation avec le prédécesseur et je note pour chaque compte majeur l'historique, les engagements pris et les sujets sensibles.",
          "Semaine 2, j'appelle les comptes qui pèsent, dans l'ordre du poids, avec une lecture de leur performance déjà préparée plutôt qu'un appel de présentation.",
          "Semaine 3, je décide du format de contact par niveau et je pose la cadence : créneaux nominatifs pour les gros réseaux, un à plusieurs pour la longue traîne.",
          "Semaine 4, je sors un plan daté par compte prioritaire et je le partage avec mon manager, avec ce que j'arrête parmi les habitudes héritées.",
        ],
        result:
          "Sur le cover NAM de neuf mois, j'ai tenu ce périmètre en plus du mien, et sur la période Inside Sales j'ai couvert deux portefeuilles simultanément sans perdre ma propre trajectoire, avec un book en croissance de 38 % à périmètre constant en 2026. Ce qui reste, c'est un ordre de lecture que je rejoue à chaque reprise de périmètre.",
        learning:
          "Reprendre un book est d'abord un problème de lecture, pas de volume d'appels. Les trente premiers jours servent à savoir où sont les 84 %, ensuite les rendez-vous se choisissent tout seuls.",
      },
      en: {
        situation:
          "I have taken over two books that were not mine: a nine month National Account Manager cover in 2023 and 2024 on a healthcare and home services perimeter with Petits-fils, Shiva and AXA, then a colleague's Inside Sales DCA book for six months on top of my own. In both cases there were live deals, counterparts who did not know me, and no room to lose a month.",
        task: "My job was to be useful from week one without damaging relationships someone else had built.",
        action: [
          "Week 1, I read the economics before speaking to anyone: revenue concentration, accounts that actually bill, trajectory versus last year. On my own book that reading shows 26 networks out of 817 carry most of the 1.15M EUR.",
          "Still week 1, I run the handover with my predecessor and capture, for each major account, the history, the commitments made and the sensitive topics.",
          "Week 2, I call the accounts that carry weight, in order of weight, with a reading of their performance already prepared rather than an introduction call.",
          "Week 3, I decide the contact format per tier and set the cadence: named slots for the large networks, one to many for the long tail.",
          "Week 4, I produce a dated plan for each priority account and share it with my manager, including what I am stopping among the inherited habits.",
        ],
        result:
          "On the nine month NAM cover I held that perimeter on top of my own book, and during the Inside Sales period I covered two portfolios at once without losing my own trajectory, with the book growing 38% like for like in 2026. What lasts is a reading order I rerun every time I inherit a perimeter.",
        learning:
          "Taking over a book is first a reading problem, not a call volume problem. The first thirty days are there to find where the 84% sits, after that the meetings choose themselves.",
      },
    },
    metrics: [
      "Cover NAM de 9 mois en 2023-24, Petits-fils, Shiva, AXA",
      "6 mois de cover du book Inside Sales DCA d'une collègue",
      "26 réseaux sur 817 portent l'essentiel de 1,15 M€",
      "+38 % à périmètre constant en 2026",
    ],
    targetSeconds: 110,
  },
];
