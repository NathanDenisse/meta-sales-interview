import type { Star } from "../types";
import { RichText } from "../lib/markdown";
import { Stopwatch } from "./Stopwatch";
import { Card } from "./ui";

const LABELS = {
  fr: {
    situation: "Situation",
    task: "Tâche",
    action: "Action",
    result: "Résultat",
    learning: "Ce que j'en ai tiré",
  },
  en: {
    situation: "Situation",
    task: "Task",
    action: "Action",
    result: "Result",
    learning: "What I took from it",
  },
} as const;

export function StarView({ star, lang, targetSeconds }: { star: Star; lang: "fr" | "en"; targetSeconds?: number }) {
  const labels = LABELS[lang];
  return (
    <div className="space-y-3">
      {targetSeconds ? <Stopwatch target={targetSeconds} lang={lang} /> : null}

      <Block label={labels.situation} accent="bg-slate-400">
        <RichText body={star.situation} />
      </Block>
      <Block label={labels.task} accent="bg-sky-500">
        <RichText body={star.task} />
      </Block>
      <Block label={labels.action} accent="bg-brand-600">
        <ul className="space-y-2 text-[15px] text-slate-700 dark:text-slate-300">
          {star.action.map((a, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden />
              <RichText body={a} className="[&>p]:mb-0" />
            </li>
          ))}
        </ul>
      </Block>
      <Block label={labels.result} accent="bg-emerald-500">
        <RichText body={star.result} />
      </Block>
      {star.learning ? (
        <Block label={labels.learning} accent="bg-violet-500">
          <RichText body={star.learning} />
        </Block>
      ) : null}
    </div>
  );
}

function Block({ label, accent, children }: { label: string; accent: string; children: React.ReactNode }) {
  return (
    <Card className="overflow-hidden">
      <div className="flex">
        <div className={`w-1 shrink-0 ${accent}`} aria-hidden />
        <div className="min-w-0 flex-1 p-4">
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {label}
          </p>
          {children}
        </div>
      </div>
    </Card>
  );
}

export function LanguageToggle({
  lang,
  onChange,
}: {
  lang: "fr" | "en";
  onChange: (lang: "fr" | "en") => void;
}) {
  return (
    <div className="inline-flex overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
      {(["fr", "en"] as const).map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => onChange(value)}
          className={`px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
            lang === value
              ? "bg-brand-600 text-white"
              : "bg-white text-slate-500 hover:text-slate-700 dark:bg-slate-900 dark:text-slate-400"
          }`}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
