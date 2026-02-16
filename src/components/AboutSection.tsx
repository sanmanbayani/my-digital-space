import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="px-8 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Top row: 2 boxes */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Quote card */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 md:min-h-[280px]">
            <p className="text-lg font-semibold leading-relaxed text-foreground">
              "I believe great design bridges complex systems and the people who use them every day."
            </p>
            <div className="mt-8">
              <p className="font-medium text-foreground">Sanman Bayani</p>
              <p className="text-sm text-muted-foreground">Product Designer</p>
            </div>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-2xl md:min-h-[280px]">
            <img
              src={about1}
              alt="Sanman at work"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom row: 3 boxes */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-8 md:min-h-[240px]">
            <h3 className="mb-4 text-xl text-foreground">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-2">
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
                  className="rounded-full bg-secondary px-4 py-1.5 text-sm text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl md:min-h-[240px]">
            <img
              src={about2}
              alt="Design process sketches"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 md:min-h-[240px]">
            <h3 className="mb-4 text-xl text-foreground">
              Experience
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span className="text-foreground">TAS India Pvt. Ltd.</span>
                <span>UI/UX Designer</span>
              </li>
              <li className="flex justify-between">
                <span className="text-foreground">Independent Designer</span>
                <span>Client Work</span>
              </li>
              <li className="flex justify-between">
                <span className="text-foreground">ORU Phones</span>
                <span>UI/UX Intern</span>
              </li>
              <li className="flex justify-between">
                <span className="text-foreground">NCS Groups</span>
                <span>Associate Engineer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
