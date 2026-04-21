import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore selected Owalistic Sol case studies across tech, eCommerce, lifestyle, and SaaS brand and website transformation work.",
  alternates: {
    canonical: absoluteUrl("/case-studies"),
  },
};

const cases = [
  {
    tag: "TECH STARTUP",
    title: "Driving Conversions: Transforming a Tech Startup's Identity",
    summary: "A conversion-focused redesign that clarified the offer, improved trust, and gave the startup a sharper digital presence for inbound growth.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80",
    alt: "Tech startup strategy meeting",
    large: true,
  },
  {
    tag: "ECOMMERCE",
    title: "Scaling E-commerce: A Fashion Brand's Growth",
    summary: "We streamlined the storefront experience, strengthened product storytelling, and built a cleaner purchase journey for higher order confidence.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    alt: "Ecommerce team reviewing systems",
    large: false,
  },
  {
    tag: "LIFESTYLE",
    title: "Modernizing Operations: Lifestyle D2C Shift",
    summary: "A refreshed customer experience, faster content publishing, and a more flexible structure for ongoing campaigns and launches.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    alt: "Lifestyle founder portrait",
    large: false,
  },
  {
    tag: "SAAS PLATFORM",
    title: "Building Trust: A B2B Software Overhaul Journey",
    summary: "Positioning, UX cleanup, and a calmer interface system helped the platform communicate capability with more authority.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80",
    alt: "SaaS founder portrait",
    large: true,
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="inner-hero page-hero page-hero-tight">
          <span className="pill-tag">OUR PORTFOLIO</span>
          <h1>Success Stories</h1>
          <p>Real-world examples of how Owalistic Sol elevates digital presence and business outcomes.</p>
        </div>

        <section className="case-studies" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="cs-grid">
              {cases.map((item) => (
                <article key={item.title} className={item.large ? "cs-hero-card" : "cs-sm-card"}>
                  <img src={item.image} alt={item.alt} className={item.large ? "cs-img-large" : "cs-img-small"} />
                  <div className="cs-card-body">
                    <span className="pill-tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="container" style={{ textAlign: "center" }}>
            <span className="pill-tag" style={{ background: "var(--white)", color: "var(--orange)" }}>READY TO GROW?</span>
            <h2 className="cta-title">Launch Your Brand&apos;s<br />Next Digital Era</h2>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-dark">Get Started</a>
              <Link href="/services" className="btn btn-white" style={{ color: "var(--orange)" }}>View Services</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
