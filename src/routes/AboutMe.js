import { motion, AnimatePresence } from 'framer-motion';
import Nav from '../components/Nav';
import styles from '../css/AboutMe.module.css';

function AboutMe() {
  const transition = {
    duration: 0.5,
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
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 0.3, ...transition } },
  };

  return (
    <motion.div
      key="about_me"
      className={styles.info}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
    >
      <Nav />
      <motion.h1
        key="about_me_title"
        variants={textVariants}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        TIMEMASH
      </motion.h1>
      <motion.ul
        key="about_me_info"
        variants={imageVariants}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        <li>
          <p>SKILLS</p>
          <span># JAVASCRIPT</span>
          <span># HTML</span>
          <span># CSS</span>
          <span># REACT</span>
        </li>
        <li>
          <a href="https://github.com/timemash24">MY GITHUB</a>
        </li>
        <li>
          <p>CONTACT</p>timemash24@gmail.com
        </li>
      </motion.ul>
    </motion.div>
  );
}

export default AboutMe;
