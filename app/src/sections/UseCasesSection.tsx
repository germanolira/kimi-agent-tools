import { FlaskConical, Presentation, Users, Globe } from 'lucide-react';
import { useScrollEntrance } from '@/hooks/useScrollEntrance';
import { type LucideIcon } from 'lucide-react';

const useCases: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: FlaskConical,
    title: 'Research Papers',
    description: 'Write, cite, and export publication-ready documents with automatic formatting.',
  },
  {
    icon: Presentation,
    title: 'Lecture Notes',
    description: 'Create beautiful course materials with live equations and interactive elements.',
  },
  {
    icon: Users,
    title: 'Team Knowledge Base',
    description: 'Build a shared library of mathematical knowledge that grows with your team.',
  },
  {
    icon: Globe,
    title: 'Published Work',
    description: 'Export to any journal template. ArXiv-ready LaTeX at the click of a button.',
  },
];

export default function UseCasesSection() {
  const ref = useScrollEntrance<HTMLDivElement>(0.1);

  return (
    <section className="w-full py-[120px]" style={{ background: '#F8F8F8' }}>
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="scroll-reveal text-center">
          <span className="font-['Inter'] text-[13px] font-medium uppercase tracking-[0.08em] text-[#0030FC]">
            USE CASES
          </span>
          <h2
            className="font-['Playfair_Display'] text-[48px] font-normal text-black mt-4"
            style={{ lineHeight: 1.15, letterSpacing: '-0.01em' }}
          >
            Whatever you create, create it here.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <div
                key={useCase.title}
                className="scroll-reveal bg-white p-8 flex flex-col rounded-xl border border-[#E5E5E5] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              >
                <Icon strokeWidth={1.5} color="#000" size={48} />
                <h3
                  className="font-['Playfair_Display'] text-[24px] font-normal text-black mt-6"
                  style={{ lineHeight: 1.2, letterSpacing: '-0.01em' }}
                >
                  {useCase.title}
                </h3>
                <p
                  className="font-['Inter'] text-[15px] font-normal text-[#666666] mt-3"
                  style={{ lineHeight: 1.6 }}
                >
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
