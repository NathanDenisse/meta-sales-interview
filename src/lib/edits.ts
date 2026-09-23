import { useCallback } from "react";
import type { Question, Script, Star } from "../types";
import { useLocalStorage } from "./hooks";

/**
 * Personnalisation des réponses.
 *
 * Les réponses livrées restent la référence et ne sont jamais écrasées. Tes
 * modifications vivent à côté, dans le stockage local du navigateur, et peuvent être
 * exportées en JSON pour être sauvegardées ou déplacées sur une autre machine.
 *
 * Les deux formats ont chacun leur magasin, parce qu'une même question peut avoir un
 * discours retouché et un STAR de repli retouché. L'export les emporte tous les deux.
 */

export type EditStore = Record<string, Partial<Record<"fr" | "en", Star>>>;

export type ScriptEditStore = Record<string, Partial<Record<"fr" | "en", Script>>>;

const KEY = "msi.edits";

const SCRIPT_KEY = "msi.script-edits";

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

/** Même mécanique que `useEdits`, pour les réponses en discours. */
export function useScriptEdits() {
  const [scripts, setScripts] = useLocalStorage<ScriptEditStore>(SCRIPT_KEY, {});

  /** Discours à afficher : ta version si elle existe, sinon celui livré. */
  const resolveScript = useCallback(
    (question: Question, lang: "fr" | "en"): Script | undefined =>
      scripts[question.id]?.[lang] ?? question.script?.[lang],
    [scripts],
  );

  const isScriptEdited = useCallback(
    (questionId: string, lang?: "fr" | "en") => {
      const entry = scripts[questionId];
      if (!entry) return false;
      return lang ? Boolean(entry[lang]) : Object.keys(entry).length > 0;
    },
    [scripts],
  );

  const saveScript = useCallback(
    (questionId: string, lang: "fr" | "en", script: Script) => {
      setScripts({ ...scripts, [questionId]: { ...scripts[questionId], [lang]: script } });
    },
    [scripts, setScripts],
  );

  const resetScript = useCallback(
    (questionId: string, lang: "fr" | "en") => {
      const entry = { ...scripts[questionId] };
      delete entry[lang];
      const next = { ...scripts };
      if (Object.keys(entry).length === 0) delete next[questionId];
      else next[questionId] = entry;
      setScripts(next);
    },
    [scripts, setScripts],
  );

  const resetAllScripts = useCallback(() => setScripts({}), [setScripts]);

  const replaceAllScripts = useCallback((store: ScriptEditStore) => setScripts(store), [setScripts]);

  const editedScriptIds = Object.keys(scripts);

  return {
    scripts,
    resolveScript,
    isScriptEdited,
    saveScript,
    resetScript,
    resetAllScripts,
    replaceAllScripts,
    editedScriptIds,
  };
}

/**
 * Télécharge toutes les modifications dans un fichier JSON daté.
 *
 * `edits` reste à la racine et au même format, donc un fichier produit ici est
 * toujours lisible par une version du site qui ne connaît pas les discours.
 */
export function downloadEdits(edits: EditStore, scripts: ScriptEditStore = {}): void {
  const payload = {
    kind: "meta-sales-interview-edits",
    version: 2,
    exportedAt: new Date().toISOString(),
    edits,
    scripts,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `mes-reponses-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

/**
 * Lit un fichier d'export et rend le contenu des modifications.
 *
 * Un export de version 1, écrit avant l'arrivée des discours, reste valide : il
 * n'a simplement aucun discours à réimporter.
 */
export async function readEditsFile(file: File): Promise<{ edits: EditStore; scripts: ScriptEditStore }> {
  const text = await file.text();
  const parsed = JSON.parse(text) as { kind?: string; edits?: EditStore; scripts?: ScriptEditStore };
  if (parsed.kind !== "meta-sales-interview-edits" || !parsed.edits) {
    throw new Error("Ce fichier n'est pas un export de réponses valide.");
  }
  return { edits: parsed.edits, scripts: parsed.scripts ?? {} };
}

const escape = (s: string) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");

/**
 * Rend une réponse au format TypeScript, pour la recoller dans le fichier de contenu
 * et la rendre permanente dans le dépôt.
 */
export function toTypeScript(star: Star): string {
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

/** Même chose pour un discours. */
export function scriptToTypeScript(script: Script): string {
  return [
    "{",
    `  hook: "${escape(script.hook)}",`,
    "  body: [",
    ...script.body.map((b) => `    "${escape(b)}",`),
    "  ],",
    `  closing: "${escape(script.closing)}",`,
    "  keyBeats: [",
    ...script.keyBeats.map((b) => `    "${escape(b)}",`),
    "  ],",
    "}",
  ].join("\n");
}
