import { Link } from "react-router-dom";
import project02Cover from "@/assets/Project02-01.jpg";
import dfmCover from "@/assets/DFM-landing-page.png";
import olaCover from "@/assets/Ola-office-cover-1.png";
import mediaAntCover from "@/assets/The-media-ant-cover.png";

const projects = [
  {
    id: "ola-office",
    title: "OLA Office Solving the \"Middle Class Commute\" Problem",
    description: "This case study explores OLA Office — a feature designed within OLA Cabs app.",
    image: olaCover,
    colSpan: "md:col-span-4",
    externalLink: "https://www.behance.net/gallery/241349815/OLA-Office-Solving-the-Middle-Class-Commute-Problem"
  },
  {
    id: "media-ant",
    title: "The Media Ant Website UX Enhancement Case Study",
    description: "Improving usability, clarity, and conversion across The Media Ant platform through a user-centered redesign.",
    image: mediaAntCover,
    colSpan: "md:col-span-2",
    externalLink: "https://www.behance.net/gallery/215195761/The-Media-Ant-Website-UX-Enhancement-Case-Study"
  },
  {
    id: "landing-pages",
    title: "Landing Page Design",
    description: "Designing high-conversion marketing and SaaS websites with a focus on clarity and visual excellence.",
    image: dfmCover,
    colSpan: "md:col-span-3",
  },
  {
    id: "logo-and-branding",
    title: "Logo and branding",
    description: "Crafting a cohesive visual language that resonates with users and stands the test of time.",
    image: project02Cover,
    colSpan: "md:col-span-3",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="bg-[#F8F8F8] px-6 pt-20 pb-16 md:px-12 md:pt-24 md:pb-20 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <header className="mb-14 text-center md:mb-20">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Selected Work
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            A selection of projects spanning product design, design systems, and user research.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:gap-6">
          {projects.map((project, index) => {
            const isLarge = project.colSpan === "md:col-span-4";
            const isBottomCard = index >= 2;
            return (
              <div
                key={project.id}
                className={`${project.colSpan} group`}
              >
                {project.externalLink ? (
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    {/* Image Block - separate */}
                    <div className={`relative mb-5 w-full overflow-hidden rounded-[2.5rem] ${isLarge
                      ? "aspect-[16/9]"
                      : isBottomCard
                        ? "aspect-[2/1]"
                        : "aspect-[4/3]"
                      }`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Text Block - separate */}
                    <div className="flex w-full flex-col">
                      <h3 className="mb-2 text-lg font-bold leading-tight text-[#1a1a1a] md:text-xl">
                        {project.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#666666] md:text-base">
                        {project.description}
                      </p>
                    </div>
                  </a>
                ) : (
                  <Link
                    to={`/case-study/${project.id}`}
                    className="block w-full"
                  >
                    {/* Image Block - separate */}
                    <div className={`relative mb-5 w-full overflow-hidden rounded-[2.5rem] ${isLarge
                      ? "aspect-[16/9]"
                      : isBottomCard
                        ? "aspect-[2/1]"
                        : "aspect-[4/3]"
                      }`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Text Block - separate */}
                    <div className="flex w-full flex-col">
                      <h3 className="mb-2 text-lg font-bold leading-tight text-[#1a1a1a] md:text-xl">
                        {project.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#666666] md:text-base">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
