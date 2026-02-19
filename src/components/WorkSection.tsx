import { Link } from "react-router-dom";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import brandingCover from "@/assets/Branding-cover-image.gif";
import project02Cover from "@/assets/Project02-01.jpg";



const projects = [
  {
    id: "architecting-phonepe-consumer-app-voice",
    title: "Architecting the PhonePe Consumer app's voice",
    description: "How we defined a voice for that was consistently resonant across all contexts",
    image: work1,
    colSpan: "md:col-span-4",
  },
  {
    id: "building-custom-tooling-design-velocity",
    title: "Building custom tooling to increase design velocity",
    description: "How we free up our designers' intuition by streamlining the logistics of design",
    image: work2,
    colSpan: "md:col-span-2",
  },
  {
    id: "creating-ds-documentation-empowers",
    title: "Creating DS documentation that empowers",
    description: "The story of how we built the documentation hub for Mint DS",
    image: work3,
    colSpan: "md:col-span-3",
  },
  {
    id: "forging-distinct-identity",
    title: "Forging a distinct identity",
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
                <Link
                  to={`/case-study/${project.id}`}
                  className="block w-full"
                >
                  {/* Image Block - separate */}
                  <div className={`relative mb-5 w-full overflow-hidden rounded-xl ${isLarge
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
