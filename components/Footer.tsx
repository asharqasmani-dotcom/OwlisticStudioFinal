import Link from "next/link";
import { siteConfig } from "@/lib/site";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="mega-footer">
      <div className="ft-pattern" aria-hidden="true" />
      <div className="ft-glow" aria-hidden="true" />

      <div className="container ft-inner">
        <div className="ft-grid">
          <div className="ft-brand">
            <span className="ft-eyebrow">Let&apos;s talk</span>
            <h2 className="ft-headline">
              Have a brand, packaging or website project in mind?
            </h2>
            <a className="ft-email" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            <div className="ft-actions">
              <Link href="/contact" className="btn btn-primary ft-cta">
                Start a Project
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline ft-cta"
              >
                WhatsApp ↗
              </a>
            </div>
          </div>

          <div className="ft-links">
            <div className="ft-col">
              <h4>Pages</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="ft-col">
              <h4>Connect</h4>
              <ul>
                <li><a href={`mailto:${siteConfig.email}`}>Email</a></li>
                <li>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.fiverr.com/block_design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fiverr
                  </a>
                </li>
                <li>
                  <a
                    href="https://dribbble.com/block_design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>
            <div className="ft-col">
              <h4>Studio</h4>
              <p className="ft-address">
                {siteConfig.studioAddress.split(",").map((line, i) => (
                  <span key={i}>{line.trim()}<br /></span>
                ))}
              </p>
            </div>
          </div>
        </div>

        <div className="ft-bottom">
          <span className="ft-copy">© {year} Owlistic Studio. All rights reserved.</span>
          <div className="ft-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <Link href="/contact">Get in touch</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
