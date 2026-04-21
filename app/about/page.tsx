import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamShowcase from "@/components/ui/team-showcase";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Owalistic Sol, the team behind premium branding, custom websites, and eCommerce solutions for growth-focused brands.",
  alternates: {
    canonical: absoluteUrl("/about"),
  },
};

const teamMembers = [
  {
    id: "ashar-qasmani",
    name: "Ashar Qasmani",
    role: "Sr Software Eng",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    social: { linkedin: "#" },
  },
  {
    id: "syed-ibad-haider",
    name: "Syed Ibad Haider",
    role: "Sr Branding Strategist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    social: { linkedin: "#" },
  },
  {
    id: "design-team",
    name: "Design Team",
    role: "Visual Systems",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "development-team",
    name: "Development Team",
    role: "Web Engineering",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "brand-studio",
    name: "Brand Studio",
    role: "Creative Direction",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "growth-team",
    name: "Growth Team",
    role: "Launch Strategy",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <div className="inner-hero page-hero page-hero-tight">
          <span className="pill-tag">ABOUT US</span>
          <h1>Our Story</h1>
          <p>We are a premium digital agency committed to elevating brands and driving growth through exceptional web experiences.</p>
        </div>

        <section className="page-content about-page-content">
          <div className="about-story-block about-copy-block">
            <h2>The Owalistic Philosophy</h2>
            <p>Owalistic Sol was founded on a simple principle: digital presence should be memorable, strategic, and built to convert.</p>
            <p>Our team blends design, development, and brand thinking so every pixel, animation, and line of code supports your business goals.</p>
          </div>

          <div className="about-team-block">
            <div className="about-copy-block about-team-copy">
              <h2>Leading the Brand</h2>
              <p>Owalistic Sol is led by two senior specialists working with a wider team of designers, developers, and growth-focused creatives.</p>
            </div>
            <TeamShowcase members={teamMembers} />
          </div>
        </section>

        <section className="stats" style={{ marginBottom: "120px" }}>
          <div className="container">
            <span className="pill-tag">OUR IMPACT</span>
            <h2>Transforming Digital Brands with Expertise</h2>
            <div className="stats-grid">
              <div className="stat-card"><h3>11+ Years</h3><p>Digital Excellence</p></div>
              <div className="stat-card"><h3>800+ Brands</h3><p>Trusted Partnerships</p></div>
              <div className="stat-card"><h3>3000+</h3><p>Projects Completed</p></div>
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="container" style={{ textAlign: "center" }}>
            <span className="pill-tag" style={{ background: "var(--white)", color: "var(--orange)" }}>READY TO GROW?</span>
            <h2 className="cta-title">Launch Your Brand&apos;s<br />Next Digital Era</h2>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-dark">Get Started</a>
              <a href="/case-studies" className="btn btn-white" style={{ color: "var(--orange)" }}>Our Work</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
