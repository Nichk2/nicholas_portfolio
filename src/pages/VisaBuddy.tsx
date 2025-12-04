import { Link } from "react-router-dom";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useScrollReveal from "@/hooks/useScrollReveal";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import Logo from "../Image/VisaBuddy/Logo.svg";
import Lofi_menu_close from "../Image/VisaBuddy/closed menu lofi.png";
import Hifi_menu_close from "../Image/VisaBuddy/closed menu.png";
import Lofi_chat from "../Image/VisaBuddy/Started chat lofi.png";
import Hifi_chat from "../Image/VisaBuddy/Started chat highfi.png";
import Url_lofi from "../Image/VisaBuddy/URL modal lofi.png";
import Url_hifi from "../Image/VisaBuddy/URL modal highfi.png";
import Lofi_menu_open from "../Image/VisaBuddy/open menu lofi.png";
import Hifi_menu_open from "../Image/VisaBuddy/open menu highfi.png";
import Metrics1 from "../Image/VisaBuddy/metrics.png";
import Metrics2 from "../Image/VisaBuddy/metrics 2.png";
import Front from "../Image/VisaBuddy/frontend test.gif";
import Jupyter from "../Image/VisaBuddy/jupyter notebook training.gif";
import Modal_logo from "../Image/VisaBuddy/Modal-Primary-Logo.svg";
import Back from "../Image/VisaBuddy/google colab model and backend.gif";
import Chroma from "../Image/VisaBuddy/Chroma--Streamline-Svg-Logos.svg";
import Fast_api from "../Image/VisaBuddy/FastAPI_logo.svg";
import Transformers from "../Image/VisaBuddy/HG transfomers.svg";
import Vectors from "../Image/VisaBuddy/vectors 1.svg";
import Tailwind from "../Image/VisaBuddy/tailwindcss.svg";
import ReactLogo from "../Image/VisaBuddy/react.svg";
import Typescript from "../Image/VisaBuddy/typescript.svg";
import FramerMotion from "../Image/VisaBuddy/framer motion.svg";
import Noodles from "../Image/VisaBuddy/noodles.jpeg"

const VisaBuddy = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentBeforeAfterSlide, setCurrentBeforeAfterSlide] = useState(0);
  const [activeBeforeAfterTab, setActiveBeforeAfterTab] = useState<
    "before" | "after"
  >("before");
  const { t } = useTranslation('visabuddy');
  
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

  // Before/After carousel data
  const beforeImages = [Lofi_menu_close, Lofi_menu_open, Lofi_chat, Url_lofi];
  const afterImages = [Hifi_menu_close, Hifi_menu_open, Hifi_chat, Url_hifi];

  // Get translation data safely
  const getTranslatedArray = (key: string) => {
    const data = t(key, { returnObjects: true });
    return Array.isArray(data) ? data : [];
  };

  const getTranslatedObject = (key: string) => {
    const data = t(key, { returnObjects: true });
    return typeof data === 'object' && data !== null ? data : {};
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
              <span>{t('visaBuddy.navigation.back')}</span>
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
              {t('visaBuddy.hero.category')}
            </span>
            {/* VisaBuddy Logo */}
            <img src={Logo} alt="logo" className="m-auto w-1020" />
          </div>

          <div
            className={`w-full flex items-center justify-center mt-16 mb-5 ${CASE_STUDY_STYLES.scrollReveal}`}
          ></div>

          {/* Project Info Cards */}
          <div
            className={`grid md:grid-cols-4 gap-8 text-center md:text-left ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            <div className="enhanced-glass p-6 rounded-2xl ">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                {t('visaBuddy.hero.client')}
              </h3>
              <p className="text-muted-foreground font-body font-light">
                Personal Project
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl ">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                {t('visaBuddy.hero.year')}
              </h3>
              <p className="text-muted-foreground font-body font-light">
                2025
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl ">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                {t('visaBuddy.hero.duration')}
              </h3>
              <p className="text-muted-foreground font-body font-light">
                3 weeks
              </p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl ">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                {t('visaBuddy.hero.role')}
              </h3>
              <p className="text-muted-foreground font-body font-light">
                Full Stack Developer, AI Engineer, UX/UI Designer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className={CASE_STUDY_STYLES.contentSection}>
        <div className="max-w-4xl mx-auto px-8 space-y-32">
          {/* Overview Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.overview')}
            </h2>
            <p className={CASE_STUDY_STYLES.typography.body}>
              {t('visaBuddy.content.overview')}
            </p>
          </div>

          {/* Problem Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.problem')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
              {t('visaBuddy.content.problem')}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="enhanced-glass p-6 rounded-xl">
                <h4 className="font-display font-semibold text-primary mb-2">
                  {t('visaBuddy.content.problemPoints.pages')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('visaBuddy.content.problemPoints.pagesDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-6 rounded-xl">
                <h4 className="font-display font-semibold text-accent mb-2">
                  {t('visaBuddy.content.problemPoints.updates')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('visaBuddy.content.problemPoints.updatesDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-6 rounded-xl">
                <h4 className="font-display font-semibold text-primary mb-2">
                  {t('visaBuddy.content.problemPoints.decisions')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('visaBuddy.content.problemPoints.decisionsDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Training Platform Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.training')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {t('visaBuddy.content.trainingDescription')}
            </p>

            {/* Jupyter Notebook Demonstration */}
            <div className="mb-8">
              <div className={`${CASE_STUDY_STYLES.glassCard} p-4 mb-6`}>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-2/3">
                    <img
                      src={Jupyter}
                      alt="Jupyter notebook training demonstration"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="md:w-1/3">
                    <h4 className="font-display font-semibold text-primary mb-3 text-lg">
                      {t('visaBuddy.content.jupyterTitle')}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t('visaBuddy.content.jupyterDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Platform Recognition */}
            <div className="enhanced-glass p-8 rounded-3xl mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    {t('visaBuddy.content.modalTitle')}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t('visaBuddy.content.modalDescription')}
                  </p>
                  <ul className="space-y-3">
                    {getTranslatedArray('visaBuddy.content.modalPoints').map((point, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br flex items-center justify-center mb-4">
                    <div className="text-center">
                      <img src={Modal_logo} alt="modal_logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* UX/UI Design Section - MOVED TO FIRST POSITION */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.design')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
              {t('visaBuddy.content.designDescription')}
            </p>
            
            {/* NOODLES */}
            <div className={`${CASE_STUDY_STYLES.glassCard} p-6 mb-8`}>
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                Starting oldschool
              </h3>
              <img 
                src={Noodles} 
                alt="noodles" 
                className="w-full h-auto rounded-lg" 
              />
            </div>

            {/* Design Evolution Carousel */}
            <div className="relative w-full  overflow-hidden rounded-2xl enhanced-glass">
              <div className="flex border-b border-border/20">
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors ${
                    activeBeforeAfterTab === "before"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => {
                    setActiveBeforeAfterTab("before");
                    setCurrentBeforeAfterSlide(0);
                  }}
                >
                  {t('visaBuddy.content.beforeAfter.lowFi')}
                </button>
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors ${
                    activeBeforeAfterTab === "after"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => {
                    setActiveBeforeAfterTab("after");
                    setCurrentBeforeAfterSlide(0);
                  }}
                >
                  {t('visaBuddy.content.beforeAfter.highFi')}
                </button>
              </div>
              <div className="relative h-[600px] w-full">
                {/* Low-Fidelity Images */}
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
                          alt={`Low-fidelity design ${index + 1}`}
                          className="max-h-[80%] max-w-[90%] object-contain rounded-xl shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* High-Fidelity Images */}
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
                          alt={`High-fidelity design ${index + 1}`}
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

            {/* Additional Design Process Content */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="enhanced-glass p-6 rounded-2xl">
                <h3 className="font-display font-semibold text-primary mb-3 text-lg">
                  {t('visaBuddy.content.designFeatures.chatTitle')}
                </h3>
                <p className="text-muted-foreground">
                  {t('visaBuddy.content.designFeatures.chatDescription')}
                </p>
              </div>
              <div className="enhanced-glass p-6 rounded-2xl">
                <h3 className="font-display font-semibold text-accent mb-3 text-lg">
                  {t('visaBuddy.content.designFeatures.mobileTitle')}
                </h3>
                <p className="text-muted-foreground">
                  {t('visaBuddy.content.designFeatures.mobileDescription')}
                </p>
              </div>
            </div>
          </div>

          {/* Backend Section with Images - MOVED TO SECOND POSITION */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.backend')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {t('visaBuddy.content.backendDescription')}
            </p>

            {/* Backend GIF Demonstration */}
            <div className="mb-8">
              <div className={`${CASE_STUDY_STYLES.glassCard} p-4 mb-6`}>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-2/3">
                    <img
                      src={Back}
                      alt="Backend model and API demonstration"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="md:w-1/3">
                    <h4 className="font-display font-semibold text-primary mb-3 text-lg">
                      {t('visaBuddy.content.backendDemoTitle')}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t('visaBuddy.content.backendDemoDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Tech Stack */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="enhanced-glass p-4 rounded-xl text-center">
                <img
                  src={Fast_api}
                  alt="FastAPI"
                  className="w-38 h-12 mb-2 m-auto"
                />
                <h4 className="font-display font-semibold text-primary">
                  {t('visaBuddy.content.techStack.fastapi')}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t('visaBuddy.content.techStack.fastapiDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-4 rounded-xl text-center">
                <img src={Chroma} alt="ChromaDB" className="w-14 m-auto" />
                <h4 className="font-display font-semibold text-accent">
                  {t('visaBuddy.content.techStack.chromadb')}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t('visaBuddy.content.techStack.chromadbDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-4 rounded-xl text-center">
                <img
                  src={Transformers}
                  alt="Transformers"
                  className="w-24 m-auto "
                />
                <h4 className="font-display font-semibold text-primary">
                  {t('visaBuddy.content.techStack.transformers')}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t('visaBuddy.content.techStack.transformersDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-4 rounded-xl text-center">
                <img src={Vectors} alt="Vectors" className="w-14 m-auto" />
                <h4 className="font-display font-semibold text-accent">
                  {t('visaBuddy.content.techStack.sentenceTransformers')}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t('visaBuddy.content.techStack.sentenceTransformersDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Frontend Section with Images - MOVED TO THIRD POSITION */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.frontend')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {t('visaBuddy.content.frontendDescription')}
            </p>

            {/* Frontend GIF Demonstration */}
            <div className="mb-8">
              <div className={`${CASE_STUDY_STYLES.glassCard} p-4 mb-6`}>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-2/3">
                    <img
                      src={Front}
                      alt="Frontend chat interface demonstration"
                      className="w-full h-auto rounded-md lg:rounded-lg"
                    />
                  </div>
                  <div className="md:w-1/3">
                    <h4 className="font-display font-semibold text-primary mb-3 text-lg">
                      {t('visaBuddy.content.frontendDemoTitle')}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t('visaBuddy.content.frontendDemoDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Frontend Tech Stack */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="enhanced-glass p-4 rounded-xl text-center">
                <img src={ReactLogo} alt="React" className="w-14 m-auto" />
                <h4 className="font-display font-semibold text-primary">
                  {t('visaBuddy.content.frontendTech.react')}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t('visaBuddy.content.frontendTech.reactDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-4 rounded-xl text-center">
                <img
                  src={Typescript}
                  alt="TypeScript"
                  className="w-14 mb-1 m-auto"
                />
                <h4 className="font-display font-semibold text-accent">
                  {t('visaBuddy.content.frontendTech.typescript')}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t('visaBuddy.content.frontendTech.typescriptDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-4 rounded-xl text-center">
                <img src={Tailwind} alt="Tailwind" className="w-14 h-14 m-auto" />
                <h4 className="font-display font-semibold text-primary">
                  {t('visaBuddy.content.frontendTech.tailwind')}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t('visaBuddy.content.frontendTech.tailwindDesc')}
                </p>
              </div>
              <div className="enhanced-glass p-4 rounded-xl text-center">
                <img
                  src={FramerMotion}
                  alt="Framer Motion"
                  className="w-14 h-14 m-auto"
                />
                <h4 className="font-display font-semibold text-accent">
                  {t('visaBuddy.content.frontendTech.framer')}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t('visaBuddy.content.frontendTech.framerDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Model Metrics Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.metrics')}
            </h2>

            <div className="space-y-12">
              {/* Training Metrics */}
              <div className="enhanced-glass p-8 rounded-3xl">
                <div className="text-center mb-6">
                  <h3 className="font-display font-semibold text-primary text-2xl mb-2">
                    {t('visaBuddy.content.metrics.trainingTitle')}
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {t('visaBuddy.content.metrics.trainingSubtitle')}
                  </p>
                </div>

                {/* Large Image */}
                <div className="mb-8">
                  <img
                    src={Metrics1}
                    alt="Training metrics showing loss and perplexity curves"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>

                {/* Explanation Below */}
                <div className="max-w-4xl mx-auto">
                  <p className="text-foreground text-lg mb-4">
                    {t('visaBuddy.content.metrics.trainingDescription')}
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="enhanced-glass p-4 rounded-xl">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                        <span className="font-medium">
                          {t('visaBuddy.content.metrics.trainingPoints.convergence')}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t('visaBuddy.content.metrics.trainingPoints.convergenceDesc')}
                      </p>
                    </div>
                    <div className="enhanced-glass p-4 rounded-xl">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-primary/80 rounded-full mr-2"></div>
                        <span className="font-medium">
                          {t('visaBuddy.content.metrics.trainingPoints.loss')}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t('visaBuddy.content.metrics.trainingPoints.lossDesc')}
                      </p>
                    </div>
                    <div className="enhanced-glass p-4 rounded-xl">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-primary/60 rounded-full mr-2"></div>
                        <span className="font-medium">
                          {t('visaBuddy.content.metrics.trainingPoints.optimized')}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t('visaBuddy.content.metrics.trainingPoints.optimizedDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RAG Evaluation Metrics */}
              <div className="enhanced-glass p-8 rounded-3xl">
                <div className="text-center mb-6">
                  <h3 className="font-display font-semibold text-accent text-2xl mb-2">
                    {t('visaBuddy.content.metrics.ragTitle')}
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {t('visaBuddy.content.metrics.ragSubtitle')}
                  </p>
                </div>

                {/* Large Image */}
                <div className="mb-8">
                  <img
                    src={Metrics2}
                    alt="RAG evaluation metrics showing retrieval accuracy and relevance scores"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>

                {/* Explanation Below */}
                <div className="max-w-4xl mx-auto">
                  <p className="text-foreground text-lg mb-4">
                    {t('visaBuddy.content.metrics.ragDescription')}
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="enhanced-glass p-4 rounded-xl">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
                        <span className="font-medium">
                          {t('visaBuddy.content.metrics.ragPoints.retrieval')}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t('visaBuddy.content.metrics.ragPoints.retrievalDesc')}
                      </p>
                    </div>
                    <div className="enhanced-glass p-4 rounded-xl">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-accent/80 rounded-full mr-2"></div>
                        <span className="font-medium">
                          {t('visaBuddy.content.metrics.ragPoints.relevance')}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t('visaBuddy.content.metrics.ragPoints.relevanceDesc')}
                      </p>
                    </div>
                    <div className="enhanced-glass p-4 rounded-xl">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-accent/60 rounded-full mr-2"></div>
                        <span className="font-medium">
                          {t('visaBuddy.content.metrics.ragPoints.sources')}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t('visaBuddy.content.metrics.ragPoints.sourcesDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('visaBuddy.sections.results')}
            </h2>
            <div className="space-y-6 mt-8">
              {getTranslatedArray('visaBuddy.content.results').map((result, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-foreground">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick note from myself to the reader */}
          <div>
            <h1>QUICK NOTE</h1>
            <p>I just want to say that this has been an amazing experience for me. I had the opportunity to apply, all together, the knowledge that I've been gathering during my years in the tech industry.</p>
            <p>The current project is not perfect or even extremely realistic and my findings looks weird (ok... I get it), and the metrics might seem unusual if applied to a real company or problem, but this is a great opportunity that I created for myself to showcase my skills. :)</p>

            <div>
              <p className="mt-10">x Nick</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Section */}
      <section className={CASE_STUDY_STYLES.nextProjectSection}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2
            className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            {t('visaBuddy.sections.nextProject')}
          </h2>
          <Link
            to="/case-study/photox"
            className={`block group transition-all duration-300 ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            <div
              className={`${CASE_STUDY_STYLES.glassCard} p-12 hover:scale-105 transition-all duration-500`}
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors leading-tight tracking-tighter">
                {t('visaBuddy.nextProject.title')}
              </h3>
              <p className="text-muted-foreground mb-8 text-xl font-body font-light">
                {t('visaBuddy.nextProject.description')}
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">
                  {t('visaBuddy.nextProject.cta')}
                </span>
                <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <span className="text-sm">→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Scroll to Top Button */}
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

export default VisaBuddy;