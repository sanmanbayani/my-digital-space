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
  return (
    <section className="relative min-h-[60vh] md:min-h-screen overflow-hidden">
      {/* Hero image - stacked behind, fills whole section */}
      <div className="absolute w-full bottom-0 left-0 z-0 flex items-end justify-center pointer-events-none translate-y-[16%]">
        <div className="relative w-full max-w-[1920px]">
          <img
            src={heroBg}
            alt=""
            className="w-full h-auto object-cover object-bottom"
            loading="eager"
          />
          {/* Hotspots container - absolute over the image */}
          <div className="absolute inset-0 pointer-events-none">
            {hotspots.map((spot) => (
              <Hotspot key={spot.id} x={spot.x} y={spot.y} label={spot.label} />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-background/0" aria-hidden />
      </div>



      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16 lg:px-24">
        <span className="text-lg font-bold tracking-tight text-foreground">
          Sanman Bayani
        </span>
        <div className="hidden gap-8 md:flex">
          {["Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[40vh] md:min-h-[calc(100vh-80px)] flex-col items-center justify-start pt-10 px-8 text-center pointer-events-none">
        <h1 className="max-w-2xl text-2xl font-medium leading-tight text-foreground md:text-3xl lg:text-4xl">
          I design scalable, usability-driven <br className="hidden md:block" /> digital products
        </h1>
        <p className="mt-3 max-w-lg text-lg text-muted-foreground">
          Product Designer — B2B & B2C · Pune, India
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
