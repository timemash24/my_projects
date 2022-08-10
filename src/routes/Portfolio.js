import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MyProject from '../components/MyProject';
import Nav from '../components/Nav';
import styles from '../css/Portfolio.module.css';

function Portfolio() {
  const root = 'https://timemash24.github.io/';
  const projects = [
    {
      img: require('../img/img_momentum.jpg'),
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

  const scrollRef = useRef();
  const [deltaY, setDeltaY] = useState(0);
  const [curTop, setCurTop] = useState(0);

  useEffect(() => {
    if (!scrollRef.current) return;
    window.addEventListener('wheel', yWheelEvent);
    return () => {
      window.removeEventListener('wheel', yWheelEvent);
    };
  }, []);

  const onScroll = (e) => {
    const scrollHeight = e.target.scrollHeight; // 전체 스크롤 높이
    const scrollTop = e.target.scrollTop; // 현재 스크롤 위치

    // 위로 스크롤
    if (deltaY > 0) {
      if (curTop < scrollHeight / 3) {
        e.target.childNodes[1].scrollIntoView({ block: 'center' });
      } else if (curTop < (scrollHeight / 3) * 2) {
        e.target.childNodes[2].scrollIntoView();
      }
    }
    // 아래로 스크롤
    else {
      if (curTop >= scrollHeight / 3) {
        e.target.childNodes[1].scrollIntoView();
      } else if (curTop < scrollHeight / 3 - 150) {
        e.target.childNodes[0].scrollIntoView({ block: 'center' });
      }
    }
    setCurTop(scrollTop);
  };

  // 스크롤 방향 확인
  const yWheelEvent = (e) => {
    setDeltaY(e.deltaY);
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
      <div className={styles.projects} onScroll={onScroll} ref={scrollRef}>
        {projects.map((project, i) => {
          return (
            <div key={`wheel${i}`}>
              <MyProject
                key={i}
                img={project.img}
                link={project.link}
                title={project.title}
                tags={project.tags}
                desc={project.desc}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Portfolio;
