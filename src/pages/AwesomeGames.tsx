import { Link } from "react-router-dom";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import Color from '../Image/AwesomeGames/Color.svg';
import Empathy_map from '../Image/AwesomeGames/empathy_map.png';
import Logo from '../Image/AwesomeGames/AwesomeGames_logo.svg'
import Ia from '../Image/AwesomeGames/IA.png';
import Hifi1 from '../Image/AwesomeGames/Highfidelity1.svg';
import Hifi2 from '../Image/AwesomeGames/Highfidelity2.png';
import Persona from '../Image/AwesomeGames/persona.png';
import Lofi1 from '../Image/AwesomeGames/lofi1.png';
import Lofi2 from '../Image/AwesomeGames/lofi2.png';
import Process from '../Image/AwesomeGames/process.png';
import Type from '../Image/AwesomeGames/Type.svg';
import Site_map from '../Image/AwesomeGames/site-map.png';

const AwesomeGames = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentHifiSlide, setCurrentHifiSlide] = useState(0);
  const [currentLofiSlide, setCurrentLofiSlide] = useState(0);
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const hifiImages = [Hifi1, Hifi2];
  const lofiImages = [Lofi1, Lofi2];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-border/20">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-300 font-body font-medium"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back to portfolio</span>
            </Link>

            <Link
              to="/"
              className="text-3xl font-display font-bold text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Nicholas
            </Link>

            <div className="w-32"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative z-10">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center scroll-reveal space-y-8">
            <span className="text-sm text-accent font-body font-medium tracking-widest uppercase">
              Mobile App Design
            </span>

            <h1 className="text-7xl md:text-9xl font-display font-bold text-foreground leading-tight tracking-tighter">
              AwesomeGames
            </h1>

            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-body font-light">
              A gaming community and discovery app that connects players and helps them find their next favorite game
            </p>
          </div>

          <div className="w-full h-[500px] rounded-3xl flex items-center justify-center mt-16 mb-20 scroll-reveal overflow-hidden">
            <img 
              src={Logo} 
              alt="AwesomeGames App Interface"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center md:text-left scroll-reveal">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                Client
              </h3>
              <p className="text-muted-foreground font-body">
                Course Project
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                Year
              </h3>
              <p className="text-muted-foreground font-body">
                2022
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                Duration
              </h3>
              <p className="text-muted-foreground font-body">
                1 month
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                Role
              </h3>
              <p className="text-muted-foreground font-body">
                Lead UX/UI Designer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-secondary/30 relative z-10">
        <div className="max-w-4xl mx-auto px-8 space-y-32">
          {/* Introduction */}
          <div className="scroll-reveal">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-body font-light">
              AwesomeGames is a game library app where all users can interact with each other through a game community. In the app the users are able to navigate through many game categories, save games into their libraries so they can read more about the game and play it later (on another platform). They are also able to interact with other gamers in communities by chat and lives that the app opens to them.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-body font-light mt-6">
              This is a project part from a UX design course promoted by Google. In this project I was able to apply all the knowledge absorbed in the course such as: Conducting research, building wireframes, Lofi and Hifi prototypes and iterating on design.
            </p>
          </div>

          {/* Key Sections with Emojis */}
          <div className="scroll-reveal space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <span>🤳🏻</span> Product
              </h3>
              <p className="text-muted-foreground font-body">
                AwesomeGames is a game preview app, created for the gamer community to interact and know more about the game world.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <span>🧑🏻‍💻</span> Responsibilities
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground font-body">
                <li>Conducting interviews</li>
                <li>Creating paper and digital wireframes</li>
                <li>Usability tests</li>
                <li>Low-fidelity and high-fidelity prototypes</li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <span>😵‍💫</span> Problem
              </h3>
              <p className="text-muted-foreground font-body">
                Gamers need a platform where they can have a huge and diverse library of games with their previews and a community where they can interact with each other in order to know more about new games, tips and make new friends.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <span>🎯</span> Goal
              </h3>
              <p className="text-muted-foreground font-body">
                Design an app that can provide game previews (through a big library) for gamers and make them interact with themselves. The design must be simple and intuitive for the user.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <span>🙋🏻‍♂️</span> My role
              </h3>
              <p className="text-muted-foreground font-body">
                UX/UI designer
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <span>⏰</span> Project duration
              </h3>
              <p className="text-muted-foreground font-body">
                September - December 2022 (This project was created in order to complete Google UX design course)
              </p>
            </div>
          </div>

          {/* Process Card */}
          <div className="scroll-reveal">
            <div className="glass-card p-8 rounded-2xl">
              <img
                src={Process}
                alt="Design Process"
                className="w-full h-auto rounded-lg mb-6"
              />
              <p className="text-muted-foreground font-body mb-6">
                In order to achieve the goals of such research, I conducted interviews with the users of such platforms and I also created empathy maps, vital to understand users real needs and their thoughts about their interacting process in the app.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-display font-semibold text-primary mb-2">
                    1. User Interviews
                  </h4>
                  <p className="text-muted-foreground font-body mb-2">
                    Conducted in-depth interviews with people who are interested in those platforms to understand their pain points during their experience.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground font-body">
                    <li>Complex navigation</li>
                    <li>Lack of people directly engaging</li>
                    <li>Weak game previews</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-display font-semibold text-primary mb-2">
                    2. Competitive Analysis
                  </h4>
                  <p className="text-muted-foreground font-body">
                    Studied game apps to identify best practices and areas for improvement.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-display font-semibold text-primary mb-2">
                    😡 Pain points
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground font-body">
                    <li>Hard Navigation: Users complain a lot about the bad navigation that apps of such nature provide.</li>
                    <li>Lack of game previews: Users demonstrated some frustration regarding the lack of game options in the apps.</li>
                    <li>No interaction with other gamers: The absence of a community to interact with other gamers also creates a level of insatisfaction among the users</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Persona */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              User Persona
            </h2>
            <div className="p-4">
              <img
                src={Persona}
                alt="User Persona"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Site Map */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              Site Map
            </h2>
            <div className="p-4">
              <img
                src={Site_map}
                alt="Site Map"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Information Architecture */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              Information Architecture
            </h2>
            <div className="p-4">
              <img
                src={Ia}
                alt="Information Architecture"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Wireframes */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              Wireframes
            </h2>
            <div className="relative w-full overflow-hidden rounded-2xl h-[500px]">
              <div className="relative h-full w-full overflow-hidden">
                {lofiImages.map((img, index) => (
                  <div
                    key={`lofi-${index}`}
                    className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                      currentLofiSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Low Fidelity Design ${index + 1}`}
                      className="max-h-full max-w-full object-contain rounded-xl"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentLofiSlide((prev) =>
                    prev === 0 ? lofiImages.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setCurrentLofiSlide((prev) =>
                    prev === lofiImages.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {lofiImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentLofiSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentLofiSlide === index
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Testing */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              Usability Testing
            </h2>
            <div className="glass-card p-8 rounded-2xl mb-8">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-display font-semibold text-primary mb-2">
                    Study Type
                  </h4>
                  <p className="text-muted-foreground font-body">
                    Moderated
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-display font-semibold text-primary mb-2">
                    Participants
                  </h4>
                  <p className="text-muted-foreground font-body">
                    5
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-display font-semibold text-primary mb-2">
                    Age Range
                  </h4>
                  <p className="text-muted-foreground font-body">
                    23 - 30
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-display font-semibold text-primary mb-2">
                    Length
                  </h4>
                  <p className="text-muted-foreground font-body">
                    15-20 min
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-display font-semibold text-primary mb-4">
                    Key Findings
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground font-body">
                    <li>Users loved the simple navigation</li>
                    <li>Adding games to library was intuitive</li>
                    <li>Some wanted smoother color transitions</li>
                    <li>Community features were highly praised</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-display font-semibold text-primary mb-4">
                    User Quote
                  </h4>
                  <blockquote className="italic text-muted-foreground font-body">
                    "This is a really good idea, I love to play games, and I loved how the design was made to make navigation simple and fun! The way how we can add game previews to our libraries is also very easy. Nice app"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Aggregated Empathy Map */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              Aggregated Empathy Map
            </h2>
            <div className=" p-4 rounded-2xl">
              <img
                src={Empathy_map}
                alt="Empathy Map"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Style Guide */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              Style Guide
            </h2>
            <div className=" p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                Colors
              </h3>
              <img
                src={Color}
                alt="Color Palette"
                className="w-full h-auto rounded-lg mb-8"
              />

              <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                Typography
              </h3>
              <img
                src={Type}
                alt="Typography"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* High Fidelity Designs */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              High Fidelity Designs
            </h2>
            <div className="relative w-full overflow-hidden rounded-2xl h-[600px]">
              <div className="relative h-full w-full overflow-hidden">
                {hifiImages.map((img, index) => (
                  <div
                    key={`hifi-${index}`}
                    className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                      currentHifiSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`High Fidelity Design ${index + 1}`}
                      className="max-h-full max-w-full object-contain rounded-xl"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentHifiSlide((prev) =>
                    prev === 0 ? hifiImages.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setCurrentHifiSlide((prev) =>
                    prev === hifiImages.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {hifiImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHifiSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentHifiSlide === index
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              Key Takeaways
            </h2>
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-xl text-muted-foreground font-body mb-6">
                AwesomeGames has made an attempt to meet users' necessity to receive simplicity in a preview game app. The idea is to create a simple space where gamers could interact with each other, store their game previews so they can share with other players through the community available, watch lives and also share their live sessions with each other. one of the participants said, "This is a really good idea, I love to play games, and I loved how the design was made to make navigation simple and fun! The way how we can add game previews to our libraries is also very easy. Nice app"
              </p>
              <p className="text-xl text-muted-foreground font-body mb-6">
                Some of the participants did not express excitement with the idea of the game preview existence, however, they thought that with the rising of the new generation of gamers and their great community, this could work with some upgrades like improvements of navigation and changing of the design to something with smoother colors. Further changes and tests are required.
              </p>
              <p className="text-xl text-muted-foreground font-body">
                This project that I started since the beginning of the UX design google course was vital for me to understand processes of UX research and its methods and also helped me to optimize my design skills. It was a great experience to practice empathy and understanding what users really need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 bg-card relative z-10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-12 tracking-tighter">
            Next Project
          </h2>
          <Link
            to="/case-study/photox"
            className="block group transition-all duration-300 scroll-reveal"
          >
            <div className="glass-card rounded-3xl p-12 hover:scale-[1.02] transition-all duration-500">
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors tracking-tighter">
                PHOTOX
              </h3>
              <p className="text-muted-foreground mb-8 text-lg md:text-xl font-body font-light">
                Digital magazine redesign for enhanced readability
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">
                  View case study
                </span>
                <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <span className="text-sm">→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-14 h-14 p-0 glass-effect transition-all duration-500 hover:scale-110 animate-fade-in group"
        >
          <ArrowUp className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
        </Button>
      )}

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border/20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-muted-foreground font-body mb-4">
            For more work inquiries, or to grab a coffee do email me at
          </p>
          <a 
            href="mailto:nicholas.adandrade@gmail.com" 
            className="text-primary hover:text-accent transition-colors duration-300 font-body font-medium"
          >
            nicholas.adandrade@gmail.com
          </a>
          <p className="text-muted-foreground font-body mt-8">
            Thank you very much for reading! 😊
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AwesomeGames;