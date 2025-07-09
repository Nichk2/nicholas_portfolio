import { Github, Linkedin } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <footer className="bg-background py-20 border-t border-border/20 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
          {/* Copyright */}
          <div className="scroll-reveal">
            <p className="text-muted-foreground font-body text-lg">
              {t('copyright.base')} <span className="text-primary font-semibold">{t('copyright.name')}</span>.
              {t('copyright.rights')}
            </p>
            <p className="mt-2">
              {t('copyright.phone')}
            </p>
          </div>

          {/* Social links */}
          <div className="flex space-x-6 scroll-reveal">
            <a
              href="https://github.com/Nichk2"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label={t('social.github.ariaLabel')}
            >
              <Github className="w-6 h-6" />
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/nicholas-antunes-de-andrade/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label={t('social.linkedin.ariaLabel')}
            >
              <Linkedin className="w-6 h-6" />
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
            </a>
          </div>
        </div>

        {/* Branding */}
        <div className="mt-16 pt-8 border-t border-border/20 text-center scroll-reveal">
          <p className="text-muted-foreground font-body text-sm">
            {t('branding.text')} <span className="text-accent text-white">{t('branding.efficiency')}</span> {t('branding.and')} <span className="text-accent text-white">{t('branding.purpose')}</span> {t('branding.suffix')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;