import Nav from '../components/Nav';
import MyProject from '../components/MyProject';

function Portfolio() {
  return (
    <div style={{ backgroundColor: 'lightblue' }}>
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
