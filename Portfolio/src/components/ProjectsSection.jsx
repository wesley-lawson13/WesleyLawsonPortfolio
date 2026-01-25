import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "DevCheck",
    description:
      "A full-stack checklist app for solo web developers that allows users to simplify their programming workflow, track meaningful progress, and maximize efficiency through every stage of development.",
    image: "/projects/DevCheck.png",
    tags: [
      "React",
      "Django REST framework",
      "Tailwind CSS",
      "JWT Authentication",
      "Full-Stack",
      "Render",
      "Axios",
    ],
    githubUrl: "https://github.com/wesley-lawson13/DevCheck",
    deployedOrDemo: true,
    liveUrl: "https://dev-check-wheat.vercel.app/",
  },
  {
    id: 3,
    title: "Networking Projects", 
    description: "A collection of computer networking projects I completed during the Fall 2025 semester, including a DNS Server and a HTTP Web Server. Additionally, I'm working on a BitTorrent client, which you can also find in the repo below.",
    image: "/projects/DNSOutput.png",
    tags : [
      "Go",
      "Networking",
      "DNS",
      "HTTP",
      "BitTorrent",
      "In Class Projects"
    ],
    githubUrl: "https://github.com/wesley-lawson13/Networks-Projects",
    deployedOrDemo: false,
  },
  {
    id: 3,
    title: "Wesley Lawson Portfolio",
    description:
      "You're looking at it! My personal portfolio website created to improve my frontend development skills and share some of my projects, skills, and hobbies. Thank you for checking it out!",
    image: "/projects/PortfolioImage.png",
    tags: [
      "React",
      "Figma",
      "TypeScript",
      "Tailwind CSS",
      "Web Development",
      "Vercel",
    ],
    githubUrl: "https://github.com/wesley-lawson13/WesleyLawsonPortfolio",
    deployedOrDemo: false,
  },
  {
    id: 4,
    title: "PeerAssess",
    description:
      "An assessment website that allows BC professors and students to recieve real-time feedback and statistics on their work.",
    image: "/projects/PeerAssess.png",
    tags: [
      "Django",
      "Python",
      "GoogleOAuth",
      "Web Development",
      "Bootstrap CSS",
      "Git",
      "Agile Development",
    ],
    githubUrl: "https://github.com/CSCI3356-Spring2025/Ctrl-Alt-Elite",
    deployedOrDemo: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-12 px-4 relative items-center justify-center bg-muted/30"
    >
      <div className="mx-auto z-10 max-w-7xl container">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-dark mb-4">
            Featured <span className="text-blue">Projects</span>
          </h2>
          <p className="text-lg text-dark font-normal">
            My Recent Projects and Some I'm Excited to Debut Shortly. If the
            project is <span className="text-blue font-semibold">LIVE</span>,
            click on the light blue button to take you to the landing page!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, key) => (
            <div
              key={key}
              className="bg-background border-muted shadow-lg rounded-xl hover:scale-101 hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div>
                <div className="h-48 overflow-hidden rounded-xl mx-auto mb-5">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="mx-2 text-center text-xl mb-5">
                  <div className="flex justify-center gap-2 items-center mb-auto">
                    {project.deployedOrDemo && (
                      <a className="bg-blue text-background rounded-xl text-sm p-1.5" href={project.liveUrl}>
                        LIVE
                      </a>
                    )}
                    <h5 className="text-dark font-bold">{project.title}</h5>
                  </div>

                  <p className="text-dark font-light text-sm mb-auto p-2">
                    {project.description} <br />
                  </p>

                  <div className="flex flex-wrap gap-2 mb-auto justify-center">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted rounded-lg text-dark border-muted px-2 py-2 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-3 mx-2 mt-auto">
                  <a
                  href={project.githubUrl}
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
