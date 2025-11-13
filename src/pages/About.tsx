import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import me from "../Nicholas.jpg";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('about');

  return (
    <div className={CASE_STUDY_STYLES.background}>
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Text content */}
            <div className="order-2 lg:order-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`${CASE_STUDY_STYLES.typography.mainTitle} mb-16`}
              >
                {t('title')}
              </motion.h2>

              <div className="space-y-8 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={CASE_STUDY_STYLES.typography.body}
                >
                  {t('paragraphs.intercultural.base')}{" "}
                  <span className="text-primary font-medium">
                    {t('paragraphs.intercultural.highlight')}
                  </span>
                  {t('paragraphs.intercultural.suffix')}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className={CASE_STUDY_STYLES.typography.body}
                >
                  {t('paragraphs.data.base')}{" "}
                  <span className="text-accent font-medium">
                    {t('paragraphs.data.highlight')}
                  </span>
                  {t('paragraphs.data.suffix')}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className={CASE_STUDY_STYLES.typography.body}
                >
                  {t('paragraphs.technical.base')}{" "}
                  <span className="text-primary font-medium">
                    {t('paragraphs.technical.tools.0')}
                  </span>
                  ,{" "}
                  <span className="text-primary font-medium">
                    {t('paragraphs.technical.tools.1')}
                  </span>
                  , {t('paragraphs.technical.coding')}{" "}
                  <span className="text-primary font-medium">
                    {t('paragraphs.technical.languages')}
                  </span>
                  {t('paragraphs.technical.suffix')}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className={CASE_STUDY_STYLES.typography.body}
                >
                  {t('paragraphs.approach.text')}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className={CASE_STUDY_STYLES.typography.body}
                >
                  {t('paragraphs.design.base')}{" "}
                  <span className="text-accent font-medium">
                    {t('paragraphs.design.highlight')}
                  </span>
                  {t('paragraphs.design.suffix')}
                </motion.p>
              </div>

              {/* Skills grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20"
              >
                <div className={`${CASE_STUDY_STYLES.glassCard} p-6 rounded-2xl`}>
                  <h3 className="font-display font-semibold text-primary mb-6 text-xl">
                    {t('skills.design.title')}
                  </h3>
                  <ul className="text-muted-foreground space-y-3 font-body">
                    {(t('skills.design.items', { returnObjects: true }) as string[]).map((skill, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <span className={`w-2 h-2 rounded-full ${index % 2 === 0 ? "bg-primary" : "bg-accent"}`}></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${CASE_STUDY_STYLES.glassCard} p-6 rounded-2xl`}>
                  <h3 className="font-display font-semibold text-accent mb-6 text-xl">
                    {t('skills.research.title')}
                  </h3>
                  <ul className="text-muted-foreground space-y-3 font-body">
                    {(t('skills.research.items', { returnObjects: true }) as string[]).map((skill, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <span className={`w-2 h-2 rounded-full ${index % 2 === 0 ? "bg-accent" : "bg-primary"}`}></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex gap-4 mt-12"
              >
                <a
                  href="mailto:your@email.com"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {t('contact.button')}
                </a>
              </motion.div>
            </div>

            {/* Image section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className={`w-full h-[700px] ${CASE_STUDY_STYLES.glassCard} rounded-3xl flex items-center justify-center overflow-hidden`}>
                <img
                  src={me}
                  alt="me"
                  className="w-[100%] object-cover rounded-3xl"
                />
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col">
              <p className="text-muted-foreground font-body text-lg">
                {t('footer.copyright.base')}{" "}
                <span className="text-primary font-semibold">{t('footer.copyright.name')}</span>.
                {t('footer.copyright.rights')}
              </p>
              <p className="mt-2">
                {t('footer.phone')}
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/Nichk2"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/nicholas-antunes-de-andrade/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;