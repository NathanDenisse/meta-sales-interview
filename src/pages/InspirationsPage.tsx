import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Hash, Repeat2 } from "lucide-react";
import { inspirations, inspirationThemes, sourceKinds } from "../content/inspirations";
import { getQuestion } from "../content/questions";
import { BulletList, Callout, Card } from "../components/ui";
import type { Inspiration, InspirationConfidence, InspirationTheme, SourceKind } from "../types";

const THEME_LABEL = Object.fromEntries(inspirationThemes.map((t) => [t.id, t.label])) as Record<InspirationTheme, string>;

const SOURCE_LABEL = Object.fromEntries(sourceKinds.map((s) => [s.id, s.label])) as Record<SourceKind, string>;

const CONFIDENCE_CONFIG: Record<InspirationConfidence, { label: string; classes: string; help: string }> = {
  "source-directe": {
    label: "Source directe",
    classes: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    help: "Le mécanisme est écrit tel quel dans le document interne. Tu peux le citer sans réserve.",
  },
  reconstitue: {
    label: "Mécanisme reconstitué",
    classes: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    help: "Le document donne le contexte et le résultat, le mécanisme est une déduction. Dis-le si on te demande la source.",
  },
};

type Filter = { kind: "all" } | { kind: "theme"; id: InspirationTheme } | { kind: "source"; id: SourceKind };

export function InspirationsPage() {
  const [filter, setFilter] = useState<Filter>({ kind: "all" });

  const visible = useMemo(() => {
    if (filter.kind === "theme") return inspirations.filter((i) => i.theme === filter.id);
    if (filter.kind === "source") return inspirations.filter((i) => i.sourceKind === filter.id);
    return inspirations;
  }, [filter]);

  const direct = inspirations.filter((i) => i.confidence === "source-directe").length;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Ce que d'autres commerciaux ont réussi
        </h1>
        <p className="mt-1 max-w-2xl text-[15px] text-slate-600 dark:text-slate-300">
          {inspirations.length} mécanismes lus dans les ressources internes Indeed, close out, partages de bonnes
          pratiques, revues trimestrielles et canaux d'équipe. Ils existent pour te sortir de tes seuls réseaux
          franchisés, surtout sur les sujets où tu manques de matière : deal complexe, échec, churn, C-level, remise,
          priorisation, agences.
        </p>
      </header>

      <Callout tone="honesty" title="Ce que tu peux en faire, et ce que tu ne peux pas">
        <p>
          Ce ne sont pas tes histoires. Ne les raconte jamais à la première personne. Elles servent à deux choses : te
          donner un mécanisme à transposer sur tes propres comptes, ce que dit le bloc « Sur ton book », et te permettre
          de dire en entretien que tu vas chercher ce qui marche chez les autres. Les noms des collègues sont retirés,
          les entreprises ne sont nommées que si elles sont déjà dans ton portefeuille. {direct} entrées sur{" "}
          {inspirations.length} sont directement sourcées, le reste porte un mécanisme reconstitué.
        </p>
      </Callout>

      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Thème</span>
          <Chip
            label={`Tout (${inspirations.length})`}
            active={filter.kind === "all"}
            onClick={() => setFilter({ kind: "all" })}
          />
          {inspirationThemes.map((t) => {
            const count = inspirations.filter((i) => i.theme === t.id).length;
            if (count === 0) return null;
            return (
              <Chip
                key={t.id}
                label={`${t.label} (${count})`}
                active={filter.kind === "theme" && filter.id === t.id}
                onClick={() => setFilter({ kind: "theme", id: t.id })}
              />
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Source</span>
          {sourceKinds.map((s) => {
            const count = inspirations.filter((i) => i.sourceKind === s.id).length;
            if (count === 0) return null;
            return (
              <Chip
                key={s.id}
                label={`${s.label} (${count})`}
                active={filter.kind === "source" && filter.id === s.id}
                onClick={() => setFilter({ kind: "source", id: s.id })}
              />
            );
          })}
        </div>
      </div>

      <div className="grid gap-4">
        {visible.map((i) => (
          <InspirationCard key={i.id} inspiration={i} />
        ))}
      </div>
    </div>
  );
}

function InspirationCard({ inspiration: i }: { inspiration: Inspiration }) {
  const confidence = CONFIDENCE_CONFIG[i.confidence];

  return (
    <Card className="min-w-0 p-5">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <h2 className="font-semibold text-slate-900 dark:text-white">{i.title}</h2>
        <span
          title={confidence.help}
          className={`inline-flex cursor-help items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${confidence.classes}`}
        >
          {confidence.label}
        </span>
        <span className="ml-auto rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {THEME_LABEL[i.theme]}
        </span>
      </div>

      <p className="mb-3 flex gap-2 border-l-2 border-brand-500 pl-3 text-[15px] font-medium text-slate-800 dark:text-slate-100">
        <Repeat2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
        <span>{i.pattern}</span>
      </p>

      <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">{i.story}</p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <p className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            <Hash className="h-3.5 w-3.5" aria-hidden />
            Les chiffres de la source
          </p>
          {i.numbers.length > 0 ? (
            <BulletList items={i.numbers} />
          ) : (
            <p className="text-[15px] italic text-slate-500 dark:text-slate-400">
              La source ne donne aucun chiffre sur ce cas.
            </p>
          )}
        </div>

        <Callout tone="tip" title="Sur ton book">
          <p>{i.adaptation}</p>
        </Callout>
      </div>

      <p className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-slate-100 pt-3 text-[12px] text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <FileText className="h-3.5 w-3.5 shrink-0" aria-hidden />
        <span className="font-semibold text-slate-600 dark:text-slate-300">{SOURCE_LABEL[i.sourceKind]}</span>
        <span>{i.source}</span>
      </p>

      <div className="mt-3">
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Munition pour ces questions
        </p>
        <div className="flex flex-wrap gap-1.5">
          {i.questionIds.map((id) => {
            const question = getQuestion(id);
            if (!question) return null;
            return (
              <Link
                key={id}
                to={`/question/${id}`}
                className="inline-flex min-w-0 max-w-full items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-brand-950/50 dark:hover:text-brand-200"
              >
                <span className="truncate">{question.prompt.fr}</span>
                <ArrowRight className="h-3 w-3 shrink-0" aria-hidden />
              </Link>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-2.5 py-1 text-xs font-medium transition-colors ${
        active
          ? "border-brand-600 bg-brand-600 text-white"
          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
      }`}
    >
      {label}
    </button>
  );
}
