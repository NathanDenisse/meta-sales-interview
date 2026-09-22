import { stories } from "../content/stories";
import { BasisBadge, BulletList, Callout, Card } from "../components/ui";

export function StoriesPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Les {stories.length} histoires à maîtriser
        </h1>
        <p className="mt-1 max-w-2xl text-[15px] text-slate-600 dark:text-slate-300">
          Presque toutes les questions comportementales se répondent avec ces histoires. Mieux vaut en maîtriser neuf
          parfaitement que d'improviser sur vingt. Pour chacune, la phrase que tu dis si on te coupe au bout de dix
          secondes, puis les chiffres qui la rendent crédible.
        </p>
      </header>

      <Callout tone="tip" title="Comment s'en servir">
        <p>
          Apprends d'abord les phrases en une ligne. En entretien, tu choisis l'histoire en fonction de la question, pas
          l'inverse, et une même histoire peut servir trois questions différentes selon l'angle que tu mets en avant.
        </p>
      </Callout>

      <div className="grid gap-3">
        {stories.map((s) => (
          <Card key={s.id} className="p-5">
            <div className="mb-1.5 flex flex-wrap items-center gap-2">
              <h2 className="font-semibold text-slate-900 dark:text-white">{s.title}</h2>
              <BasisBadge basis={s.basis} />
              <span className="ml-auto text-xs text-slate-400">
                {s.role} | {s.period}
              </span>
            </div>

            <p className="mb-3 border-l-2 border-brand-500 pl-3 text-[15px] italic text-slate-700 dark:text-slate-200">
              {s.oneLiner}
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Les chiffres
                </p>
                <BulletList items={s.highlights} />
              </div>
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Questions couvertes
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {s.answersQuestions.map((q) => (
                    <span
                      key={q}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {q}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
