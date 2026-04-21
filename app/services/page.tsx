import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serviceStats, services } from "./serviceData";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Owalistic Sol services including Brand & Identity Design, Custom Web Development, and eCommerce & CMS website solutions.",
  alternates: {
    canonical: absoluteUrl("/services"),
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="inner-hero page-hero page-hero-wide">
          <span className="pill-tag">DIGITAL EXPERTISE</span>
          <h1>Services Designed for Impact</h1>
          <p>From strategic branding to robust eCommerce solutions, our digital capabilities are built for growth, clarity, and conversion.</p>
        </div>

        <section className="services services-overview" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="services-intro">
              <span className="pill-tag">WHAT WE BUILD</span>
              <h2>Three Core Services for a Stronger Digital Brand</h2>
              <p>Each service can stand alone or connect into a complete launch system: identity, website, commerce, content structure, and conversion support.</p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <Link key={service.title} href={`/services/${service.slug}`} className="service-card">
                  <img src={service.image} alt={service.alt} className="service-bg scrolled-in" />
                  <div className="service-overlay"></div>
                  <div className="service-content">
                    <div className="service-header">
                      <h3 className={`service-pill ${service.cls}`}>{service.title}</h3>
                      <div className="plus-icon">+</div>
                    </div>
                    <p className="service-desc">{service.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="service-stats-band">
          <div className="container">
            <div className="service-stats-grid">
              {serviceStats.map(([number, label]) => (
                <div className="service-stat" key={number}>
                  <strong>{number}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="approach">
          <div className="container">
            <div className="approach-grid">
              <div className="approach-content">
                <span className="pill-tag">OUR PROCESS</span>
                <h2>A Streamlined Workflow for Lasting Results</h2>
                <p>We keep the workflow clear from first call to launch, so every decision connects to your audience, business goals, and future growth.</p>
                <div className="approach-buttons">
                  <a href="/contact" className="btn btn-primary">Get Started</a>
                  <a href="/case-studies" className="btn btn-outline">Our Work</a>
                </div>
              </div>
              <div className="process-steps">
                <div className="process-step"><div className="step-number">1</div><div className="step-info"><h3>Discovery & Strategy</h3><p>We clarify your goals, audience, competitors, platform needs, and launch priorities.</p></div></div>
                <div className="process-step"><div className="step-number">2</div><div className="step-info"><h3>Design & Prototyping</h3><p>We shape the visual direction, page hierarchy, content flow, and user experience before development.</p></div></div>
                <div className="process-step"><div className="step-number">3</div><div className="step-info"><h3>Development & Integration</h3><p>We build responsive pages, configure systems, connect forms, analytics, commerce tools, or CMS workflows.</p></div></div>
                <div className="process-step"><div className="step-number">4</div><div className="step-info"><h3>Launch & Optimization</h3><p>We support testing, deployment, performance checks, handover, and post-launch improvements.</p></div></div>
              </div>
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
