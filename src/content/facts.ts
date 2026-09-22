import type { Fact } from "../types";

/**
 * Banque de faits. Tous ces chiffres ont été mesurés dans la donnée interne Indeed
 * ou dans les publications citées, et chacun porte sa provenance et ses précautions.
 *
 * Règle : aucune réponse du site ne cite un chiffre qui n'est pas ici.
 */
export const facts: Fact[] = [
  // ---------------------------------------------------------------- performance
  {
    id: "quota",
    label: "Cible annuelle portée",
    value: "1,5 M€ et plus",
    period: "Depuis 2023",
    provenance: "Objectif du poste de Senior Account Executive DCA",
    caveat:
      "Le revenu facturé mesuré sur 12 mois est de 1,15 M€, donc si on te demande de réconcilier, nomme la base de ton plan de commission plutôt que d'éluder.",
    tags: ["performance", "quota"],
  },
  {
    id: "attainment",
    label: "Atteinte trimestrielle",
    value: "108 % au Q1 2026, 133 % au Q2 2026, environ 108 % au Q3 en cours",
    period: "2026",
    provenance: "Suivi d'atteinte interne, cohérent avec le revenu mesuré",
    caveat: "Le Q2 à 133 % correspond à +85 % de revenu en YoY, c'est la même réalité vue de deux façons.",
    tags: ["performance", "quota"],
  },
  {
    id: "presidents-club",
    label: "President's Club",
    value: "2023",
    period: "2023",
    provenance: "Distinction interne Indeed",
    tags: ["performance", "reconnaissance"],
  },
  {
    id: "book-size",
    label: "Taille du portefeuille",
    value: "817 réseaux parents, 4 584 comptes advertisers",
    period: "Snapshot du 5 septembre 2026",
    provenance: "daily_employer2, comptage à la date du snapshot",
    caveat:
      "Ne jamais citer ce chiffre seul : seuls 26 réseaux et 633 comptes facturent sur 12 mois, et 791 parents ne contiennent qu'un seul compte.",
    tags: ["book", "priorisation"],
  },
  {
    id: "book-revenue",
    label: "Revenu du portefeuille sur 12 mois",
    value: "1,15 M€",
    period: "8 septembre 2025 au 5 septembre 2026",
    provenance: "Somme du revenu local EUR sur son périmètre assigné",
    tags: ["book", "performance"],
  },
  {
    id: "book-growth",
    label: "Croissance du portefeuille à périmètre constant",
    value: "+38 %",
    period: "Janvier à septembre 2026 contre la même période 2025",
    provenance: "Deux méthodes indépendantes, 38,0 % et 39,1 %, sur les comptes présents aux deux périodes",
    caveat:
      "Le chiffre brut est +46,6 % mais il mélange croissance réelle et réassignations de comptes. C'est le premier chiffre qu'un manager testerait, donc cite le +38 %.",
    tags: ["performance", "croissance"],
  },
  {
    id: "concentration",
    label: "Concentration du portefeuille",
    value: "Les 7 premiers réseaux font 84 % du revenu",
    period: "12 mois à septembre 2026",
    provenance: "Revenu 12 mois agrégé par réseau parent",
    tags: ["book", "priorisation"],
  },
  {
    id: "top-accounts",
    label: "Principaux réseaux sur 12 mois",
    value:
      "Accor 214 476 €, Fédération ADMR 164 859 €, MERCI+ et Family Sphere 153 211 €, Groupe Saint-Gatien 129 406 €, Mousquetaires 124 403 €, U Emploi et Système U 101 775 €, Babychou 80 239 €",
    period: "12 mois à septembre 2026",
    provenance: "Revenu 12 mois par réseau parent",
    caveat: "Groupe Saint-Gatien couvre 100 cliniques et hôpitaux privés, c'est ton ancrage healthcare actuel.",
    tags: ["book", "comptes"],
  },

  // --------------------------------------------------------------------- deals
  {
    id: "biggest-deal",
    label: "Plus gros deal gagné",
    value: "438 204 €",
    period: "Closé le 18 mai 2026",
    provenance: "Opportunité Salesforce « Ideuzo for Super U Loisin, Sponsored Jobs », réseau Système U via agences",
    caveat: "Ce n'est pas un annual deal : ne l'appelle pas ainsi. C'est la plus grosse opportunité unique du book.",
    tags: ["deals", "negociation"],
  },
  {
    id: "systeme-u",
    label: "Trajectoire Système U en bookings gagnés",
    value: "101 986 € en 2023, 184 732 € en 2024, 352 979 € en 2025, 547 277 € en 2026",
    period: "2023 à 2026",
    provenance: "Somme des montants d'opportunités gagnées par année de closing",
    caveat: "Réseau géré via les agences Ideuzo et Matière Grise, donc la relation passe par un intermédiaire.",
    tags: ["deals", "croissance", "comptes"],
  },
  {
    id: "admr",
    label: "Trajectoire ADMR",
    value: "D'environ 24 K€ en rythme 2022 à environ 253 K€ en rythme 2026",
    period: "2022 à 2026",
    provenance:
      "Sur son périmètre : 12 K€ en 2022 sur environ six mois de détention, 19 K€ en 2023, 36 K€ en 2024, 74 K€ en 2025, 139 K€ au 5 septembre 2026. Réseau ADMR complet à 165 K€ sur 2026",
    caveat:
      "Les deux bornes demandent une phrase d'explication : 2022 est annualisé depuis six mois de détention, et 253 K€ est un rythme annuel sur le réseau complet, pas du revenu déjà encaissé.",
    tags: ["deals", "croissance", "comptes"],
  },
  {
    id: "intermediaires",
    label: "Part du portefeuille adressée via un intermédiaire",
    value: "Plusieurs des premiers réseaux, dont Système U via Ideuzo et Matière Grise, et Family Sphere via Tomorhow",
    period: "Situation actuelle",
    provenance:
      "Noms d'annonceurs et intitulés d'opportunités dans Salesforce, par exemple « Ideuzo for Super U Loisin » ou « Tomorhow for Family Sphere Nancy »",
    caveat:
      "Ne dis pas « agence média » si l'intermédiaire est un diffuseur ou un ATS : nomme-le pour ce qu'il est, un partenaire de diffusion ou un prestataire de recrutement.",
    tags: ["agences", "book", "deals"],
  },
  {
    id: "ats-flux",
    label: "Comptes diffusés via un outil tiers",
    value: "Une partie des réseaux publie par un flux ATS plutôt qu'en saisie directe",
    period: "Situation actuelle",
    provenance: "Par exemple un flux Beetween chez Kangourou Kids",
    caveat:
      "Conséquence pratique à savoir raconter : tu ne contrôles ni la mise en ligne ni parfois le paramétrage, donc une partie du diagnostic passe par le partenaire technique.",
    tags: ["agences", "technique"],
  },
  {
    id: "nam-cover",
    label: "Cover National Account Manager",
    value: "Neuf mois sur un book healthcare et services à la personne",
    period: "2023 et 2024",
    provenance:
      "Remplacement de la National Account Manager sortante sur Petits-fils, Shiva et AXA. La donnée montre une assignation d'avril 2023 à mars 2025 et environ 1,0 M€ de revenu passé sur ces réseaux, jusqu'à 3 174 établissements",
    caveat:
      "Tu as choisi de dire « cover de neuf mois » sans montant. Garde le 1,0 M€ et les deux ans en réserve, pour le cas où on te demande de chiffrer.",
    tags: ["nam", "healthcare", "comptes"],
  },
  {
    id: "petits-fils",
    label: "Petits-fils pendant la détention",
    value: "Environ 486 K€ sur deux ans, 224 K€ puis 262 K€",
    period: "Avril 2023 à mars 2025",
    provenance: "Revenu GRDM par produit : Sponsored Jobs en campagne et à l'annonce, plus Smart Sourcing dont Featured Employer",
    caveat:
      "Multi-produits veut dire deux familles, pas cinq. Pas d'Employer Branding et pas d'Annual Deal sur ce compte : ne l'utilise jamais comme exemple d'accord annuel.",
    tags: ["nam", "deals", "multi-produits"],
  },
  {
    id: "inside-sales-cover",
    label: "Cover du book Inside Sales d'une collègue",
    value: "Six mois, en plus de son propre portefeuille",
    period: "2024 et 2025",
    provenance: "Fait déclaré par Nathan, non isolable dans la donnée en raison d'une restructuration de territoire",
    tags: ["priorisation", "collaboration"],
  },

  // ------------------------------------------------------------------ activité
  {
    id: "demos",
    label: "Rythme de démonstrations et de performance reviews",
    value: "60 à 80 par mois",
    period: "2022 et 2023, poste d'Account Executive",
    provenance: "Activité déclarée dans son CV, cohérente avec le volume de comptes gérés",
    tags: ["activite", "priorisation"],
  },
  {
    id: "webinars",
    label: "Webinars animés",
    value: "Plus de 20, touchant plus de 600 franchisés",
    period: "2022 et 2023",
    provenance: "Activité déclarée, réponse de scalabilité sur un book trop large pour du un à un",
    tags: ["activite", "scalabilite"],
  },
  {
    id: "cosmic-junior",
    label: "Cosmic Junior, entreprise fondée",
    value: "0 à 100 K$ d'ARR en moins de huit mois, 25 professeurs, plus de 3 000 cours",
    period: "Janvier 2021 à 2023",
    provenance: "Entreprise EdTech cofondée et dirigée par Nathan",
    tags: ["entrepreneuriat", "motivation"],
  },

  // ------------------------------------------------------------------------ IA
  {
    id: "ia-skills",
    label: "Tâches industrialisées en skills réutilisables",
    value: "Environ 20, partagées avec des collègues",
    period: "2025 et 2026",
    provenance:
      "Analyse de compte, deck d'audit, refresh du forecast et du commit, tri des alertes contractuelles, réponses clients, campagnes ABM, sites clients",
    tags: ["ia", "productivite"],
  },
  {
    id: "ia-abm",
    label: "Campagne ABM personnalisée",
    value: "165 e-mails individualisés sur deux réseaux de franchise, zéro crédit d'enrichissement consommé",
    period: "Août 2026",
    provenance: "Six campagnes, chaque e-mail portant le benchmark local de part de clics candidats de son établissement",
    tags: ["ia", "abm", "resultat"],
  },
  {
    id: "ia-controle",
    label: "Erreur d'IA détectée avant envoi",
    value: "1 154 clics et 0 candidature pour une marketplace présentée comme employeur le plus populaire",
    period: "Août 2026",
    provenance:
      "114 paires zone et concurrent vérifiées, 9 leads fautifs dont 2 en première position, cause corrigée dans le calcul puis 298 paires revérifiées sans anomalie",
    tags: ["ia", "qualite", "controle"],
  },
  {
    id: "ia-verif-noms",
    label: "Vérification par agents parallèles",
    value: "181 noms d'établissements contrôlés, 11 noms faux détectés",
    period: "Août 2026",
    provenance: "Dix agents lancés en parallèle contre les sources officielles, avant tout envoi client",
    tags: ["ia", "qualite"],
  },
  {
    id: "ia-contexte",
    label: "Optimisation de son environnement de travail IA",
    value: "24 000 tokens de contexte fixe, 549 outils connectés pour 165 utilisés, règles ramenées de 4 163 à 2 340 tokens",
    period: "Août 2026",
    provenance: "Audit mesuré de son poste, sur la base de 190 conversations et 716 lancements d'agents",
    caveat: "Le point intéressant à raconter : au-delà de 2 000 à 3 000 tokens de règles permanentes, le modèle commence à ignorer ses propres règles en silence.",
    tags: ["ia", "productivite"],
  },

  // ---------------------------------------------------------------- marché Meta
  {
    id: "meta-q2",
    label: "Meta, deuxième trimestre 2026",
    value: "59,363 Md$ de revenu publicitaire, +27 % sur un an, impressions +14 %, prix moyen par annonce +12 %",
    period: "Q2 2026",
    provenance: "Communiqué de résultats Meta du 29 juillet 2026",
    tags: ["meta", "marche"],
  },
  {
    id: "meta-advantage",
    label: "Advantage+ et création générative",
    value: "Plus de 75 Md$ de rythme annuel, plus de 9 millions de PME utilisant un outil créatif génératif",
    period: "Q2 2026",
    provenance: "Commentaire de résultats Meta, donc un chiffre déclaré par l'entreprise et non audité",
    tags: ["meta", "produit"],
  },
  {
    id: "meta-gem",
    label: "Andromeda et GEM",
    value: "+8,3 % de clics et +15,7 % de conversions sur Facebook",
    period: "Q2 2026",
    provenance: "Mesures publiées par Meta, non auditées par un tiers",
    caveat: "Attribue-les toujours à voix haute : « Meta rapporte », et non « l'IA apporte ».",
    tags: ["meta", "ia", "produit"],
  },
  {
    id: "meta-share",
    label: "Meta devant Google en part mondiale",
    value: "26,8 % contre 26,4 %, soit 243,46 Md$ contre 239,54 Md$",
    period: "Prévision 2026",
    provenance: "Prévision EMARKETER d'avril 2026, modélisation privée",
    caveat: "Dis le mot prévision. Citer ces parts comme un résultat publié est la faute la plus repérable.",
    tags: ["meta", "marche", "concurrence"],
  },
  {
    id: "iab-2026",
    label: "Croissance des canaux aux États-Unis",
    value: "Dépense publicitaire +12,3 %, social +16,5 %, CTV +15,6 %, commerce media +13,6 %, search +8,1 %, TV linéaire -1,5 %",
    period: "Prévision 2026, mise à jour de septembre",
    provenance: "IAB Outlook Study, enquête auprès de plus de 200 décideurs marques et agences",
    tags: ["marche", "concurrence"],
  },
  {
    id: "iab-mesure",
    label: "Refonte de la mesure à cause de l'IA",
    value: "86 % des acheteurs ont changé ou vont changer leur façon de mesurer",
    period: "Septembre 2026, horizon 12 mois",
    provenance: "IAB Outlook Study, mise à jour de septembre 2026",
    tags: ["marche", "ia", "mesure"],
  },
];
