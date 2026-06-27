export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center gap-12 px-6">
      <header className="flex flex-col items-center gap-3 text-center">
        <a href="/" className="flex items-center gap-2" aria-label="MathDesk">
          <svg width="22" height="22" viewBox="0 0 18 18" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="9" r="8" />
            <line x1="9" y1="1" x2="9" y2="17" />
            <line x1="1" y1="9" x2="17" y2="9" />
            <line x1="3.5" y1="3.5" x2="14.5" y2="14.5" />
            <line x1="14.5" y1="3.5" x2="3.5" y2="14.5" />
          </svg>
          <span className="font-['Playfair_Display'] text-2xl font-normal">MathDesk</span>
        </a>
      </header>

      <nav className="flex flex-col sm:flex-row items-center gap-4" aria-label="Main">
        <a
          href="#editor"
          className="font-['Inter'] text-sm font-medium tracking-tight text-white bg-[#0030FC] rounded-xl px-8 py-4 hover:bg-[#0024DB] hover:scale-[1.02] active:scale-95 transition-all duration-200 ease-out shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_-8px_rgba(0,48,252,0.4)]"
        >
          Editor
        </a>
        <a
          href="#questoes"
          className="font-['Inter'] text-sm font-medium tracking-tight text-[#0030FC] bg-white border border-[#E5E5E5] rounded-xl px-8 py-4 hover:bg-[#F8F8F8] hover:border-[#0030FC] hover:scale-[1.02] active:scale-95 transition-all duration-200 ease-out"
        >
          Questões
        </a>
      </nav>
    </div>
  );
}
