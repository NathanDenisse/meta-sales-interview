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
      "Si tu pars du risque de perte, ou si tu récites le revenu et la date de renouvellement, qui sont des sorties.",
      "Si tu connais la structure économique de ton portefeuille sans ouvrir un fichier.",
      "Si ta méthode produit un renoncement nommé et pas seulement un classement.",
      "Si tu sais dire à quel signal précis un compte remonte dans ta semaine.",
    ],
    traps: [
      "Citer 817 réseaux sans dire tout de suite que 26 facturent : la relance tombe dans la seconde.",
      "Classer par revenu et par date de renouvellement : c'est la réponse moyenne, elle mesure le passé.",
      "Réciter une matrice de manuel. Ils veulent ta décision de lundi matin, pas Eisenhower.",
      "Ne renoncer à rien. Sans renoncement nommé, tu as trié, tu n'as pas priorisé.",
    ],
    followUps: [
      {
        question: "Et si un compte que tu ne suis pas explose ?",
        how: "Donne le déclencheur exact qui le fait remonter, hausse de dépense ou nouveau site qui recrute, et dis en combien de jours tu le vois.",
      },
      {
        question: "Qu'est-ce que tu as arrêté depuis que tu appliques ça ?",
        how: "Nomme un renoncement concret et ce qu'il t'a rendu comme temps. Reste factuel, ne t'excuse pas de la case que tu as vidée.",
      },
      {
        question: "Comment ton manager vérifie-t-il que tu travailles sur les bons comptes ?",
        how: "Ton classement est écrit, daté et discutable en revue de book. Dis où il est visible et à quelle fréquence il change.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Les chiffres du portefeuille sont réels et vérifiables. Les trois signaux de risque et la relecture du lundi sont une mise en forme de ta pratique : garde-les seulement s'ils décrivent ta vraie semaine, sinon remplace-les par les signaux que tu surveilles réellement, en gardant l'ordre risque puis poids.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Début 2026, mon portefeuille comptait 817 réseaux parents et 4 584 comptes advertisers. En mesurant, j'ai vu que 26 réseaux et 633 comptes facturaient réellement sur douze mois, pour 1,15 M€, et que sept réseaux en portaient 84 %.",
        task: "Je devais décider à l'avance où passaient mes heures, au lieu de laisser ma boîte mail le décider chaque matin.",
        action: [
          "J'ai arrêté de classer par revenu : le revenu me disait ce qui s'était déjà produit, pas où ma présence changeait encore quelque chose.",
          "J'ai retenu trois signaux de risque, regardés chaque semaine : un interlocuteur qui change sans passation, une campagne mise en pause qui ne redémarre pas, un établissement qui repasse en publication gratuite.",
          "J'ai donné mes créneaux nominatifs aux réseaux qui portaient un de ces signaux, y compris quand un réseau plus gros et stable demandait le même créneau.",
          "J'ai renoncé au contact individuel sur les 791 parents qui ne contiennent qu'un seul compte, et je les ai couverts autrement : plus de 20 webinars ont touché plus de 600 franchisés, puis 165 e-mails individualisés en août 2026, chacun portant le benchmark local de son établissement.",
          "Je rejoue le classement chaque lundi, pour qu'un compte dont le signal s'éteint redescende sans attendre la fin du trimestre.",
        ],
        result:
          "Le portefeuille a progressé de 38 % à périmètre constant de janvier à septembre 2026, avec 108 % d'atteinte au Q1 et 133 % au Q2. Ce qui reste, c'est que mon classement ne dépend plus des comptes du moment : les mêmes signaux se rejouent sur n'importe quel périmètre.",
        learning:
          "Une méthode de priorisation ne vaut que si elle dit à qui on ne donnera pas de rendez-vous. C'est la partie que j'écris en premier maintenant.",
      },
      en: {
        situation:
          "In early 2026 my book held 817 parent networks and 4,584 advertiser accounts. When I measured it, 26 networks and 633 accounts were actually billing over twelve months, for 1.15M EUR, and seven networks carried 84% of that.",
        task: "I had to decide in advance where my hours went, instead of letting my inbox decide every morning.",
        action: [
          "I stopped ranking by revenue: revenue told me what had already happened, not where my presence still changed something.",
          "I kept three risk signals and reviewed them weekly: a counterpart who changes with no handover, a paused campaign that never restarts, a site that goes back to posting for free.",
          "I gave my named recurring slots to the networks carrying one of those signals, including when a larger and stable network asked for the same slot.",
          "I gave up individual contact on the 791 parents that hold a single account, and covered them differently: more than 20 webinars reached over 600 franchisees, then 165 individualised emails in August 2026, each carrying the local benchmark of its own site.",
          "I replay the ranking every Monday, so an account whose signal fades moves down without waiting for quarter end.",
        ],
        result:
          "The book grew 38% like for like from January to September 2026, with 108% attainment in Q1 and 133% in Q2. What lasts is that my ranking no longer depends on today's accounts: the same signals apply to any perimeter.",
        learning:
          "A prioritisation method is only worth something if it says who will not get a meeting. That is now the part I write first.",
      },
    },
    script: {
      fr: {
        hook: "Je ne classe pas mes comptes par ce qu'ils pèsent aujourd'hui, mais par la probabilité que je les perde et par l'endroit où ma présence change encore le résultat.",
        body: [
          "Le poids sert à cadrer le terrain, pas à décider. Sept réseaux font 84 % de mon revenu sur douze mois, sur 1,15 M€, et 26 réseaux seulement facturent vraiment. Mais un revenu est une sortie : il dit ce qui s'est passé, pas où je dois être lundi.",
          "Ce que je regarde ensuite, ce sont les signaux qui précèdent une perte. Un interlocuteur qui change sans qu'on me le présente, des réponses qui ralentissent, une campagne en pause qui ne redémarre pas, un établissement qui repasse en publication gratuite. Ces comptes passent devant un compte plus gros et stable, parce que sur le compte stable ma présence ne change rien cette semaine.",
          "Le troisième critère est celui qui me fait renoncer. Sur mes 817 réseaux parents, 791 ne contiennent qu'un seul compte : aucun créneau individuel, et je l'assume devant eux. Ils sont couverts à l'échelle, par webinar et par campagne ciblée. Si l'un d'eux se met à dépenser, il remonte dans la semaine, mais je ne l'attends pas.",
        ],
        closing: "Risque de perte d'abord, effet de ma présence ensuite, poids en dernier. Je peux prendre un compte précis si vous voulez voir comment la décision se prend.",
        keyBeats: [
          "Pas le poids, le risque",
          "84 % dans sept réseaux, mais c'est une sortie",
          "Signaux avancés de perte",
          "Renoncement : 791 parents mono compte",
          "Relecture du lundi",
        ],
      },
      en: {
        hook: "I do not rank my accounts by what they are worth today, but by how likely I am to lose them and by where my presence still changes the outcome.",
        body: [
          "Weight frames the ground, it does not make the decision. Seven networks carry 84% of my trailing twelve month revenue, out of 1.15M EUR, and only 26 networks actually bill. But revenue is an output: it tells me what happened, not where I need to be on Monday.",
          "What I look at next are the signals that come before a loss. A counterpart who changes with no introduction, replies that slow down, a paused campaign that never restarts, a site that goes back to posting for free. Those accounts come ahead of a bigger, stable one, because on the stable account my presence changes nothing this week.",
          "The third criterion is the one that makes me give something up. Of my 817 parent networks, 791 hold a single account: no individual slot, and I say so to them. They are covered at scale, through webinars and targeted campaigns. If one of them starts to spend it moves up within the week, but I am not waiting at its door.",
        ],
        closing: "Loss risk first, where my presence matters second, weight last. I can walk through one account if you want to see how the call is made.",
        keyBeats: [
          "Not weight, risk",
          "84% in seven networks, but that is an output",
          "Leading signals of loss",
          "The trade off: 791 single account parents",
          "Monday re-ranking",
        ],
      },
    },
    metrics: [
      "817 réseaux parents et 4 584 comptes, dont 26 réseaux et 633 comptes qui facturent sur 12 mois",
      "791 parents sur 817 ne contiennent qu'un seul compte",
      "1,15 M€ de revenu sur 12 mois, 84 % dans les 7 premiers réseaux",
      "+38 % à périmètre constant de janvier à septembre 2026",
      "108 % d'atteinte au Q1 2026, 133 % au Q2 2026",
      "Plus de 20 webinars, plus de 600 franchisés",
      "165 e-mails individualisés en août 2026",
    ],
    targetSeconds: 90,
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
      "Si tu raisonnes en nombre d'établissements atteints par heure, ou en nombre de rendez-vous tenus.",
      "Si tu acceptes que la majorité de tes comptes ne te verra jamais, et si tu sais le leur dire.",
      "Si tu utilises l'intermédiaire comme un levier de démultiplication plutôt que comme un obstacle.",
      "Si tu mesures un format à l'échelle en pipeline ouvert, et pas en nombre de participants.",
    ],
    traps: [
      "Répondre que tu travailles le soir : ils testent un arbitrage, pas ton endurance.",
      "Promettre que tu appelles tout le monde. Avec 4 584 comptes, l'intervieweur fait le calcul devant toi.",
      "Parler d'automatisation sans dire où est parti le temps récupéré.",
      "Décrire un contournement de l'intermédiaire : dans un environnement où une part du business passe par lui, c'est un signal de sortie.",
    ],
    followUps: [
      {
        question: "Combien de comptes touches-tu vraiment dans un trimestre ?",
        how: "Donne un ordre de grandeur assumé, puis sépare nettement le contact individuel du contact à l'échelle. N'arrondis pas vers le haut.",
      },
      {
        question: "Comment évites-tu de rater le prochain gros compte caché dans la longue traîne ?",
        how: "Décris le signal que tu surveilles, dépense ou volume d'offres publiées, et la règle qui le fait repasser en contact direct.",
      },
      {
        question: "Que dis-tu au client qui se plaint de ne jamais te voir ?",
        how: "Donne-lui son canal et son délai de réponse, pas une excuse. Un autre mode de service se défend, un abandon ne se défend pas.",
      },
    ],
    basis: "vecu",
    format: "script",
    answer: {
      fr: {
        situation:
          "Sur le book DCA, j'ai 4 584 comptes advertisers sur 817 réseaux parents, dont 791 ne contiennent qu'un seul compte. À 60 à 80 démonstrations et revues de performance par mois, je touchais une fraction du portefeuille.",
        task: "Je devais couvrir un book impossible à traiter en un à un, sans laisser au hasard la valeur des gros réseaux.",
        action: [
          "J'ai mesuré avant de décider : 26 réseaux et 633 comptes facturent réellement sur douze mois, donc le reste ne mérite pas le même format de contact.",
          "J'ai réservé le temps individuel aux sept réseaux qui font 84 % du revenu, Accor, Fédération ADMR, MERCI+ et Family Sphere, Groupe Saint-Gatien, Mousquetaires, Système U et Babychou, chacun avec un interlocuteur nommé.",
          "Sur les réseaux décentralisés, j'ai arrêté de vendre établissement par établissement et je regroupe les sites d'une même région dans un engagement unique, ce qui divise le nombre de conversations sans diviser le budget.",
          "Sur les réseaux adressés par un intermédiaire, Système U via Ideuzo et Matière Grise, Family Sphere via Tomorhow, je forme l'intermédiaire au lieu du client final, parce qu'il parle à des dizaines d'établissements que je ne verrai jamais.",
          "J'ai couvert la longue traîne à l'échelle : plus de 20 webinars pour plus de 600 franchisés, puis 165 e-mails individualisés en août 2026, chacun portant le benchmark local de son établissement.",
        ],
        result:
          "Le portefeuille a progressé de 38 % à périmètre constant de janvier à septembre 2026, avec 108 % d'atteinte au Q1 et 133 % au Q2. Ce qui reste, c'est que je choisis d'abord le format de contact, ensuite l'agenda.",
        learning:
          "Sur un book large, la compétence n'est pas la vitesse, c'est le choix du format de contact. Et un format à l'échelle ne se défend devant un manager que s'il est chiffré en pipeline ouvert.",
      },
      en: {
        situation:
          "On the DCA book I carry 4,584 advertiser accounts on 817 parent networks, 791 of which hold a single account. At 60 to 80 demos and performance reviews a month, I was touching a fraction of the portfolio.",
        task: "I had to cover a book that cannot be served one to one, without leaving the value of the large networks to chance.",
        action: [
          "I measured before deciding: 26 networks and 633 accounts actually bill over twelve months, so the rest does not deserve the same contact format.",
          "I reserved individual time for the seven networks that make 84% of revenue, Accor, the ADMR federation, MERCI+ and Family Sphere, Groupe Saint-Gatien, Mousquetaires, Systeme U and Babychou, each with a named counterpart.",
          "On decentralised networks I stopped selling site by site and now group the sites of one region into a single commitment, which divides the number of conversations without dividing the budget.",
          "On networks reached through an intermediary, Systeme U via Ideuzo and Matiere Grise, Family Sphere via Tomorhow, I train the intermediary rather than the end client, because it speaks to dozens of sites I will never meet.",
          "I covered the long tail at scale: more than 20 webinars for over 600 franchisees, then 165 individualised emails in August 2026, each carrying the local benchmark of its own site.",
        ],
        result:
          "The book grew 38% like for like from January to September 2026, with 108% attainment in Q1 and 133% in Q2. What lasts is that I now choose the contact format first and the calendar second.",
        learning:
          "On a wide book the skill is not speed, it is choosing the contact format. And a scaled format only holds up in front of a manager if it is measured in pipeline opened.",
      },
    },
    script: {
      fr: {
        hook: "Avec ce volume, la question n'est plus de savoir qui j'appelle, mais combien d'établissements une heure de mon temps peut atteindre.",
        body: [
          "Je ramène d'abord le book à ce qu'il est. J'ai 4 584 comptes, dont 633 qui facturent sur douze mois, et 791 réseaux parents sur 817 qui ne contiennent qu'un seul compte. Le un à un n'est pas un choix sur cette base, c'est une impossibilité arithmétique.",
          "Je choisis donc un format par niveau, sur le nombre de sites qu'il couvre. Sur un réseau décentralisé, je ne vends plus établissement par établissement : je regroupe une région entière dans un engagement unique. Sur les réseaux adressés par un intermédiaire, je forme l'intermédiaire plutôt que le client final, parce qu'il parle à des dizaines d'établissements que je ne verrai jamais.",
          "Ce que j'abandonne, c'est la visite individuelle sur la longue traîne, et je le dis aux clients concernés. En échange ils ont un format à l'échelle et un délai de réponse : plus de 20 webinars pour plus de 600 franchisés, puis 165 e-mails individualisés en août 2026 avec le benchmark local de chaque établissement. Ce qui repasse en direct, c'est une dépense qui décroche, pas une réclamation.",
        ],
        closing: "Et je chiffre chaque format à l'échelle en pipeline ouvert, pas en nombre de participants, sinon je ne peux pas le défendre en revue de book.",
        keyBeats: [
          "Combien de sites par heure",
          "633 comptes facturent, 791 parents mono compte",
          "Région comme unité, intermédiaire formé",
          "Renoncement : plus de visite individuelle sur la traîne",
          "Format mesuré en pipeline",
        ],
      },
      en: {
        hook: "At that volume the question is no longer who I call, it is how many sites one hour of my time can reach.",
        body: [
          "First I bring the book back to what it really is. I have 4,584 accounts, 633 of which bill over twelve months, and 791 of my 817 parent networks hold a single account. One to one is not a choice on that basis, it is an arithmetic impossibility.",
          "So I choose a format per tier, based on how many sites it covers. On a decentralised network I no longer sell site by site: I group a whole region into a single commitment. On networks reached through an intermediary, I train the intermediary rather than the end client, because it speaks to dozens of sites I will never meet.",
          "What I give up is the individual visit on the long tail, and I say so to the clients concerned. In exchange they get a scaled format and a response time: more than 20 webinars for over 600 franchisees, then 165 individualised emails in August 2026 carrying each site's local benchmark. What comes back to direct contact is spend that breaks, not a complaint.",
        ],
        closing: "And I measure every scaled format in pipeline opened rather than in attendance, because otherwise I cannot defend it in a book review.",
        keyBeats: [
          "How many sites per hour",
          "633 accounts bill, 791 single account parents",
          "Region as the unit, intermediary trained",
          "The trade off: no individual visits on the tail",
          "Format measured in pipeline",
        ],
      },
    },
    metrics: [
      "4 584 comptes, 817 réseaux parents, 791 mono compte",
      "26 réseaux et 633 comptes facturent sur 12 mois",
      "7 réseaux = 84 % du revenu",
      "60 à 80 démonstrations et revues de performance par mois",
      "Plus de 20 webinars, plus de 600 franchisés",
      "165 e-mails individualisés en août 2026",
      "+38 % à périmètre constant, 108 % au Q1 2026, 133 % au Q2 2026",
    ],
    targetSeconds: 90,
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
      "Si ton critère est explicite et défendable, ou si tu sers d'abord celui qui insiste le plus fort.",
      "Si tu sais tenir une conversation d'attente honnête au lieu de promettre deux dates.",
      "Si tu distingues ce que personne ne peut faire à ta place du reste, et si tu délègues le reste.",
      "Si tu assumes le coût de ton arbitrage devant le client qui passe second.",
    ],
    traps: [
      "Dire que tu fais les deux dans la nuit : ce n'est pas de la priorisation, c'est de l'épuisement.",
      "Arbitrer sur le seul revenu : le revenu ne dit pas si la demande est rattrapable.",
      "Laisser le second sans nouvelle jusqu'à ce que tu aies fini. Le silence coûte plus cher que le délai.",
      "Oublier de dire à qui tu as confié l'autre demande et avec quel matériel.",
    ],
    followUps: [
      {
        question: "Et si les deux demandes sont irréversibles ?",
        how: "Alors tu descends au critère suivant, le revenu en jeu, puis au risque de perte. Montre que ta règle a un ordre, pas un seul niveau.",
      },
      {
        question: "Qu'as-tu dit exactement au client qui a attendu ?",
        how: "Donne la phrase et la date de retour que tu as annoncée. Un délai tenu se pardonne, une promesse vague ne se pardonne pas.",
      },
      {
        question: "Qui d'autre pouvait traiter la demande ?",
        how: "Nomme le relais, support, équipe produit ou partenaire de diffusion, et dis ce que tu lui as donné pour qu'il soit autonome.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le contexte est réel : mai 2026, closing de Système U à 438 204 € le 18 mai via Ideuzo et Matière Grise, et Fédération ADMR en montée de charge sur la même période. La simultanéité exacte des deux demandes est reconstituée : vérifie qu'un épisode équivalent a bien eu lieu, sinon remplace par deux comptes où la collision s'est réellement produite, en gardant le critère d'irréversibilité.",
    format: "script",
    answer: {
      fr: {
        situation:
          "En mai 2026, je préparais le closing de Système U, signé 438 204 € le 18 mai via les agences Ideuzo et Matière Grise. La Fédération ADMR, 164 859 € sur douze mois, demandait au même moment une analyse de performance sur son périmètre.",
        task: "Je devais servir deux des sept réseaux qui font 84 % de mon revenu sans faire glisser une signature ni laisser un partenaire ancien sans réponse.",
        action: [
          "J'ai posé mon critère à voix haute avant de choisir : ce qui n'est pas rattrapable passe devant ce qui l'est, et le revenu ne vient qu'après.",
          "J'ai gardé la négociation Système U, parce qu'elle avait une date de comité et aucune reprise possible, et parce que personne d'autre ne portait la relation avec les deux agences.",
          "J'ai appelé ADMR le jour même, avant d'avoir commencé leur analyse, pour annoncer une date de retour ferme et dire pourquoi elle passait après.",
          "J'ai fait produire la partie analytique en avance avec mes routines d'analyse de compte, ce qui a raccourci le délai annoncé au lieu de le subir.",
          "Je suis revenu vers ADMR à la date promise et j'ai utilisé ce rendez-vous pour caler la suite de leur montée en charge.",
        ],
        result:
          "Système U a signé le 18 mai pour 438 204 €, ma plus grosse opportunité, et ADMR a poursuivi sa progression sur mon périmètre, de 74 K€ en 2025 à 139 K€ au 5 septembre 2026. Depuis, j'annonce une seule date et je la tiens, au lieu d'en promettre deux.",
        learning:
          "Ce qui abîme une relation n'est presque jamais l'attente, c'est l'incertitude. Dire le critère devant le client transforme un arbitrage subi en décision qu'il peut comprendre.",
      },
      en: {
        situation:
          "In May 2026 I was closing Systeme U, signed at 438,204 EUR on 18 May through the Ideuzo and Matiere Grise agencies. At the same time the ADMR federation, worth 164,859 EUR over twelve months, asked for a performance analysis on its perimeter.",
        task: "I had to serve two of the seven networks that make 84% of my revenue without slipping a signature or leaving a long standing partner unanswered.",
        action: [
          "I stated my criterion out loud before choosing: what cannot be recovered comes before what can, and revenue only comes after that.",
          "I kept the Systeme U negotiation, because it had a committee date and no second chance, and because nobody else carried the relationship with both agencies.",
          "I called ADMR the same day, before starting their analysis, to give a firm return date and to say why they came second.",
          "I had the analytical work produced ahead of time with my account analysis routines, which shortened the delay I had announced rather than stretching it.",
          "I came back to ADMR on the promised date and used that meeting to plan the next step of their ramp up.",
        ],
        result:
          "Systeme U signed on 18 May for 438,204 EUR, my largest single opportunity, and ADMR kept growing on my perimeter, from 74K EUR in 2025 to 139K EUR as of 5 September 2026. Since then I announce one date and hold it, instead of promising two.",
        learning:
          "What damages a relationship is almost never the wait, it is the uncertainty. Saying the criterion in front of the client turns an imposed trade off into a decision they can understand.",
      },
    },
    script: {
      fr: {
        hook: "Je tranche sur ce qui n'est pas rattrapable. Entre deux demandes, celle dont la date ne se rejoue pas passe devant, même si elle porte moins de revenu.",
        body: [
          "Je commence par transformer les deux demandes en deux dates. Je pose la même question aux deux clients : qu'est-ce qui se passe chez vous si vous l'avez jeudi prochain plutôt que demain. Souvent, l'un des deux n'a pas de date réelle, et le conflit disparaît.",
          "S'il reste, je sépare ce qui est irréversible du reste. Un comité qui se tient cette semaine ne se rattrape pas, une analyse de performance se rattrape à trois jours près. Je garde la partie que personne ne peut porter à ma place, la négociation, et je confie l'autre au support ou au partenaire de diffusion, avec le matériel pour qu'ils soient autonomes.",
          "Le client qui passe second, je l'appelle le jour même, avant d'avoir commencé le travail de l'autre. Je lui dis pourquoi il passe après et je lui donne une date de retour ferme, que je tiens. Le coût de cet arbitrage, c'est un client qui attend trois jours en le sachant, et c'est un coût que je préfère à deux promesses que je ne peux pas honorer.",
        ],
        closing: "Mon critère est donc l'irréversibilité avant le revenu. J'ai un cas de mai 2026 si vous voulez le détail.",
        keyBeats: [
          "L'irréversible avant le revenu",
          "Deux demandes, deux dates réelles",
          "Garder le non délégable, confier le reste",
          "Appeler le second le jour même",
          "Une seule date, tenue",
        ],
      },
      en: {
        hook: "I decide on what cannot be recovered. Between two requests, the one whose date cannot be replayed comes first, even if it carries less revenue.",
        body: [
          "I start by turning both requests into dates. I ask both clients the same question: what happens on your side if you get this next Thursday rather than tomorrow. Often one of them has no real date, and the conflict disappears.",
          "If it remains, I separate what is irreversible from what is not. A committee meeting this week cannot be recovered, a performance analysis can be moved by three days. I keep the part nobody can carry for me, the negotiation, and I hand the other one to support or to the distribution partner, with the material they need to be autonomous.",
          "The client who comes second gets a call the same day, before I have started the other piece of work. I tell them why they come second and I give them a firm return date, which I hold. The cost of that trade off is a client waiting three days and knowing it, and I prefer that cost to two promises I cannot honour.",
        ],
        closing: "So my criterion is irreversibility before revenue. I have a case from May 2026 if you want the detail.",
        keyBeats: [
          "Irreversible before revenue",
          "Two requests, two real dates",
          "Keep what cannot be delegated",
          "Call the second client same day",
          "One date, held",
        ],
      },
    },
    metrics: [
      "Système U : 438 204 € signés le 18 mai 2026",
      "Fédération ADMR : 164 859 € sur 12 mois",
      "ADMR sur son périmètre : 74 K€ en 2025, 139 K€ au 5 septembre 2026",
      "7 réseaux = 84 % du revenu",
    ],
    targetSeconds: 89,
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
      "Si tu sais nommer les leviers qui peuvent encore être décidés et dépensés en vingt et un jours, dans l'ordre.",
      "Si tu convertis un écart en actions chiffrées avec un nom et une date, plutôt qu'en promesse d'effort.",
      "Si ton manager apprend l'écart de toi, et tôt.",
      "Si tu refuses de payer ce trimestre avec le suivant.",
    ],
    traps: [
      "Dire que tu vas remplir le pipeline : en trois semaines, seul ce qui est déjà engagé se transforme.",
      "Proposer une remise généralisée : ton réflexe devient le prix, et tu la paies deux fois.",
      "Attendre la dernière semaine pour annoncer l'écart. C'est le vrai signal d'alarme pour un recruteur.",
      "Compter comme atterri ce qui est signé mais pas dépensé : la prévision citée comme un résultat se repère tout de suite.",
    ],
    followUps: [
      {
        question: "Par quoi tu commences concrètement lundi matin ?",
        how: "Par les budgets de bons de commande déjà signés et pas consommés. C'est de l'argent déjà accordé, c'est le seul levier qui ne demande aucune décision nouvelle.",
      },
      {
        question: "Que dis-tu à ton manager la première semaine ?",
        how: "L'écart chiffré, la liste d'actions avec un nom et une date, et le scénario bas. Pas de promesse, un plan discutable.",
      },
      {
        question: "Et si tu atterris quand même à 90 % ?",
        how: "Explique ce que tu corriges dans la datation de ton forecast, pas ce que tu ressens. Un objectif manqué se rattrape par la méthode.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Les atterrissages sont réels : 108 % au Q1 2026, 133 % au Q2, environ 108 % au Q3 en cours. Le point d'étape à 70 % à trois semaines de la fin est reconstitué, et l'ordre des leviers vient d'un cadrage d'équipe, pas de toi seul : vérifie ton vrai écart à mi-trimestre avant de citer un chiffre, et garde l'ordre des leviers, qui est ce qui se retient.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Au Q1 2026, à trois semaines de la clôture, mon atterrissage projeté laissait un écart net sur mon objectif trimestriel. Le portefeuille était sain, mais les budgets des réseaux étaient décalés, ce qui arrive souvent au premier trimestre.",
        task: "Je devais combler l'écart avec ce qui pouvait réellement être décidé et dépensé en vingt et un jours, sans casser le trimestre suivant.",
        action: [
          "J'ai pris les leviers dans un ordre fixe, du plus certain au moins certain : reliquats de bons de commande déjà signés, montées de budget sur les campagnes en surconsommation, redémarrage des campagnes en pause à fort volume, puis les opportunités en cours.",
          "J'ai écarté tout ce qui dépendait d'un comité postérieur à la clôture, sans le travailler et sans le compter, pour ne pas confondre prévision et atterrissage.",
          "J'ai converti l'écart en une liste courte d'actions, chacune avec un montant, un interlocuteur et une date, revue tous les deux jours.",
          "J'ai prévenu mon manager dès la première des trois semaines, avec l'écart chiffré, cette liste et un scénario bas assumé.",
          "J'ai refusé la remise généralisée et j'ai construit chaque relance sur la performance du compte, en m'appuyant sur les analyses déjà produites par mes routines.",
        ],
        result:
          "Le trimestre a atterri à 108 % de l'objectif, et le Q2 a suivi à 133 %, donc sans avoir été vidé par anticipation. Ce qui reste, c'est que je date désormais mes opportunités par la date de décision du client et non par le moment où j'aimerais les voir signer.",
        learning:
          "Un trimestre en retard est presque toujours un problème de datation, pas de volume de pipeline. Mon forecast sépare maintenant le montant et la date, et c'est la date qui déclenche mes relances.",
      },
      en: {
        situation:
          "In Q1 2026, three weeks from close, my projected landing left a clear gap against my quarterly target. The book was healthy, but network budgets were shifted, which is common in the first quarter.",
        task: "I had to close the gap with what could genuinely be decided and spent within twenty one days, without breaking the following quarter.",
        action: [
          "I took the levers in a fixed order, from the most certain to the least: leftover budget on signed insertion orders, budget increases on campaigns that were overspending, restarting paused high volume campaigns, then live opportunities.",
          "I set aside everything that depended on a committee sitting after close, neither working it nor counting it, so I would not confuse forecast with landing.",
          "I converted the gap into a short list of actions, each with an amount, a named counterpart and a date, reviewed every two days.",
          "I told my manager in the first of those three weeks, with the quantified gap, that list and an explicit downside scenario.",
          "I refused a blanket discount and built every follow up on the account's own performance, using the analyses my routines had already produced.",
        ],
        result:
          "The quarter landed at 108% of target and Q2 followed at 133%, so nothing had been pulled forward. What lasts is that I now date opportunities by the client's decision date rather than by when I would like them to sign.",
        learning:
          "A quarter running late is almost always a dating problem, not a pipeline volume problem. My forecast now separates amount from date, and the date is what triggers my follow ups.",
      },
    },
    script: {
      fr: {
        hook: "À trois semaines, j'arrête de remplir du pipeline. Je ne travaille que ce qui peut être décidé et dépensé avant la clôture, et je le prends dans un ordre fixe.",
        body: [
          "Le premier levier est l'argent déjà accordé et pas encore consommé : les reliquats de bons de commande sur mes gros réseaux, qui ne demandent aucune décision nouvelle. Ensuite les campagnes en surconsommation, où une montée de budget se décide en un appel. Ensuite les campagnes en pause à fort volume, que je redémarre. Les opportunités en cours viennent après, parce qu'elles dépendent d'un comité que je ne tiens pas.",
          "Puis je convertis l'écart en actions chiffrées. Une liste courte, chaque ligne avec un montant, un interlocuteur et une date, revue tous les deux jours. Et je préviens mon manager la première semaine, avec l'écart, la liste et le scénario bas, parce qu'il doit l'apprendre de moi et tôt.",
          "Ce que je refuse, c'est de payer ce trimestre avec le suivant. Pas de remise généralisée pour faire atterrir des signatures, parce que je la paierais deux fois, sur le prix puis sur le trimestre d'après. Les décisions qui tombent après la clôture, je les laisse où elles sont, et je le dis dans mon forecast.",
        ],
        closing: "Et je vise au-dessus de la cible, pas la cible exacte, parce que la dernière semaine réserve toujours une mauvaise surprise.",
        keyBeats: [
          "Ordre fixe des leviers",
          "Reliquats, surconsommation, pauses, puis opportunités",
          "Écart converti en lignes datées",
          "Manager prévenu en semaine un",
          "Renoncement : ne pas tirer le trimestre suivant",
        ],
      },
      en: {
        hook: "With three weeks left I stop building pipeline. I only work what can be decided and spent before close, and I take it in a fixed order.",
        body: [
          "The first lever is money already granted and not yet spent: leftover budget on signed insertion orders across my large networks, which requires no new decision. Then campaigns that are overspending, where a budget increase is agreed in one call. Then paused high volume campaigns, which I restart. Live opportunities come after that, because they depend on a committee I do not control.",
          "Then I convert the gap into quantified actions. A short list, each line with an amount, a named counterpart and a date, reviewed every two days. And I tell my manager in week one, with the gap, the list and the downside scenario, because he should hear it from me and hear it early.",
          "What I refuse is to pay for this quarter with the next one. No blanket discount to land signatures, because I would pay for it twice, once on price and once on the following quarter. Decisions that land after close stay where they are, and I say so in my forecast.",
        ],
        closing: "And I aim above target, not exactly at it, because the last week always holds one bad surprise.",
        keyBeats: [
          "Fixed order of levers",
          "Leftovers, overspend, paused campaigns, then opportunities",
          "Gap turned into dated lines",
          "Manager told in week one",
          "The trade off: no pulling from next quarter",
        ],
      },
    },
    metrics: [
      "108 % d'atteinte au Q1 2026, 133 % au Q2 2026, environ 108 % au Q3 en cours",
      "Cible annuelle portée : 1,5 M€ et plus",
    ],
    targetSeconds: 90,
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
      "Si tu as un test qui tient en deux questions, ou si tu récites une définition.",
      "Si tu protèges un temps non interruptible pour le travail qui produit le revenu.",
      "Si tu reconnais les urgences légitimes et si tu sais nommer celles qui cassent ton plan.",
      "Si tu as supprimé la source des urgences répétitives au lieu de mieux les subir.",
    ],
    traps: [
      "Citer la matrice d'Eisenhower comme si c'était la réponse : ils attendent ton test appliqué à ton book.",
      "Prétendre que tu ignores les urgences : une diffusion arrêtée chez un gros réseau est une urgence réelle.",
      "Ne parler que d'organisation personnelle sans jamais relier ton tri au revenu.",
      "Lister des outils d'automatisation au lieu de dire quelle urgence a cessé d'arriver jusqu'à toi.",
    ],
    followUps: [
      {
        question: "Donne-moi une urgence que tu as choisi d'ignorer.",
        how: "Prends un cas où l'urgence était celle d'un autre, dis à qui tu l'as renvoyée et montre que rien n'a cassé derrière.",
      },
      {
        question: "Qu'est-ce qui casse ton plan sans discussion ?",
        how: "Deux déclencheurs, pas cinq : une diffusion arrêtée chez un de tes sept premiers réseaux, une décision client qui se joue aujourd'hui.",
      },
      {
        question: "Ton automatisation, qu'est-ce qu'elle t'a réellement rendu ?",
        how: "Dis la tâche supprimée et où le temps est parti. Une vingtaine de routines ne vaut rien si tu ne peux pas nommer ce qu'elles ont vidé de ta semaine.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Les routines et le tri automatisé des alertes sont réels, comme la structure du portefeuille. Le test en deux questions et le bloc de début de journée sont une formalisation : vérifie qu'ils décrivent ta vraie journée, sinon réécris-les avec tes blocs réels et garde la revue hebdomadaire des urgences répétées.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Sur un portefeuille de 4 584 comptes, ma boîte mail et les alertes internes produisent en continu des demandes qui se présentent toutes comme urgentes. Je traitais dans l'ordre d'arrivée, et mes journées se remplissaient sans faire avancer les sept réseaux qui portent 84 % du revenu.",
        task: "Je devais trier en quelques secondes, et surtout réduire le nombre d'urgences qui arrivent jusqu'à moi.",
        action: [
          "J'ai posé deux questions à toute demande : la date vient-elle de quelqu'un d'autre que moi, et la demande change-t-elle mon revenu ou ma relation dans les trois mois.",
          "Urgent sans être important, je le renvoie ou je le programme. Important sans être urgent, je lui donne un créneau protégé avant qu'il ne devienne urgent.",
          "J'ai bloqué le début de journée pour l'important non urgent, préparation de proposition, revue de compte, diagnostic, sans ouvrir ma boîte mail pendant ce bloc.",
          "J'ai gardé deux déclencheurs qui cassent le plan sans discussion : une diffusion arrêtée chez un des sept premiers réseaux, une décision client qui se joue dans la journée.",
          "Chaque semaine, je regarde ce qui est revenu plusieurs fois en urgence et je corrige la cause : une vingtaine de tâches récurrentes sont devenues des routines réutilisables, dont le tri des alertes contractuelles et le rafraîchissement du forecast.",
        ],
        result:
          "En déplaçant du temps de la réaction vers la préparation, j'ai tenu 108 % d'atteinte au Q1 et 133 % au Q2 2026 sur un portefeuille de 817 réseaux. Ce qui reste, c'est qu'une urgence hebdomadaire est devenue une routine qui tourne sans moi.",
        learning:
          "L'urgent se reconnaît à sa date, l'important à sa conséquence. Mais la vraie victoire n'est pas de mieux trier, c'est que la demande ne revienne plus.",
      },
      en: {
        situation:
          "On a book of 4,584 accounts, my inbox and internal alerts constantly produce requests that all present themselves as urgent. I used to handle them in arrival order, and my days filled up without moving the seven networks that carry 84% of revenue.",
        task: "I needed to sort in seconds, and above all to reduce the number of urgent items that reach me at all.",
        action: [
          "I set two questions for any request: does the date come from someone other than me, and does it change my revenue or my relationship within three months.",
          "Urgent but not important, I pass it on or schedule it. Important but not urgent, I give it a protected slot before it turns urgent.",
          "I blocked the start of the day for important non urgent work, proposal preparation, account reviews, diagnosis, with my inbox closed during that block.",
          "I kept two triggers that break the plan with no discussion: delivery stopped on one of the top seven networks, and a client decision that happens today.",
          "Every week I look at what came back as urgent several times and fix the cause: around twenty recurring tasks became reusable routines, including contract alert triage and forecast refresh.",
        ],
        result:
          "By shifting time from reaction to preparation I delivered 108% attainment in Q1 and 133% in Q2 2026 on a book of 817 networks. What lasts is that a weekly emergency became a routine that runs without me.",
        learning:
          "Urgent is recognised by its date, important by its consequence. But the real win is not sorting better, it is that the request stops coming back.",
      },
    },
    script: {
      fr: {
        hook: "Avant de trier, je regarde si la demande va revenir. Une urgence qui revient chaque semaine n'est pas une urgence, c'est un défaut de dispositif.",
        body: [
          "Mon test tient en deux questions. La date vient-elle de quelqu'un d'autre que moi, et la demande change-t-elle mon revenu ou ma relation dans les trois mois. Une seule réponse positive ne suffit pas à me faire ouvrir le sujet le matin : urgent sans être important, je le renvoie ou je le programme.",
          "Je protège le début de journée pour l'important qui n'est pas urgent, la préparation d'une proposition, une revue de compte, un diagnostic, et je n'ouvre pas ma boîte mail pendant ce bloc. Deux choses seulement le cassent : une diffusion arrêtée chez un de mes sept premiers réseaux, et une décision client qui se joue aujourd'hui. Le reste attend, y compris ce qu'on m'annonce comme urgent.",
          "La partie qui compte est la sortie du cycle. Chaque semaine, je regarde ce qui est revenu plusieurs fois et je corrige la cause au lieu du symptôme : une vingtaine de tâches récurrentes sont devenues des routines, dont le tri des alertes contractuelles et le rafraîchissement de mon forecast. Ce qui était une urgence hebdomadaire tourne maintenant sans moi.",
        ],
        closing: "L'urgent se reconnaît à sa date, l'important à sa conséquence, et le travail utile est de faire disparaître celles qui se répètent.",
        keyBeats: [
          "Est-ce que ça va revenir",
          "Deux questions : date imposée, effet à trois mois",
          "Bloc du matin, boîte mail fermée",
          "Deux déclencheurs qui cassent le plan",
          "Corriger la cause, pas le symptôme",
        ],
      },
      en: {
        hook: "Before sorting, I check whether the request will come back. Something urgent every week is not an emergency, it is a broken process.",
        body: [
          "My test is two questions. Does the date come from someone other than me, and does the request change my revenue or my relationship within three months. One yes is not enough to open the topic in the morning: urgent but not important, I pass it on or I schedule it.",
          "I protect the start of the day for important work that is not urgent, preparing a proposal, an account review, a diagnosis, and I keep my inbox closed during that block. Only two things break it: delivery stopped on one of my top seven networks, and a client decision that happens today. Everything else waits, including what is presented to me as urgent.",
          "The part that matters is getting out of the cycle. Every week I look at what came back several times and I fix the cause rather than the symptom: around twenty recurring tasks became routines, including contract alert triage and my forecast refresh. What used to be a weekly emergency now runs without me.",
        ],
        closing: "Urgent is recognised by its date, important by its consequence, and the useful work is making the repeat offenders disappear.",
        keyBeats: [
          "Will it come back",
          "Two questions: imposed date, effect within three months",
          "Morning block, inbox closed",
          "Two triggers that break the plan",
          "Fix the cause, not the symptom",
        ],
      },
    },
    metrics: [
      "4 584 comptes, 817 réseaux parents",
      "7 réseaux = 84 % du revenu",
      "Une vingtaine de tâches récurrentes industrialisées en routines",
      "108 % d'atteinte au Q1 2026, 133 % au Q2 2026",
    ],
    targetSeconds: 91,
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
      "Si ton refus porte sur un critère partageable et pas sur ta charge du moment.",
      "Si tu refuses la forme en gardant le besoin, donc si tu arrives avec une contre-proposition datée.",
      "Si tu dis le coût réel de ton refus au lieu de sortir de l'histoire intact.",
      "Si tu as prévenu les bonnes personnes avant qu'elles ne l'apprennent autrement.",
    ],
    traps: [
      "Choisir un non sans enjeu : si le refus ne t'a rien coûté, l'histoire ne prouve rien.",
      "Raconter un non brutal, ou transformer le client en adversaire. La manière est notée autant que la décision.",
      "Dire non sans contre-proposition chiffrée et datée : c'est la version commerciale du silence.",
      "Terminer sans dire ce que le client a fait ensuite, ni ce que tu as changé en amont depuis.",
    ],
    followUps: [
      {
        question: "Qu'est-ce que ce non t'a coûté ?",
        how: "Nomme le coût, un client contrarié, un délai de signature, un périmètre perdu. Un refus sans coût n'intéresse personne.",
      },
      {
        question: "Comment aurais-tu pu éviter d'en arriver là ?",
        how: "Montre le cadrage que tu poses maintenant plus tôt, avant que le client n'écrive son plan. C'est la partie ownership de la réponse.",
      },
      {
        question: "Et si le client avait insisté ?",
        how: "Tu exposes la conséquence chiffrée, puis tu exécutes la décision du client en cadrant la mesure. Tu n'es pas là pour gagner l'échange.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Le cadre est réel : la Fédération ADMR est sur ton périmètre, 164 859 € sur douze mois, et ta trajectoire y passe de 74 K€ en 2025 à 139 K€ au 5 septembre 2026. L'épisode de refus lui-même n'est pas documenté dans ta banque de faits, et le mécanisme du budget concentré vient d'un cas interne porté par un autre commercial : vérifie que tu as bien tenu cette conversation, sinon remplace par un refus que tu peux dater, par exemple la charge supplémentaire demandée pendant les six mois où tu couvrais déjà le book Inside Sales d'une collègue. Ne cite jamais les chiffres du cas interne comme les tiens.",
    answer: {
      fr: {
        situation:
          "En 2026, une fédération ADMR de mon périmètre voulait répartir son budget de sponsorisation à parts égales sur toutes ses antennes et me demandait de construire le plan sur cette base. Le réseau ADMR pesait 164 859 € sur douze mois.",
        task: "Je devais refuser le plan sans refuser le budget, face à une fédération qui avait déjà pris sa décision en interne.",
        action: [
          "J'ai commencé par demander ce que la répartition égale devait prouver. La réponse était qu'aucune antenne ne devait se sentir oubliée, ce qui est un objectif politique et pas un objectif de recrutement.",
          "J'ai sorti la donnée par antenne : à ce budget par site, aucune ne devenait visible sur ses métiers en tension, donc le plan garantissait de n'avoir rien à démontrer en fin d'année.",
          "J'ai dit non à l'étalement et oui au montant : le même budget concentré sur un nombre d'antennes plafonné, deux à trois annonces par antenne, sur les métiers les plus difficiles.",
          "J'ai dit le coût du refus à voix haute : les antennes non retenues n'auraient rien ce trimestre. J'ai proposé une rotation au trimestre suivant, décidée sur la mesure et pas sur l'ancienneté.",
          "J'ai mis la mesure avant le contrat : je n'ai rouvert la discussion d'engagement qu'avec les résultats du périmètre réduit en main.",
        ],
        result:
          "La fédération a accepté le périmètre réduit pour le même montant, et sa progression s'est poursuivie sur mon périmètre, de 74 K€ en 2025 à 139 K€ au 5 septembre 2026. Depuis, je pose la question du périmètre mesurable avant celle du montant, sur mes fédérations comme sur mes cliniques.",
        learning:
          "Le refus qui tient n'est pas un refus de dépense, c'est un refus de périmètre. Je n'ai pas défendu mon produit, j'ai défendu la possibilité de prouver qu'il fonctionne, et c'est un terrain sur lequel un client ne peut pas me contredire.",
      },
      en: {
        situation:
          "In 2026, one ADMR federation on my perimeter wanted to split its sponsored budget equally across all of its branches and asked me to build the plan on that basis. The ADMR network was worth 164,859 EUR over twelve months.",
        task: "I had to decline the plan without declining the budget, facing a federation that had already made its decision internally.",
        action: [
          "I started by asking what the equal split was meant to prove. The answer was that no branch should feel forgotten, which is a political objective rather than a hiring one.",
          "I brought out the branch level data: at that budget per site, none of them became visible on their hard to fill roles, so the plan guaranteed having nothing to show at year end.",
          "I said no to spreading and yes to the amount: the same budget concentrated on a capped number of branches, two to three job ads each, on the hardest roles.",
          "I said the cost of that refusal out loud: the branches left out would get nothing that quarter. I proposed a rotation for the next quarter, decided on measurement rather than on seniority.",
          "I put measurement before contract: I only reopened the commitment discussion once I had the results of the reduced perimeter in hand.",
        ],
        result:
          "The federation accepted the reduced perimeter for the same amount, and its growth continued on my perimeter, from 74K EUR in 2025 to 139K EUR as of 5 September 2026. Since then I ask about the measurable perimeter before the amount, on my federations as on my clinics.",
        learning:
          "A no that holds is not a refusal to spend, it is a refusal of perimeter. I did not defend my product, I defended the ability to prove it works, and that is ground where a client cannot contradict me.",
      },
    },
    metrics: [
      "Fédération ADMR : 164 859 € sur 12 mois",
      "ADMR sur son périmètre : 74 K€ en 2025, 139 K€ au 5 septembre 2026",
      "6 mois de cover du book Inside Sales d'une collègue, en réserve pour la variante",
    ],
    targetSeconds: 106,
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
      "Si tu distingues le plan d'apprentissage, ce que tu vérifies d'abord, du plan de territoire, où tu concentres.",
      "Si tu nommes les hypothèses que tu testes, plutôt que de décrire un agenda de semaines.",
      "Si tu vas chercher la passation du prédécesseur, la source la plus rapide et la moins chère.",
      "Si tu dis ce que tu arrêtes parmi les habitudes héritées.",
    ],
    traps: [
      "Passer trente jours à analyser : sans conversation client en semaine deux, ton plan n'est pas crédible.",
      "Appeler tout le monde dès le premier jour, avant de savoir qui pèse quoi et qui tient le budget.",
      "Confondre le plan de territoire et le plan d'apprentissage. Ce sont deux livrables, et on te les demande séparément.",
      "Ne rien arrêter : un book repris sans habitude abandonnée reste le book de quelqu'un d'autre.",
    ],
    followUps: [
      {
        question: "Qu'est-ce que tu regardes en tout premier ?",
        how: "La concentration du revenu et la trajectoire par compte contre l'an dernier. C'est ce qui décide de tout le reste du plan.",
      },
      {
        question: "Quel livrable à la fin du mois ?",
        how: "Deux documents distincts : ce que tu as appris et vérifié, et le plan de territoire daté par compte prioritaire. Le second s'écrit avec ton manager.",
      },
      {
        question: "Comment tu gères les clients qui regrettent ton prédécesseur ?",
        how: "Reconnais la relation existante, reprends l'historique avant l'appel, et gagne le droit de proposer en apportant une lecture qu'ils n'avaient pas.",
      },
    ],
    basis: "vecu",
    format: "script",
    answer: {
      fr: {
        situation:
          "J'ai repris deux périmètres qui n'étaient pas les miens : une couverture de National Account Manager de neuf mois en 2023 et 2024 sur un book santé et services à la personne, avec Petits-fils, Shiva et AXA, puis le book Inside Sales d'une collègue pendant six mois, en plus du mien. Des dossiers étaient en cours et personne ne me connaissait.",
        task: "Je devais être utile dès la première semaine sans casser une relation construite par quelqu'un d'autre.",
        action: [
          "J'ai lu la structure économique avant de parler à quiconque : concentration du revenu, comptes qui facturent vraiment, trajectoire contre l'an dernier.",
          "J'ai fait la passation avec le prédécesseur compte par compte, en notant les engagements pris et les sujets sensibles, avant mon premier appel.",
          "En semaine deux, j'ai vérifié quatre choses en conversation : qui tient le budget face à qui porte le sujet, ce que le client sait mesurer lui-même, quelle part de la diffusion passe par un intermédiaire, et où sont les signaux de perte.",
          "J'ai décidé du format de contact par niveau avant de remplir mon agenda : créneaux nominatifs pour les réseaux qui pèsent, format à l'échelle pour le reste.",
          "En fin de mois, j'ai écrit un plan daté par compte prioritaire, partagé avec mon manager, avec ce que j'arrêtais des habitudes héritées.",
        ],
        result:
          "J'ai tenu la couverture National Accounts de neuf mois en plus de mon book, puis deux portefeuilles en parallèle pendant six mois, avec une croissance de 38 % à périmètre constant en 2026. Ce qui reste, c'est un ordre de lecture que je rejoue à chaque reprise de périmètre.",
        learning:
          "Reprendre un book est d'abord un problème de lecture, pas de volume d'appels. Et la tentation, quand on arrive, est de tout continuer pour ne froisser personne.",
      },
      en: {
        situation:
          "I have taken over two perimeters that were not mine: a nine month National Account Manager cover in 2023 and 2024 on a healthcare and home services book, with Petits-fils, Shiva and AXA, then a colleague's Inside Sales book for six months on top of my own. Deals were live and nobody knew me.",
        task: "I had to be useful from week one without damaging a relationship someone else had built.",
        action: [
          "I read the economics before speaking to anyone: revenue concentration, accounts that actually bill, trajectory against last year.",
          "I ran the handover with my predecessor account by account, capturing commitments made and sensitive topics, before my first call.",
          "In week two I verified four things in conversation: who holds the budget versus who carries the topic, what the client can measure itself, how much of the distribution goes through an intermediary, and where the loss signals are.",
          "I decided the contact format per tier before filling my calendar: named slots for the networks that carry weight, a scaled format for the rest.",
          "At the end of the month I wrote a dated plan for each priority account, shared with my manager, including what I was stopping among the inherited habits.",
        ],
        result:
          "I held the nine month National Accounts cover on top of my book, then two portfolios in parallel for six months, with the book growing 38% like for like in 2026. What lasts is a reading order I rerun every time I inherit a perimeter.",
        learning:
          "Taking over a book is first a reading problem, not a call volume problem. And the temptation on arrival is to continue everything so as to upset nobody.",
      },
    },
    script: {
      fr: {
        hook: "Mes trente premiers jours ne servent pas à décider où je concentre, mais à vérifier quatre hypothèses qu'un tableau de bord ne donne pas.",
        body: [
          "La première semaine, je lis et je fais la passation. Concentration du revenu, comptes qui facturent réellement, trajectoire de chacun contre l'an dernier, puis l'historique du prédécesseur compte par compte, les engagements pris et les sujets sensibles. Sur mon portefeuille, cette lecture montre que 26 réseaux sur 817 portent l'essentiel de 1,15 M€.",
          "Les semaines deux et trois servent à tester, pas à présenter. Je vérifie quatre choses en conversation : qui tient le budget face à qui porte le sujet, ce que le client sait mesurer lui-même, quelle part de sa diffusion passe par un intermédiaire ou un flux technique, et quels comptes portent un signal de perte. J'arrive avec une lecture de leur performance, pas un appel de présentation.",
          "La quatrième semaine, j'écris le plan de territoire, un document court : où je concentre, quel format pour le reste, et ce que j'arrête parmi les habitudes héritées. C'est le point que j'ai appris en couvrant un périmètre santé pendant neuf mois : la tentation est de tout continuer pour ne froisser personne, et c'est le plus sûr moyen de ne rien faire avancer.",
        ],
        closing: "Le plan d'apprentissage d'abord, le plan de territoire ensuite, écrit avec le manager pour qu'il soit discutable.",
        keyBeats: [
          "Vérifier avant de concentrer",
          "Semaine 1 : lecture et passation",
          "Quatre hypothèses testées en conversation",
          "Semaine 4 : plan de territoire court",
          "Dire ce que j'arrête",
        ],
      },
      en: {
        hook: "My first thirty days are not there to decide where I concentrate, but to test four assumptions a dashboard does not give me.",
        body: [
          "In week one I read and I run the handover. Revenue concentration, accounts that actually bill, each one's trajectory against last year, then my predecessor's history account by account, the commitments made and the sensitive topics. On my book, that reading shows 26 networks out of 817 carry most of the 1.15M EUR.",
          "Weeks two and three are for testing, not presenting. I verify four things in conversation: who holds the budget versus who carries the topic, what the client can measure itself, how much of its distribution goes through an intermediary or a technical feed, and which accounts carry a loss signal. I arrive with a reading of their performance, not an introduction call.",
          "In week four I write the territory plan, a short document: where I concentrate, which format for everyone else, and what I stop among the inherited habits. That is what I learned covering a healthcare perimeter for nine months: the temptation is to continue everything so as to upset nobody, and that is the surest way to move nothing forward.",
        ],
        closing: "The learning plan first, the territory plan second, written with the manager so that it can be challenged.",
        keyBeats: [
          "Verify before concentrating",
          "Week 1: reading and handover",
          "Four assumptions tested in conversation",
          "Week 4: short territory plan",
          "Say what I stop",
        ],
      },
    },
    metrics: [
      "Couverture National Account Manager de 9 mois en 2023 et 2024, Petits-fils, Shiva, AXA",
      "6 mois de cover du book Inside Sales d'une collègue",
      "26 réseaux sur 817 portent l'essentiel de 1,15 M€",
      "+38 % à périmètre constant en 2026",
    ],
    targetSeconds: 90,
  },
];
