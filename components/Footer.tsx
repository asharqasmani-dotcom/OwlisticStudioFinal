import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mega-footer bg-white rounded-t-[80px] relative z-10 -mt-[60px] pt-[120px]">
      <div className="container">
        <div className="footer-top grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-20 mb-[120px]">
          <div className="f-col f-email-col">
            <p className="f-col-title text-[1.125rem] font-semibold mb-6">Email Us</p>
            <a href="mailto:Hello@owalisticsol.com" className="f-huge-mail text-clamp-huge font-medium leading-[1.2] overflow-wrap-anywhere">
              Hello@owalisticsol.com
            </a>
            <div className="f-meta mt-8 text-black/60 text-[0.875rem]">
              <p>© 2024 Made by Owalistic Sol</p>
              <Link href="/privacy" className="f-privacy block font-semibold text-[var(--dark-bg)] mt-2">Privacy Policy</Link>
            </div>
          </div>
          <div className="f-links-grid grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="f-col">
              <p className="f-col-title text-[1.125rem] font-semibold mb-6">Page</p>
              <ul className="flex flex-col gap-4">
                <li><Link href="/" className="text-black/50 hover:text-[var(--orange)] font-medium">Home</Link></li>
                <li><Link href="/services" className="text-black/50 hover:text-[var(--orange)] font-medium">Service</Link></li>
                <li><Link href="/about" className="text-black/50 hover:text-[var(--orange)] font-medium">About Us</Link></li>
                <li><Link href="/case-studies" className="text-black/50 hover:text-[var(--orange)] font-medium">Case Study</Link></li>
              </ul>
            </div>
            <div className="f-col">
              <p className="f-col-title text-[1.125rem] font-semibold mb-6">Connect</p>
              <ul className="flex flex-col gap-4">
                <li><a href="mailto:Hello@owalisticsol.com" className="text-black/50 hover:text-[var(--orange)] font-medium">Email</a></li>
                <li><a href="https://wa.me/923451180314" target="_blank" rel="noopener noreferrer" className="text-black/50 hover:text-[var(--orange)] font-medium">WhatsApp</a></li>
                <li><Link href="/contact" className="text-black/50 hover:text-[var(--orange)] font-medium">Book a Project</Link></li>
              </ul>
            </div>
            <div className="f-col">
              <p className="f-col-title text-[1.125rem] font-semibold mb-6">Studio</p>
              <p className="f-address text-black/50 font-medium leading-[1.6]">
                Pearl heights Office No-2,<br />
                BE, ISB,<br />
                PAK
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center relative overflow-hidden h-[clamp(220px,28vw,430px)] flex items-end justify-center mt-10">
          <div className="giant-text-wrapper relative w-[min(1480px,112vw)] translate-y-[15%] flex items-center justify-center">
             <img src="/assets/owlistic.svg" alt="Owalistic" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', display: 'block', transform: 'translateY(20px)' }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
