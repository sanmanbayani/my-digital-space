import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#F8F8F8] px-6 pt-24 pb-20 md:px-12 md:pt-32 md:pb-24 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <header className="mb-14 text-center md:mb-20">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            About
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            A bit about how I work, what I care about, and how to reach me.
          </p>
        </header>

        {/* Top row: Video (wide) + Image */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:gap-6">
          {/* 1st Bento - Video (wide) */}
          <div className="md:col-span-4">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-muted">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&loop=1&playlist=dQw4w9WgXcQ&mute=1&controls=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* 2nd Bento - Image */}
          <div className="md:col-span-2">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
              <img
                src={about1}
                alt="Sanman at work"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom row: Skills + Image + About Me */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
          {/* 3rd Bento - Skills (refined UI) */}
          <div className="flex h-[300px] flex-col overflow-hidden rounded-xl border border-[#E5E5E5] bg-white p-6">
            <h3 className="mb-2 shrink-0 text-base font-bold text-[#1a1a1a] md:text-lg">
              Core Skills
            </h3>
            <div className="flex min-h-0 flex-1 flex-wrap content-start gap-3 overflow-hidden">
              {[
                "User-Centered Design",
                "Interaction Design",
                "Wireframing & Prototyping",
                "Information Architecture",
                "Usability Testing",
                "Design Systems",
                "Figma",
                "HTML/CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="shrink-0 rounded-full bg-[#F0F0F0] px-4 py-2 text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-[#E0E0E0]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 4th Bento - Image */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
            <img
              src={about2}
              alt="Design process sketches"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* 5th Bento - About Me Bio */}
          <div className="flex h-[300px] flex-col justify-center gap-6 overflow-hidden rounded-xl border border-[#E5E5E5] bg-white p-8">
            <div className="space-y-2">
              <p className="text-lg font-medium italic leading-relaxed text-[#1a1a1a]">
                &ldquo;Bridging the gap between technical constraints and user needs.&rdquo;
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium italic leading-relaxed text-[#1a1a1a]">
                &ldquo;Great design should feel invisible&mdash;it should just work.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
