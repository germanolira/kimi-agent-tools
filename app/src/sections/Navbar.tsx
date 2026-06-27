import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] h-16 flex items-center"
      style={{
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        background: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid #E5E5E5' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="9" r="8" />
            <line x1="9" y1="1" x2="9" y2="17" />
            <line x1="1" y1="9" x2="17" y2="9" />
            <line x1="3.5" y1="3.5" x2="14.5" y2="14.5" />
            <line x1="14.5" y1="3.5" x2="3.5" y2="14.5" />
          </svg>
          <span className="font-['Playfair_Display'] text-2xl font-normal tracking-tight text-black">
            MathDesk
          </span>
        </a>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#product" className="font-['Inter'] text-[15px] font-medium text-black hover:text-[#0030FC] transition-colors duration-200">
            Product
          </a>
          <a href="#solutions" className="font-['Inter'] text-[15px] font-medium text-black hover:text-[#0030FC] transition-colors duration-200">
            Solutions
          </a>
          <a href="#pricing" className="font-['Inter'] text-[15px] font-medium text-black hover:text-[#0030FC] transition-colors duration-200">
            Pricing
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a href="#signin" className="hidden sm:inline font-['Inter'] text-[15px] font-medium text-black hover:text-[#0030FC] transition-colors duration-200">
            Sign In
          </a>
          <a
            href="#getstarted"
            className="inline-flex items-center font-['Inter'] text-[15px] font-medium text-white bg-[#0030FC] hover:bg-[#0024DB] transition-all duration-200"
            style={{
              height: '36px',
              padding: '0 20px',
              borderRadius: '18px',
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
