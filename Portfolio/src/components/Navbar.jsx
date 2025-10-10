import { cn } from "@/lib/utils"
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi"; // 👈 add these icons

const navItems = [
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"}
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 👈 for mobile toggle

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // 👈 fixed window.screenY typo
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 bg-opacity-80 transition-all duration-300",
        isScrolled ? "py-3 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-lg sm:text-xl font-bold text-dark flex items-center">
          <span className="relative z-10">
            Wesley Lawson <span className="text-blue">Portfolio</span>
          </span>
        </a>

        {/* Desktop Nav */}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-md py-4">
          <div className="flex flex-col items-center space-y-4">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-lg text-dark/80 hover:text-blue"
                onClick={() => setIsMenuOpen(false)} // close menu after click
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};