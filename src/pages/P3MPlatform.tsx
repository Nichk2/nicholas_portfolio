import { Link } from "react-router-dom";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useScrollReveal from "@/hooks/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import Goal_1 from '../Image/P3M/Goals_img1.png';
import Goal_2_before from '../Image/P3M/Goals_img2_before.png';
import Goal_2_after from '../Image/P3M/Goals_img2_after.png';
import Goal_3_before from '../Image/P3M/Goals_img3_before.png';
import Goal_3_after from '../Image/P3M/Goals_img3_after.png';
import Goal_4 from '../Image/P3M/Goals_img4.png';
import Goal_5 from '../Image/P3M/Goals_img5.png';
import Goal_5_1 from '../Image/P3M/Goals_img5(1).png';
import Goal_5_2 from '../Image/P3M/Goals_img5(2).png';
import Result from '../Image/P3M/Result.png';
import Logo from '../Image/P3M/logo.svg';

const P3MPlatform = () => {
  const { t } = useTranslation('p3mplatform');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState<"before" | "after">("before");
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
    title: t("caseStudy.title"),
    subtitle: t("caseStudy.subtitle"),
    category: t("caseStudy.category"),
    year: "2023",
    client: "SGB - Serviço Geológico do Brasil",
    duration: "3 months",
    role: "UX/UI Designer",
    overview: t("caseStudy.overview"),
    problem: t("caseStudy.problem"),
    goal: t("caseStudy.goal"),
    results: t("caseStudy.resultsText")
  };

  return (
    <div className={CASE_STUDY_STYLES.background}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${CASE_STUDY_STYLES.navigation}`}>
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>{t("backToPortfolio")}</span>
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

          <div className={`w-full h-[500px] flex items-center justify-center mt-16 mb-20 ${CASE_STUDY_STYLES.scrollReveal}`}>
            <img src={Logo} alt="P3M Platform Logo" className="h-full object-contain" />
          </div>

          <div className={`grid md:grid-cols-4 gap-8 text-center md:text-left ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                {t("caseStudy.client")}
              </h3>
              <p className="text-muted-foreground font-body font-light">
                {caseStudyData.client}
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                {t("caseStudy.year")}
              </h3>
              <p className="text-muted-foreground font-body font-light">
                {caseStudyData.year}
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                {t("caseStudy.duration")}
              </h3>
              <p className="text-muted-foreground font-body font-light">
                {caseStudyData.duration}
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                {t("caseStudy.role")}
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
              {t("caseStudy.title1")}
            </h2>
            <p className={CASE_STUDY_STYLES.typography.body}>
              {caseStudyData.overview}
            </p>
          </div>

          {/* Problem */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("caseStudy.title2")}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {caseStudyData.problem}
            </p>
          </div>

          {/* Goal */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("caseStudy.title3")}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {caseStudyData.goal}
            </p>

            {/* First Goal - Original Screens */}
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6 mt-8`}>
              <img src={Goal_1} alt="Original P3M Platform Screens" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                {t("caseStudy.originalScreensDescription")}
              </p>
            </div>
          </div>

          {/* Second Goal - Layers Section Redesign */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">
              {t("caseStudy.layersRedesign")}
            </h3>
            
            <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass">
              <div className="flex border-b border-border/20">
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors ${
                    activeTab === "before"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveTab("before")}
                >
                  {t("caseStudy.before")}
                </button>
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors ${
                    activeTab === "after"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveTab("after")}
                >
                  {t("caseStudy.after")}
                </button>
              </div>
              <div className="relative h-[500px] w-full flex items-center justify-center p-6">
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeTab === "before" ? "opacity-100" : "opacity-0"}`}>
                  <img src={Goal_2_before} alt="Original Layers Section" className="max-h-full max-w-full object-contain rounded-lg" />
                </div>
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeTab === "after" ? "opacity-100" : "opacity-0"}`}>
                  <img src={Goal_2_after} alt="Redesigned Layers Section" className="max-h-full max-w-full object-contain rounded-lg" />
                </div>
              </div>
              <p className="text-muted-foreground mt-4 text-center p-4 font-body">
                {t("caseStudy.layersDescription")}
              </p>
            </div>
          </div>

          {/* Third Goal - Commodity Cards Redesign */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">
              {t("caseStudy.commodityCards")}
            </h3>
            
            <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass">
              <div className="flex border-b border-border/20">
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors ${
                    activeTab === "before"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveTab("before")}
                >
                  {t("caseStudy.before")}
                </button>
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors ${
                    activeTab === "after"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveTab("after")}
                >
                  {t("caseStudy.after")}
                </button>
              </div>
              <div className="relative h-[500px] w-full flex items-center justify-center p-6">
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeTab === "before" ? "opacity-100" : "opacity-0"}`}>
                  <img src={Goal_3_before} alt="Original Commodity Cards" className="max-h-full max-w-full object-contain rounded-lg" />
                </div>
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeTab === "after" ? "opacity-100" : "opacity-0"}`}>
                  <img src={Goal_3_after} alt="Redesigned Commodity Cards" className="max-h-full max-w-full object-contain rounded-lg" />
                </div>
              </div>
              <p className="text-muted-foreground mt-4 p-4 text-center font-body">
                {t("caseStudy.commodityDescription")}
              </p>
            </div>
          </div>

          {/* Fourth Goal - Menu Relocation */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">
              {t("caseStudy.menuSimplification")}
            </h3>
            
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6`}>
              <img src={Goal_4} alt="Menu Relocation Changes" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                {t("caseStudy.menuDescription")}
              </p>
            </div>
          </div>

          {/* Fifth Goal - New Dashboard Sections */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">
              {t("caseStudy.newDashboard")}
            </h3>
            
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6`}>
              <img src={Goal_5} alt="New Dashboard Sections" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                {t("caseStudy.dashboardDescription")}
              </p>
            </div>
          </div>

          {/* Quick Search Redesign */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">
              {t("caseStudy.quickSearch")}
            </h3>
            
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6 mb-4`}>
              <img src={Goal_5_1} alt="Quick Search Before" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                {t("caseStudy.quickSearchBefore")}
              </p>
            </div>
            
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6`}>
              <img src={Goal_5_2} alt="Quick Search After" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                {t("caseStudy.quickSearchAfter")}
              </p>
            </div>
          </div>

          {/* Final Result */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">
              {t("caseStudy.finalHomepage")}
            </h3>
            
            <div className='w-full p-6'>
              <img src={Result} alt="Final Homepage Design" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-10 text-center font-body">
                {t("caseStudy.finalDescription")}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("caseStudy.results")}
            </h2>
            <div className="enhanced-glass p-8 rounded-2xl">
              <p className="text-xl font-body font-medium text-foreground">
                {caseStudyData.results}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className={CASE_STUDY_STYLES.nextProjectSection}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}>
            {t("nextProject")}
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
                {t("caseStudy.descriptionLabel")}
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">
                  {t("viewCaseStudy")}
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

export default P3MPlatform;