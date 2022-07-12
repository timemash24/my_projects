import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import styles from '../css/AboutMe.module.css';

function AboutMe() {
  const transition = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const textVariants = {
    exit: { y: '20%', opacity: 0, transition },
    enter: {
      y: '0%',
      opacity: 1,
      transition,
    },
  };

  const glassesVariants = {
    exit: { x: 100, opacity: 0, scale: 0.25, transition },
    enter: {
      x: 0,
      opacity: 1,
      scale: 0.25,
      transition: { delay: 0.3, ...transition },
    },
  };

  return (
    <motion.div
      key="about"
      className={styles.about}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
    >
      <Nav />
      <img
        className={styles.about_chain}
        src={require('../img/img_chain2.png')}
        alt="about_chain"
      />
      <img
        className={styles.about_profile}
        src={require('../img/img_profile.png')}
        alt="profile"
      />
      <motion.img
        className={styles.about_sunglasses}
        src={require('../img/img_sunglasses.png')}
        alt="sunglasses"
        variants={glassesVariants}
        initial="exit"
        animate="enter"
        exit="exit"
      />
      <h1 key="about_title" className={styles.about_title}>
        TIMEMASH
      </h1>
      <motion.ul
        key="about_info"
        className={styles.about_details}
        variants={textVariants}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        <li>
          <p>SKILLS</p>
          <div className={styles.about_skills}>
            <span># JAVASCRIPT</span>
            <span># HTML</span>
            <span># CSS</span>
            <span># REACT</span>
          </div>
        </li>
        <li>
          <p>CONTACT</p>
          <span className={styles.about_email}>timemash24@gmail.com</span>
        </li>
        <li>
          <a href="https://github.com/timemash24">MY GITHUB</a>
        </li>
      </motion.ul>
    </motion.div>
  );
}

export default AboutMe;
