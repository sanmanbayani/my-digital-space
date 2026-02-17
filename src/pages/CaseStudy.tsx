import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

// Project data - in a real app, this would come from an API or data file
const projectData: Record<string, {
  title: string;
  description: string;
  image: string;
  year: string;
  role: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}> = {
  "architecting-phonepe-consumer-app-voice": {
    title: "Architecting the PhonePe Consumer app's voice",
    description: "How we defined a voice for that was consistently resonant across all contexts",
    image: work1,
    year: "2024",
    role: "Product Designer",
    client: "PhonePe",
    challenge: "PhonePe needed a consistent brand voice across all consumer touchpoints. The app's communication lacked coherence, with different teams using varying tones and styles that created confusion and diluted brand identity. Users experienced inconsistent messaging that didn't feel unified or trustworthy.",
    solution: "I led the development of a comprehensive voice and tone guide for the PhonePe Consumer app. Through extensive user research and brand workshops, we defined a voice framework that balanced approachability with professionalism. The guide included principles for different contexts—from error messages to success states—ensuring every interaction felt authentically PhonePe.",
    results: [
      "Achieved 95% consistency across all consumer touchpoints",
      "Improved user trust scores by 35%",
      "Reduced content review cycles by 40%",
      "Created scalable voice guidelines adopted by 50+ team members"
    ],
    technologies: ["Content Strategy", "User Research", "Design Systems", "Figma", "Brand Guidelines"]
  },
  "building-custom-tooling-design-velocity": {
    title: "Building custom tooling to increase design velocity",
    description: "How we free up our designers' intuition by streamlining the logistics of design",
    image: work2,
    year: "2024",
    role: "Product Designer",
    client: "Design Team",
    challenge: "Designers were spending too much time on repetitive tasks and logistics rather than creative problem-solving. The lack of custom tooling meant designers had to manually handle asset management, version control, and design system updates, reducing their ability to focus on user experience.",
    solution: "I led the development of custom design tooling that automated repetitive workflows and streamlined design operations. Built internal tools for asset management, design system integration, and automated design handoff processes that freed up designers to focus on intuition-driven design decisions.",
    results: [
      "Reduced time spent on logistics by 60%",
      "Increased design output by 45%",
      "Improved designer satisfaction scores by 50%",
      "Streamlined design-to-development handoff by 40%"
    ],
    technologies: ["Figma API", "JavaScript", "Design Systems", "Automation", "Tooling"]
  },
  "creating-ds-documentation-empowers": {
    title: "Creating DS documentation that empowers",
    description: "The story of how we built the documentation hub for Mint DS",
    image: work3,
    year: "2024",
    role: "Design Systems Lead",
    client: "Mint Design System",
    challenge: "The design system lacked comprehensive documentation, making it difficult for designers and developers to discover and use components effectively. Teams were reinventing components or using outdated versions, leading to inconsistency across products.",
    solution: "I designed and built a comprehensive documentation hub for Mint DS that goes beyond component specs. Created interactive examples, usage guidelines, accessibility documentation, and code snippets that empower teams to build consistent, accessible interfaces efficiently.",
    results: [
      "Increased design system adoption by 70%",
      "Reduced component duplication by 55%",
      "Improved developer onboarding time by 50%",
      "Created a scalable documentation framework"
    ],
    technologies: ["Documentation", "Design Systems", "Accessibility", "Developer Experience", "Content Strategy"]
  },
  "move-fast-dont-break-trust": {
    title: "Move fast, don't break trust",
    description: "Read about the design decisions behind the PhonePe app redesign.",
    image: work4,
    year: "2024",
    role: "Product Designer",
    client: "PhonePe",
    challenge: "PhonePe needed a major app redesign to modernize the experience and introduce new features, but had to maintain user trust during the transition. Users were familiar with the existing interface, and any missteps could lead to confusion and loss of trust.",
    solution: "I led the redesign with a focus on progressive enhancement and maintaining familiar patterns while introducing improvements. Used extensive user testing, phased rollouts, and clear communication to ensure users felt confident throughout the transition. Prioritized trust-building through consistent, predictable interactions.",
    results: [
      "Maintained 95% user retention during redesign",
      "Improved user satisfaction scores by 40%",
      "Increased feature discovery by 35%",
      "Successfully launched major redesign without breaking user trust"
    ],
    technologies: ["User Research", "Prototyping", "Design Systems", "A/B Testing", "Product Strategy"]
  }
};

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background pb-32">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4 md:px-12 lg:px-24">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground hover:bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              Back to Work
            </Button>
          </Link>
        </div>
      </header>

      <article>
        {/* Title & Metadata Section */}
        <div className="container mx-auto px-6 pt-16 md:px-12 lg:px-24">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl lg:leading-[1.1]">
              {project.title}
            </h1>

            <div className="grid grid-cols-2 gap-y-6 gap-x-8 border-y py-8 md:grid-cols-4">
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Year</span>
                <span className="font-medium">{project.year}</span>
              </div>
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Role</span>
                <span className="font-medium">{project.role}</span>
              </div>
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Client</span>
                <span className="font-medium">{project.client}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto mt-12 px-4 md:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover aspect-video"
              loading="eager"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-6 py-16 md:px-12 lg:px-24">
          <div className="mx-auto max-w-3xl space-y-16">

            {/* Introduction / Description */}
            <div className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
              {project.description}
            </div>

            {/* Challenge Section */}
            <section>
              <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">
                The Challenge
              </h2>
              <p className="text-xl leading-relaxed text-foreground/90">
                {project.challenge}
              </p>
            </section>

            {/* Solution Section */}
            <section>
              <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">
                The Solution
              </h2>
              <p className="text-xl leading-relaxed text-foreground/90">
                {project.solution}
              </p>
            </section>

            {/* Results Section */}
            <section className="rounded-2xl bg-muted/30 p-8 md:p-10">
              <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">
                Key Results
              </h2>
              <ul className="grid gap-4 md:grid-cols-2">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-base text-foreground/80">{result}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Technologies Section */}
            <section>
              <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Technologies & Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Navigation */}
            <div className="border-t pt-12">
              <Link to="/">
                <Button variant="outline" size="lg" className="gap-2 group">
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default CaseStudy;
