"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";
import { services } from "./serviceData";

const smoothEase: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: smoothEase } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const proofChips = [
  "Brand Identity",
  "Website Design",
  "Packaging Design",
  "Social Media Design",
];

const processSteps: { num: string; title: string; desc: string; variant: "light" | "cream" | "peach" | "dark" }[] = [
  { num: "1", title: "Discovery", desc: "I review your business, goals, audience, competitors and current visual direction.", variant: "light" },
  { num: "2", title: "Creative Direction", desc: "I define the style, structure, layout and brand approach before moving into full design.", variant: "cream" },
  { num: "3", title: "Design & Refinement", desc: "I create the design system and refine it based on feedback until the direction feels clear and polished.", variant: "peach" },
  { num: "4", title: "Final Delivery", desc: "You receive organized final files, source files where included, and ready-to-use assets for print, digital or web.", variant: "dark" },
];

function HeroVisual() {
  return (
    <div className="srv-showcase-visual" aria-hidden="true">
      <div className="srv-showcase-glow" />
      <div className="srv-showcase-grid" />

      <div className="srv-preview-card srv-preview-brand">
        <div className="srv-preview-head">
          <span>Brand Identity</span>
          <i />
        </div>
        <div className="srv-brand-mark">Ow</div>
        <div className="srv-brand-lines">
          <span />
          <span />
        </div>
        <div className="srv-brand-swatches">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="srv-preview-card srv-preview-web">
        <div className="srv-browser-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="srv-web-layout">
          <i />
          <div>
            <span />
            <span />
            <span />
          </div>
        </div>
        <strong>Website Design</strong>
      </div>

      <div className="srv-preview-card srv-preview-pack">
        <span className="srv-pack-cap">Packaging Design</span>
        <div className="srv-pack-scene">
          <i />
          <em />
          <b />
        </div>
      </div>

      <div className="srv-preview-card srv-preview-social">
        <div className="srv-social-grid">
          <span />
          <span />
          <span />
          <span />
        </div>
        <strong>Social Media</strong>
      </div>
    </div>
  );
}

export default function ServicesExperience() {
  return (
    <>
      <main className="as-page srv-page">
        {/* 1. HERO */}
        <section className="as-hero">
          <div className="container as-hero-grid">
            <motion.div
              className="as-hero-copy"
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              <span className="pill-tag">SERVICES</span>
              <h1>Design Services Built for Brands That Need to Look Professional Everywhere</h1>
              <p>
                Owlistic Studio helps startups, local businesses, product brands and agencies create
                clean, consistent design systems across brand identity, websites, packaging and
                social media.
              </p>
              <div className="as-hero-actions">
                <a href="#srv-grid" className="btn btn-primary">Explore Services</a>
                <Link href="/contact" className="btn btn-outline">Start a Project</Link>
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

        {/* 2. MAIN SERVICES GRID */}
        <section className="as-section srv-grid-section" id="srv-grid">
          <div className="container">
            <div className="srv-intro">
              <span className="pill-tag">WHAT I DO</span>
              <h2>Four core services for a stronger visual brand</h2>
              <p>
                Each service can work on its own, or connect into one complete visual system that
                helps your business look professional across every touchpoint.
              </p>
            </div>

            <motion.div
              className="srv-grid"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              {services.map((service) => (
                <motion.div key={service.slug} variants={fadeUp}>
                  <Link href={`/services/${service.slug}`} className="srv-card">
                    <div className="srv-card-media">
                      <img src={service.image} alt={service.alt} />
                    </div>
                    <div className="srv-card-body">
                      <span className="srv-card-tag">{service.tag}</span>
                      <h3>{service.title}</h3>
                      <p>{service.short}</p>
                      <span className="srv-card-arrow" aria-hidden="true">
                        <svg viewBox="0 0 32 12" fill="none">
                          <path d="M0 6h28M22 1l6 5-6 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 3. SERVICE DETAIL PREVIEW */}
        <section className="as-section srv-detail-section">
          <div className="container">
            <div className="srv-intro">
              <span className="pill-tag">SERVICE DETAILS</span>
              <h2>What each service helps you build</h2>
            </div>

            <motion.div
              className="srv-detail-list"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05 }}
              variants={stagger}
            >
              {services.map((service, i) => (
                <motion.article
                  key={service.slug}
                  className={`srv-detail-row${i % 2 ? " is-reverse" : ""}`}
                  variants={fadeUp}
                >
                  <div className="srv-detail-copy">
                    <span className="srv-detail-tag">{service.tag}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link href={`/services/${service.slug}`} className="srv-detail-link">
                      View {service.title} <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                  <div className="srv-detail-card">
                    <span className="srv-detail-card-label">Includes</span>
                    <ul>
                      {service.includes.map((item) => (
                        <li key={item}><span aria-hidden="true">✦</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. SYSTEM FLOW */}
        <section className="as-section srv-system-section">
          <div className="container">
            <div className="srv-intro">
              <span className="pill-tag">FULL SYSTEM</span>
              <h2>One visual direction across every customer touchpoint</h2>
              <p>
                The strongest brands do not treat logo, website, packaging and social media as
                separate pieces. They connect everything into one clear visual system so the
                business feels professional everywhere.
              </p>
            </div>

            <motion.div
              className="srv-flow"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              {services.map((service, i) => (
                <React.Fragment key={service.slug}>
                  <motion.div className="srv-flow-card" variants={fadeUp}>
                    <span className="srv-flow-num">{String(i + 1).padStart(2, "0")}</span>
                    <strong>{service.title}</strong>
                    <span className="srv-flow-tag">{service.tag}</span>
                  </motion.div>
                  {i < services.length - 1 && (
                    <span className="srv-flow-arrow" aria-hidden="true">
                      <svg viewBox="0 0 32 12" fill="none">
                        <path d="M0 6h28M22 1l6 5-6 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 5. PROCESS */}
        <section className="as-section as-process-cta">
          <div className="container">
            <div className="as-process-head">
              <span className="pill-tag">PROCESS</span>
              <h2>A clear process for every design project</h2>
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

            {/* 6. FINAL CTA */}
            <motion.div
              className="as-cta-panel"
              id="srv-cta"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
            >
              <div className="as-cta-glow" aria-hidden="true" />
              <span className="pill-tag pill-on-dark">READY TO START?</span>
              <h2>Need help building a clear and professional brand presence?</h2>
              <p>
                Tell me what you need help with and I&apos;ll suggest the best next step for your
                brand identity, website, packaging or social media design project.
              </p>
              <div className="as-cta-actions">
                <Link href="/contact" className="btn btn-primary">Start a Project</Link>
                <Link href="/about" className="btn btn-outline">Learn About Owlistic</Link>
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
