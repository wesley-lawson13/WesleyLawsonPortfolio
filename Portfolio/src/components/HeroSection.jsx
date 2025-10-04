import profilePic from "@/assets/Profile_Pic.jpeg";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center relative px-4"
        >
            <div className="grid grid-cols-2 gap-12 max-w-7xl mx-2 z-10">
                <div className="space-y-6 text-left">
                    <h1 className="text-7xl font-bold tracking-tight">
                        <span className="text-dark">Hi, I'm</span>
                        <span className="text-blue"> Wesley Lawson.</span>
                    </h1>
                    <p className="text-3xl font-light text-dark">
                    Seeking a Full-Time Job as a Software Engineer.
                    </p>
                    <p className="text-xl font-extralight text-dark">
                     I have developed a solid technical foundation reflected by my proficiency in programming languages
                      such as Python and Go, as well as full-stack frameworks like Django and React.
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-2">
                        <div className="mx-2 my-1 text-left pr-2">
                            <p className="text-4xl font-bold text-deepgreen">Senior</p>
                            <p className="text-xl font-semibold text-dark">at Boston College</p>
                        </div>
                        <div className="mx-1 my-1 text-left">
                            <p className="text-4xl font-bold text-deepgreen">3.67</p>
                            <p className="text-2xl font-semibold text-dark">GPA</p>
                        </div>
                        <div className="mx-1 my-1 text-left">
                            <p className="text-4xl font-bold text-green">3.75</p>
                            <p className="text-2xl font-semibold text-dark">Major GPA</p>
                            
                        </div>
                    </div>

                </div>
                
                <div className="flex space-y-6 justify-center">
                    <img
                        src={profilePic}
                        alt="Wesley Lawson portrait"
                        className="w-64 h-96 md:w-72 md:h-[28rem] object-cover object-top rounded-[3rem] shadow-xl"
                    />
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <a href="#about"><ArrowDown className="h-6 w-6 text-dark" /></a>
                </div>
            </div>
        </section>
    );
};