import type { Question } from "../types";

export const qLeadership: Question[] = [
  {
    id: "lead-influence",
    category: "leadership",
    difficulty: "moins-classique",
    prompt: {
      fr: "Raconte-moi une fois où tu as fait bouger une équipe sans autorité hiérarchique.",
      en: "Tell me about a time you moved a team without formal authority.",
    },
    whatTheyTest: [
      "Si tu obtiens l'adhésion par la preuve ou par l'insistance.",
      "Si tu as identifié le vrai frein avant de pousser ta solution.",
      "Si le changement a survécu à ton départ du sujet.",
      "Si tu assumes la part de ceux qui ne t'ont pas suivi.",
    ],
    traps: [
      "Raconter une réunion où tu as convaincu tout le monde : personne ne le croit.",
      "Confondre influence et insistance, en décrivant surtout ta persévérance.",
      "Oublier de nommer le frein réel, ici la peur légitime de l'IA sur de la donnée client.",
      "Présenter l'adoption comme totale : dis combien de personnes ont réellement suivi.",
    ],
    followUps: [
      {
        question: "Qui ne t'a pas suivi, et pourquoi ?",
        how: "Donne une vraie objection et respecte-la : sur de la donnée client, la prudence est une position défendable. Dis ce que tu as changé dans ta proposition à cause d'elle.",
      },
      {
        question: "Ton manager t'avait demandé de faire ça ?",
        how: "Non, et c'est le cœur de la réponse. Dis que tu l'as fait parce que la tâche te coûtait à toi d'abord, puis que le partage est venu ensuite.",
      },
      {
        question: "Comment tu sais que c'est encore utilisé ?",
        how: "Parle des procédures partagées qui tournent chez des collègues, et du fait que le garde-fou est dans l'outil, donc la méthode reste sûre sans toi.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "La construction d'une vingtaine de procédures, les garde-fous et le partage avec des collègues sont réels. Le déroulé raconté, la réticence initiale et le choix de commencer par une tâche pénible plutôt que spectaculaire, est reconstitué : remplace par la vraie chronologie et nomme les premières procédures que tu as effectivement partagées.",
    answer: {
      fr: {
        situation:
          "J'ai commencé à outiller mon propre travail avec des agents connectés directement à nos données, et les résultats étaient visibles sur mon book. Mes collègues n'avaient aucune raison de m'écouter : je ne suis le manager de personne, et faire toucher de la donnée client par une IA faisait peur, à juste titre.",
        task: "Je voulais que l'équipe adopte ces méthodes alors que je ne pouvais les imposer à personne.",
        action: [
          "J'ai commencé par le risque et pas par la promesse : j'ai écrit un garde-fou qui intercepte chaque action de l'agent et bloque toute écriture, une sauvegarde Salesforce, un lancement de campagne, un changement de budget.",
          "J'ai choisi comme premier cas une tâche pénible pour tout le monde plutôt que la plus impressionnante, pour que le premier essai ne demande aucun acte de foi.",
          "J'ai packagé le travail en procédures réutilisables au lieu de distribuer des conseils, donc un collègue obtient le même résultat que moi sans refaire ma réflexion.",
          "J'ai laissé la preuve parler : la campagne à 165 e-mails personnalisés produite en quelques jours, et les neuf e-mails faux interceptés avant envoi grâce au contrôle de sortie.",
          "J'ai continué à partager même les procédures qui me servaient directement, parce que garder un avantage aurait tué l'adoption dès le départ.",
        ],
        result:
          "Une vingtaine de procédures sont aujourd'hui réutilisées par des collègues, sans aucun lien hiérarchique entre eux et moi. L'effet durable est que le contrôle humain est inscrit dans l'outil, donc la méthode reste sûre même quand je ne suis pas là pour l'expliquer.",
        learning:
          "Sans autorité, on n'obtient rien en convainquant, on obtient beaucoup en réduisant le coût du premier essai. Le garde-fou n'était pas une contrainte, c'était l'argument.",
      },
      en: {
        situation:
          "I started tooling my own work with agents connected directly to our data, and the results were visible on my book. My colleagues had no reason to listen to me: I manage nobody, and letting an AI touch client data was frightening, rightly so.",
        task: "I wanted the team to adopt these methods when I could not impose them on anyone.",
        action: [
          "I led with the risk rather than the promise: I wrote a guardrail that intercepts every agent action and blocks any write, a Salesforce save, a campaign launch, a budget change.",
          "I picked as a first case a task that was painful for everyone rather than the most impressive one, so the first attempt required no act of faith.",
          "I packaged the work into reusable procedures instead of handing out advice, so a colleague gets the same result as me without redoing my thinking.",
          "I let the evidence speak: the 165 personalised email campaign produced in a few days, and the nine incorrect emails intercepted before sending thanks to the output check.",
          "I kept sharing even the procedures that served me directly, because holding on to an advantage would have killed adoption from the start.",
        ],
        result:
          "Around twenty procedures are now reused by colleagues, with no reporting line between them and me. The lasting effect is that the human checkpoint lives in the tooling, so the method stays safe even when I am not there to explain it.",
        learning:
          "Without authority you get nothing by convincing people, you get a lot by lowering the cost of the first attempt. The guardrail was not a constraint, it was the argument.",
      },
    },
    metrics: [
      "Une vingtaine de procédures réutilisables partagées avec des collègues",
      "Hook de garde-fou bloquant toute écriture : Salesforce, campagne, budget",
      "165 e-mails personnalisés produits en quelques jours, zéro crédit d'enrichissement",
      "Neuf e-mails faux interceptés avant envoi grâce au contrôle de sortie",
    ],
    targetSeconds: 105,
  },

  {
    id: "lead-conflit",
    category: "leadership",
    difficulty: "classique",
    prompt: {
      fr: "Parle-moi d'un désaccord avec un collègue ou un manager.",
      en: "Tell me about a disagreement with a colleague or a manager.",
    },
    whatTheyTest: [
      "Si le désaccord portait sur une décision ou sur une personne.",
      "Si tu cherches le fait qui tranche ou si tu cherches à avoir raison.",
      "Si tu sais céder, et ce que l'autre a obtenu dans l'histoire.",
      "Si tu as protégé le client pendant que le désaccord durait.",
    ],
    traps: [
      "Choisir un désaccord où tu avais évidemment raison : ça ne prouve rien.",
      "Raconter un conflit de personnes maquillé en désaccord professionnel.",
      "Dire que ça s'est réglé par la discussion sans dire ce qui a tranché.",
      "Critiquer un manager, même à demi-mot : la question teste aussi ta loyauté.",
    ],
    followUps: [
      {
        question: "Et si l'autre avait refusé le test ?",
        how: "Dis que tu aurais appliqué sa décision et documenté ton hypothèse pour la revoir plus tard. Un désaccord ne justifie pas de bloquer une équipe.",
      },
      {
        question: "Tu t'es déjà trompé dans un désaccord ?",
        how: "Donne un cas où tu as eu tort et ce que tu as fait ensuite. Un candidat qui gagne tous ses désaccords est suspect.",
      },
      {
        question: "Comment ta relation avec cette personne a évolué ?",
        how: "Reste factuel et positif, montre que le désaccord portait sur une hypothèse et n'a jamais touché la relation de travail.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Aucun désaccord précis n'existe dans la banque de faits de Nathan : le contenu du désaccord, son objet et son dénouement sont entièrement inventés. Seul le cadre est réel, la couverture de neuf mois d'un book National Accounts en 2023-24. Remplace par un désaccord que tu as réellement eu, et garde la structure : le désaccord porte sur une décision et jamais sur une personne, tu isoles l'hypothèse qui sépare les deux positions, tu dis ce que l'autre a obtenu.",
    answer: {
      fr: {
        situation:
          "Pendant les neuf mois où j'ai couvert un book National Accounts, en 2023-24, je n'étais pas d'accord avec un collègue sur la priorité à donner à deux comptes du périmètre. Il voulait concentrer l'effort sur un renouvellement immédiat, je voulais réinvestir sur un compte dormant à plus fort potentiel.",
        task: "Je devais faire avancer une décision que je ne pouvais pas prendre seul, puisque ce périmètre n'était à moi qu'en couverture.",
        action: [
          "J'ai reformulé sa position jusqu'à ce qu'il valide ma reformulation, pour être certain qu'on ne discutait pas d'un désaccord imaginaire.",
          "J'ai sorti les chiffres plutôt que de défendre mon intuition : historique de facturation, saisonnalité, potentiel estimé de chaque option.",
          "J'ai nommé explicitement le point de désaccord réel, une hypothèse de délai, et pas la conclusion générale, ce qui a réduit la discussion à quelque chose de vérifiable.",
          "J'ai proposé un test borné dans le temps sur le compte dormant, avec un critère d'arrêt convenu à l'avance, au lieu de demander qu'on me croie.",
          "J'ai porté sa recommandation sur le renouvellement en parallèle, pour qu'il ne soit pas perdant du compromis.",
        ],
        result:
          "Nous avons tenu les deux chantiers, et le désaccord ne s'est jamais transformé en conflit de personnes parce qu'il portait sur une hypothèse vérifiable. Le réflexe m'est resté : quand on n'est pas d'accord, j'isole l'hypothèse et je définis d'avance le fait qui tranchera.",
        learning:
          "Un désaccord non résolu finit toujours par coûter au client. Je préfère le nommer tôt, le réduire à une hypothèse, et accepter d'avoir tort rapidement.",
      },
      en: {
        situation:
          "During the nine months I covered a National Accounts book, in 2023-24, I disagreed with a colleague about how to prioritise two accounts on the patch. He wanted to concentrate effort on an immediate renewal, I wanted to reinvest in a dormant account with higher potential.",
        task: "I had to move forward a decision I could not make alone, since I only held that patch on coverage.",
        action: [
          "I restated his position until he confirmed my restatement, to be sure we were not arguing about an imaginary disagreement.",
          "I put the numbers on the table rather than defending my intuition: billing history, seasonality, estimated potential of each option.",
          "I named the actual point of disagreement, an assumption about timing, rather than the overall conclusion, which reduced the debate to something verifiable.",
          "I proposed a time-boxed test on the dormant account, with a stop criterion agreed in advance, instead of asking to be believed.",
          "I carried his recommendation on the renewal in parallel, so he did not lose out in the compromise.",
        ],
        result:
          "We ran both, and the disagreement never turned into a personal conflict because it was about a verifiable assumption. The reflex stayed with me: when we disagree, I isolate the assumption and define in advance the fact that will settle it.",
        learning:
          "An unresolved disagreement always ends up costing the client. I would rather name it early, reduce it to an assumption, and be wrong quickly.",
      },
    },
    metrics: [
      "Couverture d'un book National Accounts pendant 9 mois en 2023-24, santé et services à la personne",
    ],
    targetSeconds: 95,
  },

  {
    id: "lead-feedback",
    category: "leadership",
    difficulty: "classique",
    prompt: {
      fr: "Quel est le feedback le plus dur que tu as reçu, et qu'en as-tu fait ?",
      en: "What is the hardest feedback you have received, and what did you do with it?",
    },
    whatTheyTest: [
      "Si le feedback était réellement dur ou si tu as choisi une fausse faiblesse.",
      "Si tu as vérifié avant de te défendre ou de te flageller.",
      "Si le changement est observable, pas seulement une bonne intention.",
      "Si tu es retourné vers la personne pour fermer la boucle.",
    ],
    traps: [
      "Sortir la fausse faiblesse déguisée, du type on me reproche d'en faire trop.",
      "Raconter le feedback sans dire ce que tu as changé concrètement.",
      "Annoncer cinq changements : personne n'en tient cinq, et ça sonne faux.",
      "Oublier la preuve que le changement a tenu dans la durée.",
    ],
    followUps: [
      {
        question: "Tu as été d'accord tout de suite ?",
        how: "Non, et dis-le. Ce qui compte est que tu aies cherché la preuve au lieu d'argumenter sur le moment.",
      },
      {
        question: "Comment tu donnes un feedback dur, toi ?",
        how: "Une chose à la fois, un critère observable, et un retour dans deux semaines. Rattache-le à ta façon de faire monter les 25 professeurs de Cosmic Junior.",
      },
      {
        question: "Qu'est-ce qu'on te reprocherait encore aujourd'hui ?",
        how: "Donne une vraie limite actuelle et ce que tu fais pour la traiter. Ne recycle pas la même faiblesse déjà corrigée.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Le feedback décrit est inventé : rien dans la banque de faits de Nathan ne documente un retour reçu. Les faits qui l'entourent sont réels, le rythme de 60 à 80 démonstrations et revues de performance par mois et le passage Senior AE en septembre 2023, quinze mois après l'arrivée en juin 2022. Remplace par le vrai feedback dur que tu as reçu et garde la structure : ce qui t'a été dit, la vérification, l'unique changement mesurable, la preuve qu'il a tenu.",
    answer: {
      fr: {
        situation:
          "À mes débuts chez Indeed, je tenais 60 à 80 démonstrations et revues de performance par mois. Un manager m'a dit que je parlais trop pendant mes rendez-vous et que je vendais avant d'avoir compris le problème du client.",
        task: "Je devais vérifier si c'était vrai plutôt que me défendre, puis changer une chose mesurable.",
        action: [
          "J'ai encaissé sans argumenter sur le moment, parce que discuter un feedback dur le jour même empêche simplement de l'entendre.",
          "J'ai cherché la preuve au lieu de croire sur parole : j'ai repris mes rendez-vous et compté à quel moment j'introduisais l'offre.",
          "J'ai changé une seule chose, et une chose vérifiable : ne rien proposer avant d'avoir obtenu les chiffres de recrutement du client, postes ouverts et délai de recrutement.",
          "J'ai utilisé mon volume de rendez-vous comme terrain d'entraînement, ce qui m'a donné des dizaines de répétitions par mois au lieu d'une par semaine.",
          "Je suis retourné voir ce manager deux mois plus tard avec ce que j'avais changé, pour qu'il me dise si ça se voyait de l'extérieur.",
        ],
        result:
          "Je suis passé Senior Account Executive en septembre 2023, quinze mois après mon arrivée, et ce réflexe me sert encore aujourd'hui : sur un réseau décentralisé, la première question n'est jamais l'offre, c'est la structure de décision. Le changement a tenu parce qu'il était formulé comme une règle et pas comme une intention.",
        learning:
          "Le feedback vraiment dur est celui qui touche une chose que tu croyais être une force. C'est précisément pour ça qu'il faut le vérifier avant de le juger injuste.",
      },
      en: {
        situation:
          "In my early months at Indeed I was running 60 to 80 demos and performance reviews a month. A manager told me I talked too much in meetings and that I was selling before I had understood the client's problem.",
        task: "I had to check whether it was true rather than defend myself, then change one measurable thing.",
        action: [
          "I took it without arguing in the moment, because debating hard feedback the same day simply stops you hearing it.",
          "I looked for evidence instead of taking it on trust: I went back through my meetings and counted at what point I introduced the offer.",
          "I changed one thing, and a verifiable one: propose nothing before I have the client's hiring numbers, open roles and time to hire.",
          "I used my meeting volume as a training ground, which gave me dozens of repetitions a month rather than one a week.",
          "I went back to that manager two months later with what I had changed, so he could tell me whether it showed from the outside.",
        ],
        result:
          "I was promoted to Senior Account Executive in September 2023, fifteen months after joining, and the reflex still serves me: on a decentralised network the first question is never the offer, it is the decision structure. The change held because it was framed as a rule and not as an intention.",
        learning:
          "Genuinely hard feedback is the kind that hits something you believed was a strength. That is exactly why you should verify it before deciding it is unfair.",
      },
    },
    metrics: [
      "60 à 80 démonstrations et revues de performance par mois à ses débuts chez Indeed",
      "AE DCA en juin 2022, Senior AE en septembre 2023, soit 15 mois",
    ],
    targetSeconds: 95,
  },

  {
    id: "lead-transverse",
    category: "leadership",
    difficulty: "moins-classique",
    prompt: {
      fr: "Comment travailles-tu avec des équipes transverses pour délivrer pour un client ?",
      en: "How do you work with cross-functional teams to deliver for a client?",
    },
    whatTheyTest: [
      "Si tu sais cartographier une décision avant de mobiliser des gens.",
      "Si tu fais des demandes précises ou si tu envoies du contexte en espérant de l'aide.",
      "Si tu protèges la cohérence des chiffres entre les équipes.",
      "Si le résultat a dépassé le deal lui-même.",
    ],
    traps: [
      "Décrire un processus au lieu d'un cas précis, avec un montant et une date.",
      "T'attribuer le travail des autres fonctions : nomme ce qu'elles ont apporté.",
      "Oublier l'échelon local : sur un réseau, l'accord central ne suffit jamais.",
      "Ne pas dire ce qui a failli faire échouer le dossier.",
    ],
    followUps: [
      {
        question: "Qu'est-ce qui a failli faire capoter le deal ?",
        how: "Donne un vrai point de friction et comment tu l'as traité. Le plus crédible est la divergence entre deux versions des chiffres.",
      },
      {
        question: "Comment tu obtiens de l'aide d'une équipe qui ne te doit rien ?",
        how: "Demande précise, datée, avec l'usage expliqué. Dis que tu donnes toujours le retour sur ce que leur contribution a produit.",
      },
      {
        question: "Que serait-il arrivé sans les agences ?",
        how: "Sois honnête : l'entrée par les agences est ce qui a débloqué le dossier après près de trois ans. Rattache-le à la progression de 101 986 € en 2023 à 547 277 € en 2026.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le deal Système U, son montant de 438 204 €, sa date du 18 mai 2026, l'entrée par les agences et la progression du réseau sont réels. La composition de l'équipe transverse et la répartition des rôles sont reconstituées : remplace par les fonctions et les interlocuteurs qui ont réellement contribué.",
    answer: {
      fr: {
        situation:
          "Le deal Système U de 438 204 €, closé le 18 mai 2026, ne s'est pas joué entre le client et moi. Il a fallu faire travailler ensemble les agences du réseau, le centre, et plusieurs fonctions internes qui ne me reportent pas.",
        task: "Je devais faire converger des interlocuteurs qui n'avaient ni le même calendrier ni les mêmes indicateurs vers une seule décision d'investissement.",
        action: [
          "J'ai cartographié qui décide quoi avant de solliciter qui que ce soit, parce que sur un réseau décentralisé l'erreur classique est de parler au centre en croyant parler au décideur.",
          "J'ai donné à chaque fonction interne une demande précise et datée plutôt qu'un contexte général, pour que personne n'ait à deviner ce que j'attendais.",
          "J'ai maintenu une seule version des chiffres pour tout le monde, parce que deux tableaux qui ne disent pas la même chose suffisent à arrêter un dossier.",
          "J'ai fait remonter les objections des agences au centre au lieu de les traiter séparément, ce qui a évité que la même question soit rouverte trois fois.",
          "J'ai animé plus de 20 webinars touchant plus de 600 franchisés, parce que l'adoption locale se prépare avant la signature centrale et pas après.",
        ],
        result:
          "438 204 € closés le 18 mai 2026, et surtout un réseau passé de 101 986 € de bookings en 2023 à 547 277 € en 2026, donc l'effet ne s'est pas arrêté au deal. Ce schéma de travail transverse est devenu celui que j'applique par défaut sur mes réseaux.",
        learning:
          "Sur un compte transverse, ce qui coûte le plus cher n'est pas le désaccord ouvert, c'est la divergence silencieuse entre deux versions des chiffres. Je la traite en premier, avant même de parler d'offre.",
      },
      en: {
        situation:
          "The 438,204 euro Système U deal, closed on 18 May 2026, was not settled between the client and me. It required the network's agencies, the head office and several internal functions that do not report to me to work together.",
        task: "I had to bring together stakeholders with different calendars and different metrics towards a single investment decision.",
        action: [
          "I mapped who decides what before approaching anyone, because on a decentralised network the classic mistake is talking to head office and assuming you are talking to the decision maker.",
          "I gave each internal function a precise, dated request rather than general context, so nobody had to guess what I needed.",
          "I maintained one single version of the numbers for everyone, because two tables that disagree are enough to stall a deal.",
          "I escalated the agencies' objections to head office rather than handling them separately, which stopped the same question being reopened three times.",
          "I ran more than 20 webinars reaching over 600 franchisees, because local adoption is prepared before the central signature, not after.",
        ],
        result:
          "438,204 euros closed on 18 May 2026, and above all a network that went from 101,986 euros of bookings in 2023 to 547,277 euros in 2026, so the effect did not stop at the deal. That cross-functional pattern is now my default on my networks.",
        learning:
          "On a cross-functional account, the expensive thing is not open disagreement, it is a silent divergence between two versions of the numbers. I deal with that first, before even discussing the offer.",
      },
    },
    metrics: [
      "Deal de 438 204 € closé le 18 mai 2026, réseau Système U via agences",
      "Système U : 101 986 € de bookings en 2023, 547 277 € en 2026",
      "Plus de 20 webinars, plus de 600 franchisés touchés",
    ],
    targetSeconds: 105,
  },

  {
    id: "lead-mentorat",
    category: "leadership",
    difficulty: "moins-classique",
    prompt: {
      fr: "As-tu déjà fait monter quelqu'un en compétence ?",
      en: "Have you ever helped someone build their skills?",
    },
    whatTheyTest: [
      "Si tu as une méthode reproductible ou seulement de la bonne volonté.",
      "Si tu observes avant de conseiller.",
      "Si la progression est mesurable chez l'autre, pas chez toi.",
      "Si ce que tu as mis en place a survécu sans toi.",
    ],
    traps: [
      "Te mettre au centre de l'histoire : c'est la progression de l'autre qui compte.",
      "Donner cinq conseils à la fois, ce qui ne produit jamais de changement.",
      "Rester sur des qualités humaines sans critère observable.",
      "Oublier de dire ce qui n'a pas marché avec quelqu'un que tu n'as pas réussi à faire progresser.",
    ],
    followUps: [
      {
        question: "Et quelqu'un que tu n'as pas réussi à faire progresser ?",
        how: "Donne un vrai cas et ce que tu en as tiré. Un candidat qui réussit avec tout le monde n'est pas crédible.",
      },
      {
        question: "Tu veux manager ?",
        how: "Réponds par l'expérience : 25 professeurs recrutés et managés chez Cosmic Junior, ça t'a plu, et tu veux d'abord maîtriser le métier ici avant de le demander.",
      },
      {
        question: "Comment tu mesures qu'une personne a progressé ?",
        how: "Par le critère observable que tu as fixé au départ, pas par ton impression. Cite le critère que tu avais donné aux professeurs.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le recrutement et le management de 25 professeurs chez Cosmic Junior, les plus de 3 000 cours délivrés, la trajectoire de 0 à 100 000 $ d'ARR en moins de huit mois et la couverture d'un book Inside Sales pendant six mois sont réels. La méthode pédagogique décrite, l'observation d'un cours entier, le critère des dix premières minutes et l'observation entre pairs, est reconstituée : remplace par ce que tu faisais réellement et, si tu as une personne précise en tête, nomme sa progression.",
    answer: {
      fr: {
        situation:
          "Chez Cosmic Junior, j'ai recruté et managé 25 professeurs pour délivrer plus de 3 000 cours de code à des enfants. Plusieurs étaient de très bons techniciens qui n'avaient jamais enseigné.",
        task: "Je devais faire monter en compétence des gens dont le savoir-faire technique était acquis mais dont la pratique pédagogique ne l'était pas du tout.",
        action: [
          "J'ai observé un cours en entier avant de donner le moindre conseil, pour parler de faits précis et pas d'une impression générale.",
          "J'ai réduit le feedback à une seule chose à changer par semaine, parce qu'une liste de cinq points ne produit aucun changement.",
          "J'ai remplacé les objectifs vagues par un critère observable, par exemple faire produire quelque chose à l'enfant dans les dix premières minutes.",
          "J'ai fait observer les meilleurs par les nouveaux, ce qui a transformé le sujet en pratique d'équipe au lieu d'un rapport de correction entre eux et moi.",
          "J'ai réutilisé la même méthode chez Indeed en reprenant le book Inside Sales d'une collègue pendant six mois, en documentant ce que je faisais pour que la reprise soit possible après moi.",
        ],
        result:
          "Les 25 professeurs ont délivré plus de 3 000 cours, et la société est passée de 0 à 100 000 $ d'ARR en moins de huit mois, ce qui n'aurait pas tenu avec une qualité pédagogique inégale. L'effet durable est la méthode elle-même : une chose à la fois, un critère observable, et l'observation entre pairs.",
        learning:
          "On ne fait pas monter quelqu'un en lui disant ce qui ne va pas, on le fait en lui donnant un critère qu'il peut vérifier tout seul la fois suivante.",
      },
      en: {
        situation:
          "At Cosmic Junior I recruited and managed 25 teachers to deliver more than 3,000 coding classes to children. Several were excellent technically and had never taught.",
        task: "I had to build skills in people whose technical knowledge was already there but whose teaching practice was not at all.",
        action: [
          "I watched a full class before giving a single piece of advice, so I could talk about specific facts rather than a general impression.",
          "I cut feedback down to one thing to change per week, because a list of five points produces no change at all.",
          "I replaced vague goals with an observable criterion, for instance getting the child to produce something within the first ten minutes.",
          "I had new teachers observe the best ones, which turned the topic into a team practice rather than a correction relationship between them and me.",
          "I reused the same method at Indeed when I covered a colleague's Inside Sales book for six months, documenting what I did so someone could pick it up after me.",
        ],
        result:
          "The 25 teachers delivered more than 3,000 classes, and the company went from zero to $100,000 in ARR in under eight months, which would not have held with uneven teaching quality. The lasting effect is the method itself: one thing at a time, an observable criterion, and peer observation.",
        learning:
          "You do not grow someone by telling them what is wrong, you grow them by giving them a criterion they can check on their own the next time.",
      },
    },
    metrics: [
      "25 professeurs recrutés et managés chez Cosmic Junior, plus de 3 000 cours délivrés",
      "0 à 100 K$ d'ARR en moins de 8 mois",
      "Couverture du book Inside Sales d'une collègue pendant 6 mois",
    ],
    targetSeconds: 100,
  },
];
