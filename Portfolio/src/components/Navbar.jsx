import { cn } from "@/lib/utils"
import { useEffect, useState } from 'react'

const navItems = [
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"}
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
        <nav className={cn(
            "fixed w-full z-40 bg-opacity-80", 
            isScrolled ? "py-3 backdrop-blur-md shadow-sm" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
            <a href="#hero" className="text-xl font-bold text-dark flex items-center">
                <span className="relative z-10">
                    Wesley Lawson | <span className="text-blue">Portfolio</span>
                </span>
            </a>  

            <div className="hidden md:flex space-x-8">
                {navItems.map((item, key) => (
                    <a
                    key={key}
                    href={item.href}
                    className="text-lg text-dark/80 hover:text-blue"
                    >
                    {item.name}
                    </a>
                ))}
            </div>
            </div>
        </nav>
    );
};