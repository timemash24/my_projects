import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AboutMe from '../routes/AboutMe';
import Home from '../routes/Home';
import Portfolio from '../routes/Portfolio';
import './Transition.css';

function Transition() {
  const routes = [
    { path: '/', name: 'home', order: 1 },
    { path: '/portfolio', name: 'portfolio', order: 2 },
    { path: '/about_me', name: 'about_me', order: 3 },
  ];

  const home = <Home />;
  const portfolio = <Portfolio />;
  const aboutMe = <AboutMe />;

  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.pathname}
        classNames="page-slider"
        timeout={{ enter: 800, exit: 400 }}
      >
        <Routes>
          <Route exact path="/" element={home} />
          <Route path="/portfolio" element={portfolio} />
          <Route path="/about_me" element={aboutMe} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Transition;
