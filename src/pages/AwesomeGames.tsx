import { Link } from "react-router-dom";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import useScrollReveal from "@/hooks/useScrollReveal";
import Color from '../Image/AwesomeGames/Color.svg';
import Empathy_map from '../Image/AwesomeGames/empathy_map.png';
import Logo from '../Image/AwesomeGames/AwesomeGames_logo.svg';
import Ia from '../Image/AwesomeGames/IA.png';
import Hifi1 from '../Image/AwesomeGames/Highfidelity1.svg';
import Hifi2 from '../Image/AwesomeGames/Highfidelity2.png';
import Persona from '../Image/AwesomeGames/persona.png';
import Lofi1 from '../Image/AwesomeGames/lofi1.png';
import Lofi2 from '../Image/AwesomeGames/lofi2.png';
import Process from '../Image/AwesomeGames/process.png';
import Type from '../Image/AwesomeGames/Type.svg';
import Site_map from '../Image/AwesomeGames/site-map.png';

interface CarouselImage {
  src: string;
  alt: string;
}

interface KeySection {
  emoji: string;
  title: string;
  content: string | string[];
}

interface ProcessStep {
  title: string;
  description?: string;
  items?: string[];
}

const AwesomeGames = () => {
  const { t } = useTranslation('awesomegames');
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

  // Image data with proper typing
  const hifiImages: CarouselImage[] = [
    { src: Hifi1, alt: "High Fidelity Design 1" },
    { src: Hifi2, alt: "High Fidelity Design 2" }
  ];

  const lofiImages: CarouselImage[] = [
    { src: Lofi1, alt: "Low Fidelity Design 1" },
    { src: Lofi2, alt: "Low Fidelity Design 2" }
  ];

  // Get translated content with proper error handling
  const getTranslatedArray = (key: string): string[] => {
    try {
      const result = t(key, { returnObjects: true });
      return Array.isArray(result)
        ? result.filter((item): item is string => typeof item === "string")
        : [];
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return [];
    }
  };

  const keySections: KeySection[] = [
    {
      emoji: "🤳🏻",
      title: t('awesomeGames.keySections.product.title'),
      content: t('awesomeGames.keySections.product.content')
    },
    {
      emoji: "🧑🏻‍💻",
      title: t('awesomeGames.keySections.responsibilities.title'),
      content: getTranslatedArray('awesomeGames.keySections.responsibilities.content')
    },
    {
      emoji: "😵‍💫",
      title: t('awesomeGames.keySections.problem.title'),
      content: t('awesomeGames.keySections.problem.content')
    },
    {
      emoji: "🎯",
      title: t('awesomeGames.keySections.goal.title'),
      content: t('awesomeGames.keySections.goal.content')
    },
    {
      emoji: "🙋🏻‍♂️",
      title: t('awesomeGames.keySections.role.title'),
      content: t('awesomeGames.keySections.role.content')
    },
    {
      emoji: "⏰",
      title: t('awesomeGames.keySections.duration.title'),
      content: t('awesomeGames.keySections.duration.content')
    }
  ];

  const testingFindings = getTranslatedArray('awesomeGames.testing.findings');
  const painPoints = getTranslatedArray('awesomeGames.process.steps.2.items');

  const getProcessSteps = (): ProcessStep[] => {
    try {
      return [
        {
          title: t('awesomeGames.process.steps.0.title'),
          description: t('awesomeGames.process.steps.0.description'),
          items: getTranslatedArray('awesomeGames.process.steps.0.items')
        },
        {
          title: t('awesomeGames.process.steps.1.title'),
          description: t('awesomeGames.process.steps.1.description')
        },
        {
          title: t('awesomeGames.process.steps.2.title'),
          items: painPoints
        }
      ];
    } catch (error) {
      console.error('Error getting process steps:', error);
      return [];
    }
  };

  const processSteps = getProcessSteps();

  

  // Safe render functions
  const renderCarousel = (images: CarouselImage[], currentSlide: number, setSlide: (index: number) => void) => {
    if (!images || !Array.isArray(images) || images.length === 0) {
      return (
        <div className="w-full h-[500px] rounded-2xl bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">No images available</p>
        </div>
      );
    }

    return (
      <div className="relative w-full overflow-hidden rounded-2xl h-[500px]">
        <div className="relative h-full w-full overflow-hidden">
          {images.map((image, index) => (
            <div
              key={`carousel-${image.alt}-${index}`}
              className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-full max-w-full object-contain rounded-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  console.error(`Failed to load image: ${image.src}`);
                }}
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => setSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={`carousel-indicator-${index}`}
              onClick={() => setSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderListItems = (items: string[] | string) => {
    if (!items) return null;
    
    // Handle case where items might be a string instead of array
    const itemsArray = Array.isArray(items) ? items : [items];
    
    return itemsArray.map((item, index) => (
      <li key={`list-item-${index}`} className="text-muted-foreground font-body">
        {item}
      </li>
    ));
  };

  const renderKeySections = () => {
    if (!keySections || !Array.isArray(keySections)) return null;

    return keySections.map((section, index) => (
      <div key={`section-${index}`} className="glass-card p-8 rounded-2xl">
        <h3 className="text-2xl font-display font-bold text-primary mb-4 flex items-center gap-2">
          <span>{section.emoji}</span> {section.title}
        </h3>
        {typeof section.content === 'string' ? (
          <p className="text-muted-foreground font-body">{section.content}</p>
        ) : (
          <ul className="list-disc pl-5 space-y-2">
            {renderListItems(section.content)}
          </ul>
        )}
      </div>
    ));
  };

  const renderIntroduction = () => {
    try {
      const introData = t('awesomeGames.introduction', { returnObjects: true });
      const introArray = Array.isArray(introData) ? introData : [introData];
      
      return introArray.map((paragraph: string, index: number) => (
        <p key={`intro-${index}`} className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-body font-light mb-6">
          {paragraph}
        </p>
      ));
    } catch (error) {
      console.error('Error rendering introduction:', error);
      return <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-body font-light mb-6">Introduction content unavailable</p>;
    }
  };

  const renderKeyTakeaways = () => {
    try {
      const takeawaysData = t('awesomeGames.keyTakeaways', { returnObjects: true });
      const takeawaysArray = Array.isArray(takeawaysData) ? takeawaysData : [takeawaysData];
      
      return takeawaysArray.map((paragraph: string, index: number) => (
        <p key={`takeaway-${index}`} className="text-xl text-muted-foreground font-body mb-6">
          {paragraph}
        </p>
      ));
    } catch (error) {
      console.error('Error rendering takeaways:', error);
      return <p className="text-xl text-muted-foreground font-body mb-6">Key takeaways content unavailable</p>;
    }
  };

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
              <span>{t('common.backToPortfolio')}</span>
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
              {t('awesomeGames.meta.category')}
            </span>

          </div>

          <div className="w-full h-[500px] rounded-3xl flex items-center justify-center mt-16 mb-20 scroll-reveal overflow-hidden">
            <img 
              src={Logo} 
              alt="AwesomeGames App Interface"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                console.error('Failed to load logo image');
              }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center md:text-left scroll-reveal">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                {t('awesomeGames.titles.client')}
              </h3>
              <p className="text-muted-foreground font-body">
                {t('awesomeGames.meta.client')}
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                {t('awesomeGames.titles.year')}
              </h3>
              <p className="text-muted-foreground font-body">
                {t('awesomeGames.meta.year')}
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                {t('awesomeGames.titles.duration')}
              </h3>
              <p className="text-muted-foreground font-body">
                {t('awesomeGames.meta.duration')}
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                {t('awesomeGames.titles.role')}
              </h3>
              <p className="text-muted-foreground font-body">
                {t('awesomeGames.meta.role')}
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
            {renderIntroduction()}
          </div>

          {/* Key Sections with Emojis */}
          <div className="scroll-reveal space-y-8">
            {renderKeySections()}
          </div>

          {/* Process Card */}
          <div className="scroll-reveal">
            <div className="glass-card p-8 rounded-2xl">
              <img
                src={Process}
                alt="Design Process"
                className="w-full h-auto rounded-lg mb-6"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  console.error('Failed to load process image');
                }}
              />
              <p className="text-muted-foreground font-body mb-6">
                {t('awesomeGames.process.description')}
              </p>
              
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={`process-step-${index}`}>
                    <h4 className="text-xl font-display font-semibold text-primary mb-2">
                      {step.title}
                    </h4>
                    {step.description && (
                      <p className="text-muted-foreground font-body mb-2">
                        {step.description}
                      </p>
                    )}
                    {step.items && (
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground font-body">
                        {renderListItems(step.items)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Persona */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              {t('awesomeGames.titles.userPersona')}
            </h2>
            <div className="p-4">
              <img
                src={Persona}
                alt="User Persona"
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  console.error('Failed to load persona image');
                }}
              />
            </div>
          </div>

          {/* Site Map */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              {t('awesomeGames.titles.siteMap')}
            </h2>
            <div className="p-4">
              <img
                src={Site_map}
                alt="Site Map"
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  console.error('Failed to load site map image');
                }}
              />
            </div>
          </div>

          {/* Information Architecture */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              {t('awesomeGames.titles.informationArchitecture')}
            </h2>
            <div className="p-4">
              <img
                src={Ia}
                alt="Information Architecture"
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  console.error('Failed to load IA image');
                }}
              />
            </div>
          </div>

          {/* Wireframes */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              {t('awesomeGames.titles.wireframes')}
            </h2>
            {renderCarousel(lofiImages, currentLofiSlide, setCurrentLofiSlide)}
          </div>

          {/* Testing */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              {t('awesomeGames.titles.usabilityTesting')}
            </h2>
            <div className="glass-card p-8 rounded-2xl mb-8">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-display font-semibold text-primary mb-2">
                    {t('awesomeGames.testing.studyType')}
                  </h4>
                  <p className="text-muted-foreground font-body">
                    {t('awesomeGames.testing.moderated')}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-display font-semibold text-primary mb-2">
                    {t('awesomeGames.testing.participants')}
                  </h4>
                  <p className="text-muted-foreground font-body">
                    5
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-display font-semibold text-primary mb-2">
                    {t('awesomeGames.testing.ageRange')}
                  </h4>
                  <p className="text-muted-foreground font-body">
                    23 - 30
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-display font-semibold text-primary mb-2">
                    {t('awesomeGames.testing.length')}
                  </h4>
                  <p className="text-muted-foreground font-body">
                    15-20 min
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-display font-semibold text-primary mb-4">
                    {t('awesomeGames.testing.keyFindings')}
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {renderListItems(testingFindings)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-display font-semibold text-primary mb-4">
                    {t('awesomeGames.testing.userQuote')}
                  </h4>
                  <blockquote className="italic text-muted-foreground font-body">
                    {t('awesomeGames.testing.quote')}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Aggregated Empathy Map */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              {t('awesomeGames.titles.empathyMap')}
            </h2>
            <div className="p-4 rounded-2xl">
              <img
                src={Empathy_map}
                alt="Empathy Map"
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  console.error('Failed to load empathy map image');
                }}
              />
            </div>
          </div>

          {/* Style Guide */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              {t('awesomeGames.titles.styleGuide')}
            </h2>
            <div className="p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                {t('awesomeGames.styleGuide.colors')}
              </h3>
              <img
                src={Color}
                alt="Color Palette"
                className="w-full h-auto rounded-lg mb-8"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  console.error('Failed to load color palette image');
                }}
              />

              <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                {t('awesomeGames.styleGuide.typography')}
              </h3>
              <img
                src={Type}
                alt="Typography"
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  console.error('Failed to load typography image');
                }}
              />
            </div>
          </div>

          {/* High Fidelity Designs */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              {t('awesomeGames.titles.highFidelity')}
            </h2>
            {renderCarousel(hifiImages, currentHifiSlide, setCurrentHifiSlide)}
          </div>

          {/* Key Takeaways */}
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
              {t('awesomeGames.titles.keyTakeaways')}
            </h2>
            <div className="glass-card p-8 rounded-2xl">
              {renderKeyTakeaways()}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 bg-card relative z-10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-12 tracking-tighter">
            {t('common.nextProject')}
          </h2>
          <Link
            to="/case-study/visabuddy"
            className="block group transition-all duration-300 scroll-reveal"
          >
            <div className="glass-card rounded-3xl p-12 hover:scale-[1.02] transition-all duration-500">
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors tracking-tighter">
                {t('awesomeGames.nextProject.title')}
              </h3>
              <p className="text-muted-foreground mb-8 text-lg md:text-xl font-body font-light">
                {t('awesomeGames.nextProject.description')}
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">
                  {t('common.viewCaseStudy')}
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
            {t('common.emailText')}
          </p>
          <a 
            href="mailto:nicholas.adandrade@gmail.com" 
            className="text-primary hover:text-accent transition-colors duration-300 font-body font-medium"
          >
            nicholas.adandrade@gmail.com
          </a>
          <p className="text-muted-foreground font-body mt-8">
            {t('common.thankYou')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AwesomeGames;