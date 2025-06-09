import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Add scroll reveal to hero elements
    const elements = document.querySelectorAll(".hero-reveal");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("revealed");
      }, index * 200);
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-background px-6 pt-20 z-10">
      <div className="text-center max-w-6xl mx-auto">
        {/* Main heading with blur animation */}
        <motion.div
          initial={{ filter: "blur(20px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ 
            duration: 1.5,
            ease: [0.16, 0.77, 0.47, 0.97],
            delay: 0.2
          }}
          className="hero-reveal scroll-reveal mb-8"
        >
          <h1 className="text-8xl md:text-[12rem] font-display font-bold text-foreground mb-4 leading-none tracking-tighter">
            Nicholas
          </h1>
        </motion.div>

        {/* Subtitle with accent color */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.8
          }}
          className="hero-reveal scroll-reveal mb-16"
        >
          <p className="text-3xl md:text-4xl text-accent font-display font-medium tracking-wide">
            UI/UX Designer
          </p>
        </motion.div>

        {/* Enhanced description text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 1.0
          }}
          className="hero-reveal scroll-reveal mb-12"
        >
          <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-body font-light">
            Crafting digital experiences that seamlessly blend
            <span className="text-primary font-medium"> innovation</span>,
            <span className="text-accent font-medium"> aesthetics</span>, and
            <span className="text-primary font-medium"> user-centricity</span>
          </p>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.8,
          delay: 1.5
        }}
        onClick={scrollToPortfolio}
        className="absolute bottom-12 p-4 rounded-full glass-effect hover:animate-none transition-all duration-500 hover:scale-110 group z-20"
        whileHover={{ y: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronDown className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
      </motion.button>
    </section>
  );
};

export default Hero;