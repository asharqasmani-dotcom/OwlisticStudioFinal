"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const smoothEase: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

const reveal = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 },
};

const timelineContainer = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.32,
      staggerChildren: 0.24,
    },
  },
};

const timelineItem = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const services: [string, string, string][] = [
  ["Strategy", "Research, positioning and data-backed digital direction.", "M18 7l-6 10-3-4-5 5"],
  ["Branding", "Identity systems, messaging and visual worlds built to last.", "M12 3l7 4v10l-7 4-7-4V7l7-4Z"],
  ["Web Experience", "High-performing websites with refined motion and UX.", "M4 6h16v12H4zM8 10h8M8 14h5"],
  ["Motion Design", "Cinematic animations, micro-interactions and story systems.", "M7 5l10 7-10 7V5Z"],
  ["AI Systems", "Automation, agents and AI-powered experience layers.", "M12 3v4M12 17v4M4 12h4M16 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"],
  ["Growth Marketing", "Performance campaigns and launch systems that convert.", "M4 16l5-5 4 4 7-8M15 7h5v5"],
];

const journey: [string, string][] = [
  ["2013", "Founded with a simple belief: design should create impact."],
  ["2016", "Expanded into digital strategy and product-ready web systems."],
  ["2019", "Delivered 500+ successful brand and website projects."],
  ["2022", "Built growth marketing and performance experience systems."],
  ["2026", "Creating meaningful digital ecosystems for modern brands."],
];

const process: [string, string, string][] = [
  ["01", "Discover", "Understand your market, audience and goals."],
  ["02", "Strategy", "Create the roadmap that aligns every decision."],
  ["03", "Design", "Shape a premium visual system with clarity."],
  ["04", "Build", "Develop fast, scalable and polished experiences."],
  ["05", "Scale", "Optimize for long-term growth and performance."],
];

const values: [string, string, string][] = [
  ["01", "Clarity over clutter", "Every layout, type choice and visual element earns its place — nothing decorative for its own sake."],
  ["02", "Systems over trends", "We build identity and design systems that age well, not styles that look dated within a year."],
  ["03", "Speed with precision", "Fast delivery without sacrificing detail. Tight feedback loops, clear scope and on-time files."],
  ["04", "Design that converts", "Good design isn't just attractive — it builds trust, guides decisions and supports growth."],
];

const stats: [string, string][] = [
  ["1,700+", "Fiverr Reviews"],
  ["8+", "Years Design Experience"],
  ["1,000+", "Projects Completed"],
];

const founders: { name: string; role: string; quote: string; image: string }[] = [
  {
    name: "M. Ashar Qadir",
    role: "FOUNDER & CREATIVE DIRECTOR",
    quote: "Design should feel clear, useful, and impossible to ignore.",
    image: "/assets/founder-ashar.png",
  },
  {
    name: "Syed Ibad Haider",
    role: "FOUNDER & BRAND STRATEGIST",
    quote: "Strategy turns ideas into brands people trust.",
    image: "/assets/founder-ibad.png",
  },
];

function HeroVisual() {
  return (
    <div className="about-luxe-hero-visual" aria-hidden="true">
      <div className="about-luxe-orb about-luxe-orb-main" />
      <div className="about-luxe-orb about-luxe-orb-small" />
      <div className="about-luxe-glass-card about-luxe-card-brand">
        <span className="about-luxe-owl">◢◣</span>
        <strong>owlistic</strong>
        <small>studio</small>
      </div>
      <div className="about-luxe-glass-card about-luxe-card-stack">
        <span>Strategy</span>
        <span>Design</span>
        <span>Development</span>
        <span>Growth</span>
      </div>
      <div className="about-luxe-glass-card about-luxe-card-year">
        <span>Est.</span>
        <strong>2013</strong>
      </div>
      <div className="about-luxe-ui-object">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

export default function AboutExperience() {
  return (
    <>
      <main className="about-luxe">
        {/* 1. HERO */}
        <section className="about-luxe-hero">
          <div className="about-luxe-noise" aria-hidden="true" />
          <div className="container about-luxe-hero-grid">
            <motion.div variants={reveal} initial="hidden" animate="show" transition={{ duration: 0.8, ease: "easeOut" }}>
              <span className="about-luxe-kicker">About Owalistic</span>
              <h1>Designing Digital Experiences That Drive Growth.</h1>
              <p>We are a premium digital agency committed to elevating brands and driving growth through exceptional web experiences, strategy, and design.</p>
              <div className="about-luxe-hero-actions">
                <Link href="/case-studies" className="about-luxe-round-link" aria-label="See our work">↗</Link>
                <Link href="/case-studies" className="about-luxe-text-link">See Our Work</Link>
                <span className="about-luxe-divider" />
                <div className="about-luxe-mini-stat"><strong>8+</strong><span>Years of Experience</span></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}>
              <HeroVisual />
            </motion.div>
          </div>
          <div className="about-luxe-scroll-cue" aria-hidden="true">
            <span>↓</span>
            <small>Scroll<br />Down</small>
          </div>
        </section>

        {/* 2. OUR JOURNEY */}
        <section className="about-luxe-section about-luxe-journey">
          <div className="container about-luxe-journey-grid">
            <div>
              <span className="about-luxe-kicker">Our Journey</span>
              <h2>A Journey of Purpose &amp; Progress.</h2>
            </div>
            <motion.div
              className="about-luxe-timeline"
              variants={timelineContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="about-luxe-timeline-line" aria-hidden="true" />
              {journey.map(([year, copy]) => (
                <motion.article key={year} variants={timelineItem} transition={{ duration: 0.7, ease: smoothEase }}>
                  <strong>{year}</strong>
                  <p>{copy}</p>
                  <span aria-hidden="true" />
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 3. THE FOUNDERS */}
        <section className="about-luxe-founders">
          <div className="about-luxe-founders-grid">
            <div className="about-luxe-founders-copy">
              <span className="about-luxe-kicker">The Founders</span>
              <h2>The Minds Behind Owlistic</h2>
              <p>Two specialists with one shared vision: creating clear, memorable digital experiences that help brands move forward.</p>
              <Link href="/services" className="about-luxe-dark-link">Our Philosophy →</Link>
            </div>
            {founders.map(({ name, role, quote, image }) => (
              <article key={name} className="about-luxe-founder-card">
                <img className="about-luxe-portrait" src={image} alt={name} />
                <div className="about-luxe-founder-overlay">
                  <span>“</span>
                  <h3>{quote}</h3>
                  <div>
                    <strong>{name}</strong>
                    <small>{role}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. WHAT WE DO */}
        <section className="about-luxe-section">
          <div className="container about-luxe-services-grid">
            <div className="about-luxe-section-copy">
              <span className="about-luxe-kicker">What We Do</span>
              <h2>Complete Digital Solutions Under One Roof.</h2>
              <p>We blend creativity, technology, and strategy to build digital experiences that drive real results.</p>
              <Link href="/services" className="about-luxe-pill-link">Explore Services →</Link>
            </div>
            <motion.div
              className="about-luxe-bento"
              variants={timelineContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
            >
              {services.map(([title, desc, path]) => (
                <motion.article
                  key={title}
                  className="about-luxe-service-card"
                  variants={timelineItem}
                  transition={{ duration: 0.55, ease: smoothEase }}
                  whileHover={{ y: -6 }}
                >
                  <span className="about-luxe-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d={path} />
                    </svg>
                  </span>
                  <div className="about-luxe-service-body">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                  <span className="about-luxe-service-arrow" aria-hidden="true">↗</span>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 5 + 6. STATS + VALUES */}
        <section className="about-luxe-section">
          <div className="about-luxe-values-stats">
            <div className="about-luxe-stats">
              {stats.map(([num, label]) => (
                <article key={label}>
                  <strong>{num}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>
            <div className="about-luxe-values">
              <div className="about-luxe-values-copy">
                <span className="about-luxe-kicker">Our Values</span>
                <h2>Principles That Guide Everything We Do.</h2>
              </div>
              <div className="about-luxe-accordion">
                {values.map(([num, title, copy]) => (
                  <details key={num}>
                    <summary><span>{num}</span>{title}<i>+</i></summary>
                    <p>{copy}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. PROCESS */}
        <section className="about-luxe-section about-luxe-process">
          <div className="container">
            <div className="about-luxe-process-head">
              <span className="about-luxe-kicker">Our Process</span>
              <h2>A Simple, Proven Process.</h2>
            </div>
            <motion.div
              className="about-luxe-process-row"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
              }}
            >
              {process.map(([num, title, copy]) => (
                <motion.article
                  key={num}
                  variants={{
                    hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.6, ease: smoothEase },
                    },
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <strong>{num}</strong>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <span aria-hidden="true">→</span>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="about-luxe-final-cta">
          <div>
            <span className="about-luxe-kicker">Ready to Grow?</span>
            <h2>Let&apos;s Build Something Unforgettable Together.</h2>
            <div className="about-luxe-cta-actions">
              <Link href="/contact" className="btn btn-primary">Let&apos;s Talk</Link>
              <Link href="/case-studies" className="btn btn-outline">See Our Work</Link>
            </div>
          </div>
          <div className="about-luxe-cta-object" aria-hidden="true">
            <div />
            <span />
            <i />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
