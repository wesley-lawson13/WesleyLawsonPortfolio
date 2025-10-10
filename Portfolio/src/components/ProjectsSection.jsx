import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "collaBCrate", 
        description: "",
        image: "/projects/ComingSoon.png",
        tags: ["React", "Tailwind CSS", "Figma", "Prisma", "Supabase", "Full-Stack", "Web Development"],
        githubUrl: "",
    },
    {
        id: 2,
        title: "Wesley Lawson Portfolio", 
        description: "",
        image: "/projects/PortfolioImage.png",
        tags: ["React", "Figma", "TypeScript", "Tailwind CSS", "Web Development"],
        githubUrl: "https://github.com/wesley-lawson13/WesleyLawsonPortfolio",
    },
    {
        id: 3,
        title: "PeerAssess", 
        description: "",
        image: "/projects/PeerAssess.png",
        tags: ["Django", "Python", "GoogleOAuth", "Web Development", "Bootstrap", "Git", "Agile Development"],
        githubUrl: "https://github.com/CSCI3356-Spring2025/Ctrl-Alt-Elite",
    },
]

export const ProjectsSection = () => {
    return (
        <section
            id="projects"
            className="py-12 px-4 relative items-center justify-center bg-muted/30"
        >
            <div className="mx-auto z-10 max-w-7xl container">

                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-dark mb-4">Featured <span className="text-blue">Projects</span></h2>
                    <p className="text-lg text-dark font-normal">My recent projects and some I'm excited to debut shortly.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {projects.map((project, key) => (
                        <div 
                            key={key}
                            className="bg-background border-muted shadow-lg rounded-xl hover:scale-101 hover:shadow-xl transition-shadow"
                        >
                            <div className="h-48 overflow-hidden rounded-xl mx-auto mb-5">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="mx-2 text-center text-xl mb-5">
                                <h5 className="text-dark font-bold mb-2">{project.title}</h5>
                                <p className="text-dark font-light text-sm mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci voluptas modi fugiat esse nam?</p>
                                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                    {project.tags.map((tag) => (
                                        <span className="bg-muted rounded-lg text-dark border-muted px-2 py-2 text-xs">{tag}</span>
                                    ))}
                                </div>
                                
                            </div>
                            <div className="flex flex-wrap gap-4 mb-3 mx-2 relative">
                                <a href={project.githubUrl} 
                                    className="inline-flex gap-2 mx-auto px-4 py-2 bg-dark border-dark text-background hover:bg-deepgreen rounded-xl text-lg"
                                >
                                    <FaGithub size={25} />
                                    <span>Source Code</span>
                                </a>

                            </div>
                            
                        </div>
                    ))}
                </div>

                <div className="relative justify-center items-center text-center">
                    <a
                        href="https://github.com/wesley-lawson13"
                        className="inline-flex items-center gap-2 bg-background border border-dark text-dark px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-muted transition-all duration-300"
                    >
                        <span>View All Projects</span>
                        <ExternalLink size={30} />
                    </a>

                </div>

            </div>

        </section>
    );
};