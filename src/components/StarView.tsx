import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw, Timer } from "lucide-react";
import type { Star } from "../types";
import { RichText } from "../lib/markdown";
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

/** Chronomètre simple, pour caler la réponse sur la durée cible. */
function Stopwatch({ target, lang }: { target: number; lang: "fr" | "en" }) {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    ref.current = window.setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => {
      if (ref.current) window.clearInterval(ref.current);
    };
  }, [running]);

  const over = elapsed > target;
  const mmss = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 dark:border-slate-800 dark:bg-slate-900">
      <Timer className="h-4 w-4 text-slate-500 dark:text-slate-400" aria-hidden />
      <span className={`font-mono text-lg font-semibold tabular-nums ${over ? "text-rose-600 dark:text-rose-400" : "text-slate-900 dark:text-white"}`}>
        {mmss(elapsed)}
      </span>
      <span className="text-xs text-slate-500 dark:text-slate-400">
        {lang === "fr" ? `cible ${mmss(target)}` : `target ${mmss(target)}`}
      </span>
      <div className="ml-auto flex gap-1.5">
        <button
          type="button"
          onClick={() => setRunning((r) => !r)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
        >
          {running ? <Pause className="h-3.5 w-3.5" aria-hidden /> : <Play className="h-3.5 w-3.5" aria-hidden />}
          {running ? (lang === "fr" ? "Pause" : "Pause") : lang === "fr" ? "Démarrer" : "Start"}
        </button>
        <button
          type="button"
          onClick={() => {
            setRunning(false);
            setElapsed(0);
          }}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden />
          {lang === "fr" ? "Remettre à zéro" : "Reset"}
        </button>
      </div>
      {over ? (
        <p className="w-full text-xs text-rose-600 dark:text-rose-400">
          {lang === "fr"
            ? "Tu as dépassé la cible. En entretien, au-delà de deux minutes on décroche : coupe des puces d'action."
            : "You are over target. Past two minutes an interviewer disengages, so cut action bullets."}
        </p>
      ) : null}
    </div>
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
