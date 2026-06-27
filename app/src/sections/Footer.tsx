import { Github, Twitter } from 'lucide-react';

const footerLinks = {
  Product: ['Editor', 'Collaboration', 'Export', 'Mobile'],
  Resources: ['Documentation', 'Tutorials', 'API', 'Blog'],
  Company: ['About', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Security'],
};

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10" style={{ background: '#000000' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span
              className="font-['Playfair_Display'] text-[36px] font-normal text-white"
              style={{ lineHeight: 1.2, letterSpacing: '-0.01em' }}
            >
              MathDesk
            </span>
            <p
              className="font-['Inter'] text-[15px] font-normal mt-2"
              style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}
            >
              The collaborative math editor for modern teams.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <span
                className="font-['Inter'] text-[13px] font-medium uppercase tracking-[0.02em] block mb-4"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                {category}
              </span>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="font-['Inter'] text-[15px] font-normal transition-colors duration-200 hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.7)' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="my-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            className="font-['Inter'] text-[13px] font-medium"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            © 2025 MathDesk, Inc.
          </span>
          <div className="flex items-center gap-5">
            <a
              href="#github"
              aria-label="GitHub"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              <Github size={20} />
            </a>
            <a
              href="#twitter"
              aria-label="Twitter"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              <Twitter size={20} />
            </a>
            <a
              href="#discord"
              aria-label="Discord"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
