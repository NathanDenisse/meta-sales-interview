import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw, Timer } from "lucide-react";

/** Chronomètre simple, pour caler la réponse sur la durée cible. */
export function Stopwatch({
  target,
  lang,
  overHint,
}: {
  target: number;
  lang: "fr" | "en";
  /** Ce qu'il faut couper quand la cible est dépassée. Dépend du format. */
  overHint?: string;
}) {
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
  const hint =
    overHint ??
    (lang === "fr"
      ? "Tu as dépassé la cible. En entretien, au-delà de deux minutes on décroche : coupe des puces d'action."
      : "You are over target. Past two minutes an interviewer disengages, so cut action bullets.");

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
      {over ? <p className="w-full text-xs text-rose-600 dark:text-rose-400">{hint}</p> : null}
    </div>
  );
}
