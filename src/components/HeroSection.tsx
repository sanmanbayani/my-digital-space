import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/Hero-bg-4.png";
import Hotspot from "./ui/Hotspot";

const hotspots = [
  { id: 1, x: 16, y: 59, label: "Designing, Ideating.." },
  { id: 2, x: 38, y: 48, label: "Cinephille" },
  { id: 3, x: 69, y: 46, label: "Calm, peaceful, meditation" },
  { id: 4, x: 41, y: 72, label: "Capturing moments, In the blink of an eye" },
  { id: 5, x: 74, y: 63, label: "I like to cook for a change" },
  { id: 6, x: 91, y: 70, label: "I like to get into long thoughts session" },
];

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative min-h-[85vh] md:min-h-[105vh] overflow-hidden">
      {/* Hero image - stacked behind, fills whole section */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none md:items-end md:bottom-0 md:top-auto translate-y-[10%] md:translate-y-[15%]">
        <div className="relative h-full w-full max-w-[1920px] md:h-auto">
          <img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover object-left md:h-auto md:object-bottom"
            loading="eager"
          />
          {/* Hotspots container - hidden on mobile */}
          <div className="absolute inset-0 hidden pointer-events-none md:block">
            {hotspots.map((spot) => (
              <Hotspot key={spot.id} x={spot.x} y={spot.y} label={spot.label} />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-background/0" aria-hidden />
      </div>

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
            href="#"
            className="rounded-full border border-foreground/10 px-5 py-2 text-sm font-medium uppercase tracking-widest text-muted-foreground transition-all hover:border-foreground/40 hover:text-foreground"
          >
            My Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-50 rounded-full p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-x-0 top-0 z-40 bg-white/95 px-6 pb-12 pt-24 shadow-xl backdrop-blur-lg md:hidden"
            >
              <div className="flex flex-col gap-6 text-center">
                {["Work", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-bold uppercase tracking-[0.2em] text-[#1a1a1a]"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#"
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
      <div className="relative z-10 flex min-h-[40vh] md:min-h-[calc(100vh-80px)] flex-col items-center justify-start pt-12 md:pt-6 px-8 text-center pointer-events-none">
        <h1 className="max-w-4xl text-3xl font-semibold leading-[1.2] text-foreground md:text-4xl lg:text-5xl">
          I design scalable, usability-driven <br className="hidden md:block" /> digital products
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
