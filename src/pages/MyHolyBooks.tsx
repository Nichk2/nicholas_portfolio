import { Link } from "react-router-dom";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import Add_friend from '../Image/MyHolyBooks/Add_friend.svg';
import Books from '../Image/MyHolyBooks/books.svg';
import Logo from '../Image/MyHolyBooks/MyHolyBooks_logo.svg';
import Color from '../Image/MyHolyBooks/Color.svg';
import Comment from '../Image/MyHolyBooks/comment.svg';
import Mobile_1 from '../Image/MyHolyBooks/mobile1.svg';
import Mobile_2 from '../Image/MyHolyBooks/mobile2.svg';
import Mobile_3 from '../Image/MyHolyBooks/mobile3.svg';
import Web_1 from '../Image/MyHolyBooks/web1.svg';
import Web_2 from '../Image/MyHolyBooks/web2.svg';
import Web_3 from '../Image/MyHolyBooks/web3.svg';
import Folders from '../Image/MyHolyBooks/Folders.svg';
import Websolution from '../Image/MyHolyBooks/web.png';
import Group_members from '../Image/MyHolyBooks/Groups_members.png';
import Landing_page_home from '../Image/MyHolyBooks/Landing page (home).png';
import Languages from '../Image/MyHolyBooks/Languages.svg';
import Mobile_lofi_hifi from '../Image/MyHolyBooks/Mobile_lofi-hifi.svg';
import Persona1 from '../Image/MyHolyBooks/Persona1.png';
import Persona2 from '../Image/MyHolyBooks/Persona2.png';
import Process_img from '../Image/MyHolyBooks/Process_img.svg';
import Sketch from '../Image/MyHolyBooks/Sketch.svg';
import Style from '../Image/MyHolyBooks/Style.svg';
import Web_lofi_hifi from '../Image/MyHolyBooks/Web_lofi-hifi.svg';

// Carousel Component
const ImageCarousel = ({ images, altPrefix = "Image" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      {/* Carousel Image */}
      <div className="w-full rounded-3xl overflow-hidden">
        <img 
          src={images[currentIndex]} 
          alt={`${altPrefix} ${currentIndex + 1}`} 
          className="w-full h-auto"
        />
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevImage}
        className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextImage}
        className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2"
      >
        <ChevronLeft className="w-6 h-6 rotate-180" />
      </button>

      {/* Indicator Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`}
            aria-label={`Go to ${altPrefix} ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const FinalProductTabs = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [currentWebSlide, setCurrentWebSlide] = useState(0);
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);

  const webImages = [Web_1, Web_2, Web_3];
  const mobileImages = [Mobile_1, Mobile_2, Mobile_3];

  const nextWebImage = () => {
    setCurrentWebSlide((prev) => (prev + 1) % webImages.length);
  };

  const prevWebImage = () => {
    setCurrentWebSlide((prev) => (prev - 1 + webImages.length) % webImages.length);
  };

  const nextMobileImage = () => {
    setCurrentMobileSlide((prev) => (prev + 1) % mobileImages.length);
  };

  const prevMobileImage = () => {
    setCurrentMobileSlide((prev) => (prev - 1 + mobileImages.length) % mobileImages.length);
  };

  return (
    <div className="w-full">
      <div className="flex border-b border-border mb-6">
        <button
          className={`py-3 px-6 font-display font-medium ${activeTab === 'web' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
          onClick={() => setActiveTab('web')}
        >
          Web Version
        </button>
        <button
          className={`py-3 px-6 font-display font-medium ${activeTab === 'mobile' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
          onClick={() => setActiveTab('mobile')}
        >
          Mobile Version
        </button>
      </div>

      <div className="w-full rounded-3xl">
        {activeTab === 'web' ? (
          <div className="relative w-full">
            <img 
              src={webImages[currentWebSlide]} 
              alt={`Web screenshot ${currentWebSlide + 1}`} 
              className="w-full h-auto"
            />
            <button 
              onClick={prevWebImage}
              className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextWebImage}
              className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2"
            >
              <ChevronLeft className="w-6 h-6 rotate-180" />
            </button>
            <div className="flex justify-center mt-4 space-x-2">
              {webImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentWebSlide(index)}
                  className={`w-3 h-3 rounded-full ${index === currentWebSlide ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="relative w-full flex justify-center items-center bg-gray-100/10 p-8 rounded-3xl">
            {/* Mobile container with fixed width */}
            <div className="relative max-w-xs w-full">
              <img 
                src={mobileImages[currentMobileSlide]} 
                alt={`Mobile screenshot ${currentMobileSlide + 1}`} 
                className="w-full h-auto"
              />
              <button 
                onClick={prevMobileImage}
                className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextMobileImage}
                className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2"
              >
                <ChevronLeft className="w-6 h-6 rotate-180" />
              </button>
            </div>
            <div className="flex justify-center mt-4 space-x-2 absolute bottom-4 left-0 right-0">
              {mobileImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMobileSlide(index)}
                  className={`w-3 h-3 rounded-full ${index === currentMobileSlide ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Prototype Tabs Component
const PrototypeTabs = ({ webImage, mobileImage }) => {
  const [activeTab, setActiveTab] = useState('web');

  return (
    <div className="w-full">
      <div className="flex border-b border-border mb-6">
        <button
          className={`py-3 px-6 font-display font-medium ${activeTab === 'web' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
          onClick={() => setActiveTab('web')}
        >
          Web Version
        </button>
        <button
          className={`py-3 px-6 font-display font-medium ${activeTab === 'mobile' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
          onClick={() => setActiveTab('mobile')}
        >
          Mobile Version
        </button>
      </div>

      <div className="w-full rounded-3xl overflow-hidden">
        {activeTab === 'web' ? (
          <img src={webImage} alt="Web prototype" className="w-full h-auto" />
        ) : (
          <img src={mobileImage} alt="Mobile prototype" className="w-full h-auto" />
        )}
      </div>
    </div>
  );
};

const MyHolyBooks = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
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
    title: "MyHolyBooks",
    subtitle: "A Christian social network fostering faith-based connections and community",
    category: "WEB and MOBILE",
    year: "2024",
    client: "Indenpendent investor",
    duration: "5 months",
    role: "UX/UI Designer (Research, Prototyping, Testing)",
    overview: "MyHolyBooks is a Christian social network designed to strengthen bonds and foster authentic connections within the faith community. The platform allows users to share insights, create customized books with Bible verses, add notes, and support one another in a purpose-driven digital environment.",
    challenge: "The Brazilian market lacked a dedicated Christian social media platform. Existing spaces like blogs felt impersonal, and users needed a safe, respectful environment to connect around shared beliefs while leveraging familiar social media engagement strategies.",
    solutionText: "We came up with a 'simple' solution for this... MyHolyBooks!!",
    process: [
      {
        phase: "Empathize",
        description: "I conducted a meeting with the developers and with stakeholder in order to better understand the idea of the project (that was previously created), real necessities, motivations, interviews with christians and other variables so I can provide best solutions."
      },
      {
        phase: "Define",
        description: "After the meeting, we identified a key issue: the Brazilian market—where the stakeholder plans to launch first—lacks a digital environment that supports the kind of user interaction commonly found on social platforms like Facebook, X (formerly Twitter), and LinkedIn.",
        personas: [Persona1, Persona2],
        personaText: "To align the design process effectively, I began the persona analysis. Based on our research, we developed detailed personas to accurately represent our target users and inform our design decisions."
      },
      {
        phase: "Ideate",
        description: "The process of ideation consisted on the creation of many sketches of future vision of how the platform would look like. I conducted a benchmarking and analyzed Facebook and LinkedIn social networks seeking inspiration.",
        designExploration: [Sketch, Style, Color],
        featureExploration: [Group_members, Languages],
        featureTitles: [
          "1 - Create Your Own Group",
          "2 - Multi-Language Support"
        ],
        featureDescriptions: [
          "Implemented group creation feature to allow users to connect around specific interests or Bible study topics.",
          "Added language selection to enable users to explore faith across different cultures and Bible translations."
        ]
      },
      {
        phase: "Prototype",
        description: "For this phase of the process, I thought that it would be interesting to give two deliverables, a medium fidelity and a high fidelity prototypes based on the ideas I could gather during the ideation process. The reason I chose this approach is to give more freedom and security to the stakeholder on how the platform will look like.",
        images: [Web_lofi_hifi, Mobile_lofi_hifi]
      },
      {
        phase: "Test",
        description: "I used Maze tool to help me on this extremely important part of the project. The tests (created for both versions web and mobile) had the same tasks followed of open questions related with the experience of the user.",
        testImages: [Comment, Folders, Books, Add_friend]
      }
    ],
    finalProduct: {
      description: "In our final round of usability testing, feedback from users confirmed the platform's success in delivering an intuitive and engaging experience aligned with its purpose of fostering a faith-centered community.",
    },
    results: [
      "A deep study had to be done in order to better understand variants of Christianity in Brazil. Since the main goal is to welcome all Christians, the team had to make sure to be careful with symbols, words, other elements",
      "Positive usability test feedback on intuitive navigation",
      "Currently in development with planned 2025",
      "Users reported feeling 'safe and respected' in prototype testing",
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
            <span className={CASE_STUDY_STYLES.typography.category}>
              {caseStudyData.category}
            </span>
            <h1 className={CASE_STUDY_STYLES.typography.mainTitle}>
              {caseStudyData.title}
            </h1>
            <p className={CASE_STUDY_STYLES.typography.subtitle}>
              {caseStudyData.subtitle}
            </p>
          </div>

          {/* Logo Display */}
          <div className={`w-full flex items-center justify-center mt-16 mb-20 ${CASE_STUDY_STYLES.scrollReveal} p-12`}>
            <img 
              src={Logo} 
              alt="MyHolyBooks logo" 
              className="w-full max-w-md h-auto"
            />
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
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              The Challenge
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
              {caseStudyData.challenge}
            </p>
            <p className={`${CASE_STUDY_STYLES.typography.body}`}><span className={`${CASE_STUDY_STYLES.typography.body} text-cyan-200`}>User Insight:</span> As a former student and after a chat with other students, I understand the need for a centralized, accessible platform for academic research. Together with the client (also a scholar) we could build a good idea of product.</p>
            <div className="my-8"></div>
            <p className={`${CASE_STUDY_STYLES.typography.body}`}><span className={`${CASE_STUDY_STYLES.typography.body} text-cyan-200`}>How Might We:</span> Create a community-centric platform that simplifies research sharing and enhances collaboration among scholars?</p>
            
          </div>

          {/* Solution */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {caseStudyData.solutionText}
            </h2>
            <div className="w-full rounded-3xl overflow-hidden mt-8">
              <img 
                src={Websolution} 
                alt="MyHolyBooks solution" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Process */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>Design Process</h2>
            
            {/* Process Overview Image */}
            <div className="w-full rounded-3xl overflow-hidden mb-16">
              <img 
                src={Process_img} 
                alt="Design process overview" 
                className="w-full h-auto"
              />
            </div>

            {/* Process Steps */}
            <div className="space-y-20">
              {/* Empathize */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                  Empathize
                </h3>
                <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                  {caseStudyData.process[0].description}
                </p>
              </div>

              {/* Define */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                  Define
                </h3>
                <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                  {caseStudyData.process[1].description}
                </p>
                <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                  {caseStudyData.process[1].personaText}
                </p>
                <ImageCarousel images={caseStudyData.process[1].personas} altPrefix="Persona" />
              </div>

              {/* Ideate */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                  Ideate
                </h3>
                <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                  {caseStudyData.process[2].description}
                </p>
                
                {/* Two Cards Layout */}
                <div className="flex flex-col gap-8">
                  {/* Design Exploration Card */}
                  <div className="enhanced-glass p-6 rounded-2xl">
                    <h4 className="font-display font-semibold text-lg mb-4">Design Exploration</h4>
                    <ImageCarousel 
                      images={caseStudyData.process[2].designExploration} 
                      altPrefix="Design exploration" 
                    />
                    <div className="mt-4 text-sm text-muted-foreground">
                      Sketches, style exploration, and color palette development
                    </div>
                  </div>
                  
                  {/* Feature Exploration Card */}
                  <div className="enhanced-glass p-6 rounded-2xl">
                    <h4 className="font-display font-semibold text-lg mb-4">Feature Exploration</h4>
                    <ImageCarousel 
                      images={caseStudyData.process[2].featureExploration} 
                      altPrefix="Feature exploration" 
                    />
                    <div className="mt-4 space-y-4">
                      {caseStudyData.process[2].featureExploration.map((_, index) => (
                        <div key={index} className="border-t border-border/50 pt-4">
                          <h5 className="font-display font-medium">{caseStudyData.process[2].featureTitles[index]}</h5>
                          <p className="text-muted-foreground text-sm">
                            {caseStudyData.process[2].featureDescriptions[index]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Prototype */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                  Prototype
                </h3>
                <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                  {caseStudyData.process[3].description}
                </p>
                <PrototypeTabs 
                  webImage={caseStudyData.process[3].images[0]} 
                  mobileImage={caseStudyData.process[3].images[1]} 
                />
              </div>

              {/* Test */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                  Test
                </h3>
                <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                  {caseStudyData.process[4].description}
                </p>
                <ImageCarousel images={caseStudyData.process[4].testImages} altPrefix="Test feature" />
              </div>
            </div>
          </div>

          {/* Final Product */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>Final Product</h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
              {caseStudyData.finalProduct.description}
            </p>
            <FinalProductTabs />
          </div>

          {/* Results */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>Results & Impact</h2>
            <div className="flex flex-col gap-8 mb-12">
              {caseStudyData.results.map((result, index) => (
                <div key={index} className="enhanced-glass p-8 rounded-2xl">
                  <p className="text-xl font-body font-medium text-foreground">{result}</p>
                </div>
              ))}
            </div>
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
            to="/case-study/p3m-platform" 
            className={`block group transition-all duration-300 ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            <div className={`${CASE_STUDY_STYLES.glassCard} p-12 hover:scale-105 transition-all duration-500`}>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors leading-tight tracking-tighter">
                P3M Platform Redesign
              </h3>
              <p className="text-muted-foreground mb-8 text-xl font-body font-light">
                Enterprise project management platform
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

      {/* Scroll to Top */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-14 h-14 p-0 glass-effect animate-fade-in group"
        >
          <ArrowUp className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
        </Button>
      )}
    </div>
  );
};

export default MyHolyBooks;