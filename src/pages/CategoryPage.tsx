import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { categories } from "../content/categories";
import { byCategory } from "../content/questions";
import { useLocalStorage } from "../lib/hooks";
import { BasisBadge, Callout, Card, DifficultyBadge, FormatBadge, PriorityBadge } from "../components/ui";

export function CategoryPage() {
  const { id } = useParams();
  const category = categories.find((c) => c.id === id);
  const [mastered] = useLocalStorage<string[]>("msi.mastered", []);

  if (!category) {
    return (
      <Card className="p-6">
        <p className="text-slate-700 dark:text-slate-200">Cette famille de questions n'existe pas.</p>
        <Link to="/" className="mt-2 inline-block text-sm text-brand-600 dark:text-brand-300">
          Retour à l'accueil
        </Link>
      </Card>
    );
  }

  const list = byCategory(category.id);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          {category.title}
        </h1>
        <p className="mt-1 text-[15px] text-slate-500 dark:text-slate-400">{category.subtitle}</p>
      </header>

      <Callout tone="tip" title="Pourquoi cette famille existe">
        <p>{category.intro}</p>
      </Callout>

      <div className="grid gap-2">
        {list.map((q) => (
          <Link key={q.id} to={`/question/${q.id}`} className="group">
            <Card className="p-4 transition-colors group-hover:border-brand-300 dark:group-hover:border-brand-800">
              <div className="flex flex-wrap items-center gap-2">
                <span className="w-full min-w-0 text-[15px] font-medium text-slate-800 sm:w-auto sm:flex-1 dark:text-slate-100">
                  {q.prompt.fr}
                </span>
                {mastered.includes(q.id) ? <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden /> : null}
                <DifficultyBadge difficulty={q.difficulty} />
                <FormatBadge format={q.format} />
                <BasisBadge basis={q.basis} format={q.format} />
                {q.priority ? <PriorityBadge /> : null}
              </div>
              <p className="mt-1 text-[13px] italic text-slate-500 dark:text-slate-400">{q.prompt.en}</p>
              <p className="mt-2 line-clamp-2 text-[13px] text-slate-500 dark:text-slate-400">
                {q.format === "script" && q.script ? q.script.fr.hook : q.answer.fr.situation}
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 dark:text-brand-300">
                Voir la réponse
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
