import { motion } from 'framer-motion';
import { useState } from 'react';
import Nav from '../components/Nav';
import styles from '../css/AboutMe.module.css';
const chainImg = require('../img/img_chain2.png');
const profileImg = require('../img/img_profile.png');
const sunglassImg = require('../img/img_sunglasses.png');

function AboutMe() {
  const email = 'timemash24@gmail.com';
  const [toastMsg, setToastMsg] = useState(email);

  const onClick = () => {
    navigator.clipboard.writeText(email);
    setToastMsg('copied!');
    setTimeout(() => {
      setToastMsg(email);
    }, 1800);
  };

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

  const imgVariants = {
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
      <img className={styles.about_chain} src={chainImg} alt="about_chain" />
      <motion.img
        className={styles.about_profile}
        src={profileImg}
        alt="profile"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
      />
      <motion.img
        className={styles.about_sunglasses}
        src={sunglassImg}
        alt="sunglasses"
        variants={imgVariants}
        initial="exit"
        animate="enter"
        exit="exit"
        whileHover={{ y: '-10%' }}
      />
      <h1 key="about_title" className={styles.about_title}>
        SEOYEON KIM
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
            <span># REACT</span>
            <span># HTML</span>
            <span># CSS</span>
          </div>
        </li>
        <li>
          <p>CONTACT</p>
          <span onClick={onClick} className={styles.about_email}>
            {toastMsg}
          </span>
        </li>
        <li>
          <a href="https://github.com/timemash24" target="_blank">
            MY GITHUB
          </a>
        </li>
      </motion.ul>
    </motion.div>
  );
}

export default AboutMe;
