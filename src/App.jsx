import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, Linkedin, Mail, Link2, Play, FileText, Filter, Sun, Moon, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const email = ["noahverburg2907", "gmail.com"].join("@");

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/noah-verburg/", icon: <Linkedin className="h-5 w-5" /> },
  { label: "E-mail", href: "mailto:" + email, icon: <Mail className="h-5 w-5" /> },
];

const TYPES = [
  { key: "all", label: "All" },
  { key: "video", label: "Video"},
  { key: "podcast", label: "Podcast"},
  { key: "website", label: "Website" },
  { key: "internship", label: "Internship" },
];

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

function useTheme() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? "dark"
      : "light"
  );
  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);
  return { theme, setTheme };
}

export default function Portfolio() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "nl" ? "en" : "nl";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang); // remembers choice
  };

  const PROJECTS = [
    {
      id: "p01",
      title: t("projects.p1.title"),
      type: "podcast",
      year: "2025-2026",
      tools: ["Audition", "Premiere Pro", "Photoshop", "After Effects"],
      tags: ["Podcast", "Interview", "Editing", "Designing"],
      cover: "/Media/Creative Inside logo.png",
      description: t("projects.p1.description"),
      links: [{ label: t("projects.p1.linklabel"), href: "https://www.youtube.com/watch?v=ZTItOCpfGrU&list=PLt-O8e5mYQUVByUeMmb4WCcOnBIksVBjV", icon: <Play className="h-4 w-4" /> }],
    },
    {
      id: "p02",
      title: t("projects.p2.title"),
      type: "podcast",
      year: 2025,
      tools: ["Audition", "Premiere Pro", "Photoshop", "After Effects"],
      tags: ["Podcast", "Gameshow", "Editing", "Designing"],
      cover: "/Media/ra ra wie ben ik podcast logo.png",
      description: t("projects.p2.description"),
      links: [{ label: t("projects.p2.linklabel"), href: "https://youtu.be/z4KOlD-sedw", icon: <Play className="h-4 w-4" /> }],
    },
    {
      id: "p03",
      title: t("projects.p3.title"),
      type: "website",
      year: 2025,
      tools: ["Photoshop", "WIX studio"],
      tags: ["Website", "Photoshop"],
      cover: "/Media/weijman challenge.png",
      description: t("projects.p3.description"),
      links: [{ label: t("projects.p3.linklabel"), href: "https://info0600935.wixstudio.com/weijman24uur", icon: <Play className="h-4 w-4" /> }],
    },
    {
      id: "p04",
      title: t("projects.p4.title"),
      type: "internship",
      year: 2025,
      tools: ["Premiere Pro", "Photoshop", "Lightroom", "After Effects"],
      tags: ["Internship", "Editing", "Designing"],
      cover: "/Media/Lindsma logo.png",
      description: t("projects.p4.description"),
      links: [{ label: t("projects.p4.linklabel"), href: "https://drive.google.com/drive/folders/1s9qMCFbD9TlOduExIHg10q-Ajws5geBm?usp=sharing", icon: <Play className="h-4 w-4" /> }],
    },
    {
      id: "p05",
      title: t("projects.p5.title"),
      type: "video",
      year: 2025,
      tools: ["Premiere Pro", "Elevenlabs", "ChatGPT", "Kling AI", "Leonardo AI"],
      tags: ["Kids TV", "Editing", "Generative AI video"],
      cover: "/Media/knuffelavonturen - de raket.png",
      description: t("projects.p5.description"),
      links: [{ label: t("projects.p5.linklabel1"), href: "https://youtu.be/xaLMjnNYwko", icon: <Play className="h-4 w-4" /> }, { label: t("projects.p5.linklabel2"), href: "https://drive.google.com/file/d/1co2nXjjKIjTAS2-6VaKWSEd0OUGGmTh6/view?usp=sharing", icon: <Play className="h-4 w-4" /> }],
    },
    {
      id: "p06",
      title: t("projects.p6.title"),
      type: "website",
      year: 2024,
      tools: ["Photoshop", "WIX studio"],
      tags: ["Website", "Designing"],
      cover: "/Media/akhigym logo.JPG",
      description: t("projects.p6.description"),
      links: [{ label: t("projects.p6.linklabel"), href: "https://www.akhigym.nl/", icon: <Play className="h-4 w-4" /> }],
    },
  ];
  const { theme, setTheme } = useTheme();
  const [tab, setTab] = useState("all");
  const [q, setQ] = useState("");
  const [active, setActive] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return PROJECTS.filter((p) => (tab === "all" ? true : p.type === tab)).filter((p) =>
      ql
        ? [p.title, p.description, ...(p.tags || []), ...(p.tools || [])]
            .join(" ")
            .toLowerCase()
            .includes(ql)
        : true
    );
  }, [tab, q, i18n.language]);

  return (
    <div className="min-h-screen bg-transparent text-neutral-900 dark:text-neutral-100 relative">
      {theme === "dark" && <div className="stars" />}
      {theme === "dark" && <div className="twinkling" />}
      {theme === "dark" && <div className="nebula" />}

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-6 py-3 flex items-center gap-3">
          <button onClick={scrollToTop} className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
            <img src="Media/black hole.png" alt="Logo" className="h-7 w-7" />
            <span className="font-semibold tracking-tight">{t("nav.title")}</span>
          </button>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Toggle language" className="rounded-2xl" onClick={toggleLanguage}>
              {i18n.language === "nl" ? "🇳🇱" : "🇬🇧"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="rounded-2xl"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-6 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              {t("hero.pre")}{" "}
              <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">{t("hero.highlight")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-prose"
            >
              {t("hero.blurb")}
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap gap-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.4,
                  },
                },
              }}
            >
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Button variant="secondary" className="rounded-2xl">
                    <span className="mr-2">{s.icon}</span>
                    {s.label}
                  </Button>
                </motion.a>
              ))}
              <motion.a
                href="#projects"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <Button className="rounded-2xl">{t("actions.seeProjects")}</Button>
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="aspect-square md:aspect-[3/3] rounded-3xl bg-white/30 dark:bg-neutral-700/30 backdrop-blur-sm shadow-inner p-2 mx-auto w-full max-w-sm md:max-w-none"
          >
            <div className="w-full h-full rounded-2xl border-neutral-300 dark:border-neutral-700 grid place-items-center text-neutral-500">
              <div className="aspect-square md:aspect-[3/3] rounded-3xl overflow-hidden">
                <img src="/Media/profiel foto.png" alt="Hero" className="w-full h-full object-cover object-[center_20%]"></img>
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-4 md:px-6 py-8 sm:py-12 pb-6 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="rounded-3xl bg-white/20 dark:bg-neutral-900/20 backdrop-blur-sm">
          <CardHeader className="pb-2 sm:pb-3">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <CardTitle className="text-lg sm:text-xl">{t("sections.projects")}</CardTitle>
              <div className="ml-auto flex items-center gap-1 sm:gap-2">
                <Filter className="h-3 w-3 sm:h-4 sm:w-4 opacity-60" />
                <Tabs value={tab} onValueChange={setTab}>
                  <TabsList className="rounded-2xl">
                    {TYPES.map((t) => (
                      <TabsTrigger key={t.key} value={t.key} className="rounded-xl">
                        {t.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>
            <div className="mt-3">
              <Input
                placeholder="Search title, tools, or tags…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="rounded-2xl"
              />
            </div>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="popLayout">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
                {filtered.map((p) => (
                  <motion.div layout key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <article className="group rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow">
                      <button onClick={() => setActive(p)} className="text-left w-full">
                        <div className="aspect-video overflow-hidden">
                          <img src={p.cover} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <div className="p-3 sm:p-4">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2">
                            <h3 className="font-semibold leading-tight text-sm sm:text-base">{p.title}</h3>
                            <Badge variant="outline" className="rounded-xl capitalize text-xs">{p.type}</Badge>
                          </div>
                          <p className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">{p.description}</p>
                          <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                            {p.tags.map((t) => (
                              <Badge key={t} variant="secondary" className="rounded-xl text-xs">{t}</Badge>
                            ))}
                          </div>
                          <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-neutral-500">
                            <span>{p.year}</span>
                            <span>•</span>
                            <span className="truncate">{p.tools.join(", ")}</span>
                          </div>
                        </div>
                      </button>
                    </article>
                  </motion.div>
                ))}
              </div>
              {filtered.length === 0 && (
                <div className="py-14 text-center text-neutral-500">No results. Try a different filter or search.</div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
        </motion.div>
      </section>

      {/* ABOUT & CONTACT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-4 md:px-6 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="md:col-span-2"
        >
          <Card className="rounded-3xl bg-white/20 dark:bg-neutral-900/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">{t("sections.about")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
            <p>
              {t("about.blurb1")}
            </p>
            <p>
              {t("about.blurb2")}
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
              {[t("about.tag1"), t("about.tag2"), t("about.tag3"), t("about.tag4")].map((s) => (
                <Badge key={s} variant="secondary" className="rounded-xl text-xs">{s}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="rounded-3xl bg-white/20 dark:bg-neutral-900/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">{t("sections.contact")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 sm:space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input placeholder="Your email" className="rounded-2xl text-sm" />
              <Button className="rounded-2xl text-sm">Say hi</Button>
            </div>
            <div className="flex flex-col gap-2">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs sm:text-sm hover:underline">
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
            <a href="/Noah Verburg CV.pdf" className="inline-flex items-center gap-2 text-xs sm:text-sm hover:underline">
              <FileText className="h-3 w-3 sm:h-4 sm:w-4" /> Download CV
            </a>
          </CardContent>
        </Card>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-4 md:px-6 py-8 sm:py-10 text-center text-xs sm:text-sm text-neutral-500">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Noah Verburg</p>
        </div>
      </footer>

      {/* MODAL */}
      <Dialog open={!!active} onOpenChange={() => setActive(null)}>
        <DialogContent className="max-w-2xl sm:max-w-3xl p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 flex-wrap">
              <span>{active?.title}</span>
              <Badge variant="outline" className="rounded-xl capitalize">{active?.type}</Badge>
            </DialogTitle>
          </DialogHeader>
          {active && (
            <div className="space-y-4">
              <img src={active.cover} alt={active.title} className="rounded-2xl w-full aspect-video object-cover" />
              <p className="text-neutral-700 dark:text-neutral-300">{active.description}</p>
              <div className="flex flex-wrap gap-2">
                {active.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-xl">{t}</Badge>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                <span>{active.year}</span>
                <span>•</span>
                <span>{active.tools.join(", ")}</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {active.links?.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                    <Button variant="default" className="rounded-2xl">
                      <span className="mr-2">{l.icon}</span>
                      {l.label}
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// --------------------
// QUICK HOW‑TO (DEV)
// --------------------
// 1) Replace PROJECTS, SOCIALS, and the About blurb.
// 2) Add your CV as /public/Noah_CV.pdf (or update the link).
// 3) Deploy:
//    - Vercel: create a new React project, add Tailwind + shadcn/ui, drop this file in src/App.tsx or a page.
//    - Netlify: same idea; connect repo and deploy.
// 4) Optional: swap hero box for an <img> or embedded <video>.
// 5) Tip: keep thumbnails 1600×900 JPG for crispness.
