import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FeatureEditorialSectionProps {
  reversed?: boolean;
  label: string;
  headline: string;
  body: string;
  features: string[];
  ctaText: string;
  images: { src: string; alt: string; revealDirection: 'left' | 'right' }[];
  bgColor?: string;
}

export default function FeatureEditorialSection({
  reversed = false,
  label,
  headline,
  body,
  features,
  ctaText,
  images,
  bgColor = '#FFFFFF',
}: FeatureEditorialSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tweens: gsap.core.Tween[] = [];

    imageRefs.current.forEach((img, i) => {
      if (!img) return;
      const direction = images[i]?.revealDirection === 'left' ? -1 : 1;
      const initialRotation = direction * 25;

      gsap.set(img, {
        rotateY: initialRotation,
        opacity: 0,
        x: direction * 60,
      });

      const tween = gsap.to(img, {
        rotateY: 0,
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: img,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      tweens.push(tween);
    });

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, [images]);

  const setImageRef = (el: HTMLDivElement | null, index: number) => {
    imageRefs.current[index] = el;
  };

  const textContent = (
    <div className="flex flex-col justify-center">
      <span className="font-['Inter'] text-[13px] font-medium uppercase tracking-[0.08em] text-[#0030FC]">
        {label}
      </span>
      <h2
        className="font-['Playfair_Display'] text-[48px] font-normal text-black mt-3"
        style={{ lineHeight: 1.15, letterSpacing: '-0.01em' }}
      >
        {headline}
      </h2>
      <p
        className="font-['Inter'] text-[17px] font-normal text-[#666666] mt-5"
        style={{ maxWidth: '440px', lineHeight: 1.65 }}
      >
        {body}
      </p>
      <div className="flex flex-col gap-3 mt-8">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <span className="w-[14px] h-[14px] rounded-full bg-[#0030FC] flex items-center justify-center flex-shrink-0">
              <Check size={10} strokeWidth={2.5} color="#FFFFFF" />
            </span>
            <span className="font-['Inter'] text-[15px] font-normal text-black">{feature}</span>
          </div>
        ))}
      </div>
      <a
        href="#explore"
        className="inline-flex items-center font-['Inter'] text-[15px] font-medium text-[#0030FC] mt-8 group"
      >
        {ctaText}
        <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
      </a>
    </div>
  );

  const imageContent = (
    <div
      className="flex flex-col gap-8"
      style={{ perspective: '1200px' }}
    >
      {images.map((img, i) => (
        <div
          key={i}
          ref={(el) => setImageRef(el, i)}
          className="overflow-hidden"
          style={{
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            transformStyle: 'preserve-3d',
            maxWidth: i === 0 && images.length === 1 ? '500px' : '400px',
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-auto block"
            style={{ aspectRatio: images.length === 1 ? '500/380' : '400/280', objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <section ref={sectionRef} className="w-full py-[120px]" style={{ background: bgColor }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center ${
            reversed ? 'lg:[direction:rtl]' : ''
          }`}
        >
          <div className={reversed ? 'lg:[direction:ltr]' : ''}>
            {reversed ? imageContent : textContent}
          </div>
          <div className={reversed ? 'lg:[direction:ltr]' : ''}>
            {reversed ? textContent : imageContent}
          </div>
        </div>
      </div>
    </section>
  );
}
