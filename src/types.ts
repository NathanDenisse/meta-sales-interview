/**
 * Contrat de données du site de préparation à l'entretien commercial Meta.
 *
 * Tout le contenu vit dans `src/content/*.ts`. Aucune réponse, aucun chiffre et
 * aucun libellé métier n'est écrit dans un composant React.
 *
 * Règle d'honnêteté : chaque réponse porte un `basis` qui dit si elle repose sur le
 * vécu réel de Nathan (`vecu`), sur son vécu avec des détails reconstitués
 * (`vecu-romance`), ou s'il s'agit d'un canevas à personnaliser (`canevas`). En
 * entretien, une histoire doit être vraie : le badge existe pour éviter de réciter
 * un fait inventé.
 */

export type Basis = "vecu" | "vecu-romance" | "canevas";

export type Difficulty = "classique" | "moins-classique" | "piege";

export type CategoryId =
  | "deals"
  | "agences"
  | "perte"
  | "priorisation"
  | "motivation"
  | "ia"
  | "clients"
  | "analytique"
  | "leadership";

export interface Category {
  id: CategoryId;
  title: string;
  subtitle: string;
  /** Pourquoi cette famille de questions existe, et ce qu'elle mesure vraiment. */
  intro: string;
}

/** Réponse structurée en STAR, dans une langue donnée. */
export interface Star {
  situation: string;
  task: string;
  /** Une action par puce, à l'ordre chronologique. */
  action: string[];
  result: string;
  /** Ce que tu ajoutes si on te demande d'aller plus loin. */
  learning?: string;
}

export interface Bilingual<T> {
  fr: T;
  en: T;
}

export interface Question {
  id: string;
  category: CategoryId;
  difficulty: Difficulty;
  /** Question telle qu'elle sera posée. */
  prompt: Bilingual<string>;
  /** Marquée quand Nathan a dit avoir du mal avec cette question. */
  priority?: boolean;
  /** Ce que l'intervieweur cherche réellement à évaluer. */
  whatTheyTest: string[];
  /** Les erreurs qui coulent la réponse. */
  traps: string[];
  /** Relances probables, avec la façon de les traiter. */
  followUps: Array<{ question: string; how: string }>;
  basis: Basis;
  /** Note de personnalisation quand la réponse est un canevas. */
  basisNote?: string;
  answer: Bilingual<Star>;
  /** Chiffres mobilisés, pour vérifier qu'ils sont cohérents avec la banque de faits. */
  metrics?: string[];
  /** Durée cible à l'oral, en secondes. */
  targetSeconds?: number;
}

/** Fait vérifié réutilisable dans plusieurs réponses. */
export interface Fact {
  id: string;
  label: string;
  value: string;
  /** Période ou date de la mesure. */
  period: string;
  /** D'où vient le chiffre, en une ligne. */
  provenance: string;
  /** Faux amis et précautions à connaître avant de le citer. */
  caveat?: string;
  tags: string[];
}

/** À qui la question se pose utilement. */
export type Audience = "recruteur" | "manager" | "pair" | "direction";

export interface QuestionToAsk {
  id: string;
  /** La question, telle que tu la poses. */
  ask: Bilingual<string>;
  audience: Audience[];
  /** Ce que le fait de poser cette question dit de toi. */
  why: string;
  /** Ce que la réponse t'apprend, et le signal d'alarme à repérer. */
  listenFor: string;
  /** Les trois ou quatre à garder si tu n'as le temps que pour quelques-unes. */
  strong?: boolean;
  theme: string;
}

export interface QuestionToAvoid {
  ask: string;
  why: string;
  /** La reformulation qui sauve l'intention. */
  instead: string;
}

export interface StoryCard {
  id: string;
  title: string;
  /** Résumé en une phrase, la version que tu dis si on te coupe. */
  oneLiner: string;
  role: string;
  period: string;
  /** Chiffres clés de l'histoire. */
  highlights: string[];
  /** Questions auxquelles cette histoire peut répondre. */
  answersQuestions: string[];
  basis: Basis;
}
