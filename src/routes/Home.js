import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from '../css/Home.module.css';

function Home() {
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
      key="home"
      className={styles.background}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
    >
      <section className={styles.home}>
        <h1 className={styles.title}>HOME</h1>
        <ul className={styles.menu}>
          <motion.li
            key="home_portfolio"
            variants={textVariants}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <Link to="/portfolio">PORTFOLIO</Link>
          </motion.li>
          <motion.li
            key="home_about_me"
            variants={textVariants}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <Link to="/about_me">ABOUT ME</Link>
          </motion.li>
        </ul>
      </section>
    </motion.div>
  );
}

export default Home;
