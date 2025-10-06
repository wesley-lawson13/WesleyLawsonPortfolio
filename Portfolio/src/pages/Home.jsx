import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";

export const Home = () => {

    return (
        <div className="min-h-screen">

            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
        </div>
    );
};