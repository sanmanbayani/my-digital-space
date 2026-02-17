import heroIllustration from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero image - stacked behind, fills whole section */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroIllustration}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/60" aria-hidden />
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
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-8 text-center">
        <h1 className="max-w-3xl text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
          I design scalable, usability-driven digital products
        </h1>
        <p className="mt-6 max-w-lg text-lg text-muted-foreground">
          Product Designer — B2B & B2C · Pune, India
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
