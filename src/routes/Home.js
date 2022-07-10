import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ backgroundColor: 'gray' }}>
      <h1>HOME</h1>
      <ul>
        <li>
          <Link to="/portfolio">PORTFOLIO</Link>
        </li>
        <li>
          <Link to="/about_me">ABOUT ME</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
