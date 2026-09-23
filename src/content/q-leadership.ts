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
      "Si tu produis un résultat avec les moyens du bord, ou si tu attends un mandat pour agir.",
      "Si tu as traité le frein réel avant de pousser ta solution.",
      "Si l'adoption a tenu sans toi, ou si elle tenait à ta présence.",
      "Si tu dis ce que ça t'a coûté de partager un avantage.",
    ],
    traps: [
      "Raconter une réunion où tout le monde s'est rangé à ton avis : personne ne le croit.",
      "Confondre influence et insistance, en décrivant ta persévérance au lieu d'une décision.",
      "Faire de l'équipe une masse réticente : la prudence sur de la donnée client est une position défendable.",
      "Annoncer une adoption totale sans dire combien de personnes ont réellement suivi.",
    ],
    followUps: [
      {
        question: "Qui ne t'a pas suivi, et pourquoi ?",
        how: "Donne une objection sérieuse et respecte-la, puis dis ce que tu as changé dans ta proposition à cause d'elle.",
      },
      {
        question: "Ton manager te l'avait demandé ?",
        how: "Non, et c'est le cœur de la réponse. Tu l'as fait parce que la tâche te coûtait à toi d'abord, le partage est venu après.",
      },
      {
        question: "Comment sais-tu que c'est encore utilisé ?",
        how: "Cite les procédures qui tournent chez des collègues, et le fait que le garde-fou vit dans l'outil, donc la méthode tient sans toi.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "La vingtaine de procédures partagées, le garde-fou qui bloque toute écriture et le contrôle de sortie qui a intercepté 9 leads faux sont réels. L'ordre du déroulé et le fait d'avoir équipé des collègues relais sont reconstitués : remplace par la vraie chronologie et nomme les premières procédures effectivement reprises par quelqu'un d'autre.",
    answer: {
      fr: {
        situation:
          "Depuis 2025, j'outille mon propre travail avec des agents connectés à nos données internes, et l'écart de vitesse se voyait sur mon portefeuille. Personne ne me devait rien : je ne manage personne, et laisser une IA approcher de la donnée client inquiétait, à juste titre.",
        task: "Je voulais que la méthode serve à d'autres commerciaux que moi, sans pouvoir l'imposer à personne.",
        action: [
          "J'ai commencé par le risque plutôt que par la promesse : j'ai écrit un blocage qui intercepte chaque action de l'agent et interdit toute écriture, sauvegarde Salesforce, lancement de campagne ou changement de budget.",
          "J'ai pris comme premier cas la tâche la plus pénible de l'équipe plutôt que la plus spectaculaire, parce qu'un premier essai qui demande un acte de foi ne se fait jamais.",
          "J'ai montré mes erreurs avant mes résultats : sur 114 paires vérifiées, mon contrôle de sortie a intercepté 9 leads faux, dont une marketplace donnée comme employeur le plus populaire avec 1 154 clics et zéro candidature.",
          "J'ai arrêté de convaincre l'équipe entière : j'ai équipé les collègues déjà curieux du sujet pour qu'ils portent la méthode à ma place, et je leur ai livré des procédures réutilisables plutôt que des conseils.",
        ],
        result:
          "Une vingtaine de procédures tournent aujourd'hui chez des collègues, sans aucun lien hiérarchique entre eux et moi. Le garde-fou vit dans l'outil, donc la méthode reste sûre quand je ne suis pas là pour l'expliquer.",
        learning:
          "Sans autorité, je n'obtiens rien en convainquant. J'obtiens beaucoup en baissant le coût du premier essai.",
      },
      en: {
        situation:
          "Since 2025 I have been tooling my own work with agents connected to our internal data, and the difference in speed showed on my book. Nobody owed me anything: I manage no one, and letting an AI near client data worried people, rightly so.",
        task: "I wanted the method to serve salespeople other than me, without being able to impose it on anyone.",
        action: [
          "I led with the risk rather than the promise: I wrote a block that intercepts every agent action and forbids any write, a Salesforce save, a campaign launch or a budget change.",
          "I took as a first case the most tedious task on the team rather than the most impressive one, because a first attempt that requires an act of faith never happens.",
          "I showed my mistakes before my results: across 114 checked pairs, my output control caught 9 wrong leads, including a marketplace shown as the most popular employer with 1,154 clicks and zero applications.",
          "I stopped trying to convince the whole team: I equipped the colleagues already curious about it so they could carry the method instead of me, and I gave them reusable procedures rather than advice.",
        ],
        result:
          "Around twenty procedures now run with colleagues, with no reporting line between them and me. The guardrail lives in the tooling, so the method stays safe when I am not there to explain it.",
        learning:
          "Without authority I get nothing by convincing people. I get a lot by lowering the cost of the first attempt.",
      },
    },
    metrics: [
      "Une vingtaine de procédures réutilisables partagées avec des collègues",
      "Garde-fou bloquant toute écriture : Salesforce, campagne, budget",
      "114 paires vérifiées, 9 leads faux interceptés avant envoi",
      "1 154 clics et zéro candidature pour une marketplace donnée comme employeur le plus populaire",
    ],
    targetSeconds: 94,
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
      "Si tu proposes un fait qui tranche, ou si tu cherches à avoir raison.",
      "Si tu sais perdre, appliquer le résultat, et ne pas le rejouer ensuite.",
      "Si tu règles sans escalader, et si le client reste protégé pendant ce temps.",
    ],
    traps: [
      "Choisir un désaccord où tu avais évidemment raison : ça ne prouve rien.",
      "Transformer l'autre en obstacle : l'intervieweur en déduit le collègue que tu seras.",
      "Faire trancher par un manager : c'est la résolution qui est notée, pas l'arbitrage.",
      "Dire que ça s'est réglé en discutant, sans nommer ce qui a tranché.",
    ],
    followUps: [
      {
        question: "Et si elle avait refusé le test ?",
        how: "Dis que tu aurais appliqué sa décision et gardé ton hypothèse par écrit pour la rouvrir avec une donnée. Un désaccord ne justifie pas de bloquer un compte.",
      },
      {
        question: "Tu as changé d'avis, ou tu as cédé ?",
        how: "Montre la différence par un acte : tu as étendu sa règle toi-même, y compris là où ton intuition disait le contraire.",
      },
      {
        question: "Comment la relation a-t-elle évolué ensuite ?",
        how: "Reste factuel : le désaccord portait sur une hypothèse, pas sur elle, et vous travaillez toujours ensemble sur le compte.",
      },
    ],
    basis: "canevas",
    basisNote:
      "Le désaccord décrit est inventé : son objet, le test et son issue ne sont documentés nulle part. Seul le compte est réel, Groupe Saint-Gatien, 100 cliniques et hôpitaux privés, 129 406 € sur douze mois. Une histoire de leadership doit être vraie pour survivre aux relances : remplace par un désaccord que tu as réellement eu et garde la forme, deux positions défendables, un mécanisme de départage, toi qui perds et qui appliques.",
    answer: {
      fr: {
        situation:
          "Sur Groupe Saint-Gatien, 100 cliniques et hôpitaux privés, 129 406 € sur douze mois, je n'étais pas d'accord avec la personne qui suit le compte côté service client. Je voulais concentrer le budget sur les établissements en tension, elle voulait garder la couverture large parce que les directeurs de site arbitrent localement.",
        task: "Je devais trancher une question de répartition sur un compte dont je n'ai pas la main seule, sans en faire un bras de fer.",
        action: [
          "J'ai reformulé sa position jusqu'à ce qu'elle valide ma reformulation, parce que beaucoup de désaccords portent sur une position que l'autre n'a jamais tenue.",
          "J'ai isolé le seul point qui nous séparait, une hypothèse sur qui arbitre réellement le budget dans une clinique, plutôt que de défendre ma conclusion d'ensemble.",
          "J'ai proposé un départage plutôt qu'un arbitrage par notre manager : un trimestre, un groupe d'établissements concentrés contre un groupe laissé en couverture large, et le critère écrit d'avance, les candidatures commencées par annonce.",
          "J'ai accepté qu'elle compose elle-même les deux groupes, alors que je pouvais les choisir, pour que le résultat ne soit contestable par personne, moi compris.",
          "La mesure lui a donné raison, et c'est moi qui ai étendu sa règle aux cliniques où j'aurais coupé.",
        ],
        result:
          "La répartition suit toujours sa logique et sert de base à mes propositions sur le compte. Le sujet n'est jamais remonté à un manager, et le client n'a jamais eu deux lectures de ses chiffres.",
        learning:
          "J'ai perdu une intuition et gagné une règle de décision vérifiable. Depuis, je propose le mécanisme de départage avant de défendre ma position.",
      },
      en: {
        situation:
          "On Groupe Saint-Gatien, 100 private clinics and hospitals, 129,406 euros over twelve months, I disagreed with the person who looks after the account on the service side. I wanted to concentrate the budget on the sites under pressure, she wanted to keep broad coverage because site directors make the call locally.",
        task: "I had to settle an allocation question on an account I do not run alone, without turning it into a standoff.",
        action: [
          "I restated her position until she confirmed my restatement, because a good half of disagreements are about a position the other person never held.",
          "I isolated the single point that separated us, an assumption about who really decides the budget inside a clinic, rather than defending my overall conclusion.",
          "I proposed a tie breaker rather than an escalation to our manager: one quarter, a group of concentrated sites against a group left on broad coverage, with the criterion written down beforehand, applications started per job.",
          "I let her build both groups herself, when I could have chosen them, so the result would be contestable by nobody, myself included.",
          "The measurement proved her right, and I was the one who extended her rule to the clinics where I would have cut.",
        ],
        result:
          "The allocation still follows her logic, and it is the basis of my proposals on the account. The subject never reached a manager, and the client never had two different readings of their own numbers.",
        learning:
          "I lost an intuition and gained a decision rule I can verify. Since then I propose the tie breaker before defending my position.",
      },
    },
    metrics: [
      "Groupe Saint-Gatien : 100 cliniques et hôpitaux privés, 129 406 € sur 12 mois",
    ],
    targetSeconds: 96,
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
      "Si le feedback touchait ce que tu prenais pour une réussite, ou si tu sers une fausse faiblesse.",
      "Si tu as vérifié avant de te défendre ou de te flageller.",
      "Si le changement est structurel, un format ou une règle, et pas un effort supplémentaire.",
      "Si tu assumes la part que tu contrôlais dans ce qu'on te disait.",
    ],
    traps: [
      "La fausse faiblesse du type on me reproche d'en faire trop : c'est noté proche de zéro.",
      "Répondre par plus d'effort : travailler davantage n'est pas un changement.",
      "Annoncer cinq changements, personne n'en tient cinq.",
      "Citer plus tard le chiffre brut de croissance après avoir raconté cette histoire : la contradiction s'entend.",
    ],
    followUps: [
      {
        question: "Tu étais d'accord sur le moment ?",
        how: "Non, et dis-le. Ce qui compte est que tu sois allé recalculer au lieu d'argumenter le jour même.",
      },
      {
        question: "Donne-moi le chiffre brut, alors.",
        how: "Donne-le sans gêne, +46,6 %, et explique en une phrase ce qu'il contient de réassignations. Un chiffre annoncé avec sa base ne se retourne pas contre toi.",
      },
      {
        question: "Qu'est-ce qu'on te dirait encore aujourd'hui ?",
        how: "Donne une limite actuelle et ce que tu en fais. Ne recycle pas la faiblesse déjà corrigée.",
      },
    ],
    basis: "canevas",
    basisNote:
      "La scène du feedback est inventée : rien ne documente un retour reçu sur ce sujet. Les chiffres, eux, sont réels, le +46,6 % brut, les deux mesures indépendantes à 38,0 % et 39,1 %, et le format de revue à deux colonnes qui vient d'une revue trimestrielle interne. Remplace par le feedback dur que tu as réellement reçu, et ne revendique le format à deux colonnes que si tu le tiens vraiment.",
    answer: {
      fr: {
        situation:
          "En revue de portefeuille cette année, j'annonçais 46,6 % de croissance sur mes comptes, et j'en étais fier. Un manager m'a répondu, calcul à l'appui, que ce chiffre n'était pas le mien : il mélangeait ma croissance réelle et des comptes qu'on m'avait réassignés.",
        task: "Je devais vérifier si c'était vrai avant de me défendre, puis corriger la façon dont je présente mes résultats.",
        action: [
          "J'ai encaissé sans argumenter sur le moment, parce que discuter un feedback le jour même empêche simplement de l'entendre.",
          "Je suis allé chercher la preuve au lieu de croire ou de nier : j'ai recalculé la croissance sur les seuls comptes présents aux deux périodes.",
          "J'ai refait le calcul par deux méthodes indépendantes avant d'annoncer quoi que ce soit, 38,0 % et 39,1 %, et j'ai retenu 38 % parce que c'est le chiffre qui résiste à la question suivante.",
          "J'ai décidé d'ouvrir désormais sur le chiffre à périmètre constant et de garder le brut en second, alors que l'ordre inverse m'arrangeait.",
          "J'ai transformé la correction en format plutôt qu'en bonne intention : chaque trimestre, deux colonnes, ce que je reproduis et ce que j'aurais fait autrement, avec mes comptes classés jusqu'à la case poids mort.",
        ],
        result:
          "Depuis, aucun de mes chiffres ne sort sans sa base, et c'est devenu un avantage : quand j'annonce 108 % d'atteinte au premier trimestre 2026 et 133 % au deuxième, personne ne passe la réunion à tester ma méthode de calcul.",
        learning:
          "Le feedback qui coûte est celui qui porte sur ce qu'on prenait pour sa réussite. C'est exactement pour ça qu'il faut le recalculer avant de le juger injuste.",
      },
      en: {
        situation:
          "In a book review this year I was reporting 46.6 percent growth on my accounts, and I was proud of it. A manager told me, with the calculation in hand, that the number was not mine: it mixed my real growth with accounts that had been reassigned to me.",
        task: "I had to check whether it was true before defending myself, then fix the way I present my results.",
        action: [
          "I took it without arguing in the moment, because debating feedback the same day simply stops you hearing it.",
          "I went looking for the evidence instead of believing it or denying it: I recalculated growth on the accounts present in both periods only.",
          "I ran the calculation twice with independent methods before announcing anything, 38.0 percent and 39.1 percent, and I kept 38 percent because that is the number that survives the next question.",
          "I decided to open on the like for like number from then on and keep the raw one second, when the opposite order suited me better.",
          "I turned the correction into a format rather than good intentions: every quarter, two columns, what I repeat and what I would have done differently, with my accounts sorted down to the dead weight box.",
        ],
        result:
          "Since then none of my numbers leaves without its base, and it has become an advantage: when I report 108 percent of target in the first quarter of 2026 and 133 percent in the second, nobody spends the meeting testing how I count.",
        learning:
          "The feedback that costs you is the one aimed at what you took for your own success. That is exactly why you should recalculate it before deciding it is unfair.",
      },
    },
    metrics: [
      "Croissance brute du portefeuille +46,6 %, incluant des réassignations de comptes",
      "Croissance à périmètre constant +38 %, mesurée par deux méthodes, 38,0 % et 39,1 %",
      "Atteinte 108 % au Q1 2026 et 133 % au Q2 2026",
    ],
    targetSeconds: 96,
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
      "Si tu cartographies une décision avant de mobiliser des gens.",
      "Si tu fais une demande précise, ou si tu envoies du contexte en espérant de l'aide.",
      "Si tu adaptes ta demande à ce que l'autre fonction a à y gagner.",
      "Si tu protèges une seule version des chiffres entre les équipes.",
    ],
    traps: [
      "Rester en méthode quand on te demande l'exemple : garde le cas et son montant prêts.",
      "T'attribuer le travail des autres fonctions au lieu de nommer ce qu'elles ont apporté.",
      "Décrire un contournement de l'agence : c'est un signal de sortie immédiat.",
      "Oublier l'échelon local : sur un réseau, l'accord central ne suffit jamais.",
    ],
    followUps: [
      {
        question: "Donne-moi un exemple précis.",
        how: "Bascule sur Système U, 438 204 € closés le 18 mai 2026, et tiens le STAR sans reprendre la méthode depuis le début.",
      },
      {
        question: "Comment obtiens-tu de l'aide d'une équipe qui ne te doit rien ?",
        how: "Demande datée, usage expliqué, et retour chiffré sur ce que leur contribution a produit. C'est ce retour qui te donne la deuxième fois.",
      },
      {
        question: "Qu'est-ce qui a failli faire capoter le dossier ?",
        how: "La facturation adhérent par adhérent, pas le prix. Dis que tu l'as réglée en interne avant de l'amener devant le client.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Le deal Système U, ses 438 204 € du 18 mai 2026, le passage par les agences Ideuzo et Matière Grise et la trajectoire du réseau sont réels. Ce n'est pas un accord annuel, ne l'appelle jamais ainsi. Le détour par le recouvrement avant le client est un mécanisme lu dans un partage de bonnes pratiques interne, pas ton vécu : ne le raconte à la première personne que si tu l'as fait.",
    format: "script",
    answer: {
      fr: {
        situation:
          "Le deal Système U de 438 204 €, closé le 18 mai 2026, ne s'est pas joué entre le client et moi. Le réseau s'adresse via les agences Ideuzo et Matière Grise, et la décision se partage entre le centre et des adhérents indépendants.",
        task: "Je devais faire converger des interlocuteurs qui n'avaient ni le même calendrier ni les mêmes indicateurs vers une seule décision d'investissement.",
        action: [
          "J'ai cartographié qui décide quoi avant de solliciter qui que ce soit, parce que sur ce réseau le centre recommande et l'adhérent paie.",
          "J'ai choisi de passer par les agences plutôt que d'aller au contact direct, qui aurait été plus rapide à court terme et aurait coûté la relation ensuite.",
          "J'ai fait traiter la mécanique de facturation magasin par magasin en interne avant d'en parler au client, puis j'ai amené en rendez-vous la personne qui la portait.",
          "J'ai tenu une seule version des chiffres pour le centre, les agences et moi, et j'ai abandonné la mienne quand la leur était mieux sourcée.",
        ],
        result:
          "438 204 € closés le 18 mai 2026, et un réseau passé de 101 986 € de bookings en 2023 à 547 277 € en 2026. Ce n'est pas un accord annuel, c'est la plus grosse opportunité unique de mon portefeuille.",
        learning:
          "Ce qui coûte cher sur un dossier transverse n'est pas le désaccord ouvert, c'est la divergence silencieuse entre deux versions des chiffres.",
      },
      en: {
        situation:
          "The 438,204 euro Système U deal, closed on 18 May 2026, was not settled between the client and me. The network is served through the agencies Ideuzo and Matière Grise, and the decision is split between head office and independent members.",
        task: "I had to bring stakeholders with different calendars and different metrics towards a single investment decision.",
        action: [
          "I mapped who decides what before approaching anyone, because on this network head office recommends and the member pays.",
          "I chose to go through the agencies rather than straight to the client, which would have been faster in the short term and would have cost the relationship afterwards.",
          "I had the store by store invoicing mechanics settled internally before raising them with the client, then brought the person who owned them into the meeting.",
          "I kept one single version of the numbers for head office, the agencies and me, and dropped mine when theirs was better sourced.",
        ],
        result:
          "438,204 euros closed on 18 May 2026, and a network that went from 101,986 euros of bookings in 2023 to 547,277 euros in 2026. It is not an annual agreement, it is the largest single opportunity on my book.",
        learning:
          "What costs you on a cross-functional deal is not open disagreement, it is a silent divergence between two versions of the numbers.",
      },
    },
    script: {
      fr: {
        hook: "Je traite une équipe transverse comme un compte : je cartographie qui décide quoi, puis je fais une demande précise à chacun, jamais un appel à l'aide général.",
        body: [
          "Je commence par écrire qui décide, qui exécute et qui peut bloquer. Sur un réseau décentralisé, l'erreur classique est de parler au siège en croyant parler au décideur, alors que la dépense part des établissements. Ensuite je demande une chose datée, avec l'usage expliqué, plutôt qu'un contexte à lire.",
          "Le deuxième principe est de régler les sujets internes avant qu'ils n'arrivent devant le client. Quand un réseau doit être facturé point de vente par point de vente, je cale la mécanique en tête à tête avec le recouvrement, puis j'amène cette personne en rendez-vous avec une solution déjà arbitrée. Le client voit une équipe, pas une négociation interne.",
          "Le troisième point est celui qui me coûte le plus si je le néglige : une seule version des chiffres. Deux tableaux qui ne disent pas la même chose suffisent à arrêter un dossier, et l'arbitrage est réel, j'abandonne la version qui m'arrange quand celle d'une autre équipe est mieux sourcée. En échange, je rends toujours le résultat chiffré de ce que leur contribution a produit.",
        ],
        closing: "C'est la méthode, et j'ai un cas où elle a fait la différence si vous voulez l'exemple.",
        keyBeats: [
          "Cartographier avant de solliciter",
          "Demande datée, pas du contexte",
          "Régler en interne avant le client",
          "Une seule version des chiffres",
          "Rendre le résultat chiffré",
        ],
      },
      en: {
        hook: "I treat a cross-functional team like an account: I map who decides what, then I make a precise request to each person, never a general call for help.",
        body: [
          "I start by writing down who decides, who executes and who can block. On a decentralised network the classic mistake is talking to head office and believing you are talking to the decision maker, when the spend comes from the sites. Then I ask for one dated thing, with the use explained, rather than sending context to read.",
          "The second principle is to settle internal issues before they reach the client. When a network has to be invoiced site by site, I work the mechanics through one to one with collections, then bring that person into the meeting with a solution already agreed. The client sees a team, not an internal negotiation.",
          "The third point is the one that costs me most if I neglect it: one single version of the numbers. Two tables that disagree are enough to stall a deal, and the trade-off is real, I drop the version that suits me when another team's is better sourced. In exchange, I always come back with what their contribution produced, in figures.",
        ],
        closing: "That is the method, and I have a case where it made the difference if you want the example.",
        keyBeats: [
          "Map before asking",
          "Dated request, not context",
          "Settle internally first",
          "One version of the numbers",
          "Report the result back",
        ],
      },
    },
    metrics: [
      "Deal de 438 204 € closé le 18 mai 2026, réseau Système U via les agences Ideuzo et Matière Grise",
      "Système U : 101 986 € de bookings en 2023, 547 277 € en 2026",
    ],
    targetSeconds: 88,
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
      "Si tu as un format reproductible, ou seulement de la bonne volonté.",
      "Si tu observes avant de conseiller.",
      "Si la progression se mesure chez l'autre, pas chez toi.",
      "Si ce que tu as mis en place a tenu sans toi.",
    ],
    traps: [
      "Te mettre au centre : c'est la progression de l'autre qui est notée.",
      "Donner cinq conseils à la fois, ce qui ne produit jamais de changement.",
      "Rester sur des qualités humaines sans critère observable.",
      "Laisser croire que tu as réussi avec tout le monde : prépare le cas où tu as échoué.",
    ],
    followUps: [
      {
        question: "Et quelqu'un que tu n'as pas réussi à faire progresser ?",
        how: "Donne un cas réel et ce que tu en as tiré. Un candidat qui réussit avec tout le monde n'est pas crédible.",
      },
      {
        question: "Tu veux manager ?",
        how: "Réponds par l'expérience, 25 professeurs recrutés et managés, ça t'a plu, et dis que tu veux d'abord maîtriser le métier ici.",
      },
      {
        question: "Comment mesures-tu qu'une personne a progressé ?",
        how: "Par le critère fixé au départ, pas par ton impression. Cite celui des dix premières minutes.",
      },
    ],
    basis: "vecu-romance",
    basisNote:
      "Les 25 professeurs recrutés et managés chez Cosmic Junior, les plus de 3 000 cours, le passage de 0 à 100 000 $ d'ARR en moins de huit mois et la couverture d'un book Inside Sales pendant six mois sont réels. La méthode décrite, l'observation d'un cours entier, le critère des dix premières minutes et l'observation entre pairs, est reconstituée : remplace par ce que tu faisais réellement et, si tu as une personne en tête, nomme sa progression.",
    answer: {
      fr: {
        situation:
          "Chez Cosmic Junior, l'entreprise que j'ai cofondée, j'ai recruté et managé 25 professeurs pour délivrer plus de 3 000 cours de code à des enfants. Plusieurs étaient d'excellents techniciens qui n'avaient jamais enseigné.",
        task: "Je devais faire monter une pratique pédagogique chez des gens déjà compétents techniquement.",
        action: [
          "J'ai observé un cours entier avant de dire quoi que ce soit, parce qu'un conseil fondé sur une impression se discute, un conseil fondé sur un moment précis, non.",
          "J'ai réduit mon retour à une seule chose à changer par semaine, alors que j'en avais cinq à dire, parce qu'une liste de cinq points ne produit aucun changement.",
          "J'ai remplacé les objectifs vagues par un critère que la personne vérifie seule : l'enfant produit quelque chose dans les dix premières minutes.",
          "J'ai fait observer les meilleurs par les nouveaux au lieu de corriger moi-même, pour que la qualité ne dépende plus de mon agenda.",
          "J'ai gardé le même format en couvrant le book Inside Sales d'une collègue pendant six mois, en documentant à mesure pour que la reprise se fasse sans moi.",
        ],
        result:
          "Les 25 professeurs ont tenu plus de 3 000 cours, et la société est passée de 0 à 100 000 $ d'ARR en moins de huit mois, ce qui ne tient pas avec une qualité inégale. Ce qui est resté est le format : une chose à la fois, un critère observable, l'observation entre pairs.",
        learning:
          "Je ne fais pas progresser quelqu'un en lui disant ce qui ne va pas, mais en lui donnant un critère qu'il peut vérifier seul la fois suivante.",
      },
      en: {
        situation:
          "At Cosmic Junior, the company I co-founded, I recruited and managed 25 teachers to deliver more than 3,000 coding classes to children. Several were excellent technically and had never taught.",
        task: "I had to build teaching practice in people whose technical skill was already there.",
        action: [
          "I watched a full class before saying anything, because advice based on an impression gets argued with, advice based on a specific moment does not.",
          "I cut my feedback down to one thing to change per week, when I had five to give, because a list of five points produces no change at all.",
          "I replaced vague goals with a criterion the person checks on their own: the child produces something within the first ten minutes.",
          "I had new teachers observe the best ones instead of correcting everything myself, so quality no longer depended on my calendar.",
          "I kept the same format when I covered a colleague's Inside Sales book for six months, documenting as I went so someone could pick it up without me.",
        ],
        result:
          "The 25 teachers delivered more than 3,000 classes, and the company went from zero to 100,000 dollars of ARR in under eight months, which does not hold with uneven quality. What stayed is the format: one thing at a time, an observable criterion, peer observation.",
        learning:
          "You do not grow someone by telling them what is wrong, but by giving them a criterion they can check on their own the next time.",
      },
    },
    metrics: [
      "25 professeurs recrutés et managés chez Cosmic Junior, plus de 3 000 cours délivrés",
      "0 à 100 K$ d'ARR en moins de 8 mois",
      "Couverture du book Inside Sales d'une collègue pendant 6 mois",
    ],
    targetSeconds: 93,
  },
];
