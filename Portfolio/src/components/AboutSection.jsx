import { BookOpenCheck, ClockFading, Code, Dock } from "lucide-react";
import { Card, CardContent } from "./ui/Card";

export const AboutSection = () => {
  // TODO: Add Lembas Links and remove DevCheck once the API is deployed.
  const cardInfo = [
    {
      header: "Built a BitTorrent Client",
      date: "March 6, 2026",
      info: "I have finished building my most recent project, a BitTorrent client in Go. This project helped me further my understanding of networking concepts through a hands-on, in depth ",
    },
    {
      header: "DevCheck Is Now Deployed",
      date: "January 21, 2026",
      info: "DevCheck is now deployed on Vercel (frontend) and Render (backend). It is a full-stack React + Django application built to help developers plan, track, and build projects all the way through from MVP to deployment. For more details, please see the projects section below.",
    },
    {
      header: "Returning as a TA for CSCI1102",
      date: "January 12, 2026",
      info: "I am once again working as a teaching assistant for Professor Aviram's CSCI1102 class. I will be leading a discussion section of 15 students, going over challenging concepts and programming examples in C++.",
    },
    {
      header: "Finished Fall 2025 Semester with a 3.83 GPA",
      date: "December 17, 2025",
      info: "I finished the first semester of my senior year with a 3.83 term GPA. During the semester, I took Algorithms, Computer Networks, and Technology and Culture, along with electives History of Popular Music and America's War in Vietnam.",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 px-4 sm:px-6 md:px-10 relative flex flex-col items-center justify-center bg-muted/30"
    >
      <div className="mx-auto z-10 max-w-7xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-3 sm:mb-4">
            About <span className="text-blue">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-dark font-normal">
            A Little Bit About Myself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
          <div className="text-center md:text-left mx-2 my-auto">
            <h3 className="text-2xl text-center sm:text-3xl font-semibold text-dark mb-4">
              Hi, I'm Wes!
            </h3>
            <p className="text-base sm:text-lg text-dark mb-3 font-light indent-8">
              I'm a senior at Boston College studying Computer Science. Through
              coursework and personal projects, I have developed strong
              technical skills with a specific focus on backend development and
              full-stack development. Specifically, I have experience designing
              RESTful APIs, implementing authentication, and deploying projects
              using modern frameworks like Django and React.
            </p>
            <p className="text-base sm:text-lg text-dark mb-3 font-light indent-8">
              Outside of the classroom, I am an operations coordinator for the
              Trips and Excursions department of the Boston College Campus
              Activities Board where I plan and staff both interdepartment
              events and off-campus events for BC students. Additionally, I am
              an incoming Freshman League Captain, a program in which I
              facilitate and guide weekly discussions with first year men about
              mental health, classes, and social life on campus.
            </p>
            <p className="text-base sm:text-lg text-dark mb-3 font-light indent-8">
              In my free time, I enjoy spending time playing games with friends,
              some of my favorites being Settlers of Catan, Gin Rummy, and
              Codenames. I also love listening to music and finding new music,
              specifically classic rock, country, and folk. If you have any
              music recommendations, I would love to hear them! In 2026, some
              things I am looking forward to are graduating from college,
              running a half marathon, and going on a hiking trip with friends
              in the summer.
            </p>
          </div>

          <div className="text-center md:text-left space-y-2 sm:space-y-4">
            <h3 className="text-2xl text-center sm:text-3xl font-semibold text-blue mb-4">
              Recent Updates:
            </h3>
            {cardInfo.map((card, index) => (
              <Card
                key={index}
                className="p-2 sm:p-2 bg-background border-muted hover:scale-[1.02] transition-transform hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-2 sm:pt-4">
                  <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-beige">
                    {card.header}
                  </div>
                  <div className="text-sm sm:text-md text-dark">
                    <span className="font-semibold">{card.date}:</span>{" "}
                    {card.info}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
