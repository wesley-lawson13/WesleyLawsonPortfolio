import React from "react"
import { Navbar } from "../components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Analytics } from '@vercel/analytics/react';

export const Home = () => {

    return (
        <div className="min-h-screen">

            <Analytics />
            <PageTransition>
                <Navbar />
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
                <Footer />
            </PageTransition>
                
        </div>
    );
};