import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import photox_thumbnail from '../Image/PHOTOX/MAPA.png';
import Hybras_logo from "../Image/HYBRAS/thumbnaill_hybras.png";
import MyHolyBooks_logo from '../Image/MyHolyBooks/thumbnaill.svg';
import AwesomeGames_logo from '../Image/AwesomeGames/thumbnaill_awesomegames.png';
import P3M_logo from '../Image/P3M/thumbnaill.png';

const Portfolio = () => {
  const { t } = useTranslation('portfolio');

  const projects = [
    {
      id: 1,
      slug: "photox",
      logo: photox_thumbnail,
      year: "2024"
    },
    {
      id: 2,
      slug: "myholybooks",
      logo: MyHolyBooks_logo,
      year: "2024"
    },
    {
      id: 3,
      slug: "hybras-collab",
      logo: Hybras_logo,
      year: "2023"
    },
    {
      id: 4,
      slug: "p3m-platform",
      logo: P3M_logo,
      year: "2023"
    },
    {
      id: 5,
      slug: "awesomegames",
      logo: AwesomeGames_logo,
      year: "2022"
    }
  ].map(project => ({
    ...project,
    ...t(`projects.${project.slug}`, { returnObjects: true })
  }));

  return (
    <section id="portfolio" className="py-32 bg-secondary/30 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-24 scroll-reveal">
          <h2 className="text-6xl md:text-8xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter">
            {t('header.title')}
          </h2>
          <p className="text-xl md:text-3xl mb-20 text-muted-foreground max-w-4xl font-body font-light leading-relaxed">
            {t('header.description.base')}{" "}
            <span className="text-primary font-medium">
              {t('header.description.highlight')}
            </span>{" "}
            {t('header.description.suffix')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <div key={project.id} className="scroll-reveal">
              <Link to={`/case-study/${project.slug}`} className="group block">
                <div className=" grid  mb-20 lg:grid-cols-2 lg:gap-20  items-center">
                  {/* Project Visual */}
                  <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <div className="w-full h-[500px] rounded-3xl transition-all duration-700 overflow-hidden relative group-hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/8 to-accent/8 rounded-3xl"></div>
                      {project.logo ? (
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                          <img 
                            src={project.logo} 
                            alt={`${project.title} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-muted-foreground text-xl font-body">
                            {t('ui.missingVisual', { project: project.title })}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} space-y-8`}>
                    <div className="flex items-center space-x-4 text-sm text-accent font-body font-medium tracking-widest uppercase">
                      <span>{project.year}</span>
                      <span className="w-1 h-1 bg-accent rounded-full"></span>
                      <span>{project.category}</span>
                    </div>
                    
                    <h3 className="text-5xl md:text-7xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-500 leading-tight tracking-tighter">
                      {project.title}
                    </h3>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-body">
                      {project.subtitle}
                    </p>
                    
                    <div className="flex items-center space-x-3 text-primary group-hover:translate-x-4 transition-all duration-500 mt-8">
                      <span className="font-body font-medium text-lg">{t('ui.explore')}</span>
                      <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <span className="text-sm">→</span>
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