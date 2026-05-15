"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import ContactFormPanel from "@/components/ContactFormPanel";
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

const projectTypes: { title: string; desc: string; href: string; tag: string; icon: React.ReactNode }[] = [
  {
    title: "Brand Identity",
    desc: "Logo systems, brand guidelines and visual direction.",
    href: "/services/brand-identity",
    tag: "BRAND",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l8 3v6c0 5-3.5 8.2-8 9-4.5-.8-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Website Design",
    desc: "Modern responsive websites and landing pages.",
    href: "/services/website-design",
    tag: "WEB",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 13h6" />
      </svg>
    ),
  },
  {
    title: "Packaging Design",
    desc: "Labels, boxes, pouches and product presentation.",
    href: "/services/packaging-design",
    tag: "PACKAGE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5v-9z" /><path d="M3.5 7.5L12 12l8.5-4.5M12 12v9" />
      </svg>
    ),
  },
  {
    title: "Social Media Design",
    desc: "Posts, stories, campaigns and branded templates.",
    href: "/services/social-media-design",
    tag: "SOCIAL",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><circle cx="17" cy="17" r="3.2" />
      </svg>
    ),
  },
  {
    title: "Agency Support",
    desc: "White-label design capacity for agencies and teams.",
    href: "/agency-support",
    tag: "AGENCY",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2.4" /><path d="M3 19c0-3 2.7-5 6-5s6 2 6 5M14.5 19c.2-1.8 1.6-3 3.5-3s3 1.2 3.2 3" />
      </svg>
    ),
  },
];

const trustItems: { strong: string; label: string }[] = [
  { strong: "1,700+", label: "Fiverr Reviews" },
  { strong: "8+", label: "Years Design Experience" },
  { strong: "1,000+", label: "Projects Completed" },
  { strong: "Branding", label: "Packaging · Web · Social" },
];

function ContactHeroVisual() {
  return (
    <div className="ctc-hero-visual ctc-intake-visual" aria-hidden="true">
      <div className="ctc-hero-glow" />
      <div className="ctc-hero-pattern" />

      <div className="ctc-intake-card ctc-intake-main">
        <div className="ctc-intake-top">
          <span>Project Brief</span>
          <i>New</i>
        </div>
        <div className="ctc-intake-title">
          <strong>Let&apos;s Talk</strong>
          <span>Tell us what you&apos;re building.</span>
        </div>
        <div className="ctc-intake-fields">
          <span />
          <span />
          <span />
        </div>
        <div className="ctc-intake-services">
          <i>Brand Identity</i>
          <i>Website Design</i>
          <i>Packaging Design</i>
        </div>
        <span className="ctc-intake-submit">Send Inquiry</span>
      </div>

      <div className="ctc-intake-card ctc-intake-message">
        <span className="ctc-intake-label">Message</span>
        <strong>Ready to start?</strong>
        <p>Share your goals, timeline and service needs.</p>
      </div>

      <div className="ctc-intake-card ctc-intake-schedule">
        <span className="ctc-intake-label">Response Time</span>
        <strong>Reply within 24h</strong>
        <div className="ctc-intake-progress"><span /></div>
      </div>

      <div className="ctc-intake-card ctc-intake-service">
        <span className="ctc-intake-label">Selected Service</span>
        <div className="ctc-intake-chip-list">
          <i>Social Media Design</i>
          <i>Agency Support</i>
        </div>
      </div>

      <div className="ctc-intake-note">
        <span />
        Usually replies within 24 hours
      </div>
    </div>
  );
}

export default function ContactExperience() {
  return (
    <>
      <main className="as-page ctc-page">
        {/* 1. HERO */}
        <section className="as-hero ctc-hero">
          <div className="container ctc-hero-grid">
            <motion.div
              className="as-hero-copy ctc-hero-copy"
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              <span className="pill-tag">GET IN TOUCH</span>
              <h1>Let&apos;s Talk About Your Next Project</h1>
              <p>
                Whether you need brand identity, website design, packaging, social media visuals or
                agency support, share a few details and I&apos;ll suggest the best next step.
              </p>
              <div className="as-hero-actions">
                <Link href="/contact" className="btn btn-primary">Start Project Brief</Link>
                <Link href="/services" className="btn btn-outline">View Services</Link>
              </div>
            </motion.div>

            <motion.div
              className="as-hero-stage ctc-hero-stage"
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: smoothEase }}
            >
              <ContactHeroVisual />
            </motion.div>
          </div>
        </section>

        {/* 2. MAIN CONTACT */}
        <section className="as-section ctc-main-section">
          <div className="container ctc-main-grid" id="ctc-form">
            <motion.div
              className="ctc-main-form"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
            >
              <div className="ctc-form-head">
                <span className="pill-tag">PROJECT BRIEF</span>
                <h2>Tell me about your project</h2>
                <p>Share the essentials and I&apos;ll reply with the best next step, timeline and direction.</p>
              </div>
              <ContactFormPanel />
            </motion.div>

            <motion.aside
              className="ctc-info-card"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
            >
              <div className="ctc-info-glow" aria-hidden="true" />
              <span className="pill-tag pill-on-dark">DIRECT CONTACT</span>
              <h3>Prefer to email directly?</h3>
              <p>Send your project details by email and I&apos;ll get back with the best next step.</p>

              <ul className="ctc-info-list">
                <li>
                  <span className="ctc-info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
                    </svg>
                  </span>
                  <div>
                    <span className="ctc-info-label">Email</span>
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </div>
                </li>
                <li>
                  <span className="ctc-info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" /><path d="M8 14c1 1.5 2.5 2 4 2s3-.5 4-2M9 10h.01M15 10h.01" />
                    </svg>
                  </span>
                  <div>
                    <span className="ctc-info-label">Fiverr</span>
                    <a href="https://www.fiverr.com/block_design" target="_blank" rel="noopener noreferrer">
                      fiverr.com/block_design ↗
                    </a>
                  </div>
                </li>
                <li>
                  <span className="ctc-info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <div>
                    <span className="ctc-info-label">Response Time</span>
                    <span className="ctc-info-text">Usually replies within 24 hours</span>
                  </div>
                </li>
                <li>
                  <span className="ctc-info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" />
                    </svg>
                  </span>
                  <div>
                    <span className="ctc-info-label">Worldwide</span>
                    <span className="ctc-info-text">Remote design support available worldwide</span>
                  </div>
                </li>
              </ul>

              <div className="ctc-info-foot">
                <span className="ctc-info-foot-dot" aria-hidden="true" />
                Verified on Fiverr ·{" "}
                <a href="https://www.fiverr.com/block_design" target="_blank" rel="noopener noreferrer">
                  block_design
                </a>
              </div>
            </motion.aside>
          </div>
        </section>

        {/* 3. PROJECT TYPE CARDS */}
        <section className="as-section ctc-types-section">
          <div className="container">
            <div className="srv-intro">
              <span className="pill-tag">WHAT CAN I HELP WITH?</span>
              <h2>Choose the kind of support you need</h2>
            </div>

            <motion.div
              className="ctc-types-grid"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              {projectTypes.map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <Link href={item.href} className="ctc-type-card">
                    <span className="ctc-type-icon" aria-hidden="true">{item.icon}</span>
                    <span className="ctc-type-tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <span className="ctc-type-arrow" aria-hidden="true">
                      <svg viewBox="0 0 32 12" fill="none">
                        <path d="M0 6h28M22 1l6 5-6 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. TRUST STRIP */}
        <section className="as-section ctc-trust-section">
          <div className="container">
            <motion.div
              className="ctc-trust"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {trustItems.map((item) => (
                <motion.div key={item.label} className="ctc-trust-card" variants={fadeUp}>
                  <strong>{item.strong}</strong>
                  <span>{item.label}</span>
                </motion.div>
              ))}
              <motion.a
                href="https://www.fiverr.com/block_design"
                target="_blank"
                rel="noopener noreferrer"
                className="ctc-trust-card ctc-trust-card-link"
                variants={fadeUp}
              >
                <strong>Verified on Fiverr</strong>
                <span>fiverr.com/block_design ↗</span>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* 5. FINAL CTA */}
        <section className="as-section as-process-cta ctc-cta-section">
          <div className="container">
            <motion.div
              className="as-cta-panel"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
            >
              <div className="as-cta-glow" aria-hidden="true" />
              <span className="pill-tag pill-on-dark">READY TO START?</span>
              <h2>Have a brand, packaging or website project in mind?</h2>
              <p>
                Send the details and I&apos;ll help you understand the best direction, timeline and
                next step for your project.
              </p>
              <div className="as-cta-actions">
                <Link href="/contact" className="btn btn-primary">Start a Project</Link>
                <Link href="/services" className="btn btn-outline">View Services</Link>
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
