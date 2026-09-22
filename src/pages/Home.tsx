import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, CheckCircle2, Dices, MessageCircleQuestion, Sparkles, Target } from "lucide-react";
import { categories } from "../content/categories";
import { byCategory, priorityQuestions, questions } from "../content/questions";
import { stories } from "../content/stories";
import { facts } from "../content/facts";
import { useLocalStorage } from "../lib/hooks";
import { BasisBadge, Callout, Card, DifficultyBadge, PriorityBadge } from "../components/ui";

export function Home() {
  const [mastered] = useLocalStorage<string[]>("msi.mastered", []);
  const counts = {
    vecu: questions.filter((q) => q.basis === "vecu").length,
    romance: questions.filter((q) => q.basis === "vecu-romance").length,
    canevas: questions.filter((q) => q.basis === "canevas").length,
  };

  return (
    <div className="space-y-8">
      <section>
        <p className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-900/50 dark:text-brand-100">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          Entretien Strategic Account Manager, Meta
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Tes réponses commerciales, en STAR, prêtes à dire
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
          {questions.length} questions, des plus classiques aux plus piégeuses, chacune avec une réponse structurée en
          Situation, Tâche, Action, Résultat, en français et en anglais. Les chiffres viennent de ton portefeuille réel,
          et chaque réponse dit clairement si elle repose sur ton vécu ou s'il s'agit d'un canevas à personnaliser.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            to="/entrainement"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
          >
            <Dices className="h-4 w-4" aria-hidden />
            Mode entraînement
          </Link>
          <Link
            to="/histoires"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            <BookOpen className="h-4 w-4" aria-hidden />
            Les 9 histoires à maîtriser
          </Link>
          <Link
            to="/questions-a-poser"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            <MessageCircleQuestion className="h-4 w-4" aria-hidden />
            Questions à poser à la fin
          </Link>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Tile icon={Target} value={`${questions.length}`} label="questions" sub={`${priorityQuestions.length} marquées à travailler`} />
        <Tile icon={BookOpen} value={`${stories.length}`} label="histoires" sub={`${facts.length} faits sourcés`} />
        <Tile icon={CheckCircle2} value={`${mastered.length}/${questions.length}`} label="maîtrisées" sub="progression locale" />
        <Tile
          icon={Sparkles}
          value={`${counts.vecu}`}
          label="réponses sur du vécu"
          sub={`${counts.romance} à vérifier, ${counts.canevas} canevas`}
        />
      </section>

      <section>
        <Callout tone="honesty" title="La règle qui compte">
          <p>
            Une histoire dite en entretien doit être vraie. Les réponses marquées{" "}
            <span className="font-semibold">canevas</span> sont des réponses idéales écrites de toutes pièces parce que
            tu n'avais pas de matière sur le sujet : garde la structure, remplace le scénario par un vrai souvenir.
            Celles marquées <span className="font-semibold">vécu, détails à vérifier</span> reposent sur tes chiffres
            mais contiennent du détail narratif reconstitué.
          </p>
        </Callout>
      </section>

      {priorityQuestions.length > 0 ? (
        <section>
          <div className="mb-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Les questions où tu as le plus de mal</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Celles que tu as nommées, plus toute la famille priorisation. Commence par là.
            </p>
          </div>
          <div className="grid gap-2">
            {priorityQuestions.map((q) => (
              <Link key={q.id} to={`/question/${q.id}`} className="group">
                <Card className="flex flex-wrap items-center gap-2 p-3 transition-colors group-hover:border-brand-300 dark:group-hover:border-brand-800">
                  <span className="min-w-0 flex-1 truncate text-[15px] font-medium text-slate-800 dark:text-slate-100">
                    {q.prompt.fr}
                  </span>
                  <DifficultyBadge difficulty={q.difficulty} />
                  <BasisBadge basis={q.basis} />
                  {mastered.includes(q.id) ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden />
                  ) : (
                    <PriorityBadge />
                  )}
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Toutes les familles de questions</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {categories.map((c) => {
            const list = byCategory(c.id);
            const done = list.filter((q) => mastered.includes(q.id)).length;
            return (
              <Link key={c.id} to={`/categorie/${c.id}`} className="group">
                <Card className="h-full p-4 transition-colors group-hover:border-brand-300 dark:group-hover:border-brand-800">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-900 dark:text-white">{c.title}</h3>
                    <span className="ml-auto text-xs text-slate-400">
                      {done}/{list.length}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">{c.subtitle}</p>
                  <p className="mt-2 line-clamp-3 text-[13px] text-slate-500 dark:text-slate-400">{c.intro}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-600 dark:text-brand-300">
                    Ouvrir
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function Tile({
  icon: Icon,
  value,
  label,
  sub,
}: {
  icon: typeof Target;
  value: string;
  label: string;
  sub: string;
}) {
  return (
    <Card className="p-4">
      <Icon className="mb-2 h-4 w-4 text-brand-600 dark:text-brand-300" aria-hidden />
      <p className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">{value}</p>
      <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{label}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400">{sub}</p>
    </Card>
  );
}
