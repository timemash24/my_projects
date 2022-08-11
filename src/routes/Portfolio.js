import { createRef, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MyProject from '../components/MyProject';
import Nav from '../components/Nav';
import styles from '../css/Portfolio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClover } from '@fortawesome/free-solid-svg-icons';
const chainImg = require('../img/img_chain3.png');

function Portfolio() {
  const root = 'https://timemash24.github.io/';
  const projects = [
    {
      img: require('../img/img_momentum.jpg'),
      link: `${root}momentumJS/`,
      title: 'Personal Dashboard App',
      github: 'https://github.com/timemash24/momentumJS',
      tags: ['javascript', 'html', 'css'],
      desc: 'Featuring inspiring photo, quote, weather and to-do list',
    },
    {
      img: require('../img/img_paint.png'),
      link: `${root}paintJS/`,
      title: 'Paint App',
      github: 'https://github.com/timemash24/paintJS',
      tags: ['javascript', 'html', 'css'],
      desc: 'Draw, paint, save',
    },
    {
      img: require('../img/img_movie.png'),
      link: `${root}movie_app_react/`,
      title: 'Movie App',
      github: 'https://github.com/timemash24/movie_app_react',
      tags: ['react', 'javascript', 'html', 'css'],
      desc: 'Introduce movies and sort by genres',
    },
  ];

  const scrollRef = useRef();
  const projectRefs = Array.from({ length: projects.length }).map(() =>
    createRef()
  );
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    // if (!scrollRef.current || !projectRefs) return;

    const onWheel = async (e) => {
      e.preventDefault();
      const { deltaY } = e; // 스크롤 방향 확인
      const { scrollTop } = scrollRef.current; // 스크롤 위쪽 끝
      const pageHeight = window.innerHeight; // 화면 세로 길이

      // 아래로 스크롤
      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          projectRefs[1].current?.scrollIntoView();
          setCurIndex(1);
        } else {
          projectRefs[2].current?.scrollIntoView();
          setCurIndex(2);
        }
      }
      // 위로 스크롤
      else {
        if (scrollTop < pageHeight * 2) {
          projectRefs[0].current?.scrollIntoView();
          setCurIndex(0);
        } else {
          projectRefs[1].current?.scrollIntoView();
          setCurIndex(1);
        }
      }
    };

    scrollRef.current?.addEventListener('wheel', onWheel);
    return () => {
      scrollRef.current?.removeEventListener('wheel', onWheel);
    };
  }, [scrollRef, projectRefs]);

  return (
    <motion.div
      key="portfolio"
      className={styles.portfolio}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      ref={scrollRef}
    >
      <motion.img
        className={styles.background_chain}
        src={chainImg}
        alt="background_chain"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        exit={{ opacity: 0 }}
      />
      <Nav />

      {projects.map((project, i) => {
        return (
          <div
            className={styles.project_container}
            key={`project${i}`}
            ref={projectRefs[i]}
          >
            <MyProject
              key={i}
              img={project.img}
              link={project.link}
              title={project.title}
              github={project.github}
              tags={project.tags}
              desc={project.desc}
            />
          </div>
        );
      })}

      <section className={styles.projects_index}>
        {projects.map((_, i) => {
          return (
            <span
              className={
                i === curIndex
                  ? `${styles.current_index}`
                  : `${styles.other_index}`
              }
              key={`pIndex${i}`}
            >
              <FontAwesomeIcon icon={faClover} />
            </span>
          );
        })}
      </section>
    </motion.div>
  );
}

export default Portfolio;
