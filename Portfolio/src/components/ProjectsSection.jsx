import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "PeerAssess", 
        description: "",
        image: "/projects/PeerAssess.png",
        tags: ["Django", "Python", "GoogleOAuth", "Web Development", "Bootstrap", "Git", "Agile Development"],
        demo: "",
        githubUrl: "",
    },
    {
        id: 2,
        title: "PeerAssess", 
        description: "",
        image: "",
        tags: [],
        githubUrl: "",
    },
    {
        id: 3,
        title: "PeerAssess", 
        description: "",
        image: "",
        tags: [],
        githubUrl: "",
    }
]

export const ProjectsSection = () => {
    return (
        <section
            id="projects"
            className="py-12 px-4 relative items-center justify-center bg-muted/30"
        >
            <div className="mx-auto z-10 max-w-7xl">

                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-dark mb-4">Featured <span className="text-blue">Projects</span></h2>
                    <p className="text-lg text-dark font-normal">My favorite projects and some I'm excited to debut shortly.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                            key={key}
                            className="bg-background border-muted shadow-xl rounded-xl"
                        >
                            <div className="h-48 overflow-hidden rounded-xl mx-auto mb-5">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="mx-2 text-left text-xl mb-5">
                                <h5 className="text-dark font-bold mb-3">{project.title}</h5>
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

            </div>

        </section>
    );
};