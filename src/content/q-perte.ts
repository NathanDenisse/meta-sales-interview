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
      "Si la cause que tu nommes est une cause que tu contrôlais, ou le prix et le calendrier.",
      "Si tu sais dater le moment exact où le deal a basculé, au lieu de résumer une ambiance.",
      "Si tu as qualifié le circuit de décision et le circuit de facturation, ou seulement l'intérêt.",
      "Si la fin est un changement de méthode ou un simple effort supplémentaire.",
    ],
    traps: [
      "Blâmer le prix, le produit, le marché ou dire que le client n'était pas prêt.",
      "Choisir une perte qui te laisse impeccable : une histoire qui ne te coûte rien ne vaut rien.",
      "Finir par un sauvetage héroïque. La question porte sur la perte, pas sur la reprise.",
      "Rester dans le regret sans donner la règle que tu appliques depuis, sur tous tes deals.",
    ],
    followUps: [
      {
        question: "À quel moment exact le deal était-il déjà perdu ?",
        how: "Donne la date et le fait, pas l'impression : le jour où la direction financière entre dans la boucle et où personne dans la salle ne sait dire qui reçoit la facture.",
      },
      {
        question: "Qu'as-tu changé après ?",
        how: "Une règle vérifiable, pas une intention : deux questions posées dans les dix premières minutes, qui reçoit la facture et combien de temps prend une validation chez eux, et le recouvrement consulté en interne avant le client.",
      },
      {
        question: "Tu es retourné sur ce compte ?",
        how: "Dis à quelle condition tu reviens : avec le circuit de facturation déjà arbitré en interne, jamais avec une nouvelle proposition commerciale.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Aucun deal perdu n'est documenté dans ta banque de faits, donc cette réponse est un canevas et elle ne survivra pas aux relances telle quelle. Remplace le réseau, la date du 12 mars et le montant en jeu par une perte réelle. Garde la cause : la question de facturation que tu n'as pas posée. Le blocage de facturation point de vente par point de vente est bien réel sur tes adhérents, vérifie sur quel compte il t'a effectivement coûté un deal.",
    answer: {
      fr: {
        situation:
          "Début 2025, je travaille un réseau d'adhérents indépendants sur un dispositif de sponsorisation piloté depuis le siège. Mon interlocuteur ressources humaines est acquis dès le deuxième rendez-vous, et je pars du principe que le sujet est vendu.",
        task: "Faire signer un engagement cadre au siège avant la fin de leur exercice.",
        action: [
          "Je savais que chaque point de vente est une entité juridique distincte, et j'ai choisi de garder la question de la facturation pour la fin, pour ne pas alourdir une discussion qui allait bien.",
          "Le basculement est daté : le rendez-vous de cadrage du 12 mars, quand la direction financière entre dans la boucle et demande qui reçoit la facture. Personne n'a la réponse, moi le premier.",
          "J'ai réagi en défendant la valeur du dispositif, alors que le blocage était comptable. J'ai perdu trois semaines à rassurer sur les résultats attendus pendant que la vraie question restait ouverte.",
          "Quand j'ai enfin fait entrer notre recouvrement dans le sujet, la fenêtre budgétaire de l'exercice était fermée.",
          "J'ai arrêté plutôt que de proposer un périmètre réduit qui aurait sauvé la face sans rien tenir, et j'ai demandé un retour franc sur ce qui avait manqué.",
        ],
        result:
          "Je n'ai pas signé, et le réseau est resté sur de l'achat au coup par coup. Depuis, je pose deux questions dans les dix premières minutes d'une qualification : qui reçoit la facture, et combien de temps prend une validation chez eux. Et je fais arbitrer la mécanique de facturation en interne avant d'en parler au client, pas après.",
        learning:
          "Le deal n'est pas mort au closing, il est mort le jour où j'ai décidé que la facturation était un détail administratif.",
      },
      en: {
        situation:
          "In early 2025 I was working a network of independent members on a sponsorship programme steered from head office. My HR contact was sold by the second meeting, and I assumed the deal was won.",
        task: "Get a framework commitment signed at head office before the end of their fiscal year.",
        action: [
          "I knew every store is a separate legal entity, and I chose to keep the invoicing question for later, so as not to weigh down a conversation that was going well.",
          "The turning point has a date: the scoping meeting on 12 March, when finance joined and asked who receives the invoice. Nobody had the answer, me first.",
          "I responded by defending the value of the programme, when the blocker was an accounting one. I lost three weeks reassuring them on expected results while the real question stayed open.",
          "By the time I brought our collections team into the subject, the budget window for that fiscal year had closed.",
          "I stopped rather than propose a smaller scope that would have saved face without holding, and I asked for honest feedback on what had been missing.",
        ],
        result:
          "I did not sign, and the network stayed on one off purchases. Since then I ask two questions in the first ten minutes of qualification: who receives the invoice, and how long an approval takes on their side. And I get the invoicing mechanics settled internally before raising them with the client, not after.",
        learning:
          "The deal did not die at closing, it died the day I decided invoicing was an administrative detail.",
      },
    },
    metrics: [],
    targetSeconds: 101,
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
      "Si tu distingues les signaux avancés des indicateurs de volume, qui arrivent trop tard.",
      "Si ta relation reposait sur une personne, et si tu as vu le risque avant qu'elle parte.",
      "Ta part dans le départ, nommée sans la diluer dans une décision du client.",
      "Ce que tu as changé dans ton suivi, sur tout le portefeuille et pas sur les gros comptes.",
    ],
    traps: [
      "Dire que le client a changé de stratégie ou coupé son budget : c'est une description, pas une cause.",
      "Enchaîner sur la reconquête. L'intervieweur cherche la lucidité, pas l'héroïsme.",
      "Prétendre qu'il n'y avait aucun signal, ou n'en citer qu'un, tardif, comme la baisse du chiffre.",
      "Confondre une bonne relation avec le décideur et la santé réelle du compte.",
    ],
    followUps: [
      {
        question: "Quel a été le premier signal ?",
        how: "Nomme un signal avancé : réponses qui passent de la journée à la semaine, revue de performance repoussée deux fois, changement d'interlocuteur sans présentation, questions sur l'export des données. La baisse du chiffre est un indicateur retardé.",
      },
      {
        question: "Qu'as-tu changé après ?",
        how: "Une carte de relations par réseau, deux contacts minimum, un au budget et un à l'usage, avec la date du dernier échange. Plus une alerte sur quatorze jours de baisse d'usage. Dis-le comme une règle appliquée à tout le book.",
      },
      {
        question: "Tu as tenté de le reprendre ?",
        how: "Réponds par l'ordre, pas par la persévérance : d'abord la présence physique et un sponsor au bon niveau, la discussion budgétaire seulement quand le coût par candidature redescend et se montre. Et reviens avec un périmètre complet, pas avec une offre d'appel.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Aucun churn n'est documenté dans ta banque de faits, donc c'est un canevas : il faut une vraie perte derrière, sinon la relance sur le premier signal te mettra en difficulté. Remplace le réseau, la date de mi-octobre et le nom du poste par un cas réel, et surtout par le signal que tu as toi-même laissé passer.",
    answer: {
      fr: {
        situation:
          "Un réseau que je suivais depuis deux ans investissait chaque année au même niveau, avec un cadre négocié au siège et des établissements qui activaient en local. Toute ma relation tenait sur une personne, la responsable recrutement du siège, qui me répondait dans l'heure.",
        task: "Sécuriser la reconduction d'un compte que je classais en risque faible.",
        action: [
          "Je croyais suivre un compte sain parce que le revenu facturé ne bougeait pas. Je regardais un indicateur retardé.",
          "Le point de bascule est mi-octobre : elle change de poste et je reçois un e-mail d'une remplaçante que personne ne m'a présentée. Je traite ça comme une formalité.",
          "C'est ma part et elle est entière : je savais depuis six semaines qu'elle partait, et je n'ai pas demandé de passation en direct ni ouvert une seconde relation côté opérations.",
          "Les signaux étaient là avant : deux revues de performance repoussées, des réponses qui passent de la journée à la semaine, et l'usage qui se concentrait sur quatre établissements.",
          "Quand la nouvelle responsable m'a demandé les conditions d'arrêt et l'export des candidatures, la décision était déjà instruite. J'ai demandé un débriefing au lieu de renégocier.",
        ],
        result:
          "Le compte n'a pas été reconduit. Depuis, je tiens une carte de relations par réseau : un contact au budget, un contact à l'usage, et la date du dernier échange avec chacun. Une baisse d'usage sur quatorze jours ou un changement d'interlocuteur déclenche un appel, pas une relance par e-mail.",
        learning:
          "Un churn commence quand l'usage se rétrécit sans que le chiffre bouge. Une bonne relation avec une personne n'est pas une couverture de compte.",
      },
      en: {
        situation:
          "A network I had followed for two years was investing at the same level every year, under a framework agreed at head office with sites activating locally. My whole relationship rested on one person, the head of recruitment at head office, who answered me within the hour.",
        task: "Secure the renewal of an account I rated as low risk.",
        action: [
          "I believed I was watching a healthy account because billed revenue was flat. I was watching a lagging indicator.",
          "The turning point is mid October: she moved role and I got an email from a successor nobody had introduced. I treated it as a formality.",
          "That is my share and it is complete: I had known for six weeks she was leaving, and I neither asked for a live handover nor opened a second relationship on the operations side.",
          "The signals were there before: two performance reviews postponed, replies going from same day to same week, and usage narrowing to four sites.",
          "By the time the new manager asked about termination terms and exporting applications, the decision was already built. I asked for a debrief rather than renegotiate.",
        ],
        result:
          "The account was not renewed. Since then I keep a relationship map per network: one contact on budget, one on usage, and the date of my last exchange with each. A fourteen day drop in usage, or a change of contact, triggers a call and not an email follow up.",
        learning:
          "Churn starts when usage narrows while revenue stays flat. A good relationship with one person is not account coverage.",
      },
    },
    metrics: [],
    targetSeconds: 96,
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
      "Si tu choisis une erreur qui a réellement coûté quelque chose, au client et pas seulement à toi.",
      "Si tu as prévenu avant qu'il ne le découvre, et par quel canal.",
      "Si tu sais dire où s'arrête ta capacité, au lieu d'accepter une charge en silence.",
      "Si le correctif est un contrôle qui tourne tout seul, ou une promesse de vigilance.",
    ],
    traps: [
      "La fausse faiblesse du trop impliqué ou du perfectionniste : c'est noté proche de zéro.",
      "Raconter une erreur commise par une autre équipe et que tu as réparée.",
      "Passer sous silence l'effet sur le client, qui est exactement ce qui est évalué.",
      "Se sur excuser. L'erreur se dit en trois phrases, puis on passe au contrôle mis en place.",
    ],
    followUps: [
      {
        question: "Qu'est-ce que ça a coûté au client ?",
        how: "Chiffre-le en recrutement, pas en euros : un trimestre de diffusion perdu sur des postes qu'il avait budgétés. Dire qu'il l'a bien pris affaiblit l'aveu.",
      },
      {
        question: "Qu'as-tu changé après ?",
        how: "Un contrôle daté, pas une intention : consommation vérifiée à quatorze jours sur chaque bon de commande signé, et un budget qui ne part pas déclenche un appel. Précise que c'est devenu une routine, pas un réflexe sur les gros comptes.",
      },
      {
        question: "Tu aurais dû refuser la charge supplémentaire ?",
        how: "Réponds franchement : tu devais l'accepter, mais en négociant le niveau de suivi par segment, pas en l'acceptant en silence puis en le dégradant.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le contexte de surcharge est réel : neuf mois de cover sur un book National Account Manager, puis six mois sur le book Inside Sales d'une collègue, en plus de tes 817 réseaux parents. L'incident du budget signé et non consommé est reconstitué, à partir d'un aveu du même type lu dans une rétrospective d'équipe interne. Remplace-le par un cas à toi, avec le compte, la date et le montant non dépensé : la relance portera sur le montant.",
    answer: {
      fr: {
        situation:
          "Pendant six mois j'ai couvert le book Inside Sales d'une collègue, en plus de mes 817 réseaux parents, après neuf mois de cover sur un book de National Account Manager. J'ai accepté sans renégocier le niveau de suivi que je pouvais tenir.",
        task: "Tenir mes engagements sur mes propres comptes pendant que j'en portais deux.",
        action: [
          "J'ai fait signer un bon de commande et je l'ai traité comme un deal gagné le jour de la signature. Je n'ai pas vérifié que les campagnes démarraient.",
          "Le moment exact est la revue de fin de trimestre : je découvre que le budget n'a presque pas été consommé, parce que les offres du client étaient restées en pause côté outil.",
          "Le coût n'est pas pour moi, il est pour lui : un trimestre de diffusion perdu sur des postes budgétés, alors qu'il avait déjà payé.",
          "J'ai appelé le jour même plutôt que d'écrire, j'ai nommé le manquement sans l'expliquer par ma charge, et j'ai reprogrammé le budget sur la période suivante.",
          "J'ai ensuite arbitré avec mon manager le niveau de suivi par segment, au lieu de porter la double charge en silence.",
        ],
        result:
          "Le compte est resté, mais j'ai payé un coût de confiance évitable. Depuis, une signature n'est plus une fin de course : je contrôle la consommation à quatorze jours sur chaque bon de commande signé, et un budget qui ne part pas déclenche un appel. Je tiens cette discipline sur mes trois trimestres 2026, à 108 %, 133 % et environ 108 % en cours.",
        learning:
          "Un bon de commande signé n'est pas un résultat, c'est une intention. Le résultat, c'est du budget consommé et des candidatures reçues.",
      },
      en: {
        situation:
          "For six months I covered a colleague's Inside Sales book on top of my own 817 parent networks, after nine months covering a National Account Manager book. I accepted without renegotiating the level of follow up I could realistically hold.",
        task: "Keep my commitments on my own accounts while carrying two books.",
        action: [
          "I got a purchase order signed and treated it as a won deal on the day of signature. I never checked that the campaigns actually started.",
          "The exact moment is the end of quarter review: I discovered the budget had barely been spent, because the client's jobs had stayed paused in the tool.",
          "The cost was not mine, it was his: a quarter of exposure lost on budgeted roles, after he had already paid.",
          "I called the same day rather than write, named the failure without explaining it by my workload, and rescheduled the budget onto the following period.",
          "I then agreed follow up levels by segment with my manager, instead of carrying the double load in silence.",
        ],
        result:
          "The account stayed, but I paid an avoidable trust cost. Since then a signature is no longer the finish line: I check spend at fourteen days on every signed purchase order, and a budget that does not start triggers a call. I have held that discipline across my three 2026 quarters, at 108 percent, 133 percent and around 108 percent in progress.",
        learning:
          "A signed purchase order is not a result, it is an intention. The result is budget spent and applications received.",
      },
    },
    metrics: [
      "Cover National Account Manager : 9 mois, 2023 et 2024",
      "Cover du book Inside Sales d'une collègue : 6 mois, en plus du sien",
      "Book : 817 réseaux parents, 4 584 comptes advertisers (snapshot du 5 septembre 2026)",
      "Atteinte 2026 : 108 % au Q1, 133 % au Q2, environ 108 % au Q3 en cours",
    ],
    targetSeconds: 101,
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
      "Ton honnêteté sur un chiffre recoupable : l'écart entre ta cible portée et ton revenu mesuré.",
      "Si tu poses toi-même l'écart gênant, ou si tu attends qu'on le trouve.",
      "Si la cause que tu nommes porte sur ta construction de portefeuille, pas sur le marché.",
      "Si le correctif a un effet mesuré, et si tu cites le chiffre propre plutôt que le chiffre flatteur.",
    ],
    traps: [
      "Répondre que ça n'est jamais arrivé, ou laisser l'écart annuel dans l'ombre en espérant qu'il passe.",
      "Blâmer la saisonnalité, un budget client gelé ou une réorganisation de territoire : ce sont des conditions.",
      "Citer le +46,6 % brut de croissance : il mélange croissance réelle et réassignations de comptes.",
      "Ne pas savoir dire sur quel périmètre et quel exercice porte ta propre base de commission.",
    ],
    followUps: [
      {
        question: "Quelle est la base exacte de ta cible ?",
        how: "Réponds sans détour : le périmètre de ton plan de commission et l'exercice de référence. Si tu ne sais pas le dire au chiffre près, dis-le, ne brode pas.",
      },
      {
        question: "Qu'as-tu changé après ?",
        how: "Une cible de couverture suivie à côté de la cible de revenu, et l'ouverture de comptes industrialisée au lieu d'être faite au fil de l'eau. Donne l'effet : 38 % de croissance à périmètre constant, confirmée par deux méthodes.",
      },
      {
        question: "Ton book est très concentré, ce n'est pas un risque ?",
        how: "Assume le fait, sept réseaux font 84 % du revenu. Puis dis ce que tu fais de la longue traîne et ce que tu as décidé de ne plus travailler du tout.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Tous les chiffres viennent de ta banque de faits, mais la mise en récit est reconstituée : la cible de couverture présentée comme une décision datée est une interprétation de ce que tu as fait, pas une consigne que tu t'es formellement fixée. Vérifie aussi la base exacte de ton plan de commission, périmètre et exercice, parce que c'est la relance certaine : une réponse approximative sur ta propre base coûte plus cher que l'écart lui-même. Et si un trimestre est réellement passé sous 100 %, raconte ce trimestre-là plutôt que l'écart annuel.",
    answer: {
      fr: {
        situation:
          "Sur 2026 mes trois trimestres sont au-dessus de la cible : 108 %, 133 %, et environ 108 % en cours. Je ne vais donc pas inventer un trimestre manqué, mais il y a un écart annuel que je préfère poser moi-même.",
        task: "Ma cible portée est de 1,5 million d'euros et plus. Le revenu facturé mesuré sur mon périmètre assigné sur douze mois est de 1,15 million.",
        action: [
          "Une partie de l'écart est une différence de base : mon plan de commission ne porte pas exactement sur ce périmètre, et la fenêtre de mesure chevauche deux exercices.",
          "L'autre partie est à moi : j'ai fait mes trimestres sur les sept réseaux qui pèsent 84 % de mon revenu, là où l'effort paie le plus vite.",
          "Le signal que j'ai sous-estimé était dans ma base : sur 817 réseaux parents, 26 facturent sur douze mois et 791 ne contiennent qu'un seul compte. Je lisais ça comme une propriété de mon territoire, pas comme un manque d'activité.",
          "J'ai ajouté une cible de couverture à côté de la cible de revenu, un nombre de réseaux à rouvrir suivi comme un engagement chiffré, et j'ai industrialisé l'ouverture : plus de 20 webinars pour plus de 600 franchisés, puis 165 e-mails individualisés en août 2026 portant chacun le benchmark local de son établissement.",
        ],
        result:
          "L'effet est mesuré : 38 % de croissance à périmètre constant de janvier à septembre 2026, par deux méthodes indépendantes, 38,0 % et 39,1 %. Je cite ce chiffre et pas le brut à 46,6 %, qui mélange croissance et réassignations.",
        learning:
          "Un trimestre se construit deux trimestres plus tôt, dans le choix des comptes que je travaille. Depuis, je pilote la couverture en même temps que le revenu.",
      },
      en: {
        situation:
          "In 2026 my three quarters are above target: 108 percent, 133 percent, and around 108 percent in progress. So I am not going to invent a missed quarter, but there is an annual gap I would rather put on the table myself.",
        task: "My carried target is 1.5 million euros and above. Billed revenue measured on my assigned perimeter over twelve months is 1.15 million.",
        action: [
          "Part of the gap is a difference in base: my commission plan does not cover exactly that measured perimeter, and the measurement window straddles two fiscal years.",
          "The rest is mine: I made my quarters on the seven networks that carry 84 percent of my revenue, because that is where effort pays fastest.",
          "The signal I underestimated was in my own base: out of 817 parent networks, 26 bill over twelve months and 791 contain a single account. I read that as a property of my territory rather than as missing activity.",
          "I added a coverage target next to the revenue target, a number of networks to reopen tracked as a committed figure, and I industrialised that opening: more than 20 webinars reaching over 600 franchisees, then 165 individually written emails in August 2026, each carrying the local benchmark of its own site.",
        ],
        result:
          "The effect is measured: 38 percent like for like growth from January to September 2026, by two independent methods, 38.0 and 39.1 percent. I quote that figure and not the raw 46.6 percent, which mixes growth with account reassignments.",
        learning:
          "A quarter is built two quarters earlier, in the accounts I choose to work. Since then I steer coverage and revenue at the same time.",
      },
    },
    metrics: [
      "Cible portée : 1,5 M€ et plus, depuis 2023",
      "Revenu facturé sur 12 mois, périmètre assigné : 1,15 M€ (8 septembre 2025 au 5 septembre 2026)",
      "Atteinte 2026 : 108 % au Q1, 133 % au Q2, environ 108 % au Q3 en cours",
      "Book : 817 réseaux parents et 4 584 comptes, dont 26 réseaux et 633 comptes qui facturent sur 12 mois, et 791 parents à un seul compte",
      "Concentration : les 7 premiers réseaux font 84 % du revenu",
      "Croissance à périmètre constant : +38 % sur janvier-septembre 2026 (38,0 % et 39,1 % par deux méthodes ; brut +46,6 %)",
      "Plus de 20 webinars, plus de 600 franchisés touchés (2022 et 2023)",
      "Campagne ABM d'août 2026 : 165 e-mails individualisés sur deux réseaux de franchise",
    ],
    targetSeconds: 103,
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
      "Si tu sépares le grief exprimé du problème réel, qui est rarement le même.",
      "Si tu reconnais ta part dans le cadrage, plutôt que d'attribuer la déception au produit.",
      "Si tu segmentes avec des chiffres au lieu de répondre à un ressenti par un geste commercial.",
      "Si ton engagement de sortie est mesurable, et si tu dis aussi ce que tu refuses de promettre.",
    ],
    traps: [
      "Se défendre dans les premières minutes : le client veut d'abord être entendu.",
      "Offrir une compensation tout de suite, ce qui valide implicitement que la valeur n'y était pas.",
      "Promettre un volume de recrutement pour calmer la réunion. Tu ne le contrôles pas.",
      "Ne raconter que la partie qui finit bien, sans dire ce que tu avais laissé passer au départ.",
    ],
    followUps: [
      {
        question: "Qu'as-tu changé après ?",
        how: "Le cadrage du premier test ne se délègue plus au client : c'est toi qui fixes les métiers et le plafond d'annonces, et tu refuses un pilote sur le poste le plus dur même quand il insiste.",
      },
      {
        question: "Et si le problème venait vraiment de ton produit ?",
        how: "Dis-le franchement, engage-toi sur ce que tu contrôles, la remontée et le délai de réponse, et pas sur une correction dont tu ne tiens pas la date.",
      },
      {
        question: "Comment sais-tu que la confiance est revenue ?",
        how: "Par un fait, jamais par un ressenti : reprise de l'usage, réengagement d'établissements qui s'étaient arrêtés, réouverture du budget.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Ce n'est pas ton vécu : le mécanisme vient d'un cas interne où un pilote avait été lancé sur le poste le plus contraint du client, avec un score de recommandation de zéro puis de dix après recadrage. Ne le raconte pas à la première personne sans l'avoir vécu. Remplace-le par un épisode réel de ton portefeuille, avec le compte, le métier testé et la mesure de sortie.",
    answer: {
      fr: {
        situation:
          "Une fédération d'un réseau de services à domicile teste la sponsorisation pour la première fois. Je la laisse choisir le poste du test, elle prend le plus difficile de son périmètre, une aide à domicile en zone rurale.",
        task: "Reprendre un compte qui, six semaines plus tard, voulait tout arrêter en disant que le produit ne marchait pas.",
        action: [
          "Ma part est là : j'ai laissé le client définir le périmètre du test pour coller à sa priorité, au lieu de protéger la démonstration.",
          "Le point de bascule est la réunion de fin de pilote, quand le directeur ouvre en disant que ça n'apporte rien. Les candidatures étaient réelles, simplement très peu nombreuses, et sur ce métier aucun dispositif n'aurait produit mieux en six semaines.",
          "Je n'ai pas défendu le produit et je n'ai pas fait d'offre. J'ai sorti les chiffres établissement par établissement au lieu de la moyenne, ce qui a montré que le test portait sur le cas le plus contraint de tout le réseau.",
          "J'ai proposé de redémarrer sur deux métiers à volume, avec un nombre d'annonces plafonné par établissement, et j'ai dit à quelle condition j'arrêterais moi-même le dispositif.",
          "Je me suis engagé sur une mesure à trente jours, et sur rien d'autre : pas de geste commercial, aucune promesse de recrutement.",
        ],
        result:
          "Le compte est reparti sur le second périmètre, et la preuve est dans l'usage : les établissements qui s'étaient arrêtés ont réinvesti. Depuis, c'est moi qui fixe le périmètre d'un premier test, parce qu'un pilote raté grille le produit pour deux ans.",
        learning:
          "Un client mécontent conteste rarement ce qu'il dit contester. Celui-ci ne contestait pas le produit, il contestait un cadrage que j'avais accepté.",
      },
      en: {
        situation:
          "A regional federation of a home care network was trying sponsored jobs for the first time. I let them choose the role for the test, and they picked the hardest one they had, a home care assistant in a rural area.",
        task: "Save an account that, six weeks later, wanted to stop everything on the grounds that the product did not work.",
        action: [
          "My share is there: I let the client define the scope of the test in order to match their priority, instead of protecting the demonstration.",
          "The turning point is the end of pilot meeting, when the director opened by saying it brought nothing. The applications were real, simply very few, and on that role no tool would have done better in six weeks.",
          "I did not defend the product and I did not make an offer. I brought out site by site figures rather than the average, which showed the test had run on the single most constrained case in the network.",
          "I proposed restarting on two high volume roles, with a capped number of jobs per site, and I said under what condition I would stop the programme myself.",
          "I committed to a measurement at thirty days, and to nothing else: no commercial gesture, no promise on hires.",
        ],
        result:
          "The account restarted on the second scope, and the proof is in usage: sites that had stopped invested again. Since then I set the scope of a first test myself, because a failed pilot kills the product for two years.",
        learning:
          "An unhappy client rarely disputes what they say they dispute. This one was not disputing the product, they were disputing a scope I had accepted.",
      },
    },
    metrics: [],
    targetSeconds: 102,
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
      "Ta vitesse : le délai entre le moment où tu apprends et celui où le client apprend.",
      "Ton choix du canal, et si tu sais dire pourquoi l'écrit est le mauvais canal ici.",
      "Si tu arrives avec un arbitrage chiffré, ou avec une explication interne déguisée en excuse.",
      "Ce que tu refuses de promettre, qui en dit plus que ce que tu promets.",
    ],
    traps: [
      "Attendre d'avoir la solution complète avant de prévenir. Le délai coûte plus cher que la nouvelle.",
      "Noyer la nouvelle dans un contexte long : le client doit comprendre en dix secondes.",
      "Faire porter la faute à une autre équipe interne, ce qui affaiblit toute ta maison.",
      "Compenser par un geste commercial pour faire passer l'inconfort du moment.",
    ],
    followUps: [
      {
        question: "Un exemple concret ?",
        how: "Bascule sur le STAR : le retard de mise en ligne, l'appel passé dans l'heure, et la phrase d'ouverture exacte. C'est cette phrase que l'intervieweur veut entendre.",
      },
      {
        question: "Et si la décision vient de chez toi et que tu la désapprouves ?",
        how: "Porte-la sans te désolidariser devant le client. Tu peux dire que tu l'as contestée en interne, jamais la contester devant lui.",
      },
      {
        question: "Qu'est-ce que tu refuses de promettre dans ces appels ?",
        how: "Tout ce que tu ne contrôles pas, à commencer par un volume de candidatures. Tu t'engages sur une date, une reprogrammation, un plafond, et tu t'y tiens.",
      },
    ],
    basis: "canevas",
    basisNote:
      "La méthode est solide et se dit telle quelle, mais le STAR de repli est un canevas : remplace le retard de mise en ligne par une annonce réelle que tu as faite, avec la date et l'issue. Prépare surtout ta phrase d'ouverture mot pour mot, c'est le seul endroit où la relance ira.",
    format: "script",
    script: {
      fr: {
        hook: "Une mauvaise nouvelle se dit vite, en une phrase, et au téléphone. Ce qui abîme une relation, ce n'est pas la nouvelle, c'est le délai entre le moment où je l'apprends et celui où le client l'apprend.",
        body: [
          "Je préviens le jour même, avant d'avoir la solution. C'est contre-intuitif, on a envie d'arriver avec la réparation déjà prête. Mais un client qui l'apprend par lui-même ne juge plus l'incident, il juge ma fiabilité. Et j'appelle : un e-mail sur un sujet sensible se relit dix fois et se transfère.",
          "Je dis la nouvelle dans les trente premières secondes, en une phrase, suivie de sa conséquence concrète pour lui. Pas l'explication interne : elle m'intéresse moi, elle ressemble à une excuse pour lui. Et je ne désigne personne d'autre chez nous : le client n'achète pas une équipe, il achète une entreprise.",
          "Le moment qui compte est celui où j'arbitre. J'arrive avec une option, rarement deux, et je dis ce qu'elle coûte. Je m'engage sur une date, une reprogrammation, un plafond, jamais sur un volume de candidatures. Un engagement que je ne tiens pas transforme un incident en dossier.",
        ],
        closing: "Ensuite je resserre la cadence quelques semaines : la réparation se prouve par la régularité, pas par un geste. Je peux vous donner un cas précis.",
        keyBeats: [
          "Le jour même, par téléphone",
          "La nouvelle en trente secondes",
          "La conséquence, pas l'explication",
          "Une option, et ce qu'elle coûte",
          "Cadence resserrée ensuite",
        ],
      },
      en: {
        hook: "Bad news is delivered fast, in one sentence, and by phone. What damages a relationship is not the news, it is the delay between the moment I learn it and the moment the client does.",
        body: [
          "I tell them the same day, before I have the solution. That feels counterintuitive, you want to arrive with the fix already in hand. But a client who finds out on their own stops judging the incident and starts judging my reliability. And I call: an email on a sensitive subject gets reread ten times and forwarded.",
          "I say the news in the first thirty seconds, in one sentence, followed by its concrete consequence for them. Not the internal explanation: that matters to me, and to them it sounds like an excuse. And I point at nobody else on our side: the client is not buying a team, they are buying a company.",
          "The moment that counts is where I make the trade off. I come with one option, rarely two, and I say what it costs. I commit to a date, a reschedule, a cap, never to a volume of applications. A commitment I fail to keep turns an incident into a case.",
        ],
        closing: "Then I tighten the cadence for a few weeks: repair is proved by regularity, not by a gesture. I can give you a specific case.",
        keyBeats: [
          "Same day, by phone",
          "The news in thirty seconds",
          "The consequence, not the explanation",
          "One option, and its cost",
          "Tighter cadence afterwards",
        ],
      },
    },
    answer: {
      fr: {
        situation:
          "Un client avait calé un démarrage de campagne sur une date de rentrée, avec des postes à pourvoir derrière. J'apprends un jeudi matin que la mise en ligne n'aura pas lieu à cette date, et il ne le sait pas encore.",
        task: "Le prévenir avant qu'il ne le découvre, et sortir de l'appel avec une décision partagée.",
        action: [
          "J'ai appelé dans l'heure, sans attendre d'avoir une solution complète à présenter.",
          "J'ai dit la nouvelle en une phrase dès l'ouverture, puis sa conséquence pour lui : deux semaines de diffusion perdues sur sa fenêtre la plus tendue.",
          "Je n'ai pas détaillé la cause interne et je n'ai désigné personne chez nous.",
          "J'ai proposé une seule option, décaler le budget sur la fenêtre suivante en concentrant le démarrage sur ses postes prioritaires, en disant ce qu'elle coûtait.",
          "Je me suis engagé sur une date de mise en ligne et sur un point hebdomadaire jusqu'à la stabilisation, et sur rien d'autre.",
        ],
        result:
          "Le sujet est resté un incident traité. Le client a pu prévenir ses opérations à temps, ce qui est exactement ce que la vitesse de l'annonce achète.",
        learning:
          "Ce que le client retient n'est pas le problème, c'est de savoir qu'il l'apprendra par moi en premier.",
      },
      en: {
        situation:
          "A client had timed a campaign start on a back to school date, with roles to fill behind it. On a Thursday morning I learn the launch will not happen on that date, and he does not know yet.",
        task: "Tell him before he finds out, and leave the call with a shared decision.",
        action: [
          "I called within the hour, without waiting until I had a complete solution to present.",
          "I said the news in one sentence at the top of the call, then its consequence for him: two weeks of exposure lost in his tightest window.",
          "I did not go into the internal cause and I did not point at anyone on our side.",
          "I offered a single option, moving the budget to the next window and concentrating the start on his priority roles, and I said what it cost.",
          "I committed to a launch date and a weekly checkpoint until things settled, and to nothing else.",
        ],
        result:
          "The subject stayed an incident that was handled. The client was able to warn his operations in time, which is exactly what speed of disclosure buys.",
        learning:
          "What the client remembers is not the problem, it is knowing he will hear it from me first.",
      },
    },
    metrics: [],
    targetSeconds: 85,
  },
];
