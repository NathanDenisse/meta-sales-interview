import type { Question } from "../types";

export const qAnalytique: Question[] = [
  {
    id: "ana-diagnostic",
    category: "analytique",
    difficulty: "classique",
    prompt: {
      fr: "La performance d'un client a chuté le mois dernier. Comment tu diagnostiques ?",
      en: "A client's performance dropped last month. How do you diagnose it?",
    },
    whatTheyTest: [
      "Si tu as un ordre fixe, énoncé à voix haute, ou si tu improvises une intuition.",
      "Si tu vérifies la comparabilité de la période et la mesure avant de parler de performance.",
      "Si tu dis à chaque étape ce qui te ferait changer d'hypothèse.",
      "Si tu t'arrêtes sur une cause, une action et une date, au lieu d'une liste d'hypothèses.",
    ],
    traps: [
      "Sauter au budget dès la première phrase : c'est le réflexe vendeur que tout le monde repère.",
      "Comparer deux périodes de longueurs ou de périmètres différents : tu fabriques la baisse toi-même.",
      "Moyenner des coûts par annonce au lieu de diviser la dépense totale par le total des candidatures.",
      "Donner la bonne intuition sans montrer l'ordre : ici c'est la méthode qui est notée, pas la conclusion.",
    ],
    followUps: [
      {
        question: "Comment tu sais que la baisse est réelle et pas un artefact de mesure ?",
        how: "Redis que la mesure est ton étape deux, avant toute interprétation : suivi modifié, périmètre changé, établissements ajoutés ou retirés. Et donne le calcul que tu refais toi-même.",
      },
      {
        question: "Et si c'est le marché qui a bougé et pas le client ?",
        how: "Compare le même métier et la même zone sur la même fenêtre. Une baisse alignée sur le marché n'appelle pas la même décision qu'une baisse isolée, dis laquelle des deux tu traites en premier.",
      },
      {
        question: "Comment tu annonces la mauvaise nouvelle ?",
        how: "Arrive avec la cause, la mesure et l'option corrective datée. Ce qui fâche un client n'est pas la baisse, c'est d'apprendre qu'elle durait depuis deux mois.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "L'ordre de diagnostic est ta méthode réelle, et Accor est bien ton premier réseau avec 214 476 € sur douze mois. L'épisode de baisse mensuelle est reconstitué : avant l'entretien, remplace-le par un diagnostic que tu as mené, avec le mois, la cause trouvée et l'effet de la correction.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Sur Accor, premier réseau de mon portefeuille avec 214 476 € sur douze mois, les indicateurs de recrutement d'un mois sont ressortis nettement sous ceux du mois précédent. Côté client, la première conclusion était que le dispositif ne fonctionnait plus.",
        task: "Je devais trouver la cause avant de proposer une correction, parce qu'une correction appliquée à la mauvaise couche aggrave la baisse.",
        action: [
          "J'ai annoncé mon ordre de lecture avant de l'appliquer, pour que le client puisse m'arrêter là où il détenait une information que je n'avais pas.",
          "J'ai vérifié la comparabilité du mois : nombre de jours, établissements entrés ou sortis, nombre d'offres publiées.",
          "J'ai recalculé le coût par candidature en divisant la dépense totale par le total des candidatures, au lieu de moyenner les coûts annonce par annonce, ce qui changeait déjà la lecture de l'écart.",
          "J'ai contrôlé la diffusion avant l'enchère, offres en pause et budget consommé trop tôt, puis j'ai comparé le même métier et la même zone sur la même fenêtre pour isoler ce qui venait du marché.",
          "Je suis revenu avec une seule cause, une action corrective et une date de revérification.",
        ],
        result:
          "La discussion est passée de la remise en cause du dispositif à une correction ciblée, et le compte est resté le premier réseau du portefeuille. L'effet durable est que cet ordre de diagnostic est devenu une routine automatisée que je rejoue sur n'importe quel compte en quelques minutes.",
        learning:
          "La plupart des baisses spectaculaires sont des problèmes de période ou de mesure. Un ordre fixe évite de corriger une couche qui n'était pas en cause.",
      },
      en: {
        situation:
          "On Accor, the largest network in my book at 214,476 EUR over twelve months, one month's hiring indicators came out clearly below the previous month. On the client side, the first conclusion was that the setup had stopped working.",
        task: "I had to find the cause before proposing a fix, because a fix applied to the wrong layer makes the drop worse.",
        action: [
          "I stated my reading order before applying it, so the client could stop me at the step where he held information I did not have.",
          "I checked that the month was comparable: number of days, sites added or removed, number of live job postings.",
          "I recomputed cost per application by dividing total spend by total applications instead of averaging the cost of each posting, which already changed how the gap read.",
          "I checked delivery before bidding, paused postings and budget spent too early, then compared the same role and the same area over the same window to isolate what came from the market.",
          "I came back with a single cause, one corrective action and a date to re-check.",
        ],
        result:
          "The conversation moved from questioning the whole setup to a targeted fix, and the account stayed the largest network in the book. The lasting effect is that this diagnostic order became an automated routine I can rerun on any account in minutes.",
        learning:
          "Most spectacular drops are period or measurement problems. A fixed order stops you fixing a layer that was never the issue.",
      },
    },
    script: {
      fr: {
        hook: "Je diagnostique toujours dans le même ordre, du plus probable au moins probable, et je l'énonce à voix haute pour que le client m'arrête là où il sait quelque chose que j'ignore.",
        body: [
          "Un. La période est-elle comparable : même nombre de jours, mêmes établissements, mêmes offres. Deux. La mesure est-elle fiable : je recalcule le coût par candidature en divisant la dépense totale par le total des candidatures, jamais en moyennant les coûts annonce par annonce, parce qu'une moyenne de ratios donne un chiffre plausible et faux.",
          "Trois. La diffusion a-t-elle tenu : offres en pause, budget épuisé en milieu de mois. Sur un réseau qui publie par un flux, je ne maîtrise ni la mise en ligne ni le paramétrage, donc j'appelle le partenaire technique. Quatre. Le marché a-t-il bougé : même métier, même zone, même fenêtre. Si la baisse suit le marché, je change d'hypothèse et je ne cherche plus dans le compte.",
          "Cinq seulement, la forme de l'investissement : le budget est souvent étalé sur tous les établissements et n'en rend aucun visible. Je propose alors l'inverse d'une vente additionnelle : le même budget sur moins d'établissements, et pas d'engagement annuel avant cette mesure. Je m'arrête à la première cause qui explique l'essentiel de l'écart, avec une action et une date.",
        ],
        closing: "Voilà l'ordre. Je peux le dérouler sur un cas réel.",
        keyBeats: [
          "Période comparable",
          "Mesure et calcul du ratio",
          "Diffusion, puis marché",
          "Budget dilué en dernier",
          "Une cause, une date",
        ],
      },
      en: {
        hook: "I always diagnose in the same order, from the most likely cause to the least likely, and I say it out loud so the client can stop me where he knows something I do not.",
        body: [
          "One. Is the period comparable: same number of days, same sites, same postings. Two. Is the measurement trustworthy: I recompute cost per application by dividing total spend by total applications, never by averaging the cost of each posting, because an average of ratios gives a plausible and wrong number.",
          "Three. Did delivery hold: paused postings, budget exhausted mid month. On a network that publishes through a job feed I control neither the go live nor the settings, so I call the technical partner. Four. Did the market move: same role, same area, same window. If the drop follows the market, I change hypothesis and stop looking inside the account.",
          "Five only, the shape of the investment: the budget is often spread across every site and makes none of them visible. There I propose the opposite of an upsell: the same budget on fewer sites, and no annual commitment before that measurement exists. I stop at the first cause that explains most of the gap, with one action and one date.",
        ],
        closing: "That is the order. I am happy to run it on a real case.",
        keyBeats: [
          "Comparable period",
          "Measurement and ratio",
          "Delivery, then market",
          "Diluted budget last",
          "One cause, one date",
        ],
      },
    },
    metrics: [
      "Accor : 214 476 € sur 12 mois, premier réseau du portefeuille",
      "Ordre de diagnostic en 5 étapes",
      "Coût par candidature en somme sur somme, jamais en moyenne de ratios",
    ],
    targetSeconds: 90,
  },
  {
    id: "ana-forecast",
    category: "analytique",
    difficulty: "moins-classique",
    prompt: {
      fr: "Comment tu construis ton forecast, et à quel point il est fiable ?",
      en: "How do you build your forecast, and how reliable is it?",
    },
    whatTheyTest: [
      "Si tu construis compte par compte ou si tu appliques un pourcentage à ton pipeline.",
      "Si tu sépares l'acquis du probable et si tu dis sur quoi repose chaque catégorie.",
      "Si tu donnes une marge d'erreur et le biais que tu corriges chez toi.",
      "Si ton forecast sert à décider tôt ou à te justifier tard.",
    ],
    traps: [
      "Répondre « très fiable » sans méthode ni marge : la deuxième partie de la question est un piège.",
      "Sortir un taux de conversion moyen dont tu ne sais pas dire l'origine.",
      "Mélanger ta projection et celle de l'outil dans un même chiffre pour faire disparaître l'écart.",
      "Confondre montant et date : la plupart des ratés de forecast sont des décalages, pas des pertes.",
    ],
    followUps: [
      {
        question: "Quelle est ta plus grosse erreur de forecast ?",
        how: "Prends un décalage de décision client, pas une perte. Explique ce que tu as changé dans ta façon de dater les opportunités, et ne défends pas le chiffre d'origine.",
      },
      {
        question: "Comment tu traites un compte à l'historique très irrégulier ?",
        how: "Appuie-toi sur sa saisonnalité sur plusieurs années plutôt que sur son dernier trimestre, et donne une fourchette au lieu d'un point.",
      },
      {
        question: "Et quand ton forecast et celui de l'outil divergent ?",
        how: "Ne fais pas la moyenne. Choisis la source qui fait autorité pour l'indicateur, annonce l'écart et dis ce que chacune compte. Un écart lissé revient en pire en fin de trimestre.",
      },
    ],
    basis: "vecu",
    basisNote:
      "Méthode et chiffres sont les tiens. Revérifie l'atteinte du trimestre en cours la veille de l'entretien, elle bouge encore, et annonce-la comme un trimestre en cours et non comme un atterrissage.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Mon portefeuille est très concentré : sept réseaux font 84 % du revenu, et un seul qui décale son budget déplace tout le trimestre. Un forecast construit en appliquant un pourcentage au pipeline se trompe forcément sur ce profil.",
        task: "Je devais produire un forecast par le bas, compte par compte, assez solide pour engager mon manager et assez rapide à rafraîchir pour rester utile.",
        action: [
          "Je pars des comptes qui facturent réellement, 26 réseaux et 633 comptes sur douze mois, et non des 817 réseaux parents que contient mon périmètre.",
          "Je sépare l'acquis, bon de commande signé et budget encore disponible, du probable, une opportunité avec un montant et une date de décision côté client.",
          "Je corrige par la saisonnalité observée sur plusieurs années plutôt que par un taux de conversion moyen, parce que mes trimestres ne se ressemblent pas.",
          "Je ne mélange jamais ma projection et celle de l'outil dans un même chiffre : je choisis la source qui fait autorité pour l'indicateur et j'annonce l'écart.",
          "Je révise dès que la date de décision du client bouge, à la hausse comme à la baisse, avant que l'écart ne devienne un problème.",
        ],
        result:
          "Les atterrissages sont restés dans une zone étroite autour de la cible, 108 % au premier trimestre 2026 et environ 108 % sur le troisième en cours. L'écart notable est un deuxième trimestre à 133 %, tiré par une signature de 438 204 € le 18 mai que je n'avais pas comptée en acquis avant sa date.",
        learning:
          "Un forecast fiable n'est pas un forecast qui ne bouge pas, c'est un forecast qui bouge tôt. La date de décision du client prédit mieux que le montant en jeu.",
      },
      en: {
        situation:
          "My book is highly concentrated: seven networks make 84% of the revenue, and one of them shifting its budget moves the whole quarter. A forecast built by applying a percentage to the pipeline is bound to be wrong on that profile.",
        task: "I had to build a bottom up forecast, account by account, solid enough to commit my manager and fast enough to refresh to stay useful.",
        action: [
          "I start from the accounts that actually bill, 26 networks and 633 accounts over twelve months, not from the 817 parent networks my perimeter contains.",
          "I separate secured revenue, signed order and budget still available, from likely revenue, an opportunity with an amount and a client side decision date.",
          "I adjust with seasonality observed over several years rather than with an average conversion rate, because my quarters do not look alike.",
          "I never mix my projection and the tool's into one figure: I pick the source that is authoritative for that indicator and I state the gap.",
          "I revise as soon as the client's decision date moves, up or down, before the gap becomes a problem.",
        ],
        result:
          "Landings stayed in a narrow band around target, 108% in the first quarter of 2026 and around 108% in the third so far. The notable exception is a second quarter at 133%, driven by a 438,204 EUR signature on 18 May that I had not counted as secured before its date.",
        learning:
          "A reliable forecast is not one that never moves, it is one that moves early. The client's decision date predicts more than the amount at stake.",
      },
    },
    script: {
      fr: {
        hook: "Je construis mon forecast en deux piles, l'acquis et le probable, et je ne donne jamais une fiabilité globale : j'en donne une par pile.",
        body: [
          "Je pars des comptes qui facturent vraiment : sur douze mois, 26 réseaux ont facturé sur mes 817 parents, et sept font 84 % du revenu. Je ne modélise pas un portefeuille, je modélise sept trajectoires ligne par ligne, le reste en volume.",
          "L'acquis, c'est un bon de commande signé et du budget disponible : là je me trompe peu, et sur le rythme de consommation. Le probable, c'est une opportunité avec un montant et une date de décision client : je me trompe bien plus sur la date que sur le montant, donc c'est une fourchette.",
          "Mon biais est l'optimisme sur les dates : je date à rebours de la contrainte du client, sa mise en ligne, pas la fin de mon trimestre. Quand ma projection et celle de l'outil divergent, je ne les moyenne pas : je choisis la source qui fait autorité et j'annonce l'écart. Ça donne 108 % au premier trimestre 2026, 133 % au deuxième, environ 108 % au troisième en cours, le 133 % venant d'une signature de 438 204 € entrée en acquis à sa date.",
        ],
        closing: "Un forecast utile n'est pas stable, il bouge tôt. Je peux dérouler un trimestre.",
        keyBeats: [
          "Deux piles séparées",
          "Sept trajectoires, pas 817",
          "L'acquis, puis la fourchette",
          "Dater depuis le client",
          "Annoncer l'écart",
        ],
      },
      en: {
        hook: "I build my forecast as two piles, secured and likely, and I never give one global reliability figure: I give one per pile.",
        body: [
          "I start from the accounts that actually bill: over twelve months, 26 networks out of my 817 parents billed, and seven of them make 84 percent of the revenue. I do not model a portfolio, I model seven trajectories line by line, the rest as a volume.",
          "Secured means a signed order and budget available: I am rarely wrong there, and when I am it is about the pace of consumption. Likely means an opportunity with an amount and a client decision date: I am wrong far more often about the date than about the amount, so it comes as a range.",
          "My own bias is optimism on dates: I work backwards from the client's own constraint, his go live, not the end of my quarter. When my projection and the tool's diverge, I do not average them: I pick the source that is authoritative and I state the gap. That gave 108 percent in the first quarter of 2026, 133 percent in the second, around 108 percent in the third so far, the 133 coming from a 438,204 euro signature that entered the secured pile on its date.",
        ],
        closing: "A useful forecast is not a stable one, it moves early. I can walk through one quarter.",
        keyBeats: [
          "Two separate piles",
          "Seven trajectories, not 817",
          "Secured, then a range",
          "Dates from the client",
          "State the gap",
        ],
      },
    },
    metrics: [
      "7 réseaux font 84 % du revenu",
      "26 réseaux et 633 comptes facturent sur 12 mois, sur 817 réseaux parents",
      "108 % au Q1 2026, 133 % au Q2, environ 108 % au Q3 en cours",
      "Signature de 438 204 € le 18 mai 2026",
    ],
    targetSeconds: 89,
  },
  {
    id: "ana-donnee-contre-client",
    category: "analytique",
    difficulty: "piege",
    prompt: {
      fr: "Que fais-tu quand la donnée contredit ce que le client croit ?",
      en: "What do you do when the data contradicts what the client believes?",
    },
    whatTheyTest: [
      "Si tu doutes de ton propre chiffre avant de contredire quelqu'un avec.",
      "Si tu comprends que sa mesure compte peut-être autre chose que la tienne.",
      "Si tu sais faire produire la preuve par le client au lieu de l'apporter toi-même.",
      "Si tu sors de la réunion avec une décision plutôt qu'avec un match nul.",
    ],
    traps: [
      "Arriver en démontrant qu'il a tort : tu gagnes le point et tu perds la relation.",
      "Additionner ou moyenner les deux sources pour faire disparaître l'écart.",
      "Ignorer d'où vient sa croyance, alors qu'elle repose sur une mesure réelle chez lui.",
      "Proposer un test sans critère défini à l'avance : le désaccord revient au rendez-vous suivant.",
    ],
    followUps: [
      {
        question: "Et si finalement c'est toi qui te trompais ?",
        how: "Dis-le vite, explique d'où venait l'erreur et ce que tu as changé dans ta vérification. Corriger soi-même un chiffre rapporte plus que d'avoir eu raison.",
      },
      {
        question: "Comment tu gères ça devant plusieurs personnes du client ?",
        how: "Ne mets personne en défaut en public. Pose les deux mesures côte à côte avec leurs définitions et laisse l'écart parler tout seul.",
      },
      {
        question: "Et s'il refuse ta lecture malgré le test ?",
        how: "Vérifie ce que le critère ne couvrait pas avant d'insister, puis dis ce que tu ne prouves pas. Un vendeur qui nomme la limite de sa propre mesure reprend la main.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Ta règle sur les chiffres est réelle : source, fenêtre, moteur de calcul, et deux sources divergentes jamais mélangées. L'épisode, lui, est un canevas. Avant l'entretien, retrouve un vrai écart entre ta mesure et celle d'un client, par exemple entre son outil de recrutement et la mesure côté diffusion, et remplace la situation et le résultat par les tiens.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Un client était convaincu que ses candidatures avaient baissé alors que ma mesure montrait l'inverse sur la même période. Son chiffre venait de son outil de recrutement, le mien de la mesure côté diffusion, et nous étions tous les deux sûrs de nous.",
        task: "Je devais sortir de la réunion avec une mesure partagée, sans le mettre en défaut devant son équipe.",
        action: [
          "J'ai commencé par douter de mon chiffre : j'ai revérifié sa source, sa fenêtre de mesure et la façon dont il était calculé avant d'ouvrir la discussion.",
          "J'ai demandé comment son chiffre à lui était construit, à partir de quelle étape du parcours candidat et sur quel périmètre d'établissements.",
          "J'ai posé les deux mesures côte à côte avec leurs définitions, sans jamais les additionner ni les moyenner, parce que deux sources qui ne comptent pas la même chose ne se mélangent pas dans un même calcul.",
          "Plutôt que d'imposer ma lecture, j'ai proposé un périmètre test sur quelques postes au même intitulé, avec un critère défini avant de commencer, et c'est lui qui a relevé le chiffre.",
          "J'ai acté par écrit la mesure de référence retenue, sa fenêtre et sa source, pour que la discussion ne recommence pas au rendez-vous suivant.",
        ],
        result:
          "La décision a été prise dans la même réunion au lieu d'être reportée, et les deux mesures concurrentes ont été remplacées par une référence unique. L'effet durable est que les revues suivantes ont porté sur les actions et non sur la validité des chiffres.",
        learning:
          "Quand la donnée contredit le client, l'écart porte presque toujours sur la définition et pas sur la réalité. Et une preuve qu'il a produite lui-même ne se rejoue pas trois mois plus tard.",
      },
      en: {
        situation:
          "A client was convinced his applications had dropped while my measurement showed the opposite over the same period. His number came from his recruitment tool, mine from delivery side measurement, and we were both certain.",
        task: "I had to leave that meeting with a shared measurement, without putting him at fault in front of his team.",
        action: [
          "I started by doubting my own figure: I re-checked its source, its measurement window and the way it was computed before opening the discussion.",
          "I asked how his number was built, from which step of the candidate journey and across which sites.",
          "I put both measurements side by side with their definitions, never adding or averaging them, because two sources that do not count the same thing do not belong in the same calculation.",
          "Rather than imposing my reading, I proposed a test perimeter on a few roles with the same job title, with a criterion agreed before we started, and he read the number himself.",
          "I wrote down the reference measurement we kept, its window and its source, so the discussion would not restart at the next meeting.",
        ],
        result:
          "The decision was taken in that same meeting instead of being postponed, and the two competing measurements were replaced by a single reference. The lasting effect is that the following reviews were about actions rather than about whether the numbers were valid.",
        learning:
          "When data contradicts a client, the gap is almost always about definition and not about reality. And a proof he produced himself does not get replayed three months later.",
      },
    },
    script: {
      fr: {
        hook: "Mon objectif n'est pas de lui prouver qu'il a tort, c'est qu'il produise lui-même le chiffre qui tranche.",
        body: [
          "Je commence par douter de ma mesure : sa source, sa fenêtre, sa méthode de calcul. Puis je demande comment son chiffre à lui est construit, à partir de quelle étape du parcours candidat et sur quel périmètre. Le plus souvent nos deux mesures ne comptent pas la même chose, et son chiffre est juste dans sa définition.",
          "Je pose alors les deux mesures côte à côte avec leurs définitions, sans les additionner ni les moyenner. Deux sources qui ne comptent pas la même chose ne se mélangent jamais dans un même calcul : j'annonce l'écart et je dis d'où il vient. Le lisser, c'est le moment où je perdrais la main.",
          "Puis je sors du débat par un dispositif qui lui appartient. Sur un réseau qui publie par un flux, je demande un identifiant de flux distinct sur un périmètre test, quelques postes au même intitulé, un critère fixé avant de commencer, une durée courte. C'est lui qui relève le chiffre, ou son prestataire de diffusion. Et je dis moi-même ce que le test ne prouve pas, par exemple un poste publié d'un seul côté.",
        ],
        closing: "Une preuve qu'il a fabriquée, il n'a aucune raison de la contester. J'ai un cas en tête si vous voulez.",
        keyBeats: [
          "Douter de mon chiffre",
          "Comment le sien est construit",
          "Côte à côte, jamais mélangés",
          "Un test qui lui appartient",
          "Dire ce qu'il ne prouve pas",
        ],
      },
      en: {
        hook: "My goal is not to prove him wrong, it is to get him to produce the number that settles it.",
        body: [
          "I start by doubting my own measurement: its source, its window, its calculation method. Then I ask how his number is built, from which step of the candidate journey and across which sites. Most of the time our two measurements do not count the same thing, and his number is correct within its own definition.",
          "So I put both measurements side by side with their definitions, without adding or averaging them. Two sources that do not count the same thing never belong in the same calculation: I state the gap and I say where it comes from. Smoothing it is where I would lose the room.",
          "Then I leave the argument through a device that belongs to him. On a network that publishes through a job feed, I ask for a separate feed identifier on a test perimeter, a few roles with the same job title, a criterion set before we start, a short duration. He reads the number, or his posting partner does. And I say myself what the test does not prove, for instance a role published on one side only.",
        ],
        closing: "A proof he built himself is a proof he has no reason to contest. I have a case in mind if you want.",
        keyBeats: [
          "Doubt my own figure",
          "How his is built",
          "Side by side, never mixed",
          "A test he owns",
          "Name what it misses",
        ],
      },
    },
    metrics: [
      "Deux sources divergentes jamais mélangées dans un même calcul",
      "Chaque chiffre porte sa source, sa fenêtre de mesure et son moteur de calcul",
      "Test sur périmètre réduit, critère défini avant de commencer",
    ],
    targetSeconds: 90,
  },
  {
    id: "ana-chiffre-defendre",
    category: "analytique",
    difficulty: "moins-classique",
    prompt: {
      fr: "Comment t'assures-tu qu'un chiffre que tu présentes est juste ?",
      en: "How do you make sure a number you present is correct?",
    },
    whatTheyTest: [
      "Si tu as une procédure de contrôle ou seulement une bonne intention.",
      "Si tu connais les calculs qui produisent un résultat plausible et faux sans message d'erreur.",
      "Si tu as un moment de jugement à raconter sur un chiffre produit automatiquement.",
      "Si tu renonces à un chiffre que tu ne sais pas sourcer, même quand il t'arrange.",
    ],
    traps: [
      "Répondre que tu fais attention : ils attendent une procédure, pas une intention.",
      "Ne pas connaître la fenêtre de mesure de ton propre chiffre, première question d'un client attentif.",
      "Citer des outils d'IA au lieu du moment où tu as vérifié, jugé et corrigé.",
      "Garder le chiffre le plus flatteur quand deux méthodes divergent.",
    ],
    followUps: [
      {
        question: "Donne-moi un chiffre que tu as retiré d'une présentation.",
        how: "Prends un chiffre que tu ne savais pas sourcer et raconte que tu l'as transformé en question posée au client. Retirer un chiffre est un signal de sérieux.",
      },
      {
        question: "Comment tu réagis si un client trouve l'erreur en direct ?",
        how: "Reconnais-la sans la défendre, annonce la correction avec une date, puis corrige la cause dans ta procédure et pas seulement la diapositive.",
      },
      {
        question: "Comment tu évites qu'une automatisation propage une erreur partout ?",
        how: "Explique que l'automatisation rend le calcul reproductible donc vérifiable : contrôle avant diffusion, revérification sur un échantillon large, et ordre de grandeur recoupé par une seconde méthode.",
      },
    ],
    basis: "vecu",
    basisNote:
      "Épisode et chiffres réels d'août 2026. Ne les arrondis pas à l'oral, c'est leur précision qui rend l'histoire crédible, et sois prêt à dire en une phrase ce qu'était la cause corrigée dans le calcul.",
    format: "script",
    answer: {
      fr: {
        situation:
          "En août 2026, j'ai préparé six campagnes et 165 e-mails individualisés sur deux réseaux de franchise, chaque e-mail portant le benchmark local de part de clics candidats de l'établissement concerné. Le calcul étant automatisé, une règle fausse partait dans les 165 e-mails d'un coup.",
        task: "Je devais garantir chaque chiffre avant l'envoi, devant des destinataires qui connaissent leur marché mieux que moi.",
        action: [
          "J'ai relu les résultats avant la mise en forme, et un cas m'a arrêté : une place de marché présentée comme l'employeur le plus populaire de sa zone, avec 1 154 clics et zéro candidature.",
          "Au lieu de corriger cette ligne, j'ai vérifié les 114 paires zone et concurrent une par une, parce qu'un chiffre faux vient presque toujours d'une règle fausse.",
          "J'ai trouvé 9 leads fautifs, dont 2 en première position, donc les plus visibles dans l'e-mail.",
          "J'ai corrigé la cause dans le calcul et pas les lignes, puis j'ai revérifié 298 paires sans retrouver d'anomalie.",
          "J'ai ajouté un contrôle de nommage sur les mêmes campagnes : 181 noms d'établissements comparés aux sources officielles, 11 noms faux détectés avant envoi.",
        ],
        result:
          "Les campagnes sont parties sans chiffre erroné, et le contrôle est devenu une étape obligatoire de mes livrables plutôt qu'une relecture de fin. L'effet durable est que chaque chiffre que je présente porte désormais sa source, sa fenêtre de mesure et la méthode qui l'a produit, écrites dans le fichier de données.",
        learning:
          "Une automatisation ne se contrôle pas ligne par ligne, elle se contrôle sur sa règle puis se revérifie sur un échantillon plus large. Sans ce réflexe, j'aurais corrigé un e-mail et laissé passer huit autres.",
      },
      en: {
        situation:
          "In August 2026 I prepared six campaigns and 165 individually written emails across two franchise networks, each email carrying the local share of candidate clicks benchmark for that specific site. Because the calculation was automated, one wrong rule would ship in all 165 emails at once.",
        task: "I had to guarantee every figure before sending, to recipients who know their own market better than I do.",
        action: [
          "I reviewed the results before formatting, and one case stopped me: a marketplace presented as the most popular employer in its area, with 1,154 clicks and zero applications.",
          "Instead of fixing that one line, I checked the 114 area and competitor pairs one by one, because a wrong number almost always comes from a wrong rule.",
          "I found 9 faulty leads, 2 of them in first position, so the most visible ones in the email.",
          "I fixed the cause in the calculation rather than the lines, then re-checked 298 pairs and found no anomaly.",
          "I added a naming control on the same campaigns: 181 site names compared with official sources, 11 wrong names caught before sending.",
        ],
        result:
          "The campaigns went out with no incorrect figure, and that control became a mandatory step in my deliverables rather than a final proofread. The lasting effect is that every number I present now carries its source, its measurement window and the method that produced it, written in the data file.",
        learning:
          "You do not control an automation line by line, you control its rule and then re-check on a wider sample. Without that reflex I would have fixed one email and shipped eight more with the same error.",
      },
    },
    script: {
      fr: {
        hook: "Ma règle : un chiffre ne sort pas s'il ne porte pas sa source, sa fenêtre de mesure et la méthode qui l'a produit.",
        body: [
          "C'est un contrôle écrit dans le fichier de données, pas une intention. Un chiffre que je ne sais pas sourcer devient une question posée au client. Un ordre de grandeur qui me surprend, je le recoupe par une seconde méthode avant de l'écrire, pas après qu'on me l'ait mis en doute.",
          "Le cas qui a fixé cette règle date d'août 2026 : une analyse automatisée devait nommer, zone par zone, l'employeur le plus populaire sur un métier. Elle a sorti une place de marché créditée de 1 154 clics et zéro candidature : plausible, et faux. J'ai vérifié les 114 paires zone et concurrent une par une, trouvé 9 leads fautifs dont 2 en première position, corrigé la cause dans le calcul, puis revérifié 298 paires sans anomalie.",
          "L'arbitrage se voit sur un chiffre qui me concerne. Ma croissance de portefeuille sort à 46,6 % en brut, mais ce brut mélange croissance réelle et réassignations de comptes. Deux méthodes indépendantes à périmètre constant donnent 38,0 % et 39,1 %. Je présente 38 %, parce qu'un chiffre défendable ligne par ligne vaut plus qu'un chiffre flatteur.",
        ],
        closing: "Ce contrôle coûte deux minutes et m'évite de perdre une réunion. Je peux détailler une correction.",
        keyBeats: [
          "Source, fenêtre, méthode",
          "1 154 clics, 0 candidature",
          "La règle, pas la ligne",
          "298 paires revérifiées",
          "Je présente 38, pas 46",
        ],
      },
      en: {
        hook: "My rule: a number does not go out unless it carries its source, its measurement window and the method that produced it.",
        body: [
          "That is a written control, in the data file, not an intention. A number I cannot source becomes a question I put to the client. An order of magnitude that surprises me, I cross-check with a second method before writing it down, not after someone questions it.",
          "The case that set this rule was in August 2026. An automated analysis had to name, area by area, the most popular employer for a given role. It returned a marketplace credited with 1,154 clicks and zero applications: plausible, and false. I checked the 114 area and competitor pairs one by one, found 9 faulty leads with 2 of them in first position, fixed the cause in the calculation, then re-checked 298 pairs with no anomaly.",
          "The trade-off shows on a number about me. My portfolio growth comes out at 46.6 percent raw, but that raw figure mixes real growth with account reassignments. Two independent methods on a constant perimeter give 38.0 and 39.1 percent. I present 38 percent, because a number I can defend line by line is worth more than a flattering one.",
        ],
        closing: "That check costs two minutes and keeps me from losing a meeting. I can detail a specific correction.",
        keyBeats: [
          "Source, window, method",
          "1,154 clicks, zero applications",
          "Fix the rule, not the line",
          "298 pairs re-checked",
          "I present 38, not 46",
        ],
      },
    },
    metrics: [
      "1 154 clics et 0 candidature pour une marketplace donnée comme employeur le plus populaire (août 2026)",
      "114 paires vérifiées, 9 leads fautifs dont 2 en première position, 298 paires revérifiées sans anomalie",
      "181 noms d'établissements contrôlés, 11 noms faux détectés avant envoi",
      "Croissance du portefeuille : 38,0 % et 39,1 % par deux méthodes, brut de +46,6 % écarté",
    ],
    targetSeconds: 90,
  },
];
