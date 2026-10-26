import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import resumePdf from "@/assets/Sanman Resume.pdf";
import HeroIllustration from "./HeroIllustration";
import { Button } from "./ui/button";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative overflow-hidden">
      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-16 lg:px-24">
        <span className="text-lg font-bold tracking-tight text-foreground">
          Sanman Bayani
        </span>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {["Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-foreground/10 px-5 py-2 text-sm font-medium uppercase tracking-widest text-muted-foreground transition-all hover:border-foreground/40 hover:text-foreground"
          >
            My Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-50 rounded-full p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-x-0 top-0 z-40 bg-background/95 px-6 pb-12 pt-24 shadow-xl backdrop-blur-lg md:hidden"
            >
              <div className="flex flex-col gap-6 text-center">
                {["Work", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-bold uppercase tracking-[0.2em] text-foreground"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 inline-block rounded-full border border-foreground/20 px-8 py-3 text-sm font-bold uppercase tracking-widest text-foreground"
                >
                  My Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center px-6 pb-2 pt-12 text-center md:pt-8">
        <h1 className="max-w-4xl text-3xl font-semibold leading-[1.2] text-foreground md:text-4xl lg:text-5xl">
          I design scalable, usability-driven <br className="hidden md:block" /> digital products
        </h1>
      </div>
      <HeroIllustration />
    </section>
  );
};

export default HeroSection;
