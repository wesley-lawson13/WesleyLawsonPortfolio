import profilePic from "@/assets/Profile_Pic.jpeg";
import { ArrowDown } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto z-10">
        <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-center lg:text-left mt-10 sm:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-dark">Hi, I'm</span>
            <span className="text-blue"> Wesley Lawson.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-light text-dark">
            Seeking a Full-Time Job as a Software Engineer.
          </p>

          <p className="text-base sm:text-lg md:text-xl font-extralight text-dark">
            I have developed a solid technical foundation reflected by my proficiency in programming languages
            such as Python and Go, as well as full-stack frameworks like Django and React.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-bold text-deepgreen">Senior</p>
              <p className="text-sm sm:text-base font-semibold text-dark">at Boston College</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-bold text-deepgreen">3.67</p>
              <p className="text-sm sm:text-base font-semibold text-dark">GPA</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-bold text-green">3.75</p>
              <p className="text-sm sm:text-base font-semibold text-dark">Major GPA</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 mt-6">
            <a href="https://github.com/wesley-lawson13" className="text-dark"><VscGithub size={28}/></a>
            <a href="https://www.linkedin.com/in/wesley-lawson13/" className="text-dark"><FiLinkedin size={28}/></a>
            <a href="mailto:wesleylawson13@gmail.com" className="text-dark"><BiLogoGmail size={28}/></a>
          </div>
        </div>

        <div className="flex justify-center items-center mt-3 lg:mt-0">
          <img
            src={profilePic}
            alt="Wesley Lawson portrait"
            className="w-48 h-64 sm:w-60 sm:h-80 md:w-72 md:h-[28rem] object-cover object-top rounded-[2rem] shadow-md hover:shadow-xl hover:scale-101 transition-shadow"
          />
        </div>

        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about"><ArrowDown className="h-6 w-6 text-dark" /></a>
        </div>
      </div>
    </section>
  );
};