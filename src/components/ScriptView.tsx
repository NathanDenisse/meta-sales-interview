import type { AnswerFormat, Script } from "../types";
import { RichText } from "../lib/markdown";
import { Stopwatch } from "./Stopwatch";
import { Card } from "./ui";

const LABELS = {
  fr: {
    beats: "Les repères",
    beatsHint: "Retiens ces repères, pas le texte mot à mot.",
    closing: "Pour rendre la main",
    over: "Tu as dépassé la cible. Un discours modèle se dit en une minute et demie : coupe un bloc entier plutôt que de parler plus vite.",
    script: "Discours",
    star: "STAR",
    toggleHelp: "Basculer entre le discours modèle et la version en STAR",
  },
  en: {
    beats: "The beats",
    beatsHint: "Remember the beats, not the wording.",
    closing: "Handing back",
    over: "You are over target. A model answer runs a minute and a half, so cut a whole block rather than speaking faster.",
    script: "Script",
    star: "STAR",
    toggleHelp: "Switch between the model script and the STAR version",
  },
} as const;

/**
 * Affiche une réponse en discours : les repères de structure en haut, puis le
 * texte en paragraphes, dit tel quel à voix haute.
 */
export function ScriptView({
  script,
  lang,
  targetSeconds,
}: {
  script: Script;
  lang: "fr" | "en";
  targetSeconds?: number;
}) {
  const labels = LABELS[lang];
  return (
    <div className="space-y-3">
      {targetSeconds ? <Stopwatch target={targetSeconds} lang={lang} overHint={labels.over} /> : null}

      {script.keyBeats.length > 0 ? (
        <Card className="p-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {labels.beats}
          </p>
          <ol className="flex flex-wrap gap-2">
            {script.keyBeats.map((beat, i) => (
              <li
                key={i}
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 py-1 pl-1 pr-3 text-[13px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-[11px] font-semibold tabular-nums text-white">
                  {i + 1}
                </span>
                {beat}
              </li>
            ))}
          </ol>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{labels.beatsHint}</p>
        </Card>
      ) : null}

      <Card className="overflow-hidden">
        <div className="flex">
          <div className="w-1 shrink-0 bg-brand-600" aria-hidden />
          <div className="min-w-0 flex-1 space-y-4 p-5">
            <RichText
              body={script.hook}
              className="text-[17px] font-medium leading-relaxed text-slate-900 dark:text-white"
            />
            {script.body.map((block, i) => (
              <RichText key={i} body={block} className="text-[15px] leading-[1.75]" />
            ))}
            <div className="border-t border-slate-100 pt-3 dark:border-slate-800">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                {labels.closing}
              </p>
              <RichText
                body={script.closing}
                className="text-[15px] font-medium leading-relaxed text-slate-900 dark:text-white"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

/** Bascule entre le discours livré et la version STAR, pour qui veut l'angle vécu. */
export function AnswerFormatToggle({
  value,
  lang,
  onChange,
}: {
  value: AnswerFormat;
  lang: "fr" | "en";
  onChange: (format: AnswerFormat) => void;
}) {
  const labels = LABELS[lang];
  return (
    <div
      title={labels.toggleHelp}
      className="inline-flex overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700"
    >
      {(["script", "star"] as const).map((format) => (
        <button
          key={format}
          type="button"
          onClick={() => onChange(format)}
          className={`px-2.5 py-1 text-xs font-semibold transition-colors ${
            value === format
              ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
              : "bg-white text-slate-500 hover:text-slate-700 dark:bg-slate-900 dark:text-slate-400"
          }`}
        >
          {format === "script" ? labels.script : labels.star}
        </button>
      ))}
    </div>
  );
}
