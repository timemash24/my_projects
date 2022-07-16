import { motion } from 'framer-motion';
import MyProject from '../components/MyProject';
import Nav from '../components/Nav';
import styles from '../css/Portfolio.module.css';

function Portfolio() {
  const root = 'https://timemash24.github.io/';
  const projects = [
    {
      img: require('../img/img_momentum.png'),
      link: `${root}momentumJS/`,
      title: 'Personal Dashboard App',
      tags: ['javascript', 'html', 'css'],
      desc: 'Featuring inspiring photo, quote, weather and to-do list',
    },
    {
      img: require('../img/img_paint.png'),
      link: `${root}paintJS/`,
      title: 'Paint App',
      tags: ['javascript', 'html', 'css'],
      desc: 'Draw, paint, save',
    },
    {
      img: require('../img/img_movie.png'),
      link: `${root}movie_app_react/`,
      title: 'Movie App',
      tags: ['react', 'javascript', 'html', 'css'],
      desc: 'Introduce movies and sort by genres',
    },
  ];

  const transition = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const imageVariants = {
    exit: { y: '10%', opacity: 0, transition },
    enter: {
      y: '0%',
      opacity: 1,
      transition,
    },
  };

  const textVariants = {
    exit: { x: -100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 0.3, ...transition } },
  };

  return (
    <motion.div
      key="portfolio"
      className={styles.portfolio}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
    >
      <Nav />
      <div className={styles.portfolio_main}>
        <motion.h1
          variants={textVariants}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          MY TOY PROJECTS
        </motion.h1>
        <motion.div className={styles.projects}>
          {projects.map((project, i) => {
            return (
              <MyProject
                key={i}
                img={project.img}
                link={project.link}
                title={project.title}
                tags={project.tags}
                desc={project.desc}
                order={i}
              />
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Portfolio;
