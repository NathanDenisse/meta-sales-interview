import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { BookOpen, Database, Dices, Lightbulb, Menu, MessageCircleQuestion, Moon, Pencil, Sun, X } from "lucide-react";
import { categories } from "./content/categories";
import { byCategory, questions } from "./content/questions";
import { useLocalStorage, useTheme } from "./lib/hooks";
import { Home } from "./pages/Home";
import { CategoryPage } from "./pages/CategoryPage";
import { QuestionPage } from "./pages/QuestionPage";
import { DrillPage } from "./pages/DrillPage";
import { StoriesPage } from "./pages/StoriesPage";
import { InspirationsPage } from "./pages/InspirationsPage";
import { FactsPage } from "./pages/FactsPage";
import { AskPage } from "./pages/AskPage";
import { EditsPage } from "./pages/EditsPage";

export default function App() {
  const { dark, toggle } = useTheme();
  const [mastered] = useLocalStorage<string[]>("msi.mastered", []);
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setNavOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const progress = Math.round((mastered.length / Math.max(questions.length, 1)) * 100);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-3 px-4">
          <button
            type="button"
            onClick={() => setNavOpen((o) => !o)}
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 lg:hidden dark:hover:bg-slate-800"
            aria-label="Afficher ou masquer la navigation"
          >
            {navOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>

          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
              S
            </span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">Meta Sales Interview</span>
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden items-center gap-2 sm:flex">
              <div className="h-1.5 w-24 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${progress}%` }} />
              </div>
              <span className="text-xs tabular-nums text-slate-500 dark:text-slate-400">{progress}%</span>
            </div>
            <button
              type="button"
              onClick={toggle}
              className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-500 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
              aria-label="Basculer le mode sombre"
            >
              {dark ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] gap-6 px-4 py-6">
        <aside
          className={`${
            navOpen ? "block" : "hidden"
          } fixed inset-x-0 top-14 z-30 max-h-[80vh] overflow-y-auto border-b border-slate-200 bg-white p-4 lg:static lg:z-auto lg:block lg:max-h-none lg:w-64 lg:shrink-0 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 dark:border-slate-800 dark:bg-slate-950 lg:dark:bg-transparent`}
        >
          <nav className="scroll-thin lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-2">
            <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Entraînement</p>
            <ul className="space-y-0.5">
              <SideLink to="/entrainement" icon={Dices} label="Tirage aléatoire" />
              <SideLink to="/histoires" icon={BookOpen} label="Mes 9 histoires" />
              <SideLink to="/inspirations" icon={Lightbulb} label="Inspirations internes" />
              <SideLink to="/questions-a-poser" icon={MessageCircleQuestion} label="Questions à poser" />
              <SideLink to="/faits" icon={Database} label="Banque de faits" />
              <SideLink to="/mes-reponses" icon={Pencil} label="Mes réponses" />
            </ul>

            <p className="mb-2 mt-5 px-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Familles</p>
            <ul className="space-y-0.5">
              {categories.map((c) => {
                const list = byCategory(c.id);
                const done = list.filter((q) => mastered.includes(q.id)).length;
                return (
                  <li key={c.id}>
                    <NavLink
                      to={`/categorie/${c.id}`}
                      className={({ isActive }) =>
                        `flex items-start gap-2 rounded-lg px-2 py-2 text-sm transition-colors ${
                          isActive
                            ? "bg-brand-50 font-medium text-brand-700 dark:bg-brand-950/50 dark:text-brand-200"
                            : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60"
                        }`
                      }
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block leading-snug">{c.title}</span>
                        <span className="text-[11px] text-slate-400">
                          {done}/{list.length} maîtrisées
                        </span>
                      </span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <main className="min-w-0 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorie/:id" element={<CategoryPage />} />
            <Route path="/question/:id" element={<QuestionPage />} />
            <Route path="/entrainement" element={<DrillPage />} />
            <Route path="/histoires" element={<StoriesPage />} />
            <Route path="/inspirations" element={<InspirationsPage />} />
            <Route path="/faits" element={<FactsPage />} />
            <Route path="/questions-a-poser" element={<AskPage />} />
            <Route path="/mes-reponses" element={<EditsPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function SideLink({ to, icon: Icon, label }: { to: string; icon: typeof Dices; label: string }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-2 rounded-lg px-2 py-2 text-sm transition-colors ${
            isActive
              ? "bg-brand-50 font-medium text-brand-700 dark:bg-brand-950/50 dark:text-brand-200"
              : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60"
          }`
        }
      >
        <Icon className="h-4 w-4" aria-hidden />
        {label}
      </NavLink>
    </li>
  );
}
