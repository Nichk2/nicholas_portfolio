import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import me from "../Nicholas.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");

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
                {t("title")}
              </motion.h2>

              <div className="space-y-8 leading-relaxed">
                {/* Your existing paragraphs */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={CASE_STUDY_STYLES.typography.body}
                >
                  {t("paragraphs.intercultural.base")}{" "}
                  <span className="text-primary font-medium">
                    {t("paragraphs.intercultural.highlight")}
                  </span>
                  {t("paragraphs.intercultural.suffix")}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className={CASE_STUDY_STYLES.typography.body}
                >
                  {t("paragraphs.data.base")}{" "}
                  <span className="text-accent font-medium">
                    {t("paragraphs.data.highlight")}
                  </span>
                  {t("paragraphs.data.suffix")}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className={CASE_STUDY_STYLES.typography.body}
                >
                  {t("paragraphs.technical.base")}{" "}
                  <span className="text-primary font-medium">
                    {t("paragraphs.technical.tools.0")}
                  </span>
      
                  , {t("paragraphs.technical.coding")}{" "}
                  <span className="text-primary font-medium">
                    {t("paragraphs.technical.languages")}
                  </span>
                  {t("paragraphs.technical.suffix")}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className={CASE_STUDY_STYLES.typography.body}
                >
                  {t("paragraphs.approach.text")}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className={CASE_STUDY_STYLES.typography.body}
                >
                  {t("paragraphs.design.base")}{" "}
                  <span className="text-accent font-medium">
                    {t("paragraphs.design.highlight")}
                  </span>
                  {t("paragraphs.design.suffix")}
                </motion.p>
              </div>

              {/* Skills grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20"
              >
                {/* Design Skills */}
                <div className={`${CASE_STUDY_STYLES.glassCard} p-6 rounded-2xl`}>
                  <h3 className="font-display font-semibold text-primary mb-6 text-xl">
                    Design
                  </h3>
                  <ul className="text-muted-foreground space-y-3 font-body">
                    {[
                      "UI/UX Design",
                      "Visual Design",
                      "Prototyping",
                      "Design Systems",
                      "Front-End Knowledge"
                    ].map((skill, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            index % 2 === 0 ? "bg-primary" : "bg-accent"
                          }`}
                        ></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Research Skills */}
                <div className={`${CASE_STUDY_STYLES.glassCard} p-6 rounded-2xl`}>
                  <h3 className="font-display font-semibold text-accent mb-6 text-xl">
                    Research
                  </h3>
                  <ul className="text-muted-foreground space-y-3 font-body">
                    {[
                      "User Research",
                      "Usability Testing",
                      "Strategy",
                      "Data Analysis"
                    ].map((skill, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            index % 2 === 0 ? "bg-accent" : "bg-primary"
                          }`}
                        ></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AI Skills with Neon Stroke - Wider Box */}
                <div className="relative col-span-1 md:col-span-2"> {/* This makes it full width */}
                  <motion.div
                    className={`relative p-6 rounded-2xl ${CASE_STUDY_STYLES.glassCard}`}
                  >
                    {/* Neon Stroke Animation */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        padding: '2px',
                        background: 'linear-gradient(90deg, #00f2fe, #4facfe, #00f2fe)',
                        backgroundSize: '200% 100%',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                      animate={{
                        backgroundPosition: ['0% 0%', '200% 0%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    {/* Inner content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-accent"
                        >
                          <path
                            d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
                            fill="currentColor"
                            opacity="0.8"
                          ></path>
                          <path
                            d="M19 14L19.75 16.25L22 17L19.75 17.75L19 20L18.25 17.75L16 17L18.25 16.25L19 14Z"
                            fill="currentColor"
                            opacity="0.6"
                          ></path>
                          <path
                            d="M7 3L7.5 4.5L9 5L7.5 5.5L7 7L6.5 5.5L5 5L6.5 4.5L7 3Z"
                            fill="currentColor"
                            opacity="0.6"
                          ></path>
                        </svg>
                        <h3 className="font-display font-semibold text-accent text-xl">
                          AI
                        </h3>
                      </div>
                      
                      <ul className="text-muted-foreground space-y-3 font-body">
                        {[
                          "LoRA/QLoRA",
                          "Fine-Tuning and model adaptation",
                          "Retrieval-Augmented Generation (RAG)",
                          "Quantization",
                          "Agentic Workflows",
                          "LangChain and Python for AI development"
                        ].map((skill, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                index % 2 === 0 ? "bg-accent" : "bg-primary"
                              }`}
                            ></span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
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
                  {t("contact.button")}
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
              <div
                className={`w-full h-[700px] ${CASE_STUDY_STYLES.glassCard} rounded-3xl flex items-center justify-center overflow-hidden`}
              >
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
                {t("footer.copyright.base")}{" "}
                <span className="text-primary font-semibold">
                  {t("footer.copyright.name")}
                </span>
                .{t("footer.copyright.rights")}
              </p>
              <p className="mt-2">{t("footer.phone")}</p>
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