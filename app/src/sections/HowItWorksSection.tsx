import { useScrollEntrance } from '@/hooks/useScrollEntrance';

const steps = [
  {
    number: '01',
    title: 'Write naturally',
    description:
      'Type math like you think it. No LaTeX memorization — just describe what you need and MathDesk formats it beautifully.',
  },
  {
    number: '02',
    title: 'Collaborate live',
    description:
      'Share a link and work together in real time. See cursors, leave comments, and iterate like you\'re at the same whiteboard.',
  },
  {
    number: '03',
    title: 'Publish anywhere',
    description:
      'Export to LaTeX, PDF, or HTML. Your equations stay crisp at any resolution, in any journal template.',
  },
];

export default function HowItWorksSection() {
  const ref = useScrollEntrance<HTMLDivElement>(0.1);

  return (
    <section className="w-full py-[120px]" style={{ background: '#FFFFFF' }}>
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="scroll-reveal text-center">
          <span className="font-['Inter'] text-[13px] font-medium uppercase tracking-[0.08em] text-[#0030FC]">
            HOW IT WORKS
          </span>
          <h2
            className="font-['Playfair_Display'] text-[48px] font-normal text-black mt-4"
            style={{ lineHeight: 1.15, letterSpacing: '-0.01em' }}
          >
            From first equation to final proof.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {steps.map((step) => (
            <div key={step.number} className="scroll-reveal relative">
              <span
                className="font-['Playfair_Display'] font-normal text-[#E5E5E5] select-none block"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
              >
                {step.number}
              </span>
              <h3
                className="font-['Playfair_Display'] text-[36px] font-normal text-black"
                style={{ lineHeight: 1.2, letterSpacing: '-0.01em', marginTop: '-20px' }}
              >
                {step.title}
              </h3>
              <p
                className="font-['Inter'] text-[15px] font-normal text-[#666666] mt-3"
                style={{ lineHeight: 1.6 }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
