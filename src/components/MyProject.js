import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styles from '../css/Portfolio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function MyProject({ img, link, title, github, tags, desc }) {
  const transition = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
    delay: 0.1,
  };

  const imageVariants = {
    exit: { y: '10%', opacity: 0, transition },
    enter: {
      y: '0%',
      opacity: 1,
      transition,
    },
  };

  return (
    <motion.section
      key={title}
      className={styles.project}
      variants={imageVariants}
      initial="exit"
      exit="exit"
      whileInView="enter"
      viewport={{ amount: 0.8 }}
    >
      <a href={link} target="_blank">
        <img src={img} alt={title} />
      </a>
      <div className={styles.project_info}>
        <div className={styles.project_title}>
          <h3>{title}</h3>
          <a href={github} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <ul>
          {tags.map((tag) => {
            return <li key={tag}># {tag}</li>;
          })}
        </ul>
        <p>{desc}</p>
      </div>
    </motion.section>
  );
}

MyProject.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  desc: PropTypes.string.isRequired,
};

export default MyProject;
