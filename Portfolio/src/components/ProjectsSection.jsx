import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

const categories = [
  "Systems / Low-Level Programming",
  "Backend / API Development",
  "NLP / AI",
  "Full-Stack Web Development",
];

const projects = [
  {
    id: 1,
    title: "Lembas Links",
    description:
      "A production-grade URL shortener in Go that turns Lord of the Rings quotes into memorable short links via an NLP pipeline (spaCy + Claude API), with Redis caching, API key auth, and async click analytics. Deployed to dual EC2 instances on a custom VPC.",
    image: "/projects/Lembas-Links.png",
    tags: [
      "Go",
      "Gin",
      "Redis",
      "Postgres",
      "Docker",
      "AWS (EC2, VPC)",
      "nginx",
      "Python",
      "spaCy",
      "REST API",
      "Auth Middleware",
      "Rate Limiting"
    ],
    githubUrl: "https://github.com/wesley-lawson13/lembas-links",
    deployedOrDemo: true,
    liveUrl: "http://54.164.172.135",
    cats: ["Backend / API Development", "NLP / AI"],
  },
  {
    id: 2,
    title: "xv6 Operating System Extensions",
    description:
      "A kernel-level extension of xv6 in C, implementing custom system calls and redesigning the process scheduler into a Multi-Level Feedback Queue to get hands-on experience with low-level systems programming.",
    image: "/projects/xv6_Coursework.png",
    tags: [
      "C",
      "xv6",
      "Operating Systems",
      "Kernel Development",
      "Systems Programming",
      "MFQ Scheduler",
      "System Calls",
      "Call Stack Traversal",
      "In Class Projects",
    ],
    githubUrl: "https://github.com/wesley-lawson13/Xv6-Extensions",
    deployedOrDemo: false,
    liveUrl: null,
    cats: ["Systems / Low-Level Programming"],
  },
  {
    id: 3,
    title: "BitTorrent Client",
    description:
      "A BitTorrent client built from scratch in Go that downloads a real Debian ISO from live peers through bencode parsing, tracker discovery, the peer wire protocol, and SHA-1 verified pieces pulled by a per-peer worker pool.",
    image: "/projects/BitTorrent-Output.png",
    tags : [
      "Go",
      "Networking",
      "TCP",
      "Concurrency",
      "BitTorrent",
    ],
    githubUrl: "https://github.com/wesley-lawson13/Bit-Torrent-Client",
    deployedOrDemo: false,
    cats: ["Systems / Low-Level Programming"],
  },
  {
    id: 4,
    title: "Recursive DNS Server",
    description:
      "A recursive DNS forwarder built in Go from scratch, communicating over raw UDP sockets and following RFC 1035 wire format parsed byte-by-byte, resolving from a local zone file, a TTL-aware cache, then upstream, with 86.5% test coverage.",
    image: "/projects/DNSOutput.png",
    tags : [
      "Go",
      "Networking",
      "DNS",
      "UDP",
      "Concurrency",
      "In Class Projects"
    ],
    githubUrl: "https://github.com/wesley-lawson13/Networks-Projects",
    deployedOrDemo: false,
    cats: ["Systems / Low-Level Programming"],
  },
  {
    id: 5,
    title: "DevCheck",
    description:
      "A full-stack checklist app for solo web developers that simplifies their programming workflow, tracks meaningful progress, and maximizes efficiency through every stage of development.",
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
    cats: ["Full-Stack Web Development"]
  },
  {
    id: 6,
    title: "NLP Stock Prediction",
    description: "An NLP project analyzing the sentiment of financial headlines from 2008-2016 and applying them to predict whether the market went up or down on a given day. Presentation attached.",
    image: "/projects/headline-sentiment-wordcloud.png",
    tags: [
      "Python",
      "PyTorch",
      "NumPy",
      "Pandas",
      "VADER sentiment",
      "Mistral",
      "Data Processing / Cleansing",
      "Prompt Engineering",
      "In Class Projects",
    ],
    githubUrl: "https://github.com/wesley-lawson13/headline-sentiment-stock-prediction",
    deployedOrDemo: true,
    liveUrl: "/projects/headline-sentiment-presentation.pdf",
    cats: ["NLP / AI"]
  },
];

const VISIBLE_TAGS = 6;

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedIds, setExpandedIds] = useState([]);

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "All" || project.cats.includes(activeCategory),
  );

  const isExpanded = (id) => expandedIds.includes(id);

  const toggleProjectTags = (id) =>
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );

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
            project is <span className="text-blue font-semibold">LIVE</span> or has an associated demo / presentation,
            click on the light blue button to take you to the see the linked resource!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm",
                activeCategory === category
                  ? "bg-blue/70 text-background"
                  : "bg-background text-blue hover:bg-muted",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-background border-muted shadow-lg rounded-xl hover:scale-101 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div>
                <div className="h-48 overflow-hidden rounded-xl mx-auto mb-5 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex flex-wrap gap-1.5">
                    {project.cats.map((cat) => (
                      <span
                        key={cat}
                        className="bg-dark/90 text-background text-[10px] tracking-wider uppercase font-bold px-2 py-1 rounded-lg"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mx-2 text-center text-xl mb-5">
                  <div className="flex justify-center gap-2 items-center min-h-14">
                    {project.deployedOrDemo && (
                      <a className="bg-blue text-background rounded-xl text-sm p-1.5" href={project.liveUrl}>
                        LIVE
                      </a>
                    )}
                    <h5 className="text-dark font-bold">{project.title}</h5>
                  </div>

                  <p className="text-dark font-light text-sm px-2 pb-2 line-clamp-5 min-h-[6.25rem]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center content-start min-h-[4.25rem]">
                    {(isExpanded(project.id)
                      ? project.tags
                      : project.tags.slice(0, VISIBLE_TAGS)
                    ).map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted rounded-lg text-dark border-muted px-2 py-2 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > VISIBLE_TAGS && (
                      <button
                        type="button"
                        onClick={() => toggleProjectTags(project.id)}
                        aria-expanded={isExpanded(project.id)}
                        aria-label={
                          isExpanded(project.id)
                            ? `Show fewer tags for ${project.title}`
                            : `Show all ${project.tags.length} tags for ${project.title}`
                        }
                        className={cn(
                          "rounded-lg px-2 py-2 text-xs cursor-pointer transition-colors",
                          isExpanded(project.id)
                            ? "bg-blue/40 text-dark font-semibold border border-blue/40 hover:bg-blue/55 hover:border-blue/55"
                            : "bg-muted/60 text-dark hover:bg-blue/20",
                        )}
                      >
                        {isExpanded(project.id)
                          ? "Show less"
                          : `+${project.tags.length - VISIBLE_TAGS}`}
                      </button>
                    )}
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
