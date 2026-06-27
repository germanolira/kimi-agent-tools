const institutions = [
  { name: 'MIT', abbr: 'MIT' },
  { name: 'Stanford', abbr: 'STANFORD' },
  { name: 'ETH Zurich', abbr: 'ETH' },
  { name: 'Caltech', abbr: 'CALTECH' },
  { name: 'Princeton', abbr: 'PRINCETON' },
  { name: 'Oxford', abbr: 'OXFORD' },
];

export default function TrustedBySection() {

  return (
    <section className="w-full py-20" style={{ background: '#F8F8F8' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <span
            className="font-['Inter'] text-[13px] font-medium uppercase tracking-[0.08em] text-[#888888] whitespace-nowrap"
          >
            TRUSTED BY LEADING INSTITUTIONS
          </span>
          <div className="flex items-center flex-wrap gap-8 lg:gap-12">
            {institutions.map((inst) => (
              <span
                key={inst.name}
                className="font-['Inter'] text-[15px] font-semibold tracking-[0.05em] text-[#888888] opacity-50 hover:opacity-80 transition-opacity duration-300"
                style={{ filter: 'grayscale(100%)' }}
              >
                {inst.abbr}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
