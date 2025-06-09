import { useParams, Link } from "react-router-dom";
import { ArrowUp, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";

const CaseStudy = () => {
  const { slug } = useParams();
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

  // Case study data based on your Notion content
  const caseStudyData = {
    title: "Digital Magazine Redesign",
    subtitle:
      "Enhancing readability and user engagement for a modern digital publishing platform",
    category: "UX/UI Design",
    year: "2024",
    client: "Digital Publishing Co.",
    duration: "3 months",
    role: "Lead UX/UI Designer",
    overview:
      "A complete redesign of a digital magazine platform aimed at improving user engagement, readability, and overall user experience. The project focused on modernizing the interface while maintaining the publication's editorial integrity and brand identity.",
    challenge:
      "The existing platform suffered from poor navigation, low engagement rates, outdated design patterns, and a cluttered interface that didn't reflect current user expectations for digital reading experiences. Users were spending less time on articles and the bounce rate was significantly high.",
    solution:
      "We implemented a clean, modern design system with improved typography, intuitive navigation, enhanced content discovery features, and a mobile-first approach that increased user engagement by 45% and significantly improved the overall reading experience.",
    process: [
      {
        phase: "Research & Discovery",
        description:
          "Conducted comprehensive user interviews, analyzed existing user behavior patterns, performed competitive analysis, and identified key pain points and opportunities for improvement in the current platform.",
      },
      {
        phase: "Ideation & Wireframing",
        description:
          "Created low-fidelity wireframes and interactive prototypes to test different layout approaches, navigation patterns, and content hierarchy solutions while maintaining focus on readability and user engagement.",
      },
      {
        phase: "Visual Design",
        description:
          "Developed a cohesive design system with carefully selected typography, harmonious color palette, scalable component library, and consistent visual elements that enhanced the reading experience.",
      },
      {
        phase: "Testing & Iteration",
        description:
          "Conducted multiple rounds of usability testing sessions with target users, gathered feedback, and iteratively refined the design based on user insights and behavioral data.",
      },
    ],
    results: [
      "45% increase in user engagement and time spent on platform",
      "60% improvement in article reading completion rates",
      "30% reduction in overall bounce rate",
      "4.8/5 average user satisfaction rating post-launch",
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
              Kong
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

            <h1 className={CASE_STUDY_STYLES.typography.mainTitle}>
              {caseStudyData.title}
            </h1>

            <p className={CASE_STUDY_STYLES.typography.subtitle}>
              {caseStudyData.subtitle}
            </p>
          </div>

          <div
            className={`w-full h-[500px] ${CASE_STUDY_STYLES.glassCard} flex items-center justify-center mt-16 mb-20 ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            <p className="text-muted-foreground text-lg font-body">
              Add main case study hero image here
            </p>
          </div>

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

            <div
              className={`w-full h-80 ${CASE_STUDY_STYLES.glassCard} flex items-center justify-center`}
            >
              <p className="text-muted-foreground text-lg font-body">
                Add challenge illustration/wireframes here
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              The Solution
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
              {caseStudyData.solution}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div
                className={`w-full h-80 ${CASE_STUDY_STYLES.glassCard} flex items-center justify-center`}
              >
                <p className="text-muted-foreground text-lg font-body">
                  Add before design here
                </p>
              </div>
              <div
                className={`w-full h-80 ${CASE_STUDY_STYLES.glassCard} flex items-center justify-center`}
              >
                <p className="text-muted-foreground text-lg font-body">
                  Add after design here
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              Design Process
            </h2>
            <div className="space-y-20">
              {caseStudyData.process.map((step, index) => (
                <div
                  key={index}
                  className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl"
                >
                  <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                    {step.phase}
                  </h3>
                  <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                    {step.description}
                  </p>

                  <div
                    className={`w-full h-64 ${CASE_STUDY_STYLES.glassCard} flex items-center justify-center`}
                  >
                    <p className="text-muted-foreground font-body">
                      Add {step.phase.toLowerCase()} visuals here
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              Results & Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {caseStudyData.results.map((result, index) => (
                <div key={index} className="enhanced-glass p-8 rounded-2xl">
                  <p className="text-xl font-body font-medium text-foreground">
                    {result}
                  </p>
                </div>
              ))}
            </div>

            <div
              className={`w-full h-80 ${CASE_STUDY_STYLES.glassCard} flex items-center justify-center`}
            >
              <p className="text-muted-foreground text-lg font-body">
                Add results data visualization here
              </p>
            </div>
          </div>

          {/* Final Designs */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              Final Designs
            </h2>
            <div className="space-y-12">
              <div
                className={`w-full h-96 ${CASE_STUDY_STYLES.glassCard} flex items-center justify-center`}
              >
                <p className="text-muted-foreground text-lg font-body">
                  Add final design showcase 1 here
                </p>
              </div>
              <div
                className={`w-full h-96 ${CASE_STUDY_STYLES.glassCard} flex items-center justify-center`}
              >
                <p className="text-muted-foreground text-lg font-body">
                  Add final design showcase 2 here
                </p>
              </div>
              <div
                className={`w-full h-96 ${CASE_STUDY_STYLES.glassCard} flex items-center justify-center`}
              >
                <p className="text-muted-foreground text-lg font-body">
                  Add final design showcase 3 here
                </p>
              </div>
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

export default CaseStudy;
