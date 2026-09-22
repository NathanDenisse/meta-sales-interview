import { AlertTriangle, Lightbulb, MessageSquareQuote, ShieldCheck, Sparkles } from "lucide-react";
import type { Basis, Difficulty } from "../types";
import { RichText } from "../lib/markdown";

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] dark:border-slate-800 dark:bg-slate-900 ${className}`}
    >
      {children}
    </div>
  );
}

const CALLOUT: Record<string, { icon: typeof Lightbulb; label: string; classes: string }> = {
  test: {
    icon: MessageSquareQuote,
    label: "Ce qu'ils testent",
    classes: "border-violet-200 bg-violet-50 dark:border-violet-900 dark:bg-violet-950/40",
  },
  trap: {
    icon: AlertTriangle,
    label: "Pièges à éviter",
    classes: "border-rose-200 bg-rose-50 dark:border-rose-900 dark:bg-rose-950/40",
  },
  tip: {
    icon: Lightbulb,
    label: "Conseil",
    classes: "border-brand-200 bg-brand-50 dark:border-brand-900 dark:bg-brand-950/40",
  },
  honesty: {
    icon: ShieldCheck,
    label: "À personnaliser",
    classes: "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40",
  },
};

export function Callout({
  tone,
  title,
  children,
}: {
  tone: keyof typeof CALLOUT;
  title?: string;
  children: React.ReactNode;
}) {
  const config = CALLOUT[tone] ?? CALLOUT.tip;
  const Icon = config.icon;
  return (
    <div className={`rounded-2xl border p-4 ${config.classes}`}>
      <div className="mb-1.5 flex items-center gap-2">
        <Icon className="h-4 w-4 text-slate-700 dark:text-slate-200" aria-hidden />
        <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
          {title ?? config.label}
        </span>
      </div>
      <div className="text-[15px] text-slate-700 dark:text-slate-300">{children}</div>
    </div>
  );
}

export function BulletList({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={`space-y-1.5 pl-5 text-[15px] text-slate-700 dark:text-slate-300 ${ordered ? "list-decimal" : "list-disc"}`}>
      {items.map((item, i) => (
        <li key={i} className="leading-relaxed">
          <RichText body={item} className="[&>p]:mb-0" />
        </li>
      ))}
    </Tag>
  );
}

const BASIS_CONFIG: Record<Basis, { label: string; classes: string; help: string }> = {
  vecu: {
    label: "Vécu vérifié",
    classes: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    help: "Les faits et les chiffres de cette réponse viennent de ton historique réel.",
  },
  "vecu-romance": {
    label: "Vécu, détails à vérifier",
    classes: "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
    help: "Le fond est réel, une partie du détail narratif a été reconstituée. Relis avant de le dire.",
  },
  canevas: {
    label: "Canevas à personnaliser",
    classes: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    help: "Réponse idéale écrite de toutes pièces. Remplace le scénario par un vrai souvenir avant l'entretien.",
  },
};

export function BasisBadge({ basis }: { basis: Basis }) {
  const config = BASIS_CONFIG[basis];
  return (
    <span
      title={config.help}
      className={`inline-flex cursor-help items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${config.classes}`}
    >
      {config.label}
    </span>
  );
}

export function basisHelp(basis: Basis): string {
  return BASIS_CONFIG[basis].help;
}

const DIFFICULTY_CONFIG: Record<Difficulty, { label: string; classes: string }> = {
  classique: { label: "Classique", classes: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300" },
  "moins-classique": {
    label: "Moins classique",
    classes: "bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-200",
  },
  piege: { label: "Piège", classes: "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300" },
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const config = DIFFICULTY_CONFIG[difficulty];
  return (
    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${config.classes}`}>
      {config.label}
    </span>
  );
}

export function PriorityBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-800 dark:bg-amber-950 dark:text-amber-300">
      <Sparkles className="h-3 w-3" aria-hidden />
      À travailler
    </span>
  );
}
