import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import brandingCover from "@/assets/Branding-cover-image.gif";

// Project 00 Images
import p0_1 from "@/assets/Project00-01.png";
import p0_2 from "@/assets/Project00-02.png";
import p0_3 from "@/assets/Project00-03.png";
import p0_4 from "@/assets/Project00-04.png";
import p0_5 from "@/assets/Project00-05.png";


// Project 01 Images
import p1_1 from "@/assets/Project01-01.png";
import p1_2 from "@/assets/Project01-02.png";
import p1_3 from "@/assets/Project01-03.png";
import p1_4 from "@/assets/Project01-04.png";
import p1_5 from "@/assets/Project01-05.png";
import p1_6 from "@/assets/Project01-06.png";

// Project 02 Images
import p2_1 from "@/assets/Project02-01.jpg";
import p2_2 from "@/assets/Project02-02.jpg";
import p2_3 from "@/assets/Project02-03.jpg";
import p2_4 from "@/assets/Project02-04.jpg";
import p2_5 from "@/assets/Project02-05.jpg";

// Project 03 Images
import p3_1 from "@/assets/Project03-01.jpg";
import p3_2 from "@/assets/Project03-02.gif";
import p3_3 from "@/assets/Project03-03.jpg";
import p3_4 from "@/assets/Project03-04.jpg";
import p3_5 from "@/assets/Project03-05.jpg";


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
  subProjects?: {
    id: string;
    title: string;
    description: string;
    images: string[];
  }[];
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
  },
  "forging-distinct-identity": {
    title: "Forging a distinct identity",
    description: "Crafting a cohesive visual language that resonates with users and stands the test of time.",
    image: brandingCover,
    year: "2024",
    role: "Brand Designer",
    client: "Multiple Clients",
    challenge: "Creating distinct brand identities in saturated markets requires a deep understanding of core values and visual storytelling. The challenge was to develop unique visual systems that are both flexible enough for various applications and consistent enough to build strong brand recognition.",
    solution: "Developed comprehensive brand identity systems including logo design, color palettes, typography, and visual assets. Created detailed brand guidelines to ensure consistency across all touchpoints and designed marketing collateral that effectively communicates the brand's message.",
    results: [
      "Established strong visual identities for 3 major clients",
      "Created scalable design systems for cross-platform consistency",
      "Delivered comprehensive brand guidelines",
      "Positive client feedback and successful market launches"
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "Brand Strategy", "Visual Design", "Typography"],
    subProjects: [
      {
        id: "project-00",
        title: "Redefining Digital Presence",
        description: "A strategic overhaul of the brand's digital footprints, focusing on minimalism and user-centric design principles. This project involved deep user research to understand the core demographic, resulting in a visual language that speaks directly to the modern consumer. The result is a fluid, responsive identity system that adapts seamlessly across mobile, web, and print mediums, establishing a distinct market position.",
        images: [p0_1, p0_2, p0_3, p0_4, p0_5]
      },
      {
        id: "project-01",
        title: "Evolving the Brand Narrative",
        description: "Transitioning a legacy brand into the digital age without losing its heritage. We carefully balanced traditional elements with modern typography and vibrant color palettes to create a bridge between the past and the future. Key deliverables included a comprehensive style guide, motion assets for digital campaigns, and a complete redesign of the flagship product interface.",
        images: [p1_1, p1_2, p1_3, p1_4, p1_5, p1_6]
      },
      {
        id: "project-02",
        title: "Tech-Forward Visual Systems",
        description: "Developing a cutting-edge visual identity for a high-growth fintech startup. The design system prioritizes trust and clarity, utilizing clean lines and data visualization to communicate complex financial concepts simply. We built a robust component library that allowed the internal team to scale rapid product iterations while maintaining visual consistency across the entire ecosystem.",
        images: [p2_1, p2_2, p2_3, p2_4, p2_5]
      }
    ]
  }

};

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectData[slug] : null;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeSubProject, setActiveSubProject] = useState<string | null>(null);

  const openLightbox = (subProjectId: string) => {
    setActiveSubProject(subProjectId);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveSubProject(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

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



        {/* Sub Projects (Bento Grids) */}
        {project.subProjects && (
          <div className="space-y-32 mt-12 w-full px-6 md:px-12 lg:px-24">
            {project.subProjects.map((subProject) => (
              <section key={subProject.id} className="space-y-8 w-full max-w-3xl mx-auto">
                <div className="space-y-2 max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {subProject.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {subProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                  {subProject.images.map((img, idx) => {
                    let className = "relative overflow-hidden rounded-xl bg-muted group cursor-pointer border border-zinc-200/50 dark:border-zinc-800/50";
                    const totalImages = subProject.images.length;

                    // Grid Logic for 4-column layout
                    if (idx === 0) {
                      // Hero image: 2x2
                      className += " md:col-span-2 md:row-span-2";
                    } else if (totalImages === 6 && idx === 5) {
                      // For 6 images: Last one takes full width to balance the bottom row
                      className += " md:col-span-4";
                    } else {
                      // Standard: 1x1
                      className += " md:col-span-1";
                    }

                    return (
                      <div
                        key={idx}
                        className={className}
                        onClick={() => openLightbox(subProject.id)}
                      >
                        <img
                          src={img}
                          alt={`${subProject.title} - ${idx + 1}`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Lightbox Overlay */}
        {/* Lightbox Overlay */}
        {lightboxOpen && activeSubProject && (
          <div
            className="fixed inset-0 z-[100] flex justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="fixed right-6 top-6 rounded-full bg-black/50 p-2 text-white hover:bg-white/20 transition-colors z-[110]"
            >
              <X className="h-6 w-6" />
            </button>

            <div
              className="w-full max-w-5xl px-4 py-16 flex flex-col gap-8 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {project.subProjects?.find(p => p.id === activeSubProject)?.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Project detail ${idx + 1}`}
                  className="w-full h-auto object-contain rounded-lg shadow-2xl"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        )}


        {/* Navigation */}
        <div className="container mx-auto px-6 pt-12 md:px-12 lg:px-24">
          <div className="border-t pt-12">
            <Link to="/">
              <Button variant="outline" size="lg" className="gap-2 group">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default CaseStudy;
