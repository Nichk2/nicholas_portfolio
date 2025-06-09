import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import CASE_STUDY_STYLES from "@/components/CaseStudyTemplate";
import me from "../Nicholas.jpg";

const About = () => {
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
                me.
              </motion.h2>

              <div className="space-y-8 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={CASE_STUDY_STYLES.typography.body}
                >
                  With a background in international studies and experience
                  studying abroad, I bring a deep understanding of{" "}
                  <span className="text-primary font-medium">
                    intercultural collaboration
                  </span>
                  . I communicate well with stakeholders and thrive in diverse,
                  cross-functional teams.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className={CASE_STUDY_STYLES.typography.body}
                >
                  I work comfortably with both{" "}
                  <span className="text-accent font-medium">
                    qualitative and quantitative data
                  </span>
                  , transforming insights into intuitive user experiences. I'm
                  also used to juggling multiple projects, which sharpens my
                  adaptability and time management skills.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className={CASE_STUDY_STYLES.typography.body}
                >
                  I continuously build my technical toolkit. My current stack
                  includes{" "}
                  <span className="text-primary font-medium">Figma</span>,{" "}
                  <span className="text-primary font-medium">Adobe XD</span>,
                  and a growing fluency in{" "}
                  <span className="text-primary font-medium">
                    HTML5, CSS3, JavaScript, and React
                  </span>
                  .
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className={CASE_STUDY_STYLES.typography.body}
                >
                  I approach every project with commitment, creativity, and a
                  results-driven mindset — always aiming to deliver outcomes
                  that create value for both users and businesses.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className={CASE_STUDY_STYLES.typography.body}
                >
                  I believe exceptional design should feel effortless — solving
                  complex problems while creating{" "}
                  <span className="text-accent font-medium">
                    genuinely delightful experiences
                  </span>
                  .
                </motion.p>
              </div>

              {/* Skills grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20"
              >
                <div
                  className={`${CASE_STUDY_STYLES.glassCard} p-6 rounded-2xl`}
                >
                  <h3 className="font-display font-semibold text-primary mb-6 text-xl">
                    Design
                  </h3>
                  <ul className="text-muted-foreground space-y-3 font-body">
                    {[
                      "UI/UX Design",
                      "Visual Design",
                      "Prototyping",
                      "Design Systems",
                      "FrontEnd Enthusiast",
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

                <div
                  className={`${CASE_STUDY_STYLES.glassCard} p-6 rounded-2xl`}
                >
                  <h3 className="font-display font-semibold text-accent mb-6 text-xl">
                    Research
                  </h3>
                  <ul className="text-muted-foreground space-y-3 font-body">
                    {[
                      "User Research",
                      "Usability Testing",
                      "Strategy",
                      "Analytics",
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
                  Contact Me
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
              © 2025 <span className="text-primary font-semibold">Nicholas Andrade</span>.
              All rights reserved.
            </p>
            <p className="mt-2">
              +1 (236) 858-5809
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
