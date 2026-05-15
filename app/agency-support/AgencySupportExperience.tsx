"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const smoothEase: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: smoothEase } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const painPoints: { title: string; desc: string; path: string }[] = [
  { title: "Too many client projects", desc: "Multiple projects move at once and design tasks pile up.", path: "M4 7h16M4 12h16M4 17h10" },
  { title: "Limited internal capacity", desc: "Your team is focused on strategy, dev, SEO or marketing.", path: "M12 3v18M3 12h18" },
  { title: "Inconsistent visual output", desc: "Without a system, client work feels rushed or uneven.", path: "M4 6h16M4 12h10M4 18h16" },
  { title: "Tight turnaround times", desc: "Polished visuals needed quickly without losing quality.", path: "M12 7v5l3 2M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" },
];

const supports: { title: string; desc: string; svg: React.ReactNode }[] = [
  {
    title: "Homepage Concepts",
    desc: "Hero sections, service blocks and conversion-focused layouts.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 13h6" />
      </svg>
    ),
  },
  {
    title: "Website UI Design",
    desc: "Service businesses, ecommerce brands, landing pages.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 12h18" /><circle cx="7" cy="8" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Brand Identity Systems",
    desc: "Logos, color systems, typography and guidelines.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l8 3v6c0 5-3.5 8.2-8 9-4.5-.8-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Packaging Design",
    desc: "Boxes, labels, pouches, mockups and print-ready files.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5v-9z" /><path d="M3.5 7.5L12 12l8.5-4.5M12 12v9" />
      </svg>
    ),
  },
  {
    title: "Presentation Design",
    desc: "Pitch decks, company profiles and proposals.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4M7 11l3-3 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Marketing Assets",
    desc: "Social templates, banners, brochures and ads.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><circle cx="17" cy="17" r="3.2" />
      </svg>
    ),
  },
];

const howSteps: [string, string, string][] = [
  ["01", "Send the brief", "Share project details, references, client goals and required deliverables."],
  ["02", "I create the direction", "I prepare the layout, visual system or design assets based on the brief."],
  ["03", "We refine the work", "Request adjustments before presenting or delivering the final version."],
  ["04", "Deliver with confidence", "Receive clean, organized files ready for client handoff."],
];

const audience: string[] = [
  "Marketing agencies",
  "SEO agencies",
  "Web design studios",
  "Branding studios",
  "Social media agencies",
  "Print and signage",
  "Freelance developers",
  "Small creative teams",
];

const whyPoints: { title: string; desc: string }[] = [
  { title: "Brand-consistent execution", desc: "Every asset feels connected across logo, web, packaging and marketing." },
  { title: "Clean client presentation", desc: "Polished file delivery so your agency can present professionally." },
  { title: "Flexible design help", desc: "One-off projects, overflow work, or ongoing creative capacity." },
  { title: "Reliable communication", desc: "Clear updates, organized files and a smooth working process." },
];

const processSteps: { num: string; title: string; desc: string; variant: "light" | "cream" | "peach" | "dark" }[] = [
  { num: "1", title: "Brief Review", desc: "I review the client brief, references, brand direction and project goals.", variant: "light" },
  { num: "2", title: "Creative Direction", desc: "I define the design style, layout approach and visual direction.", variant: "cream" },
  { num: "3", title: "Design & Refinement", desc: "I create the required assets and refine them based on feedback.", variant: "peach" },
  { num: "4", title: "Final Handoff", desc: "Clean, organized files ready for presentation or implementation.", variant: "dark" },
];

const proofChips = [
  "White-label friendly",
  "Fast design support",
  "Brand, packaging & web",
  "Client-ready delivery",
];

function HeroVisual() {
  return (
    <div className="as-hero-visual" aria-hidden="true">
      <div className="as-hero-glow" />

      <div className="as-hero-card as-hero-card-brand">
        <span className="as-card-eyebrow">BRAND IDENTITY</span>
        <div className="as-card-swatches">
          <span className="as-swatch as-swatch-orange" />
          <span className="as-swatch as-swatch-dark" />
          <span className="as-swatch as-swatch-cream" />
          <span className="as-swatch as-swatch-outline" />
        </div>
        <strong>Logo · Type · System</strong>
      </div>

      <div className="as-hero-card as-hero-card-web">
        <span className="as-card-eyebrow">WEBSITE UI</span>
        <div className="as-card-ui">
          <span /><span /><span />
        </div>
      </div>

      <div className="as-hero-card as-hero-card-pack">
        <span className="as-card-eyebrow">PACKAGING</span>
        <div className="as-card-package">
          <i /><em />
        </div>
      </div>

      <div className="as-hero-card as-hero-card-pres">
        <span className="as-card-eyebrow">PRESENTATION</span>
        <div className="as-card-slide">
          <i /><i />
        </div>
      </div>

      <div className="as-hero-card as-hero-card-mkt">
        <span className="as-card-eyebrow">MARKETING</span>
        <div className="as-card-mkt">
          <span /><span /><span /><span />
        </div>
      </div>
    </div>
  );
}

export default function AgencySupportExperience() {
  return (
    <>
      <main className="as-page">
        {/* 1. HERO */}
        <section className="as-hero">
          <div className="container as-hero-grid">
            <motion.div
              className="as-hero-copy"
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              <span className="pill-tag">AGENCY SUPPORT</span>
              <h1>Extra Design Capacity for Busy Agencies</h1>
              <p>
                Owlistic Studio helps agencies deliver brand identity, packaging, website design and
                client-ready visual assets when their internal team is busy or needs reliable creative
                support.
              </p>
              <div className="as-hero-actions">
                <Link href="/contact" className="btn btn-primary">Discuss Agency Support</Link>
                <Link href="/case-studies" className="btn btn-outline">View Selected Work</Link>
              </div>
              <ul className="as-hero-proof">
                {proofChips.map((c) => (
                  <li key={c}><span aria-hidden="true">✓</span>{c}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="as-hero-stage"
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: smoothEase }}
            >
              <HeroVisual />
            </motion.div>
          </div>
        </section>

        {/* 2. PAIN POINTS + SUPPORT SERVICES */}
        <section className="as-section as-combo">
          <div className="container">
            <div className="as-combo-head">
              <span className="pill-tag">AGENCY SUPPORT</span>
              <h2>When your team is busy, design quality should not slow down.</h2>
              <p>
                Agencies often have the strategy, clients and deadlines, but need extra creative
                capacity to keep projects moving smoothly.
              </p>
            </div>

            <div className="as-combo-grid">
              <motion.div
                className="as-pain-grid"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={stagger}
              >
                {painPoints.map((p) => (
                  <motion.article key={p.title} className="as-pain-card" variants={fadeUp}>
                    <span className="as-pain-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d={p.path} />
                      </svg>
                    </span>
                    <div>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>

              <motion.div
                className="as-support-list"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={stagger}
              >
                <h4 className="as-support-heading">What I support with</h4>
                {supports.map((s) => (
                  <motion.div key={s.title} className="as-support-row" variants={fadeUp}>
                    <span className="as-support-icon" aria-hidden="true">{s.svg}</span>
                    <div className="as-support-text">
                      <strong>{s.title}</strong>
                      <span>{s.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. HOW IT WORKS */}
        <section className="as-section as-how">
          <div className="container as-how-grid">
            <motion.div
              className="as-how-copy"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="pill-tag">HOW IT WORKS</span>
              <h2>Simple support without adding complexity</h2>
              <p>
                You bring the client brief, brand direction or project goal. I help turn it into polished
                visual work your agency can present, refine and deliver confidently.
              </p>
            </motion.div>
            <motion.div
              className="as-how-card"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              {howSteps.map(([num, title, desc]) => (
                <motion.div key={num} className="as-how-row" variants={fadeUp}>
                  <span className="as-how-num">{num}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. WHO + WHY OWLISTIC */}
        <section className="as-section as-who">
          <div className="container">
            <div className="as-who-panel">
              <div className="as-who-pattern" aria-hidden="true" />
              <div className="as-who-glow" aria-hidden="true" />

              <div className="as-who-head">
                <span className="pill-tag pill-on-dark">WHO I HELP</span>
                <h2>Built for agencies that need reliable creative backup</h2>
                <p>
                  Dependable design support without hiring a full-time designer or overloading your
                  internal team.
                </p>
              </div>

              <div className="as-who-grid">
                <motion.ul
                  className="as-audience-list"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={stagger}
                >
                  {audience.map((label) => (
                    <motion.li key={label} variants={fadeUp}>
                      <span aria-hidden="true">✦</span>{label}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  className="as-why-points"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={stagger}
                >
                  {whyPoints.map((p, i) => (
                    <motion.article key={p.title} className="as-why-point" variants={fadeUp}>
                      <span className="as-why-point-num">{String(i + 1).padStart(2, "0")}</span>
                      <strong>{p.title}</strong>
                      <p>{p.desc}</p>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PROCESS + FINAL CTA */}
        <section className="as-section as-process-cta">
          <div className="container">
            <div className="as-process-head">
              <span className="pill-tag">PROCESS</span>
              <h2>A clear process for agency projects</h2>
            </div>
            <motion.div
              className="proc-flow is-visible as-proc-flow"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              {processSteps.map((step, i) => (
                <React.Fragment key={step.num}>
                  <motion.article
                    className={`proc-capsule proc-capsule-${step.variant}`}
                    variants={fadeUp}
                    style={{ animation: "none", opacity: 1, transform: "none" }}
                  >
                    <div className="proc-head-circle">
                      <span className="proc-num">{step.num}</span>
                    </div>
                    <div className="proc-body" style={{ animation: "none", opacity: 1, transform: "none" }}>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </motion.article>
                  {i < processSteps.length - 1 && (
                    <span className="proc-arrow" aria-hidden="true" style={{ opacity: 1, transform: "none" }}>
                      <svg viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 6h28M22 1l6 5-6 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>

            <motion.div
              className="as-cta-panel"
              id="agency-cta"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
            >
              <div className="as-cta-glow" aria-hidden="true" />
              <span className="pill-tag pill-on-dark">READY TO COLLABORATE?</span>
              <h2>Need extra design support for your agency?</h2>
              <p>
                Tell me what kind of projects your agency handles and I&apos;ll suggest the best way I
                can support your team with brand, packaging, website or marketing design work.
              </p>
              <div className="as-cta-actions">
                <Link href="/contact" className="btn btn-primary">Discuss Agency Support</Link>
                <Link href="/case-studies" className="btn btn-outline">View Selected Work</Link>
              </div>
              <div className="as-cta-contact">
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                <span aria-hidden="true">·</span>
                <a href="https://www.fiverr.com/block_design" target="_blank" rel="noopener noreferrer">
                  Fiverr: fiverr.com/block_design ↗
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
