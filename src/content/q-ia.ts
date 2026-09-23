import type { Question } from "../types";

export const qIa: Question[] = [
  {
    id: "ia-usage",
    category: "ia",
    difficulty: "classique",
    priority: true,
    prompt: {
      fr: "Comment utilises-tu l'IA aujourd'hui dans ton travail ?",
      en: "How do you use AI in your work today?",
    },
    whatTheyTest: [
      "Si tu décris un jugement ou si tu récites une liste d'outils.",
      "Si l'IA touche ta donnée client réelle ou seulement du texte générique.",
      "Si tu as posé le contrôle avant qu'on te pose la question.",
      "Si tu as construit quelque chose de réutilisable, ou si tu es seulement utilisateur.",
    ],
    traps: [
      "Énumérer ChatGPT, Copilot et Perplexity : les recruteurs disent eux-mêmes ne plus distinguer ceux qui comprennent la technologie de ceux qui en connaissent le lexique.",
      "Dire que tu n'utilises pas vraiment l'IA : en 2026, ça se lit comme un décalage.",
      "Vendre du volume : plus d'e-mails plus vite est le mauvais signal, l'avantage est la précision.",
      "Parler outils et modèles sans jamais dire quelle décision sort de la chaîne.",
    ],
    followUps: [
      {
        question: "Qui valide ce que l'agent produit ?",
        how: "Nomme le mécanisme : le garde-fou intercepte l'action et bloque l'écriture, donc la validation n'est pas une bonne intention, elle est techniquement obligatoire.",
      },
      {
        question: "Qu'est-ce que tu ne confies pas à l'IA ?",
        how: "Réponds sans hésiter : tout chiffre qui part chez un client sans recoupement, et le choix de ce qu'on ne dit pas. C'est ce qui te distingue le plus vite.",
      },
      {
        question: "Tes collègues s'en servent vraiment ?",
        how: "Dis oui et dis pourquoi c'est possible : les procédures sont packagées et le garde-fou rend l'usage acceptable sur de la donnée client.",
      },
    ],
    basis: "vecu",
    basisNote:
      "Tout est vérifiable chez Indeed. Ne cite pas de marque d'outil sauf si on te le demande : ce qui porte, c'est le garde-fou et la décision, pas le nom du modèle.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Depuis 2025, je travaille avec un agent connecté à nos sources internes, la plateforme de données et le CRM. Il lit la donnée là où elle vit, ce qui déplace le risque : une sortie reste plausible même quand elle est fausse.",
        task: "Je voulais un usage qui tienne devant un client, donc un dispositif de contrôle avant un dispositif de production.",
        action: [
          "J'ai commencé par les tâches que je refaisais chaque semaine, pas par les plus impressionnantes : analyse de compte, deck d'audit, refresh du forecast, tri des alertes contractuelles, réponses clients.",
          "J'en ai fait une vingtaine de procédures réutilisables, et je les ai partagées plutôt que de les garder, pour que le travail soit construit une fois.",
          "J'ai écrit un garde-fou qui bloque toute écriture de l'agent sur de la donnée client : sauvegarde dans le CRM, lancement de campagne, changement de budget.",
          "J'ai gardé pour moi la décision sur tout ce qui sort chez un client, et je recoupe chaque chiffre avant de le dire.",
        ],
        result:
          "Une vingtaine de procédures tournent pour plusieurs personnes, et le point de contrôle humain est inscrit dans l'outil plutôt que dans ma bonne volonté.",
        learning:
          "La valeur n'est pas dans le modèle. Elle est dans l'accès à la donnée et dans l'endroit où l'humain reprend la main.",
      },
      en: {
        situation:
          "Since 2025 I have worked with an agent connected to our internal sources, the data platform and the CRM. It reads the data where it lives, which moves the risk: an output stays plausible even when it is wrong.",
        task: "I wanted a setup that holds up in front of a client, so a control layer before a production layer.",
        action: [
          "I started with the tasks I redid every week, not with the impressive ones: account analysis, audit decks, forecast refresh, contract alert triage, client replies.",
          "I turned around twenty of them into reusable procedures, and I shared them rather than keeping them, so the work is built once.",
          "I wrote a guardrail that blocks any write by the agent on client data: a CRM save, a campaign launch, a budget change.",
          "I kept the decision on everything that reaches a client, and I cross-check every number before I say it.",
        ],
        result:
          "Around twenty procedures now run for several people, and the human checkpoint sits in the tooling rather than in my good intentions.",
        learning:
          "The value is not in the model. It is in data access and in the point where the human takes the decision back.",
      },
    },
    script: {
      fr: {
        hook: "J'utilise l'IA sur ma donnée réelle, et ce qui compte dans ma façon de m'en servir n'est pas l'outil, c'est le moment où je reprends la main.",
        body: [
          "Mon agent est branché sur nos sources internes, la plateforme de données et le CRM, donc il lit la donnée là où elle vit plutôt que ce que je colle dans un chat. J'ai transformé une vingtaine de tâches récurrentes en procédures réutilisables, partagées avec des collègues : analyse de compte, deck d'audit, refresh du forecast, réponses clients.",
          "Le point important est ailleurs. J'ai écrit un garde-fou qui intercepte chaque action de l'agent et bloque toute écriture sur de la donnée client : une sauvegarde dans le CRM, un lancement de campagne, un changement de budget. L'agent prépare, je décide. Le contrôle est dans l'outil et plus dans ma discipline.",
          "Ce que ça change n'est pas le volume. Je n'envoie pas plus d'e-mails, je prépare mieux le compte que je travaille et je dis quelque chose de juste sur sa zone. En revanche, aucun chiffre ne part vers un client sans que je l'aie recoupé : un modèle se trompe avec le même aplomb qu'il a raison.",
        ],
        closing: "C'est le cadre, et j'ai un cas précis où ce contrôle a arrêté un envoi si vous voulez le détail.",
        keyBeats: [
          "L'agent lit la donnée à la source",
          "Une vingtaine de procédures partagées",
          "Le garde-fou bloque l'écriture",
          "Précision, pas volume",
          "Proposer le cas précis",
        ],
      },
      en: {
        hook: "I use AI on my own live data, and what matters in the way I use it is not the tool, it is the point where I take the decision back.",
        body: [
          "My agent is wired into our internal sources, the data platform and the CRM, so it reads the data where it lives rather than what I paste into a chat. I turned around twenty recurring tasks into reusable procedures, shared with colleagues: account analysis, audit decks, forecast refresh, client replies.",
          "The important part is elsewhere. I wrote a guardrail that intercepts every agent action and blocks any write on client data: a CRM save, a campaign launch, a budget change. The agent prepares, I decide. The control sits in the tooling and no longer in my discipline.",
          "What this changes is not volume. I do not send more emails, I prepare the account I am working on better and I say something accurate about its local market. On the other hand, no number reaches a client before I have cross-checked it: a model is wrong with the same confidence it is right.",
        ],
        closing: "That is the frame, and I have a specific case where that check stopped a send, if you want the detail.",
        keyBeats: [
          "Agent reads data at source",
          "Twenty shared procedures",
          "Guardrail blocks any write",
          "Precision, not volume",
          "Offer the specific case",
        ],
      },
    },
    metrics: [
      "Une vingtaine de tâches récurrentes transformées en procédures réutilisables et partagées",
      "Garde-fou bloquant toute écriture sur de la donnée client : CRM, campagne, budget",
    ],
    targetSeconds: 86,
  },

  {
    id: "ia-exemple-concret",
    category: "ia",
    difficulty: "moins-classique",
    priority: true,
    prompt: {
      fr: "Donne-moi un exemple précis où l'IA t'a fait gagner du temps ou de l'argent.",
      en: "Give me a specific example where AI saved you time or money.",
    },
    whatTheyTest: [
      "Si tu as un cas daté et chiffré, ou une impression générale de gain de temps.",
      "Si le gain porte sur la précision du message ou seulement sur le débit.",
      "Si tu peux décrire la chaîne complète, de la donnée jusqu'à l'envoi.",
      "Si tu nommes le moment où tu as repris la main.",
    ],
    traps: [
      "Dire que tu gagnes deux heures par jour sans pouvoir dire sur quoi.",
      "Présenter le volume comme la performance : 165 e-mails sans contrôle ne valent rien.",
      "Laisser croire que l'agent envoie : dis explicitement que c'est toi qui déclenches.",
      "Oublier l'arbitrage, ici le refus d'élargir la liste aux zones sans donnée locale.",
    ],
    followUps: [
      {
        question: "Quel a été le taux de réponse ?",
        how: "Si tu ne l'as pas, dis-le et redonne ce que tu peux prouver : zéro crédit consommé, une mesure locale par destinataire, une chaîne réutilisable.",
      },
      {
        question: "En quoi c'est mieux qu'un mailing classique ?",
        how: "Sur le fond : chaque gérant reçoit la part de clics candidats de sa propre zone, pas une moyenne nationale. C'est ce qui n'était pas faisable à la main.",
      },
      {
        question: "Tu as relu les 165 e-mails ?",
        how: "Décris la page de revue compte par compte, puis enchaîne sur le contrôle qui a intercepté des messages faux si on te pousse.",
      },
    ],
    basis: "vecu",
    basisNote:
      "Campagne réelle d'août 2026. Tu n'as pas le taux de réponse, donc ne le promets pas et reste sur ce que tu as mesuré.",
    answer: {
      fr: {
        situation:
          "En août 2026, je préparais une campagne d'approche sur deux réseaux de franchise de mon portefeuille. Je voulais que chaque gérant reçoive le benchmark de sa propre zone, en part de clics candidats, plutôt qu'une moyenne nationale.",
        task: "Je devais produire 165 e-mails individualisés sans acheter d'enrichissement de données, et sans que la personnalisation devienne un risque.",
        action: [
          "J'ai fait calculer le benchmark zone par zone sur notre plateforme de données, donc chaque message porte les chiffres de l'établissement auquel il s'adresse.",
          "J'ai vérifié la délivrabilité des adresses avec un script interne au lieu d'un outil payant, ce qui a ramené le coût de sourcing de la campagne à zéro crédit consommé.",
          "J'ai arbitré contre le volume : j'ai écarté les établissements pour lesquels je n'avais pas de donnée locale, parce qu'un message générique aurait décrédibilisé les autres.",
          "J'ai imposé une page de revue compte par compte avant l'envoi, et j'ai gardé le déclenchement pour moi : l'agent prépare les 165 messages, il n'en envoie aucun.",
          "J'ai gardé la chaîne réutilisable au lieu d'une campagne jetable, donc le réseau suivant repart du même socle.",
        ],
        result:
          "165 e-mails individualisés sont partis sur les deux réseaux, avec zéro crédit d'enrichissement consommé, et chaque gérant a reçu la mesure de sa propre zone. Le changement durable est que l'argument local est devenu tenable à 165 exemplaires, alors qu'à la main je me serais rabattu sur une moyenne nationale.",
        learning:
          "Le gain n'est pas la vitesse de rédaction, c'est la précision : je ne dis pas plus de choses, je dis quelque chose de vérifiable à chaque destinataire.",
      },
      en: {
        situation:
          "In August 2026 I was preparing an outreach campaign on two franchise networks in my book. I wanted every manager to receive the benchmark of their own catchment area, in share of candidate clicks, rather than a national average.",
        task: "I had to produce 165 individually written emails without buying data enrichment, and without letting personalisation become a risk.",
        action: [
          "I had the benchmark computed area by area on our data platform, so each message carries the numbers of the site it is addressed to.",
          "I checked address deliverability with an in-house script instead of a paid tool, which brought the sourcing cost of the campaign down to zero credits consumed.",
          "I traded against volume: I dropped the sites where I had no local data, because a generic message would have undermined the credibility of the others.",
          "I imposed an account by account review page before sending, and I kept the trigger myself: the agent prepares the 165 messages, it sends none of them.",
          "I kept the chain reusable instead of running a throwaway campaign, so the next network starts from the same base.",
        ],
        result:
          "165 individually written emails went out across the two networks, with zero enrichment credits consumed, and every manager received the measurement of their own area. The lasting change is that a local argument became workable at 165 recipients, where by hand I would have fallen back on a national average.",
        learning:
          "The gain is not writing speed, it is precision: I do not say more things, I say something verifiable to each recipient.",
      },
    },
    metrics: [
      "165 e-mails individualisés sur deux réseaux de franchise, août 2026",
      "Zéro crédit d'enrichissement consommé, délivrabilité vérifiée en interne",
      "Un benchmark de part de clics candidats par zone, calculé sur la plateforme de données",
    ],
    targetSeconds: 93,
  },

  {
    id: "ia-erreur",
    category: "ia",
    difficulty: "moins-classique",
    prompt: {
      fr: "Raconte-moi une fois où tu as repéré une erreur dans un résultat produit par une IA.",
      en: "Tell me about a time you caught an error in an AI-generated output.",
    },
    whatTheyTest: [
      "Si tu vérifies vraiment les sorties ou si tu fais confiance par défaut.",
      "Si tu corriges la cause ou seulement les cas visibles.",
      "Si tu mesures la portée avant de conclure.",
      "Si tu assumes ta part sans la reporter sur le modèle.",
    ],
    traps: [
      "Raconter une faute d'orthographe ou une hallucination grossière : ça ne prouve aucune méthode.",
      "Blâmer le modèle, alors que l'erreur venait de l'indicateur que tu lui as donné.",
      "Corriger les neuf cas repérés sans toucher à la règle qui les produit.",
      "Oublier de dire ce qui serait parti chez le client si tu n'avais rien vu.",
    ],
    followUps: [
      {
        question: "Comment tu l'as repéré ?",
        how: "Nomme le signal exact : deux mesures qui devraient bouger ensemble et qui divergent, beaucoup de clics et aucune candidature. Ce n'était pas lisible dans le texte.",
      },
      {
        question: "Qu'est-ce que tu as changé pour que ça ne revienne pas ?",
        how: "Deux règles : les candidatures entrent désormais dans le calcul, et un concurrent doit franchir un seuil avant d'être nommé devant un client.",
      },
      {
        question: "Et si tu ne l'avais pas vu ?",
        how: "Assume sans dramatiser : neuf gérants auraient reçu une affirmation fausse sur leur concurrence locale, deux avec ce concurrent annoncé en première position.",
      },
    ],
    basis: "vecu",
    basisNote:
      "Cas réel et daté. Garde les nombres dans l'ordre 1 154, 114, 9, puis 298 : c'est l'ordre qui montre la méthode, pas la performance.",
    answer: {
      fr: {
        situation:
          "Toujours sur cette campagne, en août 2026, le calcul désignait l'employeur le plus populaire de chaque zone à partir des clics candidats seuls. À Strasbourg, une marketplace ressortait en tête avec 1 154 clics et zéro candidature.",
        task: "Le chiffre était plausible et il allait partir chez des clients. Je devais comprendre l'anomalie avant l'envoi.",
        action: [
          "J'ai regardé l'incohérence plutôt que le texte : beaucoup de clics et aucune candidature, c'est le signe que le trafic sort de la plateforme. Cette marketplace renvoie les candidats vers son propre site, donc un classement sur les clics seuls la faisait gagner mécaniquement.",
          "J'ai mesuré la portée avant de corriger quoi que ce soit : j'ai contrôlé les 114 paires zone et concurrent du périmètre, et j'ai trouvé 9 leads fautifs, dont 2 où ce concurrent était annoncé en première position.",
          "J'ai choisi de corriger la cause et pas les neuf cas : les candidatures descendent désormais jusqu'au calcul, et un concurrent doit franchir un seuil minimum avant d'être nommé dans un e-mail client.",
          "J'ai relancé le contrôle sur 298 paires après correction, sans anomalie, et je n'ai autorisé l'envoi qu'à ce moment.",
          "J'ai assumé ma part : l'erreur ne venait pas du modèle, elle venait de l'indicateur que je lui avais donné.",
        ],
        result:
          "Aucun des neuf e-mails faux n'est parti, et le correctif protège les campagnes suivantes puisqu'il est dans la règle de calcul et non dans une relecture.",
        learning:
          "Une sortie d'IA est dangereuse quand elle est plausible, pas quand elle est absurde. Depuis, je ne relis plus le texte, je cherche l'incohérence entre deux mesures qui devraient bouger ensemble.",
      },
      en: {
        situation:
          "Still on that campaign, in August 2026, the calculation was naming the most popular employer in each area from candidate clicks alone. In Strasbourg a marketplace came out on top with 1,154 clicks and zero applications.",
        task: "The number was plausible and it was about to reach clients. I had to understand the anomaly before the send.",
        action: [
          "I looked at the inconsistency rather than the text: many clicks and no applications is the sign that traffic leaves the platform. That marketplace redirects candidates to its own site, so ranking on clicks alone made it win mechanically.",
          "I sized the problem before fixing anything: I checked the 114 area and competitor pairs in scope, and found 9 faulty leads, 2 of them naming that competitor in first position.",
          "I chose to fix the cause rather than the nine cases: applications now flow into the calculation, and a competitor has to clear a minimum threshold before being named in a client email.",
          "I reran the check on 298 pairs after the fix, with no anomaly, and only then approved the send.",
          "I owned my part: the error did not come from the model, it came from the metric I had given it.",
        ],
        result:
          "None of the nine incorrect emails went out, and the fix protects later campaigns because it sits in the calculation rule rather than in a proofread.",
        learning:
          "An AI output is dangerous when it is plausible, not when it is absurd. Since then I no longer reread the text, I look for the inconsistency between two measures that should move together.",
      },
    },
    metrics: [
      "Strasbourg : une marketplace en tête avec 1 154 clics et zéro candidature",
      "114 paires zone et concurrent vérifiées, 9 leads fautifs dont 2 en première position",
      "298 paires revérifiées après correction, sans anomalie",
    ],
    targetSeconds: 94,
  },

  {
    id: "ia-metier",
    category: "ia",
    difficulty: "moins-classique",
    prompt: {
      fr: "Comment l'IA va-t-elle changer le métier de commercial ?",
      en: "How will AI change the sales job?",
    },
    whatTheyTest: [
      "Si ton opinion vient de ta pratique ou d'articles lus.",
      "Si tu prends une position et si tu la tiens quand on te contredit.",
      "Si tu vois le déplacement de la valeur et pas seulement le gain de temps.",
      "Si tu sais nommer la limite de ce que tu affirmes.",
    ],
    traps: [
      "Dire que l'IA ne remplacera jamais l'humain : phrase creuse, elle ne dit rien de toi.",
      "Faire de la prospective générale devant quelqu'un dont c'est le métier.",
      "Annoncer un gain de volume alors que le déplacement se joue sur la précision.",
      "Citer un chiffre de marché sans dire que c'est une prévision.",
    ],
    followUps: [
      {
        question: "Qu'est-ce qui ne sera pas automatisé selon toi ?",
        how: "Réponds par l'arbitrage et par la responsabilité du chiffre dit à un client, et appuie-toi sur l'incohérence que tu as détectée toi-même.",
      },
      {
        question: "Ce que tu décris menace ton propre poste, non ?",
        how: "Ne te défends pas : la part de production baisse, la part d'arbitrage monte, et tu t'es placé du côté de ceux qui construisent l'outil.",
      },
      {
        question: "Et si le modèle devient assez fiable pour se vérifier seul ?",
        how: "Prends l'objection au sérieux, puis oppose ta mesure : un système qui ignore ses propres consignes sans le dire ne s'audite pas lui-même.",
      },
    ],
    basis: "vecu",
    basisNote:
      "L'opinion s'appuie sur ton audit de poste d'août 2026. Tiens la position, mais dis la limite à voix haute : ton terrain est une vente B2B mesurable, pas un self-serve à cycle court.",
    format: "script",
    answer: {
      fr: {
        situation:
          "En août 2026, j'ai audité mon propre environnement de travail après plusieurs mois d'usage quotidien : 24 000 tokens de contexte fixe chargés avant chaque requête, 549 outils connectés pour 165 réellement utilisés.",
        task: "Je voulais me faire une opinion sur l'évolution du métier à partir de ma pratique mesurée, pas à partir de prédictions.",
        action: [
          "J'ai constaté que la production de matière se compresse : une vingtaine de tâches récurrentes tournent maintenant à la demande, et des collègues les réutilisent.",
          "J'ai constaté que la compétence qui compte devient le contrôle, parce que c'est le contrôle qui décide de ce qui part chez un client.",
          "J'ai ramené mes règles permanentes de 4 163 à 2 340 tokens après avoir vu qu'au-delà de 2 000 à 3 000 tokens, le modèle ignore ses propres consignes sans le signaler.",
          "J'ai regardé le signal côté acheteurs : l'IAB chiffre en septembre 2026 à 86 % la part de ceux qui ont changé ou vont changer leur façon de mesurer. C'est une prévision sectorielle, pas un constat audité.",
        ],
        result:
          "Ma conclusion est que la part du temps passée à produire de la matière baisse et que celle passée à arbitrer et à prouver monte. C'est déjà le cas chez moi.",
        learning:
          "Ceux qui perdront ne sont pas ceux qui n'utilisent pas l'IA, ce sont ceux qui l'utilisent sans dispositif de vérification.",
      },
      en: {
        situation:
          "In August 2026 I audited my own working environment after several months of daily use: 24,000 tokens of fixed context loaded before every request, 549 connected tools for 165 actually used.",
        task: "I wanted to form an opinion on where the job is going from my measured practice rather than from predictions.",
        action: [
          "I saw that producing material compresses: around twenty recurring tasks now run on demand, and colleagues reuse them.",
          "I saw that the skill that counts becomes verification, because verification is what decides whether something reaches a client.",
          "I cut my standing rules from 4,163 to 2,340 tokens after seeing that beyond 2,000 to 3,000 tokens a model ignores its own instructions without flagging it.",
          "I looked at the buyer side: in September 2026 the IAB put at 86 percent the share of buyers who have changed or will change how they measure. That is an industry forecast, not an audited finding.",
        ],
        result:
          "My conclusion is that the share of time spent producing material falls and the share spent arbitrating and proving rises. That is already true in my own work.",
        learning:
          "The people who lose will not be those who do not use AI, they will be those who use it with no verification layer.",
      },
    },
    script: {
      fr: {
        hook: "Ma position est que l'IA ne supprime pas le commercial : elle supprime la partie du métier qui consistait à produire de la matière.",
        body: [
          "Ce qui disparaît, c'est la préparation. L'analyse de compte, le benchmark local, le premier jet d'une recommandation : j'en ai fait une vingtaine de procédures qui tournent à la demande, et que des collègues réutilisent. Le temps libéré ne sert pas à envoyer plus, mais à arriver mieux préparé.",
          "Ce qui reste, c'est l'arbitrage. Décider ce qu'on dit à un client, ce qu'on ne dit pas, et ce qu'on refuse de lui vendre parce que le test se ferait sur le mauvais poste. Un modèle ne prend pas ce risque à ma place : il produit la version la plus probable.",
          "Ce qui devient plus difficile, c'est la preuve. L'objection sérieuse est que les modèles vont s'améliorer et que la vérification s'effacera. Je n'y crois pas encore : en auditant mon poste, j'ai vu qu'au-delà de 2 000 à 3 000 tokens de règles permanentes, un modèle ignore ses propres consignes sans le dire, et j'ai dû ramener les miennes de 4 163 à 2 340. La limite de ma position, c'est que je parle d'une vente B2B mesurable, pas d'un self-serve à cycle court.",
        ],
        closing: "Je peux détailler le moment où j'ai dû arbitrer contre une sortie de modèle, si c'est utile.",
        keyBeats: [
          "Ce qui disparaît : produire la matière",
          "Ce qui reste : l'arbitrage",
          "Ce qui durcit : la preuve",
          "L'objection, puis ma mesure",
          "La limite de ma position",
        ],
      },
      en: {
        hook: "My position is that AI does not remove the salesperson: it removes the part of the job that consisted in producing material.",
        body: [
          "What disappears is preparation. Account analysis, the local benchmark, the first draft of a recommendation: I turned around twenty of those into procedures that run on demand and that colleagues reuse. The time freed up is not spent sending more, it is spent arriving better prepared.",
          "What remains is judgement. Deciding what you tell a client, what you leave out, and what you refuse to sell them because the trial would run on the wrong role. A model does not take that risk for me: it produces the most probable version.",
          "What gets harder is proof. The serious objection is that models will improve and that verification will fade away. I do not believe that yet: auditing my own setup, I saw that beyond 2,000 to 3,000 tokens of standing rules a model ignores its own instructions without saying so, and I had to cut mine from 4,163 to 2,340. The limit of my position is that I am talking about measurable B2B selling, not a short-cycle self-serve motion.",
        ],
        closing: "I can walk through the moment where I had to overrule a model output, if that is useful.",
        keyBeats: [
          "Gone: producing the material",
          "Stays: the judgement call",
          "Harder: the proof",
          "The objection, then my measure",
          "The limit of my position",
        ],
      },
    },
    metrics: [
      "Audit du poste, août 2026 : 24 000 tokens de contexte fixe, 549 outils connectés pour 165 utilisés",
      "Règles permanentes ramenées de 4 163 à 2 340 tokens, dégradation observée entre 2 000 et 3 000 tokens",
      "IAB septembre 2026 : 86 % des acheteurs changent leur façon de mesurer (prévision sectorielle)",
    ],
    targetSeconds: 90,
  },

  {
    id: "ia-chez-meta",
    category: "ia",
    difficulty: "piege",
    prompt: {
      fr: "Qu'est-ce que tu apporterais concrètement à notre équipe sur l'IA ?",
      en: "What would you concretely bring to our team on AI?",
    },
    whatTheyTest: [
      "Si tu restes mesuré devant une entreprise qui construit ces modèles.",
      "Si tu proposes une méthode transposable ou un discours d'expert autoproclamé.",
      "Si tu penses politique d'usage et donnée annonceur avant automatisation.",
      "Si tu sais dire ce que tu n'apportes pas.",
    ],
    traps: [
      "Venir expliquer l'IA à Meta : c'est le piège principal de la question.",
      "Dérouler un plan des 90 jours alors que tu ignores leurs outils et leur cadre.",
      "Parler modèles et architectures : ce qu'ils achètent est ta méthode commerciale.",
      "Promettre un gain de productivité sans nommer le contrôle qui va avec.",
    ],
    followUps: [
      {
        question: "Qu'est-ce qui te fait penser que ça se transpose ?",
        how: "Le principe, pas l'outil : tâche récurrente, procédure packagée, garde-fou qui bloque l'écriture, contrôle sur échantillon large. Dis-le dans cet ordre.",
      },
      {
        question: "Et si notre politique interne t'interdit ce que tu fais aujourd'hui ?",
        how: "Réponds que c'est le point de départ : tu as déjà construit dans un cadre contraint, et le garde-fou est justement ce qui rend l'usage acceptable.",
      },
      {
        question: "Tu es développeur ?",
        how: "Sois net : non, commercial qui a appris à outiller son propre travail. Cite ce que tu as livré, pas ce que tu sais coder.",
      },
    ],
    basis: "vecu",
    basisNote:
      "Ce que tu as construit chez Indeed est réel et vérifiable. La partie Meta reste une méthode et pas un plan : dis-le explicitement, et finis en demandant ce qui existe déjà chez eux.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Chez Indeed, j'ai outillé mon propre travail commercial : une vingtaine de procédures réutilisables, partagées avec des collègues, et un garde-fou qui bloque toute écriture automatique sur de la donnée client.",
        task: "Je devais dire ce que j'apporte à une équipe qui construit ces modèles, sans promettre un plan que je ne peux pas encore tenir.",
        action: [
          "J'écouterais d'abord : quels outils existent déjà, ce que votre politique autorise sur la donnée annonceur, et ce que l'équipe fait déjà bien.",
          "Je chercherais les tâches refaites chaque semaine, une revue de performance de compte par exemple, parce que c'est là qu'une procédure se rembourse.",
          "Je poserais le garde-fou avant l'automatisation : l'agent prépare, un humain décide, aucune écriture automatique sur un budget ou une campagne.",
          "J'installerais le contrôle de sortie sur échantillon large : c'est ainsi que 181 noms d'établissements ont été vérifiés contre les sources officielles avant un envoi, et que 11 noms faux ont été détectés.",
          "Je partagerais chaque procédure au lieu de la garder, comme je l'ai fait chez Indeed.",
        ],
        result:
          "Ce que j'apporte est une méthode déjà éprouvée sur de la donnée client réelle. Ce que je n'apporte pas est un plan pour Meta, parce que je ne connais pas encore votre cadre.",
        learning:
          "La question n'est pas ce que l'IA peut faire, c'est ce qu'on accepte de lui laisser faire sans relecture.",
      },
      en: {
        situation:
          "At Indeed I tooled up my own sales work: around twenty reusable procedures, shared with colleagues, and a guardrail that blocks any automated write on client data.",
        task: "I had to say what I bring to a team that builds these models, without promising a plan I cannot yet stand behind.",
        action: [
          "I would listen first: which tools already exist, what your policy allows on advertiser data, and what the team already does well.",
          "I would look for the tasks redone every week, an account performance review for instance, because that is where a procedure pays for itself.",
          "I would put the guardrail in before the automation: the agent prepares, a human decides, no automated write on a budget or a campaign.",
          "I would set up output checks on a broad sample: that is how 181 site names were verified against official sources before a send, and how 11 wrong names were caught.",
          "I would share every procedure instead of keeping it, as I did at Indeed.",
        ],
        result:
          "What I bring is a method already proven on real client data. What I do not bring is a plan for Meta, because I do not know your framework yet.",
        learning:
          "The question is not what AI can do, it is what you agree to let it do unreviewed.",
      },
    },
    script: {
      fr: {
        hook: "Je ne viens pas expliquer l'IA à Meta. Ce que j'apporte est une méthode de travail commerciale, et un réflexe de contrôle.",
        body: [
          "La méthode tient en trois temps, et je l'ai appliquée une vingtaine de fois : je prends une tâche que je refais toutes les semaines, je la transforme en procédure réutilisable, et je pose le garde-fou avant l'automatisation. Chez Indeed, l'agent ne peut rien écrire sur de la donnée client sans mon accord.",
          "Le deuxième apport est le contrôle de sortie, et c'est le plus transposable. Avant un envoi client, j'ai fait vérifier 181 noms d'établissements contre les sources officielles par dix agents lancés en parallèle : 11 étaient faux. Le principe est de contrôler un échantillon large, jamais le seul cas qu'on a repéré soi-même.",
          "Ce que je n'apporte pas, c'est un plan pour Meta. Je ne connais ni vos outils internes ni ce que votre politique autorise sur la donnée annonceur, et une procédure écrite contre le mauvais cadre est une procédure à refaire. Je commencerais donc par demander ce qui existe déjà, et par le tester avant de proposer quoi que ce soit.",
        ],
        closing: "Je peux détailler l'une de ces procédures, ou la façon dont le garde-fou est écrit.",
        keyBeats: [
          "Pas d'expertise modèle, une méthode",
          "Tâche, procédure, garde-fou",
          "Contrôle de sortie sur échantillon",
          "Ce que je n'apporte pas",
          "Demander ce qui existe déjà",
        ],
      },
      en: {
        hook: "I am not here to explain AI to Meta. What I bring is a way of working as a salesperson, and a verification reflex.",
        body: [
          "The method has three steps, and I have applied it around twenty times: I take a task I redo every week, I turn it into a reusable procedure, and I put the guardrail in before the automation. At Indeed, the agent cannot write anything on client data without my approval.",
          "The second contribution is the output check, and it is the most transferable one. Before a client send, I had 181 site names verified against official sources by ten agents run in parallel: 11 were wrong. The principle is to check a broad sample, never only the case you spotted yourself.",
          "What I do not bring is a plan for Meta. I know neither your internal tools nor what your policy allows on advertiser data, and a procedure written against the wrong framework is a procedure to redo. So I would start by asking what already exists, and by testing it before proposing anything.",
        ],
        closing: "I am happy to go into one of those procedures, or into how the guardrail itself is written.",
        keyBeats: [
          "No model expertise, a method",
          "Task, procedure, guardrail",
          "Output check on a sample",
          "What I do not bring",
          "Ask what already exists",
        ],
      },
    },
    metrics: [
      "181 noms d'établissements vérifiés par dix agents en parallèle, 11 noms faux détectés avant envoi",
      "Une vingtaine de procédures réutilisables construites et partagées chez Indeed",
      "Garde-fou bloquant toute écriture automatique sur de la donnée client",
    ],
    targetSeconds: 81,
  },
];
