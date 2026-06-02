import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Swords, Eye, Gauge, ShoppingCart, Check, Sparkles } from "lucide-react";
import logoAsset from "@/assets/astraware-logo.png.asset.json";

const PURCHASE_URL = "https://astrawareclient.sellauth.com/";
const DISCORD_URL = "https://discord.gg/9MgH3fQuyy";
const TIKTOK_URL = "https://www.tiktok.com/@qr3_33";
const PRICE = "$17";

const TIKTOKS = [
  "https://www.tiktok.com/@qr3_33/video/7632476711342378262",
  "https://www.tiktok.com/@qr3_33/video/7630075703370796310",
  "https://www.tiktok.com/@qr3_33/video/7629040414237920534",
];

const FEATURES = [
  { icon: Eye, title: "Visuals", desc: "Custom HUD, smooth shaders, clean animations — every frame looks sharp." },
  { icon: Swords, title: "Combat", desc: "Tuned modules for fast, accurate PvP across every gamemode." },
  { icon: Gauge, title: "Performance", desc: "Optimized for high FPS on any rig. Lightweight, stable, no lag." },
  { icon: Sparkles, title: "And More", desc: "Regular updates, premium support, and new modules added often." },
];

const ROADMAP = [
  "Sword PvP module",
  "Crystal PvP module",
  "Spear PvP module",
  "Mace PvP module",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AstraWare Client — Minecraft 1.21.11" },
      { name: "description", content: "AstraWare Client for Minecraft 1.21.11 — the best cheap client for visuals, combat, and performance. Only $17." },
      { property: "og:title", content: "AstraWare Client — Minecraft 1.21.11" },
      { property: "og:description", content: "Best cheap Minecraft client for visuals, combat & performance. Only $17." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://www.tiktok.com/embed.js";
    s.async = true;
    document.body.appendChild(s);
    return () => { document.body.removeChild(s); };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <img src={logoAsset.url} alt="AstraWare" className="h-8 w-8 invert" />
            <span className="font-display font-extrabold text-lg tracking-tight">AstraWare</span>
          </a>
          <nav className="flex items-center gap-5 text-sm">
            <a href="#features" className="hidden sm:inline text-muted-foreground hover:text-foreground transition">Features</a>
            <a href="#roadmap" className="hidden sm:inline text-muted-foreground hover:text-foreground transition">Roadmap</a>
            <a href="#clips" className="hidden sm:inline text-muted-foreground hover:text-foreground transition">Clips</a>
            <a href={PURCHASE_URL} target="_blank" rel="noreferrer"
               className="px-4 py-2 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition">
              Purchase
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-5xl px-6 py-28 md:py-40 text-center relative z-10">
          <img src={logoAsset.url} alt="AstraWare" className="mx-auto h-20 w-20 mb-8 invert" style={{ filter: "invert(1) drop-shadow(0 0 30px rgba(255,255,255,0.25))" }} />
          <div className="inline-block px-3 py-1 rounded-full border border-border bg-card/60 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Minecraft 1.21.11 · Java Edition
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.05]">
            AstraWare Client
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            The best cheap option for <span className="text-foreground font-semibold">visuals</span>, <span className="text-foreground font-semibold">combat</span>, <span className="text-foreground font-semibold">performance</span> and more.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={PURCHASE_URL} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold bg-primary text-primary-foreground transition hover:scale-[1.03]"
               style={{ boxShadow: "var(--glow-primary)" }}>
              <ShoppingCart className="h-4 w-4" /> Purchase — {PRICE}
            </a>
            <a href={DISCORD_URL} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold border border-border bg-card hover:bg-secondary transition">
              <DiscordIcon /> Discord
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold border border-border bg-card hover:bg-secondary transition">
              <TikTokIcon /> TikTok
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">Why AstraWare</h2>
        <p className="text-center text-muted-foreground mb-14">Premium features. Cheap price. No compromise.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="p-6 rounded-xl bg-card border border-border hover:border-foreground/40 transition group" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="h-11 w-11 rounded-lg flex items-center justify-center mb-4 bg-secondary border border-border group-hover:bg-primary group-hover:text-primary-foreground transition">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="mx-auto max-w-4xl px-6 py-24 border-t border-border">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">What's Coming</h2>
        <p className="text-center text-muted-foreground mb-14">Shipping in the next few updates. Regular releases, not weekly hype.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {ROADMAP.map((item) => (
            <div key={item} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </div>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TikToks */}
      <section id="clips" className="mx-auto max-w-6xl px-6 py-24 border-t border-border">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">See It In Action</h2>
        <p className="text-center text-muted-foreground mb-14">Real clips from real gameplay.</p>
        <div className="grid md:grid-cols-3 gap-6 justify-items-center">
          {TIKTOKS.map((url) => {
            const id = url.split("/video/")[1];
            return (
              <blockquote
                key={id}
                className="tiktok-embed"
                cite={url}
                data-video-id={id}
                style={{ maxWidth: 325, minWidth: 280 }}
              >
                <section><a href={url}>Watch on TikTok</a></section>
              </blockquote>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="p-10 md:p-14 rounded-2xl border border-border" style={{ background: "var(--gradient-hero)", boxShadow: "var(--glow-primary)" }}>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Ready to dominate?</h2>
          <p className="text-muted-foreground mb-2">Full client. Lifetime access.</p>
          <p className="text-5xl font-extrabold mb-8">{PRICE}</p>
          <a href={PURCHASE_URL} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold bg-primary text-primary-foreground transition hover:scale-[1.03]">
            <ShoppingCart className="h-5 w-5" /> Purchase AstraWare
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-2">
          <img src={logoAsset.url} alt="" className="h-5 w-5 invert opacity-80" />
          <span className="font-semibold text-foreground">AstraWare</span>
        </div>
        © {new Date().getFullYear()} AstraWare Client · Not affiliated with Mojang or Microsoft.
      </footer>
    </div>
  );
}

function DiscordIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.07.07 0 0 0-.074.035c-.211.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.074-.035A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
  );
}
function TikTokIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.43z"/></svg>
  );
}
