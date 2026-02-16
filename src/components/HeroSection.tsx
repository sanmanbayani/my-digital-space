import heroIllustration from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 md:px-16 lg:px-24">
        <span className="text-lg font-bold tracking-tight text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
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
      <div className="flex flex-col items-center px-8 pt-16 text-center md:pt-24 lg:pt-32">
        <h1 className="max-w-3xl text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
          I design scalable, usability-driven digital products
        </h1>
        <p className="mt-6 max-w-lg text-lg text-muted-foreground">
          Product Designer — B2B & B2C · Pune, India
        </p>
      </div>

      {/* Hero illustration */}
      <div className="mt-12 w-full px-4 md:px-16 lg:px-24">
        <img
          src={heroIllustration}
          alt="Design workspace illustration"
          className="mx-auto w-full max-w-5xl rounded-2xl object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;
