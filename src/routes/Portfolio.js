import { motion, AnimatePresence } from 'framer-motion';
import Nav from '../components/Nav';
import MyProject from '../components/MyProject';
import styles from '../css/Portfolio.module.css';

function Portfolio() {
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
      key="portfolio"
      className={styles.my_projects}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
    >
      <Nav />
      <section>
        <motion.h1
          variants={textVariants}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          PORTFOLIO
        </motion.h1>
        <motion.section
          variants={imageVariants}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <MyProject />
        </motion.section>
      </section>
    </motion.div>
  );
}

export default Portfolio;
