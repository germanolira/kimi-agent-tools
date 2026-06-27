import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DimensionalHeadline from '@/components/DimensionalHeadline';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    // Premium Staggered Intro Animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.intro-element',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.0, stagger: 0.12, ease: 'power4.out', delay: 0.2 }
      );
    }, content);

    const tween = gsap.to(content, {
      opacity: 0,
      y: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '30% top',
        scrub: true,
      },
    });

    return () => {
      ctx.revert();
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center"
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, #FAFBFF 0%, #FFFFFF 60%)',
      }}
    >
      <div ref={contentRef} className="flex flex-col items-center px-6 pt-16">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 intro-element"
          style={{
            border: '1px solid #E5E5E5',
            borderRadius: '20px',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0030FC]" />
          <span className="font-['Inter'] text-[13px] font-medium text-[#888888]">
            Introducing MathDesk 2.0
          </span>
        </div>

        {/* Headline with 3D effect */}
        <div className="intro-element">
          <DimensionalHeadline text="Where math meets clarity." />
        </div>

        {/* Subtext */}
        <p
          className="font-['Inter'] text-[17px] font-normal text-[#666666] text-center mt-6 intro-element"
          style={{ maxWidth: '520px', lineHeight: 1.65 }}
        >
          The collaborative math editor that thinks like you do. Write equations naturally, share in real time, and publish beautiful documents.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center gap-3 mt-10 intro-element">
          <a
            href="#editor"
            className="inline-flex items-center font-['Inter'] text-[15px] font-medium text-white bg-[#0030FC] hover:bg-[#0024DB] hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,48,252,0.35)] active:scale-95 transition-all duration-300"
            style={{
              height: '44px',
              padding: '0 28px',
              borderRadius: '22px',
            }}
          >
            Start writing free
          </a>
          <a
            href="#editor"
            className="inline-flex items-center font-['Inter'] text-[15px] font-medium text-black bg-white hover:border-black hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] active:scale-95 transition-all duration-300"
            style={{
              height: '44px',
              padding: '0 28px',
              borderRadius: '22px',
              border: '1px solid #E5E5E5',
            }}
          >
            Open Editor
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-3 mt-8 intro-element">
          <div className="flex -space-x-2">
            <img
              src="/avatar-1.jpg"
              alt="User"
              className="w-7 h-7 rounded-full border-2 border-white object-cover hover:scale-110 hover:z-10 transition-transform duration-200"
            />
            <img
              src="/avatar-2.jpg"
              alt="User"
              className="w-7 h-7 rounded-full border-2 border-white object-cover hover:scale-110 hover:z-10 transition-transform duration-200"
            />
            <img
              src="/avatar-3.jpg"
              alt="User"
              className="w-7 h-7 rounded-full border-2 border-white object-cover hover:scale-110 hover:z-10 transition-transform duration-200"
            />
          </div>
          <span className="font-['Inter'] text-[13px] font-medium text-[#888888]">
            Loved by 50,000+ mathematicians
          </span>
        </div>
      </div>
    </section>
  );
}
