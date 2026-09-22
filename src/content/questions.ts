import type { CategoryId, Question } from "../types";
import { qDeals } from "./q-deals";
import { qAgences } from "./q-agences";
import { qPerte } from "./q-perte";
import { qPriorisation } from "./q-priorisation";
import { qClients } from "./q-clients";
import { qAnalytique } from "./q-analytique";
import { qMotivation } from "./q-motivation";
import { qIa } from "./q-ia";
import { qLeadership } from "./q-leadership";

export const questions: Question[] = [
  ...qDeals,
  ...qAgences,
  ...qPerte,
  ...qPriorisation,
  ...qMotivation,
  ...qIa,
  ...qClients,
  ...qAnalytique,
  ...qLeadership,
];

export function byCategory(id: CategoryId): Question[] {
  return questions.filter((q) => q.category === id);
}

export function getQuestion(id: string | undefined): Question | undefined {
  return questions.find((q) => q.id === id);
}

export const priorityQuestions = questions.filter((q) => q.priority);

export function neighbours(id: string): { previous?: Question; next?: Question } {
  const index = questions.findIndex((q) => q.id === id);
  if (index === -1) return {};
  return { previous: questions[index - 1], next: questions[index + 1] };
}
