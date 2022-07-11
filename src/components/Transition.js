import { AnimatePresence } from 'framer-motion';
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

  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about_me" element={<AboutMe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Transition;
