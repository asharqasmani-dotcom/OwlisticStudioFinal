import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormPanel from "@/components/ContactFormPanel";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a branding, custom website, or eCommerce project with Owalistic Sol. Share your brief and connect through WhatsApp or email.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <div className="inner-hero">
          <span className="pill-tag">GET IN TOUCH</span>
          <h1>Let&apos;s Talk</h1>
          <p>Ready to start your next project? Drop us a line and let&apos;s discuss how we can elevate your digital presence.</p>
        </div>

        <section className="container">
          <div className="contact-wrapper">
            <ContactFormPanel />

            <div className="contact-info-panel">
              <h3>Direct Contact</h3>
              <p>Prefer to email directly? We typically respond within 24 business hours.</p>
              <div style={{ marginBottom: "40px" }}>
                <span className="pill-tag" style={{ background: "var(--orange)", color: "white", display: "inline-block", marginBottom: "10px" }}>EMAIL US</span><br />
                <a href={`mailto:${siteConfig.email}`} style={{ color: "var(--text-primary)", fontSize: "1.5rem", textDecoration: "underline", textUnderlineOffset: "4px" }}>{siteConfig.email}</a>
              </div>
              <div>
                <span className="pill-tag" style={{ background: "var(--teal)", color: "white", display: "inline-block", marginBottom: "10px" }}>STUDIO ADDRESS</span>
                <p style={{ color: "var(--text-primary)", fontSize: "1.25rem" }}>Pearl Heights Office No-2,<br />BE, ISB,<br />PAK</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
