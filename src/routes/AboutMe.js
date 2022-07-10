import Nav from '../components/Nav';
import styles from '../css/AboutMe.module.css';

function AboutMe() {
  return (
    <div className={styles.info}>
      <Nav />
      <h1>TIMEMASH</h1>
      <ul>
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
      </ul>
    </div>
  );
}

export default AboutMe;
