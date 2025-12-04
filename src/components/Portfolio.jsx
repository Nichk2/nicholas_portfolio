import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import photox_thumbnail from '../Image/PHOTOX/MAPA.png';
import VisaBuddy_logo from '../Image/VisaBuddy/open menu highfi.png';
import Hybras_logo from "../Image/HYBRAS/thumbnaill_hybras.png";
import MyHolyBooks_logo from '../Image/MyHolyBooks/thumbnaill.svg';
import AwesomeGames_logo from '../Image/AwesomeGames/thumbnaill_awesomegames.png';
import P3M_logo from '../Image/P3M/thumbnaill.png';

const Portfolio = () => {
  const { t } = useTranslation('portfolio');

  const projects = [
    {
      id: 1,
      slug: "visabuddy",
      logo: VisaBuddy_logo, 
      year: "2025"
    },
    {
      id: 2,
      slug: "photox",
      logo: photox_thumbnail,
      year: "2024"
    },
    {
      id: 3,
      slug: "myholybooks",
      logo: MyHolyBooks_logo,
      year: "2024"
    },
    {
      id: 4,
      slug: "hybras-collab",
      logo: Hybras_logo,
      year: "2023"
    },
    {
      id: 5,
      slug: "p3m-platform",
      logo: P3M_logo,
      year: "2023"
    },
    {
      id: 6,
      slug: "awesomegames",
      logo: AwesomeGames_logo,
      year: "2022"
    }
  ].map(project => {
    const translationData = t(`projects.${project.slug}`, { returnObjects: true });
    return {
      ...project,
      ...translationData,
      logo: project.logo // Ensure logo is preserved
    };
  });

  return (
    <section id="portfolio" className="py-16 md:py-24 lg:py-32 bg-secondary/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-20 lg:mb-24 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-foreground mb-6 md:mb-10 lg:mb-12 leading-tight tracking-tighter">
            {t('header.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-12 md:mb-16 lg:mb-20 text-muted-foreground max-w-4xl font-body font-light leading-relaxed">
            {t('header.description.base')}{" "}
            <span className="text-primary font-medium">
              {t('header.description.highlight')}
            </span>{" "}
            {t('header.description.suffix')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
          {projects.map((project, index) => (
            <div key={project.id} className="scroll-reveal">
              <Link to={`/case-study/${project.slug}`} className="group block">
                <div className="grid mb-12 md:mb-16 lg:mb-20 lg:grid-cols-2 lg:gap-12 xl:gap-20 items-center">
                  {/* Project Visual */}
                  <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} order-1`}>
                    <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl md:rounded-3xl transition-all duration-700 overflow-hidden relative group-hover:scale-[1.02] bg-gradient-to-r from-primary/8 to-accent/8">
                      {project.logo ? (
                        <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
                          <img 
                            src={project.logo} 
                            alt={`${project.title || project.slug} logo`}
                            className="max-w-[90%] max-h-[90%] w-auto h-auto rounded-sm object-contain"
                            style={{ display: 'block' }}
                            onError={(e) => {
                              console.error('Failed to load image:', project.logo, 'for project:', project.slug);
                              e.target.style.display = 'none';
                            }}
                            onLoad={(e) => {
                              e.target.style.opacity = '1';
                            }}
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <p className="text-muted-foreground text-base sm:text-lg md:text-xl font-body px-4">
                            {t('ui.missingVisual', { project: project.title || project.slug })}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} order-2 space-y-4 md:space-y-6 lg:space-y-8 mt-6 lg:mt-0`}>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-accent font-body font-medium tracking-widest uppercase">
                      <span>{project.year}</span>
                      <span className="w-1 h-1 bg-accent rounded-full"></span>
                      <span className="break-words">{project.category}</span>
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-500 leading-tight tracking-tighter">
                      {project.title}
                    </h3>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-body">
                      {project.subtitle}
                    </p>
                    
                    <div className="flex items-center space-x-2 sm:space-x-3 text-primary group-hover:translate-x-2 md:group-hover:translate-x-4 transition-all duration-500 mt-6 md:mt-8">
                      <span className="font-body font-medium text-base sm:text-lg">{t('ui.explore')}</span>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <span className="text-xs sm:text-sm">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;