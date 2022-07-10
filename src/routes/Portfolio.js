import Nav from '../components/Nav';
import MyProject from '../components/MyProject';
import styles from '../css/Portfolio.module.css';

function Portfolio() {
  return (
    <div className={styles.my_projects}>
      <Nav />
      <main>
        <h1>PORTFOLIO</h1>
        <section>
          <MyProject />
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
