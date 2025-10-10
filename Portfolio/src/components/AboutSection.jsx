import { BookOpenCheck, ClockFading, Code, Dock } from "lucide-react";
import { Card, CardContent } from "./ui/Card";

export const AboutSection = () => {
  const cardInfo = [
    { icon: ClockFading, info: "Years Coding", value: "3+" },
    { icon: BookOpenCheck, info: "Relevant Courses", value: "15" },
    { icon: Code, info: "Proficient Coding Languages", value: "10" },
    { icon: Dock, info: "Mastered Tools and Frameworks", value: "9" },
  ];

  return (
    <section
      id="about"
      className="py-12 px-4 sm:px-6 md:px-10 relative flex flex-col items-center justify-center bg-muted/30"
    >
      <div className="mx-auto z-10 max-w-7xl w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-3 sm:mb-4">
            About <span className="text-blue">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-dark font-normal">
            College Student, Aspiring Guitarist, and Boston Celtics Superfan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">

          <div className="text-center md:text-left mx-2 my-auto">
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue mb-4">
              Hey, I'm Wes!
            </h3>
            <p className="text-base sm:text-lg text-dark mb-3 font-light">
              I'm a current senior at Boston College studying computer science. I'm from 
              Medfield, Massachusetts, and have two older sisters and a twin brother who attends Skidmore College in New York. 
              Unfortunately, he got the height gene.
            </p>
            <p className="text-base sm:text-lg text-dark mb-3 font-light">
              At BC, I am a member of the Boston College Campus Activities Board and 
              am going to be a Freshman League Captain in the spring semester. I have been lucky
              enough to take a variety of interesting courses, some of my favorites being Computer Networks,
              Software Engineering, and History of Popular Music.
            </p>
            <p className="text-base sm:text-lg text-dark mb-3 font-light">
              In my free time, I enjoy spending time with friends watching sports, specifically the Boston Celtics,
               and playing board games like Settlers of Catan, which is my favorite. Currently, some of my personal goals 
              are to learn the guitar, run another half-marathon, and improve my cooking skills. 
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
            {cardInfo.map((card, index) => (
              <Card
                key={index}
                className="text-center p-4 sm:p-6 bg-background border-muted hover:scale-[1.02] transition-transform hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-4 sm:pt-6">
                  <card.icon className="h-8 w-8 mx-auto mb-3 sm:mb-4 text-beige" />
                  <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-beige">
                    {card.value}
                  </div>
                  <div className="text-sm sm:text-md text-dark">
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