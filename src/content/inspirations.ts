import type { Inspiration, InspirationTheme, SourceKind } from "../types";

/**
 * Réussites d'autres commerciaux Indeed, lues dans les ressources internes.
 *
 * Règle de sourcing : chaque entrée vient d'un document réellement ouvert, et
 * les chiffres sont recopiés tels qu'ils y figurent. Les noms des collègues ne
 * sont jamais repris, seul le titre du document reste pour la traçabilité. Les
 * entreprises ne sont nommées que si elles appartiennent déjà au portefeuille de
 * Nathan, sinon c'est le secteur qui est indiqué.
 *
 * Usage en entretien : ce sont des mécanismes à transposer, pas des histoires à
 * raconter à la première personne.
 */

export const inspirationThemes: Array<{ id: InspirationTheme; label: string }> = [
  { id: "deal-complexe", label: "Deal complexe" },
  { id: "echec", label: "Échec et apprentissage" },
  { id: "churn", label: "Churn et reconquête" },
  { id: "c-level", label: "Accès au C-level" },
  { id: "prix", label: "Prix et remise" },
  { id: "priorisation", label: "Priorisation" },
  { id: "agence", label: "Agences et partenaires" },
  { id: "analytique", label: "Preuve et diagnostic" },
];

export const sourceKinds: Array<{ id: SourceKind; label: string }> = [
  { id: "close-out", label: "Close out" },
  { id: "best-practices", label: "Partage de bonnes pratiques" },
  { id: "playbook", label: "Playbook" },
  { id: "reunion", label: "Réunion d'équipe" },
  { id: "slack", label: "Slack interne" },
];

export const inspirations: Inspiration[] = [
  // ------------------------------------------------------------------- churn
  {
    id: "churn-risque-plutot-que-roi",
    title: "Le renouvellement sauvé en changeant de terrain d'argumentation",
    theme: "churn",
    pattern:
      "Quand le client ne sait pas mesurer le ROI par canal, arrête de défendre le coût et déplace le débat sur le risque d'être déclassé face à ses concurrents directs.",
    story:
      "Un compte de cabinet d'audit et de conseil, suivi par une équipe Enterprise sur le marché FR, arrivait au renouvellement avec une baisse annoncée de 25 % de ses recrutements et un passage de huit supports de sourcing à deux. L'agence partenaire a prévenu quelques jours avant le rendez-vous que le client hésitait entre rester sur une page premium à 30 K€ et monter à 60 K€ sur la suite marque employeur, avec pour objection de fond l'absence de tracking des recrutements par canal. Le commercial a préparé le rendez-vous sur trois appuis : un outil de profilage pour caler le discours sur un profil de décision orienté data, les analytics internes pour positionner le client contre les autres grands cabinets sur la visibilité employeur, et une restitution dynamique plutôt qu'un jeu de slides. Faute de donnée de ROI défendable, le pitch a été entièrement reconstruit autour de la marque employeur comme actif stratégique et du risque d'apparaître en page standard quand les concurrents directs restent en premium. Le deal a été signé à 50 K€, avec la suite marque employeur posée comme socle et une activation progressive des offres premium prévue au fil des revues d'activité.",
    numbers: [
      "136 K€ en 2024/2025 puis 135 K€ en 2025/2026",
      "50 K€ signés au renouvellement",
      "Client en baisse de 25 % de recrutements par an",
      "Passage de 8 supports de sourcing à 2, soit 6 supports coupés",
      "Arbitrage client entre 30 K€ et 60 K€",
    ],
    source: "Slack #fr-naar-sales-cs, message de partage de win du 6 août 2026",
    sourceKind: "slack",
    adaptation:
      "C'est exactement ta configuration sur Groupe Saint-Gatien et sur Accor, où l'attribution des recrutements t'échappe en partie. Quand un directeur te dit qu'il ne sait pas ce que tu lui rapportes, ne va pas chercher un chiffre de ROI que tu ne pourras pas prouver : sors le comparatif de visibilité contre les autres groupes de cliniques ou les autres enseignes hôtelières de la zone. Le bon indicateur devient la position relative, pas le coût par recrutement.",
    questionIds: ["churn", "client-mecontent", "ana-chiffre-defendre", "deal-prix", "client-relation-haute"],
    confidence: "source-directe",
  },
  {
    id: "winback-huit-mois",
    title: "La reconquête obtenue au bout de huit mois de relances",
    theme: "churn",
    pattern:
      "Sur un compte dormant, tiens la cadence de relances en binôme commercial et customer success pendant des mois, et reviens avec plusieurs produits d'un coup plutôt qu'avec une offre d'appel.",
    story:
      "Une commerciale de l'équipe DCA FR a annoncé une reconquête sur une enseigne d'appart-hôtels après huit mois d'allers-retours, de relances, de réunions et de démonstrations des solutions faites à l'équipe du client. Le travail a été mené en binôme avec sa customer success manager, la même sur toute la durée. Le bon de commande a fini par être signé pour un lancement en janvier de l'année suivante. Le deal n'est pas une reprise timide : il combine offres sponsorisées, événement de recrutement et marque employeur dans un seul engagement.",
    numbers: [
      "8 mois d'allers-retours avant signature",
      "Offres sponsorisées 21 600 €",
      "Événement de recrutement 10 000 €",
      "Marque employeur 23 625 €",
      "Total 55 225 €, soit +393 % contre le revenu de l'année précédente",
    ],
    source: "Slack #dca-fr-team, alerte deal du 4 décembre 2024",
    sourceKind: "slack",
    adaptation:
      "Tu as 791 réseaux parents qui ne contiennent qu'un seul compte et une longue traîne de dormants. Le mécanisme intéressant ici n'est pas la persévérance, c'est la sortie : ne reviens pas avec une offre d'essai à 3 K€, reviens avec un paquet sponsorisé plus événement plus marque employeur. Sur Babychou ou MERCI+, ça transforme une reconquête symbolique en ligne de revenu qui compte.",
    questionIds: ["churn", "deal-cycle-long", "client-relation-froide", "resilience"],
    confidence: "reconstitue",
  },
  {
    id: "winback-clevel-terrain",
    title: "Le compte churné repris par le terrain avant d'être repris par le prix",
    theme: "c-level",
    pattern:
      "Sur un compte totalement churné, reconstruis d'abord la relation par des visites physiques répétées et un sponsor au comité de direction, et ne rouvre la discussion commerciale qu'une fois le coût par candidature redevenu démontrable.",
    story:
      "Un acteur belge des services à domicile avait basculé presque tout son budget du marketing employeur vers le marketing client et était tombé à 22 K€ par an. Un commercial du bureau de Bruxelles a passé l'année à reconstruire la relation plutôt qu'à représenter une offre : visites physiques répétées au siège du client, un événement client organisé l'année précédente, et un engagement suivi avec le directeur des opérations. La présence du directeur des systèmes d'information à un événement d'été a achevé d'ancrer la relation au bon niveau. Le message de partage insiste sur le point de bascule : la discussion commerciale n'a été rouverte qu'à partir du moment où le coût par candidature repartait dans la bonne direction et pouvait être montré. Le client a alors signé son premier accord annuel, en s'engageant sur une croissance de 58 % sur un an.",
    numbers: [
      "Compte tombé à 22 K€ par an sur les 12 derniers mois",
      "Engagement de croissance de 58 % sur un an, à 36 K€ par an",
      "40 K€ par an de pouvoir d'achat identifié",
    ],
    source: "Slack #office-brussels, partage de win du 26 août 2026",
    sourceKind: "slack",
    adaptation:
      "Tu as tendance à revenir sur un dormant avec une proposition. Inverse l'ordre sur tes fédérations ADMR qui ont coupé : va sur place, fais-toi présenter le directeur de la fédération, et ne reparle de budget qu'une fois que tu peux montrer une courbe de coût par candidature qui redescend. C'est aussi ta meilleure réponse à la question sur l'accès au C-level, parce que le sponsor y est obtenu par la présence physique et non par un e-mail bien tourné.",
    questionIds: ["churn", "deal-clevel", "client-relation-froide", "client-confiance"],
    confidence: "source-directe",
  },

  // --------------------------------------------------------------------- prix
  {
    id: "objection-prix-intention",
    title: "Répondre à « c'est trop cher » par la nature de l'audience",
    theme: "prix",
    pattern:
      "Face à une objection de prix sur un produit de marque employeur, ne défends pas le volume d'impressions, requalifie l'audience : une intention de carrière ne se compare pas à une attention de divertissement.",
    story:
      "La table ronde de lancement du sprint marque employeur France a été résumée par écrit dans le canal dédié, avec les interventions de quatre commerciaux seniors. Le premier liste les moments où le produit se vend : secteur en pénurie, entreprise avec un déficit d'image, campagne de recrutement à fort volume. Le deuxième détaille la détection : repérer dans la bibliothèque publicitaire d'un réseau social les clients qui font déjà du branding payant, analyser les taux de clics par catégorie de métier dans le back office, et comparer les recherches de marque pour isoler les entreprises peu connues d'une même verticale. Le troisième recommande de cibler les directions marketing et communication plutôt que les seules directions RH. La quatrième traite l'objection de prix de front : le produit cible une intention de carrière et non une attention de divertissement, ce qui explique des taux de clics cinq à six fois supérieurs, et justifie le coût pour mille.",
    numbers: [
      "98 % d'audience fraîche",
      "Taux de clics 5 à 6 fois supérieurs aux réseaux sociaux grand public",
      "Coût pour mille à 40 €",
    ],
    source: "Slack #eba-sprint-fr, compte rendu de la table ronde de lancement du 12 mai 2026",
    sourceKind: "reunion",
    adaptation:
      "Tu n'as pas d'histoire de remise refusée dans ton book, et c'est une question que tu redoutes. Prends ce mécanisme comme grille : quand un adhérent Système U ou une direction Accor te demande un geste, ne discute pas le montant, discute ce que tu vends. La phrase à réutiliser est que tu ne vends pas de l'affichage mais de l'intention de candidature, et que le prix se compare à un coût par candidature commencée, pas à un coût pour mille.",
    questionIds: ["deal-prix", "client-pousser-contre", "ana-chiffre-defendre", "deal-upsell"],
    confidence: "source-directe",
  },
  {
    id: "roi-prouve-par-le-client",
    title: "Laisser le client construire lui-même la preuve de ROI",
    theme: "prix",
    pattern:
      "Quand le client dit qu'il ne peut pas prouver que ça marche, ne lui apporte pas ton reporting : aide-le à monter son propre dispositif de mesure, avec un flux séparé, et laisse le chiffre venir de lui.",
    story:
      "Un annonceur Enterprise américain de la rénovation résidentielle a construit son propre suivi externe pour comparer l'outil de sourcing aux offres sponsorisées : un indicateur de taux de placement, un identifiant de flux distinct, et un tableur maison. La mesure a donné une surperformance de 12,6 points du sourcing sur les offres sponsorisées. Le document interne recommande explicitement aux commerciaux de citer ce cas pour répondre à l'objection « je ne peux pas prouver que ça marche ». La logique est inverse de celle du réflexe commercial : la preuve la plus solide est celle que le client a fabriquée lui-même et qu'il n'a donc aucune raison de contester.",
    numbers: [
      "Surperformance de 12,6 points du sourcing contre les offres sponsorisées",
      "Taux de placement 20 % contre 7,4 %",
      "Score de recommandation client 8",
    ],
    source: "AI Sourcing + Smart Sourcing Beta UXR Readout, avril 2026",
    sourceKind: "best-practices",
    adaptation:
      "Sur tes réseaux passés par un flux ATS, tu peux faire exactement cela : demander un identifiant de flux distinct pour un périmètre test et laisser le client mesurer. Sur Système U via Ideuzo, l'agence est déjà l'interlocuteur qui produit les chiffres, donc tu construis le dispositif avec elle et tu la laisses présenter. Tu passes d'un vendeur qui promet à un vendeur qui outille, et le chiffre devient inattaquable en comité.",
    questionIds: ["ana-donnee-contre-client", "ana-chiffre-defendre", "deal-prix", "client-business-review"],
    confidence: "source-directe",
  },
  {
    id: "bras-de-fer-propale",
    title: "Le renouvellement arraché après de nombreuses versions de proposition",
    theme: "prix",
    pattern:
      "Sur un renouvellement dur, accepte d'enchaîner les versions de proposition au lieu de figer une offre, et garde une ligne produit nouvelle en réserve pour le bras de fer final.",
    story:
      "Le récapitulatif hebdomadaire des renouvellements d'une équipe Enterprise FR qualifie le deal d'une grande ESN comme arraché après de nombreuses versions de proposition et un vrai bras de fer final. Le compte passe de 163 K€ à 205 K€, soit 25 % de croissance, dans un secteur pourtant en contraction. Le deal contient de la marque employeur en fil rouge sur douze mois, ce client étant le premier de sa verticale sur ce format, plus deux événements de recrutement, des offres sponsorisées et du sponsorisé premium. Le message de l'équipe conclut sur la persévérance qui paie. Le même récapitulatif contient un cas symétrique, un cabinet d'audit sécurisé à budget strictement identique dans un contexte de recrutements divisés par quatre, présenté comme une victoire.",
    numbers: [
      "Renouvellement à 205 K€ contre 163 K€ l'année précédente, soit +25 %",
      "Marque employeur en fil rouge sur 12 mois, premier client de la verticale sur ce format",
      "Cas symétrique : 97 840 € reconduits à l'identique, recrutements du client divisés par quatre",
    ],
    source: "Slack #fr-naar-sales-cs, récapitulatif des renouvellements du 19 décembre 2025",
    sourceKind: "slack",
    adaptation:
      "Retiens surtout le cas symétrique, parce qu'il te donne une réponse honnête à la question sur un objectif manqué : un renouvellement à l'identique chez un client dont les recrutements sont divisés par quatre est une victoire, et ça se défend avec le volume de recrutement du client comme dénominateur. Sur Mousquetaires ou Saint-Gatien, tu peux construire la même démonstration, revenu stable contre besoin en baisse, plutôt que de subir la lecture en croissance brute.",
    questionIds: ["deal-prix", "objectif-manque", "deal-cycle-long", "resilience"],
    confidence: "reconstitue",
  },

  // -------------------------------------------------------------------- échec
  {
    id: "pilote-mauvais-role",
    title: "Le pilote raté parce qu'il portait sur le poste le plus difficile",
    theme: "echec",
    pattern:
      "Ne laisse jamais un client tester un nouveau produit sur son poste le plus dur : cadre le pilote sur un poste à volume, quitte à décevoir sur l'ambition affichée.",
    story:
      "Un transporteur routier américain a démarré un pilote d'outil de sourcing avec un recruteur sceptique. Celui-ci a passé dix-sept minutes en calibration, plafonné l'outil à dix contacts, et donné un score de recommandation de zéro en deuxième semaine. Le poste choisi pour le test était le plus contraint de son périmètre, une certification de conducteur de bus scolaire dans un état donné, autrement dit le cas où aucun outil ne pouvait produire de résultat rapide. Après recadrage du pilote sur des postes à volume dans une autre zone, le même recruteur est remonté à un score de dix. Le document interne en tire une règle explicite pour les commerciaux : la valeur de l'outil est la vitesse de contact et l'apport de candidats nouveaux, pas la perfection du matching.",
    numbers: [
      "Score de recommandation de 0 en semaine 2, puis de 10 après recadrage",
      "17 minutes passées en calibration",
      "Outil plafonné par le client à 10 contacts",
    ],
    source: "AI Sourcing + Smart Sourcing Beta UXR Readout, avril 2026",
    sourceKind: "best-practices",
    adaptation:
      "C'est la munition qui te manque sur la question de l'échec de closing, parce que l'échec y est technique et pas relationnel. Tu vis la même chose quand une fédération ADMR te fait tester le sponsorisé sur son poste d'aide à domicile le plus rural : le test échoue et il grille le produit pour deux ans. La règle à poser à l'oral est que c'est toi qui choisis le périmètre du pilote, et que tu refuses un test sur le poste impossible même si le client insiste.",
    questionIds: ["perte-closing", "erreur", "client-mecontent", "ia-metier"],
    confidence: "source-directe",
  },
  {
    id: "retro-deux-colonnes",
    title: "La rétrospective trimestrielle qui force à écrire ses échecs",
    theme: "echec",
    pattern:
      "Impose-toi un format de bilan à deux colonnes symétriques, ce que je reproduis et ce que j'aurais fait autrement, et une matrice de portefeuille en quatre cases, pour que l'autocritique soit une case à remplir et pas une bonne intention.",
    story:
      "La revue trimestrielle d'une équipe DCA France fait remplir à chaque commercial deux colonnes symétriques : ce qu'il souhaite reproduire le trimestre suivant, et ce qu'il aurait pu faire différemment. S'y ajoute une matrice de portefeuille en quatre cases, locomotive, récolter, planter et poids mort, croisant la croissance et le risque de churn, avec une priorisation commerciale distincte de la priorisation customer success. Le contenu est inhabituellement franc pour un document interne : une commerciale inscrit en points bas la liste nominative de ses deals signés mais non dépensés, une autre écrit avoir perdu du temps sur des comptes chronophages à faible dépense, une troisième formule une vision longue assumée, planter des graines pour les récolter beaucoup plus tard. Le format vaut plus que les réponses : l'aveu est une case du modèle, donc personne n'y échappe.",
    numbers: [
      "Deals signés mais non dépensés relevés par une commerciale : 6 027,88 €",
      "Matrice de portefeuille en 4 cases, locomotive, récolter, planter, poids mort",
      "Taux d'atteinte affichés par commercial entre 82 % et 95 % du quota trimestriel",
    ],
    source: "QBR DCA, revue trimestrielle Q1 FY2024, document mis à jour le 20 juin 2024",
    sourceKind: "reunion",
    adaptation:
      "Tu as 817 réseaux et tu réponds à la priorisation par la concentration du revenu. La matrice en quatre cases est plus forte parce qu'elle nomme le poids mort et te fait dire où tu arrêtes. Classe Accor et Système U en locomotive, Saint-Gatien et ADMR en récolter, Babychou en planter, et assume une case poids mort explicite. Pour la question sur une erreur, l'écart entre signé et dépensé est un aveu utilisable, concret et mesurable.",
    questionIds: ["erreur", "objectif-manque", "prio-methode", "prio-gros-book", "lead-feedback"],
    confidence: "source-directe",
  },

  // ------------------------------------------------------------- priorisation
  {
    id: "quick-wins-douze-jours",
    title: "L'ordre de priorité des leviers à douze jours de la fin du trimestre",
    theme: "priorisation",
    pattern:
      "En fin de trimestre, remplace la revue de pipeline par une liste ordonnée de leviers réellement closables, et fixe un objectif de marge de sécurité chiffré par commercial plutôt qu'un objectif d'équipe.",
    story:
      "À douze jours de la fin du trimestre, une équipe DCA France était à 98,6 % de revenu verrouillé pour 99,9 % de prévision, soit un écart de 3 K€. Le responsable a fixé une marge de sécurité d'environ 1 K€ par commercial, ce qui rend l'objectif individuel et immédiatement actionnable. L'ordre de priorité donné était fixe : budgets de bons de commande restants, puis montées en gamme sur les campagnes en surconsommation, puis récupération de churn en redémarrant les campagnes sur les offres en pause à fort volume, puis progression intentionnelle des opportunités en cours, puis les signatures de suite marque employeur. Le message cite un exemple délibérément modeste, une visite au culot chez une enseigne de bricolage qui a fait remonter un besoin de mille euros à démarrer tout de suite. La consigne finale tient en une phrase : pas de pipeline passif, uniquement des actions concrètes et closables.",
    numbers: [
      "98,6 % de revenu verrouillé pour 99,9 % de prévision, soit 3 K€ d'écart",
      "Marge de sécurité visée d'environ 1 K€ par commercial",
      "Besoin de 1 000 € détecté par une visite terrain non planifiée",
      "10 % de bonus sur le tableau de bord si croissance de 5 % sur les 12 derniers mois",
    ],
    source: "Slack #dca-fr-team, cadrage de fin de trimestre du 19 juin 2026",
    sourceKind: "slack",
    adaptation:
      "C'est la réponse structurée qui te manque sur le trimestre en retard. Tu as l'ordre, tu n'as qu'à l'habiller de tes comptes : reliquats de bons de commande sur Accor, surconsommation sur les magasins Système U qui tournent, redémarrage des offres en pause chez Saint-Gatien. Le détail qui fait la différence à l'oral est le passage d'un écart d'équipe à une cible individuelle chiffrée, parce qu'il montre que tu sais transformer un objectif en action.",
    questionIds: ["prio-trimestre-en-retard", "prio-urgent-important", "prio-methode", "ana-forecast"],
    confidence: "source-directe",
  },

  // ------------------------------------------------------------ deal complexe
  {
    id: "champion-interne-multisite",
    title: "Fabriquer un champion en renforçant sa position dans son propre groupe",
    theme: "deal-complexe",
    pattern:
      "Sur un groupe multi-sites, n'essaie pas de convaincre tous les sites : audite-les tous, puis sers-toi de cet audit pour renforcer la crédibilité d'un interlocuteur unique auprès d'eux, et il deviendra ton champion.",
    story:
      "Un commercial travaillant un groupe industriel multi-sites a commencé par auditer l'ensemble des sites selon une grille situation, difficulté, impact, besoin. Le point central du cas est écrit tel quel dans le document : renforcer l'image de l'interlocuteur auprès des différents sites, gagner sa confiance, traiter ses enjeux personnels et les aligner sur les objectifs de l'entreprise tels que perçus par tous les sites français, ce qui transforme cet interlocuteur en champion. Le commercial y a ajouté une rationalisation des pages entreprise pour la communication groupe, et une distinction nette entre l'investissement porté par le siège et celui porté par les sites. Le budget verrouillé sur les offres sponsorisées est passé de 150 K€ à 468 K€ d'un exercice à l'autre, avec une négociation sourcing en cours et une signature marque employeur imminente.",
    numbers: [
      "Budget verrouillé sur les offres sponsorisées : 468 K€ pour 2024/25 contre 150 K€ en 2023/24",
      "Négociation sourcing en cours, fourchette 99 K€ à 122 K€",
    ],
    source: "2025 France best practice sharing, deck mis à jour le 24 septembre 2025",
    sourceKind: "best-practices",
    adaptation:
      "C'est le mécanisme le plus directement transposable sur Groupe Saint-Gatien et sur la Fédération ADMR. Ton audit par établissement, tu le produis déjà : sers-t'en pour donner à ton contact au siège un document qui le fait exister auprès des cent cliniques ou des fédérations, pas pour te faire valoir toi. La bascule est que tu arrêtes de vendre à cent interlocuteurs et que tu équipes un seul interlocuteur pour qu'il vende à sa place.",
    questionIds: ["deal-complexe", "lead-influence", "client-relation-haute", "deal-upsell"],
    confidence: "source-directe",
  },
  {
    id: "recouvrement-avant-client",
    title: "Faire entrer le recouvrement dans la boucle avant le client",
    theme: "deal-complexe",
    pattern:
      "Quand un deal réseau bute sur la facturation par point de vente, règle le sujet en interne avec le recouvrement avant d'en parler au client, puis amène la spécialiste financière en rendez-vous.",
    story:
      "Un commercial national a travaillé l'automatisation de la sponsorisation via l'outil de gestion des candidatures des points de vente d'un groupement de distributeurs alimentaires indépendants, soit trois mille points de vente. Le blocage n'était pas commercial mais opérationnel : trouver le bon alignement pour attribuer un budget par point de vente et facturer chaque point de vente séparément. Sa réponse a été de tenir d'abord plusieurs réunions en tête à tête avec la spécialiste du recouvrement, puis une seule réunion à trois avec elle et la cliente pour exposer les solutions déjà arbitrées. Le déploiement a été séquencé en trois temps, un test sur deux magasins, puis dix, puis un lancement à grande échelle. La leçon inscrite sur la fiche est laconique : une préparation proactive assure une transition fluide.",
    numbers: [
      "3 000 points de vente indépendants concernés",
      "Test sur 2 magasins, puis 10, avant lancement à grande échelle",
    ],
    source: "FR Best Practices Sharing FYQ4-2024, deck au format STAR, modifié le 9 février 2025",
    sourceKind: "best-practices",
    adaptation:
      "Tu vis exactement ce blocage sur Mousquetaires et sur les adhérents Système U, où la facturation magasin par magasin est le vrai frein, pas le prix. Va chercher le recouvrement en amont et arrive en rendez-vous client avec la mécanique déjà arbitrée. Pour la question sur l'influence sans autorité, c'est un meilleur exemple qu'un conflit d'équipe, parce que tu as obtenu d'une fonction support qu'elle s'expose devant un client.",
    questionIds: ["deal-complexe", "deal-multi-parties", "lead-influence", "lead-transverse"],
    confidence: "source-directe",
  },
  {
    id: "reseau-regional-agrege",
    title: "Passer d'un deal par franchise à des campagnes régionales agrégées",
    theme: "deal-complexe",
    pattern:
      "Sur un réseau décentralisé, arrête de vendre agence par agence : regroupe les franchisés par région dans une campagne unique, et sers-toi de la montée en taille des régions pour préparer le deal réseau.",
    story:
      "Le cas d'un réseau de services à domicile de plus de deux cent soixante-dix agences franchisées a été présenté en session de partage de bonnes pratiques France. Jusqu'en 2023, la sponsorisation se faisait en local, par packages d'agence et deals individuels par franchise. En février 2024, une première campagne régionale a regroupé soixante-deux agences sur sept régions dans un seul engagement de trois mois, immédiatement renouvelée sur une taille presque triple, cent quatre-vingts agences et neuf régions. L'approche décrite est une collaboration interne sur plusieurs niveaux, centrée sur des relations au comité de direction, avec des revues de performance régulières, un reporting détaillé et des rendez-vous physiques. L'étape suivante annoncée dans le document est un deal global sur l'ensemble du réseau avec de la sponsorisation continue toute l'année.",
    numbers: [
      "Plus de 270 agences franchisées",
      "Première campagne régionale : 7 régions, 62 agences, 53 800 € sur 3 mois",
      "Renouvellement : 9 régions, 180 agences, 65 100 € sur 3 mois",
      "Investissement régional 30 K€ en 2023 contre 119 K€ en 2024",
      "Prévision 2024 du réseau : 509 K€, soit +11 % sur un an",
    ],
    source: "Best practices sharing 13 Nov 2024, support de la session France du 13 novembre 2024",
    sourceKind: "best-practices",
    adaptation:
      "C'est le compte Petits-fils, que tu as tenu pendant ton cover NAM, mais raconté par l'angle que tu n'as pas utilisé : l'agrégation régionale comme marche intermédiaire vers le deal réseau. Applique la marche sur Babychou et sur Family Sphere, où tu vends encore établissement par établissement. Et garde l'ordre de grandeur en tête, la deuxième campagne triple le nombre d'agences sans tripler le budget, ce qui est l'argument de prix unitaire à poser au franchiseur.",
    questionIds: ["deal-complexe", "prio-gros-book", "deal-cycle-long", "client-relation-haute"],
    confidence: "source-directe",
  },

  {
    id: "budget-dilue-recentre",
    title: "Refuser un budget dilué sur cinquante-sept sites pour le concentrer",
    theme: "deal-complexe",
    pattern:
      "Quand un réseau étale un petit budget sur tous ses sites, ne demande pas une rallonge : propose de plafonner le nombre d'entités et d'annonces sponsorisées par mois, de prouver sur ce périmètre réduit, et de n'ouvrir le contrat annuel qu'ensuite.",
    story:
      "Un acteur du médico-social, cinquante-sept établissements sur la prise en charge des troubles psychiques et la protection de l'enfance, dépensait six mille euros par an, soit environ cinq cents euros par mois répartis sur l'ensemble du réseau. Le diagnostic posé par le commercial est que le problème n'était pas le budget mais sa dilution, qui rendait le client invisible sur un marché en pénurie. La proposition a inversé la logique : un budget mensuel bien supérieur, mais cadré sur un maximum de dix entités critiques par mois et deux à trois annonces par entité. Le résultat a été mesuré avant d'aller plus loin, sur la visibilité premium et sur les postes marqués urgents, et c'est cette mesure qui sert de base à la discussion de contrat annuel.",
    numbers: [
      "57 établissements dans le réseau",
      "6 000 € par an en 2025, soit une moyenne de 500 € par mois",
      "Nouvelle proposition : 5 000 € hors taxes par mois, soit 60 K€ par an",
      "Plafond de 10 entités critiques par mois, 2 à 3 annonces par entité",
      "+49 % de candidatures avec la visibilité premium",
      "+195 % sur les postes marqués urgents",
    ],
    source: "Close out TLs, slide de la revue du 12 juin, deck mis à jour le 3 septembre 2026",
    sourceKind: "close-out",
    adaptation:
      "C'est le schéma exact de tes fédérations ADMR et de tes cliniques Saint-Gatien, où le budget se saupoudre sur tous les établissements et ne produit rien de visible nulle part. La phrase à reprendre est que tu proposes de dépenser sur moins de sites, pas sur plus, ce qui désarme d'emblée le soupçon de vente additionnelle. Et garde l'ordre : la mesure sur périmètre réduit d'abord, le contrat annuel ensuite, jamais l'inverse.",
    questionIds: ["deal-complexe", "client-pousser-contre", "prio-gros-book", "ana-donnee-contre-client"],
    confidence: "source-directe",
  },
  {
    id: "annual-deal-changement-strategie",
    title: "Monter en accord annuel en changeant la stratégie d'acquisition, pas le tarif",
    theme: "prix",
    pattern:
      "Pour faire grossir un renouvellement, ne renégocie pas le montant de l'accord précédent : repositionne d'abord la stratégie d'acquisition du client, et laisse la nouvelle stratégie porter le nouveau montant.",
    story:
      "Un acteur français des résidences étudiantes a été présenté en deal de la semaine par une commerciale de l'équipe Inside Sales FR. Le compte tournait sur un accord précédent de soixante-sept mille euros par an. La ligne portée sur la fiche est un changement de stratégie d'acquisition client, et c'est cette bascule qui est présentée comme la cause du nouveau montant. L'accord annuel a été signé à quatre-vingt-dix mille euros, soit trente-trois pour cent de croissance. La fiche ne détaille pas la négociation elle-même, ce qui est en soi un signal : la valeur créée est en amont du prix.",
    numbers: [
      "Accord précédent : 67 K€ par an",
      "Nouvel accord annuel : 90 K€, soit +33 % de croissance",
    ],
    source: "Close out TLs, deal de la semaine du 31 juillet, deck mis à jour le 3 septembre 2026",
    sourceKind: "close-out",
    adaptation:
      "Tu n'as pas d'accord annuel emblématique dans ton book, ton plus gros deal à 438 204 € étant une opportunité unique et non un annual deal. Prends ce mécanisme comme méthode de préparation sur Accor et sur MERCI+ et Family Sphere : arrive au renouvellement avec une stratégie d'acquisition différente de l'année précédente, sinon la seule variable de discussion restante sera le prix, et ce sera le client qui la tiendra.",
    questionIds: ["deal-prix", "deal-upsell", "deal-cycle-long", "client-business-review"],
    confidence: "reconstitue",
  },

  // ------------------------------------------------------------------ agences
  {
    id: "agence-ambassadeur",
    title: "Transformer une agence partenaire en ambassadrice par un atelier",
    theme: "agence",
    pattern:
      "Ne réunis pas une agence partenaire pour lui présenter tes produits : fais venir ses équipes sur ton site et laisse tes propres commerciaux pitcher devant elle sur la base du volontariat.",
    story:
      "L'agence Ideuzo s'est déplacée chez Indeed pour rencontrer les équipes commerciales et présenter son actualité. Plutôt qu'une réunion commerciale classique, les responsables de comptes agences ont organisé un atelier collaboratif et volontairement informel, avec un contenu calibré sur des commerciaux de tous niveaux. L'exercice retenu est inhabituel : sur la base du volontariat, des commerciaux Indeed ont pitché les produits devant l'agence, chacun affinant son argumentaire d'ascenseur au passage. La conclusion inscrite en bas de la fiche est directe : travailler main dans la main avec des agences partenaires les transforme en ambassadrices efficaces. Le document ne donne aucun chiffre, seulement des retours positifs relayés publiquement et une nouvelle collaboration ouverte avec un commercial de l'agence.",
    numbers: [],
    source: "FR Best Practices Sharing FYQ4-2024, deck au format STAR, modifié le 9 février 2025",
    sourceKind: "best-practices",
    adaptation:
      "Ideuzo est ton intermédiaire sur Système U, donc c'est littéralement ton compte vu par un autre angle. L'idée à voler est l'inversion du sens du pitch : c'est toi qui te mets en risque devant l'agence, pas l'inverse, et c'est ce qui crée la dette de réciprocité. Tu peux rejouer cela avec Matière Grise et avec Tomorhow sur Family Sphere, et c'est une bien meilleure réponse que la relation commerciale classique sur la question de la construction d'une relation partenaire.",
    questionIds: ["agence-construire-relation", "agence-former", "agence-portefeuille-partner", "lead-influence"],
    confidence: "source-directe",
  },
  {
    id: "agency-academy",
    title: "L'académie agences montée pour compenser une perte de ressources internes",
    theme: "agence",
    pattern:
      "Quand tu perds tes ressources avant-vente, transfère l'expertise aux agences plutôt que d'en faire moins : deux demi-journées par mois par industrie, sept agences maximum, animées par tes commerciaux, avec le pipeline mesuré par session.",
    story:
      "Le constat de départ est écrit sans détour dans le document : plus de ressources avant-vente ni de spécialistes pour l'équipe agences, un besoin de compenser dès 2024, et un niveau d'expertise verticale discordant d'une agence à l'autre. L'hypothèse posée est qu'un consultant d'agence qui maîtrise les argumentaires et les indicateurs sera plus autonome et plus crédible auprès du client final. Le format retenu tient en trois piliers affichés, une exclusivité dans l'information donnée, la valorisation de l'expertise des commerciaux et des customer success Indeed comme animateurs, et un environnement premium sur le fond comme sur la forme. Le suivi est ce qui rend le dispositif défendable : chaque session est chiffrée en pipeline généré, pas en satisfaction.",
    numbers: [
      "Session santé et services à la personne : 3 propositions envoyées et 2 opportunités de montée en gamme, environ 200 K€",
      "Session DCA : une proposition globale à 1 M€ envoyée, 2 prospects en activation, 1 nouveau client à 50 K€",
      "Session ESN : 3 prospects en cours, perspective de 50 K€",
      "Sessions suivantes : 7 agences et 35 participants, puis 11 agences et 42 inscrits, puis 8 agences et 32 inscrits",
      "Format : 7 agences maximum par session",
    ],
    source: "2025 France best practice sharing, deck mis à jour le 24 septembre 2025",
    sourceKind: "best-practices",
    adaptation:
      "Tu réponds déjà à la surcharge par le webinar, tu en as animé plus de vingt pour plus de six cents franchisés. La variante ici est de former l'intermédiaire plutôt que le client final, ce qui démultiplie bien davantage sur ton book. Chiffre chaque session en pipeline ouvert, comme le fait ce document, parce que c'est ce qui distingue une initiative de formation d'un investissement commercial défendable devant un manager.",
    questionIds: ["agence-former", "agence-portefeuille-partner", "lead-transverse", "prio-gros-book"],
    confidence: "source-directe",
  },
  {
    id: "evenements-ville-par-ville",
    title: "Décliner le même événement ville par ville, avec son budget propre",
    theme: "agence",
    pattern:
      "Au lieu d'un gros événement national négocié une fois, décline un format unique site par site, avec un budget et un nombre de postes ouverts propres à chaque ville, et mesure inscrits, participants et recrutements sur chacun.",
    story:
      "Une équipe commerciale et customer success, en binôme avec l'agence du réseau, a déroulé une série d'événements de recrutement pour Accor, ville par ville. Le document liste sept sites sur un seul trimestre, de la grande opération parisienne à des formats bien plus petits sur un hôtel unique, chacun avec ses propres postes ouverts, son budget et ses résultats. Le deck ne masque pas l'écart entre inscrits et participants, il l'affiche site par site, ce qui donne au dispositif sa crédibilité interne. La série se poursuit avec une session lyonnaise dimensionnée à la même échelle que les formats régionaux.",
    numbers: [
      "Paris : 433 postes ouverts, plus de 600 participants, 200 recrutements, budget 9 500 €",
      "Marseille : 95 postes ouverts, 368 participants pour 941 inscrits, 86 recrutements, budget 8 500 €",
      "Côte d'Azur : 50 postes en CDD, 124 participants pour 445 inscrits, 22 embauches, budget 6 500 €",
      "Site unique en région parisienne : 16 postes, 183 participants, 15 recrutements, budget 4 500 €",
      "Session suivante à Lyon : 32 postes ouverts pour 5 500 €",
    ],
    source: "2025 France best practice sharing, deck mis à jour le 24 septembre 2025",
    sourceKind: "best-practices",
    adaptation:
      "C'est ton premier compte, traité par une autre équipe et par un angle que tu n'utilises pas. Le mécanisme à retenir est le fractionnement : sept budgets de quatre à dix mille euros passent bien plus facilement qu'un budget national unique, et chaque ville produit sa propre preuve pour vendre la suivante. Rejoue-le sur les fédérations ADMR et sur les cliniques Saint-Gatien, où le format événement n'existe pas encore chez toi.",
    questionIds: ["deal-upsell", "client-business-review", "deal-multi-parties", "agence-deal-gagne"],
    confidence: "reconstitue",
  },

  // --------------------------------------------------------------- analytique
  {
    id: "ab-poste-par-poste",
    title: "Prouver un produit par un test A/B poste par poste, apprentissage négatif compris",
    theme: "analytique",
    pattern:
      "Pour vendre un produit additionnel, lance deux campagnes mensuelles courtes sur quatre postes, compare les candidatures commencées poste par poste, et publie l'angle mort de la mesure au lieu de le cacher.",
    story:
      "Une ESN parisienne a servi de terrain de preuve pour un réseau de diffusion technique, sur deux campagnes mensuelles successives portant chacune sur quatre postes. Le document présente le résultat poste par poste, pas en agrégé, ce qui rend l'écart discutable poste par poste avec le client. Un poste avait été publié uniquement via le réseau additionnel, sans équivalent en direct, et le document le signale au lieu de compter l'écart comme une victoire. La ligne d'apprentissage est explicitement autocritique : le suivi reste à construire pour identifier la valeur réelle de chaque profil venu du réseau plutôt que de la plateforme. Le compte est passé de zéro euro à quatre-vingt-douze mille euros sur deux familles de produits.",
    numbers: [
      "Campagne 1 : développeur embarqué 40 candidatures commencées via le réseau contre 3 en direct, consultant cloud 12 contre 6, scrum master 18 contre 2",
      "Campagne 2 : testeur QA 44 contre 7, chef de projet applicatif 18 contre 0, consultant cloud 13 contre 2",
      "Compte à 0 € en 2023, 92 000 € en 2024, sur 2 familles de produits",
    ],
    source: "2025 France best practice sharing, deck mis à jour le 24 septembre 2025",
    sourceKind: "best-practices",
    adaptation:
      "Tu produis des benchmarks par établissement, mais rarement un test contrôlé sur les mêmes postes. C'est pourtant la seule forme de preuve qu'un directeur ne peut pas renvoyer à la saisonnalité. Monte-le sur trois cliniques Saint-Gatien avec le même intitulé de poste soignant, et garde le réflexe du document : dis toi-même ce que ta mesure ne prouve pas, c'est ce qui te rend crédible quand tu dis le reste.",
    questionIds: ["ana-donnee-contre-client", "ana-chiffre-defendre", "deal-upsell", "client-pousser-contre"],
    confidence: "source-directe",
  },
];
