import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, Linkedin, Mail, Link2, Play, FileText, Filter, Sun, Moon, Globe } from "lucide-react";

// --------------------------------------
// DATA: edit this to add your real work
// --------------------------------------
const PROJECTS = [
  {
    id: "p01",
    title: "Creative Inside – Podcast Episode 1",
    type: "audio",
    year: 2025,
    tools: ["Reaper", "RX", "Premiere"],
    tags: ["Podcast", "Interview", "Editing"],
    cover: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
    description:
      "Launch episode for a company culture podcast. I handled format design, recording chain, post, and show notes.",
    links: [{ label: "Listen", href: "#", icon: <Play className="h-4 w-4" /> }],
  },
  {
    id: "p02",
    title: "Short-form Ad – RCE Campaign",
    type: "video",
    year: 2025,
    tools: ["DaVinci Resolve", "After Effects"],
    tags: ["Commercial", "Editing", "Color"],
    cover: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
    description:
      "15s cutdown for a restaurant group. Deliverables for TikTok/Reels with SRT captions and brand-safe sound mix.",
    links: [{ label: "Watch", href: "#", icon: <Play className="h-4 w-4" /> }],
  },
  {
    id: "p03",
    title: "‘Filtervrij’ – Social Media & Mental Health",
    type: "audio",
    year: 2024,
    tools: ["Audition", "Notion", "Figma"],
    tags: ["Podcast", "Production", "Branding"],
    cover: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop",
    description:
      "Podcast concept with recurring segments: Kletskousen, Tegenpool, Tips & Tricks. I co-created and engineered.",
    links: [{ label: "Listen", href: "#", icon: <Play className="h-4 w-4" /> }],
  },
  {
    id: "p04",
    title: "Motion Ident – LindenSteensma",
    type: "design",
    year: 2025,
    tools: ["After Effects", "Illustrator"],
    tags: ["Branding", "Motion"],
    cover: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop",
    description:
      "A crisp motion ident for a creative agency podcast. Focus on clean geometry and audio sync.",
    links: [{ label: "Case Study", href: "#", icon: <FileText className="h-4 w-4" /> }],
  },
  {
    id: "p05",
    title: "Interactive Article – AI Artists Label",
    type: "writing",
    year: 2024,
    tools: ["Svelte", "Markdown"],
    tags: ["Web", "Storytelling"],
    cover: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop",
    description:
      "Explainer on ethical AI artistry and label operations with embedded audio examples.",
    links: [{ label: "Read", href: "#", icon: <FileText className="h-4 w-4" /> }],
  },
  {
    id: "p06",
    title: "University Reel – 2025 Showreel",
    type: "video",
    year: 2025,
    tools: ["Premiere", "Resolve"],
    tags: ["Montage", "Sound Design"],
    cover: "https://images.unsplash.com/photo-1526312426976-593c12823ce0?q=80&w=1600&auto=format&fit=crop",
    description:
      "Highlights of cross‑disciplinary course work: docu, social edits, motion, and podcasting.",
    links: [{ label: "Watch", href: "#", icon: <Play className="h-4 w-4" /> }],
  },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/", icon: <Github className="h-5 w-5" /> },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: <Linkedin className="h-5 w-5" /> },
  { label: "E‑mail", href: "mailto:you@example.com", icon: <Mail className="h-5 w-5" /> },
];

const TYPES = [
  { key: "all", label: "All" },
  { key: "video", label: "Video" },
  { key: "audio", label: "Audio" },
  { key: "design", label: "Design" },
  { key: "writing", label: "Writing" },
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
  const { theme, setTheme } = useTheme();
  const [tab, setTab] = useState("all");
  const [q, setQ] = useState("");
  const [active, setActive] = useState(null);

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
  }, [tab, q]);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎮</span>
            <span className="font-semibold tracking-tight">Noah – Portfolio</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Toggle language" className="rounded-2xl">
              <Globe className="h-5 w-5" />
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
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 py-14 md:py-20 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
            >
              Smart Media student crafting <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">audio, video & interactive</span> stories.
            </motion.h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-prose">
              I make podcasts, short‑form ads, motion idents, and interactive articles. Below is a curated selection of my recent work.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  <Button variant="secondary" className="rounded-2xl">
                    <span className="mr-2">{s.icon}</span>
                    {s.label}
                  </Button>
                </a>
              ))}
              <a href="#projects">
                <Button className="rounded-2xl">See projects</Button>
              </a>
            </div>
          </div>
          <div className="aspect-video md:aspect-[4/3] rounded-3xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 shadow-inner p-2">
            <div className="w-full h-full rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700 grid place-items-center text-neutral-500">
              <div className="text-center px-6">
                <p className="font-medium">Drop a showreel image or video here</p>
                <p className="text-sm opacity-80">Replace this box with your hero media or a headshot.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section id="projects" className="max-w-6xl mx-auto px-4 pb-6">
        <Card className="rounded-3xl">
          <CardHeader className="pb-2">
            <div className="flex flex-wrap items-center gap-3">
              <CardTitle className="text-xl">Projects</CardTitle>
              <div className="ml-auto flex items-center gap-2">
                <Filter className="h-4 w-4 opacity-60" />
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((p) => (
                  <motion.div layout key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <article className="group rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow">
                      <button onClick={() => setActive(p)} className="text-left w-full">
                        <div className="aspect-video overflow-hidden">
                          <img src={p.cover} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold leading-tight pr-2">{p.title}</h3>
                            <Badge variant="outline" className="rounded-xl capitalize">{p.type}</Badge>
                          </div>
                          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">{p.description}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {p.tags.map((t) => (
                              <Badge key={t} variant="secondary" className="rounded-xl">{t}</Badge>
                            ))}
                          </div>
                          <div className="mt-3 flex items-center gap-3 text-sm text-neutral-500">
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
      </section>

      {/* ABOUT & CONTACT */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <Card className="md:col-span-2 rounded-3xl">
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-neutral-700 dark:text-neutral-300">
            <p>
              Hey! I’m Noah, a Smart Media student at the University of Amsterdam. I’m into podcasts, game‑adjacent storytelling, and quick, clean edits that punch above their weight.
            </p>
            <p>
              I also nerd out on workflows: versioning, templates, and loudness‑safe delivery. If you dig tidy projects and reliable turnarounds, we’ll get along.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Podcast Production", "Video Editing", "Motion Basics", "Content Strategy", "Sound Design"].map((s) => (
                <Badge key={s} variant="secondary" className="rounded-xl">{s}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-2">
              <Input placeholder="Your email" className="rounded-2xl" />
              <Button className="rounded-2xl">Say hi</Button>
            </div>
            <div className="flex flex-col gap-2">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm hover:underline">
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
            <a href="/Noah_CV.pdf" className="inline-flex items-center gap-2 text-sm hover:underline">
              <FileText className="h-4 w-4" /> Download CV
            </a>
          </CardContent>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-neutral-500">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Noah. Built with ❤ and coffee.</p>
          <p className="mt-1 inline-flex items-center gap-1">
            <Link2 className="h-3.5 w-3.5" />
            <span>Domain or Vercel/Netlify link here</span>
          </p>
        </div>
      </footer>

      {/* MODAL */}
      <Dialog open={!!active} onOpenChange={() => setActive(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between gap-3">
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
