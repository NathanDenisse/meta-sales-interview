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
      "Si tu as un ordre de lecture fixe, donc un diagnostic reproductible et pas une intuition.",
      "Si tu vérifies la mesure avant d'accuser la performance, la première cause de fausse baisse.",
      "Si tu distingues ce qui vient du client, de son marché, et du dispositif.",
      "Si tu conclus par une action et une date, pas par une explication.",
    ],
    traps: [
      "Sauter directement à la conclusion budget, c'est le réflexe vendeur que tout le monde repère.",
      "Comparer deux périodes de longueurs différentes ou à périmètre variable : tu fabriques toi-même la baisse.",
      "Oublier la saisonnalité du métier du client, qui explique une bonne part des variations mensuelles.",
      "Présenter cinq hypothèses sans les hiérarchiser : le client attend la cause principale, pas une liste.",
    ],
    followUps: [
      {
        question: "Comment tu sais que la baisse est réelle et pas un artefact de mesure ?",
        how: "Explique que tu contrôles d'abord la mesure, changement de suivi, périmètre modifié, comptes ajoutés ou retirés, avant toute interprétation. C'est la couche numéro un.",
      },
      {
        question: "Et si c'est le marché qui a bougé et pas le client ?",
        how: "Compare le compte à son marché sur le même métier et la même zone, sur la même fenêtre. Une baisse alignée sur le marché n'appelle pas la même décision qu'une baisse isolée.",
      },
      {
        question: "Comment tu annonces une mauvaise nouvelle au client ?",
        how: "Tu arrives avec la cause, la mesure et l'option corrective datée. Ce qui fâche n'est pas la baisse, c'est d'apprendre qu'elle durait depuis deux mois.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "L'ordre de lecture et les cinq couches sont ta méthode réelle, et Accor est bien le premier réseau de ton book à 214 476 € sur douze mois, soit 18,6 %. L'épisode de baisse mensuelle est reconstitué : remplace-le par un diagnostic que tu as réellement mené, avec le mois, la cause trouvée et l'effet de la correction.",
    answer: {
      fr: {
        situation:
          "Sur Accor, premier réseau de mon book avec 214 476 € sur douze mois, soit 18,6 % de mon revenu, les indicateurs de recrutement d'un mois sont ressortis nettement en dessous du mois précédent. Le premier réflexe côté client était d'en conclure que le dispositif ne fonctionnait plus.",
        task: "Je devais trouver la cause réelle avant de proposer quoi que ce soit, parce qu'une correction appliquée à la mauvaise couche aggrave la situation.",
        action: [
          "Je lis toujours le compte dans le même ordre : la forme de l'entreprise et sa saisonnalité, la confiance dans la mesure, la forme de la dépense, la santé de la diffusion, l'approvisionnement créatif, et seulement ensuite les chiffres de performance.",
          "Je commence par la saisonnalité et le périmètre : est-ce que le mois est comparable, est-ce que des établissements sont entrés ou sortis, est-ce que le volume d'offres a changé.",
          "Je contrôle ensuite la mesure elle-même, parce qu'un suivi cassé ou un périmètre modifié produit une baisse qui n'existe pas.",
          "Je teste les cinq couches où une performance casse, dans cet ordre : la mesure, la diffusion, l'enchère, la création, l'après-clic, et je m'arrête à la première qui explique l'essentiel de l'écart.",
          "Je compare le compte à son marché sur le même métier et la même zone, sur la même fenêtre de mesure, pour séparer ce qui vient de lui de ce qui vient du contexte.",
          "Je reviens avec une seule cause principale, une action corrective et une date de revérification, plutôt qu'avec une liste d'hypothèses.",
        ],
        result:
          "Le compte est resté le premier réseau du book, à 214 476 € sur douze mois, et la discussion est passée de la remise en cause du dispositif à une correction ciblée. L'effet durable est que cet ordre de lecture est devenu une routine automatisée que je rejoue sur n'importe quel compte en quelques minutes.",
        learning:
          "La plupart des baisses spectaculaires sont des problèmes de mesure ou de saisonnalité. Un ordre de lecture fixe évite de corriger une couche qui n'était pas en cause.",
      },
      en: {
        situation:
          "On Accor, the largest network in my book at 214,476 EUR over twelve months, that is 18.6% of my revenue, one month's hiring indicators came out clearly below the previous month. The client's first instinct was to conclude that the setup had stopped working.",
        task: "I had to find the real cause before proposing anything, because a fix applied to the wrong layer makes things worse.",
        action: [
          "I always read an account in the same order: the shape of the company and its seasonality, trust in the measurement, the shape of the spend, delivery health, creative supply, and only then the performance numbers.",
          "I start with seasonality and perimeter: is the month comparable, did sites enter or leave, did the volume of job postings change.",
          "I then check the measurement itself, because broken tracking or a modified perimeter produces a drop that does not exist.",
          "I test the five layers where performance breaks, in this order: measurement, delivery, bidding, creative, post click, and I stop at the first one that explains most of the gap.",
          "I compare the account with its market on the same role and the same area, over the same measurement window, to separate what comes from them and what comes from the context.",
          "I come back with a single main cause, one corrective action and a date to re-check, rather than with a list of hypotheses.",
        ],
        result:
          "The account stayed the largest network in the book at 214,476 EUR over twelve months, and the conversation moved from questioning the whole setup to a targeted fix. The lasting effect is that this reading order became an automated routine I can rerun on any account in minutes.",
        learning:
          "Most spectacular drops are measurement or seasonality problems. A fixed reading order stops you fixing a layer that was never the issue.",
      },
    },
    metrics: [
      "Accor : 214 476 € sur 12 mois, 18,6 % du book",
      "Ordre de lecture en 6 étapes",
      "5 couches de rupture : mesure, diffusion, enchère, création, après-clic",
    ],
    targetSeconds: 115,
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
      "Si tu construis ton forecast par le bas, compte par compte, ou si tu appliques un pourcentage à ton pipe.",
      "Si tu sépares ce qui est acquis de ce qui est espéré, et si tu le dis avec les mêmes mots que ton manager.",
      "Si tu connais ta propre erreur d'estimation et ce que tu en as tiré.",
      "Si tu rafraîchis assez souvent pour que le forecast serve à décider et pas seulement à reporter.",
    ],
    traps: [
      "Annoncer une fiabilité parfaite : personne ne te croira et un seul contre-exemple suffira à te décrédibiliser.",
      "Parler de probabilités sans dire d'où elles viennent : un taux de conversion inventé se voit tout de suite.",
      "Oublier la saisonnalité du book, alors que tes trimestres varient fortement d'un trimestre à l'autre.",
      "Confondre le montant et la date : la plupart des ratés de forecast sont des décalages, pas des pertes.",
    ],
    followUps: [
      {
        question: "Quelle est ta plus grosse erreur de forecast ?",
        how: "Donne un cas réel de décalage de décision client, explique ce que tu as changé dans ta façon de dater les opportunités. Ne défends pas le chiffre, montre la correction.",
      },
      {
        question: "Comment tu traites un compte qui a un historique très irrégulier ?",
        how: "Appuie-toi sur sa saisonnalité sur plusieurs années plutôt que sur le dernier trimestre, et affiche une fourchette au lieu d'un point.",
      },
      {
        question: "Qu'est-ce que tu fais quand ton forecast et celui de l'outil divergent ?",
        how: "Tu ne mélanges pas les deux sources dans un même calcul, tu choisis celle qui fait autorité pour l'indicateur et tu annonces l'écart. Lisser un écart est la pire option.",
      },
    ],
    basis: "vecu",
    answer: {
      fr: {
        situation:
          "Mon book est très concentré : sept réseaux font 84 % du revenu et les trimestres varient fortement, 202, 197, 293 puis 185 K€ en 2025. Un forecast construit à la louche sur un tel profil se trompe forcément, parce qu'un seul réseau qui décale son budget déplace tout le trimestre.",
        task: "Je devais produire un forecast par le bas, compte par compte, assez fiable pour engager mon manager et assez rapide à rafraîchir pour rester utile.",
        action: [
          "Je pars des comptes qui facturent réellement, 26 réseaux et 633 comptes sur douze mois, et non de la liste complète des 817 parents.",
          "Je sépare explicitement ce qui est acquis, budget engagé et bon de commande signé, de ce qui est une opportunité, avec pour chacune un montant et une date de décision côté client.",
          "Je corrige par la saisonnalité observée sur plusieurs années plutôt que par un taux de conversion moyen, parce que mes trimestres ne se ressemblent pas.",
          "Je rafraîchis chaque semaine avec une routine automatisée qui reprend les données de la Data Platform et de Salesforce, ce qui rend la mise à jour possible en continu plutôt qu'une fois par mois.",
          "Je ne mélange jamais deux sources qui divergent dans un même calcul : je choisis celle qui fait autorité pour l'indicateur et j'annonce l'écart au lieu de le lisser.",
          "Je révise à la hausse comme à la baisse dès que la date de décision du client bouge, et je préviens avant que l'écart ne devienne un problème.",
        ],
        result:
          "Les atterrissages sont restés dans une zone étroite autour de l'objectif, 108 % au Q1 2026 et environ 108 % au Q3 en cours, l'écart notable étant un Q2 à 133 % avec 365 K€, tiré par la signature de 438 204 € du 18 mai. L'effet durable est que mon manager apprend les mauvaises nouvelles de moi et tôt, donc le forecast sert à décider et pas à se justifier.",
        learning:
          "Un forecast fiable n'est pas un forecast qui ne bouge pas, c'est un forecast qui bouge tôt. La date de décision du client est une donnée plus prédictive que le montant en jeu.",
      },
      en: {
        situation:
          "My book is highly concentrated: seven networks make 84% of the revenue and quarters swing widely, 202, 197, 293 then 185K EUR in 2025. A rough top down forecast on that profile is bound to be wrong, because one network shifting its budget moves the whole quarter.",
        task: "I had to build a bottom up forecast, account by account, reliable enough to commit my manager and fast enough to refresh to stay useful.",
        action: [
          "I start from the accounts that actually bill, 26 networks and 633 accounts over twelve months, not from the full list of 817 parents.",
          "I explicitly separate what is secured, committed budget and signed insertion order, from what is an opportunity, each with an amount and a client side decision date.",
          "I adjust with seasonality observed over several years rather than with an average conversion rate, because my quarters do not look alike.",
          "I refresh weekly with an automated routine that pulls from the Data Platform and Salesforce, which makes continuous updating possible instead of a monthly exercise.",
          "I never mix two diverging sources in the same calculation: I pick the one that is authoritative for that indicator and I state the gap rather than smoothing it.",
          "I revise up or down as soon as the client's decision date moves, and I warn before the gap becomes a problem.",
        ],
        result:
          "Landings stayed in a narrow band around target, 108% in Q1 2026 and around 108% in Q3 in progress, the notable exception being a Q2 at 133% with 365K EUR, driven by the 438,204 EUR signature on 18 May. The lasting effect is that my manager hears bad news from me and early, so the forecast is used to decide rather than to justify.",
        learning:
          "A reliable forecast is not one that never moves, it is one that moves early. The client's decision date predicts more than the amount at stake.",
      },
    },
    metrics: [
      "Trimestres 2025 : 202, 197, 293 et 185 K€",
      "Trimestres 2026 : 219, 365 et 298 K€ au 5 septembre",
      "108 % au Q1 2026, 133 % au Q2, environ 108 % au Q3 en cours",
      "26 réseaux et 633 comptes facturent sur 12 mois",
      "Deal de 438 204 € signé le 18 mai 2026",
    ],
    targetSeconds: 120,
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
      "Si tu doutes d'abord de ta donnée avant de contredire quelqu'un avec.",
      "Si tu sais présenter un désaccord sans transformer le client en adversaire.",
      "Si tu comprends d'où vient sa croyance : elle repose souvent sur une mesure interne réelle.",
      "Si tu sors de la réunion avec une décision plutôt qu'avec un match nul.",
    ],
    traps: [
      "Arriver en démontrant qu'il a tort : tu gagnes le point et tu perds la relation.",
      "Ignorer sa source à lui, son ATS ou son tableau interne, alors qu'elle mesure peut-être autre chose que la tienne.",
      "Mélanger les deux sources dans un même calcul pour faire disparaître l'écart : c'est le moment où tu perds la main.",
      "Reporter la discussion sans poser de mesure commune : le désaccord reviendra à l'identique au prochain rendez-vous.",
    ],
    followUps: [
      {
        question: "Et si finalement c'est toi qui te trompais ?",
        how: "Dis-le vite, explique d'où venait l'erreur et ce que tu as changé dans ta vérification. Corriger soi-même un chiffre vaut plus cher que d'avoir eu raison.",
      },
      {
        question: "Comment tu gères ça devant plusieurs personnes du client ?",
        how: "Ne mets personne en défaut en public. Présente les deux mesures côte à côte avec leurs définitions, et laisse l'écart parler tout seul.",
      },
      {
        question: "Qu'est-ce que tu fais si le client refuse ta lecture ?",
        how: "Tu proposes un test à faible risque avec un critère défini à l'avance. Ce n'est plus toi contre lui, c'est la mesure qui tranche.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Ta règle sur les chiffres est réelle, source, fenêtre de mesure et moteur de calcul, ratios en somme sur somme, deux sources divergentes jamais mélangées. En revanche l'épisode et tous les chiffres de cette réponse sont inventés : avant l'entretien, retrouve un vrai cas d'écart entre ton chiffre et celui du client, par exemple un écart entre son ATS et la mesure Indeed, et remplace la situation, l'écart constaté et le résultat par les tiens.",
    answer: {
      fr: {
        situation:
          "Un client était convaincu que ses candidatures avaient baissé alors que ma mesure montrait le contraire sur la même période. Son chiffre venait de son outil de recrutement interne, le mien de la mesure côté diffusion, et nous étions tous les deux sûrs de nous.",
        task: "Je devais sortir de la réunion avec une mesure partagée, sans lui faire perdre la face devant son équipe.",
        action: [
          "J'ai commencé par douter de mon propre chiffre : j'ai revérifié sa source, sa fenêtre de mesure et son moteur de calcul avant d'ouvrir la discussion.",
          "J'ai demandé comment son chiffre à lui était construit, sur quelle période et à partir de quelle étape du parcours candidat, au lieu de le balayer.",
          "J'ai mis les deux mesures côte à côte avec leurs définitions, sans jamais les additionner ni les moyenner, parce que deux sources qui divergent ne se mélangent pas dans un même calcul.",
          "J'ai montré que l'écart venait de la définition et non de la performance, et j'ai proposé de retenir une seule mesure de référence pour nos revues.",
          "J'ai acté par écrit la définition choisie, sa fenêtre et sa source, pour que la discussion ne recommence pas au rendez-vous suivant.",
        ],
        result:
          "La décision a été prise dans la même réunion au lieu d'être reportée, et les 2 mesures concurrentes ont été remplacées par une référence unique, actée par écrit avec sa fenêtre et sa source. L'effet durable est que les revues suivantes ont porté sur les actions et non sur la validité des chiffres, ce qui a supprimé un point de friction récurrent.",
        learning:
          "Quand la donnée contredit le client, l'écart porte presque toujours sur la définition, pas sur la réalité. Commencer par vérifier son propre chiffre évite de gagner un débat qu'on aurait dû perdre.",
      },
      en: {
        situation:
          "A client was convinced his applications had dropped while my measurement showed the opposite over the same period. His number came from his internal recruitment tool, mine from delivery side measurement, and we were both certain.",
        task: "I had to leave that meeting with a shared measurement, without making him lose face in front of his team.",
        action: [
          "I started by doubting my own figure: I re-checked its source, its measurement window and its calculation engine before opening the discussion.",
          "I asked how his number was built, over which period and from which step of the candidate journey, rather than brushing it aside.",
          "I put both measurements side by side with their definitions, never adding or averaging them, because two diverging sources do not belong in the same calculation.",
          "I showed that the gap came from the definition and not from performance, and proposed keeping a single reference measurement for our reviews.",
          "I wrote down the agreed definition, its window and its source, so the discussion would not restart at the next meeting.",
        ],
        result:
          "The decision was taken in the same meeting instead of being postponed, and the 2 competing measurements were replaced by a single reference, written down with its window and its source. The lasting effect is that the following reviews were about actions rather than about whether the numbers were valid, which removed a recurring point of friction.",
        learning:
          "When data contradicts a client, the gap is almost always about definition, not about reality. Checking your own figure first keeps you from winning an argument you should have lost.",
      },
    },
    metrics: [
      "Règle : source, fenêtre de mesure et moteur de calcul pour chaque chiffre",
      "Ratios en somme sur somme, jamais en moyenne de moyennes",
      "Deux sources divergentes jamais mélangées dans un même calcul",
    ],
    targetSeconds: 105,
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
      "Si tu as un contrôle systématique ou si tu fais confiance à ton tableur.",
      "Si tu connais les pièges de calcul qui produisent un résultat plausible et faux.",
      "Si tu sais renoncer à un chiffre que tu ne sais pas sourcer, même quand il t'arrange.",
      "Si tu fais relire ton travail avant qu'un client ne le fasse à ta place.",
    ],
    traps: [
      "Répondre que tu fais attention : ils attendent une procédure, pas une intention.",
      "Ne pas connaître la fenêtre de mesure de ton propre chiffre, c'est la première question d'un client attentif.",
      "Calculer une moyenne de ratios au lieu d'un ratio de sommes, l'erreur la plus fréquente et la plus invisible.",
      "Présenter un chiffre surprenant sans l'avoir recoupé par une seconde méthode.",
    ],
    followUps: [
      {
        question: "Donne-moi un exemple de chiffre que tu as retiré d'une présentation.",
        how: "Choisis un chiffre que tu ne savais pas sourcer et explique que tu l'as transformé en question ouverte. Retirer un chiffre est un signal de sérieux, pas de faiblesse.",
      },
      {
        question: "Comment tu réagis si un client trouve une erreur en direct ?",
        how: "Tu la reconnais immédiatement, tu ne défends pas, tu annonces la correction avec une date. Puis tu corriges la cause dans ta procédure, pas seulement la diapositive.",
      },
      {
        question: "Comment tu évites que l'automatisation propage une erreur partout ?",
        how: "Explique que les routines rendent le calcul reproductible et vérifiable, avec des contrôles avant diffusion et un ordre de grandeur recoupé par une seconde méthode.",
      },
    ],
    basis: "vecu",
    answer: {
      fr: {
        situation:
          "Je produis des analyses de compte et des dashboards d'audit pour des réseaux qui pèsent plus de 100 K€ par an, Accor à 214 476 €, ADMR à 164 859 €, Saint-Gatien à 129 406 €. Devant ces interlocuteurs, un seul chiffre faux suffit à faire tomber toute la réunion, y compris la partie juste.",
        task: "Je devais me donner une procédure de contrôle assez stricte pour que n'importe quel chiffre présenté soit défendable ligne par ligne.",
        action: [
          "J'applique une règle sans exception : tout chiffre porte sa source, sa fenêtre de mesure et son moteur de calcul, et je le note dans le fichier de données, pas seulement dans ma tête.",
          "Je calcule les ratios en somme sur somme et jamais en moyenne de moyennes, parce que diviser avant d'agréger produit un résultat plausible et faux, sans aucun message d'erreur.",
          "Je ne mélange jamais deux sources qui divergent dans un même calcul : je choisis celle qui fait autorité pour l'indicateur et j'annonce l'écart plutôt que de le lisser.",
          "Quand un ordre de grandeur me surprend, je le recoupe par une seconde méthode avant de l'écrire, et pas après que le client l'ait mis en doute.",
          "Un chiffre que je ne sais pas sourcer ne va pas dans le livrable : il devient une question posée, ce qui coûte beaucoup moins cher qu'une correction en réunion.",
          "Je fais passer un contrôle sceptique sur le livrable avant tout envoi, avec le périmètre attendu et les chiffres clés à recouper.",
        ],
        result:
          "Cette discipline tient sur des comptes qui représentent ensemble 84 % de mon revenu, et elle a permis de mener des revues où la discussion porte sur les décisions et non sur la validité des chiffres. L'effet durable est que ces contrôles sont intégrés à mes routines automatisées, donc ils s'appliquent à chaque analyse produite, pas seulement aux présentations importantes.",
        learning:
          "La crédibilité d'un commercial ne se joue pas sur la qualité de son argumentaire, elle se joue sur la traçabilité de ses chiffres. Le contrôle avant envoi coûte deux minutes, une erreur devant un client coûte un trimestre de crédibilité.",
      },
      en: {
        situation:
          "I produce account analyses and audit dashboards for networks that bill over 100K EUR a year, Accor at 214,476 EUR, ADMR at 164,859 EUR, Saint-Gatien at 129,406 EUR. In front of those audiences, one wrong number is enough to bring down the whole meeting, including the parts that were right.",
        task: "I needed a control procedure strict enough that any number I present can be defended line by line.",
        action: [
          "I apply one rule with no exception: every figure carries its source, its measurement window and its calculation engine, and I write that in the data file, not only in my head.",
          "I compute ratios as sum over sum and never as an average of averages, because dividing before aggregating produces a plausible and wrong result, with no error message.",
          "I never mix two diverging sources in the same calculation: I pick the one that is authoritative for the indicator and state the gap rather than smoothing it.",
          "When an order of magnitude surprises me, I cross-check it with a second method before writing it down, not after a client questions it.",
          "A number I cannot source does not go into the deliverable: it becomes an open question, which costs far less than a correction in the meeting.",
          "I run a sceptical review of the deliverable before it goes out, with the expected perimeter and the key numbers to cross-check.",
        ],
        result:
          "This discipline holds on accounts that together represent 84% of my revenue, and it supports reviews where the discussion is about decisions rather than about whether the numbers are valid. The lasting effect is that these controls are built into my automated routines, so they apply to every analysis produced, not only to the important presentations.",
        learning:
          "A salesperson's credibility does not rest on the quality of the pitch, it rests on the traceability of the numbers. A pre-send check costs two minutes, an error in front of a client costs a quarter of credibility.",
      },
    },
    metrics: [
      "Accor 214 476 €, ADMR 164 859 €, Saint-Gatien 129 406 € sur 12 mois",
      "7 réseaux = 84 % du revenu",
      "Règle : source, fenêtre de mesure, moteur de calcul",
      "Ratios en somme sur somme",
    ],
    targetSeconds: 110,
  },
];
