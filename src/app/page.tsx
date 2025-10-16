import Hero from "@/components/Hero";
import { InfoSection } from "@/components/InfoSection";
import SkillsSection from "@/components/Skills";
import { WorkTimeline } from "@/components/WorkTimeline";
import FooterSection from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
        <InfoSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="experience">
        <WorkTimeline />
      </section>

      <section id="contact">
        <FooterSection />
      </section>
    </>
  );
}
