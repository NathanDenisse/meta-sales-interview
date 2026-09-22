import { useMemo, useState } from "react";
import { AlertTriangle, Search } from "lucide-react";
import { facts } from "../content/facts";
import { Callout, Card } from "../components/ui";

export function FactsPage() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("all");

  const tags = useMemo(() => [...new Set(facts.flatMap((f) => f.tags))].sort(), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return facts
      .filter((f) => tag === "all" || f.tags.includes(tag))
      .filter(
        (f) =>
          q === "" ||
          f.label.toLowerCase().includes(q) ||
          f.value.toLowerCase().includes(q) ||
          f.provenance.toLowerCase().includes(q),
      );
  }, [query, tag]);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Banque de faits
        </h1>
        <p className="mt-1 max-w-2xl text-[15px] text-slate-600 dark:text-slate-300">
          Tous les chiffres que tu peux citer, avec leur provenance, leur fenêtre de mesure et leurs pièges. Aucune
          réponse du site ne cite un chiffre absent de cette liste.
        </p>
      </header>

      <Callout tone="trap" title="La règle en entretien">
        <p>
          Un chiffre que tu ne sais pas sourcer devient une question posée, pas une affirmation. Et une prévision se dit
          comme une prévision : citer les parts de marché 2026 sans le mot prévision est repérable en dix secondes.
        </p>
      </Callout>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Chercher un chiffre, un compte, une période"
            className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-brand-400 dark:border-slate-800 dark:bg-slate-900"
          />
        </div>
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-brand-400 dark:border-slate-800 dark:bg-slate-900"
        >
          <option value="all">Tous les thèmes ({facts.length})</option>
          {tags.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {filtered.map((f) => (
          <Card key={f.id} className="p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {f.label}
            </p>
            <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{f.value}</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{f.period}</p>
            <p className="mt-2 text-[13px] text-slate-600 dark:text-slate-300">{f.provenance}</p>
            {f.caveat ? (
              <p className="mt-2 flex gap-1.5 rounded-lg bg-amber-50 p-2 text-[13px] text-amber-900 dark:bg-amber-950/50 dark:text-amber-200">
                <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                {f.caveat}
              </p>
            ) : null}
          </Card>
        ))}
      </div>
    </div>
  );
}
