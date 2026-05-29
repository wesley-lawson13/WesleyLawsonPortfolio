import { Card, CardContent } from "./ui/Card";

export const AboutSection = () => {
  const cardInfo = [
    {
      header: "Graduated from Boston College",
      date: "May 18, 2026",
      info: "I have officially graduated from Boston College with a B.A. in Computer Science. I completed my degree with a 3.71 cumulative GPA, earning cum laude distinction at the commencement ceremony."
    },
    {
      header: "Lembas Links Is Now Deployed",
      date: "April 14, 2026",
      info: "I deployed my most recent project, Lembas Links, which is a Lord of the Rings themed URL shortener built in Go (Gin) utilizing a Postgres database and Redis caching. In building Lembas Links, I gained hands-on experience designing and implementing a REST API, authentication middleware, and rate limiting, and was able to apply both my love of Lord of the Rings and my skills from my Natural Language Processing coursework in a learning scenario.",
    },
    {
      header: "Built a BitTorrent Client",
      date: "March 6, 2026",
      info: "I finished building a BitTorrent client in Go. This project helped me further my understanding of networking concepts through a hands-on, in depth exploration of how peer-to-peer file sharing works at a granular level, reinforcing networking fundamentals and improving my skills in Go and systems programming.",
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
              I'm a Boston College alumni that graduated with a Computer Science degree in May of 2026. Through
              coursework and personal projects, I have developed strong
              technical skills with an interest in backend development and
              systems-level development. Specifically, I have experience designing
              production-grade APIs, building networking projects in Golang,
              and implementing OS level features in C and Rust.
            </p>
            <p className="text-base sm:text-lg text-dark mb-3 font-light indent-8">
              During my time at BC, I was fortunate to find a welcoming community
              in the Trips and Excursions department of the Boston College Campus
              Activities Board, as a Captain in the Freshmen League, as a Teaching Assistant
              in the CS department, and of course, through my friends and roommates. 
              I'm truly grateful for my BC experience because of this community,
              but also for allowing me to grow both technically and personally through
              my coursework, which challenged me to think critically about the broader
              impact of the things I build, and the importance of passion, collaboration,
              and impact in the problems we choose to solve, and the life we choose to live.
            </p>
            <p className="text-base sm:text-lg text-dark mb-3 font-light indent-8">
              Currently, I'm seeking a full-time job in software engineering, and would love
              to be apart of a hands-on team where I can learn and develop my skills as a 
              programmer. In my free time, however, I look forward to spending time with 
              friends, hiking, playing board games, and getting back into running. Some of 
              my personal goals for this summer are to run a half-marathon and learn the
              guitar.
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
