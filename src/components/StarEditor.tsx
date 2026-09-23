import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, Check, ClipboardCopy, Plus, RotateCcw, Trash2, X } from "lucide-react";
import type { Star } from "../types";
import { toTypeScript } from "../lib/edits";
import { Card } from "./ui";

const LABELS = {
  fr: {
    situation: "Situation",
    task: "Tâche",
    action: "Actions",
    result: "Résultat",
    learning: "Ce que j'en ai tiré",
    save: "Enregistrer",
    cancel: "Annuler",
    reset: "Revenir à la version livrée",
    addAction: "Ajouter une action",
    copyTs: "Copier au format TypeScript",
    copied: "Copié",
    hint: "Tes modifications sont enregistrées dans ce navigateur. Pense à les exporter depuis la page « Mes réponses ».",
  },
  en: {
    situation: "Situation",
    task: "Task",
    action: "Actions",
    result: "Result",
    learning: "What I took from it",
    save: "Save",
    cancel: "Cancel",
    reset: "Back to the delivered version",
    addAction: "Add an action",
    copyTs: "Copy as TypeScript",
    copied: "Copied",
    hint: "Your edits are stored in this browser. Export them from the « Mes réponses » page.",
  },
} as const;

export function StarEditor({
  star,
  lang,
  edited,
  onSave,
  onCancel,
  onReset,
}: {
  star: Star;
  lang: "fr" | "en";
  edited: boolean;
  onSave: (star: Star) => void;
  onCancel: () => void;
  onReset: () => void;
}) {
  const labels = LABELS[lang];
  const [draft, setDraft] = useState<Star>(star);
  const [copied, setCopied] = useState(false);

  useEffect(() => setDraft(star), [star]);

  const setAction = (index: number, value: string) => {
    const action = [...draft.action];
    action[index] = value;
    setDraft({ ...draft, action });
  };

  const moveAction = (index: number, delta: number) => {
    const target = index + delta;
    if (target < 0 || target >= draft.action.length) return;
    const action = [...draft.action];
    const current = action[index] as string;
    action[index] = action[target] as string;
    action[target] = current;
    setDraft({ ...draft, action });
  };

  const copyTs = async () => {
    try {
      await navigator.clipboard.writeText(toTypeScript(draft));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* presse-papiers indisponible, l'export JSON reste la voie sûre */
    }
  };

  return (
    <Card className="p-4">
      <div className="space-y-4">
        <Field label={labels.situation} value={draft.situation} onChange={(v) => setDraft({ ...draft, situation: v })} rows={3} />
        <Field label={labels.task} value={draft.task} onChange={(v) => setDraft({ ...draft, task: v })} rows={2} />

        <div>
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {labels.action}
          </p>
          <div className="space-y-2">
            {draft.action.map((a, i) => (
              <div key={i} className="flex gap-2">
                <span className="mt-2 text-xs tabular-nums text-slate-400">{i + 1}</span>
                <textarea
                  value={a}
                  rows={2}
                  onChange={(e) => setAction(i, e.target.value)}
                  className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-[15px] outline-none focus:border-brand-400 dark:border-slate-800 dark:bg-slate-950"
                />
                <div className="flex flex-col gap-1">
                  <IconButton label="Monter" onClick={() => moveAction(i, -1)} icon={ArrowUp} />
                  <IconButton label="Descendre" onClick={() => moveAction(i, 1)} icon={ArrowDown} />
                  <IconButton
                    label="Supprimer"
                    onClick={() => setDraft({ ...draft, action: draft.action.filter((_, j) => j !== i) })}
                    icon={Trash2}
                    danger
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setDraft({ ...draft, action: [...draft.action, ""] })}
            className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            <Plus className="h-3.5 w-3.5" aria-hidden />
            {labels.addAction}
          </button>
        </div>

        <Field label={labels.result} value={draft.result} onChange={(v) => setDraft({ ...draft, result: v })} rows={3} />
        <Field
          label={labels.learning}
          value={draft.learning ?? ""}
          onChange={(v) => setDraft({ ...draft, learning: v })}
          rows={2}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3 dark:border-slate-800">
        <button
          type="button"
          onClick={() => onSave({ ...draft, learning: draft.learning?.trim() ? draft.learning : undefined })}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-700"
        >
          <Check className="h-4 w-4" aria-hidden />
          {labels.save}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
        >
          <X className="h-4 w-4" aria-hidden />
          {labels.cancel}
        </button>
        {edited ? (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-rose-600 hover:border-rose-300 dark:border-slate-800 dark:bg-slate-900 dark:text-rose-300"
          >
            <RotateCcw className="h-4 w-4" aria-hidden />
            {labels.reset}
          </button>
        ) : null}
        <button
          type="button"
          onClick={copyTs}
          className="ml-auto inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
        >
          <ClipboardCopy className="h-3.5 w-3.5" aria-hidden />
          {copied ? labels.copied : labels.copyTs}
        </button>
      </div>

      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{labels.hint}</p>
    </Card>
  );
}

export function Field({
  label,
  value,
  onChange,
  rows,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows: number;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </span>
      <textarea
        value={value}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-[15px] leading-relaxed outline-none focus:border-brand-400 dark:border-slate-800 dark:bg-slate-950"
      />
    </label>
  );
}

export function IconButton({
  label,
  onClick,
  icon: Icon,
  danger,
}: {
  label: string;
  onClick: () => void;
  icon: typeof ArrowUp;
  danger?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`rounded-lg border border-slate-200 bg-white p-1 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 ${
        danger ? "text-rose-500" : "text-slate-400"
      }`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden />
    </button>
  );
}
