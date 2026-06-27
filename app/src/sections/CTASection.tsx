import { useScrollEntrance } from '@/hooks/useScrollEntrance';
import CircularTextWheel from '@/components/CircularTextWheel';

export default function CTASection() {
  const ref = useScrollEntrance<HTMLDivElement>(0.1);

  return (
    <section className="w-full py-[200px]" style={{ background: '#FFFFFF' }}>
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col items-center">
        <div className="scroll-reveal">
          <CircularTextWheel />
        </div>

        <div className="scroll-reveal text-center mt-20">
          <h2
            className="font-['Playfair_Display'] text-[48px] font-normal text-black"
            style={{ lineHeight: 1.15, letterSpacing: '-0.01em' }}
          >
            Ready to rethink math?
          </h2>
          <p
            className="font-['Inter'] text-[17px] font-normal text-[#666666] mt-4"
            style={{ lineHeight: 1.65 }}
          >
            Join 50,000+ mathematicians, researchers, and students.
          </p>
          <a
            href="#getstarted"
            className="inline-flex items-center font-['Inter'] text-[15px] font-medium text-white bg-[#0030FC] hover:bg-[#0024DB] hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,48,252,0.35)] active:scale-95 transition-all duration-300 mt-8"
            style={{
              height: '44px',
              padding: '0 28px',
              borderRadius: '22px',
            }}
          >
            Get started free
          </a>
        </div>
      </div>
    </section>
  );
}
