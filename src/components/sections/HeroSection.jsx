import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Zap, Atom, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const heroTexts = [
    "Renewable",
    "Research",
    "Power",
    
    "Solar",
   
    "Sustain",
    "Future",
    "Innovate",
    "EcoTech", 
    "Energy",
    "Fusion",

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center z-10">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4">
            <span 
              className="glitch-text text-glow inline-block"
              data-text={heroTexts[currentText]}
            >
              {heroTexts[currentText]}
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
           ENERGY SCIENCE & ENGINEERING
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          We are the department of{" "}
          <span className="text-primary font-bold">ENERGY SCIENCE</span>, a cutting edge institution
          <br />
          blending sustainable innovation with  advanced engineering.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Link to="/events">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground pulse-glow font-bold text-lg px-8 py-4">
              EXPLORE EVENTS
            </Button>
          </Link>
          
        </div>

        {/* Floating Icons */}
        <div className="flex justify-center space-x-12 mb-12">
          <div className="holographic p-4 rounded-lg pulse-glow">
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <div className="holographic p-4 rounded-lg pulse-glow">
            <Atom className="h-8 w-8 text-accent" />
          </div>
          <div className="holographic p-4 rounded-lg pulse-glow">
            <Cpu className="h-8 w-8 text-secondary" />
          </div>
        </div>

       
      </div>

      {/* Decorative Elements */}
  <div className="absolute top-1/4 left-10 w-32 h-32 border border-primary/30 rotate-45 animate-spin-slow abs-decor"></div>
  <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-accent/30 rotate-12 animate-pulse abs-decor"></div>
    </section>
  );
};

export default HeroSection;