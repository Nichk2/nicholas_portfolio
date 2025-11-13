import { Link } from "react-router-dom";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
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
      <div className="w-full rounded-3xl overflow-hidden">
        <img 
          src={images[currentIndex]} 
          alt={`${altPrefix} ${currentIndex + 1}`} 
          className="w-full h-auto"
        />
      </div>

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
  const { t } = useTranslation('myholybooks');
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
          {t('myholybooks.finalProduct.webVersion')}
        </button>
        <button
          className={`py-3 px-6 font-display font-medium ${activeTab === 'mobile' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
          onClick={() => setActiveTab('mobile')}
        >
          {t('myholybooks.finalProduct.mobileVersion')}
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

const PrototypeTabs = ({ webImage, mobileImage }) => {
  const { t } = useTranslation('myholybooks');
  const [activeTab, setActiveTab] = useState('web');

  return (
    <div className="w-full">
      <div className="flex border-b border-border mb-6">
        <button
          className={`py-3 px-6 font-display font-medium ${activeTab === 'web' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
          onClick={() => setActiveTab('web')}
        >
          {t('myholybooks.finalProduct.webVersion')}
        </button>
        <button
          className={`py-3 px-6 font-display font-medium ${activeTab === 'mobile' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
          onClick={() => setActiveTab('mobile')}
        >
          {t('myholybooks.finalProduct.mobileVersion')}
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
  const { t } = useTranslation('myholybooks');
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

  const results = t('results.items', { returnObjects: true });
  const resultsArray = Array.isArray(results) ? results : [];

  const featureTitles = t('designProcess.ideate.featureTitles', { returnObjects: true });
  const featureDescriptions = t('designProcess.ideate.featureDescriptions', { returnObjects: true });
  const featureTitlesArray = Array.isArray(featureTitles) ? featureTitles : [];
  const featureDescriptionsArray = Array.isArray(featureDescriptions) ? featureDescriptions : [];

  return (
    <div className={CASE_STUDY_STYLES.background}>
      <nav className={`fixed top-0 left-0 right-0 z-50 ${CASE_STUDY_STYLES.navigation}`}>
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 font-body">
              <ChevronLeft className="w-5 h-5" />
              <span>{t('myholybooks.backToPortfolio')}</span>
            </Link>
            <Link to="/" className="text-3xl font-display font-bold text-foreground hover:text-primary transition-colors duration-300">
              Nicholas
            </Link>
            <div className="w-32"></div>
          </div>
        </div>
      </nav>

      <section className={CASE_STUDY_STYLES.heroSection}>
        <div className="max-w-5xl mx-auto px-8">
          <div className={`text-center ${CASE_STUDY_STYLES.scrollReveal} space-y-8`}>
            <span className={CASE_STUDY_STYLES.typography.category}>
              {t('myholybooks.category')}
            </span>
            <h1 className={CASE_STUDY_STYLES.typography.mainTitle}>
              {t('myholybooks.title')}
            </h1>
            <p className={CASE_STUDY_STYLES.typography.subtitle}>
              {t('myholybooks.subtitle')}
            </p>
          </div>

          <div className={`w-full flex items-center justify-center mt-16 mb-20 ${CASE_STUDY_STYLES.scrollReveal} p-12`}>
            <img 
              src={Logo} 
              alt="MyHolyBooks logo" 
              className="w-full max-w-md h-auto"
            />
          </div>

          <div className={`grid md:grid-cols-4 gap-8 text-center md:text-left ${CASE_STUDY_STYLES.scrollReveal}`}>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">{t('myholybooks.clientTitle')}</h3>
              <p className="text-muted-foreground font-body font-light">{t('myholybooks.client')}</p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">{t('myholybooks.yearTitle')}</h3>
              <p className="text-muted-foreground font-body font-light">{t('myholybooks.year')}</p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-primary mb-3 text-lg">{t('myholybooks.durationTitle')}</h3>
              <p className="text-muted-foreground font-body font-light">{t('myholybooks.duration')}</p>
            </div>
            <div className="enhanced-glass p-6 rounded-2xl">
              <h3 className="font-display font-semibold text-accent mb-3 text-lg">{t('myholybooks.roleTitle')}</h3>
              <p className="text-muted-foreground font-body font-light">{t('myholybooks.role')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={CASE_STUDY_STYLES.contentSection}>
        <div className="max-w-4xl mx-auto px-8 space-y-32">
          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>{t('Overview')}</h2>
            <p className={CASE_STUDY_STYLES.typography.body}>{t('myholybooks.overview')}</p>
          </div>

          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('myholybooks.challenge.title')}
            </h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
              {t('myholybooks.challenge.content')}
            </p>
            <p className={`${CASE_STUDY_STYLES.typography.body}`}>
              <span className={`${CASE_STUDY_STYLES.typography.body} text-cyan-200`}>
                {t('myholybooks.challenge.userInsight')}
              </span> 
              {t('myholybooks.challenge.userInsightText')}
            </p>
            <div className="my-8"></div>
            <p className={`${CASE_STUDY_STYLES.typography.body}`}>
              <span className={`${CASE_STUDY_STYLES.typography.body} text-cyan-200`}>
                {t('myholybooks.challenge.howMightWe')}
              </span> 
              {t('myholybooks.challenge.howMightWeText')}
            </p>
          </div>

          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>
              {t('myholybooks.solution')}
            </h2>
            <div className="w-full rounded-3xl overflow-hidden mt-8">
              <img 
                src={Websolution} 
                alt="MyHolyBooks solution" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>{t('myholybooks.designProcess.title')}</h2>
            
            <div className="w-full rounded-3xl overflow-hidden mb-16">
              <img 
                src={Process_img} 
                alt="Design process overview" 
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-20">
              {/* Empathize Phase */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                  {t('myholybooks.designProcess.empathize.title')}
                </h3>
                <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                  {t('myholybooks.designProcess.empathize.content')}
                </p>
                <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                  {t('myholybooks.designProcess.define.personaText')}
                </p>
                <ImageCarousel images={[Persona1, Persona2]} altPrefix="Persona" />
              </div>

              {/* Define Phase */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                  {t('myholybooks.designProcess.define.title')}
                </h3>
                <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                  {t('myholybooks.designProcess.define.content')}
                </p>
              </div>

              {/* Ideate Phase */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                  {t('myholybooks.designProcess.ideate.title')}
                </h3>
                <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                  {t('myholybooks.designProcess.ideate.content')}
                </p>
                
                <div className="flex flex-col gap-8">
                  <div className="enhanced-glass p-6 rounded-2xl">
                    <h4 className="font-display font-semibold text-lg mb-4">{t('myholybooks.designProcess.ideate.designExploration')}</h4>
                    <ImageCarousel 
                      images={[Sketch, Style, Color]} 
                      altPrefix="Design exploration" 
                    />
                    <div className="mt-4 text-sm text-muted-foreground">
                      {t('myholybooks.designProcess.ideate.designExplorationSub')}
                    </div>
                  </div>
                  
                  <div className="enhanced-glass p-6 rounded-2xl">
                    <h4 className="font-display font-semibold text-lg mb-4">{t('myholybooks.designProcess.ideate.featureExploration')}</h4>
                    <ImageCarousel 
                      images={[Group_members, Languages]} 
                      altPrefix="Feature exploration" 
                    />
                    <div className="mt-4 space-y-4">
                      {featureTitlesArray.map((title, idx) => (
                        <div key={idx} className="border-t border-border/50 pt-4">
                          <h5 className="font-display font-medium">{title}</h5>
                          <p className="text-muted-foreground text-sm">
                            {featureDescriptionsArray[idx]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Prototype Phase */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                  {t('myholybooks.designProcess.prototype.title')}
                </h3>
                <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                  {t('myholybooks.designProcess.prototype.content')}
                </p>
                <PrototypeTabs 
                  webImage={Web_lofi_hifi} 
                  mobileImage={Mobile_lofi_hifi} 
                />
              </div>

              {/* Test Phase */}
              <div className="border-l-2 border-border pl-12 relative enhanced-glass p-8 rounded-3xl">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">
                  {t('myholybooks.designProcess.test.title')}
                </h3>
                <p className={`${CASE_STUDY_STYLES.typography.body} mb-8`}>
                  {t('myholybooks.designProcess.test.content')}
                </p>
                <ImageCarousel images={[Comment, Folders, Books, Add_friend]} altPrefix="Test feature" />
              </div>
            </div>
          </div>

          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>{t('myholybooks.finalProduct.title')}</h2>
            <p className={`${CASE_STUDY_STYLES.typography.body} mb-12`}>
              {t('myholybooks.finalProduct.content')}
            </p>
            <FinalProductTabs />
          </div>

          <div className={CASE_STUDY_STYLES.scrollReveal}>
            <h2 className={CASE_STUDY_STYLES.typography.sectionTitle}>{t('myholybooks.results.title')}</h2>
            <div className="flex flex-col gap-8 mb-12">
              {resultsArray.length > 0 ? (
                resultsArray.map((result, index) => (
                  <div key={index} className="enhanced-glass p-8 rounded-2xl">
                    <p className="text-xl font-body font-medium text-foreground">{result}</p>
                  </div>
                ))
              ) : (
                <div className="enhanced-glass p-8 rounded-2xl">
                  <p className="text-xl font-body font-medium text-foreground">
                    {t('myholybooks.results.fallback')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={CASE_STUDY_STYLES.nextProjectSection}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className={`${CASE_STUDY_STYLES.typography.sectionTitle} ${CASE_STUDY_STYLES.scrollReveal}`}>
            {t('myholybooks.nextProject.title')}
          </h2>
          <Link 
            to="/case-study/p3m-platform" 
            className={`block group transition-all duration-300 ${CASE_STUDY_STYLES.scrollReveal}`}
          >
            <div className={`${CASE_STUDY_STYLES.glassCard} p-12 hover:scale-105 transition-all duration-500`}>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors leading-tight tracking-tighter">
                {t('myholybooks.nextProject.p3mPlatform')}
              </h3>
              <p className="text-muted-foreground mb-8 text-xl font-body font-light">
                {t('myholybooks.nextProject.description')}
              </p>
              <div className="flex items-center justify-center space-x-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-body font-medium text-lg">{t('myholybooks.nextProject.viewCaseStudy')}</span>
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
          className="fixed bottom-8 right-8 z-50 rounded-full w-14 h-14 p-0 glass-effect animate-fade-in group"
        >
          <ArrowUp className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
        </Button>
      )}
    </div>
  );
};

export default MyHolyBooks;