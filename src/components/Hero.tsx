import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Better Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full animate-pulse"></div>
      </div>
      
      {/* Content with Better Contrast */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <Badge variant="secondary" className="mb-6 text-sm font-medium bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI Data Science Graduate
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Gaurav <span className="text-white bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent font-extrabold">Garad</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-3xl mx-auto drop-shadow-md font-medium">
            Full-Stack Developer & AI Specialist building intelligent solutions 
            with React, Python, and Generative AI
          </p>
          
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-white/90 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <MapPin size={18} />
              <span className="font-medium">Pune, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Phone size={18} />
              <span className="font-medium">+91 9890822420</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Mail size={18} />
              <span className="font-medium">gauravgarad7@gmail.com</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm font-semibold px-8 py-3 glow-effect"
            >
              <Github className="mr-2" size={20} />
              GitHub
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm font-semibold px-8 py-3 glow-effect"
            >
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm font-semibold px-8 py-3 glow-effect"
            >
              <Mail className="mr-2" size={20} />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};