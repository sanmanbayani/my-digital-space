import about1 from "@/assets/about-1.jpg";
import CarouselBox from "./bento/CarouselBox";
import LocationBox from "./bento/LocationBox";
import SkillsBox from "./bento/SkillsBox";
import BioBox from "./bento/BioBox";
import ProjectSpotlight from "./bento/ProjectSpotlight";

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

        {/* Top row: Featured Project (wide) + Bio */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:gap-6">
          {/* 1st Bento - Project Spotlight (wide) */}
          <div className="md:col-span-4 h-[400px]">
            <ProjectSpotlight />
          </div>

          {/* 2nd Bento - Creative Bio */}
          <div className="md:col-span-2 h-[400px]">
            <BioBox />
          </div>
        </div>

        {/* Bottom row: Skills + Carousel + Location */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
          {/* 3rd Bento - Skills */}
          <div className="h-[320px]">
            <SkillsBox />
          </div>

          {/* 4th Bento - Infinite Carousel */}
          <div className="h-[320px]">
            <CarouselBox />
          </div>

          {/* 5th Bento - Location */}
          <div className="h-[320px]">
            <LocationBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
