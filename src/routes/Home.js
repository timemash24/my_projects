import { Link } from 'react-router-dom';
import styles from '../css/Home.module.css';

function Home() {
  return (
    <div className={styles.background}>
      <section className={styles.home}>
        <h1 className={styles.title}>HOME</h1>
        <ul className={styles.menu}>
          <li>
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/about_me">ABOUT ME</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
