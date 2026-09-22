import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, MessageCircleQuestion, Pencil } from "lucide-react";
import { getQuestion, neighbours } from "../content/questions";
import { categories } from "../content/categories";
import { useLocalStorage } from "../lib/hooks";
import { useEdits } from "../lib/edits";
import { BasisBadge, BulletList, Callout, Card, DifficultyBadge, PriorityBadge, basisHelp } from "../components/ui";
import { LanguageToggle, StarView } from "../components/StarView";
import { StarEditor } from "../components/StarEditor";

export function QuestionPage() {
  const { id } = useParams();
  const question = getQuestion(id);
  const [lang, setLang] = useLocalStorage<"fr" | "en">("msi.lang", "fr");
  const [mastered, setMastered] = useLocalStorage<string[]>("msi.mastered", []);
  const { resolve, isEdited, save, reset } = useEdits();
  const [editing, setEditing] = useState(false);

  if (!question) {
    return (
      <Card className="p-6">
        <p className="text-slate-700 dark:text-slate-200">Cette question n'existe pas.</p>
        <Link to="/" className="mt-2 inline-block text-sm text-brand-600 dark:text-brand-300">
          Retour à l'accueil
        </Link>
      </Card>
    );
  }

  const category = categories.find((c) => c.id === question.category);
  const { previous, next } = neighbours(question.id);
  const isMastered = mastered.includes(question.id);

  return (
    <article className="space-y-6">
      <header>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {category ? (
            <Link
              to={`/categorie/${category.id}`}
              className="text-[11px] font-semibold uppercase tracking-wide text-brand-600 hover:underline dark:text-brand-300"
            >
              {category.title}
            </Link>
          ) : null}
          <DifficultyBadge difficulty={question.difficulty} />
          <BasisBadge basis={question.basis} />
          {question.priority ? <PriorityBadge /> : null}
        </div>

        <h1 className="flex gap-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          <MessageCircleQuestion className="mt-1 h-6 w-6 shrink-0 text-brand-600 dark:text-brand-300" aria-hidden />
          {question.prompt[lang]}
        </h1>
        <p className="mt-1 text-sm italic text-slate-500 dark:text-slate-400">
          {lang === "fr" ? question.prompt.en : question.prompt.fr}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <LanguageToggle lang={lang} onChange={setLang} />
          <button
            type="button"
            onClick={() => setEditing((e) => !e)}
            className={`inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm font-medium transition-colors ${
              editing
                ? "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900"
                : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            }`}
          >
            <Pencil className="h-4 w-4" aria-hidden />
            {editing ? "Fermer l'édition" : "Modifier la réponse"}
          </button>
          <button
            type="button"
            onClick={() => setMastered(isMastered ? mastered.filter((m) => m !== question.id) : [...mastered, question.id])}
            className={`inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm font-medium transition-colors ${
              isMastered
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            }`}
          >
            {isMastered ? <CheckCircle2 className="h-4 w-4" aria-hidden /> : <Circle className="h-4 w-4" aria-hidden />}
            {isMastered ? "Maîtrisée" : "Marquer comme maîtrisée"}
          </button>
        </div>
      </header>

      {question.basis !== "vecu" ? (
        <Callout tone="honesty">
          <p className="mb-1">{basisHelp(question.basis)}</p>
          {question.basisNote ? <p className="font-medium text-slate-800 dark:text-slate-100">{question.basisNote}</p> : null}
        </Callout>
      ) : null}

      <section>
        <h2 className="mb-2 flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {lang === "fr" ? "La réponse, en STAR" : "The answer, in STAR"}
          {isEdited(question.id, lang) ? (
            <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold uppercase text-white dark:bg-white dark:text-slate-900">
              Ta version
            </span>
          ) : null}
        </h2>
        {editing ? (
          <StarEditor
            star={resolve(question, lang)}
            lang={lang}
            edited={isEdited(question.id, lang)}
            onSave={(star) => {
              save(question.id, lang, star);
              setEditing(false);
            }}
            onCancel={() => setEditing(false)}
            onReset={() => {
              reset(question.id, lang);
              setEditing(false);
            }}
          />
        ) : (
          <StarView star={resolve(question, lang)} lang={lang} targetSeconds={question.targetSeconds} />
        )}
      </section>

      <section className="grid gap-3 md:grid-cols-2">
        <Callout tone="test">
          <BulletList items={question.whatTheyTest} />
        </Callout>
        <Callout tone="trap">
          <BulletList items={question.traps} />
        </Callout>
      </section>

      {question.followUps.length > 0 ? (
        <section>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Relances probables
          </h2>
          <div className="space-y-2">
            {question.followUps.map((f, i) => (
              <Card key={i} className="p-4">
                <p className="font-medium text-slate-900 dark:text-white">{f.question}</p>
                <p className="mt-1 text-[15px] text-slate-600 dark:text-slate-300">{f.how}</p>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      {question.metrics && question.metrics.length > 0 ? (
        <section>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Chiffres mobilisés
          </h2>
          <Card className="p-4">
            <BulletList items={question.metrics} />
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Tous ces chiffres sont dans la{" "}
              <Link to="/faits" className="text-brand-600 underline underline-offset-2 dark:text-brand-300">
                banque de faits
              </Link>
              , avec leur provenance et leurs précautions.
            </p>
          </Card>
        </section>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-5 dark:border-slate-800">
        {previous ? (
          <Link
            to={`/question/${previous.id}`}
            className="inline-flex max-w-[45%] items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            <span className="truncate">{previous.prompt.fr}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/question/${next.id}`}
            className="inline-flex max-w-[45%] items-center gap-1.5 rounded-xl bg-brand-600 px-3 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            <span className="truncate">{next.prompt.fr}</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
          </Link>
        ) : null}
      </div>
    </article>
  );
}
