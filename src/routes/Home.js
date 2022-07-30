import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from '../css/Home.module.css';

function Home() {
  const transition = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const textVariants = {
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 0.3, ...transition } },
    hover: { scale: 1.1, transition },
  };

  return (
    <motion.div
      key="home"
      className={styles.background}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
    >
      <img
        className={styles.background_img}
        src={require('../img/img_chain.png')}
        alt="home"
      />
      <section className={styles.home}>
        <div>
          <h1 className={styles.home_title}>HOME</h1>
        </div>
        <motion.ul
          className={styles.home_menu}
          key="home_menu"
          variants={textVariants}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <motion.li variants={textVariants} whileHover="hover">
            <Link to="/portfolio">PORTFOLIO</Link>
          </motion.li>
          <motion.li variants={textVariants} whileHover="hover">
            <Link to="/about_me">ABOUT ME</Link>
          </motion.li>
        </motion.ul>
      </section>
    </motion.div>
  );
}

export default Home;
