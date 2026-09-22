import { useMemo, useState } from "react";
import { Ban, Star, Users } from "lucide-react";
import { questionsToAsk, questionsToAvoid } from "../content/questions-to-ask";
import { useLocalStorage } from "../lib/hooks";
import { Callout, Card } from "../components/ui";
import { LanguageToggle } from "../components/StarView";
import type { Audience } from "../types";

const AUDIENCE_LABEL: Record<Audience, string> = {
  recruteur: "Recruteur",
  manager: "Hiring manager",
  pair: "Futur pair",
  direction: "Direction",
};

export function AskPage() {
  const [lang, setLang] = useLocalStorage<"fr" | "en">("msi.lang", "fr");
  const [audience, setAudience] = useState<Audience | "all" | "strong">("strong");

  const themes = useMemo(() => [...new Set(questionsToAsk.map((q) => q.theme))], []);

  const visible = useMemo(() => {
    if (audience === "all") return questionsToAsk;
    if (audience === "strong") return questionsToAsk.filter((q) => q.strong);
    return questionsToAsk.filter((q) => q.audience.includes(audience));
  }, [audience]);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Les questions à poser à la fin
        </h1>
        <p className="mt-1 max-w-2xl text-[15px] text-slate-600 dark:text-slate-300">
          {questionsToAsk.length} questions classées par interlocuteur, avec ce que chacune dit de toi et ce que la
          réponse t'apprend. Une question posée au mauvais interlocuteur tombe à plat, donc filtre avant l'entretien.
        </p>
      </header>

      <Callout tone="tip" title="La règle des trois">
        <p>
          Prépare-en six, poses-en trois. Une sur le poste et le portefeuille, une sur la stratégie ou l'IA, une sur le
          process et la suite. Et garde la question sur les réserves pour la toute fin : c'est la seule qui peut encore
          changer une décision.
        </p>
      </Callout>

      <div className="flex flex-wrap items-center gap-1.5">
        <Chip label="Les essentielles" active={audience === "strong"} onClick={() => setAudience("strong")} />
        <Chip label={`Toutes (${questionsToAsk.length})`} active={audience === "all"} onClick={() => setAudience("all")} />
        {(Object.keys(AUDIENCE_LABEL) as Audience[]).map((a) => (
          <Chip key={a} label={AUDIENCE_LABEL[a]} active={audience === a} onClick={() => setAudience(a)} />
        ))}
        <span className="ml-auto">
          <LanguageToggle lang={lang} onChange={setLang} />
        </span>
      </div>

      {themes.map((theme) => {
        const list = visible.filter((q) => q.theme === theme);
        if (list.length === 0) return null;
        return (
          <section key={theme}>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {theme}
            </h2>
            <div className="grid gap-3">
              {list.map((q) => (
                <Card key={q.id} className="p-4">
                  <div className="flex items-start gap-2">
                    {q.strong ? (
                      <Star className="mt-1 h-4 w-4 shrink-0 text-amber-500" aria-hidden />
                    ) : (
                      <span className="mt-1 h-4 w-4 shrink-0" aria-hidden />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-[15px] font-medium text-slate-900 dark:text-white">{q.ask[lang]}</p>
                      <p className="mt-0.5 text-[13px] italic text-slate-500 dark:text-slate-400">
                        {lang === "fr" ? q.ask.en : q.ask.fr}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-slate-400" aria-hidden />
                        {q.audience.map((a) => (
                          <span
                            key={a}
                            className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                          >
                            {AUDIENCE_LABEL[a]}
                          </span>
                        ))}
                      </div>

                      <dl className="mt-3 grid gap-2 border-t border-slate-100 pt-3 text-[13px] dark:border-slate-800 sm:grid-cols-2">
                        <div>
                          <dt className="font-semibold text-slate-700 dark:text-slate-200">Ce que ça dit de toi</dt>
                          <dd className="text-slate-600 dark:text-slate-300">{q.why}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-slate-700 dark:text-slate-200">Ce que la réponse t'apprend</dt>
                          <dd className="text-slate-600 dark:text-slate-300">{q.listenFor}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        );
      })}

      <section>
        <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          <Ban className="h-4 w-4 text-rose-500" aria-hidden />
          À ne pas poser, et par quoi les remplacer
        </h2>
        <div className="grid gap-2">
          {questionsToAvoid.map((q) => (
            <Card key={q.ask} className="p-4">
              <p className="text-[15px] font-medium text-rose-700 line-through decoration-rose-300 dark:text-rose-300">
                {q.ask}
              </p>
              <p className="mt-1 text-[13px] text-slate-600 dark:text-slate-300">{q.why}</p>
              <p className="mt-2 text-[13px] text-emerald-700 dark:text-emerald-300">
                <span className="font-semibold">À la place : </span>
                {q.instead}
              </p>
            </Card>
          ))}
        </div>
      </section>
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
