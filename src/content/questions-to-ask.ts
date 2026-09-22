import type { QuestionToAsk, QuestionToAvoid } from "../types";

/**
 * Questions à poser en fin d'entretien. Elles sont classées par interlocuteur,
 * parce qu'une question posée au mauvais interlocuteur tombe à plat : un recruteur
 * ne connaît pas la structure d'un portefeuille, un pair ne connaît pas la roadmap.
 */
export const questionsToAsk: QuestionToAsk[] = [
  // ------------------------------------------------------------- le poste réel
  {
    id: "segmentation-book",
    theme: "Le poste et le portefeuille",
    ask: {
      fr: "Comment le portefeuille est-il segmenté, et quelle part de mon temps est attendue sur les plus gros comptes par rapport au reste ?",
      en: "How is the book segmented, and how much of my time is expected on the largest accounts against the tail?",
    },
    audience: ["manager", "pair"],
    why: "Tu montres que tu penses en allocation de temps, pas en liste de comptes. C'est exactement le réflexe attendu d'un gestionnaire de comptes stratégiques.",
    listenFor:
      "Une réponse précise indique une équipe qui pilote. Une réponse floue, ou un portefeuille qui s'étend sans priorisation assumée, annonce que tu passeras ton temps à arbitrer seul.",
    strong: true,
  },
  {
    id: "combien-comptes",
    theme: "Le poste et le portefeuille",
    ask: {
      fr: "Combien de comptes compte un portefeuille type ici, et à quelle fréquence l'équipe les revoit ?",
      en: "How many accounts sit in a typical book here, and how often does the team review them?",
    },
    audience: ["manager", "pair"],
    why: "Question factuelle qui te permet de calibrer ton discours sur ton propre book, très large, et de montrer que tu sais qu'une cadence de revue est une décision et non une habitude.",
    listenFor: "Le ratio comptes par personne te dit si le métier ressemble à du conseil approfondi ou à de la couverture de volume.",
  },
  {
    id: "premiere-annee",
    theme: "Le poste et le portefeuille",
    ask: {
      fr: "À quoi ressemble une bonne première année dans ce poste, exprimée autrement qu'en atteinte de quota ?",
      en: "What does a strong first year look like in this role, expressed in something other than quota attainment?",
    },
    audience: ["manager", "direction"],
    why: "Tu signales que tu connais la différence entre faire son chiffre et construire un portefeuille. C'est la question qui distingue un candidat senior.",
    listenFor:
      "Si la seule réponse est le quota, tu sauras que la profondeur stratégique dont on parle en entretien n'est pas mesurée dans la réalité.",
    strong: true,
  },
  {
    id: "perdre-budget",
    theme: "Le poste et le portefeuille",
    ask: {
      fr: "Où l'équipe perd-elle aujourd'hui du budget ou des deals, et pour quelles raisons ?",
      en: "Where does the team lose budget or deals today, and why?",
    },
    audience: ["manager", "pair"],
    why: "Tu demandes le problème avant de demander l'opportunité. Peu de candidats osent, et c'est ce qui rend la question mémorable.",
    listenFor:
      "Une réponse honnête sur un concurrent, une faiblesse produit ou un sujet de mesure te donne la matière de ton discours de clôture. Une réponse qui nie toute perte est un signal en soi.",
    strong: true,
  },

  // --------------------------------------------------------- équipe et manager
  {
    id: "partenaires-internes",
    theme: "Équipe et fonctionnement",
    ask: {
      fr: "Quels partenaires internes entourent un compte stratégique ici, et qui porte la conversation de mesure avec le client ?",
      en: "Which internal partners sit around a strategic account here, and who owns the measurement conversation with the client?",
    },
    audience: ["manager", "pair"],
    why: "Tu montres que tu sais qu'un compte stratégique se délivre à plusieurs, et que la mesure est un sujet politique autant que technique.",
    listenFor: "Si personne ne porte clairement la mesure, c'est une zone où tu peux te rendre indispensable très vite.",
  },
  {
    id: "style-management",
    theme: "Équipe et fonctionnement",
    ask: {
      fr: "Comment travaillez-vous avec votre équipe au quotidien, et qu'attendez-vous d'un commercial autonome ?",
      en: "How do you work with your team day to day, and what do you expect from a self-directed seller?",
    },
    audience: ["manager"],
    why: "Tu poses la question de l'autonomie sans la revendiquer, ce qui est plus élégant que d'affirmer que tu es autonome.",
    listenFor:
      "Écoute la place laissée à l'initiative. Un manager qui décrit surtout du reporting te dit à quoi ressembleront tes semaines.",
  },
  {
    id: "equipe-composition",
    theme: "Équipe et fonctionnement",
    ask: {
      fr: "Comment l'équipe est-elle composée aujourd'hui, et qu'est-ce qui manque au collectif que le prochain arrivant pourrait apporter ?",
      en: "How is the team made up today, and what is missing in the group that the next hire could bring?",
    },
    audience: ["manager"],
    why: "C'est la meilleure façon d'entendre en clair ce qu'on attend de toi, et donc de recadrer ta candidature en dernière minute.",
    listenFor: "La réponse te donne la phrase de clôture idéale, puisqu'elle nomme le manque que tu peux combler.",
    strong: true,
  },
  {
    id: "turnover",
    theme: "Équipe et fonctionnement",
    ask: {
      fr: "Quel est le parcours des personnes qui ont réussi dans ce poste, et où sont-elles allées ensuite ?",
      en: "What does the path of people who succeeded in this role look like, and where did they go next?",
    },
    audience: ["manager", "recruteur"],
    why: "Question de mobilité posée par la preuve plutôt que par l'ambition, ce qui évite de sonner impatient.",
    listenFor: "Des trajectoires internes variées indiquent une entreprise qui fait grandir. Aucune trajectoire citée est une réponse en soi.",
  },

  // -------------------------------------------------------- stratégie & produit
  {
    id: "changement-12-mois",
    theme: "Stratégie et produit",
    ask: {
      fr: "Quel est le plus grand changement attendu sur ce poste dans les douze prochains mois ?",
      en: "What is the biggest change coming to this role over the next twelve months?",
    },
    audience: ["manager", "direction"],
    why: "Tu montres que tu te projettes dans un métier en mouvement, et tu récupères une information que personne ne met dans une offre d'emploi.",
    listenFor:
      "L'automatisation de la vente, la bascule de la mesure et l'arrivée des agents sont les trois réponses probables. Chacune te dit sur quoi insister dans tes derniers mots.",
    strong: true,
  },
  {
    id: "feedback-produit",
    theme: "Stratégie et produit",
    ask: {
      fr: "Comment le retour terrain des annonceurs remonte-t-il concrètement aux équipes produit, et avez-vous un exemple où cela a changé quelque chose ?",
      en: "How does advertiser feedback actually reach the product teams, and do you have an example where it changed something?",
    },
    audience: ["manager", "pair", "direction"],
    why: "Le poste inclut de porter la voix du marché au produit. Demander un exemple prouve que tu sais distinguer un processus affiché d'un processus réel.",
    listenFor: "Un exemple précis est excellent. Une description de formulaire sans exemple veut dire que le canal existe mais ne sert pas.",
  },
  {
    id: "automatisation-conseil",
    theme: "Stratégie et produit",
    ask: {
      fr: "À mesure que les campagnes s'automatisent, sur quoi se joue encore la valeur d'un commercial auprès d'un grand annonceur ?",
      en: "As campaigns become more automated, where does a seller still create value for a large advertiser?",
    },
    audience: ["manager", "pair", "direction"],
    why: "Tu poses la question que tout le secteur se pose, et tu invites ton interlocuteur à réfléchir avec toi. C'est la question qui crée une conversation plutôt qu'un échange de réponses.",
    listenFor:
      "Création, mesure, cadrage business et gouvernance sont les réponses attendues. Si ton interlocuteur hésite, tu viens de trouver l'espace où tu peux te différencier.",
    strong: true,
  },
  {
    id: "concurrence-retail",
    theme: "Stratégie et produit",
    ask: {
      fr: "Face au retail media et aux plateformes de commerce, quel est l'argument qui fonctionne le mieux aujourd'hui auprès de vos annonceurs ?",
      en: "Against retail media and commerce platforms, which argument works best with your advertisers today?",
    },
    audience: ["manager", "pair"],
    why: "Tu montres que tu as étudié le marché et non seulement l'entreprise, et tu apprends le discours réellement utilisé sur le terrain.",
    listenFor: "La réponse te donne le vocabulaire maison, réutilisable dès ton premier jour.",
  },

  // ------------------------------------------------------------- IA et outillage
  {
    id: "ia-equipe",
    theme: "IA et outillage",
    ask: {
      fr: "Comment l'équipe utilise-t-elle l'IA dans son travail quotidien aujourd'hui, et qu'est-ce qui reste manuel alors que ça ne devrait plus l'être ?",
      en: "How does the team use AI in its daily work today, and what is still manual that should not be?",
    },
    audience: ["manager", "pair"],
    why: "C'est ta question signature, celle qui prolonge naturellement ce que tu as raconté sur tes propres outils. Elle ouvre la porte à une proposition concrète.",
    listenFor:
      "La partie encore manuelle est ton terrain de jeu des trois premiers mois. Note-la précisément, elle devient ta première victoire visible.",
    strong: true,
  },
  {
    id: "ia-garde-fous",
    theme: "IA et outillage",
    ask: {
      fr: "Existe-t-il des garde-fous sur l'usage de l'IA avec de la donnée client, et qui les définit ?",
      en: "Are there guardrails on using AI with client data, and who defines them?",
    },
    audience: ["manager", "pair"],
    why: "Tu passes d'enthousiaste à responsable en une question, ce qui est précisément la différence que tu veux marquer sur ce sujet.",
    listenFor: "S'il n'y a pas de cadre, dis que tu en as construit un chez toi. C'est une contribution rare et immédiatement crédible.",
  },

  // ---------------------------------------------------------- process et suite
  {
    id: "suite-process",
    theme: "Process et suite",
    ask: {
      fr: "Quelles sont les prochaines étapes du process, et y a-t-il quelque chose que je devrais préparer plus précisément pour la suite ?",
      en: "What are the next steps in the process, and is there anything I should prepare more precisely for them?",
    },
    audience: ["recruteur", "manager"],
    why: "Tu clarifies la suite et tu invites un feedback implicite sur ce qui a manqué. C'est la question la plus utile du lot, et la plus simple.",
    listenFor:
      "Si on te demande de préparer un cas ou un plan de compte, c'est un bon signe. Un silence gêné sur le calendrier en est un autre.",
    strong: true,
  },
  {
    id: "reserve",
    theme: "Process et suite",
    ask: {
      fr: "Y a-t-il un point de mon parcours sur lequel vous avez une réserve, que je pourrais éclairer maintenant ?",
      en: "Is there anything in my background you have a reservation about, that I could clear up now?",
    },
    audience: ["manager", "recruteur"],
    why: "Question de vendeur : tu demandes l'objection avant la décision. Elle demande de l'aplomb, et c'est justement pour cela qu'elle marque.",
    listenFor:
      "Toute réserve exprimée est une chance de la traiter à chaud. Sur ton profil, attends-toi à une question sur la taille moyenne de tes comptes.",
    strong: true,
  },
];

export const questionsToAvoid: QuestionToAvoid[] = [
  {
    ask: "Quelle est la rémunération et comment fonctionne le variable ?",
    why: "Légitime, mais pas au premier entretien et pas au manager : cela déplace la conversation de la valeur vers le coût.",
    instead: "Garde-la pour le recruteur, une fois l'intérêt mutuel établi, et formule-la comme une question de structure du plan plutôt que de montant.",
  },
  {
    ask: "Y a-t-il du télétravail, et combien de jours ?",
    why: "Question d'organisation qui, posée en clôture d'un entretien commercial, devient le dernier souvenir que tu laisses.",
    instead: "Adresse-la au recruteur en amont ou en toute fin de process, avec les sujets administratifs.",
  },
  {
    ask: "Dans combien de temps peut-on évoluer vers un poste de manager ?",
    why: "Tu sembles déjà ailleurs avant d'avoir commencé, et tu suggères que le poste proposé est une étape à franchir vite.",
    instead: "Demande plutôt le parcours des personnes qui ont réussi dans ce poste, tu obtiens la même information sans le signal d'impatience.",
  },
  {
    ask: "Que fait votre entreprise exactement ?",
    why: "Toute question dont la réponse est publique démontre que tu n'as pas préparé, et coûte plus que le silence.",
    instead: "Transforme-la en question d'interprétation : ce que tu as lu, et ce que tu voudrais comprendre derrière.",
  },
  {
    ask: "Est-ce que le portefeuille est facile à faire grandir ?",
    why: "Tu demandes si le travail sera confortable, ce qui est l'inverse du message que tu veux laisser.",
    instead: "Demande où le budget se perd aujourd'hui : c'est la même curiosité, orientée problème plutôt que confort.",
  },
];
