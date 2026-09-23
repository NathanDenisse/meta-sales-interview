import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, Check, ClipboardCopy, Plus, RotateCcw, Trash2, X } from "lucide-react";
import type { Script } from "../types";
import { scriptToTypeScript } from "../lib/edits";
import { Field, IconButton } from "./StarEditor";
import { Card } from "./ui";

const LABELS = {
  fr: {
    hook: "Phrase d'ouverture",
    body: "Le discours, bloc par bloc",
    closing: "Phrase de fin",
    beats: "Repères de structure",
    save: "Enregistrer",
    cancel: "Annuler",
    reset: "Revenir à la version livrée",
    addBlock: "Ajouter un bloc",
    addBeat: "Ajouter un repère",
    copyTs: "Copier au format TypeScript",
    copied: "Copié",
    hint: "Tes modifications sont enregistrées dans ce navigateur. Pense à les exporter depuis la page « Mes réponses ».",
  },
  en: {
    hook: "Opening line",
    body: "The script, block by block",
    closing: "Closing line",
    beats: "Structure beats",
    save: "Save",
    cancel: "Cancel",
    reset: "Back to the delivered version",
    addBlock: "Add a block",
    addBeat: "Add a beat",
    copyTs: "Copy as TypeScript",
    copied: "Copied",
    hint: "Your edits are stored in this browser. Export them from the « Mes réponses » page.",
  },
} as const;

export function ScriptEditor({
  script,
  lang,
  edited,
  onSave,
  onCancel,
  onReset,
}: {
  script: Script;
  lang: "fr" | "en";
  edited: boolean;
  onSave: (script: Script) => void;
  onCancel: () => void;
  onReset: () => void;
}) {
  const labels = LABELS[lang];
  const [draft, setDraft] = useState<Script>(script);
  const [copied, setCopied] = useState(false);

  useEffect(() => setDraft(script), [script]);

  const copyTs = async () => {
    try {
      await navigator.clipboard.writeText(scriptToTypeScript(draft));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* presse-papiers indisponible, l'export JSON reste la voie sûre */
    }
  };

  return (
    <Card className="p-4">
      <div className="space-y-4">
        <Field label={labels.hook} value={draft.hook} onChange={(v) => setDraft({ ...draft, hook: v })} rows={2} />

        <ListField
          label={labels.body}
          items={draft.body}
          rows={4}
          addLabel={labels.addBlock}
          onChange={(body) => setDraft({ ...draft, body })}
        />

        <Field label={labels.closing} value={draft.closing} onChange={(v) => setDraft({ ...draft, closing: v })} rows={2} />

        <ListField
          label={labels.beats}
          items={draft.keyBeats}
          rows={1}
          addLabel={labels.addBeat}
          onChange={(keyBeats) => setDraft({ ...draft, keyBeats })}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3 dark:border-slate-800">
        <button
          type="button"
          onClick={() => onSave(draft)}
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

function ListField({
  label,
  items,
  rows,
  addLabel,
  onChange,
}: {
  label: string;
  items: string[];
  rows: number;
  addLabel: string;
  onChange: (items: string[]) => void;
}) {
  const move = (index: number, delta: number) => {
    const target = index + delta;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    const current = next[index] as string;
    next[index] = next[target] as string;
    next[target] = current;
    onChange(next);
  };

  return (
    <div>
      <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <span className="mt-2 text-xs tabular-nums text-slate-400">{i + 1}</span>
            <textarea
              value={item}
              rows={rows}
              onChange={(e) => onChange(items.map((v, j) => (j === i ? e.target.value : v)))}
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-[15px] leading-relaxed outline-none focus:border-brand-400 dark:border-slate-800 dark:bg-slate-950"
            />
            <div className="flex flex-col gap-1">
              <IconButton label="Monter" onClick={() => move(i, -1)} icon={ArrowUp} />
              <IconButton label="Descendre" onClick={() => move(i, 1)} icon={ArrowDown} />
              <IconButton
                label="Supprimer"
                onClick={() => onChange(items.filter((_, j) => j !== i))}
                icon={Trash2}
                danger
              />
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onChange([...items, ""])}
        className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
      >
        <Plus className="h-3.5 w-3.5" aria-hidden />
        {addLabel}
      </button>
    </div>
  );
}
