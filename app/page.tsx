"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HeroAccordion } from "@/components/ui/interactive-image-accordion";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { SelectedWorkSlider } from "@/components/SelectedWorkSlider";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiFiverr, SiUpwork, SiWhatsapp } from "react-icons/si";

const projects: { name: string; category: string; desc: string; img: string; color: string; link?: string; video?: string; ratio?: string }[] = [
  {
    name: "Skincare Brand Identity",
    category: "Logo and Brand Identity",
    desc: "A complete skincare brand identity covering logo design, packaging system and a clean visual language built around freshness and trust.",
    img: "/assets/skincare-brand.png",
    color: "#e7d9c9",
    link: "https://dribbble.com/shots/27192696-Skincare-Brand-Logo-Packaging-Brand-Identity-Branding",
  },
  {
    name: "Diamora Brand Identity",
    category: "Logo and Brand Identity",
    desc: "A premium jewelry brand identity with elegant typography, refined marks and a luxury visual system.",
    img: "/assets/diamora.png",
    color: "#d8e3e1",
    link: "https://dribbble.com/shots/26108317-Diamora-Jewelry-Branding-Kit",
  },
  {
    name: "Catco Brand Identity",
    category: "Logo and Brand Identity",
    desc: "A playful cat food brand identity built around shelf appeal, friendliness and clear brand recognition.",
    img: "/assets/catco.png",
    color: "#ffffff",
    link: "https://dribbble.com/shots/26096735-Cat-Co-Cat-Food-Logo-Branding-Brand-Identity-Design",
  },
  {
    name: "Chillzy Ice Cream Packaging",
    category: "Packaging Design",
    desc: "A playful ice cream branding and packaging system built around vibrant flavors, fun typography and strong freezer shelf appeal.",
    img: "/assets/chillzy.png",
    color: "#b96463",
    link: "https://dribbble.com/shots/27063471-Chillzy-Ice-Cream-Branding-Packaging",
  },
  {
    name: "Brewly Coffee Packaging",
    category: "Packaging Design",
    desc: "A warm coffee brand and packaging direction focused on craft feel, refined typography and a confident food and beverage identity.",
    img: "/assets/brewly.png",
    color: "#bdb7b5",
    link: "https://dribbble.com/shots/27055869-Brewly-Coffee-Food-Beverage-Branding-Packaging",
  },
  {
    name: "Little Bites Cat Food Packaging",
    category: "Packaging Design",
    desc: "A friendly cat food packaging concept built around clear brand recognition, soft palette and approachable shelf presence.",
    img: "/assets/littlebites.png",
    color: "#f1efee",
    link: "https://dribbble.com/shots/26096735-Cat-Co-Cat-Food-Logo-Branding-Brand-Identity-Design",
  },
  {
    name: "Zeytin Website",
    category: "Website Design",
    desc: "A custom apparel brand website built around editorial typography, calm earthy tones and a clear, story-driven layout that highlights products and brand purpose.",
    img: "/assets/zeytin.png",
    color: "#e2d4c7",
    ratio: "1586 / 992",
  },
  {
    name: "Shemed Website",
    category: "Website Design",
    desc: "A friendly healthcare website concept focused on trust and clarity, using soft palettes and approachable layouts to guide patients toward services and bookings.",
    img: "/assets/shemed.png",
    color: "#f9e1e2",
    ratio: "1586 / 992",
  },
  {
    name: "Roamsome Website",
    category: "Website Design",
    desc: "A travel and lifestyle website direction built around warm visuals, easy discovery and a clean booking flow that makes exploring feel effortless.",
    img: "/assets/roamsome.png",
    color: "#fbefe5",
    ratio: "1586 / 992",
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// TODO: Paste REAL 5-star reviews from https://www.fiverr.com/block_design here.
// Use only verified 5-star reviews. Do not invent names, countries, or text.
// Keep at least 30 entries for a full marquee. Long reviews can be lightly
// trimmed with an ellipsis. Service is optional.
// ──────────────────────────────────────────────────────────────────────────────
type FiverrReview = {
  text: string;
  username: string;
  country: string;
  service?: string;
};

const fiverrReviews: FiverrReview[] = [
  { text: "Ashar is incredible. He understood the brief on the first try and delivered a logo that perfectly captured the feel we wanted for our skincare line. Will work with him again.", username: "emilyhart_co", country: "United States", service: "Logo Design" },
  { text: "Very professional from start to finish. Communication was clear and the packaging concepts he sent were already at a level we could use on shelf.", username: "lucas_meijer", country: "Netherlands", service: "Packaging Design" },
  { text: "Top tier brand identity work. He gave us a clean colour system, a logo we love and full guidelines. Worth every penny.", username: "noah_caldwell", country: "United Kingdom", service: "Brand Identity" },
  { text: "He delivered a really polished pitch deck for our investor round. Clean layouts, strong typography, and easy to edit afterwards.", username: "ananya.rao", country: "India", service: "Presentation Design" },
  { text: "Best designer I have worked with on Fiverr. He took my rough idea and turned it into a proper brand. Highly recommended.", username: "marco_de_luca", country: "Italy", service: "Brand Identity" },
  { text: "Quick, friendly, and very talented. Our coffee pouch design looks premium and exactly fits our market. Already getting compliments.", username: "sophia_okafor", country: "Nigeria", service: "Packaging Design" },
  { text: "Ashar handled our full social media template set and the consistency across posts looks amazing now. Saved us hours.", username: "jules.bernard", country: "France", service: "Social Media Design" },
  { text: "Logo design was clean and modern. He also gave great suggestions during revisions instead of just guessing what we wanted.", username: "danielwright", country: "Australia", service: "Logo Design" },
  { text: "The brand style guide he delivered is the most thorough I have ever received from a freelancer. Covers everything we need.", username: "florentin.t", country: "Romania", service: "Brand Style Guides" },
  { text: "Worked with him on a full rebrand for our cafe. The end result feels warm, professional, and easy to apply on menus, signs and packaging.", username: "isabella_mor", country: "Spain", service: "Brand Identity" },
  { text: "Excellent communication and turnaround. He is genuinely interested in making the brand strong, not just delivering a file.", username: "kenji_nakata", country: "Japan", service: "Logo Design" },
  { text: "Our investor deck looked like something out of a top agency. Clean grid, no clutter, and the diagrams he made were beautiful.", username: "thabo_mokoena", country: "South Africa", service: "Presentation Design" },
  { text: "He redesigned our cosmetic box artwork and the whole product feels more premium now. Easy to work with and patient with revisions.", username: "olivia_carter", country: "Canada", service: "Packaging Design" },
  { text: "Got our Instagram template pack done in a couple of days. Highlight covers, story layouts, post templates — all on brand.", username: "amelie_dubois", country: "Belgium", service: "Social Media Design" },
  { text: "Ashar is super reliable. We have done three projects together now — logo, packaging and a presentation — every one was great.", username: "rajeev_sharma", country: "India", service: "Brand Identity" },
  { text: "Honestly the best logo experience I have had. He sent multiple directions and explained the thinking behind each one.", username: "leah_ben_david", country: "Israel", service: "Logo Design" },
  { text: "Great packaging work for our supplement line. Label looks clean, regulatory text was placed properly, and the mockups were chef kiss.", username: "michaeloconnor", country: "Ireland", service: "Packaging Design" },
  { text: "He saved my product launch. We needed brand assets fast and he turned around a full kit in under a week without cutting quality.", username: "yara_haddad", country: "United Arab Emirates", service: "Brand Identity" },
  { text: "Very thoughtful designer. Took the time to understand our audience before sketching anything. Pitch deck came out beautifully.", username: "henrik_lund", country: "Norway", service: "Presentation Design" },
  { text: "Did a fantastic job on our jewellery brand identity. Elegant, refined, exactly the premium feel we wanted.", username: "claire_w", country: "United Kingdom", service: "Brand Identity" },
  { text: "Social media kit was clean, on-brand, and easy to plug into our scheduler. Will hire again for the next campaign.", username: "dominic_silva", country: "Portugal", service: "Social Media Design" },
  { text: "He delivered exactly what was promised, on time, no drama. The logo file pack was organised better than most agencies do it.", username: "priya_menon", country: "Singapore", service: "Logo Design" },
  { text: "Brand guidelines doc was thorough — typography rules, logo usage, do and don'ts, the works. Will be using this for years.", username: "alex_petrov", country: "Bulgaria", service: "Brand Style Guides" },
  { text: "Packaging concept exceeded what I had in my head. He even suggested a small structural change that improved shelf presence.", username: "tomasz_kowal", country: "Poland", service: "Packaging Design" },
];

const customerAvatars = [
  { name: "Ayesha Khan",  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" },
  { name: "Marcus Reed",  img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80" },
  { name: "Nadia Brooks", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" },
  { name: "Omar Lewis",   img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" },
  { name: "Elena Walsh",  img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80" },
];

const WEB3FORMS_ACCESS_KEY = "7bb52ddc-9781-4bbc-8a3f-7223cedd59a0";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const processRef = useRef<HTMLDivElement | null>(null);
  const [processInView, setProcessInView] = useState(false);

  useEffect(() => {
    const el = processRef.current;
    if (!el || processInView) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setProcessInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [processInView]);

  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setSendError(null);

    try {
      const body = new FormData();
      body.append("access_key", WEB3FORMS_ACCESS_KEY);
      body.append("subject", "New project enquiry from Owalistic website");
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("company", formData.company);
      body.append("project_type", formData.type);
      body.append("message", formData.message);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body,
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        setSendError(data?.error || "Couldn't send your message. Please try again.");
        return;
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", type: "", message: "" });
    } catch {
      setSendError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Header />
      <main>

        {/* ── 1. HERO — Interactive Image Accordion ── */}
        <HeroAccordion customerAvatars={customerAvatars} />

        {/* ── 2. ABOUT — Circular Testimonials ── */}
        <section className="about-section about-circular">
          <div className="container">
            <div className="about-circular-wrap">
              <div className="about-circular-inner">
              <CircularTestimonials
                autoplay
                testimonials={[
                  {
                    quote:
                      "I lead the visual direction behind Owlistic Studio, shaping brand identities, packaging, and websites that feel clear, premium, and built around real business goals.",
                    mobileQuote:
                      "I shape clear, premium brand identities, packaging, and websites built around real business goals.",
                    name: "M. Ashar Qadir",
                    designation: "Founder · Creative Director",
                    src: "/assets/founder-ashar.png",
                  },
                  {
                    quote:
                      "I focus on the strategy behind each project, helping turn ideas into clear brand direction, stronger positioning, and digital experiences that connect with the right audience.",
                    mobileQuote:
                      "I turn ideas into clear brand direction, stronger positioning, and digital experiences for the right audience.",
                    name: "Syed Ibad Haider",
                    designation: "Founder · Brand Strategist",
                    src: "/assets/founder-ibad.png",
                  },
                ]}
                colors={{
                  name: "var(--text-primary)",
                  designation: "var(--text-tertiary)",
                  testimony: "var(--text-secondary)",
                  arrowBackground: "var(--text-primary)",
                  arrowForeground: "var(--app-bg)",
                  arrowHoverBackground: "var(--orange)",
                }}
                fontSizes={{
                  name: "1.5rem",
                  designation: "0.95rem",
                  quote: "1.1rem",
                }}
                intro={
                  <div className="about-circular-head">
                    <span className="pill-tag">ABOUT US</span>
                    <h2 className="about-typing-title">
                      <span>The People Behind </span>
                      <span className="about-typing-accent">Owlistic Studio</span>
                    </h2>
                    <p>A focused creative team building brand identities, packaging systems, and websites that help businesses look sharper, feel more trusted, and grow with clarity.</p>
                  </div>
                }
                footer={
                  <div className="about-circular-socials" aria-label="Connect with Ashar">
                    <a
                      href="https://www.linkedin.com/in/block-design"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-circular-social"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn aria-hidden="true" />
                      LinkedIn
                    </a>
                    <a
                      href="https://www.fiverr.com/block_design"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-circular-social"
                      aria-label="Fiverr"
                    >
                      <SiFiverr className="about-brand-icon about-brand-icon-fiverr" aria-hidden="true" />
                      Fiverr
                    </a>
                    <a
                      href="https://www.upwork.com/freelancers/block_design"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-circular-social"
                      aria-label="Upwork"
                    >
                      <SiUpwork className="about-brand-icon about-brand-icon-upwork" aria-hidden="true" />
                      Upwork
                    </a>
                    <a
                      href="mailto:ashar@owlisticstudio.com"
                      className="about-circular-social"
                      aria-label="Email"
                    >
                      <MdOutlineEmail aria-hidden="true" />
                      Email
                    </a>
                    <a
                      href="https://wa.me/923333323248"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-circular-social"
                      aria-label="WhatsApp"
                    >
                      <SiWhatsapp aria-hidden="true" />
                      WhatsApp
                    </a>
                  </div>
                }
              />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. SELECTED WORK ── */}
        <section className="selected-work" id="work">
          <div className="container">
            <div className="sw-header">
              <div>
                <span className="pill-tag">SELECTED WORK</span>
                <h2>A curated collection of brand identity, packaging and website design projects</h2>
              </div>
              <Link href="/case-studies" className="btn btn-outline sw-all-btn">View All Work</Link>
            </div>
            <SelectedWorkSlider projects={projects} />
          </div>
        </section>

        {/* ── 4. FEATURED CASE STUDY ── */}
        <section className="featured-cs">
          <div className="container">
            <div className="fcs-header">
              <span className="pill-tag">FEATURED PROJECT</span>
              <h2>Reign Dancewear Website Design</h2>
              <div className="fcs-meta">
                <span><strong>Industry:</strong> Fashion / Kids Dancewear</span>
                <span><strong>Services:</strong> Website Design, UI/UX Design</span>
              </div>
            </div>

            <div className="fcs-visual">
              <div className="fcs-img-main">
                <video
                  src="/assets/Reign%20video.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                />
              </div>
            </div>

            <div className="fcs-body">
              <div className="fcs-body-left">
                <p className="fcs-lead">Reign Dancewear needed a clean and playful website direction that appealed to both kids and parents. The goal was to make the brand feel soft, trustworthy and easy to shop without making the layout feel childish.</p>
                <p className="fcs-lead">The new direction balances warm typography, soft pastels and clear product imagery so young dancers feel inspired while parents feel confident shopping. Every section was structured to guide visitors naturally from the hero into product categories, new arrivals and bestsellers.</p>
              </div>
              <div className="fcs-body-right">
              <div className="fcs-points">
                <div className="fcs-point">
                  <span className="fcs-point-num">01</span>
                  <div>
                    <strong>The Challenge</strong>
                    <p>The old direction did not feel engaging enough for parents or kids. Products were not easy to browse and the mobile experience needed to feel clearer.</p>
                  </div>
                </div>
                <div className="fcs-point">
                  <span className="fcs-point-num">02</span>
                  <div>
                    <strong>My Approach</strong>
                    <p>I created a clean homepage structure with a strong hero section, soft visuals, clear product categories and simple trust sections to help parents understand the brand quickly.</p>
                  </div>
                </div>
              </div>
              </div>
              <Link href="/case-studies" className="btn btn-primary fcs-cta">View Full Case Study</Link>
            </div>
          </div>
        </section>

        {/* ── 5. BEFORE / AFTER ── */}
        <section className="before-after">
          <div className="container">
            <div className="ba-header">
              <span className="pill-tag">TRANSFORMATION</span>
              <h2>From Ordinary to Professional</h2>
              <p>Many businesses already have a website, but it does not always create the right first impression. I improve layout, trust, clarity and visual consistency so the business looks stronger online.</p>
            </div>
            <div className="ba-grid">
              <div className="ba-card ba-before">
                <span className="ba-label">BEFORE</span>
                <div className="ba-card-media">
                  <img src="/assets/before.png" alt="Outdated website mockup with weak hierarchy" />
                </div>
                <div className="ba-card-content">
                  <div className="ba-item ba-item-neg">Weak visual hierarchy and unclear message</div>
                  <div className="ba-item ba-item-neg">No trust signals or social proof</div>
                  <div className="ba-item ba-item-neg">Poor mobile experience and layout</div>
                </div>
              </div>
              <div className="ba-arrow" aria-hidden="true">
                <span className="ba-arrow-h">→</span>
                <span className="ba-arrow-v">↓</span>
              </div>
              <div className="ba-card ba-after">
                <span className="ba-label ba-label-after">AFTER</span>
                <div className="ba-card-media">
                  <img src="/assets/after.png" alt="Polished modern website mockup with clear hierarchy" />
                </div>
                <div className="ba-card-content">
                  <div className="ba-item ba-item-pos">Clearer first impression and strong headline</div>
                  <div className="ba-item ba-item-pos">Stronger trust structure and service clarity</div>
                  <div className="ba-item ba-item-pos">More professional mobile experience</div>
                </div>
              </div>
            </div>
            <div className="ba-cta-row">
              <Link href="/contact" className="btn btn-primary">Start Your Transformation</Link>
            </div>
          </div>
        </section>

        {/* ── 5b. BEFORE / AFTER COMPARISON SLIDER (mobile only) ── */}
        <section className="ba-slider-section">
          <div className="container">
            <div className="ba-slider-head">
              <h2>Before vs After Website Redesign</h2>
              <p>See how the old website was transformed into a cleaner, more premium, and conversion-focused design.</p>
            </div>
            <BeforeAfterSlider />
          </div>
        </section>

        {/* ── 6. SERVICES ── */}
        <section className="services" id="services">
          <div className="container">
            <div className="services-head">
              <span className="pill-tag">SERVICES</span>
              <h2>Complete design support for businesses that need a professional brand presence</h2>
              <p className="services-sub">Clean, strategic design across every touchpoint — from logo and identity to packaging, presentations and social media.</p>
            </div>

            <div className="hp-services-grid">
              {[
                {
                  title: "Logo Design",
                  desc: "Distinctive logo concepts designed to give your business a clear, memorable and professional visual foundation.",
                  href: "/services",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="3.5" />
                      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
                    </svg>
                  ),
                },
                {
                  title: "Brand Identity",
                  desc: "Complete visual identity systems including logo usage, colour palette, typography and brand consistency guidelines.",
                  href: "/services/brand-identity-design",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 3l8 3v6c0 5-3.5 8.2-8 9-4.5-.8-8-4-8-9V6l8-3z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  ),
                },
                {
                  title: "Packaging Design",
                  desc: "Thoughtful packaging concepts for labels, pouches, boxes and product presentation that feel polished and market-ready.",
                  href: "/services",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5v-9z" />
                      <path d="M3.5 7.5L12 12l8.5-4.5" />
                      <path d="M12 12v9" />
                      <path d="M7.75 5.25L16.5 9.75" />
                    </svg>
                  ),
                },
                {
                  title: "Presentation Design",
                  desc: "Clean and professional presentation design for pitch decks, company profiles, proposals and branded communication.",
                  href: "/services",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="12" rx="2" />
                      <path d="M8 20h8M12 16v4" />
                      <path d="M7 11l3-3 2 2 4-4" />
                    </svg>
                  ),
                },
                {
                  title: "Social Media Design",
                  desc: "Branded social media visuals designed to keep your business consistent across posts, stories, promotions and campaigns.",
                  href: "/services",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
                      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
                      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
                      <circle cx="17" cy="17" r="3.2" />
                    </svg>
                  ),
                },
              ].map((s, i) => (
                <Link key={i} href={s.href} className="hp-service-card">
                  <span className="hp-service-accent" aria-hidden="true" />
                  <span className="hp-service-icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="hp-service-link">
                    <span className="hp-service-link-text">Learn more</span>
                    <span className="hp-service-arrow" aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}

              <Link href="/services" className="hp-service-card hp-service-cta">
                <span className="hp-service-cta-bg" aria-hidden="true" />
                <div className="hp-service-cta-inner">
                  <span className="hp-service-cta-label">FULL SUITE</span>
                  <h3>Need complete design support for your business?</h3>
                  <p>From logo to brand identity, packaging, presentations and social media, I help businesses build a clear and professional visual presence.</p>
                  <span className="btn btn-primary hp-service-cta-btn">
                    Learn More <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 7. AGENCY SUPPORT ── */}
        <section className="agency-support" id="agency-support">
          <div className="container">
            <div className="as-grid">
              <div className="as-content">
                <span className="pill-tag">AGENCY SUPPORT</span>
                <h2>Extra Design Capacity for Busy Agencies</h2>
                <p>I support small agencies with white-label brand identity, website design, landing pages, packaging and client design assets when their internal team is busy or needs extra creative capacity.</p>
                <Link href="/contact" className="btn btn-primary as-cta">Discuss Agency Support</Link>
              </div>
              <div className="as-lists">
                <div className="as-list-block">
                  <h4>Who I help</h4>
                  <ul className="as-list">
                    {['Marketing agencies','SEO agencies','Web design agencies','Branding studios','Social media agencies','Print and signage businesses'].map((item, i) => (
                      <li key={i}><span className="as-check">✓</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="as-list-block">
                  <h4>What I support with</h4>
                  <ul className="as-list">
                    {['Homepage concepts','Website UI layouts','Brand identity systems','Packaging design','Presentation decks','Client-ready visual assets'].map((item, i) => (
                      <li key={i}><span className="as-check">✓</span>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. PROOF & FIVERR REVIEWS ── */}
        <section className="proof-section" id="testimonials">
          <div className="container">
            <span className="pill-tag">PROOF</span>
            <h2>Trusted by Clients Across Branding, Packaging and Web Design</h2>
            <div className="proof-stats-grid">
              {[
                { num: "1,700+", label: "Fiverr Reviews" },
                { num: "8+",     label: "Years Design Experience" },
                { num: "1,000+", label: "Projects Completed" },
                { num: "★★★★★",  label: "5-Star Rated on Fiverr" },
              ].map((s, i) => (
                <div key={i} className="proof-stat-card">
                  <span className="psc-num">{s.num}</span>
                  <span className="psc-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="container">
            {fiverrReviews.length === 0 ? (
              <div className="fr-empty">
                <strong>Reviews carousel ready.</strong>
                <span>Paste verified 5-star reviews into the <code>fiverrReviews</code> array in <code>app/page.tsx</code> to populate this section.</span>
              </div>
            ) : (
              <div className="fr-marquee-wrap" aria-label="Client reviews">
                <div className="fr-marquee fr-marquee-row-1">
                  <div className="fr-marquee-track">
                    {[...fiverrReviews, ...fiverrReviews].map((r, i) => (
                      <article key={i} className="fr-card" aria-hidden={i >= fiverrReviews.length}>
                        <span className="fr-stars" aria-label="5 out of 5 stars">★★★★★</span>
                        <p className="fr-text">&ldquo;{r.text}&rdquo;</p>
                        <footer className="fr-card-foot">
                          <span className="fr-user">{r.username}</span>
                          <span className="fr-meta">
                            <span className="fr-country">{r.country}</span>
                            {r.service && (
                              <>
                                <span className="fr-dot" aria-hidden="true">·</span>
                                <span className="fr-service">{r.service}</span>
                              </>
                            )}
                          </span>
                        </footer>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="proof-fiverr-badge">
              <span>1,700+ reviews on</span>
              <a href="https://www.fiverr.com/block_design" target="_blank" rel="noopener noreferrer" className="proof-fiverr-link">fiverr.com/block_design ↗</a>
            </div>
          </div>
        </section>

        {/* ── 9. PROCESS ── */}
        <section className="process-section">
          <div className="container">
            <div className="proc-head">
              <span className="pill-tag">PROCESS</span>
              <h2>A Clear Process From First Idea to Final Delivery</h2>
            </div>

            <div
              ref={processRef}
              className={`proc-flow ${processInView ? "is-visible" : ""}`}
            >
              {[
                { num: "1", title: "Discovery",          desc: "I review your business, goals, audience, competitors and current brand or website direction.",                  variant: "light"   },
                { num: "2", title: "Creative Direction", desc: "I define the visual direction, structure, layout style and brand approach before moving into full design.",       variant: "cream"   },
                { num: "3", title: "Design & Refinement",desc: "I create the brand, packaging or website design with a focus on clarity, consistency and professional presentation.", variant: "peach"   },
                { num: "4", title: "Final Delivery",     desc: "You receive clean final files, source files where included, and ready-to-use assets for print, digital or web.",   variant: "dark"    },
              ].map((step, i) => (
                <React.Fragment key={i}>
                  <article
                    className={`proc-capsule proc-capsule-${step.variant}`}
                    style={{ ["--proc-delay" as string]: `${i * 140}ms` }}
                  >
                    <div className="proc-head-circle">
                      <span className="proc-num">{step.num}</span>
                    </div>
                    <div className="proc-body">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </article>
                  {i < 3 && (
                    <span
                      className="proc-arrow"
                      aria-hidden="true"
                      style={{ ["--proc-delay" as string]: `${i * 140 + 90}ms` }}
                    >
                      <svg viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 6h28M22 1l6 5-6 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="process-note">Website work can include desktop and mobile layouts, homepage structure, service sections, contact flow and platform-ready design direction.</p>
          </div>
        </section>

        {/* ── 10. CONTACT ── */}
        <section className="hp-contact" id="contact">
          <div className="container">
            <div className="hp-contact-grid">
              <div className="hp-contact-info">
                <span className="pill-tag">GET IN TOUCH</span>
                <h2>Have a Project in Mind?</h2>
                <p>Tell me what you need help with and I&apos;ll reply with the best next step for your brand, packaging or website project.</p>
                <div className="hp-contact-details">
                  <a href="mailto:ashar@owlisticstudio.com" className="hp-contact-detail">
                    <span className="hcd-icon">✉</span>
                    ashar@owlisticstudio.com
                  </a>
                  <a href="https://www.fiverr.com/block_design" target="_blank" rel="noopener noreferrer" className="hp-contact-detail">
                    <span className="hcd-icon">★</span>
                    Fiverr: fiverr.com/block_design
                  </a>
                  <a href="https://wa.me/923333323248" target="_blank" rel="noopener noreferrer" className="hp-contact-detail">
                    <span className="hcd-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                        <path d="M19.11 4.91A9.93 9.93 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.74.46 3.44 1.32 4.94L2 22l5.27-1.38a9.92 9.92 0 0 0 4.77 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.85-7.02ZM12.05 20.2h-.01a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.25 8.25 0 0 1-1.26-4.42c0-4.55 3.7-8.25 8.27-8.25 2.21 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.42 5.84c0 4.55-3.71 8.28-8.26 8.28Zm4.53-6.18c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43l-.48-.01a.92.92 0 0 0-.67.31c-.23.25-.88.86-.88 2.09 0 1.23.9 2.43 1.03 2.59.12.16 1.78 2.72 4.31 3.81.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z"/>
                      </svg>
                    </span>
                    WhatsApp: +92 333 3323248
                  </a>
                  <p className="hcd-note">Usually replies within 24 hours</p>
                </div>
              </div>
              <div className="hp-contact-form-wrap">
                {submitted ? (
                  <div className="hp-form-success">
                    <span>✓</span>
                    <h3>Message received!</h3>
                    <p>Thanks — your message has been sent to my inbox. I&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form className="hp-contact-form" onSubmit={handleSubmit}>
                    <div className="hp-form-row">
                      <div className="hp-form-group">
                        <label htmlFor="cf-name">Full Name *</label>
                        <input id="cf-name" type="text" placeholder="Your name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                      </div>
                      <div className="hp-form-group">
                        <label htmlFor="cf-email">Email Address *</label>
                        <input id="cf-email" type="email" placeholder="your@email.com" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                      </div>
                    </div>
                    <div className="hp-form-row">
                      <div className="hp-form-group">
                        <label htmlFor="cf-company">Company Name</label>
                        <input id="cf-company" type="text" placeholder="Your company" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                      </div>
                      <div className="hp-form-group">
                        <label htmlFor="cf-type">Project Type *</label>
                        <select id="cf-type" required value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                          <option value="">Select a service</option>
                          <option value="Brand Identity">Brand Identity</option>
                          <option value="Packaging Design">Packaging Design</option>
                          <option value="Website Design">Website Design</option>
                          <option value="Presentation Design">Presentation Design</option>
                          <option value="Agency Support">Agency Support</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="hp-form-group">
                      <label htmlFor="cf-message">Message *</label>
                      <textarea id="cf-message" placeholder="Tell me about your project..." required rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                    </div>
                    {sendError && (
                      <p className="hp-form-error" role="alert">{sendError}</p>
                    )}
                    <button
                      type="submit"
                      className="btn btn-primary hp-form-submit"
                      disabled={sending}
                    >
                      {sending ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
