import { useScrollEntrance } from '@/hooks/useScrollEntrance';

export default function TestimonialsSection() {
  const ref = useScrollEntrance<HTMLDivElement>(0.1);

  return (
    <section className="w-full py-[160px]" style={{ background: '#FFFFFF' }}>
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        {/* Large quotation mark */}
        <span
          className="scroll-reveal font-['Playfair_Display'] text-[64px] font-normal leading-none select-none"
          style={{ color: '#E5E5E5' }}
        >
          &ldquo;
        </span>

        {/* Quote */}
        <blockquote
          className="scroll-reveal font-['Playfair_Display'] text-[36px] font-normal text-black mt-6"
          style={{ maxWidth: '720px', lineHeight: 1.2, letterSpacing: '-0.01em' }}
        >
          MathDesk transformed how our research group writes papers. What used to take hours of LaTeX debugging now happens in minutes. The collaboration features mean we&apos;re never waiting on someone to finish their section.
        </blockquote>

        {/* Attribution */}
        <div className="scroll-reveal mt-8">
          <p className="font-['Inter'] text-[15px] font-normal text-[#666666]">
            Dr. Sarah Chen, Applied Mathematics, Stanford
          </p>
        </div>

        {/* Carousel dots */}
        <div className="scroll-reveal flex items-center gap-2 mt-10">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                background: i === 2 ? '#0030FC' : '#E5E5E5',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
