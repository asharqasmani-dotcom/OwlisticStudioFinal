import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Owalistic Sol privacy policy covering website inquiries, project communication, and how client information is handled.",
  alternates: {
    canonical: absoluteUrl("/privacy"),
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <div className="inner-hero">
          <span className="pill-tag">PRIVACY POLICY</span>
          <h1>Privacy Policy</h1>
          <p>How Owalistic Sol handles website inquiries, project communication, and client information.</p>
        </div>

        <section className="page-content">
          <h2>Information We Collect</h2>
          <p>When you contact us through the website, we may collect your name, email address, service interest, and project details so we can respond to your inquiry.</p>

          <h2>How We Use Information</h2>
          <p>We use submitted information to communicate with you, prepare project recommendations, and improve our service experience.</p>

          <h2>Data Sharing</h2>
          <p>We do not sell your personal information. We only share details when required to deliver a requested service or comply with applicable obligations.</p>

          <h2>Contact</h2>
          <p>For privacy questions, email us at <a href="mailto:Hello@owalisticsol.com">Hello@owalisticsol.com</a>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
