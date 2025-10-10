import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code } from "lucide-react";
import { FaReact, FaHtml5, FaPython, FaPhp, FaJava, FaGithub, FaDocker, FaBootstrap } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { TbBrandMysql } from "react-icons/tb";
import { CgFigma } from "react-icons/cg";
import { SiDjango, SiPrisma } from "react-icons/si";
import { BiLogoSpringBoot, BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoDocumentText } from "react-icons/io5";


const skills = [
  // Languages
  { name: "HTML/CSS", category: "Programming Languages", icon: FaHtml5 },
  { name: "JavaScript", category: "Programming Languages", icon: BiLogoJavascript },
  { name: "TypeScript", category: "Programming Languages", icon: BiLogoTypescript },
  { name: "Python", category: "Programming Languages", icon: FaPython },
  { name: "Golang", category: "Programming Languages", icon: FaGolang },
  { name: "C/C++", category: "Programming Languages", icon: Code },
  { name: "PHP", category: "Programming Languages", icon: FaPhp },
  { name: "Java", category: "Programming Languages", icon: FaJava },
  { name: "SQL", category: "Programming Languages", icon: TbBrandMysql },

  // Tools and Frameworks
  { name: "Git/GitHub",category: "Tools and Frameworks", icon: FaGithub },
  { name: "Docker", category: "Tools and Frameworks", icon: FaDocker },
  { name: "Figma", category: "Tools and Frameworks",icon: CgFigma },
  { name: "Django", category: "Tools and Frameworks", icon: SiDjango },
  { name: "React", category: "Tools and Frameworks", icon: FaReact },
  { name: "Spring Boot", category: "Tools and Frameworks", icon: BiLogoSpringBoot },
  { name: "Bootstrap CSS", category: "Tools and Frameworks", icon: FaBootstrap },
  { name: "Tailwind CSS", category: "Tools and Frameworks", icon: RiTailwindCssFill },
  { name: "IMathAS", category: "Tools and Frameworks", icon: Code },
  { name: "Prisma", category: "Tools and Frameworks", icon: SiPrisma },
];

const categories = ["Programming Languages", "Tools and Frameworks"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("Programming Languages")

    const filteredSkills = skills.filter(
        (skill) => skill.category === activeCategory
    );
    
    return (
        <section
            id="skills"
            className="bg-background py-12 px-4 relative" 
        >
            <div className="container mx-auto z-10 max-w-5xl mb-5">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-dark mb-4">Technical <span className="text-blue">Skills</span></h2>
                    <p className="text-lg text-dark font-normal">Through Coursework, Relevant Experiences, and Projects, I've Developed the Following Proficiencies:</p>
                </div>

                <div className="flex flex-wrap justify-center mx-auto gap-2 mb-8">
                    {categories.map((category, key) => (
                        <button
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full",
                            activeCategory === category
                            ? "bg-blue/70 text-background"
                            : "bg-background text-blue hover:bg-muted"
                        )}
                        >
                        {category}
                        </button>
                    ))}
                </div>

                <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-20">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-muted/20 rounded-xl p-3 border-blue shadow-md relative justify-center flex gap-2 hover:scale-102 hover:shadow-lg transition-shadow"
                        >
                            <div className="items-center">
                                <skill.icon className="text-beige" size={30}/>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold text-lg text-dark">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="relative justify-center items-center text-center">
                    <p className="font-italic font-normal text-dark mb-5"><i>Want to find out more? View my resume here.</i></p>
                    <a
                        href="/Lawson, Wesley Portfolio Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-dark text-background px-6 py-3 rounded-full font-semibold shadow-md hover:bg-deepgreen transition-all duration-300"
                    >
                        <IoDocumentText size={18} />
                        <span>View Resume</span>
                    </a>

                </div>

            </div>

        </section>
    );
};