import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../css/Transition.css';
import AboutMe from '../routes/AboutMe';
import Home from '../routes/Home';
import Portfolio from '../routes/Portfolio';

let currentPath = '';

function Transition() {
  const [page, setPage] = useState('');

  const routes = [
    { path: '/', name: 'home', order: 1 },
    { path: '/portfolio', name: 'portfolio', order: 2 },
    { path: '/about_me', name: 'about_me', order: 3 },
  ];

  let location = useLocation();

  // const getPage = (pathname) => {
  //   routes.forEach((route) => {
  //     if (pathname === route.path) {
  //       setPage(route.name);
  //     }
  //   });
  // };

  // if (currentPath !== location) {
  //   getPage(location.pathname);
  // }
  // currentPath = location;

  return (
    <div>
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="slide" timeout={600}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about_me" element={<AboutMe />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default Transition;
