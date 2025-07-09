import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation('contact');

  return (
    <section id="contact" className="py-32 bg-card relative z-10">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <div className="scroll-reveal space-y-16">
          {/* Main heading */}
          <h2 className="text-7xl md:text-9xl font-display font-bold mb-16 leading-tight tracking-tighter">
            {t('heading.line1')}
            <br />
            <span className="text-primary">{t('heading.line2')}</span>
            <br />
            <span className="text-accent">{t('heading.line3')}</span>
          </h2>

          {/* Description */}
          <div className="scroll-reveal">
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-body font-light">
              {t('description.base')}{" "}
              <span className="text-primary font-medium">
                {t('description.highlight')}
              </span>{" "}
              {t('description.suffix')}
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-20 scroll-reveal">
            <a
              href={`mailto:${t('button.email')}`}
              className="inline-block bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-500 px-16 py-6 text-xl font-body font-semibold rounded-full hover:scale-105"
            >
              {t('button.text')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;