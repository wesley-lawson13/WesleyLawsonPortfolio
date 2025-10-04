import { BookOpenCheck, ClockFading, Code, Dock } from "lucide-react";
import reactIcon from "@/assets/react.svg";
import {Card, CardContent } from "./ui/Card";

export const AboutSection = () => {
    const cardInfo = [
        {icon: ClockFading, info: "Years Coding", value: "3+"},
        {icon: BookOpenCheck, info: "Relevant Courses", value: "15+"},
        {icon: Code, info: "Proficient Coding Languages", value: "10+"},
        {icon: Dock, info: "Mastered Tools and Frameworks", value: "9+"},
    ]
    return (
        <section 
            id="about"
            className="py-12 px-4 relative items-center justify-center bg-muted/30"
        >
            <div className="mx-auto z-10 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-dark mb-4">About Me</h2>
                    <p className="text-lg text-dark font-normal">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            
                <div className="container grid grid-cols-2 gap-12">
                    <div className="text-left mx-2 my-auto">
                        <h3 className="text-2xl text-blue mb-4">Hey, I'm Wes!</h3>
                        <p className="text-lg text-dark mb-3 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, eveniet provident maiores soluta non laborum perferendis nobis accusamus adipisci, debitis atque nesciunt vel omnis sed?
                        </p>
                        <p className="text-lg text-dark mb-3 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, eveniet provident maiores soluta non laborum perferendis nobis accusamus adipisci, debitis atque nesciunt vel omnis sed?
                        </p>
                        <p className="text-lg text-dark mb-3 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, eveniet provident maiores soluta non laborum perferendis nobis accusamus adipisci, debitis atque nesciunt vel omnis sed?
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {cardInfo.map((card, index) => (
                            <Card key={index} className="text-center p-6 bg-background border-muted"> 
                                <CardContent className="pt-6">
                                    <card.icon className="h-8 w-8 mx-auto mb-4 text-beige" />
                                    <div className="text-2xl font-bold mb-2 text-beige">{card.value}</div>
                                    <div className="text-md text-dark">{card.info}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    
                </div>
            </div>
        </section>
    );
};