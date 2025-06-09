import { Link } from "react-router-dom";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import Photox1 from '../Image/PHOTOX/MAPA.png'
import Oldphotox from '../Image/PHOTOX/Foldphotox.png'
import new1 from '../Image/PHOTOX/newphotox.png'
import new2 from '../Image/PHOTOX/newphotox2.png'
import new3 from '../Image/PHOTOX/newphotox3.png'
import old1 from '../Image/PHOTOX/oldphotox.png'
import old2 from '../Image/PHOTOX/oldphotox2.png'
import old3 from '../Image/PHOTOX/oldphotox3.png'
import proto1 from '../Image/PHOTOX/prototype1.png'
import proto2 from '../Image/PHOTOX/prototype2.png'
import proto3 from '../Image/PHOTOX/prototype3.png'
import proto4 from '../Image/PHOTOX/prototype4.png'
import proto5 from '../Image/PHOTOX/prototype5.png'
import proto6 from '../Image/PHOTOX/prototype6.png'
import test1 from '../Image/PHOTOX/test1.png'
import test2 from '../Image/PHOTOX/test2.png'
import test3 from '../Image/PHOTOX/test3.png'
import persona from '../Image/PHOTOX/Persona.png'
import drag_drop from '../Image/PHOTOX/drag_drop.png'
import ideate from '../Image/PHOTOX/ideate.png'
import rebuild_map from '../Image/PHOTOX/rebuild_map.png'
import style from '../Image/PHOTOX/style.svg'
import token_map from '../Image/PHOTOX/token_map.png'
import logo_photox from '../Image/PHOTOX/Logo_lemon.svg'
import Grid from '../Image/HYBRAS/Grid - Depositante.jpg'

const Photox = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProtoSlide, setCurrentProtoSlide] = useState(0);
  const [currentTestSlide, setCurrentTestSlide] = useState(0);
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

  const caseStudyData = {
    title: "PHOTOX",
    image: logo_photox,
    category: "Web App",
    year: "2024",
    client: "PHOTOX Digital",
    duration: "3 months",
    role: "Lead UX/UI Designer",
    overview: "Photox is a platform that facilitates carbon offsetting by combining nature and technology to drive environmental preservation.",
    challenge: 'The main challenge was to improve the usability of the Photox platform, ensuring that users could easily understand its products (governance tokens, carbon tokens, and guardian NFTs). The redesign aimed to enhance information clarity and optimize the buying/investing experience. The images below is before our design application.',
    solution: "We implemented a clean, modern design, intuitive navigation, enhanced content discovery features, and a map that could show information about NFTs, tokens and avaliable areas to explore",
    results: [
      "Users said that it got much more intuitive and easy to use",
      "The information architecture was simplified, making it easier to navigate and understand its purpose",
      "Users can now better understand the products offered by Photox",
    ],
  };

  return (
    <div className={CASE_STUDY_STYLES.background}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${CASE_STUDY_STYLES.navigation}`}>
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 font-body">
              <ChevronLeft className="w-5 h-5" />
              <span>Back to portfolio</span>
            </Link>
            <Link to="/" className="text-3xl font-display font-bold text-foreground hover:text-primary transition-colors duration-300">
              Nicholas
            </Link>
            <div className="w-32"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={CASE_STUDY_STYLES.heroSection}>
        <div className="max-w-5xl mx-auto px-8">
          <div className={`text-center ${CASE_STUDY_STYLES.scrollReveal} space-y-8`}>
            <span className={CASE_STUDY_STYLES.typography.category}>{caseStudyData.category}</span>
            <img src={logo_photox} alt="logo" className="p-20 m-auto w-full" />
          </div>

          <div className={`w-full flex items-center justify-center mt-16 mb-20 ${CASE_STUDY_STYLES.scrollReveal}`}>
          </div>

          <div className={`grid md:grid-cols-4 gap-8 text-center md:text-left ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">Client</h3>
              <p className="text-muted-foreground font-body font-light">{caseStudyData.client}</p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">Year</h3>
              <p className="text-muted-foreground font-body font-light">{caseStudyData.year}</p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">Duration</h3>
              <p className="text-muted-foreground font-body font-light">{caseStudyData.duration}</p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">Role</h3>
              <p className="text-muted-foreground font-body font-light">{caseStudyData.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className={CASE_STUDY_STYLES.contentSection}>
        <div className="max-w-4xl mx-auto px-8 space-y-32">
          {/* Overview */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>Overview</h2>
            <p className={CASE_STUDY_STYLES.typography.body}>{caseStudyData.overview}</p>
          </div>

          {/* Challenge */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>The Challenge</h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>{caseStudyData.challenge}</p>
            <img src={Oldphotox} alt="old" className="max-w-fill"/>
            <div className="mt-12">
              <h2 className={`${CASE_STUDY_STYLES.typography.subtitle} font-semibold mb-8 text-lime-200 `}>Goals</h2>
              <li className={`${CASE_STUDY_STYLES.typography.body} list-disc`}>Educating users and clarifying their journey</li>
              <li className={`${CASE_STUDY_STYLES.typography.body} list-disc`}>Streamlining the buying and investment process</li>
              <li className={`${CASE_STUDY_STYLES.typography.body} list-disc`}>Building trust and ensuring transparency</li>
            </div>
          </div>

          {/* Solution */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>The Solution</h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>{caseStudyData.solution}</p>
            <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass">
              <div className="flex border-b border-border/20">
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors ${activeTab === 'before' ? 'text-primary' : 'text-muted-foreground'}`}
                  onClick={() => setActiveTab('before')}
                >
                  Before
                </button>
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors ${activeTab === 'after' ? 'text-primary' : 'text-muted-foreground'}`}
                  onClick={() => setActiveTab('after')}
                >
                  After
                </button>
              </div>
              <div className="relative h-[500px] w-full">
                {/* Before Images */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${activeTab === 'before' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <div className="relative h-full w-full overflow-hidden">
                    {[old1, old2, old3].map((img, index) => (
                      <div 
                        key={`before-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <img src={img} alt={`Before design ${index + 1}`} className="max-h-full max-w-full object-contain p-8"/>
                      </div>
                    ))}
                  </div>
                </div>
                {/* After Images */}
                <div className={`absolute inset-0 transition-opacity rounded-md duration-500 ${activeTab === 'after' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <div className="relative h-full w-full overflow-hidden">
                    {[new1, new2, new3].map((img, index) => (
                      <div 
                        key={`after-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <img src={img} alt={`After design ${index + 1}`} className="max-h-full max-w-full object-contain p-8"/>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Process Section - Updated */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>Design Process</h2>
            
            {/* 1. Empathize */}
            <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl mb-20">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                1 → Empathize
              </h3>
              <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                I held meetings with developers and the stakeholder to gain a deeper understanding of the existing project, its needs, motivations, and other key factors, allowing me to propose the best solutions for the redesign.
              </p>
            </div>

            {/* 2. Define */}
            <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl mb-20">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                2 → Define
              </h3>
              <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                After the meeting, we identified that the sustainability market in Brazil, where Photox plans to operate initially, still lacks a platform that enables easy and transparent user interaction. I also started analyzing personas to better understand the target audience's needs and expectations, helping to define the best design approach.
                <br /><br />
                <strong>The goal is:</strong> Let's create an intuitive and engaging experience by rebuilding the platform, making it easier for everyone to connect and invest in environmental preservation in a simple and accessible way!
              </p>
              <div className={`w-full h-[500px] ${CASE_STUDY_STYLES.glassCard} flex items-center justify-center p-4`}>
                <img src={persona} alt="User persona" className="h-full object-contain" />
              </div>
            </div>

            {/* 3. Ideate */}
            <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl mb-20">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                3 → Ideate
              </h3>
              <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                The ideation process involved creating multiple sketches to visualize how the Photox platform could evolve. To support this, I analyzed platforms like Ecologi, GoldStandard and kikin (the last one does not belong to the niche but has a good structure and style) which also works with carbon credits, drawing inspiration to enhance user experience and navigation.
              </p>
              <div className={`w-full mb-8 ${CASE_STUDY_STYLES.glassCard} flex items-center justify-center p-4`}>
                <img src={ideate} alt="Ideation sketches" className="w-full object-contain" />
              </div>
              <div className={`w-full ${CASE_STUDY_STYLES.glassCard} flex items-center justify-center p-4`}>
                <img src={style} alt="Style guide" className="w-full object-contain" />
              </div>
            </div>

            {/* 4. Prototype */}
            <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl mb-20">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                4 → Prototype
              </h3>
              <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                At this stage, I delivered a high-fidelity prototype based on the ideas gathered during the ideation phase. Choosing a single prototype provided the stakeholder with a clearer vision of the platform's design, making adjustments easier and ensuring better alignment—especially given the short timeline.
              </p>
              <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass h-[500px]">
                <div className="relative h-full w-full overflow-hidden">
                  {[proto1, proto2, proto3, proto4, proto5, proto6].map((img, index) => (
                    <div 
                      key={`proto-${index}`}
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${currentProtoSlide === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <img 
                        src={img} 
                        alt={`Prototype screen ${index + 1}`} 
                        className="max-h-full max-w-full object-contain p-8"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentProtoSlide((prev) => (prev === 0 ? 5 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setCurrentProtoSlide((prev) => (prev === 5 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProtoSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${currentProtoSlide === index ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 5. Test */}
            <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                5 → Test
              </h3>
              <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                I used the Maze tool to assist with this crucial part of the project. The tests were structured around open-ended questions related to the user experience and goals. I chose this method to better understand users' preferences and perceptions regarding the design and overall experience.
              </p>
              <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass h-[500px]">
                <div className="relative h-full w-full overflow-hidden">
                  {[test1, test2, test3].map((img, index) => (
                    <div 
                      key={`test-${index}`}
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${currentTestSlide === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <img 
                        src={img} 
                        alt={`Testing phase ${index + 1}`} 
                        className="max-h-full max-w-full object-contain p-8"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentTestSlide((prev) => (prev === 0 ? 2 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setCurrentTestSlide((prev) => (prev === 2 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestSlide === index ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {caseStudyData.results.map((result, index) => (
                <div key={index} className="enhanced-glass p-8 rounded-2xl">
                  <p className="text-xl font-body font-medium text-foreground">{result}</p>
                </div>
              ))}
            </div>
            <img src={Photox1} alt="final" />
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className={CASE_STUDY_STYLES.nextProjectSection}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}>
            Next Project
          </h2>
          <Link
            to="/case-study/hybras-collab"
            className={`block group transition-all duration-300 ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            <div className={`${CASE_STUDY_STYLES.glassCard} p-12 hover:scale-105 transition-all duration-500`}>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors leading-tight tracking-tighter">
                HYBRAS COLLAB
              </h3>
              <p className="text-muted-foreground mb-8 text-xl font-body font-light">
                Collaborative platform for creative professionals
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">View case study</span>
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
    </div>
  );
};

export default Photox;