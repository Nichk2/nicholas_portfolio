import { Link } from "react-router-dom";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
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
    title: "Plataforma P3M Redesign",
    subtitle: "Redesign of a Brazilian governmental mining information platform to improve business decisions and regional development",
    category: "WEB APP",
    year: "2023",
    client: "SGB - Serviço Geológico do Brasil",
    duration: "3 months",
    role: "UX/UI Designer",
    overview: "The P3M Platform is a Brazilian governmental tool that provides information and knowledge about the mining process to improve business decisions in the sector and promote regional development.",
    problem: "Our stakeholders wanted to implement several changes on the platform's design, especially from ideas that they managed to gather from other platforms with the same service. Those platforms provide those same services differently, however, with a greater level of usability (according with the stakeholders). Taking into account that context, they decided to change the platform adding some features trying to use the maximum as possible what was developed earlier, thus changing the design partially not totally.",
    goal: "We have decided to implement new elements and features to the platform but trying to respect great part of the design of P3M. In order to do so, we conducted research other platforms that have the same objective like SARIG from Australia 🇦🇺, Jazida from Brazil 🇧🇷 and SIGEOM from Canada 🇨🇦.",
    results: "According to the team responsible for requesting our work, many at the institution approved our design and felt a significant improvement in the user experience. Our redesign also facilitated the new implementations that are to come on the new platform."
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

          {/* Problem */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              The Problem
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {caseStudyData.problem}
            </p>
          </div>

          {/* Goal */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              The Goal
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-6`}>
              {caseStudyData.goal}
            </p>

            {/* First Goal - Original Screens */}
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6 mt-8`}>
              <img src={Goal_1} alt="Original P3M Platform Screens" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                Above are the screens of the older version of P3M. The first one demonstrates layers are presented to the user, and the second one shows cards that represent elements to choose so you can active the layer. The set of images below will show the changes applied after meetings with client and the team. The left image is the old version while the right one shows the new look.
              </p>
            </div>
          </div>

          {/* Second Goal - Layers Section Redesign */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">Layers Section Redesign</h3>
            
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
                  Before
                </button>
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors ${
                    activeTab === "after"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveTab("after")}
                >
                  After
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
              The image above shows the changes applied by our team during the project. We made an treeview at the Layers section, moved some features to it, and we built a better navigation flow at the top of the treeview. The menu that contains action icons at the right of the treeview did not receive changes due the client's orientation.
            </p>
            </div>
            
          </div>

          {/* Third Goal - Commodity Cards Redesign */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">Commodity Cards Redesign</h3>
            
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
                  Before
                </button>
                <button
                  className={`flex-1 py-4 font-display font-medium transition-colors ${
                    activeTab === "after"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveTab("after")}
                >
                  After
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
              The image above shows the changes applied on the elements cards. We made separated section and divided into "Principais Commodities" translated to english → "Main Commodities". We applied a lighter background, alterations on the cards design with addition of more colors for each commodity in order to increase more positive energy to the platform and externalize differences among the commodities.
            </p>
            </div>
            
          </div>

          {/* Fourth Goal - Menu Relocation */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">Menu Simplification</h3>
            
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6`}>
              <img src={Goal_4} alt="Menu Relocation Changes" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                Another basic change that is crucial to mention is the relocation the team did with some icons from the older bottom menu and add "Institucional" section for the user as the image above shows. In order to improve and facilitate the user's flow and decision making, the idea of turning the bottom menu simpler by relocating elements to the treeview caught the client's attention. LESS, sometimes, is a PLUS.
              </p>
            </div>
          </div>

          {/* Fifth Goal - New Dashboard Sections */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">New Dashboard Sections</h3>
            
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6`}>
              <img src={Goal_5} alt="New Dashboard Sections" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                Both of the images above shows a new addition we had the freedom to show to the client. They are sections with some dashboards and cards. The first image is a detailed screen of a specific element (Gold in this case) and the other is about a specific study of a region in Brazil. We chose to use cards and play with some formats to add more dynamism, and we used soft colors to maintain cleanness.
              </p>
            </div>
          </div>

          {/* Quick Search Redesign */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">Quick Search Redesign</h3>
            
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6 mb-4`}>
              <img src={Goal_5_1} alt="Quick Search Before" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                Another important alteration was the "Busca Rápida" - translated to english "Quick Search" - actions and design. While this one (the older) was a little bit disconnected with the platform according with the client, we worked on a new one in order to promote more connection with the platform. You can see in the next image.
              </p>
            </div>
            
            <div className={`w-full ${CASE_STUDY_STYLES.glassCard} p-6`}>
              <img src={Goal_5_2} alt="Quick Search After" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-4 text-center font-body">
                We added two buttons, one for general search - the first one from the left to right - and another button that will open the modal of the second image.
              </p>
            </div>
          </div>

          {/* Final Result */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h3 className="text-2xl font-display font-bold mb-6">Final Homepage Redesign</h3>
            
            <div className='w-full p-6'>
              <img src={Result} alt="Final Homepage Design" className="w-full rounded-lg" />
              <p className="text-muted-foreground mt-10 text-center font-body">
                The "Home" of the first version was limited to show only the cards of "Conhecimento Geocientífico"- translated to english "Geoscientific Knowledge" - this one was relocated for the small section called "Explorar mapa por categoria" - translated to english "Explore map by category" - the team thought that would be interesting to make a separated section and inserted "Principais Commodities" at the beginning, since the client wanted to highlight it for the user. The image above is the result of our work.
              </p>
            </div>
          </div>

          {/* Results */}
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              Results
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
                Research collaboration platform for hydrology studies
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

export default P3MPlatform;