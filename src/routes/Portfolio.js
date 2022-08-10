import { createRef, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MyProject from '../components/MyProject';
import Nav from '../components/Nav';
import styles from '../css/Portfolio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClover } from '@fortawesome/free-solid-svg-icons';

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

  const tmp = useRef();
  const refs = Array.from({ length: projects.length }).map(() => createRef());
  const scrollRef = useRef();
  // const [deltaY, setDeltaY] = useState(0);
  const [curTop, setCurTop] = useState(0);
  const [curIndex, setCurIndex] = useState(0);

  // 스크롤 방향 확인
  const yWheelEvent = (e) => {
    // setDeltaY(e.deltaY);
  };

  useEffect(() => {
    console.log(tmp.current);
    const test = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = tmp.current; // 스크롤 위쪽 끝
      const pageHeight = window.innerHeight; // 화면 세로 길이

      // 아래로 스크롤
      if (deltaY > 0) {
        if (scrollTop < pageHeight) {
          refs[1].current.scrollIntoView({ block: 'center' });
          setCurIndex(1);
        } else {
          refs[2].current.scrollIntoView({ block: 'center' });
          setCurIndex(2);
        }
      }
      // 위로 스크롤
      else {
        if (scrollTop < pageHeight * 2) {
          refs[0].current.scrollIntoView({ block: 'center' });
          setCurIndex(0);
        } else {
          refs[1].current.scrollIntoView({ block: 'center' });
          setCurIndex(1);
        }
      }
    };

    tmp.current.addEventListener('wheel', test);
    return () => {
      tmp.current.removeEventListener('wheel', test);
    };
  }, [refs]);

  // const onScroll = (e) => {
  //   const scrollHeight = e.target.scrollHeight; // 전체 스크롤 높이
  //   const scrollTop = e.target.scrollTop; // 현재 스크롤 위치

  //   // 아래로 스크롤
  //   if (deltaY > 0) {
  //     if (curTop < scrollHeight / 3) {
  //       e.target.childNodes[1].scrollIntoView({ block: 'center' });
  //       setCurIndex(1);
  //     } else {
  //       e.target.childNodes[2].scrollIntoView();
  //       setCurIndex(2);
  //     }
  //   }
  //   // 위로 스크롤
  //   else {
  //     if (curTop >= scrollHeight / 3) {
  //       e.target.childNodes[1].scrollIntoView();
  //       setCurIndex(1);
  //     } else if (curTop <= scrollHeight / 4) {
  //       e.target.childNodes[0].scrollIntoView({ block: 'center' });
  //       setCurIndex(0);
  //     }
  //   }
  //   setCurTop(scrollTop);
  // };

  return (
    <motion.div
      key="portfolio"
      className={styles.portfolio}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      ref={tmp}
    >
      <Nav />

      {projects.map((project, i) => {
        return (
          <div
            className={styles.projects_wheel}
            key={`wheel${i}`}
            ref={refs[i]}
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
