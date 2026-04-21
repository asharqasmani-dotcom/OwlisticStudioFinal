"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const flipButtons = document.querySelectorAll('.btn');

    flipButtons.forEach((button) => {
      const label = button.textContent?.trim();
      if (label) {
        (button as HTMLElement).dataset.flipLabel = label;
      }
    });
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const syncTheme = () => {
      const stored = window.localStorage.getItem('ow-theme');
      const nextTheme = stored === 'dark' || stored === 'light'
        ? stored
        : media.matches
          ? 'dark'
          : 'light';

      root.dataset.theme = nextTheme;
      root.style.colorScheme = nextTheme;
      setTheme(nextTheme);
    };

    syncTheme();

    const handleSystemTheme = () => {
      if (!window.localStorage.getItem('ow-theme')) {
        syncTheme();
      }
    };

    media.addEventListener('change', handleSystemTheme);

    return () => {
      media.removeEventListener('change', handleSystemTheme);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem('ow-theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <header>
      <div className={`nav-inner ${isOpen ? 'nav-open' : ''}`}>
        <Link href="/" className="logo">
          <img src="/assets/owlistic_full_logo.png" alt="Owalistic Sol" style={{ height: '54px', width: 'auto', maxWidth: '235px', objectFit: 'contain' }} />
        </Link>
        <ul className="nav-links">
          <li><Link href="/" className="nav-item" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li className="nav-item has-mega">
            <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            <div className="mega-menu">
              <div className="mega-container">
                <Link href="/services/brand-identity-design" className="mega-card" onClick={() => setIsOpen(false)}>
                  <div className="mega-bg" style={{ backgroundImage: "url('/assets/brand_identity.png')" }}></div>
                  <div className="mega-overlay"></div>
                  <div className="mega-content">
                    <h4>Brand & Identity Design</h4>
                    <span className="mega-arrow">→</span>
                  </div>
                </Link>
                <Link href="/services/custom-web-development" className="mega-card" onClick={() => setIsOpen(false)}>
                  <div className="mega-bg" style={{ backgroundImage: "url('/assets/custom_web_dev_2.png')" }}></div>
                  <div className="mega-overlay"></div>
                  <div className="mega-content">
                    <h4>Custom Web Development</h4>
                    <span className="mega-arrow">→</span>
                  </div>
                </Link>
                <Link href="/services/ecommerce-cms-sites" className="mega-card" onClick={() => setIsOpen(false)}>
                  <div className="mega-bg" style={{ backgroundImage: "url('/assets/ecommerce.jpg')" }}></div>
                  <div className="mega-overlay"></div>
                  <div className="mega-content">
                    <h4>eCommerce & CMS Sites</h4>
                    <span className="mega-arrow">→</span>
                  </div>
                </Link>
              </div>
            </div>
          </li>
          <li><Link href="/about" className="nav-item" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link href="/case-studies" className="nav-item" onClick={() => setIsOpen(false)}>Case Studies</Link></li>
        </ul>
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark'}
            onClick={toggleTheme}
          >
            <span className="theme-toggle-track">
              <span className="theme-toggle-thumb">
                {theme === 'dark' ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z" fill="currentColor" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="4.5" fill="currentColor" />
                    <path d="M12 1.75v3.1M12 19.15v3.1M4.85 4.85l2.2 2.2M16.95 16.95l2.2 2.2M1.75 12h3.1M19.15 12h3.1M4.85 19.15l2.2-2.2M16.95 7.05l2.2-2.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                )}
              </span>
            </span>
          </button>
          <Link href="/contact" className="btn btn-primary nav-cta" onClick={() => setIsOpen(false)}>Let&apos;s Talk</Link>
        </div>
        <button 
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
