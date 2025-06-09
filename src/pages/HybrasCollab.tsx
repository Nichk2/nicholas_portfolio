 import { Link } from "react-router-dom";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import Hybras_logo from "../Image/HYBRAS/logo.svg";
import Notes from "../Image/HYBRAS/Notificações page.jpg";
import History from "../Image/HYBRAS/Histórico geral.png";
import Empathy_map from "../Image/HYBRAS/empathy_map.png";
import low_fi1 from "../Image/HYBRAS/low-fi.png";
import low_fi2 from "../Image/HYBRAS/lo-fi2.png";
import Research from "../Image/HYBRAS/Research.png";
import Test1 from "../Image/HYBRAS/test- 1.png";
import Test2 from "../Image/HYBRAS/test - 2.png";
import Test3 from "../Image/HYBRAS/test- 3.png";
import Persona from "../Image/HYBRAS/persona.png";
import Final from "../Image/HYBRAS/Final design.png";
import Dashboard from "../Image/HYBRAS/Dashboard colab pessoal.png";
import Submit_data from "../Image/HYBRAS/Submeter Dado.png";
import Grid from "../Image/HYBRAS/Grid - Depositante.png";

const HybrasCollab = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSolutionSlide, setCurrentSolutionSlide] = useState(0);
  const [currentTestSlide, setCurrentTestSlide] = useState(0);
  const [currentBeforeAfterSlide, setCurrentBeforeAfterSlide] = useState(0);
  const [activeBeforeAfterTab, setActiveBeforeAfterTab] = useState<
    "before" | "after"
  >("before");
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

  // Solution carousel data
  const solutionCarouselItems = [
    {
      image: Submit_data,
      title: "Have a place to share your work!",
      bullets: ["Upload your research", "Leave comments to the evaluator"],
    },
    {
      image: History,
      title: "Have Accountability in the system",
      bullets: [
        "History of chats and status of the process",
        "Respect for each research and its licenses",
        "Attention and care with the uploaded documents",
      ],
    },
    {
      image: Notes,
      title: "Keep tracking your notifications",
      bullets: [
        "Notifications screen is available and a design based on Process, so the user can be served by the product in pro active way",
        "Keep your eyes on the bell!",
      ],
    },
    {
      image: Dashboard,
      title: "Dashboard",
      bullets: ["Manage research activities with a comprehensive dashboard"],
    },
  ];

  // Test carousel data
  const testCarouselItems = [
    {
      image: Test1,
    },
    {
      image: Test2,
    },
    {
      image: Test3,

    },
  ];

  // Before/After carousel data
  const beforeImages = [low_fi1, low_fi2];
  const afterImages = [Grid, Notes];

  const caseStudyData = {
    title: "HYBRAS COLLAB",
    image: Hybras_logo,
    category: "WEB APP",
    year: "2024",
    client: "SGB - Serviço Geológico do Brasil",
    duration: "4 months",
    role: "Lead UX/UI Designer",
    overview:
      "This case study outlines the creation process of a platform so students and scholars can upload research related with hydrology and soil. Hybras Collab library of research already exist, however its operations occurs via email (they are sent via email) and its adminstration is difficult. So we decided, together with our client, to simplify this process and create a platform to do such service and also to promote connection between people who are interested in such subjects.",
    challenge:
      "Scholars lack an efficient platform to share and access hydrology research. How can we automate a email based system? Where we can centralize the information?",
    solution:
      "A platform so they can upload Hydrological studies and also visualize other research",
    process: [
      {
        phase: "Research & Discovery",
        description:
          "Conducted in-depth interviews with creative professionals, analyzed existing collaboration tools, and identified key pain points in current workflows and communication methods.",
      },
      {
        phase: "User Journey Mapping",
        description:
          "Created detailed user journey maps for different personas including designers, project managers, and clients to understand their specific needs and touchpoints.",
      },
      {
        phase: "Wireframing & Prototyping",
        description:
          "Developed low and high-fidelity wireframes focusing on intuitive navigation and efficient task completion, followed by interactive prototypes for user testing.",
      },
      {
        phase: "Visual Design & Testing",
        description:
          "Created a cohesive design system with modern aesthetics, conducted usability testing sessions, and iteratively refined the interface based on user feedback.",
      },
    ],
    results: [
      'Great impact in the new conception of the product. What once was a simple and complicated system of emails now has a robust design and purpose.',
      'Successfully handed off finalized UX/UI designs to the development team, with positive feedback from the client.',
      'Project is currently under development, with outcomes to be measured post-launch.'
    ],
  };

  return (
    <div className={CASE_STUDY_STYLES.background}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${CASE_STUDY_STYLES.navigation}`}
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back to portfolio</span>
            </Link>
            <Link
              to="/"
              className="text-3xl font-display font-bold text-foreground hover:text-primary transition-colors duration-300"
            >
              Nicholas
            </Link>
            <div className="w-32"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={CASE_STUDY_STYLES.heroSection}>
        <div className="max-w-5xl mx-auto px-8">
          <div
            className={`text-center ${CASE_STUDY_STYLES.scrollReveal} space-y-8`}
          >
            <span className={CASE_STUDY_STYLES.typography.category}>
              {caseStudyData.category}
            </span>
            <img src={Hybras_logo} alt="logo" className="p-20 m-auto w-full" />
          </div>

          <div
            className={`w-full flex items-center justify-center mt-16 mb-20 ${CASE_STUDY_STYLES.scrollReveal}`}
          ></div>

          <div
            className={`grid md:grid-cols-4 gap-8 text-center md:text-left ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                Client
              </h3>
              <p className="text-muted-foreground font-body font-light">
                {caseStudyData.client}
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                Year
              </h3>
              <p className="text-muted-foreground font-body font-light">
                {caseStudyData.year}
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                Duration
              </h3>
              <p className="text-muted-foreground font-body font-light">
                {caseStudyData.duration}
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                Role
              </h3>
              <p className="text-muted-foreground font-body font-light">
                {caseStudyData.role}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className={CASE_STUDY_STYLES.contentSection}>
        <div className="max-w-4xl mx-auto px-8 space-y-32">
          {/* Overview */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              Overview
            </h2>
            <p className={CASE_STUDY_STYLES.typography.body}>
              {caseStudyData.overview}
            </p>
          </div>

          {/* Challenge */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              The Challenge
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
              {caseStudyData.challenge}
            </p>
            <p className={`${CASE_STUDY_STYLES.typography.body}`}><span className={`${CASE_STUDY_STYLES.typography.body} text-cyan-300`}>User Insight:</span> As a former student and after a chat with other students, I understand the need for a centralized, accessible platform for academic research. Together with the client (also a scholar) we could build a good idea of product.</p>
            <div className="my-8"></div>
            <p className={`${CASE_STUDY_STYLES.typography.body}`}><span className={`${CASE_STUDY_STYLES.typography.body} text-cyan-300`}>How Might We:</span> Create a community-centric platform that simplifies research sharing and enhances collaboration among scholars?</p>
            
          </div>

          {/* Solution Carousel */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              The Solution
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
              {caseStudyData.solution}
            </p>

            <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass h-[600px]">
              <div className="relative h-full w-full overflow-hidden">
                {solutionCarouselItems.map((item, index) => (
                  <div
                    key={`solution-${index}`}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      currentSolutionSlide === index
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <div className="h-full w-full flex flex-col md:flex-row">
                      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain rounded-xl shadow-lg"
                        />
                      </div>
                      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center p-8">
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                          {item.title}
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {item.bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="text-muted-foreground font-body"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentSolutionSlide((prev) =>
                    prev === 0 ? solutionCarouselItems.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setCurrentSolutionSlide((prev) =>
                    prev === solutionCarouselItems.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {solutionCarouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSolutionSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSolutionSlide === index
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Research Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              Research & Workshops
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              Conducted three workshops with stakeholders to understand system
              needs and analyzed competitive platforms for inspiration.
            </p>
          
            <div className={`${CASE_STUDY_STYLES.glassCard} p-4`}>
              <img
                src={Research}
                alt="Research workshops with stakeholders"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center mt-4 text-muted-foreground font-body">
                Workshop sessions with hydrology researchers to understand their
                needs.
              </p>
              
            </div>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6 mt-6`}>
              We also analyzed competitive platforms for inspiration and to tailor the solution to hydrology research. They key point was to create the same level of organization e usability so the client and users would be able to <span className="text-cyan-300">control, analyse and also submit new research.</span>
            </p>
          </div>

          {/* Persona Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              User Persona
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              Meet Maria, our primary persona - a passionate professor with
              expertise in Civil Engineering and a focus on Water Resources and
              the Environment.
            </p>
            <div className={`${CASE_STUDY_STYLES.glassCard} p-4`}>
              <img
                src={Persona}
                alt="User persona - Maria"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center mt-4 text-muted-foreground font-body">
                Persona representing our target users - hydrology researchers
                and professors
              </p>
            </div>
          </div>

          {/* Empathy Map Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              Empathy Map
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              Understanding what users say, think, do, and feel helped us design
              a platform that truly meets their needs.
            </p>
            <div className={`${CASE_STUDY_STYLES.glassCard} p-4`}>
              <img
                src={Empathy_map}
                alt="Empathy map for hydrology researchers"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center mt-4 text-muted-foreground font-body">
                Empathy map capturing user thoughts, feelings, and behaviors
              </p>
            </div>
          </div>

          {/* Testing Carousel */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              Testing & Improvements
              
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              <span className="text-cyan-300">Three majors improvements were done in the design!</span> We conducted 6 usability tests with stakeholders and identified
              three major improvements for the product.
            </p>

            <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass h-[700px]">
              <div className="relative h-full w-full overflow-hidden">
                {testCarouselItems.map((item, index) => (
                  <div
                    key={`test-${index}`}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      currentTestSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="h-full w-full flex flex-col">
                     
                      <div className="w-full h-full flex items-center justify-center p-4">
                        <img
                          src={item.image}
                          alt='test3'
                          className="max-h-full max-w-full object-contain rounded-xl shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentTestSlide((prev) =>
                    prev === 0 ? testCarouselItems.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setCurrentTestSlide((prev) =>
                    prev === testCarouselItems.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {testCarouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestSlide === index
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Design Evolution Carousel */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              Design Evolution
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              See how the platform evolved from initial concepts to the final
              polished design.
            </p>

            <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass">
              <div className="flex border-b border-border/20">
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors ${
                    activeBeforeAfterTab === "before"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveBeforeAfterTab("before")}
                >
                  Before
                </button>
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors ${
                    activeBeforeAfterTab === "after"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveBeforeAfterTab("after")}
                >
                  After
                </button>
              </div>
              <div className="relative h-[600px] w-full">
                {/* Before Images */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeBeforeAfterTab === "before"
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    {beforeImages.map((img, index) => (
                      <div
                        key={`before-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                          currentBeforeAfterSlide === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Before design ${index + 1}`}
                          className="max-h-[80%] max-w-[90%] object-contain rounded-xl shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* After Images */}
                <div
                  className={`absolute inset-0 transition-opacity rounded-md duration-500 ${
                    activeBeforeAfterTab === "after"
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    {afterImages.map((img, index) => (
                      <div
                        key={`after-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                          currentBeforeAfterSlide === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`After design ${index + 1}`}
                          className="max-h-[80%] max-w-[90%] object-contain rounded-xl shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Navigation Arrows */}
                <button
                  onClick={() =>
                    setCurrentBeforeAfterSlide((prev) =>
                      prev === 0
                        ? activeBeforeAfterTab === "before"
                          ? beforeImages.length - 1
                          : afterImages.length - 1
                        : prev - 1
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() =>
                    setCurrentBeforeAfterSlide((prev) =>
                      prev ===
                      (activeBeforeAfterTab === "before"
                        ? beforeImages.length - 1
                        : afterImages.length - 1)
                        ? 0
                        : prev + 1
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {(activeBeforeAfterTab === "before"
                    ? beforeImages
                    : afterImages
                  ).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentBeforeAfterSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentBeforeAfterSlide === index
                          ? "bg-primary w-6"
                          : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Final Product Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              HYBRAS COLLAB was born!
            </h2>
            <div className={`${CASE_STUDY_STYLES.glassCard} p-4`}>
              <img
                src={Final}
                alt="Final product design"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center mt-4 text-muted-foreground font-body">
                Final interface design of the HYBRAS COLLAB platform
              </p>
            </div>
          </div>

          {/* Results */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              Results & Impact
            </h2>
            <div className="grid md:grid-cols-1 gap-8 mb-12">
              {caseStudyData.results.map((result, index) => (
                <div key={index} className="enhanced-glass p-8 rounded-2xl">
                  <p className="text-xl font-body font-medium text-foreground">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className={CASE_STUDY_STYLES.nextProjectSection}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2
            className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            Next Project
          </h2>
          <Link
            to="/case-study/myholybooks"
            className={`block group transition-all duration-300 ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            <div
              className={`${CASE_STUDY_STYLES.glassCard} p-12 hover:scale-105 transition-all duration-500`}
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors leading-tight tracking-tighter">
                MyHolyBooks
              </h3>
              <p className="text-muted-foreground mb-8 text-xl font-body font-light">
                Digital reading platform for religious texts
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
    </div>
  );
};

export default HybrasCollab;