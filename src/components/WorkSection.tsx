import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

const projects = [
  {
    title: "Industry 4.0 Dashboards",
    description: "Redesigned SCADA data into intuitive dashboards, improving operator decision-making by 30%.",
    image: work1,
    span: "md:col-span-7",
  },
  {
    title: "D2C Shopify Storefronts",
    description: "Optimized user journeys for e-commerce brands, boosting conversions by 20%.",
    image: work2,
    span: "md:col-span-5",
  },
  {
    title: "ORU Phones Marketplace",
    description: "Simplified the phone resale journey with redesigned navigation and reduced friction.",
    image: work3,
    span: "md:col-span-5",
  },
  {
    title: "Enterprise Application Interfaces",
    description: "Prototyped enterprise UIs with focus on information hierarchy and complex interactions.",
    image: work4,
    span: "md:col-span-7",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="px-8 py-24 md:px-16 lg:px-24">
      <h2 className="mb-16 text-center text-3xl text-foreground md:text-4xl">
        Selected Work
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-12">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`${project.span}`}
          >
            <a
              href="#"
              className="group block aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </a>
            <div className="pt-4">
              <h3 className="text-xl text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
