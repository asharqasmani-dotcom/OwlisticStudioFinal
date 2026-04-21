import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { absoluteUrl } from "@/lib/site";
import { getServiceBySlug, services } from "../serviceData";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Owalistic Sol",
    };
  }

  return {
    title: `${service.title} | Owalistic Sol`,
    description: service.short,
    alternates: {
      canonical: absoluteUrl(`/services/${service.slug}`),
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <Header />
      <main>
        <div className="inner-hero service-inner-hero">
          <span className="pill-tag">SERVICE DETAILS</span>
          <div className="service-hero-copy">
            <h1 className="service-page-title">{service.title}</h1>
            <p className="service-page-subtitle">{service.short}</p>
            <div className="service-breadcrumb">
              <Link href="/services">All Services</Link>
              <span>/</span>
              <span>{service.title}</span>
            </div>
          </div>
        </div>

        <section className="service-detail-section" style={{ paddingTop: 0 }}>
          <div className="container">
            <article className="service-detail-card service-detail-page-card">
              <div className="service-detail-media">
                <img src={service.image} alt={service.alt} />
              </div>
              <div className="service-detail-content">
                <span className={`service-pill ${service.cls}`}>{service.title}</span>
                <h3>{service.short}</h3>
                <p>{service.intro}</p>

                <div className="service-detail-columns">
                  <div>
                    <h4>What We Provide</h4>
                    <ul>
                      {service.provided.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>How It Enhances Business</h4>
                    <ul>
                      {service.impact.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="tech-stack">
                  <h4>Technology & Tools</h4>
                  <div>
                    {service.technology.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="services related-services">
          <div className="container">
            <div className="services-intro">
              <span className="pill-tag">OTHER SERVICES</span>
              <h2>Explore the Rest of the Service Stack</h2>
              <p>Need more than one solution? We connect brand, web, and commerce into one cohesive digital system.</p>
            </div>

            <div className="services-grid">
              {relatedServices.map((item) => (
                <Link key={item.slug} href={`/services/${item.slug}`} className="service-card">
                  <img src={item.image} alt={item.alt} className="service-bg scrolled-in" />
                  <div className="service-overlay"></div>
                  <div className="service-content">
                    <div className="service-header">
                      <h3 className={`service-pill ${item.cls}`}>{item.title}</h3>
                      <div className="plus-icon">+</div>
                    </div>
                    <p className="service-desc">{item.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="container" style={{ textAlign: "center" }}>
            <span className="pill-tag" style={{ background: "var(--white)", color: "var(--orange)" }}>READY TO GROW?</span>
            <h2 className="cta-title">Launch Your Brand&apos;s<br />Next Digital Era</h2>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-dark">Get Started</Link>
              <Link href="/services" className="btn btn-white" style={{ color: "var(--orange)" }}>All Services</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
