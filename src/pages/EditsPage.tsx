import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Download, Pencil, RotateCcw, Upload } from "lucide-react";
import { questions } from "../content/questions";
import { downloadEdits, readEditsFile, useEdits } from "../lib/edits";
import { Callout, Card } from "../components/ui";

export function EditsPage() {
  const { edits, editedIds, replaceAll, resetAll, reset } = useEdits();
  const fileInput = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);

  const onImport = async (file: File) => {
    try {
      const imported = await readEditsFile(file);
      replaceAll({ ...edits, ...imported });
      setMessage(`${Object.keys(imported).length} réponse(s) importée(s).`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Import impossible.");
    }
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Mes réponses
        </h1>
        <p className="mt-1 max-w-2xl text-[15px] text-slate-600 dark:text-slate-300">
          Toutes les réponses que tu as réécrites. Les versions livrées restent intactes dessous, donc tu peux toujours
          revenir en arrière question par question.
        </p>
      </header>

      <Callout tone="trap" title="À savoir sur la sauvegarde">
        <p>
          Tes modifications vivent dans le stockage local de ce navigateur. Vider les données du site ou changer de
          machine les fait disparaître, donc exporte le fichier JSON après une vraie session de travail. L'import
          fusionne le fichier avec ce que tu as déjà.
        </p>
      </Callout>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => downloadEdits(edits)}
          disabled={editedIds.length === 0}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Download className="h-4 w-4" aria-hidden />
          Exporter mes réponses
        </button>

        <button
          type="button"
          onClick={() => fileInput.current?.click()}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
        >
          <Upload className="h-4 w-4" aria-hidden />
          Importer un fichier
        </button>
        <input
          ref={fileInput}
          type="file"
          accept="application/json"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) void onImport(file);
            e.target.value = "";
          }}
        />

        {editedIds.length > 0 ? (
          <button
            type="button"
            onClick={() => {
              resetAll();
              setMessage("Toutes tes modifications ont été effacées.");
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-rose-600 hover:border-rose-300 dark:border-slate-800 dark:bg-slate-900 dark:text-rose-300"
          >
            <RotateCcw className="h-4 w-4" aria-hidden />
            Tout réinitialiser
          </button>
        ) : null}

        <span className="ml-auto text-xs text-slate-500 dark:text-slate-400">
          {editedIds.length} réponse(s) personnalisée(s) sur {questions.length}
        </span>
      </div>

      {message ? (
        <p className="rounded-xl bg-slate-100 px-3 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          {message}
        </p>
      ) : null}

      {editedIds.length === 0 ? (
        <Card className="p-6 text-center">
          <Pencil className="mx-auto mb-2 h-5 w-5 text-slate-400" aria-hidden />
          <p className="text-slate-700 dark:text-slate-200">Tu n'as encore rien personnalisé.</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Ouvre une question et utilise « Modifier la réponse ». Commence par les canevas, ce sont les réponses qui
            ont le plus besoin de ton vécu.
          </p>
          <Link to="/" className="mt-3 inline-block text-sm font-medium text-brand-600 dark:text-brand-300">
            Voir les questions
          </Link>
        </Card>
      ) : (
        <div className="grid gap-2">
          {editedIds.map((id) => {
            const question = questions.find((q) => q.id === id);
            if (!question) return null;
            const langs = Object.keys(edits[id] ?? {}) as Array<"fr" | "en">;
            return (
              <Card key={id} className="p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    to={`/question/${id}`}
                    className="min-w-0 flex-1 text-[15px] font-medium text-slate-800 hover:text-brand-600 dark:text-slate-100 dark:hover:text-brand-300"
                  >
                    {question.prompt.fr}
                  </Link>
                  {langs.map((l) => (
                    <span
                      key={l}
                      className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold uppercase text-white dark:bg-white dark:text-slate-900"
                    >
                      {l}
                      <button
                        type="button"
                        onClick={() => reset(id, l)}
                        aria-label={`Revenir à la version livrée en ${l}`}
                        title={`Revenir à la version livrée en ${l}`}
                        className="opacity-70 hover:opacity-100"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <p className="mt-1 line-clamp-2 text-[13px] text-slate-500 dark:text-slate-400">
                  {edits[id]?.fr?.situation ?? edits[id]?.en?.situation}
                </p>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
