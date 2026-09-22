import { useCallback } from "react";
import type { Question, Star } from "../types";
import { useLocalStorage } from "./hooks";

/**
 * Personnalisation des réponses.
 *
 * Les réponses livrées restent la référence et ne sont jamais écrasées. Tes
 * modifications vivent à côté, dans le stockage local du navigateur, et peuvent être
 * exportées en JSON pour être sauvegardées ou déplacées sur une autre machine.
 */

export type EditStore = Record<string, Partial<Record<"fr" | "en", Star>>>;

const KEY = "msi.edits";

export function useEdits() {
  const [edits, setEdits] = useLocalStorage<EditStore>(KEY, {});

  /** Réponse à afficher : ta version si elle existe, sinon celle livrée. */
  const resolve = useCallback(
    (question: Question, lang: "fr" | "en"): Star => edits[question.id]?.[lang] ?? question.answer[lang],
    [edits],
  );

  const isEdited = useCallback(
    (questionId: string, lang?: "fr" | "en") => {
      const entry = edits[questionId];
      if (!entry) return false;
      return lang ? Boolean(entry[lang]) : Object.keys(entry).length > 0;
    },
    [edits],
  );

  const save = useCallback(
    (questionId: string, lang: "fr" | "en", star: Star) => {
      setEdits({ ...edits, [questionId]: { ...edits[questionId], [lang]: star } });
    },
    [edits, setEdits],
  );

  const reset = useCallback(
    (questionId: string, lang: "fr" | "en") => {
      const entry = { ...edits[questionId] };
      delete entry[lang];
      const next = { ...edits };
      if (Object.keys(entry).length === 0) delete next[questionId];
      else next[questionId] = entry;
      setEdits(next);
    },
    [edits, setEdits],
  );

  const resetAll = useCallback(() => setEdits({}), [setEdits]);

  const replaceAll = useCallback((store: EditStore) => setEdits(store), [setEdits]);

  const editedIds = Object.keys(edits);

  return { edits, resolve, isEdited, save, reset, resetAll, replaceAll, editedIds };
}

/** Télécharge toutes les modifications dans un fichier JSON daté. */
export function downloadEdits(edits: EditStore): void {
  const payload = {
    kind: "meta-sales-interview-edits",
    version: 1,
    exportedAt: new Date().toISOString(),
    edits,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `mes-reponses-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

/** Lit un fichier d'export et rend le contenu des modifications. */
export async function readEditsFile(file: File): Promise<EditStore> {
  const text = await file.text();
  const parsed = JSON.parse(text) as { kind?: string; edits?: EditStore };
  if (parsed.kind !== "meta-sales-interview-edits" || !parsed.edits) {
    throw new Error("Ce fichier n'est pas un export de réponses valide.");
  }
  return parsed.edits;
}

/**
 * Rend une réponse au format TypeScript, pour la recoller dans le fichier de contenu
 * et la rendre permanente dans le dépôt.
 */
export function toTypeScript(star: Star): string {
  const escape = (s: string) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
  const lines = [
    "{",
    `  situation: "${escape(star.situation)}",`,
    `  task: "${escape(star.task)}",`,
    "  action: [",
    ...star.action.map((a) => `    "${escape(a)}",`),
    "  ],",
    `  result: "${escape(star.result)}",`,
  ];
  if (star.learning) lines.push(`  learning: "${escape(star.learning)}",`);
  lines.push("}");
  return lines.join("\n");
}
