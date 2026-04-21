"use client";

import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Matter from "matter-js";

export default function Home() {
  const industriesRef = useRef<HTMLDivElement>(null);
  
  // Scrubber animation logic
  const { scrollY } = useScroll();
  const collageX = useTransform(scrollY, [0, 1800], [0, -600]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Physics Pills Initialization
    const initPhysics = () => {
      if (prefersReducedMotion) return;

      const section = industriesRef.current;
      if (!section || section.dataset.physicsReady === 'true') return;

      const cloud = section.querySelector('.pill-cloud') as HTMLElement;
      const pillElements = Array.from(section.querySelectorAll('.cloud-pill')) as HTMLElement[];

      if (!cloud || !pillElements.length) return;
      section.dataset.physicsReady = 'true';

      const { Engine, Runner, Bodies, Composite, Body, Events } = Matter;
      const engine = Engine.create();
      const runner = Runner.create();
      const width = cloud.clientWidth;
      const height = cloud.clientHeight;
      const wallThickness = 120;
      const floorY = height + 42;
      const pillBodies: { pill: HTMLElement, body: Matter.Body }[] = [];

      engine.gravity.y = 1.15;

      const boundaries = [
        Bodies.rectangle(width / 2, floorY, width + wallThickness * 2, wallThickness, { isStatic: true }),
        Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 3, { isStatic: true }),
        Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 3, { isStatic: true })
      ];

      Composite.add(engine.world, boundaries);

      pillElements.forEach((pill, index) => {
        const rect = pill.getBoundingClientRect();
        const pillWidth = rect.width;
        const pillHeight = rect.height;
        const laneWidth = width / pillElements.length;
        const startX = laneWidth * index + laneWidth * (0.2 + Math.random() * 0.6);
        const startY = -80 - Math.random() * 200;
        const angle = (Math.random() - 0.5) * 0.8;
        
        const body = Bodies.rectangle(startX, startY, pillWidth, pillHeight, {
          restitution: 0.5,
          friction: 0.5,
          frictionAir: 0.02,
          density: 0.002,
          chamfer: { radius: pillHeight / 2 }
        });

        Body.rotate(body, angle);
        Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 5,
          y: Math.random() * 2
        });
        
        pillBodies.push({ pill, body });
        Composite.add(engine.world, body);
      });

      cloud.classList.add('physics-ready');
      Runner.run(runner, engine);

      const syncPills = () => {
        pillBodies.forEach(({ pill, body }) => {
          pill.style.transform = `translate(${body.position.x - pill.offsetWidth / 2}px, ${body.position.y - pill.offsetHeight / 2}px) rotate(${body.angle}rad)`;
        });
      };

      Events.on(engine, 'afterUpdate', syncPills);
    };

    // Scroll Observer for sections (matching script.js)
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -8% 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
            
            const bg = target.querySelector('.service-bg');
            if (bg) bg.classList.add('scrolled-in');
            
            if (target.classList.contains('industries')) {
                initPhysics();
            }
        }
      });
    }, observerOptions);

    const animElements = document.querySelectorAll('section h2, .service-card, .stat-card, .process-step, .case-studies, .industries');
    animElements.forEach(el => {
        const target = el as HTMLElement;
        if (prefersReducedMotion) {
          target.style.opacity = '1';
          target.style.transform = 'none';
        } else {
          target.style.opacity = '0';
          target.style.transform = 'translateY(30px)';
          target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
          observer.observe(el);
        }
    });

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
      quote: "Partnering with Owalistic Sol was a game-changer for us. They delivered top-tier solutions tailored to our needs.",
      name: "Sophia L.",
      role: "Brand Founder",
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
      quote: "The final site was stunning and aligned perfectly with our core values.",
      name: "Alex T.",
      role: "E-com Director",
    },
    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
      quote: "Their branding direction gave our launch the confidence and clarity it needed.",
      name: "Marcus V.",
      role: "Agency CEO",
    },
  ];

  const customerAvatars = [
    {
      name: "Ayesha Khan",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "Marcus Reed",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "Nadia Brooks",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "Omar Lewis",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "Elena Walsh",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    },
  ];

  const logoCloudItems = [
    "Owalistic",
    "Agencies",
    "Startups",
    "D2C Brands",
    "SaaS Teams",
    "Studios",
    "Retail",
    "Commerce",
  ];

  return (
    <>
      <Header />
      <main>
        {/* --- Hero Section --- */}
        <section className="hero">
          <div className="container">
            <span className="pill-tag">BRANDING & WEB EXPERTS</span>
            <h1>Impactful Branding & Web Solutions</h1>
            <p className="hero-subtitle">Delivering premium, outcome-focused website solutions that elevate brands, engage audiences and accelerate digital growth.</p>
            <div className="hero-action-row">
              <div className="hero-buttons">
                <Link href="/contact" className="btn btn-primary">Get Started</Link>
                <Link href="/services" className="btn btn-outline">Learn More</Link>
              </div>

              <div className="hero-social-proof">
                <div className="proof-copy">
                  <div className="proof-stars">★★★★★</div>
                  <p>Thousands of happy customers</p>
                </div>
                <div className="avatar-stack">
                  {customerAvatars.map((avatar) => (
                    <div key={avatar.name} className="proof-avatar" data-name={avatar.name}>
                      <img src={avatar.img} alt={avatar.name} />
                    </div>
                  ))}
                  <div className="proof-avatar proof-more" data-name="More happy customers">+</div>
                </div>
              </div>
            </div>

            <div className="hero-collage">
               <motion.div className="collage-scrub" style={{ x: collageX }}>
                  <div className="collage-track">
                    <div className="collage-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=60')" }}></div>
                    <div className="collage-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=60')" }}></div>
                    <div className="collage-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=60')" }}></div>
                    <div className="collage-item" style={{ background: "var(--orange)" }}></div>
                    <div className="collage-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=60')" }}></div>
                    <div className="collage-item" style={{ background: "var(--teal)" }}></div>
                    {/* Duplicate set for animation width */}
                    <div className="collage-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=60')" }}></div>
                    <div className="collage-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=60')" }}></div>
                  </div>
                </motion.div>
            </div>
          </div>
        </section>

        {/* --- Logo Cloud --- */ }
        <section className="marquee-wrapper">
          <div className="container">
            <span className="pill-tag">OUR PARTNERS</span>
            <h2>Trusted by Ambitious Brands and Modern Businesses</h2>
            <div className="logo-cloud" aria-label="Trusted partner categories">
              <div className="logo-cloud-track">
                {[...logoCloudItems, ...logoCloudItems, ...logoCloudItems].map((item, i) => (
                  <span className="logo-cloud-card" key={`${item}-${i}`}>
                    <span className="logo-cloud-mark" aria-hidden="true">{item.slice(0, 1)}</span>
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Challenges --- */}
        <section className="challenges">
          <div className="container">
            <div className="challenges-grid">
              <div className="challenges-content">
                <span className="pill-tag">WEAK BRANDING</span>
                <h2>Overcoming Poor Digital Presence Starts Here Today</h2>
                <p>Identify the branding gaps that prevent your business from reaching its full potential. Elevating your website can transform your online success.</p>
              </div>
              <div className="challenges-visual">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=60" alt="Founder" className="challenges-img" />
                <div className="floating-pill pill-orange">WEAK IDENTITIES</div>
                <div className="floating-pill pill-teal">POOR CONVERSIONS</div>
                <div className="floating-pill pill-blue">OUTDATED DESIGNS</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Services --- */}
        <section className="services">
          <div className="container">
            <span className="pill-tag">OUR EXPERTISE</span>
            <h2>Our Digital Services to Drive Growth</h2>
            <div className="services-grid">
              {[
                { title: "Brand & Identity Design", desc: "Custom brand identities ensuring your business stands out.", img: "/assets/brand_identity.png", pill: "sp-orange", href: "/services/brand-identity-design" },
                { title: "Custom Web Development", desc: "Bespoke website solutions that drive high conversion rates.", img: "/assets/custom_web_dev_2.png", pill: "sp-teal", href: "/services/custom-web-development" },
                { title: "eCommerce & CMS Sites", desc: "Shopify, Wix, and Squarespace sites that accelerate sales.", img: "/assets/ecommerce.jpg", pill: "sp-blue", href: "/services/ecommerce-cms-sites" }
              ].map((service, i) => (
                <Link key={i} href={service.href} className="service-card">
                  <img src={service.img} alt={service.title} className="service-bg" />
                  <div className="service-overlay"></div>
                  <div className="service-content">
                    <div className="service-header">
                        <h3 className={`service-pill ${service.pill}`}>{service.title}</h3>
                        <div className="plus-icon">+</div>
                    </div>
                    <p className="service-desc">{service.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* --- Approach --- */}
        <section className="approach">
          <div className="container">
            <div className="approach-grid">
              <div className="approach-content">
                <span className="pill-tag">OUR PROCESS</span>
                <h2>A Streamlined Workflow for Lasting Results</h2>
                <div className="approach-buttons">
                  <Link href="/contact" className="btn btn-primary">Get Started</Link>
                  <Link href="/case-studies" className="btn btn-outline">Our Work</Link>
                </div>
              </div>
              <div className="process-steps">
                {[
                  { num: "1", title: "Discovery & Strategy", desc: "We understand your brand and create a clear digital plan tailored to your goals." },
                  { num: "2", title: "Design & Prototyping", desc: "We build a modern visual system before development begins." },
                  { num: "3", title: "Web Development", desc: "Clean, responsive builds aligned with your brand and conversion goals." },
                  { num: "4", title: "Launch & Optimization", desc: "We support launch, analytics, and performance refinement." }
                ].map((step, i) => (
                  <div key={i} className="process-step">
                    <div className="step-number">{step.num}</div>
                    <div className="step-info">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Video --- */}
        <section className="full-video-section">
          <div className="video-wrapper">
            <video src="https://framerusercontent.com/assets/dcvnnvkeNKmgN1qxCAM2MNUiZM.mp4" autoPlay muted loop playsInline className="native-bg-video" />
            <div className="video-overlay"></div>
          </div>
        </section>

        {/* --- Impact --- */}
        <section className="stats">
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

        {/* --- Industries --- */}
        <section className="industries" ref={industriesRef}>
          <div className="container">
            <span className="pill-tag">BRANDS WE ELEVATE</span>
            <h2>Industry-Specific Web Design to Drive Your Success</h2>
            <div className="pill-cloud">
               {[
                { name: "Fashion Brands", cls: "cp-teal" },
                { name: "Tech Startups", cls: "cp-yellow" },
                { name: "D2C E-commerce", cls: "cp-blue" },
                { name: "B2B Agencies", cls: "cp-darkblue" },
                { name: "SaaS Platforms", cls: "cp-peach" },
                { name: "Local Retail", cls: "cp-pink" },
                { name: "Enterprise", cls: "cp-darkblue" },
                { name: "Creative Studios", cls: "cp-orange" }
              ].map((pill, i) => (
                <div key={i} className={`cloud-pill ${pill.cls}`}>{pill.name}</div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Case Studies --- */}
        <section className="case-studies">
          <div className="container">
            <div className="cs-header">
              <div><span className="pill-tag">CASE STUDIES</span><h2>Client Success Through Our Web Design</h2></div>
              <Link href="/case-studies" className="btn btn-outline" style={{ minWidth: '140px', justifyContent: 'center', height: 'fit-content', marginTop: '10px' }}>Explore All</Link>
            </div>
            <div className="cs-grid">
              <div className="cs-hero-card">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=60" alt="Tech startup workshop" className="cs-img-large" />
                <span className="pill-tag">TECH STARTUP</span>
                <h3>Driving Conversions: Transforming a Tech Startup&apos;s Identity</h3>
              </div>
              <div className="cs-sm-card">
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=60" alt="Ecommerce operations team" className="cs-img-small" />
                <span className="pill-tag">ECOMMERCE</span>
                <h3>Scaling E-commerce: A Fashion Brand&apos;s Growth</h3>
              </div>
            </div>
          </div>
        </section>

        {/* --- Testimonials --- */}
        <section className="testimonials" id="testimonials">
          <div className="container" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="pill-tag">TESTIMONIALS</span>
            <h2>Trusted by Businesses Worldwide</h2>
          </div>
          <div className="testi-track-new">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <article className="t-card" key={`${testimonial.name}-${index}`}>
                <img src={testimonial.img} alt={`${testimonial.name}, ${testimonial.role}`} className="t-img" />
                <div className="t-content">
                  <p className="t-quote">&quot;{testimonial.quote}&quot;</p>
                  <p className="t-author">- {testimonial.name}, {testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- CTA --- */}
        <section className="cta-final">
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="pill-tag" style={{ background: 'var(--white)', color: 'var(--orange)' }}>READY TO GROW?</span>
            <h2 className="cta-title">Launch Your Brand&apos;s Next Digital Era</h2>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-dark">Get Started</Link>
              <Link href="/case-studies" className="btn btn-white" style={{ color: 'var(--orange)' }}>Our Work</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
