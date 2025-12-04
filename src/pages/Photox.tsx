import { Link } from "react-router-dom";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useScrollReveal from "@/hooks/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import Photox1 from "../Image/PHOTOX/MAPA.png";
import Oldphotox from "../Image/PHOTOX/Foldphotox.png";
import new1 from "../Image/PHOTOX/newphotox.png";
import new2 from "../Image/PHOTOX/newphotox2.png";
import new3 from "../Image/PHOTOX/newphotox3.png";
import old1 from "../Image/PHOTOX/oldphotox.png";
import old2 from "../Image/PHOTOX/oldphotox2.png";
import old3 from "../Image/PHOTOX/oldphotox3.png";
import proto1 from "../Image/PHOTOX/prototype1.png";
import proto2 from "../Image/PHOTOX/prototype2.png";
import proto3 from "../Image/PHOTOX/prototype3.png";
import proto4 from "../Image/PHOTOX/prototype4.png";
import proto5 from "../Image/PHOTOX/prototype5.png";
import proto6 from "../Image/PHOTOX/prototype6.png";
import test1 from "../Image/PHOTOX/test1.png";
import test2 from "../Image/PHOTOX/test2.png";
import test3 from "../Image/PHOTOX/test3.png";
import persona from "../Image/PHOTOX/Persona.png";
import drag_drop from "../Image/PHOTOX/drag_drop.png";
import ideate from "../Image/PHOTOX/ideate.png";
import rebuild_map from "../Image/PHOTOX/rebuild_map.png";
import style from "../Image/PHOTOX/style.svg";
import token_map from "../Image/PHOTOX/token_map.png";
import logo_photox from "../Image/PHOTOX/Logo_lemon.svg";
import Grid from "../Image/HYBRAS/Grid - Depositante.jpg";

const Photox = () => {
  const { t } = useTranslation('photox');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState<"before" | "after">("before");
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
    title: t("photox.title"),
    image: logo_photox,
    category: t("photox.category"),
    year: '2024',
    back: 'Back to portfolio',
    client: "PHOTOX digital",
    duration: t("photox.duration"),
    role: "Lead UX/UI Designer",
    overview: t("photox.overview"),
    challenge: t("photox.challenge"),
    solution: t("photox.solution"),
    results: t("photox.results.items", { returnObjects: true }),
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
              <span>{t("photox.back")}</span>
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
            <img src={logo_photox} alt="logo" className="p-20 m-auto w-full" />
          </div>

          <div
            className={`w-full flex items-center justify-center mt-16 mb-20 ${CASE_STUDY_STYLES.scrollReveal}`}
          ></div>

          <div
            className={`grid md:grid-cols-4 gap-8 text-center md:text-left ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                {t("photox.client")}
              </h3>
              <p className="text-muted-foreground font-body font-light">
                {caseStudyData.client}
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                {t("photox.year")}
              </h3>
              <p className="text-muted-foreground font-body font-light">
                {caseStudyData.year}
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                {t("photox.duration2")}
              </h3>
              <p className="text-muted-foreground font-body font-light">
                {caseStudyData.duration}
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                {t("photox.role")}
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
              {t("photox.title1")}
            </h2>
            <p className={CASE_STUDY_STYLES.typography.body}>
              {caseStudyData.overview}
            </p>
          </div>

          {/* Challenge */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("photox.title2")}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
              {caseStudyData.challenge}
            </p>
            <img src={Oldphotox} alt="old" className="max-w-fill" />
            <div className="mt-12">
              <h2
                className={`${CASE_STUDY_STYLES.typography.subtitle} font-semibold mb-8 text-lime-200 `}
              >
                {t("photox.goals.title")}
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                {Array.isArray(t("photox.goals.items", { returnObjects: true }))
                  ? (t("photox.goals.items", { returnObjects: true }) as string[]).map(
                      (goal, index) => (
                        <li
                          key={index}
                          className={`${CASE_STUDY_STYLES.typography.body}`}
                        >
                          {goal}
                        </li>
                      )
                    )
                  : null}
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("photox.title3")}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
              {caseStudyData.solution}
            </p>
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
                  {t("photox.before")}
                </button>
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors ${
                    activeTab === "after"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveTab("after")}
                >
                  {t("photox.after")}
                </button>
              </div>
              <div className="relative h-[500px] w-full">
                {/* Before Images */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeTab === "before"
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    {[old1, old2, old3].map((img, index) => (
                      <div
                        key={`before-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                          currentSlide === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Before design ${index + 1}`}
                          className="max-h-full max-w-full object-contain p-8"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* After Images */}
                <div
                  className={`absolute inset-0 transition-opacity rounded-md duration-500 ${
                    activeTab === "after"
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    {[new1, new2, new3].map((img, index) => (
                      <div
                        key={`after-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                          currentSlide === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`After design ${index + 1}`}
                          className="max-h-full max-w-full object-contain p-8"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Navigation Arrows */}
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
                  }
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
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-primary w-6"
                          : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Process Section - Updated */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("photox.process.title")}
            </h2>

            {/* 1. Empathize */}
            <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl mb-20">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                {t("photox.process.empathize.title")}
              </h3>
              <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                {t("photox.process.empathize.description")}
              </p>
            </div>

            {/* 2. Define */}
            <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl mb-20">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                {t("photox.process.define.title")}
              </h3>
              <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                {t("photox.process.define.description")}
                <br />
                <br />
                <strong className="text-lime-200">{t("photox.process.define.goal")}</strong>
              </p>
              <div
                className={`w-full h-[500px] ${CASE_STUDY_STYLES.glassCard} flex items-center justify-center p-4`}
              >
                <img
                  src={persona}
                  alt="User persona"
                  className="h-full object-contain"
                />
              </div>
            </div>

            {/* 3. Ideate */}
            <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl mb-20">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                {t("photox.process.ideate.title")}
              </h3>
              <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                {t("photox.process.ideate.description")}
              </p>
              <div
                className={`w-full mb-8 ${CASE_STUDY_STYLES.glassCard} flex items-center justify-center p-4`}
              >
                <img
                  src={ideate}
                  alt="Ideation sketches"
                  className="w-full object-contain"
                />
              </div>
              <div
                className={`w-full ${CASE_STUDY_STYLES.glassCard} flex items-center justify-center p-4`}
              >
                <img
                  src={style}
                  alt="Style guide"
                  className="w-full object-contain"
                />
              </div>
            </div>

            {/* 4. Prototype */}
            <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl mb-20">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                {t("photox.process.prototype.title")}
              </h3>
              <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                {t("photox.process.prototype.description")}
              </p>
              <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass h-[500px]">
                <div className="relative h-full w-full overflow-hidden">
                  {[proto1, proto2, proto3, proto4, proto5, proto6].map(
                    (img, index) => (
                      <div
                        key={`proto-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                          currentProtoSlide === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Prototype screen ${index + 1}`}
                          className="max-h-full max-w-full object-contain p-8"
                        />
                      </div>
                    )
                  )}
                </div>
                <button
                  onClick={() =>
                    setCurrentProtoSlide((prev) => (prev === 0 ? 5 : prev - 1))
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() =>
                    setCurrentProtoSlide((prev) => (prev === 5 ? 0 : prev + 1))
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProtoSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentProtoSlide === index
                          ? "bg-primary w-6"
                          : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 5. Test */}
            <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                {t("photox.process.test.title")}
              </h3>
              <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                {t("photox.process.test.description")}
              </p>
              <div className="relative w-full overflow-hidden rounded-2xl enhanced-glass h-[500px]">
                <div className="relative h-full w-full overflow-hidden">
                  {[test1, test2, test3].map((img, index) => (
                    <div
                      key={`test-${index}`}
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                        currentTestSlide === index ? "opacity-100" : "opacity-0"
                      }`}
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
                  onClick={() =>
                    setCurrentTestSlide((prev) => (prev === 0 ? 2 : prev - 1))
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() =>
                    setCurrentTestSlide((prev) => (prev === 2 ? 0 : prev + 1))
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {[0, 1, 2].map((index) => (
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
          </div>

          {/* Results */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t("photox.results.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {Array.isArray(caseStudyData.results) && caseStudyData.results.map((result, index) => (
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
          <h2
            className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            {t("photox.nextProject")}
          </h2>
          <Link
            to="/case-study/hybras-collab"
            className={`block group transition-all duration-300 ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            <div
              className={`${CASE_STUDY_STYLES.glassCard} p-12 hover:scale-105 transition-all duration-500`}
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors leading-tight tracking-tighter">
                {t('photox.projectLabel')}
              </h3>
              <p className="text-muted-foreground mb-8 text-xl font-body font-light">
                {t('photox.descriptionLabel')}
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">
                  {t("photox.viewProject")}
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

export default Photox;