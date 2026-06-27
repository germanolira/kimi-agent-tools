import { useLenis } from '@/hooks/useLenis';
import Navbar from '@/sections/Navbar';
import HeroSection from '@/sections/HeroSection';
import TrustedBySection from '@/sections/TrustedBySection';
import FeaturesBandSection from '@/sections/FeaturesBandSection';
import HowItWorksSection from '@/sections/HowItWorksSection';
import FeatureEditorialSection from '@/sections/FeatureEditorialSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import UseCasesSection from '@/sections/UseCasesSection';
import CTASection from '@/sections/CTASection';
import Footer from '@/sections/Footer';

export default function Home() {
  useLenis();

  return (
    <div className="relative">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <FeaturesBandSection />
        <HowItWorksSection />
        <FeatureEditorialSection
          label="EQUATION EDITOR"
          headline="Math that flows like thought."
          body="Forget memorizing commands. Type 'integral from 0 to infinity of e to the minus x' and watch it transform into a beautifully typeset equation. Edit with your keyboard or your mouse — whatever feels natural."
          features={[
            'Natural language input',
            'Real-time LaTeX preview',
            'Smart autocomplete for symbols',
          ]}
          ctaText="Explore the editor →"
          images={[
            { src: '/editor-equation.jpg', alt: 'Equation editor', revealDirection: 'left' },
            { src: '/editor-symbols.jpg', alt: 'Symbols palette', revealDirection: 'right' },
            { src: '/editor-document.jpg', alt: 'Document view', revealDirection: 'left' },
          ]}
        />
        <FeatureEditorialSection
          reversed
          label="COLLABORATION"
          headline="Built for teams, designed for focus."
          body="Work together without the chaos. MathDesk shows every collaborator's cursor in real time, lets you leave inline comments on specific equations, and maintains a full version history so you never lose an insight."
          features={[
            'Real-time multi-user cursors',
            'Inline comments on equations',
            'Version history with diff view',
          ]}
          ctaText="See how teams use MathDesk →"
          images={[
            { src: '/collaboration-cursors.jpg', alt: 'Collaborative editing', revealDirection: 'left' },
          ]}
          bgColor="#F8F8F8"
        />
        <TestimonialsSection />
        <UseCasesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
