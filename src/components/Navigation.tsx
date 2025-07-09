import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoState, setLogoState] = useState<"collapsed" | "expanding" | "expanded">("collapsed");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation('navigation');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      if (scrolled && logoState === "collapsed") {
        setLogoState("expanding");
        setTimeout(() => setLogoState("expanded"), 300);
      } else if (!scrolled && logoState === "expanded") {
        setLogoState("expanding");
        setTimeout(() => setLogoState("collapsed"), 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoState]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguageMenuOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-nav border-b border-border/20" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-3xl font-display font-bold text-foreground hover:text-primary h-10 flex items-center min-w-[120px]"
              onClick={scrollTop}
            >
              <div className="relative h-full w-full overflow-hidden">
                <div className={`whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                  logoState === "collapsed" ? "opacity-100 translate-y-0" :
                  logoState === "expanding" ? "opacity-100 -translate-y-full" :
                  "opacity-0 -translate-y-full"
                }`}>
                  N.
                </div>
                <div className={`absolute top-0 left-0 whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                  logoState === "collapsed" ? "opacity-0 translate-y-full" :
                  logoState === "expanding" ? "opacity-100 translate-y-0" :
                  "opacity-100 translate-y-0"
                }`}>
                  Nicholas
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/aboutme"
                className={`transition-all duration-300 font-body font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                  location.pathname === "/aboutme" 
                    ? "text-primary after:w-full" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {t('links.about')}
              </Link>
          
              {location.pathname === "/" ? (
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-body font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {t('links.work')}
                </button>
              ) : (
                <Link
                  to="/#portfolio"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-body font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {t('links.work')}
                </Link>
              )}
              
              {location.pathname === "/" ? (
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-body font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {t('links.contact')}
                </button>
              ) : (
                <Link
                  to="/#contact"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-body font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {t('links.contact')}
                </Link>
              )}

              {/* Language Switcher */}
              <div className="relative">
                <motion.button
                  className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-all px-3 py-1 rounded-full"
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={t('buttons.language.ariaLabel')}
                >
                  <span className="font-body font-medium">
                    {i18n.language.toUpperCase()}
                  </span>
                  <motion.span
                    animate={{ rotate: languageMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {languageMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-28 bg-background rounded-lg shadow-lg overflow-hidden z-50 border border-border/20"
                    >
                      <motion.button
                        whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleLanguageChange('en')}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          i18n.language === 'en' ? 'text-primary font-medium' : 'text-muted-foreground'
                        }`}
                      >
                        {t('buttons.language.en')}
                      </motion.button>
                      <motion.button
                        whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleLanguageChange('pt')}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          i18n.language === 'pt' ? 'text-primary font-medium' : 'text-muted-foreground'
                        }`}
                      >
                        {t('buttons.language.pt')}
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop CTA + Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {location.pathname === "/" ? (
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hidden md:block bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 px-6 py-2 rounded-full font-body font-medium hover:scale-105"
                >
                  {t('buttons.getInTouch')}
                </button>
              ) : (
                <Link
                  to="/#contact"
                  className="hidden md:block bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 px-6 py-2 rounded-full font-body font-medium hover:scale-105"
                >
                  {t('buttons.getInTouch')}
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-foreground focus:outline-none"
                aria-label={t('buttons.menu')}>
                <div className="w-6 flex flex-col gap-1">
                  <span className={`h-0.5 w-full bg-foreground transition-all ${
                    mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}></span>
                  <span className={`h-0.5 w-full bg-foreground transition-all ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}></span>
                  <span className={`h-0.5 w-full bg-foreground transition-all ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="px-4 pb-4 pt-2 space-y-4 bg-background/95 backdrop-blur-sm">
            <Link
              to="/aboutme"
              onClick={closeMobileMenu}
              className={`block w-full text-left py-2 transition-all duration-300 font-body font-medium ${
                location.pathname === "/aboutme" 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {t('links.about')}
            </Link>
            
            {location.pathname === "/" ? (
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-all duration-300 font-body font-medium"
              >
                {t('links.work')}
              </button>
            ) : (
              <Link
                to="/#portfolio"
                onClick={closeMobileMenu}
                className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-all duration-300 font-body font-medium"
              >
                {t('links.work')}
              </Link>
            )}
            
            {location.pathname === "/" ? (
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-all duration-300 font-body font-medium"
              >
                {t('links.contact')}
              </button>
            ) : (
              <Link
                to="/#contact"
                onClick={closeMobileMenu}
                className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-all duration-300 font-body font-medium"
              >
                {t('links.contact')}
              </Link>
            )}

            {/* Mobile Language Switcher */}
            <div className="pt-2">
              <div className="flex gap-2">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleLanguageChange('en')}
                  className={`flex-1 py-2 text-sm rounded-md border transition-colors ${
                    i18n.language === 'en' 
                      ? 'bg-primary text-primary-foreground border-primary' 
                      : 'bg-transparent text-muted-foreground border-border'
                  }`}
                >
                  {t('buttons.language.en')}
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleLanguageChange('pt')}
                  className={`flex-1 py-2 text-sm rounded-md border transition-colors ${
                    i18n.language === 'pt' 
                      ? 'bg-primary text-primary-foreground border-primary' 
                      : 'bg-transparent text-muted-foreground border-border'
                  }`}
                >
                  {t('buttons.language.pt')}
                </motion.button>
              </div>
            </div>
            
            {location.pathname === "/" ? (
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 px-6 py-2 rounded-full font-body font-medium"
              >
                {t('buttons.getInTouch')}
              </button>
            ) : (
              <Link
                to="/#contact"
                onClick={closeMobileMenu}
                className="block w-full text-center bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 px-6 py-2 rounded-full font-body font-medium"
              >
                {t('buttons.getInTouch')}
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;