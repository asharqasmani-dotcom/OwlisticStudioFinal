"use client";
import React, { useState } from "react";

interface AccordionItem {
  id: number;
  title: string;
  imageUrl: string;
}

const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: "Brand Identity",
    imageUrl: "/assets/Brand%20identity.png",
  },
  {
    id: 2,
    title: "Packaging Design",
    imageUrl: "/assets/Packaging%20Design.png",
  },
  {
    id: 3,
    title: "Website Design",
    imageUrl: "/assets/Website%20Design.png",
  },
  {
    id: 4,
    title: "Logo Design",
    imageUrl: "/assets/Logo%20Design.png",
  },
  {
    id: 5,
    title: "Social Media",
    imageUrl: "/assets/Social%20Media.png",
  },
];

interface AccordionItemProps {
  item: AccordionItem;
  isActive: boolean;
  onActivate: () => void;
}

const AccordionPanel: React.FC<AccordionItemProps> = ({ item, isActive, onActivate }) => (
  <div
    className="relative rounded-2xl overflow-hidden cursor-pointer h-[420px] min-w-0"
    style={{
      flexGrow: isActive ? 6 : 0,
      flexShrink: 1,
      flexBasis: isActive ? "0%" : "58px",
      transition:
        "flex-grow 600ms cubic-bezier(0.4, 0, 0.2, 1), flex-basis 600ms cubic-bezier(0.4, 0, 0.2, 1)",
      willChange: "flex-grow, flex-basis",
    }}
    onMouseEnter={onActivate}
    onClick={onActivate}
    aria-expanded={isActive}
  >
    <img
      src={item.imageUrl}
      alt={item.title}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      onError={(e) => {
        const t = e.target as HTMLImageElement;
        t.onerror = null;
        t.src = `https://placehold.co/400x420/fe6037/ffffff?text=${item.title}`;
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
    <span
      className={[
        "absolute text-white text-sm font-semibold whitespace-nowrap pointer-events-none",
        "transition-[transform,opacity] duration-500 ease-out",
        isActive
          ? "bottom-5 left-5 rotate-0 opacity-100"
          : "bottom-20 left-1/2 -translate-x-1/2 rotate-90 opacity-80",
      ].join(" ")}
      style={{ fontFamily: "var(--font-body)", transformOrigin: "left bottom" }}
    >
      {item.title}
    </span>
  </div>
);

interface HeroAccordionProps {
  customerAvatars: { name: string; img: string }[];
}

export function HeroAccordion({ customerAvatars }: HeroAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section
      id="hero"
      style={{
        background: "var(--cream)",
        paddingTop: 212,
        paddingBottom: 80,
      }}
    >
      <div className="container">
        <div className="ha-grid">

          {/* ── LEFT ── */}
          <div className="ha-left">
            <h1
              style={{
                fontFamily: "var(--font-primary)",
                fontSize: "clamp(2.2rem, 3.6vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                margin: "0 0 20px",
              }}
            >
              Brand Identity, Packaging and Website Design for Growing Businesses
            </h1>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.97rem, 1.4vw, 1.08rem)",
                lineHeight: 1.72,
                color: "var(--text-secondary)",
                margin: "0 0 36px",
                maxWidth: 460,
              }}
            >
              I help startups, local businesses and agencies create clean, professional and consistent brand systems across logos, packaging, websites and digital assets.
            </p>

            <div className="ha-buttons">
              <a href="#work" className="btn btn-primary">View Selected Work</a>
              <a href="#contact" className="btn btn-outline">Start a Project</a>
            </div>
          </div>

          {/* ── RIGHT — accordion ── */}
          <div className="ha-right">
            <div className="ha-accordion">
              {accordionItems.map((item, index) => (
                <AccordionPanel
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onActivate={() => setActiveIndex(index)}
                />
              ))}
            </div>

            {/* Trust badge */}
            <div className="ha-trust-card">
              <div style={{ color: "var(--yellow)", letterSpacing: 3, fontSize: "0.9rem", flexShrink: 0 }}>★★★★★</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
                <strong style={{ fontFamily: "var(--font-primary)", fontSize: "0.92rem", color: "var(--white)", whiteSpace: "nowrap" }}>
                  1,700+ Fiverr Reviews
                </strong>
                <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.82)", whiteSpace: "nowrap" }}>
                  5-Star Rated &nbsp;·&nbsp; Verified Seller
                </span>
              </div>
              <div className="avatar-stack" style={{ marginLeft: "auto", flexShrink: 0 }}>
                {customerAvatars.slice(0, 4).map((av) => (
                  <div key={av.name} className="proof-avatar" data-name={av.name}
                    style={{ width: 30, height: 30, borderColor: "var(--orange)" }}>
                    <img src={av.img} alt={av.name} />
                  </div>
                ))}
              </div>
              <a
                href="https://www.fiverr.com/block_design"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.72rem", fontWeight: 700, color: "#fff",
                  background: "#1DBF73", textDecoration: "none",
                  padding: "5px 12px", borderRadius: 6,
                  whiteSpace: "nowrap", flexShrink: 0,
                }}
              >
                fiverr.com ↗
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
