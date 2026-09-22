import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Dices, Eye, EyeOff } from "lucide-react";
import { categories } from "../content/categories";
import { questions } from "../content/questions";
import { useLocalStorage } from "../lib/hooks";
import { useEdits } from "../lib/edits";
import { BasisBadge, Callout, Card, DifficultyBadge } from "../components/ui";
import { LanguageToggle, StarView } from "../components/StarView";
import type { CategoryId } from "../types";

/** Tirage aléatoire d'une question : tu réponds à voix haute, puis tu révèles. */
export function DrillPage() {
  const [lang, setLang] = useLocalStorage<"fr" | "en">("msi.lang", "fr");
  const [scope, setScope] = useState<CategoryId | "all" | "priority">("priority");
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const { resolve } = useEdits();

  const pool = useMemo(() => {
    if (scope === "all") return questions;
    if (scope === "priority") return questions.filter((q) => q.priority);
    return questions.filter((q) => q.category === scope);
  }, [scope]);

  const question = pool[index % Math.max(pool.length, 1)];

  const draw = () => {
    setRevealed(false);
    setIndex(Math.floor(Math.random() * Math.max(pool.length, 1)));
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Mode entraînement
        </h1>
        <p className="mt-1 max-w-2xl text-[15px] text-slate-600 dark:text-slate-300">
          Une question tirée au hasard, le chronomètre, et rien d'autre. Tu réponds à voix haute en entier, puis tu
          révèles la réponse cible et tu compares. C'est le seul exercice qui fait vraiment progresser.
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-1.5">
        <Chip label={`À travailler (${questions.filter((q) => q.priority).length})`} active={scope === "priority"} onClick={() => { setScope("priority"); setRevealed(false); }} />
        <Chip label={`Tout (${questions.length})`} active={scope === "all"} onClick={() => { setScope("all"); setRevealed(false); }} />
        {categories.map((c) => (
          <Chip
            key={c.id}
            label={c.title}
            active={scope === c.id}
            onClick={() => {
              setScope(c.id);
              setRevealed(false);
            }}
          />
        ))}
        <div className="ml-auto flex items-center gap-2">
          <LanguageToggle lang={lang} onChange={setLang} />
          <button
            type="button"
            onClick={draw}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-700"
          >
            <Dices className="h-4 w-4" aria-hidden />
            Tirer une question
          </button>
        </div>
      </div>

      {question ? (
        <>
          <Card className="p-5">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <DifficultyBadge difficulty={question.difficulty} />
              <BasisBadge basis={question.basis} />
              <span className="text-xs text-slate-400">
                {categories.find((c) => c.id === question.category)?.title}
              </span>
            </div>
            <p className="text-xl font-semibold text-slate-900 dark:text-white">{question.prompt[lang]}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setRevealed((r) => !r)}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
              >
                {revealed ? <EyeOff className="h-4 w-4" aria-hidden /> : <Eye className="h-4 w-4" aria-hidden />}
                {revealed ? "Masquer la réponse" : "Révéler la réponse"}
              </button>
              <Link
                to={`/question/${question.id}`}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
              >
                Fiche complète
              </Link>
            </div>
          </Card>

          {revealed ? (
            <StarView star={resolve(question, lang)} lang={lang} targetSeconds={question.targetSeconds} />
          ) : (
            <Callout tone="tip" title="Avant de révéler">
              <p>
                Dis la réponse en entier, à voix haute, sans notes. Chronomètre-toi : au-delà de deux minutes, un
                recruteur décroche. Si tu bloques sur la situation, c'est que l'histoire n'est pas encore choisie.
              </p>
            </Callout>
          )}
        </>
      ) : null}
    </div>
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
