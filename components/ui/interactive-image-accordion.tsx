"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

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

const heroPhrases = [
  { lines: ["Brand Identity", "Design"], color: "var(--orange)" },
  { lines: ["Packaging", "Design"], color: "var(--orange)" },
  { lines: ["Website", "Design"], color: "var(--orange)" },
  { lines: ["Presentation", "Design"], color: "var(--orange)" },
  { lines: ["Social Media", "Design"], color: "var(--orange)" },
];

export function HeroAccordion({ customerAvatars }: HeroAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(2);
  const [activePhrase, setActivePhrase] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePhrase((current) => (current + 1) % heroPhrases.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  const phrase = heroPhrases[activePhrase];

  return (
    <section
      id="hero"
      style={{
        background: "var(--hero-bg)",
        paddingTop: 212,
        paddingBottom: 80,
      }}
    >
      <div className="container">
        <div className="ha-grid">

          {/* ── LEFT ── */}
          <div className="ha-left">
            <h1
              className="ha-heading"
              style={{
                fontFamily: "var(--font-primary)",
                fontWeight: 500,
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              <span className="ha-static-line ha-line-design">Design Solutions</span>
              <span className="ha-static-line ha-line-growing">for Growing</span>
              <span className="ha-static-line ha-line-businesses">Businesses</span>
              <span
                key={phrase.lines.join("-")}
                className="ha-rotating-phrase"
                style={{ color: phrase.color }}
              >
                <span className="ha-service-line ha-service-name">{phrase.lines[0]}</span>
                <span className="ha-service-line ha-service-type">{phrase.lines[1]}</span>
              </span>
            </h1>

            <div className="ha-buttons">
              <a href="#work" className="btn btn-primary">View Selected Work</a>
              <Link href="/contact" className="btn btn-outline">Start a Project</Link>
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
                  fontSize: "0.72rem", fontWeight: 400, color: "#fff",
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
